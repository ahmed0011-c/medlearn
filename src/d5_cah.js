/* ===== Adrenal disorders 2.5: Congenital adrenal hyperplasia ===== */
Object.assign(GLOSSARY,{
cah21:{l:"21-hydroxylase deficiency",c:"disease",d:"Autosomal recessive loss of 21-hydroxylase (gene CYP21A2): cortisol and aldosterone cannot be made, precursors pile up and turn into androgens.",w:"About 95% of congenital adrenal hyperplasia."},
classiccah:{l:"classic congenital adrenal hyperplasia",c:"disease",d:"Severe forms presenting at birth or in infancy: salt-wasting (no aldosterone) and simple virilising (enough aldosterone).",w:"Detected by newborn screening in many countries."},
nccah:{l:"non-classic congenital adrenal hyperplasia",c:"disease",d:"Mild 21-hydroxylase deficiency: cortisol is adequate, androgens are mildly high.",w:"Presents later with early pubic hair, acne, hirsutism or irregular periods; can mimic polycystic ovary syndrome."},
swcrisis:{l:"salt-wasting crisis",c:"disease",d:"Life-threatening loss of salt and water in a newborn with no aldosterone and no cortisol, usually in the first 1–4 weeks.",w:"Vomiting, poor feeding, low sodium, high potassium, low blood sugar, shock."},
dsd:{l:"difference of sex development",c:"concept",d:"Umbrella term for conditions in which chromosomes, gonads or anatomy develop atypically.",w:"Virilised 46,XX newborns with congenital adrenal hyperplasia are the most common cause of atypical genitalia."},
crinecerfont:{l:"crinecerfont",c:"drug",d:"A blocker of the corticotropin-releasing hormone type 1 receptor that lowers adrenocorticotropic hormone and so adrenal androgens.",w:"Approved in the United States in 2024 as an add-on for 21-hydroxylase deficiency, allowing lower glucocorticoid doses."},
tart:{l:"testicular adrenal rest tumours",c:"disease",d:"Benign lumps of adrenal-like tissue in the testes, driven by high adrenocorticotropic hormone.",w:"A cause of reduced fertility in men with poorly controlled congenital adrenal hyperplasia."}
});
XSORT.cahtype={t:"Which enzyme is missing?",labels:["21-hydroxylase","11-beta-hydroxylase","17-alpha-hydroxylase"],items:[
["Newborn girl with atypical genitalia, sodium 124 and potassium 7.1 mmol/L in week 2",0,"Salt-wasting 21-hydroxylase deficiency: no aldosterone, androgen excess."],
["Virilised girl with HIGH blood pressure and low potassium",1,"11-deoxycorticosterone accumulates and acts like aldosterone."],
["Teenager with no puberty, high blood pressure and low potassium",2,"No sex steroids; excess 11-deoxycorticosterone."],
["Very high 17-hydroxyprogesterone on newborn screening",0,"The substrate just before the 21-hydroxylase step."],
["Raised 11-deoxycortisol",1,"The substrate of 11-beta-hydroxylase."],
["Woman, 24, hirsutism and irregular periods; morning 17-hydroxyprogesterone raised and rising strongly after Synacthen",0,"Non-classic 21-hydroxylase deficiency."]]};
XTREE.cahnb={t:"Newborn with a positive 17-hydroxyprogesterone screen",start:"a",n:{
a:{q:"Day 9 call from the screening lab: 17-hydroxyprogesterone very high. How is the baby?",o:[["Vomiting, sleepy, poor feeding","b"],["Well, feeding normally","c"]]},
b:{q:"Check sodium, potassium and glucose now. Sodium 122, potassium 7.4 mmol/L, glucose 2.2 mmol/L.",o:[["Treat as salt-wasting crisis","=Emergency: intravenous 0.9% saline bolus, glucose, <b>intravenous hydrocortisone</b> (stress dose, for example about 25 mg in a newborn, by local protocol), treat high potassium, then fludrocortisone and salt. Do not wait for confirmation."]]},
c:{q:"Was the baby preterm or very unwell (common false positives)?",o:[["Yes, preterm","=Repeat with a second-tier test (for example liquid chromatography–mass spectrometry steroid profile or gene test) and check electrolytes; many preterm results are false positives."],["No, term and well","=Same-day review: examine genitalia, electrolytes, serum 17-hydroxyprogesterone and cortisol. Boys look normal, so the screen is often their only chance before a crisis."]]}}};
XS.cah=["Spot the error",[["Congenital adrenal hyperplasia is autosomal recessive.",1],["Boys with salt-wasting 21-hydroxylase deficiency are usually diagnosed at birth because of their genitalia.",0,"Wrong: boys have <b>normal-looking genitalia</b> and can present with a salt-wasting crisis in weeks 1–4 unless screened."],["11-beta-hydroxylase deficiency causes high blood pressure.",1],["Children are treated with hydrocortisone rather than long-acting steroids.",1]]];
XT.cah="cah,cah21,classiccah,nccah,swcrisis,ohp17,prader,dsd,nbs,hydrocortisone,fludro,crinecerfont,tart";
const D5={
meta:"Endocrinology › Adrenal disorders › 2.5 · theory module · ⏱ about 25 minutes in 4 bite-sized steps",
intro:`<p>Congenital adrenal hyperplasia is the textbook example of a blocked hormone pathway. You met the enzyme simulator in Module 5. Here it becomes a patient: a newborn in crisis, a girl with atypical genitalia, a young woman with acne.</p>`,
goals:["Explain why one missing enzyme causes three problems","Describe the forms of 21-hydroxylase deficiency","Recognise the rarer enzyme defects","Know newborn screening and emergency management","Outline lifelong treatment"],
cards:[
{id:"ch1",title:"One block, three consequences",min:6,goal:0,obj:["Explain the pathway logic","Use the simulator"],html:`
<div class="scene"><b>The scene:</b> You are shown the steroid pathway with a red block at 21-hydroxylase and asked: "What will the baby look like?"</div>
<p>[[cah]] = inherited (autosomal recessive) block in cortisol synthesis. In [[cah21]] (about 95% of cases):</p>
<ol><li><b>Too little cortisol</b> → no feedback → <b>adrenocorticotropic hormone rises</b> → the glands enlarge (hyperplasia).</li><li><b>Too little aldosterone</b> (severe forms) → salt loss.</li><li><b>Precursors pile up</b> ([[ohp17]]) and are diverted into <b>androgens</b> → virilisation.</li></ol>
<p>👉 Try the blocks in the Module 5 simulator:</p>
<div data-widget="pathway"></div>
<div class="hint">💡 <b>"Blocked road, traffic diverted to the sex lane."</b></div>
<details class="chk"><summary>✋ Checkpoint: why are the glands big?</summary><p>Low cortisol removes negative feedback; high adrenocorticotropic hormone drives growth.</p></details>`,
recap:["Low cortisol → high adrenocorticotropic hormone → hyperplasia.","Severe forms: low aldosterone → salt wasting.","Precursors → androgens."],
quiz:[{q:"Most common enzyme defect?",o:["21-hydroxylase","11-beta-hydroxylase","17-alpha-hydroxylase"],a:0,e:"About 95%."},{q:"Marker that rises?",o:["17-hydroxyprogesterone","Cortisol","Aldosterone"],a:0,e:"Substrate before the block."}]},
{id:"ch2",title:"Classic and non-classic forms",min:6,goal:1,obj:["Describe salt-wasting, simple virilising and non-classic forms","Use the Prader scale"],html:`
<div class="scene"><b>The scene:</b> A 46,XX newborn has enlarged clitoris and fused labial folds. A second baby, a boy, seems fine at birth but vomits in week 2.</div>
<ul><li>[[classiccah]], <b>salt-wasting</b> (about three quarters of classic cases): [[swcrisis]] in weeks 1–4. Girls: atypical genitalia ([[dsd]]), normal internal female organs and fertility potential. Boys: normal genitalia, so they are at greatest risk of being missed.</li>
<li><b>Simple virilising:</b> enough aldosterone; girls virilised at birth; boys present later with early pubic hair, fast growth and advanced bone age (then short adult height).</li>
<li>[[nccah]]: much more common, milder; presents in childhood or adulthood with early pubic hair, acne, hirsutism, irregular periods, subfertility.</li></ul>
<p>Virilisation in girls is graded on the [[prader]] (schematic):</p>
<div data-widget="prader"></div>
<div class="hint">💡 <b>"Girls are seen, boys are missed."</b></div>
<details class="chk"><summary>✋ Checkpoint: why do boys with salt-wasting disease present later?</summary><p>Their genitalia look normal, so nothing is noticed until the crisis (unless newborn screening detects them).</p></details>`,
recap:["Salt-wasting: crisis in weeks 1–4.","Girls: atypical genitalia; boys: normal genitalia.","Non-classic: later, mild androgen excess."],
quiz:[{q:"A salt-wasting crisis typically shows…",o:["Low sodium, high potassium, low glucose","High sodium, low potassium","Normal electrolytes"],a:0,e:"No aldosterone and no cortisol."},{q:"Non-classic disease in a woman can mimic…",o:["Polycystic ovary syndrome","Hypothyroidism","Cushing syndrome"],a:0,e:"Hirsutism and irregular periods."}]},
{id:"ch3",title:"The rarer blocks and the newborn emergency",min:6,goal:2,obj:["Compare 11-beta- and 17-alpha-hydroxylase deficiency","Plan the newborn response"],html:`
<div class="scene"><b>The scene:</b> Day 9: the newborn screening lab calls about a very high 17-hydroxyprogesterone.</div>
<div class="tblwrap"><table><tr><th>Defect</th><th>Blood pressure</th><th>Sex hormones</th></tr>
<tr><td>21-hydroxylase</td><td>Low (salt loss)</td><td>Androgens ↑</td></tr>
<tr><td>11-beta-hydroxylase</td><td><b>High</b> (11-deoxycorticosterone ↑)</td><td>Androgens ↑</td></tr>
<tr><td>17-alpha-hydroxylase</td><td><b>High</b></td><td>Androgens and oestrogens ↓ (no puberty)</td></tr></table></div>
<div data-widget="sortset" data-set="cahtype"></div>
<div data-widget="tree" data-set="cahnb"></div>
<div class="hint">💡 <b>"Eleven and seventeen raise the pressure."</b></div>
${FIG("saltnb")}
<details class="chk"><summary>✋ Checkpoint: why do 11-beta-hydroxylase defects cause hypertension?</summary><p>11-deoxycorticosterone builds up; it is a mineralocorticoid.</p></details>`,
recap:["11-beta and 17-alpha deficiency: high blood pressure, low potassium.","Newborn screening measures 17-hydroxyprogesterone; preterm babies give false positives.","Crisis: saline, glucose, intravenous hydrocortisone at once."],
quiz:[{q:"Hypertension plus virilisation suggests…",o:["11-beta-hydroxylase deficiency","21-hydroxylase deficiency","17-alpha-hydroxylase deficiency"],a:0,e:"11-deoxycorticosterone plus androgens."},{q:"First treatment of a salt-wasting crisis includes…",o:["Intravenous hydrocortisone","Dexamethasone tablets","Waiting for gene results"],a:0,e:"Treat immediately."}]},
{id:"ch4",title:"Lifelong treatment",min:6,goal:4,obj:["Explain treatment goals","Know special issues by age"],html:`
<div class="scene"><b>The scene:</b> A 15-year-old girl with classic disease. Her 17-hydroxyprogesterone is high, she is growing fast, and she skips her evening tablets.</div>
<ul><li><b>Replace and suppress:</b> enough glucocorticoid to replace cortisol and lower adrenocorticotropic hormone, but not so much that it causes Cushing features or stunts growth.</li>
<li><b>Children:</b> [[hydrocortisone]] about 10–15 mg/m² per day in 3 doses (Endocrine Society 2018). Long-acting steroids are avoided while growing.</li>
<li><b>Salt-wasting forms:</b> [[fludro]], plus salt supplements in infancy.</li>
<li><b>Sick-day rules</b> and an emergency injection kit for life (2.9).</li>
<li><b>Monitoring:</b> growth, bone age, 17-hydroxyprogesterone and androstenedione, blood pressure.</li>
<li><b>Adults:</b> fertility, [[tart]] in men, bone and metabolic health. New add-on: [[crinecerfont]].</li>
<li><b>Genitalia surgery:</b> individual, shared decisions with an experienced team and the family; timing is debated.</li></ul>
<div class="hint">💡 <b>"Enough steroid to switch off the drive, not so much that it stops growth."</b></div>
<details class="chk"><summary>✋ Checkpoint: why is hydrocortisone preferred in children?</summary><p>Short-acting, physiological, and least harmful to growth.</p></details>`,
recap:["Hydrocortisone in children; fludrocortisone and salt in salt-wasters.","Balance: suppress androgens, avoid over-treatment.","Sick-day rules for life."],
quiz:[{q:"Glucocorticoid of choice in a growing child?",o:["Hydrocortisone","Dexamethasone","Prednisolone"],a:0,e:"Least harmful to growth."},{q:"Over-treatment causes…",o:["Short stature and Cushing features","Virilisation","Salt wasting"],a:0,e:"Too much glucocorticoid stunts growth."}]}],
cases:[{id:"chhk1",title:"Case 1: The vomiting boy",steps:[
{t:`<b>The scene:</b> A 12-day-old boy, born where newborn screening is not available, vomits and is floppy. Sodium 121, potassium 7.6 mmol/L, glucose 2.1 mmol/L. Genitalia look normal.`,q:"Most likely diagnosis?",o:["Salt-wasting 21-hydroxylase deficiency","Pyloric stenosis","Gastroenteritis"],a:0,e:"Low sodium plus high potassium and low glucose in week 2."},
{t:`He is in shock.`,q:"First step?",o:["Saline bolus, glucose and intravenous hydrocortisone","Wait for 17-hydroxyprogesterone","Fludrocortisone tablets only"],a:0,e:"Treat first."}],take:["Boys look normal: salt wasting is the first sign without screening."]},
{id:"chhk2",title:"Case 2: Acne and irregular periods",steps:[
{t:`<b>The scene:</b> A 23-year-old woman with hirsutism, acne and irregular cycles. Morning follicular 17-hydroxyprogesterone 9 nmol/L (about 300 ng/dl).`,q:"Next test?",o:["Synacthen stimulation with 17-hydroxyprogesterone","Dexamethasone test","Pituitary scan"],a:0,e:"A raised basal value needs stimulation to confirm non-classic disease."},
{t:`It rises above 30 nmol/L (about 1000 ng/dl).`,q:"Diagnosis?",o:["Non-classic congenital adrenal hyperplasia","Polycystic ovary syndrome","Normal"],a:0,e:"Above about 30 nmol/L after stimulation is diagnostic."}],take:["Check 17-hydroxyprogesterone in women with androgen excess."]}],
flash:[["Inheritance","Autosomal recessive."],["Most common enzyme","21-hydroxylase (about 95%)."],["Marker","17-hydroxyprogesterone."],["Three consequences","Low cortisol, low aldosterone, androgen excess."],["Salt-wasting crisis timing","Weeks 1–4."],["Who is missed?","Boys (normal genitalia)."],["Hypertensive forms","11-beta- and 17-alpha-hydroxylase deficiency."],["Non-classic","Later androgen excess; Synacthen-stimulated 17-hydroxyprogesterone above about 30 nmol/L."],["Childhood treatment","Hydrocortisone 10–15 mg/m²/day in 3 doses ± fludrocortisone and salt."],["New add-on drug","Crinecerfont (corticotropin-releasing hormone receptor blocker)."]],
exam:["Autosomal recessive block; 21-hydroxylase about 95%.","Low cortisol → high adrenocorticotropic hormone → hyperplasia and androgens; severe forms lose salt.","Girls: atypical genitalia; boys: salt-wasting crisis in weeks 1–4.","11-beta and 17-alpha deficiency: hypertension.","Hydrocortisone in children, fludrocortisone and salt; sick-day rules."],
finalHtml:`<div data-widget="spot" data-set="cah"></div><div data-widget="termdeck" data-set="cah"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br>From the cortex to the medulla: <b>2.6 Phaeochromocytoma.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('d6')">→ Open 2.6</button></div>`,
sources:"Sources: Endocrine Society guideline on congenital adrenal hyperplasia (Speiser et al., JCEM 2018); Auchus et al., NEJM 2024 (crinecerfont); Williams Textbook of Endocrinology. Thresholds for non-classic disease are those in the 2018 guideline. Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.d5=D5;
