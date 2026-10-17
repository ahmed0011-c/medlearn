/* ===== Subsection 8 widgets: axis feedback loop, daily rhythm, dexamethasone test ===== */
W.axisloop=el=>{
const SC={normal:["Normal","=","=","=",1,[],"Each level drives the next; cortisol switches off the pituitary and hypothalamus (negative feedback), keeping cortisol in range."],
stress:["Stress or illness","↑","↑","↑",.6,["str"],"Pain, fever, surgery and inflammatory cytokines (interleukin-1, interleukin-6) push the hypothalamus. Stress overrides the feedback brake, so cortisol rises well above the normal daily range."],
tab:["Steroid tablets","↓","↓","↓ own",3,["tab","atr"],"The tablet's steroid feeds back like cortisol. Corticotropin-releasing hormone and adrenocorticotropic hormone fall, the patient's own cortisol falls, and the unused adrenal cortex shrinks (atrophy). The tablet itself still acts on the body."],
prim:["Primary adrenal insufficiency (Addison disease)","↑","↑↑","↓",.2,["xadr"],"The adrenal gland is damaged. Low cortisol means no brake, so adrenocorticotropic hormone rises (pigmentation). Aldosterone is also lost."],
sec:["Secondary adrenal insufficiency (pituitary)","↑","↓","↓",.2,["xpit"],"The pituitary cannot make adrenocorticotropic hormone. Cortisol falls; aldosterone is mostly kept because renin–angiotensin still drives it."],
cushd:["Cushing disease (pituitary tumour)","↓","↑","↑",1.5,["pit"],"A pituitary tumour makes adrenocorticotropic hormone. It is partly resistant to feedback: it ignores normal cortisol but still responds to high-dose dexamethasone."],
adr:["Adrenal tumour making cortisol","↓","↓","↑",3,["adr","atr2"],"The tumour makes cortisol on its own. Strong feedback suppresses adrenocorticotropic hormone, so the other adrenal tissue shrinks."],
ect:["Ectopic adrenocorticotropic hormone (e.g. lung tumour)","↓","↑↑","↑↑",3,["ect"],"A tumour outside the pituitary makes adrenocorticotropic hormone and ignores feedback. The pituitary is switched off but the tumour drives the adrenals very hard."]};
const C=v=>v.startsWith("↑")?"#c62828":v.startsWith("↓")?"#2f6fdb":"#1f9d55";
const svg=`<svg viewBox="0 0 720 470" style="width:100%" role="img" aria-label="Hypothalamic-pituitary-adrenal axis with feedback"><defs>${MK("axa","#444")}${MK("axr","#c62828")}</defs>
<g class="ax-x" data-x="str" opacity="0">${BX(40,6,240,40,"#fff2d6","#d9730d",["Stress, pain, fever, cytokines"],12.5)}<line x1="280" y1="26" x2="300" y2="50" stroke="#d9730d" stroke-width="3" marker-end="url(#axa)"/></g>
${BX(260,50,200,56,"#e3f1ff","#2f6fdb",["Hypothalamus","paraventricular nucleus"])}
<line x1="360" y1="106" x2="360" y2="160" stroke="#444" stroke-width="3" marker-end="url(#axa)"/><text x="372" y="128" font-size="12.5">corticotropin-releasing hormone</text><text id="ax-v1" x="372" y="146" font-size="15" font-weight="800"></text>
${BX(260,162,200,56,"#f3ecff","#7b3fc4",["Anterior pituitary","corticotroph cells"])}
<text class="ax-x" data-x="xpit" x="436" y="200" font-size="36" font-weight="900" fill="#c62828" opacity="0">✕</text>
<g class="ax-x" data-x="pit" opacity="0"><circle cx="440" cy="168" r="15" fill="#ffd6d6" stroke="#c62828" stroke-width="2"/><text x="440" y="173" text-anchor="middle" font-size="10" font-weight="700">tumour</text></g>
<line x1="360" y1="218" x2="360" y2="272" stroke="#444" stroke-width="3" marker-end="url(#axa)"/><text x="372" y="240" font-size="12.5">adrenocorticotropic hormone</text><text id="ax-v2" x="372" y="258" font-size="15" font-weight="800"></text>
<g class="ax-x" data-x="ect" opacity="0">${BX(560,160,150,56,"#ffe1e1","#c62828",["Lung tumour","makes the hormone"],12)}<path d="M600 216 Q560 280 462 300" fill="none" stroke="#c62828" stroke-width="3" marker-end="url(#axr)"/></g>
<rect id="ax-adr" x="260" y="274" width="200" height="56" rx="10" fill="#fff6ee" stroke="#b5651d" stroke-width="2.2"/><text x="360" y="298" text-anchor="middle" font-size="13" font-weight="700">Adrenal cortex</text><text id="ax-adrt" x="360" y="316" text-anchor="middle" font-size="12">zona fasciculata</text>
<text class="ax-x" data-x="xadr" x="436" y="314" font-size="36" font-weight="900" fill="#c62828" opacity="0">✕</text>
<g class="ax-x" data-x="adr" opacity="0"><circle cx="440" cy="280" r="15" fill="#ffd6d6" stroke="#c62828" stroke-width="2"/><text x="440" y="285" text-anchor="middle" font-size="10" font-weight="700">tumour</text></g>
<line x1="360" y1="330" x2="360" y2="384" stroke="#444" stroke-width="3" marker-end="url(#axa)"/><text x="372" y="362" font-size="12.5">cortisol</text><text id="ax-v3" x="430" y="362" font-size="15" font-weight="800"></text>
${BX(260,386,200,50,"#e6f6ee","#1f9d55",["Body tissues","glucocorticoid receptor"])}
<g class="ax-x" data-x="tab" opacity="0">${BX(540,386,170,50,"#e3f1ff","#2f6fdb",["Steroid tablets","(e.g. prednisolone)"],12)}<line x1="540" y1="411" x2="463" y2="411" stroke="#2f6fdb" stroke-width="3" marker-end="url(#axa)"/></g>
<path class="ax-fb" d="M260 410 Q150 410 150 300 Q150 200 257 190" fill="none" stroke="#c62828" stroke-dasharray="8 6" marker-end="url(#axr)"/>
<path class="ax-fb" d="M260 420 Q60 420 60 250 Q60 80 257 78" fill="none" stroke="#c62828" stroke-dasharray="8 6" marker-end="url(#axr)"/>
<text x="40" y="460" font-size="12.5" fill="#c62828" font-weight="700">- - - negative feedback (line thickness = strength of the brake)</text></svg>`;
el.innerHTML=`<div class="ctrl">${Object.entries(SC).map(([k,v])=>`<button data-s="${k}">${v[0]}</button>`).join("")}</div><div class="swipe">↔ Swipe sideways to see the whole diagram</div><div class="svgwrap"><figure>${svg}<figcaption>Hypothalamic-pituitary-adrenal axis, drawn by MedLearn. ↑ high, ↓ low, = normal.</figcaption></figure></div><div class="info" id="ax-info"></div>`;
const q=s=>el.querySelector(s),seen=new Set();
const set=k=>{const s=SC[k];seen.add(k);el.querySelectorAll("[data-s]").forEach(b=>b.classList.toggle("on",b.dataset.s==k));
[["#ax-v1",s[1]],["#ax-v2",s[2]],["#ax-v3",s[3]]].forEach(([id,v])=>{const t=q(id);t.textContent=v;t.setAttribute("fill",C(v))});
el.querySelectorAll(".ax-fb").forEach(p=>p.setAttribute("stroke-width",s[4]*2+0.5));
el.querySelectorAll(".ax-x").forEach(g=>g.setAttribute("opacity",s[5].includes(g.dataset.x)?1:0));
const atr=s[5].includes("atr")||s[5].includes("atr2");q("#ax-adr").setAttribute("fill",atr?"#eeeeee":"#fff6ee");q("#ax-adrt").textContent=s[5].includes("atr")?"shrinks (atrophy)":s[5].includes("atr2")?"other tissue shrinks":"zona fasciculata";
q("#ax-info").innerHTML=`<b>${s[0]}:</b> corticotropin-releasing hormone ${s[1]}, adrenocorticotropic hormone ${s[2]}, cortisol ${s[3]}. ${s[6]}`;
if(seen.size==Object.keys(SC).length)complete("f2-axis",15,"🔄 All axis patterns explored! +15 XP")};
{const w=el.querySelector(".svgwrap");requestAnimationFrame(()=>{w.scrollLeft=(w.scrollWidth-w.clientWidth)/2})}
el.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>set(b.dataset.s));set(SC[el.dataset.start]?el.dataset.start:"normal")};

