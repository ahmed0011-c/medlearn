/* ===== CBL 5 widgets (use the current lesson L) ===== */
W.clues=el=>{const C=L.clues,seen=new Set();
el.innerHTML=`<div class="ctrl">${C.map((c,i)=>`<button class="clue" data-i="${i}">🔎 ${c[0]}</button>`).join("")}</div><div class="info" id="cl-info">Pick a clue. (${C.length} to check)</div>`;
el.querySelectorAll(".clue").forEach(b=>b.onclick=()=>{const c=C[b.dataset.i];seen.add(b.dataset.i);el.querySelectorAll(".clue").forEach(x=>x.classList.toggle("on",x==b));b.classList.add(c[2]=="red"?"flag-red":"flag-grey");
el.querySelector("#cl-info").innerHTML=`${c[2]=="red"?"🚩 <b>Red flag</b>":"⚪ <b>Background</b>"}: <b>${c[0]}</b><br>${c[1]}<br><span style="color:var(--mute);font-size:13px">${seen.size}/${C.length} clues checked</span>`;
if(seen.size==C.length)complete("a1-clues",10,"🔎 All clues checked! +10 XP")})};

W.labs=el=>{const R=L.labs,ab=R.map((r,i)=>r[4]!="N"?i:null).filter(x=>x!=null),seen=new Set();
el.innerHTML=`<div class="ctrl"><button id="lb-ab">Show abnormal only</button><span class="pill" id="lb-c">0/${ab.length} abnormal explained</span></div>
<div class="svgwrap"><table class="labt"><tr><th>Test</th><th>M.T.</th><th>Unit</th><th>Normal range</th><th></th></tr>${R.map((r,i)=>`<tr data-i="${i}" class="lr f${r[4]}"><td>${r[0]}</td><td><b>${r[1]}</b></td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]=="H"?'<span class="fl fh">▲ high</span>':r[4]=="L"?'<span class="fl flo">▼ low</span>':'<span class="fl">normal</span>'}</td></tr>`).join("")}</table></div>
<div class="info" id="lb-info">Click a row.</div><figcaption>Values from slides 9–10 (units as on the slides; glucose conversion added).</figcaption>`;
let only=false;el.querySelector("#lb-ab").onclick=e=>{only=!only;e.target.classList.toggle("on",only);el.querySelectorAll("tr.fN").forEach(t=>t.style.display=only?"none":"")};
el.querySelectorAll("tr.lr").forEach(t=>t.onclick=()=>{const i=+t.dataset.i,r=R[i];el.querySelectorAll("tr.lr").forEach(x=>x.classList.toggle("sel",x==t));t.classList.add("seen");
if(r[4]!="N")seen.add(i);el.querySelector("#lb-c").textContent=`${seen.size}/${ab.length} abnormal explained`;
el.querySelector("#lb-info").innerHTML=`<b>${r[0]}: ${r[1]} ${r[2]}</b> (normal ${r[3]})<br>${r[5]}`;
if(seen.size==ab.length)complete("a3-labs",15,"🧪 Every abnormal value explained! +15 XP")})};

W.ladder=el=>{const R=L.ladder,seen=new Set();
el.innerHTML=`<div class="ladder">${R.map((r,i)=>`<button data-i="${i}"><span class="rung">${i+1}</span>${r[0].replace(/^\d+\.\s*/,"")}</button>`).join("")}</div><div class="info" id="ld-info">Start at rung 1.</div>`;
el.querySelectorAll("button").forEach(b=>b.onclick=()=>{const r=R[b.dataset.i];seen.add(b.dataset.i);el.querySelectorAll("button").forEach(x=>x.classList.toggle("on",x==b));b.classList.add("seen");
el.querySelector("#ld-info").innerHTML=`<b>${r[0]}</b><br><b>How:</b> ${r[1]}<br><b>Read it:</b> ${r[2]}<br><b>🩺 M.T.:</b> ${r[3]}`;
if(seen.size==R.length)complete("a4-ladder",10,"🪜 Top of the ladder! +10 XP")})};

