/* ===== Subsection 7 widgets: liver route, cortisol–cortisone shuttle, three-way sorter ===== */
const MK=(id,c)=>`<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0L10 5L0 10z" fill="${c}"/></marker>`;
const BX=(x,y,w,h,f,s,lines,fs=13)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${f}" stroke="${s}" stroke-width="2.2"/>`+lines.map((t,i)=>`<text x="${x+w/2}" y="${y+h/2+(i-(lines.length-1)/2)*(fs+3)+fs/3}" text-anchor="middle" font-size="${fs}" font-weight="${i==0?700:400}" fill="#222">${t}</text>`).join("");
W.liver=el=>{
const S=[["A","Free cortisol leaves the blood","Only the free fraction (about 1 in 10 molecules) reaches the liver enzymes; cortisol bound to cortisol-binding globulin is protected."],
["B","Step 1: A-ring reduction","5-alpha- and 5-beta-reductase plus 3-alpha-hydroxysteroid dehydrogenase reduce ring A → tetrahydrocortisol (and tetrahydrocortisone from cortisone). <b>This is the switching-off step.</b>"],
["C","Step 2: conjugation","Glucuronic acid (or sulfate) is attached → a water-soluble glucuronide that the kidney can excrete."],
["D","Minor route: 6-beta-hydroxylation","Cytochrome P450 3A4 makes 6-beta-hydroxycortisol. Minor for cortisol, but the main route for many synthetic steroids, so inducers and inhibitors matter."],
["E","Kidney → urine","The kidney filters the water-soluble metabolites into urine; most cortisol leaves the body this way."],
["G","A tiny fraction unchanged","A very small part of free cortisol is filtered unchanged: urinary free cortisol, used to screen for Cushing syndrome."]];
const svg=`<svg viewBox="0 0 760 300" style="width:100%" role="img" aria-label="Route of cortisol inactivation"><defs>${MK("lva","#555")}</defs>
<g data-k="A">${BX(10,118,120,56,"#e6f6f6","#0f8b8d",["Cortisol","(free, in blood)"])}<line x1="130" y1="146" x2="203" y2="146" stroke="#555" stroke-width="3" marker-end="url(#lva)"/></g>
<rect x="205" y="18" width="345" height="264" rx="16" fill="#fff6ee" stroke="#b5651d" stroke-width="2" stroke-dasharray="7 5"/><text x="378" y="40" text-anchor="middle" font-size="15" font-weight="800" fill="#b5651d">LIVER</text>
<g data-k="B">${BX(222,58,310,58,"#f3ecff","#7b3fc4",["Step 1: A-ring reduction","→ tetrahydrocortisol (inactive)"])}</g>
<line x1="377" y1="116" x2="377" y2="140" stroke="#555" stroke-width="3" marker-end="url(#lva)"/>
<g data-k="C">${BX(222,142,310,58,"#e3f1ff","#2f6fdb",["Step 2: conjugation (glucuronic acid)","→ water-soluble glucuronide"])}</g>
<g data-k="D">${BX(222,214,310,52,"#f4f4f4","#888",["Minor: 6-beta-hydroxylation","cytochrome P450 3A4"],12)}</g>
<g data-k="E"><line x1="532" y1="171" x2="586" y2="171" stroke="#555" stroke-width="3" marker-end="url(#lva)"/>${BX(588,140,150,62,"#e6f6ee","#1f9d55",["Kidney → urine","glucuronides"])}</g>
<g data-k="G"><path d="M70 118 Q70 4 400 6 Q660 8 662 136" fill="none" stroke="#c62828" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#lva)"/><text x="600" y="30" text-anchor="middle" font-size="12" fill="#c62828">tiny fraction unchanged = urinary free cortisol</text></g></svg>`;
el.innerHTML=`<div class="ctrl">${S.map((s,i)=>`<button data-i="${i}">${i+1}. ${s[1]}</button>`).join("")}<button data-i="all">Show all</button></div><div class="swipe">↔ Swipe sideways to see the whole diagram</div><div class="svgwrap"><figure>${svg}<figcaption>Cortisol inactivation route, drawn by MedLearn (schematic, not to scale).</figcaption></figure></div><div class="info" id="lv-info">Click step 1 to start.</div>`;
const seen=new Set();
el.querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>{const i=b.dataset.i;el.querySelectorAll("[data-i]").forEach(x=>x.classList.toggle("on",x==b));
el.querySelectorAll("g[data-k]").forEach(g=>g.style.opacity=i=="all"||g.dataset.k==S[i][0]?1:.2);
el.querySelector("#lv-info").innerHTML=i=="all"?"Whole route: free cortisol → A-ring reduction → conjugation → kidney → urine; minor 6-beta-hydroxylation; a tiny fraction unchanged.":`<b>${S[i][1]}:</b> ${S[i][2]}`;
if(i!="all")seen.add(i);if(seen.size==S.length)complete("e2-liver",10,"🧪 Route followed! +10 XP")})};