W.circadian=el=>{
const X=h=>60+h*25,Y=v=>250-v*200;
const base=h=>{const pk=h<=7.5?0.85*Math.exp(-Math.pow((h-7.5)/2,2)):0.85*Math.exp(-(h-7.5)/4.5);return 0.07+pk+0.06*Math.exp(-Math.pow((h-12.5)/0.7,2))+0.02*Math.sin(h*4.2)};
const cush=h=>Math.max(base(h),0.47+0.02*Math.sin(h*3));
const hc=h=>{const b=(t,a)=>h>=t?a*(h-t)/1.2*Math.exp(1-(h-t)/1.2):0;return 0.03+b(7,0.95)+b(12,0.45)+b(17,0.3)};
const path=f=>{let d="";for(let h=0;h<=24.001;h+=0.25)d+=(d?"L":"M")+X(h).toFixed(1)+" "+Y(f(h)).toFixed(1);return d};
const P=[[4.5,"4–5 a.m.: rising","Cortisol is lowest around midnight and starts climbing in the early morning hours, before you wake."],
[7.5,"Waking: the peak","Highest about 30–45 minutes after waking (the cortisol awakening response). Morning blood cortisol is used to screen for adrenal insufficiency."],
[12.5,"Noon","Falling through the day, with small pulses and a bump around meals. The hormone is released in bursts (pulsatile), not as a smooth stream."],
[17,"Late afternoon","Lower again. Hydrocortisone replacement copies this shape: the largest dose on waking, smaller doses later, none at bedtime."],
[23,"11 p.m. / midnight: the lowest point","Normally almost nothing. A high late-night saliva cortisol means the evening fall is lost, an early sign of Cushing syndrome."]];
const svg=`<svg viewBox="0 0 700 300" style="width:100%" role="img" aria-label="Daily cortisol rhythm"><rect x="${X(0)}" y="45" width="${X(7)-X(0)}" height="205" fill="#eef1fb"/><rect x="${X(23)}" y="45" width="${X(24)-X(23)}" height="205" fill="#eef1fb"/><text x="${X(3.5)}" y="62" text-anchor="middle" font-size="12" fill="#55639a">sleep</text>
<line x1="60" y1="250" x2="660" y2="250" stroke="#444" stroke-width="2"/><line x1="60" y1="40" x2="60" y2="250" stroke="#444" stroke-width="2"/>
${[[0,"midnight"],[6,"6 a.m."],[12,"noon"],[18,"6 p.m."],[24,"midnight"]].map(([h,l])=>`<text x="${X(h)}" y="270" text-anchor="middle" font-size="12">${l}</text>`).join("")}
<text x="22" y="150" text-anchor="middle" font-size="12" transform="rotate(-90 22 150)">cortisol (schematic, no units)</text>
<path id="ci-c" d="${path(cush)}" fill="none" stroke="#c62828" stroke-width="2.5" stroke-dasharray="7 5" opacity="0"/>
<path id="ci-h" d="${path(hc)}" fill="none" stroke="#2f6fdb" stroke-width="2.5" stroke-dasharray="3 4" opacity="0"/>
<path d="${path(base)}" fill="none" stroke="#0f8b8d" stroke-width="3.5"/>
${P.map((p,i)=>`<circle class="ci-p" data-i="${i}" cx="${X(p[0])}" cy="${Y(base(p[0]))}" r="9" fill="#fff" stroke="#0f8b8d" stroke-width="3" style="cursor:pointer"/>`).join("")}
<g id="ci-leg" font-size="12"><line x1="420" y1="20" x2="450" y2="20" stroke="#0f8b8d" stroke-width="3.5"/><text x="455" y="24">healthy person</text></g></svg>`;
el.innerHTML=`<div class="ctrl">${P.map((p,i)=>`<button data-i="${i}">${p[1].split(":")[0]}</button>`).join("")}</div><div class="ctrl"><label><input type="checkbox" id="ci-tc"> Cushing syndrome: lost evening fall (red)</label> <label><input type="checkbox" id="ci-th"> Hydrocortisone tablets, 3 doses (blue)</label></div><div class="swipe">↔ Swipe sideways to see the whole diagram</div><div class="svgwrap"><figure>${svg}<figcaption>Daily cortisol rhythm, drawn by MedLearn. Shape only; real values vary between people and laboratories.</figcaption></figure></div><div class="info" id="ci-info">Click a point on the curve or a button.</div>`;
const seen=new Set(),q=s=>el.querySelector(s);
const show=i=>{seen.add(i);el.querySelectorAll(".ci-p").forEach(c=>c.setAttribute("fill",c.dataset.i==i?"#0f8b8d":"#fff"));el.querySelectorAll(".ctrl button").forEach(b=>b.classList.toggle("on",b.dataset.i==i));
q("#ci-info").innerHTML=`<b>${P[i][1]}.</b> ${P[i][2]}`;if(seen.size==P.length)complete("f3-circ",10,"🕰️ Rhythm understood! +10 XP")};
el.querySelectorAll("[data-i]").forEach(b=>b.addEventListener("click",()=>show(+b.dataset.i)));
q("#ci-tc").onchange=e=>{q("#ci-c").setAttribute("opacity",e.target.checked?1:0);if(e.target.checked)q("#ci-info").innerHTML="<b>Cushing syndrome:</b> the morning value may look normal, but the evening fall is lost. That is why late-night saliva cortisol is a screening test."};
q("#ci-th").onchange=e=>{q("#ci-h").setAttribute("opacity",e.target.checked?1:0);if(e.target.checked)q("#ci-info").innerHTML="<b>Hydrocortisone replacement:</b> each tablet gives a peak and then falls (plasma half-life about 1.5 hours). The biggest dose is on waking; no dose at night. It can only roughly copy the natural curve."}};

