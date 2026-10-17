const M5={
goals:[
"Draw the four-ring steroid skeleton and explain the 27 → 21 → 19 → 18 carbon rule",
"Explain where the adrenal cell gets its cholesterol and how it stores it",
"Describe how adrenocorticotropic hormone switches on synthesis and name the rate-limiting step",
"Trace the 'ping-pong' of steroid synthesis between mitochondria and smooth endoplasmic reticulum",
"Explain why each zone makes a different hormone (salt, sugar, sex)",
"Match each key enzyme to its step and tissue",
"Predict the clinical picture of enzyme deficiencies and enzyme-blocking drugs"],
cards:[
{id:"c1",title:"The steroid skeleton and the carbon countdown",min:3,goal:0,html:`
<div class="scene"><b>The scene:</b> A pharmacology student asks you: "Cortisol, aldosterone, testosterone, oestradiol – why do they all look like the same chicken-wire drawing?" Because they <i>are</i> the same skeleton.</div>
<p>Every steroid is built on the [[nucleus]]: three six-carbon rings (<b>A, B, C</b>) plus one five-carbon ring (<b>D</b>). Carbons are numbered 1 to 17 around the rings; extra carbons (18 to 27) sit on side groups.</p>
<p>[[cholesterol|Cholesterol]] has <b>27 carbons</b>. Each step down the pathway <b>removes carbons</b>:</p>
<div data-widget="nucleus"></div>
<div class="hint">💡 <b>Countdown 27 → 21 → 19 → 18:</b> "Cholesterol (27) cuts its tail to become the 21-club (cortisol, aldosterone, progesterone), the 19-club are the Androgens, and [[aromatase|Aromatase]] Amputates one more to make the 18-carbon oestrogens."</div>`,
recap:["All steroids share 4 rings: A, B, C (six carbons) and D (five carbons).","Cholesterol 27 → corticoids and progestogens 21 → androgens 19 → oestrogens 18.","Aromatase removes carbon 19 to turn androgens into oestrogens."],
quiz:[{q:"Which group has 19 carbons?",o:["Glucocorticoids","Androgens","Oestrogens","Mineralocorticoids"],a:1,e:"Androgens (dehydroepiandrosterone, androstenedione, testosterone) have 19 carbons. Glucocorticoids and mineralocorticoids have 21; oestrogens 18."},
{q:"Ring D of the steroid nucleus is…",o:["a six-carbon ring","a five-carbon ring (cyclopentane)","an aromatic ring"],a:1,e:"Rings A, B, C are cyclohexane (six carbons); ring D is cyclopentane (five carbons). Ring A becomes aromatic only in oestrogens."}]},

{id:"c2",title:"Where does the cholesterol come from?",min:3,goal:1,html:`
<div class="scene"><b>The scene:</b> A 60-year-old on a high-dose statin asks: "If you block my cholesterol, will my body stop making stress hormones?"</div>
<p>The adrenal cortex mainly <b>imports</b> cholesterol from blood [[ldl]]. In the lecture figure (Barrett, Medical Physiology) about <b>80 %</b> comes from circulating low-density lipoprotein and about <b>20 %</b> is made inside the cell from acetyl-coenzyme A.</p>
<p><b>The import route, step by step:</b></p>
<ol><li>Low-density lipoprotein binds the [[ldlr]].</li>
<li>The receptor sits in a [[clathrin]] → [[endocytosis]] swallows it.</li>
<li>The vesicle fuses with a [[lysosome]] → free cholesterol is released.</li>
<li>Extra cholesterol is stored as [[ester|cholesteryl esters]] in [[lipid]].</li></ol>
<p>Those fat droplets dissolve during slide preparation – that is why fasciculata cells look pale and foamy: the famous <b>"clear cells"</b>.</p>
<div data-widget="cell"></div>
<p><b>Back to our patient:</b> [[statin|Statins]] lower blood cholesterol, but clinically important adrenal insufficiency is not a recognised routine problem – the adrenal compensates by making more receptors and taking up more low-density lipoprotein.</p>
<div class="hint">💡 "The adrenal shops more than it cooks" – mostly imported cholesterol, a little home-made.</div>`,
recap:["Main source: blood low-density lipoprotein via receptor-mediated endocytosis.","Lysosomes free the cholesterol; surplus is stored as cholesteryl esters in lipid droplets.","Lipid droplets make fasciculata cells look 'clear'."],
quiz:[{q:"Why do zona fasciculata cells look pale ('clear') on routine histology?",o:["They have no nucleus","Their lipid droplets dissolve during processing","They are full of glycogen"],a:1,e:"Cholesteryl-ester droplets are washed out by the solvents used in tissue processing, leaving pale, foamy cytoplasm."}]},

{id:"c3",title:"The switch: adrenocorticotropic hormone and the rate-limiting step",min:4,goal:2,html:`
<div class="scene"><b>The scene:</b> You stub your toe at 3 a.m. Within minutes your cortisol rises. How does the adrenal respond so fast if it stores no cortisol?</div>
<p><b>The signalling chain</b> (follow the arrows):</p>
<p>[[acth]] → [[mc2r]] (needs [[mrap]]) → [[gs]] → adenylyl cyclase → [[camp]] → [[pka]].</p>
<p>Protein kinase A then does two fast jobs:</p>
<ol><li>Activates [[ceh]] → frees cholesterol from lipid droplets.</li>
<li>Activates [[star]] → moves cholesterol from the outer to the <b>inner</b> mitochondrial membrane. This transport is the <b>[[ratelimit]]</b>.</li></ol>
<p>On the inner membrane, [[scc]] cuts the side chain → [[preg]].</p>
<h3>Fast versus slow effects</h3>
<table><tr><th>Acute (minutes)</th><th>Long-term (hours to days)</th></tr>
<tr><td>More free cholesterol, more transport into mitochondria</td><td>More enzyme genes switched on, more low-density lipoprotein receptors, gland growth (hypertrophy). Without adrenocorticotropic hormone the fasciculata and reticularis <b>atrophy</b>.</td></tr></table>
<h3>When the switch is broken</h3>
<p>• [[fgd]]: receptor does not work → low cortisol, very high adrenocorticotropic hormone (dark skin), aldosterone usually normal (angiotensin II drives it).<br>
• [[lipoid]]: transport protein broken → <b>no steroids at all</b>, glands stuffed with fat.</p>
<div class="hint">💡 "<b>StAR is the gatekeeper</b>": the star of the show decides how much cholesterol gets in the door – the enzymes only work as fast as the gate opens.</div>
<div class="corr">📝 <b>Name check:</b> the lecture calls the side-chain cleavage enzyme "desmolase" – an older name. Current name: cholesterol side-chain cleavage enzyme <span class="code">CYP11A1</span>. Remember: the <i>enzyme</i> is not rate-limiting; the <i>transport</i> by steroidogenic acute regulatory protein is.</div>`,
recap:["Adrenocorticotropic hormone → melanocortin 2 receptor → cyclic adenosine monophosphate → protein kinase A.","Rate-limiting step = cholesterol transport into the inner mitochondrial membrane by steroidogenic acute regulatory protein.","Acute: cholesterol supply (minutes). Chronic: enzymes and gland growth (days); no hormone = atrophy."],
quiz:[{q:"What is the rate-limiting step of adrenal steroid synthesis?",o:["21-hydroxylation","Cholesterol transport into the inner mitochondrial membrane","Release of cortisol from secretory vesicles","Sulfation of dehydroepiandrosterone"],a:1,e:"Steroidogenic acute regulatory protein-mediated transfer of cholesterol to the inner mitochondrial membrane (where side-chain cleavage happens) sets the pace."},
{q:"A child has very low cortisol, very high adrenocorticotropic hormone, dark skin, but normal sodium and potassium. Most likely?",o:["Familial glucocorticoid deficiency","Salt-wasting 21-hydroxylase deficiency","Congenital lipoid adrenal hyperplasia"],a:0,e:"Receptor resistance hits cortisol, but aldosterone (driven by angiotensin II) is preserved – so electrolytes are normal. Lipoid hyperplasia and salt-wasting would cause salt loss."}]},

{id:"c4",title:"The organelle ping-pong",min:3,goal:3,html:`
<div class="scene"><b>The scene:</b> Picture a factory where the product travels from the basement to the first floor and back down again for the final polish.</div>
<p>Steroid synthesis bounces between two organelles. Click each step to follow the ball:</p>
<div data-widget="pingpong"></div>
<p><b>No storage!</b> Unlike peptide hormones or adrenaline, cortisol is fat-soluble and simply <b>diffuses out</b> of the cell as soon as it is made. So cortisol is made <b>on demand</b>; the "store" is the cholesterol in lipid droplets.</p>
<div class="hint">💡 "<b>M – S – M</b>: Mitochondria start, Smooth endoplasmic reticulum in the middle, Mitochondria finish." First and last enzymes live in mitochondria.</div>`,
recap:["Mitochondria: cholesterol → pregnenolone.","Smooth endoplasmic reticulum: 3-beta-, 17-alpha-, 21-hydroxylation → 11-deoxycortisol.","Back in mitochondria: 11-beta-hydroxylase → cortisol (aldosterone synthase in glomerulosa). No vesicle storage."],
quiz:[{q:"Where does the final step to cortisol take place?",o:["Smooth endoplasmic reticulum","Mitochondria","Golgi apparatus","Secretory granules"],a:1,e:"11-beta-hydroxylase sits in the inner mitochondrial membrane."},
{q:"Why can't the adrenal cortex release a big pre-made 'burst' of cortisol like the medulla releases adrenaline?",o:["Cortisol is stored in the nucleus","Cortisol is lipid-soluble and is not stored in vesicles","Cortisol is destroyed by lysosomes"],a:1,e:"Steroids cross membranes freely, so they leave the cell as soon as they are made; regulation happens at synthesis."}]},

{id:"c5",title:"Three zones, three products",min:4,goal:4,html:`
<div class="scene"><b>The scene:</b> Same cholesterol, same starting enzyme – yet the outer layer makes salt hormone, the middle makes sugar hormone, the inner makes sex hormone. The secret: <b>which enzymes each zone switches on.</b></div>
<p><b>Zona glomerulosa (salt):</b> has [[cyp11b2]] but <b>no</b> [[cyp17]] → can only go the [[aldo|aldosterone]] way. Controlled by [[angii]] and blood potassium.</p>
<p><b>Zona fasciculata (sugar):</b> has 17-alpha-hydroxylase and [[cyp11b1]] → [[cortisol]]. Controlled by adrenocorticotropic hormone.</p>
<p><b>Zona reticularis (sex):</b> strong [[lyase]] and [[sult]] → [[dhea]] and [[dheas]]. Converted peripherally to testosterone and oestradiol.</p>
<p>👉 <b>Interactive pathway:</b> click any enzyme label, or switch on a deficiency or drug to see what gets blocked (red) and where the flow is shunted (bold orange).</p>
<div data-widget="pathway"></div>
<div class="corr">📝 <b>Slide correction (page 19 figure):</b> the statement that "progesterone is the precursor of testosterone" is a simplification. In humans the 17,20-lyase strongly prefers 17-hydroxy<i>pregnenolone</i>, so most adrenal androgens are made via the pregnenolone → 17-hydroxypregnenolone → dehydroepiandrosterone route, not via progesterone. The lecture is correct that the glomerulosa lacks 17-alpha-hydroxylase.</div>
<div class="hint">💡 "<b>Salt, Sugar, Sex – the deeper you go, the sweeter it gets.</b>" And: glomerulosa has "no 17" → no cortisol, no sex steroids.</div>`,
recap:["Glomerulosa: no 17-alpha-hydroxylase, has aldosterone synthase → aldosterone (angiotensin II, potassium).","Fasciculata: 17-alpha-hydroxylase + 21-hydroxylase + 11-beta-hydroxylase → cortisol.","Reticularis: 17,20-lyase + sulfotransferase → dehydroepiandrosterone (sulfate)."],
quiz:[{q:"Why can't the zona glomerulosa make cortisol?",o:["It lacks 21-hydroxylase","It lacks 17-alpha-hydroxylase","It lacks side-chain cleavage enzyme"],a:1,e:"Without 17-alpha-hydroxylase, pregnenolone and progesterone cannot enter the cortisol (or androgen) branch."},
{q:"The main regulators of aldosterone synthase are…",o:["Adrenocorticotropic hormone only","Angiotensin II and potassium","Cortisol and insulin"],a:1,e:"Volume status (via renin → angiotensin II) and serum potassium; adrenocorticotropic hormone has only a minor, short-term role."}]},

{id:"c6",title:"The enzyme toolkit",min:4,goal:5,html:`
<div class="scene"><b>The scene:</b> Exam question: "Which enzyme is found in the glomerulosa only?" Let's build your toolkit.</div>
<div class="svgwrap"><table>
<tr><th>Enzyme</th><th>Does</th><th>Where</th></tr>
<tr><td>[[scc]]</td><td>Cholesterol → pregnenolone</td><td>All zones, gonads, placenta, brain</td></tr>
<tr><td>[[hsd3]]</td><td>Pregnenolone → progesterone (delta-5 → delta-4)</td><td>Adrenal, gonads (type 1: placenta, liver)</td></tr>
<tr><td>[[cyp17]] / [[lyase]]</td><td>Adds 17-OH / cuts to 19 carbons</td><td>Fasciculata, reticularis, gonads – <b>not glomerulosa</b></td></tr>
<tr><td>[[cyp21]]</td><td>Progesterone → 11-deoxycorticosterone; 17-hydroxyprogesterone → 11-deoxycortisol</td><td>All adrenal zones</td></tr>
<tr><td>[[cyp11b1]]</td><td>11-deoxycortisol → cortisol</td><td>Fasciculata</td></tr>
<tr><td>[[cyp11b2]]</td><td>Corticosterone → aldosterone</td><td>Glomerulosa only</td></tr>
<tr><td>[[aromatase]]</td><td>Androgens → oestrogens</td><td>Fat, ovary, placenta</td></tr>
<tr><td>[[hsd11b1]]</td><td>Cortisone → cortisol (activates)</td><td>Liver, fat, brain</td></tr>
<tr><td>[[hsd11b2]]</td><td>Cortisol → cortisone (inactivates)</td><td>Kidney, colon, salivary glands, placenta</td></tr></table></div>
<div class="hint">💡 <b>11-beta-hydroxysteroid dehydrogenase: "Type 1 turns it ON (1 = one = on), type 2 turns it OFF (2 = 'to' the toilet)."</b> Type 2 guards the kidney's mineralocorticoid receptor.</div>
<h3>🎮 Matching game: click an enzyme, then its step</h3>
<div data-widget="match"></div>`,
recap:["Side-chain cleavage and 21-hydroxylase: all zones; aldosterone synthase: glomerulosa only.","17-alpha-hydroxylase/17,20-lyase is one protein, absent from glomerulosa.","11-beta-hydroxysteroid dehydrogenase type 1 activates, type 2 inactivates cortisol."],
quiz:[{q:"Which enzyme protects the kidney's mineralocorticoid receptor from cortisol?",o:["11-beta-hydroxysteroid dehydrogenase type 1","11-beta-hydroxysteroid dehydrogenase type 2","11-beta-hydroxylase"],a:1,e:"Type 2 converts cortisol to inactive cortisone in the kidney, so only aldosterone activates the receptor."}]},

{id:"c7",title:"When enzymes fail: deficiencies and drugs",min:4,goal:6,html:`
<div class="scene"><b>The scene:</b> Three patients, three broken enzymes, three different blood pressures. Learn the rule once, solve them all.</div>
<p>In [[cah]] cortisol is low → adrenocorticotropic hormone is high → the gland enlarges and precursors pile up <b>before</b> the block and spill into open side-roads.</p>
<table><tr><th>Deficiency</th><th>Blood pressure / potassium</th><th>Sex hormones</th><th>Key lab</th></tr>
<tr><td>[[cyp21]] deficiency</td><td>Low blood pressure, salt wasting, <b>high</b> potassium</td><td>Excess androgens → virilised girls</td><td>High [[ohp17]]</td></tr>
<tr><td>[[cyp11b1]] deficiency</td><td><b>Hypertension</b>, low potassium ([[doc]] acts like aldosterone)</td><td>Excess androgens → virilisation</td><td>High 11-deoxycortisol and 11-deoxycorticosterone</td></tr>
<tr><td>[[cyp17]] deficiency</td><td><b>Hypertension</b>, low potassium</td><td><b>No</b> sex steroids → undervirilised boys, absent puberty</td><td>High 11-deoxycorticosterone and [[corticosterone]]</td></tr></table>
<div class="hint">💡 <b>The "1" rule:</b> If the enzyme number <b>ends</b> in 1 (21, 11) → <b>virilisation</b>. If it <b>starts</b> with 1 (11, 17) → <b>hypertension</b>. 11-beta-hydroxylase does both.</div>
<h3>Drugs that block steps</h3>
<p>• [[ketoconazole]] / levoketoconazole – side-chain cleavage and 17-alpha-hydroxylase.<br>
• [[metyrapone]] and [[osilodrostat]] – 11-beta-hydroxylase (Cushing treatment; metyrapone test).<br>
• [[etomidate]] – 11-beta-hydroxylase: cortisol suppression after anaesthetic induction.<br>
• [[abiraterone]] – 17-alpha-hydroxylase/17,20-lyase (prostate cancer).<br>
• [[mitotane]] – destroys adrenal cortex (adrenocortical carcinoma).<br>
• [[liquorice]] – blocks 11-beta-hydroxysteroid dehydrogenase type 2 → [[ame]].</p>
<p>Go back to the <a href="#c5" onclick="go('c5')">pathway diagram</a> and toggle these to see the blocks.</p>`,
recap:["Low cortisol → high adrenocorticotropic hormone → precursor pile-up and shunting.","21: salt loss + virilisation; 11: hypertension + virilisation; 17: hypertension + no sex steroids.","Metyrapone, osilodrostat, etomidate block 11-beta-hydroxylase; abiraterone blocks 17; liquorice blocks 11-beta-hydroxysteroid dehydrogenase type 2."],
quiz:[{q:"A 16-year-old phenotypic girl has no breast development, hypertension and low potassium. Which deficiency?",o:["21-hydroxylase","17-alpha-hydroxylase","11-beta-hydroxysteroid dehydrogenase type 1"],a:1,e:"No sex steroids (no puberty) plus mineralocorticoid excess from 11-deoxycorticosterone = 17-alpha-hydroxylase deficiency."},
{q:"Which drug is the basis of a test of pituitary reserve because it makes 11-deoxycortisol rise?",o:["Abiraterone","Metyrapone","Mitotane"],a:1,e:"Metyrapone blocks 11-beta-hydroxylase; a healthy pituitary responds with more adrenocorticotropic hormone and 11-deoxycortisol rises."}]}
],
cases:[
{id:"k1",title:"Case 1 – The newborn who crashed on day 10",steps:[
{t:`<b>The scene:</b> A term baby is born after an uneventful pregnancy. The midwife notices enlarged clitoris and partly fused labia; no gonads are palpable. The karyotype later returns 46,XX.`,q:"What is the single most useful first blood test?",o:["Serum 17-hydroxyprogesterone","Thyroid-stimulating hormone","Serum cortisol only"],a:0,e:"A raised 17-hydroxyprogesterone points to 21-hydroxylase deficiency – the most common cause of virilisation in a genetically female newborn. (Germany screens for it in the newborn blood spot.)"},
{t:`The degree of virilisation is described on the [[prader]] (schematic below – no photographs are used).<div data-widget="prader"></div>`},
{t:`<b>Day 10:</b> The baby feeds poorly, vomits and is lethargic. Sodium is low, potassium is high, glucose is low-normal.`,q:"Why does the salt crisis appear now and not at birth?",o:["Maternal hormones and placental clearance protected the baby until birth; mineralocorticoid deficiency shows over 1–2 weeks","The baby caught an infection","Breast milk contains too much potassium"],a:0,e:"In the womb the placenta handles salt and potassium balance. After birth, lack of aldosterone causes progressive salt loss; crises typically appear in the first 1–2 weeks."},
{t:`Look at the pathway: 21-hydroxylase blocks BOTH the cortisol and aldosterone branches. High adrenocorticotropic hormone drives precursors into the only open road: androgens.`,q:"Which treatment combination is correct?",o:["Hydrocortisone + fludrocortisone + salt","Fludrocortisone alone","Spironolactone + potassium"],a:0,e:"Hydrocortisone replaces cortisol and suppresses adrenocorticotropic hormone (so androgens fall); fludrocortisone and salt replace aldosterone. Acute crisis: intravenous fluids, glucose and hydrocortisone."}],
take:["21-hydroxylase deficiency = low cortisol + low aldosterone + androgen excess.","Girls: ambiguous genitalia at birth; boys: often missed until salt-wasting crisis.","High 17-hydroxyprogesterone; treat with hydrocortisone + fludrocortisone + salt."]},
{id:"k2",title:"Case 2 – The liquorice lover with high blood pressure",steps:[
{t:`<b>The scene:</b> A 52-year-old Dutch man has new hypertension and muscle weakness. Potassium is low. He proudly says he eats a large bag of salty liquorice every day.`,q:"You measure renin and aldosterone. What do you expect?",o:["High renin, high aldosterone","Low renin, low aldosterone","Low renin, high aldosterone"],a:1,e:"The salt-retaining effect suppresses renin, and therefore aldosterone. Low/low with hypertension and low potassium = apparent mineralocorticoid excess pattern."},
{t:`Glycyrrhetinic acid blocks [[hsd11b2]] in the kidney. Cortisol – present in far higher amounts than aldosterone – is no longer inactivated and occupies the mineralocorticoid receptor.`,q:"Best management?",o:["Stop liquorice, correct potassium, monitor blood pressure","Start hydrocortisone","Adrenalectomy"],a:0,e:"Effects reverse over weeks after stopping. A mineralocorticoid receptor blocker can be used meanwhile if needed."}],
take:["Cortisol can activate the mineralocorticoid receptor; 11-beta-hydroxysteroid dehydrogenase type 2 prevents this.","Liquorice → apparent mineralocorticoid excess: hypertension, low potassium, low renin, low aldosterone.","Same pattern: genetic type 2 deficiency, or very high cortisol overwhelming the enzyme (ectopic Cushing)."]},
{id:"k3",title:"Case 3 (bonus) – The hypertensive virilised child",steps:[
{t:`<b>The scene:</b> A 4-year-old girl has early pubic hair, rapid growth and a blood pressure well above the normal range for her age. Potassium is low.`,q:"Which enzyme defect fits virilisation PLUS hypertension?",o:["21-hydroxylase","11-beta-hydroxylase","17-alpha-hydroxylase"],a:1,e:"11-beta-hydroxylase deficiency: androgen shunting plus accumulation of 11-deoxycorticosterone (a mineralocorticoid)."},
{t:`Labs: high 11-deoxycortisol and 11-deoxycorticosterone, low renin. Treatment: hydrocortisone suppresses adrenocorticotropic hormone, so precursors and blood pressure fall. Fludrocortisone is NOT needed.`}],
take:["11-beta-hydroxylase deficiency: virilisation + hypertension + low potassium.","Marker: 11-deoxycortisol; mineralocorticoid effect from 11-deoxycorticosterone.","Glucocorticoid alone usually fixes both problems."]}
],
flash:[["Rate-limiting step of steroid synthesis","Cholesterol transport into inner mitochondrial membrane by steroidogenic acute regulatory protein"],["Carbons: cholesterol / cortisol / androgens / oestrogens","27 / 21 / 19 / 18"],["Enzyme found only in glomerulosa","Aldosterone synthase (CYP11B2)"],["Enzyme absent from glomerulosa","17-alpha-hydroxylase (CYP17A1)"],["Main cholesterol source of the adrenal","Circulating low-density lipoprotein (receptor-mediated endocytosis)"],["Marker of 21-hydroxylase deficiency","High 17-hydroxyprogesterone"],["Deficiency with hypertension and no sex steroids","17-alpha-hydroxylase deficiency"],["Deficiency with hypertension and virilisation","11-beta-hydroxylase deficiency"],["Liquorice blocks…","11-beta-hydroxysteroid dehydrogenase type 2 → apparent mineralocorticoid excess"],["Etomidate blocks…","11-beta-hydroxylase → cortisol suppression"],["Abiraterone blocks…","17-alpha-hydroxylase / 17,20-lyase"],["Why 'clear cells' in fasciculata","Lipid droplets (cholesteryl esters) wash out in processing"],["Main regulators of aldosterone","Angiotensin II and potassium"],["Adrenal-specific androgen marker","Dehydroepiandrosterone sulfate"]],
match:[["Cholesterol side-chain cleavage enzyme","Cholesterol → pregnenolone"],["3-beta-hydroxysteroid dehydrogenase","Pregnenolone → progesterone"],["21-hydroxylase","17-hydroxyprogesterone → 11-deoxycortisol"],["11-beta-hydroxylase","11-deoxycortisol → cortisol"],["Aldosterone synthase","Corticosterone → aldosterone"],["17,20-lyase","17-hydroxypregnenolone → dehydroepiandrosterone"],["Aromatase","Androstenedione → oestrone"]],
exam:[
"<b>Rate-limiting step</b> = steroidogenic acute regulatory protein transport, NOT an enzyme.",
"<b>27 → 21 → 19 → 18</b> carbons; aromatase removes carbon 19.",
"Glomerulosa lacks 17-alpha-hydroxylase; aldosterone synthase is glomerulosa-only.",
"Order in the cortisol pathway: side-chain cleavage → 3-beta → 17-alpha → 21 → 11-beta.",
"21-hydroxylase deficiency: high 17-hydroxyprogesterone, salt wasting, virilisation; treat hydrocortisone + fludrocortisone.",
"11-beta deficiency and 17-alpha deficiency both give hypertension and low potassium (11-deoxycorticosterone).",
"Drugs: metyrapone/osilodrostat/etomidate (11-beta), ketoconazole (several), abiraterone (17), mitotane (adrenolytic), liquorice (11-beta-hydroxysteroid dehydrogenase type 2)."]
};
