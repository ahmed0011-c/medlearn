/* ===== Lecture 7 subsection 8: hypothalamic–pituitary–adrenal axis – header + steps 1–3 ===== */
const M8={
meta:"Endocrinology › Lecture 7 › Subsection 8 · lecture page 26 · ⏱ about 25 minutes in 5 bite-sized steps",
intro:`<p>Cortisol is not stored, so its level is controlled minute by minute from the brain. This module follows the command chain from hypothalamus to adrenal, the thermostat that keeps it stable (negative feedback), the daily clock, the stress override, and the test that uses all of this logic: the dexamethasone suppression test.</p>`,
goals:[
"Name each level of the axis, its hormone and its target",
"Explain negative feedback and predict the hormone pattern when the axis breaks at different levels",
"Describe the daily rhythm and the pulses, and time tests and tablets accordingly",
"Explain how stress and inflammation override the rhythm",
"Use the logic of the dexamethasone suppression tests to find the cause of high cortisol"],
cards:[

{id:"f1",title:"The chain of command: hypothalamus → pituitary → adrenal",min:4,goal:0,obj:["Name the three levels and their hormones","Explain why the zona glomerulosa is mostly outside this chain","Name the other products of proopiomelanocortin"],html:`
<div class="scene"><b>The scene:</b> 3 a.m., a frightening dream, your heart races. Two relays start: a <b>fast</b> one (nerves → adrenal medulla → adrenaline, seconds) and a <b>slower</b> hormonal one that raises cortisol within minutes. This module is about the slower one.</div>
<figure><svg viewBox="0 0 640 300" style="width:100%" role="img" aria-label="Command chain of the hypothalamic–pituitary–adrenal axis">
<defs><marker id="f1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#444"/></marker></defs>
<g font-size="14" font-weight="700" text-anchor="middle" fill="#222">
<rect x="20" y="110" width="140" height="64" rx="12" fill="#f3ecff" stroke="#7b3fc4" stroke-width="2.5"/><text x="90" y="138">Hypothalamus</text><text x="90" y="158" font-weight="400" font-size="12">paraventricular nucleus</text>
<rect x="250" y="110" width="140" height="64" rx="12" fill="#e3f1ff" stroke="#2f6fdb" stroke-width="2.5"/><text x="320" y="138">Anterior pituitary</text><text x="320" y="158" font-weight="400" font-size="12">corticotroph cells</text>
<rect x="480" y="110" width="140" height="64" rx="12" fill="#fff3d6" stroke="#d9730d" stroke-width="2.5"/><text x="550" y="138">Adrenal cortex</text><text x="550" y="158" font-weight="400" font-size="12">fasciculata, reticularis</text></g>
<line x1="160" y1="142" x2="248" y2="142" stroke="#444" stroke-width="3" marker-end="url(#f1a)"/><line x1="390" y1="142" x2="478" y2="142" stroke="#444" stroke-width="3" marker-end="url(#f1a)"/>
<g font-size="12" fill="#0f8b8d" font-weight="700" text-anchor="middle"><text x="205" y="98">corticotropin-</text><text x="205" y="112">releasing hormone</text><text x="205" y="196" fill="#555" font-weight="400">(+ vasopressin)</text><text x="205" y="212" fill="#555" font-weight="400">via portal vessels</text>
<text x="435" y="98">adrenocorticotropic</text><text x="435" y="112">hormone</text><text x="435" y="196" fill="#555" font-weight="400">via the blood</text></g>
<line x1="550" y1="174" x2="550" y2="232" stroke="#444" stroke-width="3" marker-end="url(#f1a)"/><text x="550" y="254" text-anchor="middle" font-size="14" font-weight="700" fill="#0f8b8d">cortisol (+ adrenal androgens)</text>
<g font-size="12" fill="#555"><text x="20" y="40">Inputs to the hypothalamus:</text><text x="20" y="58">body clock · stress · inflammation · low glucose</text></g>
<line x1="90" y1="66" x2="90" y2="108" stroke="#7b3fc4" stroke-width="2" marker-end="url(#f1a)"/></svg>
<figcaption>The command chain, drawn by MedLearn (schematic). Feedback is added in step 2.</figcaption></figure>
<ol><li>The [[pvn]] of the hypothalamus releases [[crh]], helped by vasopressin ([[adh]]).</li>
<li>It travels in the [[portal]] to the anterior pituitary. There [[corticotroph]] cells cut [[pomc]] into [[acth]] (plus melanocyte-stimulating hormone and beta-endorphin).</li>
<li>Adrenocorticotropic hormone binds the [[mc2r]] on zona fasciculata and reticularis cells → cortisol within minutes (Module 5) and gland growth over days.</li></ol>
<p><b>Not the glomerulosa:</b> aldosterone is run mainly by [[angii]] and potassium. That is why aldosterone survives pituitary failure.</p>
<div class="hint">💡 <b>"Call – Command – Carry out":</b> corticotropin-releasing hormone <b>calls</b>, adrenocorticotropic hormone <b>commands</b>, cortisol <b>carries out</b> the job.</div>
<details class="chk"><summary>✋ Checkpoint: why do patients with primary adrenal insufficiency get dark skin?</summary><p>Without cortisol feedback the pituitary makes lots of proopiomelanocortin, which is also cut into melanocyte-stimulating hormone; adrenocorticotropic hormone itself also stimulates melanocytes.</p></details>`,
recap:["Hypothalamus (corticotropin-releasing hormone + vasopressin) → anterior pituitary (adrenocorticotropic hormone) → adrenal cortex (cortisol).","Proopiomelanocortin gives adrenocorticotropic hormone, melanocyte-stimulating hormone and beta-endorphin.","The glomerulosa (aldosterone) follows angiotensin II and potassium, not this chain."],
quiz:[{q:"Which pituitary cells make adrenocorticotropic hormone?",o:["Somatotroph cells","Corticotroph cells","Lactotroph cells"],a:1,e:"Corticotroph cells of the anterior pituitary cut proopiomelanocortin into adrenocorticotropic hormone."},
{q:"Which hormone helps corticotropin-releasing hormone stimulate the pituitary, especially in stress?",o:["Vasopressin","Oxytocin","Prolactin"],a:0,e:"Vasopressin (antidiuretic hormone) from the paraventricular nucleus strongly boosts the action of corticotropin-releasing hormone."}]},

{id:"f2",title:"Negative feedback: the thermostat",min:5,goal:1,obj:["Explain how cortisol inhibits the levels above it","Predict cortisol and adrenocorticotropic hormone at each broken level","Use the 'look one level up' rule"],html:`
<div class="scene"><b>The scene:</b> The heating in your flat switches off when the room is warm. Cortisol does the same: when there is enough, it switches off the hypothalamus and the pituitary.</div>
<p>Cortisol inhibits the release of [[crh]] and [[acth]] (and the gene for [[pomc]]). This [[negfb]] works <b>fast</b> (minutes, responding to a rising cortisol) and <b>slowly</b> (hours to days, changing gene activity). It keeps cortisol stable and explains every pattern of axis disease.</p>
<p>👉 Click each situation and watch the hormone levels:</p>
<div data-widget="axisloop"></div>
<table><tr><th>Situation</th><th>Cortisol</th><th>Adrenocorticotropic hormone</th></tr>
<tr><td>Adrenal destroyed ([[pai|primary insufficiency]])</td><td>Low</td><td><b>High</b></td></tr>
<tr><td>Pituitary failure ([[sai|secondary insufficiency]])</td><td>Low</td><td>Low</td></tr>
<tr><td>[[cushdis]] (pituitary adenoma)</td><td>High</td><td>High-normal or high</td></tr>
<tr><td>[[adrad]]</td><td>High</td><td><b>Low</b> (suppressed)</td></tr>
<tr><td>[[ectopic]]</td><td>Very high</td><td>Very high</td></tr>
<tr><td>Steroid medicines ([[iatro]])</td><td>Own cortisol low (drug effect high)</td><td>Low</td></tr></table>
<div class="hint">💡 <b>"Look one level up."</b> If the hormone above is shouting (high), the problem is below it. If the hormone above is silent (low), it is either the cause, or it has been told to be quiet by too much cortisol.</div>
<details class="chk"><summary>✋ Checkpoint: high cortisol + low adrenocorticotropic hormone. Where is the problem?</summary><p>In the adrenal (an adenoma or carcinoma) or outside the body (steroid medicines). The pituitary is silent because feedback is working.</p></details>`,
recap:["Cortisol inhibits corticotropin-releasing hormone and adrenocorticotropic hormone (fast and slow feedback).","Low cortisol + high adrenocorticotropic hormone = primary; low + low = secondary or tertiary.","High cortisol + low adrenocorticotropic hormone = adrenal tumour or steroid medicines; high + high = pituitary or ectopic source."],
quiz:[{q:"Cortisol high, adrenocorticotropic hormone undetectable. Most likely source?",o:["Pituitary adenoma","Cortisol-secreting adrenal adenoma","Ectopic tumour"],a:1,e:"Autonomous adrenal cortisol suppresses the pituitary by feedback, so adrenocorticotropic hormone is low."},
{q:"A patient takes prednisolone 20 mg daily. What happens to his own adrenocorticotropic hormone and cortisol?",o:["Both high","Both low","Adrenocorticotropic hormone high, cortisol low"],a:1,e:"The drug acts on the hypothalamus and pituitary like cortisol; the axis is switched off and the adrenal makes little cortisol."}]},

{id:"f3",title:"The daily rhythm and the pulses",min:4,goal:2,obj:["Describe when cortisol is highest and lowest","Explain which tests are timed and why","Link the rhythm to tablet timing"],html:`
<div class="scene"><b>The scene:</b> A friend who works night shifts asks why her doctor wants a blood test "before 9 in the morning" and a saliva sample "at 11 at night".</div>
<p>The axis follows a [[circadian]] set by the [[scn]] (the master clock, reset by daylight). On top of this, adrenocorticotropic hormone comes in bursts, each followed by a cortisol pulse ([[pulsatile]]).</p>
${FIG("circadian")}
<p>👉 Click the time points on the curve:</p>
<div data-widget="circadian"></div>
<p><b>Clinical consequences:</b></p>
<ul><li><b>Too little cortisol?</b> Test at the <b>peak</b>: a [[basalcort]] at about 8–9 a.m.</li>
<li><b>Too much cortisol?</b> Test at the <b>low point</b>: [[lnsc]]. Losing the midnight low is an early sign of Cushing syndrome.</li>
<li><b>Tablets:</b> give the biggest hydrocortisone dose on waking, and prednisolone in the <b>morning</b> (less axis suppression and less insomnia).</li>
<li><b>Night shifts and jet lag:</b> the rhythm shifts only slowly and often incompletely, so interpret timed tests by the patient's sleep times.</li></ul>
<div class="hint">💡 <b>"Hunt too little at the top, too much at the bottom."</b> Low cortisol shows best at the morning peak; high cortisol shows best at the midnight low.</div>
<details class="chk"><summary>✋ Checkpoint: why is a single afternoon cortisol useless to exclude Cushing syndrome?</summary><p>Pulses and the daily fall make afternoon values vary a lot, and many patients with Cushing syndrome have normal afternoon values. Their problem is the missing evening fall.</p></details>`,
recap:["Cortisol rises in late sleep, peaks around waking, and is lowest around midnight (slide 26).","Adrenocorticotropic hormone is pulsatile; single random values mislead.","Morning cortisol tests for insufficiency; late-night salivary cortisol tests for Cushing syndrome; give steroids in the morning."],
quiz:[{q:"When is cortisol normally lowest?",o:["Around waking","Around midday","Around midnight"],a:2,e:"Cortisol falls through the day and reaches its lowest level around midnight, then rises in the second half of the night."},
{q:"Which test uses the loss of the midnight low to screen for Cushing syndrome?",o:["Morning serum cortisol","Late-night salivary cortisol","Short stimulation test"],a:1,e:"Saliva collected at about 11 p.m. reflects free cortisol at the time it should be lowest."}]}
]};
