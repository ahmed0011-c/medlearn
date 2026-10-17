/* ===== Adrenal disorders 2.6: Phaeochromocytoma and paraganglioma ===== */
Object.assign(GLOSSARY,{
pheo:{l:"phaeochromocytoma",c:"disease",d:"A tumour of the chromaffin cells of the adrenal medulla that makes adrenaline and/or noradrenaline.",w:"Classic cause of attacks of headache, sweating and palpitations; dangerous if missed before surgery or anaesthesia."},
ppgl:{l:"phaeochromocytoma and paraganglioma",c:"disease",d:"The family of chromaffin-cell tumours inside (phaeochromocytoma) and outside (paraganglioma) the adrenal.",w:"Managed together in guidelines."},
phenoxy:{l:"phenoxybenzamine",c:"drug",d:"Long-acting, non-selective alpha-blocker used before surgery for phaeochromocytoma.",w:"Causes stuffy nose, postural dizziness and fast heart rate."},
doxazosin:{l:"doxazosin",c:"drug",d:"Selective alpha-1 blocker, an alternative to phenoxybenzamine.",w:"Shorter-acting; less post-operative low blood pressure in some studies."},
unopposed:{l:"unopposed alpha stimulation",c:"concept",d:"If beta receptors are blocked first, adrenaline acts only on alpha receptors: vessels clamp down without beta-2 widening.",w:"Can trigger a hypertensive crisis: never give a beta-blocker before an alpha-blocker."},
clonst:{l:"clonidine suppression test",c:"test",d:"Clonidine lowers normal nerve noradrenaline release, but not tumour release; plasma normetanephrine is measured before and after.",w:"For borderline metanephrine results."},
dotatate:{l:"gallium-68 DOTATATE positron emission tomography",c:"test",d:"Scan with a tracer that binds somatostatin receptors on neuroendocrine tumours.",w:"Very sensitive for paraganglioma and metastases, especially in succinate dehydrogenase gene carriers."},
sdh:{l:"succinate dehydrogenase genes",c:"concept",d:"Genes of a mitochondrial enzyme (SDHB, SDHD and others); faults predispose to paragangliomas.",w:"SDHB faults carry the highest risk of metastatic disease."},
vhl:{l:"von Hippel–Lindau disease",c:"disease",d:"Inherited syndrome with tumours of the brain, retina, kidney, pancreas and phaeochromocytomas.",w:"Noradrenaline-type tumours."}
});
XPK.pheop={t:"What next before the operation?",opts:["Start an alpha-blocker","Add a beta-blocker","Liberal salt and fluids","Operate now","Genetic testing"],items:[
["Day 0: plasma normetanephrine 6 times the upper limit, 4 cm adrenal mass, blood pressure 180/110 mmHg","Start an alpha-blocker","Phenoxybenzamine or doxazosin for about 7–14 days before surgery."],
["Day 3: on alpha-blocker, now dizzy on standing","Liberal salt and fluids","Alpha-blockade expands the vascular space: refill it with salt and fluids."],
["Day 7: blood pressure controlled, but heart rate 118 per minute","Add a beta-blocker","Only now, after alpha-blockade, is a beta-blocker safe."],
["Day 14: blood pressure about 130/80 mmHg sitting, mild postural drop, heart rate 70","Operate now","Targets met; laparoscopic adrenalectomy."],
["After the diagnosis, whatever his age","Genetic testing","A large share of these tumours are inherited: offer germline testing to everyone."]]};
XO.pheo={t:"Put the pre-operative steps in order",items:["Prove it: plasma free or urinary metanephrines","Find it: computed tomography or magnetic resonance imaging","Alpha-blocker for about 7–14 days, plus salt and fluids","Beta-blocker only if the heart is still fast","Laparoscopic adrenalectomy","Check metanephrines after surgery and follow up for years"]};
XS.pheo=["Spot the error",[["Plasma free metanephrines are the best screening test.",1],["Give a beta-blocker first to control the racing heart.",0,"Wrong: <b>alpha first</b>. Beta-blockade alone leaves unopposed alpha stimulation and can cause a hypertensive crisis."],["About 1 in 3 tumours is caused by an inherited gene fault.",1],["Metoclopramide and high-dose glucocorticoids can trigger an attack.",1]]];
XT.pheo="pheo,pgl,ppgl,chromaffin,mets,clonst,phenoxy,doxazosin,unopposed,dotatate,sdh,vhl";
const D6={
meta:"Endocrinology › Adrenal disorders › 2.6 · theory module · ⏱ about 25 minutes in 4 bite-sized steps",
intro:`<p>A rare tumour with dramatic attacks, and a killer if a surgeon or anaesthetist meets it unprepared. This module covers who to test, how to prove it, how to prepare safely for surgery and why every patient needs genetic counselling.</p>`,
goals:["Describe the tumour and its symptoms","Pick the right tests and avoid pitfalls","Plan safe pre-operative preparation","Know the genetics and follow-up"],
cards:[
{id:"ph1",title:"The tumour and its attacks",min:6,goal:0,obj:["Define phaeochromocytoma and paraganglioma","List the classic symptoms and triggers"],html:`
<div class="scene"><b>The scene:</b> A 38-year-old man has attacks of pounding headache, drenching sweat and a racing heart lasting 15 minutes. During one attack his blood pressure was 220/120 mmHg.</div>
<p>[[pheo]] comes from [[chromaffin]] cells in the medulla; [[pgl]] arises outside the adrenal. Together: [[ppgl]].</p>
<p><b>Classic triad:</b> headache, sweating, palpitations, usually in attacks. Blood pressure can be high all the time, in bursts or normal. Others: pallor, tremor, anxiety, weight loss, high blood sugar, heart muscle damage. Many tumours are now found by chance on scans.</p>
<p><b>Triggers:</b> pressure on the abdomen, anaesthesia and surgery, some drugs (metoclopramide, beta-blockers alone, glucagon, high-dose glucocorticoids, some antidepressants, opioids), contrast, pregnancy and labour.</p>
<div class="corr">📝 <b>Fact check:</b> the old "rule of 10s" (10% bilateral, 10% malignant, 10% familial, 10% extra-adrenal…) is outdated. About 30–40% carry a germline gene fault, and every tumour is now considered to have some metastatic potential.</div>
<div class="hint">💡 <b>"Pounding, perspiration, palpitations, pale."</b></div>
<details class="chk"><summary>✋ Checkpoint: why can a beta-blocker alone trigger a crisis?</summary><p>[[unopposed]]: vessels constrict without beta-2 widening.</p></details>`,
recap:["Chromaffin-cell tumour; adrenal = phaeochromocytoma, outside = paraganglioma.","Triad: headache, sweating, palpitations.","Rule of 10s is outdated: about a third are inherited."],
quiz:[{q:"Which symptom is NOT part of the classic triad?",o:["Headache","Sweating","Diarrhoea"],a:2,e:"Headache, sweating, palpitations."},{q:"What share of these tumours is inherited?",o:["About 10%","About 30–40%","Almost none"],a:1,e:"The rule of 10s is outdated."}]},
{id:"ph2",title:"Proving it: metanephrines",min:6,goal:1,obj:["Choose and interpret the tests","Avoid sampling and drug pitfalls"],html:`
<div class="scene"><b>The scene:</b> His plasma free normetanephrine is 4 times the upper limit of normal.</div>
<p><b>Test:</b> plasma free [[mets]] (ideally after 20–30 minutes lying down) or 24-hour urinary fractionated metanephrines (Endocrine Society 2014).</p>
<ul><li>More than about 3–4 times the upper limit: tumour very likely.</li><li>Mildly raised: repeat properly, stop interfering drugs (tricyclic antidepressants, some antipsychotics, levodopa, sympathomimetics), consider the [[clonst]].</li></ul>
<p><b>Then image:</b> computed tomography or magnetic resonance imaging of the abdomen (most are in the adrenal). Tumours are usually bright on magnetic resonance and have high density (above 10 Hounsfield units) on unenhanced computed tomography. [[dotatate]] or other functional imaging for paraganglioma, metastases or inherited cases.</p>
<p><b>Pattern:</b> adrenaline-type (metanephrine) tumours are usually adrenal; noradrenaline-type (normetanephrine) can be anywhere; methoxytyramine (dopamine) suggests metastatic or <b>SDHx</b> disease.</p>
<div class="hint">💡 <b>"Metanephrines leak all the time; adrenaline only in bursts."</b></div>
<details class="chk"><summary>✋ Checkpoint: why should the sample be taken lying down?</summary><p>Standing activates nerves, raising normetanephrine and causing false positives.</p></details>`,
recap:["Plasma free or urinary metanephrines.","Very high (3–4 times) → very likely; borderline → repeat, review drugs, clonidine test.","Imaging after biochemistry."],
quiz:[{q:"Best screening test?",o:["Plasma free metanephrines","Random adrenaline","Computed tomography"],a:0,e:"Highest sensitivity."},{q:"Which drug class commonly causes false positives?",o:["Tricyclic antidepressants","Statins","Proton pump inhibitors"],a:0,e:"They block noradrenaline reuptake."}]},
{id:"ph3",title:"Safe surgery: alpha first",min:7,goal:2,obj:["Order the pre-operative steps","Know post-operative risks"],html:`
<div class="scene"><b>The scene:</b> He is booked for surgery in 2 weeks. What happens in those 2 weeks decides whether the operation is safe.</div>
<div data-widget="order" data-set="pheo"></div>
<div data-widget="pickset" data-set="pheop"></div>
<ul><li><b>Alpha-blockade</b> for about 7–14 days: [[phenoxy]] or [[doxazosin]] (or calcium channel blockers).</li><li><b>Salt and fluids</b> to refill the expanded vascular space.</li><li><b>Beta-blocker only after alpha-blockade</b>, for fast heart rate.</li><li><b>Surgery:</b> laparoscopic adrenalectomy by an experienced team, with an anaesthetist ready for blood pressure swings.</li><li><b>After:</b> low blood pressure (sudden fall of catecholamines), low blood sugar (insulin rebound), and adrenal insufficiency if both glands were operated on.</li></ul>
<div class="hint">💡 <b>"A before B: alpha before beta."</b></div>
<details class="chk"><summary>✋ Checkpoint: why can blood sugar fall after the operation?</summary><p>Catecholamines suppressed insulin; when they fall, insulin rebounds.</p></details>`,
recap:["Alpha-blocker 7–14 days, salt and fluids.","Beta-blocker only after alpha-blockade.","After surgery: watch for low blood pressure and low blood sugar."],
quiz:[{q:"Which drug comes first?",o:["Alpha-blocker","Beta-blocker","Diuretic"],a:0,e:"Alpha first."},{q:"Why salt and fluids?",o:["To refill the vascular space and prevent post-operative low blood pressure","To lower blood pressure","To protect the kidney from contrast"],a:0,e:"Chronic vasoconstriction shrinks blood volume."}]},
{id:"ph4",title:"Genetics and follow-up",min:6,goal:3,obj:["Name the main syndromes","Plan follow-up"],html:`
<div class="scene"><b>The scene:</b> His sister asks: "Could this run in our family?"</div>
<p>Offer <b>germline genetic testing to every patient</b>. Main syndromes:</p>
<ul><li><b>Multiple endocrine neoplasia type 2</b> (RET gene): medullary thyroid cancer, adrenaline-type phaeochromocytoma, parathyroid disease (2A).</li><li>[[vhl]]: noradrenaline-type tumours, kidney cancer, haemangioblastomas.</li><li><b>Neurofibromatosis type 1</b>: café-au-lait spots, neurofibromas.</li><li>[[sdh]] (especially SDHB): paragangliomas, higher metastatic risk.</li></ul>
<p><b>Follow-up:</b> metanephrines a few weeks after surgery, then yearly for at least 10 years; lifelong for inherited or high-risk disease. Relatives are tested once the gene fault is known. Metastatic disease: surgery, radionuclide therapy, chemotherapy or targeted drugs in expert centres.</p>
<div class="hint">💡 <b>"Every phaeo gets a gene test."</b></div>
<details class="chk"><summary>✋ Checkpoint: which thyroid test should be checked in a patient with RET-positive phaeochromocytoma?</summary><p>Calcitonin (medullary thyroid cancer). See the thyroid section.</p></details>`,
recap:["Test the genes in everyone.","Multiple endocrine neoplasia type 2, von Hippel–Lindau, neurofibromatosis type 1, SDHx.","Follow up for at least 10 years."],
quiz:[{q:"Which gene fault has the highest metastatic risk?",o:["SDHB","RET","NF1"],a:0,e:"SDHB."},{q:"How long should follow-up last after removing a sporadic tumour?",o:["At least 10 years","1 year","None"],a:0,e:"Recurrence can be late."}]}],
cases:[{id:"phk1",title:"Case 1: Attacks",steps:[
{t:`<b>The scene:</b> A 38-year-old man with episodic headache, sweating and palpitations. Plasma normetanephrine 4 times the upper limit; 4 cm left adrenal mass, 38 Hounsfield units.`,q:"Diagnosis?",o:["Phaeochromocytoma","Panic disorder","Hyperthyroidism"],a:0,e:"Biochemistry plus a dense adrenal mass."},
{t:`The surgeon wants to operate next week. The registrar suggests starting bisoprolol now for his fast heart.`,q:"Your advice?",o:["Start an alpha-blocker first; beta-blocker only after","Bisoprolol now","No drugs needed"],a:0,e:"Alpha before beta."}],take:["Alpha-blockade first, then surgery."]},
{id:"phk2",title:"Case 2: A family story",steps:[
{t:`<b>The scene:</b> A 26-year-old woman has bilateral phaeochromocytomas. Her father had thyroid surgery for a "lump" at 40.`,q:"Which syndrome?",o:["Multiple endocrine neoplasia type 2","Cushing disease","Primary hyperaldosteronism"],a:0,e:"Bilateral tumours plus thyroid history suggests RET."},
{t:`She also has a thyroid nodule.`,q:"What must happen before thyroid surgery?",o:["Treat the phaeochromocytoma first","Remove the thyroid first","No order"],a:0,e:"An untreated phaeochromocytoma makes any surgery dangerous."}],take:["In multiple endocrine neoplasia type 2: phaeochromocytoma first."]}],
flash:[["Phaeochromocytoma","Chromaffin tumour of the adrenal medulla."],["Paraganglioma","Same tumour outside the adrenal."],["Triad","Headache, sweating, palpitations."],["Screening test","Plasma free or urinary fractionated metanephrines."],["Sampling","Lying down for 20–30 minutes."],["Before surgery","Alpha-blocker 7–14 days, salt and fluids, then beta-blocker if needed."],["Never","Beta-blocker before alpha-blocker."],["After surgery","Low blood pressure, low blood sugar."],["Genetics","Test everyone: about 30–40% inherited."],["Follow-up","Metanephrines yearly for at least 10 years."]],
exam:["Chromaffin tumour; triad headache, sweating, palpitations.","Plasma free or urinary metanephrines; image after biochemistry.","Alpha-blockade 7–14 days with salt and fluids; beta only after alpha.","Post-operative low blood pressure and low blood sugar.","Germline testing for all; multiple endocrine neoplasia type 2, von Hippel–Lindau, neurofibromatosis type 1, SDHx; long follow-up."],
finalHtml:`<div data-widget="spot" data-set="pheo"></div><div data-widget="termdeck" data-set="pheo"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>2.7 Adrenal masses.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('d7')">→ Open 2.7</button></div>`,
sources:"Sources: Endocrine Society guideline on phaeochromocytoma and paraganglioma (Lenders et al., JCEM 2014); European Society of Hypertension consensus on pre-operative management (Lenders et al., 2020); Williams Textbook of Endocrinology. The 30–40% inherited figure is the standard textbook estimate. Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.d6=D6;
