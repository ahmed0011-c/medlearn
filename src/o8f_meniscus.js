/* ===== Orthopaedics · Lecture 8 · 6: Meniscal injuries (pages 54–58) ===== */
XSTEP.menzones={t:"Meniscus zones and healing (page 58 and McRae chapter 19)",dim:.12,svg:`<svg viewBox="0 0 640 300" style="width:100%" role="img" aria-label="Meniscus rings: outer red-red, middle red-white, inner white-white">
<g data-k="ww"><ellipse cx="320" cy="160" rx="70" ry="45" fill="#f5f5f5" stroke="#999"/><text x="320" y="165" text-anchor="middle" font-size="12">white–white</text><text x="320" y="180" text-anchor="middle" font-size="11">no blood</text></g>
<g data-k="rw"><ellipse cx="320" cy="160" rx="120" ry="80" fill="none" stroke="#e6a23c" stroke-width="28"/><text x="480" y="120" font-size="12" fill="#a06700">red–white</text></g>
<g data-k="rr"><ellipse cx="320" cy="160" rx="160" ry="110" fill="none" stroke="#c62828" stroke-width="28"/><text x="520" y="200" font-size="12" fill="#8a1c1c">red–red</text><text x="520" y="216" font-size="11">capsule blood</text></g>
<g data-k="note"><text x="40" y="40" font-size="13" font-weight="700">Peripheral = can heal / repair</text><text x="40" y="60" font-size="13">Inner = trim if symptomatic</text></g></svg>`,
steps:[["The rings","Think of three rings from outside in.",["rr"]],["Red–red","Peripheral, vascular — repair can work.",["rr","rw"]],["Red–white","Watershed — selected repairs.",["rr","rw","ww"]],["White–white","Avascular inner third — healing unlikely; partial meniscectomy if needed.",["rr","rw","ww","note"]]]};
XS.o8f=["Spot the error",[["Twisting on a planted foot is the classic meniscal mechanism.",1],["Magnetic resonance imaging is the key soft-tissue study after X-ray excludes fracture.",1],["Meniscal surgery helps every older patient with osteoarthritis and a degenerate tear.",0,"Wrong: the lecture states elderly patients with osteoarthritis get no benefit from meniscal operation (page 58)."],["Only the peripheral red zone has a reliable blood supply.",1]]];
XT.o8f="meniscus,redzone,acl,lachman";
const O8F={
meta:"Orthopaedics › Knee and leg › Lecture 8 › Subsection L8.6 · Lecture 8 pages 54–58 · ⏱ about 12 minutes in 2 bite-sized steps",
intro:`<p>The [[meniscus|menisci]] are load spreaders. Tear one with a twist and the knee may lock, swell and refuse full extension. Healing follows blood supply. McRae chapter 19, Meniscal injuries (book pages 432–434); the lecture classification figure cites McRae 4th edition.</p>`,
goals:["Link mechanism and clinical features to imaging","Choose non-operative care vs repair vs trim by zone and patient"],
cards:[
{id:"of1",title:"Mechanism, features, imaging (pages 54–57)",min:6,goal:0,obj:["Recognise the meniscal story"],html:`
<div class="scene"><b>The scene:</b> After a sudden twist with the boot planted, Sam cannot fully straighten the knee. It stiffens and hurts along the joint line. X-ray is normal.</div>
<p>Mechanism (page 56): sudden twisting or rotating with the foot anchored. Features: difficulty fully extending, stiffness, pain, restricted motion soon after injury. Imaging (page 57): X-ray to exclude fracture; [[meniscus|magnetic resonance imaging]] for the meniscus (and ligaments).</p>
<div class="hint">💡 <b>"Planted foot + twist + joint-line pain ± locking = meniscus until magnetic resonance imaging says no."</b></div>
<div class="exam"><b>🎓 For exams:</b> mechanism; mechanical block to extension; magnetic resonance imaging after plain films.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Suspect meniscal tear — arrange magnetic resonance imaging; do not force the locked knee.</p></details>`,
recap:["Twist on planted foot.","Locking / extension block.","X-ray then magnetic resonance imaging."],
quiz:[{q:"First imaging step?",o:["Plain X-ray to exclude fracture","Immediate angiography","No images ever"],a:0,e:"Page 57."},{q:"Best soft-tissue study?",o:["Magnetic resonance imaging","Only skin ultrasound for the meniscus body","Bone densitometry"],a:0,e:"Page 57."}]},
{id:"of2",title:"Zones and treatment (page 58)",min:6,goal:1,obj:["Use vascular zones and age/arthritis to choose care"],html:`
<div class="scene"><b>The scene:</b> Two patients have meniscal tears on magnetic resonance imaging. A: 22-year-old peripheral red–red tear, otherwise healthy knee. B: 68-year-old with established osteoarthritis and a degenerate body tear, mild symptoms.</div>
<p>Non-operative (page 58): mild symptoms; exclusion of a severe tear; elderly with osteoarthritis — lecture: no effect of meniscal operation. Repair when the tear is in the [[redzone|red–red]] (and selected red–white) zones. White–white symptomatic flaps are trimmed, sparing as much meniscus as possible. McRae: preserve meniscus when repair is realistic.</p>
<div data-widget="stepsvg" data-set="menzones"></div>
${FIG('o8-meniscus-zones')}
<div class="hint">💡 <b>"Blood heals. No blood → do not promise repair. Arthritis + mild symptoms → leave the saw in the drawer."</b></div>
<div class="exam"><b>🎓 For exams:</b> red–red repairable; osteoarthritis + elderly + mild symptoms → non-operative (lecture).</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>A: aim to repair. B: non-operative — surgery will not help the arthritis story.</p></details>`,
recap:["Red–red: repair.","White–white: trim if needed.","Elderly osteoarthritis: non-operative per lecture."],
quiz:[{q:"Peripheral red–red tear in a young knee?",o:["Meniscal repair if suitable pattern","Total meniscectomy always","Ignore locking forever"],a:0,e:"Preserve meniscus."},{q:"Elderly osteoarthritis, mild symptoms, degenerate tear — lecture?",o:["No benefit from meniscal operation","Urgent transplant","Always scope"],a:0,e:"Page 58."}]}],
cases:[{id:"ofk1",title:"Case: The locked knee",steps:[{t:`Young adult, twist, locked at 20° short of extension, magnetic resonance imaging bucket-handle tear in the red–red zone.`,q:"Goal of surgery?",o:["Reduce and repair if feasible","Remove the entire meniscus routinely","Only steroid injection"],a:0,e:"Unlock and repair vascular tears."}],take:["Zone + patient = procedure."]}],
flash:[["Mechanism","Twist, foot planted."],["Red–red","Vascular; repair."],["White–white","Avascular; trim if needed."],["Elderly osteoarthritis","Lecture: operation no help for mild degenerate tears."]],
exam:["Mechanism and locking.","Zone-based repair.","When not to operate (lecture)."],
finalHtml:`<div data-widget="spot" data-set="o8f"></div><div data-widget="termdeck" data-set="o8f"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L8.7 Knee dislocation (multi-ligament injury).</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o8g')">→ Open</button></div>`,
sources:"Sources: Lecture 8 pages 54–58; McRae 3rd edition chapter 19 Meniscal injuries (book pages 432–434). Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o8f=O8F;
