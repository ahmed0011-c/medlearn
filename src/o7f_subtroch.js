/* ===== Orthopaedics · Lecture 7 · 6: Subtrochanteric, atypical, isolated trochanters ===== */
XSTEP.subdef={t:"Subtrochanteric personality (lecture page 27)",dim:.1,svg:`<svg viewBox="0 0 640 300" style="width:100%" role="img" aria-label="Subtrochanteric deformity">
<g data-k="p"><rect x="280" y="30" width="50" height="70" fill="#fde2ea" stroke="#b3476d"/><text x="400" y="60" font-size="12" font-weight="700">proximal: flexed, abducted, ER</text></g>
<g data-k="f"><line x1="280" y1="100" x2="360" y2="140" stroke="#c62828" stroke-width="5"/><text x="400" y="130" font-size="12">fracture zone ≤5 cm below lesser</text></g>
<g data-k="s"><rect x="300" y="140" width="50" height="120" fill="#e8f0fb" stroke="#2f6db3"/><text x="400" y="200" font-size="12" font-weight="700">shaft stays posterior</text></g>
</svg>`,
steps:[["Zone","Lesser trochanter to ~5 cm below (lecture page 27).",["p","f"]],["Deformity","Gluteals abduct/ER; psoas flexes the proximal fragment.",["p","f","s"]],["Fix goal","Nail after correcting deformity — malunion is the tax for lazy reduction.",["p","f","s"]]]};
XPK.subrx={t:"Subtrochanteric and trochanter decisions",opts:["Cephalomedullary nail after deformity correction","Protect / prophylactically fix impending atypical crack","Non-operative rest (young apophysis)","Fix displaced greater trochanter (>~1 cm)","Hunt for metastasis (elderly lesser trochanter)"],items:[
["High-energy subtrochanteric spiral in a 40-year-old",0,"Nail; watch blood loss and extensions.",""],
["Bisphosphonate user with transverse subtrochanteric crack and contralateral lateral beak + pain",1,"McRae atypical — fix completed side; protect the other.",""],
["Teen sprinter with lesser-trochanter apophyseal avulsion",2,"Rest, then return when comfortable (lecture page 36).",""],
["Elderly lesser-trochanter fracture without big trauma",4,"Red flag for metastatic disease (lecture page 36).",""],
["Greater trochanter displaced 2 cm after a fall onto the side",3,"Operate if displacement &gt; about 1 cm (lecture page 36).",""]]};
XS.o7f=["Spot the error",[["Atypical fractures link to long-term bisphosphonates in about 80% of McRae’s series description.",1],["Prodromal thigh pain can precede an atypical fracture (McRae ~30%).",1],["Isolated lesser-trochanter fracture in an older adult is always a harmless sports injury.",0,"Wrong: in the elderly think metastatic disease (lecture page 36)."],["Intra-operative biopsy is advised when pathology is suspected (lecture page 27).",1]]];
XT.o7f="subtroch,atypff,reverseob,dhs";
const O7F={
meta:"Orthopaedics › Hip and femur › Lecture 7 › Subsection L7.6 · Lecture pages 27, 31, 36 · ⏱ about 16 minutes in 2 steps",
intro:`<p>Below the lesser trochanter the femur becomes a tug-of-war rope for iliopsoas and the gluteals. Add bisphosphonates and the cortex can snap like chalk. Isolated trochanter chips have their own age-coded stories. McRae atypical hip fractures (book pages 383–384) and lecture pages 27, 31, 36.</p>`,
goals:["Describe subtrochanteric deformity and nail logic","Recognise atypical and isolated trochanter patterns"],
cards:[
{id:"hf1",title:"Subtrochanteric fractures (pages 27, 31)",min:8,goal:0,obj:["Explain muscle deformity and surgical challenges"],html:`
<div class="scene"><b>The scene:</b> A motorcyclist’s proximal femur ends above mid-shaft. The short proximal piece points at the ceiling in flexion while the shaft lies back on the bed — as if two people are pulling the bone in opposite directions.</div>
<p>Definition (page 27): from the inferior margin of the lesser trochanter to 5 cm below. Rare in young adults because the posteromedial [[calcar|calcar]] is strong. Patterns: transverse or oblique; proximal fragment flexed, abducted and externally rotated; shaft posterior. Challenges (page 31): greater blood loss from profunda branches; subtle extensions into the intertrochanteric region; mandatory deformity correction before locking a nail. Pathological cracks need biopsy thinking.</p>
${FIG('o7-subtroch')}
<div data-widget="stepsvg" data-set="subdef"></div>
<div class="hint">💡 <b>"Psoas lifts the proximal fragment like a trapdoor — close the trapdoor before you nail."</b></div>
<div class="exam"><b>🎓 For exams:</b> 5 cm zone; classic deformity; nail after reduction; biopsy if pathology suspected.</div>
<details class="chk"><summary>✅ Checkpoint: why not just ‘slam a nail in’?</summary><p>Without correcting flexion/abduction you lock in malunion; blood loss and occult proximal extension also bite.</p></details>`,
recap:["Zone to 5 cm below lesser.","Flexion–abduction–ER deformity.","Nail after reduction."],
quiz:[{q:"Classic proximal-fragment posture?",o:["Flexed, abducted, externally rotated","Planted in pure internal rotation only"],a:0,e:"Page 27/31."},{q:"McRae/lecture implant default?",o:["Intramedullary nail","Elastic bandage alone"],a:0,e:"Box 17.1 subtrochanteric → nail."}]},
{id:"hf2",title:"Atypical and isolated trochanter fractures (page 36; McRae 383–384)",min:8,goal:1,obj:["Spot atypical beaking; age-code isolated trochanters"],html:`
<div class="scene"><b>The scene:</b> A woman on long-term alendronate reports months of thigh ache. Today she pivots in the kitchen and the femur gives with a transverse crack and a lateral cortical beak. Her other thigh has ached for weeks.</div>
<p>[[atypff|Atypical femoral fractures]] (McRae book page 383): ~5% of subtrochanteric cracks; long-term bisphosphonate in ~80%; prodromal pain ~30%; cortical thickening/beaking; low energy; transverse/short oblique; little comminution; slow healing. Impending contralateral cracks deserve prophylactic fixation (lecture page 27). Isolated lesser trochanter (page 36): young = psoas apophyseal avulsion → rest; elderly = suspect metastasis. Greater trochanter: direct blow; &lt;1 cm displacement → protected weight-bearing 6–8 weeks; &gt;1 cm → screws, tension band or plate.</p>
${FIG('o7-isolated-trach')}
<div data-widget="pickset" data-set="subrx"></div>
<div class="hint">💡 <b>"Bisphosphonate + thigh pain + lateral beak = atypical until proven otherwise — check the twin femur."</b></div>
<div class="exam"><b>🎓 For exams:</b> McRae atypical features; prophylactic fixation concept; elderly lesser trochanter = metastasis until cleared.</div>
<details class="chk"><summary>✅ Checkpoint: kitchen pivot scene.</summary><p>Atypical fracture — nail the broken side, image and likely protect the painful contralateral femur, review bisphosphonate plan with bone health team.</p></details>`,
recap:["Atypical checklist.","Protect the other side.","Age codes isolated trochanters."],
quiz:[{q:"Elderly isolated lesser-trochanter fracture — first worry?",o:["Metastatic disease","Simple toddler nursemaid elbow equivalent"],a:0,e:"Lecture page 36."},{q:"McRae: long-term bisphosphonate history in atypical fractures about…",o:["80%","8%"],a:0,e:"Book page 383."}]}],
cases:[{id:"hfk1",title:"Case: Chalk femur",steps:[{t:`Transverse subtrochanteric fracture, lateral beak, 9 years of bisphosphonate, contralateral thigh pain.`,q:"Plan theme?",o:["Fix this side with a nail; investigate/protect the other femur","Discharge with analgesia only"],a:0,e:"Atypical pathway."}],take:["Atypical = bilateral thinking."]}],
flash:[["Subtroch zone","Lesser trochanter to ~5 cm distal."],["Deformity","Flexion/abduction/ER proximal fragment."],["Atypical","Bisphosphonate, beak, transverse, prodromal pain."],["Elderly lesser trochanter","Metastasis until proven otherwise."]],
exam:["Deformity vectors.","Atypical McRae list.","Isolated trochanter rules."],
finalHtml:`<div data-widget="spot" data-set="o7f"></div><div data-widget="termdeck" data-set="o7f"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L7.7 Hip dislocation.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o7g')">→ Open</button></div>`,
sources:"Sources: Lecture 7 pages 27, 31, 36; McRae's Orthopaedic Trauma and Emergency Fracture Management, 3rd edition (White, Mackenzie, Gray, 2016), atypical hip fractures (book pages 383–384) and Box 17.1. Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o7f=O7F;
