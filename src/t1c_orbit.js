/* ===== Thyroid · Lecture 6 part 1 · 3: Graves orbitopathy (lecture pages 24–37 and 53–55) ===== */
Object.assign(GLOSSARY,{
go:{l:"Graves orbitopathy",c:"disease",d:"Autoimmune inflammation of the tissues behind the eye: swollen fat and eye muscles push the eye forward and limit its movement.",w:"Also called thyroid eye disease."},
cas:{l:"clinical activity score",c:"test",d:"Seven inflammatory signs, one point each; 3 or more out of 7 means active disease.",w:"Decides whether anti-inflammatory treatment can help."},
proptosis:{l:"proptosis",c:"disease",d:"Forward protrusion of the eye (exophthalmos), measured with an exophthalmometer.",w:"A key severity sign."},
diplopia:{l:"diplopia",c:"disease",d:"Double vision, here from stiff, swollen eye muscles.",w:"Constant double vision means moderate-to-severe disease."},
don:{l:"dysthyroid optic neuropathy",c:"disease",d:"Compression of the optic nerve at the orbital apex by swollen muscles.",w:"Sight-threatening: urgent high-dose steroids and decompression."},
ivmp:{l:"intravenous methylprednisolone",c:"drug",d:"Steroid given as weekly infusions.",w:"First-line for active moderate-to-severe orbitopathy; maximum cumulative dose about 8 g because of liver risk."},
mmf:{l:"mycophenolate",c:"drug",d:"Immunosuppressant that blocks lymphocyte multiplication.",w:"Added to intravenous methylprednisolone in the European Group on Graves Orbitopathy 2021 first-line plan."},
teprot:{l:"teprotumumab",c:"drug",d:"Antibody that blocks the insulin-like growth factor 1 receptor on orbital fibroblasts.",w:"Reduces proptosis and double vision; can cause hearing problems and high blood sugar."},
selenium:{l:"selenium",c:"drug",d:"Trace element; 100 µg twice daily for 6 months.",w:"Recommended for mild, active orbitopathy of short duration (best evidence in selenium-poor regions)."},
decomp:{l:"orbital decompression",c:"drug",d:"Surgery that removes orbital bone or fat to give the swollen tissues room.",w:"For sight-threatening disease or, later, for disfiguring proptosis."},
ort:{l:"orbital radiotherapy",c:"drug",d:"Low-dose radiotherapy to the back of the orbits.",w:"Usually 20 Gy in 10 fractions; mainly helps eye movement problems."}
});
XCALC.cas={t:"Clinical activity score (European Group on Graves Orbitopathy)",inp:[["a","Spontaneous pain behind the eye","c",false],["b","Pain on looking up, down or sideways","c",false],["c","Redness of the eyelids","c",true],["d","Redness of the conjunctiva","c",true],["e","Swelling of the eyelids","c",true],["f","Swelling of the conjunctiva (chemosis)","c",false],["g","Swelling of the caruncle or plica","c",false]],
f:v=>{const n=["a","b","c","d","e","f","g"].filter(k=>v[k]).length;return `Score <b>${n}/7</b>. `+(n>=3?"🔴 <b>Active</b> orbitopathy: anti-inflammatory treatment can help if the disease is moderate-to-severe.":"🟢 <b>Inactive</b> (below 3): steroids help little; consider rehabilitative surgery later if needed.")},note:"Initial 7-item score. At follow-up, 3 more items (increase in proptosis, worse eye movements, worse vision) give a 10-point score. Learning tool."};
XPK.gosev={t:"Mild, moderate-to-severe or sight-threatening?",opts:["Mild","Moderate-to-severe","Sight-threatening"],items:[["Gritty eyes, slight lid retraction, no double vision, little impact on life","Mild","Local measures, selenium if active and early."],["Proptosis 25 mm, constant double vision on looking straight up","Moderate-to-severe","Systemic treatment if active."],["Blurred vision, faded colours, swollen optic disc","Sight-threatening","Optic neuropathy: urgent."],["Eye cannot close; corneal ulcer","Sight-threatening","Corneal breakdown."],["Lid retraction 3 mm with marked swelling affecting daily life","Moderate-to-severe","Impact on life counts."]]};
XS.t1c=["Spot the error",[["Smoking makes orbitopathy worse and treatment less effective.",1],["Oral prednisolone is the preferred first-line treatment for active moderate-to-severe orbitopathy.",0,"Wrong: <b>intravenous methylprednisolone</b> works better and has fewer side effects (European Group on Graves Orbitopathy 2021)."],["Radioactive iodine can worsen active orbitopathy.",1],["Guanethidine eye drops are a modern treatment for lid retraction.",0,"Wrong: guanethidine drops are <b>obsolete</b>."]]];
XT.t1c="go,cas,proptosis,diplopia,don,ivmp,mmf,teprot,selenium,ort,decomp";
const T1C={
meta:"Endocrinology › Thyroid › Lecture 6 part 1 › Subsection 6.1.3 · lecture pages 24–37 and 53–55 · ⏱ about 25 minutes in 4 bite-sized steps",
intro:`<p>The eye disease of Graves can hurt, disfigure and, rarely, blind. Two questions decide treatment: <b>how active</b> is it (clinical activity score) and <b>how severe</b> is it? This subsection teaches both and the modern treatment ladder.</p>`,
goals:["Explain the mechanism","Score activity","Grade severity","Choose treatment","Prevent worsening"],
cards:[
{id:"or1",title:"What happens behind the eye",min:5,goal:0,obj:["Explain the mechanism and signs"],html:`
<div class="scene"><b>The scene:</b> A 45-year-old smoker with Graves disease says her eyes "look angry", feel gritty and she sees double when looking up.</div>
${FIG("graveseye")}
<p>In [[go]], orbital fibroblasts carry thyroid-stimulating hormone receptors and insulin-like growth factor 1 receptors. Antibodies and T cells make them produce sugar-rich matrix and fat; eye muscles swell. The bony orbit cannot expand, so the eye is pushed forward ([[proptosis]]), muscles stiffen ([[diplopia]]), and rarely the nerve is compressed ([[don]]).</p>
<p>Signs: lid retraction, swelling and redness, proptosis, restricted movement, exposure of the cornea. Usually both eyes, sometimes one.</p>
<p><b>Course:</b> active phase (6–18 months) → burns out into an inactive, fibrotic phase.</p>
<div class="hint">💡 <b>"A full room with no extra space: the eye is pushed out."</b></div>
<details class="chk"><summary>✋ Checkpoint: why does treatment work only early?</summary><p>Anti-inflammatory drugs act on the active phase; fibrosis later does not respond.</p></details>`,
recap:["Fibroblasts and muscles swell in a fixed bony box.","Proptosis, double vision, rarely optic neuropathy.","Active phase then inactive phase."],
quiz:[{q:"Which receptor besides the thyroid-stimulating hormone receptor is involved?",o:["Insulin-like growth factor 1 receptor","Insulin receptor","Oestrogen receptor"],a:0,e:"Target of teprotumumab."},{q:"Duration of the active phase?",o:["About 6–18 months","1 week","Lifelong"],a:0,e:"Then burns out."}]},
{id:"or2",title:"Activity and severity",min:6,goal:1,obj:["Score activity","Grade severity"],html:`
<div class="scene"><b>The scene:</b> Her eyelids are red and swollen, the conjunctiva is red; no pain.</div>
<div data-widget="calc" data-set="cas"></div>
<p><b>Severity (European Group on Graves Orbitopathy):</b></p>
<div data-widget="pickset" data-set="gosev"></div>
<div class="hint">💡 <b>"Activity says IF steroids can work; severity says WHETHER they are worth it."</b></div>
<details class="chk"><summary>✋ Checkpoint: her score?</summary><p>3/7 (lid redness, conjunctival redness, lid swelling): active.</p></details>`,
recap:["Score 3 or more of 7 = active.","Mild, moderate-to-severe, sight-threatening.","Both decide treatment."],
quiz:[{q:"Active disease means a score of at least…",o:["3/7","1/7","7/7"],a:0,e:"Cut-off 3."},{q:"Optic neuropathy is…",o:["Sight-threatening","Mild","Moderate"],a:0,e:"Urgent."}]},
{id:"or3",title:"Treatment ladder",min:7,goal:3,obj:["Choose treatment by activity and severity"],html:`
<div class="scene"><b>The scene:</b> She is active (3/7) and moderate-to-severe (constant double vision).</div>
<ul><li><b>All:</b> stop smoking, restore normal thyroid function (avoid hypothyroidism), lubricating drops, sunglasses, head up at night.</li><li><b>Mild active:</b> [[selenium]] for 6 months.</li><li><b>Moderate-to-severe active:</b> [[ivmp]] 0.5 g weekly for 6 weeks then 0.25 g weekly for 6 weeks (4.5 g total) plus [[mmf]] (European Group on Graves Orbitopathy 2021). Second line: higher-dose steroids, [[teprot]], tocilizumab, rituximab, [[ort]], ciclosporin with steroids.</li><li><b>Sight-threatening:</b> high-dose intravenous methylprednisolone; urgent [[decomp]] if no rapid response.</li><li><b>Inactive phase:</b> rehabilitative surgery in order: decompression → squint surgery → eyelid surgery.</li></ul>
<div class="corr">📝 <b>Slide check (page 53):</b> intravenous methylprednisolone is preferred over oral steroids (European Group on Graves Orbitopathy 2021): 0.5 g weekly ×6, then 0.25 g weekly ×6; cumulative dose must stay at or below about 8 g. Newer options missing from the slide: mycophenolate, teprotumumab, tocilizumab; selenium for mild disease. Guanethidine drops are obsolete.</div>
<div class="corr">📝 <b>Slide check (page 54):</b> orbital radiotherapy is given as <b>20 Gy in total, in 10 fractions</b> (over 2 weeks), not 20 Gy per session.</div>
<div class="hint">💡 <b>"Stop smoking, steroids by drip, surgery when quiet."</b></div>
<details class="chk"><summary>✋ Checkpoint: why check liver tests during intravenous methylprednisolone?</summary><p>High cumulative doses can cause acute liver injury.</p></details>`,
recap:["All: stop smoking, normal thyroid function.","Moderate-to-severe active: intravenous methylprednisolone ± mycophenolate.","Sight-threatening: high-dose steroids, decompression."],
quiz:[{q:"First-line for active moderate-to-severe disease?",o:["Intravenous methylprednisolone (with mycophenolate)","Guanethidine drops","Radioactive iodine"],a:0,e:"EUGOGO 2021."},{q:"Orbital radiotherapy dose?",o:["20 Gy in 10 fractions","20 Gy per session","2 Gy once"],a:0,e:"Slide correction."}]},
{id:"or4",title:"Radioactive iodine and the eyes",min:4,goal:4,obj:["Prevent worsening"],html:`
<div class="scene"><b>The scene:</b> Her doctor suggests radioactive iodine for her Graves disease.</div>
<p>[[rai]] can worsen orbitopathy (especially in smokers, with active eye disease, high antibodies or post-treatment hypothyroidism).</p><ul><li><b>Active moderate-to-severe or sight-threatening orbitopathy:</b> avoid radioactive iodine; use antithyroid drugs or surgery.</li><li><b>Mild active orbitopathy or risk factors:</b> radioactive iodine with steroid cover (prednisone about 0.3–0.5 mg/kg daily, tapered over about 3 months).</li><li>Start levothyroxine early to avoid hypothyroidism.</li></ul>
<div class="hint">💡 <b>"Radioiodine and angry eyes don't mix."</b></div>
<details class="chk"><summary>✋ Checkpoint: one thing every smoker with orbitopathy should hear?</summary><p>Stop smoking: it worsens the disease and weakens treatment.</p></details>`,
recap:["Radioactive iodine can worsen eyes.","Avoid it in active moderate-to-severe disease.","Steroid cover if mild or high risk; avoid hypothyroidism."],
quiz:[{q:"Active moderate-to-severe orbitopathy plus Graves: which definitive treatment is usually avoided?",o:["Radioactive iodine","Thyroidectomy","Antithyroid drugs"],a:0,e:"Risk of worsening."},{q:"Steroid cover dose?",o:["About 0.3–0.5 mg/kg prednisone, tapered","100 mg hydrocortisone once","None ever"],a:0,e:"ATA 2016."}]}],
cases:[{id:"ork1",title:"Case 1: Double vision",steps:[
{t:`<b>The scene:</b> 45-year-old smoker, clinical activity score 4/7, constant double vision, normal vision and colour.`,q:"Category?",o:["Active, moderate-to-severe","Inactive, mild","Sight-threatening"],a:0,e:"Score 4, constant double vision."},
{t:`What treatment?`,q:"Plan?",o:["Stop smoking, intravenous methylprednisolone with mycophenolate","Radioactive iodine","Observation only"],a:0,e:"EUGOGO 2021."}],take:["Activity and severity decide treatment."]},
{id:"ork2",title:"Case 2: Fading colours",steps:[
{t:`<b>The scene:</b> 60-year-old man with orbitopathy: blurred vision and colours look washed out in the right eye.`,q:"Diagnosis?",o:["Dysthyroid optic neuropathy","Dry eye","Cataract"],a:0,e:"Colour vision loss is an early sign."},
{t:`He is admitted today.`,q:"Treatment?",o:["High-dose intravenous methylprednisolone and urgent decompression if no response within 1–2 weeks","Selenium","Wait 6 months"],a:0,e:"Sight-threatening."}],take:["Loss of colour vision = emergency."]}],
flash:[["Mechanism","Swollen orbital fat and muscles in a fixed box."],["Active disease","Clinical activity score 3 or more of 7."],["Severity grades","Mild, moderate-to-severe, sight-threatening."],["First-line (moderate-to-severe active)","Intravenous methylprednisolone ± mycophenolate."],["Methylprednisolone schedule","0.5 g ×6 weeks, then 0.25 g ×6 weeks."],["Maximum cumulative dose","About 8 g."],["Mild active","Selenium 6 months."],["Optic neuropathy","High-dose steroids, decompression."],["Radiotherapy","20 Gy in 10 fractions."],["Biggest risk factor","Smoking."]],
exam:["Mechanism: fibroblasts, thyroid-stimulating hormone and insulin-like growth factor 1 receptors.","Clinical activity score ≥3/7 = active.","Severity: mild, moderate-to-severe, sight-threatening.","Intravenous methylprednisolone ± mycophenolate; teprotumumab; decompression.","Radioactive iodine can worsen; steroid cover; stop smoking."],
finalHtml:`<div data-widget="spot" data-set="t1c"></div><div data-widget="termdeck" data-set="t1c"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>4. Diagnosis and differential diagnosis.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t1d')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 1 (Prof. Ionela Pascanu, UMCH 2026), pages 24–37 and 53–55; European Group on Graves Orbitopathy guideline (Bartalena et al., Eur J Endocrinol 2021); American Thyroid Association guideline (2016). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t1c=T1C;
