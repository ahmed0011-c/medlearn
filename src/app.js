var LS=(function(){var m={};try{var t="__t";window.localStorage.setItem(t,"1");window.localStorage.removeItem(t);return window.localStorage}catch(e){return{getItem:function(k){return k in m?m[k]:null},setItem:function(k,v){m[k]=String(v)},removeItem:function(k){delete m[k]}}}})();
/* ===== state ===== */
const KEY="medlearn_v1";
const LESSONS={m5:M5};let L=M5,CUR="m5";
let S=JSON.parse(LS.getItem(KEY)||"{}");S.done=S.done||{};S.xp=S.xp||0;S.days=S.days||[];S.ans=S.ans||{};
const today=new Date().toISOString().slice(0,10);if(!S.days.includes(today))S.days.push(today);
function save(){LS.setItem(KEY,JSON.stringify(S));updTop()}
function streak(){let n=0,d=new Date();while(S.days.includes(d.toISOString().slice(0,10))){n++;d.setDate(d.getDate()-1)}return n}
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function esc(s){return s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
/* term markup [[key]] or [[key|label]] */
function T(html){return html.replace(/\[\[(\w+)(?:\|([^\]]+))?\]\]/g,(m,k,l)=>{const g=GLOSSARY[k];if(!g){console.warn("missing term",k);return l||k}
return `<span class="term t-${g.c}" data-k="${k}" tabindex="0">${l||g.l}</span>${g.k&&!l?`<span class="code">${g.k}</span>`:""}`})}
const UNITS=()=>[...L.cards.map(c=>c.id),...L.cases.map(c=>c.id),...(L.match?["match"]:[])];
function updTop(){const u=UNITS(),d=u.filter(x=>S.done[x]).length;$("#bar i").style.width=(100*d/u.length)+"%";
$("#prog").textContent=`${d}/${u.length} steps`;$("#xp").textContent=`⭐ ${S.xp} XP`;$("#streak").textContent=`🔥 ${streak()} day streak`;
L.cards.forEach(c=>{const b=$("#badge-"+c.id);if(b)b.textContent=S.done[c.id]?"✅ done":""});
$$(".goals li").forEach((li,i)=>{const c=L.cards.find(c=>c.goal===i);li.classList.toggle("got",!!(c&&S.done[c.id]))});renderSummary()}
function award(x,msg){S.xp+=x;save();toast(msg||`+${x} XP`)}
function complete(id,x,msg){if(S.done[id])return;S.done[id]=1;award(x,msg);confetti()}
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("show"),1800)}
function confetti(){const c=$("#confetti"),x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;
const P=[...Array(140)].map(()=>({x:innerWidth/2,y:innerHeight/2,vx:(Math.random()-.5)*14,vy:Math.random()*-14-3,c:`hsl(${Math.random()*360},85%,60%)`,s:4+Math.random()*5}));let f=0;
(function a(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.45;x.fillStyle=p.c;x.fillRect(p.x,p.y,p.s,p.s)});if(++f<90)requestAnimationFrame(a);else x.clearRect(0,0,c.width,c.height)})()}
/* ===== popover ===== */
document.addEventListener("click",e=>{const t=e.target.closest(".term");const p=$("#pop");
if(!t){if(!e.target.closest("#pop"))p.style.display="none";return}
const g=GLOSSARY[t.dataset.k];p.innerHTML=`<b class="t-${g.c}">${g.l}${g.k?` <span class="code">${g.k}</span>`:""}</b>${g.d}<div class="why">⚡ Why it matters: ${g.w}</div><div style="font-size:12px;color:var(--mute);margin-top:6px">${CATS[g.c]}</div>`;
p.style.display="block";const r=t.getBoundingClientRect();let L=r.left+scrollX;L=Math.min(L,scrollX+innerWidth-360);p.style.left=Math.max(8,L)+"px";p.style.top=(r.bottom+scrollY+8)+"px"});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.classList.contains("term"))e.target.click();if(e.key==="Escape")$("#pop").style.display="none"});
/* ===== quiz ===== */
function quizHTML(id,qs){return `<div class="quiz"><b>⚡ Quick check</b>${qs.map((q,i)=>`<div class="q">${i+1}. ${q.q}</div>${q.o.map((o,j)=>`<button class="opt" data-q="${id}-${i}" data-j="${j}">${o}</button>`).join("")}<div class="fb" id="fb-${id}-${i}" hidden></div>`).join("")}</div>`}
function bindQuiz(root,id,qs,onAll){root.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{const [cid,i]=b.dataset.q.split(/-(?=\d+$)/);const q=qs[+i],j=+b.dataset.j;
const grp=root.querySelectorAll(`[data-q="${b.dataset.q}"]`);const fb=root.querySelector(`#fb-${b.dataset.q}`);
if(j===q.a){grp.forEach(x=>x.disabled=true);b.classList.add("right");fb.innerHTML="✅ <b>Correct!</b> "+q.e;if(!S.ans[b.dataset.q]){S.ans[b.dataset.q]=1;award(10)}}
else{b.classList.add("wrong");fb.innerHTML="❌ Not quite – try again. Hint: "+q.e.split(".")[0]+"."}
fb.hidden=false;const all=qs.every((q,k)=>root.querySelector(`[data-q="${id}-${k}"].right`));if(all)onAll()})}
/* ===== widgets ===== */
const W={};
W.nucleus=el=>{const s=34,w=s*Math.sqrt(3);const hex=(cx,cy)=>[-90,-30,30,90,150,210].map(a=>[cx+s*Math.cos(a*Math.PI/180),cy+s*Math.sin(a*Math.PI/180)]);
const A=hex(90,170),B=hex(90+w,170),C=hex(90+1.5*w,170-1.5*s);const ex=C[1][0],ey=(C[1][1]+C[2][1])/2,a=.688*s,R=.851*s,pc=[ex+a,ey];
const pa=t=>[pc[0]+R*Math.cos(t*Math.PI/180),pc[1]-R*Math.sin(t*Math.PI/180)];const D=[pa(144),pa(216),pa(288),pa(0),pa(72)];
const N={1:A[0],2:A[5],3:A[4],4:A[3],5:A[2],10:A[1],6:B[3],7:B[2],8:B[1],9:B[0],11:C[5],12:C[0],13:C[1],14:C[2],15:D[2],16:D[3],17:D[4]};
N[18]=[N[13][0],N[13][1]-s];N[19]=[N[10][0],N[10][1]-s];N[20]=[N[17][0]+s*.87,N[17][1]-s*.5];N[21]=[N[20][0],N[20][1]-s];
N[22]=[N[20][0]+s*.87,N[20][1]+s*.5];N[23]=[N[22][0]+s*.87,N[22][1]-s*.5];N[24]=[N[23][0]+s*.87,N[23][1]+s*.5];N[25]=[N[24][0]+s*.87,N[24][1]-s*.5];N[26]=[N[25][0]+s*.87,N[25][1]+s*.5];N[27]=[N[25][0],N[25][1]-s];
const poly=(p,col)=>`<polygon points="${p.map(q=>q.join(",")).join(" ")}" fill="${col}" fill-opacity=".13" stroke="#333" stroke-width="2.2"/>`;
const ln=(i,j,id)=>`<line class="${id||""}" x1="${N[i][0]}" y1="${N[i][1]}" x2="${N[j][0]}" y2="${N[j][1]}" stroke="#333" stroke-width="2.2"/>`;
const ctr=p=>[p.reduce((a,q)=>a+q[0],0)/p.length,p.reduce((a,q)=>a+q[1],0)/p.length];
let svg=`<svg viewBox="0 0 520 260" style="width:100%;max-width:620px">`+poly(A,"#2f6fdb")+poly(B,"#1f9d55")+poly(C,"#d9730d")+poly(D,"#c62828");
[[A,"A"],[B,"B"],[C,"C"],[D,"D"]].forEach(([p,l])=>{const c=ctr(p);svg+=`<text x="${c[0]}" y="${c[1]+7}" font-size="20" font-weight="700" text-anchor="middle" fill="#555">${l}</text>`});
svg+=`<circle class="g18" cx="${ctr(A)[0]}" cy="${ctr(A)[1]}" r="${s*.55}" fill="none" stroke="#c62828" stroke-width="2" stroke-dasharray="4 3" opacity="0"/>`;
svg+=`<g class="g19">${ln(10,19)}</g><g>${ln(13,18)}</g><g class="g21">${ln(17,20)}${ln(20,21)}</g><g class="g27">${ln(20,22)}${ln(22,23)}${ln(23,24)}${ln(24,25)}${ln(25,26)}${ln(25,27)}</g>`;
for(const k in N){const g=k==19?"g19":(k==20||k==21)?"g21":k>21?"g27":"";svg+=`<g class="${g}"><circle cx="${N[k][0]}" cy="${N[k][1]}" r="9" fill="#fff" stroke="#888"/><text x="${N[k][0]}" y="${N[k][1]+4}" font-size="10" text-anchor="middle" fill="#111">${k}</text></g>`}
svg+=`<text id="nucl-lab" x="10" y="250" font-size="15" font-weight="700" fill="#333"></text></svg>`;
el.innerHTML=`<div class="ctrl">${[["27","Cholesterol (27)"],["21","Cortisol, aldosterone, progesterone (21)"],["19","Androgens (19)"],["18","Oestrogens (18)"]].map(([k,l])=>`<button data-c="${k}">${l}</button>`).join("")}</div><figure>${svg}<figcaption>Steroid nucleus drawn in code (accurate ring layout and carbon numbering). Ring A = blue, B = green, C = orange, D = red (five carbons). Toggle the carbon classes.</figcaption></figure>`;
const set=c=>{el.querySelectorAll("button").forEach(b=>b.classList.toggle("on",b.dataset.c==c));const show=(cls,v)=>el.querySelectorAll("."+cls).forEach(x=>x.style.opacity=v?1:.08);
show("g27",c=="27");show("g21",c=="27"||c=="21");show("g19",c!="18");el.querySelector(".g18").style.opacity=c=="18"?1:0;
el.querySelector("#nucl-lab").textContent={27:"Cholesterol: full side chain on carbon 17 (carbons 20–27)",21:"Side chain cut to 2 carbons (20, 21): pregnenolone and all corticoids",19:"Carbons 20–21 removed by 17,20-lyase: androgens",18:"Aromatase removes carbon 19; ring A becomes aromatic (dashed circle)"}[c]};
el.querySelectorAll("button").forEach(b=>b.onclick=()=>set(b.dataset.c));set("27")};

