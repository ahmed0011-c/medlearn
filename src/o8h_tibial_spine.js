/* ===== Orthopaedics · Lecture 8 · 8: Tibial spine fractures (pages 69–72) ===== */
XSORT.meyers={t:"Meyers and McKeever type (page 70)",labels:["Type I","Type II","Type III"],items:[
["Undisplaced tibial eminence fracture",0,"Type I — extension cast/orthesis 6 weeks with X-ray checks (page 72)."],
["Anterior elevation, posterior hinge intact",1,"Type II — often needs reduction; may fail closed care."],
["Entire eminence displaced",2,"Type III — usually operative reduction and fixation."],
["Child after a ski twist with a tense haemarthrosis; fragment clearly flipped on X-ray",2,"Displaced = operate; anterior cruciate ligament substance may be intact because the bone failed first."]]};
XS.o8h=["Spot the error",[["Tibial spine fracture is essentially an anterior cruciate ligament avulsion from the tibia.",1],["Meyers and McKeever type I is undisplaced.",1],["All type I fractures need immediate open reduction.",0,"Wrong: undisplaced fractures can be managed in extension casting/orthesis for 6 weeks with radiographic checks (page 72)."],["A tense haemarthrosis is expected.",1]]];
XT.o8h="tibspine,acl,lipohaem,extmech";
const O8H={
meta:"Orthopaedics › Knee and leg › Lecture 8 › Subsection L8.8 · Lecture 8 pages 69–72 · ⏱ about 10 minutes in 2 bite-sized steps",
intro:`<p>In children and young adults the [[acl|anterior cruciate ligament]] may pull off its tibial attachment — a [[tibspine|tibial spine (eminence) fracture]] — instead of tearing mid-substance. McRae chapter 19, Tibial spine fractures (book page 432).</p>`,
goals:["Grade with Meyers and McKeever","Choose cast versus fixation"],
cards:[
{id:"oh1",title:"Classification and clinical picture (pages 69–71)",min:5,goal:0,obj:["Apply Meyers and McKeever"],html:`
<div class="scene"><b>The scene:</b> A 12-year-old falls skiing. The knee swells hugely within the hour. Lachman feels a little soft but there is a bony fragment on the AP radiograph between the tibial spines.</div>
<p>Meyers and McKeever (page 70): I undisplaced; II partially displaced with anterior elevation; III entire eminence displaced. Clinical (page 71): sporting twist or fall in a child/young adult; tense haemarthrosis; check ligaments and distal neurovascular status. Imaging: X-ray ± computed tomography / magnetic resonance imaging as needed.</p>
<div data-widget="sortset" data-set="meyers"></div>
<div class="hint">💡 <b>"Same energy as an anterior cruciate ligament tear — but the bone gives way in the young."</b></div>
<div class="exam"><b>🎓 For exams:</b> three Meyers–McKeever types; child + haemarthrosis + eminence fragment.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Tibial spine fracture — classify displacement next; treat as an anterior cruciate ligament-equivalent bony injury.</p></details>`,
recap:["anterior cruciate ligament avulsion from tibia.","Types I–III.","Child/young adult + haemarthrosis."],
quiz:[{q:"Type II means…",o:["Partially displaced; anterior elevation / hinge","Undisplaced","Shaft fracture of the tibia"],a:0,e:"Page 70."},{q:"Typical patient?",o:["Child or young adult after twist/fall","Only frail 90-year-olds"],a:0,e:"Page 71."}]},
{id:"oh2",title:"Treatment and the stiffness trap (page 72)",min:5,goal:1,obj:["Manage undisplaced vs displaced"],html:`
<div class="scene"><b>The scene:</b> Type I fracture. The team plans 6 weeks in extension. Someone asks why follow-up X-rays matter.</div>
<p>Non-operative (page 72): undisplaced — extension casting or orthesis for 6 weeks, with careful radiographic review so displacement is not missed. Displaced fractures generally need reduction and fixation (arthroscopic or open). Stiffness is a major risk after immobilisation — start motion as soon as the fragment is stable.</p>
<div class="hint">💡 <b>"Type I can stay in extension — but watch it does not become type II on the next film."</b></div>
<div class="exam"><b>🎓 For exams:</b> type I = extension immobilisation + serial X-rays; displaced = fix; watch stiffness.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Serial radiographs catch late displacement; early stiffness prevention once stable.</p></details>`,
recap:["I: extension 6 weeks + X-ray checks.","II–III: often operate.","Stiffness is the late enemy."],
quiz:[{q:"Undisplaced management?",o:["Extension cast/orthesis ~6 weeks with X-ray review","Immediate total knee replacement","No follow-up"],a:0,e:"Page 72."},{q:"Main late risk of long immobilisation?",o:["Stiffness","Instant artery rupture from the cast alone"],a:0,e:"Lecture arrow to stiffness."}]}],
cases:[{id:"ohk1",title:"Case: The flipped eminence",steps:[{t:`Type III fragment flipped into the notch; child cannot extend.`,q:"Plan?",o:["Operative reduction and fixation","Ignore for 3 months"],a:0,e:"Displaced eminence blocks extension and the anterior cruciate ligament footprint."}],take:["Displacement decides the theatre."]}],
flash:[["Meyers I","Undisplaced."],["Meyers II","Anterior elevation / hinge."],["Meyers III","Completely displaced."],["Care","Extension for I; fix displaced; prevent stiffness."]],
exam:["Three types.","Who gets it.","Treatment by type."],
finalHtml:`<div data-widget="spot" data-set="o8h"></div><div data-widget="termdeck" data-set="o8h"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L8.9 Tibial plateau fractures.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o8i')">→ Open</button></div>`,
sources:"Sources: Lecture 8 pages 69–72; McRae 3rd edition chapter 19 Tibial spine fractures (book page 432). Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o8h=O8H;
