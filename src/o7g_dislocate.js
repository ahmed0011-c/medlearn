/* ===== Orthopaedics · Lecture 7 · 7: Hip dislocation ===== */
XSTEP.dashchain={t:"Dashboard injury chain (lecture pages 40–41; McRae 375)",dim:.1,svg:`<svg viewBox="0 0 700 280" style="width:100%" role="img" aria-label="Dashboard force chain">
<g data-k="k"><rect x="40" y="100" width="80" height="50" rx="8" fill="#f6c945" stroke="#a07800"/><text x="80" y="130" text-anchor="middle" font-size="12">knee</text></g>
<g data-k="s"><rect x="150" y="100" width="120" height="50" rx="8" fill="#e8f0fb" stroke="#2f6db3"/><text x="210" y="130" text-anchor="middle" font-size="12">femoral shaft</text></g>
<g data-k="h"><circle cx="340" cy="125" r="36" fill="#fde2ea" stroke="#b3476d"/><text x="340" y="130" text-anchor="middle" font-size="12">hip out</text></g>
<g data-k="a"><path d="M400 90 L480 90 L480 160 L400 160 Z" fill="#dfe7f5" stroke="#2f6db3"/><text x="440" y="130" text-anchor="middle" font-size="11">posterior wall</text></g>
<g data-k="n"><text x="520" y="130" font-size="12" font-weight="700" fill="#8a2f52">sciatic nerve</text></g>
</svg>`,
steps:[["Knee hit","Dashboard impact starts the force.",["k"]],["Shaft","Force travels up the femur (± shaft fracture).",["k","s"]],["Hip out","Head punches posteriorly out of the socket.",["k","s","h"]],["Neighbours","Posterior wall, Pipkin head chip, sciatic nerve share the blast.",["k","s","h","a","n"]]]};
XPK.disrx={t:"Dislocation decisions (pages 43–45)",opts:["Urgent closed reduction + stability test","Open reduction (blocks / failed closed)","Revision arthroplasty pathway","Expectant nerve observation if deficit present before reduction"],items:[
["Native posterior dislocation, neurovascular exam documented",0,"Reduce urgently — aim within 6 hours to cut AVN risk (lecture/McRae).",""],
["Closed reduction impossible; CT shows interposed fragment",1,"Open reduction.",""],
["Dislocated total hip after low chair sit in a confused patient",2,"Reduce; then address component position/soft tissues — revision if recurrent.",""],
["Sciatic palsy noted before any reduction attempt",3,"Document; reduce carefully; expectant unless new after reduction/surgery.",""]]};
XS.o7g=["Spot the error",[["Posterior native dislocations are commonest after high-energy dashboard trauma.",1],["Posterior dislocation posture is typically shortened, flexed and internally rotated.",1],["Anterior dislocation is commoner than posterior in native hips.",0,"Wrong: anterior is less common (lecture page 41)."],["Reduction within 6 hours lowers avascular necrosis risk (lecture page 45).",1]]];
XT.o7g="hipdisloc,pipkin,sciaticn,avn,thr";
const O7G={
meta:"Orthopaedics › Hip and femur › Lecture 7 › Subsection L7.7 · Lecture pages 40–45 · ⏱ about 16 minutes in 2 steps",
intro:`<p>When the femoral head leaves home, the clock and the sciatic nerve both start shouting. Native hips leave through the back door after dashboards; replaced hips can slip out while sitting down. McRae hip dislocation (book pages 375–377).</p>`,
goals:["Contrast native versus prosthetic dislocation stories","Run reduce → image → complications"],
cards:[
{id:"hg1",title:"Mechanisms and diagnosis (pages 40–42)",min:8,goal:0,obj:["Describe dashboard chain and postures"],html:`
<div class="scene"><b>The scene:</b> After a motorway pile-up, a driver’s right hip is locked. The knee that kissed the dash is swollen. The leg is short, flexed and turned in. He cannot feel the top of his foot well.</div>
<p>Native hip (pages 40–41; McRae 375): usually posterior, high energy — dashboard force may also break patella, femoral shaft, hip, posterior acetabular wall, and bruise the [[sciaticn|sciatic nerve]]. Anterior dislocation follows abduction force — watch femoral vessels/nerve. Prosthetic hips: instability from sitting, low-energy falls, or high energy. Clinical (page 42): severe pain, refuses passive motion; posture may be masked if the femur is also broken. Imaging: X-ray then CT after reduction.</p>
<div data-widget="stepsvg" data-set="dashchain"></div>
<div class="hint">💡 <b>"Neck fracture = foot points out. Posterior dislocation = foot points in. Always check the nerve before you pull."</b></div>
<div class="exam"><b>🎓 For exams:</b> posterior posture; dashboard associated injuries; sciatic vs femoral nerve by direction.</div>
<details class="chk"><summary>✅ Checkpoint: why is the foot numb?</summary><p>Posterior dislocation threatens the sciatic nerve — document motor/sensory findings before reduction.</p></details>`,
recap:["Posterior = dashboard classic.","Posture vs neck fracture.","Nerve first, then reduce."],
quiz:[{q:"Classic posterior dislocation posture?",o:["Short, flexed, internally rotated","Long, extended, never painful"],a:0,e:"Page 42."},{q:"Associated dashboard injuries include…",o:["Patella, shaft, posterior wall, sciatic nerve","Only fingernail bruises"],a:0,e:"McRae 375 / lecture 40."}]},
{id:"hg2",title:"Treatment and complications (pages 43–45)",min:8,goal:1,obj:["Time-critical reduction and complication map"],html:`
<div class="scene"><b>The scene:</b> Sixty minutes after arrival the hip is still out. CT later shows a Pipkin chip and a posterior wall fragment.</div>
<p>Treat (page 43): closed reduction and stability test; open reduction if closed fails or fragments block; treat Pipkin/acetabular companions; revision surgery for failed arthroplasty. Complications (page 45): sciatic palsy in ~10% of native dislocations — about one-third recover fully, one-third partially, one-third permanent (lecture); [[avn|avascular necrosis]] up to ~10%, reduced by reduction within 6 hours; osteoarthritis ~25% within 8 years (lecture).</p>
${FIG('o7-reduce-hip')}
<div data-widget="pickset" data-set="disrx"></div>
<div class="hint">💡 <b>"Six-hour golden window for the head’s blood — reduce, then CT for hitchhikers."</b></div>
<div class="exam"><b>🎓 For exams:</b> reduce &lt;6 h; sciatic 10% with 1/3–1/3–1/3 recovery; AVN ≤10%; OA ~25%/8 years (lecture figures).</div>
<details class="chk"><summary>✅ Checkpoint: still out at 60 minutes.</summary><p>Escalate to urgent closed reduction under adequate anaesthesia now; plan CT; Pipkin/wall may need later fixation (${XL("o7b","L7.2")}).</p></details>`,
recap:["Reduce urgently.","CT for fragments.","Nerve, AVN, arthritis."],
quiz:[{q:"AVN risk falls if reduction occurs within…",o:["About 6 hours","About 6 weeks"],a:0,e:"Lecture page 45."},{q:"Sciatic palsy rate after native dislocation (lecture)?",o:["About 10%","About 90%"],a:0,e:"Page 45."}]}],
cases:[{id:"hgk1",title:"Case: In-toed driver",steps:[{t:`Posterior dislocation, sciatic weakness pre-reduction. Reduced at 4 hours. CT: Pipkin II + posterior wall.`,q:"Next thematic plan?",o:["Protect nerve expectantly; plan fixation of head/wall as needed","Ignore CT because the hip is in"],a:0,e:"Companions still need a plan."}],take:["Reduce fast; finish the story with CT."]}],
flash:[["Posterior posture","Short, flexed, internally rotated."],["Dashboard chain","Knee → shaft → hip → wall → sciatic."],["6-hour rule","Earlier reduction, less AVN."],["Sciatic recovery","Roughly thirds (lecture)."]],
exam:["Posture.","Associated injuries.","Complication figures."],
finalHtml:`<div data-widget="spot" data-set="o7g"></div><div data-widget="termdeck" data-set="o7g"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L7.8 Periprosthetic and interprosthetic femoral fractures.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o7h')">→ Open</button></div>`,
sources:"Sources: Lecture 7 pages 40–45; McRae's Orthopaedic Trauma and Emergency Fracture Management, 3rd edition (White, Mackenzie, Gray, 2016), hip dislocation (book pages 375–377). Lecture statistics quoted as lecture data. Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o7g=O7G;
