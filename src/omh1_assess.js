XSTEP.omhlook={t:"Look, feel, move (McRae pp 350–351)",dim:.1,svg:`<svg viewBox="0 0 700 280" style="width:100%" role="img" aria-label="Exam map">
<g data-k="look"><rect x="20" y="30" width="200" height="60" rx="10" fill="#e8f0fb" stroke="#2f6db3"/><text x="120" y="65" text-anchor="middle" font-size="14" font-weight="700">LOOK posture</text></g>
<g data-k="feel"><rect x="250" y="30" width="200" height="60" rx="10" fill="#fff3cd" stroke="#d9730d"/><text x="350" y="65" text-anchor="middle" font-size="14" font-weight="700">FEEL landmarks</text></g>
<g data-k="move"><rect x="480" y="30" width="200" height="60" rx="10" fill="#e8f6ee" stroke="#1f9d55"/><text x="580" y="65" text-anchor="middle" font-size="14" font-weight="700">MOVE gently</text></g>
<g data-k="nv"><rect x="200" y="150" width="300" height="60" rx="10" fill="#fde2ea" stroke="#b3476d"/><text x="350" y="185" text-anchor="middle" font-size="14" font-weight="700">Neurovascular check</text></g>
</svg>`,
steps:[["Look","Short + external rotation → fracture; short + flexion + internal rotation → posterior dislocation.",["look"]],["Feel","Pubic ramus, mid-inguinal hip point, ischial tuberosity.",["look","feel"]],["Move","Straight-leg raise; painful passive rotation and axial load favour hip fracture over ramus crack.",["look","feel","move"]],["Nerves and vessels","Ankle motion, foot sensation, foot pulses, capillary refill.",["look","feel","move","nv"]]]};
XSORT.omhposture={t:"Which posture matches which injury?",labels:["Hip fracture pattern","Posterior dislocation pattern","Think elsewhere first"],items:[
["Shortened, externally rotated leg after a standing-height fall",0,"Fig. 17.8."],
["Shortened, flexed, internally rotated leg after a dashboard hit",1,"Fig. 17.35."],
["Comfortable active hip movement through a full range",2,"Usually excludes hip/acetabular fracture (p. 350)."],
["Fever, rigors and an irritable prosthetic hip",2,"Exclude septic arthritis first (p. 350)."]]};

