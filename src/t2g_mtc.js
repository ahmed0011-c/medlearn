/* ===== Thyroid · Lecture 6 part 2 · 7: Anaplastic and medullary cancer, multiple endocrine neoplasia type 2 (lecture pages 63–71) ===== */
Object.assign(GLOSSARY,{
castim:{l:"calcium stimulation test",c:"test",d:"Intravenous calcium given and calcitonin measured; C-cell disease gives an exaggerated rise.",w:"Has replaced the pentagastrin test (pentagastrin is no longer available in most countries)."},
mucneur:{l:"mucosal neuromas",c:"disease",d:"Small nerve-tissue bumps on the lips, tongue and eyelids.",w:"Typical of multiple endocrine neoplasia type 2B."},
marfanoid:{l:"marfanoid habitus",c:"concept",d:"Tall, thin body with long limbs (without the other features of Marfan syndrome).",w:"Seen in multiple endocrine neoplasia type 2B."},
proph:{l:"prophylactic thyroidectomy",c:"drug",d:"Removing the thyroid in a RET carrier before medullary cancer develops or spreads.",w:"Timing depends on the RET variant risk level."},
selp:{l:"selpercatinib",c:"drug",d:"Selective RET kinase inhibitor tablet.",w:"For advanced RET-altered medullary and other thyroid cancers."},
dabtra:{l:"dabrafenib with trametinib",c:"drug",d:"BRAF plus MEK inhibitor combination.",w:"For BRAF V600E-positive anaplastic thyroid cancer; can shrink tumours dramatically."}
});
XSORT.men={t:"Type 2A, type 2B or both?",labels:["2A","2B","Both"],items:[["Medullary thyroid carcinoma",2,"Almost all carriers develop it."],["Phaeochromocytoma",2,"About half in both types."],["Primary hyperparathyroidism",0,"Only in 2A."],["Mucosal neuromas of lips and tongue",1,"Typical 2B."],["Tall, thin (marfanoid) build",1,"2B."],["RET M918T variant, cancer in infancy",1,"Highest risk; thyroidectomy in the first year of life."],["Cutaneous lichen amyloidosis or Hirschsprung disease",0,"Associated with 2A."]]};
XO.mtc={t:"Before operating on medullary thyroid carcinoma: put the steps in order",items:["Confirm: cytology plus calcitonin (and carcinoembryonic antigen)","RET germline test","Exclude phaeochromocytoma (metanephrines), check calcium","Treat a phaeochromocytoma first if present","Neck ultrasound (and staging if calcitonin is very high)","Total thyroidectomy with central neck dissection","Follow calcitonin and carcinoembryonic antigen; test relatives"]};
XS.mtc=["Spot the error",[["Medullary carcinoma is followed with calcitonin and ACE.",0,"Wrong: the second marker is <b>CEA</b> (carcinoembryonic antigen), not ACE."],["Every patient with medullary carcinoma should have a RET test.",1],["Radioactive iodine is an effective treatment for medullary carcinoma.",0,"Wrong: C cells do not trap iodine."],["Anaplastic carcinoma needs urgent assessment of the airway.",1]]];
XT.mtc="atc,mtc,calcitonin,cea,castim,ret,men2,mucneur,marfanoid,proph,pheo,selp,dabtra,braf,cnd";
const T2G={
meta:"Endocrinology › Thyroid › Lecture 6 part 2 › Subsection 6.2.7 · lecture pages 63–71 · ⏱ about 20 minutes in 3 bite-sized steps",
intro:`<p>Two rare thyroid cancers with special rules: anaplastic carcinoma (an emergency) and medullary carcinoma (a C-cell cancer with markers, genetics and a family to test).</p>`,
goals:["Recognise and triage anaplastic carcinoma","Diagnose and stage medullary carcinoma","Know multiple endocrine neoplasia type 2","Plan surgery and follow-up"],
cards:[
{id:"mt1",title:"Anaplastic carcinoma: an emergency",min:5,goal:0,obj:["Recognise it","Know the urgent steps"],html:`
<div class="scene"><b>The scene:</b> A 78-year-old woman's neck lump doubled in 3 weeks. She now has a hoarse voice and noisy breathing.</div>
<p>[[atc]]: older people, often on a background of long-standing goitre or differentiated cancer; rapid, hard, fixed mass; hoarseness, dysphagia, stridor. All cases are stage IV.</p>
<ul><li><b>Urgent:</b> airway assessment, core biopsy, staging; test for [[braf]] within days.</li><li><b>Treatment:</b> surgery if resectable, radiotherapy and chemotherapy; [[dabtra]] for BRAF V600E; palliative care.</li><li>No role for radioactive iodine.</li></ul>
<div class="hint">💡 <b>"Old, fast, hard, stridor: anaplastic until proven otherwise."</b></div>
<details class="chk"><summary>✋ Checkpoint: which gene test changes treatment quickly?</summary><p>BRAF V600E (dabrafenib plus trametinib).</p></details>`,
recap:["Older, rapid, hard, invasive.","Airway first, biopsy and BRAF test fast.","No radioactive iodine."],
quiz:[{q:"Stage of all anaplastic cancers?",o:["IV","I","II"],a:0,e:"Always stage IV."},{q:"Targeted treatment for BRAF-positive anaplastic cancer?",o:["Dabrafenib with trametinib","Levothyroxine","Radioactive iodine"],a:0,e:"BRAF/MEK."}]},
{id:"mt2",title:"Medullary carcinoma: markers and genetics",min:6,goal:1,obj:["Use calcitonin and carcinoembryonic antigen","Know RET testing"],html:`
<div class="scene"><b>The scene:</b> A 45-year-old man has a 2 cm nodule with very high [[calcitonin]]. He has diarrhoea and facial flushing.</div>
<p>[[mtc]]: C cells; about 75% sporadic, 25% hereditary ([[ret]]). Markers: calcitonin and [[cea]]. High calcitonin can cause diarrhoea and flushing. Spreads early to neck nodes.</p>
<ul><li>Germline RET test in <b>every</b> patient.</li><li>Before surgery: plasma metanephrines (exclude [[pheo]]) and calcium.</li><li>Calcitonin level predicts spread (very high values → look for distant metastases).</li></ul>
<div class="corr">📝 <b>Slide check (page 65):</b> "ACE" should read <b>CEA</b> (carcinoembryonic antigen). The pentagastrin stimulation test is no longer used (pentagastrin is not available in most countries); the [[castim]] is used instead when needed.</div>
<div class="hint">💡 <b>"C cells: Calcitonin, CEA, Check RET."</b></div>
<details class="chk"><summary>✋ Checkpoint: why not radioactive iodine?</summary><p>C cells do not trap iodine.</p></details>`,
recap:["Markers: calcitonin and carcinoembryonic antigen.","RET test for all.","Exclude phaeochromocytoma before surgery."],
quiz:[{q:"Second tumour marker?",o:["Carcinoembryonic antigen","Angiotensin-converting enzyme","Alpha-fetoprotein"],a:0,e:"Slide correction."},{q:"Proportion hereditary?",o:["About 25%","About 90%","None"],a:0,e:"RET."}]},
{id:"mt3",title:"Multiple endocrine neoplasia type 2 and surgery",min:6,goal:2,obj:["Sort 2A and 2B","Order the pre-operative steps","Know prophylactic timing"],html:`
<div class="scene"><b>The scene:</b> His RET test is positive. His 4-year-old daughter and 8-year-old son are tested too.</div>
<p>[[men2]]: autosomal dominant.</p>
<div data-widget="sortset" data-set="men"></div>
<div data-widget="order" data-set="mtc"></div>
<p><b>[[proph]]</b> by American Thyroid Association 2015 risk: highest (M918T, type 2B) in the first year of life; high (codon 634, A883F) at or before age 5, guided by calcitonin; moderate when calcitonin rises.</p>
<p>Advanced disease: [[selp]] (or pralsetinib), vandetanib, cabozantinib.</p>
<div class="corr">📝 <b>Slide check (page 70):</b> always <b>exclude (and treat first) a phaeochromocytoma</b> before thyroid surgery in multiple endocrine neoplasia type 2. Unrecognised phaeochromocytoma can cause a fatal crisis during anaesthesia.</div>
<div class="hint">💡 <b>"In MEN2, the adrenal goes before the thyroid."</b></div>
<details class="chk"><summary>✋ Checkpoint: which feature belongs only to type 2A?</summary><p>Primary hyperparathyroidism.</p></details>`,
recap:["2A: medullary, phaeochromocytoma, hyperparathyroidism.","2B: medullary, phaeochromocytoma, neuromas, marfanoid.","Phaeochromocytoma first; prophylactic thyroidectomy by RET risk."],
quiz:[{q:"Mucosal neuromas?",o:["2B","2A"],a:0,e:"2B."},{q:"Before thyroidectomy in a RET carrier, exclude…",o:["Phaeochromocytoma","Cushing disease","Diabetes"],a:0,e:"Metanephrines."}]}],
cases:[{id:"mtk1",title:"Case 1: Flushing and a nodule",steps:[
{t:`<b>The scene:</b> 45-year-old man, 2 cm nodule, calcitonin 1200 pg/ml, diarrhoea. Plasma normetanephrine 5 times the upper limit.`,q:"What first?",o:["Treat the phaeochromocytoma (alpha-blockade, adrenalectomy)","Thyroidectomy tomorrow","Radioactive iodine"],a:0,e:"Adrenal first."},
{t:`After adrenalectomy he has total thyroidectomy with central neck dissection.`,q:"Follow-up markers?",o:["Calcitonin and carcinoembryonic antigen","Thyroglobulin","Thyroid-stimulating hormone only"],a:0,e:"C-cell markers."}],take:["Medullary: markers, RET, phaeochromocytoma first."]},
{id:"mtk2",title:"Case 2: The children",steps:[
{t:`<b>The scene:</b> His RET variant is at codon 634. His 4-year-old daughter carries it.`,q:"Plan?",o:["Thyroidectomy at or before age 5, guided by calcitonin","Wait until age 30","Never"],a:0,e:"High-risk variant."}],take:["Test relatives; time surgery by risk."]}],
flash:[["Anaplastic","Older, rapid, hard; stage IV; airway."],["Anaplastic targeted therapy","Dabrafenib plus trametinib (BRAF V600E)."],["Medullary cell","C cell."],["Medullary markers","Calcitonin, carcinoembryonic antigen."],["Hereditary medullary","About 25%, RET."],["Before surgery in RET carriers","Exclude phaeochromocytoma."],["2A","Medullary, phaeochromocytoma, hyperparathyroidism."],["2B","Medullary, phaeochromocytoma, neuromas, marfanoid."],["M918T","Thyroidectomy in the first year."],["Stimulation test today","Calcium (not pentagastrin)."]],
exam:["Anaplastic: emergency, airway, BRAF.","Medullary: calcitonin, carcinoembryonic antigen, RET for all, no radioactive iodine.","Multiple endocrine neoplasia 2A vs 2B.","Exclude phaeochromocytoma first.","Prophylactic thyroidectomy by RET risk."],
finalHtml:`<div data-widget="spot" data-set="mtc"></div><div data-widget="termdeck" data-set="mtc"></div><div class="exam" style="border-color:var(--ok)"><b>🏁 End of Lecture 6 part 2</b><br>Continue with the thyroid seminars: <b>CBL 3.1 Examination and basal thyroid blood tests.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t3a')">→ Open CBL 3.1</button><br>Or go back to the adrenal medulla: <b>2.6 Phaeochromocytoma.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('d6')">→ Open 2.6</button></div>`,
sources:"Sources: Lecture 6 part 2 (Prof. Ionela Pascanu, UMCH 2026), pages 63–71; American Thyroid Association guidelines on medullary carcinoma (Wells et al., Thyroid 2015) and anaplastic carcinoma (Bible et al., Thyroid 2021). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t2g=T2G;
