/* ===== CBL 5 lesson: steps 5–7 ===== */
CBL5.cards.push(
{id:"a5",title:"Putting it together: Schmidt syndrome",min:4,goal:4,obj:["Match each part of the final diagnosis to its evidence","Define autoimmune polyglandular syndromes types 1 to 4","Compare type 1 and type 2","Know what to screen for, and the 'hydrocortisone before thyroxine' rule"],html:`
<div class="scene"><b>The scene:</b> The remaining results come back (slide 20). [[tsh]] 0.94 and free thyroxine 0.96: normal. [[antitg]] 24.3 (normal up to 4.1): <b>positive</b>. [[antitpo]] 0.37: negative. [[pth|Parathyroid hormone]] 72 pg/ml (high), corrected calcium 8.9 mg/dl (normal), phosphorus normal, [[vitd]] 18 ng/ml (low). Abdominal computed tomography: adrenal glands normal (slide 27).</div>
<h3>Final diagnosis (slide 28) and the evidence</h3>
<table><tr><th>Diagnosis</th><th>Evidence</th></tr>
<tr><td><b>[[schmidt]] / [[aps2]]</b></td><td>Autoimmune adrenal failure + autoimmune thyroid disease (+ ovarian failure)</td></tr>
<tr><td>[[pai|Primary adrenal insufficiency]], acute adrenal failure</td><td>Cortisol 4.8 µg/dl, no response to stimulation, adrenocorticotropic hormone 701.9 pg/ml, high potassium, low sodium, low glucose, dark skin</td></tr>
<tr><td>Goitre grade Ib, [[thyroiditis]], [[euthy]]</td><td>Goitre, anti-thyroglobulin positive, normal thyroid hormones</td></tr>
<tr><td>[[poi|Primary ovarian failure]]</td><td>Menopause at 38</td></tr>
<tr><td>[[shpt]] due to vitamin D deficiency</td><td>Parathyroid hormone high, calcium normal, vitamin D low</td></tr>
<tr><td>Hiatal hernia, gallstones, [[cholestasis|cholestatic syndrome]], fatty liver, overweight</td><td>History, yellow sclerae, high direct bilirubin and [[ggt]], body mass index 26</td></tr></table>
<div class="corr">📝 <b>Thyroid note:</b> M.T. is <b>anti-thyroglobulin positive but anti-thyroid peroxidase negative</b>. Most people with autoimmune thyroiditis are thyroid peroxidase positive, so this pattern is less typical. Positive thyroglobulin antibodies with a goitre still support autoimmune thyroiditis. Also, slide 7 asked "hypothyroidism?": the answer is <b>no</b>, she is euthyroid. The ultrasound on slide 26 is a reference picture from Radiopaedia, not necessarily M.T.'s scan.</div>
<h3>[[aps|Autoimmune polyglandular syndromes]] (slide 29)</h3>
<table><tr><th>Type</th><th>Definition</th></tr>
<tr><td>Type 1</td><td>Chronic candidiasis, hypoparathyroidism, autoimmune adrenal insufficiency (at least two)</td></tr>
<tr><td><b>Type 2 (Schmidt)</b></td><td>Autoimmune adrenal insufficiency (<b>must always be present</b>) + autoimmune thyroid disease and/or type 1 diabetes</td></tr>
<tr><td>Type 3</td><td>Autoimmune thyroid disease + other autoimmune diseases (excluding adrenal insufficiency, hypoparathyroidism, chronic candidiasis)</td></tr>
<tr><td>Type 4</td><td>Two or more organ-specific autoimmune diseases that do not fit types 1–3</td></tr></table>
<h3>Type 1 versus type 2</h3>
<table><tr><th></th><th>[[aps1|Type 1]]</th><th>[[aps2|Type 2]]</th></tr>
<tr><td>Cause</td><td>One gene: autoimmune regulator gene, autosomal recessive</td><td>Many genes, linked to human leukocyte antigen DR3 / DR4</td></tr>
<tr><td>Onset</td><td>Childhood</td><td>Adulthood</td></tr>
<tr><td>Sex</td><td>Both sexes equally</td><td>More often women</td></tr>
<tr><td>Core diseases</td><td>Candidiasis, hypoparathyroidism, Addison disease</td><td>Addison disease + thyroid disease and/or type 1 diabetes. Also possible: ovarian failure, vitiligo, coeliac disease, pernicious anaemia</td></tr></table>
<p><b>Clinical consequences:</b> screen M.T. regularly for thyroid function, diabetes (glucose), vitamin B12 deficiency and coeliac disease, and tell first-degree relatives about the risk. [[ab21]] confirm the autoimmune cause. [[ct|Imaging]] matters less in primary insufficiency (take-home message); it is needed when antibodies are negative, to look for bleeding, metastases or tuberculosis (slide 19).</p>
<div class="hint">💡 <b>"Two = Thyroid (or Type 1 diabetes) Together with the adrenal."</b> And the safety rule: <b>"Steroids before thyroxine."</b> If adrenal insufficiency and hypothyroidism coexist, start hydrocortisone first. Thyroxine speeds up cortisol breakdown and can trigger a crisis.</div>`,
recap:["Final diagnosis: autoimmune polyglandular syndrome type 2 (Schmidt) = autoimmune Addison disease + autoimmune thyroiditis (+ primary ovarian failure).","Type 2: adrenal always present; adult women; human leukocyte antigen-linked. Type 1: autoimmune regulator gene, childhood, candidiasis + hypoparathyroidism + Addison disease.","Secondary hyperparathyroidism here is from low vitamin D, not autoimmune. Start hydrocortisone before thyroxine."],
quiz:[{q:"Which component MUST be present for autoimmune polyglandular syndrome type 2?",o:["Type 1 diabetes","Autoimmune adrenal insufficiency","Hypoparathyroidism"],a:1,e:"Type 2 = autoimmune adrenal insufficiency (always) + autoimmune thyroid disease and/or type 1 diabetes. Hypoparathyroidism belongs to type 1."},
{q:"A new patient has untreated adrenal insufficiency AND untreated hypothyroidism. What do you start first?",o:["Thyroxine first","Hydrocortisone first, then thyroxine","It does not matter"],a:1,e:"Thyroxine increases cortisol clearance. Giving it first to someone with untreated adrenal insufficiency can precipitate an adrenal crisis."}]},

{id:"a6",title:"Adrenal crisis: treat first, confirm later",min:4,goal:5,obj:["Recognise an adrenal crisis","Give the correct first-hour treatment (hydrocortisone, saline, glucose)","Explain why hydrocortisone beats dexamethasone","Know when fludrocortisone is (not) needed acutely"],html:`
<div class="scene"><b>The scene:</b> Back to admission day. M.T. is vomiting, her blood pressure is 90/60 mmHg, sodium 126, potassium 6.21, glucose 59 mg/dl. The cortisol result will not be ready until tomorrow. Do you wait?</div>
<p><b>No.</b> First take-home message (slide 35): <b>if you clinically suspect acute adrenal insufficiency ([[crisis]]), start emergency treatment before the diagnosis is confirmed.</b> Take blood for cortisol and adrenocorticotropic hormone first if it costs no time, then treat.</p>
<p>👉 Click each box in the flow:</p>
<div data-widget="crisis"></div>
<p><b>Why [[hydrocortisone]]?</b> At high doses, hydrocortisone also acts on the mineralocorticoid receptor, so it replaces cortisol <i>and</i> covers the missing aldosterone. [[dexa]] has no salt-retaining effect at all.</p>
<p><b>Why no [[fludro|fludrocortisone]] at first?</b> While hydrocortisone is 50 mg per day or more, its own mineralocorticoid effect is enough. Fludrocortisone is started when the dose is lowered below that.</p>
<div class="hint">💡 <b>The 5 S of adrenal crisis:</b> <b>S</b>alt (0.9 % saline), <b>S</b>ugar (glucose), <b>S</b>teroid (hydrocortisone), <b>S</b>upport (monitoring, intensive care if needed), <b>S</b>earch for the trigger (infection, vomiting, surgery, stopped tablets).</div>
<div class="corr">📝 <b>Slide check (slide 30): handle with care</b><br>• <b>"IV hydrocortisone 100 mg or DXM 4 mg every 6 hours":</b> dexamethasone 4 mg every 6 hours is <b>not</b> standard crisis treatment. Hydrocortisone is preferred because it also has a mineralocorticoid effect. If dexamethasone is used at all (for example while a stimulation test is still planned, because it does not interfere with the cortisol assay), it is usually given as <b>one 4 mg dose</b>, repeated at most once every 24 hours, and switched to hydrocortisone as soon as possible. Treatment must never be delayed for testing.<br>• <b>Hydrocortisone dosing</b> on the slide is ambiguous. Standard regimen (Endocrine Society guideline, 2016): <b>100 mg into a vein (or muscle) immediately</b>, then <b>200 mg per 24 hours</b> (50 mg every 6 hours, or as a continuous infusion), then taper to oral doses over 1–3 days once the trigger has resolved. The slide's "50 mg every 6 hours, then oral in 4–5 days" fits this maintenance part.<br>• <b>Fluids:</b> "1–3 litres per day" understates the first hour. Give <b>1 litre of 0.9 % saline within the first hour</b>, then adjust to circulation and blood results.<br>• <b>Fludrocortisone 0.1 mg</b> is not needed while hydrocortisone is 50 mg per day or more.<br>• <b>"Large needle (19G)":</b> resuscitation usually uses a large-bore cannula (18 gauge or wider). 19 gauge is not usually called large-bore.<br>• "HHS" on the slide = hydrocortisone hemisuccinate (the injectable form).</div>`,
recap:["Suspected adrenal crisis → treat immediately; never wait for cortisol results.","Hydrocortisone 100 mg into a vein or muscle, then 200 mg per 24 hours; 1 litre 0.9 % saline in the first hour; glucose if low; treat the trigger.","Hydrocortisone beats dexamethasone (mineralocorticoid effect). Fludrocortisone only once hydrocortisone is below 50 mg per day."],
quiz:[{q:"M.T. is hypotensive and vomiting; the cortisol result is pending until tomorrow. What do you do?",o:["Wait for the cortisol before giving steroids","Take blood, then give hydrocortisone 100 mg into a vein and start 0.9 % saline now","Give fludrocortisone tablets"],a:1,e:"Adrenal crisis is lethal if untreated. Take blood for cortisol and adrenocorticotropic hormone (no delay), then give hydrocortisone and saline immediately. She is vomiting, so tablets will not work."},
{q:"Why is hydrocortisone preferred to dexamethasone in adrenal crisis?",o:["It is cheaper","At high doses it also activates the mineralocorticoid receptor, replacing aldosterone","Dexamethasone does not work on the glucocorticoid receptor"],a:1,e:"Dexamethasone is a pure, potent glucocorticoid with practically no salt-retaining effect. High-dose hydrocortisone covers both deficits."}]},

{id:"a7",title:"Going home: replacement, sick-day rules, monitoring",min:5,goal:6,obj:["Prescribe physiological replacement for primary insufficiency","Teach sick-day rules and the emergency injection","Monitor glucocorticoid and mineralocorticoid replacement correctly","Recall the take-home messages"],html:`
<div class="scene"><b>The scene:</b> M.T. is stable and eating again. Before discharge she asks: "Do I need these tablets forever? And what if I get the flu?"</div>
<h3>M.T.'s discharge plan (slide 31)</h3>
<p>• Correct volume, dehydration and low glucose; salt-rich diet.<br>
• [[hydrocortisone|Hydrocortisone]] 10 mg tablets: 1½ – ½ – 0 = <b>15 mg on waking + 5 mg at midday = 20 mg per day</b> (largest dose in the morning, mimicking the natural morning peak).<br>
• [[fludro|Fludrocortisone]] 0.1 mg once in the morning.<br>
• Calcium 1500 mg per day + vitamin D3 2000 units, 2 tablets a day for 1 month, then 1 a day (for the low vitamin D and secondary hyperparathyroidism).<br>
• Silymarin (milk thistle) 1–1–1 for the liver, plus surgical and gastroenterology review for the gallstones and cholestasis.</p>
<h3>Chronic treatment options (slide 32)</h3>
<table><tr><th>Medicine</th><th>Dose</th><th>Monitoring</th></tr>
<tr><td>[[hydrocortisone|Hydrocortisone]]</td><td>15–25 mg per day in 2–3 doses</td><td rowspan="3">Symptoms of under- or over-replacement (see below)</td></tr>
<tr><td>[[pred|Prednisone]] (alternative)</td><td>3–5 mg once daily</td></tr>
<tr><td>[[dexa|Dexamethasone]]</td><td>0.5 mg once daily (slide; see check below)</td></tr>
<tr><td>[[fludro|Fludrocortisone]]</td><td>0.05–0.2 mg once daily; may need more in summer (salt lost in sweat)</td><td>Blood pressure, sodium, potassium, renin in the upper normal range</td></tr>
<tr><td>[[dhea|Dehydroepiandrosterone]]</td><td>25–50 mg once daily</td><td>Libido, mood, sense of well-being (women)</td></tr></table>
<h3>⚠️ [[sickday|Sick-day rules]] (slide 34): the lifesaver</h3>
<table><tr><th>Situation</th><th>Action</th></tr>
<tr><td>Fever above 38 °C</td><td><b>Double</b> the usual daily hydrocortisone dose</td></tr>
<tr><td>Fever above 39 °C</td><td><b>Triple</b> the usual daily dose</td></tr>
<tr><td>Cannot keep tablets down (repeated vomiting, severe diarrhoea, collapse)</td><td><b>100 mg hydrocortisone into a muscle</b> immediately + emergency care</td></tr></table>
<p>The slide also quotes the National Institute for Health and Care Excellence (2024): during major physical stress, at least 40 mg per day in 2–4 divided doses, continued until recovery (often 2–3 days). And always: <b>never stop glucocorticoids</b>, carry a [[card]], keep a [[kit]], and train patient and family.</p>
<h3>Monitoring (slide 33)</h3>
<table><tr><th>Hydrocortisone (glucocorticoid)</th><th>Fludrocortisone (mineralocorticoid)</th></tr>
<tr><td>Symptoms: fatigue, weakness, appetite, nausea<br>Energy, weight, muscle strength<br>Blood pressure, dizziness on standing<br><b>Too little:</b> ongoing symptoms, weight loss, low pressure<br><b>Too much:</b> weight gain, hypertension, glucose rise, Cushing-like features</td>
<td>Sodium and potassium<br>Blood pressure, including standing<br>Salt craving and hydration<br>Swelling (oedema)<br><b>Too little:</b> salt craving, low sodium, high potassium, high renin<br><b>Too much:</b> hypertension, oedema, suppressed renin</td></tr></table>
<p><b>Key rule:</b> replacement is adjusted <b>clinically</b>. Chasing cortisol levels is not the standard way to adjust it.</p>
<div class="corr">📝 <b>Slide check (slide 32):</b><br>• <b>Dexamethasone 0.5 mg daily</b> appears in the American table, but current guidance (Endocrine Society, 2016) advises <b>against</b> dexamethasone for routine Addison replacement: it is long-acting, hard to dose finely, and carries a high risk of Cushing-like side effects. Hydrocortisone is first choice.<br>• "Low to normal plasma adrenocorticotropic hormone indicates over-replacement": in primary insufficiency adrenocorticotropic hormone is high before the morning dose anyway, and guidelines advise against using it to adjust the dose. Slide 33 agrees: adjust by symptoms and signs.</div>
<div class="exam" style="border-color:var(--ok)"><b>🏁 Take-home messages (slide 35)</b><ul>
<li>Clinical suspicion of acute adrenal insufficiency → start emergency treatment <b>before</b> diagnostic confirmation.</li>
<li>Primary insufficiency → replace glucocorticoid <b>and</b> mineralocorticoid at physiological doses.</li>
<li>Monitor clinically: symptoms, blood pressure, electrolytes, glucose.</li>
<li>Autoimmune cause → often associated with other autoimmune diseases.</li>
<li>Imaging is less important in primary adrenal insufficiency.</li></ul></div>
<div class="hint">💡 <b>"38 double, 39 triple, vomit = needle."</b></div>`,
recap:["Primary insufficiency: hydrocortisone 15–25 mg per day in 2–3 doses (biggest dose on waking) + fludrocortisone 0.05–0.2 mg per day.","Sick-day rules: above 38 °C double, above 39 °C triple, vomiting → 100 mg hydrocortisone into a muscle and go to hospital.","Monitor clinically; fludrocortisone by blood pressure, sodium, potassium and renin."],
quiz:[{q:"M.T. (hydrocortisone 20 mg per day) has the flu with a temperature of 38.5 °C and is eating and drinking. What should she take?",o:["Her usual 20 mg","40 mg per day (double)","100 mg into a muscle"],a:1,e:"Fever above 38 °C → double the usual daily dose while she can keep tablets down. Above 39 °C → triple."},
{q:"Two days later she vomits repeatedly and cannot keep tablets down. Correct action?",o:["Triple the oral dose","Inject 100 mg hydrocortisone into a muscle and seek emergency care","Skip the tablets until the vomiting stops"],a:1,e:"If tablets are not absorbed, oral dosing fails. Inject 100 mg hydrocortisone into a muscle immediately and go to hospital."},
{q:"Which is the best way to check that her fludrocortisone dose is right?",o:["Morning cortisol","Blood pressure (lying and standing), sodium, potassium and renin","Thyroid-stimulating hormone"],a:1,e:"Mineralocorticoid replacement is judged by volume status and electrolytes, with renin in the upper normal range."}]}
);
