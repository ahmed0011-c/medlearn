/* ===== Thyroid · Lecture 6 part 2 · 4: Thyroid nodules (lecture pages 25–40) ===== */
Object.assign(GLOSSARY,{
nodule:{l:"thyroid nodule",c:"disease",d:"A distinct lump within the thyroid, seen on ultrasound as different from the surrounding tissue.",w:"Very common; most are benign."},
hypoecho:{l:"marked hypoechogenicity",c:"concept",d:"A nodule darker on ultrasound than the neck muscles.",w:"High-risk EU-TIRADS feature."},
tallwide:{l:"taller-than-wide shape",c:"concept",d:"A nodule whose front-to-back size is larger than its side-to-side size (non-oval).",w:"High-risk EU-TIRADS feature."},
spongi:{l:"spongiform nodule",c:"concept",d:"Nodule made of many tiny cysts, like a sponge.",w:"Benign (EU-TIRADS 2)."},
molec:{l:"molecular testing",c:"test",d:"Gene or gene-expression tests on fine-needle aspiration material to sharpen the cancer risk of indeterminate nodules.",w:"Can avoid diagnostic surgery for some Bethesda III and IV nodules."},
rfa:{l:"radiofrequency ablation",c:"drug",d:"Heat treatment through a needle to shrink benign nodules.",w:"Alternative to surgery for symptomatic benign nodules in expert centres."}
});
XCALC.tirads={t:"EU-TIRADS calculator",inp:[["sz","Largest diameter","n",[3,50,1,18,"mm"]],["cyst","Pure cyst or entirely spongiform","c",false],["echo","Echogenicity","s",[["Iso- or hyperechoic","iso"],["Mildly hypoechoic","hypo"],["Markedly hypoechoic (darker than muscle)","mark"]]],["shape","Non-oval (taller than wide)","c",false],["marg","Irregular margins","c",false],["mc","Microcalcifications","c",false]],
f:v=>{let c,risk,cut;if(v.cyst){c=2;risk="about 0%";cut=null}else if(v.echo=="mark"||v.shape||v.marg||v.mc){c=5;risk="26–87%";cut=10}else if(v.echo=="hypo"){c=4;risk="6–17%";cut=15}else{c=3;risk="2–4%";cut=20}
let s=`<b>EU-TIRADS ${c}</b> (${["","","benign","low risk","intermediate risk","high risk"][c]}): estimated cancer risk ${risk}. `;
if(!cut)s+="No fine-needle aspiration needed (unless to relieve symptoms).";else if(v.sz>cut)s+=`🔴 Larger than ${cut} mm: <b>fine-needle aspiration</b>.`;else if(c==5&&v.sz>5)s+="🟠 5–10 mm high-risk nodule: fine-needle aspiration or active surveillance, depending on location, nodes and patient wishes.";else s+=`🟢 ${cut} mm or smaller: no aspiration now; follow up with ultrasound.`;
s+=" Always check lymph nodes: a suspicious node is sampled regardless of the nodule.";return s},note:"Based on Russ et al., European Thyroid Journal 2017. Learning tool, not a reporting tool."};
XPAT.beth={t:"Bethesda categories (2023)",cols:["Risk of cancer (average)","Usual next step"],rows:[["I Non-diagnostic",["≈ 13%","Repeat aspiration under ultrasound"],"Not enough cells."],["II Benign",["≈ 4%","Ultrasound follow-up"],"For example colloid nodule or thyroiditis."],["III Atypia of undetermined significance",["≈ 22%","Repeat aspiration, molecular test, or lobectomy"],"Indeterminate."],["IV Follicular neoplasm",["≈ 30%","Molecular test or lobectomy"],"Cytology cannot see capsular invasion."],["V Suspicious for malignancy",["≈ 74%","Surgery"],"Most turn out to be papillary carcinoma."],["VI Malignant",["≈ 97%","Surgery (or surveillance for some microcarcinomas)"],"Usually papillary carcinoma."]]};
XS.nod=["Spot the error",[["Most thyroid nodules are benign.",1],["A hot nodule on scintigraphy should always be biopsied.",0,"Wrong: hot (autonomous) nodules are <b>almost never malignant</b>; aspiration is usually not needed."],["Follicular carcinoma cannot be diagnosed on cytology alone.",1],["Central vascularity on Doppler is a key EU-TIRADS high-risk feature.",0,"Wrong: EU-TIRADS uses shape, margins, microcalcifications and marked hypoechogenicity. Vascularity is <b>not</b> part of the score."]]];
XT.nod="nodule,us,eutirads,microcalc,hypoecho,tallwide,spongi,scinti,hotnod,fna,bethesda,molec,lobect,rfa";
const T2D={
meta:"Endocrinology › Thyroid › Lecture 6 part 2 › Subsection 6.2.4 · lecture pages 25–40 · ⏱ about 25 minutes in 4 bite-sized steps",
intro:`<p>Thyroid nodules are extremely common, and only a small minority are cancer. The skill is to find that minority without operating on everyone. Three tools do it: thyroid-stimulating hormone, ultrasound (EU-TIRADS) and fine-needle aspiration (Bethesda).</p>`,
goals:["Know how common nodules and cancer are","Order the work-up","Classify nodules with EU-TIRADS","Interpret Bethesda categories","Choose management"],
cards:[
{id:"no1",title:"How common, and how often cancer?",min:5,goal:0,obj:["Give prevalence and cancer risk","List risk factors"],html:`
<div class="scene"><b>The scene:</b> A 41-year-old woman had a carotid ultrasound; the report mentions a 18 mm thyroid nodule. She is terrified.</div>
<p>[[nodule|Nodules]]: palpable in about 5% of women and 1% of men; on ultrasound in up to about 20–68% of adults (more with age). Cancer is found in about <b>7–15%</b> (American Thyroid Association 2015).</p>
<p><b>Higher risk:</b> neck radiation in childhood, family history of thyroid cancer or syndromes, male sex, very young or old age, rapid growth, hard fixed nodule, lymph nodes, hoarseness.</p>
<div class="corr">📝 <b>Slide check (page 25):</b> the incidence on the slide ("20–25 per million") is outdated and far too low. Thyroid cancer incidence rose a lot with ultrasound use; in Europe it is in the order of several to more than 10 per 100,000 per year, higher in women and varying by country. The cancer risk in a nodule is about 7–15% (American Thyroid Association 2015).</div>
<div class="hint">💡 <b>"Nodules are common; cancer is the exception."</b></div>
<details class="chk"><summary>✋ Checkpoint: what is the first blood test?</summary><p>Thyroid-stimulating hormone.</p></details>`,
recap:["Nodules very common on ultrasound.","Cancer in about 7–15%.","Red flags: radiation, family history, hard, fixed, nodes, hoarseness."],
quiz:[{q:"Cancer risk in a thyroid nodule?",o:["About 7–15%","About 50%","Less than 0.1%"],a:0,e:"ATA 2015."},{q:"Strongest historical risk factor?",o:["Childhood neck radiation","Coffee","Iodised salt"],a:0,e:"Radiation."}]},
{id:"no2",title:"Work-up order",min:5,goal:1,obj:["Order thyroid-stimulating hormone, ultrasound, scintigraphy, aspiration"],html:`
<div class="scene"><b>The scene:</b> Her thyroid-stimulating hormone is normal.</div>
<ol><li><b>Thyroid-stimulating hormone</b>.</li><li><b>Low?</b> → [[scinti]]: [[hotnod]] → treat the hyperthyroidism, no aspiration.</li><li><b>Normal or high?</b> → [[us]] of thyroid and neck nodes, classify with [[eutirads]].</li><li>[[fna]] by size threshold for the category.</li><li>Calcitonin: some European centres measure it once in all nodules (to find medullary carcinoma early); the American Thyroid Association does not recommend for or against it.</li></ol>
<div class="hint">💡 <b>"Low thyroid-stimulating hormone? Scan before you stab."</b></div>
<details class="chk"><summary>✋ Checkpoint: thyroid-stimulating hormone is 0.05 mU/L. Next?</summary><p>Scintigraphy.</p></details>`,
recap:["Thyroid-stimulating hormone first.","Low → scintigraphy; hot → no aspiration.","Otherwise ultrasound and EU-TIRADS."],
quiz:[{q:"Hot nodule: biopsy?",o:["Usually not","Always","Only if small"],a:0,e:"Very low risk."},{q:"Main imaging test?",o:["Ultrasound","Computed tomography","Plain X-ray"],a:0,e:"Ultrasound."}]},
{id:"no3",title:"EU-TIRADS: who gets a needle?",min:6,goal:2,obj:["Classify a nodule","Apply size thresholds"],html:`
<div class="scene"><b>The scene:</b> Her nodule: 18 mm, oval, smooth, mildly hypoechoic, no calcifications.</div>
<div class="tblwrap"><table><tr><th>Category</th><th>Features</th><th>Cancer risk</th><th>Aspirate if</th></tr><tr><td>2 benign</td><td>Pure cyst, entirely [[spongi]]</td><td>≈ 0%</td><td>No</td></tr><tr><td>3 low</td><td>Oval, smooth, iso/hyperechoic, no high-risk feature</td><td>2–4%</td><td>&gt;20 mm</td></tr><tr><td>4 intermediate</td><td>Oval, smooth, mildly hypoechoic</td><td>6–17%</td><td>&gt;15 mm</td></tr><tr><td>5 high</td><td>Any of: [[tallwide]], irregular margins, [[microcalc]], [[hypoecho]]</td><td>26–87%</td><td>&gt;10 mm</td></tr></table></div>
<div data-widget="calc" data-set="tirads"></div>
<div class="corr">📝 <b>Slide check (page 31):</b> "central vascularisation" is listed as a suspicious feature, but it is <b>not</b> part of EU-TIRADS; studies show Doppler vascularity adds little.</div>
<div class="hint">💡 <b>"Five, four, three → ten, fifteen, twenty."</b></div>
<details class="chk"><summary>✋ Checkpoint: her nodule (18 mm, mildly hypoechoic)?</summary><p>EU-TIRADS 4, larger than 15 mm → fine-needle aspiration.</p></details>`,
recap:["High-risk features: non-oval, irregular, microcalcifications, markedly hypoechoic.","Thresholds 10/15/20 mm for categories 5/4/3.","Vascularity is not scored."],
quiz:[{q:"EU-TIRADS 5 aspiration threshold?",o:["Above 10 mm","Above 20 mm","Never"],a:0,e:"10 mm."},{q:"Which is a high-risk feature?",o:["Microcalcifications","Spongiform pattern","Hyperechoic"],a:0,e:"Microcalcifications."}]},
{id:"no4",title:"Bethesda: reading the cytology",min:6,goal:3,obj:["Interpret categories I–VI","Plan management"],html:`
<div class="scene"><b>The scene:</b> Her aspiration result: "Bethesda IV, follicular neoplasm".</div>
<div data-widget="pattern" data-set="beth"></div>
<p>Risks are the averages from the [[bethesda]] third edition (2023); local rates vary. [[molec]] may refine III and IV. Symptomatic benign nodules: surgery or [[rfa]].</p>
<div class="corr">📝 <b>Fact check:</b> the risk values changed with the 2023 edition of Bethesda. Older books and slides show different ranges (and older names such as "follicular lesion of undetermined significance"); use the 2023 table above.</div>
<div class="hint">💡 <b>"Four can't see the capsule."</b> Follicular cancer needs the whole capsule examined.</div>
<details class="chk"><summary>✋ Checkpoint: why is Bethesda IV not diagnosed as cancer on cytology?</summary><p>Follicular carcinoma is defined by capsular or vascular invasion, which only histology shows.</p></details>`,
recap:["I repeat; II follow; III–IV molecular or lobectomy; V–VI surgery.","Average risks 13/4/22/30/74/97%.","Follicular carcinoma needs histology."],
quiz:[{q:"Bethesda II?",o:["Benign","Malignant","Non-diagnostic"],a:0,e:"About 4% risk."},{q:"Bethesda VI usually means…",o:["Papillary carcinoma","Follicular adenoma","Colloid nodule"],a:0,e:"Most common."}]}],
cases:[{id:"nok1",title:"Case 1: The chance finding",steps:[
{t:`<b>The scene:</b> 41-year-old woman, 18 mm nodule, thyroid-stimulating hormone normal, EU-TIRADS 4.`,q:"Aspirate?",o:["Yes (above 15 mm)","No","Only if it grows to 40 mm"],a:0,e:"Threshold 15 mm."},
{t:`Bethesda IV.`,q:"Next?",o:["Molecular test or diagnostic lobectomy","Total thyroidectomy plus radioactive iodine immediately","Ignore"],a:0,e:"Indeterminate."}],take:["Thyroid-stimulating hormone, ultrasound, aspiration, Bethesda."]},
{id:"nok2",title:"Case 2: Low thyroid-stimulating hormone",steps:[
{t:`<b>The scene:</b> 60-year-old man, 30 mm nodule, thyroid-stimulating hormone 0.03 mU/L.`,q:"Next?",o:["Scintigraphy","Aspiration first","Surgery"],a:0,e:"Look for a hot nodule."},
{t:`Hot nodule, rest of the gland suppressed.`,q:"Aspirate?",o:["Not needed","Yes, always"],a:0,e:"Very low cancer risk."}],take:["Scan before stab when thyroid-stimulating hormone is low."]}],
flash:[["Cancer risk in a nodule","About 7–15%."],["First test","Thyroid-stimulating hormone."],["Low thyroid-stimulating hormone","Scintigraphy."],["Hot nodule","Almost never cancer."],["EU-TIRADS high-risk features","Non-oval, irregular margins, microcalcifications, markedly hypoechoic."],["Aspiration thresholds","5: >10 mm; 4: >15 mm; 3: >20 mm."],["Bethesda II","Benign (≈4%)."],["Bethesda IV","Follicular neoplasm (≈30%)."],["Bethesda VI","Malignant (≈97%)."],["Not in EU-TIRADS","Vascularity."]],
exam:["Nodules common; cancer 7–15%.","Thyroid-stimulating hormone → scintigraphy if low → ultrasound otherwise.","EU-TIRADS 2–5 and size thresholds.","Bethesda I–VI with risks and next steps.","Follicular carcinoma needs histology."],
finalHtml:`<div data-widget="spot" data-set="nod"></div><div data-widget="termdeck" data-set="nod"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>5. Types of thyroid cancer.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t2e')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 2 (Prof. Ionela Pascanu, UMCH 2026), pages 25–40; American Thyroid Association guideline (Haugen et al., Thyroid 2016); EU-TIRADS (Russ et al., Eur Thyroid J 2017); Bethesda System, 3rd edition (Ali et al., Thyroid 2023). Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t2d=T2D;
