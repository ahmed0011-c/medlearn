/* ===== Adrenal disorders 2.1: Approach to the adrenal patient ===== */
Object.assign(GLOSSARY,{
arr:{l:"aldosterone-to-renin ratio",c:"test",d:"Plasma aldosterone divided by renin (activity or concentration), taken in the morning after the patient has been up for about 2 hours.",w:"Screening test for primary hyperaldosteronism; many blood pressure drugs change it."},
screen:{l:"screening test",c:"concept",d:"A sensitive first test that should rarely miss the disease; a positive result needs confirmation.",w:"Screen first, confirm second, image last."},
confirm:{l:"confirmatory test",c:"concept",d:"A more specific test done after a positive screening test to prove the diagnosis.",w:"For example saline infusion test in primary hyperaldosteronism."},
dynamic:{l:"dynamic test",c:"concept",d:"A test where the gland is stimulated (if you suspect too little) or suppressed (if you suspect too much).",w:"'Stimulate when low, suppress when high.'"}
});
XSORT.apzone={t:"Too much or too little? Sort each picture",labels:["Too much","Too little"],items:[["High blood pressure with low potassium and low renin",0,"Too much aldosterone (primary hyperaldosteronism)."],["Low sodium, high potassium, dark skin creases, low blood pressure",1,"Too little cortisol and aldosterone (primary adrenal insufficiency)."],["Easy bruising, wide purple stretch marks, weak thigh muscles",0,"Too much cortisol (Cushing syndrome)."],["Attacks of headache, sweating and racing heart",0,"Too much adrenaline and noradrenaline (phaeochromocytoma)."],["Tiredness and low sodium after stopping long-term prednisolone",1,"Too little cortisol (adrenocorticotropic hormone suppressed)."],["Rapid virilisation in an adult woman",0,"Too much androgen: think adrenal carcinoma or an ovarian tumour."]]};
XPK.aptest={t:"Which first test?",opts:["1 mg overnight dexamethasone suppression test","Aldosterone-to-renin ratio","Plasma free metanephrines","Morning cortisol with adrenocorticotropic hormone","17-hydroxyprogesterone"],items:[
["Suspected Cushing syndrome","1 mg overnight dexamethasone suppression test","Suppress when you suspect too much. Late-night salivary cortisol or 24-hour urinary free cortisol are alternatives."],
["Young man with resistant hypertension and potassium 3.1 mmol/L","Aldosterone-to-renin ratio","Screen for primary hyperaldosteronism."],
["Attacks of palpitations, sweating and headache","Plasma free metanephrines","Metanephrines are made continuously, so they are more reliable than catecholamines."],
["Tiredness, weight loss and low sodium","Morning cortisol with adrenocorticotropic hormone","First step for adrenal insufficiency; follow with a short Synacthen test if unclear."],
["Woman with irregular periods and hirsutism; non-classic congenital adrenal hyperplasia suspected","17-hydroxyprogesterone","Early morning in the follicular phase; stimulate if borderline."]]};
XS.ap=["Spot the error",[["Biochemistry comes before imaging.",1],["A scan is the best first test for Cushing syndrome.",0,"Wrong: <b>biochemistry first</b>. Adrenal incidentalomas are common, so a scan alone can mislead you."],["If you suspect too little hormone, you do a stimulation test.",1],["Most screening tests need a confirmatory test.",1]]];
XT.ap="screen,confirm,dynamic,arr,mets,dst,lnsc,ufc,synacthen,ohp17,incid";
const D1={
meta:"Endocrinology › Adrenal disorders › 2.1 · theory module · ⏱ about 20 minutes in 4 bite-sized steps",
intro:`<p>Every adrenal problem can be solved with the same three questions: <b>too much or too little? Which hormone (and so which zone)? Which test proves it?</b> This module gives you that map before the disease modules.</p>`,
goals:["Link each zone to its excess and deficiency diseases","Use the rule 'suppress when high, stimulate when low'","Pick the right screening test","Explain why biochemistry comes before imaging","Avoid the common test pitfalls"],
cards:[
{id:"ap1",title:"One gland, four hormone families, eight diseases",min:5,goal:0,obj:["Name the excess and deficiency disease of each zone","Use the zone map to predict symptoms"],html:`
<div class="scene"><b>The scene:</b> Your first endocrine clinic. Three referral letters: "hypertension, low potassium", "tired, dark skin", "found an adrenal lump on a scan". Where do you start?</div>
<div class="tblwrap"><table><tr><th>Zone and hormone</th><th>Too much</th><th>Too little</th></tr>
<tr><td>[[zg]]: aldosterone</td><td>Primary hyperaldosteronism (2.4)</td><td>Primary adrenal insufficiency, hypoaldosteronism (2.2)</td></tr>
<tr><td>[[zf]]: cortisol</td><td>Cushing syndrome (2.3)</td><td>Adrenal insufficiency (2.2)</td></tr>
<tr><td>[[zr]]: androgens</td><td>Androgen-secreting tumour, [[cah]] (2.5)</td><td>Usually no symptoms in men; less body hair and libido possible in women</td></tr>
<tr><td>[[medulla]]: adrenaline</td><td>[[pheo|Phaeochromocytoma]] (2.6)</td><td>Rarely matters (the sympathetic nerves take over)</td></tr></table></div>
<p>Masses (2.7) can be any of these, or no hormone at all. Autoimmune syndromes (2.8) and steroid tablets (2.9) complete the chapter.</p>
<div data-widget="sortset" data-set="apzone"></div>
<div class="hint">💡 <b>First ask "too much or too little?" Everything else follows.</b></div>
<details class="chk"><summary>✋ Checkpoint: which zone causes low potassium when overactive?</summary><p>The glomerulosa (aldosterone).</p></details>`,
recap:["Each zone has an excess disease and a deficiency disease.","Too much: Conn, Cushing, androgen excess, phaeochromocytoma.","Too little: adrenal insufficiency."],
quiz:[{q:"Too much cortisol is called…",o:["Cushing syndrome","Addison disease","Conn syndrome"],a:0,e:"Cushing syndrome (2.3)."},{q:"Which disease comes from the medulla?",o:["Phaeochromocytoma","Conn syndrome","Congenital adrenal hyperplasia"],a:0,e:"Chromaffin cell tumour."}]},
{id:"ap2",title:"Suppress when high, stimulate when low",min:5,goal:1,obj:["Explain dynamic tests","Give an example of each kind"],html:`
<div class="scene"><b>The scene:</b> A random cortisol is "normal". Does that rule out disease? No: cortisol changes over the day and with stress. A <b>dynamic test</b> is needed.</div>
<p>[[dynamic]]:</p>
<ul><li><b>Suspect too much → try to suppress it.</b> A healthy axis switches off; an autonomous tumour does not. Example: [[dst]] for Cushing syndrome; saline infusion for primary hyperaldosteronism.</li>
<li><b>Suspect too little → try to stimulate it.</b> A healthy gland responds; a failing gland does not. Example: [[synacthen]] for adrenal insufficiency.</li></ul>
<p>Always go [[screen]] → [[confirm]] → find the cause → only then image.</p>
<div class="hint">💡 <b>"High? Push it down. Low? Kick it up."</b></div>
<details class="chk"><summary>✋ Checkpoint: which kind of test is the short Synacthen test?</summary><p>A stimulation test (for suspected deficiency).</p></details>`,
recap:["Suspected excess → suppression test.","Suspected deficiency → stimulation test.","Screen, confirm, localise."],
quiz:[{q:"Suspected Cushing syndrome. Which kind of test?",o:["Suppression","Stimulation"],a:0,e:"Suppress when high."},{q:"Suspected Addison disease. Which kind of test?",o:["Suppression","Stimulation"],a:1,e:"Stimulate when low."}]},
{id:"ap3",title:"The screening tests to know",min:5,goal:2,obj:["Choose the first test for each suspected disease"],html:`
<div class="scene"><b>The scene:</b> Five patients wait. Each needs a different first blood test.</div>
<div class="tblwrap"><table><tr><th>Suspected</th><th>First test</th></tr>
<tr><td>Cushing syndrome</td><td>1 mg overnight [[dst]], [[lnsc]] or [[ufc]] (one or two of these)</td></tr>
<tr><td>Primary hyperaldosteronism</td><td>[[arr]] (with potassium corrected)</td></tr>
<tr><td>Phaeochromocytoma</td><td>Plasma free or urinary fractionated [[mets]]</td></tr>
<tr><td>Adrenal insufficiency</td><td>Morning cortisol with adrenocorticotropic hormone, then [[synacthen]]</td></tr>
<tr><td>Congenital adrenal hyperplasia (21-hydroxylase)</td><td>[[ohp17]]</td></tr></table></div>
<div data-widget="pickset" data-set="aptest"></div>
<div class="hint">💡 <b>Cortisol → dexamethasone, aldosterone → ratio, adrenaline → metanephrines.</b></div>
<details class="chk"><summary>✋ Checkpoint: why metanephrines and not adrenaline itself?</summary><p>Tumours release adrenaline in bursts, but they turn it into metanephrines all the time, so metanephrines are raised even between attacks.</p></details>`,
recap:["Cushing: dexamethasone suppression, late-night saliva, urine.","Conn: aldosterone-to-renin ratio.","Phaeochromocytoma: metanephrines; insufficiency: morning cortisol plus Synacthen."],
quiz:[{q:"First test for suspected phaeochromocytoma?",o:["Plasma free metanephrines","Adrenal scan","Random adrenaline"],a:0,e:"Metanephrines are the most sensitive screen."},{q:"First test for primary hyperaldosteronism?",o:["Aldosterone-to-renin ratio","24-hour urinary free cortisol","Synacthen test"],a:0,e:"The ratio."}]},
{id:"ap4",title:"Biochemistry first, scan second, and the pitfalls",min:5,goal:3,obj:["Explain why imaging comes last","List the main test pitfalls"],html:`
<div class="scene"><b>The scene:</b> A 52-year-old with hypertension has a 2 cm left adrenal lump on a scan, and a "high" random aldosterone. Is the lump the cause? Not necessarily.</div>
<p><b>Why scan last:</b> small, harmless [[incid|adrenal lumps]] are common and become more common with age. If you scan first, you may remove the wrong gland. For primary hyperaldosteronism, [[avs]] often decides which side is active.</p>
<p><b>Pitfalls:</b></p><ul>
<li><b>Time of day:</b> cortisol peaks in the morning and is lowest at midnight.</li>
<li><b>Drugs:</b> oestrogen raises cortisol-binding globulin (total cortisol ↑); prednisolone cross-reacts with cortisol assays; many blood pressure drugs change the aldosterone-to-renin ratio; some antidepressants raise metanephrines.</li>
<li><b>Stress and illness:</b> raise cortisol and catecholamines.</li>
<li><b>Potassium:</b> low potassium lowers aldosterone; correct it before testing.</li>
<li><b>Sampling:</b> plasma metanephrines are best taken after 20–30 minutes lying down.</li></ul>
<div class="hint">💡 <b>"Prove the hormone, then find the lump."</b></div>
<details class="chk"><summary>✋ Checkpoint: why correct low potassium before an aldosterone-to-renin ratio?</summary><p>Low potassium suppresses aldosterone and can make the test falsely normal.</p></details>`,
recap:["Imaging only after biochemistry: incidental lumps are common.","Check time, drugs, stress, potassium and sampling position.","Adrenal vein sampling often decides the side in primary hyperaldosteronism."],
quiz:[{q:"A scan shows a 2 cm adrenal lump. Next step?",o:["Remove it","Test for hormone excess","Ignore it"],a:1,e:"Every incidentaloma needs a hormone work-up (2.7)."},{q:"Which drug raises total cortisol without causing Cushing syndrome?",o:["Oral oestrogen","Dexamethasone","Paracetamol"],a:0,e:"It raises cortisol-binding globulin."}]}],
cases:[{id:"apk1",title:"Case 1: The three letters",steps:[
{t:`<b>The scene:</b> A 44-year-old woman: blood pressure 168/102 mmHg on three drugs, potassium 3.2 mmol/L.`,q:"Too much or too little, and of what?",o:["Too much aldosterone","Too little cortisol","Too much adrenaline"],a:0,e:"Resistant hypertension with low potassium suggests primary hyperaldosteronism."},
{t:`The general practitioner has already ordered an adrenal scan.`,q:"What should come first?",o:["Aldosterone-to-renin ratio","Adrenalectomy","Repeat scan"],a:0,e:"Biochemistry first."}],take:["Ask: too much or too little? Which hormone? Which test?"]},
{id:"apk2",title:"Case 2: Normal random cortisol",steps:[
{t:`<b>The scene:</b> A 30-year-old man has weight loss, low blood pressure and dark skin. Random cortisol at 4 p.m. is "within range".`,q:"Does this rule out adrenal insufficiency?",o:["Yes","No"],a:1,e:"A single random value can be normal; morning cortisol with adrenocorticotropic hormone and a stimulation test are needed."},
{t:`Adrenocorticotropic hormone is very high.`,q:"Which test confirms?",o:["Short Synacthen test","Dexamethasone suppression test","Aldosterone-to-renin ratio"],a:0,e:"Stimulate when low."}],take:["Dynamic tests beat random values."]}],
flash:[["Suspected excess","Suppression test."],["Suspected deficiency","Stimulation test."],["Order of work-up","Screen → confirm → find the cause → image."],["Screen for Cushing syndrome","1 mg dexamethasone, late-night saliva, 24-hour urine."],["Screen for primary hyperaldosteronism","Aldosterone-to-renin ratio."],["Screen for phaeochromocytoma","Plasma free or urinary metanephrines."],["Screen for adrenal insufficiency","Morning cortisol with adrenocorticotropic hormone; Synacthen test."],["Screen for 21-hydroxylase deficiency","17-hydroxyprogesterone."],["Why scan last?","Incidental adrenal lumps are common."],["Correct before aldosterone-to-renin ratio","Low potassium."]],
exam:["Three questions: too much or too little? which hormone/zone? which test?","Suppress when high, stimulate when low.","Screening: dexamethasone suppression/saliva/urine (cortisol); aldosterone-to-renin ratio; metanephrines; morning cortisol plus Synacthen.","Biochemistry before imaging.","Pitfalls: time of day, drugs, stress, low potassium, sampling position."],
finalHtml:`<div data-widget="spot" data-set="ap"></div><div data-widget="termdeck" data-set="ap"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br>Start with the deficiency: <b>2.2 Adrenal insufficiency</b>, then <b>2.3 Cushing syndrome</b>.<br><button class="pri" style="margin-top:8px" onclick="showModule('d3')">→ Open 2.3 Cushing syndrome</button></div>`,
sources:"Sources: Williams Textbook of Endocrinology; Endocrine Society guidelines on Cushing syndrome (2008), primary aldosteronism (2016), phaeochromocytoma (2014) and primary adrenal insufficiency (2016); European Society of Endocrinology adrenal incidentaloma guideline (2023). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Two short cases. Answer to reveal the next part."};
LESSONS.d1=D1;
