XSTEP.omhgarden={t:"Garden 1–4 → practical binary (McRae Fig. 17.6)",dim:.1,svg:`<svg viewBox="0 0 700 260" style="width:100%" role="img">
<g data-k="g12"><rect x="40" y="40" width="280" height="80" rx="12" fill="#e8f6ee" stroke="#1f9d55"/><text x="180" y="75" text-anchor="middle" font-size="14" font-weight="700">Garden 1–2 = undisplaced</text><text x="180" y="98" text-anchor="middle" font-size="12">valgus impact / complete aligned</text></g>
<g data-k="g34"><rect x="380" y="40" width="280" height="80" rx="12" fill="#fde2ea" stroke="#b3476d"/><text x="520" y="75" text-anchor="middle" font-size="14" font-weight="700">Garden 3–4 = displaced</text><text x="520" y="98" text-anchor="middle" font-size="12">trabeculae disturbed / head neutral</text></g>
<g data-k="lat"><rect x="180" y="160" width="340" height="60" rx="12" fill="#fff3cd" stroke="#d9730d"/><text x="350" y="195" text-anchor="middle" font-size="13" font-weight="700">Lateral: posterior tilt &gt;10° → treat as displaced</text></g>
</svg>`,
steps:[["Garden 1","Valgus impacted; medial cortical crack often invisible on AP.",["g12"]],["Garden 2","Complete but undisplaced; trabeculae still aligned.",["g12"]],["Garden 3–4","Moderately or fully displaced; retinacular vessels at risk.",["g12","g34"]],["Lateral rule","Garden ignores posterior tilt — &gt;10° on lateral = displaced (no firm consensus).",["g12","g34","lat"]]]};
XSORT.omhpauwel={t:"Pauwels orientation → stability",labels:["More stable (screws often OK)","High shear (consider angle-stable / DHS)"],items:[
["Pauwels 1 (~30° from horizontal)",0,"Type 1 relatively stable."],
["Pauwels 2 (~50°) — typical fragility",0,"Most fragility fractures; relatively stable."],
["Pauwels 3 (~70°) — vertical, often young high-energy",1,"Shear — may prefer DHS (p. 354)."],
["Posterior tilt 15° on lateral with 'Garden 2' AP",1,"Treat as displaced despite AP look."] ]};

