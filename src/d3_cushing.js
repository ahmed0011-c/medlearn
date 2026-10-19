/* ===== Adrenal disorders 2.3: Cushing syndrome ===== */
Object.assign(GLOSSARY,{
striae:{l:"purple striae",c:"disease",d:"Wide (often more than 1 cm), dark purple stretch marks on the abdomen, thighs or arms.",w:"One of the features that best separate Cushing syndrome from simple obesity."},
plethora:{l:"facial plethora",c:"disease",d:"A red, full, rounded face.",w:"Typical of Cushing syndrome."},
proxmyo:{l:"proximal myopathy",c:"disease",d:"Weakness of the muscles of the hips and shoulders: difficulty getting up from a chair or climbing stairs.",w:"Cortisol breaks down muscle protein."},
acthdep:{l:"adrenocorticotropic hormone-dependent Cushing syndrome",c:"concept",d:"Cortisol excess driven by adrenocorticotropic hormone: a pituitary adenoma (Cushing disease) or an ectopic tumour.",w:"Adrenocorticotropic hormone is normal or high."},
acthind:{l:"adrenocorticotropic hormone-independent Cushing syndrome",c:"concept",d:"The adrenal makes cortisol by itself (adenoma, carcinoma, bilateral nodular disease).",w:"Adrenocorticotropic hormone is suppressed."},
tss:{l:"transsphenoidal surgery",c:"drug",d:"Operation on the pituitary through the nose and the sphenoid sinus.",w:"First-line treatment for Cushing disease."},
nelson:{l:"Nelson syndrome",c:"disease",d:"Growth of a pituitary corticotroph adenoma after both adrenals were removed, with very high adrenocorticotropic hormone and skin darkening.",w:"Risk after bilateral adrenalectomy for Cushing disease."},
pasir:{l:"pasireotide",c:"drug",d:"Somatostatin analogue that acts on the pituitary adenoma to lower adrenocorticotropic hormone.",w:"Can cause high blood sugar."},
mifep:{l:"mifepristone",c:"drug",d:"Blocks the glucocorticoid receptor.",w:"Cortisol levels rise, so they cannot be used to monitor treatment."}
});
XTREE.cush={t:"Cushing syndrome work-up",start:"a",n:{
a:{q:"Is the patient taking glucocorticoids (tablets, injections, inhalers, creams)?",o:[["Yes","=Exogenous (iatrogenic) Cushing syndrome, the most common cause. Reduce the dose slowly if possible (2.9); do not stop suddenly."],["No","b"]]},
b:{q:"Screening (one or two): 1 mg overnight dexamethasone suppression test, late-night salivary cortisol ×2, 24-hour urinary free cortisol ×2. Result?",o:[["Normal","=Cushing syndrome unlikely. Re-test only if features progress."],["Abnormal","c"]]},
c:{q:"Rule out pseudo-Cushing states (alcohol, depression, severe obesity). Confirmed with a second test? Then measure adrenocorticotropic hormone (morning).",o:[["Low / suppressed","=<b>Adrenocorticotropic hormone-independent</b>: image the adrenals (computed tomography). Adenoma, carcinoma or bilateral nodular disease."],["Normal or high","d"]]},
d:{q:"<b>Adrenocorticotropic hormone-dependent.</b> Pituitary magnetic resonance imaging. What does it show?",o:[["Clear adenoma (about 10 mm or more) with concordant tests","=Likely <b>Cushing disease</b>: refer for transsphenoidal surgery (some centres still confirm with sampling)."],["Small or no lesion","e"]]},
e:{q:"Inferior petrosal sinus sampling with corticotropin-releasing hormone. Central-to-peripheral adrenocorticotropic hormone gradient?",o:[["Gradient present (at least 2 before, at least 3 after stimulation)","=<b>Cushing disease</b> (pituitary source)."],["No gradient","=<b>Ectopic adrenocorticotropic hormone</b>: search with computed tomography of chest and abdomen and functional imaging (for example lung carcinoid)."]]}}};
XPAT.cush={t:"Which cause fits?",cols:["Adrenocorticotropic hormone","Cortisol","Potassium"],rows:[["Cushing disease (pituitary)",["↑ or ≈","↑","≈"],"Adrenocorticotropic hormone normal or mildly raised; potassium usually normal."],["Ectopic adrenocorticotropic hormone (for example small cell lung cancer)",["↑↑","↑↑","↓"],"Very high cortisol saturates 11-beta-hydroxysteroid dehydrogenase type 2 and activates the mineralocorticoid receptor: low potassium."],["Cortisol-producing adrenal adenoma",["↓","↑","≈"],"Autonomous cortisol suppresses adrenocorticotropic hormone."],["Prednisolone tablets (exogenous)",["↓","↓","≈"],"The patient looks cushingoid, but the body's own cortisol is suppressed."]]};
XS.cush=["Spot the error",[["The most common cause of Cushing syndrome is glucocorticoid medication.",1],["Cushing disease means any cause of cortisol excess.",0,"Wrong: <b>Cushing disease</b> means a pituitary adenoma making adrenocorticotropic hormone; <b>Cushing syndrome</b> is any cortisol excess."],["Adrenocorticotropic hormone is suppressed with a cortisol-producing adrenal adenoma.",1],["After removing an adrenal adenoma, the patient may need hydrocortisone for months.",1]]];
XT.cush="cushsyn,cushdis,ectopic,adrad,pseudocush,striae,plethora,proxmyo,acthdep,acthind,dst,lnsc,ufc,ipss,tss,nelson,metyrapone,osilodrostat,pasir,mifep";
const D3={
meta:"Endocrinology › Adrenal disorders › 2.3 · theory module · ⏱ about 25 minutes in 4 bite-sized steps",
intro:`<p>Cushing syndrome is chronic exposure to too much cortisol. You already know the hormone (Lecture 7, subsections 7–9). Here you learn to spot it, prove it, find the source and treat it.</p>`,
goals:["Separate Cushing syndrome from Cushing disease and list the causes","Recognise the features that best separate it from obesity","Follow the diagnostic algorithm","Match hormone patterns to causes","Outline treatment and its after-care"],
cards:[
{id:"cu1",title:"Syndrome versus disease, and the causes",min:5,goal:0,obj:["Define Cushing syndrome and Cushing disease","Sort causes into dependent and independent"],html:`
<div class="scene"><b>The scene:</b> A 40-year-old woman with asthma has taken prednisolone courses for years. Her face is round and she bruises easily. Her friend asks: "Is that Cushing disease?" Not quite.</div>
<p>[[cushsyn]] = any chronic cortisol excess. [[cushdis]] = the pituitary cause only.</p>
<ul><li><b>Exogenous</b> (glucocorticoid medication): by far the most common.</li>
<li><b>Endogenous</b> (rare):<ul><li>[[acthdep]] (about 80%): Cushing disease (most), [[ectopic]].</li><li>[[acthind]] (about 20%): [[adrad]], adrenal carcinoma, bilateral nodular adrenal disease.</li></ul></li></ul>
<div class="hint">💡 <b>"Syndrome = the picture; disease = the pituitary."</b></div>
<details class="chk"><summary>✋ Checkpoint: what is adrenocorticotropic hormone in a cortisol-producing adenoma?</summary><p>Low (suppressed).</p></details>`,
recap:["Syndrome: any cortisol excess; disease: pituitary adenoma.","Most common cause: medication.","Endogenous: about 80% dependent, about 20% independent of adrenocorticotropic hormone."],
quiz:[{q:"The most common cause of Cushing syndrome?",o:["Pituitary adenoma","Glucocorticoid medication","Adrenal carcinoma"],a:1,e:"Exogenous steroids."},{q:"Most common endogenous cause?",o:["Cushing disease","Ectopic","Adrenal carcinoma"],a:0,e:"Pituitary adenoma."}]},
{id:"cu2",title:"Who to test: the features that discriminate",min:5,goal:1,obj:["Name the features that best separate Cushing syndrome from obesity","Know which groups to screen"],html:`
<div class="scene"><b>The scene:</b> Obesity, hypertension and diabetes are very common; Cushing syndrome is rare. Who really needs a test?</div>
<p><b>Most discriminating features</b> (Endocrine Society): easy bruising, [[plethora]], [[proxmyo]], [[striae]] (wide, purple), and in children weight gain with slowing growth.</p>
${FIG("cushfeat")}
<p><b>Common but non-specific:</b> central weight gain, round face, fat pad behind the neck, high blood pressure, diabetes, [[gio|osteoporosis]] and fractures, depression, poor sleep, irregular periods, acne, excess hair, infections, thin skin.</p>
<p><b>Test:</b> people with several progressive features; unusual features for age (osteoporosis or hypertension in a young person); children with weight gain and falling height; people with an [[incid|adrenal incidentaloma]].</p>
<div class="hint">💡 <b>"Bruises, a red face, weak thighs, wide purple stripes."</b></div>
<details class="chk"><summary>✋ Checkpoint: why are pale, thin stretch marks less useful?</summary><p>They are common after weight gain or pregnancy; wide purple striae are more specific.</p></details>`,
recap:["Discriminating: bruising, plethora, proximal weakness, wide purple striae.","Test when features are several, progressive or unusual for age.","Also test adrenal incidentalomas."],
quiz:[{q:"Which feature best separates Cushing syndrome from obesity?",o:["Weight gain","Proximal muscle weakness","Hypertension"],a:1,e:"Proximal myopathy is discriminating."},{q:"A child with Cushing syndrome typically shows…",o:["Weight gain with slowing growth","Tall stature","Weight loss"],a:0,e:"Cortisol stops growth."}]},
{id:"cu3",title:"Prove it, then find it",min:6,goal:2,obj:["Follow the algorithm","Interpret adrenocorticotropic hormone and sampling"],html:`
<div class="scene"><b>The scene:</b> A 36-year-old woman with purple striae and new diabetes. 1 mg dexamethasone at 11 p.m.; 8 a.m. cortisol is 190 nmol/L (6.9 µg/dl). Normal suppression would be below 50 nmol/L (1.8 µg/dl).</div>
<ol><li><b>Exclude medication.</b></li><li><b>Screen:</b> [[dst]] (fail if cortisol &gt;50 nmol/L), [[lnsc]], [[ufc]].</li><li><b>Confirm</b> with a second test; consider [[pseudocush]].</li><li><b>Adrenocorticotropic hormone:</b> low → adrenal imaging; normal or high → pituitary magnetic resonance imaging, then [[ipss]] if unclear.</li></ol>
<div data-widget="tree" data-set="cush"></div>
<div class="corr">📝 <b>Fact check:</b> the [[hddst]] is a classic exam test, but today it is largely replaced by imaging and inferior petrosal sinus sampling.</div>
<div class="hint">💡 <b>"Exclude tablets, prove excess, then adrenocorticotropic hormone points the way."</b></div>
<details class="chk"><summary>✋ Checkpoint: adrenocorticotropic hormone is high and the pituitary scan is normal. Next?</summary><p>Inferior petrosal sinus sampling.</p></details>`,
recap:["Exclude medication, screen, confirm.","Adrenocorticotropic hormone low → adrenal; normal or high → pituitary or ectopic.","Sampling separates pituitary from ectopic."],
quiz:[{q:"After 1 mg dexamethasone, cortisol 190 nmol/L means…",o:["Normal suppression","Failure to suppress","Adrenal insufficiency"],a:1,e:"Normal is below 50 nmol/L."},{q:"Adrenocorticotropic hormone suppressed: image…",o:["Pituitary","Adrenals","Chest"],a:1,e:"Independent cause: adrenal."}]},
{id:"cu4",title:"Patterns and treatment",min:6,goal:3,obj:["Match patterns to causes","Outline surgery, medical therapy and after-care"],html:`
<div class="scene"><b>The scene:</b> A 62-year-old smoker develops weakness, oedema, low potassium and very high cortisol within weeks. This tempo is a clue.</div>
<div data-widget="pattern" data-set="cush"></div>
<p><b>Treatment:</b></p><ul>
<li><b>Remove the source:</b> [[tss]] (Cushing disease); laparoscopic [[adx]] (adenoma); resection of the ectopic tumour.</li>
<li><b>Tablets to lower cortisol:</b> [[metyrapone]], [[osilodrostat]], [[ketoconazole]] (block synthesis); [[pasir]] (pituitary); [[mifep]] (receptor block).</li>
<li><b>Last resort:</b> bilateral adrenalectomy, with lifelong replacement and a risk of [[nelson]].</li>
<li><b>After surgery:</b> the rest of the axis is suppressed, so hydrocortisone is needed, often for months; give sick-day rules (2.9). Treat bone, blood pressure, sugar and clot risk.</li></ul>
<div class="hint">💡 <b>"Fast, severe and low potassium → think ectopic."</b></div>
<details class="chk"><summary>✋ Checkpoint: why might a patient need hydrocortisone after removing a cortisol-producing adenoma?</summary><p>The other adrenal is atrophic from suppressed adrenocorticotropic hormone.</p></details>`,
recap:["Ectopic: very high adrenocorticotropic hormone and cortisol, low potassium, rapid onset.","Remove the source first; tablets bridge or control.","Hydrocortisone after surgery until the axis recovers."],
quiz:[{q:"First-line treatment for Cushing disease?",o:["Transsphenoidal surgery","Bilateral adrenalectomy","Radiotherapy"],a:0,e:"Remove the pituitary adenoma."},{q:"Which drug blocks the glucocorticoid receptor?",o:["Metyrapone","Mifepristone","Osilodrostat"],a:1,e:"Mifepristone."}]}],
cases:[{id:"cuk1",title:"Case 1: Stripes and sugar",steps:[
{t:`<b>The scene:</b> A 36-year-old woman: wide purple striae, proximal weakness, new diabetes. No steroid medication. 1 mg dexamethasone: cortisol 190 nmol/L. Late-night saliva: raised twice.`,q:"Next test?",o:["Morning adrenocorticotropic hormone","Adrenal biopsy","Glucose tolerance test"],a:0,e:"Cushing syndrome confirmed: now find the source."},
{t:`Adrenocorticotropic hormone 14 pmol/L (normal or high). Pituitary scan: 4 mm lesion.`,q:"Next?",o:["Inferior petrosal sinus sampling","Adrenalectomy","No further tests"],a:0,e:"Small lesions are common; sampling proves the source."},
{t:`Gradient present after corticotropin-releasing hormone.`,q:"Diagnosis and treatment?",o:["Cushing disease: transsphenoidal surgery","Ectopic: lung surgery","Adrenal adenoma: adrenalectomy"],a:0,e:"Pituitary source."}],take:["Prove excess, then adrenocorticotropic hormone, then imaging and sampling."]},
{id:"cuk2",title:"Case 2: The adrenal lump",steps:[
{t:`<b>The scene:</b> A 58-year-old man with osteoporosis and hypertension has a 3 cm left adrenal adenoma. Dexamethasone test cortisol 320 nmol/L; adrenocorticotropic hormone low.`,q:"Cause?",o:["Cortisol-producing adrenal adenoma","Cushing disease","Ectopic"],a:0,e:"Independent cause with a lump."},
{t:`He has a left adrenalectomy.`,q:"What does he need afterwards?",o:["Hydrocortisone with sick-day rules until the axis recovers","Nothing","Fludrocortisone only"],a:0,e:"The right adrenal is suppressed."}],take:["After surgery for cortisol excess, expect temporary adrenal insufficiency."]}],
flash:[["Cushing syndrome","Any chronic cortisol excess."],["Cushing disease","Pituitary adrenocorticotropic hormone-secreting adenoma."],["Most common cause","Glucocorticoid medication."],["Discriminating features","Bruising, plethora, proximal weakness, wide purple striae."],["Screening tests","1 mg dexamethasone test, late-night saliva, 24-hour urinary free cortisol."],["Normal 1 mg dexamethasone result","Cortisol below 50 nmol/L (1.8 µg/dl)."],["Adrenocorticotropic hormone low →","Adrenal cause: image adrenals."],["Pituitary versus ectopic","Inferior petrosal sinus sampling."],["Ectopic clue","Rapid onset, very high cortisol, low potassium."],["After curative surgery","Hydrocortisone until the axis recovers."]],
exam:["Cushing syndrome = cortisol excess; Cushing disease = pituitary cause.","Exclude medication; screen with dexamethasone test, late-night saliva or urine; confirm.","Adrenocorticotropic hormone splits dependent from independent.","Pituitary versus ectopic: magnetic resonance imaging and inferior petrosal sinus sampling.","Treat the source; bridge with metyrapone, osilodrostat, ketoconazole; post-operative hydrocortisone."],
finalHtml:`<div data-widget="spot" data-set="cush"></div><div data-widget="termdeck" data-set="cush"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br>Now the salt zone: <b>2.4 Primary hyperaldosteronism.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('d4')">→ Open 2.4</button></div>`,
sources:"Sources: Endocrine Society guidelines (Nieman et al., 2008 diagnosis; 2015 treatment); Pituitary Society consensus on Cushing disease (Fleseriu et al., Lancet Diabetes Endocrinol 2021); Lacroix et al., Lancet 2015; Williams Textbook of Endocrinology. Percentages are standard approximations. Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.d3=D3;
