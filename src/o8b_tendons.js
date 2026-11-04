/* ===== Orthopaedics · Lecture 8 · 2: Quadriceps and patellar tendon ruptures (pages 10–17) ===== */
XPK.tendwho={t:"Who tore which tendon? (pages 9–15)",opts:["Quadriceps tendon","Patellar tendon","Neither — think fracture first"],items:[
["68-year-old with diabetes; gap above the patella; cannot straighten",0,"Classic quadriceps tendon rupture (lecture pages 10–11).",""],
["24-year-old jumper; prior 'tendinitis' injections; patella high; gap below",1,"Patellar tendon rupture (pages 14–15).",""],
["55-year-old fall onto the front of the knee; bony tenderness over the patella",2,"X-ray first: patella fracture is commoner in middle age (page 9).",""],
["Teenager, basketball, sudden pain at the tibial tubercle",1,"In adolescents the weak link may be tubercle avulsion or the patellar tendon (page 9).",""]]};
XS.o8b=["Spot the error",[["Complete quadriceps or patellar tendon tears are repaired surgically.",1],["Partial tears can be treated in an extension brace with physiotherapy.",1],["A high-riding patella after injury suggests a quadriceps tendon tear.",0,"Wrong: patella alta means the tether below has failed — patellar tendon (or tubercle avulsion). Quadriceps tear leaves the patella low or normal."],["Ultrasound or magnetic resonance imaging helps confirm tendon tears; plain X-ray excludes fracture.",1]]];
XT.o8b="quadrupt,patrupt,patalta,extmech,sesamoid";
const O8B={
meta:"Orthopaedics › Knee and leg › Lecture 8 › Subsection L8.2 · Lecture 8 pages 10–17 · ⏱ about 14 minutes in 2 bite-sized steps",
intro:`<p>Two soft-tissue disasters in the extensor chain: the tendon above the patella and the tendon below. Age, gap location and patella height tell them apart. McRae chapter 19 covers quadriceps and patellar tendon ruptures (book pages 434–437).</p>`,
goals:["Separate quadriceps from patellar tendon rupture by history and signs","Choose brace versus repair"],
cards:[
{id:"ob1",title:"Quadriceps tendon rupture (pages 10–13)",min:7,goal:0,obj:["Recognise and treat quadriceps tendon rupture"],html:`
<div class="scene"><b>The scene:</b> Mrs Keller, 72, rheumatoid arthritis on steroids, felt a rip above the right kneecap when she stood from a chair. The knee looks dented above the patella. She cannot do a straight-leg raise.</div>
<p>[[quadrupt|Quadriceps tendon rupture]]: elderly, diabetes, rheumatoid disease, corticosteroids (lecture page 11); occasionally a young athlete. Clinical: tearing pain, swelling, a palpable gap above the patella, loss of active extension. Imaging: ultrasound or magnetic resonance imaging; plain X-ray excludes fracture (page 12).</p>
${FIG('o8-quad-rupture')}
<p><b>Treatment (page 13):</b> partial tears — extension brace or plaster cylinder, then physiotherapy for flexion and strength. Complete tears — operative repair / reattachment.</p>
<div class="hint">💡 <b>"Gap above = quadriceps. Gap below = patellar tendon."</b></div>
<div class="exam"><b>🎓 For exams:</b> risk factors (age, diabetes, steroids, rheumatoid); gap superior to the patella; complete → repair.</div>
<div class="corr"><b>Slide note:</b> the title slide spells "Quadrizeps". The correct spelling is <b>quadriceps</b>.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Complete quadriceps tendon rupture — plan operative repair, not a brace alone.</p></details>`,
recap:["Older / systemic disease / steroids → quadriceps tendon.","Gap above the patella; no active extension.","Complete → repair; partial → extension brace."],
quiz:[{q:"Best next imaging after X-ray has ruled out fracture?",o:["Ultrasound or magnetic resonance imaging","Bone scan first","Angiography first"],a:0,e:"Lecture page 12."},{q:"Complete quadriceps tear?",o:["Operative repair","Weight-bearing as pain allows, no brace","Meniscectomy"],a:0,e:"Page 13."}]},
{id:"ob2",title:"Patellar tendon rupture (pages 14–17)",min:7,goal:1,obj:["Recognise and treat patellar tendon rupture"],html:`
<div class="scene"><b>The scene:</b> Jonas, 19, club volleyball. He had months of 'jumper's knee' and two local corticosteroid injections. During a jump he feels a rip below the kneecap. The patella sits high; he cannot straighten the knee.</div>
<p>[[patrupt|Patellar tendon rupture]] is uncommon; typically young athletes at the proximal or distal attachment, often after tendinitis and local corticosteroid injection (page 15). Clinical: sudden pain on forced extension, bruising and tenderness at the lower pole, [[patalta|patella alta]].</p>
<p><b>Treatment (page 16):</b> partial — extension brace / plaster cylinder. Complete — operative repair or reattachment; a temporary pull-out wire can protect the suture line. McRae (book pages 434–437) describes the same repair principles.</p>
<div data-widget="pickset" data-set="tendwho"></div>
<div class="hint">💡 <b>"High patella = the rope below snapped."</b></div>
<div class="exam"><b>🎓 For exams:</b> young athlete + injections + patella alta → patellar tendon; repair complete tears.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Patellar tendon rupture — complete, so operative repair; counsel that local steroid injections into tendons raise rupture risk.</p></details>`,
recap:["Young athlete, often after tendinitis or steroid injection.","Patella alta; gap below.","Complete → repair ± temporary protecting wire."],
quiz:[{q:"Patella alta after an acute tear means…",o:["Patellar tendon failure","Quadriceps tendon failure","Pure medial collateral sprain"],a:0,e:"Unopposed pull from above."},{q:"Temporary pull-out wire is used to…",o:["Protect the suture line after repair","Replace the tendon permanently","Treat compartment syndrome"],a:0,e:"Lecture page 16."}]}],
cases:[{id:"obk1",title:"Case: Two gaps",steps:[{t:`<b>The scene:</b> Two patients arrive. A: 25-year-old, patella high. B: 70-year-old diabetic, gap above the patella. Both cannot straighten.`,q:"Match them.",o:["A patellar tendon; B quadriceps tendon","A quadriceps; B patellar tendon","Both meniscal"],a:0,e:"Age and gap location."},{t:`Both tears are complete on ultrasound.`,q:"Shared treatment principle?",o:["Operative repair for complete tears","Always brace only","Always replace the knee"],a:0,e:"Pages 13 and 16."}],take:["Age + gap + patella height = diagnosis."]}],
flash:[["Quadriceps rupture","Older, diabetes/steroids; gap above; repair if complete."],["Patellar tendon rupture","Young athlete; patella alta; repair if complete."],["Partial tear","Extension brace / cylinder + physiotherapy."],["Imaging","X-ray exclude fracture; ultrasound or magnetic resonance imaging."]],
exam:["Risk factors for each tendon rupture.","Clinical difference (gap, patella height).","Partial versus complete treatment."],
finalHtml:`<div data-widget="spot" data-set="o8b"></div><div data-widget="termdeck" data-set="o8b"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L8.3 Patella fracture and periprosthetic patella fracture.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o8c')">→ Open</button></div>`,
sources:"Sources: Lecture 8 pages 10–17; McRae 3rd edition chapter 19, Quadriceps and patellar tendon ruptures (book pages 434–437). Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o8b=O8B;
