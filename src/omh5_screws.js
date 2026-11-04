XPK.omhbox={t:"Box 17.1 — pick the strategy",opts:["Fixation (screws/DHS)","Urgent reduction and fixation","Total hip replacement","Hemiarthroplasty","Dynamic hip screw","Nail"],items:[
["Undisplaced intracapsular",0,"Box 17.1 — fixation.",""],
["Displaced intracapsular, young",1,"Urgent reduction and fixation.",""],
["Displaced intracapsular, elderly high demand",2,"Total hip replacement.",""],
["Displaced intracapsular, elderly low demand",3,"Hemiarthroplasty.",""],
["Simple intertrochanteric / basicervical",4,"Dynamic hip screw.",""],
["Reverse oblique or subtrochanteric",5,"Nail.",""]]};
XSTEP.omhscrews={t:"Three cannulated screws (McRae Fig. 17.9)",dim:.1,svg:`<svg viewBox="0 0 640 300" style="width:100%" role="img" aria-label="Screw positions">
<g data-k="inf"><rect x="40" y="40" width="180" height="50" rx="8" fill="#e8f6ee" stroke="#1f9d55"/><text x="130" y="70" text-anchor="middle" font-size="12" font-weight="700">1 Inferior / calcar</text></g>
<g data-k="post"><rect x="240" y="40" width="180" height="50" rx="8" fill="#e8f0fb" stroke="#2f6db3"/><text x="330" y="70" text-anchor="middle" font-size="12" font-weight="700">2 Posterior</text></g>
<g data-k="ant"><rect x="440" y="40" width="180" height="50" rx="8" fill="#fff3cd" stroke="#d9730d"/><text x="530" y="70" text-anchor="middle" font-size="12" font-weight="700">3 Anterosuperior</text></g>
<g data-k="entry"><rect x="160" y="160" width="320" height="50" rx="8" fill="#fde2ea" stroke="#b3476d"/><text x="320" y="190" text-anchor="middle" font-size="12" font-weight="700">Entry at lesser-trochanter level</text></g>
</svg>`,
steps:[["Entry","Guide-wire entry at lesser-trochanter level — more distal = lateral-cortex stress riser and possible subtrochanteric smash.",["entry"]],["Inferior screw","Low in the neck above the calcar — standing cantilever.",["entry","inf"]],["Posterior screw","Against posterior cortex — sitting/rising cantilever.",["entry","inf","post"]],["Anterosuperior screw","Well away from the first two.",["entry","inf","post","ant"]]]};

