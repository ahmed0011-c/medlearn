/* ===== Thyroid · Lecture 6 part 1 · 8: Pregnancy, fetus and newborn (lecture pages 72–79) ===== */
Object.assign(GLOSSARY,{
gtt:{l:"gestational transient thyrotoxicosis",c:"disease",d:"Mild thyrotoxicosis in the first trimester from high human chorionic gonadotropin, often with severe vomiting (hyperemesis gravidarum).",w:"No antibodies, no goitre, no eye disease; settles by about 14–18 weeks without antithyroid drugs."},
fetalhyper:{l:"fetal and neonatal hyperthyroidism",c:"disease",d:"The mother's stimulating antibodies cross the placenta and switch on the baby's thyroid.",w:"Risk when antibodies are more than about 3 times the upper limit in the second half of pregnancy, even after maternal thyroid surgery or radioiodine."},
ppt:{l:"postpartum thyroiditis",c:"disease",d:"Painless autoimmune thyroiditis within a year of delivery: thyrotoxic, then hypothyroid phase, usually recovering.",w:"More common with anti-thyroid peroxidase antibodies."}
});
XPK.preg={t:"Pregnancy decisions",opts:["No antithyroid drug; support and recheck","Propylthiouracil","Thiamazole","Measure antibodies at 18–22 weeks","Propranolol briefly"],items:[
["9 weeks pregnant, heavy vomiting, free thyroxine slightly high, antibodies negative, no goitre","No antithyroid drug; support and recheck","Gestational transient thyrotoxicosis."],
["8 weeks pregnant, Graves disease newly diagnosed, free thyroxine twice the upper limit","Propylthiouracil","First trimester."],
["Woman on thiamazole for Graves disease plans pregnancy and wants to stay on tablets","Propylthiouracil","Switch before or as soon as pregnancy is confirmed (or consider stopping if low dose and in remission)."],
["Graves disease treated with radioactive iodine 3 years ago, now 12 weeks pregnant, normal thyroid tests on levothyroxine","Measure antibodies at 18–22 weeks","Antibodies persist after radioiodine and can affect the fetus."],
["Palpitations at 10 weeks on propylthiouracil","Propranolol briefly","Lowest dose, short time; avoid atenolol."]]};
XS.t1h=["Spot the error",[["Thiamazole in the first trimester can cause birth defects.",1],["Radioactive iodine is safe in pregnancy at low doses.",0,"Wrong: radioactive iodine is <b>contraindicated</b> in pregnancy and breastfeeding."],["Atenolol is the beta-blocker of choice in pregnancy.",0,"Wrong: atenolol is linked to fetal growth restriction; use <b>propranolol or metoprolol</b> briefly."],["Maternal antibodies can make the fetus hyperthyroid even after the mother's thyroid was removed.",1]]];
XT.t1h="gtt,hcg,ptu,mmi,trab,fetalhyper,ppt,betab";
const T1H={
meta:"Endocrinology › Thyroid › Lecture 6 part 1 › Subsection 6.1.8 · lecture pages 72–79 · ⏱ about 20 minutes in 3 bite-sized steps",
intro:`<p>Pregnancy changes thyroid tests, treatment and risks. Two patients are involved: the mother and the fetus, who can be affected by the mother's antibodies and drugs. This subsection covers the main decisions.</p>`,
goals:["Separate gestational transient thyrotoxicosis from Graves disease","Choose drugs by trimester","Know fetal and neonatal risks"],
cards:[
{id:"pg1",title:"Early pregnancy: Graves or human chorionic gonadotropin?",min:5,goal:0,obj:["Distinguish the two"],html:`
<div class="scene"><b>The scene:</b> A woman 9 weeks pregnant vomits several times a day. Thyroid-stimulating hormone 0.05 mU/L, free thyroxine slightly high.</div>
<p>[[hcg]] peaks around 10–12 weeks and stimulates the thyroid. [[gtt]]: no antibodies, no goitre or eye signs, settles by mid-pregnancy; supportive care, no antithyroid drugs (beta-blocker briefly if needed).</p>
<p><b>Graves disease:</b> antibodies positive, goitre, eye signs, symptoms before pregnancy.</p>
<div class="hint">💡 <b>"Vomiting and no antibodies: it's the pregnancy hormone."</b></div>
<details class="chk"><summary>✋ Checkpoint: which test decides?</summary><p>Thyroid-stimulating hormone receptor antibodies.</p></details>`,
recap:["Low thyroid-stimulating hormone is common in the first trimester.","Gestational transient thyrotoxicosis: no antibodies, self-limiting.","Graves: antibodies, goitre, eyes."],
quiz:[{q:"Gestational transient thyrotoxicosis treatment?",o:["Supportive; no antithyroid drug","Thiamazole","Radioactive iodine"],a:0,e:"Self-limiting."},{q:"Peak of human chorionic gonadotropin?",o:["About 10–12 weeks","At delivery","Week 30"],a:0,e:"First trimester."}]},
{id:"pg2",title:"Treating Graves disease in pregnancy",min:7,goal:1,obj:["Choose drugs by trimester","Know targets and surgery timing"],html:`
<div class="scene"><b>The scene:</b> A woman at 8 weeks with newly diagnosed Graves disease.</div>
<ul><li><b>First trimester:</b> [[ptu]] (thiamazole embryopathy: scalp defects, choanal and oesophageal atresia).</li><li><b>After the first trimester:</b> switching to thiamazole <b>may be considered</b> (liver risk of propylthiouracil); either is acceptable.</li><li><b>Target:</b> lowest dose that keeps free thyroxine at or just above the upper limit of the pregnancy range (protects the fetus from hypothyroidism).</li><li><b>Beta-blocker:</b> propranolol or metoprolol, briefly. Avoid atenolol.</li><li><b>Surgery:</b> if needed (drug allergy, very high doses), in the <b>second trimester</b>.</li><li><b>Radioactive iodine:</b> contraindicated.</li><li><b>Breastfeeding:</b> thiamazole up to 20 mg daily (or propylthiouracil up to about 450 mg) is considered safe.</li></ul>
<div class="corr">📝 <b>Slide check (page 75):</b> atenolol should be avoided in pregnancy (fetal growth restriction); prefer propranolol or metoprolol. Surgery is best done <b>during</b> the second trimester, not after it. Switching from propylthiouracil to thiamazole after the first trimester is optional (American Thyroid Association 2017), not mandatory.</div>
<div data-widget="pickset" data-set="preg"></div>
<div class="hint">💡 <b>"P for pregnancy's first trimester: propylthiouracil."</b></div>
<details class="chk"><summary>✋ Checkpoint: why keep free thyroxine slightly high rather than mid-normal?</summary><p>Antithyroid drugs cross the placenta; over-treatment makes the fetus hypothyroid.</p></details>`,
recap:["Propylthiouracil in first trimester; thiamazole later optional.","Free thyroxine at or just above the upper limit.","Surgery in second trimester; no radioactive iodine."],
quiz:[{q:"First-trimester drug?",o:["Propylthiouracil","Thiamazole","Radioactive iodine"],a:0,e:"Embryopathy."},{q:"Best time for surgery?",o:["Second trimester","Third trimester","First week"],a:0,e:"Slide correction."}]},
{id:"pg3",title:"Fetus and newborn",min:5,goal:2,obj:["Know when the fetus is at risk"],html:`
<div class="scene"><b>The scene:</b> A woman had a thyroidectomy for Graves disease 4 years ago. Now 20 weeks pregnant, normal thyroid tests on levothyroxine.</div>
<p>Antibodies cross the placenta from about 20 weeks → [[fetalhyper]]: fetal tachycardia above 160 per minute, goitre, growth restriction, advanced bone age, heart failure. Measure maternal [[trab]] early, and if raised, again at 18–22 weeks (and at 30–34 weeks); more than about 3 times the upper limit → fetal monitoring and newborn checks. Neonatal hyperthyroidism may appear days after birth as maternal drugs wear off.</p>
<p>[[ppt]]: after delivery, a separate condition.</p>
<div class="hint">💡 <b>"The thyroid is gone, but the antibodies are not."</b></div>
<details class="chk"><summary>✋ Checkpoint: why may the newborn be well at birth and then become thyrotoxic?</summary><p>Maternal antithyroid drug leaves the baby's blood faster than the antibodies.</p></details>`,
recap:["Antibodies cross from about 20 weeks.","Measure at diagnosis, 18–22 and 30–34 weeks if raised.","Newborn hyperthyroidism can appear after a few days."],
quiz:[{q:"Antibodies dangerous above…",o:["About 3 times upper limit","Any detectable level","Never"],a:0,e:"ATA 2017."},{q:"Fetal sign?",o:["Heart rate above 160","Bradycardia only","Large placenta"],a:0,e:"Tachycardia."}]}],
cases:[{id:"pgk1",title:"Case 1: Vomiting at 9 weeks",steps:[
{t:`<b>The scene:</b> 9 weeks pregnant, hyperemesis, thyroid-stimulating hormone 0.05, free thyroxine slightly high, antibodies negative.`,q:"Diagnosis?",o:["Gestational transient thyrotoxicosis","Graves disease","Toxic adenoma"],a:0,e:"Self-limiting."}],take:["Antibodies separate the causes."]},
{id:"pgk2",title:"Case 2: The antibodies remain",steps:[
{t:`<b>The scene:</b> Thyroidectomy for Graves 4 years ago; now 20 weeks pregnant; antibodies 5 times the upper limit.`,q:"Plan?",o:["Fetal ultrasound monitoring and newborn checks","Nothing: thyroid is gone","Radioactive iodine"],a:0,e:"Antibodies cross the placenta."}],take:["Check antibodies in women with past Graves."]}],
flash:[["First-trimester low thyroid-stimulating hormone","Often human chorionic gonadotropin."],["Gestational transient thyrotoxicosis","No antibodies, self-limiting."],["First-trimester drug","Propylthiouracil."],["Thiamazole embryopathy","Scalp defects, choanal and oesophageal atresia."],["Free thyroxine target","At or just above upper limit."],["Beta-blocker","Propranolol or metoprolol; avoid atenolol."],["Surgery timing","Second trimester."],["Radioactive iodine","Contraindicated."],["Fetal risk","Antibodies above about 3 times upper limit."],["Breastfeeding","Thiamazole up to 20 mg/day."]],
exam:["Gestational transient thyrotoxicosis vs Graves.","Propylthiouracil first trimester; later thiamazole optional.","Free thyroxine at upper limit; surgery second trimester.","Antibodies: fetal and neonatal hyperthyroidism.","Avoid atenolol; no radioactive iodine."],
finalHtml:`<div data-widget="spot" data-set="t1h"></div><div data-widget="termdeck" data-set="t1h"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>9. Thyroiditis.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t1i')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 1 (Prof. Ionela Pascanu, UMCH 2026), pages 72–79; American Thyroid Association pregnancy guideline (Alexander et al., Thyroid 2017); European Thyroid Association guideline (2018). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t1h=T1H;
