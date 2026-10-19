/* ===== Adrenal disorders 2.8: Autoimmune polyglandular syndromes ===== */
Object.assign(GLOSSARY,{
aire:{l:"autoimmune regulator gene",c:"concept",d:"Gene that teaches the thymus to delete T cells that react to the body's own tissues.",w:"Faults cause autoimmune polyglandular syndrome type 1."},
cmc:{l:"chronic mucocutaneous candidiasis",c:"disease",d:"Repeated or persistent Candida (thrush) infection of mouth, nails and skin.",w:"Often the first sign of type 1, in early childhood."},
hypopara:{l:"hypoparathyroidism",c:"disease",d:"Too little parathyroid hormone: low calcium, tingling, cramps, seizures.",w:"Part of the type 1 triad."},
aps3:{l:"autoimmune polyglandular syndrome type 3",c:"disease",d:"Autoimmune thyroid disease plus another autoimmune disease, but no Addison disease.",w:"Common: for example Hashimoto thyroiditis with type 1 diabetes or vitiligo."},
ici:{l:"immune checkpoint inhibitors",c:"drug",d:"Cancer drugs that release the brakes of the immune system (for example nivolumab, ipilimumab).",w:"Can cause autoimmune damage of several glands: pituitary, thyroid, pancreas, adrenal."},
coeliac:{l:"coeliac disease",c:"disease",d:"Autoimmune reaction to gluten that damages the small bowel.",w:"More common with type 1 diabetes and polyglandular syndromes; poor absorption can disturb tablet doses."},
pernan:{l:"pernicious anaemia",c:"disease",d:"Autoimmune stomach inflammation that stops vitamin B12 absorption.",w:"Screen with B12 levels in polyglandular syndromes."}
});
XSORT.aps={t:"Type 1, type 2, or both?",labels:["Type 1","Type 2","Both"],items:[["Starts in early childhood",0,"Type 1 usually starts before about age 10."],["Starts in adults, often women aged 20–40",1,"Type 2 peaks in young and middle adults."],["Autoimmune regulator gene, autosomal recessive",0,"Single-gene disease."],["Linked to HLA-DR3 and DR4, many genes",1,"Polygenic."],["Chronic candidiasis and hypoparathyroidism",0,"Two of the classic triad."],["Addison disease with Hashimoto thyroiditis or type 1 diabetes",1,"Schmidt and Carpenter syndromes."],["Addison disease can be part of it",2,"Present in both."],["Vitiligo, alopecia, pernicious anaemia possible",2,"Minor autoimmune diseases occur in both."]]};
XPK.apsd={t:"What should you do?",opts:["Start hydrocortisone before levothyroxine","Screen thyroid-stimulating hormone yearly","Check 21-hydroxylase antibodies","Check calcium and parathyroid hormone","Look at the whole family"],items:[
["Newly diagnosed Addison disease and also low thyroid hormone","Start hydrocortisone before levothyroxine","Thyroxine speeds up cortisol clearance and can trigger a crisis if cortisol is not replaced first."],
["A woman with Addison disease, otherwise well, at her annual review","Screen thyroid-stimulating hormone yearly","Autoimmune thyroid disease is the most common companion."],
["A man with type 1 diabetes has recurrent low sugars and needs less insulin","Check 21-hydroxylase antibodies","Unexplained low sugars can mean adrenal insufficiency."],
["A child with oral thrush since infancy now has tingling fingers","Check calcium and parathyroid hormone","Hypoparathyroidism in type 1."],
["A 6-year-old is diagnosed with type 1 polyglandular syndrome","Look at the whole family","Autosomal recessive: siblings may be affected; genetic counselling."]]};
XS.aps=["Spot the error",[["Type 1 is caused by faults in the autoimmune regulator gene.",1],["In combined Addison disease and hypothyroidism, start levothyroxine first.",0,"Wrong: <b>hydrocortisone first</b>, then levothyroxine a few days later."],["Type 2 is the most common polyglandular syndrome with Addison disease.",1],["Immune checkpoint inhibitors can damage several glands.",1]]];
XT.aps="aps,aps1,aps2,aps3,schmidt,aire,cmc,hypopara,ab21,ici,coeliac,pernan,vitiligo";
const D8={
meta:"Endocrinology › Adrenal disorders › 2.8 · theory module · ⏱ about 20 minutes in 4 bite-sized steps",
intro:`<p>Autoimmune diseases travel in groups. If one gland is attacked, look for the next. This module shows the groups, who is at risk and what to screen for.</p>`,
goals:["Define the types of polyglandular syndrome","Compare type 1 and type 2","Plan screening","Avoid the classic treatment trap"],
cards:[
{id:"ps1",title:"Glands that fail together",min:5,goal:0,obj:["Define autoimmune polyglandular syndrome","Name the four types"],html:`
<div class="scene"><b>The scene:</b> A 32-year-old woman with Addison disease (diagnosed 2 years ago) is now tired again, cold and gaining weight.</div>
<p>[[aps]] = two or more endocrine glands attacked by the immune system (plus often non-endocrine autoimmune diseases).</p>
<ul><li>[[aps1]]: [[cmc]], [[hypopara]], Addison disease.</li><li>[[aps2]]: Addison disease plus autoimmune thyroid disease and/or type 1 diabetes ([[schmidt]]).</li><li>[[aps3]]: autoimmune thyroid disease plus other autoimmune disease, no Addison.</li><li><b>Type 4:</b> other combinations.</li></ul>
<p>Modern additions: [[ici]] can attack several glands; rare IPEX syndrome (FOXP3 gene) in baby boys.</p>
<div class="hint">💡 <b>"One autoimmune gland? Look for the next."</b></div>
${FIG("aps2")}
<details class="chk"><summary>✋ Checkpoint: what is the likely new problem in the scene?</summary><p>Autoimmune hypothyroidism (type 2 syndrome).</p></details>`,
recap:["Two or more autoimmune endocrine diseases.","Type 1: candidiasis, hypoparathyroidism, Addison.","Type 2: Addison plus thyroid and/or type 1 diabetes."],
quiz:[{q:"Type 2 includes…",o:["Addison plus autoimmune thyroid disease and/or type 1 diabetes","Candidiasis plus hypoparathyroidism","No Addison"],a:0,e:"Definition."},{q:"Which type has no Addison disease?",o:["Type 3","Type 1","Type 2"],a:0,e:"Type 3."}]},
{id:"ps2",title:"Type 1 versus type 2",min:5,goal:1,obj:["Compare genetics, age and features"],html:`
<div class="scene"><b>The scene:</b> A 7-year-old with nail and mouth thrush since infancy now has a seizure from low calcium.</div>
<div class="tblwrap"><table><tr><th></th><th>Type 1</th><th>Type 2</th></tr>
<tr><td>Frequency</td><td>Rare (more common in Finland, Sardinia, Iranian Jews)</td><td>More common</td></tr>
<tr><td>Onset</td><td>Childhood</td><td>Adulthood (20–40)</td></tr>
<tr><td>Genetics</td><td>[[aire]], autosomal recessive</td><td>Polygenic, HLA-DR3/DR4</td></tr>
<tr><td>Main features</td><td>Candidiasis → hypoparathyroidism → Addison (typical order)</td><td>Addison, thyroid, type 1 diabetes</td></tr>
<tr><td>Other</td><td>Hepatitis, malabsorption, ovarian failure, dental enamel defects</td><td>[[vitiligo]], [[coeliac]], [[pernan]], early ovarian failure</td></tr></table></div>
<div data-widget="sortset" data-set="aps"></div>
<div class="hint">💡 <b>"Type 1: Child, Candida, Calcium."</b></div>
<details class="chk"><summary>✋ Checkpoint: in which order do type 1 features usually appear?</summary><p>Candidiasis, then hypoparathyroidism, then Addison disease.</p></details>`,
recap:["Type 1: childhood, autoimmune regulator gene, candidiasis–hypoparathyroidism–Addison.","Type 2: adults, HLA, Addison–thyroid–diabetes.","Both: minor autoimmune diseases."],
quiz:[{q:"Inheritance of type 1?",o:["Autosomal recessive","Polygenic","X-linked dominant"],a:0,e:"Autoimmune regulator gene."},{q:"First sign of type 1 is often…",o:["Candidiasis","Addison","Diabetes"],a:0,e:"Childhood thrush."}]},
{id:"ps3",title:"Screening",min:5,goal:2,obj:["Plan screening in Addison disease and type 1 diabetes"],html:`
<div class="scene"><b>The scene:</b> You see the woman with Addison disease at her yearly review.</div>
<p><b>In Addison disease</b> (yearly or every few years): thyroid-stimulating hormone, glucose or haemoglobin A1c, full blood count and vitamin B12, coeliac antibodies, and in women ask about periods (early ovarian failure).</p>
<p><b>In type 1 diabetes or autoimmune thyroid disease:</b> stay alert for adrenal insufficiency: unexplained low sugars, falling insulin needs, tiredness, low sodium. [[ab21]] can identify people at risk.</p>
<p><b>Relatives:</b> type 1 → genetic testing of siblings; type 2 → awareness of symptoms.</p>
<div data-widget="pickset" data-set="apsd"></div>
<div class="hint">💡 <b>"Falling insulin need in type 1 diabetes? Think adrenal."</b></div>
<details class="chk"><summary>✋ Checkpoint: why can adrenal insufficiency lower insulin needs?</summary><p>Cortisol opposes insulin; without it, blood sugar falls.</p></details>`,
recap:["Addison: screen thyroid, glucose, B12, coeliac.","Type 1 diabetes: think adrenal if insulin needs fall.","21-hydroxylase antibodies predict risk."],
quiz:[{q:"Most common companion of Addison in type 2?",o:["Autoimmune thyroid disease","Hypoparathyroidism","Candidiasis"],a:0,e:"Thyroid."},{q:"Falling insulin need in type 1 diabetes suggests…",o:["Adrenal insufficiency","Better diet only","Cushing syndrome"],a:0,e:"Cortisol deficiency."}]},
{id:"ps4",title:"The treatment trap: cortisol before thyroxine",min:4,goal:3,obj:["Explain the order of replacement"],html:`
<div class="scene"><b>The scene:</b> A man is diagnosed with hypothyroidism and started on levothyroxine. A week later he collapses with low blood pressure and low sodium.</div>
<p>Thyroid hormone speeds up metabolism and cortisol breakdown. If unrecognised adrenal insufficiency is present, levothyroxine can precipitate an [[crisis]].</p>
<p><b>Rule:</b> if both are present, start <b>hydrocortisone first</b>, then levothyroxine a few days later.</p>
<p>Also: hypothyroidism can mildly raise thyroid-stimulating hormone in untreated Addison disease; recheck after cortisol replacement before starting thyroxine.</p>
<div class="hint">💡 <b>"Cortisol comes before thyroxine, like C before T."</b></div>
<details class="chk"><summary>✋ Checkpoint: why recheck thyroid-stimulating hormone after starting hydrocortisone?</summary><p>Cortisol deficiency itself can raise thyroid-stimulating hormone; it often normalises with replacement.</p></details>`,
recap:["Thyroxine can unmask adrenal insufficiency.","Hydrocortisone first, then levothyroxine.","Recheck thyroid-stimulating hormone after cortisol replacement."],
quiz:[{q:"Combined Addison and hypothyroidism: which first?",o:["Hydrocortisone","Levothyroxine","Both together without order"],a:0,e:"C before T."},{q:"Why can thyroxine cause crisis?",o:["It speeds cortisol breakdown","It blocks aldosterone","It lowers potassium"],a:0,e:"Faster clearance."}]}],
cases:[{id:"psk1",title:"Case 1: Tired again",steps:[
{t:`<b>The scene:</b> A 32-year-old woman with Addison disease: cold, weight gain, constipation. Thyroid-stimulating hormone 14 mU/L, free thyroxine low, anti-thyroid peroxidase antibodies positive.`,q:"Diagnosis?",o:["Hashimoto hypothyroidism in type 2 syndrome","Under-replacement of hydrocortisone","Cushing syndrome"],a:0,e:"Schmidt syndrome."},
{t:`She already takes hydrocortisone.`,q:"Treatment?",o:["Start levothyroxine","Stop hydrocortisone","Double fludrocortisone"],a:0,e:"Cortisol is already replaced."}],take:["Screen thyroid yearly in Addison disease."]},
{id:"psk2",title:"Case 2: The child with thrush",steps:[
{t:`<b>The scene:</b> A 7-year-old with chronic mouth and nail thrush has a low-calcium seizure.`,q:"Which syndrome?",o:["Type 1","Type 2","Type 3"],a:0,e:"Candidiasis plus hypoparathyroidism."},
{t:`What else will he probably develop?`,q:"Next likely gland?",o:["Adrenal cortex (Addison)","Pituitary","Pancreas exocrine"],a:0,e:"Third part of the triad."}],take:["Type 1: candidiasis, hypoparathyroidism, Addison."]}],
flash:[["Polyglandular syndrome","Two or more autoimmune endocrine diseases."],["Type 1 triad","Candidiasis, hypoparathyroidism, Addison."],["Type 1 gene","Autoimmune regulator gene (autosomal recessive)."],["Type 2","Addison plus thyroid and/or type 1 diabetes."],["Type 2 genetics","HLA-DR3/DR4, polygenic."],["Type 3","Thyroid plus other, no Addison."],["Screen in Addison","Thyroid-stimulating hormone, glucose, B12, coeliac."],["Falling insulin need","Think adrenal insufficiency."],["Order of replacement","Hydrocortisone before levothyroxine."],["Drug cause","Immune checkpoint inhibitors."]],
exam:["Type 1: childhood, autoimmune regulator gene, candidiasis → hypoparathyroidism → Addison.","Type 2: adults, HLA, Addison plus thyroid and/or type 1 diabetes.","Type 3: thyroid plus other, no Addison.","Screen companions regularly.","Hydrocortisone before levothyroxine."],
finalHtml:`<div data-widget="spot" data-set="aps"></div><div data-widget="termdeck" data-set="aps"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>2.9 Steroid therapy safety.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('d9')">→ Open 2.9</button></div>`,
sources:"Sources: Husebye, Anderson and Kämpe, N Engl J Med 2018 (autoimmune polyendocrine syndromes); Endocrine Society guideline on primary adrenal insufficiency (Bornstein et al., 2016); Williams Textbook of Endocrinology. Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.d8=D8;
