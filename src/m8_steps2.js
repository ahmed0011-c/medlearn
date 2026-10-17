/* ===== Subsection 8: steps 4–5 ===== */
M8.cards.push(
{id:"f4",title:"Stress: when the axis overrides the clock",min:4,goal:3,obj:["List physical, psychological and inflammatory triggers","Explain how cytokines drive the axis","Explain what cortisol does for the body in stress"],html:`
<div class="scene"><b>The scene:</b> Day 1 after a hip replacement. Pain, blood loss, inflammation. Although it is evening, her cortisol is far above her usual morning peak.</div>
<p><b>Triggers:</b> surgery, trauma, infection, low glucose, low blood pressure, burns, intense emotion or fear. Signals arrive from the limbic system, the brainstem and the blood: [[cytok]] (interleukin-1, interleukin-6, tumour necrosis factor) switch on corticotropin-releasing hormone and adrenocorticotropic hormone directly.</p>
<p><b>What happens:</b> the set point is turned <b>up</b>. Feedback still works, but the brain now defends a much higher cortisol. Vasopressin adds extra drive.</p>
<p><b>Why it helps:</b></p>
<ul><li>Fuel: more glucose ([[gneo]]) and mobilised amino acids and fatty acids.</li>
<li>Circulation: the [[permis]] keeps blood vessels responsive to adrenaline and noradrenaline.</li>
<li>Brake on the immune system: cortisol stops inflammation from overshooting. The immune system switches the axis on, and cortisol damps the immune system: a second feedback loop.</li>
<li>Medulla: cortisol-rich blood flows from the cortex into the medulla and supports the enzyme that makes adrenaline (phenylethanolamine N-methyltransferase).</li></ul>
<p>👉 In the diagram, compare <b>normal</b> with <b>stress</b>:</p>
<div data-widget="axisloop" data-start="stress"></div>
<p><b>Clinical link:</b> a patient without a working adrenal (Addison disease, or an axis suppressed by steroid tablets) cannot mount this rise. That is the reason for [[stressdose]] and [[sickday]] (see <a onclick="showModule('d2')" style="cursor:pointer;color:var(--acc);font-weight:700">module 2.2</a>). Long-term overactivation (severe depression, alcohol excess) gives [[pseudocush]].</p>
<div class="hint">💡 <b>"Stress turns the thermostat up, it does not remove it."</b> The loop still works, just at a higher setting.</div>
<details class="chk"><summary>✋ Checkpoint: why does a patient on long-term prednisolone need extra steroid for surgery?</summary><p>Her axis is suppressed, so she cannot raise her own cortisol in response to the surgical stress. The extra dose replaces the rise she cannot make.</p></details>`,
recap:["Stress (physical, psychological, inflammatory) overrides the rhythm and raises the set point.","Cytokines (interleukin-1, interleukin-6, tumour necrosis factor) and vasopressin drive the axis.","Cortisol in stress: fuel, blood pressure (permissive effect), brake on inflammation; patients without an axis need stress dosing."],
quiz:[{q:"Which statement about stress is correct?",o:["Negative feedback stops working completely","The set point rises, but feedback still works","Cortisol falls to protect the immune system"],a:1,e:"The brain defends a higher cortisol level during stress; feedback remains active around the new set point."},
{q:"Which cytokine is a classic activator of the axis during infection?",o:["Interleukin-6","Insulin","Erythropoietin"],a:0,e:"Interleukin-1, interleukin-6 and tumour necrosis factor stimulate corticotropin-releasing hormone and adrenocorticotropic hormone."}]},

{id:"f5",title:"Dexamethasone suppression tests: the logic",min:5,goal:4,obj:["Explain why dexamethasone is used","Interpret the 1 mg overnight and the low-dose tests","Use adrenocorticotropic hormone and the high-dose test to find the source","Name causes of false results"],html:`
<div class="scene"><b>The scene:</b> A 41-year-old woman has a round red face, wide purple stretch marks, weak thighs and new high blood pressure. Is her cortisol truly too high, and if so, where does it come from?</div>
<p><b>Why dexamethasone?</b> [[dexa]] acts like a strong cortisol on the pituitary, but it is given in tiny doses and most cortisol assays do not detect it. So any cortisol you measure afterwards is the patient's <b>own</b>. In a healthy person feedback switches off adrenocorticotropic hormone, and cortisol falls.</p>
<h3>Step A: is there Cushing syndrome?</h3>
<ul><li><b>1 mg overnight test:</b> 1 mg dexamethasone at 11 p.m.–midnight, serum cortisol at 8–9 a.m. Normal suppression: below <b>1.8 µg/dl (50 nmol/L)</b> (Endocrine Society, 2008).</li>
<li><b>Low-dose 48-hour test:</b> 0.5 mg every 6 hours for 48 hours; the same cut-off. Used to confirm.</li></ul>
<h3>Step B: where does it come from?</h3>
<ul><li><b>Adrenocorticotropic hormone first.</b> Low → adrenal source (imaging of the adrenals). Normal or high → pituitary or ectopic source.</li>
<li><b>[[hddst]]:</b> 8 mg. A pituitary adenoma usually keeps some feedback, so cortisol falls clearly (classically by more than half); ectopic and adrenal tumours do not suppress.</li>
<li>Today pituitary magnetic resonance imaging, the corticotropin-releasing hormone test and [[ipss]] are the main tools to tell pituitary from ectopic.</li></ul>
<p>👉 Run the test on each patient:</p>
<div data-widget="dextest"></div>
<p><b>False "no suppression":</b> the oestrogen pill (more cortisol-binding globulin), drugs that speed up dexamethasone breakdown (carbamazepine, phenytoin, rifampicin), a forgotten or vomited tablet, [[pseudocush]], severe illness. Measuring the dexamethasone level together with cortisol checks that the drug was really present. <b>False "suppression":</b> drugs that slow dexamethasone breakdown (for example itraconazole, ritonavir), and liver or kidney failure.</p>
<p><b>Oestrogen and the test:</b> Stop <b>oral</b> oestrogen about 6 weeks before testing (Nieman and colleagues, 2008). Oestrogen through the skin (patches, gels) and progestogen-only methods barely change cortisol-binding globulin. If oral oestrogen cannot be stopped, use late-night saliva cortisol or 24-hour urine free cortisol instead.</p>
<div class="hint">💡 <b>Dexamethasone asks the pituitary: "Are you still listening?"</b> Healthy: yes, even to a whisper (1 mg). Pituitary tumour: only if you shout (8 mg). Ectopic tumour and adrenal tumour: never, because they do not listen to the pituitary's feedback at all.</div>
<details class="chk"><summary>✋ Checkpoint: why does an adrenal adenoma not suppress even with 8 mg?</summary><p>Its cortisol does not depend on adrenocorticotropic hormone at all (which is already suppressed), so lowering adrenocorticotropic hormone further changes nothing.</p></details>`,
recap:["Dexamethasone = feedback signal that is not measured as cortisol.","1 mg overnight or low-dose 48-hour test: normal cortisol below 1.8 µg/dl (50 nmol/L).","Then adrenocorticotropic hormone: low → adrenal; normal/high → pituitary (partly suppresses with 8 mg) or ectopic (does not).","False positives: pill, enzyme inducers, missed tablet, pseudo-Cushing states."],
quiz:[{q:"After 1 mg dexamethasone overnight, morning cortisol is 0.9 µg/dl. Interpretation?",o:["Normal suppression; Cushing syndrome unlikely","Cushing syndrome confirmed","Adrenal insufficiency"],a:0,e:"Cortisol below 1.8 µg/dl (50 nmol/L) after 1 mg dexamethasone is normal suppression."},
{q:"Cortisol is high, adrenocorticotropic hormone is high and cortisol does NOT fall with 8 mg dexamethasone. Most likely source?",o:["Pituitary adenoma","Ectopic adrenocorticotropic hormone-secreting tumour","Adrenal adenoma"],a:1,e:"High adrenocorticotropic hormone points to a pituitary or ectopic source; failure to suppress with high dose favours ectopic."}]}
);
