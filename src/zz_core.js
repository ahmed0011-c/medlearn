/* ===== Shared engine for the new sections: reusable games and helpers (data lives in each module file) ===== */
const XPK={},XSORT={},XTREE={},XPAT={};
/* reuse a labelled figure that is already embedded in Module 5 */
const FIGX=file=>{for(const c of M5.cards){const m=c.html.match(new RegExp('<figure class="mlfig">(?:(?!</figure>).)*?images/'+file.replace(/[.-]/g,"\\$&")+'[\\s\\S]*?</figure>'));if(m)return m[0]}return ""};
const XSH=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};
/* pick the right answer: XPK[set]={t,opts:[...],items:[[scenario,answer,explanation],...]} */
W.pickset=el=>{const D0=XPK[el.dataset.set],D={...D0,items:XSH(D0.items)};let n=0,right=0;
const draw=()=>{if(n>=D.items.length){el.innerHTML=`<div class="xgame"><b>${D.t}</b><div class="info">🏆 Done: ${right}/${D.items.length} right first time.</div><button class="xreset">↺ Play again</button></div>`;el.querySelector(".xreset").onclick=()=>{n=0;right=0;draw()};complete("x-pk-"+el.dataset.set,15,"🎯 Scenario game done! +15 XP");return}
const s=D.items[n];let first=true;el.innerHTML=`<div class="xgame"><b>${D.t}</b> <small>(${n+1}/${D.items.length})</small><p class="xscen">${s[0]}</p><div class="ctrl">${D.opts.map((o,i)=>`<button data-o="${i}">${o}</button>`).join("")}</div><div class="info xp-info">Pick one.</div></div>`;
el.querySelectorAll("[data-o]").forEach(b=>b.onclick=()=>{const inf=el.querySelector(".xp-info");if(D.opts[+b.dataset.o]==s[1]){if(first)right++;b.classList.add("right");el.querySelectorAll("[data-o]").forEach(x=>x.disabled=true);inf.innerHTML=`✅ <b>${s[1]}.</b> ${s[2]} <button class="xnext">Next ▶</button>`;inf.querySelector(".xnext").onclick=()=>{n++;draw()}}else{first=false;b.classList.add("wrong");b.disabled=true;inf.innerHTML="❌ Not quite. "+(s[3]||"Think again about the key clue.")}})};draw()};
/* sort into columns: XSORT[set]={t,labels:[...],items:[[text,answerIndex,explanation]]} */
W.sortset=el=>{const D=XSORT[el.dataset.set],I=XSH(D.items);let ok=0;const done=new Set();
el.innerHTML=`<div class="xgame"><b>🧩 ${D.t}</b><div class="sortg">${I.map((it,i)=>`<div class="sortrow" data-i="${i}"><span class="st">${it[0]}</span><span class="sb">${D.labels.map((l,j)=>`<button data-a="${j}">${l}</button>`).join("")}</span><div class="sfb" hidden></div></div>`).join("")}</div><div class="info xs3">0/${I.length} sorted correctly.</div></div>`;
el.querySelectorAll(".sortrow").forEach(row=>row.querySelectorAll("button").forEach(b=>b.onclick=()=>{const i=+row.dataset.i,it=I[i],fb=row.querySelector(".sfb");fb.hidden=false;
if(+b.dataset.a==it[1]){row.querySelectorAll("button").forEach(x=>x.disabled=true);b.classList.add("right");row.classList.add("ok");fb.innerHTML="✅ "+it[2];if(!done.has(i)){done.add(i);ok++}}
else{b.classList.add("wrong");fb.innerHTML="❌ Not quite. Look again at the key feature."}
el.querySelector(".xs3").textContent=ok==I.length?"🏆 All sorted!":`${ok}/${I.length} sorted correctly.`;if(ok==I.length)complete("x-so-"+el.dataset.set,15,"🧩 Sorting complete! +15 XP")}))};
/* decision tree: XTREE[set]={t,start,n:{id:{q,o:[[label,nextId or "=result html"]]}}} */
W.tree=el=>{const D=XTREE[el.dataset.set];const seen=new Set();let path=[];
const go=id=>{const nd=D.n[id];el.innerHTML=`<div class="xgame"><b>🧭 ${D.t}</b><div class="xpath">${path.map(p=>`<span>${p}</span>`).join(" → ")||"Start"}</div><p class="xscen">${nd.q}</p><div class="ctrl xcol">${nd.o.map((o,i)=>`<button data-i="${i}">${o[0]}</button>`).join("")}</div><div class="info xt-res" hidden></div><button class="xreset">↺ Start again</button></div>`;
el.querySelector(".xreset").onclick=()=>{path=[];go(D.start)};
el.querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>{const o=nd.o[+b.dataset.i];path.push(o[0].replace(/<[^>]+>/g,""));if(o[1].startsWith("=")){const r=el.querySelector(".xt-res");r.hidden=false;r.innerHTML="🎯 "+o[1].slice(1);el.querySelectorAll("[data-i]").forEach(x=>{x.disabled=true;x.classList.toggle("on",x==b)});seen.add(id+b.dataset.i);if(seen.size>=2)complete("x-tr-"+el.dataset.set,15,"🧭 Pathway explored! +15 XP")}else go(o[1])})};go(D.start)};
/* hormone pattern quiz: XPAT[set]={t,cols:[...],rows:[[label,[values...],explanation]]} */
W.pattern=el=>{const D=XPAT[el.dataset.set];let order=XSH(D.rows.map((r,i)=>i)),n=0,right=0;
const col=v=>/↑/.test(v)?"var(--bad)":/↓/.test(v)?"var(--acc)":"var(--ok)";
const table=()=>`<div class="tblwrap"><table><tr><th>Cause</th>${D.cols.map(c=>`<th>${c}</th>`).join("")}</tr>${D.rows.map(r=>`<tr><td><b>${r[0]}</b></td>${r[1].map(v=>`<td style="color:${col(v)};font-weight:700">${v}</td>`).join("")}</tr>`).join("")}</table></div>`;
const draw=()=>{if(n>=order.length){el.innerHTML=`<div class="xgame"><b>🔬 ${D.t}</b><div class="info">🏆 ${right}/${order.length} right first time. The full pattern table:</div>${table()}<button class="xreset">↺ Play again</button></div>`;el.querySelector(".xreset").onclick=()=>{order=XSH(order);n=0;right=0;draw()};complete("x-pa-"+el.dataset.set,15,"🔬 Patterns mastered! +15 XP");return}
const r=D.rows[order[n]];let first=true;el.innerHTML=`<div class="xgame"><b>🔬 ${D.t}</b> <small>(${n+1}/${order.length}) Which cause fits these results?</small><div class="xlabs">${D.cols.map((c,i)=>`<span class="xlab"><small>${c}</small><b style="color:${col(r[1][i])}">${r[1][i]}</b></span>`).join("")}</div><div class="ctrl xcol">${D.rows.map((x,i)=>`<button data-i="${i}">${x[0]}</button>`).join("")}</div><div class="info xpa">Pick the cause.</div><button class="xshow">📋 Show the whole table</button></div>`;
el.querySelector(".xshow").onclick=e=>{e.target.outerHTML=table()};
el.querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>{const inf=el.querySelector(".xpa");if(+b.dataset.i==order[n]){if(first)right++;b.classList.add("right");el.querySelectorAll("[data-i]").forEach(x=>x.disabled=true);inf.innerHTML=`✅ <b>${r[0]}.</b> ${r[2]} <button class="xnext">Next ▶</button>`;inf.querySelector(".xnext").onclick=()=>{n++;draw()}}else{first=false;b.classList.add("wrong");b.disabled=true;inf.textContent="❌ Not this one. Look at the strongest clue first."}})};draw()};
/* step-through labelled SVG: data in XSTEP[set]={t,svg,steps:[[title,text,[visible group keys]]]} ; groups use data-k */
const XSTEP={};
W.stepsvg=el=>{const D=XSTEP[el.dataset.set];const seen=new Set();
el.innerHTML=`<div class="ctrl">${D.steps.map((s,i)=>`<button data-i="${i}">${i+1}. ${s[0]}</button>`).join("")}</div><div class="swipe">↔ Swipe sideways to see the whole diagram</div><div class="svgwrap"><figure>${D.svg}<figcaption>${D.t}, drawn by MedLearn (schematic, not to scale).</figcaption></figure></div><div class="info xst">Click step 1 to start.</div>`;
const go=i=>{const s=D.steps[i];seen.add(i);el.querySelectorAll("[data-i]").forEach(b=>b.classList.toggle("on",+b.dataset.i==i));
el.querySelectorAll("g[data-k]").forEach(g=>{g.style.opacity=s[2]=="all"||s[2].includes(g.dataset.k)?1:(D.dim??.15)});
el.querySelector(".xst").innerHTML=`<b>${s[0]}:</b> ${s[1]}`;if(seen.size==D.steps.length)complete("x-st-"+el.dataset.set,10,"🗺️ Diagram explored! +10 XP")};
el.querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>go(+b.dataset.i));go(0)};
/* calculator / simulator: XCALC[set]={t,inp:[[id,label,"n",[min,max,step,start,unit]] | [id,label,"s",[[text,value],...]] | [id,label,"c",checked?]],f:v=>html,note} */
const XCALC={};
W.calc=el=>{const D=XCALC[el.dataset.set];let used=0;
el.innerHTML=`<div class="xgame"><b>🧮 ${D.t}</b><div class="xcalc">${D.inp.map(([id,lab,k,a])=>k=="n"?`<label class="xci"><span>${lab}: <b data-o="${id}">${a[3]}</b> ${a[4]||""}</span><input type="range" data-v="${id}" min="${a[0]}" max="${a[1]}" step="${a[2]}" value="${a[3]}" aria-label="${lab.replace(/<[^>]+>/g,"")}"></label>`:k=="s"?`<label class="xci"><span>${lab}</span><select data-v="${id}">${a.map(o=>`<option value="${o[1]}">${o[0]}</option>`).join("")}</select></label>`:`<label class="xci xcc"><input type="checkbox" data-v="${id}" ${a?"checked":""}> <span>${lab}</span></label>`).join("")}</div><div class="info xcr" aria-live="polite"></div>${D.note?`<small>${D.note}</small>`:""}</div>`;
const run=()=>{const v={};el.querySelectorAll("[data-v]").forEach(i=>{v[i.dataset.v]=i.type=="checkbox"?i.checked:i.type=="range"?+i.value:(isNaN(+i.value)?i.value:+i.value)});el.querySelectorAll("[data-o]").forEach(o=>o.textContent=v[o.dataset.o]);el.querySelector(".xcr").innerHTML=D.f(v)};
el.querySelectorAll("[data-v]").forEach(i=>i.oninput=i.onchange=()=>{run();if(++used==4)complete("x-ca-"+el.dataset.set,10,"🧮 Simulator explored! +10 XP")});run()};
/* accessibility: give every unlabelled diagram a role and a name from its card title */
(function(){const lab=()=>document.querySelectorAll('svg:not([role]):not([aria-hidden])').forEach(s=>{if(s.closest('button,.mk,defs')||s.getBoundingClientRect().width<40)return;const c=s.closest('.card,.case,section,details');const h=c&&c.querySelector('h2,h3,h4,summary,.ctitle');s.setAttribute('role','img');s.setAttribute('aria-label','Diagram'+(h?': '+h.textContent.trim().slice(0,90):''))});
new MutationObserver(()=>{clearTimeout(lab.t);lab.t=setTimeout(lab,150)}).observe(document.body,{childList:true,subtree:true});setTimeout(lab,300)})();