W.cell=el=>{el.innerHTML=`<figure><svg viewBox="0 0 640 330" style="width:100%">
<rect x="10" y="10" width="620" height="310" rx="60" fill="#fff6e8" stroke="#d9730d" stroke-width="3"/>
<path d="M260 10 q30 45 60 0" fill="#e8f0ff" stroke="#c62828" stroke-width="5" stroke-dasharray="3 3"/>
${[230,265,300,345].map((x,i)=>`<circle cx="${x}" cy="${i%2?-2:2}" r="7" fill="#7b3fc4" transform="translate(0,${i==1||i==2?30:6})"/>`).join("")}
<circle cx="320" cy="180" r="48" fill="#c9b8e8" stroke="#6a4fa0" stroke-width="2"/><text x="320" y="185" text-anchor="middle" font-size="13">nucleus</text>
<circle cx="290" cy="85" r="20" fill="#f4b6b6" stroke="#a33"/><text x="290" y="89" text-anchor="middle" font-size="10">lysosome</text>
${[[90,90],[140,250],[470,90],[520,240],[200,150]].map(([x,y])=>`<g><ellipse cx="${x}" cy="${y}" rx="38" ry="20" fill="#f7c7d6" stroke="#b3476d" stroke-width="2"/>${[-20,-8,4,16].map(d=>`<circle cx="${x+d}" cy="${y+(d%8?3:-3)}" r="5" fill="none" stroke="#b3476d"/>`).join("")}</g>`).join("")}
${[[420,170],[450,280],[110,170],[380,60],[560,160],[230,290],[60,250],[600,90]].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="${12+i%3*4}" fill="#fffbe0" stroke="#c9a400"/>`).join("")}
<path d="M380 230 q30 -20 60 0 t60 0 M370 250 q30 -20 60 0 t60 0 M160 210 q20 -15 40 0 t40 0" fill="none" stroke="#2f8f8f" stroke-width="3"/>
<g font-size="12" font-weight="700" fill="#222">
<text x="350" y="30">① low-density lipoprotein + receptor in clathrin-coated pit</text>
<text x="190" y="80">② lysosome frees cholesterol</text>
<text x="560" y="205" text-anchor="end">lipid droplets (cholesteryl esters) – yellow</text>
<text x="20" y="130">mitochondria – bubbly (tubulovesicular) cristae</text>
<text x="390" y="215">smooth endoplasmic reticulum – teal</text></g></svg>
<figcaption>Schematic "clear cell" of zona fasciculata, drawn in code (not to scale). The labelled AI illustrations below show the same structures in more detail.</figcaption></figure>`};

W.pingpong=el=>{const steps=[["M",130,"Cholesterol → pregnenolone","Mitochondria (inner membrane): cholesterol side-chain cleavage enzyme cuts the side chain."],
["S",470,"Pregnenolone → progesterone","Smooth endoplasmic reticulum: 3-beta-hydroxysteroid dehydrogenase."],
["S",470,"Progesterone → 17-hydroxyprogesterone","Smooth endoplasmic reticulum: 17-alpha-hydroxylase (absent in glomerulosa)."],
["S",470,"17-hydroxyprogesterone → 11-deoxycortisol","Smooth endoplasmic reticulum: 21-hydroxylase."],
["M",130,"11-deoxycortisol → cortisol","Back to mitochondria: 11-beta-hydroxylase. (In glomerulosa, aldosterone synthase finishes aldosterone here.)"],
["out",620,"Cortisol diffuses out","No vesicles: lipid-soluble cortisol crosses the membrane straight into blood."]];
el.innerHTML=`<figure><svg viewBox="0 0 700 200" style="width:100%"><rect x="20" y="40" width="220" height="120" rx="60" fill="#ffe3c4" stroke="#d9730d" stroke-width="3"/><text x="130" y="30" text-anchor="middle" font-weight="700" fill="#d9730d">MITOCHONDRION</text>
<path d="M50 100 q20 -40 40 0 t40 0 t40 0 t40 0" fill="none" stroke="#d9730d" stroke-width="2"/>
<rect x="360" y="40" width="220" height="120" rx="20" fill="#d5f1f1" stroke="#0f8b8d" stroke-width="3"/><text x="470" y="30" text-anchor="middle" font-weight="700" fill="#0f8b8d">SMOOTH ENDOPLASMIC RETICULUM</text>
<path d="M380 80 h180 M380 100 h180 M380 120 h180" stroke="#0f8b8d" stroke-width="2"/><line x1="660" y1="20" x2="660" y2="180" stroke="#999" stroke-dasharray="5 4"/><text x="668" y="100" font-size="12" fill="#777">blood</text>
<circle id="ball" cx="130" cy="100" r="15" fill="#7b3fc4" style="transition:all .7s"/></svg></figure>
<div class="ctrl">${steps.map((s,i)=>`<button data-i="${i}">${i+1}. ${s[2]}</button>`).join("")}</div><div class="info" id="pp-info">Click step 1 to start.</div>`;
el.querySelectorAll("button").forEach(b=>b.onclick=()=>{const s=steps[b.dataset.i];el.querySelectorAll("button").forEach(x=>x.classList.toggle("on",x==b));
const ball=el.querySelector("#ball");ball.setAttribute("cx",s[1]);ball.setAttribute("cy",100+(b.dataset.i%2?15:-15));el.querySelector("#pp-info").innerHTML=`<b>${s[2]}</b> – ${s[3]}`})};

/* pathway */
const PN={g0:[0,0,"Cholesterol"],g1:[0,1,"Pregnenolone"],g2:[0,2,"Progesterone"],g3:[0,3,"11-Deoxycorticosterone"],g4:[0,4,"Corticosterone"],g5:[0,5,"18-Hydroxycorticosterone"],g6:[0,6,"ALDOSTERONE"],
f0:[1,0,"Cholesterol"],f1:[1,1,"Pregnenolone"],f2:[1,2,"Progesterone"],f3:[1,3,"17-Hydroxyprogesterone"],f4:[1,4,"11-Deoxycortisol"],f5:[1,5,"CORTISOL"],
r0:[2,0,"Cholesterol"],r1:[2,1,"Pregnenolone"],r2:[2,2,"17-Hydroxypregnenolone"],r3:[2,3,"Dehydroepiandrosterone"],r4:[2.45,4,"DEHYDROEPIANDROSTERONE SULFATE"],r5:[1.75,4,"Androstenedione"],r6:[1.75,5.2,"Testosterone / oestradiol (peripheral)"]};
const PE=[["g0","g1","scc"],["g1","g2","hsd3"],["g2","g3","cyp21"],["g3","g4","cyp11b2"],["g4","g5","cyp11b2"],["g5","g6","cyp11b2"],
["f0","f1","scc"],["f1","f2","hsd3"],["f2","f3","cyp17"],["f3","f4","cyp21"],["f4","f5","cyp11b1"],
["r0","r1","scc"],["r1","r2","cyp17"],["r2","r3","lyase"],["r3","r4","sult"],["r3","r5","hsd3"],["f3","r5","lyase"],["r5","r6","periph"]];
const ENZN={scc:"side-chain cleavage",hsd3:"3-beta-dehydrogenase",cyp21:"21-hydroxylase",cyp11b2:"aldosterone synthase",cyp17:"17-alpha-hydroxylase",lyase:"17,20-lyase",cyp11b1:"11-beta-hydroxylase",sult:"sulfotransferase",periph:"17-beta-dehydrogenase / aromatase"};
const BLK={scc:"Nothing can be made – no cortisol, aldosterone or androgens (like congenital lipoid adrenal hyperplasia; ketoconazole and mitotane partly act here).",hsd3:"Only weak delta-5 steroids (dehydroepiandrosterone) – salt wasting, low cortisol, mild virilisation in girls and undervirilisation in boys.",
cyp21:"No cortisol AND no aldosterone → salt wasting; precursors shunt to androgens → virilisation. Most common congenital adrenal hyperplasia.",cyp11b2:"Isolated aldosterone deficiency: salt loss, high potassium, but cortisol normal.",
cyp17:"No cortisol and no sex steroids; flow shunted to 11-deoxycorticosterone and corticosterone → hypertension, low potassium (also abiraterone effect).",lyase:"Androgens and oestrogens cannot be made (abiraterone blocks this together with 17-alpha-hydroxylase).",
cyp11b1:"Cortisol falls; 11-deoxycortisol and 11-deoxycorticosterone pile up → hypertension; androgen shunting. Same block with metyrapone, osilodrostat, etomidate.",sult:"Less dehydroepiandrosterone sulfate; more free dehydroepiandrosterone available for conversion to active androgens.",periph:"Happens outside the adrenal (gonads, fat, skin)."};
const SCEN={none:{l:"Normal",b:[],sh:[],acc:[]},
def21:{l:"21-hydroxylase deficiency",b:["cyp21"],sh:["r1-r2","r2-r3","r3-r4","r3-r5","f3-r5","r5-r6","f1-f2","f2-f3"],acc:["f3"],t:"Blocked at 21-hydroxylase (red) in BOTH glomerulosa and fasciculata → low aldosterone and cortisol. High adrenocorticotropic hormone pushes 17-hydroxyprogesterone (piles up – screening marker) into androgens (bold orange)."},
def11:{l:"11-beta-hydroxylase deficiency",b:["cyp11b1"],sh:["r1-r2","r2-r3","r3-r5","f3-r5","r5-r6","f1-f2","f2-f3","f3-f4","g2-g3"],acc:["f4","g3"],t:"Cortisol step blocked. 11-deoxycortisol and 11-deoxycorticosterone pile up – 11-deoxycorticosterone acts as a mineralocorticoid → hypertension, low potassium. Androgen shunt → virilisation. (Strictly the fasciculata also makes 11-deoxycorticosterone; the diagram simplifies this.)"},
def17:{l:"17-alpha-hydroxylase deficiency",b:["cyp17","lyase"],sh:["g1-g2","g2-g3","g3-g4","f1-f2"],acc:["g3","g4"],t:"No cortisol and no androgens/oestrogens. Everything flows to 11-deoxycorticosterone and corticosterone → hypertension, low potassium, absent puberty; corticosterone prevents adrenal crisis."},
star:{l:"Lipoid hyperplasia (steroidogenic acute regulatory protein)",b:["scc"],sh:[],acc:["g0","f0","r0"],t:"Cholesterol cannot reach the side-chain cleavage enzyme: ALL steroids absent; cholesterol accumulates and the gland is full of lipid."},
metyrapone:{l:"Metyrapone / etomidate",b:["cyp11b1"],sh:[],acc:["f4"],t:"11-beta-hydroxylase blocked → cortisol falls, 11-deoxycortisol rises (metyrapone test). Etomidate does the same after anaesthetic induction."},
osilodrostat:{l:"Osilodrostat",b:["cyp11b1","cyp11b2"],sh:[],acc:["f4","g3"],t:"Blocks 11-beta-hydroxylase and aldosterone synthase; precursors (11-deoxycorticosterone) can rise → watch potassium and blood pressure."},
keto:{l:"Ketoconazole",b:["scc","cyp17","lyase"],sh:[],acc:[],t:"Blocks several steps (side-chain cleavage, 17-alpha-hydroxylase, 17,20-lyase) → less cortisol and androgens. Used in Cushing syndrome."},
abi:{l:"Abiraterone",b:["cyp17","lyase"],sh:["g1-g2","g2-g3","g3-g4"],acc:["g3"],t:"Androgen production stops (prostate cancer). Mineralocorticoid precursors rise → given with prednisone."}};
let curScen="none",curEnz=null;
W.pathway=el=>{const X=[120,410,660],xw=c=>c<=2&&Number.isInteger(c)?X[c]:c==1.75?560:780,Y=r=>45+r*88,bw=r=>170;
const pos=k=>{const [c,r]=PN[k];return [xw(c),Y(r)]};
let svg=`<svg id="pw" viewBox="0 0 880 625"><defs>${["#888","#c62828","#d9730d"].map((c,i)=>`<marker id="ar${i}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="${c}"/></marker>`).join("")}</defs>
${[["ZONA GLOMERULOSA – salt",120,"#0f8b8d"],["ZONA FASCICULATA – sugar",410,"#d9730d"],["ZONA RETICULARIS – sex",700,"#7b3fc4"]].map(([t,x,c])=>`<text x="${x}" y="16" text-anchor="middle" font-weight="700" font-size="14" fill="${c}">${t}</text>`).join("")}`;
PE.forEach(([a,b,e])=>{const [x1,y1]=pos(a),[x2,y2]=pos(b);const dy=y2>y1?18:0,sx=x2!=x1?(x2>x1?60:-60):0;const X1=x1+(x2!=x1&&y1==y2?85:0),Y1=y1+(y2>y1?16:0),X2=x2-(x2!=x1&&y1==y2?85:0),Y2=y2-(y2>y1?18:0);
const fr=(a=="f3"&&b=="r5")?.72:.5,mx=X1+(X2-X1)*fr,my=Y1+(Y2-Y1)*fr;svg+=`<g class="pw-edge" data-e="${e}" data-id="${a}-${b}"><line x1="${X1}" y1="${Y1}" x2="${X2}" y2="${Y2}" stroke="#888" stroke-width="2.5" marker-end="url(#ar0)" ${e=="periph"?'stroke-dasharray="6 4"':""}/>
<rect x="${mx+6}" y="${my-10}" width="${ENZN[e].length*6.4+10}" height="18" rx="5" fill="#f3ecff" stroke="#7b3fc4" stroke-width="1"/><text x="${mx+11}" y="${my+3}" font-size="11" fill="#5b2ea0" font-weight="700">${ENZN[e]}</text>
<text class="xmark" x="${mx-14}" y="${my+6}" font-size="20" fill="#c62828" font-weight="900" opacity="0">✕</text></g>`});
for(const k in PN){const [x,y]=pos(k);const end=/[A-Z]{4}/.test(PN[k][2]);svg+=`<g class="pw-node" data-n="${k}"><rect x="${x-82}" y="${y-15}" width="164" height="30" rx="9" fill="${end?"#fff3d6":"#fff"}" stroke="${end?"#d9730d":"#999"}" stroke-width="${end?2.5:1.5}"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="${PN[k][2].length>28?8.6:PN[k][2].length>22?10.5:12.5}" font-weight="${end?800:600}" fill="#222">${PN[k][2]}</text></g>`}
svg+=`</svg>`;
el.innerHTML=`<div class="ctrl">${Object.entries(SCEN).map(([k,v])=>`<button data-s="${k}">${v.l}</button>`).join("")}</div><div class="svgwrap" style="background:#fff;border-radius:12px;border:1px solid var(--line)">${svg}</div><div class="info" id="pw-info">Tip: click a purple enzyme label to see what it does and what happens if it is blocked.</div>
<figcaption>Built in code from the zone pathways in the lecture (page 17, Berne and Levy figure). Simplified: the fasciculata can also use the 17-hydroxypregnenolone route.</figcaption>`;
el.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{curScen=b.dataset.s;curEnz=null;drawPW(el)});
el.querySelectorAll(".pw-edge").forEach(g=>g.onclick=()=>{curEnz=g.dataset.e;curScen="none";drawPW(el)});drawPW(el)};
function drawPW(el){const sc=SCEN[curScen];el.querySelectorAll("[data-s]").forEach(b=>b.classList.toggle("on",b.dataset.s==curScen&&!curEnz));
el.querySelectorAll(".pw-edge").forEach(g=>{const ln=g.querySelector("line"),blk=sc.b.includes(g.dataset.e),sh=sc.sh.includes(g.dataset.id),hi=curEnz==g.dataset.e;
ln.setAttribute("stroke",blk?"#c62828":sh?"#d9730d":hi?"#7b3fc4":"#888");ln.setAttribute("stroke-width",sh?6:hi?5:2.5);ln.setAttribute("marker-end",`url(#ar${blk?1:sh?2:0})`);ln.style.opacity=blk?.6:1;g.querySelector(".xmark").setAttribute("opacity",blk?1:0)});
el.querySelectorAll(".pw-node").forEach(g=>{const r=g.querySelector("rect"),a=sc.acc.includes(g.dataset.n);r.style.filter=a?"drop-shadow(0 0 6px #d9730d)":"none";r.setAttribute("fill",a?"#ffd9b0":/[A-Z]{4}/.test(g.textContent)?"#fff3d6":"#fff")});
const info=el.querySelector("#pw-info");if(curEnz){const k=curEnz=="periph"?null:curEnz,g=GLOSSARY[k];info.innerHTML=g?`<b class="t-enzyme">${g.l}</b> ${g.k?`<span class="code">${g.k}</span>`:""}: ${g.d}<br><b>If blocked:</b> ${BLK[curEnz]}`:BLK.periph}
else info.innerHTML=curScen=="none"?"Normal flow. Choose a deficiency or drug above, or click an enzyme label.":`<b>${sc.l}:</b> ${sc.t}<br><span style="color:#c62828">Red ✕ = blocked</span> · <span style="color:#d9730d">bold orange = shunted flow / glowing box = precursor piles up</span>`}