W.shuttle=el=>{
const SC={normal:{l:"Normal",x2:0,w2:3,mr:"Aldosterone binds; cortisol is kept away",mc:"#e6f6ee",lt:"Kidney, colon, salivary and sweat glands, placenta",ri:"Cortisone",ro:"Cortisol",rl:"type 1: switches ON",t:"Type 2 turns cortisol into cortisone where the mineralocorticoid receptor lives; type 1 regenerates cortisol where glucocorticoid action is wanted."},
liq:{l:"Liquorice",x2:1,w2:3,mr:"CORTISOL binds → salt kept, potassium lost",mc:"#ffe1e1",lt:"Kidney, colon, salivary and sweat glands, placenta",ri:"Cortisone",ro:"Cortisol",rl:"type 1: switches ON",t:"Glycyrrhetinic acid blocks type 2. Cortisol (100–1000 times more abundant than aldosterone) occupies the receptor: high blood pressure, low potassium, low renin, low aldosterone."},
flood:{l:"Ectopic cortisol flood",x2:0,w2:9,mr:"Enzyme saturated → excess cortisol binds",mc:"#ffe1e1",lt:"Kidney, colon, salivary and sweat glands, placenta",ri:"Cortisone",ro:"Cortisol",rl:"type 1: switches ON",t:"The enzyme works, but extreme cortisol levels overwhelm it. The spill-over explains the severe low potassium of ectopic adrenocorticotropic hormone syndrome."},
pred:{l:"Prednisone tablet",x2:0,w2:3,mr:"Aldosterone binds (prednisolone has little salt effect)",mc:"#e6f6ee",lt:"Kidney, colon, salivary and sweat glands, placenta",ri:"Prednisone (inactive tablet)",ro:"Prednisolone (active)",rl:"type 1 in the liver activates it",t:"Prednisone, like cortisone, is a prodrug: liver type 1 turns it into prednisolone. In severe liver failure prefer prednisolone itself."},
preg:{l:"Pregnancy (placenta)",x2:0,w2:3,mr:"Fetus protected from maternal cortisol",mc:"#e6f6ee",lt:"PLACENTA (type 2 barrier)",ri:"Cortisone",ro:"Cortisol",rl:"type 1: switches ON",t:"Placental type 2 inactivates most maternal cortisol and much prednisolone. Dexamethasone and betamethasone are poor substrates, cross to the fetus, and are used for fetal lung maturation."}};
const svg=`<svg viewBox="0 0 760 330" style="width:100%" role="img" aria-label="Cortisol–cortisone shuttle"><defs>${MK("sha","#555")}</defs>
<rect x="8" y="10" width="300" height="310" rx="14" fill="#fff4f4" stroke="#d64545" stroke-width="2"/><text id="sh-lt" x="158" y="34" text-anchor="middle" font-size="12.5" font-weight="700" fill="#a12d2d"></text>
<rect x="452" y="10" width="300" height="310" rx="14" fill="#f5f0ff" stroke="#7b3fc4" stroke-width="2"/><text x="602" y="34" text-anchor="middle" font-size="12.5" font-weight="700" fill="#5a2a99">Liver, fat tissue, brain, skin, bone</text>
<text x="380" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="#555">BLOOD</text>
${BX(330,70,100,40,"#e6f6f6","#0f8b8d",["Cortisol"])}${BX(330,210,100,40,"#f1f1f1","#888",["Cortisone"])}
${BX(60,70,140,40,"#e6f6f6","#0f8b8d",["Cortisol"])}${BX(60,210,140,40,"#f1f1f1","#888",["Cortisone"])}
<line x1="330" y1="90" x2="202" y2="90" stroke="#555" stroke-width="2" marker-end="url(#sha)"/><line x1="200" y1="230" x2="328" y2="230" stroke="#555" stroke-width="2" marker-end="url(#sha)"/>
<line id="sh-a2" x1="130" y1="110" x2="130" y2="207" stroke="#d64545" stroke-width="3" marker-end="url(#sha)"/><text x="120" y="150" text-anchor="end" font-size="12" font-weight="700" fill="#a12d2d">type 2:</text><text x="120" y="165" text-anchor="end" font-size="12" font-weight="700" fill="#a12d2d">switches OFF</text>
<text id="sh-x2" x="112" y="172" font-size="40" font-weight="900" fill="#c62828" opacity="0">✕</text>
<rect id="sh-mr" x="214" y="128" width="88" height="66" rx="8" stroke="#1f9d55" stroke-width="2"/><text x="258" y="146" text-anchor="middle" font-size="10.5" font-weight="700">mineralo-</text><text x="258" y="159" text-anchor="middle" font-size="10.5" font-weight="700">corticoid</text><text x="258" y="172" text-anchor="middle" font-size="10.5" font-weight="700">receptor</text>
<line x1="200" y1="100" x2="236" y2="126" stroke="#c62828" stroke-width="2" stroke-dasharray="4 3" id="sh-leak" opacity="0" marker-end="url(#sha)"/>
<text id="sh-mrt" x="158" y="290" text-anchor="middle" font-size="12" font-weight="700" fill="#222"></text>
${BX(510,210,190,40,"#f1f1f1","#888",[""])}<text id="sh-ri" x="605" y="235" text-anchor="middle" font-size="12.5" font-weight="700"></text>
${BX(510,70,190,40,"#e6f6f6","#0f8b8d",[""])}<text id="sh-ro" x="605" y="95" text-anchor="middle" font-size="12.5" font-weight="700"></text>
<line x1="430" y1="230" x2="508" y2="230" stroke="#555" stroke-width="2" marker-end="url(#sha)"/>
<line x1="605" y1="208" x2="605" y2="113" stroke="#7b3fc4" stroke-width="3" marker-end="url(#sha)"/><text id="sh-rl" x="615" y="165" font-size="12" font-weight="700" fill="#5a2a99"></text>
<text x="605" y="290" text-anchor="middle" font-size="12" fill="#333">→ glucocorticoid receptor: local cortisol action</text></svg>`;
el.innerHTML=`<div class="ctrl">${Object.entries(SC).map(([k,v])=>`<button data-s="${k}">${v.l}</button>`).join("")}</div><div class="swipe">↔ Swipe sideways to see the whole diagram</div><div class="svgwrap"><figure>${svg}<figcaption>Cortisol–cortisone shuttle, drawn by MedLearn (schematic). Red ✕ = enzyme blocked.</figcaption></figure></div><div class="info" id="sh-info"></div>`;
const seen=new Set(),q=s=>el.querySelector(s);
const set=k=>{const s=SC[k];seen.add(k);el.querySelectorAll("[data-s]").forEach(b=>b.classList.toggle("on",b.dataset.s==k));
q("#sh-x2").setAttribute("opacity",s.x2);q("#sh-a2").setAttribute("stroke-width",s.w2);q("#sh-leak").setAttribute("opacity",k=="liq"||k=="flood"?1:0);
q("#sh-mr").setAttribute("fill",s.mc);q("#sh-mrt").textContent=s.mr;q("#sh-lt").textContent=s.lt;q("#sh-ri").textContent=s.ri;q("#sh-ro").textContent=s.ro;q("#sh-rl").textContent=s.rl;
q("#sh-info").innerHTML=`<b>${s.l}:</b> ${s.t}`;if(seen.size==Object.keys(SC).length)complete("e3-shuttle",10,"🔁 Shuttle mastered! +10 XP")};
el.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>set(b.dataset.s));set("normal")};

