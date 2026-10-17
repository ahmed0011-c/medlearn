/* ===== Thyroid · Lecture 6 part 2 · 6: Managing differentiated thyroid cancer (lecture pages 52–62) ===== */
Object.assign(GLOSSARY,{
rrisk:{l:"risk of recurrence",c:"concept",d:"American Thyroid Association low, intermediate or high risk that the cancer comes back, based on size, spread, invasion and pathology.",w:"Guides radioactive iodine and thyroid-stimulating hormone targets."},
resp:{l:"response to therapy",c:"concept",d:"Excellent, biochemical incomplete, structural incomplete or indeterminate, based on thyroglobulin and imaging after treatment.",w:"Re-classifies the patient during follow-up."},
tgab:{l:"thyroglobulin antibodies",c:"test",d:"Antibodies that can falsely lower measured thyroglobulin.",w:"Always measured with thyroglobulin; rising antibodies can themselves mean persistent disease."},
lid:{l:"low-iodine diet",c:"concept",d:"Avoiding iodine-rich foods for 1–2 weeks before radioactive iodine.",w:"Increases uptake of the treatment."},
rairef:{l:"radioactive iodine-refractory disease",c:"disease",d:"Cancer that no longer takes up or responds to radioactive iodine.",w:"Treated with tyrosine kinase inhibitors when progressive."}
});
XTREE.dtc={t:"Plan for differentiated thyroid cancer (American Thyroid Association 2015)",start:"a",n:{
a:{q:"Papillary cancer: size and spread?",o:[["1 cm or less, no nodes, no invasion","=<b>Microcarcinoma</b>: active surveillance or lobectomy. No radioactive iodine. Thyroid-stimulating hormone in the low-normal range."],["1–4 cm, confined to the thyroid, no nodes","b"],["Above 4 cm, or obvious invasion, or nodes, or distant metastases","c"]]},
b:{q:"Low risk. Patient and surgeon prefer?",o:[["Lobectomy","=<b>Lobectomy</b> is enough for many; levothyroxine may not even be needed. No radioactive iodine."],["Total thyroidectomy","=Total thyroidectomy is also acceptable (for example for easier follow-up). Radioactive iodine usually not needed for low risk."]]},
c:{q:"Total thyroidectomy (plus neck dissection if nodes). Risk of recurrence?",o:[["Intermediate (for example microscopic invasion, a few nodes, aggressive subtype)","=<b>Consider adjuvant radioactive iodine</b>. Thyroid-stimulating hormone initially 0.1–0.5 mU/L."],["High (gross invasion, distant metastases, incomplete resection)","=<b>Radioactive iodine</b> (treatment dose). Thyroid-stimulating hormone below 0.1 mU/L initially. Consider external radiotherapy or tyrosine kinase inhibitors if refractory."]]}}};
XPK.tgfu={t:"Interpret follow-up (after total thyroidectomy and radioactive iodine)",opts:["Excellent response","Biochemical incomplete response","Structural incomplete response","Indeterminate response"],items:[
["Thyroglobulin undetectable on levothyroxine, antibodies negative, neck ultrasound normal","Excellent response","Lower the intensity of follow-up; relax thyroid-stimulating hormone target."],
["Thyroglobulin 8 ng/ml and rising, imaging negative","Biochemical incomplete response","Watch closely; most stay stable or improve."],
["Neck ultrasound: 12 mm suspicious node, aspiration positive","Structural incomplete response","Treat: surgery or radioactive iodine."],
["Thyroglobulin barely detectable, antibodies stable, small non-specific node","Indeterminate response","Continue follow-up."]]};
XS.dtc=["Spot the error",[["Radioactive iodine is not routinely needed for low-risk papillary cancer.",1],["Every patient needs thyroid-stimulating hormone suppressed below 0.1 mU/L for life.",0,"Wrong: suppression is for <b>high-risk</b> or persistent disease; low-risk patients aim for low-normal values."],["Thyroglobulin is a tumour marker after total thyroidectomy.",1],["Recombinant thyroid-stimulating hormone avoids stopping levothyroxine before radioactive iodine.",1]]];
XT.dtc="dtc,tx,lobect,cnd,rai,rhtsh,lid,tg,tgab,rrisk,resp,rairef,tki,rln,hypoparat";
const T2F={
meta:"Endocrinology › Thyroid › Lecture 6 part 2 › Subsection 6.2.6 · lecture pages 52–62 · ⏱ about 20 minutes in 3 bite-sized steps",
intro:`<p>Treatment of differentiated thyroid cancer has become more individual: less surgery and less radioactive iodine for low-risk patients, more for high-risk ones. This subsection walks through surgery, radioactive iodine, thyroid-stimulating hormone targets and follow-up.</p>`,
goals:["Choose the extent of surgery","Decide on radioactive iodine","Set thyroid-stimulating hormone targets","Use thyroglobulin in follow-up","Know options for advanced disease"],
cards:[
{id:"dt1",title:"Surgery: how much?",min:6,goal:0,obj:["Choose lobectomy or total thyroidectomy","Know complications"],html:`
<div class="scene"><b>The scene:</b> A 34-year-old woman with a 14 mm papillary cancer, no nodes. The surgeon offers lobectomy. Her friend says "take it all out".</div>
<div data-widget="tree" data-set="dtc"></div>
<p><b>Complications:</b> [[rln]] injury (hoarseness), [[hypoparat]] (low calcium; check calcium and parathyroid hormone after total thyroidectomy), bleeding with airway compromise.</p>
<div class="hint">💡 <b>"Small and inside: half is enough. Big or outside: all out."</b></div>
<details class="chk"><summary>✋ Checkpoint: why check calcium the day after total thyroidectomy?</summary><p>The parathyroids may be bruised or removed.</p></details>`,
recap:["Microcarcinoma: surveillance or lobectomy.","1–4 cm low risk: lobectomy or total.","Above 4 cm, invasion, nodes, metastases: total thyroidectomy plus neck dissection."],
quiz:[{q:"Low-risk 2 cm papillary cancer: acceptable operation?",o:["Lobectomy","Radical neck dissection","Nothing ever"],a:0,e:"ATA 2015."},{q:"Main complication of total thyroidectomy affecting calcium?",o:["Hypoparathyroidism","Hyperparathyroidism","Vitamin D excess"],a:0,e:"Parathyroid injury."}]},
{id:"dt2",title:"Radioactive iodine and thyroid-stimulating hormone",min:6,goal:1,obj:["Decide on radioactive iodine","Prepare the patient","Set targets"],html:`
<div class="scene"><b>The scene:</b> A 52-year-old man with a 5 cm papillary cancer and 6 involved nodes had total thyroidectomy.</div>
<ul><li>[[rai]] by [[rrisk]]: low – usually none; intermediate – consider; high – yes.</li><li><b>Preparation:</b> thyroid-stimulating hormone above about 30 mU/L by [[rhtsh]] or by stopping levothyroxine for 3–4 weeks; [[lid]]; no iodine contrast for weeks before; pregnancy test.</li><li><b>Side effects:</b> salivary gland inflammation, dry mouth, taste change; rarely low blood counts.</li><li><b>Thyroid-stimulating hormone target:</b> high risk below 0.1 mU/L; intermediate 0.1–0.5; low risk 0.5–2.</li></ul>
<div class="corr">📝 <b>Fact check:</b> older textbooks give radioactive iodine and thyroid-stimulating hormone suppression to almost everyone after surgery. The American Thyroid Association guideline (2015) is <b>risk-adapted</b>: no routine radioactive iodine and no suppression in low-risk disease.</div>
<div class="hint">💡 <b>"Treat the risk, not the label."</b></div>
<details class="chk"><summary>✋ Checkpoint: why must thyroid-stimulating hormone be high before radioactive iodine?</summary><p>It drives remaining thyroid and cancer cells to trap iodine.</p></details>`,
recap:["Radioactive iodine by risk.","Prepare with recombinant thyroid-stimulating hormone or withdrawal, low-iodine diet.","Thyroid-stimulating hormone targets by risk."],
quiz:[{q:"Target thyroid-stimulating hormone in high-risk disease?",o:["Below 0.1 mU/L","0.5–2 mU/L","Above 10 mU/L"],a:0,e:"Suppression."},{q:"Before radioactive iodine, avoid…",o:["Iodine contrast","Paracetamol","Water"],a:0,e:"Iodine load blocks uptake."}]},
{id:"dt3",title:"Follow-up and advanced disease",min:6,goal:3,obj:["Interpret thyroglobulin","Know options for refractory disease"],html:`
<div class="scene"><b>The scene:</b> One year later, his thyroglobulin is undetectable and the neck ultrasound is clear.</div>
<p>After total thyroidectomy and radioactive iodine, [[tg]] should be undetectable. Always measure [[tgab]] too. Neck ultrasound is the main imaging. Classify [[resp]].</p>
<div data-widget="pickset" data-set="tgfu"></div>
<p><b>Advanced:</b> [[rairef]] that progresses → [[tki]] (lenvatinib, sorafenib; selpercatinib for RET fusions; BRAF/MEK inhibitors in selected cases), external radiotherapy, local treatment of bone metastases.</p>
<div class="hint">💡 <b>"No thyroid, no thyroglobulin."</b></div>
<details class="chk"><summary>✋ Checkpoint: why measure antibodies with thyroglobulin?</summary><p>They can falsely lower thyroglobulin.</p></details>`,
recap:["Thyroglobulin plus antibodies, neck ultrasound.","Response categories guide follow-up.","Refractory progressive disease: tyrosine kinase inhibitors."],
quiz:[{q:"Undetectable thyroglobulin, negative antibodies, normal ultrasound?",o:["Excellent response","Structural disease","Biochemical incomplete"],a:0,e:"Excellent."},{q:"Drug for progressive radioactive iodine-refractory disease?",o:["Lenvatinib","Levothyroxine","Methimazole"],a:0,e:"Tyrosine kinase inhibitor."}]}],
cases:[{id:"dtk1",title:"Case 1: Low risk",steps:[
{t:`<b>The scene:</b> 34-year-old woman: 14 mm papillary cancer, no nodes, no invasion.`,q:"Treatment?",o:["Lobectomy (or total thyroidectomy); no radioactive iodine","Total thyroidectomy, high-dose radioactive iodine and lifelong suppression","Chemotherapy"],a:0,e:"Low risk."}],take:["Low risk: less is more."]},
{id:"dtk2",title:"Case 2: High risk",steps:[
{t:`<b>The scene:</b> 52-year-old man: 5 cm papillary cancer, extrathyroidal extension, lung nodules.`,q:"Treatment?",o:["Total thyroidectomy, neck dissection, radioactive iodine, thyroid-stimulating hormone below 0.1","Lobectomy only","Observation"],a:0,e:"High risk."},
{t:`Two years later, lung nodules grow and do not take up iodine.`,q:"Next?",o:["Tyrosine kinase inhibitor","More radioactive iodine","Stop levothyroxine"],a:0,e:"Refractory."}],take:["High risk: full treatment and close follow-up."]}],
flash:[["Microcarcinoma","Active surveillance or lobectomy."],["Low risk 1–4 cm","Lobectomy or total thyroidectomy."],["High risk","Total thyroidectomy, radioactive iodine, suppression."],["Radioactive iodine preparation","Recombinant thyroid-stimulating hormone or withdrawal; low-iodine diet."],["Thyroid-stimulating hormone target (high risk)","Below 0.1 mU/L."],["Thyroid-stimulating hormone target (low risk)","0.5–2 mU/L."],["Tumour marker","Thyroglobulin (with antibodies)."],["Excellent response","Undetectable thyroglobulin, normal imaging."],["Refractory disease","Tyrosine kinase inhibitors."],["Surgical complications","Nerve palsy, hypoparathyroidism."]],
exam:["Extent of surgery by size and spread.","Radioactive iodine by recurrence risk (none for most low-risk).","Thyroid-stimulating hormone targets by risk.","Thyroglobulin and antibodies, neck ultrasound, response categories.","Refractory progressive disease: tyrosine kinase inhibitors."],
finalHtml:`<div data-widget="spot" data-set="dtc"></div><div data-widget="termdeck" data-set="dtc"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>7. Anaplastic and medullary cancer, multiple endocrine neoplasia type 2.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t2g')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 2 (Prof. Ionela Pascanu, UMCH 2026), pages 52–62; American Thyroid Association guideline (Haugen et al., Thyroid 2016); European Society for Medical Oncology thyroid cancer guideline (2019, updated 2022). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t2f=T2F;
