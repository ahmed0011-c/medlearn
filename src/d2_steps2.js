/* ===== Module 2.2: steps 5–7 ===== */
D2.cards.push(
{id:"b5",title:"Adrenal crisis: recognise it, treat it now",min:4,goal:4,obj:["Recognise the picture and the usual triggers of an adrenal crisis","Give hydrocortisone, saline and glucose in the right doses","Know why you never wait for the cortisol result"],html:`
<div class="scene"><b>The scene:</b> 2 a.m. A man with known Addison disease arrives after a day of vomiting and diarrhoea. He is confused, blood pressure 75/40 mmHg, sodium 127 mmol/L, potassium 6.0 mmol/L, glucose 3.0 mmol/L. The night laboratory cannot run cortisol until morning.</div>
<p>An [[crisis]] is a medical emergency: <b>shock</b> (often not responding to fluids alone), vomiting, abdominal pain (it can mimic an acute abdomen), fever, confusion or reduced consciousness, plus low sodium, high potassium (primary) and low glucose.</p>
<p><b>Typical triggers:</b> infections (especially gastroenteritis, because tablets are vomited), surgery or trauma, missed or stopped tablets, starting thyroxine before hydrocortisone, and starting [[inducer|enzyme-inducing drugs]]. It can also be the first presentation of undiagnosed insufficiency, or of [[adrhaem]].</p>
<p>👉 Click through the emergency flow:</p>
<div data-widget="crisis"></div>
<p><b>The golden rule (Endocrine Society guideline, 2016):</b> if you suspect it, <b>take blood for cortisol and adrenocorticotropic hormone if it costs no time, then give [[hydrocortisone]] immediately.</b> A missed crisis can kill; one unnecessary dose of hydrocortisone almost never harms.</p>
<table><tr><th>Treatment</th><th>Dose (adults)</th></tr>
<tr><td>Hydrocortisone</td><td><b>100 mg</b> into a vein (or into a muscle) immediately, then <b>200 mg per 24 hours</b> (50 mg every 6 hours or as a continuous infusion)</td></tr>
<tr><td>Fluid</td><td><b>1 litre of 0.9 % saline within the first hour</b>, then guided by circulation, urine output and electrolytes</td></tr>
<tr><td>Glucose</td><td>If glucose is low (dextrose)</td></tr>
<tr><td>Trigger</td><td>Find and treat it (for example antibiotics for infection)</td></tr>
<tr><td>Later</td><td>Taper to oral doses over 1–3 days once the trigger has resolved; add [[fludro]] in primary insufficiency when hydrocortisone is below 50 mg per day</td></tr></table>
<p>High-dose hydrocortisone also acts on the mineralocorticoid receptor, which is why it beats [[dexa]] (no salt-retaining effect) in crisis.</p>
<div class="hint">💡 <b>The 5 S:</b> Salt (saline), Sugar (glucose), Steroid (hydrocortisone), Support (monitoring, intensive care), Search for the trigger.</div>`,
recap:["Crisis: shock, vomiting, abdominal pain, confusion; low sodium, high potassium, low glucose. Common trigger: gastroenteritis.","Draw cortisol and adrenocorticotropic hormone if it costs no time, but never wait: hydrocortisone 100 mg now, then 200 mg per 24 hours.","1 litre 0.9 % saline in the first hour, glucose if low, treat the trigger, taper over 1–3 days."],
quiz:[{q:"The cortisol result will take 8 hours. The patient is in shock. What do you do?",o:["Wait for the result to avoid giving unnecessary steroids","Draw the blood, then give hydrocortisone 100 mg into a vein and start saline now","Give fludrocortisone"],a:1,e:"Adrenal crisis is lethal and the treatment is safe. Treat first, confirm later."},
{q:"Which drug started in a patient with Addison disease can trigger a crisis by speeding up cortisol breakdown?",o:["Rifampicin","Paracetamol","Omeprazole"],a:0,e:"Rifampicin is a strong enzyme inducer: the hydrocortisone is broken down faster, so the dose usually needs to go up."}]},

{id:"b6",title:"Living with it: long-term replacement",min:5,goal:5,obj:["Prescribe physiological glucocorticoid replacement","Know who needs fludrocortisone (and who does not)","Monitor clinically, not with cortisol levels","Handle drug interactions and pregnancy"],html:`
<div class="scene"><b>The scene:</b> The salt-craving teacher is diagnosed with autoimmune Addison disease. She asks: "How many tablets, when, and how will we know the dose is right?"</div>
<h3>Glucocorticoid (everyone)</h3>
<p>[[hydrocortisone|Hydrocortisone]] <b>15–25 mg per day in 2–3 doses</b>, the largest dose on waking (mimicking the natural morning peak), the last dose no later than mid-afternoon. An alternative is [[pred|prednisolone]] 3–5 mg once daily. [[dexa|Dexamethasone]] is not recommended for routine replacement (long-acting, hard to fine-tune, Cushing-like side effects). (Endocrine Society guideline, 2016.)</p>
<h3>Mineralocorticoid (primary only)</h3>
<p>[[fludro|Fludrocortisone]] <b>50–200 µg once daily</b> (often starting at 50–100 µg). No salt restriction. More may be needed in hot weather (salt lost in sweat). <b>Not needed in secondary or tertiary insufficiency</b>, because aldosterone is intact.</p>
<h3>Androgen (optional, women)</h3>
<p>[[dhea|Dehydroepiandrosterone]] 25–50 mg daily may be tried in women with low libido, low mood or low energy despite otherwise good replacement; stop it if there is no benefit.</p>
<h3>Monitoring: clinical, not laboratory cortisol</h3>
<table><tr><th>Hydrocortisone</th><th>Fludrocortisone</th></tr>
<tr><td><b>Too little:</b> fatigue, nausea, weight loss, low blood pressure, pigmentation returning<br><b>Too much:</b> weight gain, high blood pressure, high glucose, Cushing-like features, bone loss<br>Cortisol day curves and adrenocorticotropic hormone are <b>not</b> used routinely to set the dose</td>
<td>Blood pressure lying and standing, sodium, potassium, [[renin]] (aim for the upper normal range)<br><b>Too little:</b> salt craving, postural dizziness, high potassium, high renin<br><b>Too much:</b> high blood pressure, swelling, low potassium, suppressed renin</td></tr></table>
<h3>Drug interactions</h3>
<p>• [[inducer]] (rifampicin, phenytoin, carbamazepine, phenobarbital, St John's wort) → faster breakdown → <b>higher</b> hydrocortisone dose needed.<br>
• [[inhib]] (ritonavir, cobicistat, itraconazole, clarithromycin, grapefruit juice) → slower breakdown → risk of <b>over-replacement</b>.</p>
<h3>Pregnancy</h3>
<p>Continue replacement and monitor clinically; many guidelines suggest a modest hydrocortisone increase in the third trimester, and stress doses at delivery (as for major surgery). Use hydrocortisone or prednisolone rather than dexamethasone, because the placenta inactivates hydrocortisone and prednisolone ([[hsd11b2]], Module 5) but not dexamethasone, which therefore reaches the baby. Renin rises normally in pregnancy, so it is not useful for monitoring fludrocortisone then.</p>
<div class="hint">💡 <b>"Hydro for all, Fludro for the Primary only."</b> And: <b>"Treat the patient, not the cortisol level."</b></div>`,
recap:["Hydrocortisone 15–25 mg per day in 2–3 doses (biggest on waking); prednisolone 3–5 mg is an alternative; avoid dexamethasone.","Fludrocortisone 50–200 µg per day in PRIMARY only; monitor blood pressure, potassium, sodium and renin. Dehydroepiandrosterone is optional for women.","Monitor clinically, not by cortisol levels. Enzyme inducers raise dose needs; ritonavir-type inhibitors cause over-replacement; in pregnancy avoid dexamethasone."],
quiz:[{q:"A man with secondary adrenal insufficiency after pituitary surgery asks whether he needs fludrocortisone. Answer?",o:["Yes, always","No: aldosterone is still controlled by the renin–angiotensin system","Only in winter"],a:1,e:"Secondary insufficiency spares the glomerulosa. Fludrocortisone is for primary insufficiency."},
{q:"How should hydrocortisone replacement mainly be adjusted?",o:["By symptoms, signs, weight, blood pressure and glucose","By measuring adrenocorticotropic hormone every morning","By keeping cortisol in the normal range on a day curve"],a:0,e:"Guidelines recommend clinical assessment. Adrenocorticotropic hormone is high before the morning dose in primary insufficiency anyway, and cortisol levels after tablets are hard to interpret."},
{q:"Why is dexamethasone avoided as replacement in pregnancy?",o:["The placenta does not inactivate it, so it reaches the baby","It is not absorbed in pregnancy","It raises renin"],a:0,e:"Placental 11-beta-hydroxysteroid dehydrogenase type 2 inactivates cortisol (hydrocortisone) and largely prednisolone, but not dexamethasone."}]},

{id:"b7",title:"Staying safe: sick-day rules, card, kit, surgery",min:4,goal:6,obj:["Teach the sick-day rules","Explain the steroid emergency card and the injection kit","Give stress doses for surgery and labour","Make the patient and family the first responders"],html:`
<div class="scene"><b>The scene:</b> Before discharge, the teacher's partner asks: "If she ever collapses or keeps vomiting, what exactly do I do?" This conversation prevents crises.</div>
<h3>⚠️ [[sickday|Sick-day rules]] (Endocrine Society guideline 2016; United Kingdom Society for Endocrinology guidance)</h3>
<table><tr><th>Situation</th><th>Action</th></tr>
<tr><td>Fever above 38 °C, or illness needing bed rest</td><td><b>Double</b> the daily hydrocortisone dose</td></tr>
<tr><td>Fever above 39 °C</td><td><b>Triple</b> the daily dose</td></tr>
<tr><td>Vomiting, diarrhoea, cannot keep tablets down, collapse</td><td><b>100 mg hydrocortisone into a muscle</b> immediately and go to hospital</td></tr></table>
<p>Continue extra doses until recovered (usually a few days), then return to the normal dose. Fludrocortisone is not doubled.</p>
<h3>Always carry, always know</h3>
<p>• A [[card]] (in Germany a "Notfallausweis") and a [[bracelet]].<br>
• A [[kit]] at home, at work and when travelling, plus spare tablets.<br>
• Patient <b>and family</b> trained to give the injection (into the outer thigh muscle).<br>
• Never stop glucocorticoids suddenly.</p>
<h3>[[stressdose|Surgery, labour and procedures]] (typical approach; follow the local protocol)</h3>
<table><tr><th>Situation</th><th>Approach</th></tr>
<tr><td>Major surgery, labour, intensive care</td><td>Hydrocortisone 100 mg into a vein or muscle at the start, then 200 mg per 24 hours until eating and drinking, then about double the usual oral dose for a few days before returning to normal</td></tr>
<tr><td>Minor procedures (for example dental work, endoscopy)</td><td>Extra oral dose or double dose on the day</td></tr></table>
<p><b>Who else needs these rules?</b> Anyone with secondary insufficiency, and anyone on long-term glucocorticoid therapy whose axis may be suppressed ([[gcsup]]). Steroid therapy is covered in module 2.9.</p>
<div class="hint">💡 <b>"38 double, 39 triple, vomit = needle."</b> And: <b>"Card, kit, family, never stop."</b></div>
<div class="exam" style="border-color:var(--ok)"><b>🏥 Practise this on a real case</b><br>Ready to apply it? Work through M.T., a 53-year-old woman with abdominal pain, low blood pressure and low sodium, in CBL 5.<br><button class="pri" style="margin-top:8px" onclick="showModule('cbl5')">→ Open CBL 5: Schmidt syndrome</button></div>`,
recap:["Above 38 °C double, above 39 °C triple, vomiting → 100 mg hydrocortisone into a muscle + hospital.","Steroid emergency card, alert bracelet, injection kit, trained family, never stop tablets.","Surgery and labour: 100 mg at the start, then 200 mg per 24 hours, then about double oral dose for a few days."],
quiz:[{q:"Fever 38.4 °C, eating and drinking, usual dose hydrocortisone 20 mg per day. New daily dose?",o:["20 mg","40 mg","100 mg into a muscle"],a:1,e:"Fever above 38 °C → double the daily dose while tablets stay down."},
{q:"Which statement about fludrocortisone on sick days is correct?",o:["Double it like hydrocortisone","It is usually not changed; high-dose hydrocortisone already has mineralocorticoid effect","Stop it"],a:1,e:"Sick-day rules apply to the glucocorticoid. High hydrocortisone doses add mineralocorticoid action."}]}
);
