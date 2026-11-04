XSTEP.omhdhs={t:"DHS insertion steps (McRae Fig. 17.27)",dim:.08,svg:`<svg viewBox="0 0 700 260" style="width:100%" role="img" aria-label="DHS steps">
<g data-k="w"><rect x="20" y="40" width="120" height="45" rx="6" fill="#e8f0fb" stroke="#2f6db3"/><text x="80" y="68" text-anchor="middle" font-size="11" font-weight="700">Guide wire</text></g>
<g data-k="m"><rect x="160" y="40" width="120" height="45" rx="6" fill="#e8f0fb" stroke="#2f6db3"/><text x="220" y="68" text-anchor="middle" font-size="11" font-weight="700">Measure</text></g>
<g data-k="d"><rect x="300" y="40" width="120" height="45" rx="6" fill="#fff3cd" stroke="#d9730d"/><text x="360" y="68" text-anchor="middle" font-size="11" font-weight="700">Drill</text></g>
<g data-k="l"><rect x="440" y="40" width="120" height="45" rx="6" fill="#e8f6ee" stroke="#1f9d55"/><text x="500" y="68" text-anchor="middle" font-size="11" font-weight="700">Lag screw</text></g>
<g data-k="p"><rect x="580" y="40" width="100" height="45" rx="6" fill="#fde2ea" stroke="#b3476d"/><text x="630" y="68" text-anchor="middle" font-size="11" font-weight="700">Plate</text></g>
</svg>`,
steps:[["Wire to apex","Jig on lateral shaft; tip near head apex; anti-rotation wire/screw above if unstable/basicervical — tighten antirot before overdrilling DHS wire.",["w"]],["Measure and drill","Measuring device on lateral cortex; composite drill for screw+barrel channel; tap rarely needed in elderly.",["w","m","d"]],["Lag and plate","Insert lag screw with flats aligned for barrel; seat plate gently — hammering can drive screw into joint/pelvis in weak bone; distal screw first to centralise plate; full WB, no movement limits.",["w","m","d","l","p"]]]};

