/* ===== Thyroid · Lecture 6 part 1 · 5: Treating Graves disease (lecture pages 46–52) ===== */
Object.assign(GLOSSARY,{
mmi:{l:"thiamazole",c:"drug",d:"Antithyroid drug (methimazole) that blocks thyroid peroxidase.",w:"First-choice antithyroid drug except in the first trimester of pregnancy and thyroid storm."},
cbz:{l:"carbimazole",c:"drug",d:"Prodrug converted to thiamazole in the body.",w:"10 mg carbimazole gives about 6 mg thiamazole."},
ptu:{l:"propylthiouracil",c:"drug",d:"Antithyroid drug that also blocks conversion of thyroxine to triiodothyronine.",w:"Rare but severe liver damage: used mainly in the first trimester and in thyroid storm."},
agran:{l:"agranulocytosis",c:"disease",d:"Severe fall in neutrophils (below 0.5 × 10⁹/L).",w:"Rare (about 0.2–0.5%) but dangerous side effect of antithyroid drugs: sore throat and fever → stop the drug and check the blood count."},
betab:{l:"beta-blockers",c:"drug",d:"Drugs that block beta-adrenergic receptors (for example propranolol).",w:"Quickly control palpitations and tremor while antithyroid drugs start working."},
blockrep:{l:"block-and-replace",c:"drug",d:"High-dose antithyroid drug plus levothyroxine.",w:"Not routine: more side effects, no better remission."},
lugol:{l:"potassium iodide (Lugol solution)",c:"drug",d:"High-dose iodine that briefly blocks hormone release and reduces thyroid blood flow.",w:"Given for about 7–10 days before thyroidectomy for Graves disease."}
});
XPK.gtx={t:"Pick the treatment",opts:["Thiamazole","Propylthiouracil","Radioactive iodine","Total thyroidectomy","Beta-blocker now"],items:[
["Newly diagnosed 30-year-old, mild goitre, no eye disease; wants tablets","Thiamazole","Course of 12–18 months; remission in about half."],
["8 weeks pregnant with active Graves disease","Propylthiouracil","Thiamazole can cause birth defects in the first trimester."],
["Relapse after a full course, 55-year-old, no eye disease, does not want surgery","Radioactive iodine","Definitive and simple; levothyroxine afterwards."],
["Large goitre compressing the trachea, plus active moderate orbitopathy","Total thyroidectomy","Definitive; avoids worsening the eyes."],
["Heart rate 128 per minute and tremor at the first visit","Beta-blocker now","Symptom control while antithyroid drugs act."]]};
XSORT.ated={t:"Side effect: which drug is more typical?",labels:["Thiamazole/carbimazole","Propylthiouracil","Both"],items:[["Agranulocytosis",2,"Both; stop the drug."],["Severe liver failure",1,"Black box warning."],["Cholestatic jaundice",0,"Typical pattern with thiamazole."],["Birth defects in the first trimester (scalp, gut)",0,"Thiamazole embryopathy."],["Antineutrophil cytoplasmic antibody vasculitis",1,"More with propylthiouracil."],["Itchy rash",2,"Most common minor side effect."]]};
XS.t1e=["Spot the error",[["Thiamazole is the preferred antithyroid drug for most patients.",1],["After agranulocytosis on thiamazole, switch to propylthiouracil.",0,"Wrong: <b>never re-challenge or switch</b> to another thionamide after agranulocytosis (cross-reactivity); choose radioactive iodine or surgery."],["Block-and-replace is the routine regimen.",0,"Wrong: <b>titration</b> is preferred; block-and-replace has more side effects and is not better."],["Women should avoid pregnancy for 6 months after radioactive iodine.",1]]];
XT.t1e="mmi,cbz,ptu,agran,betab,blockrep,rai,tx,lugol,lt4,trab";
const T1E={
meta:"Endocrinology › Thyroid › Lecture 6 part 1 › Subsection 6.1.5 · lecture pages 46–52 · ⏱ about 25 minutes in 4 bite-sized steps",
intro:`<p>Graves disease has three good treatments: tablets, radioactive iodine and surgery. None is "best" for everyone. This subsection shows how each works, the doses that matter, the side effects you must warn about and how to choose.</p>`,
goals:["Use antithyroid drugs safely","Know radioactive iodine indications and contraindications","Know when to choose surgery","Pick the right option for the patient"],
cards:[
{id:"gt1",title:"Antithyroid drugs",min:7,goal:0,obj:["Know doses and regimens","Know remission and relapse"],html:`
<div class="scene"><b>The scene:</b> A 30-year-old woman with newly diagnosed Graves disease, free thyroxine twice the upper limit, wants to avoid surgery.</div>
<ul><li>[[mmi]] (or [[cbz]]) first choice. Start about 10–30 mg daily depending on severity (American Thyroid Association 2016: 5–10 mg if free thyroxine is 1–1.5 times the upper limit, 10–20 mg if 1.5–2 times, 30–40 mg if 2–3 times), then titrate to the lowest dose that keeps her normal.</li><li>[[ptu]] only in the first trimester, thyroid storm, or minor reactions to thiamazole when other options are refused.</li><li>[[betab]] (propranolol) for symptoms.</li><li><b>Duration:</b> 12–18 months; remission in about half. Lower chance with large goitre, high antibodies, smoking, young age, severe disease. Long-term low-dose thiamazole is an option.</li><li>[[blockrep]] is not routine.</li></ul>
<div class="corr">📝 <b>Slide check (page 47):</b> the thiamazole doses on the slide are higher than current practice. The American Thyroid Association (2016) starts at about 10–30 mg daily by severity. Carbimazole is a prodrug: 10 mg carbimazole ≈ 6 mg thiamazole (so doses are not identical).</div>
<div class="hint">💡 <b>"Start by severity, titrate down, stop at 12–18 months."</b></div>
<details class="chk"><summary>✋ Checkpoint: why is propylthiouracil not first choice?</summary><p>Rare but severe liver failure.</p></details>`,
recap:["Thiamazole first; propylthiouracil in first trimester and storm.","Dose by severity, then titrate.","12–18 months; remission about half."],
quiz:[{q:"First-choice drug outside pregnancy?",o:["Thiamazole","Propylthiouracil","Lugol"],a:0,e:"ATA."},{q:"Usual course length?",o:["12–18 months","2 weeks","10 years always"],a:0,e:"Standard."}]},
{id:"gt2",title:"Side effects you must warn about",min:5,goal:0,obj:["List side effects","Act on fever and sore throat"],html:`
<div class="scene"><b>The scene:</b> Six weeks later she rings: fever 39 °C and a very sore throat.</div>
<ul><li><b>Minor:</b> rash, itching, joint pain.</li><li>[[agran]]: mostly in the first 3 months. Tell every patient: fever or sore throat → stop the tablet and get a blood count the same day.</li><li><b>Liver:</b> cholestasis (thiamazole), hepatitis and liver failure (propylthiouracil).</li><li>Vasculitis (propylthiouracil), birth defects (thiamazole in the first trimester).</li></ul>
<div data-widget="sortset" data-set="ated"></div>
<div class="corr">📝 <b>Slide check (page 49):</b> after agranulocytosis, do <b>not</b> re-challenge with the same drug or switch to the other thionamide (cross-reactivity). Move to radioactive iodine or surgery. Block-and-replace is not recommended as a routine regimen.</div>
<div class="hint">💡 <b>"Fever or sore throat: stop and count."</b></div>
<details class="chk"><summary>✋ Checkpoint: what does she do now?</summary><p>Stop thiamazole, urgent full blood count.</p></details>`,
recap:["Agranulocytosis: stop and check blood count; never re-challenge or switch.","Liver: propylthiouracil worst.","Written warning for every patient."],
quiz:[{q:"Agranulocytosis on thiamazole: next drug?",o:["None of the thionamides; radioactive iodine or surgery","Propylthiouracil","Double the dose"],a:0,e:"Cross-reactivity."},{q:"Severe liver failure is most associated with…",o:["Propylthiouracil","Thiamazole","Propranolol"],a:0,e:"Black box."}]},
{id:"gt3",title:"Radioactive iodine and surgery",min:6,goal:1,obj:["Know indications and contraindications"],html:`
<div class="scene"><b>The scene:</b> Her relapse comes 1 year after stopping tablets.</div>
<p><b>[[rai]]:</b> a single oral dose; effect over 6–12 weeks; most become hypothyroid → [[lt4]]. Contraindicated in pregnancy and breastfeeding; avoid pregnancy for 6 months; avoid in active moderate-to-severe orbitopathy; steroid cover if mild active eye disease or risk factors; suspicious nodule → surgery instead.</p>
<p><b>[[tx|Total thyroidectomy]]:</b> fastest cure; for large or compressive goitre, suspicious nodule, active orbitopathy, wish for pregnancy soon, or patient preference. Prepare: normal thyroid function on thiamazole, [[lugol]] for 7–10 days before. Risks: nerve injury, hypoparathyroidism. Lifelong levothyroxine.</p>
<div class="hint">💡 <b>"Radioiodine: simple but slow and not for pregnancy or angry eyes. Surgery: fast and final."</b></div>
<details class="chk"><summary>✋ Checkpoint: why is near-total or total thyroidectomy preferred over subtotal?</summary><p>Less relapse.</p></details>`,
recap:["Radioactive iodine: simple; not in pregnancy or active moderate-to-severe eyes.","Surgery: fast, for big goitre, nodules, eyes, pregnancy plans.","Both usually need lifelong levothyroxine."],
quiz:[{q:"Absolute contraindication for radioactive iodine?",o:["Pregnancy","Age over 40","Previous antithyroid drugs"],a:0,e:"Also breastfeeding."},{q:"Pre-operative iodine solution?",o:["Lugol 7–10 days","Not used","Radioactive iodine"],a:0,e:"Reduces blood flow."}]},
{id:"gt4",title:"Choosing with the patient",min:4,goal:3,obj:["Match patient to treatment"],html:`
<div class="scene"><b>The scene:</b> Five patients, five choices.</div>
<div data-widget="pickset" data-set="gtx"></div>
<div class="hint">💡 <b>"Tablets first for most; definitive when relapse, big goitre, eyes or wishes say so."</b></div>
<details class="chk"><summary>✋ Checkpoint: active moderate orbitopathy plus relapse: which definitive option?</summary><p>Surgery (or long-term antithyroid drugs), not radioactive iodine.</p></details>`,
recap:["Shared decision.","Pregnancy plans, eyes, goitre size and relapse risk guide the choice."],
quiz:[{q:"First-trimester pregnancy: drug?",o:["Propylthiouracil","Thiamazole","Radioactive iodine"],a:0,e:"Embryopathy risk with thiamazole."},{q:"Immediate symptom relief?",o:["Beta-blocker","Radioactive iodine","Levothyroxine"],a:0,e:"Propranolol."}]}],
cases:[{id:"gtk1",title:"Case 1: Sore throat",steps:[
{t:`<b>The scene:</b> 30-year-old woman, thiamazole 20 mg for 6 weeks, now fever and sore throat. Neutrophils 0.2 × 10⁹/L.`,q:"Action?",o:["Stop thiamazole, admit, broad-spectrum antibiotics; never re-start a thionamide","Switch to propylthiouracil","Continue"],a:0,e:"Agranulocytosis."},
{t:`Once recovered, she is still thyrotoxic.`,q:"Definitive treatment?",o:["Radioactive iodine or surgery","Propylthiouracil","Block-and-replace"],a:0,e:"No thionamides."}],take:["Warn every patient about sore throat."]},
{id:"gtk2",title:"Case 2: Planning a pregnancy",steps:[
{t:`<b>The scene:</b> 27-year-old with Graves disease wants to become pregnant within a year; large goitre.`,q:"Best definitive option?",o:["Total thyroidectomy","Radioactive iodine now","Nothing"],a:0,e:"Avoids drugs in pregnancy and antibody rise after radioactive iodine."}],take:["Pregnancy plans shape the choice."]}],
flash:[["First-choice antithyroid drug","Thiamazole."],["Thiamazole start dose","About 10–30 mg/day by severity."],["Carbimazole","Prodrug: 10 mg ≈ 6 mg thiamazole."],["Propylthiouracil uses","First trimester, thyroid storm."],["Course","12–18 months; remission ~50%."],["Agranulocytosis","Stop, blood count; never re-challenge or switch."],["Block-and-replace","Not routine."],["Radioactive iodine contraindications","Pregnancy, breastfeeding, active moderate-to-severe eyes."],["Before thyroidectomy","Normal thyroid function, Lugol 7–10 days."],["Symptoms","Propranolol."]],
exam:["Thiamazole first; dose by severity; 12–18 months.","Propylthiouracil: first trimester, storm; liver risk.","Agranulocytosis: stop; no re-challenge.","Radioactive iodine: contraindications; eyes; levothyroxine after.","Total thyroidectomy: large goitre, eyes, pregnancy wish; Lugol before."],
finalHtml:`<div data-widget="spot" data-set="t1e"></div><div data-widget="termdeck" data-set="t1e"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>6. Toxic adenoma and toxic multinodular goitre.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t1f')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 1 (Prof. Ionela Pascanu, UMCH 2026), pages 46–52; American Thyroid Association guideline (Ross et al., Thyroid 2016); European Thyroid Association Graves guideline (2018). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t1e=T1E;
