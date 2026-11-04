/* ===== Orthopaedics · Lecture 7 · 5: Intertrochanteric fractures ===== */
XSTEP.stabunstab={t:"Stable versus unstable intertrochanteric ideas (pages 25–26)",dim:.1,svg:`<svg viewBox="0 0 640 300" style="width:100%" role="img" aria-label="Stable vs unstable trochanteric">
<g data-k="s"><rect x="60" y="80" width="200" height="120" rx="12" fill="#e8f6ee" stroke="#1f9d55"/><text x="160" y="130" text-anchor="middle" font-size="14" font-weight="700">Stable</text><text x="160" y="155" text-anchor="middle" font-size="12">good medial contact</text><text x="160" y="175" text-anchor="middle" font-size="12">usual DHS friend</text></g>
<g data-k="u"><rect x="360" y="80" width="220" height="120" rx="12" fill="#fde2ea" stroke="#b3476d"/><text x="470" y="125" text-anchor="middle" font-size="14" font-weight="700">Unstable</text><text x="470" y="150" text-anchor="middle" font-size="12">four-part / lost calcar</text><text x="470" y="170" text-anchor="middle" font-size="12">reverse oblique → nail</text></g>
</svg>`,
steps:[["Stable","Fragments hug; medial cortex can share load → dynamic hip screw often enough.",["s"]],["Unstable","Poor contact, four-part smash, or reverse oblique that displaces further with weight → nail territory.",["s","u"]]]};
XPK.itrox={t:"Trochanteric implant pick (pages 28–29; McRae Box 17.1)",opts:["Dynamic hip screw","Cephalomedullary nail","Arthroplasty exception","Pain relief / palliative only"],items:[
["Simple two-part intertrochanteric fracture",0,"Box 17.1: simple → DHS.",""],
["Reverse oblique pattern",1,"Box 17.1: reverse oblique → nail.",""],
["Highly comminuted intertrochanteric",1,"DHS or nail — nail often chosen when medial buttress gone.",""],
["Moribund patient who would not survive surgery",3,"Lecture: rare non-operative / palliative nursing care.",""]]};
XS.o7e=["Spot the error",[["About half of proximal femoral fractures are in the trochanteric region (lecture page 24).",1],["Reverse oblique patterns lose medial support and usually need a nail.",1],["Extracapsular fractures commonly cause avascular necrosis of the head.",0,"Wrong: extracapsular breaks rarely threaten head blood supply (McRae)."],["Femoral nerve block can help early pain control (lecture page 28).",1]]];
XT.o7e="extracap,dhs,reverseob,calcar,tad";
const O7E={
meta:"Orthopaedics › Hip and femur › Lecture 7 › Subsection L7.5 · Lecture pages 23–29 and 32–34 · ⏱ about 17 minutes in 2 steps",
intro:`<p>Outside the capsule, between the greater and lesser trochanters, sits the workhorse fracture of frail hips. The head’s blood is usually safe; the scaffolding is not. McRae extracapsular section and Box 17.1.</p>`,
goals:["Separate stable, unstable and reverse-oblique patterns","Choose DHS versus nail versus rare arthroplasty"],
cards:[
{id:"he1",title:"Facts, anatomy, stable vs unstable (pages 23–27)",min:9,goal:0,obj:["Define unstable and reverse-oblique patterns"],html:`
<div class="scene"><b>The scene:</b> Frau Berger, 86, osteoporosis known, slips in the bathroom. The X-ray shows a shatter through the trochanteric mass — four pieces, the lesser trochanter a free island. The head still looks round and alive on its neck.</div>
<p>Lecture facts (page 24 — lecture figures): ~50% of all proximal femoral fractures; &gt;70,000 treated per year in Germany; incidence 108.7/100,000; male:female 69:31; fragility fractures; osteoporosis prevalence in women &gt;70 years 59.2%. Stable versus unstable (page 25): unstable when contact is poor (four-part / posteromedial [[calcar|calcar]] smashed) or when weight-bearing pushes fragments further apart ([[reverseob|reverse oblique]] / subtrochanteric extension). Reverse oblique (page 26): the fracture plane runs the ‘wrong’ way — medial column gone.</p>
${FIG('o7-intertroch')}
${FIG('o7-reverse-oblique')}
${FIG('o7-intertroch-xray')}
<div data-widget="stepsvg" data-set="stabunstab"></div>
<div class="hint">💡 <b>"If the medial buttress is rubble, or the line is reverse oblique, stop dreaming of a lonely sliding screw."</b></div>
<div class="exam"><b>🎓 For exams:</b> unstable = poor contact or displacing pattern; reverse oblique → nail; extracapsular ≈ AVN-safe for the head.</div>
<details class="chk"><summary>✅ Checkpoint: Frau Berger’s four-part smash.</summary><p>Unstable extracapsular — plan a construct that does not rely on an intact medial column (usually a nail).</p></details>`,
recap:["Half of proximal femur fractures.","Stable vs unstable / reverse oblique.","Head blood usually OK."],
quiz:[{q:"Reverse oblique usually needs…",o:["Intramedullary nail","Cup of tea alone"],a:0,e:"McRae Box 17.1."},{q:"Why is AVN less feared here than in neck fractures?",o:["Extracapsular pattern spares retinacular vessels","Trochanteric bone cannot die"],a:0,e:"McRae."}]},
{id:"he2",title:"Treatment and complications (pages 28–29, 32–34)",min:8,goal:1,obj:["Outline peri-operative care and implant choice"],html:`
<div class="scene"><b>The scene:</b> Night shift: femoral nerve block eases Frau Berger’s pain, fluids run, theatre is booked before dawn. Which metal?</div>
<p>Initial care (page 28): analgesia including femoral nerve block; optimise with intravenous fluid; non-operative only if surgery would not be survived. Operative (page 29): [[dhs|dynamic hip screw]] (extramedullary); proximal femoral nail (intramedullary); rarely endoprosthesis. Respect tip–apex rules when a lag screw enters the head. Early complications (page 32): infection low for screws/nails but up to 5% for arthroplasty (lecture); fixation failure from technique or bad bone; fat embolism with arthroplasty/nailing. Late (pages 33–34): metalwork irritation from collapse/back-out; AVN figures on the page refer mainly to neck-fracture context in the McRae excerpt used on slides — keep AVN linked to intracapsular injury when you explain; non-union; osteoarthritis; arthroplasty dislocation; mortality ~10% perioperative and up to ~30% in the first year (lecture page 34).</p>
${FIG('o7-dhs')}
${FIG('o7-pfn')}
<div data-widget="pickset" data-set="itrox"></div>
<div class="hint">💡 <b>"Block the pain, fill the tank, fix before frailty wins — DHS if simple, nail if hostile."</b></div>
<div class="exam"><b>🎓 For exams:</b> DHS vs nail indications; mortality lecture figures; infection rates as lecture quotes.</div>
<div class="corr">📝 <b>Slide check:</b> page 24 "Praevalence" / "al proximal" — we use prevalence and all. Page 24 ratio printed male:female 69:31; quote as lecture figure.</div>
<details class="chk"><summary>✅ Checkpoint: implant for reverse oblique?</summary><p>Cephalomedullary nail (Box 17.1).</p></details>`,
recap:["Nerve block + optimise.","DHS vs nail.","Frailty mortality is high."],
quiz:[{q:"Simple intertrochanteric — McRae first implant idea?",o:["Dynamic hip screw","Always distal femur replacement"],a:0,e:"Box 17.1."},{q:"Lecture first-year mortality after these frail fractures can reach about…",o:["30%","0.3%"],a:0,e:"Lecture page 34."}]}],
cases:[{id:"hek1",title:"Case: Bathroom slip",steps:[{t:`Four-part intertrochanteric fracture, lesser trochanter free, patient previously mobile indoors.`,q:"Construct?",o:["Unstable pattern — cephalomedullary nail (or carefully chosen DHS/nail per surgeon) with tip–apex discipline","Skin traction for 3 months as routine first line"],a:0,e:"Unstable → nail territory."}],take:["Pattern stability chooses metal."]}],
flash:[["Stable IT","Medial contact; DHS friend."],["Unstable IT","Four-part / lost calcar."],["Reverse oblique","Nail."],["Mortality","Up to ~30% at 1 year (lecture)."]],
exam:["Stable vs unstable.","DHS vs nail.","Mortality figure."],
finalHtml:`<div data-widget="spot" data-set="o7e"></div><div data-widget="termdeck" data-set="o7e"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Next</b><br><b>L7.6 Subtrochanteric, atypical and isolated trochanter fractures.</b><br><button class="pri" style="margin-top:8px" onclick="showModule('o7f')">→ Open</button></div>`,
sources:"Sources: Lecture 7 pages 23–34; McRae's Orthopaedic Trauma and Emergency Fracture Management, 3rd edition (White, Mackenzie, Gray, 2016), chapter 17 extracapsular fractures and Box 17.1. Lecture epidemiology figures cited as lecture data. Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o7e=O7E;
