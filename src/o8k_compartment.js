/* ===== Orthopaedics · Lecture 8 · 11: Compartment syndrome of the leg (pages 68, 100–104) ===== */
XSTEP.fourcomp={t:"Four compartments of the leg (lecture pages 101–104)",dim:.12,svg:`<svg viewBox="0 0 640 360" style="width:100%" role="img" aria-label="Cross-section of leg with four compartments">
<g data-k="bone"><circle cx="300" cy="180" r="36" fill="#ddd" stroke="#666"/><text x="300" y="185" text-anchor="middle" font-size="11">tibia</text><circle cx="380" cy="210" r="16" fill="#ccc" stroke="#666"/><text x="380" y="245" text-anchor="middle" font-size="10">fibula</text></g>
<g data-k="ant"><path d="M300 140 C340 100 400 120 400 160 L340 170 Z" fill="#fde2ea" stroke="#b3476d"/><text x="360" y="130" font-size="12" font-weight="700" fill="#8a2f52">anterior</text><text x="360" y="146" font-size="10">deep peroneal n.</text></g>
<g data-k="lat"><path d="M400 160 C430 180 430 230 400 250 L380 210 Z" fill="#fdf3e7" stroke="#d9730d"/><text x="455" y="210" font-size="12" font-weight="700" fill="#a0520a">lateral</text></g>
<g data-k="sp"><path d="M260 200 C240 260 320 300 360 260 L300 220 Z" fill="#e8f0fb" stroke="#2f6db3"/><text x="300" y="290" text-anchor="middle" font-size="12" font-weight="700" fill="#1f4f8a">superficial posterior</text></g>
<g data-k="dp"><path d="M260 160 C220 180 240 230 280 230 L300 180 Z" fill="#e8f8ef" stroke="#1f9d55"/><text x="200" y="200" font-size="12" font-weight="700" fill="#1f7a44">deep posterior</text></g></svg>`,
steps:[["Bones","Tibia and fibula frame the compartments.",["bone"]],["Anterior","Most commonly affected after tibial fracture; deep peroneal nerve — first web space sensation, toe extension.",["bone","ant"]],["Lateral","Peroneal muscles; superficial peroneal nerve.",["bone","ant","lat"]],["Superficial posterior","Gastrocnemius–soleus.",["bone","ant","lat","sp"]],["Deep posterior","Posterior tibial neurovascular bundle; toe flexors.",["bone","ant","lat","sp","dp"]]]};
XPK.compact={t:"Act on compartment syndrome (pages 100–103; McRae chapter 3)",opts:["Urgent fasciotomy pathway","Not compartment syndrome — rethink","Monitor / adjunct pressures"],items:[
["Pain out of proportion, severe pain on passive stretch, tense compartments after tibial nailing; pulses still present",0,"Pulses do not exclude it; this is a surgical emergency (McRae key points).",""],
["Cold pulseless foot from the moment of injury with a clear arterial transection pattern",1,"Critical ischaemia / vessel injury pathway — related but not the same as the classic six-P confusion McRae warns about.",""],
["Unconscious polytrauma patient with a tibial fracture; clinical exam limited",2,"Pressure monitoring: ΔP = diastolic − compartment pressure; McRae wants ΔP &gt; 30 mmHg.",""],
["You only 'sort of wonder' about compartments after a crush",0,"Lecture page 103: if you think about it — treat it (dermato-fasciotomy).",""]]};
XS.o8k=["Spot the error",[["Compartment syndrome is a surgical emergency.",1],["A present distal pulse excludes compartment syndrome.",0,"Wrong: pulse loss is late; irreversible damage may already have occurred (McRae)."],["Symptoms are not the same as the six Ps of critical ischaemia.",1],["All four leg compartments must be released at fasciotomy.",1]]];
XT.o8k="compsyn,deltap,fasciot,imnail,poplart,peronealn";
const O8K={
meta:"Orthopaedics › Knee and leg › Lecture 8 › Subsection L8.11 · Lecture 8 pages 68 and 100–104 · ⏱ about 14 minutes in 2 bite-sized steps",
intro:`<p>[[compsyn|Acute compartment syndrome]] kills muscle and nerve when pressure inside a fascia bottle exceeds capillary perfusion. The lecture parks a definition slide oddly at page 68 (between cruciate and tibial spine) and returns in full at pages 100–104. McRae chapter 3, Limb-threatening injuries — Compartment syndrome (book pages 45–49).</p>`,
goals:["Recognise clinical signs that beat the clock","Use ΔP wisely and describe four-compartment release"],
cards:[
{id:"ok1",title:"Recognition and emergency steps (pages 68, 100–103)",min:7,goal:0,obj:["List cardinal features and first moves"],html:`
<div class="scene"><b>The scene:</b> Four hours after locked nailing of a closed tibial fracture, analgesia is failing. Passive toe extension produces a scream. The anterior compartment feels like wood. The dorsalis pedis pulse is still there.</div>
<p>Definition (page 68): pressure within muscles builds until blood flow cannot nourish nerve and muscle; acute or chronic forms exist. McRae causes: fractures (tibia classic), blunt contusion, haemorrhage (anticoagulants), extravasation, reperfusion. Cardinal features: pain out of proportion, pain on passive stretch, tense compartment, sensory change, weakness. <b>Pulse present does not reassure.</b></p>
<p>Emergency: split all circumferential dressings to skin; keep the limb at heart level (not high elevation); realign/splint fractures; urgent surgical review for [[fasciot|fasciotomy]]. Lecture motto (page 103): if you think about it — treat it.</p>
<div class="corr"><b>Slide order note:</b> the definition appears at page 68 in the middle of ligament/bone topics, then the full compartment section returns at pages 100–104. We teach it once, here, at the end of the chain where it belongs clinically.</div>
<div class="corr"><b>Spelling note:</b> slides say "Compartmentsyndrom" / "Compartment Syndrom" — English clinical term: <b>compartment syndrome</b>.</div>
<div class="hint">💡 <b>"Pain on stretch + pain out of proportion = theatre, not another dose of opioid alone."</b></div>
<div class="exam"><b>🎓 For exams:</b> cardinal signs; pulse does not exclude; split dressings; heart-level limb; urgent fasciotomy.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>Acute compartment syndrome after tibial nailing — immediate four-compartment fasciotomy, not observation because the pulse is present.</p></details>`,
recap:["Pain ≫ injury + stretch pain.","Pulse ≠ safe.","Split dressings; fasciotomy."],
quiz:[{q:"Which statement is true?",o:["Distal pulse can still be present in compartment syndrome","Pulse presence always excludes it"],a:0,e:"McRae key points."},{q:"Limb position while waiting?",o:["At heart level, not high elevation","Straight up hanging from a drip stand"],a:0,e:"McRae emergency management."}]},
{id:"ok2",title:"Pressures, ΔP, four compartments (pages 101–104; McRae)",min:7,goal:1,obj:["Interpret ΔP and name the four releases"],html:`
<div class="scene"><b>The scene:</b> An intubated patient has a tibial fracture. Compartment pressure reads 45 mmHg; diastolic blood pressure is 70 mmHg.</div>
<p>Pressure monitoring (McRae): useful in obtunded patients; [[deltap|ΔP]] = diastolic − compartment pressure; keep ΔP &gt; 30 mmHg. Here ΔP = 25 mmHg → supports fasciotomy. Operative care: release <b>all four</b> leg compartments (anterior, lateral, superficial posterior, deep posterior) through adequate medial and lateral incisions; inspect muscle; debride dead tissue (lecture pages 101–104; McRae figures).</p>
${FIG('o8-fasciotomy-leg')}
<div data-widget="stepsvg" data-set="fourcomp"></div>
${FIG('o8-four-compartments')}
<div data-widget="pickset" data-set="compact"></div>
<div class="hint">💡 <b>"ΔP = diastolic − compartment. Under 30 mmHg is a red flag in McRae's teaching."</b></div>
<div class="exam"><b>🎓 For exams:</b> ΔP &gt; 30 mmHg target; four compartments; two-incision release concept.</div>
<details class="chk"><summary>✅ Checkpoint: answer the scene.</summary><p>ΔP 25 mmHg (&lt;30) — treat as compartment syndrome and decompress all four compartments.</p></details>`,
recap:["ΔP = diastolic − compartment; want &gt;30 mmHg.","Four compartments, two big releases.","Debride non-viable muscle."],
quiz:[{q:"Diastolic 60, compartment 40. ΔP?",o:["20 mmHg — concerning","100 mmHg — fine"],a:0,e:"60−40=20; below 30."},{q:"Fasciotomy of the leg must open…",o:["All four compartments","Only skin, never fascia"],a:0,e:"Lecture + McRae."}]}],
cases:[{id:"okk1",title:"Case: If you think about it",steps:[{t:`Junior: 'Maybe watch overnight — pulses are fine.' Senior looks at the tense calf after a crush.`,q:"Lecture answer?",o:["If you think about it — treat it (fasciotomy)","Wait for pulse loss"],a:0,e:"Page 103."}],take:["Suspicion is an indication."]}],
flash:[["Cardinal signs","Pain≫injury, stretch pain, tense, neuro change."],["Pulse","Does not exclude."],["ΔP","Diastolic − compartment; want &gt;30 mmHg."],["Release","All four leg compartments."]],
exam:["Clinical diagnosis.","McRae ΔP rule.","Four compartments."],
finalHtml:`<div data-widget="spot" data-set="o8k"></div><div data-widget="termdeck" data-set="o8k"></div><div class="exam" style="border-color:var(--ok)"><b>✅ Lecture 8 complete</b><br>Return to any subsection from the nav. Related topics will link these injuries to each other.</div>`,
sources:"Sources: Lecture 8 pages 68, 100–104; McRae 3rd edition chapter 3 Compartment syndrome (book pages 45–49). Teaching questions by MedLearn.",
casesHead:"🏥 Cases",casesIntro:"Answer to reveal the next part."};
LESSONS.o8k=O8K;
