/* ===== Orthopaedics · Lecture 8 · 3: Patella fracture and periprosthetic patella (pages 18–31) ===== */
XSTEP.patfxmech={t:"Direct versus indirect patella fracture (pages 23–24)",dim:.12,svg:`<svg viewBox="0 0 640 320" style="width:100%" role="img" aria-label="Direct blow causes stellate crack; indirect tension causes transverse gapped fracture">
<g data-k="base"><ellipse cx="160" cy="160" rx="50" ry="40" fill="#f6c945" stroke="#a07800"/><text x="160" y="165" text-anchor="middle" font-size="12" font-weight="700">patella</text>
<ellipse cx="480" cy="160" rx="50" ry="40" fill="#f6c945" stroke="#a07800"/><text x="480" y="165" text-anchor="middle" font-size="12" font-weight="700">patella</text></g>
<g data-k="dir"><path d="M160 40 L160 90" stroke="#c62828" stroke-width="4" marker-end="url(#a)"/><text x="160" y="30" text-anchor="middle" font-size="12" fill="#c62828">direct blow</text><circle cx="145" cy="150" r="3" fill="#333"/><circle cx="170" cy="145" r="3" fill="#333"/><circle cx="155" cy="175" r="3" fill="#333"/><text x="160" y="230" text-anchor="middle" font-size="12">stellate / crack</text><text x="160" y="248" text-anchor="middle" font-size="11">retinacula often intact</text></g>
<g data-k="ind"><path d="M480 60 L480 100" stroke="#1f9d55" stroke-width="3"/><path d="M480 220 L480 260" stroke="#1f9d55" stroke-width="3"/><text x="480" y="50" text-anchor="middle" font-size="12" fill="#1f7a44">quad pull</text><text x="480" y="280" text-anchor="middle" font-size="12" fill="#1f7a44">tendon pull</text><line x1="455" y1="160" x2="505" y2="160" stroke="#c62828" stroke-width="3"/><text x="480" y="230" text-anchor="middle" font-size="12">transverse + gap</text></g>
<defs><marker id="a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#c62828"/></marker></defs></svg>`,
steps:[["The bone","Sesamoid in the extensor chain; retinacula can bypass it.",["base"]],["Direct injury","Fall or dashboard: undisplaced crack or stellate fracture; expansions often spared (page 23).",["base","dir"]],["Indirect injury","Sudden quadriceps pull: transverse fracture with a gap; expansions may tear.",["base","dir","ind"]]]};
XSORT.patfxrx={t:"Treat the patella fracture (pages 26–31)",labels:["Brace / non-operative","Fix / operate","Special (implant)"],items:[
["Undisplaced; patient can straight-leg raise",0,"Orthesis: free extension, limited flexion, full weight-bearing (page 26)."],
["Transverse fracture with a gap; cannot extend",1,"Operative fixation (tension band or plate — lecture video page 27)."],
["Longitudinal fracture, stable",0,"Full weight-bearing often allowed (page 26)."],
["Periprosthetic: stable implant, intact extensor, undisplaced",0,"Cast or brace in extension (page 31)."],
["Periprosthetic: disrupted extensor or loose implant",2,"Needs surgery directed at implant and/or extensor (Goldberg / Ortiguera–Berry)."]]};
XS.o8c=["Spot the error",[["The patella can raise quadriceps force by about 30% (lecture page 19).",1],["A patient who can straight-leg raise after a minimally displaced fracture can often be braced.",1],["Every patella fracture needs plates.",0,"Wrong: undisplaced or minimally displaced fractures with intact extension are treated non-operatively (page 26)."],["Periprosthetic risk is far higher when the patella was resurfaced (lecture figures).",1]]];
XT.o8c="sesamoid,extmech,retinac,goldberg,quadrupt,patrupt";
const O8C={
meta:"Orthopaedics › Knee and leg › Lecture 8 › Subsection L8.3 · Lecture 8 pages 18–31 · ⏱ about 16 minutes in 2 bite-sized steps",
intro:`<p>Patella fractures are about 1% of all fractures; the lecture quotes an incidence of 14.1 per 100 000, mostly older women (median age 67), and about 70% from low-impact trauma (pages 19–20). Add the special case after knee replacement. McRae chapter 19, Patellar fractures (book pages 437–441).</p>`,
goals:["Link mechanism to fracture pattern and extensor function","Apply non-operative versus operative rules, including periprosthetic types"],
cards:[
{id:"oc1",title:"Patella fracture: mechanism, picture, treatment (pages 18–27)",min:9,goal:0,obj:["Describe direct vs indirect injury and treatment thresholds"],html:`
<div class="scene"><b>The scene:</b> Elena, 67, slips on ice onto the front of her knee. X-ray shows a stellate crack without a gap. She can still lift the straight leg against gravity.</div>
<p>Anatomy: [[sesamoid|patella]] with vastus insertions and [[retinac|retinacula]] completing the strap (page 22). Direct injury → crack or stellate, expansions often intact. Indirect → transverse with gap (page 23). Imaging: fine lines, stellate displacement, or transverse gap (page 24). Classification: descriptive / AO classification (Arbeitsgemeinschaft für Osteosynthesefragen) (page 25).</p>
<p><b>Treatment (page 26):</b> undisplaced or minimally displaced — orthesis (free extension, limited flexion, full weight-bearing) if the patient can straight-leg raise. Longitudinal — often full weight-bearing. Displaced with failed extensor mechanism — fixation (lecture demonstrates plating, page 27). McRae: restore the articular surface and the extensor mechanism.</p>
<div data-widget="stepsvg" data-set="patfxmech"></div>
<div class="hint">💡 <b>"Can they straight-leg raise? If yes and the bits are nearly together → brace. If no or a gap → fix."</b></div>
<div class="exam"><b>🎓 For exams:</b> lecture epidemiology (1%, 14.1/100 000, median 67, ~70% low impact); direct vs indirect; retinacula; raise test decides bracing.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Stellate, no gap, intact raise → non-operative orthesis with protected flexion.</p></details>`,
recap:["Direct = stellate/crack; indirect = transverse gap.","Intact raise + minimal displacement → brace.","Failed extension or gap → operate."],
quiz:[{q:"Dashboard impact, stellate fracture, can raise the leg. First plan?",o:["Extension-friendly brace / orthesis","Immediate total knee replacement","Always remove the whole patella"],a:0,e:"Page 26."},{q:"Transverse fracture with a wide gap and no active extension?",o:["Surgical fixation","Ignore if painless at rest","Only ice"],a:0,e:"Restore the chain."}]},
{id:"oc2",title:"Periprosthetic patella fracture (pages 28–31)",min:7,goal:1,obj:["Use implant and extensor status to choose treatment"],html:`
<div class="scene"><b>The scene:</b> Mr Braun fell 8 months after a total knee replacement with a resurfaced patella. The implant looks bonded; he can still straighten the knee; the fracture is undisplaced.</div>
<p>Incidence (lecture page 29): about 0.2–21% when the patella is resurfaced, versus about 0.05% when not. Risk factors: patellar osteonecrosis, asymmetric resection, among others. Classifications: [[goldberg|Goldberg]] and Ortiguera–Berry — key questions: is the implant stable, and is the extensor mechanism intact? (page 30).</p>
<p><b>Treatment (page 31):</b> non-operative casting or bracing in extension when the implant is stable, the extensor is intact, and the fracture is non-displaced. Otherwise surgery addresses the implant and/or the extensor.</p>
<div data-widget="sortset" data-set="patfxrx"></div>
<div class="hint">💡 <b>"Stable implant + working extensor + undisplaced = brace. Anything else = theatre thinking."</b></div>
<div class="exam"><b>🎓 For exams:</b> quote the lecture's resurfaced vs unresurfaced incidence band; classify by implant and extensor.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Stable implant, intact extension, undisplaced → cast or brace in extension; watch closely.</p></details>`,
recap:["Resurfaced patellae fracture more often (lecture figures).","Ask: implant stable? extensor intact?","Yes + undisplaced → non-operative."],
quiz:[{q:"Ortiguera–Berry type with loose implant but intact extensor needs…",o:["Surgery directed at the implant","Home exercise only","Ignore"],a:0,e:"Loose implant is an operative problem."},{q:"Unresurfaced patella periprosthetic fracture incidence in the lecture?",o:["About 0.05%","About 50%","Never happens"],a:0,e:"Page 29."}]}],
cases:[{id:"ock1",title:"Case: Ice and metal",steps:[{t:`Elena's sister has a resurfaced knee replacement and a displaced periprosthetic patella fracture; she cannot straighten the knee.`,q:"Plan?",o:["Operative — extensor disrupted and/or interface involved","Brace for 1 week then sport","Aspiration only"],a:0,e:"Goldberg / Ortiguera–Berry logic."}],take:["Extensor + implant status drive periprosthetic decisions."]}],
flash:[["Patella fracture ~1%","Lecture: 14.1/100 000; median age 67; ~70% low impact."],["Straight-leg raise","Key non-operative gate."],["Direct vs indirect","Stellate vs transverse gap."],["Periprosthetic","Stable implant + intact extensor + undisplaced → brace."]],
exam:["Epidemiology from the lecture.","When to brace vs fix.","Periprosthetic classification logic."],
finalHtml:`<div data-widget="spot" data-set="o8c"></div><div data-widget="termdeck" data-set="o8c"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L8.4 Patella dislocation and osteochondral injuries.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o8d')">→ Open</button></div>`,
sources:"Sources: Lecture 8 pages 18–31; McRae 3rd edition chapter 19 Patellar fractures (book pages 437–441). Statistics are from the lecture slides only. Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o8c=O8C;
