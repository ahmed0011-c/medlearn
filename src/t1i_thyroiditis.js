/* ===== Thyroid · Lecture 6 part 1 · 9: Thyroiditis (lecture pages 80–88) ===== */
Object.assign(GLOSSARY,{
subac:{l:"subacute thyroiditis",c:"disease",d:"Painful, probably viral inflammation of the thyroid (de Quervain, granulomatous).",w:"Neck pain to the jaw or ear, fever, high erythrocyte sedimentation rate, low uptake."},
painless:{l:"painless (silent) thyroiditis",c:"disease",d:"Autoimmune destructive thyroiditis without pain; postpartum thyroiditis is one form.",w:"Short thyrotoxic phase, often a hypothyroid phase."},
nsaid:{l:"non-steroidal anti-inflammatory drugs",c:"drug",d:"Pain and anti-inflammatory drugs such as ibuprofen or naproxen.",w:"First-line for mild subacute thyroiditis."},
triphase:{l:"three phases of thyroiditis",c:"concept",d:"Thyrotoxic (leak) → hypothyroid (empty) → recovery.",w:"Explains why tests change over months."}
});
XSTEP.phase={t:"The three phases of destructive thyroiditis",svg:`<svg viewBox="0 0 720 250" style="width:100%" role="img" aria-label="Thyroid hormone over time in thyroiditis">
<g data-k="ax"><line x1="60" y1="200" x2="690" y2="200" stroke="#555" stroke-width="2"/><line x1="60" y1="30" x2="60" y2="200" stroke="#555" stroke-width="2"/><text x="680" y="225" text-anchor="end" font-size="12">months →</text><text x="20" y="40" font-size="12">free</text><text x="20" y="54" font-size="12">T4</text><rect x="60" y="95" width="630" height="50" fill="#e6f6ec"/><text x="680" y="112" text-anchor="end" font-size="11" fill="#1f9d55">normal range</text></g>
<g data-k="p1"><path d="M60 120 C110 120 120 40 170 45 C210 50 220 110 250 125" fill="none" stroke="#c62828" stroke-width="4"/><text x="150" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#c62828">1 thyrotoxic (leak)</text><text x="150" y="190" text-anchor="middle" font-size="11">weeks 0–6</text></g>
<g data-k="p2"><path d="M250 125 C290 150 320 175 380 172 C430 170 450 150 480 125" fill="none" stroke="#2f6fdb" stroke-width="4"/><text x="370" y="190" text-anchor="middle" font-size="12" font-weight="700" fill="#2f6fdb">2 hypothyroid (empty)</text></g>
<g data-k="p3"><path d="M480 125 C520 120 600 120 690 120" fill="none" stroke="#1f9d55" stroke-width="4"/><text x="590" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#1f9d55">3 recovery (most)</text></g></svg>`,
steps:[["Thyrotoxic phase","Damaged follicles leak stored hormone: low thyroid-stimulating hormone, low uptake. Beta-blockers only.",["ax","p1"]],["Hypothyroid phase","The store is empty and the gland is still healing: thyroid-stimulating hormone rises. Levothyroxine only if symptomatic or prolonged.",["ax","p1","p2"]],["Recovery","Most recover within about 12–18 months; some (especially with antibodies or postpartum) stay hypothyroid.",["ax","p1","p2","p3"]],["Overview","Leak, empty, recover. No antithyroid drugs, because nothing is being overproduced.","all"]]};
XPAT.thyr={t:"Which thyroiditis?",cols:["Pain","Erythrocyte sedimentation rate","Uptake","Anti-thyroid peroxidase antibodies"],rows:[["Subacute (de Quervain)",["↑ yes","↑↑","↓","≈"],"Painful, viral, high inflammation."],["Painless or postpartum",["≈ none","≈","↓","↑"],"Autoimmune."],["Drug-induced (amiodarone type 2, checkpoint inhibitors, interferon, lithium)",["≈ none","≈","↓","≈ or ↑"],"Ask about drugs."],["Graves disease (for contrast)",["≈ none","≈","↑","often ↑"],"High uptake."]]};
XS.t1i=["Spot the error",[["Subacute thyroiditis has low radioiodine uptake.",1],["Thiamazole is the treatment for the thyrotoxic phase of thyroiditis.",0,"Wrong: no new hormone is made, so antithyroid drugs <b>do not help</b>; use beta-blockers."],["Prednisolone is used for severe subacute thyroiditis.",1],["Phenylbutazone is a first-line drug for subacute thyroiditis in humans.",0,"Wrong: phenylbutazone is <b>no longer used in humans</b> (bone marrow toxicity)."]]];
XT.t1i="subac,painless,ppt,triphase,nsaid,esr,uptake,betab,lt4";
const T1I={
meta:"Endocrinology › Thyroid › Lecture 6 part 1 › Subsection 6.1.9 · lecture pages 80–88 · ⏱ about 15 minutes in 3 bite-sized steps",
intro:`<p>In thyroiditis the gland is not overactive; it is damaged and leaks. That one fact explains the low uptake, the three phases and why antithyroid drugs are useless.</p>`,
goals:["Understand the three phases","Distinguish the types","Treat subacute and painless thyroiditis"],
cards:[
{id:"th1",title:"Leak, empty, recover",min:4,goal:0,obj:["Explain the phases"],html:`
<div class="scene"><b>The scene:</b> A 38-year-old woman had a cold 3 weeks ago. Now her neck hurts, radiating to the ear, and she is shaky.</div>
<div data-widget="stepsvg" data-set="phase"></div>
<div class="hint">💡 <b>"Leak, empty, recover."</b></div>
<details class="chk"><summary>✋ Checkpoint: why is uptake low?</summary><p>Damaged cells do not trap iodine, and high hormone suppresses thyroid-stimulating hormone.</p></details>`,
recap:["Thyrotoxic → hypothyroid → recovery.","Low uptake.","No antithyroid drugs."],
quiz:[{q:"First phase?",o:["Thyrotoxic","Hypothyroid"],a:0,e:"Leak."},{q:"Antithyroid drugs?",o:["Not useful","First-line"],a:0,e:"Nothing is overproduced."}]},
{id:"th2",title:"Types",min:5,goal:1,obj:["Recognise each type"],html:`
<div class="scene"><b>The scene:</b> Three women: one with a painful neck, one 4 months after delivery, one on immunotherapy for melanoma.</div>
<ul><li>[[subac]]: after a viral infection; tender gland, fever, very high [[esr]].</li><li>[[painless]] and [[ppt]]: antibodies positive.</li><li><b>Drug-induced:</b> amiodarone, lithium, interferon alpha, immune checkpoint inhibitors, tyrosine kinase inhibitors.</li><li>Rare: radiation, palpation or trauma, acute bacterial (suppurative) thyroiditis.</li></ul>
<div data-widget="pattern" data-set="thyr"></div>
<div class="hint">💡 <b>"Pain = de Quervain; postpartum = autoimmune; pills = ask."</b></div>
<details class="chk"><summary>✋ Checkpoint: which patient has subacute thyroiditis?</summary><p>The one with the painful neck.</p></details>`,
recap:["Subacute: pain, fever, high inflammation.","Painless/postpartum: antibodies.","Drugs: amiodarone, checkpoint inhibitors, interferon, lithium."],
quiz:[{q:"Painful thyroid with high erythrocyte sedimentation rate?",o:["Subacute thyroiditis","Painless thyroiditis","Graves"],a:0,e:"De Quervain."},{q:"Cancer drug causing thyroiditis?",o:["Checkpoint inhibitors","Paracetamol","Metformin"],a:0,e:"Immune-related."}]},
{id:"th3",title:"Treatment",min:5,goal:2,obj:["Treat pain and symptoms"],html:`
<div class="scene"><b>The scene:</b> Her pain is severe despite ibuprofen.</div>
<ul><li><b>Subacute:</b> [[nsaid]] for mild; prednisolone about 40 mg daily, tapered over 4–8 weeks, for severe pain or no response. Beta-blocker for symptoms.</li><li><b>Painless/postpartum:</b> beta-blocker; levothyroxine in the hypothyroid phase if symptomatic or planning pregnancy; yearly thyroid-stimulating hormone (permanent hypothyroidism risk).</li></ul>
<div class="corr">📝 <b>Slide check (page 88):</b> phenylbutazone is not used in human medicine any more (risk of aplastic anaemia). Use non-steroidal anti-inflammatory drugs such as ibuprofen or naproxen, or prednisolone.</div>
<div class="hint">💡 <b>"Painkiller, then prednisolone; never thiamazole."</b></div>
<details class="chk"><summary>✋ Checkpoint: why follow postpartum thyroiditis yearly?</summary><p>Many develop permanent hypothyroidism.</p></details>`,
recap:["Subacute: anti-inflammatory drugs, prednisolone if severe.","Painless: beta-blocker, levothyroxine if needed.","Follow for permanent hypothyroidism."],
quiz:[{q:"Severe subacute thyroiditis?",o:["Prednisolone","Thiamazole","Radioactive iodine"],a:0,e:"Steroid."},{q:"Phenylbutazone?",o:["Not used in humans","First-line"],a:0,e:"Slide correction."}]}],
cases:[{id:"thk1",title:"Case 1: After the cold",steps:[
{t:`<b>The scene:</b> 38-year-old woman, painful tender thyroid, fever, erythrocyte sedimentation rate 80, thyroid-stimulating hormone suppressed, uptake very low.`,q:"Treatment?",o:["Ibuprofen and propranolol; prednisolone if severe","Thiamazole","Radioactive iodine"],a:0,e:"Subacute thyroiditis."},{t:`8 weeks later: thyroid-stimulating hormone 9 mU/L, mild tiredness.`,q:"Which phase?",o:["Hypothyroid phase","Relapse of thyrotoxicosis"],a:0,e:"Empty."}],take:["Thyroiditis passes through phases."]},
{id:"thk2",title:"Case 2: On immunotherapy",steps:[
{t:`<b>The scene:</b> 60-year-old on nivolumab for melanoma: palpitations, thyroid-stimulating hormone suppressed, low uptake; 6 weeks later hypothyroid.`,q:"Cause?",o:["Checkpoint inhibitor thyroiditis","Graves disease","Toxic adenoma"],a:0,e:"Drug-induced destructive."}],take:["Ask about drugs."]}],
flash:[["Three phases","Thyrotoxic, hypothyroid, recovery."],["Uptake","Low."],["Subacute features","Pain, fever, high erythrocyte sedimentation rate."],["Subacute treatment","Anti-inflammatory drugs; prednisolone if severe."],["Painless/postpartum","Antibodies; beta-blocker."],["Antithyroid drugs?","No."],["Drug causes","Amiodarone, lithium, interferon, checkpoint inhibitors."],["Phenylbutazone","Obsolete in humans."],["Long-term risk","Permanent hypothyroidism."],["Prednisolone dose","About 40 mg, taper 4–8 weeks."]],
exam:["Destructive: leak → empty → recover; low uptake.","Subacute: painful, viral, high erythrocyte sedimentation rate.","Painless/postpartum: autoimmune.","Treatment: anti-inflammatory, prednisolone, beta-blocker; no antithyroid drugs.","Follow for hypothyroidism."],
finalHtml:`<div data-widget="spot" data-set="t1i"></div><div data-widget="termdeck" data-set="t1i"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>10. Thyroid-stimulating hormone-secreting adenoma and thyroid storm.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t1j')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 1 (Prof. Ionela Pascanu, UMCH 2026), pages 80–88; American Thyroid Association guideline (2016); Pearce et al., N Engl J Med 2003 (thyroiditis). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t1i=T1I;
