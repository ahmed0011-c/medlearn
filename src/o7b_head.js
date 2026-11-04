/* ===== Orthopaedics · Lecture 7 · 2: Femoral head (Pipkin) ===== */
XSTEP.pipkin={t:"Pipkin I–IV (lecture page 5; McRae book page 378)",dim:.1,svg:`<svg viewBox="0 0 700 300" style="width:100%" role="img" aria-label="Pipkin types">
<g data-k="i"><circle cx="80" cy="120" r="50" fill="#fde2ea" stroke="#b3476d"/><path d="M50 150 Q80 170 110 140" stroke="#c62828" stroke-width="4" fill="none"/><text x="80" y="210" text-anchor="middle" font-size="12" font-weight="700">I below fovea</text></g>
<g data-k="ii"><circle cx="230" cy="120" r="50" fill="#fde2ea" stroke="#b3476d"/><path d="M200 90 Q230 70 260 100" stroke="#c62828" stroke-width="4" fill="none"/><text x="230" y="210" text-anchor="middle" font-size="12" font-weight="700">II weight-bearing</text></g>
<g data-k="iii"><circle cx="380" cy="120" r="50" fill="#fde2ea" stroke="#b3476d"/><line x1="360" y1="170" x2="400" y2="230" stroke="#c62828" stroke-width="4"/><text x="380" y="210" text-anchor="middle" font-size="12" font-weight="700">III + neck</text></g>
<g data-k="iv"><circle cx="530" cy="120" r="50" fill="#fde2ea" stroke="#b3476d"/><path d="M580 80 L620 140 L580 160 Z" fill="#e8f0fb" stroke="#2f6db3"/><text x="560" y="210" text-anchor="middle" font-size="12" font-weight="700">IV + socket</text></g>
</svg>`,
steps:[["I","Infrafoveal — below the ligamentum teres pit.",["i"]],["II","Suprafoveal — weight-bearing roof.",["i","ii"]],["III","Head plus neck fracture.",["i","ii","iii"]],["IV","Head plus acetabulum fracture.",["i","ii","iii","iv"]]]};
XPK.pipkinrx={t:"Pipkin management (lecture pages 8–9; McRae 378)",opts:["Urgent reduce; small fragment may be removed","Reduce and fix large weight-bearing fragment","Address neck + head together","Reduce hip; fix acetabulum ± head"],items:[
["Pipkin I tiny debris, congruent joint after reduction",0,"Small/comminuted pieces may be excised (McRae).",""],
["Pipkin II large dome fragment",1,"Weight-bearing fragment usually fixed.",""],
["Pipkin III in a young adult",2,"Neck + head need an urgent anatomic plan.",""],
["Pipkin IV with posterior wall fracture",3,"Socket and head share the operating list.",""]]};
XS.o7b=["Spot the error",[["Most femoral head fractures travel with hip dislocation.",1],["Pipkin II involves the weight-bearing portion above the fovea.",1],["Plain X-ray alone always maps every head fragment.",0,"Wrong: computed tomography sizes fragments and finds socket-wall pieces (lecture page 7)."],["Lecture quotes osteoarthritis ≈50% and osteonecrosis ≈20% after these injuries.",1]]];
XT.o7b="pipkin,hipdisloc,avn,sciaticn,intracap";
const O7B={
meta:"Orthopaedics › Hip and femur › Lecture 7 › Subsection L7.2 · Lecture pages 4–9 · ⏱ about 16 minutes in 2 steps",
intro:`<p>A dashboard punch can shear a chip off the [[pipkin|femoral head]] as the ball leaves the socket. Pipkin named the patterns; the clock names the urgency. McRae chapter 17, Femoral head (Pipkin) fractures (book page 378).</p>`,
goals:["Classify Pipkin I–IV","Choose reduce / remove / fix / address socket"],
cards:[
{id:"hb1",title:"Story, Pipkin map, imaging (pages 4–7)",min:8,goal:0,obj:["Link dashboard trauma to Pipkin types"],html:`
<div class="scene"><b>The scene:</b> Jonas, 24, was the belted driver in a head-on crash. His right hip screams; the knee that hit the dash is bruised. The leg sits flexed and internally rotated. You reduce the hip in theatre — and the head’s contour still looks wrong.</div>
<p>Picture the femoral head as a polished globe. [[hipdisloc|Dislocation]] yanks it out the back door; a shear plane slices cartilage and bone. [[pipkin|Pipkin I]] cuts below the fovea — often a non-weight-bearing chip. [[pipkin|Pipkin II]] cuts above the fovea through the roof you stand on. [[pipkin|Pipkin III]] adds a neck fracture. [[pipkin|Pipkin IV]] adds an acetabular break. Imaging (lecture page 7): X-ray first, then computed tomography before you celebrate.</p>
${FIG('o7-pipkin')}
${FIG('o7-pipkin-xray')}
${FIG('o7-pipkin-ct')}
<div data-widget="stepsvg" data-set="pipkin"></div>
<div class="hint">💡 <b>"Dashboard → posterior hip out → ask: head chip? neck crack? back wall missing? sciatic nerve?"</b></div>
<div class="exam"><b>🎓 For exams:</b> Pipkin I–IV; CT after reduction; link to posterior dislocation.</div>
<details class="chk"><summary>✅ Checkpoint: what does Jonas need after reduction?</summary><p>Sciatic check, then computed tomography for head fragment and posterior wall (${XL("o7g","L7.7")}).</p></details>`,
recap:["Usually with hip dislocation.","Pipkin I–IV.","X-ray then CT."],
quiz:[{q:"Pipkin II is…",o:["Suprafoveal / weight-bearing head fracture","Only an isolated greater-trochanter tip crack","A pure shaft fracture"],a:0,e:"Page 5 / McRae 378."},{q:"Best next imaging after reducing a suspected Pipkin?",o:["Computed tomography of the hip","Reassure without imaging"],a:0,e:"Lecture page 7."}]},
{id:"hb2",title:"Treatment and complications (pages 8–9)",min:8,goal:1,obj:["Match fragment personality to remove vs fix"],html:`
<div class="scene"><b>The scene:</b> CT shows a large Pipkin II fragment still tilted in the joint. The foot dorsiflexes weakly.</div>
<p>Urgent reduction of the hip; stability test; then negotiate with the chip. Small debris can be removed; large weight-bearing pieces are reduced and fixed with buried screws (McRae book page 378). Pipkin III respects the neck; Pipkin IV pulls the acetabulum onto the same list. Complications (lecture page 9 — lecture figures): osteoarthritis ≈50%; osteonecrosis ≈20%; [[sciaticn|sciatic]] palsy; malreduction; secondary dislocation; non-union; heterotopic ossification 6–46%.</p>
${FIG('o7-pipkin-fix')}
<div data-widget="pickset" data-set="pipkinrx"></div>
<div class="hint">💡 <b>"Reduce like a fire drill. Junk gets binned; the roof gets bolted."</b></div>
<div class="exam"><b>🎓 For exams:</b> lecture complication percentages; fix weight-bearing fragments; new palsy after reduction raises entrapment concern (McRae).</div>
<div class="corr">📝 <b>Slide typing:</b> headings such as "Complica)ons" are spelled normally here as <b>complications</b>.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Large Pipkin II → fix after reduction; document the sciatic deficit; counsel using lecture AVN/arthritis figures.</p></details>`,
recap:["Reduce urgently.","Fix big dome chips.","AVN, arthritis, sciatic nerve."],
quiz:[{q:"Lecture approximate osteonecrosis rate after femoral head fracture?",o:["About 20%","About 2%","About 90%"],a:0,e:"Lecture page 9."},{q:"Sciatic palsy appearing only after reduction suggests…",o:["Possible entrapment — urgent rethink","Always normal"],a:0,e:"McRae."}]}],
cases:[{id:"hbk1",title:"Case: Dash and dome",steps:[{t:`Posterior dislocation reduced at 3 hours. CT: Pipkin II fragment, joint incongruent.`,q:"Best bony plan?",o:["Open reduction and internal fixation of the head fragment","Observe indefinitely without fixation"],a:0,e:"Weight-bearing fragment + incongruence → fix."}],take:["Time to reduction + fragment geography."]}],
flash:[["Pipkin I","Infrafoveal."],["Pipkin II","Suprafoveal weight-bearing."],["Pipkin III","+ neck fracture."],["Pipkin IV","+ acetabulum."],["Lecture OA / AVN","≈50% / ≈20%."]],
exam:["Pipkin list.","Why CT.","Lecture complication figures."],
finalHtml:`<div data-widget="spot" data-set="o7b"></div><div data-widget="termdeck" data-set="o7b"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L7.3 Femoral neck: clinical picture and classifications.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o7c')">→ Open</button></div>`,
sources:"Sources: Lecture 7 pages 4–9; McRae's Orthopaedic Trauma and Emergency Fracture Management, 3rd edition (White, Mackenzie, Gray, 2016), chapter 17 Femoral head (Pipkin) fractures (book page 378). Statistics from lecture slides. Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o7b=O7B;
