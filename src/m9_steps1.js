/* ===== Lecture 7 subsection 9: glucocorticoid actions, therapy, side effects – header + steps 1–3 ===== */
const M9={
meta:"Endocrinology › Lecture 7 › Subsection 9 · lecture pages 27–29 · ⏱ about 30 minutes in 6 bite-sized steps",
intro:`<p>Glucocorticoids are among the most prescribed drugs in medicine, and among those with the most side effects. This module goes from the receptor inside the cell, through the body-wide actions of cortisol, to choosing the right steroid, preventing side effects, recognising Cushing syndrome from medicines, and stopping safely.</p>`,
goals:[
"Explain how glucocorticoids change gene activity inside the cell",
"List the main body-wide actions of cortisol and link each one to a side effect",
"Choose the right steroid using potency, salt-retaining effect and duration",
"Recall the side effects with a mnemonic and know how to prevent them",
"Recognise Cushing syndrome caused by steroid medicines and explain axis suppression",
"Taper and stop steroids safely and recognise withdrawal problems"],
cards:[

{id:"g1",title:"Inside the cell: the glucocorticoid receptor",min:4,goal:0,obj:["Follow the receptor from cytoplasm to DNA","Tell transactivation from transrepression","Explain why the effect takes hours"],html:`
<div class="scene"><b>The scene:</b> A patient with a severe asthma attack asks: "The doctor said the prednisolone needs a few hours to work. Why not instantly, like my blue reliever inhaler?"</div>
<p>👉 Step through what happens inside the cell:</p>
<div data-widget="grcell"></div>
<ol><li>The fat-soluble steroid crosses the cell membrane.</li>
<li>In the cytoplasm it binds the [[gr]], which is held by [[hsp]]. Binding releases them.</li>
<li>The activated receptor moves into the nucleus and binds [[gre]] on DNA.</li>
<li>[[transact]]: genes switched ON, for example [[annexin]] (anti-inflammatory) and liver enzymes of [[gneo]] (side effect: high glucose).</li>
<li>[[transrep]]: the receptor blocks [[nfkb]] and [[ap1]] → fewer cytokines, adhesion molecules and cyclo-oxygenase 2 → less inflammation.</li></ol>
<p><b>Why hours?</b> New messenger RNA and proteins have to be made (genomic effects, slide 27). Very high doses (for example intravenous methylprednisolone pulses) also have faster non-genomic effects on cell membranes, but the main benefit still needs hours. That is why the asthma attack needs the bronchodilator <b>now</b> and the steroid for the <b>next hours and days</b>.</p>
<div class="hint">💡 <b>"Turn ON the calming genes, turn OFF the shouting genes."</b> And it takes hours, because the cell has to build new proteins.</div>
<details class="chk"><summary>✋ Checkpoint: which mechanism gives most of the wanted anti-inflammatory effect?</summary><p>Transrepression: blocking nuclear factor kappa B and activator protein 1. Many metabolic side effects come from transactivation.</p></details>`,
recap:["Steroid enters the cell → binds the glucocorticoid receptor → heat-shock proteins released → receptor enters nucleus.","Binds glucocorticoid response elements: transactivation (genes on) and transrepression (blocks nuclear factor kappa B, activator protein 1).","Genomic effects take hours."],
quiz:[{q:"Where is the unbound glucocorticoid receptor mainly found?",o:["In the cell membrane","In the cytoplasm, held by heat-shock proteins","In the mitochondria"],a:1,e:"The receptor waits in the cytoplasm bound to heat-shock proteins; hormone binding releases them so it can enter the nucleus."},
{q:"Blocking nuclear factor kappa B by the glucocorticoid receptor is called…",o:["Transactivation","Transrepression","Down-regulation of the receptor"],a:1,e:"Transrepression: the receptor interferes with inflammatory transcription factors and switches inflammatory genes off."}]},

{id:"g2",title:"What cortisol does around the body",min:5,goal:1,obj:["List the actions of cortisol by organ system","Link each action to a side effect of excess and a sign of deficiency"],html:`
<div class="scene"><b>The scene:</b> The hormone that keeps you alive in a crisis gives, in excess, the round face, thin skin and fragile bones. Every side effect is a normal action turned up too high for too long.</div>
<p>👉 Click each organ system: <b>normal action</b> → <b>too much</b> → <b>too little</b>.</p>
<div data-widget="actions"></div>
<p>The lecture groups them as metabolism, cardiovascular system, immune system and central nervous system (slide 28). Add <b>bone, skin and muscle, eye, salt and water, and the fetal lung</b> to see where most side effects come from.</p>
<div class="hint">💡 <b>"Side effect = normal action × too much × too long."</b> If you know what cortisol does, you can predict every side effect without memorising a list.</div>
<details class="chk"><summary>✋ Checkpoint: why does a patient on high-dose steroids have a HIGH neutrophil count but LOW eosinophils?</summary><p>Cortisol releases neutrophils from the vessel wall and bone marrow into the blood, and pushes eosinophils and lymphocytes out of the blood. It is not a sign of infection by itself.</p></details>`,
recap:["Metabolism: gluconeogenesis, insulin resistance, protein breakdown, fat redistribution.","Circulation: permissive effect on catecholamines; immune: anti-inflammatory, fewer lymphocytes and eosinophils.","Bone: fewer bone-building cells, less calcium absorption; brain: mood and sleep; fetal lung maturation."],
quiz:[{q:"Which action of cortisol explains steroid-induced diabetes?",o:["More gluconeogenesis and insulin resistance","More insulin secretion","Less glucose absorption"],a:0,e:"Cortisol makes the liver produce glucose and makes muscle and fat less sensitive to insulin."},
{q:"Which blood count change is typical on high-dose glucocorticoids?",o:["High eosinophils","High neutrophils, low lymphocytes and eosinophils","Low neutrophils"],a:1,e:"Neutrophils are released into the blood; lymphocytes and eosinophils fall. Eosinophilia is a clue to cortisol deficiency."}]},

{id:"g3",title:"Choosing a steroid: potency, salt effect and duration",min:5,goal:2,obj:["Read a steroid potency table","Convert between equivalent doses","Match the steroid to the clinical job"],html:`
<div class="scene"><b>The scene:</b> Ward round. A woman with Addison disease. A man with brain metastases and swelling around them. A flare of rheumatoid arthritis. A pregnancy at 29 weeks with threatened preterm labour. Four patients, four different steroids.</div>
<p>👉 Compare the drugs, then try the dose converter:</p>
<div data-widget="potency"></div>
<table><tr><th>Job</th><th>Usual choice</th><th>Why</th></tr>
<tr><td>Replacement in adrenal insufficiency</td><td>[[hydrocortisone]] (+ [[fludro]] in primary)</td><td>Identical to natural cortisol; short-acting, so it can mimic the rhythm</td></tr>
<tr><td>Most anti-inflammatory courses by mouth</td><td>[[pred]] (or [[prednisone]])</td><td>Intermediate action, little salt effect, once in the morning; largely inactivated by the placenta</td></tr>
<tr><td>Severe flares, intravenous pulses</td><td>[[mpred]]</td><td>High potency, low salt effect</td></tr>
<tr><td>Brain swelling around tumours, nausea with chemotherapy, severe coronavirus disease 2019 (COVID-19) needing oxygen</td><td>[[dexa]]</td><td>Very potent, long-acting, <b>no</b> salt retention</td></tr>
<tr><td>Fetal lung maturation before preterm birth</td><td>Dexamethasone or [[betameth]] (given to the mother)</td><td>Cross the placenta (Module 7)</td></tr></table>
<p><b>Route matters:</b> inhaled, nasal, skin, eye and joint steroids act mostly locally, but high doses, large skin areas or interacting drugs (ritonavir) can still cause systemic effects and axis suppression.</p>
<div class="hint">💡 <b>"Hydrocortisone replaces, prednisolone calms, methylprednisolone hammers, dexamethasone goes to the brain and to the baby."</b></div>
<details class="chk"><summary>✋ Checkpoint: why is dexamethasone a poor choice for Addison disease replacement?</summary><p>It has no salt-retaining (mineralocorticoid) effect, and its long action cannot mimic the daily rhythm, so it easily causes over-replacement and Cushing features. Guidelines advise against it.</p></details>`,
recap:["Equivalent doses: hydrocortisone 20 mg ≈ prednisolone 5 mg ≈ methylprednisolone 4 mg ≈ dexamethasone 0.75 mg.","Salt effect: hydrocortisone > prednisolone > methylprednisolone; dexamethasone none; fludrocortisone mainly salt.","Duration: hydrocortisone short, prednisolone and methylprednisolone intermediate, dexamethasone long."],
quiz:[{q:"Prednisolone 5 mg has about the same glucocorticoid effect as…",o:["Hydrocortisone 5 mg","Hydrocortisone 20 mg","Dexamethasone 5 mg"],a:1,e:"Prednisolone is about 4 times as potent as hydrocortisone: 5 mg ≈ 20 mg hydrocortisone ≈ 0.75 mg dexamethasone."},
{q:"Which steroid has essentially no mineralocorticoid (salt-retaining) effect?",o:["Hydrocortisone","Fludrocortisone","Dexamethasone"],a:2,e:"Dexamethasone is a pure glucocorticoid, which is why it is used for brain swelling but not for mineralocorticoid replacement."}]}
]};
