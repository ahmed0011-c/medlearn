/* ===== Orthopaedics · Lecture 8 · 4: Patella dislocation and osteochondral injuries (pages 32–43) ===== */
XPK.patdis={t:"First dislocation or recurrent? (pages 35–39)",opts:["First-time traumatic — non-operative pathway","Recurrent with risk factors — consider stabilisation","Osteochondral fragment pathway"],items:[
["Teenager, first lateral dislocation playing netball, reduced in emergency, no large loose body",0,"Reduce swelling, restore motion; no routine long immobilisation (page 38).",""],
["Same patient, third dislocation; shallow trochlea and patella alta on imaging",1,"Address medial patellofemoral ligament ± tibial tubercle osteotomy (page 39).",""],
["After reduction, aspiration shows blood with fat globules; magnetic resonance imaging shows a flake",2,"Small loose fragments may be removed; larger osteochondral pieces need fixation or cartilage procedures (pages 42–43).",""],
["Habitual non-traumatic sliding with hypermobility",1,"Treat predisposing anatomy; not just a one-off brace.",""]]};
XS.o8d=["Spot the error",[["Most patellar dislocations are lateral.",1],["A prominent medial femoral condyle can be mistaken for the patella when it is dislocated.",1],["Every first dislocation needs immediate medial patellofemoral ligament reconstruction.",0,"Wrong: first-time dislocations are usually managed non-operatively at first (page 38); surgery is for recurrence or osteochondral problems."],["Osteochondral injury can release fat into the haemarthrosis.",1]]];
XT.o8d="mpfl,trochdys,patalta,ocinj,retinac";
const O8D={
meta:"Orthopaedics › Knee and leg › Lecture 8 › Subsection L8.4 · Lecture 8 pages 32–43 · ⏱ about 15 minutes in 2 bite-sized steps",
intro:`<p>The knee's natural slight valgus and the Q-angle bias the patella laterally. The trochlea and the [[mpfl|medial patellofemoral ligament]] usually stop it. When they fail, the patella dislocates — and may take a piece of cartilage with it. McRae chapter 19, Patellar dislocation (book pages 441–442).</p>`,
goals:["Explain why the patella dislocates laterally and who is at risk","Manage first-time versus recurrent dislocation and osteochondral flakes"],
cards:[
{id:"od1",title:"Why it goes lateral; first dislocation (pages 32–38)",min:8,goal:0,obj:["List restraints and first-line care"],html:`
<div class="scene"><b>The scene:</b> Mia, 16, plants her foot and twists. She feels the kneecap 'go out'. In the emergency department the medial femoral condyle looks oddly prominent. Neither active nor passive movement is possible until someone reduces it.</div>
<p>Natural lateral pull in extension; restraints: deep lateral trochlea, and soft tissues including the [[mpfl|medial patellofemoral ligament]] (pages 33–34). Predisposition: [[trochdys|trochlear dysplasia]], [[patalta|patella alta]], hypermobility (page 34). Traumatic dislocation tears medial restraints; atraumatic/habitual forms exist (page 35). Clinical trap: the uncovered medial condyle is mistaken for the patella (page 36).</p>
${FIG('o8-patella-dislocate')}
<p>Imaging: anteroposterior, lateral, skyline; ~5% have an associated osteochondral fracture (page 37). Treatment first-time (page 38): no need for prolonged immobilisation; safe to weight-bear; reduce swelling and regain range. McRae emphasises early motion after reduction of a first dislocation without large osteochondral fragments.</p>
<div class="hint">💡 <b>"Lateral is the default escape route. Medial soft tissues and a deep trochlea are the gates."</b></div>
<div class="exam"><b>🎓 For exams:</b> risk triad dysplasia / alta / laxity; clinical misidentification of the condyle; first-time = non-operative pathway.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Lateral patellar dislocation — reduce, then non-operative recovery unless imaging shows a significant osteochondral fragment.</p></details>`,
recap:["Lateral dislocation is the rule.","Dysplasia, alta, laxity predispose.","First-time: early motion, no long cast."],
quiz:[{q:"Key soft-tissue restraint to lateral dislocation in early flexion?",o:["Medial patellofemoral ligament","Anterior cruciate ligament","Iliotibial band alone"],a:0,e:"medial patellofemoral ligament."},{q:"First-time dislocation without loose body?",o:["Non-operative: swell down, move early","Immediate trochleoplasty for everyone","Never weight-bear for 3 months"],a:0,e:"Page 38."}]},
{id:"od2",title:"Recurrent dislocation and osteochondral injury (pages 39–43)",min:7,goal:1,obj:["Plan surgery indications and cartilage care"],html:`
<div class="scene"><b>The scene:</b> After reduction, Mia's knee is tense. Aspiration yields blood mixed with fat globules. Magnetic resonance imaging shows a flake from the medial patellar facet.</div>
<p><b>Recurrent (page 39):</b> if function is impaired, address predisposing factors. With minimal or moderate trochlear dysplasia — [[mpfl|medial patellofemoral ligament]] reconstruction ± tibial tubercle osteotomy (lecture shows medial patellofemoral ligament reconstruction, page 40).</p>
<p>[[ocinj|Osteochondral injuries]] (pages 41–43): after dislocation or a blow; swollen joint; blood with fat; magnetic resonance imaging. Small fragments — remove if symptomatic. Pure chondral lesions &lt;15 mm — arthroscopic trim + microfracture (drill to stimulate fibrocartilage). Larger osteochondral pieces may need fixation.</p>
<div data-widget="pickset" data-set="patdis"></div>
<div class="hint">💡 <b>"Fat in the blood = think osteochondral fracture until imaging says otherwise."</b></div>
<div class="exam"><b>🎓 For exams:</b> medial patellofemoral ligament reconstruction ± tubercle osteotomy for recurrent instability; microfracture for small pure chondral defects (&lt;15 mm per lecture).</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Osteochondral injury — map with magnetic resonance imaging; remove or fix the flake; do not treat as a simple sprain.</p></details>`,
recap:["Recurrent → fix anatomy (medial patellofemoral ligament ± tubercle).","Fat globules → osteochondral until proven otherwise.","Small chondral: trim + microfracture (lecture &lt;15 mm)."],
quiz:[{q:"Blood + fat on aspiration after dislocation suggests…",o:["Osteochondral injury","Simple sprain only","Pure muscle cramp"],a:0,e:"Pages 42."},{q:"Recurrent dislocation with patella alta and moderate dysplasia: common soft-tissue operation?",o:["Medial patellofemoral ligament reconstruction","High tibial osteotomy for everyone","Patellectomy first-line"],a:0,e:"Page 39."}]}],
cases:[{id:"odk1",title:"Case: Third time out",steps:[{t:`A 17-year-old with third lateral dislocation, trochlear dysplasia, and no large loose body.`,q:"Reasonable plan?",o:["Stabilise (medial patellofemoral ligament ± bony realignment) after counselling","Lifelong cylinder cast","Ignore"],a:0,e:"Page 39."}],take:["First ≠ third: recurrence changes the plan."]}],
flash:[["Lateral bias","Valgus + Q-angle; trochlea and medial patellofemoral ligament restrain."],["First dislocation","Early motion; no long immobilisation."],["Recurrent","medial patellofemoral ligament reconstruction ± tibial tubercle osteotomy."],["Fat in aspirate","Osteochondral flake until proven otherwise."]],
exam:["Risk factors for dislocation.","First-time vs recurrent treatment.","Osteochondral: aspirate clue and microfracture size cut-off from the lecture."],
finalHtml:`<div data-widget="spot" data-set="o8d"></div><div data-widget="termdeck" data-set="o8d"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L8.5 Ligament injuries of the knee.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o8e')">→ Open</button></div>`,
sources:"Sources: Lecture 8 pages 32–43; McRae 3rd edition chapter 19 Patellar dislocation (book pages 441–442). Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o8d=O8D;
