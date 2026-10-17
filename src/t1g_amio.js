/* ===== Thyroid · Lecture 6 part 1 · 7: Iodine-induced and amiodarone-induced thyrotoxicosis (lecture pages 63–71) ===== */
Object.assign(GLOSSARY,{
amio:{l:"amiodarone",c:"drug",d:"Anti-arrhythmic drug containing about 37% iodine by weight; stored in fat for months.",w:"Can cause both hypothyroidism and thyrotoxicosis."},
ait1:{l:"amiodarone-induced thyrotoxicosis type 1",c:"disease",d:"Iodine-driven overproduction in an abnormal gland (nodules or latent Graves disease).",w:"Treated with antithyroid drugs (± perchlorate)."},
ait2:{l:"amiodarone-induced thyrotoxicosis type 2",c:"disease",d:"Destructive thyroiditis caused directly by amiodarone in a normal gland.",w:"Treated with glucocorticoids."},
perchl:{l:"sodium perchlorate",c:"drug",d:"Blocks iodide uptake by the sodium-iodide symporter.",w:"Added in type 1 to stop more iodine entering the gland."},
aih:{l:"amiodarone-induced hypothyroidism",c:"disease",d:"Iodine excess blocks hormone synthesis (Wolff–Chaikoff effect) and the gland fails to escape, often with autoimmune thyroiditis.",w:"Treat with levothyroxine; amiodarone can be continued."},
wolff:{l:"Wolff–Chaikoff effect",c:"concept",d:"A large iodine load briefly switches off hormone synthesis; the normal gland escapes within days.",w:"Failure to escape → hypothyroidism."}
});
XSORT.ait={t:"Type 1 or type 2?",labels:["Type 1","Type 2"],items:[["Pre-existing nodular goitre or latent Graves disease",0,"Abnormal gland."],["Previously normal thyroid",1,"Direct toxic damage."],["Increased blood flow on Doppler",0,"Overproduction."],["Absent blood flow on Doppler",1,"Destruction."],["Responds to glucocorticoids",1,"Inflammation."],["Treated with thiamazole ± perchlorate",0,"Synthesis."],["Very low uptake",1,"Destruction (uptake can be low in type 1 too, because of the iodine load)."]]};
XS.t1g=["Spot the error",[["Amiodarone contains about 37% iodine by weight.",1],["Amiodarone must always be stopped in amiodarone-induced thyrotoxicosis.",0,"Wrong: the decision is <b>cardiological</b>; stopping helps little quickly because it stays in fat for months, and it may be essential for the heart."],["Type 2 is treated with prednisone, tapered over about 3 months.",1],["Hypothyroidism on amiodarone is treated with levothyroxine while amiodarone continues.",1]]];
XT.t1g="amio,ait1,ait2,perchl,aih,wolff,jodbas,doppler,mmi";
const T1G={
meta:"Endocrinology › Thyroid › Lecture 6 part 1 › Subsection 6.1.7 · lecture pages 63–71 · ⏱ about 15 minutes in 3 bite-sized steps",
intro:`<p>Iodine is the fuel of the thyroid; too much of it can overheat an abnormal gland, and amiodarone carries a huge iodine load plus a direct toxic effect. This subsection sorts the types and their treatment.</p>`,
goals:["Explain iodine excess effects","Distinguish amiodarone thyrotoxicosis types 1 and 2","Treat each type"],
cards:[
{id:"am1",title:"Too much iodine",min:4,goal:0,obj:["Explain Wolff–Chaikoff and Jod-Basedow"],html:`
<div class="scene"><b>The scene:</b> A 74-year-old man starts [[amio]] 200 mg daily for atrial fibrillation.</div>
<p>One 200 mg tablet contains about 75 mg iodine (several hundred times the daily need). Effects: [[wolff]] (normal gland escapes; failure → [[aih]]) or [[jodbas]] in nodular glands. Other iodine sources: contrast, kelp, povidone-iodine.</p>
<div class="hint">💡 <b>"A normal gland adapts; an abnormal gland over- or under-reacts."</b></div>
<details class="chk"><summary>✋ Checkpoint: what tests before starting amiodarone?</summary><p>Thyroid-stimulating hormone (and free thyroxine), antibodies optional; then every 6 months.</p></details>`,
recap:["Amiodarone: huge iodine load.","Wolff–Chaikoff: block; failure to escape → hypothyroidism.","Jod-Basedow: thyrotoxicosis in nodular glands."],
quiz:[{q:"Iodine in one 200 mg amiodarone tablet?",o:["About 75 mg","About 150 µg","None"],a:0,e:"37% by weight."},{q:"Monitoring on amiodarone?",o:["Thyroid-stimulating hormone every 6 months","Never","Only if symptoms"],a:0,e:"Standard."}]},
{id:"am2",title:"Type 1 versus type 2",min:6,goal:1,obj:["Sort features"],html:`
<div class="scene"><b>The scene:</b> After 2 years he has worsening atrial fibrillation and weight loss. Thyroid-stimulating hormone suppressed, free thyroxine high.</div>
<p>[[ait1]] versus [[ait2]]: history (nodules, antibodies), ultrasound with [[doppler]], uptake (often low in both), and response.</p>
<div data-widget="sortset" data-set="ait"></div>
<div class="hint">💡 <b>"Type 1 = one more fuel for a sick gland; type 2 = toxic damage to a healthy gland."</b></div>
<details class="chk"><summary>✋ Checkpoint: Doppler shows no flow in a normal-sized gland. Type?</summary><p>Type 2.</p></details>`,
recap:["Type 1: abnormal gland, flow ↑.","Type 2: normal gland, flow absent.","Mixed forms exist."],
quiz:[{q:"Type 2 Doppler?",o:["Absent flow","High flow"],a:0,e:"Destruction."},{q:"Type 1 background?",o:["Nodules or latent Graves","Normal gland"],a:0,e:"Abnormal gland."}]},
{id:"am3",title:"Treatment",min:5,goal:2,obj:["Treat each type"],html:`
<div class="scene"><b>The scene:</b> His Doppler shows absent flow; no nodules.</div>
<ul><li><b>Type 1:</b> [[mmi]] in higher doses (iodine-rich glands respond slowly) ± [[perchl]]; definitive surgery or (later) radioactive iodine.</li><li><b>Type 2:</b> prednisone about 0.5–0.7 mg/kg daily, tapered over about 3 months.</li><li><b>Mixed or unclear:</b> both.</li><li><b>Severe or heart failing:</b> early total thyroidectomy.</li><li><b>Amiodarone:</b> continue or stop by cardiological need.</li></ul>
<div class="corr">📝 <b>Slide check (page 69):</b> for type 2, the European Thyroid Association (2018) recommends prednisone about <b>0.5–0.7 mg/kg</b> daily, tapered over about 3 months (the slide's dose and duration differ).</div>
<div class="hint">💡 <b>"Type 1 tablets that block; type 2 steroids that calm."</b></div>
<details class="chk"><summary>✋ Checkpoint: his treatment?</summary><p>Type 2: prednisone 0.5–0.7 mg/kg, tapered over about 3 months.</p></details>`,
recap:["Type 1: thiamazole ± perchlorate.","Type 2: prednisone 0.5–0.7 mg/kg, 3-month taper.","Severe: thyroidectomy; amiodarone by cardiology."],
quiz:[{q:"Type 2 treatment?",o:["Prednisone","Thiamazole only","Radioactive iodine"],a:0,e:"Glucocorticoid."},{q:"Why does radioactive iodine not work early?",o:["The iodine load blocks uptake","It is too expensive","It always works"],a:0,e:"Low uptake."}]}],
cases:[{id:"amk1",title:"Case 1: The heart patient",steps:[
{t:`<b>The scene:</b> 74-year-old man, amiodarone for 2 years, now thyrotoxic. Normal-sized gland, no nodules, absent Doppler flow.`,q:"Type?",o:["Type 2","Type 1"],a:0,e:"Destructive."},{t:`Treatment?`,q:"Plan?",o:["Prednisone, taper over about 3 months","Radioactive iodine","Lugol"],a:0,e:"ETA 2018."}],take:["Doppler helps separate types."]},
{id:"amk2",title:"Case 2: Tired on amiodarone",steps:[
{t:`<b>The scene:</b> 66-year-old woman on amiodarone: tired, thyroid-stimulating hormone 18 mU/L, antibodies positive.`,q:"Treatment?",o:["Levothyroxine, continue amiodarone","Stop amiodarone immediately","Thiamazole"],a:0,e:"Amiodarone-induced hypothyroidism."}],take:["Hypothyroidism on amiodarone: replace."]}],
flash:[["Iodine content","About 37% by weight; 75 mg per 200 mg tablet."],["Wolff–Chaikoff","Iodine briefly blocks synthesis."],["Jod-Basedow","Iodine-induced thyrotoxicosis in nodules."],["Type 1","Abnormal gland, flow ↑, thiamazole ± perchlorate."],["Type 2","Normal gland, no flow, prednisone."],["Prednisone dose","0.5–0.7 mg/kg, 3-month taper."],["Severe cases","Total thyroidectomy."],["Stop amiodarone?","Cardiology decision."],["Hypothyroidism on amiodarone","Levothyroxine."],["Monitoring","Thyroid-stimulating hormone every 6 months."]],
exam:["Iodine load: Wolff–Chaikoff, Jod-Basedow.","Type 1 vs type 2: background, Doppler.","Type 1: thionamides ± perchlorate; type 2: prednisone 0.5–0.7 mg/kg.","Thyroidectomy if severe.","Hypothyroidism: levothyroxine; continue amiodarone."],
finalHtml:`<div data-widget="spot" data-set="t1g"></div><div data-widget="termdeck" data-set="t1g"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>8. Thyrotoxicosis in pregnancy, fetus and newborn.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t1h')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 1 (Prof. Ionela Pascanu, UMCH 2026), pages 63–71; European Thyroid Association guideline on amiodarone and the thyroid (Bartalena et al., Eur Thyroid J 2018); American Thyroid Association guideline (2016). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t1g=T1G;
