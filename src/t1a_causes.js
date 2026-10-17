/* ===== Thyroid · Lecture 6 part 1 · 1: Definitions and causes (lecture pages 2–6) ===== */
Object.assign(GLOSSARY,{
thyrotox:{l:"thyrotoxicosis",c:"disease",d:"The clinical state caused by too much thyroid hormone acting on tissues, whatever the source.",w:"Umbrella term: includes hyperthyroidism, thyroiditis and too many tablets."},
hyperthy:{l:"hyperthyroidism",c:"disease",d:"Thyrotoxicosis caused by an overactive thyroid that makes and releases too much hormone.",w:"Graves disease, toxic nodules; high uptake on scintigraphy."},
subhyper:{l:"subclinical hyperthyroidism",c:"disease",d:"Low thyroid-stimulating hormone with normal free thyroxine and triiodothyronine.",w:"Treat if thyroid-stimulating hormone is below 0.1 mU/L in older people or those with heart or bone risk."},
t3tox:{l:"triiodothyronine toxicosis",c:"disease",d:"Thyrotoxicosis with high triiodothyronine but normal free thyroxine.",w:"Early Graves disease, toxic nodules, iodine deficiency."},
uptake:{l:"radioiodine uptake",c:"test",d:"How much tracer the thyroid traps (iodine-123 or technetium scan).",w:"High in hyperthyroidism; low in thyroiditis, iodine excess or too many tablets."},
factitious:{l:"factitious thyrotoxicosis",c:"disease",d:"Thyrotoxicosis from taking (often hidden) thyroid hormone.",w:"Low thyroglobulin, low uptake, no goitre."},
struma:{l:"struma ovarii",c:"disease",d:"Ovarian tumour containing thyroid tissue that can make hormone.",w:"Rare cause of thyrotoxicosis with low neck uptake."}
});
XSORT.uptake={t:"High or low uptake on scintigraphy?",labels:["High (gland overactive)","Low (no overproduction in the neck)"],items:[["Graves disease",0,"Diffuse high uptake."],["Toxic multinodular goitre",0,"Patchy hot areas."],["Toxic adenoma",0,"One hot nodule, rest suppressed."],["Subacute thyroiditis",1,"Damaged cells leak stored hormone."],["Postpartum painless thyroiditis",1,"Destructive phase."],["Too much levothyroxine",1,"Gland suppressed."],["Amiodarone type 2 thyrotoxicosis",1,"Destructive."],["Thyroid-stimulating hormone-secreting pituitary adenoma",0,"Gland driven from above."]]};
XPAT.tfts={t:"Read the thyroid tests",cols:["Thyroid-stimulating hormone","Free thyroxine","Free triiodothyronine"],rows:[["Overt primary hyperthyroidism",["↓↓","↑","↑"],"Classic pattern."],["Subclinical hyperthyroidism",["↓","≈","≈"],"Only the pituitary notices."],["Triiodothyronine toxicosis",["↓↓","≈","↑"],"Early Graves or toxic nodule."],["Thyroid-stimulating hormone-secreting adenoma",["≈ or ↑","↑","↑"],"Inappropriately normal or raised: central cause."],["Primary hypothyroidism",["↑","↓","≈ or ↓"],"For contrast."]]};
XS.t1a=["Spot the error",[["Every hyperthyroidism is thyrotoxicosis, but not every thyrotoxicosis is hyperthyroidism.",1],["Subacute thyroiditis shows high uptake on scintigraphy.",0,"Wrong: uptake is <b>low</b>; hormone leaks from damaged cells."],["Graves disease is the most common cause in iodine-sufficient regions.",1],["Thyroid-stimulating hormone is the best single screening test.",1]]];
XT.t1a="thyrotox,hyperthy,subhyper,t3tox,tshx,fT4,t3,uptake,scinti,factitious,struma";
const T1A={
meta:"Endocrinology › Thyroid › Lecture 6 part 1 › Subsection 6.1.1 · lecture pages 2–6 · ⏱ about 15 minutes in 3 bite-sized steps",
intro:`<p>Before treating an overactive thyroid, sort out three things: is there really too much hormone, is the gland making it (or leaking it), and which disease is behind it? This subsection gives you the vocabulary and the map of causes.</p>`,
goals:["Separate thyrotoxicosis from hyperthyroidism","Read thyroid function patterns","Sort causes by uptake"],
cards:[
{id:"ty1",title:"Thyrotoxicosis versus hyperthyroidism",min:4,goal:0,obj:["Define both terms","Know how common it is"],html:`
<div class="scene"><b>The scene:</b> A 29-year-old woman has lost 6 kg, sweats, and her heart races. Her thyroid-stimulating hormone is undetectable. Her friend says: "So you have hyperthyroidism." Maybe, maybe not.</div>
<p>[[thyrotox]] = too much hormone effect. [[hyperthy]] = the gland overproduces. Thyroiditis or too many tablets cause thyrotoxicosis <b>without</b> hyperthyroidism.</p>
<p>Overt hyperthyroidism affects roughly 0.2–1.3% of people in iodine-sufficient regions (Taylor et al., 2018), much more often women.</p>
<div class="hint">💡 <b>"All hyper is toxic, but not all toxic is hyper."</b></div>
<details class="chk"><summary>✋ Checkpoint: name a cause of thyrotoxicosis without hyperthyroidism.</summary><p>Subacute thyroiditis, painless thyroiditis, too much levothyroxine.</p></details>`,
recap:["Thyrotoxicosis = hormone effect; hyperthyroidism = overactive gland.","Thyroiditis and tablets cause thyrotoxicosis without hyperthyroidism.","More common in women."],
quiz:[{q:"Too much levothyroxine causes…",o:["Thyrotoxicosis without hyperthyroidism","Hyperthyroidism","Hypothyroidism"],a:0,e:"The gland is suppressed."},{q:"Best screening test?",o:["Thyroid-stimulating hormone","Total thyroxine","Calcitonin"],a:0,e:"Most sensitive."}]},
{id:"ty2",title:"Reading the blood tests",min:5,goal:1,obj:["Interpret patterns"],html:`
<div class="scene"><b>The scene:</b> Her results: thyroid-stimulating hormone below 0.01 mU/L, free thyroxine 38 pmol/L (high), free triiodothyronine 14 pmol/L (high).</div>
<p>Thyroid-stimulating hormone falls with even small hormone excess, so it is the first test. Then [[fT4]] and free [[t3]].</p>
<ul><li>[[subhyper]]: low thyroid-stimulating hormone only.</li><li>[[t3tox]].</li><li>Normal or high thyroid-stimulating hormone with high hormones: think central cause, thyroid hormone resistance or assay interference (biotin!).</li></ul>
<div data-widget="pattern" data-set="tfts"></div>
<div class="hint">💡 <b>"Thyroid-stimulating hormone low and hormones high: the thyroid is the culprit. Both high: look upstairs."</b></div>
<details class="chk"><summary>✋ Checkpoint: which supplement can falsely change thyroid tests?</summary><p>Biotin (high doses interfere with many immunoassays).</p></details>`,
recap:["Thyroid-stimulating hormone first.","Low thyroid-stimulating hormone + high hormones = primary.","Normal/high thyroid-stimulating hormone + high hormones = central, resistance or interference."],
quiz:[{q:"Low thyroid-stimulating hormone, normal hormones?",o:["Subclinical hyperthyroidism","Overt","Central"],a:0,e:"Definition."},{q:"High thyroid-stimulating hormone and high free thyroxine suggest…",o:["Thyroid-stimulating hormone-secreting adenoma or resistance","Graves disease","Thyroiditis"],a:0,e:"Central or resistance."}]},
{id:"ty3",title:"The map of causes",min:5,goal:2,obj:["Sort causes by uptake"],html:`
<div class="scene"><b>The scene:</b> Her scintigraphy shows diffusely high uptake.</div>
<ul><li><b>High uptake (gland makes too much):</b> Graves disease (most common in iodine-sufficient areas), toxic multinodular goitre and toxic adenoma (more common in iodine-deficient areas), thyroid-stimulating hormone-secreting adenoma, human chorionic gonadotropin (pregnancy, molar pregnancy).</li><li><b>Low uptake:</b> thyroiditis (subacute, painless, postpartum, drug-induced), iodine excess, amiodarone type 2, [[factitious]], [[struma]].</li></ul>
<div data-widget="sortset" data-set="uptake"></div>
<div class="hint">💡 <b>"Hot gland makes it; cold gland leaks it (or you swallowed it)."</b></div>
<details class="chk"><summary>✋ Checkpoint: why do antithyroid drugs not help in thyroiditis?</summary><p>No new hormone is being made; stored hormone is leaking.</p></details>`,
recap:["High uptake: Graves, toxic nodules, central, human chorionic gonadotropin.","Low uptake: thyroiditis, iodine, tablets.","Antithyroid drugs only help high-uptake causes."],
quiz:[{q:"Most common cause in iodine-sufficient areas?",o:["Graves disease","Toxic adenoma","Struma ovarii"],a:0,e:"Graves."},{q:"Low uptake cause?",o:["Painless thyroiditis","Graves disease","Toxic adenoma"],a:0,e:"Destructive."}]}],
cases:[{id:"tyk1",title:"Case 1: Thin and shaky",steps:[
{t:`<b>The scene:</b> 29-year-old woman, thyroid-stimulating hormone below 0.01, free thyroxine and triiodothyronine high, diffusely high uptake.`,q:"Category?",o:["Hyperthyroidism with high uptake","Thyroiditis","Factitious"],a:0,e:"Overactive gland; Graves disease likely."}],take:["Tests, then uptake, then cause."]},
{id:"tyk2",title:"Case 2: The gym supplement",steps:[
{t:`<b>The scene:</b> 34-year-old man with weight loss and palpitations. Thyroid-stimulating hormone suppressed, free thyroxine high, no goitre, very low uptake, thyroglobulin very low.`,q:"Likely cause?",o:["Hidden thyroid hormone intake","Graves disease","Toxic adenoma"],a:0,e:"Low thyroglobulin points to an external source."}],take:["Low uptake plus low thyroglobulin: think tablets."]}],
flash:[["Thyrotoxicosis","Too much thyroid hormone effect."],["Hyperthyroidism","Overactive gland."],["First test","Thyroid-stimulating hormone."],["Subclinical","Low thyroid-stimulating hormone, normal hormones."],["Triiodothyronine toxicosis","High triiodothyronine, normal thyroxine."],["High uptake causes","Graves, toxic nodules, central, human chorionic gonadotropin."],["Low uptake causes","Thyroiditis, iodine, tablets."],["Factitious clue","Low thyroglobulin."],["Biotin","Interferes with immunoassays."],["Central clue","Normal or high thyroid-stimulating hormone with high hormones."]],
exam:["Thyrotoxicosis vs hyperthyroidism.","Thyroid-stimulating hormone first; patterns.","High vs low uptake causes.","Graves most common (iodine-sufficient); nodular more in deficient areas.","Antithyroid drugs only for high-uptake disease."],
finalHtml:`<div data-widget="spot" data-set="t1a"></div><div data-widget="termdeck" data-set="t1a"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>2. Graves disease: cause and clinical picture.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t1b')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 1 (Prof. Ionela Pascanu, UMCH 2026), pages 2–6; American Thyroid Association hyperthyroidism guideline (Ross et al., Thyroid 2016); Taylor et al., Nat Rev Endocrinol 2018 (epidemiology). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t1a=T1A;