XS.omh1=["Spot the error",[["A break in Shenton's arc can reveal a subtle intracapsular fracture (Fig. 17.2).",1],["Comfortable full active hip movement usually excludes hip/acetabular fracture.",1],["Always force full passive exam before any radiograph.",0,"Wrong: causes unnecessary pain (p. 350)."],["Ask about previous hip or pelvic surgery.",1]]];
XT.omh1='shenton,conedap,occulthip,hipdisloc,garden';
const OMH1={
meta:'Orthopaedics › McRae Ch. 17: Hip › MH.1 · Book pages 350–351 · ⏱ about 18 minutes in 2 steps',
intro:`<p>Book deep-dive through McRae's Orthopaedic Trauma and Emergency Fracture Management, <b>3rd edition</b> (White, Mackenzie, Gray, 2016), chapter 17 Hip (book pages 350–384). Lecture 7 cites the <b>4th</b> edition — this module sticks to the attached 3rd edition and says so when they diverge. Start with assessing any painful hip.</p>`,
goals:['Run look–feel–move and neurovascular assessment', "Choose first radiographs and recognise Shenton's arc"],
cards:[{id:'mh1a',title:'History and examination (pages 350–351)',min:9,goal:0,obj:['Match energy and age to injury', 'Perform look/feel/move/NV'],html:`
<div class="scene"><b>The scene:</b> Mrs Novak, 84, after a kitchen trip. Mr Okonkwo, 29, after a dashboard crash. Same joint — different energy.</div>
<p>Age and energy decide the menu (McRae p. 350): older low-energy falls → hip fractures and rising [[vancouver|periprosthetic fractures]]; younger high-energy → hip/head fractures or [[hipdisloc|dislocation]]. High-energy needs primary/secondary survey; older fallers need medical optimisation (p. 35). Ask about previous hip/pelvic surgery. Atraumatic pain: exclude septic arthritis (p. 103) — fever, rigors, irritable hip; for prostheses ask about prior infection or wound problems.</p>
${FIG('omh-assess-posture')}
<div class="bookref">📖 <b>Open McRae Fig 17.8, p. 355:</b> short + external rotation (a), groin tenderness (b), pain on passive rotation (c).</div>
<div data-widget="stepsvg" data-set="omhlook"></div>
<div data-widget="sortset" data-set="omhposture"></div>
<div class="hint">💡 <b>"Energy first. Posture second. Never wrench a hip before the film."</b></div>
<div class="exam"><b>🎓 For exams:</b> short+ER = fracture; short+flex+IR = posterior dislocation; septic arthritis tops atraumatic differential.</div>
<details class="chk"><summary>✅ Checkpoint: three “feel” landmarks?</summary><p>Superior pubic ramus; hip just inferior to mid-inguinal point; ischial tuberosity (p. 350).</p></details>`,recap:['Age + energy.', 'Look/feel/move/NV.', 'Septic arthritis trap.'],quiz:[{q:'Posterior dislocation posture?',o:['Shortened, flexed, internally rotated', 'Shortened and externally rotated after a rug trip'],a:0,e:'Fig. 17.35.'},{q:'Passive testing before radiographs?',o:['Beyond gentle rotation/limited flexion causes unnecessary pain', 'Always force a full range first'],a:0,e:'p. 350.'}]},{id:'mh1b',title:"Radiographs and Shenton's arc (pages 350–351)",min:9,goal:1,obj:['List views', 'Explain Shenton and occult pathway'],html:`
<div class="scene"><b>The scene:</b> AP pelvis “fine”, patient cannot lift the leg. Trace [[shenton|Shenton's arc]] and demand the lateral.</div>
<p>Films: AP pelvis; lateral hip (Fig. 17.1); add femur views if malignancy or nailing planned. Trace Shenton's arcs (Fig. 17.2). If limb externally rotated, repeat [[conedap|coned AP]] in internal rotation. Lateral often shows displacement the AP hides (Fig. 17.3B). Posterior tilt &gt;10° should be viewed as displaced (p. 354, no firm consensus). Assess bone for Paget/tumour (metastases love lesser trochanter). CT for complex injury; MRI/CT for occult fracture and soft-tissue mimics such as psoas abscess (pp 351–352, 355–356). Ambultant + normal films may go home with return advice; non-ambulant from pain → further imaging. Bone scan insensitive first 3 days.</p>
${FIG('omh-shenton')}
<div class="bookref">📖 <b>Open McRae Fig 17.1, p. 351:</b> lateral hip radiograph.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.2, p. 351:</b> Shenton's arcs — a break flags a subtle intracapsular crack.</div>
<div class="bookref">📖 <b>Open McRae Fig 17.3, p. 352:</b> normal-looking AP; lateral reveals the neck fracture.</div>
<div class="hint">💡 <b>"Trace Shenton. Read the lateral. Occult if cannot walk."</b></div>
<div class="exam"><b>🎓 For exams:</b> AP pelvis + lateral; Shenton; coned IR view; occult → MRI/CT.</div>
<div class="corr">📝 Edition note: Lecture 7 cites 4th ed; this deep-dive uses 3rd-ed pages. Cross-link ${XL('o7c','L7.3')}.</div>
<details class="chk"><summary>✅ Checkpoint: normal films, cannot walk — next?</summary><p>[[occulthip|Occult]] pathway — MRI or CT (pp 355–356).</p></details>`,recap:['AP + lateral.', 'Shenton + trabeculae.', 'Occult pathway.'],quiz:[{q:'Cannot walk, normal X-rays — next?',o:['MRI or CT for occult fracture', 'Discharge without imaging'],a:0,e:'pp 355–356.'},{q:"Break in Shenton's arc suggests?",o:['Possible subtle intracapsular fracture', 'Guaranteed septic arthritis'],a:0,e:'Fig. 17.2.'}]}],
cases:[{id:'mh1k1',title:'Case: Floor versus dashboard',steps:[{t:`84-year-old shortened ER leg after fall.`,q:'First films?',o:['AP pelvis and lateral hip', 'MRI before any plain film'],a:0,e:'Start with X-rays.'},{t:`29-year-old short-flex-IR after dashboard.`,q:'Priority after primary survey?',o:['Urgent closed reduction once recognised', 'Wait overnight without reduction'],a:0,e:'Native dislocation — reduce on recognition.'}],take:['Posture + energy choose the pathway.']}],
flash:[['Short + ER', 'Hip fracture.'], ['Short + flex + IR', 'Posterior dislocation.'], ["Shenton's arc", 'Break → subtle neck crack.'], ['Occult', 'Normal X-ray + cannot walk → MRI/CT.']],
exam:['Two postures.', 'Mandatory films.', 'Shenton.', 'Occult rules.'],
finalHtml:`<div data-widget="spot" data-set="omh1"></div><div data-widget="termdeck" data-set="omh1"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>MH.2 Epidemiology, anatomy and blood supply.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('omh2')">→ Open</button></div>`,
sources:'Sources: McRae 3rd edition chapter 17 General principles (book pages 350–351) into Hip fractures (352). Teaching questions by MedLearn.',
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.omh1=OMH1;
