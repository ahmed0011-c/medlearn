/* ===== CBL 5 lesson: header + steps 1–4 ===== */
const CBL5={
meta:"Endocrinology › Case-based learning 5 · Prof. Dr. Ionela Pascanu, UMCH 2026 · 35 slides · ⏱ about 30 minutes in 7 bite-sized steps",
intro:`<div class="scene"><b>The scene:</b> M.T., a 53-year-old woman, is sent up from the emergency department with pain under her right ribs, nausea, vomiting, exhaustion, low blood pressure and a low sodium. Everyone is thinking "gallbladder". You are going to follow her case slide by slide, and find out what is really going on.</div>
<p>This whole module is <b>one patient</b>. Each step reveals the next part of her story: you decide, get feedback, collect XP.</p>`,
goals:[
"Spot the history clues that point to adrenal insufficiency",
"Link each examination finding to its hormone cause and build a presumptive diagnosis",
"Explain every abnormal routine lab value in adrenal insufficiency",
"Climb the diagnostic ladder and tell primary from secondary insufficiency",
"Put the final diagnosis together and classify autoimmune polyglandular syndromes",
"Treat an adrenal crisis safely, before the diagnosis is confirmed",
"Plan chronic replacement, sick-day rules and monitoring"],
cards:[
{id:"a1",title:"Meet M.T.: what is suspicious?",min:3,goal:0,obj:["Read a case file like a detective: separate red flags from background noise","Recognise that adrenal insufficiency can look like a stomach or gallbladder problem","Notice the autoimmune clue hidden in the history"],html:`
<div class="scene"><b>The scene:</b> Emergency department. M.T., 53, female. She has pain under the right ribs (right hypochondrium), nausea and vomiting, and has felt exhausted for weeks. Blood pressure is low and her sodium is 130 mmol/L. She takes <b>no medication</b>.</div>
<table><tr><th>Case file (slides 2–3)</th><th></th></tr>
<tr><td>Reasons for admission</td><td>Right hypochondrium pain, nausea, vomiting, fatigue, low blood pressure, [[hyponat]] (sodium 130 mmol/L, emergency department)</td></tr>
<tr><td>Past history</td><td>At 45: hiatal hernia, fatty liver disease. Toxic hepatitis. Gallstones (cholelithiasis)</td></tr>
<tr><td>Gynaecology</td><td>First period at 14, <b>menopause at 38</b>, no births</td></tr>
<tr><td>Medication</td><td>None</td></tr></table>
<p>👉 <b>Click each clue</b> to decide why it matters:</p>
<div data-widget="clues"></div>
<p><b>The big lesson:</b> [[crisis|Adrenal insufficiency]] is a great <b>mimic</b>. Nausea, vomiting and abdominal pain are common in adrenal insufficiency, so a patient can end up on a surgical ward. Low blood pressure plus low sodium in someone who is vomiting should always make you ask: <i>"Could this be the adrenals?"</i></p>
<div class="hint">💡 <b>"Vomiting + low pressure + low sodium = think adrenal before you blame the gallbladder."</b> And: menopause before 40 = premature. Ask yourself: <i>"What else could be autoimmune here?"</i></div>`,
recap:["Abdominal pain, nausea, vomiting, fatigue, low blood pressure and low sodium together suggest adrenal insufficiency.","Menopause at 38 = primary ovarian insufficiency, a possible autoimmune clue.","'No medication' matters: it makes steroid withdrawal (secondary insufficiency) unlikely."],
quiz:[{q:"Which detail in M.T.'s history best hints that more than one gland may be under immune attack?",o:["Hiatal hernia at 45","Menopause at 38","Gallstones"],a:1,e:"Menopause before 40 is premature (primary ovarian insufficiency). Ovarian failure can be autoimmune and is associated with autoimmune adrenal disease."},
{q:"Why is 'no medication' an important negative?",o:["It excludes stopping long-term steroid tablets, the most common cause of secondary adrenal insufficiency","It proves she is healthy","It rules out gallstones"],a:0,e:"Steroid tablets suppress the hypothalamic–pituitary–adrenal axis. If someone stops them, secondary insufficiency follows. No steroid use makes that cause unlikely."}]},

{id:"a2",title:"Examination and presumptive diagnosis",min:4,goal:1,obj:["Explain why the skin darkens in primary adrenal insufficiency","Link low blood pressure and loss of body hair to the missing hormones","Write a problem list (presumptive diagnosis) like the slide"],html:`
<div class="scene"><b>The scene:</b> You examine M.T. Her skin is dry and darker than you expected. Her armpits are hairless. Her eyes are slightly yellow. Blood pressure 90/60 mmHg, pulse 80 per minute.</div>
<table><tr><th>Finding (slides 4–5)</th><th>What it tells you</th></tr>
<tr><td>[[hyperpig|Hyperpigmentation]], dry skin</td><td>Low cortisol → no feedback → the pituitary makes huge amounts of [[acth]] from [[pomc]], which also stimulates melanocytes. <b>Dark skin = primary.</b></td></tr>
<tr><td>Blood pressure 90/60 mmHg</td><td>Cortisol keeps blood vessels responsive to adrenaline and noradrenaline; [[aldo|aldosterone]] keeps salt and water in. Both are missing.</td></tr>
<tr><td>Loss of axillary and pubic hair</td><td>In women, body hair depends on adrenal androgens ([[dhea]]). Adrenal failure removes them (and her ovaries have also stopped).</td></tr>
<tr><td>[[goitre|Goitre grade Ib]], elastic, painless</td><td>Thyroid clue → think [[thyroiditis]]. Is she hypothyroid?</td></tr>
<tr><td>Yellow sclerae, right hypochondrium pain</td><td>Bile problem ([[cholestasis]]?) with known gallstones.</td></tr>
<tr><td>Negative Giordano sign</td><td>No pain when the kidney area is tapped → kidney infection or stone less likely.</td></tr>
<tr><td>Body mass index 26 kg/m²</td><td>Slightly overweight: adrenal insufficiency does not always make people thin.</td></tr>
<tr><td>Pituitary: no headache, no visual field problems</td><td>No sign of a pituitary tumour, so a pituitary (secondary) cause is less likely.</td></tr></table>
${FIG("hyper","M.T. shows the same pattern: darker skin than expected for her.")}
<h3>Presumptive diagnosis (slide 7)</h3>
<p>• Early menopause &nbsp;• <b>Adrenal insufficiency suspected</b> &nbsp;• Goitre grade Ib: hypothyroidism? &nbsp;• Gallstones? &nbsp;• Cholestatic syndrome?</p>
<div class="hint">💡 <b>"Primary = Pigmented, Potassium high."</b> Both come from the adrenal itself failing: high adrenocorticotropic hormone darkens the skin; missing aldosterone raises potassium. <br>Fun fact: the man in the photo on slide 24 is United States president John F. Kennedy, who had Addison disease. His year-round "tan" is often linked to it.</div>`,
recap:["Dark skin = high adrenocorticotropic hormone from proopiomelanocortin = primary insufficiency.","Low blood pressure: no cortisol (vessel tone) and no aldosterone (volume).","Loss of axillary and pubic hair in women = loss of adrenal androgens."],
quiz:[{q:"Which examination finding best separates primary from secondary adrenal insufficiency?",o:["Fatigue","Hyperpigmentation","Low blood pressure"],a:1,e:"Only primary insufficiency has very high adrenocorticotropic hormone, which darkens the skin. Fatigue and low blood pressure occur in both."},
{q:"Why has M.T. lost her axillary and pubic hair?",o:["Lack of adrenal androgens such as dehydroepiandrosterone","Lack of aldosterone","Too much cortisol"],a:0,e:"In women, adrenal androgens drive axillary and pubic hair. Adrenal failure (in both primary and secondary insufficiency) removes them."}]},

{id:"a3",title:"Routine labs: read the blood like a story",min:4,goal:2,obj:["Explain low sodium, high potassium and low glucose in adrenal insufficiency","Use serum osmolality to confirm true hyponatraemia","Separate adrenal findings from the second problem (the bile ducts)"],html:`
<div class="scene"><b>The scene:</b> The first blood results arrive. The registrar circles four values in red and says: "Explain each one and you have the diagnosis."</div>
<p>👉 <b>Click any value</b> (red = high, blue = low) to see why it happens. Explain every abnormal value for a bonus.</p>
<div data-widget="labs"></div>
<p><b>The adrenal pattern (slide 13):</b> [[hyponat]], [[hyperkal]], sometimes high calcium, raised urea from dehydration, anaemia and [[eos]]. Plus [[hypogly]]. M.T. has the core four: <b>low sodium, high potassium, low glucose, low [[osm|osmolality]]</b>.</p>
<p><b>Why sodium falls twice over:</b> no aldosterone → salt is lost in the urine; no cortisol → the brake on [[adh]] is released → water is kept and sodium is diluted.</p>
<div class="hint">💡 <b>"Salt goes, potassium stays, sugar drops."</b> No aldosterone → sodium is lost and potassium is kept. No cortisol → glucose falls.</div>
<div class="corr">📝 <b>Slide check (slides 9 and 13):</b><br>• Albumin is written as "40, range 38–54 <b>mg/dl</b>". That must be <b>g/L</b> (40 g/L = 4.0 g/dl). 40 mg/dl would be incompatible with life.<br>• Creatine kinase has the same reference range as lactate dehydrogenase (125–220 U/L), probably copied by mistake. Low values of both have no clinical meaning here.<br>• Slide 13 lists raised urea (azotaemia), high calcium and eosinophilia as typical. M.T. actually has <b>low</b> urea and <b>normal</b> calcium, and no white cell differential is given, so we cannot judge eosinophils. Textbook lists are possibilities, not guarantees.</div>`,
recap:["Low sodium: aldosterone loss (salt wasting) plus antidiuretic hormone excess from cortisol lack.","High potassium: no aldosterone, so it points to primary insufficiency.","Low glucose: no cortisol for gluconeogenesis. Raised bilirubin and gamma-glutamyl transferase = cholestasis, a separate problem."],
quiz:[{q:"Which electrolyte finding points specifically to PRIMARY rather than secondary insufficiency?",o:["Low sodium","High potassium","Low glucose"],a:1,e:"Potassium rises only when aldosterone is missing, and aldosterone is lost only when the adrenal itself fails. Low sodium and low glucose can occur in secondary insufficiency too."},
{q:"Why can sodium be low even in SECONDARY insufficiency, where aldosterone is normal?",o:["Cortisol lack increases antidiuretic hormone → water retention dilutes sodium","Renin is very high","The kidney loses potassium"],a:0,e:"Cortisol normally restrains antidiuretic hormone (vasopressin). Without cortisol the body keeps water, so sodium is diluted."}]},

{id:"a4",title:"The diagnostic ladder: confirm it and find the level",min:5,goal:3,obj:["Interpret a morning cortisol using the slide thresholds","Choose and read the short and long stimulation tests","Know when the insulin tolerance test is the gold standard, and when it is not needed or dangerous","Tell primary from secondary using adrenocorticotropic hormone, renin and aldosterone"],html:`
<div class="scene"><b>The scene:</b> You suspect adrenal insufficiency. The consultant asks two questions: <b>"Is the cortisol really too low?"</b> and <b>"Where is the chain broken: adrenal, pituitary or hypothalamus?"</b></div>
<p>Remember the [[hpa]]: [[crh]] → adrenocorticotropic hormone → cortisol. Click the levels to see what happens to each hormone:</p>
<div data-widget="hpa"></div>
<h3>🪜 Climb the ladder (click each rung)</h3>
<p>Tools on the ladder: [[basalcort]], [[renin]], [[sst]] with [[synacthen]], [[lst]], [[itt]], [[ab21]] and [[ct]].</p>
<div data-widget="ladder"></div>
<h3>Primary versus secondary at a glance (slide 24, extended)</h3>
<table><tr><th></th><th>[[pai|Primary]] (adrenal)</th><th>[[sai|Secondary]] (pituitary)</th></tr>
<tr><td>Skin and mucosa</td><td><b>Dark</b></td><td>Pale</td></tr>
<tr><td>Potassium</td><td><b>High</b></td><td>Normal</td></tr>
<tr><td>Sodium</td><td>Low</td><td>Normal or low</td></tr>
<tr><td>Adrenocorticotropic hormone</td><td><b>Very high</b></td><td>Low or inappropriately normal</td></tr>
<tr><td>Renin / aldosterone</td><td>Renin high, aldosterone low</td><td>Normal (intact renin–angiotensin–aldosterone system)</td></tr>
<tr><td>Associated diseases</td><td>Primary hypothyroidism, type 1 diabetes, vitiligo, neurological deficit (adrenoleukodystrophy, males only)</td><td>Low sex hormones or low thyroid from the pituitary, growth hormone deficiency, diabetes insipidus, headaches, visual field problems</td></tr></table>
<p>The third level, [[tai]], behaves like secondary at the bedside.</p>
<div class="hint">💡 <b>"Low cortisol? Ask the boss."</b> If adrenocorticotropic hormone (the boss) is shouting (very high), the worker (adrenal) is broken = primary. If the boss is silent (low), the boss is the problem = secondary.</div>
<div class="corr">📝 <b>Slide check:</b><br>• <b>Slide 16, "Cortrosyn 250/5/1 µg":</b> ambiguous. The standard tests are the <b>250 µg</b> (high-dose, standard) and the <b>1 µg</b> (low-dose) test. A 5 µg dose is not a standard test.<br>• <b>Normal response "above 18–20 µg/dl"</b> (about 500–550 nmol/L) is the classic cut-off. Newer, more specific cortisol assays use lower cut-offs, so always use your laboratory's value.<br>• <b>Slide 21, insulin tolerance test "gold standard":</b> true for testing the <i>whole</i> axis (especially suspected pituitary or hypothalamic disease). For suspected primary insufficiency the short stimulation test is the recommended first-line test (Endocrine Society guideline, 2016). For M.T. the insulin test would be <b>dangerous</b>: she is already hypoglycaemic (59 mg/dl) and hypotensive.<br>• <b>Slide 12:</b> 14 µg/dl × 27.59 = 386 nmol/L. The slide rounds this to 400 nmol/L, so treat both as approximate.<br>• Conversion used in this module: cortisol µg/dl × 27.59 = nmol/L.</div>`,
recap:["Morning cortisol: below 3 µg/dl = insufficiency very likely, above 14 µg/dl = intact. M.T.: 4.8 µg/dl (about 132 nmol/L), grey zone → test.","Short stimulation test (250 µg): M.T. peaked at 7.2 µg/dl (normal above 18–20) = adrenal insufficiency confirmed.","Adrenocorticotropic hormone 701.9 pg/ml (about 11 times the upper limit) = PRIMARY. Insulin test = whole-axis gold standard, but not needed or not safe here."],
quiz:[{q:"M.T.'s 8 a.m. cortisol is 4.8 µg/dl (about 132 nmol/L). Using the slides, what next?",o:["Nothing: adrenal insufficiency is excluded","Do a stimulation test: the value is between 3 and 14 µg/dl","Insulin tolerance test immediately"],a:1,e:"Above 14 µg/dl excludes insufficiency and below 3 µg/dl makes it very likely. 4.8 µg/dl is in between and very suspicious, so do a stimulation test. The insulin test is unsafe in a hypoglycaemic, hypotensive patient."},
{q:"After 250 µg tetracosactide her cortisol is 7.2 µg/dl at 30 minutes and 6.4 µg/dl at 60 minutes; adrenocorticotropic hormone is 701.9 pg/ml. Diagnosis?",o:["Secondary adrenal insufficiency","Primary adrenal insufficiency","Normal adrenal function"],a:1,e:"No cortisol rise (normal above 18–20 µg/dl) = adrenal insufficiency. Very high adrenocorticotropic hormone = the pituitary is shouting at a broken adrenal = primary."}]}
]};
