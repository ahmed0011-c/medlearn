/* ===== Thyroid · Lecture 6 part 2 · 1: Iodine deficiency disorders (lecture pages 3–10) ===== */
XSTEP.goax={t:"How low iodine makes a goitre",svg:`<svg viewBox="0 0 720 300" style="width:100%" role="img" aria-label="Thyroid axis in iodine deficiency">
<g data-k="hyp">${BX(40,20,170,46,"#efe7ff","#7b3fc4",["Hypothalamus","thyrotropin-releasing hormone"],12)}</g>
<g data-k="pit">${BX(40,110,170,46,"#e5f0ff","#2f6fdb",["Pituitary","thyroid-stimulating hormone"],12)}<line x1="125" y1="66" x2="125" y2="108" stroke="#7b3fc4" stroke-width="3" marker-end="url(#ga)"/></g>
<g data-k="iod"><circle cx="560" cy="45" r="30" fill="#fff4cc" stroke="#d9a400" stroke-width="2"/><text x="560" y="42" text-anchor="middle" font-size="12" font-weight="700">iodine</text><text x="560" y="57" text-anchor="middle" font-size="11">↓ in food</text><line x1="540" y1="72" x2="480" y2="190" stroke="#d9a400" stroke-width="3" stroke-dasharray="6 4" marker-end="url(#gy)"/></g>
<g data-k="thy"><path d="M330 210 q-60 -10 -60 40 q0 45 60 35 q30 -10 40 -30 q10 20 40 30 q60 10 60 -35 q0 -50 -60 -40 q-25 5 -40 25 q-15 -20 -40 -25z" fill="#ffd9d9" stroke="#c62828" stroke-width="2.5"/><text x="370" y="290" text-anchor="middle" font-size="12" font-weight="700">thyroid</text><line x1="210" y1="133" x2="300" y2="210" stroke="#2f6fdb" stroke-width="3" marker-end="url(#gb)"/></g>
<g data-k="low"><text x="480" y="130" font-size="12" font-weight="700" fill="#c62828">less thyroxine</text><text x="480" y="146" font-size="12" fill="#c62828">(relatively more triiodothyronine)</text><path d="M440 205 Q300 150 215 140" fill="none" stroke="#c62828" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#gr)"/><text x="285" y="168" font-size="11" fill="#c62828">weak feedback</text></g>
<g data-k="grow"><text x="490" y="215" font-size="12" font-weight="700" fill="#1f9d55">thyroid-stimulating hormone ↑</text><text x="490" y="231" font-size="12"  fill="#1f9d55">(may stay within range)</text><text x="490" y="247" font-size="12"  fill="#1f9d55">+ local growth factors</text><text x="490" y="263" font-size="12" font-weight="700" fill="#1f9d55">→ goitre, later nodules</text></g>
<defs>${MK("ga","#7b3fc4")}${MK("gb","#2f6fdb")}${MK("gy","#d9a400")}${MK("gr","#c62828")}</defs></svg>`,
steps:[["The normal axis","Thyrotropin-releasing hormone → thyroid-stimulating hormone → the thyroid makes thyroxine and triiodothyronine, which feed back.",["hyp","pit","thy"]],
["Iodine falls","Less iodine reaches the thyroid, trapped by the sodium-iodide symporter.",["hyp","pit","thy","iod"]],
["Less hormone","The thyroid makes less thyroxine and switches to relatively more triiodothyronine (which needs less iodine). Feedback weakens.",["hyp","pit","thy","iod","low"]],
["Growth","Thyroid-stimulating hormone (via cyclic AMP) and local growth factors make the cells multiply: diffuse goitre, later nodules and autonomy.",["hyp","pit","thy","iod","low","grow"]],
["Overview","Iodine deficiency is a growth stimulus first and a hormone problem second.","all"]]};
XCALC.uic={t:"Population iodine status from median urinary iodine",inp:[["grp","Group","s",[["School-age children and non-pregnant adults","s"],["Pregnant women","p"],["Breastfeeding women, children under 2","l"]]],["u","Median urinary iodine","n",[10,600,5,85,"µg/L"]]],
f:v=>{const u=v.u;if(v.grp=="s")return u<20?"🔴 <b>Severe deficiency</b> (below 20).":u<50?"🔴 <b>Moderate deficiency</b> (20–49).":u<100?"🟠 <b>Mild deficiency</b> (50–99).":u<200?"🟢 <b>Adequate</b> (100–199).":u<300?"🟡 <b>Above requirements</b> (200–299): fine for most, small risk in people with nodules.":"🔴 <b>Excessive</b> (300 or more): risk of iodine-induced hyperthyroidism and autoimmune thyroid disease.";
if(v.grp=="p")return u<150?"🔴 <b>Insufficient</b> for pregnancy (below 150).":u<250?"🟢 <b>Adequate</b> (150–249).":u<500?"🟡 <b>Above requirements</b> (250–499).":"🔴 <b>Excessive</b> (500 or more).";
return u<100?"🟠 <b>Insufficient</b> (below 100).":"🟢 <b>Adequate</b> (100 or more)."},note:"World Health Organization/UNICEF/International Council for Control of Iodine Deficiency Disorders criteria (2007; updated 2013). For populations only: a single person's spot urine varies widely day to day."};
XPK.idd={t:"Which iodine deficiency disorder?",opts:["Goitre","Neurological cretinism","Myxoedematous cretinism","Reduced intelligence quotient (mild deficiency)","Iodine-induced hyperthyroidism"],items:[
["A whole village has visible neck swellings","Goitre","The most visible sign of deficiency."],
["Child born to a severely deficient mother: deafness, squint, stiff legs, intellectual disability, normal thyroid function now","Neurological cretinism","Damage from low maternal thyroxine in early pregnancy."],
["Child with short stature, puffy dry skin and delayed development, low thyroid hormones","Myxoedematous cretinism","Ongoing hypothyroidism after birth."],
["Schoolchildren in a mildly deficient region score a few points lower on tests","Reduced intelligence quotient (mild deficiency)","Even mild deficiency affects brain development."],
["Older man with a nodular goitre becomes thyrotoxic after salt iodisation starts","Iodine-induced hyperthyroidism","Autonomous nodules suddenly receive enough iodine."]]};
XS.idd=["Spot the error",[["Thyroid-stimulating hormone acts on thyroid cells through cyclic AMP.",1],["Thyroid-stimulating hormone acts through cyclic GMP.",0,"Wrong: the thyroid-stimulating hormone receptor is coupled to G<sub>s</sub> → <b>cyclic AMP</b> (and partly phospholipase C)."],["Pregnant women need about 250 micrograms of iodine per day.",1],["Urinary iodine in one spot sample diagnoses deficiency in one person.",0,"Wrong: it is a <b>population</b> measure; individual values vary a lot."]]];
XT.idd="iodine,nis,tpo,tg,colloid,t4,t3,tshx,trh,idd,uic,gtr,goitrogen,cretin,usi";
const T2A={
meta:"Endocrinology › Thyroid › Lecture 6 part 2 › Subsection 6.2.1 · lecture pages 3–10 · ⏱ about 20 minutes in 4 bite-sized steps",
intro:`<p>Iodine is the raw material of thyroid hormone. When a whole region lacks it, a whole population develops goitres, and babies' brains are damaged before birth. This subsection covers how much we need, how deficiency is measured and how the thyroid reacts.</p>`,
goals:["Know daily iodine needs","List the iodine deficiency disorders","Read population urinary iodine values","Explain how deficiency causes goitre"],
cards:[
{id:"ig1",title:"How much iodine do we need?",min:4,goal:0,obj:["Give the World Health Organization daily needs","Name the main sources"],html:`
<div class="scene"><b>The scene:</b> A pregnant woman in a mountain village asks why she should use iodised salt. Her mother had a big neck; her neighbour's son is deaf and has learning problems.</div>
<p>[[iodine]] is trapped by the [[nis]], attached to [[tg]] by [[tpo]] and stored in the [[colloid]] as [[t4]] and [[t3]].</p>
<div class="tblwrap"><table><tr><th>Group</th><th>Daily need (World Health Organization)</th></tr><tr><td>Children 0–5 years</td><td>90 µg</td></tr><tr><td>Children 6–12 years</td><td>120 µg</td></tr><tr><td>Adolescents and adults</td><td>150 µg</td></tr><tr><td>Pregnant and breastfeeding women</td><td>250 µg</td></tr></table></div>
${FIG("iodinefood")}
<p>Sources: iodised salt, seafood, milk and eggs (iodine in animal feed), bread made with iodised salt. Soil in mountains and old flood plains is poor in iodine, so local crops are too.</p>
<div class="hint">💡 <b>"150 for you, 250 for two."</b></div>
<details class="chk"><summary>✋ Checkpoint: why does pregnancy need more iodine?</summary><p>The mother makes more thyroxine, the baby needs iodine for its own thyroid, and kidney losses rise.</p></details>`,
recap:["Adults 150 µg, pregnancy and breastfeeding 250 µg daily.","Main source: iodised salt.","Iodine-poor soils: mountains and flood plains."],
quiz:[{q:"Daily iodine need of an adult?",o:["50 µg","150 µg","1000 µg"],a:1,e:"150 µg."},{q:"In pregnancy?",o:["150 µg","250 µg","500 µg"],a:1,e:"250 µg."}]},
{id:"ig2",title:"The iodine deficiency disorders",min:5,goal:1,obj:["List the disorders by age","Recognise them in scenarios"],html:`
<div class="scene"><b>The scene:</b> Back in the village: goitres in adults, a deaf child, and a teacher who says pupils "learn slowly".</div>
<p>[[idd]] by life stage:</p><ul><li><b>Fetus:</b> miscarriage, stillbirth, congenital anomalies, neurological [[cretin|cretinism]].</li><li><b>Newborn and child:</b> hypothyroidism, goitre, reduced intelligence, slow growth.</li><li><b>Adult:</b> goitre and complications, hypothyroidism, [[jodbas]] when iodine is suddenly supplied.</li><li><b>All ages:</b> more uptake of radioactive iodine after nuclear accidents.</li></ul>
<div data-widget="pickset" data-set="idd"></div>
<div class="corr">📝 <b>Slide check (page 4):</b> the worldwide figure on the slide ("29% of the world population, 130 countries") comes from older World Health Organization surveys (early 2000s). Thanks to salt iodisation, far fewer countries are deficient today; for current numbers see the Iodine Global Network scorecard. I have not added a newer exact figure here.</div>
<div class="hint">💡 <b>"Iodine deficiency is the most common preventable cause of brain damage."</b></div>
<details class="chk"><summary>✋ Checkpoint: which stage is most vulnerable?</summary><p>The fetus (early brain development depends on maternal thyroxine).</p></details>`,
recap:["Fetus: miscarriage, cretinism.","Child: goitre, lower intelligence.","Adult: goitre, hypothyroidism, iodine-induced hyperthyroidism."],
quiz:[{q:"Most severe consequence?",o:["Goitre","Cretinism","Hoarseness"],a:1,e:"Permanent brain damage."},{q:"Iodine-induced hyperthyroidism happens in…",o:["People with autonomous nodules given iodine","Children only","Everyone with goitre"],a:0,e:"Jod-Basedow."}]},
{id:"ig3",title:"Measuring iodine status",min:5,goal:2,obj:["Use the median urinary iodine table"],html:`
<div class="scene"><b>The scene:</b> A public health team collects spot urine samples from 600 schoolchildren. Median: 85 µg/L.</div>
<p>About 90% of iodine leaves in urine, so the median [[uic]] of a population shows its intake. Other markers: goitre rate ([[whogr]]), newborn thyroid-stimulating hormone, thyroglobulin.</p>
<div data-widget="calc" data-set="uic"></div>
<div class="hint">💡 <b>School-age: 100–199 is right. Pregnancy: 150–249.</b></div>
<details class="chk"><summary>✋ Checkpoint: median 85 µg/L in schoolchildren. Status?</summary><p>Mild deficiency (50–99).</p></details>`,
recap:["Median urinary iodine for populations.","School-age adequate 100–199; pregnancy 150–249.","Not for single persons."],
quiz:[{q:"Median 150 µg/L in schoolchildren?",o:["Adequate","Deficient","Excessive"],a:0,e:"100–199."},{q:"Median 120 µg/L in pregnant women?",o:["Insufficient","Adequate","Excessive"],a:0,e:"Below 150 in pregnancy."}]},
{id:"ig4",title:"How the thyroid adapts",min:5,goal:3,obj:["Explain the adaptation","Link it to goitre growth"],html:`
<div class="scene"><b>The scene:</b> The woman's mother has a large neck but "normal blood tests". How?</div>
<div data-widget="stepsvg" data-set="goax"></div>
<p>Adaptation: more iodide trapping, preferential [[t3]] production, more recycling of iodine. The price is growth: [[gtr]] that may later become nodular and autonomous.</p>
<div class="corr">📝 <b>Slide check (page 9):</b> the slide says thyroid-stimulating hormone acts through "cyclic GMP". The correct second messenger is <b>cyclic AMP</b> (the receptor is coupled to G<sub>s</sub>; phospholipase C is a second pathway).</div>
<div class="hint">💡 <b>"Hungry thyroid grows."</b></div>
<details class="chk"><summary>✋ Checkpoint: why can thyroid tests be normal in an iodine-deficient goitre?</summary><p>The adaptations keep hormone levels normal, at the cost of growth.</p></details>`,
recap:["More trapping, more triiodothyronine, more recycling.","Thyroid-stimulating hormone (cyclic AMP) and growth factors → goitre.","Hormones often normal."],
quiz:[{q:"Second messenger of thyroid-stimulating hormone?",o:["Cyclic AMP","Cyclic GMP","Calcium only"],a:0,e:"Slide correction."},{q:"Which hormone is made preferentially in deficiency?",o:["Triiodothyronine","Thyroxine","Calcitonin"],a:0,e:"Needs less iodine."}]}],
cases:[{id:"igk1",title:"Case 1: The village survey",steps:[
{t:`<b>The scene:</b> A survey of schoolchildren in a mountain region: median urinary iodine 42 µg/L; many visible goitres.`,q:"Status?",o:["Moderate deficiency","Adequate","Excessive"],a:0,e:"20–49."},
{t:`The ministry wants a fast, cheap fix.`,q:"Best measure?",o:["Universal salt iodisation","Levothyroxine for everyone","Surgery for all goitres"],a:0,e:"Prevention at population level."}],take:["Measure populations, fix with salt."]},
{id:"igk2",title:"Case 2: Pregnancy",steps:[
{t:`<b>The scene:</b> A pregnant woman in a mildly deficient area uses non-iodised sea salt.`,q:"Advice?",o:["Iodine supplement about 150 µg daily","Nothing","High-dose iodine 5 mg"],a:0,e:"Standard supplement (American Thyroid Association)."}],take:["Pregnancy needs 250 µg daily."]}],
flash:[["Adult daily iodine need","150 µg."],["Pregnancy need","250 µg."],["Iodine pump","Sodium-iodide symporter."],["Population marker","Median urinary iodine."],["Adequate (school-age)","100–199 µg/L."],["Adequate (pregnancy)","150–249 µg/L."],["Most severe deficiency outcome","Cretinism."],["Second messenger of thyroid-stimulating hormone","Cyclic AMP."],["Adaptation","More trapping, more triiodothyronine."],["Prevention","Universal salt iodisation."]],
exam:["Daily needs: 90 / 120 / 150 / 250 µg.","Iodine deficiency disorders: miscarriage, cretinism, lower intelligence, goitre, hypothyroidism.","Median urinary iodine: school-age adequate 100–199; pregnancy 150–249.","Low iodine → more trapping, triiodothyronine, growth → goitre.","Thyroid-stimulating hormone acts via cyclic AMP (slide says GMP)."],
finalHtml:`<div data-widget="spot" data-set="idd"></div><div data-widget="termdeck" data-set="idd"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>2. Endemic goitre: clinic, work-up and treatment.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t2b')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 2 (Prof. Ionela Pascanu, UMCH 2026), pages 3–10; World Health Organization/UNICEF/ICCIDD, Assessment of iodine deficiency disorders (3rd edition, 2007); Zimmermann and Boelaert, Lancet Diabetes Endocrinol 2015; American Thyroid Association pregnancy guideline (2017). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t2a=T2A;
