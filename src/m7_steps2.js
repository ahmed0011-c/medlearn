/* ===== Subsection 7: steps 4–6 ===== */
M7.cards.push(
{id:"e4",title:"Liquorice: when the guard falls asleep",min:4,goal:3,obj:["Explain apparent mineralocorticoid excess step by step","Predict renin, aldosterone and potassium","List other causes of the same 'low–low' pattern"],html:`
<div class="scene"><b>The scene:</b> A 47-year-old woman has new high blood pressure, muscle cramps and a potassium of 2.9 mmol/L. Renin and aldosterone are both <b>low</b>. On direct questioning she drinks several cups of liquorice tea a day "for her stomach".</div>
<p><b>Step by step:</b></p>
<ol><li>Glycyrrhetinic acid from [[liquorice]] blocks [[hsd11b2]] in the kidney.</li>
<li>Cortisol is no longer switched off and occupies the [[mr]].</li>
<li>The kidney keeps sodium and water and loses potassium (and acid) → high blood pressure, low potassium.</li>
<li>Volume expansion switches off [[renin]] → aldosterone falls. This is [[ame]]: the effect of aldosterone without aldosterone.</li></ol>
<table><tr><th>Pattern (high blood pressure + low potassium)</th><th>Renin</th><th>Aldosterone</th></tr>
<tr><td>Primary hyperaldosteronism (Conn syndrome)</td><td>Low</td><td><b>High</b></td></tr>
<tr><td>Renal artery stenosis, diuretics</td><td>High</td><td>High</td></tr>
<tr><td>Liquorice, inherited type 2 deficiency, cortisol flood in [[ectopic]], [[liddle]]</td><td>Low</td><td><b>Low</b></td></tr></table>
<p><b>Why the cortisol flood?</b> In ectopic adrenocorticotropic hormone syndrome cortisol rises so high that type 2 is saturated; the excess spills onto the mineralocorticoid receptor. That is why very low potassium is typical of the ectopic form of Cushing syndrome.</p>
<p><b>Treatment:</b> stop liquorice (blood pressure and potassium recover over weeks), replace potassium, and use [[spiro]] if needed. Liquorice is in sweets, teas, herbal remedies and some chewing tobacco.</p>
<div class="hint">💡 <b>"Low–low with low potassium? Someone else is sitting in aldosterone's chair."</b> Ask about liquorice first: it is cheap to stop and easy to miss.</div>
<details class="chk"><summary>✋ Checkpoint: would spironolactone help a liquorice patient?</summary><p>Yes. The problem is cortisol acting on the mineralocorticoid receptor, and spironolactone blocks that receptor whatever the hormone sitting on it.</p></details>
<p>Revisit the liquorice lover in <a onclick="showModule('m5');setTimeout(()=>go('k2'),300)" style="cursor:pointer;color:var(--acc);font-weight:700">Module 5, case 2</a>.</p>`,
recap:["Liquorice blocks 11-beta-hydroxysteroid dehydrogenase type 2 → cortisol acts on the mineralocorticoid receptor.","Result: high blood pressure, low potassium, LOW renin and LOW aldosterone.","Same pattern: inherited type 2 deficiency, cortisol flood (ectopic adrenocorticotropic hormone), Liddle syndrome."],
quiz:[{q:"High blood pressure, potassium 2.9 mmol/L, renin low, aldosterone low. Which cause fits?",o:["Primary hyperaldosteronism","Renal artery stenosis","Daily liquorice"],a:2,e:"Low renin AND low aldosterone with mineralocorticoid effects means something other than aldosterone is acting: liquorice (cortisol on the receptor)."},
{q:"Why is low potassium especially common in ectopic adrenocorticotropic hormone syndrome?",o:["Cortisol saturates 11-beta-hydroxysteroid dehydrogenase type 2 and acts on the mineralocorticoid receptor","Adrenocorticotropic hormone blocks the kidney's potassium channels","The tumour secretes renin"],a:0,e:"Very high cortisol overwhelms the type 2 'guard', so cortisol has an aldosterone-like effect."}]},

{id:"e5",title:"Measuring the output: 24-hour urinary free cortisol",min:4,goal:4,obj:["Explain what urinary free cortisol reflects","Collect it correctly","Recognise false highs and false lows"],html:`
<div class="scene"><b>The scene:</b> A general practitioner refers a woman with weight gain, new diabetes and bruising. A single afternoon blood cortisol was "normal". Is that reassuring?</div>
<p>No. Cortisol is pulsatile and has a strong daily rhythm (Module 8), so one random value says little. To screen for [[cushsyn]] we use tests that look at the <b>whole day</b> or at the <b>midnight low</b>: [[ufc]], [[lnsc]] and the 1 mg overnight [[dst]].</p>
<p><b>Why urine works:</b> only <b>free</b> cortisol is filtered by the kidney. When cortisol rises, cortisol-binding globulin becomes saturated, the free part rises steeply, and so does urinary free cortisol. It is <b>not affected by cortisol-binding globulin</b> (for example the pill).</p>
<p><b>How to collect:</b> discard the first urine on waking on day 1, then collect <b>every</b> drop for 24 hours, including the first urine on waking on day 2. Usually <b>two</b> collections are done; urine creatinine checks completeness.</p>
<p>👉 Sort these: does each one make urinary free cortisol falsely high, falsely low, or neither?</p>
<div data-widget="sort3"></div>
<div class="hint">💡 <b>"Urine tells the 24-hour story; blood tells one moment."</b> Always ask: was the collection complete, and does the patient drink litres of water?</div>
<details class="chk"><summary>✋ Checkpoint: why can urinary free cortisol be falsely LOW in severe kidney disease?</summary><p>Less cortisol is filtered into the urine, so a truly high production can look normal.</p></details>`,
recap:["Random cortisol is useless for Cushing screening; use urinary free cortisol, late-night salivary cortisol or the 1 mg dexamethasone test.","Urinary free cortisol = filtered free cortisol over 24 hours, unaffected by cortisol-binding globulin.","Pitfalls: incomplete collection, very high fluid intake, kidney failure, pseudo-Cushing states, some interfering drugs."],
quiz:[{q:"A woman on the combined pill has a high total blood cortisol. Which test is NOT distorted by her raised cortisol-binding globulin?",o:["Morning total serum cortisol","24-hour urinary free cortisol","Both are distorted equally"],a:1,e:"Urine contains only filtered free cortisol, so changes in cortisol-binding globulin do not affect it."},
{q:"Which finding suggests an INCOMPLETE 24-hour urine collection?",o:["Unusually low urine creatinine","High urine volume","Normal urine sodium"],a:0,e:"Creatinine excretion per day is fairly constant for a person; a low value means urine was missed."}]},

{id:"e6",title:"Speed-up and slow-down: drugs, thyroid, liver and kidney",min:4,goal:5,obj:["Predict the effect of enzyme inducers and inhibitors on steroid dosing","Explain 'steroids before thyroxine'","Describe how liver and kidney disease change steroid handling"],html:`
<div class="scene"><b>The scene:</b> A man with Addison disease starts treatment for tuberculosis. Two weeks later he is exhausted and dizzy, although he never missed a hydrocortisone tablet.</div>
<table><tr><th>Situation</th><th>Effect on steroid breakdown</th><th>What to do</th></tr>
<tr><td>[[inducer|Enzyme inducers]]: [[rifampicin]], phenytoin, carbamazepine, phenobarbital, St John's wort</td><td><b>Faster</b> (more [[cyp3a4]]); dexamethasone and prednisolone strongly affected, hydrocortisone too</td><td>Higher dose (often double hydrocortisone); reduce again when the drug stops</td></tr>
<tr><td>[[inhib|Enzyme inhibitors]]: [[ritonavir]], itraconazole, ketoconazole, clarithromycin</td><td><b>Slower</b>; even inhaled [[fluticasone]] or [[budes]] and joint injections build up</td><td>Choose a steroid less dependent on this enzyme (for example beclometasone inhaler), or change the interacting drug</td></tr>
<tr><td>Overactive thyroid</td><td>Faster cortisol clearance</td><td>Higher replacement needs until the thyroid is controlled</td></tr>
<tr><td>Underactive thyroid</td><td>Slower clearance</td><td><b>Steroids before thyroxine</b>: thyroxine speeds clearance and can trigger a crisis in untreated adrenal insufficiency</td></tr>
<tr><td>Liver cirrhosis</td><td>Slower clearance; less cortisol-binding globulin and albumin; slower aldosterone clearance</td><td>Interpret total cortisol with care; prefer prednisolone over prednisone</td></tr>
<tr><td>Kidney failure</td><td>Metabolites build up; urinary free cortisol falsely low</td><td>Use blood or saliva tests instead</td></tr></table>
<div class="hint">💡 <b>"INducers INcrease the dose you need; INhibitors INflate the steroid effect."</b></div>
<details class="chk"><summary>✋ Checkpoint: a patient on ritonavir uses a fluticasone nasal spray and develops a round face. What happens if you simply stop the spray?</summary><p>The axis is suppressed, so stopping suddenly can cause adrenal insufficiency. Switch carefully, and cover with hydrocortisone and test the axis if needed.</p></details>`,
recap:["Inducers (rifampicin, antiepileptics) speed up steroid breakdown → higher doses.","Inhibitors (ritonavir, cobicistat, azole antifungals) → Cushing syndrome even from inhaled or injected steroids.","Thyroxine speeds cortisol clearance: replace cortisol first. Kidney failure makes urinary free cortisol falsely low."],
quiz:[{q:"A patient with Addison disease starts rifampicin. What usually happens to the hydrocortisone dose?",o:["It is increased (often doubled)","It is halved","No change"],a:0,e:"Rifampicin induces cytochrome P450 3A4 and speeds up cortisol breakdown, so replacement must be increased while it is taken."},
{q:"Why should glucocorticoid replacement start before thyroxine when both are missing?",o:["Thyroxine speeds cortisol clearance and can precipitate adrenal crisis","Thyroxine blocks the glucocorticoid receptor","Hydrocortisone lowers thyroxine absorption"],a:0,e:"Thyroid hormone raises metabolism and cortisol clearance; without cortisol replacement this can tip the patient into crisis."}]}
);
