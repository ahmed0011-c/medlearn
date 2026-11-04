/* ===== Orthopaedics · Lecture 7 · 9: Femoral shaft ===== */
XSTEP.shaftpat={t:"Shaft pattern personalities (lecture pages 55–56)",dim:.1,svg:`<svg viewBox="0 0 700 260" style="width:100%" role="img" aria-label="Shaft patterns">
<g data-k="sp"><rect x="40" y="40" width="40" height="160" fill="#e8f0fb" stroke="#2f6db3"/><path d="M45 60 Q80 120 45 180" stroke="#c62828" stroke-width="3" fill="none"/><text x="60" y="230" text-anchor="middle" font-size="12">spiral</text></g>
<g data-k="tr"><rect x="160" y="40" width="40" height="160" fill="#e8f0fb" stroke="#2f6db3"/><line x1="160" y1="110" x2="200" y2="130" stroke="#c62828" stroke-width="3"/><text x="180" y="230" text-anchor="middle" font-size="12">oblique/trans</text></g>
<g data-k="seg"><rect x="280" y="40" width="40" height="160" fill="#e8f0fb" stroke="#2f6db3"/><line x1="280" y1="80" x2="320" y2="90" stroke="#c62828" stroke-width="3"/><line x1="280" y1="150" x2="320" y2="160" stroke="#c62828" stroke-width="3"/><text x="300" y="230" text-anchor="middle" font-size="12">segmental</text></g>
<g data-k="nk"><text x="400" y="120" font-size="13" font-weight="700" fill="#8a2f52">Always image the neck!</text><text x="400" y="145" font-size="12">(lecture 1–9% / ~10% ipsilateral neck)</text></g>
</svg>`,
steps:[["Spiral","Twisting with a planted foot.",["sp"]],["Transverse/oblique","Angulation or direct blow (road trauma).",["sp","tr"]],["Segmental","High-energy smash — two levels.",["sp","tr","seg"]],["Hidden neck","Ipsilateral neck fracture rides along — film hip and knee every time.",["sp","tr","seg","nk"]]]};
XPK.shaftrx={t:"Shaft management (pages 61–62; McRae)",opts:["Resuscitate; urgent operative stabilisation with locked nail","External fixator / damage control","Plate in selected situations","Never ‘cast alone’ as adult definitive care"],items:[
["Closed mid-shaft fracture, stable polytrauma completed",0,"Intramedullary nail is the workhorse (McRae).",""],
["Unstable physiology, open contaminated shaft",1,"Damage-control external fixator first.",""],
["Adult closed shaft — family asks for a long cast only",3,"Lecture: cast inadequate; traction old-fashioned — operate.",""],
["Need to avoid a nail entry for soft-tissue reasons",2,"Angle-stable plate is an alternative.",""]]};
XS.o7i=["Spot the error",[["Adult femoral shafts can hide &gt;1 litre of blood in the soft tissues (lecture page 56).",1],["X-rays must include hip and knee joints (lecture page 61).",1],["Casting is definitive modern care for most adult femoral shafts.",0,"Wrong: lecture says non-operative cast is inadequate; nails dominate (McRae)."],["Floating knee means ipsilateral femoral and tibial shaft fractures.",1]]];
XT.o7i="imnail,floatingk,gustilo,compsyn";
const O7I={
meta:"Orthopaedics › Hip and femur › Lecture 7 › Subsection L7.9 · Lecture pages 55–65 · ⏱ about 17 minutes in 2 steps",
intro:`<p>The femoral shaft is a fire hose of force and blood. Young adults meet high energy; older adults meet torsion. Miss the neck fracture living upstairs and you inherit two problems. McRae femoral shaft chapter (book pages 388–410).</p>`,
goals:["Read pattern, bleeding, associated neck/floating knee","Choose nail vs damage-control vs plate"],
cards:[
{id:"hi1",title:"Facts, patterns, clinical traps (pages 55–61)",min:9,goal:0,obj:["List associated injuries and soft-tissue grades"],html:`
<div class="scene"><b>The scene:</b> A 22-year-old after a motorcycle crash: thigh the size of a rugby ball, foot pink but painful, knee and hip both in the X-ray beam — and there it is, a second crack in the neck you nearly skipped.</div>
<p>Facts (pages 55–56): incidence 10/10,000 per year (lecture); ipsilateral neck fracture in 1–9% (page 55) and about 10% in the clinical-features slide (page 61) — quote as lecture ranges; spiral vs transverse/oblique vs comminuted/segmental; &gt;1 litre soft-tissue bleed; junction of middle and distal thirds can hit the femoral artery in the adductor canal. Soft-tissue maps: Tscherne for closed; [[gustilo|Gustilo–Anderson]] for open (pages 59–60). Floating knee = ipsilateral tibia fracture. Imaging: always hip + knee on the film.</p>
${FIG('o7-shaft-patterns')}
${FIG('o7-shaft-xray')}
${FIG('o7-open-gustilo')}
<div data-widget="stepsvg" data-set="shaftpat"></div>
<div class="hint">💡 <b>"Thigh swelling = a bucket of blood until proven otherwise. Never crop the neck off the X-ray."</b></div>
<div class="exam"><b>🎓 For exams:</b> pattern–mechanism pairs; neck association; floating knee; include joints on X-ray.</div>
<div class="corr">📝 <b>Slide numbers:</b> page 55 lists 1–9% additional neck fractures; page 61 says about 10% — we present both as lecture figures, not a single invented rate.</div>
<details class="chk"><summary>✅ Checkpoint: rugby-ball thigh scene.</summary><p>Resuscitate, rule out other injuries, film the whole femur including neck, plan urgent stabilisation — and watch compartments.</p></details>`,
recap:["High energy + big bleed.","Patterns tell the story.","Never miss the neck."],
quiz:[{q:"Why film the hip with every shaft fracture?",o:["Ipsilateral neck fracture is easily missed","Hips never break with shafts"],a:0,e:"Lecture 1–9% / ~10%."},{q:"Floating knee means…",o:["Ipsilateral femoral and tibial shaft fractures","Only a skin abrasion over the patella"],a:0,e:"Page 61."}]},
{id:"hi2",title:"Treatment and complications (pages 62–65)",min:8,goal:1,obj:["State operative defaults and early/late risks"],html:`
<div class="scene"><b>The scene:</b> Physiology stabilised. Theatre asks: antegrade nail, retrograde nail, plate, or frame?</div>
<p>Non-operative (page 62): “No option” for routine adult care — cast inadequate; traction historical. Operative: antegrade or retrograde locked [[imnail|intramedullary nailing]] (McRae preferred for almost all shafts); angle-stable plate; external fixator for damage control. Early complications (page 64): vascular/nerve injury; associated injuries; infection &lt;1% after closed nailing but higher if open (lecture); haemorrhage; fat embolism / ARDS. Late (page 65): delayed/non-union; malunion; knee stiffness.</p>
${FIG('o7-shaft-nail')}
<div data-widget="pickset" data-set="shaftrx"></div>
<div class="hint">💡 <b>"Nail the highway. Frame the storm. Plate when the entry sites are hostile."</b></div>
<div class="exam"><b>🎓 For exams:</b> nail default; damage-control frame; infection lecture figure after closed nailing; fat embolism.</div>
<details class="chk"><summary>✅ Checkpoint: implant for a closed mid-shaft in a resuscitated adult?</summary><p>Locked intramedullary nail (antegrade or retrograde per plan).</p></details>`,
recap:["Nail is king.","Frame if dying.","Fat embolism / malunion / stiffness."],
quiz:[{q:"Preferred definitive fixation for most adult femoral shafts?",o:["Locked intramedullary nail","Long plaster alone"],a:0,e:"McRae / lecture."},{q:"Infection after closed femoral nailing (lecture)?",o:["Extremely rare (&lt;1%)","Inevitable in every case"],a:0,e:"Page 64."}]}],
cases:[{id:"hik1",title:"Case: Missed upstairs neighbour",steps:[{t:`Shaft nailed yesterday. Today the patient cannot straight-leg raise and groin films (finally done) show a displaced neck fracture.`,q:"Lesson?",o:["Always image and clear the neck before or at nailing","Necks never accompany shafts"],a:0,e:"Association is real — prevent the miss."}],take:["Whole-bone discipline."]}],
flash:[["Spiral","Twist / planted foot."],["Neck tag-along","Lecture 1–9% / ~10%."],["Floating knee","Femur + tibia shafts."],["Nail","Default adult fixation."]],
exam:["Patterns.","Associated neck.","Nail vs frame."],
finalHtml:`<div data-widget="spot" data-set="o7i"></div><div data-widget="termdeck" data-set="o7i"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L7.10 Distal femoral fractures, Hoffa and distal periprosthetic breaks.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o7j')">→ Open</button></div>`,
sources:"Sources: Lecture 7 pages 55–65; McRae's Orthopaedic Trauma and Emergency Fracture Management, 3rd edition (White, Mackenzie, Gray, 2016), femoral shaft fractures (book pages 388–410). Lecture epidemiology and infection figures cited as lecture data. Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o7i=O7I;
