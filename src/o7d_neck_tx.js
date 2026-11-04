/* ===== Orthopaedics · Lecture 7 · 4: Femoral neck treatment ===== */
XSTEP.neckpath={t:"Neck treatment fork (lecture pages 17–18; McRae Box 17.1)",dim:.1,svg:`<svg viewBox="0 0 700 320" style="width:100%" role="img" aria-label="Neck treatment pathway">
<g data-k="u"><rect x="40" y="40" width="180" height="60" rx="10" fill="#e8f6ee" stroke="#1f9d55"/><text x="130" y="75" text-anchor="middle" font-size="13" font-weight="700">Undisplaced → fix</text></g>
<g data-k="y"><rect x="260" y="40" width="200" height="60" rx="10" fill="#fff3cd" stroke="#d9730d"/><text x="360" y="75" text-anchor="middle" font-size="13" font-weight="700">Displaced young → fix urgent</text></g>
<g data-k="e"><rect x="500" y="40" width="180" height="60" rx="10" fill="#fde2ea" stroke="#b3476d"/><text x="590" y="75" text-anchor="middle" font-size="12" font-weight="700">Displaced elderly</text></g>
<g data-k="h"><rect x="420" y="140" width="140" height="50" rx="8" fill="#e8f0fb" stroke="#2f6db3"/><text x="490" y="170" text-anchor="middle" font-size="12">Low demand → hemi</text></g>
<g data-k="t"><rect x="580" y="140" width="110" height="50" rx="8" fill="#e8f0fb" stroke="#2f6db3"/><text x="635" y="170" text-anchor="middle" font-size="12">Fit → total</text></g>
<g data-k="fix"><rect x="40" y="220" width="280" height="55" rx="8" fill="#f5f5f5" stroke="#333"/><text x="180" y="252" text-anchor="middle" font-size="12">Screws / DHS (± open reduction if irreducible)</text></g>
</svg>`,
steps:[["Undisplaced","Cannulated screws or dynamic hip screw in situ.",["u","fix"]],["Young displaced","Clock starts: urgent reduce + fix to save the head.",["u","y","fix"]],["Elderly displaced","Replace the head — hemi if frail, total if fit and independent.",["u","y","e","h","t"]],["Irreducible young","Open reduction via anterior/anterolateral approach (lecture page 18).",["u","y","e","h","t","fix"]]]};
XPK.neckrx={t:"Pick the neck plan (pages 17–18)",opts:["Cannulated screws / DHS fixation","Hemiarthroplasty","Total hip replacement","Urgent open reduction + fixation"],items:[
["Garden II, 68-year-old, medically fit",0,"Undisplaced → fixation (McRae Box 17.1).",""],
["Garden IV, 84-year-old housebound with frame",1,"Low-demand displaced → hemiarthroplasty.",""],
["Garden IV, 72-year-old independent golfer",2,"High-demand displaced → total hip replacement.",""],
["Garden IV, 35-year-old after motorbike crash, closed reduction fails",3,"Young + irreducible → open reduce and fix.",""]]};
XS.o7d=["Spot the error",[["Tip–apex distance under 25 mm lowers cut-out risk (McRae).",1],["Fit older adults with displaced necks often do better with total hip replacement than hemiarthroplasty (McRae Box 17.1).",1],["Non-operative care is first-line for most displaced elderly neck fractures.",0,"Wrong: management is surgical except when the patient would not survive an operation (lecture / McRae)."],["Cut-out is a known fixation failure mode (lecture page 21).",1]]];
XT.o7d="dhs,tad,hemiarthro,thr,avn,garden";
const O7D={
meta:"Orthopaedics › Hip and femur › Lecture 7 › Subsection L7.4 · Lecture pages 17–21 · ⏱ about 17 minutes in 2 steps",
intro:`<p>Once Garden has spoken, theatre asks: save the head or replace it? Then, if you fix, park the lag screw like a dart in the bullseye — that is [[tad|tip–apex distance]]. McRae Box 17.1 and tip–apex teaching (book pages ~356 and 369–371).</p>`,
goals:["Apply Box 17.1 pathways","Explain tip–apex distance and cut-out"],
cards:[
{id:"hd1",title:"Conservative versus operative pathways (pages 17–18)",min:9,goal:0,obj:["Match patient + displacement to fix / hemi / total"],html:`
<div class="scene"><b>The scene:</b> Three necks on one list. A quiet Garden I in a 60-year-old. A Garden IV in a nursing-home elder who walked only to the toilet. A Garden IV in a still-working 71-year-old who takes the stairs two at a time.</div>
<p>Non-operative care is rare — reserved for patients who would not survive anaesthesia (lecture page 17 shows delayed mobilisation consequences). Operative menu (page 18): closed reduction and internal fixation with cannulated screws, [[dhs|dynamic hip screw]], or occasionally a proximal femoral nail; prosthetic replacement in older adults — lecture: often considered around &gt;70 years for displaced (and sometimes undisplaced) necks; [[hemiarthro|bipolar hemiarthroplasty]] if not very mobile; [[thr|total hip arthroplasty]] if healthy and self-caring. Young patient whose Garden III/IV will not reduce closed → open reduction through an anterior or anterolateral approach.</p>
${FIG('o7-neck-screws')}
${FIG('o7-hemi-thr')}
<div data-widget="stepsvg" data-set="neckpath"></div>
<div data-widget="pickset" data-set="neckrx"></div>
<div class="hint">💡 <b>"Undisplaced: screw it. Young displaced: race to fix. Old displaced: replace — hemi if frail, total if spry."</b></div>
<div class="exam"><b>🎓 For exams:</b> McRae Box 17.1 table; open reduction if closed fails in the young.</div>
<details class="chk"><summary>✅ Checkpoint: name plans for the three-list scene.</summary><p>Garden I → fix. Frail Garden IV → hemi. Fit stair-climbing Garden IV → total hip replacement.</p></details>`,
recap:["Fix undisplaced.","Urgent fix young displaced.","Hemi vs total by demand."],
quiz:[{q:"Fit independent older adult, displaced neck — McRae preference?",o:["Total hip replacement","Always non-operative traction for 8 weeks"],a:0,e:"Box 17.1 high demand → THR."},{q:"Irreducible displaced neck in a 40-year-old?",o:["Open reduction and fixation","Ignore displacement"],a:0,e:"Lecture page 18."}]},
{id:"hd2",title:"Dynamic hip screw craft and tip–apex distance (pages 19–21)",min:8,goal:1,obj:["Define tip–apex distance &lt;25 mm"],html:`
<div class="scene"><b>The scene:</b> A dynamic hip screw looks ‘fine’ on the table. Six weeks later the screw tip has sliced through the head into the joint — cut-out. What number was ignored?</div>
<p>The [[dhs|dynamic hip screw]] lets the fracture collapse a controlled amount as the patient walks — brilliant when the lag screw sits centre-centre near the apex. Baumgaertner’s [[tad|tip–apex distance]] adds the tip-to-apex measurements on the anteroposterior and lateral views; keep the sum &lt;25 mm to minimise cut-out (McRae Figs 17.21–17.22). Complications (lecture page 21): osteonecrosis, malreduction, secondary displacement, non-union, cut-out.</p>
${FIG('o7-dhs')}
${FIG('o7-tad')}
<div class="hint">💡 <b>"Centre-centre, deep but not through the joint — tip–apex under 25 mm is the seatbelt for your screw."</b></div>
<div class="exam"><b>🎓 For exams:</b> tip–apex distance = Xap + Xlat; target &lt;25 mm; cut-out = failure mode.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Tip–apex distance was too long (or the screw was off-centre) — technical error invited cut-out.</p></details>`,
recap:["DHS slides to allow collapse.","Tip–apex &lt;25 mm.","Cut-out, AVN, non-union."],
quiz:[{q:"Tip–apex distance target?",o:["Sum &lt;25 mm on AP + lateral","Sum &gt;50 mm always"],a:0,e:"McRae / Baumgaertner."},{q:"Cut-out means…",o:["Lag screw erodes through the femoral head","A skin-only blister"],a:0,e:"Lecture page 21."}]}],
cases:[{id:"hdk1",title:"Case: Three necks",steps:[{t:`Garden IV in a 70-year-old who still hikes.`,q:"Best reconstructive idea per McRae Box 17.1?",o:["Total hip replacement","Expectant non-operative care"],a:0,e:"High demand displaced → THR."}],take:["Demand + displacement choose the implant."]}],
flash:[["Box 17.1","Fix / hemi / total / DHS / nail map."],["Tip–apex distance","Xap+Xlat &lt;25 mm."],["Cut-out","Screw exits the head."],["Hemi vs total","Low vs high demand."]],
exam:["Box 17.1.","Tip–apex number.","Cut-out."],
finalHtml:`<div data-widget="spot" data-set="o7d"></div><div data-widget="termdeck" data-set="o7d"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L7.5 Intertrochanteric fractures.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o7e')">→ Open</button></div>`,
sources:"Sources: Lecture 7 pages 17–21; McRae's Orthopaedic Trauma and Emergency Fracture Management, 3rd edition (White, Mackenzie, Gray, 2016), chapter 17 (Box 17.1 ~page 356; tip–apex pages 369–371). Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o7d=O7D;
