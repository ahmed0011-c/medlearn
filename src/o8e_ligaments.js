/* ===== Orthopaedics · Lecture 8 · 5: Ligament injuries — collateral and cruciate (pages 44–52, 67) ===== */
XSORT.liggrade={t:"Grade the ligament story (pages 45–47)",labels:["Grade 1","Grade 2","Grade 3 / complete"],items:[
["Medial tenderness, no laxity on valgus stress",0,"Grade 1 medial collateral ligament (page 45)."],
["Valgus laxity at 30° flexion but stable in full extension",1,"Grade 2: other stabilisers (cruciates, capsule) still help in extension."],
["Lachman: tibia translates with a soft end-point; patient felt a pop",2,"Complete anterior cruciate ligament tear (page 46)."],
["Posterior drawer: tibia sags behind the femoral condyle",2,"Grade 3 posterior cruciate ligament (page 47)."]]};
XPK.ligtx={t:"Treat the ligament (pages 50–52)",opts:["Protect and rehab (non-operative)","Think reconstruction / repair pathway","Reassess — may be more than one ligament"],items:[
["Grade 2 medial collateral ligament after a rugby tackle",0,"Grades 1–2 heal over 6–8 weeks; lecture: no bracing required (page 50).",""],
["Young pivoting athlete, complete anterior cruciate ligament tear, wants to keep playing football",1,"Anterior cruciate does not heal; symptomatic young patients often need reconstruction; delay >6 months raises secondary medial meniscal tear risk (page 51).",""],
["Isolated grade 1–2 posterior cruciate ligament",0,"Posterior cruciate has some healing capacity; rehab avoiding early active flexion (page 52).",""],
["Grade 3 medial collateral laxity with a soft end-point and a pop at injury",2,"Grade 3 medial collateral should trigger a search for other ligament injuries (page 50).",""]]};
XS.o8e=["Spot the error",[["The two commonest single ligament injuries are the medial collateral and the anterior cruciate.",1],["The anterior cruciate ligament has little or no ability to heal unaided.",1],["Grade 1 and 2 medial collateral injuries always need surgery.",0,"Wrong: they usually heal in 6–8 weeks without intervention (page 50)."],["The correct name is cruciate, not 'crucial' (slide typo on pages 46 and 67).",1]]];
XT.o8e="mcl,lcl,acl,pcl,lachman,pivot,meniscus";
const O8E={
meta:"Orthopaedics › Knee and leg › Lecture 8 › Subsection L8.5 · Lecture 8 pages 44–52 and 67 · ⏱ about 16 minutes in 2 bite-sized steps",
intro:`<p>Most single-ligament stories are the [[mcl|medial collateral ligament]] or the [[acl|anterior cruciate ligament]]. Grades, bedside tests and healing capacity decide brace, physio or reconstruction. McRae chapter 19, Isolated knee ligament injuries (book pages 430–432).</p>`,
goals:["Grade collateral and cruciate injuries","Match each ligament to its usual treatment pathway"],
cards:[
{id:"oe1",title:"Grades and bedside tests (pages 44–49)",min:8,goal:0,obj:["Apply grade definitions and name the key tests"],html:`
<div class="scene"><b>The scene:</b> A rugby flanker takes a blow to the outside of the knee. Immediate medial pain, little early swelling. Valgus stress at 30° opens a little; in full extension the knee is stable.</div>
${FIG('o8-ligaments-menisci')}
<p>Collateral grades (page 45): 1 tenderness without laxity; 2 laxity at 30° flexion but stable in extension; 3 more severe / other structures. [[acl|Anterior cruciate]]: partial rare; complete — classify by tibial translation on [[lachman|Lachman]] testing (page 46). [[pcl|Posterior cruciate]] grades by posterior drawer at 90° (page 47): 1 tibia stays in front of the condyle; 2 to the level of the condyle; 3 behind. Clinical scripts (page 48): medial collateral — valgus blow, medial pain, little early swelling; anterior cruciate — pop, rapid swelling. Imaging: X-ray, magnetic resonance imaging; angio-computed tomography if dislocation concern (page 49). On the plain film, a small flake of bone just beside the outer side of the tibial plateau (a Segond lesion) is a strong clue that the anterior cruciate ligament has torn.</p>
${FIG('o8-segond-xray')}
${FIG('o8-acl-mri')}
${FIG('o8-lachman')}
<div data-widget="sortset" data-set="liggrade"></div>
<div class="hint">💡 <b>"Medial collateral = side blow, slow swell. Anterior cruciate = pop, fast swell. Lachman beats the drawer for the anterior cruciate."</b></div>
<div class="exam"><b>🎓 For exams:</b> collateral grades; Lachman and pivot-shift for anterior cruciate ligament; posterior drawer grades for posterior cruciate ligament.</div>
<div class="corr"><b>Slide note:</b> "Anterior Crucial Ligament" on pages 46 and 67 is a typo — say <b>cruciate</b>.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Grade 2 medial collateral ligament injury — stable in extension means the cruciates/capsule still help.</p></details>`,
recap:["Collaterals graded 1–3 by laxity.","anterior cruciate ligament: Lachman / pivot-shift; pop + rapid swell.","posterior cruciate ligament: posterior drawer grades 1–3."],
quiz:[{q:"Most sensitive bedside test for anterior cruciate ligament tear?",o:["Lachman test","Only McMurray","Only valgus at 0°"],a:0,e:"McRae and lecture."},{q:"Valgus laxity at 30° but stable in extension?",o:["Grade 2 medial collateral pattern","Complete bicruciate disruption always","Normal knee"],a:0,e:"Page 45."}]},
{id:"oe2",title:"Treatment pathways (pages 50–52)",min:8,goal:1,obj:["Choose non-operative vs reconstructive paths"],html:`
<div class="scene"><b>The scene:</b> Lea (from L8.1) has a complete anterior cruciate ligament tear on magnetic resonance imaging. She is 22 and plays football twice a week. Six months later she still pivots into giving-way, and a new medial meniscal tear appears.</div>
<p><b>Medial collateral (page 50):</b> grades 1–2 heal in 6–8 weeks; lecture states no bracing is required. Grade 3 — suspect other ligament injury and reassess. <b>Anterior cruciate (page 51):</b> no meaningful healing; young symptomatic patients often need reconstruction; delayed surgery &gt;6 months associated with more secondary medial meniscal tears (lecture). <b>Posterior cruciate (page 52):</b> isolated injuries uncommon; some healing capacity; rehab avoiding early active flexion; grade II–III with symptomatic instability may need surgery, especially with other structures.</p>
<div data-widget="pickset" data-set="ligtx"></div>
<div class="hint">💡 <b>"Medial collateral usually forgives. Anterior cruciate does not. Posterior cruciate sometimes forgives."</b></div>
<div class="exam"><b>🎓 For exams:</b> medial collateral ligament 1–2 non-operative; anterior cruciate ligament reconstruction timing vs meniscus; posterior cruciate ligament trial of rehab.</div>
<div class="corr"><b>Slide note:</b> page 51 text is garbled ("incidence ! of secondary medial meniscal tears"). The intended teaching point, matching standard practice and McRae, is that <b>delaying anterior cruciate ligament reconstruction increases secondary meniscal (and cartilage) injury risk</b> — the lecture flags a 6-month mark.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>anterior cruciate ligament does not heal; she is young and pivoting — reconstruction pathway; the delayed meniscal tear is the reason not to wait forever.</p></details>`,
recap:["medial collateral ligament 1–2: time and physio.","anterior cruciate ligament: reconstruct if young/symptomatic; do not delay forever.","posterior cruciate ligament: try rehab first when isolated."],
quiz:[{q:"Grade 2 medial collateral ligament — lecture plan?",o:["Heal over 6–8 weeks without mandatory bracing","Urgent anterior-cruciate-style reconstruction","Above-knee cast for 6 months always"],a:0,e:"Page 50."},{q:"Why not ignore a complete anterior cruciate ligament in a young pivoting athlete?",o:["Secondary meniscal tears rise if unstable for months","It always heals by 3 weeks","It only matters after age 70"],a:0,e:"Page 51."}]}],
cases:[{id:"oek1",title:"Case: Pop and give-way",steps:[{t:`Pop, haemarthrosis, soft Lachman.`,q:"Ligament?",o:["Anterior cruciate","Medial collateral grade 1 only","Pure iliotibial band"],a:0,e:"Classic anterior cruciate ligament script."},{t:`Magnetic resonance imaging confirms complete anterior cruciate ligament; patient is a non-pivoting 55-year-old happy with walking.`,q:"Reasonable first path?",o:["Rehab and functional assessment; operate if instability persists","Mandatory immediate reconstruction for every age","Amputation"],a:0,e:"Surgery is for symptomatic instability / demand, not the magnetic resonance image alone."}],take:["Match treatment to healing biology and patient demand."]}],
flash:[["medial collateral ligament grades 1–2","Heal 6–8 weeks; lecture: no brace required."],["anterior cruciate ligament","No heal; Lachman; reconstruct if needed."],["posterior cruciate ligament","Some heal; avoid early active flexion."],["Grade 3 medial collateral ligament","Look for other ligaments."]],
exam:["Grade definitions.","anterior cruciate ligament vs medial collateral ligament clinical scripts.","Treatment by ligament."],
finalHtml:`<div data-widget="spot" data-set="o8e"></div><div data-widget="termdeck" data-set="o8e"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L8.6 Meniscal injuries.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o8f')">→ Open</button></div>`,
sources:"Sources: Lecture 8 pages 44–52, 67; McRae 3rd edition chapter 19 Isolated knee ligament injuries (book pages 430–432). Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o8e=O8E;
