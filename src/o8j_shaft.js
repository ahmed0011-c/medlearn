/* ===== Orthopaedics · Lecture 8 · 10: Tibia and fibula shaft fractures (pages 88–99) ===== */
XPK.shafttx={t:"Hold the tibial shaft (pages 93–97)",opts:["Non-operative cast pathway","Intramedullary nail (usual adult choice)","Plate or external fixator special case"],items:[
["Low-energy undisplaced mid-shaft fracture in a compliant adult",0,"Full-length cast, knee slightly flexed; fibular displacement unimportant (page 94).",""],
["Displaced adult diaphyseal fracture, soft tissues OK",1,"Closed locked intramedullary nailing is the method of choice (page 95; McRae).",""],
["Proximal-third shaft fracture going into valgus/procurvatum during nailing",1,"Add Poller (blocking) screws to steer the nail (page 96).",""],
["Unstable paediatric shaft fracture with open growth plates",2,"Angle-stable plate / minimally invasive plate osteosynthesis rather than adult-style nailing across the physis (page 97).",""],
["Severe open contamination or damage-control soft tissues",2,"External fixator as a bridge (page 97).",""]]};
XSORT.shaftcomp={t:"Early or late complication? (pages 98–99)",labels:["Early","Late"],items:[
["Compartment syndrome before or after nailing",0,"Anticipate; monitor clinically ± pressure (page 98)."],
["Absent foot pulses after high-energy injury",0,"Neurovascular injury — emergency revascularisation if all three vessels damaged (lecture)."],
["Non-union after an open fracture",1,"More common after open injury/open surgery; rare (&lt;1%) after closed nailing (lecture page 99)."],
["Malunion after monoaxial frame treatment",1,"Unusual after nailing; routine after some non-operative or monoaxial frames (lecture)."]]};
XS.o8j=["Spot the error",[["Twisting force → spiral fractures often at different tibia/fibula levels; angulatory force → transverse/short oblique at the same level.",1],["Open fractures still risk compartment syndrome.",1],["Fibular displacement always dictates tibial surgery on its own.",0,"Wrong: for low-energy tibial care the lecture says fibular displacement is unimportant (page 94)."],["Closed intramedullary nailing is the usual method of choice in adults.",1]]];
XT.o8j="imnail,poller,compsyn,deltap,fasciot";
const O8J={
meta:"Orthopaedics › Knee and leg › Lecture 8 › Subsection L8.10 · Lecture 8 pages 88–99 · ⏱ about 16 minutes in 2 bite-sized steps",
intro:`<p>The tibial shaft is subcutaneous and unforgiving. About 23.5% of these fractures are open in the lecture series (page 89). Goals: soft-tissue survival, catch [[compsyn|compartment syndrome]], and hold alignment — usually with an [[imnail|intramedullary nail]]. McRae chapter 20, Tibial shaft fractures (book pages 456–471). <b>Note:</b> distal fibular / ankle fractures are listed on the lecture contents slide but have no dedicated slide body in this deck; see McRae chapter 21 when you study the ankle.</p>`,
goals:["Read mechanism and soft-tissue warning signs","Choose cast, nail, plate or frame"],
cards:[
{id:"oj1",title:"Mechanism, imaging, clinical red flags (pages 88–93)",min:8,goal:0,obj:["Spot open injury and impending compartment syndrome"],html:`
<div class="scene"><b>The scene:</b> A football tackle produces a spiral tibial fracture and a fibular fracture higher up. The skin is bruised and tight. He cannot move his toes without severe pain on passive stretch.</div>
<p>Mechanism (page 89): twisting → spiral, often different tibia/fibula levels; angulatory → transverse/short oblique at the same level; open in 23.5% (lecture). Imaging (page 90): pattern, level, angulation, displacement; rotation inferred from tibiofibular interspace width; computed tomography as needed. Clinical (page 92): soft-tissue damage, open wound?, pulses, sensation, toe movement — always alert for [[compsyn|compartment syndrome]]. Objectives (page 93): limit soft-tissue damage, prevent/recognise compartment syndrome, obtain and hold alignment.</p>
<div class="hint">💡 <b>"Different-level spiral = twist. Same-level transverse = bend. Pain on stretch = compartments until proven otherwise."</b></div>
<div class="exam"><b>🎓 For exams:</b> lecture open rate 23.5%; mechanism patterns; soft-tissue and compartment checklist.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Twisting injury pattern + impending compartment syndrome — split casts/dressings, urgent surgical review for fasciotomy (${XL("o8k","L8.11")}), then definitive bony hold.</p></details>`,
recap:["Twist vs bend patterns.","Open ~23.5% (lecture).","Soft tissues and compartments first."],
quiz:[{q:"Spiral tibia + fibula at another level suggests…",o:["Twisting force","Only a direct puncture without torque"],a:0,e:"Page 89."},{q:"Must always watch for…",o:["Compartment syndrome","Dental caries only"],a:0,e:"Page 92."}]},
{id:"oj2",title:"Treatment choices and complications (pages 94–99)",min:8,goal:1,obj:["Match implant to fracture personality"],html:`
<div class="scene"><b>The scene:</b> Displaced mid-shaft adult fracture, closed, soft tissues acceptable. The registrar proposes a locked nail; the proximal-third neighbour case needed Poller screws.</div>
<p>Low-energy non-operative (page 94): undisplaced/minimally displaced — full-length cast, knee slightly flexed; fibular displacement unimportant. Operative (page 95): closed [[imnail|intramedullary nailing]] method of choice; start partial weight-bearing early. Special stations (page 96): proximal third — valgus/procurvatum risk → [[poller|Poller screws]]; distal third — careful reduction. Plates / minimally invasive plate osteosynthesis for metaphyseal or paediatric unstable shafts; external fixator when needed (page 97).</p>
<p>Early complications (page 98): compartment syndrome; neurovascular injury. Late (page 99): delayed/non-union rare after closed nailing (&lt;1% lecture) but higher after open fractures/open surgery; malunion unusual after nailing.</p>
<div data-widget="pickset" data-set="shafttx"></div>
<div data-widget="sortset" data-set="shaftcomp"></div>
<div class="hint">💡 <b>"Adult diaphysis → nail. Physis or metaphysis personality → plate/frame. Poller steers proximal nails."</b></div>
<div class="exam"><b>🎓 For exams:</b> nail as default adult hold; Poller for proximal third; compartment before/after surgery; lecture non-union &lt;1% after closed nailing.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Yes — locked nail for the mid-shaft; remember Pollers when the fracture is proximal.</p></details>`,
recap:["Cast for selected low-energy undisplaced.","Nail for most adult shafts.","Poller proximally; watch compartments and union."],
quiz:[{q:"Method of choice for most adult tibial shafts?",o:["Closed locked intramedullary nail","Always plate across the whole diaphysis"],a:0,e:"Page 95."},{q:"Proximal-third deformity in valgus/procurvatum — adjunct?",o:["Poller (blocking) screws","Ignore the alignment"],a:0,e:"Page 96."}]}],
cases:[{id:"ojk1",title:"Case: Open spiral",steps:[{t:`Gustilo open spiral tibia after a motorcycle slide; pulses present; compartments soft after resuscitation.`,q:"Damage-control bony hold often starts with…",o:["External fixator then staged definitive fixation","Immediate unprotected weight-bearing"],a:0,e:"Soft tissues dictate staging."}],take:["Soft tissue personality before implant pride."]}],
flash:[["Open rate","23.5% in the lecture series."],["Nail","Adult method of choice."],["Poller","Steers proximal nails."],["Non-union after closed nail","&lt;1% (lecture)."]],
exam:["Mechanism patterns.","Cast vs nail vs plate/frame.","Early and late complications."],
finalHtml:`<div data-widget="spot" data-set="o8j"></div><div data-widget="termdeck" data-set="o8j"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L8.11 Compartment syndrome of the leg.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o8k')">→ Open</button></div>`,
sources:"Sources: Lecture 8 pages 88–99; McRae 3rd edition chapter 20 Tibial shaft fractures (book pages 456–471). Distal fibular fractures: listed in lecture contents without slide body — see McRae chapter 21 Ankle. Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o8j=O8J;
