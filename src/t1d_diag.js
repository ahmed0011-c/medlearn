/* ===== Thyroid · Lecture 6 part 1 · 4: Diagnosis and differential diagnosis (lecture pages 38–45) ===== */
Object.assign(GLOSSARY,{
doppler:{l:"colour Doppler ultrasound",c:"test",d:"Ultrasound that shows blood flow in colour.",w:"Graves disease: 'thyroid inferno' (very high flow); thyroiditis: low flow."},
esr:{l:"erythrocyte sedimentation rate",c:"test",d:"Blood test of inflammation.",w:"Very high in subacute thyroiditis."},
hcg:{l:"human chorionic gonadotropin",c:"hormone",d:"Pregnancy hormone that weakly stimulates the thyroid-stimulating hormone receptor.",w:"Causes gestational transient thyrotoxicosis in early pregnancy."}
});
XTREE.thyrodx={t:"Find the cause of thyrotoxicosis",start:"a",n:{
a:{q:"Thyroid-stimulating hormone low, free thyroxine or triiodothyronine high. Obvious Graves signs (orbitopathy, diffuse goitre)?",o:[["Yes","=<b>Graves disease</b> on clinical grounds; confirm with thyroid-stimulating hormone receptor antibodies (American Thyroid Association)."],["No","b"]]},
b:{q:"Thyroid-stimulating hormone receptor antibodies?",o:[["Positive","=<b>Graves disease</b>."],["Negative","c"]]},
c:{q:"Scintigraphy (or Doppler ultrasound): uptake?",o:[["Diffuse high","=Graves disease with negative antibodies (uncommon), or rarely thyroid-stimulating hormone-driven disease."],["One hot nodule","=<b>Toxic adenoma</b>."],["Several hot areas","=<b>Toxic multinodular goitre</b>."],["Low or absent","d"]]},
d:{q:"Low uptake. Painful tender thyroid, high erythrocyte sedimentation rate?",o:[["Yes","=<b>Subacute (de Quervain) thyroiditis</b>."],["No, painless; postpartum or on amiodarone, lithium, interferon or checkpoint inhibitors","=<b>Painless or drug-induced thyroiditis</b>."],["No, low thyroglobulin","=<b>Exogenous thyroid hormone</b>."]]}}};
XS.t1d=["Spot the error",[["Thyroid-stimulating hormone receptor antibodies confirm Graves disease.",1],["Scintigraphy is safe in pregnancy.",0,"Wrong: radioactive tracers are <b>avoided in pregnancy and breastfeeding</b>; use antibodies and Doppler ultrasound."],["Subacute thyroiditis has a high erythrocyte sedimentation rate and low uptake.",1],["High-dose biotin can make thyroid tests look like Graves disease.",1]]];
XT.t1d="trab,antitpo,scinti,uptake,doppler,esr,tg,hcg,factitious";
const T1D={
meta:"Endocrinology › Thyroid › Lecture 6 part 1 › Subsection 6.1.4 · lecture pages 38–45 · ⏱ about 15 minutes in 3 bite-sized steps",
intro:`<p>Low thyroid-stimulating hormone tells you there is too much hormone; it does not tell you why. Antibodies, uptake and a few extra tests separate the causes, and that decides treatment.</p>`,
goals:["Order tests in a sensible sequence","Interpret antibodies, uptake and Doppler","Avoid pitfalls"],
cards:[
{id:"dx1",title:"Confirm thyrotoxicosis",min:4,goal:0,obj:["Use thyroid-stimulating hormone, free thyroxine and triiodothyronine"],html:`
<div class="scene"><b>The scene:</b> A 52-year-old woman with palpitations. Thyroid-stimulating hormone 0.02 mU/L, free thyroxine 22 pmol/L (top normal), free triiodothyronine 9.8 pmol/L (high).</div>
<p>Thyroid-stimulating hormone first; then [[fT4]] and free [[t3]] (triiodothyronine is needed to find triiodothyronine toxicosis). Check for interference (biotin, heterophile antibodies) when tests do not fit the patient.</p>
<div class="hint">💡 <b>"If free thyroxine is normal, ask for triiodothyronine."</b></div>
<details class="chk"><summary>✋ Checkpoint: her diagnosis?</summary><p>Triiodothyronine toxicosis (low thyroid-stimulating hormone, normal free thyroxine, high triiodothyronine).</p></details>`,
recap:["Thyroid-stimulating hormone, then free thyroxine and triiodothyronine.","Triiodothyronine toxicosis is easy to miss.","Think interference when tests don't fit."],
quiz:[{q:"Low thyroid-stimulating hormone, normal free thyroxine, high triiodothyronine?",o:["Triiodothyronine toxicosis","Subclinical","Normal"],a:0,e:"Definition."},{q:"Supplement that interferes?",o:["Biotin","Vitamin C","Magnesium"],a:0,e:"Biotin."}]},
{id:"dx2",title:"Find the cause",min:6,goal:1,obj:["Use the algorithm"],html:`
<div class="scene"><b>The scene:</b> No eye signs, small goitre.</div>
<ul><li>[[trab]]: positive → Graves disease (high sensitivity and specificity).</li><li>[[antitpo]]: common in autoimmune thyroid disease, not specific.</li><li>[[scinti]]: diffuse high (Graves), focal (adenoma), patchy (multinodular), low (thyroiditis, iodine, tablets).</li><li>[[doppler]]: high flow in Graves, low in destructive thyroiditis; useful when scintigraphy is not possible.</li><li>[[esr]]: high in subacute thyroiditis.</li><li>[[tg]]: low in exogenous intake.</li></ul>
<div data-widget="tree" data-set="thyrodx"></div>
<div class="hint">💡 <b>"Antibodies first, uptake if negative."</b></div>
<details class="chk"><summary>✋ Checkpoint: pregnant and thyrotoxic: which tests?</summary><p>Thyroid-stimulating hormone receptor antibodies and ultrasound; no scintigraphy.</p></details>`,
recap:["Antibodies diagnose Graves.","Scintigraphy separates hot nodules and low-uptake causes.","Doppler, erythrocyte sedimentation rate and thyroglobulin help."],
quiz:[{q:"Hot single nodule?",o:["Toxic adenoma","Graves","Thyroiditis"],a:0,e:"Focal."},{q:"Low uptake, painful thyroid?",o:["Subacute thyroiditis","Graves","Toxic adenoma"],a:0,e:"Destructive."}]},
{id:"dx3",title:"Differential diagnosis",min:4,goal:2,obj:["Know mimics"],html:`
<div class="scene"><b>The scene:</b> A 24-year-old with anxiety, tremor and palpitations has a normal thyroid-stimulating hormone.</div>
<p><b>Clinical mimics:</b> anxiety and panic, phaeochromocytoma, drugs (caffeine, stimulants, salbutamol), menopause, cancer or diabetes (weight loss), heart arrhythmias.</p>
<p><b>Lab mimics:</b> low thyroid-stimulating hormone from illness, glucocorticoids, dopamine; first trimester [[hcg]]; recovery after treatment; high free thyroxine with heparin (in vitro), amiodarone, assay interference.</p>
<div class="hint">💡 <b>"Normal thyroid-stimulating hormone rules out primary thyrotoxicosis."</b></div>
<details class="chk"><summary>✋ Checkpoint: why is thyroid-stimulating hormone low in the first trimester?</summary><p>Human chorionic gonadotropin stimulates the thyroid.</p></details>`,
recap:["Normal thyroid-stimulating hormone rules out primary thyrotoxicosis.","Mimics: anxiety, phaeochromocytoma, drugs.","Lab traps: illness, steroids, pregnancy, interference."],
quiz:[{q:"Normal thyroid-stimulating hormone in an anxious patient…",o:["Rules out primary thyrotoxicosis","Proves Graves","Needs scintigraphy"],a:0,e:"Sensitive test."},{q:"Drug that lowers thyroid-stimulating hormone?",o:["Glucocorticoids","Paracetamol","Penicillin"],a:0,e:"Also dopamine."}]}],
cases:[{id:"dxk1",title:"Case 1: No eye signs",steps:[
{t:`<b>The scene:</b> 52-year-old woman, triiodothyronine toxicosis, antibodies negative. Scintigraphy: one hot nodule, rest suppressed.`,q:"Diagnosis?",o:["Toxic adenoma","Graves","Thyroiditis"],a:0,e:"Focal uptake."}],take:["Antibodies negative → scintigraphy."]},
{id:"dxk2",title:"Case 2: Painful neck",steps:[
{t:`<b>The scene:</b> 38-year-old woman, sore throat 3 weeks ago, now painful tender thyroid, fever, erythrocyte sedimentation rate 80 mm/h, thyroid-stimulating hormone suppressed.`,q:"Uptake expected?",o:["Low","High"],a:0,e:"Subacute thyroiditis."}],take:["Pain plus high inflammation plus low uptake = subacute thyroiditis."]}],
flash:[["Graves test","Thyroid-stimulating hormone receptor antibodies."],["Scintigraphy diffuse high","Graves."],["Single hot nodule","Toxic adenoma."],["Patchy hot","Toxic multinodular goitre."],["Low uptake","Thyroiditis, iodine, tablets."],["Pregnancy","No scintigraphy; antibodies and ultrasound."],["Doppler high flow","Graves."],["Exogenous clue","Low thyroglobulin."],["Interference","Biotin, heterophile antibodies."],["Rules out primary thyrotoxicosis","Normal thyroid-stimulating hormone."]],
exam:["Thyroid-stimulating hormone, free thyroxine and triiodothyronine.","Antibodies, then scintigraphy if negative.","Doppler, erythrocyte sedimentation rate, thyroglobulin.","No scintigraphy in pregnancy.","Mimics and lab traps."],
finalHtml:`<div data-widget="spot" data-set="t1d"></div><div data-widget="termdeck" data-set="t1d"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>5. Treating Graves disease.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t1e')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 1 (Prof. Ionela Pascanu, UMCH 2026), pages 38–45; American Thyroid Association guideline (2016); European Thyroid Association Graves guideline (Kahaly et al., 2018). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t1d=T1D;
