/* ===== Orthopaedics · Lecture 7 · 8: Periprosthetic + interprosthetic ===== */
XSTEP.vanc={t:"Vancouver A–C (lecture pages 48–49; McRae 379–381)",dim:.1,svg:`<svg viewBox="0 0 700 300" style="width:100%" role="img" aria-label="Vancouver classification">
<g data-k="a"><rect x="40" y="40" width="120" height="200" fill="#eee" stroke="#333"/><circle cx="100" cy="70" r="25" fill="#ccc"/><text x="100" y="270" text-anchor="middle" font-size="12" font-weight="700">A trochanter</text></g>
<g data-k="b1"><rect x="180" y="40" width="120" height="200" fill="#eee" stroke="#333"/><line x1="200" y1="120" x2="280" y2="160" stroke="#1f9d55" stroke-width="4"/><text x="240" y="270" text-anchor="middle" font-size="12" font-weight="700">B1 fixed stem</text></g>
<g data-k="b2"><rect x="320" y="40" width="120" height="200" fill="#eee" stroke="#333"/><line x1="340" y1="110" x2="420" y2="170" stroke="#d9730d" stroke-width="4"/><text x="380" y="270" text-anchor="middle" font-size="12" font-weight="700">B2 loose</text></g>
<g data-k="c"><rect x="460" y="40" width="120" height="200" fill="#eee" stroke="#333"/><line x1="480" y1="200" x2="560" y2="230" stroke="#2f6db3" stroke-width="4"/><text x="520" y="270" text-anchor="middle" font-size="12" font-weight="700">C below stem</text></g>
</svg>`,
steps:[["A","Trochanter only — AG greater, AL lesser — stem still happy.",["a"]],["B1","Crack around stem but stem still bonded → keep stem, plate/cables.",["a","b1"]],["B2/B3","Stem loose (± poor bone in B3) → revise to a longer stem.",["a","b1","b2"]],["C","Well below a solid stem → plate the shaft (nail blocked by implant).",["a","b1","b2","c"]]]};
XPK.vanrx={t:"Vancouver treatment (lecture page 50; McRae table)",opts:["Conservative or limited fixation of trochanter","ORIF keep well-fixed stem","Revise stem (bypass fracture)","Plate fracture below solid stem"],items:[
["Vancouver AG minimally displaced",0,"Often conservative; fix if displaced needs abductor restoration.",""],
["Vancouver B1",1,"ORIF with locking plate ± wires (McRae).",""],
["Vancouver B2",2,"Exchange to longer stem.",""],
["Vancouver C",3,"Angle-stable plate; nail usually impossible past the stem.",""]]};
XS.o7h=["Spot the error",[["Rising hip-replacement numbers mean more periprosthetic fractures (lecture page 47).",1],["Vancouver B2 means the stem is unstable.",1],["Vancouver B1 fractures need routine stem revision.",0,"Wrong: B1 keeps a well-fixed stem and uses ORIF (lecture page 50; McRae)."],["Interprosthetic fractures sit between hip and knee implants.",1]]];
XT.o7h="vancouver,interprost,thr,hemiarthro";
const O7H={
meta:"Orthopaedics › Hip and femur › Lecture 7 › Subsection L7.8 · Lecture pages 47–53 · ⏱ about 16 minutes in 2 steps",
intro:`<p>A metal stick already lives in the canal — then the patient falls. [[vancouver|Vancouver]] asks whether the stick is still glued to bone. Between a hip stem and a knee replacement, the lonely shaft can snap too ([[interprost|interprosthetic]]). McRae periprosthetic hip fractures (book pages 379–382).</p>`,
goals:["Use Vancouver A/B1/B2/B3/C","State the treatment verb for each","Outline interprosthetic thinking"],
cards:[
{id:"hh1",title:"Who breaks and Vancouver map (pages 47–49)",min:8,goal:0,obj:["Classify AG/AL, B1–B3, C"],html:`
<div class="scene"><b>The scene:</b> Mr Law, 81, with a 12-year-old cemented hip replacement, trips on a kerb. The thigh balloons. The X-ray shows a spiral hugging his stem.</div>
<p>Typical story (page 47): low-energy fall, elderly, frail, rising incidence with more hip replacements (McRae). [[vancouver|Vancouver]]: A trochanters (AG greater, AL lesser) without stem trouble; B around the stem — B1 stem stable, B2 stem loose, B3 stem loose + miserable bone stock; C below a still-stable stem.</p>
${FIG('o7-vancouver')}
${FIG('o7-vancouver-xray')}
<div data-widget="stepsvg" data-set="vanc"></div>
<div class="hint">💡 <b>"First question is never ‘which plate?’ — it is ‘is the stem still married to the bone?’."</b></div>
<div class="exam"><b>🎓 For exams:</b> recite Vancouver A/B1/B2/B3/C in one breath.</div>
<details class="chk"><summary>✅ Checkpoint: spiral hugging stem, stem spins on screening.</summary><p>Vancouver B2 (loose) → revision stem pathway, not a lonely plate.</p></details>`,
recap:["Low-energy + arthroplasty.","Vancouver = location + stem stability.","B2/B3 revise."],
quiz:[{q:"Vancouver B1 means…",o:["Fracture around a still well-fixed stem","Stem floating free with no bone left"],a:0,e:"McRae / lecture 48."},{q:"Vancouver C is…",o:["Below the prosthesis with a stable implant","Only a tiny AL chip"],a:0,e:"Page 48."}]},
{id:"hh2",title:"Treatment and interprosthetic fractures (pages 50–53)",min:8,goal:1,obj:["Match Vancouver to ORIF vs revise; sketch Pires idea"],html:`
<div class="scene"><b>The scene:</b> Another patient has both a hip stem and a knee replacement; the crack sits in the short bridge of bone between them.</div>
<p>Treatment (page 50): AG conservative / ORIF with hook plate or wires if needed; AL often conservative; B1 ORIF with angle-stable plate (± wires); B2/B3 exchange the stem; C ORIF with angle-stable plate. Interprosthetic (pages 52–53): Pires classification thinking — well-fixed versus loose implants and bone stock — then a spanning plate versus revision algorithm (Rozell et al. cited on slides).</p>
${FIG('o7-vancouver-b1-fix')}
${FIG('o7-vancouver-b2-rev')}
${FIG('o7-interprosthetic')}
<div data-widget="pickset" data-set="vanrx"></div>
<div class="hint">💡 <b>"Fixed stem → plate. Loose stem → longer stem. Between two implants → span both or revise the loose one."</b></div>
<div class="exam"><b>🎓 For exams:</b> B1 plate, B2/B3 revise, C plate; interprosthetic = between hip and knee stems.</div>
<details class="chk"><summary>✅ Checkpoint: interprosthetic scene.</summary><p>Ask stability of both implants and bone stock (Pires-style), then span with a plate if both are solid, or revise the loose side.</p></details>`,
recap:["B1 plate; B2/B3 revise; C plate.","Interprosthetic needs dual-implant logic."],
quiz:[{q:"Vancouver B2 treatment theme?",o:["Revise to a longer stem bypassing the fracture","Always cast for 6 months without surgery"],a:0,e:"Lecture page 50."},{q:"Why is a standard antegrade nail often impossible in Vancouver C?",o:["The hip stem blocks the canal","Nails are illegal"],a:0,e:"McRae note on nails past stems."}]}],
cases:[{id:"hhk1",title:"Case: Stem marriage test",steps:[{t:`Fracture at the tip of a cemented stem; stem–cement interface looks intact and stem does not toggle.`,q:"Vancouver + plan?",o:["B1 → ORIF keep stem","B3 → proximal femoral replacement only option always"],a:0,e:"Stable stem → B1 ORIF."}],take:["Stability first."]}],
flash:[["Vancouver A","Trochanter."],["B1","Around stem, stem fixed → plate."],["B2/B3","Loose stem (± poor bone) → revise."],["C","Below stem → plate."],["Interprosthetic","Between hip and knee implants."]],
exam:["Vancouver list.","Treatment verbs.","Interprosthetic idea."],
finalHtml:`<div data-widget="spot" data-set="o7h"></div><div data-widget="termdeck" data-set="o7h"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L7.9 Femoral shaft fractures.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o7i')">→ Open</button></div>`,
sources:"Sources: Lecture 7 pages 47–53; McRae's Orthopaedic Trauma and Emergency Fracture Management, 3rd edition (White, Mackenzie, Gray, 2016), periprosthetic fractures around the hip (book pages 379–382). Pires/Rozell cited on lecture slides for interprosthetic algorithm. Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o7h=O7H;
