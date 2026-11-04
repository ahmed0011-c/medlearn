/* ===== Orthopaedics · Lecture 8 · 9: Tibial plateau and periprosthetic tibia (pages 73–87) ===== */
XSTEP.schatzker={t:"Schatzker types I–VI (page 76)",dim:.1,svg:`<svg viewBox="0 0 700 340" style="width:100%" role="img" aria-label="Schatzker tibial plateau types schematic">
<g data-k="i"><rect x="30" y="120" width="90" height="60" fill="#e8f0fb" stroke="#2f6db3"/><path d="M70 120 L90 180" stroke="#c62828" stroke-width="3"/><text x="75" y="210" text-anchor="middle" font-size="12" font-weight="700">I split</text></g>
<g data-k="ii"><rect x="140" y="120" width="90" height="60" fill="#e8f0fb" stroke="#2f6db3"/><path d="M180 120 L200 180" stroke="#c62828" stroke-width="3"/><path d="M155 140 L200 140" stroke="#d9730d" stroke-width="6"/><text x="185" y="210" text-anchor="middle" font-size="12" font-weight="700">II split-dep.</text></g>
<g data-k="iii"><rect x="250" y="120" width="90" height="60" fill="#e8f0fb" stroke="#2f6db3"/><path d="M265 145 L320 145" stroke="#d9730d" stroke-width="8"/><text x="295" y="210" text-anchor="middle" font-size="12" font-weight="700">III depression</text></g>
<g data-k="iv"><rect x="360" y="120" width="90" height="60" fill="#fde2ea" stroke="#b3476d"/><path d="M400 120 L380 180" stroke="#c62828" stroke-width="3"/><text x="405" y="210" text-anchor="middle" font-size="12" font-weight="700">IV medial</text></g>
<g data-k="v"><rect x="470" y="120" width="90" height="60" fill="#fdf3e7" stroke="#d9730d"/><path d="M490 120 L500 180" stroke="#c62828" stroke-width="3"/><path d="M540 120 L530 180" stroke="#c62828" stroke-width="3"/><text x="515" y="210" text-anchor="middle" font-size="12" font-weight="700">V both</text></g>
<g data-k="vi"><rect x="580" y="100" width="90" height="80" fill="#f5f5f5" stroke="#333"/><line x1="580" y1="150" x2="670" y2="150" stroke="#c62828" stroke-width="3"/><text x="625" y="210" text-anchor="middle" font-size="12" font-weight="700">VI meta-dia</text></g>
</svg>`,
steps:[["I","Lateral split only.",["i"]],["II","Lateral split + depression.",["i","ii"]],["III","Pure lateral depression.",["i","ii","iii"]],["IV","Medial plateau — higher energy, vessel risk.",["i","ii","iii","iv"]],["V","Bicondylar.",["i","ii","iii","iv","v"]],["VI","Metaphysis separated from diaphysis.",["i","ii","iii","iv","v","vi"]]]};
XPK.plateaurx={t:"Plateau and periprosthetic decisions (pages 79–87)",opts:["Non-operative brace, non-weight-bearing","Operate (restore alignment ± joint surface)","Periprosthetic pathway"],items:[
["Schatzker II, 1 mm step, stable knee, soft tissues kind",0,"Selected I–III minimally displaced can brace non-weight-bearing (page 79; McRae).",""],
["Schatzker VI, unstable, 5 mm articular step",1,"Most displaced/unstable plateaus need surgery; aim coronal alignment and ≤2 mm step (McRae).",""],
["Felix type III fracture below a well-fixed tibial stem, displaced",2,"open reduction and internal fixation principles; unstable prosthesis or displacement → operate (pages 86–87).",""],
["Felix type I undisplaced, prosthesis stable",2,"Cast or brace if nondisplaced with stable component (page 87).",""]]};
XS.o8i=["Spot the error",[["Schatzker IV–VI are generally higher-energy injuries.",1],["Lipohaemarthrosis on a horizontal-beam lateral means an intra-articular fracture (McRae).",1],["Every Schatzker I fracture must have a plate.",0,"Wrong: undisplaced/minimally displaced I–III can sometimes be braced non-weight-bearing (page 79)."],["Late conversion to total knee replacement is quoted under 5% in the lecture when coronal stability is restored.",1]]];
XT.o8i="schatzker,lipohaem,felix,compsyn,poplart,peronealn";
const O8I={
meta:"Orthopaedics › Knee and leg › Lecture 8 › Subsection L8.9 · Lecture 8 pages 73–87 · ⏱ about 18 minutes in 2 bite-sized steps",
intro:`<p>A blow to the outer knee or a fall can smash the [[schatzker|tibial plateau]]. Soft tissues and alignment matter as much as the X-ray. McRae chapter 20, Tibial plateau fractures (book pages 445–455). Periprosthetic tibial fractures use the [[felix|Felix]] types (lecture pages 84–87).</p>`,
goals:["Use Schatzker (and know other modern maps exist)","Plan non-operative vs operative care and list complications"],
cards:[
{id:"oi1",title:"Picture, imaging, Schatzker (pages 73–78)",min:9,goal:0,obj:["Classify plateau fractures"],html:`
<div class="scene"><b>The scene:</b> After a car bumper hits the outer knee, the joint is swollen. Lateral X-ray shows a fat–fluid level. Computed tomography maps a lateral split with depressed joint surface.</div>
<p>Mechanism (page 74): fall or lateral blow; high energy damages the soft-tissue envelope. Imaging (page 75): X-ray; computed tomography for depression/comminution (± angio-computed tomography); magnetic resonance imaging for occult fracture/ligaments. [[lipohaem|Lipohaemarthrosis]] = intra-articular fracture (McRae). [[schatzker|Schatzker]] I–VI (page 76); AO/OTA classification (Arbeitsgemeinschaft für Osteosynthesefragen / Orthopaedic Trauma Association) and column / 10-segment maps also appear (pages 77–78).</p>
<div class="corr">📝 <b>Slide check (page 75):</b> the heading is typed "Imiging" — the correct word is <b>imaging</b>.</div>
<div data-widget="stepsvg" data-set="schatzker"></div>
${FIG('o8-schatzker')}
<div class="hint">💡 <b>"Fat–fluid level = the joint is broken inside. computed tomography tells the surgeon how to climb it."</b></div>
<div class="exam"><b>🎓 For exams:</b> Schatzker I–VI in order; lipohaemarthrosis meaning; computed tomography for planning.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Schatzker II (split-depression) pattern — soft-tissue and neurovascular check, then surgical planning if displaced.</p></details>`,
recap:["Lateral blow / fall.","X-ray → computed tomography (± magnetic resonance imaging).","Schatzker I–VI."],
quiz:[{q:"Schatzker IV is…",o:["Medial plateau fracture","Pure lateral depression only","Toddler's fracture"],a:0,e:"Page 76."},{q:"Fat–fluid level means…",o:["Intra-articular fracture","Skin-only bruise"],a:0,e:"McRae lipohaemarthrosis."}]},
{id:"oi2",title:"Treatment, approaches, complications, periprosthetic (pages 79–87)",min:9,goal:1,obj:["Choose care and cite early/late risks"],html:`
<div class="scene"><b>The scene:</b> Schatzker VI, blistered skin, absent dorsalis pedis until the spanning frame restores length. Later the patient develops foot drop.</div>
<p>Non-operative (page 79): selected undisplaced/minimally displaced I–III in a brace, non-weight-bearing. Operative: restore coronal alignment/axial stability and reduce articular step (McRae widely uses &gt;2 mm as unacceptable). Approaches (page 80): anterolateral, posteromedial and others. Fixation (page 81): angle-stable plates, screws, spanning external fixator when soft tissues demand it.</p>
<p>Early complications (page 82): vascular injury; [[peronealn|common peroneal]] and tibial nerve injury (neurapraxia/axonotmesis; lecture: about one-third recover — use as lecture figure, not a universal law). Late (page 83): delayed/non-union; post-traumatic osteoarthritis; conversion to total knee replacement &lt;5% when coronal stability is regained (lecture). Periprosthetic (pages 84–87): incidence 0.4–1.7% (lecture); [[felix|Felix]] I–IV; stable implant + nondisplaced → cast/brace; else open reduction and internal fixation / revise.</p>
${FIG('okr-periprosthetic-xray')}
<div data-widget="pickset" data-set="plateaurx"></div>
<div class="hint">💡 <b>"Alignment first. Soft tissues decide timing. Always think compartment syndrome."</b></div>
<div class="exam"><b>🎓 For exams:</b> when to brace; surgical aims; nerve/vessel risks; Felix types; lecture total knee replacement &lt;5%.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>High-energy plateau — spanning fixator to protect soft tissues and vessels; foot drop = common peroneal injury; watch compartments.</p></details>`,
recap:["Selected I–III: brace non-weight-bearing.","Most displaced: operate for alignment ± joint.","Nerves, vessels, osteoarthritis, Felix periprosthetic."],
quiz:[{q:"McRae articular step often cited as unacceptable beyond…",o:["About 2 mm","2 cm","20 cm"],a:0,e:"McRae plateau chapter."},{q:"Felix type II?",o:["Fracture adjacent to the tibial stem","Only a fibular tip avulsion"],a:0,e:"Page 86."}]}],
cases:[{id:"oik1",title:"Case: Bumper knee",steps:[{t:`Lateral split-depression, 4 mm step, unstable valgus.`,q:"Plan?",o:["Operative reconstruction of alignment and joint surface","Weight-bear immediately without support"],a:0,e:"Displaced unstable plateau."}],take:["Soft tissue + alignment + joint surface."]}],
flash:[["Schatzker I–III","Lateral patterns; some braceable if minimal."],["IV–VI","Higher energy; usually operate."],["Lipohaemarthrosis","Intra-articular fracture sign."],["Felix","Periprosthetic tibia types I–IV."]],
exam:["Schatzker list.","Non-op criteria.","Complications and Felix."],
finalHtml:`<div data-widget="spot" data-set="o8i"></div><div data-widget="termdeck" data-set="o8i"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L8.10 Tibia and fibula shaft fractures.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o8j')">→ Open</button></div>`,
sources:"Sources: Lecture 8 pages 73–87; McRae 3rd edition chapter 20 Tibial plateau fractures (book pages 445–455). Statistics from the lecture slides. Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o8i=O8I;
