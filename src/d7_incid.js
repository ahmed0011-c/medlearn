/* ===== Adrenal disorders 2.7: Adrenal masses ===== */
Object.assign(GLOSSARY,{
macs:{l:"mild autonomous cortisol secretion",c:"disease",d:"An adrenal adenoma making a little cortisol by itself: cortisol above 50 nmol/L (1.8 µg/dl) after 1 mg dexamethasone, without the typical Cushing features.",w:"Linked to high blood pressure, diabetes, bone loss and heart disease; replaces the older terms 'subclinical Cushing' and 'possible autonomous cortisol secretion'."},
acc:{l:"adrenocortical carcinoma",c:"disease",d:"Rare, aggressive cancer of the adrenal cortex.",w:"Often large, irregular and dense; may make cortisol and androgens together."},
washout:{l:"contrast washout",c:"test",d:"Computed tomography before, 1 minute after and 15 minutes after contrast: benign adenomas wash contrast out quickly.",w:"Used when the unenhanced density is above 10 Hounsfield units."},
myelolipoma:{l:"myelolipoma",c:"disease",d:"Benign adrenal tumour of fat and bone-marrow tissue.",w:"Shows clear fat (negative Hounsfield units) on computed tomography; usually left alone."},
fdg:{l:"fluorodeoxyglucose positron emission tomography",c:"test",d:"Scan that shows tissue with high sugar uptake, such as many cancers.",w:"Helps with indeterminate adrenal masses and staging."},
mitotane2:{l:"adjuvant mitotane",c:"drug",d:"Mitotane given after surgery for adrenocortical carcinoma to lower the risk of recurrence.",w:"Destroys adrenal cortex: patients need hydrocortisone replacement (often in higher doses)."}
});
XCALC.inc={t:"Incidentaloma work-up helper (European Society of Endocrinology 2023)",inp:[["sz","Size","n",[1,10,0.5,2.5,"cm"]],["hu","Unenhanced density","n",[-60,60,1,8,"Hounsfield units"]],["hom","Homogeneous and smooth","c",true],["htn","High blood pressure or low potassium","c",false],["dst","Cortisol after 1 mg dexamethasone","n",[20,500,5,40,"nmol/L"]]],
f:v=>{let a=[];
if(v.hu<=-20)a.push("🟢 Clear fat: <b>myelolipoma</b> (benign). No further imaging.");
else if(v.hu<=10&&v.hom)a.push("🟢 <b>Benign-looking adenoma</b> (10 Hounsfield units or less, homogeneous): no further imaging needed.");
else if(v.sz>=4||!v.hom)a.push("🔴 <b>Indeterminate and large or irregular</b>: discuss in a multidisciplinary meeting; surgery is often recommended. Exclude phaeochromocytoma first.");
else a.push("🟠 <b>Indeterminate</b> (above 10 Hounsfield units): further imaging (contrast washout, magnetic resonance chemical shift or fluorodeoxyglucose positron emission tomography) or repeat imaging in 6–12 months; discuss in a multidisciplinary meeting.");
a.push(v.dst<=50?"🟢 Dexamethasone test normal (50 nmol/L or less): cortisol excess excluded.":v.dst<=138?`🟠 Cortisol ${v.dst} nmol/L: <b>mild autonomous cortisol secretion</b> if no Cushing features. Check blood pressure, sugar, bones; repeat or measure adrenocorticotropic hormone and dehydroepiandrosterone sulfate.`:`🔴 Cortisol ${v.dst} nmol/L: clear autonomous cortisol secretion; look for Cushing features and complications; discuss surgery.`);
a.push(v.htn?"🟠 Hypertension or low potassium: measure the <b>aldosterone-to-renin ratio</b>.":"Aldosterone screening is only needed with high blood pressure or low potassium (2025: all hypertension).");
a.push(v.hu<=10?"🟢 With 10 Hounsfield units or less, the 2023 guideline says metanephrines are not needed.":"🟠 Above 10 Hounsfield units: measure plasma or urinary <b>metanephrines</b>.");
return a.join("<br>")},note:"Simplified from the European Society of Endocrinology/ENSAT guideline (Fassnacht et al., 2023). Learning tool, not a clinical decision aid."};
XPK.incmass={t:"What kind of mass is it?",opts:["Benign adenoma","Myelolipoma","Phaeochromocytoma","Adrenocortical carcinoma","Metastasis"],items:[
["2 cm, smooth, homogeneous, 4 Hounsfield units","Benign adenoma","Lipid-rich adenomas are low density."],
["3 cm mass with areas of −80 Hounsfield units","Myelolipoma","Macroscopic fat."],
["4 cm dense (35 Hounsfield units) mass, normetanephrine 5 times the upper limit","Phaeochromocytoma","Never biopsy before excluding it."],
["9 cm irregular mass with necrosis, high cortisol and dehydroepiandrosterone sulfate","Adrenocortical carcinoma","Large, dense, mixed hormones."],
["Bilateral new masses in a smoker with a lung tumour","Metastasis","Lung, breast, kidney, melanoma; watch for adrenal insufficiency."]]};
XS.inc=["Spot the error",[["Every incidentaloma needs a 1 mg dexamethasone test.",1],["Biopsy is the first test for any adrenal mass.",0,"Wrong: biopsy is rarely useful, only when metastasis is suspected and the result would change treatment, and <b>only after excluding phaeochromocytoma</b>."],["A homogeneous mass of 10 Hounsfield units or less needs no further imaging.",1],["Bilateral metastases can cause adrenal insufficiency.",1]]];
XT.inc="incid,hu,macs,acc,washout,myelolipoma,fdg,mets,adx,mitotane2";
const D7={
meta:"Endocrinology › Adrenal disorders › 2.7 · theory module · ⏱ about 20 minutes in 4 bite-sized steps",
intro:`<p>Modern scans find adrenal lumps all the time. Two questions decide what to do: <b>is it making hormones?</b> and <b>could it be cancer?</b></p>`,
goals:["Define an incidentaloma and know how common it is","Use computed tomography density to judge benign versus suspicious","Do the right hormone tests","Recognise carcinoma and metastases","Decide on surgery or follow-up"],
cards:[
{id:"in1",title:"Found by chance: two questions",min:5,goal:0,obj:["Define incidentaloma","Know the common types"],html:`
<div class="scene"><b>The scene:</b> A 61-year-old woman has a computed tomography scan for kidney stones. The report says: "incidental 2.4 cm left adrenal nodule."</div>
<p>[[incid]] = adrenal mass of 1 cm or more found on imaging done for another reason. Found in a few percent of abdominal scans, more often with age.</p>
<p>Most are benign non-functioning adenomas. Others: adenomas making cortisol (most often [[macs]]) or aldosterone, [[pheo]], [[myelolipoma]], cysts, haemorrhage, metastases and rare [[acc]].</p>
<p><b>Question 1:</b> is it malignant? <b>Question 2:</b> is it functioning?</p>
<div data-widget="pickset" data-set="incmass"></div>
<div class="hint">💡 <b>"Two Qs: cancer? hormones?"</b></div>
<details class="chk"><summary>✋ Checkpoint: which hormone excess is the most common in incidentalomas?</summary><p>Mild autonomous cortisol secretion.</p></details>`,
recap:["Incidentaloma: 1 cm or more, found by chance.","Most are benign non-functioning adenomas.","Two questions: malignant? functioning?"],
quiz:[{q:"Most incidentalomas are…",o:["Benign non-functioning adenomas","Carcinomas","Phaeochromocytomas"],a:0,e:"Most common type."},{q:"Minimum size to call it an incidentaloma?",o:["1 cm","4 cm","0.1 cm"],a:0,e:"1 cm or more."}]},
{id:"in2",title:"Is it cancer? Read the density",min:5,goal:1,obj:["Interpret Hounsfield units","Know features of malignancy"],html:`
<div class="scene"><b>The scene:</b> The radiologist adds: "unenhanced density 6 Hounsfield units, homogeneous."</div>
<ul><li>Adenomas are full of lipid, so they are <b>low density</b>: [[hu]] of <b>10 or less</b> on unenhanced computed tomography means benign, and no more imaging is needed (European Society of Endocrinology 2023).</li>
<li><b>Above 10:</b> indeterminate. Options: [[washout]], magnetic resonance chemical shift imaging, [[fdg]], repeat scan in 6–12 months, or surgery.</li>
<li><b>Suspicious:</b> large (especially 4 cm or more), irregular, heterogeneous, necrotic, growing, calcified, invasion.</li></ul>
<div class="hint">💡 <b>"Ten or less, no stress."</b></div>
<details class="chk"><summary>✋ Checkpoint: a 3 cm mass with 25 Hounsfield units. Benign?</summary><p>Not proven: indeterminate. Needs metanephrines and further imaging or discussion.</p></details>`,
recap:["10 Hounsfield units or less: benign.","Above 10: indeterminate, more imaging.","Large, irregular, growing: suspicious."],
quiz:[{q:"An unenhanced density of 5 Hounsfield units suggests…",o:["Benign lipid-rich adenoma","Carcinoma","Phaeochromocytoma"],a:0,e:"Low density."},{q:"Which feature suggests malignancy?",o:["Irregular and growing","Homogeneous","Low density"],a:0,e:"Suspicious features."}]},
{id:"in3",title:"Is it working? The hormone tests",min:5,goal:2,obj:["Order the right tests","Interpret the dexamethasone test"],html:`
<div class="scene"><b>The scene:</b> The woman has mild hypertension and type 2 diabetes. What tests?</div>
<ul><li><b>Everyone:</b> 1 mg overnight [[dst]]. 50 nmol/L or less: normal. Above 50 nmol/L without Cushing features: [[macs]].</li>
<li><b>High blood pressure or low potassium:</b> [[arr]].</li>
<li><b>Density above 10 Hounsfield units:</b> [[mets]].</li>
<li><b>Suspected carcinoma:</b> steroid profile and sex steroids (dehydroepiandrosterone sulfate, androstenedione, testosterone, 17-hydroxyprogesterone).</li>
<li><b>Bilateral masses:</b> also 17-hydroxyprogesterone (congenital adrenal hyperplasia) and consider adrenal insufficiency.</li></ul>
<div data-widget="calc" data-set="inc"></div>
<div class="hint">💡 <b>"Dexamethasone for all, aldosterone if pressure, metanephrines if dense."</b></div>
<details class="chk"><summary>✋ Checkpoint: cortisol after dexamethasone is 90 nmol/L, no Cushing features. Name?</summary><p>Mild autonomous cortisol secretion.</p></details>`,
recap:["1 mg dexamethasone test for all.","Aldosterone-to-renin ratio if hypertension or low potassium.","Metanephrines if above 10 Hounsfield units."],
quiz:[{q:"Which test is done in every incidentaloma?",o:["1 mg dexamethasone suppression test","Biopsy","Aldosterone-to-renin ratio"],a:0,e:"For all."},{q:"Metanephrines are not needed if density is…",o:["10 Hounsfield units or less","Above 20","Any value"],a:0,e:"ESE 2023."}]},
{id:"in4",title:"Carcinoma, metastases and what to do",min:5,goal:3,obj:["Recognise adrenocortical carcinoma and metastases","Decide on surgery or follow-up"],html:`
<div class="scene"><b>The scene:</b> A 45-year-old woman has rapid weight gain, acne, deep voice and a 10 cm adrenal mass.</div>
<p><b>[[acc]]:</b> rare (roughly 1–2 per million per year), often large and making several hormones at once (cortisol and androgens). Treatment: complete open surgery by an expert team, often [[mitotane2]]. Prognosis depends on stage.</p>
<p><b>Metastases:</b> lung, breast, kidney, melanoma, bowel. Bilateral metastases can cause adrenal insufficiency.</p>
<p><b>Decisions:</b></p><ul><li>Hormone-active (overt) or suspicious → surgery ([[adx]]).</li><li>Mild autonomous cortisol secretion → treat blood pressure, diabetes and bones; surgery individually.</li><li>Benign and non-functioning → no follow-up needed.</li></ul>
<div class="hint">💡 <b>"Large plus mixed hormones = think carcinoma."</b></div>
<details class="chk"><summary>✋ Checkpoint: why exclude phaeochromocytoma before any biopsy or surgery?</summary><p>Manipulation can release catecholamines and cause a hypertensive crisis.</p></details>`,
recap:["Carcinoma: large, dense, mixed hormones; expert surgery and mitotane.","Metastases: lung, breast, kidney, melanoma.","Benign non-functioning: no follow-up."],
quiz:[{q:"Benign non-functioning adenoma of 2 cm, 5 Hounsfield units: follow-up?",o:["None needed","Scan every year for life","Surgery"],a:0,e:"ESE 2023."},{q:"Which drug is used after surgery for carcinoma?",o:["Mitotane","Spironolactone","Fludrocortisone"],a:0,e:"Adjuvant mitotane."}]}],
cases:[{id:"ink1",title:"Case 1: The kidney stone scan",steps:[
{t:`<b>The scene:</b> A 61-year-old woman, 2.4 cm homogeneous left adrenal nodule, 6 Hounsfield units. Hypertension and type 2 diabetes.`,q:"Malignant?",o:["Benign-looking: no more imaging","Suspicious: surgery","Biopsy"],a:0,e:"10 or less, homogeneous."},
{t:`Dexamethasone test cortisol 95 nmol/L. No Cushing features. Aldosterone-to-renin ratio normal.`,q:"Diagnosis?",o:["Mild autonomous cortisol secretion","Cushing disease","Primary hyperaldosteronism"],a:0,e:"Above 50 without features."},
{t:`The team meets to plan her care.`,q:"Management?",o:["Treat blood pressure, diabetes and bones; consider surgery individually","Emergency surgery","No action"],a:0,e:"Individual decision."}],take:["Benign scan, but check the hormones."]},
{id:"ink2",title:"Case 2: The rapid virilisation",steps:[
{t:`<b>The scene:</b> A 45-year-old woman: deep voice, acne, hirsutism and new diabetes over 4 months. 10 cm irregular right adrenal mass, 40 Hounsfield units.`,q:"Most likely?",o:["Adrenocortical carcinoma","Benign adenoma","Myelolipoma"],a:0,e:"Large, dense, rapid mixed hormone excess."},
{t:`Metanephrines are normal.`,q:"Next?",o:["Staging and open surgery in an expert centre","Biopsy","Observation"],a:0,e:"Biopsy is not indicated when surgery is planned."}],take:["Large, dense and hormonal: carcinoma until proven otherwise."]}],
flash:[["Incidentaloma","Adrenal mass of 1 cm or more found by chance."],["Two questions","Malignant? Functioning?"],["Benign density","10 Hounsfield units or less on unenhanced computed tomography."],["Test for all","1 mg dexamethasone suppression test."],["Normal dexamethasone result","Cortisol 50 nmol/L or less."],["Mild autonomous cortisol secretion","Above 50 nmol/L without Cushing features."],["Aldosterone-to-renin ratio when?","Hypertension or low potassium."],["Metanephrines when?","Density above 10 Hounsfield units."],["Never biopsy before…","Excluding phaeochromocytoma."],["Carcinoma clue","Large, irregular, dense, mixed hormones."]],
exam:["Incidentaloma: 1 cm or more, found by chance; mostly benign.","10 Hounsfield units or less, homogeneous: benign, no follow-up imaging.","1 mg dexamethasone test for all; aldosterone if hypertension; metanephrines if dense.","Mild autonomous cortisol secretion: above 50 nmol/L without features.","Carcinoma: large, dense, mixed hormones; biopsy rarely, never before excluding phaeochromocytoma."],
finalHtml:`<div data-widget="spot" data-set="inc"></div><div data-widget="termdeck" data-set="inc"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>2.8 Autoimmune polyglandular syndromes.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('d8')">→ Open 2.8</button></div>`,
sources:"Sources: European Society of Endocrinology/European Network for the Study of Adrenal Tumours guideline on adrenal incidentaloma (Fassnacht et al., Eur J Endocrinol 2023) and on adrenocortical carcinoma (2018); Williams Textbook of Endocrinology. Carcinoma incidence is the commonly quoted estimate. Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.d7=D7;
