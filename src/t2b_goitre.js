/* ===== Thyroid · Lecture 6 part 2 · 2: Endemic goitre (lecture pages 11–17) ===== */
Object.assign(GLOSSARY,{
pemberton:{l:"Pemberton sign",c:"test",d:"Raising both arms above the head causes facial redness, swollen neck veins or breathlessness.",w:"Suggests a retrosternal goitre compressing the thoracic inlet."},
retrog:{l:"retrosternal goitre",c:"disease",d:"Goitre extending behind the breastbone into the chest.",w:"Can compress the windpipe and veins; usually needs surgery."},
mng:{l:"multinodular goitre",c:"disease",d:"Enlarged thyroid with several nodules, typical late stage of long-standing iodine deficiency.",w:"May become toxic (autonomous)."},
flowvol:{l:"flow–volume loop",c:"test",d:"Lung function test showing airflow during breathing in and out.",w:"Flattening shows upper airway narrowing from a large goitre."}
});
XPK.whogr={t:"Grade the goitre (World Health Organization 2001)",opts:["Grade 0","Grade 1","Grade 2"],items:[["Nothing felt or seen","Grade 0","No goitre."],["Each lobe is larger than the end of the patient's thumb on palpation, but nothing is visible with the neck in normal position","Grade 1","Palpable, not visible."],["Swelling clearly visible with the neck in normal position","Grade 2","Visible."],["Palpable goitre, seen only when the head is tilted back","Grade 1","In the older system this was 'Ib'; in the 2001 system it is grade 1."]]};
XTREE.goit={t:"Treating a non-toxic goitre",start:"a",n:{
a:{q:"Thyroid-stimulating hormone?",o:[["Low","=Look for autonomy: scintigraphy. Toxic nodular goitre is treated with radioactive iodine or surgery (part 1, subsection 6)."],["Normal","b"]]},
b:{q:"Compression symptoms, retrosternal extension, suspicious nodule or rapid growth?",o:[["Yes","=<b>Surgery</b>: total or near-total thyroidectomy (lifelong levothyroxine). Suspicious nodules: fine-needle aspiration first."],["No","c"]]},
c:{q:"Young person with a small diffuse goitre in an iodine-deficient area?",o:[["Yes","=<b>Iodine</b> (about 100–200 µg daily, by local practice; some add levothyroxine). Check thyroid-stimulating hormone after a few months."],["No, older person with large nodular goitre, unfit or unwilling for surgery","=<b>Radioactive iodine</b> can shrink the goitre by about 40% (studies 30–50%) over 1–2 years; watch for hypothyroidism."],["No, small and no symptoms","=<b>Watchful waiting</b> with ultrasound and thyroid-stimulating hormone."]]}}};
XS.goit=["Spot the error",[["Hoarseness with a goitre should raise suspicion of cancer.",1],["Long-term suppression of thyroid-stimulating hormone with levothyroxine is the standard treatment for nodular goitre.",0,"Wrong: suppressive levothyroxine is <b>no longer recommended</b> (little benefit, harms bone and heart, especially in older people)."],["A retrosternal goitre with tracheal compression is an indication for surgery.",1],["Subtotal thyroidectomy is the preferred operation for multinodular goitre.",0,"Wrong: <b>total or near-total thyroidectomy</b> is preferred today because recurrence after subtotal surgery is common and re-operation is risky."]]];
XT.goit="gtr,whogr,mng,retrog,pemberton,flowvol,us,scinti,lt4,rai,tx,rln,hypoparat";
const T2B={
meta:"Endocrinology › Thyroid › Lecture 6 part 2 › Subsection 6.2.2 · lecture pages 11–17 · ⏱ about 20 minutes in 4 bite-sized steps",
intro:`<p>A goitre from iodine deficiency starts diffuse and soft, becomes nodular over years and can end as a large, autonomous gland that compresses the neck. This subsection follows that course: grading, symptoms, work-up and treatment.</p>`,
goals:["Grade a goitre","Describe the natural history","Recognise compression","Plan the work-up","Choose treatment"],
cards:[
{id:"eg1",title:"Grading and natural history",min:5,goal:0,obj:["Use the World Health Organization grading","Describe the stages"],html:`
<div class="scene"><b>The scene:</b> A 45-year-old woman from a rural area: "My neck has been getting thicker for 20 years."</div>
<p>[[whogr]]: grade 0, 1, 2.</p>
${FIG("endgoitre")}
${FIG("goitgrades")}
<div data-widget="pickset" data-set="whogr"></div>
<p><b>Natural history:</b> diffuse hyperplasia → colloid goitre → [[mng]] → some nodules become autonomous → toxic multinodular goitre (especially after iodine is given: [[jodbas]]).</p>
<div class="hint">💡 <b>"Diffuse when young, nodular when old."</b></div>
<details class="chk"><summary>✋ Checkpoint: why can giving iodine to an old nodular goitre be risky?</summary><p>Autonomous nodules can make too much hormone once iodine is available.</p></details>`,
recap:["Grades 0, 1 (palpable), 2 (visible).","Diffuse → nodular → autonomous.","Iodine can unmask autonomy."],
quiz:[{q:"Visible with the neck in normal position?",o:["Grade 2","Grade 1","Grade 0"],a:0,e:"Grade 2."},{q:"Late stage of iodine-deficiency goitre?",o:["Multinodular goitre","Graves disease","Thyroid lymphoma"],a:0,e:"Nodular stage."}]},
{id:"eg2",title:"Symptoms and red flags",min:5,goal:2,obj:["List compression symptoms","Recognise red flags"],html:`
<div class="scene"><b>The scene:</b> She now has trouble breathing when lying flat, and her face goes red when she lifts her arms.</div>
<ul><li><b>Most goitres:</b> no symptoms, cosmetic concern.</li><li><b>Compression:</b> windpipe (breathlessness, stridor, cough), food pipe (difficulty swallowing), veins (face swelling; [[pemberton]]).</li><li>[[retrog]] causes more compression.</li></ul>
<p><b>Red flags:</b> rapid growth, hard fixed nodule, hoarseness ([[rln]] involvement), lymph nodes, stridor. Think cancer and refer urgently.</p>
<div class="hint">💡 <b>"Benign goitres push; cancers invade."</b> Hoarseness suggests invasion.</div>
<details class="chk"><summary>✋ Checkpoint: what does a positive Pemberton sign suggest?</summary><p>A retrosternal goitre compressing the thoracic inlet.</p></details>`,
recap:["Mostly no symptoms.","Compression: breathing, swallowing, veins.","Red flags: rapid growth, hard nodule, hoarseness, nodes."],
quiz:[{q:"Which suggests cancer rather than benign goitre?",o:["Hoarseness","Slow growth over 20 years","Soft diffuse swelling"],a:0,e:"Nerve invasion."},{q:"Pemberton sign suggests…",o:["Retrosternal goitre","Hypothyroidism","Thyroiditis"],a:0,e:"Thoracic inlet compression."}]},
{id:"eg3",title:"Work-up",min:5,goal:3,obj:["Order the right tests"],html:`
<div class="scene"><b>The scene:</b> What tests does she need?</div>
<ol><li><b>Thyroid-stimulating hormone</b> (then free thyroxine/triiodothyronine if abnormal).</li><li>[[us]]: volume (goitre if above about 18 ml in women and 25 ml in men), nodules, nodes.</li><li>[[scinti]] if thyroid-stimulating hormone is low (find autonomous areas).</li><li>Fine-needle aspiration of suspicious nodules (subsection 4).</li><li>For large or retrosternal goitres: computed tomography of neck and chest <b>without iodine contrast</b> (or magnetic resonance imaging), [[flowvol]].</li><li>Antibodies if autoimmune disease is suspected.</li></ol>
<div class="hint">💡 <b>"Function, form, then fine needle."</b></div>
<details class="chk"><summary>✋ Checkpoint: why avoid iodine contrast in a large nodular goitre?</summary><p>It can trigger iodine-induced hyperthyroidism.</p></details>`,
recap:["Thyroid-stimulating hormone first.","Ultrasound for size and nodules.","Scintigraphy if thyroid-stimulating hormone is low; computed tomography without contrast for retrosternal goitre."],
quiz:[{q:"First test?",o:["Thyroid-stimulating hormone","Computed tomography","Biopsy"],a:0,e:"Function first."},{q:"Scintigraphy is indicated when…",o:["Thyroid-stimulating hormone is low","Always","Never"],a:0,e:"Find hot areas."}]},
{id:"eg4",title:"Treatment",min:6,goal:4,obj:["Choose treatment","Know outdated treatments"],html:`
<div class="scene"><b>The scene:</b> Her goitre is large, multinodular and compresses the windpipe. A second patient, 19, has a small diffuse goitre.</div>
<div data-widget="tree" data-set="goit"></div>
<div class="corr">📝 <b>Slide check (page 16):</b> long-term thyroid-stimulating hormone-<b>suppressive</b> levothyroxine for goitre is no longer recommended (little shrinkage, regrowth after stopping, risk of atrial fibrillation and bone loss). Iodine, or iodine with levothyroxine at non-suppressive doses, may be used in young people with diffuse goitre.</div>
<div class="corr">📝 <b>Slide check (page 17):</b> "subtotal thyroidectomy" is outdated for multinodular goitre. Guidelines prefer <b>total or near-total thyroidectomy</b> because nodules recur in the remnant and re-operation carries a higher risk to the nerves and parathyroids.</div>
<div class="hint">💡 <b>"Young and diffuse: iodine. Old and big: knife or radioiodine."</b></div>
<details class="chk"><summary>✋ Checkpoint: two risks of thyroid surgery?</summary><p>Recurrent laryngeal nerve injury (hoarseness) and [[hypoparat]].</p></details>`,
recap:["Young diffuse: iodine.","Large, compressive, retrosternal: total thyroidectomy.","Unfit: radioactive iodine; suppressive levothyroxine is outdated."],
quiz:[{q:"Preferred operation for multinodular goitre?",o:["Total or near-total thyroidectomy","Subtotal thyroidectomy","Nodule enucleation"],a:0,e:"Less recurrence."},{q:"Suppressive levothyroxine for goitre?",o:["No longer recommended","First-line","For everyone"],a:0,e:"Slide correction."}]}],
cases:[{id:"egk1",title:"Case 1: The breathless woman",steps:[
{t:`<b>The scene:</b> 58-year-old woman with a grade 2 multinodular goitre, breathless when lying flat, positive Pemberton sign. Thyroid-stimulating hormone normal.`,q:"Next imaging?",o:["Computed tomography of neck and chest without contrast","Iodine contrast scan","No imaging"],a:0,e:"Assess retrosternal extension."},
{t:`It extends behind the sternum and narrows the trachea.`,q:"Treatment?",o:["Total thyroidectomy","Suppressive levothyroxine","Iodine tablets"],a:0,e:"Compression."}],take:["Compression means surgery."]},
{id:"egk2",title:"Case 2: The student",steps:[
{t:`<b>The scene:</b> 19-year-old with a small diffuse goitre, normal thyroid-stimulating hormone, from an iodine-deficient region.`,q:"Treatment?",o:["Iodine supplement","Thyroidectomy","Radioactive iodine"],a:0,e:"Young diffuse goitre."}],take:["Iodine for young diffuse goitres."]}],
flash:[["Goitre grade 1","Palpable, not visible."],["Goitre grade 2","Visible in normal position."],["Natural history","Diffuse → nodular → autonomous."],["Compression symptoms","Breathlessness, stridor, dysphagia, venous congestion."],["Red flag","Hoarseness, rapid growth, hard nodule."],["First test","Thyroid-stimulating hormone."],["Retrosternal imaging","Computed tomography without iodine contrast."],["Young diffuse goitre","Iodine."],["Large compressive goitre","Total or near-total thyroidectomy."],["Outdated","Suppressive levothyroxine; subtotal thyroidectomy."]],
exam:["World Health Organization grades 0, 1, 2.","Diffuse → multinodular → autonomous; iodine can trigger hyperthyroidism.","Compression and red flags (hoarseness, rapid growth).","Work-up: thyroid-stimulating hormone, ultrasound, scintigraphy if low, fine-needle aspiration of suspicious nodules.","Treatment: iodine (young), total thyroidectomy (compressive), radioactive iodine (unfit)."],
finalHtml:`<div data-widget="spot" data-set="goit"></div><div data-widget="termdeck" data-set="goit"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>3. Cretinism and iodine prophylaxis.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t2c')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 2 (Prof. Ionela Pascanu, UMCH 2026), pages 11–17; American Association of Clinical Endocrinologists/Associazione Medici Endocrinologi/European Thyroid Association nodule guideline (2016); Williams Textbook of Endocrinology; World Health Organization goitre grading (2001). Radioiodine shrinkage figures are typical published ranges. Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t2b=T2B;
