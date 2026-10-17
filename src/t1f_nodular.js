/* ===== Thyroid · Lecture 6 part 1 · 6: Toxic adenoma and toxic multinodular goitre (lecture pages 56–62) ===== */
Object.assign(GLOSSARY,{
toxad:{l:"toxic adenoma",c:"disease",d:"A single benign nodule that makes thyroid hormone independently (Plummer adenoma).",w:"Hot on scintigraphy; rest of the gland suppressed."},
tmng:{l:"toxic multinodular goitre",c:"disease",d:"Long-standing nodular goitre in which several nodules have become autonomous.",w:"Typical in older people from iodine-deficient regions."},
tshrmut:{l:"activating thyroid-stimulating hormone receptor mutation",c:"concept",d:"A change in the receptor gene inside the nodule cells that keeps the receptor switched on.",w:"The usual cause of autonomous nodules."}
});
XPK.tnod={t:"Which treatment fits?",opts:["Radioactive iodine","Lobectomy","Total thyroidectomy","Long-term low-dose thiamazole"],items:[
["65-year-old with a 3 cm toxic adenoma, otherwise healthy","Radioactive iodine","Treats the hot nodule; the suppressed tissue is spared, so hypothyroidism is less common than in Graves."],
["35-year-old with a 4 cm toxic adenoma who wants a quick definitive cure","Lobectomy","Removes the nodule; usually no levothyroxine needed."],
["70-year-old with a large toxic multinodular goitre compressing the trachea","Total thyroidectomy","Compression needs surgery."],
["88-year-old frail patient with mild toxic multinodular goitre, unfit for other options","Long-term low-dose thiamazole","Autonomy does not remit; tablets are lifelong but simple."]]};
XS.t1f=["Spot the error",[["Antithyroid drugs cure a toxic adenoma after 18 months.",0,"Wrong: autonomous nodules <b>do not remit</b>; tablets only control them while taken."],["Toxic multinodular goitre is more common in iodine-deficient regions.",1],["Iodine contrast can trigger thyrotoxicosis in a nodular goitre.",1],["Hot nodules usually need fine-needle aspiration.",0,"Wrong: hot nodules are almost never malignant."]]];
XT.t1f="toxad,tmng,tshrmut,hotnod,scinti,rai,lobect,tx,mmi,jodbas";
const T1F={
meta:"Endocrinology › Thyroid › Lecture 6 part 1 › Subsection 6.1.6 · lecture pages 56–62 · ⏱ about 15 minutes in 3 bite-sized steps",
intro:`<p>Autonomous nodules are the second big cause of hyperthyroidism, especially in older people and in iodine-deficient regions like much of Central and Eastern Europe. Unlike Graves disease, they never go into remission.</p>`,
goals:["Explain autonomy","Recognise toxic adenoma and toxic multinodular goitre","Choose definitive treatment"],
cards:[
{id:"tn1",title:"Autonomy",min:5,goal:0,obj:["Explain how nodules become autonomous"],html:`
<div class="scene"><b>The scene:</b> A 68-year-old woman from a mountain region has had a nodular goitre for 30 years. Now she has atrial fibrillation and weight loss.</div>
<p>Years of growth stimulation (iodine deficiency) → some cells gain [[tshrmut]] → they grow and make hormone regardless of thyroid-stimulating hormone. Result: [[toxad]] (one) or [[tmng]] (several). Often triiodothyronine-predominant and mild. Iodine load ([[jodbas]]) can tip it over.</p>
<div class="hint">💡 <b>"A nodule that no longer listens to the pituitary."</b></div>
<details class="chk"><summary>✋ Checkpoint: why do these patients have no orbitopathy?</summary><p>No autoimmune antibodies are involved.</p></details>`,
recap:["Activating receptor mutations.","Single (adenoma) or multiple (multinodular).","No eye disease; iodine can trigger it."],
quiz:[{q:"Usual cause of autonomy?",o:["Activating thyroid-stimulating hormone receptor mutation","Antibodies","Viral infection"],a:0,e:"Somatic mutation."},{q:"Typical patient?",o:["Older, iodine-deficient region","Young woman postpartum","Child"],a:0,e:"Long-standing goitre."}]},
{id:"tn2",title:"Diagnosis",min:4,goal:1,obj:["Use scintigraphy"],html:`
<div class="scene"><b>The scene:</b> Her thyroid-stimulating hormone is suppressed, antibodies negative.</div>
<p>[[scinti]]: toxic adenoma = one [[hotnod]] with the rest suppressed; toxic multinodular goitre = several hot and cold areas. Ultrasound for size; aspiration only of cold suspicious nodules.</p>
<div class="hint">💡 <b>"Hot nodule = happy nodule (rarely cancer)."</b></div>
<details class="chk"><summary>✋ Checkpoint: which nodules in a multinodular goitre may still need aspiration?</summary><p>Cold nodules with suspicious ultrasound features.</p></details>`,
recap:["Antibodies negative.","Scintigraphy: hot areas.","Aspirate only suspicious cold nodules."],
quiz:[{q:"Toxic adenoma on scintigraphy?",o:["One hot nodule, rest suppressed","Diffuse high uptake","Low uptake"],a:0,e:"Classic."},{q:"Hot nodule cancer risk?",o:["Very low","High","Unknown"],a:0,e:"Rare."}]},
{id:"tn3",title:"Treatment",min:5,goal:2,obj:["Choose definitive therapy"],html:`
<div class="scene"><b>The scene:</b> She is controlled on thiamazole. What next?</div>
<ul><li><b>Radioactive iodine:</b> first choice for many; hypothyroidism less frequent than in Graves (the suppressed tissue takes little iodine).</li><li><b>Surgery:</b> lobectomy (adenoma) or total thyroidectomy (multinodular, large, compressive, suspicious).</li><li><b>Antithyroid drugs:</b> to prepare, or long-term in the frail; no remission.</li><li>Radiofrequency ablation for selected adenomas in expert centres.</li></ul>
<div data-widget="pickset" data-set="tnod"></div>
<div class="hint">💡 <b>"No remission: plan a definitive cure."</b></div>
<details class="chk"><summary>✋ Checkpoint: why is hypothyroidism less frequent after radioactive iodine for a toxic adenoma?</summary><p>The normal, suppressed tissue takes up little iodine and survives.</p></details>`,
recap:["Radioactive iodine or surgery.","Long-term tablets for the frail.","No remission with tablets."],
quiz:[{q:"Do autonomous nodules remit on tablets?",o:["No","Yes, in half"],a:0,e:"No remission."},{q:"Compressive toxic multinodular goitre?",o:["Total thyroidectomy","Radioactive iodine only","Nothing"],a:0,e:"Compression."}]}],
cases:[{id:"tnk1",title:"Case 1: Atrial fibrillation at 68",steps:[
{t:`<b>The scene:</b> 68-year-old woman, nodular goitre for 30 years, atrial fibrillation, thyroid-stimulating hormone suppressed, antibodies negative. Scintigraphy: several hot areas.`,q:"Diagnosis?",o:["Toxic multinodular goitre","Graves disease","Thyroiditis"],a:0,e:"Patchy hot."},
{t:`No compression, she prefers no surgery.`,q:"Treatment?",o:["Radioactive iodine after control with thiamazole","18 months thiamazole then stop","Levothyroxine"],a:0,e:"Definitive."}],take:["Autonomy needs definitive treatment."]},
{id:"tnk2",title:"Case 2: After the CT scan",steps:[
{t:`<b>The scene:</b> 75-year-old man with a known nodular goitre becomes thyrotoxic 3 weeks after a contrast computed tomography scan.`,q:"Mechanism?",o:["Iodine-induced (Jod-Basedow)","Graves disease","Subacute thyroiditis"],a:0,e:"Iodine load on autonomous nodules."}],take:["Iodine contrast and nodular goitre: watch out."]}],
flash:[["Toxic adenoma","Single autonomous hot nodule."],["Toxic multinodular goitre","Several autonomous nodules."],["Cause","Activating receptor mutations."],["Antibodies","Negative."],["Scintigraphy","Hot areas, rest suppressed."],["Remission on tablets","No."],["First-choice definitive","Radioactive iodine (or surgery)."],["Hypothyroidism after radioiodine","Less than in Graves."],["Trigger","Iodine contrast."],["Hot nodule cancer risk","Very low."]],
exam:["Autonomy from receptor mutations in long-standing goitre.","No eye disease, antibodies negative.","Scintigraphy hot areas.","No remission; radioactive iodine or surgery.","Iodine-induced hyperthyroidism."],
finalHtml:`<div data-widget="spot" data-set="t1f"></div><div data-widget="termdeck" data-set="t1f"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>7. Iodine-induced and amiodarone-induced thyrotoxicosis.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t1g')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 1 (Prof. Ionela Pascanu, UMCH 2026), pages 56–62; American Thyroid Association guideline (2016). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t1f=T1F;
