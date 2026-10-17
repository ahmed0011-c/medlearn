/* ===== Subsection 7: widget data, cases, flashcards, exam ===== */
Object.assign(M7,{
sort3:{id:"e5-sort",labels:["Falsely high","Falsely low","No effect"],items:[
["Passing more than about 5 litres of urine a day (drinking a lot)",0,"Very high urine volume falsely raises urinary free cortisol. Ask the patient to keep a normal fluid intake during the collection."],
["Missing several urine samples during the collection",1,"Some of the day's cortisol is simply not in the bottle. Check urine creatinine."],
["Reduced kidney function (creatinine clearance below about 60 mL/min)",1,"Less cortisol is filtered, so production is underestimated."],
["Taking the combined oestrogen pill",2,"The pill raises cortisol-binding globulin, but urine only contains free cortisol."],
["Severe depression or heavy alcohol use",0,"Pseudo-Cushing states activate the axis and can raise urinary free cortisol mildly."],
["Taking prednisolone tablets (older immunoassay)",0,"Prednisolone can cross-react with some cortisol immunoassays; mass-spectrometry assays avoid this."]]},
cases:[
{id:"p1",title:"Case 1: The inhaler that caused Cushing syndrome",steps:[
{t:`<b>The scene:</b> A 38-year-old man with well-controlled human immunodeficiency virus infection takes a ritonavir-boosted regimen. For asthma he uses a fluticasone inhaler. Over 4 months he develops a round face, easy bruising and a new high glucose.`,q:"What is the most likely mechanism?",o:["Ritonavir blocks cytochrome P450 3A4, so fluticasone builds up in the body","Fluticasone causes a pituitary tumour","Ritonavir stimulates the adrenal directly"],a:0,e:"Fluticasone is normally almost completely broken down by cytochrome P450 3A4. With ritonavir it accumulates and acts systemically: drug-interaction Cushing syndrome."},
{t:`A morning blood cortisol is very low and adrenocorticotropic hormone is low.`,q:"Why is HIS OWN cortisol low although he looks Cushingoid?",o:["Fluticasone suppresses the axis by negative feedback and is not measured as cortisol","He also has Addison disease","The sample was taken at midnight"],a:0,e:"The synthetic steroid gives the Cushing picture and suppresses corticotropin-releasing hormone and adrenocorticotropic hormone, so the adrenal makes little cortisol."},
{t:`The team wants to stop the fluticasone today.`,q:"Best next step?",o:["Stop the inhaler today without cover","Switch to an inhaled steroid less dependent on cytochrome P450 3A4 (for example beclometasone) or change the antiretroviral, give hydrocortisone cover and a steroid emergency card, and test the axis later","Add a second ritonavir dose"],a:1,e:"His axis is suppressed; sudden withdrawal can cause adrenal insufficiency. Change the interaction, protect him with hydrocortisone and safety rules, and test recovery later."}],
take:["Cytochrome P450 3A4 inhibitors (ritonavir, cobicistat, azoles) turn 'local' steroids into systemic ones.","Exogenous Cushing syndrome: own cortisol and adrenocorticotropic hormone are LOW.","Never stop suddenly: the axis is suppressed."]},
{id:"p2",title:"Case 2: Addison disease meets rifampicin",steps:[
{t:`<b>The scene:</b> A 55-year-old woman with autoimmune Addison disease (hydrocortisone 20 mg per day, fludrocortisone 100 µg) starts rifampicin, isoniazid, pyrazinamide and ethambutol for lung tuberculosis. After two weeks she is exhausted, nauseous and dizzy on standing.`,q:"What is the most likely explanation?",o:["Rifampicin speeds up cortisol breakdown, so her dose is now too low","Tuberculosis has spread to her pituitary","Ethambutol blocks the glucocorticoid receptor"],a:0,e:"Rifampicin is a strong enzyme inducer; her hydrocortisone is cleared faster, giving symptoms of under-replacement."},
{t:`You increase hydrocortisone (commonly doubled) and teach sick-day rules again.`,q:"What happens when the tuberculosis treatment ends in a few months?",o:["Keep the high dose forever","Return to her usual dose, because the induction wears off over the following weeks","Stop hydrocortisone"],a:1,e:"Enzyme induction fades over a few weeks after rifampicin stops; then the usual replacement dose is enough again."}],
take:["Enzyme inducers (rifampicin, phenytoin, carbamazepine) increase steroid needs.","Review steroid dose whenever an interacting drug starts or stops.","Under-replacement looks like insufficiency: fatigue, nausea, postural dizziness."]},
{id:"p3",title:"Case 3 (bonus): High cortisol, but only on paper",steps:[
{t:`<b>The scene:</b> A 26-year-old woman taking the combined pill had a morning serum cortisol measured "for tiredness". It is above the reference range. She has no features of Cushing syndrome. Her 24-hour urinary free cortisol is normal (two collections).`,q:"What explains the high serum value?",o:["Oestrogen raises cortisol-binding globulin, so total (bound + free) cortisol rises","Early Cushing disease","Liquorice"],a:0,e:"Total cortisol rises with cortisol-binding globulin, but the free fraction (and urinary free cortisol) stays normal."},
{t:`Her doctor now wants a 1 mg overnight dexamethasone test.`,q:"What should be done about the pill?",o:["Nothing","Stop oral oestrogen about 6 weeks before the test, or use late-night saliva cortisol or 24-hour urine free cortisol instead","Double the pill dose"],a:1,e:"Raised cortisol-binding globulin can make the dexamethasone test look 'not suppressed' (falsely positive). Guidelines advise stopping oral oestrogen about 6 weeks before testing (Nieman and colleagues, 2008). Patches, gels and progestogen-only methods barely change cortisol-binding globulin."}],
take:["Total cortisol depends on cortisol-binding globulin; free cortisol does not.","Urinary free cortisol and salivary cortisol are unaffected by the pill.","The pill can make the dexamethasone test falsely positive."]}
],
flash:[["Plasma half-life of cortisol","Roughly 1 to 1.5 hours."],
["Main liver inactivation step for cortisol","A-ring reduction (5-alpha-/5-beta-reductase + 3-alpha-hydroxysteroid dehydrogenase) → tetrahydrocortisol."],
["Why conjugate with glucuronic acid?","To make the inactive metabolite water-soluble for urinary excretion."],
["Minor cortisol route important for drug interactions","6-beta-hydroxylation by cytochrome P450 3A4."],
["Aldosterone half-life","About 15–20 minutes."],
["11-beta-hydroxysteroid dehydrogenase type 1","Cortisone → cortisol; liver, fat, brain, skin, bone; activates prednisone."],
["11-beta-hydroxysteroid dehydrogenase type 2","Cortisol → cortisone; kidney, colon, salivary and sweat glands, placenta; guards the mineralocorticoid receptor."],
["Liquorice: renin and aldosterone?","Both LOW, with high blood pressure and low potassium (apparent mineralocorticoid excess)."],
["Why is potassium very low in ectopic adrenocorticotropic hormone syndrome?","Cortisol flood saturates 11-beta-hydroxysteroid dehydrogenase type 2 and acts on the mineralocorticoid receptor."],
["Which steroids cross the placenta well?","Dexamethasone and betamethasone (poor substrates for placental type 2)."],
["What does 24-hour urinary free cortisol measure?","Free (unbound) cortisol filtered into urine over a whole day."],
["Urinary free cortisol falsely low","Incomplete collection, severe kidney disease."],
["Effect of rifampicin on hydrocortisone dose","Increase (often double) while on rifampicin."],
["Inhaled fluticasone + ritonavir","Cushing syndrome, then adrenal insufficiency if stopped suddenly."]],
exam:[
"Cortisol plasma half-life ≈ 1–1.5 hours; only <b>free</b> cortisol is inactivated, mainly in the <b>liver</b>.",
"Liver: <b>A-ring reduction</b> (main inactivation) → <b>conjugation</b> with glucuronic acid or sulfate → urine. 6-beta-hydroxylation by cytochrome P450 3A4 is minor for cortisol.",
"Aldosterone half-life ≈ 15–20 min (tetrahydroaldosterone, aldosterone 18-glucuronide). Dehydroepiandrosterone → sulfate; androstenedione → testosterone → dihydrotestosterone.",
"<b>Type 1 turns ON</b> (cortisone → cortisol; liver, fat, brain; prednisone → prednisolone). <b>Type 2 says NO</b> (cortisol → cortisone; kidney, colon, salivary glands, placenta).",
"Liquorice / inherited type 2 deficiency / ectopic cortisol flood → apparent mineralocorticoid excess: hypertension, low potassium, <b>low renin and low aldosterone</b>.",
"Placenta (type 2) inactivates cortisol and much prednisolone; dexamethasone and betamethasone reach the fetus.",
"Cushing screening: 24-hour urinary free cortisol (×2), late-night salivary cortisol, 1 mg overnight dexamethasone test. Not a random cortisol.",
"Inducers (rifampicin) ↑ dose; inhibitors (ritonavir) → Cushing from inhalers; steroids before thyroxine."],
finalHtml:`<div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br>See how the brain controls all this in <b>Subsection 8: the hypothalamic–pituitary–adrenal axis</b>.<br><button class="pri" style="margin-top:8px" onclick="showModule('m8')">→ Open subsection 8</button></div>`,
sources:"Sources: Lecture 7 (Prof. Ionela Pascanu, UMCH 2026), pages 23–25 and their figures (Guyton and Hall Textbook of Medical Physiology 2021), extended with standard endocrinology and pharmacology textbooks (Williams Textbook of Endocrinology; Goodman and Gilman) and the Endocrine Society guideline on the diagnosis of Cushing syndrome (Nieman et al., 2008). No prevalence figures are given on purpose. The cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Three short cases. Answer to reveal the next part."
});
LESSONS.m7=M7;
