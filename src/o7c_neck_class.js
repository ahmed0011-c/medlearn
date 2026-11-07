/* ===== Orthopaedics · Lecture 7 · 3: Femoral neck clinical + classification ===== */
XSTEP.garden={t:"Garden I–IV (lecture page 14; McRae book pages 353–354)",dim:.1,svg:`<svg viewBox="0 0 700 280" style="width:100%" role="img" aria-label="Garden classification">
<g data-k="g1"><circle cx="70" cy="110" r="36" fill="#fde2ea" stroke="#b3476d"/><line x1="70" y1="146" x2="95" y2="210" stroke="#1f9d55" stroke-width="6"/><text x="70" y="250" text-anchor="middle" font-size="12" font-weight="700">I valgus</text></g>
<g data-k="g2"><circle cx="220" cy="110" r="36" fill="#fde2ea" stroke="#b3476d"/><line x1="220" y1="146" x2="220" y2="210" stroke="#f6c945" stroke-width="6"/><text x="220" y="250" text-anchor="middle" font-size="12" font-weight="700">II undisplaced</text></g>
<g data-k="g3"><circle cx="370" cy="110" r="36" fill="#fde2ea" stroke="#b3476d"/><line x1="370" y1="146" x2="330" y2="210" stroke="#d9730d" stroke-width="6"/><text x="370" y="250" text-anchor="middle" font-size="12" font-weight="700">III partial</text></g>
<g data-k="g4"><circle cx="520" cy="110" r="36" fill="#fde2ea" stroke="#b3476d"/><line x1="520" y1="146" x2="470" y2="220" stroke="#c62828" stroke-width="6"/><text x="520" y="250" text-anchor="middle" font-size="12" font-weight="700">IV displaced</text></g>
</svg>`,
steps:[["I","Valgus impacted — often still aligned enough to fix.",["g1"]],["II","Complete but undisplaced; trabeculae still lined up.",["g1","g2"]],["III","Partially displaced; trabecular pattern broken.",["g1","g2","g3"]],["IV","Fully displaced. McRae: in practice I–II = undisplaced, III–IV = displaced.",["g1","g2","g3","g4"]]]};
XSORT.pauwelsort={t:"Pauwels thinking (lecture page 13)",labels:["More stable (shallower)", "More shear (steeper)"],items:[
["Low-angle neck fracture nearly horizontal",0,"Shallow Pauwels — compression friendly."],
["Vertical neck fracture line",1,"Steep Pauwels III — shear wants to slide the head off."],
["Garden I valgus impacted",0,"Often biomechanically kinder than a vertical displaced break."],
["High shear + young patient",1,"Needs perfect reduction and stout fixation, urgently."]]};
XS.o7c=["Spot the error",[["Most elderly hip fractures follow a standing-height fall (lecture page 12).",1],["A shortened, externally rotated leg with groin pain is classic.",1],["Garden classification is read primarily on the lateral radiograph only.",0,"Wrong: Garden is described on the anteroposterior radiograph (McRae)."],["Occult neck fractures may need magnetic resonance imaging when X-rays are normal (lecture page 16).",1]]];
XT.o7c="garden,pauwels,intracap,retinacv,avn";
const O7C={
meta:"Orthopaedics › Hip and femur › Lecture 7 › Subsection L7.3 · Lecture pages 11–16 · ⏱ about 16 minutes in 2 steps",
intro:`<p>The femoral neck is a high narrow bridge. Crack it inside the capsule and every step becomes a negotiation with blood supply. Clinical picture first, then [[garden|Garden]] and [[pauwels|Pauwels]]. McRae chapter 17 Hip fractures (book pages 352–355).</p><p>📖 <b>Classifications guide:</b> <a href="classifications/pauwels.html" target="_blank" rel="noopener">Pauwels classification of femoral neck fractures, a guided walkthrough</a>.</p>`,
goals:["Recognise the clinical hip-fracture picture","Use Garden and Pauwels thoughtfully"],
cards:[
{id:"hc1",title:"Clinical findings and imaging (pages 11–12, 16)",min:8,goal:0,obj:["Describe posture, bedside signs, imaging ladder"],html:`
<div class="scene"><b>The scene:</b> Mr Braun, 79, stood up from the toilet, felt his right hip give, and folded to the floor. On the trolley the leg is shorter and rolled out. He winces when you ‘roll the pin’ of his thigh between your palms. He cannot lift the straight leg.</div>
<p>Lecture page 12 paints the classic: most elderly hip fractures follow a simple fall from standing; the limb is shortened and externally rotated if displaced; groin tenderness; pain on passive rotation; lost straight-leg raise. Think of the neck as a twisted twig inside a wet sleeve — rotate the sleeve and the twig screams. Imaging ladder (page 16): X-ray (anteroposterior pelvis + lateral hip); computed tomography if the pattern is unclear; magnetic resonance imaging for occult fractures when films are kind but the patient is not.</p>
${FIG('o7-neck-clinic')}
${FIG('o7-neck-xray')}
${FIG('o7-neck-mri')}
<div class="hint">💡 <b>"Short, out-toed, cannot straight-leg raise — hip fracture until the pictures say otherwise."</b></div>
<div class="exam"><b>🎓 For exams:</b> clinical triad of posture + pin-rolling pain + failed straight-leg raise; MRI for occult fracture.</div>
<details class="chk"><summary>✅ Checkpoint: films are normal but Mr Braun still cannot raise the leg.</summary><p>Do not discharge — urgent magnetic resonance imaging (or CT per local protocol) for occult neck fracture.</p></details>`,
recap:["Standing-height fall.","Short + externally rotated.","X-ray → CT → MRI if occult."],
quiz:[{q:"Classic rotational deformity of a displaced neck fracture?",o:["External rotation (± shortening)","Isolated pure internal rotation only"],a:0,e:"Page 12 — contrast with posterior dislocation (internal rotation)."},{q:"Occult fracture next test when X-ray negative?",o:["Magnetic resonance imaging","Reassure and send home without plan"],a:0,e:"Lecture page 16."}]},
{id:"hc2",title:"Garden and Pauwels (pages 13–15)",min:8,goal:1,obj:["Separate undisplaced from displaced; respect steep shear"],html:`
<div class="scene"><b>The scene:</b> Two neck films. One head is punched into valgus like a cork in a bottle. The other head has fallen off into varus with broken trabecular lines. Same bone — opposite futures.</div>
<p>[[garden|Garden]] (McRae book pages 353–354; lecture page 14): I valgus-impacted; II complete undisplaced; III partially displaced; IV fully displaced. McRae’s practical merge: I–II undisplaced, III–IV displaced. [[pauwels|Pauwels]] (lecture page 13) asks how steep the fracture roof is — a shallow tile sits; a vertical tile avalanches under shear. AO/OTA typing also appears (page 15). Blood-supply story from L7.1 still rules the room.</p>
${FIG('o7-garden')}
${FIG('o7-pauwels')}
<div data-widget="stepsvg" data-set="garden"></div>
<div data-widget="sortset" data-set="pauwelsort"></div>
<div class="hint">💡 <b>"Garden asks ‘how far did it move?’. Pauwels asks ‘how keen is it to slide?’."</b></div>
<div class="exam"><b>🎓 For exams:</b> Garden I–IV on AP film; undisplaced vs displaced split; steeper Pauwels = more shear.</div>
<div class="corr">📝 <b>McRae note:</b> differentiating every Garden grade is neither always possible nor very useful — the undisplaced/displaced split drives care (book pages 353–354).</div>
<details class="chk"><summary>✅ Checkpoint: which scene-film is ‘displaced’?</summary><p>The varus head with broken trabeculae → Garden III/IV → displaced pathway (${XL("o7d","L7.4")}).</p></details>`,
recap:["Garden I–IV.","Practically: undisplaced vs displaced.","Steep Pauwels = shear."],
quiz:[{q:"Garden I means…",o:["Valgus impacted intracapsular fracture","Subtrochanteric segmental smash"],a:0,e:"McRae."},{q:"Why do vertical neck fractures worry surgeons?",o:["High shear forces fight fixation","They always heal without surgery"],a:0,e:"Pauwels shear concept."}]}],
cases:[{id:"hck1",title:"Case: Toilet fall",steps:[{t:`79-year-old, shortened externally rotated leg, pin-rolling pain. AP: Garden IV.`,q:"Category?",o:["Displaced intracapsular neck fracture","Undisplaced extracapsular fracture"],a:0,e:"Garden IV = displaced neck."}],take:["Clinic + Garden band → treatment fork."]}],
flash:[["Garden I–II","Undisplaced group (practical)."],["Garden III–IV","Displaced group."],["Pauwels"," steeper = more shear."],["Occult neck","MRI when X-ray negative, suspicion high."]],
exam:["Clinical signs.","Garden practical split.","Pauwels shear idea."],
finalHtml:`<div data-widget="spot" data-set="o7c"></div><div data-widget="termdeck" data-set="o7c"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L7.4 Femoral neck treatment and tip–apex distance.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o7d')">→ Open</button></div>`,
sources:"Sources: Lecture 7 pages 11–16; McRae's Orthopaedic Trauma and Emergency Fracture Management, 3rd edition (White, Mackenzie, Gray, 2016), chapter 17 (book pages 352–355). Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o7c=O7C;
