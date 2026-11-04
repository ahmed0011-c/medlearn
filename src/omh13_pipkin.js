XPK.omhpip={t:"Pipkin type",opts:["Type 1 infrafoveal","Type 2 suprafoveal (weight-bearing)","Type 3 with neck fracture","Type 4 with acetabular fracture"],items:[
["Head fragment below the fovea only",0,"Fig. 17.38 type 1.",""],
["Fragment through the weight-bearing dome above the fovea",1,"Type 2 — usually fix if large.",""],
["Head fracture plus femoral neck fracture",2,"Type 3.",""],
["Head fracture plus acetabulum fracture",3,"Type 4 — approach may follow the wall.",""]]};

XS.omh13=["Spot the error",[["Pipkin II involves the weight-bearing (suprafoveal) head (McRae p. 378).",1],["Small comminuted head fragments are generally excised (p. 378).",1],["Large suprafoveal fragments should generally be discarded without fixation.",0,"Wrong: generally reduce and fix (p. 378)."],["Titanium screws reduce later MRI interference versus some alternatives (p. 378).",1]]];
XT.omh13='pipkin,smithp,avn,hipdisloc';
const OMH13={
meta:'Orthopaedics › McRae Ch. 17: Hip › MH.13 · Book page 378 · ⏱ about 14 minutes in 2 steps',
intro:`<p>[[pipkin|Pipkin]] femoral-head fractures usually ride with dislocation. Classify by fovea and associated injuries, then decide excise versus fix. Lecture twin: ${XL('o7b','L7.2')}.</p>`,
goals:['Recite Pipkin I–IV', 'Choose excision versus fixation and approach options'],
cards:[{id:'mh13a',title:'Pipkin classification (page 378)',min:7,goal:0,obj:['Define types 1–4'],html:`
<div class="scene"><b>The scene:</b> After a dashboard reduction, CT shows a chip off the femoral head. Is it below the fovea junk, or through the weight-bearing roof that must be saved?</div>
<p>Fractures of the femoral head are generally — but not inevitably — associated with hip dislocation. [[pipkin|Pipkin classification]] (Fig. 17.38) relates fracture-line position and associated injuries: <b>Type 1</b> infrafoveal; <b>Type 2</b> suprafoveal within the weight-bearing portion of the head; <b>Type 3</b> associated femoral neck fracture; <b>Type 4</b> associated acetabular fracture.</p>
${FIG('omh-pipkin')}
<div class="bookref">📖 <b>Open McRae Fig 17.38, p. 378:</b> Pipkin 1–4 panels — compare fragment height to the fovea and look for neck or wall company.</div>
<div data-widget="pickset" data-set="omhpip"></div>
<div class="hint">💡 <b>"Below fovea = type 1. Through the dome = type 2. Add neck = 3. Add wall = 4."</b></div>
<div class="exam"><b>🎓 For exams:</b> Pipkin I–IV definitions; usually with dislocation.</div>
<details class="chk"><summary>✅ Checkpoint: which Pipkin type involves the weight-bearing dome?</summary><p>Type 2 — suprafoveal (p. 378).</p></details>`,recap:['Usually with dislocation.', 'I infra; II supra; III +neck; IV +acetabulum.'],quiz:[{q:'Pipkin II means…',o:['Suprafoveal fragment in the weight-bearing head', 'Infrafoveal only'],a:0,e:'p. 378.'},{q:'Pipkin IV adds…',o:['An acetabular fracture', 'A tibial plateau fracture'],a:0,e:'p. 378.'}]},{id:'mh13b',title:'Management: excise, fix and approaches (page 378)',min:7,goal:1,obj:['State fragment rules and fixation pearls'],html:`
<div class="scene"><b>The scene:</b> A large suprafoveal fragment after dislocation. Excising it would remove the patient's roof. McRae reaches for low-profile titanium screws and an approach that can also fix the wall if needed.</div>
<p>Small or comminuted fragments should be excised; large fragments, particularly from the suprafoveal region, should generally be reduced and fixed. Surgical approach may be dictated by the need to fix an associated acetabular or femoral neck fracture. Otherwise, because the fragment is typically superanterior, options include [[smithp|Smith-Petersen]] approach, trochanteric osteotomy, or Ganz surgical dislocation. Fix with 2 mm titanium screws — good compression between low-profile head and subchondral bone, and less interference with later magnetic resonance imaging if [[avn|avascular necrosis]] is suspected. Headless screws may suit fragments with sufficient subchondral depth.</p>
<div class="hint">💡 <b>"Small junk out. Large dome back in with titanium screws. Approach follows associated fractures."</b></div>
<div class="exam"><b>🎓 For exams:</b> excise small/comminuted; fix large suprafoveal; Smith-Petersen / trochanteric osteotomy / Ganz; 2 mm titanium screws favour later MRI.</div>
<div class="corr">📝 Lecture 7 quotes additional Pipkin complication percentages (OA ≈50%, AVN ≈20%, heterotopic ossification ranges) from slides — those are lecture figures, not printed on McRae p. 378. Keep them labelled as lecture data when you revise ${XL('o7b','L7.2')}; this deep-dive stays with McRae's dislocation-box figures on p. 378 for shared AVN/OA context.</div>
<details class="chk"><summary>✅ Checkpoint: why prefer titanium screws in the head?</summary><p>Low-profile compression and less interference with subsequent MRI if AVN is a concern (p. 378).</p></details>`,recap:['Excise small.', 'Fix large dome.', 'Titanium for MRI friendliness.'],quiz:[{q:'Large suprafoveal fragment — McRae?',o:['Generally reduce and fix', 'Always leave everyone non-operative'],a:0,e:'p. 378.'},{q:'Screw material pearl for later MRI?',o:['2 mm titanium screws', 'Only ferromagnetic steel mandatory'],a:0,e:'p. 378.'}]}],
cases:[{id:'mh13k1',title:'Case: Dome chip',steps:[{t:`Pipkin II large fragment after reduced posterior dislocation.`,q:'Plan?',o:['Open reduction and internal fixation via suitable anterior/dislocation approach', 'Excise the entire weight-bearing dome routinely'],a:0,e:'p. 378.'}],take:['Save the dome when the fragment is large.']}],
flash:[['Pipkin I', 'Infrafoveal.'], ['Pipkin II', 'Suprafoveal weight-bearing.'], ['Pipkin III/IV', '+ neck / + acetabulum.'], ['Titanium screws', 'Fix + MRI friendly.']],
exam:['Classification.', 'Excise vs fix.', 'Approaches.'],
finalHtml:`<div data-widget="spot" data-set="omh13"></div><div data-widget="termdeck" data-set="omh13"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>MH.14 Periprosthetic Vancouver fractures and atypical hip fractures.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('omh14')">→ Open</button></div>`,
sources:'Sources: McRae 3rd edition chapter 17 Femoral head (Pipkin) fractures (book page 378), Fig. 17.38. Teaching questions by MedLearn.',
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.omh13=OMH13;