XS.omh10=["Spot the error",[["A too-lateral cephalomedullary start point risks varus and construct failure (McRae Fig. 17.30).",1],["Tip–apex distance still matters when using a nail (p. 370).",1],["Hammering the DHS plate hard is always safe in osteoporotic bone.",0,"Wrong: can drive the lag screw into the joint or pelvis (p. 369)."],["Elderly patients after nailing are rarely practically kept non-weight-bearing (p. 371).",1]]];
XT.omh10='dhs,tad,cephalonail,subtroch,calcar';
const OMH10={
meta:'Orthopaedics › McRae Ch. 17: Hip › MH.10 · Book pages 367–372 · ⏱ about 20 minutes in 2 steps',
intro:`<p>Traction-table set-up, true-lateral imaging, step-by-step [[dhs|dynamic hip screw]] insertion, then [[cephalonail|cephalomedullary nail]] craft including start-point disasters.</p>`,
goals:['Set up traction table and true lateral imaging', 'Avoid varus from a lateral nail start point'],
cards:[{id:'mh10a',title:'Shared set-up and dynamic hip screw insertion (pages 367–369)',min:10,goal:0,obj:['Describe traction-table and true-lateral tricks', 'List DHS steps and anti-rotation pearl'],html:`
<div class="scene"><b>The scene:</b> The lateral image is a diagonal mess because anteversion and external rotation of the distal fragment fooled the C-arm. McRae rotates the intensifier until the greater trochanter sits on the neck — a true lateral.</div>
<p><b>Shared set-up (Fig. 17.25):</b> radiolucent traction table, foot in traction boot; uninjured limb out of the beam (lithotomy or both extended dropping the good leg). Cannulated screws: no reduction — do not displace with traction. Extracapsular: reduce with longitudinal traction then internal rotation until patella points up; rarely need an assistant to lift a sagging proximal femur. Nailing: banana-position the trunk away from the hip for start-point access. Fluoroscopy: rotate screen so groin post is vertical (Fig. 17.26A); then true lateral with greater trochanter superimposed on neck (Fig. 17.26B) — usually lower the surgeon-side C-arm end.</p>
<p><b>DHS approach:</b> incision from just below greater trochanter distally; no internervous plane (muscle-splitting); pull vastus lateralis forward, incise aponeurosis ~2 cm from intermuscular septum, elevate muscle. <b>Steps (Fig. 17.27):</b> guide wire to apex; anti-rotation wire/screw for unstable/basicervical — insert/tighten antirot before overdrilling DHS wire; measure; drill; lag screw; plate — distal screw first; full weight-bearing, no movement restrictions.</p>
${FIG('omh-traction-setup')}
${FIG('omh-true-lateral')}
${FIG('omh-dhs')}
<div class="bookref">📖 <b>Open McRae Fig 17.25, p. 367:</b> traction-table set-up shared by screws, DHS and nails.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.26, p. 368:</b> image-intensifier positioning — groin post vertical, then true lateral.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.27, p. 369:</b> DHS insertion sequence 1–5 with anti-rotation wire b.</div>
<div data-widget="stepsvg" data-set="omhdhs"></div>
<div class="hint">💡 <b>"True lateral = trochanter on neck. Anti-rotation screw before you drill the DHS wire in unstable patterns."</b></div>
<div class="exam"><b>🎓 For exams:</b> banana position for nails; true lateral; antirot first; gentle plate seating; full WB.</div>
<details class="chk"><summary>✅ Checkpoint: why place the most distal plate screw first?</summary><p>Ensures the whole plate lies centrally against the femur (p. 369).</p></details>`,recap:['Traction table rules.', 'True lateral imaging.', 'DHS steps + antirot.'],quiz:[{q:'True lateral hip fluoroscopy cue?',o:['Greater trochanter superimposed on the femoral neck', 'Any oblique fog is fine'],a:0,e:'Fig. 17.26B.'},{q:'Unstable basicervical during DHS?',o:['Place and tighten anti-rotation screw before overdrilling the DHS wire', 'Ignore rotation risk'],a:0,e:'p. 369.'}]},{id:'mh10b',title:'Cephalomedullary nail: forces, start point, steps (pages 370–372)',min:10,goal:1,obj:['Name deforming muscles', 'Avoid lateral/posterior start-point failures'],html:`
<div class="scene"><b>The scene:</b> A nail starts too lateral. The fracture tilts into varus, the lag screw rides high, and cut-out is already writing itself into the follow-up clinic.</div>
<p><b>Reduction forces (Fig. 17.28):</b> glutei abduct proximal fragment; iliopsoas flexes and externally rotates; adductors/quadriceps/hamstrings shorten and translate the shaft medially — may need open clamp or cerclage. <b>Start points (Fig. 17.29):</b> lateral to tip, tip of trochanter (most cephalomedullary nails), or piriformis (straight nails). Sequential broaching tends to migrate entry laterally — too lateral → varus malalignment, high screw, construct failure (Fig. 17.30). Posterior start into a fracture extension can miss the proximal fragment (Fig. 17.31).</p>
<p><b>Steps (Fig. 17.32):</b> threaded wire → overdrill; ball-tipped wire to distal segment (reduction spoon helps avoid medial escape); measure/ream; nail on jig so lag-screw holes allow centre-centre head position (rotate nail for lateral plane); TAD still &lt;2.5 cm; lag screw ± set-screw (sliding like DHS or rigid lock); distal free-hand locking with perfect circles. <b>Weight-bearing:</b> elderly rarely restricted; young highly comminuted locked constructs may need restricted weight-bearing ~8 weeks until callus.</p>
${FIG('omh-subtroch-forces')}
${FIG('omh-nail-start')}
<div class="bookref">📖 <b>Open McRae Fig 17.28, p. 371:</b> muscular forces on a subtrochanteric fracture.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.29, p. 372:</b> start points a lateral, b tip, c piriformis.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.30, p. 372:</b> too-lateral start → varus.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.31, p. 372:</b> posterior start misses proximal fragment.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.32, p. 373:</b> nail technique sequence.</div>
<div class="hint">💡 <b>"Start at the tip, not lateral. TAD still rules. Perfect circles distally."</b></div>
<div class="exam"><b>🎓 For exams:</b> three deforming muscle groups; lateral start = varus; TAD &lt;2.5 cm; WB nuances young vs old.</div>
<details class="chk"><summary>✅ Checkpoint: name the three muscle-force problems around a subtrochanteric fracture.</summary><p>Abduction (glutei); flexion/external rotation (iliopsoas); medial translation/shortening (adductors, quadriceps, hamstrings) (Fig. 17.28).</p></details>`,recap:['Know the deforming forces.', 'Start-point discipline.', 'TAD + distal locks.'],quiz:[{q:'Too-lateral nail start tends to cause…',o:['Varus malalignment and high screw position', 'Automatic perfect valgus'],a:0,e:'Fig. 17.30.'},{q:'TAD target during nailing?',o:['Still under 2.5 cm', 'Ignore TAD once a nail is chosen'],a:0,e:'p. 370.'}]}],
cases:[{id:'mh10k1',title:'Case: Banana and beam',steps:[{t:`Planning a short cephalomedullary nail.`,q:'Trunk position tip?',o:['Banana the trunk away from the hip for start-point access', 'Ignore access and fight soft tissues'],a:0,e:'p. 367.'}],take:['Set-up prevents start-point disasters.']}],
flash:[['True lateral', 'Trochanter on neck.'], ['Antirot first', 'Before DHS overdrill.'], ['Lateral start', 'Varus nail.'], ['Perfect circles', 'Distal free-hand locks.']],
exam:['Set-up.', 'DHS sequence.', 'Nail start-point failures.'],
finalHtml:`<div data-widget="spot" data-set="omh10"></div><div data-widget="termdeck" data-set="omh10"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>MH.11 Follow-up and complications after hip fracture.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('omh11')">→ Open</button></div>`,
sources:'Sources: McRae 3rd edition chapter 17 surgical techniques DHS and cephalomedullary nail (book pages 367–372), Figs 17.25–17.32. Teaching questions by MedLearn.',
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.omh10=OMH10;