XS.omh3=["Spot the error",[["Garden grading is perfectly reproducible into four types in daily practice.",0,"Wrong: McRae says neither possible nor very useful (p. 353)."],["Posterior tilt &gt;10° on the lateral should be viewed as displaced.",1],["Pauwels 3 fractures are subject to shear.",1],["Basicervical fractures impair femoral-head blood supply like Garden 4.",0,"Wrong: basicervical is extracapsular (p. 354)."]]];
XT.omh3='garden,pauwels,dhs,intracap,extracap,occulthip';
const OMH3={
meta:'Orthopaedics › McRae Ch. 17: Hip › MH.3 · Book pages 353–354 · ⏱ about 18 minutes in 2 steps',
intro:`<p>Garden sorts displacement on the anteroposterior film; Pauwels sorts fracture angle and shear. McRae says the four Garden grades are hard to use reliably — what matters is undisplaced versus displaced, and posterior tilt on the lateral.</p>`,
goals:['Define Garden 1–4 then collapse to undisplaced/displaced', 'Apply Pauwels 1–3 and the >10° posterior-tilt rule'],
cards:[{id:'mh3a',title:'Garden classification (pages 353–354)',min:9,goal:0,obj:['List Garden 1–4', 'Use undisplaced vs displaced in practice'],html:`
<div class="scene"><b>The scene:</b> Four neck films on the board. The registrar wants Garden grades; the consultant asks one question — displaced or not?</div>
<p>Garden (Fig. 17.6) describes four intracapsular patterns on the <b>AP</b> radiograph (McRae p. 353): <b>Garden 1</b> valgus impacted (apex points medially; medial cortical fracture classically not seen); <b>Garden 2</b> complete but undisplaced, trabeculae aligned; <b>Garden 3</b> moderately displaced with trabecular disturbance; <b>Garden 4</b> displaced but trabeculae line up showing the head in neutral rotation. In practice it is neither possible nor very useful to differentiate all four reliably. Identifying <b>displacement</b> (and therefore retinacular vessel disruption) is crucial: Garden 1–2 = undisplaced; Garden 3–4 = displaced. Garden does <b>not</b> account for posterior tilt on the lateral — although there is no current consensus, posterior tilt <b>&gt;10°</b> should be viewed as displaced (see Fig. 17.3B). Cross-link ${XL('o7c','L7.3')}.</p>
${FIG('omh-garden')}
<div class="bookref">📖 <b>Open McRae Fig 17.6, p. 353:</b> Garden 1–4 on the AP; group as undisplaced vs displaced.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.3, p. 352:</b> AP may look quiet; lateral shows the crack / tilt.</div>
<div data-widget="stepsvg" data-set="omhgarden"></div>
<div class="hint">💡 <b>"Four grades for textbooks. Two buckets for theatre: undisplaced or displaced."</b></div>
<div class="exam"><b>🎓 For exams:</b> recite 1–4 then collapse to binary; quote &gt;10° posterior tilt rule and “no firm consensus”.</div>
<details class="chk"><summary>✅ Checkpoint: Garden 2 AP but 15° posterior tilt — label?</summary><p>Treat as <b>displaced</b> (McRae p. 354).</p></details>`,recap:['Garden on AP.', '1–2 undisplaced; 3–4 displaced.', 'Lateral tilt &gt;10° counts.'],quiz:[{q:'Garden 1 pattern?',o:['Valgus impacted; medial cortex often invisible', 'Fully displaced with neutral head'],a:0,e:'p. 353.'},{q:'Why collapse Garden to two groups?',o:['Reliable four-way grading is hard; displacement drives AVN risk', 'Because screws are banned'],a:0,e:'p. 353.'}]},{id:'mh3b',title:'Pauwels classification (page 354)',min:9,goal:1,obj:['State Pauwels angles', 'Link type 3 shear to DHS thinking'],html:`
<div class="scene"><b>The scene:</b> A 28-year-old after a motorbike crash — nearly vertical neck crack. Screws alone may shear apart.</div>
<p>Pauwels indicates fracture orientation (Fig. 17.7). Most fragility fractures are <b>type 2</b>; young high-energy patients often have more vertical <b>Pauwels 3</b>. Types 1 and 2 are relatively stable and can be fixed with screws; type 3 is subject to shear and may be better with angle-stable fixation such as a [[dhs|dynamic hip screw]] (McRae p. 354). Extracapsular types (basicervical, intertrochanteric/pertrochanteric, subtrochanteric) are introduced here and unpacked in MH.4 and MH.9 — basicervical sits at neck base but outside the capsule; intertrochanteric is commonest; subtrochanteric = 5 cm distal to lesser trochanter (~5% of extracapsular) with metastases predilection and atypical-fracture overlap (p. 383).</p>
${FIG('omh-pauwels')}
<div class="bookref">📖 <b>Open McRae Fig 17.7, p. 354:</b> Pauwels 1 (~30°), 2 (~50°), 3 (~70°) from horizontal.</div>
<div data-widget="sortset" data-set="omhpauwel"></div>
<div class="hint">💡 <b>"Vertical neck = shear. Think angle-stable, not three screws alone."</b></div>
<div class="exam"><b>🎓 For exams:</b> Pauwels 3 → shear → consider DHS; intertrochanteric vs pertrochanteric terms often used interchangeably (p. 354).</div>
<details class="chk"><summary>✅ Checkpoint: young vertical neck — implant bias?</summary><p>Angle-stable device such as DHS rather than screws alone (p. 354).</p></details>`,recap:['Pauwels = orientation.', 'Type 3 = shear.', 'Basicervical still extracapsular.'],quiz:[{q:'Most fragility intracapsular fractures are Pauwels…?',o:['Type 2', 'Type 3 only'],a:0,e:'p. 354.'},{q:'Why may Pauwels 3 prefer a dynamic hip screw?',o:['Vertical shear forces', 'Because arthroplasty is forbidden under 40'],a:0,e:'p. 354.'}]}],
cases:[{id:'mh3k1',title:'Case: Quiet AP, loud lateral',steps:[{t:`AP labelled Garden 2; lateral shows 18° posterior tilt.`,q:'Practical label?',o:['Displaced — tilt rule', 'Undisplaced forever'],a:0,e:'&gt;10° posterior tilt → displaced (p. 354).'},{t:`Young adult, Pauwels 3 neck, after reduction.`,q:'Fixation bias from McRae?',o:['Angle-stable (e.g. DHS)', 'Always three screws alone'],a:0,e:'Type 3 shear — DHS consideration.'}],take:['Binary displacement + angle drive the implant chat.']}],
flash:[['Garden 1–2', 'Undisplaced.'], ['Garden 3–4', 'Displaced.'], ['>10° posterior tilt', 'Treat as displaced.'], ['Pauwels 3', 'Vertical shear → DHS thinking.']],
exam:['Garden 1–4 then binary.', 'Tilt rule.', 'Pauwels 1–3 implications.'],
finalHtml:`<div data-widget="spot" data-set="omh3"></div><div data-widget="termdeck" data-set="omh3"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>MH.4 Extracapsular types, emergency care and occult fracture.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('omh4')">→ Open</button></div>`,
sources:'Sources: McRae 3rd edition chapter 17 (book pages 353–354), Figs 17.6–17.7. Teaching questions by MedLearn.',
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.omh3=OMH3;
