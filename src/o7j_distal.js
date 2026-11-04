/* ===== Orthopaedics · Lecture 7 · 10: Distal femur + Hoffa + distal peri ===== */
XSTEP.distmap={t:"Distal femur AO idea + Hoffa (pages 69–71)",dim:.1,svg:`<svg viewBox="0 0 700 300" style="width:100%" role="img" aria-label="Distal femur patterns">
<g data-k="a"><rect x="40" y="60" width="100" height="140" fill="#e8f6ee" stroke="#1f9d55"/><line x1="40" y1="120" x2="140" y2="140" stroke="#c62828" stroke-width="3"/><text x="90" y="230" text-anchor="middle" font-size="12" font-weight="700">A extra-articular</text></g>
<g data-k="b"><rect x="200" y="60" width="100" height="140" fill="#fff3cd" stroke="#d9730d"/><line x1="200" y1="160" x2="300" y2="160" stroke="#c62828" stroke-width="3"/><text x="250" y="230" text-anchor="middle" font-size="12" font-weight="700">B partial articular</text></g>
<g data-k="c"><rect x="360" y="60" width="100" height="140" fill="#fde2ea" stroke="#b3476d"/><line x1="360" y1="100" x2="460" y2="120" stroke="#c62828" stroke-width="3"/><line x1="400" y1="160" x2="440" y2="160" stroke="#c62828" stroke-width="3"/><text x="410" y="230" text-anchor="middle" font-size="12" font-weight="700">C complete articular</text></g>
<g data-k="h"><rect x="520" y="60" width="120" height="140" fill="#e8f0fb" stroke="#2f6db3"/><line x1="520" y1="100" x2="640" y2="180" stroke="#c62828" stroke-width="3"/><text x="580" y="230" text-anchor="middle" font-size="12" font-weight="700">Hoffa coronal</text></g>
</svg>`,
steps:[["A","Extra-articular distal femur.",["a"]],["B","Partial articular — one condyle (Hoffa lives here as a coronal shear).",["a","b","h"]],["C","Complete articular + metaphyseal dissociation.",["a","b","c","h"]],["Hoffa","Coronal plane — CT or miss it.",["a","b","c","h"]]]};
XPK.distrx={t:"Distal femur choices (pages 73–74, 77–79)",opts:["Selected non-operative / traction then brace","Retrograde or antegrade nail","Locked lateral plate (± medial helper)","Lag screws for Hoffa","Distal femur replacement salvage","Periprosthetic pathway (stable implant?)"],items:[
["Barely displaced extra-articular crack in an unfit patient",0,"Lecture allows limited non-operative if aligns in flexion.",""],
["Displaced A-type with good bone",1,"Nail often suitable.",""],
["C3 smashed articular surface",2,"Locked plating / dual plating as needed.",""],
["Isolated Hoffa on CT",3,"Interfragmentary compression screws — almost always operate (McRae).",""],
["Unreconstructable osteoporotic distal peri-prosthetic wreck",4,"Distal femur replacement is on the menu (lecture page 74).",""],
["Fracture above a well-fixed total knee",5,"Plate or nail per canal access; revise if implant loose (link L8.9 / KR).",""]]};
XS.o7j=["Spot the error",[["Hoffa fractures are often invisible on plain X-ray and need CT (lecture page 70).",1],["Gastrocnemius pulls the distal fragment into extension (McRae deformity).",1],["Every distal femoral fracture is treated non-operatively.",0,"Wrong: most displaced patterns are fixed; non-operative is selective (lecture pages 73–74)."],["Lecture mortality for distal femoral fractures is high in older adults (about 35% over 60 years on the slide).",1]]];
XT.o7j="hoffa,imnail,felix,vancouver";
const O7J={
meta:"Orthopaedics › Hip and femur › Lecture 7 › Subsection L7.10 · Lecture pages 67–79 · ⏱ about 18 minutes in 2 steps",
intro:`<p>Near the knee the femur flares into condyles. High energy shears a [[hoffa|Hoffa]] flake you will miss without CT; low energy snaps osteoporotic bone above a knee replacement. McRae distal femoral fractures (book pages ~410–413) including the ‘broomstick in a bucket’ peri-prosthetic warning.</p>`,
goals:["Map AO A/B/C and Hoffa","Choose nail, plate, screws, replacement, or peri-prosthetic logic"],
cards:[
{id:"hj1",title:"Facts, classification, Hoffa, clinical (pages 67–72)",min:9,goal:0,obj:["Respect CT for Hoffa; check pulses"],html:`
<div class="scene"><b>The scene:</b> After a fall from a scaffold, the knee is ballooned with haemarthrosis. Plain films look ‘only metaphyseal’. CT then draws a coronal crack through the lateral condyle — a Hoffa you nearly sent to the ward.</div>
<p>Facts (pages 67–68, lecture figures): incidence quotes 4.5/10,000 and age-split 5.2 vs 47.3/100,000; 1% of all fractures; 3–9% of femoral fractures; periprosthetic distal femoral incidence 0.2–3.9%; mortality 21% overall and 35% if &gt;60 years. AO/OTA A/B/C (page 69). [[hoffa|Hoffa]] (pages 70–71): 8.9–13% of distal femoral fractures; high energy; Letenneur subtypes on slides; CT mandatory. Clinical (page 72): haemarthrosis ± blistering; check popliteal pulse; high-energy ATLS mindset; low-energy geriatric work-up like a hip fracture. Imaging: X-ray, CT, MRI if ligaments doubted.</p>
${FIG('o7-distal-ao')}
${FIG('o7-hoffa-ct')}
<div data-widget="stepsvg" data-set="distmap"></div>
<div class="hint">💡 <b>"Swollen knee after energy + ‘funny’ condyle outline = CT before you shrug."</b></div>
<div class="exam"><b>🎓 For exams:</b> A/B/C; Hoffa = coronal, CT; popliteal artery; lecture mortality figures.</div>
<details class="chk"><summary>✅ Checkpoint: scaffold scene.</summary><p>Hoffa on CT — plan operative fixation with interfragmentary screws; keep checking distal pulses.</p></details>`,
recap:["Geriatric + high-energy families.","Hoffa needs CT.","Pulses matter."],
quiz:[{q:"Hoffa fracture plane?",o:["Coronal shear of a condyle","Pure spiral mid-shaft only"],a:0,e:"Pages 70–71."},{q:"Best test when Hoffa suspected but X-ray coy?",o:["Computed tomography","Reassure without imaging"],a:0,e:"Lecture."}]},
{id:"hj2",title:"Treatment, complications, distal periprosthetic (pages 73–79)",min:9,goal:1,obj:["Match implants; recall broomstick-in-bucket"],html:`
<div class="scene"><b>The scene:</b> An 84-year-old with a total knee falls; the distal femur cracks above the femoral component. The stem of a hip replacement upstairs makes a nail awkward.</div>
<p>Non-operative (page 73): only for slightly displaced extra-articular patterns that reduce in flexion — traction tricks if gastrocnemius displaces the fragment, then cast-brace. Operative (page 74): retrograde/antegrade nails; locked plates; biphasic plates; lag screws; external fixator; distal femur replacement. Complications (page 76): arterial injury (displacement at injury was worse than the film); stiffness; non-union; post-traumatic arthritis. Distal periprosthetic (pages 77–79): classify by implant stability and bone stock; plate often; nail if canal open; revise loose implants. McRae ‘broomstick in a bucket’: a nail can sit firm in the shaft while the metaphyseal bucket still fails around a knee prosthesis.</p>
${FIG('o7-distal-plate')}
${FIG('o7-distal-peri')}
${FIG('okr-periprosthetic-xray')}
<div data-widget="pickset" data-set="distrx"></div>
<div class="hint">💡 <b>"Simple A → nail or plate. Articular C → rebuild the joint. Hoffa → lag screws. Loose knee implant → revise, don’t pretend."</b></div>
<div class="exam"><b>🎓 For exams:</b> selective non-op; implant menu; broomstick-in-bucket; link to L8.9 Felix and knee-replacement modules.</div>
<details class="chk"><summary>✅ Checkpoint: peri-prosthetic scene.</summary><p>Ask if the knee femoral component is solid; if yes, lock a plate that respects the hip stem above; if loose, revise. Cross-link ${XL("o8i","L8.9")} and ${XL("okr7","KR.7")}.</p></details>`,
recap:["Most need surgery.","Hoffa almost always fixed.","Periprosthetic = stability first."],
quiz:[{q:"McRae ‘broomstick in a bucket’ warns that…",o:["A nail may be solid in the shaft while metaphysis still fails around a prosthesis","Buckets cure fractures"],a:0,e:"McRae distal periprosthetic note."},{q:"Barely displaced extra-articular distal femur in flexion — possible path?",o:["Selected non-operative care per lecture","Mandatory amputation"],a:0,e:"Page 73."}]}],
cases:[{id:"hjk1",title:"Case: Hidden Hoffa",steps:[{t:`High-energy knee swelling, AP/lateral ‘metaphyseal only’. CT: Letenneur-type Hoffa.`,q:"Plan?",o:["Operative lag-screw fixation of the condylar fragment","Ignore because X-ray looked mild"],a:0,e:"Hoffa = operate."}],take:["CT saves condyles."]}],
flash:[["AO A/B/C","Extra / partial / complete articular."],["Hoffa","Coronal condyle shear; CT."],["Gastrocnemius","Extends distal fragment."],["Broomstick in a bucket","Nail solid, metaphysis fails."]],
exam:["Classifications.","Hoffa imaging.","Periprosthetic logic."],
finalHtml:`<div data-widget="spot" data-set="o7j"></div><div data-widget="termdeck" data-set="o7j"></div><div class="exam" style="border-color:var(--ok)"><b>➡️ Done with Lecture 7.</b><br>Return to the Orthopaedics hub or continue to Lecture 8 knee and leg.<br><button class="pri" style="margin-top:8px" onclick="showModule('o8a')">→ Lecture 8.1</button></div>`,
sources:"Sources: Lecture 7 pages 67–79; McRae's Orthopaedic Trauma and Emergency Fracture Management, 3rd edition (White, Mackenzie, Gray, 2016), distal femoral fractures (book pages ~410–413). Lecture incidence/mortality/Hoffa percentages cited as lecture data. Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o7j=O7J;
