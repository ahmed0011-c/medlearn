/* ===== Thyroid · Lecture 6 part 2 · 3: Cretinism and prophylaxis (lecture pages 18–23) ===== */
Object.assign(GLOSSARY,{
neurocret:{l:"neurological cretinism",c:"disease",d:"Brain damage from low maternal thyroxine in early pregnancy: intellectual disability, deafness and mutism, squint, spastic legs; usually normal thyroid function later.",w:"Prevented only by iodine before or early in pregnancy."},
myxcret:{l:"myxoedematous cretinism",c:"disease",d:"Severe hypothyroidism in the baby and child: short stature, puffy dry skin, delayed development, often no goitre.",w:"Selenium deficiency and thiocyanate contribute in Central Africa."},
iodoil:{l:"iodised oil",c:"drug",d:"Long-acting iodine in oil, given by mouth or injection once a year or so.",w:"For remote areas without access to iodised salt."},
cht:{l:"congenital hypothyroidism",c:"disease",d:"Underactive thyroid present at birth (missing, small or faulty gland).",w:"Detected by newborn screening; early levothyroxine allows normal development."}
});
XSORT.cret={t:"Neurological or myxoedematous cretinism?",labels:["Neurological","Myxoedematous"],items:[["Deafness and mutism",0,"Typical neurological feature."],["Spastic legs and squint",0,"Damage to the developing brain."],["Very short stature and puffy dry skin",1,"Ongoing hypothyroidism."],["Usually normal thyroid function later",0,"Damage happened before birth."],["Low thyroid hormones in childhood",1,"Thyroid destroyed or failing."],["Damage happens in the first half of pregnancy",0,"Maternal thyroxine is the only source then."]]};
XS.cret=["Spot the error",[["World Health Organization recommends 20–40 mg iodine per kg of salt.",1],["Pregnant women should take about 150 µg iodine daily as a supplement.",1],["Cabbage-family vegetables are the main cause of goitre worldwide.",0,"Wrong: iodine deficiency is the main cause; goitrogens matter mainly when iodine is already low."],["Neurological cretinism can be fully reversed with levothyroxine after birth.",0,"Wrong: the damage happens before birth and is <b>permanent</b>; only prevention works."]]];
XT.cret="cretin,neurocret,myxcret,goitrogen,usi,iodoil,cht,nbs,uic";
const T2C={
meta:"Endocrinology › Thyroid › Lecture 6 part 2 › Subsection 6.2.3 · lecture pages 18–23 · ⏱ about 15 minutes in 3 bite-sized steps",
intro:`<p>The most tragic effect of iodine deficiency is cretinism, and it is entirely preventable. This subsection explains the two forms, the goitrogens that make deficiency worse, and how prophylaxis works.</p>`,
goals:["Compare the two forms of cretinism","Name the goitrogens","Know prophylaxis targets"],
cards:[
{id:"cr1",title:"Two kinds of cretinism",min:5,goal:0,obj:["Explain the timing","Sort features"],html:`
<div class="scene"><b>The scene:</b> In the village, a 14-year-old boy cannot hear or speak and walks with stiff legs. His thyroid tests are normal. His cousin is very short with puffy skin and low thyroid hormones.</div>
<p>In the first half of pregnancy the fetus depends entirely on <b>maternal thyroxine</b>. Too little → permanent brain damage.</p>
<ul><li>[[neurocret]].</li><li>[[myxcret]].</li></ul>
<div data-widget="sortset" data-set="cret"></div>
<p>Today in iodine-sufficient countries: [[cht]] is found by [[nbs]] (thyroid-stimulating hormone in the heel-prick test), and treated within the first 2 weeks.</p>
<div class="hint">💡 <b>"Neurological = brain before birth; myxoedematous = thyroid after birth."</b></div>
<details class="chk"><summary>✋ Checkpoint: why is the boy's thyroid normal?</summary><p>The damage was done before birth by low maternal thyroxine.</p></details>`,
recap:["Neurological: deaf-mute, spastic, squint, euthyroid.","Myxoedematous: short, puffy, hypothyroid.","Newborn screening detects congenital hypothyroidism."],
quiz:[{q:"Deaf-mutism and spastic legs?",o:["Neurological cretinism","Myxoedematous cretinism"],a:0,e:"Brain damage before birth."},{q:"Main source of thyroxine for the fetus early in pregnancy?",o:["Mother","Fetal thyroid","Placenta makes it"],a:0,e:"The fetal thyroid starts working around mid-pregnancy."}]},
{id:"cr2",title:"Goitrogens: making deficiency worse",min:4,goal:1,obj:["Name the goitrogens and their mechanisms"],html:`
<div class="scene"><b>The scene:</b> Why are goitres worse in regions that eat a lot of cassava?</div>
<ul><li><b>Thiocyanate</b> (cassava, smoking): blocks the [[nis]].</li><li><b>Goitrin</b> (cabbage family, rapeseed): blocks hormone synthesis.</li><li><b>Perchlorate</b> (pollution, some fertilisers): blocks the [[nis]].</li><li><b>Selenium deficiency</b>: impairs deiodinases and antioxidant protection; plays a role in myxoedematous cretinism.</li><li>Iron deficiency (thyroid peroxidase is a haem enzyme), some drugs (lithium).</li></ul>
<div class="corr">📝 <b>Slide check (goitrogen and colloid slides):</b> small typos: "coloid" should be <b>colloid</b>; "Goitrinis" should be <b>goitrin</b>.</div>
<div class="hint">💡 <b>"Cassava, cabbage, cigarettes."</b></div>
<details class="chk"><summary>✋ Checkpoint: why does iron deficiency worsen goitre?</summary><p>Thyroid peroxidase needs haem iron.</p></details>`,
recap:["Thiocyanate and perchlorate block iodide trapping.","Goitrin blocks synthesis.","Selenium and iron deficiency add to it."],
quiz:[{q:"Cassava contains…",o:["Thiocyanate precursors","Goitrin","Perchlorate"],a:0,e:"Cyanogenic glycosides → thiocyanate."},{q:"Which mineral deficiency contributes to myxoedematous cretinism?",o:["Selenium","Zinc","Copper"],a:0,e:"Selenium."}]},
{id:"cr3",title:"Prophylaxis",min:5,goal:2,obj:["Know salt iodisation targets","Plan supplements"],html:`
<div class="scene"><b>The scene:</b> The health ministry plans an iodine programme.</div>
<ul><li>[[usi]]: <b>20–40 mg iodine per kg salt</b> (World Health Organization 2014).</li><li>[[iodoil]] in remote areas without iodised salt.</li><li><b>Pregnancy and breastfeeding:</b> supplement about 150 µg iodine daily (American Thyroid Association), ideally starting before conception.</li><li><b>Monitor:</b> median urinary iodine (target 100–199 µg/L in schoolchildren), newborn thyroid-stimulating hormone.</li><li><b>Watch for:</b> iodine-induced hyperthyroidism in older people with nodular goitres when a programme starts.</li></ul>
<div class="corr">📝 <b>Slide check (page 23):</b> the slide gives "20–50 mg/kg". The World Health Organization guideline (2014) recommends <b>20–40 mg iodine per kg of salt</b>, adjusted to local salt intake.</div>
<div class="hint">💡 <b>"Twenty to forty in the salt, one-fifty in the pregnant woman."</b></div>
<details class="chk"><summary>✋ Checkpoint: who is at risk when a new iodine programme starts?</summary><p>Older people with long-standing nodular goitres (iodine-induced hyperthyroidism).</p></details>`,
recap:["Salt: 20–40 mg/kg.","Pregnancy: 150 µg supplement daily.","Monitor urinary iodine and watch for iodine-induced hyperthyroidism."],
quiz:[{q:"World Health Organization salt iodine level?",o:["20–40 mg/kg","2–4 mg/kg","200–400 mg/kg"],a:0,e:"2014 guideline."},{q:"Pregnancy supplement?",o:["About 150 µg daily","5 mg daily","None"],a:0,e:"ATA."}]}],
cases:[{id:"crk1",title:"Case 1: The programme",steps:[
{t:`<b>The scene:</b> A deficient region starts salt iodisation. Six months later, several elderly people with old goitres have weight loss and palpitations.`,q:"Cause?",o:["Iodine-induced hyperthyroidism","Graves disease epidemic","Cretinism"],a:0,e:"Autonomous nodules."}],take:["Prophylaxis is safe for most, but watch older goitres."]},
{id:"crk2",title:"Case 2: Planning a pregnancy",steps:[
{t:`<b>The scene:</b> A woman planning pregnancy uses only non-iodised salt.`,q:"Advice?",o:["Start iodine 150 µg daily now","Wait until the third trimester","No need"],a:0,e:"Early pregnancy matters most."}],take:["Start iodine before conception."]}],
flash:[["Neurological cretinism","Deaf-mute, spastic, squint; euthyroid."],["Myxoedematous cretinism","Short, puffy, hypothyroid."],["Fetal thyroxine source early in pregnancy","Mother."],["Thiocyanate source","Cassava, smoking."],["Goitrin source","Cabbage family."],["Salt iodine (World Health Organization)","20–40 mg/kg."],["Pregnancy supplement","150 µg daily."],["Remote areas","Iodised oil."],["Risk of programmes","Iodine-induced hyperthyroidism in old goitres."],["Modern detection","Newborn thyroid-stimulating hormone screening."]],
exam:["Neurological cretinism (prenatal, maternal thyroxine) vs myxoedematous (postnatal hypothyroidism).","Goitrogens: thiocyanate, goitrin, perchlorate; selenium and iron deficiency.","Salt 20–40 mg/kg (slide says 20–50).","Pregnancy: need 250 µg daily, so give a 150 µg potassium iodide supplement.","Watch for iodine-induced hyperthyroidism."],
finalHtml:`<div data-widget="spot" data-set="cret"></div><div data-widget="termdeck" data-set="cret"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>4. Thyroid nodules.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t2d')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 2 (Prof. Ionela Pascanu, UMCH 2026), pages 18–23; World Health Organization guideline on fortification of food-grade salt with iodine (2014); American Thyroid Association pregnancy guideline (2017); Zimmermann, Endocr Rev 2009. Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t2c=T2C;
