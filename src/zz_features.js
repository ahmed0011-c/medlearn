/* ===== Site-wide features: progress tracking, continue, search, related topics, report a mistake ===== */
const FX=(function(){
const REPO="https://github.com/ahmed0011-c/medlearn",SITE="https://ahmed0011-c.github.io/medlearn/";
const PK="ml_secdone",LK="ml_last";
let SD={};try{SD=JSON.parse(LS.getItem(PK)||"{}")||{}}catch(e){SD={}}
let LAST=null;try{LAST=JSON.parse(LS.getItem(LK)||"null")}catch(e){LAST=null}
const BOOT_LAST=LAST;const BOOT_CARD=(location.hash.match(/card=([\w-]+)/)||[])[1];let RETF=null;
const saveSD=()=>LS.setItem(PK,JSON.stringify(SD));
const MOD=id=>COURSE.modules.find(m=>m.id==id);
const OK=id=>{const m=MOD(id);return !!(m&&m.built&&LESSONS[id])};
const BUILT=()=>COURSE.modules.filter(m=>OK(m.id));
const ESC=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const tpl=document.createElement("template");
const TXT=h=>{if(!h)return "";h=String(h).replace(/\[\[(\w+)(?:\|([^\]]+))?\]\]/g,(m,k,l)=>l||(GLOSSARY[k]?GLOSSARY[k].l:k));tpl.innerHTML=h.replace(/<(br|\/p|\/li|\/div|\/h\d|\/td|\/tr)[^>]*>/gi," $&");tpl.content.querySelectorAll("svg,style,script").forEach(x=>x.remove());return tpl.content.textContent.replace(/\s+/g," ").trim()};
const PLAIN=s=>TXT(s);
/* area and lecture of every subsection */
const AREAS=[],GROUPS=[];(function(){let a="🫘 Adrenal gland";COURSE.modules.forEach(m=>{if(m.area2)a=m.area2;let A=AREAS.find(x=>x.n==a);if(!A)AREAS.push(A={n:a,ids:[]});A.ids.push(m.id);m._area=a;const g=m.grp||"";let G=GROUPS.find(x=>x.g==g);if(!G)GROUPS.push(G={g,label:g||COURSE.lecture||"Lecture",ids:[]});G.ids.push(m.id)})})();
const LABEL=m=>`${m.n} ${m.title}`;
const cnt=ids=>{const b=ids.filter(OK);return [b.filter(i=>SD[i]).length,b.length]};
const barHTML=(d,n,cls)=>`<div class="fx-pb ${cls||""}" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${d}" aria-label="${d} of ${n} subsections done"><span class="fx-pbt"><i style="width:${n?100*d/n:0}%"></i></span><small>${d}/${n} done</small></div>`;
/* ---------- progress ---------- */
function setDone(id,v){if(v)SD[id]=new Date().toISOString().slice(0,10);else delete SD[id];saveSD();decorate();if(v){toast("✅ Subsection marked as done");try{confetti()}catch(e){}}}
function unitsOf(id){const L=LESSONS[id];return [...L.cards.map(c=>c.id),...L.cases.map(c=>c.id)]}
function doneBtn(id){const d=!!SD[id];return `<button class="fx-done ${d?"is-done":""}" data-fxdone="${id}" aria-pressed="${d}">${d?"✅ Done (tap to undo)":"☐ Mark this subsection as done"}</button>`}
function decorate(){const nav=$("nav");if(nav){
nav.querySelectorAll("a[data-m]").forEach(a=>{const d=!!SD[a.dataset.m];a.classList.toggle("fx-sd",d);let ck=a.querySelector(".fx-ck");if(d&&!ck){ck=document.createElement("span");ck.className="fx-ck";ck.textContent="✓";ck.setAttribute("aria-label","done");a.prepend(ck)}else if(!d&&ck)ck.remove()});
const lecs=[...nav.querySelectorAll(":scope > .lec")];GROUPS.forEach((G,i)=>{const el=lecs[i];if(!el)return;let b=el.nextElementSibling;if(!b||!b.classList.contains("fx-pb"))b=null;const [d,n]=cnt(G.ids);const h=barHTML(d,n,"fx-pbg");if(b)b.outerHTML=h;else el.insertAdjacentHTML("afterend",h)});
const ars=[...nav.querySelectorAll(":scope > .area2")];AREAS.forEach((A,i)=>{const el=ars[i];if(!el)return;let b=el.nextElementSibling;if(!b||!b.classList.contains("fx-pba"))b=null;const [d,n]=cnt(A.ids);const h=barHTML(d,n,"fx-pba");if(b)b.outerHTML=h;else el.insertAdjacentHTML("afterend",h)});
let top=nav.querySelector(".fx-navtools");if(!top){nav.querySelector(".sub").insertAdjacentHTML("afterend",`<div class="fx-navtools"><button class="fx-sbtn" data-fxsearch>🔍 Search everything <kbd>/</kbd></button><button class="fx-cont" data-fxcont hidden></button></div>`)}}
const sel=$("#modsel");if(sel)[...sel.options].forEach(o=>{const m=MOD(o.value);if(m)o.textContent=(SD[m.id]?"✅ ":"")+LAB(m)+m.title});
$$("[data-fxdone]").forEach(b=>{const d=!!SD[b.dataset.fxdone];b.classList.toggle("is-done",d);b.setAttribute("aria-pressed",d);b.textContent=d?"✅ Done (tap to undo)":"☐ Mark this subsection as done"});
const r=$("#fx-related");if(r)r.querySelectorAll("[data-fxgo]").forEach(a=>a.classList.toggle("fx-sd",!!SD[a.dataset.fxgo.split("|")[0]]));
updCont();const pp=$("#fx-progsheet .fx-body");if(pp&&$("#fx-progsheet").classList.contains("open"))pp.innerHTML=progressSheet()}
function progressSheet(){const [D,N]=cnt(COURSE.modules.map(m=>m.id));return `<p><b>All lectures:</b></p>${barHTML(D,N,"fx-pbtot")}`+AREAS.map(A=>{const [d,n]=cnt(A.ids);return `<h3>${ESC(A.n)}</h3>${barHTML(d,n,"fx-pba")}`+GROUPS.filter(G=>G.ids.some(i=>A.ids.includes(i))).map(G=>{const ids=G.ids.filter(i=>A.ids.includes(i)&&OK(i));const [d2,n2]=cnt(ids);return `<details class="fx-grp"><summary><span>${ESC(G.label)}</span>${barHTML(d2,n2,"fx-pbg")}</summary><ul>${ids.map(i=>{const m=MOD(i);return `<li><a href="#" data-fxgo="${i}" class="${SD[i]?"fx-sd":""}">${SD[i]?"✅":"⬜"} ${ESC(LABEL(m))}</a></li>`}).join("")}</ul></details>`}).join("")}).join("")}
/* ---------- continue where you left off ---------- */
let lastT=0;
function track(cardId){if(!OK(CUR))return;LAST={m:CUR,c:cardId,t:Date.now()};const now=Date.now();if(now-lastT>800){lastT=now;LS.setItem(LK,JSON.stringify(LAST))}else{clearTimeout(track._t);track._t=setTimeout(()=>LS.setItem(LK,JSON.stringify(LAST)),900)}}
function lastLabel(x){const m=MOD(x.m);if(!m)return "";const L=LESSONS[x.m];const i=L.cards.findIndex(c=>c.id==x.c);const part=i>=0?`step ${i+1}: ${PLAIN(L.cards[i].title)}`:x.c=="cases"||L.cases.some(k=>k.id==x.c)?"the cases":x.c=="flash"?"the flashcards":x.c=="final"?"the summary":"the start";return `${m.n} ${m.title}, ${part}`}
function resume(x){if(!x||!OK(x.m))return;openAt(x.m,x.c)}
function updCont(){const b=$("[data-fxcont]");if(!b)return;const x=BOOT_LAST&&OK(BOOT_LAST.m)?BOOT_LAST:null;b.hidden=!x;if(x)b.innerHTML=`▶ Continue where you left off<small>${ESC(lastLabel(x))}</small>`}
function banner(){const x=BOOT_LAST;if(!x||!OK(x.m)||!x.c||x.c=="intro")return;if(BOOT_CARD)return;const c=$("#content");if(!c||$("#fx-banner"))return;
c.insertAdjacentHTML("afterbegin",`<div id="fx-banner" class="fx-banner" role="status"><span>👋 Welcome back. Last time you were at <b>${ESC(lastLabel(x))}</b>.</span><span class="fx-bbtn"><button class="pri" data-fxcont>▶ Continue</button><button data-fxclose aria-label="Dismiss">✕</button></span></div>`)}
/* ---------- open a subsection at a given part ---------- */
function openAt(mod,part,term){closeAll();if(CUR!=mod||!$("#intro"))showModule(mod);setTimeout(()=>{let e=part&&document.getElementById(part);if(!e)e=$("#intro");if(!e)return;const jump=(el,off)=>scrollTo({top:Math.max(0,el.getBoundingClientRect().top+scrollY-off),behavior:"instant"});jump(e,70);e.classList.add("fx-flash");setTimeout(()=>e.classList.remove("fx-flash"),1800);
if(term){const t=e.querySelector(`.term[data-k="${term}"]`)||document.querySelector(`#content .term[data-k="${term}"]`);if(t){t.classList.add("fx-hit");jump(t,innerHeight/3);setTimeout(()=>t.classList.remove("fx-hit"),2600)}}},60)}
/* ---------- related topics (curated, checked by hand; both directions are shown) ---------- */
const REL=[
["p4a","t6c","Pituitary failure also switches off the thyroid: central hypothyroidism looks like the adult picture, but thyroid-stimulating hormone is low or normal"],
["p4b","t3a","Why thyroid-stimulating hormone alone misleads in pituitary failure: read free thyroxine too"],
["p4c","t6d","Thyroxine replacement in pituitary failure is dosed by free thyroxine, not by thyroid-stimulating hormone"],
["p4c","d2","Secondary adrenal insufficiency: replace cortisol first, before thyroxine"],
["p4b","d2","Low cortisol from a silent pituitary: the secondary and tertiary forms of adrenal insufficiency"],
["p4c","d9","Sick-day rules for hydrocortisone replacement"],
["p4a","m8","The hypothalamic-pituitary-adrenal axis that fails when the pituitary fails"],
["p4c","t6e","Two endocrine comas: pituitary coma and myxoedema coma share the rule steroids before thyroxine"],
["p4b","p3a","Growth hormone deficiency in adults and the growth hormone stimulation tests"],
["p4a","p2c","Large pituitary tumours are the commonest cause of pituitary failure"],
["p4a","p3e","Damage to the posterior pituitary or stalk adds diabetes insipidus"],
["p3b","p3a","Acromegaly is growth hormone excess: insulin-like growth factor 1 and growth hormone suppression make sense once the physiology is clear"],
["p3c","p3a","Somatostatin analogues and the growth hormone receptor blocker act on the growth hormone axis"],
["p3b","p2c","Somatotroph adenoma within the classification of pituitary tumours"],
["p3b","p2d","Pituitary magnetic resonance imaging and the hormone screen for a sellar mass"],
["p3c","p3b","From diagnosis to treatment targets"],
["p2e","p2c","Lactotroph adenoma within the classification of pituitary tumours"],
["p2e","t6c","Primary hypothyroidism can raise prolactin (thyrotropin-releasing hormone stimulates lactotrophs) and enlarge the pituitary"],
["p2e","p2a","Dopamine from the hypothalamus is the brake on prolactin"],
["p2b","p2a","Hypothalamus and pituitary: one functional unit joined by the portal vessels"],
["p2c","p2d","How pituitary tumours are imaged and screened"],
["p2c","d3","Corticotroph adenoma causes Cushing disease"],
["p2c","t1j","Thyrotroph adenoma: the rare central cause of hyperthyroidism"],
["p2d","d7","Two kinds of incidentaloma: pituitary and adrenal work-ups follow the same logic (does it secrete, is it dangerous)"],
["p3d","p3e","Vasopressin physiology underpins diabetes insipidus"],
["p3d","p3f","Vasopressin physiology underpins the syndrome of inappropriate antidiuretic hormone secretion"],
["p3e","p3f","Opposite water disorders: too little and too much vasopressin"],
["p3f","t6c","Hypothyroidism is a cause of low sodium to exclude before diagnosing inappropriate antidiuretic hormone secretion"],
["p3f","d2","Cortisol deficiency must be excluded before diagnosing inappropriate antidiuretic hormone secretion"],
["t5d","p2a","Thyrotropin-releasing hormone comes from the hypothalamus"],
["t5d","m8","Same feedback logic in the thyroid and adrenal axes"],
["t1j","t1a","Where the thyroid-stimulating hormone-secreting adenoma sits among the causes of thyrotoxicosis"],
["t1b","t1c","Graves orbitopathy is part of the same autoimmune disease"],
["t1b","t3b","Thyroid-stimulating hormone receptor antibodies confirm Graves disease"],
["t1d","t3c","Scintigraphy separates overactive gland from leaking gland"],
["t1e","t1b","The disease behind the treatment choices"],
["t1i","t6f","Thyroiditis can swing from leak (thyrotoxic) to empty (hypothyroid): the autoimmune and postpartum forms"],
["t1i","t3c","Low uptake on scintigraphy is the signature of thyroiditis"],
["t1g","t4d","Worked case: amiodarone-induced thyrotoxicosis"],
["t1g","t2a","Too much and too little iodine: the autoregulation story"],
["t1h","t6d","Thyroid hormone needs in pregnancy, from the hypothyroid side"],
["t2d","t3e","Ultrasound risk classes and fine-needle aspiration in detail"],
["t2d","t3d","Ultrasound basics for reading nodules"],
["t2d","t4a","Worked case: a thyroid nodule at 34"],
["t2f","t4b","Worked case: surgery, radioactive iodine and thyroglobulin follow-up"],
["t2f","t3b","Thyroglobulin and its antibodies as tumour markers"],
["t2g","d6","Multiple endocrine neoplasia type 2: medullary thyroid cancer travels with phaeochromocytoma"],
["t2g","t3b","Calcitonin as the medullary cancer marker"],
["t2c","t6b","Iodine deficiency and congenital hypothyroidism both damage the developing brain"],
["t6b","t4c","Worked case: severe hypothyroidism found late in a child"],
["t6a","t6f","Autoimmune thyroiditis is the commonest cause of hypothyroidism where iodine is sufficient"],
["t6f","d8","Autoimmune thyroiditis is a key part of the autoimmune polyglandular syndromes"],
["d8","d2","Autoimmune adrenalitis is the core of autoimmune polyglandular syndrome type 2"],
["d8","cbl5","Worked case: Schmidt syndrome (adrenal plus thyroid autoimmunity)"],
["cbl5","d2","The full lecture on adrenal insufficiency"],
["cbl5","t6f","The thyroid half of Schmidt syndrome"],
["d2","d9","Steroid withdrawal is the commonest cause of suppressed axis and adrenal crisis risk"],
["d3","d9","Cushing syndrome from steroid tablets is the commonest form"],
["d3","m8","The axis and its feedback explain the dexamethasone suppression tests"],
["d4","m4","Aldosterone comes from the zona glomerulosa"],
["d5","m5","Congenital adrenal hyperplasia is a block in the steroid pathway"],
["d6","m1","The medulla comes from neural crest"],
["d7","d3","A functioning incidentaloma can make cortisol"],
["d7","d4","A functioning incidentaloma can make aldosterone"],
["d7","d6","Always exclude phaeochromocytoma before touching an adrenal mass"],
["d9","m9","How glucocorticoids act and why the side effects follow"],
["m5","m4","Which enzyme sits in which zone"],
["m8","p2b","The corticotroph cells of the anterior pituitary"],
["t3a","t4e","Practise reading thyroid test patterns"],
["t5b","t2a","Iodine supply: what happens when it is missing"],
["t5c","t6e","Deiodinases explain the sick euthyroid pattern"]];
const RELMAP={};REL.forEach(([a,b,w])=>{(RELMAP[a]=RELMAP[a]||[]).push([b,w]);(RELMAP[b]=RELMAP[b]||[]).push([a,w])});
function relatedCard(id){const R=(RELMAP[id]||[]).filter(([b])=>OK(b));if(!R.length)return "";const m=MOD(id);
return `<div class="card fx-related" id="fx-related"><h2>🔗 Related topics</h2><p class="fx-sub">Sections that connect to ${ESC(m.title)}, most of them from other lectures. 💡 Linking topics helps them stick.</p><ul class="fx-rel">${R.map(([b,w])=>{const t=MOD(b);return `<li><a href="#" data-fxgo="${b}" class="${SD[b]?"fx-sd":""}"><span class="fx-ra">${ESC(t._area)}${t._area!=m._area?" · other area":""}</span><b>${ESC(LABEL(t))}</b><span class="fx-rw">${ESC(w)}</span></a></li>`}).join("")}</ul></div>`}
/* ---------- main section of each glossary term ---------- */
let TERMHOME=null;
function termHome(){if(TERMHOME)return TERMHOME;const sc={};BUILT().forEach(m=>{const L=LESSONS[m.id];const parts=[["intro",L.intro],...L.cards.map(c=>[c.id,c.html]),...L.cases.map(k=>[k.id,k.steps.map(s=>s.t).join(" ")])];parts.forEach(([pid,h],pi)=>{if(!h)return;String(h).replace(/\[\[(\w+)/g,(x,k)=>{const s=sc[k]=sc[k]||{};const e=s[m.id]=s[m.id]||{n:0,p:pid};e.n++;return x})})});
TERMHOME={};for(const k in sc){let best=null;for(const mid in sc[k]){if(!best||sc[k][mid].n>best.n)best={m:mid,...sc[k][mid]}}TERMHOME[k]=best}return TERMHOME}
/* ---------- search ---------- */
let IDX=null;
const NORM=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[-‐‑–—\/]/g," ");
/* abbreviations people type, mapped to the spelled-out words the site uses */
const ALIAS={tsh:"thyroid-stimulating hormone",acth:"adrenocorticotropic hormone",gh:"growth hormone",igf:"insulin-like growth factor",igf1:"insulin-like growth factor 1",adh:"antidiuretic hormone",avp:"vasopressin",siadh:"inappropriate antidiuretic hormone",di:"diabetes insipidus",t4:"thyroxine",ft4:"free thyroxine",t3:"triiodothyronine",ft3:"free triiodothyronine",trh:"thyrotropin-releasing hormone",crh:"corticotropin-releasing hormone",ghrh:"growth hormone-releasing hormone",gnrh:"gonadotropin-releasing hormone",prl:"prolactin",tg:"thyroglobulin",tpo:"thyroid peroxidase",trab:"receptor antibodies",fna:"fine-needle aspiration",fnab:"fine-needle aspiration",rai:"radioactive iodine",cah:"congenital adrenal hyperplasia",mri:"magnetic resonance imaging",ct:"computed tomography",pet:"positron emission tomography",men:"multiple endocrine neoplasia",men2:"multiple endocrine neoplasia type 2",mtc:"medullary thyroid",dtc:"differentiated thyroid cancer",ptc:"papillary thyroid",aps:"autoimmune polyglandular",dhea:"dehydroepiandrosterone",dheas:"dehydroepiandrosterone sulfate",hcg:"chorionic gonadotropin",cea:"carcinoembryonic antigen",lt4:"levothyroxine",ait:"amiodarone-induced thyrotoxicosis",hpa:"hypothalamic-pituitary-adrenal",ogtt:"oral glucose tolerance",itt:"insulin tolerance test",ddavp:"desmopressin",rhtsh:"recombinant human thyroid-stimulating hormone"};
function buildIdx(){IDX=[];BUILT().forEach(m=>{const L=LESSONS[m.id];const ctx=`${m.n} ${m.title}`;
IDX.push({k:"Section",m:m.id,p:"intro",title:ctx,ctx:m._area+" › "+(m.grp||COURSE.lecture),text:PLAIN([m.summary,L.intro,(L.goals||[]).join(" ")].join(" "))});
L.cards.forEach((c,i)=>IDX.push({k:"Step",m:m.id,p:c.id,title:PLAIN(c.title),ctx:`${ctx} › step ${i+1}`,text:PLAIN([c.html,(c.obj||[]).join(" "),(c.recap||[]).join(" "),(c.quiz||[]).map(q=>q.q+" "+q.e).join(" ")].join(" "))}));
L.cases.forEach(k=>IDX.push({k:"Case",m:m.id,p:k.id,title:PLAIN(k.title),ctx:`${ctx} › case`,text:PLAIN([...k.steps.map(s=>s.t+" "+(s.e||"")),...(k.take||[])].join(" "))}));
if(L.flash&&L.flash.length)IDX.push({k:"Flashcards",m:m.id,p:"flash",title:"Flashcards",ctx,text:PLAIN(L.flash.map(f=>f[0]+" "+f[1]).join(" · "))});
IDX.push({k:"For exams",m:m.id,p:"final",title:"For exams and summary",ctx,text:PLAIN([...(L.exam||[]),L.finalHtml||""].join(" "))})});
const H=termHome();for(const k in GLOSSARY){const g=GLOSSARY[k],h=H[k];if(!h||!OK(h.m))continue;IDX.push({k:"Glossary",m:h.m,p:h.p,term:k,title:PLAIN(g.l),ctx:"Main section: "+LABEL(MOD(h.m)),text:PLAIN(g.d+" Why it matters: "+g.w)})}
IDX.forEach(e=>{e.nt=NORM(e.title);e.nx=NORM(e.text)})}
function hl(s,ws){let out=ESC(s);ws.forEach(w=>{if(!w)return;const re=new RegExp("("+w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig");out=out.replace(/(<[^>]*>)|([^<]+)/g,(m,tag,txt)=>tag||txt.replace(re,"<mark>$1</mark>"))});return out}
function snippet(e,ws){const t=e.text,nt=e.nx;let pos=-1;for(const w of ws){const p=nt.indexOf(w);if(p>=0&&(pos<0||p<pos))pos=p}if(pos<0)return t.slice(0,150)+(t.length>150?"…":"");const a=Math.max(0,pos-60),b=Math.min(t.length,pos+120);return (a?"…":"")+t.slice(a,b)+(b<t.length?"…":"")}
function search(q,noAlias){if(!IDX)buildIdx();const raw=NORM(q).split(/\s+/).filter(w=>w.length>0);const hit=!noAlias&&raw.some(w=>ALIAS[w]);let ws=hit?raw.flatMap(w=>ALIAS[w]?NORM(ALIAS[w]).split(" "):[w]):raw;const exp=hit?raw.map(w=>ALIAS[w]||w).join(" "):"";if(!ws.length||(ws.length==1&&ws[0].length<2))return {ws,res:[]};const res=[];
for(const e of IDX){let sc=0,ok=true;for(const w of ws){const inT=e.nt.includes(w),inX=e.nx.includes(w);if(!inT&&!inX){ok=false;break}sc+=inT?(e.nt.startsWith(w)?14:9):0;if(inX){let n=0,p=-1;while((p=e.nx.indexOf(w,p+1))>=0&&n<8)n++;sc+=n}}
if(!ok)continue;const ph=ws.join(" ");if(e.k=="Glossary"&&e.nt==ph)sc+=30;else if(e.nt.startsWith(ph))sc+=12;if(e.k=="Section")sc+=3;if(e.k=="Glossary")sc+=2;if(e.m==CUR)sc+=1;res.push([sc,e])}
res.sort((a,b)=>b[0]-a[0]);const seen=new Set(),out=res.map(r=>r[1]).filter(e=>{if(e.k!="Glossary")return true;const k=e.nt;if(seen.has(k))return false;seen.add(k);return true});if(!out.length&&exp&&!noAlias)return search(q,true);return {ws,res:out.slice(0,40),total:out.length,exp}}
let sel=-1;
function openSearch(){closeAll();RETF=document.activeElement;let o=$("#fx-search");if(!o){document.body.insertAdjacentHTML("beforeend",`<div id="fx-search" class="fx-sheet" role="dialog" aria-modal="true" aria-label="Search MedLearn"><div class="fx-panel"><div class="fx-shead"><input id="fx-q" type="search" placeholder="Search all lectures, steps and glossary terms…" autocomplete="off" enterkeyhint="search" aria-label="Search" aria-controls="fx-res"><button class="fx-x" data-fxclose aria-label="Close search">✕</button></div><div id="fx-meta" class="fx-meta" aria-live="polite">Type at least 2 letters. Try <a href="#" data-fxtry="copeptin">copeptin</a>, <a href="#" data-fxtry="sick-day">sick-day</a> or <a href="#" data-fxtry="thyroglobulin antibodies">thyroglobulin antibodies</a>.</div><ul id="fx-res" class="fx-res" role="listbox"></ul></div></div>`);o=$("#fx-search");
const q=$("#fx-q");let t;q.oninput=()=>{clearTimeout(t);t=setTimeout(()=>runSearch(q.value),70)};
q.onkeydown=e=>{const items=$$("#fx-res li");if(e.key=="ArrowDown"||e.key=="ArrowUp"){e.preventDefault();if(!items.length)return;sel=(sel+(e.key=="ArrowDown"?1:-1)+items.length)%items.length;items.forEach((li,i)=>li.classList.toggle("sel",i==sel));items[sel].scrollIntoView({block:"nearest"})}else if(e.key=="Enter"){const it=items[sel<0?0:sel];if(it)it.querySelector("a").click()}};
o.addEventListener("click",e=>{if(e.target===o)closeAll()})}
o.classList.add("open");document.body.classList.add("fx-noscroll");const q=$("#fx-q");setTimeout(()=>{q.focus();q.select()},30);if(q.value)runSearch(q.value)}
function runSearch(v){sel=-1;const {ws,res,total,exp}=search(v);const ul=$("#fx-res"),meta=$("#fx-meta");
if(!ws.length||(ws.length==1&&ws[0].length<2)){ul.innerHTML="";meta.innerHTML="Type at least 2 letters.";return}
meta.textContent=(exp?`Showing results for “${exp}”. `:"")+(total?`${total} result${total==1?"":"s"}${total>40?" (showing the best 40)":""}. Use ↑ ↓ and Enter, or tap a result.`:"No results. Try a shorter word or the spelled-out name (for example “thyroid-stimulating hormone”).");
ul.innerHTML=res.map((e,i)=>`<li role="option"><a href="#" data-fxi="${i}"><span class="fx-kind k-${e.k.replace(/\s/g,"")}">${e.k}</span><b>${hl(e.title,ws)}</b><small>${ESC(e.ctx)}</small><span class="fx-snip">${hl(snippet(e,ws),ws)}</span></a></li>`).join("");
ul.querySelectorAll("[data-fxi]").forEach(a=>a.onclick=ev=>{ev.preventDefault();const e=res[+a.dataset.fxi];openAt(e.m,e.p,e.term)})}
/* ---------- report a mistake ---------- */
let lastSel={t:"",at:0,card:null};
document.addEventListener("selectionchange",()=>{const s=getSelection();const t=s?String(s).trim():"";if(!t)return;const n=s.anchorNode&&(s.anchorNode.nodeType==1?s.anchorNode:s.anchorNode.parentElement);const c=n&&n.closest&&n.closest("#content .card");if(c)lastSel={t,at:Date.now(),card:c.id}});
function reportURL(cardEl){const m=MOD(CUR),L=LESSONS[CUR];const cid=cardEl.id;const i=L.cards.findIndex(c=>c.id==cid);
const part=cid=="intro"?"Introduction":i>=0?`Step ${i+1}: ${PLAIN(L.cards[i].title)}`:cid=="cases"?"Clinical cases":cid=="flash"?"Flashcards":cid=="final"?"Summary and For exams":cid=="fx-related"?"Related topics":cid;
const url=`${SITE}#mod=${CUR}&card=${cid}`;const fresh=lastSel.t&&Date.now()-lastSel.at<120000&&lastSel.card==cid;let quote=fresh?lastSel.t.replace(/\s+/g," ").slice(0,600):"";
const title=`Mistake in ${m.n} ${PLAIN(m.title)} › ${part}`.slice(0,180);
const body=`**Section:** ${m.n} ${PLAIN(m.title)} (id \`${CUR}\`)\n**Part:** ${part} (id \`${cid}\`)\n**Page:** ${url}\n\n**Quoted text:**\n${quote?"> "+quote:"_(none selected: tip, select the wrong sentence before pressing the button)_"}\n\n**What looks wrong (my note):**\n\n\n**What it should say, and the source (lecture page or textbook) if I know it:**\n\n\n---\n_Sent with the MedLearn “Report a mistake” button._`;
return {href:`${REPO}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&labels=${encodeURIComponent("content mistake")}`,quote}}
function addReport(card){if(card.querySelector(":scope > .fx-rep"))return;card.insertAdjacentHTML("beforeend",`<button class="fx-rep" data-fxrep title="Opens a prefilled GitHub issue in a new tab. Select the wrong sentence first to quote it.">🚩 Report a mistake</button>`)}
/* ---------- overlays ---------- */
function openProgress(){closeAll();RETF=document.activeElement;let o=$("#fx-progsheet");if(!o){document.body.insertAdjacentHTML("beforeend",`<div id="fx-progsheet" class="fx-sheet" role="dialog" aria-modal="true" aria-label="My progress"><div class="fx-panel"><div class="fx-shead"><h2>📊 My progress</h2><button class="fx-x" data-fxclose aria-label="Close">✕</button></div><div class="fx-body"></div></div></div>`);o=$("#fx-progsheet");o.addEventListener("click",e=>{if(e.target===o)closeAll()})}
o.querySelector(".fx-body").innerHTML=(BOOT_LAST&&OK(BOOT_LAST.m)?`<button class="pri fx-cont2" data-fxcont>▶ Continue where you left off<small>${ESC(lastLabel(BOOT_LAST))}</small></button>`:"")+progressSheet();o.classList.add("open");document.body.classList.add("fx-noscroll");o.querySelector(".fx-x").focus()}
function closeAll(){const was=$$(".fx-sheet.open").length;$$(".fx-sheet.open").forEach(s=>s.classList.remove("open"));document.body.classList.remove("fx-noscroll");if(was&&RETF&&document.contains(RETF)&&RETF.focus)try{RETF.focus({preventScroll:true})}catch(e){}RETF=null}
/* ---------- delegated clicks ---------- */
document.addEventListener("click",e=>{const t=e.target.closest&&e.target.closest("[data-fxdone],[data-fxrep],[data-fxgo],[data-fxsearch],[data-fxcont],[data-fxclose],[data-fxprog],[data-fxtry],[data-fxterm]");if(!t)return;
if(t.dataset.fxdone){setDone(t.dataset.fxdone,!SD[t.dataset.fxdone]);return}
if(t.hasAttribute("data-fxrep")){const c=t.closest(".card");if(!c||!OK(CUR))return;const r=reportURL(c);window.open(r.href,"_blank","noopener");toast(r.quote?"🚩 Report opened, with your quote":"🚩 Report opened in a new tab");return}
e.preventDefault();
if(t.dataset.fxgo){const [m,p]=t.dataset.fxgo.split("|");$("#pop").style.display="none";openAt(m,p||"intro");return}
if(t.dataset.fxterm){const H=termHome()[t.dataset.fxterm];$("#pop").style.display="none";if(H)openAt(H.m,H.p,t.dataset.fxterm);return}
if(t.hasAttribute("data-fxsearch")){openSearch();return}
if(t.hasAttribute("data-fxprog")){openProgress();return}
if(t.dataset.fxtry){const q=$("#fx-q");q.value=t.dataset.fxtry;runSearch(q.value);q.focus();return}
if(t.hasAttribute("data-fxcont")){const b=$("#fx-banner");if(b)b.remove();resume(BOOT_LAST);return}
if(t.hasAttribute("data-fxclose")){const b=t.closest("#fx-banner");if(b){b.remove();return}closeAll()}});
/* glossary popover: add a link to the term's main section (runs after the popover is filled) */
document.addEventListener("click",e=>{const t=e.target.closest&&e.target.closest(".term");if(!t)return;const p=$("#pop");if(p.style.display!="block")return;const H=termHome()[t.dataset.k];if(!H||!OK(H.m)||p.querySelector(".fx-home"))return;
p.insertAdjacentHTML("beforeend",H.m==CUR?`<div class="fx-home">📍 Main section: this one</div>`:`<div class="fx-home"><a href="#" data-fxterm="${t.dataset.k}">📍 Main section: ${ESC(LABEL(MOD(H.m)))} →</a></div>`)});
document.addEventListener("keydown",e=>{const typing=/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)||document.activeElement.isContentEditable;
if(e.key=="/"&&!typing&&!e.ctrlKey&&!e.metaKey){e.preventDefault();openSearch()}else if((e.key=="k"||e.key=="K")&&(e.ctrlKey||e.metaKey)){e.preventDefault();openSearch()}else if(e.key=="Escape"&&$(".fx-sheet.open"))closeAll()});
/* ---------- hook into rendering ---------- */
const _render=render,_show=showModule;
render=function(){_render.apply(this,arguments);decorate()};
showModule=function(id){_show.apply(this,arguments);if(!OK(CUR)||CUR!=id&&!OK(id)){decorate();return}
if(!/solo=/.test(location.hash)&&history.replaceState){const dk=/dark/.test(location.hash)?"&dark":"";history.replaceState(null,"",location.pathname+location.search+"#mod="+CUR+dk)}const c=$("#content");const intro=$("#intro");if(intro&&!intro.querySelector(".fx-bar")){const h=intro.querySelector("h2");h.insertAdjacentHTML("afterend",`<div class="fx-bar">${doneBtn(CUR)}<span class="fx-steps"></span>${(RELMAP[CUR]||[]).some(([b])=>OK(b))?`<a href="#" class="fx-jump" onclick="go('fx-related');return false">🔗 Related topics</a>`:""}</div>`)}
const fin=$("#final");if(fin){fin.insertAdjacentHTML("beforebegin",relatedCard(CUR));const rb=[...fin.querySelectorAll("button")].find(b=>/Reset progress/.test(b.textContent));if(rb){rb.onclick=null;rb.removeAttribute("onclick");rb.addEventListener("click",()=>{if(confirm("Reset all progress? This clears steps, XP, subsection ticks and your last position.")){LS.removeItem(KEY);LS.removeItem(PK);LS.removeItem(LK);location.hash="";location.reload()}})}
fin.insertAdjacentHTML("beforeend",`<div class="fx-finish"><b>Finished this subsection?</b> ${doneBtn(CUR)}</div>`)}
const ins=$("#inside");if(ins&&$("#fx-related")&&!ins.querySelector(".fx-inrel")){const f=[...ins.querySelectorAll("a")].find(a=>/What I got/.test(a.textContent));f&&f.insertAdjacentHTML("beforebegin",`<a href="#" class="fx-inrel" onclick="go('fx-related');return false">🔗 Related topics</a>`)}
$$("#content > .card[id]").forEach(addReport);stepCount();
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)track(x.target.id)}),{rootMargin:"-40% 0px -50% 0px"});$$("#content > .card[id]").forEach(k=>io.observe(k));
decorate()};
function stepCount(){const s=$(".fx-steps");if(!s||!OK(CUR))return;const u=unitsOf(CUR),d=u.filter(x=>S.done[x]).length;s.textContent=`${d} of ${u.length} steps and cases finished`;
if(d==u.length&&u.length&&!SD[CUR])s.textContent+=" · all finished, tick it off? 💡"}
const _upd=updTop;updTop=function(){_upd.apply(this,arguments);stepCount()};
/* top bar buttons, deep links and the welcome-back banner */
window.addEventListener("DOMContentLoaded",()=>{const top=$(".top");if(top){const f=$("#focus");f.insertAdjacentHTML("beforebegin",`<button id="fx-sbtop" data-fxsearch title="Search (press /)" aria-label="Search">🔍<span class="fx-tl"> Search</span></button><button id="fx-pgtop" data-fxprog title="My progress" aria-label="My progress">📊<span class="fx-tl"> Progress</span></button>`)}
if(BOOT_CARD)setTimeout(()=>openAt(CUR,BOOT_CARD),120);else banner();decorate()});
return {SD,REL,RELMAP,search,termHome,reportURL,openSearch,openProgress,openAt,cnt,AREAS,GROUPS}})();
