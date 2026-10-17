/* ===== Subsections 7–9: small learning games ===== */
const XO={
axis:{t:"Put the axis in order",items:["Waking or stress signals reach the hypothalamus","Hypothalamus releases corticotropin-releasing hormone","It travels down the portal veins to the anterior pituitary","Corticotroph cells release adrenocorticotropic hormone","It binds the melanocortin 2 receptor in the zona fasciculata","Cortisol is made and released into the blood","Cortisol brakes the pituitary and hypothalamus (negative feedback)"]},
liver:{t:"Put the route out of the body in order",items:["Free cortisol reaches the liver","A-ring reduction (5-alpha/5-beta-reductase)","Tetrahydrocortisol: now inactive","Glucuronic acid is attached (conjugation)","Water-soluble glucuronide enters the blood","The kidney excretes it in urine"]}};
const XS={
m7:["Spot the error",[["Cortisone itself is almost inactive at the glucocorticoid receptor.",1],["Liquorice blocks 11-beta-hydroxysteroid dehydrogenase type 1 in the liver.",0,"Wrong: liquorice blocks <b>type 2</b> (kidney), so cortisol reaches the mineralocorticoid receptor."],["Rifampicin speeds up the breakdown of glucocorticoids.",1],["Urinary free cortisol reflects the free (unbound) cortisol in blood.",1]]],
m8:["Spot the error",[["Cortisol is highest shortly after waking.",1],["In Cushing disease, 8 mg dexamethasone usually lowers cortisol by more than half.",1],["In primary adrenal insufficiency, adrenocorticotropic hormone is low.",0,"Wrong: with the adrenal damaged there is no cortisol brake, so adrenocorticotropic hormone is <b>high</b> (hence pigmentation)."],["The combined pill can make the 1 mg overnight test look abnormal.",1]]],
m9:["Spot the error",[["Dexamethasone has almost no salt-retaining effect.",1],["Long-term prednisolone can switch off the patient's own adrenal axis.",1],["After 1 year of prednisolone it is safe to stop all at once if the patient feels well.",0,"Wrong: after long courses the axis is suppressed. Stopping suddenly risks <b>adrenal crisis</b>; taper and check recovery."],["Steroid-induced osteoporosis starts within the first months.",1]]]};
const XT={m7:"halflife,aring,glucur,cyp3a4,ufc,cortisone,hsd11b1,hsd11b2,liquorice,ame,placbar,inducer",
m8:"crh,acth,pvn,portal,corticotroph,negfb,circadian,pulsatile,dst,hddst,cushdis,ectopic,pseudocush",
m9:"gr,hsp,gre,transact,transrep,gneo,permis,iatro,avn,myop,gcsup,gws,physdose,taper,card,sickday"};
const XP_=[["A 35-year-old with Addison disease needs daily replacement that mimics the body's own rhythm.","Hydrocortisone","Identical to cortisol and short-acting, so 2–3 doses can copy the daily curve (plus fludrocortisone for salt)."],
["A woman with a brain tumour has severe swelling around it.","Dexamethasone","Very potent, long-acting and almost no salt or water retention, which would worsen swelling."],
["An adult with a severe asthma attack needs 5 days of tablets.","Prednisolone","The standard oral anti-inflammatory steroid; a short course under about 3 weeks needs no taper."],
["A patient with a multiple sclerosis relapse needs high-dose intravenous pulses for 3 days.","Methylprednisolone","The usual intravenous pulse steroid, with little salt effect."],
["A patient with primary adrenal insufficiency is dizzy on standing, sodium is low and renin is high despite hydrocortisone.","Fludrocortisone","High renin means mineralocorticoid (aldosterone) is missing: replace it with fludrocortisone."],
["A pregnant woman at 30 weeks is in preterm labour.","Dexamethasone","Dexamethasone (or betamethasone) escapes placental type 2 inactivation and matures the baby's lungs."],
["A man on long-term prednisolone vomits, is confused and has low blood pressure in the emergency department.","Hydrocortisone","Adrenal crisis: 100 mg intravenous or intramuscular hydrocortisone at once, then fluids. Its salt effect at high dose also helps."]];
const shuf=a=>{const b=a.map((x,i)=>[x,i]);for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}if(b.every((x,i)=>x[1]==i)&&b.length>1)[b[0],b[1]]=[b[1],b[0]];return b};
W.order=el=>{const D=XO[el.dataset.set];let next=0,mist=0;const sh=shuf(D.items);
el.innerHTML=`<div class="xgame"><b>🎮 ${D.t}</b> <small>(tap the steps in the right order)</small><ol class="xord"></ol><div class="xchips">${sh.map(([t,i])=>`<button class="xchip" data-i="${i}">${t}</button>`).join("")}</div><div class="info xo-info">Tap the first step.</div><button class="xreset">↺ Shuffle again</button></div>`;
const info=el.querySelector(".xo-info"),ol=el.querySelector(".xord");
el.querySelectorAll(".xchip").forEach(b=>b.onclick=()=>{if(+b.dataset.i==next){b.remove();ol.insertAdjacentHTML("beforeend",`<li>${D.items[next]}</li>`);next++;info.textContent=next==D.items.length?`🏆 Perfect order${mist?` (${mist} slip${mist>1?"s":""} on the way)`:""}!`:"✅ Yes. Next step?";if(next==D.items.length)complete("x-ord-"+el.dataset.set,10,"🧩 Sequence complete! +10 XP")}
else{mist++;b.classList.add("shake");setTimeout(()=>b.classList.remove("shake"),400);info.textContent="❌ Not yet. What has to happen first?"}});
el.querySelector(".xreset").onclick=()=>W.order(el)};
W.spot=el=>{const [t,S]=XS[el.dataset.set];
el.innerHTML=`<div class="xgame"><b>🔎 ${t}</b> <small>(one statement is wrong: tap it)</small>${S.map((s,i)=>`<button class="xstate" data-i="${i}">${s[0]}</button>`).join("")}<div class="info xs-info">Which one is wrong?</div></div>`;
const info=el.querySelector(".xs-info");el.querySelectorAll(".xstate").forEach(b=>b.onclick=()=>{const s=S[+b.dataset.i];
if(s[1]){b.classList.add("ok");info.innerHTML="✔️ That one is true. Keep looking."}else{b.classList.add("bad");el.querySelectorAll(".xstate").forEach(x=>x.disabled=true);info.innerHTML="🎯 Found it! "+s[2];complete("x-spot-"+el.dataset.set,10,"🔎 Error spotted! +10 XP")}})};
W.termdeck=el=>{const K=XT[el.dataset.set].split(",").filter(k=>GLOSSARY[k]);let q=[...K],i=0,known=0;
el.innerHTML=`<div class="xgame"><b>🃏 Key terms deck</b> <small>(tap the card to flip)</small><button class="xcard"><span class="xf"></span></button><div class="ctrl"><button class="xa">🔁 Again</button><button class="xg">✅ Got it</button></div><div class="info xt-info"></div></div>`;
const c=el.querySelector(".xcard"),f=el.querySelector(".xf"),inf=el.querySelector(".xt-info");let back=false;
const show=()=>{back=false;c.classList.remove("back");const g=GLOSSARY[q[i]];f.innerHTML=`<b class="t-${g.c}">${g.l}</b>`;inf.textContent=`${known}/${K.length} known · ${q.length} left in the deck`};
c.onclick=()=>{back=!back;c.classList.toggle("back",back);const g=GLOSSARY[q[i]];f.innerHTML=back?`<small>${g.d}</small>`:`<b class="t-${g.c}">${g.l}</b>`};
el.querySelector(".xa").onclick=()=>{q.push(q.splice(i,1)[0]);show()};
el.querySelector(".xg").onclick=()=>{q.splice(i,1);known++;if(!q.length){f.innerHTML="🏆 Deck finished!";inf.textContent=`${known}/${K.length} known`;c.onclick=null;el.querySelectorAll(".ctrl button").forEach(b=>b.disabled=true);complete("x-deck-"+el.dataset.set,10,"🃏 Deck finished! +10 XP");return}if(i>=q.length)i=0;show()};show()};
W.pick=el=>{const O=["Hydrocortisone","Prednisolone","Methylprednisolone","Dexamethasone","Fludrocortisone"];let n=0,right=0;
const draw=()=>{if(n>=XP_.length){el.innerHTML=`<div class="xgame"><b>💊 Which steroid would you pick?</b><div class="info">🏆 Done: ${right}/${XP_.length} right first time.</div><button class="xreset">↺ Play again</button></div>`;el.querySelector(".xreset").onclick=()=>{n=0;right=0;draw()};complete("x-pick",15,"💊 Steroid picker done! +15 XP");return}
const s=XP_[n];let first=true;el.innerHTML=`<div class="xgame"><b>💊 Which steroid would you pick?</b> <small>(${n+1}/${XP_.length})</small><p class="xscen">${s[0]}</p><div class="ctrl">${O.map(o=>`<button data-o="${o}">${o}</button>`).join("")}</div><div class="info xp-info">Pick one.</div></div>`;
el.querySelectorAll("[data-o]").forEach(b=>b.onclick=()=>{const inf=el.querySelector(".xp-info");if(b.dataset.o==s[1]){if(first)right++;b.classList.add("right");el.querySelectorAll("[data-o]").forEach(x=>x.disabled=true);inf.innerHTML=`✅ <b>${s[1]}.</b> ${s[2]} <button class="xnext">Next ▶</button>`;inf.querySelector(".xnext").onclick=()=>{n++;draw()}}else{first=false;b.classList.add("wrong");b.disabled=true;inf.textContent="❌ Think about potency, salt effect and how long it lasts."}})};draw()};
/* place the games in the cards */
{const add=(Lx,id,h)=>{const c=Lx.cards.find(c=>c.id==id);if(c)c.html+=h};
add(M7,"e2",`<div data-widget="order" data-set="liver"></div>`);
add(M7,"e6",`<div data-widget="spot" data-set="m7"></div><div data-widget="termdeck" data-set="m7"></div>`);
add(M8,"f1",`<div data-widget="order" data-set="axis"></div>`);
add(M8,"f5",`<div data-widget="spot" data-set="m8"></div><div data-widget="termdeck" data-set="m8"></div>`);
add(M9,"g3",`<div data-widget="pick"></div>`);
add(M9,"g6",`<div data-widget="spot" data-set="m9"></div><div data-widget="termdeck" data-set="m9"></div>`);}
