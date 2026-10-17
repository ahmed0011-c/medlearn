/* ===== Module 2.2 Adrenal insufficiency (theory): header + steps 1–4 ===== */
const D2={
meta:"Endocrinology › Adrenal disorders › 2.2 · theory module · ⏱ about 35 minutes in 7 bite-sized steps",
intro:`<p>This is the <b>theory</b> behind adrenal insufficiency, organised the way you will need it on the ward and in exams: what it is, why it happens, how it looks, how to prove it, how to treat the emergency, how to replace for life, and how to keep patients safe. At the end you can practise everything on a real patient in <a onclick="showModule('cbl5')" style="cursor:pointer;color:var(--acc);font-weight:700">CBL 5 (Schmidt syndrome)</a>.</p>`,
goals:[
"Define adrenal insufficiency and place primary, secondary and tertiary on the hormone axis",
"List the main causes of each type, starting with the most common",
"Recognise the symptoms and signs and tell primary from secondary at the bedside",
"Choose and interpret the diagnostic tests in the right order",
"Recognise an adrenal crisis and give the correct emergency treatment",
"Prescribe and monitor long-term replacement, including drug interactions and pregnancy",
"Teach sick-day rules, emergency card, injection kit and surgical stress dosing"],
ladderLabel:"💡 Pearl",ladderId:"b4-ladder",
cards:[
{id:"b1",title:"What is adrenal insufficiency? Three levels of failure",min:4,goal:0,obj:["Define adrenal insufficiency in one sentence","Place primary, secondary and tertiary failure on the hormone axis","Predict what happens to adrenocorticotropic hormone, aldosterone and skin colour at each level"],html:`
<div class="scene"><b>The scene:</b> Three patients on one ward: a woman with dark skin and a craving for salt, a man who stopped his prednisolone tablets last week, and a young woman whose pituitary was damaged after a difficult delivery. All three have low cortisol, but for three different reasons.</div>
<p>[[adrinsuf|Adrenal insufficiency]] means <b>the body does not make enough cortisol</b>. Sometimes aldosterone and adrenal androgens are missing too. Where the problem sits on the [[hpa]] decides which other hormones are affected:</p>
<table><tr><th>Level</th><th>What fails</th><th>Missing</th><th>Adrenocorticotropic hormone</th></tr>
<tr><td>[[pai|Primary]] ([[addison]])</td><td>The adrenal cortex itself</td><td>Cortisol + <b>aldosterone</b> + adrenal androgens</td><td><b>High</b></td></tr>
<tr><td>[[sai|Secondary]]</td><td>Pituitary (not enough adrenocorticotropic hormone)</td><td>Cortisol + adrenal androgens. Aldosterone <b>normal</b></td><td>Low or inappropriately normal</td></tr>
<tr><td>[[tai|Tertiary]]</td><td>Hypothalamus (not enough [[crh]])</td><td>Same as secondary</td><td>Low or inappropriately normal</td></tr></table>
<p>👉 Click the levels and watch the arrows:</p>
<div data-widget="hpa"></div>
<p><b>Why is aldosterone safe in secondary and tertiary failure?</b> Because the zona glomerulosa listens mainly to [[angii]] and potassium (the [[renin]] system), not to adrenocorticotropic hormone. You met this in Module 5.</p>
<div class="hint">💡 <b>"Primary = the factory burns down; secondary = the manager stops calling; tertiary = the boss above the manager stops calling."</b> Only when the factory burns down are all products (including aldosterone) lost, and only then does the manager shout (high adrenocorticotropic hormone → dark skin).</div>`,
recap:["Adrenal insufficiency = not enough cortisol.","Primary: adrenal destroyed → cortisol AND aldosterone low, adrenocorticotropic hormone high.","Secondary (pituitary) and tertiary (hypothalamus): cortisol low, aldosterone normal, adrenocorticotropic hormone low or normal."],
quiz:[{q:"Which level of failure loses aldosterone?",o:["Primary","Secondary","Tertiary"],a:0,e:"Only when the adrenal cortex itself is destroyed is the glomerulosa lost. In secondary and tertiary failure the renin–angiotensin system keeps aldosterone going."},
{q:"In tertiary adrenal insufficiency, which hormone is the FIRST one missing?",o:["Adrenocorticotropic hormone","Corticotropin-releasing hormone","Cortisol"],a:1,e:"Tertiary = the hypothalamus fails to make corticotropin-releasing hormone; adrenocorticotropic hormone and cortisol then fall as a consequence."}]},

{id:"b2",title:"Why does it happen? Causes, most common first",min:5,goal:1,obj:["Name the most common cause of primary insufficiency in high-income countries","Name the most common cause of adrenal insufficiency overall","Sort causes into primary versus secondary/tertiary","Spot the 'hidden' causes: drugs, bleeding, infections, genetics"],html:`
<div class="scene"><b>The scene:</b> Your consultant asks: "Name five causes of Addison disease and three causes of secondary insufficiency, starting with the most common." Here is your answer sheet.</div>
<h3>Primary (the adrenal is destroyed or blocked)</h3>
<table><tr><th>Cause</th><th>Key point</th></tr>
<tr><td><b>[[autoadr]]</b></td><td>Most common cause in high-income countries. [[ab21]] positive; often with other autoimmune diseases ([[aps2]]).</td></tr>
<tr><td>[[tbadr]]</td><td>Classic historical cause; still important where tuberculosis is common. Glands enlarged early, calcified later.</td></tr>
<tr><td>[[adrhaem]]</td><td>Sepsis (meningococcal = [[wfs]]), [[anticoag]], antiphospholipid syndrome.</td></tr>
<tr><td>[[adrmets]]</td><td>Lung, breast, kidney, melanoma. Both glands must be largely destroyed.</td></tr>
<tr><td>Infections in immune suppression</td><td>Human immunodeficiency virus with [[cmvadr]], fungal infections (for example histoplasmosis), tuberculosis.</td></tr>
<tr><td>Genetic</td><td>[[ald]] (boys and young men), [[cah]] (newborns), [[fgd]].</td></tr>
<tr><td>Drugs and surgery</td><td>[[mitotane]] (destroys the cortex), [[ketoconazole]], [[metyrapone]], [[osilodrostat]], [[etomidate]] (block enzymes); [[adrenalectomy]]. [[checkpoint|Checkpoint inhibitors]] rarely cause adrenalitis.</td></tr></table>
<h3>Secondary and tertiary (the signal is missing)</h3>
<table><tr><th>Cause</th><th>Key point</th></tr>
<tr><td><b>[[gcsup]]</b></td><td><b>Most common cause of adrenal insufficiency overall.</b> After stopping (or quickly reducing) long-term glucocorticoids, by any route: tablets, high-dose inhaled, joint injections, potent skin creams.</td></tr>
<tr><td>Pituitary tumours, surgery, radiotherapy</td><td>Large tumours press on normal pituitary; surgery and radiation damage it. [[apoplexy]] = sudden bleed.</td></tr>
<tr><td>[[sheehan]]</td><td>Pituitary necrosis after major bleeding at childbirth.</td></tr>
<tr><td>[[hypophysitis]]</td><td>Autoimmune, or from [[checkpoint]] (classically ipilimumab).</td></tr>
<tr><td>[[opioidai|Long-term opioids]]</td><td>Suppress the axis.</td></tr>
<tr><td>Hypothalamic disease</td><td>[[cranio]], radiotherapy, infiltrative diseases (for example sarcoidosis), trauma.</td></tr></table>
<p>🎮 <b>Sorting game:</b> is it primary or secondary/tertiary?</p>
<div data-widget="sort"></div>
<div class="hint">💡 <b>Primary causes, "ADDISON":</b> <b>A</b>utoimmune, <b>D</b>rugs (mitotane, ketoconazole, etomidate), <b>D</b>eposits (metastases), <b>I</b>nfection (tuberculosis, cytomegalovirus, fungi), <b>S</b>urgery (adrenalectomy), <b>O</b>ozing blood (haemorrhage), i<b>N</b>herited (adrenoleukodystrophy, congenital adrenal hyperplasia).</div>`,
recap:["Primary: autoimmune is most common in high-income countries; also tuberculosis, haemorrhage, metastases, infections, genetic causes, drugs, surgery.","Overall most common: stopping long-term glucocorticoids (secondary/tertiary).","Other secondary/tertiary: pituitary tumours, surgery, radiotherapy, Sheehan syndrome, hypophysitis (including checkpoint inhibitors), opioids."],
quiz:[{q:"What is the most common cause of adrenal insufficiency overall?",o:["Autoimmune adrenalitis","Stopping long-term glucocorticoid therapy","Tuberculosis"],a:1,e:"Glucocorticoids are prescribed to very many people; abrupt stopping after long-term use suppresses the axis. Autoimmune adrenalitis is the most common cause of PRIMARY insufficiency in high-income countries."},
{q:"A 15-year-old boy has primary adrenal insufficiency, negative 21-hydroxylase antibodies and his school grades are falling. Which test next?",o:["Very long chain fatty acids","Thyroid antibodies","Insulin tolerance test"],a:0,e:"Adrenoleukodystrophy (X-linked) affects boys and young men; adrenal failure can precede the brain involvement. Very long chain fatty acids are raised."}]},

{id:"b3",title:"How does it look? Symptoms and signs",min:4,goal:2,obj:["List the common symptoms (most are vague)","Name the three findings that point to PRIMARY insufficiency","Explain the lab pattern behind the symptoms"],html:`
<div class="scene"><b>The scene:</b> A 28-year-old teacher has been tired for months, has lost 6 kg without trying, feels dizzy when she stands up, and admits she has started eating salt straight from the shaker. Her gums have brown patches. Three doctors told her it was stress.</div>
<p>Adrenal insufficiency usually develops slowly and the symptoms are <b>vague</b>, so it is often missed until a crisis. Think of it whenever symptoms do not add up.</p>
<h3>Common to all types (cortisol lack)</h3>
<p>Fatigue and weakness, loss of appetite and weight, nausea, vomiting, abdominal pain, muscle and joint aches, dizziness, low mood, low glucose (especially in children). In women: loss of axillary and pubic hair and lower libido (adrenal androgens).</p>
<h3>Primary versus secondary at the bedside</h3>
<table><tr><th></th><th>[[pai|Primary]]</th><th>[[sai|Secondary / tertiary]]</th></tr>
<tr><td>Skin</td><td><b>[[hyperpig|Dark]]</b>: palm creases, knuckles, scars, gums, inside the cheeks. Sometimes [[vitiligo]]</td><td>Pale</td></tr>
<tr><td>[[saltcrave|Salt craving]]</td><td><b>Yes</b></td><td>No</td></tr>
<tr><td>[[posthypo|Postural hypotension]]</td><td>Marked (salt and water loss)</td><td>Milder</td></tr>
<tr><td>Potassium</td><td><b>[[hyperkal|High]]</b></td><td>Normal</td></tr>
<tr><td>Sodium</td><td>[[hyponat|Low]]</td><td>Normal or low ([[adh]] excess)</td></tr>
<tr><td>Other clues</td><td>Other autoimmune diseases (thyroid, type 1 diabetes, vitiligo)</td><td>Headache, visual field loss, other pituitary hormone deficiencies, history of steroids, pituitary surgery or childbirth bleeding</td></tr></table>
<p><b>Other lab clues:</b> [[hypogly]], mild high calcium, mild anaemia, [[eos]] and more lymphocytes. Thyroid-stimulating hormone can be mildly raised and may normalise once hydrocortisone is started, so recheck it before diagnosing hypothyroidism.</p>
<div class="hint">💡 <b>The 3 P's of primary: Pigment, Potassium, Pinch of salt.</b> All three need either high adrenocorticotropic hormone or missing aldosterone, which only happen when the adrenal itself fails.<br>History fact: United States president John F. Kennedy had Addison disease, which was kept largely secret during his lifetime.</div>`,
recap:["Symptoms are vague: fatigue, weight loss, nausea, abdominal pain, dizziness, low glucose.","Primary only: hyperpigmentation, salt craving, high potassium (plus vitiligo as an autoimmune clue).","Low sodium happens in both; thyroid-stimulating hormone may be mildly high and correct with hydrocortisone."],
quiz:[{q:"Which finding is specific for PRIMARY adrenal insufficiency?",o:["Fatigue","Salt craving","Low sodium"],a:1,e:"Salt craving reflects salt loss from missing aldosterone, which happens only in primary insufficiency. Fatigue and low sodium occur in both."},
{q:"Why can sodium be low in secondary insufficiency even though aldosterone is normal?",o:["Cortisol lack lets antidiuretic hormone rise → water retention","Renin is suppressed","Potassium pushes sodium out"],a:0,e:"Cortisol normally restrains antidiuretic hormone. Without cortisol, water is retained and sodium is diluted."}]},

{id:"b4",title:"Proving it: the diagnostic ladder",min:5,goal:3,obj:["Use morning cortisol and adrenocorticotropic hormone as the first step","Know the short stimulation test as the confirmation test","Choose insulin tolerance or metyrapone tests for pituitary questions","Find the cause, and avoid the binding-protein traps"],html:`
<div class="scene"><b>The scene:</b> The salt-craving teacher is stable. Her morning cortisol is borderline. Your registrar asks: "What next, and what could make her cortisol look falsely normal?"</div>
<p>Three questions, in order: <b>1. Is cortisol too low? 2. Where is the failure? 3. What is the cause?</b> Always draw blood <b>before</b> giving hydrocortisone, which is measured as cortisol (prednisolone also cross-reacts in many cortisol tests). But if the patient is unwell, never delay treatment for a test.</p>
<h3>🪜 Climb the ladder (click each rung)</h3>
<p>Tools on the ladder: [[basalcort]], [[renin]], [[sst]] with [[synacthen]], [[itt]], [[mettest]], [[ab21]], [[vlcfa]] and [[ct]].</p>
<div data-widget="ladder"></div>
<h3>Traps</h3>
<table><tr><th>Trap</th><th>Why</th></tr>
<tr><td><b>Oral oestrogen</b> (the pill, hormone replacement) and <b>pregnancy</b></td><td>Raise [[cbg]], so total cortisol looks higher and can hide insufficiency.</td></tr>
<tr><td>Critical illness, liver cirrhosis, nephrotic syndrome</td><td>Low binding proteins, so total cortisol looks lower than the active (free) cortisol really is.</td></tr>
<tr><td>Recent pituitary damage (the first weeks after pituitary surgery or apoplexy)</td><td>The adrenal has not shrunk yet, so it can still answer the short stimulation test: a falsely normal result.</td></tr>
<tr><td>Patient already on glucocorticoids</td><td>Hydrocortisone and prednisolone interfere with the cortisol result; dexamethasone does not, but it suppresses the axis.</td></tr></table>
<div class="hint">💡 <b>"Cortisol, Commander, Confirm, Cause":</b> measure Cortisol, check the Commander (adrenocorticotropic hormone), Confirm with the stimulation test, then find the Cause (antibodies, very long chain fatty acids, computed tomography).</div>
<div class="corr">📝 <b>Threshold check:</b> cortisol cut-offs depend on the laboratory method. Newer, more specific cortisol assays give lower values, so their "normal response" thresholds are lower than the classic 18–20 µg/dl (500–550 nmol/L). Always use the cut-offs of the laboratory that measured the sample. Conversion: µg/dl × 27.59 = nmol/L.</div>`,
recap:["Morning cortisol + adrenocorticotropic hormone first; renin and aldosterone for mineralocorticoid status.","Short stimulation test (250 µg tetracosactide) confirms; insulin tolerance or metyrapone tests check the pituitary when needed.","Cause: 21-hydroxylase antibodies → very long chain fatty acids in males if negative → adrenal computed tomography. Oestrogen raises cortisol-binding globulin and can hide insufficiency."],
quiz:[{q:"A woman on the combined oral contraceptive pill has a 'normal' morning cortisol but typical symptoms and dark skin. Why might the result mislead you?",o:["Oestrogen raises cortisol-binding globulin, so total cortisol looks higher","The pill lowers adrenocorticotropic hormone","The pill destroys cortisol in the sample"],a:0,e:"Laboratories measure total cortisol. More binding protein means more total cortisol even when free (active) cortisol is low. Do a stimulation test and interpret it with care."},
{q:"Two weeks after pituitary surgery, a patient's short stimulation test is normal. Can you exclude secondary insufficiency?",o:["Yes, the test is always reliable","No: the adrenal has not shrunk yet, so the test can be falsely normal early on","Yes, if sodium is normal"],a:1,e:"After sudden loss of adrenocorticotropic hormone, the adrenal still responds to synthetic hormone for some weeks. Use morning cortisol, clinical judgement and, if needed, a later retest."}]}
]};