W.sort3=el=>{const D=L.sort3,I=D.items;let ok=0;const done=new Set();
el.innerHTML=`<div class="sortg">${I.map((it,i)=>`<div class="sortrow" data-i="${i}"><span class="st">${it[0]}</span><span class="sb">${D.labels.map((l,j)=>`<button data-a="${j}">${l}</button>`).join("")}</span><div class="sfb" hidden></div></div>`).join("")}</div><div class="info" id="s3-info">0/${I.length} sorted correctly.</div>`;
el.querySelectorAll(".sortrow").forEach(row=>row.querySelectorAll("button").forEach(b=>b.onclick=()=>{const i=+row.dataset.i,it=I[i],fb=row.querySelector(".sfb");fb.hidden=false;
if(+b.dataset.a==it[1]){row.querySelectorAll("button").forEach(x=>x.disabled=true);b.classList.add("right");row.classList.add("ok");fb.innerHTML="✅ "+it[2];if(!done.has(i)){done.add(i);ok++}}
else{b.classList.add("wrong");fb.innerHTML="❌ Not quite. Think: does it change how much free cortisol reaches the bottle?"}
el.querySelector("#s3-info").textContent=`${ok}/${I.length} sorted correctly.`;if(ok==I.length){el.querySelector("#s3-info").textContent="🏆 All sorted!";complete(D.id,15,"🧩 Sorting complete! +15 XP")}}))};
