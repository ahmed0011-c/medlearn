/* ===== Lecture 7 subsection 7: Metabolism and inactivation – header + steps 1–3 ===== */
const M7={
meta:"Endocrinology › Lecture 7 › Subsection 7 · lecture pages 24–25 · ⏱ about 25 minutes in 6 bite-sized steps",
intro:`<p>Cortisol is made on demand and cannot be stored, so its level depends just as much on how fast it is <b>switched off</b> as on how fast it is made. In this module you follow cortisol (and its siblings aldosterone and the adrenal androgens) to the liver, into tissues that switch it on and off, and finally into the urine, where we can measure it.</p>`,
goals:[
"Explain how long cortisol lasts in blood and why the liver is the main place where it is switched off",
"Describe the two liver steps (A-ring reduction and conjugation) and what ends up in the urine",
"Explain how 11-beta-hydroxysteroid dehydrogenase types 1 and 2 switch cortisol on and off inside tissues",
"Explain how liquorice (and very high cortisol) causes apparent mineralocorticoid excess",
"Use 24-hour urinary free cortisol correctly and know its pitfalls",
"Predict how drugs, thyroid status and liver or kidney disease change steroid breakdown"],
cards:[

{id:"e1",title:"Where does cortisol go? Half-life and the liver",min:3,goal:0,obj:["Give the approximate plasma half-life of cortisol","Explain why bound cortisol is protected from breakdown","Tell plasma half-life from biological half-life"],html:`
<div class="scene"><b>The scene:</b> In theatre a surgeon asks you: "We gave 100 mg hydrocortisone at induction. Why does the anaesthetist want to give more in a few hours, or run it as an infusion?"</div>
<p>Cortisol has a short plasma [[halflife]]: roughly <b>1 to 1.5 hours</b>. Every hour a large part of it is cleared, mainly by the <b>liver</b>; the kidney then excretes the products.</p>
<ol><li>About 9 in 10 cortisol molecules ride on [[cbg]] or albumin (Module 6). <b>Bound cortisol is protected</b>: enzymes in the liver only reach the free fraction.</li>
<li>Free cortisol enters liver cells, is made inactive and water-soluble (step 2), and leaves via the kidney.</li>
<li>A very small part reaches the urine <b>unchanged</b>, as [[ufc]] (step 5).</li></ol>
<p><b>Plasma versus biological half-life.</b> Cortisol leaves the blood within hours, but the genes it switched on stay active longer. Hydrocortisone therefore acts for about <b>8–12 hours</b> (its biological half-life). That is why replacement is given 2–3 times a day, and why stress doses are repeated every 6 hours or given as a continuous infusion.</p>
<div class="hint">💡 <b>"The blood forgets fast, the genes remember longer."</b> Plasma half-life tells you when the hormone has left the blood; biological half-life tells you when the effect ends.</div>
<details class="chk"><summary>✋ Checkpoint: why does a woman on the oestrogen pill have a higher TOTAL cortisol but normal cortisol effects?</summary><p>Oestrogen makes the liver produce more cortisol-binding globulin. More cortisol is bound (and protected), so total cortisol rises, but the free, active part stays normal.</p></details>`,
recap:["Cortisol plasma half-life ≈ 1–1.5 hours; the liver is the main site of inactivation.","Only free cortisol is broken down; bound cortisol is protected.","Biological effect (about 8–12 hours for hydrocortisone) outlasts the blood level."],
quiz:[{q:"Which fraction of cortisol can liver enzymes break down?",o:["Only cortisol bound to cortisol-binding globulin","Only free cortisol","Both equally"],a:1,e:"Bound cortisol is protected; only the free fraction enters liver cells and is inactivated."},
{q:"Why is hydrocortisone replacement split into 2–3 doses per day?",o:["Because its effect lasts only about 8–12 hours","Because it is not absorbed in the evening","Because the liver stores it"],a:0,e:"Short plasma half-life and a biological effect of about 8–12 hours mean a single dose cannot cover 24 hours."}]},

{id:"e2",title:"The liver's clean-up: reduce first, then attach a sugar acid",min:4,goal:1,obj:["Name the two liver steps that inactivate cortisol","Name the minor hydroxylation route and why it matters for drugs","Describe what happens to adrenal androgens and aldosterone"],html:`
<div class="scene"><b>The scene:</b> A chemistry student asks you: "Cortisol is fat-soluble. How can the body get rid of it in watery urine?"</div>
<p>The liver works in <b>two steps</b>:</p>
<ol><li><b>Switch it off:</b> [[aring]]. The enzymes [[red5]] and [[hsd3a]] add hydrogen to ring A. The result, [[thf]] (and tetrahydrocortisone from cortisone), cannot bind the receptor any more.</li>
<li><b>Make it water-soluble:</b> [[glucur]]. A sugar acid is attached; the kidney filters the conjugate into the urine.</li></ol>
<p><b>Minor route:</b> [[cyp3a4]] adds a hydroxyl group at carbon 6 (6-beta-hydroxycortisol). Small for natural cortisol, but this enzyme is the main route for many <b>synthetic</b> steroids, which is why drug interactions matter (step 6).</p>
<p>👉 Click through the route:</p>
<div data-widget="liver"></div>
<h3>The other adrenal steroids</h3>
<table><tr><th>Steroid</th><th>What happens</th></tr>
<tr><td>[[dhea|Dehydroepiandrosterone]]</td><td>Sulfated to dehydroepiandrosterone sulfate in the adrenal itself, the liver and the kidney (a long-lived storage form in blood).</td></tr>
<tr><td>[[andro|Androstenedione]]</td><td>In peripheral tissues: → testosterone (17-beta-hydroxysteroid dehydrogenase) → dihydrotestosterone (5-alpha-reductase); or → oestrone ([[aromatase]], for example in fat tissue).</td></tr>
<tr><td>[[aldo|Aldosterone]]</td><td>Liver: → [[thaldo]] (conjugated). Kidney: → aldosterone 18-glucuronide. Half-life only about <b>15–20 minutes</b> (slide 24).</td></tr></table>
<div class="corr">📝 <b>Slide check (page 24):</b><br>• "Cortisol: inactivation by hydroxilation" (spelling: <i>hydroxylation</i>) is a simplification. The <b>main</b> inactivation step in the liver is <b>A-ring reduction</b> (5-alpha-/5-beta-reductase plus 3-alpha-hydroxysteroid dehydrogenase), followed by conjugation with glucuronic acid or sulfate. Hydroxylation (6-beta, by cytochrome P450 3A4) is a minor route for cortisol, although it matters for drug interactions.<br>• "Androstenedione → testosterone / DHT": dihydrotestosterone is made from <b>testosterone</b> by 5-alpha-reductase, not directly from androstenedione in the classic pathway. So the order is androstenedione → testosterone → dihydrotestosterone.</div>
<div class="hint">💡 <b>"Laundry rule": soften, then tag.</b> The liver first <b>reduces</b> ring A (cortisol is switched off), then sews on a water-soluble <b>glucuronic acid tag</b> so the kidney can wash it out.</div>
<details class="chk"><summary>✋ Checkpoint: which of the two liver steps actually makes cortisol inactive?</summary><p>Step 1, A-ring reduction. Conjugation (step 2) only makes the already inactive metabolite water-soluble.</p></details>`,
recap:["Main inactivation: A-ring reduction → tetrahydrocortisol (inactive).","Then conjugation with glucuronic acid or sulfate → water-soluble → urine.","6-beta-hydroxylation by cytochrome P450 3A4 is minor for cortisol but major for many synthetic steroids.","Aldosterone half-life ≈ 15–20 minutes; dehydroepiandrosterone is stored as its sulfate."],
quiz:[{q:"What is the MAIN inactivating step for cortisol in the liver?",o:["6-beta-hydroxylation","A-ring reduction","Sulfation in the adrenal"],a:1,e:"Reduction of ring A by 5-alpha-/5-beta-reductase and 3-alpha-hydroxysteroid dehydrogenase makes tetrahydro metabolites that no longer bind the receptor."},
{q:"Dihydrotestosterone is made directly from…",o:["Androstenedione","Testosterone","Dehydroepiandrosterone sulfate"],a:1,e:"5-alpha-reductase converts testosterone to dihydrotestosterone (for example in the skin and prostate)."}]},

{id:"e3",title:"The on/off switch: 11-beta-hydroxysteroid dehydrogenase types 1 and 2",min:5,goal:2,obj:["State where each type works and in which direction","Explain how type 2 protects the mineralocorticoid receptor","Apply the shuttle to prednisone and to pregnancy"],html:`
<div class="scene"><b>The scene:</b> The kidney's [[mr]] binds cortisol just as strongly as aldosterone, and blood contains roughly 100 to 1000 times more cortisol than aldosterone. So why doesn't everybody retain salt as if they had an aldosterone tumour?</div>
<p>Because tissues can switch cortisol off and on locally with two enzymes. Together they form the <b>cortisol–cortisone shuttle</b>:</p>
<table><tr><th></th><th>[[hsd11b2|Type 2]]: switches OFF</th><th>[[hsd11b1|Type 1]]: switches ON</th></tr>
<tr><td>Reaction</td><td>Cortisol → [[cortisone]] (inactive)</td><td>Cortisone → cortisol (active)</td></tr>
<tr><td>Where</td><td>Kidney (collecting duct), colon, salivary and sweat glands, <b>placenta</b></td><td>Liver, fat tissue, brain, skin, bone</td></tr>
<tr><td>Why</td><td>Guards the mineralocorticoid receptor so that only aldosterone controls salt; protects the fetus</td><td>Raises cortisol locally; activates tablets such as cortisone and [[prednisone]]</td></tr></table>
<p>👉 Try each situation in the diagram:</p>
<div data-widget="shuttle"></div>
<p><b>Pregnancy:</b> the [[placbar]] (type 2) inactivates most maternal cortisol and much of the prednisolone. So prednisolone is a good choice to treat the <b>mother</b> (for example asthma), while [[dexa]] and [[betameth]] are poor substrates, pass through, and are used to mature the <b>baby's</b> lungs before a preterm birth.</p>
<div class="corr">📝 <b>Slide check (page 25, Guyton and Hall figure):</b> the placenta appears on both sides of the diagram. Placental tissue can express both enzymes, but its key job as a <b>barrier</b> between mother and fetus is done by <b>type 2</b> (inactivation). For exams: "placenta = type 2 barrier".</div>
<div class="hint">💡 <b>"Type ONE turns it ON; type TWO says NO."</b> Type 2 says no to cortisol at the kidney's salt receptor and at the placenta.</div>
<details class="chk"><summary>✋ Checkpoint: a patient with severe liver failure is given prednisone tablets. Why may they work poorly?</summary><p>Prednisone is inactive and needs liver 11-beta-hydroxysteroid dehydrogenase type 1 to become prednisolone. Give prednisolone directly instead.</p></details>`,
recap:["Type 2 (kidney, colon, salivary and sweat glands, placenta): cortisol → inactive cortisone.","Type 1 (liver, fat, brain, skin, bone): cortisone → active cortisol; also prednisone → prednisolone.","Type 2 keeps cortisol off the mineralocorticoid receptor and forms the placental barrier."],
quiz:[{q:"Which enzyme activates prednisone to prednisolone?",o:["11-beta-hydroxysteroid dehydrogenase type 1 in the liver","11-beta-hydroxysteroid dehydrogenase type 2 in the kidney","11-beta-hydroxylase in the adrenal"],a:0,e:"Prednisone, like cortisone, is a prodrug reactivated by type 1 (mainly in the liver)."},
{q:"Which steroid is given to the mother to mature the lungs of a baby expected to be born preterm?",o:["Prednisolone","Hydrocortisone","Dexamethasone or betamethasone"],a:2,e:"These are poor substrates for placental type 2, so they reach the fetus. Prednisolone and cortisol are largely inactivated by the placenta."}]}
]};
