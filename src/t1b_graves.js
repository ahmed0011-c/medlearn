/* ===== Thyroid · Lecture 6 part 1 · 2: Graves disease, cause and clinical picture (lecture pages 7–23) ===== */
Object.assign(GLOSSARY,{
graves:{l:"Graves disease",c:"disease",d:"Autoimmune hyperthyroidism caused by antibodies that stimulate the thyroid-stimulating hormone receptor.",w:"Diffuse goitre, sometimes eye disease and skin changes."},
trab:{l:"thyroid-stimulating hormone receptor antibodies",c:"test",d:"Antibodies against the thyroid-stimulating hormone receptor; in Graves disease they mostly stimulate it.",w:"Diagnostic for Graves disease; cross the placenta."},
dermo:{l:"thyroid dermopathy",c:"disease",d:"Thickened, orange-peel skin, usually on the shins (pretibial myxoedema).",w:"Almost always with eye disease; specific for Graves disease."},
acrop:{l:"thyroid acropachy",c:"disease",d:"Clubbing and swelling of fingers and toes with bone changes.",w:"Rare; marks severe autoimmune Graves disease."},
apathetic:{l:"apathetic thyrotoxicosis",c:"disease",d:"Thyrotoxicosis in older people with few classic signs: tiredness, weight loss, atrial fibrillation, low mood.",w:"Easy to miss; test thyroid in new atrial fibrillation."},
af:{l:"atrial fibrillation",c:"disease",d:"Irregular heart rhythm from chaotic atrial activity.",w:"Check thyroid-stimulating hormone in every new case."},
ifng:{l:"interferon gamma",c:"hormone",d:"Immune messenger made by T cells that activates other immune cells.",w:"Part of the cytokine drive in Graves disease and its eye disease."}
});
XSTEP.trab={t:"One antibody, three targets",svg:`<svg viewBox="0 0 720 270" style="width:100%" role="img" aria-label="Thyroid-stimulating hormone receptor antibodies and their targets">
<g data-k="b"><ellipse cx="110" cy="135" rx="70" ry="45" fill="#efe7ff" stroke="#7b3fc4" stroke-width="2"/><text x="110" y="130" text-anchor="middle" font-size="12" font-weight="700">B cells</text><text x="110" y="146" text-anchor="middle" font-size="11">(helped by T cells)</text></g>
<g data-k="ab"><path d="M180 135 H300" stroke="#7b3fc4" stroke-width="3" marker-end="url(#ta)"/><text x="240" y="125" text-anchor="middle" font-size="12" font-weight="700" fill="#7b3fc4">antibodies</text><path d="M240 150 v20 m0 0 l-10 12 m10 -12 l10 12" stroke="#7b3fc4" stroke-width="3" fill="none"/></g>
<g data-k="thy"><path d="M360 60 q-50 -5 -50 35 q0 40 50 30 q20 -8 30 -25 q10 17 30 25 q50 10 50 -30 q0 -40 -50 -35 q-20 5 -30 22 q-10 -17 -30 -22z" fill="#ffd9d9" stroke="#c62828" stroke-width="2"/><text x="390" y="150" text-anchor="middle" font-size="12" font-weight="700">thyroid: growth + hormone ↑</text><text x="390" y="166" text-anchor="middle" font-size="11">diffuse goitre, thyrotoxicosis</text></g>
<g data-k="eye"><ellipse cx="600" cy="80" rx="55" ry="28" fill="#fff" stroke="#2f6fdb" stroke-width="2"/><circle cx="600" cy="80" r="16" fill="#2f6fdb"/><text x="600" y="130" text-anchor="middle" font-size="12" font-weight="700">orbit fibroblasts</text><text x="600" y="146" text-anchor="middle" font-size="11">swelling, fat ↑, muscles ↑</text><path d="M470 95 Q520 80 540 80" stroke="#2f6fdb" stroke-width="2.5" fill="none" marker-end="url(#tb)"/></g>
<g data-k="skin"><rect x="545" y="185" width="110" height="50" rx="12" fill="#ffe9cc" stroke="#d9730d" stroke-width="2"/><text x="600" y="207" text-anchor="middle" font-size="12" font-weight="700">shin skin</text><text x="600" y="223" text-anchor="middle" font-size="11">dermopathy</text><path d="M470 160 Q520 190 543 205" stroke="#d9730d" stroke-width="2.5" fill="none" marker-end="url(#tc)"/></g>
<defs>${MK("ta","#7b3fc4")}${MK("tb","#2f6fdb")}${MK("tc","#d9730d")}</defs></svg>`,
steps:[["Loss of tolerance","Genes (HLA, CTLA4, PTPN22) plus triggers (smoking, stress, iodine, after pregnancy) let B cells make antibodies.",["b"]],
["Stimulating antibodies","Thyroid-stimulating hormone receptor antibodies bind and switch on the receptor, like thyroid-stimulating hormone itself, but without feedback.",["b","ab"]],
["The thyroid","Growth and hormone overproduction: diffuse goitre (often with a bruit) and thyrotoxicosis.",["b","ab","thy"]],
["The eyes","Orbital fibroblasts also carry the receptor (and the insulin-like growth factor 1 receptor): swelling of fat and muscles (subsection 3).",["b","ab","thy","eye"]],
["The skin","Rarely: dermopathy on the shins, acropachy of the fingers.",["b","ab","thy","eye","skin"]],["Overview","One antibody explains the triad of Graves disease: goitre, eyes, skin.","all"]]};
XPK.gsym={t:"Graves or just thyrotoxicosis?",opts:["Any thyrotoxicosis","Specific for Graves disease"],items:[["Weight loss despite good appetite","Any thyrotoxicosis","Hormone effect."],["Protruding eyes with swollen eyelids","Specific for Graves disease","Orbitopathy."],["Tremor and heat intolerance","Any thyrotoxicosis","Adrenergic and metabolic."],["Orange-peel thickened skin on the shins","Specific for Graves disease","Dermopathy."],["Lid lag and stare","Any thyrotoxicosis","Sympathetic tone on the eyelid muscle; not orbitopathy by itself."],["Diffuse goitre with a bruit","Specific for Graves disease","Increased blood flow in diffuse goitre."]]};
XS.t1b=["Spot the error",[["Graves disease is caused by stimulating antibodies against the thyroid-stimulating hormone receptor.",1],["Lid lag proves Graves orbitopathy.",0,"Wrong: lid lag and stare happen in <b>any</b> thyrotoxicosis (sympathetic tone). Orbitopathy means swelling, protrusion, double vision or inflammation."],["Smoking increases the risk of Graves disease and especially its eye disease.",1],["Older people may present only with atrial fibrillation and weight loss.",1]]];
XT.t1b="graves,trab,ifng,dermo,acrop,apathetic,af,thyrotox,gtr";
const T1B={
meta:"Endocrinology › Thyroid › Lecture 6 part 1 › Subsection 6.1.2 · lecture pages 7–23 · ⏱ about 20 minutes in 3 bite-sized steps",
intro:`<p>Graves disease is the textbook autoimmune disease where an antibody does not destroy, but <b>stimulates</b>. One antibody explains the goitre, the eyes and the skin. This subsection covers why it happens and how it looks.</p>`,
goals:["Explain the cause","Recognise the thyrotoxic features","Recognise the features specific for Graves disease"],
cards:[
{id:"gv1",title:"Why it happens",min:6,goal:0,obj:["Explain the antibody mechanism","Name risk factors"],html:`
<div class="scene"><b>The scene:</b> A 29-year-old smoker, 4 months after giving birth, has weight loss, tremor and gritty eyes. Her aunt has Hashimoto thyroiditis.</div>
<p>[[graves]]: [[trab]] stimulate the thyroid. T-cell messengers such as [[ifng]] keep the reaction going. Risk factors: women, family history, other autoimmune diseases, smoking, stress, postpartum period, iodine excess, some drugs (alemtuzumab, immune checkpoint inhibitors).</p>
<div data-widget="stepsvg" data-set="trab"></div>
<div class="corr">📝 <b>Slide check (page 9):</b> "IFy" is a typo for <b>IFN-γ</b> (interferon gamma).</div>
<div class="hint">💡 <b>"An antibody that presses the accelerator."</b></div>
<details class="chk"><summary>✋ Checkpoint: why is there no negative feedback?</summary><p>The antibody is not controlled by thyroid hormone levels.</p></details>`,
recap:["Stimulating thyroid-stimulating hormone receptor antibodies.","Genes plus triggers (smoking, postpartum, stress, iodine).","Same receptor in orbit and skin."],
quiz:[{q:"Antibody target?",o:["Thyroid-stimulating hormone receptor","Thyroid peroxidase only","Thyroglobulin only"],a:0,e:"Receptor."},{q:"Strongest modifiable risk factor for eye disease?",o:["Smoking","Coffee","Exercise"],a:0,e:"Smoking."}]},
{id:"gv2",title:"The thyrotoxic picture",min:6,goal:1,obj:["List symptoms by system","Recognise older patients"],html:`
<div class="scene"><b>The scene:</b> Her 72-year-old grandfather has new [[af]], weight loss and low mood, but no tremor.</div>
<ul><li><b>General:</b> weight loss (sometimes gain from appetite), heat intolerance, sweating.</li><li><b>Heart:</b> palpitations, fast pulse, atrial fibrillation, high output heart failure.</li><li><b>Nerves and muscles:</b> tremor, anxiety, insomnia, proximal weakness, brisk reflexes.</li><li><b>Gut:</b> frequent stools.</li><li><b>Reproduction:</b> lighter or irregular periods, reduced fertility, gynaecomastia in men.</li><li><b>Bone:</b> bone loss.</li><li><b>Eyes (any cause):</b> stare, lid lag.</li></ul>
<p>[[apathetic]] in older people.</p>
<div class="hint">💡 <b>"Everything speeds up, except in the elderly, who may just slow down and fibrillate."</b></div>
<details class="chk"><summary>✋ Checkpoint: one test for every new atrial fibrillation?</summary><p>Thyroid-stimulating hormone.</p></details>`,
recap:["Speeded metabolism, adrenergic signs.","Atrial fibrillation, bone loss.","Older people: apathetic presentation."],
quiz:[{q:"Typical heart finding?",o:["Fast pulse, atrial fibrillation","Slow pulse","Long QT always"],a:0,e:"Adrenergic."},{q:"Older person with new atrial fibrillation and weight loss?",o:["Check thyroid-stimulating hormone","Ignore","Start levothyroxine"],a:0,e:"Apathetic thyrotoxicosis."}]},
{id:"gv3",title:"Signs specific for Graves disease",min:5,goal:2,obj:["Separate Graves-specific from general signs"],html:`
<div class="scene"><b>The scene:</b> On examination: diffuse soft goitre with a bruit, swollen eyelids and protruding eyes.</div>
<ul><li>Diffuse goitre, often with a bruit.</li><li>Orbitopathy (in about a quarter to a third clinically; subsection 3).</li><li>[[dermo]] (rare).</li><li>[[acrop]] (very rare).</li><li>Associated autoimmune diseases: vitiligo, type 1 diabetes, pernicious anaemia, coeliac disease, myasthenia gravis.</li></ul>
<div data-widget="pickset" data-set="gsym"></div>
<div class="hint">💡 <b>"Goitre, eyes, shins = Graves."</b></div>
<details class="chk"><summary>✋ Checkpoint: is lid lag specific for Graves disease?</summary><p>No, it occurs in any thyrotoxicosis.</p></details>`,
recap:["Specific: diffuse goitre with bruit, orbitopathy, dermopathy, acropachy.","Lid lag is not specific.","Look for other autoimmune diseases."],
quiz:[{q:"Specific for Graves?",o:["Dermopathy","Tremor","Weight loss"],a:0,e:"Antibody-mediated."},{q:"A bruit over the thyroid means…",o:["High blood flow in Graves disease","Cancer","Calcification"],a:0,e:"Hypervascular gland."}]}],
cases:[{id:"gvk1",title:"Case 1: After the baby",steps:[
{t:`<b>The scene:</b> 29-year-old woman, 4 months postpartum: weight loss, tremor, diffuse goitre with bruit, gritty eyes. Thyroid-stimulating hormone suppressed, free thyroxine high.`,q:"Most likely?",o:["Graves disease","Postpartum thyroiditis only","Toxic adenoma"],a:0,e:"Bruit and eye signs favour Graves; antibodies confirm (subsection 4)."}],take:["Postpartum thyrotoxicosis: Graves or thyroiditis; antibodies and uptake decide."]},
{id:"gvk2",title:"Case 2: The grandfather",steps:[
{t:`<b>The scene:</b> 72-year-old man, new atrial fibrillation, weight loss, low mood. Thyroid-stimulating hormone 0.01 mU/L.`,q:"Presentation type?",o:["Apathetic thyrotoxicosis","Depression only","Heart failure only"],a:0,e:"Older patient."}],take:["Test thyroid in atrial fibrillation."]}],
flash:[["Cause of Graves disease","Stimulating thyroid-stimulating hormone receptor antibodies."],["Risk factors","Women, family, smoking, postpartum, stress, iodine."],["Graves triad","Goitre, orbitopathy, dermopathy."],["Lid lag","Any thyrotoxicosis."],["Older patients","Apathetic: atrial fibrillation, weight loss."],["Bruit","High thyroid blood flow."],["IFy on slide","Interferon gamma."],["Eye risk factor","Smoking."],["Dermopathy site","Shins."],["Associated diseases","Vitiligo, type 1 diabetes, coeliac, pernicious anaemia."]],
exam:["Stimulating thyroid-stimulating hormone receptor antibodies.","Thyrotoxic features by system.","Graves-specific: diffuse goitre with bruit, orbitopathy, dermopathy, acropachy.","Apathetic thyrotoxicosis in the elderly.","Smoking: risk for disease and eye disease."],
finalHtml:`<div data-widget="spot" data-set="t1b"></div><div data-widget="termdeck" data-set="t1b"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>3. Graves orbitopathy.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t1c')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 1 (Prof. Ionela Pascanu, UMCH 2026), pages 7–23; Smith and Hegedüs, N Engl J Med 2016 (Graves disease); American Thyroid Association guideline (2016). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t1b=T1B;
