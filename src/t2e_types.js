/* ===== Thyroid · Lecture 6 part 2 · 5: Types of thyroid cancer (lecture pages 41–51, with page 27) ===== */
Object.assign(GLOSSARY,{
psammoma:{l:"psammoma bodies",c:"cell",d:"Tiny round layered calcium deposits in tumour tissue.",w:"Typical of papillary carcinoma; seen as microcalcifications on ultrasound."},
orphan:{l:"papillary nuclear features",c:"cell",d:"Clear 'ground-glass' (Orphan Annie eye) nuclei, nuclear grooves and pseudo-inclusions.",w:"Make the cytological diagnosis of papillary carcinoma."},
thylymph:{l:"primary thyroid lymphoma",c:"disease",d:"Lymphoma arising in the thyroid, almost always on a background of Hashimoto thyroiditis.",w:"Rapidly enlarging goitre in an older woman with Hashimoto disease; treated with chemotherapy and radiotherapy, not big surgery."},
microca:{l:"papillary microcarcinoma",c:"disease",d:"Papillary cancer 1 cm or smaller.",w:"Often found by chance; very low risk; active surveillance is an option."}
});
XPK.ctype={t:"Which thyroid cancer?",opts:["Papillary","Follicular","Medullary","Anaplastic","Lymphoma"],items:[
["35-year-old woman, nodule with microcalcifications, enlarged neck node, cytology with nuclear grooves","Papillary","Lymph node spread, nuclear features."],
["60-year-old with a solitary nodule and a bone metastasis in the hip; cytology Bethesda IV","Follicular","Spread through blood to bone and lung."],
["Nodule with very high calcitonin; father had a phaeochromocytoma","Medullary","C-cell tumour, RET."],
["78-year-old with a hard neck mass doubling in 3 weeks, stridor","Anaplastic","Rapid, aggressive."],
["70-year-old woman with long-standing Hashimoto thyroiditis, goitre growing fast over 2 months","Lymphoma","Background of Hashimoto."]]};
XSORT.cspread={t:"Lymph or blood?",labels:["Lymph nodes mainly","Blood (lung, bone) mainly"],items:[["Papillary carcinoma",0,"Lymphatic spread to neck nodes."],["Follicular carcinoma",1,"Haematogenous spread."],["Medullary carcinoma",0,"Early neck node spread (blood later: liver, lung, bone)."],["Oncocytic carcinoma",1,"Behaves like follicular, often more nodes too."]]};
XS.ctype=["Spot the error",[["Papillary carcinoma is the most common thyroid cancer.",1],["Thyroid cancer is more common in men than women.",0,"Wrong: differentiated thyroid cancer is about <b>three times more common in women</b>, although in men it is often more advanced at diagnosis."],["Medullary carcinoma comes from C cells.",1],["Follicular adenoma and carcinoma can be told apart on fine-needle aspiration.",0,"Wrong: only histology shows capsular or vascular invasion."]]];
XT.ctype="ptc,ftc,oncocytic,dtc,mtc,atc,thylymph,microca,niftp,psammoma,orphan,braf,ret,calcitonin";
const T2E={
meta:"Endocrinology › Thyroid › Lecture 6 part 2 › Subsection 6.2.5 · lecture pages 41–51 (and page 27) · ⏱ about 20 minutes in 3 bite-sized steps",
intro:`<p>"Thyroid cancer" is several very different diseases. Papillary cancer is usually curable; anaplastic cancer is among the most aggressive cancers in humans. Learning the types by cell of origin makes everything else (markers, spread, treatment) logical.</p>`,
goals:["Classify thyroid cancers by cell of origin","Know their frequency and features","Know risk factors and sex distribution"],
cards:[
{id:"tc1",title:"Two cell types, five cancers",min:6,goal:0,obj:["Sort cancers by cell of origin","Give frequencies"],html:`
<div class="scene"><b>The scene:</b> A pathology report lists "papillary carcinoma, 14 mm". The patient's neighbour "died of thyroid cancer within months". Same disease?</div>
<div class="tblwrap"><table><tr><th>Cell</th><th>Cancer</th><th>Share</th><th>Key points</th></tr>
<tr><td rowspan="4">Follicular cell</td><td>[[ptc]]</td><td>&gt;80–85%</td><td>Nodes, [[braf]], excellent prognosis</td></tr>
<tr><td>[[ftc]]</td><td>≈ 5–10%</td><td>Blood spread, RAS</td></tr>
<tr><td>[[oncocytic]]</td><td>≈ 2–3%</td><td>Less iodine uptake</td></tr>
<tr><td>[[atc]]</td><td>&lt; 2%</td><td>Older people, rapid, deadly</td></tr>
<tr><td>C cell</td><td>[[mtc]]</td><td>≈ 1–2%</td><td>[[calcitonin]], [[ret]]</td></tr></table></div>
<p>Others: [[thylymph]], metastases to the thyroid (kidney, lung, breast, melanoma). [[niftp]] is now a low-risk tumour, not a cancer.</p>
<div class="corr">📝 <b>Slide check (page 27):</b> the histology percentages on the slide are from older series. With ultrasound and fine-needle aspiration, small papillary cancers are found much more often: papillary is now <b>more than 80%</b> (often quoted 85–90%), follicular about 5–10%. Exact shares differ by country and iodine status (follicular is more frequent in iodine-deficient regions).</div>
<div data-widget="pickset" data-set="ctype"></div>
<div class="hint">💡 <b>"Papillary = popular (most common), lymph; follicular = far (blood)."</b></div>
<details class="chk"><summary>✋ Checkpoint: why does follicular cancer spread to bone?</summary><p>It invades vessels and spreads through blood.</p></details>`,
recap:["Follicular-cell: papillary, follicular, oncocytic, anaplastic.","C-cell: medullary.","Papillary more than 80%."],
quiz:[{q:"Most common thyroid cancer?",o:["Papillary","Follicular","Medullary"],a:0,e:"More than 80%."},{q:"Which comes from C cells?",o:["Medullary","Anaplastic","Follicular"],a:0,e:"Calcitonin."}]},
{id:"tc2",title:"Pathology features that matter",min:6,goal:1,obj:["Know the hallmark features","Explain spread patterns"],html:`
<div class="scene"><b>The scene:</b> The cytology report says "nuclear grooves and pseudo-inclusions". What does that mean?</div>
<ul><li><b>Papillary:</b> [[orphan]], [[psammoma]]; multifocal; spreads to neck nodes; [[braf]] common. [[microca]] usually very low risk.</li><li><b>Follicular:</b> diagnosis needs capsular or vascular invasion (histology); spreads to lung and bone.</li><li><b>Oncocytic:</b> mitochondria-rich cells; less iodine uptake.</li><li><b>Medullary:</b> calcitonin and carcinoembryonic antigen, amyloid in stroma; about 25% hereditary.</li><li><b>Anaplastic:</b> undifferentiated, often arises from a long-standing differentiated cancer; no iodine uptake.</li></ul>
${FIG("papillary")}
<div data-widget="sortset" data-set="cspread"></div>
<div class="hint">💡 <b>"Grooves and ground glass = papillary."</b></div>
<details class="chk"><summary>✋ Checkpoint: which cancer often shows amyloid?</summary><p>Medullary carcinoma (calcitonin-derived amyloid).</p></details>`,
recap:["Papillary: nuclear features, psammoma, nodes.","Follicular: invasion, blood spread.","Medullary: calcitonin, amyloid; anaplastic: undifferentiated."],
quiz:[{q:"Psammoma bodies suggest…",o:["Papillary","Follicular","Lymphoma"],a:0,e:"Papillary."},{q:"Follicular carcinoma is defined by…",o:["Capsular or vascular invasion","Nuclear grooves","Calcitonin"],a:0,e:"Histology."}]},
{id:"tc3",title:"Who gets it? Risk factors and sex",min:5,goal:2,obj:["List risk factors","Know sex and age patterns"],html:`
<div class="scene"><b>The scene:</b> A woman who had neck radiotherapy for lymphoma as a child asks about her risk.</div>
<ul><li><b>Radiation</b> in childhood (radiotherapy, Chernobyl fallout): strongest known risk, mainly papillary.</li><li><b>Family history</b> and syndromes: familial non-medullary thyroid cancer, familial adenomatous polyposis, Cowden (PTEN), Carney complex, DICER1; RET for medullary.</li><li><b>Iodine:</b> deficiency → more follicular; sufficient → more papillary.</li><li><b>Sex:</b> women about 3 times more often.</li><li><b>Age:</b> risk of death rises with age at diagnosis (staging uses 55 years as the cut-off).</li></ul>
<div class="corr">📝 <b>Slide check (page 51):</b> differentiated thyroid cancer is clearly <b>more common in women</b> (about 3:1). Men are diagnosed less often but tend to have more advanced disease.</div>
<div class="hint">💡 <b>"Radiation, relatives, being female."</b></div>
<details class="chk"><summary>✋ Checkpoint: which age matters in staging of differentiated thyroid cancer?</summary><p>55 years (American Joint Committee on Cancer, 8th edition).</p></details>`,
recap:["Childhood radiation, family syndromes.","Women about 3:1.","Age 55 matters for staging."],
quiz:[{q:"Strongest environmental risk?",o:["Childhood radiation","Smoking","Coffee"],a:0,e:"Radiation."},{q:"Sex ratio?",o:["More common in women","More common in men","Equal"],a:0,e:"About 3:1."}]}],
cases:[{id:"tck1",title:"Case 1: Two different cancers",steps:[
{t:`<b>The scene:</b> 34-year-old woman: 14 mm papillary carcinoma with one small neck node.`,q:"Expected prognosis?",o:["Excellent","Very poor","Months"],a:0,e:"Young, papillary."},
{t:`Her 79-year-old neighbour had a rapidly growing hard mass with stridor.`,q:"Likely type?",o:["Anaplastic","Papillary microcarcinoma","Follicular adenoma"],a:0,e:"Rapid, older age."}],take:["Type decides the course."]},
{id:"tck2",title:"Case 2: Hashimoto with a growing goitre",steps:[
{t:`<b>The scene:</b> 70-year-old woman with Hashimoto thyroiditis for 20 years; goitre grew quickly over 2 months.`,q:"What must be excluded?",o:["Thyroid lymphoma","Iodine deficiency","Graves disease"],a:0,e:"Classic background."}],take:["Fast growth on Hashimoto: think lymphoma."]}],
flash:[["Most common thyroid cancer","Papillary (>80%)."],["Papillary spread","Lymph nodes."],["Follicular spread","Blood: lung, bone."],["Follicular diagnosis","Capsular or vascular invasion (histology)."],["Medullary origin","C cells (calcitonin)."],["Medullary hereditary share","About 25% (RET)."],["Anaplastic","Older, rapid, deadly."],["Lymphoma background","Hashimoto thyroiditis."],["Sex ratio","Women about 3:1."],["Strongest risk","Childhood radiation."]],
exam:["Follicular-cell (papillary, follicular, oncocytic, anaplastic) vs C-cell (medullary).","Papillary >80%, nodes, nuclear features, BRAF.","Follicular: invasion, blood spread.","Medullary: calcitonin, carcinoembryonic antigen, RET.","Risks: radiation, family, female sex."],
finalHtml:`<div data-widget="spot" data-set="ctype"></div><div data-widget="termdeck" data-set="ctype"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>6. Treating differentiated thyroid cancer.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('t2f')">→ Open</button></div>`,
sources:"Sources: Lecture 6 part 2 (Prof. Ionela Pascanu, UMCH 2026), pages 27 and 41–51; World Health Organization Classification of Endocrine Tumours (5th edition, 2022); American Thyroid Association guideline (2015); Williams Textbook of Endocrinology. Percentages are standard approximations. Cases are invented teaching examples.",
casesHead:"🏥 Clinical cases",casesIntro:"Answer to reveal the next part."};
LESSONS.t2e=T2E;