const HPAS={
normal:{l:"Normal",x:null,v:{crh:"=",acth:"=",cort:"=",dhea:"=",renin:"=",aldo:"="},skin:"#e2b48f",sk:"normal skin",k:"normal potassium",t:"Hypothalamus → corticotropin-releasing hormone → pituitary → adrenocorticotropic hormone → cortisol, which switches the top two off (dashed red feedback). Aldosterone is mainly run by the kidney: renin → angiotensin II."},
primary:{l:"Primary (adrenal fails)",x:"adr",v:{crh:"↑",acth:"↑↑",cort:"↓",dhea:"↓",renin:"↑",aldo:"↓"},skin:"#7a4a2c",sk:"DARK skin",k:"HIGH potassium",t:"The adrenal is destroyed: cortisol, aldosterone and adrenal androgens fall. No feedback → corticotropin-releasing hormone and adrenocorticotropic hormone rise steeply (dark skin). Low volume → renin rises, but the adrenal cannot answer → aldosterone stays low → high potassium."},
secondary:{l:"Secondary (pituitary fails)",x:"pit",v:{crh:"↑",acth:"↓",cort:"↓",dhea:"↓",renin:"=",aldo:"="},skin:"#f6e0cf",sk:"PALE skin",k:"normal potassium",t:"The pituitary makes too little adrenocorticotropic hormone: cortisol and adrenal androgens fall. Aldosterone is normal because renin → angiotensin II still drives the glomerulosa. Pale skin."},
tertiary:{l:"Tertiary (hypothalamus fails)",x:"hyp",v:{crh:"↓",acth:"↓",cort:"↓",dhea:"↓",renin:"=",aldo:"="},skin:"#f6e0cf",sk:"PALE skin",k:"normal potassium",t:"Too little corticotropin-releasing hormone, so everything below is under-driven. Long-term steroid treatment suppresses both hypothalamus and pituitary (glucocorticoid-induced suppression)."},
mt:{l:"🩺 M.T.",x:"adr",v:{crh:"↑",acth:"↑↑",cort:"↓",dhea:"↓",renin:"↑",aldo:"↓"},skin:"#7a4a2c",sk:"DARK skin",k:"potassium 6.21 mmol/L",t:"M.T.: cortisol 4.8 µg/dl with no response to stimulation, adrenocorticotropic hormone 701.9 pg/ml, potassium 6.21 mmol/L, dark skin → PRIMARY adrenal insufficiency. (Renin and aldosterone values are not shown in the slides; arrows show the expected pattern.)"}};
W.hpa=el=>{const box=(x,y,w,h,f,s,t)=>`<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${f}" stroke="${s}" stroke-width="2.5"/><text x="${x+w/2}" y="${y+h/2+6}" text-anchor="middle" font-size="16" font-weight="700" fill="#222">${t}</text></g>`;
const st=(id,x,y,lab)=>`<text x="${x}" y="${y}" font-size="13" fill="#333">${lab}</text><text id="hs-${id}" x="${x}" y="${y+22}" font-size="18" font-weight="900"></text>`;
const X=(id,x,y)=>`<text id="hx-${id}" x="${x}" y="${y}" font-size="40" font-weight="900" fill="#c62828" opacity="0">✕</text>`;
const svg=`<svg viewBox="0 0 720 420" style="width:100%"><defs><marker id="ha" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#555"/></marker><marker id="hr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#c62828"/></marker></defs>
${box(130,20,200,46,"#f3ecff","#7b3fc4","Hypothalamus")}${box(130,135,200,46,"#e3f1ff","#2f6fdb","Pituitary")}${box(470,135,200,46,"#e6f6ee","#1f9d55","Kidney (renin)")}
<rect x="100" y="255" width="590" height="62" rx="14" fill="#fff3d6" stroke="#d9730d" stroke-width="2.5"/><text x="395" y="248" text-anchor="middle" font-size="14" font-weight="700" fill="#d9730d">ADRENAL CORTEX</text>
<text x="250" y="292" text-anchor="middle" font-size="14" fill="#222">fasciculata / reticularis</text><text x="570" y="292" text-anchor="middle" font-size="14" fill="#222">glomerulosa</text>
<line x1="230" y1="66" x2="230" y2="133" stroke="#555" stroke-width="3" marker-end="url(#ha)"/>${st("crh",240,90,"corticotropin-releasing hormone")}
<line x1="230" y1="181" x2="230" y2="253" stroke="#555" stroke-width="3" marker-end="url(#ha)"/>${st("acth",240,205,"adrenocorticotropic hormone")}
<line x1="570" y1="181" x2="570" y2="253" stroke="#555" stroke-width="3" marker-end="url(#ha)"/>${st("renin",580,205,"angiotensin II")}
<line x1="200" y1="317" x2="200" y2="350" stroke="#555" stroke-width="3" marker-end="url(#ha)"/>${st("cort",160,372,"cortisol")}
<line x1="320" y1="317" x2="320" y2="350" stroke="#555" stroke-width="3" marker-end="url(#ha)"/>${st("dhea",270,372,"adrenal androgens")}
<line x1="570" y1="317" x2="570" y2="350" stroke="#555" stroke-width="3" marker-end="url(#ha)"/>${st("aldo",545,372,"aldosterone")}
<path d="M150 360 Q60 330 60 220 Q60 60 128 43" fill="none" stroke="#c62828" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#hr)"/><path d="M60 158 L128 158" fill="none" stroke="#c62828" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#hr)"/><text x="40" y="300" font-size="12" fill="#c62828" transform="rotate(-90 40 300)">negative feedback</text>
${X("hyp",290,60)}${X("pit",290,175)}${X("adr",108,302)}
<circle id="h-skin" cx="440" cy="392" r="18" stroke="#555" stroke-width="1.5"/><text id="h-skt" x="466" y="389" font-size="13" font-weight="700" fill="#333"></text><text id="h-k" x="466" y="406" font-size="13" fill="#333"></text>
</svg>`;
el.innerHTML=`<div class="ctrl">${Object.entries(HPAS).map(([k,v])=>`<button data-h="${k}">${v.l}</button>`).join("")}</div><figure>${svg}<figcaption>Hypothalamic–pituitary–adrenal axis drawn in code (schematic). ↑ = up, ↓ = down, "= normal" = unchanged. Red ✕ = the broken level. Based on slide 11 (Hahner et al., 2021).</figcaption></figure><div class="info" id="h-info"></div>`;
const set=k=>{const s=HPAS[k];el.querySelectorAll("[data-h]").forEach(b=>b.classList.toggle("on",b.dataset.h==k));
for(const h in s.v){const t=el.querySelector("#hs-"+h);t.textContent=s.v[h]=="="?"= normal":s.v[h];t.setAttribute("fill",s.v[h].includes("↑")?"#c62828":s.v[h].includes("↓")?"#2f6fdb":"#1f9d55")}
["hyp","pit","adr"].forEach(x=>el.querySelector("#hx-"+x).setAttribute("opacity",s.x==x?1:0));
el.querySelector("#h-skin").setAttribute("fill",s.skin);el.querySelector("#h-skt").textContent=s.sk;el.querySelector("#h-k").textContent=s.k;el.querySelector("#h-info").innerHTML=`<b>${s.l}:</b> ${s.t}`};
el.querySelectorAll("[data-h]").forEach(b=>b.onclick=()=>set(b.dataset.h));set("normal")};

