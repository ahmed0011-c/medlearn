/* ===== Thyroid · CBL 3 · 3: Radioactive iodine uptake and thyroid scintigraphy (CBL 3 pages 10–14) ===== */
/* SCN(type): own schematic scintigraphy image (anterior view; patient's right lobe on the viewer's left) */
const SCN=(type,w)=>{const id="sg"+Math.random().toString(36).slice(2,7);
const lobe=(cx,op,rx,ry)=>`<ellipse cx="${cx}" cy="70" rx="${rx||20}" ry="${ry||42}" fill="url(#${id}m)" opacity="${op}"/>`;
const isth=op=>`<rect x="58" y="80" width="44" height="18" rx="8" fill="url(#${id}m)" opacity="${op}"/>`;
const spot=(x,y,r,op)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="url(#${id}h)" opacity="${op||1}"/>`;
const ghost=`<g fill="none" stroke="#bbb" stroke-dasharray="3 3"><ellipse cx="50" cy="70" rx="20" ry="42"/><ellipse cx="110" cy="70" rx="20" ry="42"/></g>`;
let b="";
if(type=="normal")b=lobe(50,.55)+lobe(110,.55)+isth(.45);
if(type=="graves")b=lobe(48,1,25,48)+lobe(112,1,25,48)+isth(1)+`<rect x="76" y="20" width="9" height="40" rx="4" fill="url(#${id}m)" opacity=".8"/>`;
if(type=="tmng")b=lobe(50,.18)+lobe(110,.18)+isth(.12)+spot(44,52,10)+spot(58,92,8,.9)+spot(114,46,9)+spot(104,84,11,.95)+spot(118,100,6,.8);
if(type=="flag")b=ghost+spot(50,82,19);
if(type=="comp")b=lobe(50,.3)+lobe(110,.3)+isth(.22)+spot(50,82,17);
if(type=="cold")b=lobe(50,.6)+lobe(110,.6)+isth(.5)+`<ellipse cx="110" cy="92" rx="13" ry="14" fill="#fff"/>`;
if(type=="none")b=ghost+`<circle cx="30" cy="-6" r="7" fill="url(#${id}m)" opacity=".35"/><circle cx="130" cy="-6" r="7" fill="url(#${id}m)" opacity=".35"/>`;
if(type=="lingual")b=ghost+spot(80,-4,14)+`<text x="80" y="128" text-anchor="middle" font-size="9" fill="#777">empty thyroid bed</text>`;
return `<svg viewBox="0 -20 160 160" style="width:${w||150}px;max-width:100%;background:#fff;border:1px solid #ddd;border-radius:8px" role="img" aria-label="Schematic thyroid scintigraphy: ${type}"><defs><radialGradient id="${id}m"><stop offset="0" stop-color="#d84315"/><stop offset=".7" stop-color="#f57c00"/><stop offset="1" stop-color="#ffcc80"/></radialGradient><radialGradient id="${id}h"><stop offset="0" stop-color="#8e0000"/><stop offset=".6" stop-color="#d32f2f"/><stop offset="1" stop-color="#ff8a65" stop-opacity=".6"/></radialGradient></defs>${b}<text x="6" y="134" font-size="9" fill="#777">R</text><text x="148" y="134" font-size="9" fill="#777">L</text></svg>`};
XPK.scint={t:"Scintigraphy pattern game: name the picture",opts:["Graves disease (diffuse, intense)","Toxic multinodular goitre (patchy)","Toxic adenoma: 'Japanese flag'","Compensated autonomous adenoma","Cold nodule","Thyroiditis or tablets (almost no uptake)","Normal"],items:[
["Patient 1: thyrotoxic, orbitopathy.<br>"+SCN("graves"),"Graves disease (diffuse, intense)","Enlarged gland, uniformly intense; a pyramidal lobe is often visible."],
["Patient 2: 72-year-old with a long-standing lumpy goitre, atrial fibrillation.<br>"+SCN("tmng"),"Toxic multinodular goitre (patchy)","Several hot areas, the rest suppressed."],
["Patient 3: thyroid-stimulating hormone suppressed, one palpable nodule.<br>"+SCN("flag"),"Toxic adenoma: 'Japanese flag'","One hot spot, the rest invisible because thyroid-stimulating hormone is switched off."],
["Patient 4: thyroid-stimulating hormone low-normal, one nodule.<br>"+SCN("comp"),"Compensated autonomous adenoma","Hot spot, but the rest of the gland is still visible: not yet fully suppressed."],
["Patient 5: euthyroid, firm 2.5 cm nodule in the left lower pole.<br>"+SCN("cold"),"Cold nodule","Low uptake; ultrasound and usually aspiration decide."],
["Patient 6: painful neck, fever, thyrotoxic.<br>"+SCN("none"),"Thyroiditis or tablets (almost no uptake)","Only the salivary glands and background are seen."],
["Patient 7: routine check, normal tests.<br>"+SCN("normal"),"Normal","Even, moderate uptake in both lobes."]]};
XSORT.raiu={t:"Uptake high or low? (CBL 3 page 10)",labels:["Uptake high","Uptake low"],items:[
["Graves disease",0,"The stimulated gland grabs iodine."],["Toxic nodule (in the nodule)",0,"Autonomous tissue."],["Iodine-deficient goitre",0,"The hungry gland traps more of the little iodine available."],["Subacute or painless thyroiditis",1,"Damaged cells cannot trap iodine."],["Levothyroxine tablets",1,"Thyroid-stimulating hormone is suppressed."],["Iodine contrast scan 3 weeks ago",1,"The tracer is diluted by the huge iodine pool."],["Amiodarone type 2 thyrotoxicosis",1,"Destructive thyroiditis plus iodine load."],["After total thyroidectomy",1,"No tissue."]]};
XS.t3c=["Spot the error",[["Technetium is trapped by the thyroid but not built into hormone.",1],["Scintigraphy is the first test for a euthyroid nodule.",0,"Wrong: ultrasound comes first. Scintigraphy is for nodules with a <b>low thyroid-stimulating hormone</b> (hot or not?)."],["A recent iodine contrast computed tomography lowers uptake for weeks.",1],["A 'Japanese flag' image means a cold nodule.",0,"Wrong: it is a <b>hot</b> nodule with the rest suppressed."]]];
XT.t3c="uptake,scinti,tc99,i123,rai,hotnod,coldnod,compaut,jflag,toxad,tmng,nis";
const T3C={
meta:"Endocrinology › Thyroid › CBL 3 › CBL 3.3 · CBL 3 pages 10–14 · ⏱ about 20 minutes in 3 bite-sized steps",
intro:`<p>The "in vivo" tests use a tiny amount of radioactive tracer to see <b>how much iodine the thyroid grabs</b> (uptake) and <b>where</b> (scintigraphy). They answer one question very well: is this thyrotoxicosis caused by a gland that <b>makes</b> too much hormone, or by one that <b>leaks</b> it?</p>`,
goals:["Interpret radioactive iodine uptake","Recognise scintigraphy patterns","Know indications and contraindications"],
cards:[
{id:"tc1",title:"Uptake: how hungry is the gland?",min:6,goal:0,obj:["Explain the uptake test","Sort high and low uptake causes"],html:`
<div class="scene"><b>The scene:</b> A 35-year-old woman was thyrotoxic 6 weeks after giving birth. Is it Graves disease (treat with tablets) or postpartum thyroiditis (only wait)? She has stopped breastfeeding.</div>
<p>[[uptake]]: the patient swallows a small, measured amount of [[i123]] (or iodine-131 in older protocols) fasting ("à jeun"), and a probe over the neck measures the percentage taken up after a few hours and at 24 hours. [[tc99]] is a quicker alternative, read after 20 minutes. Uptake reflects the activity of the [[nis]].</p>
<div data-widget="sortset" data-set="raiu"></div>
<div class="corr">📝 <b>Fact check (page 10):</b> normal uptake depends on how much iodine the population eats. The higher iodine-131 values on the slide (24 hours 40 ± 5%) come from older measurements in iodine-poor regions; in iodine-sufficient countries a 24-hour uptake of roughly 10–30% is usual, and each department sets its own range. Typos: "RIAU" = radioactive iodine uptake; "acompanying" = <b>accompanying</b> (the slide means painless or subacute thyroiditis).</div>
<div class="hint">💡 <b>"High uptake = factory; low uptake = leak, tablets or flood of iodine."</b></div>
<details class="chk"><summary>✋ Checkpoint: her uptake is 1%. Diagnosis and treatment?</summary><p>Postpartum (destructive) thyroiditis. Beta-blocker for symptoms; no antithyroid drugs. Watch for the hypothyroid phase (see ${XL("t1i","6.1.9")}).</p></details>`,
recap:["Uptake = how much tracer the gland grabs.","High: Graves, toxic nodules, iodine deficiency.","Low: thyroiditis, tablets, iodine excess, no tissue."],
quiz:[{q:"Thyrotoxic, uptake very low. Not…",o:["Graves disease","Painless thyroiditis","Factitious thyrotoxicosis"],a:0,e:"Graves has high uptake."},{q:"Why does iodine contrast lower uptake?",o:["The tracer is diluted by a large iodine pool","It destroys the gland","It blocks thyroid-stimulating hormone"],a:0,e:"Wait 4–8 weeks."}]},
{id:"tc2",title:"Scintigraphy: where is the iodine going?",min:8,goal:1,obj:["Recognise the six classic pictures"],html:`
<div class="scene"><b>The scene:</b> A 64-year-old man with a 3 cm nodule and a thyroid-stimulating hormone of 0.08 mIU/L. Is the nodule the culprit?</div>
<p>[[scinti]] (page 11) is a <b>morphofunctional</b> picture: it shows shape and function together. Terms: an <b>isofunctional</b> nodule looks like the rest; a [[hotnod]] takes up more; a [[coldnod]] takes up less. A hot nodule that works on its own while the rest of the gland still shows is a [[compaut]]; once it suppresses thyroid-stimulating hormone and the rest disappears, it is <b>decompensated</b> (toxic) and gives the [[jflag]] picture (page 13).</p>
${FIG("scinti")}
<div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:8px 0">
<figure style="margin:0;text-align:center">${SCN("graves",120)}<figcaption><small>diffuse, intense</small></figcaption></figure>
<figure style="margin:0;text-align:center">${SCN("tmng",120)}<figcaption><small>patchy</small></figcaption></figure>
<figure style="margin:0;text-align:center">${SCN("flag",120)}<figcaption><small>"Japanese flag"</small></figcaption></figure>
<figure style="margin:0;text-align:center">${SCN("cold",120)}<figcaption><small>cold nodule</small></figcaption></figure></div>
<p style="text-align:center"><small>My own schematic drawings (anterior view: the patient's right lobe is on your left). Darker red = more tracer.</small></p>
<div data-widget="pickset" data-set="scint"></div>
<div class="corr">📝 <b>Fact check (page 14):</b> "a cold nodule may indicate malignancy" is true, but <b>most cold nodules are benign</b> (cysts, colloid nodules, adenomas); textbooks usually quote roughly 5–15% cancer. Hot nodules are almost never malignant, which is why a hot nodule usually needs no aspiration (CBL 4 page 18 algorithm).</div>
<div class="hint">💡 <b>"Japanese flag: one red sun, white sky."</b></div>
<details class="chk"><summary>✋ Checkpoint: the man's scan shows one hot nodule and nothing else. Next?</summary><p>Toxic adenoma: no aspiration needed; treatment is radioactive iodine or lobectomy (see ${XL("t1f","6.1.6")}).</p></details>`,
recap:["Hot = more tracer; cold = less.","Japanese flag = decompensated (toxic) adenoma.","Most cold nodules are benign, but need ultrasound and often aspiration."],
quiz:[{q:"Patchy uptake with several hot areas?",o:["Toxic multinodular goitre","Graves disease","Thyroiditis"],a:0,e:"Multiple autonomous areas."},{q:"Hot nodule with the rest of the gland still visible?",o:["Compensated autonomous adenoma","Decompensated adenoma","Cold nodule"],a:0,e:"Not yet suppressing."}]},
{id:"tc3",title:"When to scan, when not to",min:5,goal:2,obj:["Know indications","Know contraindications"],html:`
<div class="scene"><b>The scene:</b> A 29-year-old woman, 8 weeks pregnant, has a nodule and a low thyroid-stimulating hormone. The resident books a scintigraphy.</div>
<p><b>Indications (page 11):</b> nodules with a low or low-normal thyroid-stimulating hormone (hot or not?), the cause of thyrotoxicosis when antibodies are negative, retrosternal or [[ectothy]] tissue (for example in the mediastinum or tongue base), congenital malformations (absent or ectopic thyroid in a newborn), and recurrence after surgery (with iodine for cancer).</p>
<p><b>Contraindications:</b> pregnancy and breastfeeding (radioactive tracer reaches the fetus and the milk).</p>
<div class="corr">📝 <b>Fact check (page 11):</b> the slide lists "6 months before conception" as a contraindication. That rule belongs to <b>radioactive iodine treatment</b> (avoid pregnancy for about 6 months after iodine-131 therapy), not to a diagnostic technetium or iodine-123 scan. Breastfeeding: a short pause after technetium, a longer one after iodine-123, and stopping altogether after iodine-131; follow the nuclear medicine department's protocol. "Suckling, infancy – only for I131" means iodine-131 should not be used for imaging in infants.</div>
<div class="hint">💡 <b>"Pregnant? Antibodies and ultrasound, never a scan."</b></div>
<details class="chk"><summary>✋ Checkpoint: what should the resident do instead?</summary><p>Cancel the scan. Thyroid-stimulating hormone receptor antibodies, free hormones, ultrasound with Doppler; remember the first-trimester human chorionic gonadotropin effect (see ${XL("t1h","6.1.8")}).</p></details>`,
recap:["Scan nodules only when thyroid-stimulating hormone is low.","Also ectopic tissue, congenital problems, recurrence.","No scans in pregnancy or breastfeeding."],
quiz:[{q:"Euthyroid solitary nodule, first imaging?",o:["Ultrasound","Scintigraphy","Computed tomography"],a:0,e:"Scintigraphy only if thyroid-stimulating hormone is low."},{q:"The '6 months' rule applies to…",o:["Radioactive iodine treatment","Technetium scans","Ultrasound"],a:0,e:"Therapy, not diagnostics."}]}],
cases:[{id:"tck1",title:"Case 1: After the baby",steps:[
{t:`<b>The scene:</b> 35-year-old woman, 6 weeks postpartum, palpitations, small painless goitre, thyroid-stimulating hormone below 0.01, free thyroxine high. Not breastfeeding.`,q:"Which test separates Graves from postpartum thyroiditis best?",o:["Thyroid-stimulating hormone receptor antibodies or uptake","Calcitonin","Thyroglobulin antibodies"],a:0,e:"Antibodies; uptake if breastfeeding is not an issue."},
{t:`Receptor antibodies negative, technetium uptake 0.2%.`,q:"Diagnosis?",o:["Postpartum thyroiditis","Graves disease","Toxic adenoma"],a:0,e:"Low uptake, negative antibodies."},
{t:`She asks for "the thyroid tablets".`,q:"Treatment?",o:["Beta-blocker if needed; no antithyroid drugs","Thiamazole","Radioactive iodine"],a:0,e:"Nothing to block: the store is leaking."}],take:["Low uptake thyrotoxicosis: never antithyroid drugs."]},
{id:"tck2",title:"Case 2: The man with the hot nodule",steps:[
{t:`<b>The scene:</b> 64-year-old man, 3 cm nodule, thyroid-stimulating hormone 0.08 mIU/L.`,q:"Next test?",o:["Scintigraphy","Fine-needle aspiration straight away","Calcitonin"],a:0,e:"Low thyroid-stimulating hormone: is the nodule hot?"},
{t:`Scintigraphy: Japanese flag.`,q:"Aspiration?",o:["Not needed","Always","Only with Doppler"],a:0,e:"Hot nodules are almost never malignant."}],take:["Low thyroid-stimulating hormone + nodule → scintigraphy first."]}],
flash:[["High uptake causes","Graves, toxic nodules, iodine deficiency."],["Low uptake causes","Thyroiditis, tablets, iodine excess, no tissue."],["Technetium","Trapped, not organified; quick."],["Hot nodule","More tracer than surroundings."],["Japanese flag","Toxic (decompensated) adenoma."],["Compensated adenoma","Hot nodule, rest still visible."],["Cold nodule","Mostly benign; needs ultrasound ± aspiration."],["When to scan a nodule","Low thyroid-stimulating hormone."],["Contraindications","Pregnancy, breastfeeding."],["'6 months before conception'","Applies to radioactive iodine therapy."]],
exam:["Uptake: high (Graves, toxic nodules, iodine deficiency) versus low (thyroiditis, tablets, iodine excess).","Scintigraphy patterns: diffuse, patchy, Japanese flag, compensated, cold, absent.","Scan a nodule only when thyroid-stimulating hormone is low.","Never in pregnancy or breastfeeding; the 6-month rule is for iodine-131 therapy."],
finalHtml:`<div data-widget="spot" data-set="t3c"></div><div data-widget="termdeck" data-set="t3c"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>CBL 3.4 Thyroid ultrasound: the basics.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t3d')">→ Open</button></div>`,
sources:"Sources: CBL 3 (Prof. Ionela Pascanu, UMCH 2026), pages 10–14; CBL 4 page 18; Society of Nuclear Medicine and Molecular Imaging and European Association of Nuclear Medicine thyroid scintigraphy practice guideline; American Thyroid Association hyperthyroidism guideline (2016). Scintigraphy pictures are my own schematic drawings. Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t3c=T3C;