W.dextest=el=>{
const P={hea:["Healthy person",.5,"normal",.05,.03,"Suppressed: normal feedback. Cushing syndrome is unlikely.","Suppressed (not needed)."],
cd:["Cushing disease (pituitary tumour)",.85,"normal or high",.7,.3,"Not suppressed → Cushing syndrome confirmed; now find the cause.","Falls by more than half: the pituitary tumour still obeys a strong brake → points to Cushing disease."],
ect:["Ectopic adrenocorticotropic hormone (lung tumour)",1,"very high",1,.97,"Not suppressed → Cushing syndrome.","No fall: the tumour ignores feedback → ectopic source (confirm with imaging or pituitary vein sampling)."],
adr:["Adrenal tumour making cortisol",.8,"low (suppressed)",.8,.8,"Not suppressed → Cushing syndrome.","No fall: the tumour does not depend on adrenocorticotropic hormone. A low adrenocorticotropic hormone already pointed here."],
pill:["Healthy woman on the combined pill",.65,"normal",.2,.08,"FALSE POSITIVE: oestrogen raises cortisol-binding globulin, so total cortisol looks too high.","Not needed. Repeat the test off the pill (about 6 weeks) or use saliva cortisol."],
carb:["Healthy person on carbamazepine",.5,"normal",.3,.12,"FALSE POSITIVE: carbamazepine induces cytochrome P450 3A4, which breaks down the dexamethasone too fast.","Not useful. Measure the dexamethasone level or use another test."]};
const svg=`<svg viewBox="0 0 560 260" style="width:100%"><line x1="50" y1="220" x2="550" y2="220" stroke="#444" stroke-width="2"/>
<rect id="dx-b" x="80" width="90" fill="#0f8b8d"/><rect id="dx-a" x="210" width="90" fill="#7b3fc4"/>
<text x="125" y="240" text-anchor="middle" font-size="13">before</text><text id="dx-al" x="255" y="240" text-anchor="middle" font-size="13">after</text>
<line x1="50" y1="${220-0.12*190}" x2="550" y2="${220-0.12*190}" stroke="#c62828" stroke-width="2" stroke-dasharray="6 4"/><text x="548" y="${190-0.12*190}" text-anchor="end" font-size="11.5" fill="#c62828">cut-off after 1 mg:</text><text x="548" y="${204-0.12*190}" text-anchor="end" font-size="11.5" fill="#c62828">50 nmol/L (1.8 µg/dl)</text>
<text x="0" y="0" font-size="12" text-anchor="middle" transform="translate(28 120) rotate(-90)">cortisol (schematic)</text></svg>`;
el.innerHTML=`<div class="ctrl">${Object.entries(P).map(([k,v])=>`<button data-p="${k}">${v[0]}</button>`).join("")}</div><div class="ctrl"><button data-d="lo" class="on">Low dose (1 mg overnight)</button><button data-d="hi">High dose (8 mg)</button></div><div style="max-width:600px"><figure>${svg}</figure></div><div class="info" id="dx-info">Pick a patient.</div>`;
let pk="hea",dk="lo";const seen=new Set(),q=s=>el.querySelector(s);
const bar=(r,v)=>{r.setAttribute("y",220-v*190);r.setAttribute("height",v*190)};
const run=()=>{const p=P[pk];seen.add(pk);bar(q("#dx-b"),p[1]);bar(q("#dx-a"),dk=="lo"?p[3]:p[4]);q("#dx-al").textContent=dk=="lo"?"after 1 mg":"after 8 mg";
el.querySelectorAll("[data-p]").forEach(b=>b.classList.toggle("on",b.dataset.p==pk));el.querySelectorAll("[data-d]").forEach(b=>b.classList.toggle("on",b.dataset.d==dk));
q("#dx-info").innerHTML=`<b>${p[0]}</b> · adrenocorticotropic hormone: <b>${p[2]}</b><br>${dk=="lo"?"Low dose: "+p[5]:"High dose: "+p[6]}`;if(seen.size==6)complete("f5-dex",15,"💊 Dexamethasone logic mastered! +15 XP")};
el.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>{pk=b.dataset.p;run()});el.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>{dk=b.dataset.d;run()});run()};
