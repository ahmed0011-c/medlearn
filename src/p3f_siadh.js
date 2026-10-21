/* ===== Pituitary · Lecture 3 · 6: Syndrome of inappropriate antidiuretic hormone secretion (pages 81–93) ===== */
XSORT.siadhc={t:"Sort the cause of inappropriate vasopressin (pages 83–88)",labels:["Tumour (ectopic)","Drug","Lung or brain","Other"],items:[
["Small-cell lung carcinoma",0,"The classic ectopic source."],["Thymoma, mesothelioma, lymphoma",0,"Page 85."],["Carcinoma of pancreas, duodenum, bladder, prostate",0,"Page 85."],
["Selective serotonin reuptake inhibitors",1,"Common in older people."],["Carbamazepine, chlorpropamide",1,"Page 86."],["Cyclophosphamide, cisplatin",1,"Chemotherapy."],["'Ecstasy' (methylenedioxymethamphetamine)",1,"Plus heavy drinking at parties."],["Desmopressin or oxytocin overdose",1,"Page 86."],
["Pneumonia, tuberculosis, empyema",2,"Page 88."],["Positive pressure ventilation",2,"Page 88."],["Meningitis, head injury, brain haemorrhage",2,"Page 88."],
["Marathon running",3,"Prolonged strenuous exercise."],["Acute psychosis",3,"Page 88."],["Gain-of-function V2 receptor mutation",3,"Rare hereditary form, vasopressin-independent."]]};
XCALC.nacalc={t:"Sodium correction safety check (page 90)",inp:[["s0","Sodium at the start","n",[100,134,1,112,"mmol/L"]],["s1","Sodium after 24 hours","n",[100,145,1,124,"mmol/L"]],["r","High risk for demyelination (alcohol, malnutrition, low potassium, liver disease)","c",false],["sy","Severe symptoms (seizures, coma) at the start","c",false]],
f:v=>{const d=v.s1-v.s0,lim=v.r?8:10;let o=`Rise in 24 hours: <b>${d} mmol/L</b>. `;
if(d<0)o+="Sodium is still falling: reassess the cause and the fluids.";
else if(d>lim)o+=`<b>⚠ Too fast</b> (limit about ${lim} mmol/L per 24 hours${v.r?" in a high-risk patient":""}). Risk of osmotic demyelination: stop the rise, consider giving water or desmopressin under specialist care.`;
else if(d>=4)o+="✅ Within the safe range.";
else o+="Slow rise: acceptable if no symptoms.";
if(v.sy)o+=" With severe symptoms, a small quick rise with hypertonic saline comes first, but the 24-hour limit still applies.";
return o},note:"The lecture gives 8–10 mmol/L per 24 hours (page 90; mEq/L and mmol/L are equal for sodium). The lower figure of 8 for high-risk patients follows the usual guideline practice and is not on the slide."};
XS.p3f=["Spot the error",[["Inappropriate secretion causes dilutional hyponatraemia with concentrated urine.",1],["Urine sodium is usually above 40 mmol/L.",1],["Low sodium from inappropriate secretion should be corrected as fast as possible.",0,"Wrong: correct <b>slowly</b>, about 8–10 mmol/L per 24 hours, to avoid osmotic demyelination (page 90)."],["Tolvaptan is an oral selective V2 receptor blocker.",1]]];
XT.p3f="siadh,hyponat,osm,tolvaptan,ods,v2r,avp,copeptin";
const P3F={
meta:"Endocrinology › Pituitary › Lecture 3 › Subsection L3.1.6 · Lecture 3 pages 81–93 · ⏱ about 20 minutes in 2 bite-sized steps",
intro:`<p>The mirror image of diabetes insipidus: vasopressin keeps being released when the body does not need it, water is kept, and sodium is diluted. It is the commonest cause of low sodium in hospital. Recognise it, find the cause, and above all correct it slowly.</p>`,
goals:["Recognise the laboratory pattern and causes","Treat safely"],
cards:[
{id:"qf1",title:"Pattern and causes (pages 81–88)",min:9,goal:0,obj:["List the diagnostic features","Sort the causes"],html:`
<div class="scene"><b>The scene:</b> Mr Dobre, 66, a heavy smoker, is confused. Sodium 119 mmol/L, plasma osmolality low, urine osmolality 480 mOsm/kg, urine sodium 60 mmol/L. He is not dehydrated and not swollen. Potassium is normal.</div>
<p>Presume [[siadh]] in any patient with (page 81): [[hyponat]], low plasma osmolality, urine osmolality over 100 mOsm/kg, urine sodium usually over 40 mmol/L, normal acid–base and potassium, sometimes low uric acid. Sodium reflects water relative to body salt: hyponatraemia means too much water (page 82). <b>Causes:</b> brain and lung disease, drugs, nausea and pain; ectopic production by tumours, classically small-cell lung carcinoma; rare activating V2 receptor mutations (pages 83–88). One common result: water retention, concentrated urine, dilutional hyponatraemia (page 84).</p>
<div data-widget="sortset" data-set="siadhc"></div>
<div class="corr">📝 <b>Slide check (page 81):</b> "Urine Na frequently above 40 mEq/" is missing its unit, which is mEq/L (the same as mmol/L for sodium). Before diagnosing inappropriate secretion you must also exclude low cortisol and hypothyroidism, and the patient must have normal fluid volume (not a lecture slide, but standard diagnostic criteria).</div>
<div class="hint">💡 <b>"Low in the blood, high in the urine, normal volume, no other excuse."</b></div>
<div class="exam"><b>🎓 For exams:</b> the six diagnostic features (page 81) and causes by group; small-cell lung carcinoma as the classic ectopic source.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Fits inappropriate secretion. In a heavy smoker look for small-cell lung carcinoma (chest imaging). Check cortisol and thyroid function first.</p></details>`,
recap:["Low sodium and osmolality.","Urine osmolality over 100, urine sodium over 40.","Normal volume, potassium, acid–base.","Tumours, drugs, lung, brain."],
quiz:[{q:"Urine osmolality in inappropriate secretion is…",o:["Over 100 mOsm/kg","Under 50 mOsm/kg","Always equal to plasma"],a:0,e:"Page 81."},{q:"Classic tumour?",o:["Small-cell lung carcinoma","Renal cell carcinoma","Melanoma"],a:0,e:"Page 85."}]},
{id:"qf2",title:"Treatment (pages 89–90)",min:8,goal:1,obj:["Choose treatments","Respect the correction limit"],html:`
<div class="scene"><b>The scene:</b> Mr Dobre's sodium was 112 mmol/L on admission. The next morning a busy colleague proudly reports "131 already!".</div>
<p>Chronic forms: <b>fluid restriction</b> and gradual correction. Severe symptoms: hypertonic saline with or without a loop diuretic (furosemide 20 mg). Others: demeclocycline 600–1200 mg/day; vasopressin receptor blockers: conivaptan (intravenous, V1 and V2, in hospital) and [[tolvaptan]] (oral, selective V2), page 89. Correct slowly: about 8–10 mmol/L in 24 hours, because too fast a rise causes [[ods]] (central pontine myelinolysis, pseudobulbar palsy), page 90.</p>
<div data-widget="calc" data-set="nacalc"></div>
<div class="hint">💡 <b>"From low to high, your pons will die."</b> Slow sodium saves the brain stem.</div>
<div class="exam"><b>🎓 For exams:</b> fluid restriction, hypertonic saline for severe symptoms, vaptans, demeclocycline; the 8–10 mmol/L per 24 hours limit.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>A rise of 19 mmol/L in 24 hours is far too fast: high risk of osmotic demyelination. Stop the rise and call the specialist; relowering under supervision may be needed.</p></details>`,
recap:["Fluid restriction first.","Hypertonic saline for severe symptoms.","Tolvaptan oral V2 blocker.","Limit 8–10 mmol/L per 24 hours."],
quiz:[{q:"Tolvaptan blocks…",o:["V2 receptors","V1 only","Aquaporin 2 directly"],a:0,e:"Page 89."},{q:"Too-rapid correction risks…",o:["Osmotic demyelination","Cerebral oedema","Diabetes insipidus"],a:0,e:"Page 90."}]}],
cases:[{id:"qfk1",title:"Case: The new antidepressant",steps:[{t:`<b>The scene:</b> A 79-year-old woman started sertraline 3 weeks ago; now she is unsteady and confused. Sodium 124 mmol/L, urine osmolality 390 mOsm/kg, clinically euvolaemic.`,q:"Likely cause?",o:["Drug-induced inappropriate secretion","Diabetes insipidus","Addison crisis without checking"],a:0,e:"Selective serotonin reuptake inhibitor."},{t:`What before you blame the drug?`,q:"Choose",o:["Check cortisol and thyroid function","Start tolvaptan","Give 3 litres of saline"],a:0,e:"Exclude endocrine causes."}],take:["Older people + new antidepressant + low sodium."]}],
flash:[["Sodium","Low (dilutional)."],["Plasma osmolality","Low."],["Urine osmolality","Over 100 mOsm/kg."],["Urine sodium","Over 40 mmol/L."],["Potassium","Normal."],["Classic tumour","Small-cell lung carcinoma."],["Drugs","Antidepressants, carbamazepine, cyclophosphamide."],["First treatment","Fluid restriction."],["Vaptan","Tolvaptan (oral V2)."],["Limit","8–10 mmol/L per 24 h."]],
exam:["Diagnostic criteria.","Causes.","Treatment and correction speed.","Osmotic demyelination."],
finalHtml:`<div data-widget="spot" data-set="p3f"></div><div data-widget="termdeck" data-set="p3f"></div><div class="exam" style="border-color:var(--ok)"><b>🏁 End of Lecture 3</b><br>Continue with <b>Lecture 3 part 2: L3.2.1 Hypopituitarism: causes.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('p4a')">→ Open L3.2.1</button></div>`,
sources:"Sources: Lecture 3 (Prof. Ionela Pașcanu, UMCH 2026), pages 81–93; Endocrine Reviews volume 44 issue 5 (2023), pages 819–861; standard diagnostic criteria for inappropriate antidiuretic hormone secretion. Teaching questions added by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.p3f=P3F;