XS.omh5=["Spot the error",[["Box 17.1 sends reverse-oblique extracapsular fractures to a nail.",1],["Cannulated-screw entry should sit at lesser-trochanter level (McRae p. 357).",1],["Compression after cannulated screws comes mainly from intraoperative cranking, not mobilisation.",0,"Wrong: McRae says compression is principally produced during mobilisation (p. 357)."],["Full weight-bearing is permitted after cannulated screws.",1]]];
XT.omh5='box171,cannscrew,calcar,hemiarthro,thr,dhs';
const OMH5={
meta:'Orthopaedics › McRae Ch. 17: Hip › MH.5 · Book pages 356–357 · ⏱ about 18 minutes in 2 steps',
intro:`<p>[[box171|Box 17.1]] is the pocket card for the whole chapter. Then the craft of three [[cannscrew|cannulated screws]] for undisplaced necks. Lecture twin: ${XL('o7d','L7.4')}.</p>`,
goals:['Recite Box 17.1 pathways', 'Describe cannulated-screw set-up and three-wire positions'],
cards:[{id:'mh5a',title:'Box 17.1 and undisplaced intracapsular strategy (page 356)',min:8,goal:0,obj:['Recite Box 17.1', 'List contraindications to screw fixation'],html:`
<div class="scene"><b>The scene:</b> Theatre list: one quiet Garden 1, one reverse-oblique trochanteric, one fit 72-year-old Garden 4. Box 17.1 sorts them before the first skin mark.</div>
<p>Management is surgical except when the patient is too physiologically compromised for anaesthesia. Aim: optimise physiology, then a single definitive procedure within 24–48 hours allowing immediate weight-bearing and early rehabilitation. Strategy follows fracture pattern, age and physiology ([[box171|Box 17.1]], p. 356): intracapsular undisplaced → fixation; displaced young → urgent reduction and fixation; displaced elderly high demand → [[thr|total hip replacement]]; low demand → [[hemiarthro|hemiarthroplasty]]; extracapsular simple intertrochanteric/basicervical → [[dhs|dynamic hip screw]]; highly comminuted → DHS or nail; reverse oblique → nail; subtrochanteric → nail.</p>
<p>Undisplaced and valgus-impacted fractures are most commonly fixed in situ with cannulated screws or a DHS, though some prefer definitive arthroplasty. Contraindications to screw fixation: abnormal bone quality (rheumatoid arthritis, renal failure, osteomalacia) or a hip already symptomatic with osteoarthritis.</p>
<div data-widget="pickset" data-set="omhbox"></div>
<div class="hint">💡 <b>"Box 17.1 first. Exceptions for bad bone or a painful arthritic hip already destined for replacement."</b></div>
<div class="exam"><b>🎓 For exams:</b> recite Box 17.1 cold; 24–48 hour target; screw contraindications.</div>
<details class="chk"><summary>✅ Checkpoint: name two contraindications to cannulated screws for an undisplaced neck.</summary><p>Abnormal bone quality (e.g. rheumatoid arthritis, renal failure, osteomalacia) or symptomatic osteoarthritis already present (p. 356).</p></details>`,recap:['Box 17.1 pathways.', '24–48 h definitive surgery.', 'Screw contraindications.'],quiz:[{q:'Displaced elderly high-demand neck — Box 17.1?',o:['Total hip replacement', 'Always non-operative'],a:0,e:'Box 17.1.'},{q:'Target timing for definitive hip-fracture surgery (McRae)?',o:['Within 24–48 hours', 'Within 3 months'],a:0,e:'p. 356.'}]},{id:'mh5b',title:'Cannulated screw technique (pages 356–357)',min:10,goal:1,obj:['Describe set-up, entry, three wires, postop rules'],html:`
<div class="scene"><b>The scene:</b> A guide wire starts too far down the lateral cortex. Weeks later a subtrochanteric fracture blooms under the screw holes. McRae warned you on page 357.</div>
<p><b>Set-up:</b> as Fig. 17.25; confirm image intensifier can give AP and true lateral (Fig. 17.26); confirm fracture still undisplaced before proceeding. No reduction manoeuvre — avoid displacing while positioning. Percutaneous ~3 cm incision at lesser-trochanter level.</p>
<p><b>Entry:</b> at lesser-trochanter level (Fig. 17.9). More distal creates a lateral-cortex stress riser → possible comminuted subtrochanteric fracture. Central neck bone is soft — screws should rest against or near cortex. Wire 1 low above [[calcar|calcar]] (standing cantilever); wire 2 posterior near posterior cortex (sitting/rising cantilever); wire 3 anterosuperior, well away. Measure; drill only lateral cortex (screws self-cutting/self-tapping); insert all three before removing wires; washers often used; compression mainly from mobilisation. <b>Post-op:</b> no movement restrictions; full weight-bearing permitted.</p>
${FIG('omh-screws')}
${FIG('omh-traction-setup')}
<div class="bookref">📖 <b>Open McRae Fig 17.9, p. 357:</b> three-wire inverted constellation — inferior, posterior, anterosuperior; entry level marked.</div>
<div data-widget="stepsvg" data-set="omhscrews"></div>
<div class="hint">💡 <b>"Entry at the lesser trochanter. Cortex hugging. Full weight-bearing after."</b></div>
<div class="exam"><b>🎓 For exams:</b> three positions + why; distal entry = stress riser; full WB; no movement limits.</div>
<details class="chk"><summary>✅ Checkpoint: why not start the guide wire well below the lesser trochanter?</summary><p>Distal lateral-cortex holes act as a stress riser and can cause a comminuted subtrochanteric fracture (p. 357).</p></details>`,recap:['Confirm undisplaced.', 'Lesser-trochanter entry.', 'Three cortical cantilevers.'],quiz:[{q:'First (inferior) screw role?',o:['Calcar cantilever for standing', 'Decoration only'],a:0,e:'Fig. 17.9.'},{q:'Post-op weight-bearing after cannulated screws?',o:['Full weight-bearing permitted', 'Non-weight-bearing for 3 months always'],a:0,e:'p. 357.'}]}],
cases:[{id:'mh5k1',title:'Case: Quiet Garden 1',steps:[{t:`68-year-old Garden 1, good bone, no osteoarthritis.`,q:'Box 17.1 plan?',o:['In-situ fixation with screws or DHS', 'Hemiarthroplasty for every Garden 1'],a:0,e:'Undisplaced → fixation.'}],take:['Quiet necks get quiet screws — if bone allows.']}],
flash:[['Box 17.1', 'Fix / hemi / total / DHS / nail map.'], ['Screw entry', 'Lesser-trochanter level.'], ['Three wires', 'Inferior, posterior, anterosuperior.'], ['Full WB', 'After cannulated screws.']],
exam:['Box 17.1.', 'Screw contraindications.', 'Wire positions and stress-riser warning.'],
finalHtml:`<div data-widget="spot" data-set="omh5"></div><div data-widget="termdeck" data-set="omh5"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>MH.6 Displaced elderly necks: hemiarthroplasty versus total hip.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('omh6')">→ Open</button></div>`,
sources:'Sources: McRae 3rd edition chapter 17 Box 17.1 and cannulated screw fixation (book pages 356–357), Fig. 17.9. Teaching questions by MedLearn.',
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.omh5=OMH5;
