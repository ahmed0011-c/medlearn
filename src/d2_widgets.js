/* ===== Module 2.2 widget: sorting game (primary vs secondary/tertiary) ===== */
W.sort=el=>{const I=L.sort;let ok=0;const done=new Set();
el.innerHTML=`<div class="sortg">${I.map((it,i)=>`<div class="sortrow" data-i="${i}"><span class="st">${it[0]}</span><span class="sb"><button data-a="P">Primary</button><button data-a="S">Secondary / tertiary</button></span><div class="sfb" hidden></div></div>`).join("")}</div><div class="info" id="so-info">0/${I.length} sorted correctly.</div>`;
el.querySelectorAll(".sortrow").forEach(row=>row.querySelectorAll("button").forEach(b=>b.onclick=()=>{const i=+row.dataset.i,it=I[i],fb=row.querySelector(".sfb");fb.hidden=false;
if(b.dataset.a==it[1]){row.querySelectorAll("button").forEach(x=>x.disabled=true);b.classList.add("right");row.classList.add("ok");fb.innerHTML="✅ "+it[2];if(!done.has(i)){done.add(i);ok++}}
else{b.classList.add("wrong");fb.innerHTML="❌ Not quite – think: is the adrenal itself damaged, or is the signal from above missing?"}
el.querySelector("#so-info").textContent=`${ok}/${I.length} sorted correctly.`;if(ok==I.length){el.querySelector("#so-info").textContent="🏆 All sorted!";complete("b2-sort",15,"🧩 Sorting game complete! +15 XP")}}))};
