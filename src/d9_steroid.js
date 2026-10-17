/* ===== Adrenal disorders 2.9: Steroid therapy safety ===== */
Object.assign(GLOSSARY,{
giai:{l:"glucocorticoid-induced adrenal insufficiency",c:"disease",d:"Adrenal insufficiency caused by steroid medication that has switched off the axis; it appears when the dose is lowered or stopped, or when extra cortisol is needed.",w:"The most common cause of adrenal insufficiency overall."},
amcort:{l:"morning cortisol test on treatment",c:"test",d:"Blood cortisol at about 8–9 a.m., about 24 hours after the last hydrocortisone or prednisolone dose (longer for dexamethasone).",w:"Used when the dose has reached physiological levels to check if the axis has recovered."},
supraphys:{l:"supraphysiological dose",c:"concept",d:"A steroid dose above normal daily cortisol production (above about prednisolone 5 mg or hydrocortisone 20 mg per day).",w:"For 4 weeks or more it can suppress the axis."},
ppi:{l:"proton pump inhibitor",c:"drug",d:"Stomach acid blocker (for example omeprazole).",w:"Considered with steroids only when there are extra risks for stomach bleeding, such as combined anti-inflammatory painkillers."}
});
XTREE.taper={t:"Coming off long-term prednisolone",start:"a",n:{
a:{q:"Prednisolone 20 mg for 6 months for polymyalgia; disease now controlled. Is the dose above physiological?",o:[["Yes, above about 5 mg","b"]]},
b:{q:"Reduce (by the disease protocol) to the physiological range, about prednisolone 4–5 mg. Symptoms of the underlying disease?",o:[["Flare","=Treat the disease: go back to the last dose that worked and taper more slowly; consider steroid-sparing drugs."],["No flare, but aches and fatigue","=Probably <b>glucocorticoid withdrawal syndrome</b>: reassure, slow the taper or briefly go back; this is not adrenal insufficiency by itself."],["Well","c"]]},
c:{q:"Morning cortisol about 24 hours after the last prednisolone dose (European Society of Endocrinology/Endocrine Society 2024). Result?",o:[["Above about 300 nmol/L (10 µg/dl)","=Axis recovered: steroids can be stopped. Stay alert for symptoms."],["About 150–300 nmol/L","=Partly recovered: continue the physiological dose and repeat in weeks to months (or do a Synacthen test)."],["Below about 150 nmol/L (5 µg/dl)","=Still suppressed: continue the physiological dose, keep sick-day rules and the steroid emergency card, and repeat in a few months."]]}}};
XPK.sick={t:"Sick-day decision",opts:["Normal dose","Double the daily dose","Hydrocortisone 100 mg injection and hospital","Hydrocortisone 100 mg intravenously at induction, then 200 mg over 24 hours"],items:[
["On prednisolone 7.5 mg for 1 year. Mild cold, no fever.","Normal dose","Minor illness without fever needs no change."],
["Same patient, fever 38.5 °C with a chest infection","Double the daily dose","Sick-day rule; return to normal when well (usually 2–3 days)."],
["Vomiting twice in 4 hours, cannot keep tablets down","Hydrocortisone 100 mg injection and hospital","Never wait: inject into the muscle and go to hospital."],
["Hip replacement under general anaesthetic","Hydrocortisone 100 mg intravenously at induction, then 200 mg over 24 hours","UK guidance (2020): continue until eating and drinking, then double oral dose for 24–48 hours (longer after major surgery)."]]};
XS.steroid=["Spot the error",[["Anyone taking more than about prednisolone 5 mg daily for 4 weeks or more may have a suppressed axis.",1],["Inhaled and injected steroids never suppress the axis.",0,"Wrong: high-dose inhaled steroids (especially fluticasone), joint injections and potent skin creams can suppress it."],["Stopping a long course suddenly can cause an adrenal crisis.",1],["Patients at risk should carry a steroid emergency card.",1]]];
XT.steroid="giai,gcsup,supraphys,physdose,taper,gws,amcort,sickday,stressdose,card,kit,bracelet,gio,bisphos,ppi";
const D9={
meta:"Endocrinology › Adrenal disorders › 2.9 · theory module · ⏱ about 20 minutes in 4 bite-sized steps",
intro:`<p>Steroid tablets are among the most prescribed drugs, and the most common cause of both Cushing syndrome and adrenal insufficiency. This module is the practical safety guide: who is at risk, how to taper, what to do when ill and how to protect bones. The pharmacology is in Lecture 7, subsection 9.</p>`,
goals:["Identify patients at risk of adrenal suppression","Taper safely and test recovery","Apply sick-day and surgery rules","Prevent side effects"],
cards:[
{id:"sd1",title:"Who is at risk?",min:5,goal:0,obj:["Name the risk factors for suppression"],html:`
<div class="scene"><b>The scene:</b> A 70-year-old has taken prednisolone 10 mg for 8 months for polymyalgia rheumatica. He is admitted for elective surgery and the surgeon wants to stop "all unnecessary tablets".</div>
<p>[[giai]] can occur in anyone on a [[supraphys]] for <b>4 weeks or more</b> (European Society of Endocrinology/Endocrine Society 2024). Higher dose, longer duration, evening dosing and long-acting steroids (dexamethasone) raise the risk.</p>
<p><b>Other routes:</b> high-dose inhaled steroids, repeated joint injections, potent skin creams over large areas, and combinations with drugs that block CYP3A4 (for example ritonavir with fluticasone).</p>
<div class="hint">💡 <b>"More than 5 for more than 4: suppression risk."</b></div>
<details class="chk"><summary>✋ Checkpoint: can the surgeon stop his prednisolone?</summary><p>No: stopping suddenly risks crisis, and he needs extra cover for surgery.</p></details>`,
recap:["Risk: above physiological dose for 4 weeks or more.","Any route can suppress.","Never stop suddenly."],
quiz:[{q:"Which combination raises suppression risk from inhaled fluticasone?",o:["Ritonavir","Paracetamol","Omeprazole"],a:0,e:"CYP3A4 block raises levels."},{q:"Duration that can suppress the axis?",o:["4 weeks or more","1 day","Only years"],a:0,e:"4 weeks or more of supraphysiological doses."}]},
{id:"sd2",title:"Tapering and testing recovery",min:6,goal:1,obj:["Taper in two phases","Interpret morning cortisol"],html:`
<div class="scene"><b>The scene:</b> His polymyalgia is quiet. He wants to come off.</div>
<ol><li><b>Phase 1:</b> lower the dose to the physiological range (about prednisolone 4–5 mg); the speed follows the disease.</li><li><b>Phase 2:</b> slow taper while the axis wakes up. Consider an [[amcort]].</li></ol>
<div data-widget="tree" data-set="taper"></div>
<p>[[gws]] (aches, fatigue, low mood) is common and is not the same as adrenal insufficiency.</p>
<div class="hint">💡 <b>"Fast to five, then slow."</b></div>
<details class="chk"><summary>✋ Checkpoint: morning cortisol 180 nmol/L on prednisolone 5 mg. Stop?</summary><p>Not yet: continue and repeat.</p></details>`,
recap:["Fast to physiological dose, then slow.","Morning cortisol: above about 300 recovered, below about 150 suppressed.","Withdrawal syndrome is not insufficiency."],
quiz:[{q:"Morning cortisol above about 300 nmol/L means…",o:["Axis recovered","Still suppressed","Cushing syndrome"],a:0,e:"2024 guideline."},{q:"When is a morning cortisol useful?",o:["At physiological doses, about 24 h after the last dose","On 40 mg prednisolone","Right after a dose"],a:0,e:"Otherwise the result is uninterpretable."}]},
{id:"sd3",title:"Sick days and surgery",min:6,goal:2,obj:["Apply sick-day rules","Know surgery cover"],html:`
<div class="scene"><b>The scene:</b> He develops fever and vomiting a week before surgery.</div>
${FIG("sickday")}
<ul><li>[[sickday]]: fever or illness needing bed rest → double the daily dose; vomiting or collapse → [[kit|hydrocortisone 100 mg into the muscle]] and hospital.</li>
<li>[[stressdose]] for surgery (UK 2020 guidance): hydrocortisone 100 mg intravenously at induction, then 200 mg over 24 hours (or 50 mg every 6 hours) until eating and drinking; then double oral dose for 24–48 hours (up to a week after major surgery).</li>
<li>[[card]] and [[bracelet]].</li></ul>
<div data-widget="pickset" data-set="sick"></div>
<div class="hint">💡 <b>"Fever: double; vomiting: inject."</b></div>
<details class="chk"><summary>✋ Checkpoint: what does the surgical team need to give at induction?</summary><p>Hydrocortisone 100 mg intravenously.</p></details>`,
recap:["Fever: double; vomiting: inject 100 mg and hospital.","Surgery: 100 mg at induction, 200 mg/24 h.","Card and bracelet."],
quiz:[{q:"Vomiting and on long-term prednisolone. Action?",o:["Hydrocortisone 100 mg into the muscle and hospital","Double tablets","Stop steroids"],a:0,e:"Tablets cannot be absorbed."},{q:"Surgical cover at induction?",o:["Hydrocortisone 100 mg intravenously","Nothing","Dexamethasone 0.5 mg"],a:0,e:"UK guidance."}]},
{id:"sd4",title:"Preventing side effects",min:5,goal:3,obj:["Plan prevention for long-term therapy"],html:`
<div class="scene"><b>The scene:</b> A 65-year-old woman is starting prednisolone 30 mg for giant cell arteritis, likely for over a year.</div>
<ul><li><b>Bones:</b> [[gio]]: calcium and vitamin D, fracture risk assessment, often a [[bisphos]] from the start in older patients or high doses (UK and American College of Rheumatology guidance).</li>
<li><b>Sugar and blood pressure:</b> check regularly; steroids raise afternoon glucose.</li>
<li><b>Infections:</b> vaccines (influenza, pneumococcus, shingles non-live), screen for latent tuberculosis and hepatitis B when doses and duration are high.</li>
<li><b>Stomach:</b> a [[ppi]] when combined with anti-inflammatory painkillers or other bleeding risks.</li>
<li><b>Eyes and mood:</b> cataract, glaucoma, sleep and mood changes.</li>
<li><b>Lowest effective dose</b> and steroid-sparing drugs.</li></ul>
<div class="hint">💡 <b>"Bones, sugar, bugs, gut, eyes, mood."</b></div>
<details class="chk"><summary>✋ Checkpoint: name two vaccines to update before long-term steroids.</summary><p>Influenza and pneumococcus (also non-live shingles vaccine).</p></details>`,
recap:["Bone protection from the start in high-risk patients.","Monitor sugar, blood pressure, infections, eyes, mood.","Lowest dose, shortest time."],
quiz:[{q:"Which drug class protects bone on long-term steroids?",o:["Bisphosphonates","Diuretics","Beta-blockers"],a:0,e:"First-line."},{q:"Live vaccines on high-dose steroids are…",o:["Avoided","Recommended","Irrelevant"],a:0,e:"Immunosuppression."}]}],
cases:[{id:"sdk1",title:"Case 1: The surgical list",steps:[
{t:`<b>The scene:</b> A 70-year-old on prednisolone 10 mg for 8 months is booked for a hip replacement.`,q:"Peri-operative plan?",o:["Continue prednisolone; hydrocortisone 100 mg intravenously at induction then 200 mg/24 h","Stop prednisolone a week before","No change"],a:0,e:"Stress dosing."},
{t:`Day 2 after surgery, eating and drinking.`,q:"Next?",o:["Double oral dose for 24–48 hours (longer after major surgery), then usual dose","Stop steroids","Triple for a month"],a:0,e:"UK guidance."}],take:["Continue steroids and add stress cover."]},
{id:"sdk2",title:"Case 2: Coming off",steps:[
{t:`<b>The scene:</b> A 55-year-old tapered from prednisolone 40 mg to 5 mg over 4 months. Morning cortisol (24 h after last dose): 120 nmol/L.`,q:"Interpretation?",o:["Still suppressed","Recovered","Cushing syndrome"],a:0,e:"Below about 150 nmol/L."},
{t:`She wants to stop now.`,q:"Advice?",o:["Continue 5 mg, keep the card, repeat in a few months","Stop today","Increase to 40 mg"],a:0,e:"Wait for recovery."}],take:["Test, do not guess."]}],
flash:[["Suppression risk","Above physiological dose for 4 weeks or more."],["Physiological dose","Prednisolone about 4–5 mg, hydrocortisone about 15–25 mg daily."],["Taper rule","Fast to physiological, then slow."],["Morning cortisol recovered","Above about 300 nmol/L."],["Morning cortisol suppressed","Below about 150 nmol/L."],["Fever","Double the dose."],["Vomiting","Hydrocortisone 100 mg into the muscle, hospital."],["Surgery cover","100 mg intravenously at induction, 200 mg/24 h."],["Bone protection","Calcium, vitamin D, bisphosphonate if high risk."],["Withdrawal syndrome","Aches and fatigue, not insufficiency."]],
exam:["Glucocorticoid-induced adrenal insufficiency: above physiological dose 4 weeks or more, any route.","Taper fast to physiological, then slow; morning cortisol to test recovery.","Sick-day rules; 100 mg injection for vomiting.","Surgery: 100 mg intravenously at induction, 200 mg/24 h.","Prevent: bones, sugar, infections, stomach, eyes, mood."],
finalHtml:`<div data-widget="spot" data-set="steroid"></div><div data-widget="termdeck" data-set="steroid"></div><div class="exam" style="border-color:var(--ok)"><b>🏁 End of the adrenal disorders chapter</b><br>Revisit the pharmacology in Lecture 7, subsection 9, or start the thyroid section.<br><button class="pri" style="margin-top:8px" onclick="showModule('m9')">→ Open subsection 9</button></div>`,
sources:"Sources: European Society of Endocrinology/Endocrine Society guideline on glucocorticoid-induced adrenal insufficiency (Beuschlein et al., 2024); Society for Endocrinology/Association of Anaesthetists peri-operative guidance (Woodcock et al., Anaesthesia 2020); American College of Rheumatology guideline on glucocorticoid-induced osteoporosis (2022). Cut-offs depend on the cortisol assay. Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.d9=D9;
