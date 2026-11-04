/* ===== Orthopaedics · Lecture 8 · 7: Knee dislocation (pages 53, 59–66) ===== */
XTREE.kndis={t:"Knee dislocation emergency path (pages 60–66)",start:"s1",n:{
s1:{q:"The knee looked 'out' on the pitch and is grossly unstable. First step?",o:[["Reduce now along the line of the leg (avoid hyperextension)","s2"],["Wait for magnetic resonance imaging before touching it","=Wrong: ischaemic time matters — reduce first (page 64)."]]},
s2:{q:"After reduction, the foot is cool and pulses are doubtful.",o:[["Urgent vascular assessment ± computed tomography angiography","s3"],["Send home with a crepe bandage","=Never: popliteal artery injury is the feared early complication."]]},
s3:{q:"Pulses return after reduction; ankle–brachial index is reassuring.",o:[["Serial neurovascular checks; brace/external fixator; plan definitive ligament care","=Correct pathway (pages 64–66). Watch common peroneal and tibial nerves too."],["Assume nothing can go wrong later","=Late ischaemia and compartment syndrome still happen — observe."]]}
}};
XS.o8g=["Spot the error",[["Knee dislocation means rupture of at least two of the four major ligament groups.",1],["Patients often say 'knee dislocation' when they mean patellar dislocation — clarify.",1],["A palpable distal pulse proves the popliteal artery is uninjured.",0,"Wrong: pulse does not exclude significant arterial injury; use serial examination and a low threshold for angiography (lecture + McRae)."],["Hyperextension during reduction risks the popliteal vessels.",1]]];
XT.o8g="kneedis,schenk,poplart,peronealn,compsyn,acl,pcl,mcl";
const O8G={
meta:"Orthopaedics › Knee and leg › Lecture 8 › Subsection L8.7 · Lecture 8 pages 53 and 59–66 · ⏱ about 15 minutes in 2 bite-sized steps",
intro:`<p>[[kneedis|Knee (tibiofemoral) dislocation]] is a multi-ligament disaster with a real risk to the [[poplart|popliteal artery]] and the [[peronealn|common peroneal nerve]]. Under-diagnosed — need suspicion. McRae chapter 19, Knee dislocation (book pages 427–430).</p>`,
goals:["Define dislocation and reduce safely","Prioritise vessel and nerve surveillance"],
cards:[
{id:"og1",title:"Definition, classification, recognition (pages 53, 59–63)",min:7,goal:0,obj:["Define multi-ligament injury and ask the right history"],html:`
<div class="scene"><b>The scene:</b> After a motorbike crash the knee looked backwards on the roadside and 'went back in' before the ambulance arrived. In hospital the joint looks almost normal — but it opens in every direction.</div>
<p>Definition (page 60): complete disruption of tibiofemoral integrity; rupture of at least two of the four major ligament structures; often under-diagnosed. [[schenk|Schenck]] anatomic classification (page 61). History (page 62): did it look dislocated? Was it the patella instead? Examine ligaments and distal neurovascular status. Imaging (page 63): X-ray; angio-computed tomography when vessel injury is possible.</p>
<div class="hint">💡 <b>"Reduced before arrival ≠ safe. Treat unstable multi-ligament knees as dislocations until proven otherwise."</b></div>
<div class="exam"><b>🎓 For exams:</b> ≥2 major ligament groups; clarify patellar vs tibiofemoral; Schenck types.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Spontaneously reduced knee dislocation — still a vascular emergency work-up and multi-ligament plan.</p></details>`,
recap:["≥2 ligament groups.","May self-reduce — still dangerous.","Ask patella vs tibiofemoral."],
quiz:[{q:"Minimum ligament definition of knee dislocation in the lecture?",o:["At least two of the four major ligament structures","Any medial collateral sprain","Patellar tilt alone"],a:0,e:"Page 60."},{q:"Why clarify 'what dislocated'?",o:["Patients often mean the patella","It never matters","Only for billing"],a:0,e:"Page 62."}]},
{id:"og2",title:"Emergency care and complications (pages 64–66)",min:8,goal:1,obj:["Reduce, protect vessels, list early and late complications"],html:`
<div class="scene"><b>The scene:</b> Pulses are present after reduction, but two hours later the calf is rock-hard and pain on passive toe stretch is extreme.</div>
<p>Reduce as soon as possible; hold with brace, plaster or external fixator; pull in the line of the leg; <b>avoid hyperextension</b> because of the popliteal vessels (page 64). Definitive care has moved away from purely non-operative traditions toward staged ligament reconstruction once the limb is safe.</p>
<p>Early complications (pages 65–66): [[poplart|popliteal artery]] injury — serial assessment ± angiography; neurological injury — tibial and [[peronealn|common peroneal]] nerves; [[compsyn|compartment syndrome]]. Late: stiffness, chronic instability, post-traumatic arthritis (McRae).</p>
${FIG('o8-knee-dislocate-vessel')}
<div data-widget="tree" data-set="kndis"></div>
<div class="hint">💡 <b>"Pulse present ≠ artery innocent. Pain on stretch ≠ 'just sore'."</b></div>
<div class="exam"><b>🎓 For exams:</b> reduce without hyperextension; popliteal artery; common peroneal nerve; compartment syndrome.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Acute compartment syndrome after dislocation/trauma — urgent four-compartment fasciotomy (${XL("o8k","L8.11")}).</p></details>`,
recap:["Reduce now; no hyperextension.","Watch artery, nerves, compartments.","Definitive ligaments once the limb is safe."],
quiz:[{q:"During reduction avoid…",o:["Hyperextension","Gentle inline traction","Neurovascular checks"],a:0,e:"Page 64."},{q:"Common arterial injury?",o:["Popliteal artery","Only the radial artery","Coronary artery"],a:0,e:"Pages 65–66."}]}],
cases:[{id:"ogk1",title:"Case: Self-reduced on the roadside",steps:[{t:`High-energy trauma, history of deformity that self-reduced, bicruciate laxity, foot dorsiflexion weak.`,q:"Which nerve is likely?",o:["Common peroneal nerve","Only the olfactory nerve","No nerve is at risk"],a:0,e:"Foot drop pattern."},{t:`Ankle–brachial index is borderline.`,q:"Next?",o:["Urgent vascular imaging / surgical review","Discharge"],a:0,e:"Do not trust a single reassuring moment."}],take:["Dislocation = vessel + nerve + compartment mindset."]}],
flash:[["Definition","≥2 major ligament groups; may self-reduce."],["Reduce","Inline; avoid hyperextension."],["Artery","Popliteal — serial checks ± angio-computed tomography."],["Nerve","Common peroneal → foot drop."]],
exam:["Definition and Schenck idea.","Reduction rules.","Early complications list."],
finalHtml:`<div data-widget="spot" data-set="o8g"></div><div data-widget="termdeck" data-set="o8g"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L8.8 Tibial spine fractures.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o8h')">→ Open</button></div>`,
sources:"Sources: Lecture 8 pages 53, 59–66; McRae 3rd edition chapter 19 Knee dislocation (book pages 427–430). Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o8g=O8G;