W.match=el=>{const P=L.match;const LL=P.map((p,i)=>[i,p[0]]),R=P.map((p,i)=>[i,p[1]]).sort(()=>Math.random()-.5);let sel=null,ok=0;
el.innerHTML=`<div class="match"><div>${LL.map(([i,t])=>`<button data-l="${i}">${t}</button>`).join("")}</div><div>${R.map(([i,t])=>`<button data-r="${i}">${t}</button>`).join("")}</div></div><div class="info" id="m-info">Pick an enzyme on the left.</div>`;
const info=el.querySelector("#m-info");
el.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>{el.querySelectorAll("[data-l]").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");sel=b.dataset.l;info.textContent="Now pick its step on the right."});
el.querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{if(sel==null){info.textContent="Pick an enzyme first.";return}
if(b.dataset.r==sel){b.classList.add("ok");el.querySelector(`[data-l="${sel}"]`).classList.add("ok");ok++;info.innerHTML=`✅ Match! (${ok}/${P.length})`;sel=null;if(ok==P.length){info.innerHTML="🏆 All matched!";complete("match",25,"🏆 Matching game complete! +25 XP")}}
else info.innerHTML="❌ Not that one – think about which carbon changes."})};

W.prader=el=>{const d=["Typical female","Mild clitoral enlargement","Clitoral enlargement, separate urethral and vaginal openings close together","Larger phallus, single urogenital opening","Phallus-like, labia largely fused (scrotum-like)","Typical male-appearing external genitalia (no palpable testes)"];
el.innerHTML=`<figure><svg viewBox="0 0 720 150" style="width:100%"><defs><linearGradient id="pg"><stop offset="0" stop-color="#ffd6e7"/><stop offset="1" stop-color="#c7dcff"/></linearGradient></defs><rect x="10" y="20" width="700" height="34" rx="17" fill="url(#pg)" stroke="#999"/>
${d.map((t,i)=>`<g><circle cx="${40+i*128}" cy="37" r="15" fill="#fff" stroke="#555"/><text x="${40+i*128}" y="42" text-anchor="middle" font-weight="800">${i}</text><foreignObject x="${i*128-5}" y="60" width="122" height="90"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:10.5px;line-height:1.25;text-align:center;color:#333">${t}</div></foreignObject></g>`).join("")}</svg>
<figcaption>Schematic Prader scale (text only, no anatomical images – deliberately). Grades 0 → 5 = increasing virilisation of a genetically female newborn.</figcaption></figure>`};

/* ===== render ===== */
const LAB=m=>String(m.n).includes(".")?m.n+" ":m.n+". ";
function render(){const nav=$("nav");const groups=[];COURSE.modules.forEach(m=>{const g=m.grp||"";let G=groups.find(x=>x.g==g);if(!G)groups.push(G={g,ms:[]});G.ms.push(m)});
nav.innerHTML=`<h1>🩺 MedLearn</h1><div class="sub">Samy's exam and clinic companion</div><div class="grp">${COURSE.area}</div><div class="area2">🫘 Adrenal gland</div>`+
groups.map(G=>(G.g?`<div class="grp">${G.g}</div><div class="lec">${G.ms[0].lec||""}<br><span style="font-weight:400;color:var(--mute);font-size:13px">${G.ms[0].teacher||""}</span></div>`:`<div class="grp">${COURSE.lectureGroup||"Lecture"}</div><div class="lec">${COURSE.lecture}<br><span style="font-weight:400;color:var(--mute);font-size:13px">${COURSE.teacher}</span></div>`)+
G.ms.map(m=>`<a data-m="${m.id}" class="${m.built?"on":""}">${LAB(m)}${m.title} ${m.built?"⭐":`<span class="soon">· coming soon</span>`}</a>`).join("")).join("")+`<div id="inside"></div>`;
nav.querySelectorAll("[data-m]").forEach(a=>a.onclick=()=>showModule(a.dataset.m));
if(!$("#modsel")){const sel=document.createElement("select");sel.id="modsel";sel.title="Choose module";sel.innerHTML=COURSE.modules.filter(m=>m.built).map(m=>`<option value="${m.id}">${LAB(m)}${m.title}</option>`).join("");sel.onchange=()=>showModule(sel.value);$(".top").prepend(sel)}
const hm=location.hash.match(/mod=(\w+)/),saved=LS.getItem("ml_mod");showModule(hm&&LESSONS[hm[1]]?hm[1]:saved&&LESSONS[saved]?saved:"m5")}
function showModule(id){const m=COURSE.modules.find(x=>x.id==id);if(!m)return showModule("m5");$$("nav [data-m]").forEach(a=>a.classList.toggle("on",a.dataset.m==id));const c=$("#content");
if(!m.built||!LESSONS[id]){c.innerHTML=`<div class="card soon-card"><div class="meta">${COURSE.area} › ${m.grp||COURSE.lectureGroup} › ${m.n}</div><h2>${LAB(m)}${m.title}</h2><p>${m.summary}</p><p>🚧 <b>Coming soon.</b> This module will follow the same format as the built modules: goals, micro-steps, quick checks, cases and flashcards.</p>${m.grp?`<button class="pri" onclick="showModule('d2')">→ Open the built module 2.2</button> `:""}<button class="pri" onclick="showModule('m5')">← Back to the demo module 5</button></div>`;scrollTo(0,0);return}
L=LESSONS[id];CUR=id;if($("#modsel"))$("#modsel").value=id;LS.setItem("ml_mod",id);document.title=`MedLearn – ${COURSE.area}: ${m.title}`;
$("#inside").innerHTML=`<div class="grp">Inside this module</div>${L.cards.map((c,i)=>`<a onclick="go('${c.id}')">${i+1}. ${c.title}</a>`).join("")}<a onclick="go('cases')">${L.casesHead||"🏥 Clinical cases"}</a><a onclick="go('flash')">🃏 Flashcards</a><a onclick="go('final')">🎯 What I got from this</a>`;
const legend=Object.entries(CATS).map(([k,v])=>`<span class="t-${k}" style="font-weight:700">● ${v}</span>`).join("");
const meta=L.meta||`${COURSE.area} › Lecture 7 › Subsection ${m.n} · lecture ${m.pages} · ⏱ about 25 minutes in ${L.cards.length} bite-sized steps`;
c.innerHTML=`<div class="card" id="intro"><div class="meta">${meta}</div>
<h2>${LAB(m)}${m.title}</h2>${L.intro?T(L.intro):""}<p><b>🎯 By the end you will be able to…</b></p><ol class="goals">${L.goals.map(g=>`<li>${g}</li>`).join("")}</ol>
<p style="font-size:15px;color:var(--mute)">Each step takes 2–5 minutes and ends with a quick check. Finish one, get XP and a ✅. That's it – one small win at a time.</p>
<div class="legend"><b>Colour key (click any coloured word):</b> ${legend}</div></div>`+
L.cards.map((cd,i)=>`<div class="card" id="${cd.id}"><span class="done-badge" id="badge-${cd.id}"></span><div class="meta">Step ${i+1} of ${L.cards.length} · ⏱ ${cd.min} min · 🎯 Goal: ${L.goals[cd.goal]}</div><h2>${cd.title}</h2>${cd.obj?`<div class="obj"><b>🎯 In this step you will:</b><ul>${cd.obj.map(o=>`<li>${o}</li>`).join("")}</ul></div>`:""}${T(cd.html)}${L===M5&&cd.id=="c5"?ADRENAL_FIG:""}${quizHTML(cd.id,cd.quiz)}
<div class="recap" id="recap-${cd.id}"><b>🧠 What did I get from this?</b><ul>${cd.recap.map(r=>`<li>${r}</li>`).join("")}</ul></div></div>`).join("")+
`<div class="card" id="cases"><h2>${L.casesHead||"🏥 Case-based learning"}</h2><p>${L.casesIntro||"Work through each case. Answer to reveal the next part."}</p>${L.cases.map(k=>`<div class="case" id="${k.id}"><h3>${k.title}</h3>${k.steps.map((s,i)=>`<div class="step ${i==0?"show":""}" data-i="${i}">${T(s.t)}${s.q?quizHTML(k.id+"s"+i,[s]):`<p><button class="nxt">Continue →</button></p>`}</div>`).join("")}<div class="step take"><div class="exam" style="border-color:var(--ok)"><b>🏁 Take-home points</b><ul>${k.take.map(t=>`<li>${t}</li>`).join("")}</ul></div></div></div>`).join("<hr>")}</div>
<div class="card" id="flash"><h2>🃏 Flashcards</h2><p>Click the card to flip. Use the buttons to move on.</p><div class="fc" id="fcard"><div class="in"><div class="f"></div><div class="b"></div></div></div><div class="ctrl"><button id="fprev">← Previous</button><button id="fshuf">🔀 Shuffle</button><button class="pri" id="fnext">Next →</button><span class="pill" id="fcount"></span></div></div>
<div class="card" id="final"><h2>🎯 What I got from this</h2><div id="summary"></div><div class="exam"><b>📘 For exams</b><ul>${L.exam.map(e=>`<li>${e}</li>`).join("")}</ul></div>${L.finalHtml?T(L.finalHtml):""}
<p style="font-size:14px;color:var(--mute)">${L.sources||"Sources: Lecture 7 (Prof. Ionela Pascanu), pages 17–22 and their figures (Barrett Medical Physiology; Berne and Levy Physiology), extended with standard textbook endocrinology. No statistics beyond those in the lecture figures."}</p><button onclick="if(confirm('Reset all progress?')){LS.removeItem(KEY);location.reload()}">Reset progress</button></div>`;
c.querySelectorAll("[data-widget]").forEach(w=>W[w.dataset.widget](w));
L.cards.forEach(cd=>{const el=$("#"+cd.id);if(S.done[cd.id])$("#recap-"+cd.id).classList.add("show");bindQuiz(el,cd.id,cd.quiz,()=>{$("#recap-"+cd.id).classList.add("show");complete(cd.id,20,`✅ Step complete! +20 XP`)})});
L.cases.forEach(k=>{const el=$("#"+k.id),st=el.querySelectorAll(".step");const next=i=>{st[i+1].classList.add("show");if(i+1==st.length-1)complete(k.id,30,"🏥 Case solved! +30 XP")};
k.steps.forEach((s,i)=>{if(s.q)bindQuiz(st[i],k.id+"s"+i,[s],()=>next(i));else st[i].querySelector(".nxt").onclick=()=>next(i)});
el.querySelectorAll("[data-widget]").forEach(w=>{if(!w.innerHTML)W[w.dataset.widget](w)})});
let fi=0,F=[...L.flash];const fc=$("#fcard"),showF=()=>{fc.classList.remove("flip");setTimeout(()=>{fc.querySelector(".f").textContent=F[fi][0];fc.querySelector(".b").textContent=F[fi][1];$("#fcount").textContent=`${fi+1} / ${F.length}`},150)};
fc.onclick=()=>fc.classList.toggle("flip");$("#fnext").onclick=()=>{fi=(fi+1)%F.length;showF()};$("#fprev").onclick=()=>{fi=(fi-1+F.length)%F.length;showF()};$("#fshuf").onclick=()=>{F.sort(()=>Math.random()-.5);fi=0;showF()};showF();
observe();updTop();scrollTo(0,0)}
function renderSummary(){const el=$("#summary");if(!el)return;const got=L.cards.filter(c=>S.done[c.id]);
el.innerHTML=`<p>You have completed <b>${got.length} of ${L.cards.length}</b> steps, <b>${L.cases.filter(k=>S.done[k.id]).length} of ${L.cases.length}</b> cases and earned <b>${S.xp} XP</b> in total.</p><ul>${L.goals.map((g,i)=>{const c=L.cards.find(c=>c.goal==i);return `<li>${c&&S.done[c.id]?"✅":"⬜"} ${g}</li>`}).join("")}</ul>${got.length==L.cards.length?"<p>🎉 <b>Module mastered.</b> Come back tomorrow for the flashcards to keep your streak!</p>":"<p>Keep going – the next step is only a few minutes.</p>"}`}
function go(id){const e=document.getElementById(id);if(e)e.scrollIntoView({behavior:"smooth",block:"start"})}
function observe(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){$$(".card").forEach(c=>c.classList.remove("active"));e.target.classList.add("active")}}),{rootMargin:"-40% 0px -50% 0px"});$$(".card").forEach(c=>io.observe(c))}
/* ===== boot ===== */
window.addEventListener("DOMContentLoaded",()=>{if(LS.getItem("ml_dark")==="1"||location.hash.includes("dark"))document.body.classList.add("dark");render();
$("#dark").onclick=()=>{document.body.classList.toggle("dark");LS.setItem("ml_dark",document.body.classList.contains("dark")?"1":"0")};
$("#focus").onclick=e=>{document.body.classList.toggle("focus");e.target.classList.toggle("pri")};
const h=location.hash.replace("#","").split("&")[0].replace(/^mod=\w+$/,"");const so=location.hash.match(/solo=(\w+)/);if(so){$$(".card").forEach(c=>{if(c.id!=so[1])c.style.display="none"});const sc=location.hash.match(/scen=(\w+)/);if(sc){const b=document.querySelector(`[data-s="${sc[1]}"]`);b&&b.click()}}if(h&&h!="dark")setTimeout(()=>{const e=document.getElementById(h);if(e){e.scrollIntoView();scrollBy(0,-60)}},50);
document.body.dataset.ok="1"});

/* lightbox for .mlfig figures */
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest(".zoombtn");if(b){const im=b.querySelector("img");const cap=b.parentNode.querySelector("figcaption");const o=document.createElement("div");o.className="lightbox";o.setAttribute("role","dialog");o.setAttribute("aria-label","Enlarged figure");o.innerHTML=`<button class="lbclose" type="button" aria-label="Close">✕</button><img src="${im.getAttribute("src")}" alt="${im.alt}"><div class="lbcap">${cap?cap.innerHTML.replace(/<i>Tap or click to enlarge\.<\/i>/,""):""}</div>`;document.body.appendChild(o);document.body.style.overflow="hidden";o.querySelector(".lbclose").focus();return}
const lb=e.target.closest&&e.target.closest(".lightbox");if(lb&&(e.target===lb||e.target.closest(".lbclose")||e.target.tagName==="IMG")){lb.remove();document.body.style.overflow=""}});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){const lb=document.querySelector(".lightbox");if(lb){lb.remove();document.body.style.overflow=""}}});
