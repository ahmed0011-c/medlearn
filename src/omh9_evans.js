XPK.omhevans={t:"Evans / AO → implant",opts:["Dynamic hip screw","Cephalomedullary nail","Either DHS or nail acceptable discussion"],items:[
["Simple intertrochanteric / basicervical (Evans 1–2; AO A1)",0,"Stable after reduction → DHS (pp 364–365).",""],
["Reverse oblique (Evans 4; AO A3)",1,"Intrinsically unstable with DHS → nail.",""],
["Subtrochanteric (Evans 5; AO A3)",1,"Huge medial compression forces → nail.",""],
["Comminuted intertrochanteric (Evans 3; AO A2)",2,"Usually DHS; nail sometimes to limit neck shortening.",""]]};

XS.omh9=["Spot the error",[["Tip–apex distance should be under 25 mm (McRae Fig. 17.22).",1],["A superior lag-screw position in the head is acceptable if the AP looks pretty.",0,"Wrong: any superior or anterior position increases failure risk and should not be tolerated (p. 366)."],["Reverse oblique fractures require a cephalomedullary nail (p. 365).",1],["McRae finds conclusive proof that nails beat DHS for every simple intertrochanteric fracture.",0,"Wrong: no conclusive better clinical outcome for ordinary IT fractures (pp 366–367)."]]];
XT.omh9='evans,aoa123,dhs,tad,cephalonail,reverseob';
const OMH9={
meta:'Orthopaedics › McRae Ch. 17: Hip › MH.9 · Book pages 364–367 · ⏱ about 18 minutes in 2 steps',
intro:`<p>Modified [[evans|Evans]], AO A1–A3, why a [[dhs|dynamic hip screw]] slides, when a [[cephalonail|cephalomedullary nail]] wins, and Baumgaertner [[tad|tip–apex distance]] under 25 mm. Lecture twins: ${XL('o7e','L7.5')}, ${XL('o7d','L7.4')}.</p>`,
goals:['Map Evans/AO patterns to DHS versus nail', 'Define tip–apex distance <25 mm'],
cards:[{id:'mh9a',title:'Modified Evans and AO grouping (pages 364–365)',min:9,goal:0,obj:['Assign Evans 1–5 and AO A1–A3 to implants'],html:`
<div class="scene"><b>The scene:</b> Same "intertrochanteric" word on two films. One is a tidy two-part crack. One is reverse-oblique and wants to escape every DHS. Morphology — not the label — picks the metal.</div>
<p>Aim again: optimise, then definitive surgery within 24–48 hours with immediate weight-bearing. [[evans|Modified Evans]] (Fig. 17.19): (1) basicervical — treat as (2); (2) simple intertrochanteric/basicervical — relatively stable after reduction → [[dhs|dynamic hip screw]]; (3) comminuted intertrochanteric — collapse risk, may separate trochanters or extend subtrochanteric → generally DHS, sometimes [[cephalonail|cephalomedullary nail]] to minimise neck shortening; (4) reverse oblique — intrinsically unstable, progressive displacement after DHS → nail; (5) subtrochanteric — highly unstable, huge medial compressive forces, rotation/collapse → cephalomedullary nailing. [[aoa123|AO]]: A1 simple intertrochanteric; A2 comminuted intertrochanteric; A3 reverse oblique and subtrochanteric.</p>
${FIG('omh-evans')}
<div class="bookref">📖 <b>Open McRae Fig 17.19, p. 365:</b> modified Evans types 1–5 — match each silhouette to DHS or nail.</div>
<div data-widget="pickset" data-set="omhevans"></div>
<div class="hint">💡 <b>"Simple → DHS. Reverse oblique or subtrochanteric → nail. Comminuted → DHS usually, nail to spare shortening."</b></div>
<div class="exam"><b>🎓 For exams:</b> Evans 1–5 implants; AO A3 = reverse oblique + subtrochanteric.</div>
<details class="chk"><summary>✅ Checkpoint: why does reverse oblique defeat a DHS?</summary><p>Fracture orientation is intrinsically unstable and will progressively displace after DHS fixation — needs a cephalomedullary nail (p. 365).</p></details>`,recap:['Evans morphology guide.', 'AO A1/A2/A3.', 'Reverse oblique & subtroch → nail.'],quiz:[{q:'Reverse oblique preferred implant?',o:['Cephalomedullary nail', 'DHS alone'],a:0,e:'p. 365.'},{q:'AO A3 includes…',o:['Reverse oblique and subtrochanteric fractures', 'Only Garden I necks'],a:0,e:'p. 365.'}]},{id:'mh9b',title:'DHS mechanics, nail comparison and tip–apex distance (pages 365–367)',min:9,goal:1,obj:['Explain sliding compression', 'State TAD <25 mm and nail pros/cons'],html:`
<div class="scene"><b>The scene:</b> A lag screw sits proud and superior in the head. Six weeks later it has cut out into the joint. The missing number was tip–apex distance.</div>
<p>The [[dhs|dynamic hip screw]] pairs a lag screw in head/neck with a side-plate barrel on the shaft (Fig. 17.20). Flat sides of the screw match the barrel — allow longitudinal sliding, prevent rotation (Fig. 17.21). Maintains neck-shaft angle with controlled collapse/compression during mobilisation. Lag screw must lie centre of the head near the apex. [[tad|Tip–apex distance]] (Baumgaertner, Fig. 17.22) = Xap + Xlat; keep sum &lt;25 mm to minimise cut-out. Slightly inferior/posterior tip may be accepted; any superior or anterior position increases failure risk and should not be tolerated — eccentric position lets the head rotate off during mobilisation.</p>
<p>[[cephalonail|Cephalomedullary nail]] (Figs 17.23–17.24) also uses a central lag screw and fixed angle for controlled collapse, but with a shorter lever arm (better for comminution/subtrochanteric), reduced sliding distance (less neck shortening — theoretical function benefit), and percutaneous implantation. Disadvantages versus DHS: higher implant-related fracture risk especially at distal tip of short nails; more expensive; technically harder; for ordinary intertrochanteric fractures (excluding reverse oblique/subtrochanteric) no conclusive proof of better clinical outcome than DHS (pp 366–367).</p>
${FIG('omh-dhs')}
${FIG('omh-tad')}
${FIG('omh-nail-vs-dhs')}
<div class="bookref">📖 <b>Open McRae Fig 17.20, p. 365:</b> dynamic hip screw overview.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.21, p. 366:</b> DHS components — flat sides inside the barrel.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.22, p. 366:</b> tip–apex distance — Xap + Xlat &lt;25 mm.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.23, p. 366:</b> cephalomedullary nail.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.24, p. 366:</b> DHS versus nail lever arm (a) and sliding distance (b).</div>
<div class="hint">💡 <b>"Centre-centre, tip–apex under 25 mm. Nail for reverse oblique/subtroch — not automatically for every A2."</b></div>
<div class="exam"><b>🎓 For exams:</b> TAD = Xap+Xlat &lt;25 mm; no superior/anterior tip; nail pros/cons honesty.</div>
<details class="chk"><summary>✅ Checkpoint: define tip–apex distance and its cut-out threshold.</summary><p>Sum of tip-to-apex distances on AP and lateral views; keep &lt;25 mm (Fig. 17.22 / p. 366).</p></details>`,recap:['DHS slides, holds angle.', 'TAD &lt;25 mm.', 'Nail: shorter lever; not proven better for simple IT.'],quiz:[{q:'Tip–apex distance target?',o:['Sum &lt;25 mm on AP + lateral', 'Sum &gt;50 mm'],a:0,e:'Baumgaertner / McRae.'},{q:'McRae on nail vs DHS for ordinary intertrochanteric fractures?',o:['No conclusive proof nail is clinically better', 'Nail always mandatory'],a:0,e:'pp 366–367.'}]}],
cases:[{id:'mh9k1',title:'Case: Reverse oblique',steps:[{t:`Reverse-oblique pertrochanteric fracture.`,q:'Implant?',o:['Cephalomedullary nail', 'Cannulated screws alone'],a:0,e:'Evans 4 / Box 17.1.'}],take:["Morphology beats the word 'intertrochanteric'."]}],
flash:[['Evans 4–5', 'Nail territory.'], ['TAD', 'Xap+Xlat &lt;25 mm.'], ['Cut-out', 'Screw exits the head.'], ['Nail honesty', 'Not proven better for simple IT.']],
exam:['Evans/AO map.', 'TAD number.', 'Nail pros/cons.'],
finalHtml:`<div data-widget="spot" data-set="omh9"></div><div data-widget="termdeck" data-set="omh9"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>MH.10 DHS and cephalomedullary nail surgical techniques.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('omh10')">→ Open</button></div>`,
sources:'Sources: McRae 3rd edition chapter 17 pp 364–367 (extracapsular management principles; DHS; cephalomedullary nail; TAD), Figs 17.19–17.24. Teaching questions by MedLearn.',
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.omh9=OMH9;