W.crisis=el=>{const C=L.crisis,h=48,g=20;
const svg=`<svg viewBox="0 0 700 ${C.length*(h+g)}" style="width:100%"><defs><marker id="ca" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#777"/></marker></defs>
${C.map((c,i)=>{const y=i*(h+g)+4;return `<g class="cr-box" data-i="${i}" style="cursor:pointer"><rect x="90" y="${y}" width="520" height="${h}" rx="12" fill="${c[2]}" fill-opacity=".12" stroke="${c[2]}" stroke-width="2.5"/><text x="350" y="${y+h/2+6}" text-anchor="middle" font-size="17" font-weight="800" fill="${c[2]}">${c[0]}</text></g>${i<C.length-1?`<line x1="350" y1="${y+h}" x2="350" y2="${y+h+g-2}" stroke="#777" stroke-width="2.5" marker-end="url(#ca)"/>`:""}`}).join("")}
<text x="45" y="105" font-size="13" font-weight="700" fill="#c62828" text-anchor="middle" transform="rotate(-90 45 105)">FIRST MINUTES</text><text x="655" y="390" font-size="13" font-weight="700" fill="#1f9d55" text-anchor="middle" transform="rotate(90 655 390)">DAYS</text></svg>`;
el.innerHTML=`<figure>${svg}<figcaption>Adrenal crisis flow drawn in code. Red = immediately; orange = first hours; green = days. Doses follow the Endocrine Society guideline (2016) and slide 30, corrected (see Slide check).</figcaption></figure><div class="info" id="cr-info">Click a box.</div>`;
el.querySelectorAll(".cr-box").forEach(b=>b.onclick=()=>{const c=C[b.dataset.i];el.querySelectorAll(".cr-box rect").forEach(r=>r.setAttribute("fill-opacity",".12"));b.querySelector("rect").setAttribute("fill-opacity",".3");
el.querySelector("#cr-info").innerHTML=`<b style="color:${c[2]}">${c[0]}</b><br>${c[1]}`})};
