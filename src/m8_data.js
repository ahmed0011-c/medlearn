/* ===== Subsection 8: cases, flashcards, exam ===== */
Object.assign(M8,{
cases:[
{id:"q1",title:"Case 1: The test that failed because of the pill",steps:[
{t:`<b>The scene:</b> A 29-year-old woman with obesity and irregular periods is screened for Cushing syndrome. She takes a combined oestrogen pill. After 1 mg dexamethasone overnight, her cortisol is 3.5 µg/dl (97 nmol/L): "not suppressed". She has no stretch marks, bruising or muscle weakness.`,q:"What is the most likely explanation?",o:["Cushing disease","Oestrogen raised cortisol-binding globulin, so total cortisol stays higher (a false positive)","Adrenal insufficiency"],a:1,e:"Oestrogen increases cortisol-binding globulin; total cortisol measured after dexamethasone can stay above the cut-off without true cortisol excess."},
{t:`She would like to keep the pill.`,q:"What is the most sensible next test?",o:["Inferior petrosal sinus sampling","24-hour urinary free cortisol (twice) and late-night salivary cortisol","High-dose dexamethasone test"],a:1,e:"Both measure free cortisol, so they are not affected by cortisol-binding globulin. Alternatively stop the oral oestrogen pill about 6 weeks before repeating the dexamethasone test (Nieman and colleagues, 2008). Patches, gels or a progestogen-only method would barely affect cortisol-binding globulin."}],
take:["Oestrogen → more cortisol-binding globulin → false 'non-suppression'.","Urinary free cortisol and salivary cortisol avoid this problem.","Never localise (step B) before you have proven cortisol excess (step A)."]},
{id:"q2",title:"Case 2: Weak, swollen and very low potassium",steps:[
{t:`<b>The scene:</b> A 63-year-old heavy smoker has become very weak over 6 weeks. Blood pressure 170/100 mmHg, ankle swelling, glucose high, potassium 2.4 mmol/L. His skin has darkened. Cortisol is very high and does not suppress with 1 mg dexamethasone. Adrenocorticotropic hormone is very high.`,q:"Most likely source?",o:["Cortisol-secreting adrenal adenoma","Ectopic adrenocorticotropic hormone from a lung tumour","Steroid tablets"],a:1,e:"Rapid onset, very high adrenocorticotropic hormone, dark skin and severe low potassium in a smoker suggest ectopic production, for example by small cell lung cancer."},
{t:`An 8 mg dexamethasone test shows no fall in cortisol.`,q:"Why is his potassium so low?",o:["Cortisol floods 11-beta-hydroxysteroid dehydrogenase type 2 and activates the mineralocorticoid receptor","Adrenocorticotropic hormone causes vomiting","The lung tumour makes aldosterone"],a:0,e:"Extreme cortisol levels saturate the kidney's protective enzyme, so cortisol acts like aldosterone (Module 7)."}],
take:["Ectopic source: very high adrenocorticotropic hormone, rapid course, severe low potassium, often less classic body shape.","No suppression even with high-dose dexamethasone.","Next: imaging of chest and abdomen to find the tumour; urgent control of cortisol."]},
{id:"q3",title:"Case 3 (bonus): Read the axis",steps:[
{t:`<b>The scene:</b> Three patients each have a low morning cortisol. Patient A: adrenocorticotropic hormone high, potassium high. Patient B: adrenocorticotropic hormone low, a large pituitary tumour on imaging. Patient C: stopped prednisolone 30 mg after 4 months, two days ago.`,q:"Which patient has PRIMARY adrenal insufficiency?",o:["Patient A","Patient B","Patient C"],a:0,e:"Low cortisol with high adrenocorticotropic hormone (the pituitary shouting) and high potassium (aldosterone also missing) = primary."},
{t:`Patient C feels terrible and her blood pressure is low.`,q:"Which levels of her axis are suppressed?",o:["Only the adrenal","Hypothalamus and pituitary (with an atrophied adrenal cortex)","None"],a:1,e:"Long-term prednisolone switches off corticotropin-releasing hormone and adrenocorticotropic hormone; the adrenal shrinks from lack of stimulation. Aldosterone is usually preserved."}],
take:["'Look one level up' solves most axis puzzles.","Primary: adrenocorticotropic hormone high (and often high potassium).","Steroid tablets suppress the hypothalamus and pituitary: tertiary plus secondary."]}
],
flash:[["Hypothalamic nucleus that makes corticotropin-releasing hormone","Paraventricular nucleus."],
["Hormone that boosts corticotropin-releasing hormone in stress","Vasopressin (antidiuretic hormone)."],
["Precursor of adrenocorticotropic hormone","Proopiomelanocortin (also gives melanocyte-stimulating hormone and beta-endorphin)."],
["Where does cortisol feed back?","Hypothalamus and anterior pituitary (negative feedback)."],
["Cortisol low, adrenocorticotropic hormone high","Primary adrenal insufficiency."],
["Cortisol high, adrenocorticotropic hormone low","Adrenal tumour or steroid medicines."],
["Lowest cortisol of the day","Around midnight."],
["Peak cortisol","Around waking (after rising during late sleep)."],
["Master clock","Suprachiasmatic nucleus (reset by light)."],
["Cytokines that drive the axis","Interleukin-1, interleukin-6, tumour necrosis factor."],
["1 mg overnight dexamethasone test: normal result","Morning cortisol below 1.8 µg/dl (50 nmol/L)."],
["Pituitary adenoma with 8 mg dexamethasone","Usually suppresses partly (feedback kept at a higher set point)."],
["Ectopic tumour or adrenal adenoma with 8 mg dexamethasone","No suppression."],
["Causes of false-positive dexamethasone test","Oestrogen pill, enzyme inducers, missed tablet, pseudo-Cushing states, severe illness."]],
exam:[
"Paraventricular nucleus → <b>corticotropin-releasing hormone</b> (+ vasopressin) → portal vessels → corticotrophs → <b>adrenocorticotropic hormone</b> (from proopiomelanocortin) → melanocortin 2 receptor → <b>cortisol</b>.",
"Cortisol gives <b>negative feedback</b> to hypothalamus and pituitary (fast + slow). Aldosterone is outside the axis (angiotensin II, potassium).",
"Patterns: primary = cortisol ↓ adrenocorticotropic hormone ↑; secondary/tertiary = both ↓; adrenal tumour/steroid tablets = cortisol ↑ (or drug) with adrenocorticotropic hormone ↓; pituitary/ectopic = both ↑.",
"Rhythm: rises in late sleep, <b>peaks on waking</b>, <b>lowest at midnight</b>; adrenocorticotropic hormone is pulsatile.",
"Test too little at the peak (8–9 a.m. cortisol); test too much at the low (late-night salivary cortisol).",
"Stress (surgery, infection, cytokines) raises the set point; patients without an axis need stress dosing.",
"Dexamethasone tests: 1 mg overnight or 0.5 mg every 6 h for 48 h, normal cortisol &lt; 1.8 µg/dl (50 nmol/L); high dose (8 mg): pituitary suppresses partly, ectopic/adrenal do not.",
"False positives: oestrogen pill, enzyme inducers, missed dose, pseudo-Cushing states."],
finalHtml:`<div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br>What does all this cortisol actually do, and what happens when we give it as a drug? <b>Subsection 9: glucocorticoid actions, therapy and side effects.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('m9')">→ Open subsection 9</button></div>`,
sources:"Sources: Lecture 7 (Prof. Ionela Pascanu, UMCH 2026), page 26 and its figures (Barrett, Medical Physiology 2017; Crash Course Endocrinology 2015; Endotext), extended with standard endocrinology textbooks and the Endocrine Society guidelines on the diagnosis of Cushing syndrome (Nieman et al., 2008) and on primary adrenal insufficiency (Bornstein et al., 2016). The curves are schematic: no invented values. The cases are invented teaching examples. Conversion: cortisol µg/dl × 27.59 = nmol/L.",
casesHead:"🏥 Clinical cases",casesIntro:"Three short cases. Answer to reveal the next part."
});
LESSONS.m8=M8;
