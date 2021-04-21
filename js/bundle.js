(()=>{"use strict";var e={790:(e,t,s)=>{s.r(t)}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,s),o.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=(()=>{const e=document.querySelector("body"),t=()=>{const e=document.querySelector(".section"),t=document.createElement("div");t.classList.add("container","is-fluid");const s=document.createElement("div");s.classList.add("columns"),s.setAttribute("id","taskView"),t.appendChild(s),e.appendChild(t)},s=()=>{document.querySelectorAll(".column").forEach((e=>{e.remove()}))};return{renderTasks:e=>{s();const t=document.querySelector("#taskView");e.forEach((e=>{const s=document.createElement("div");s.classList.add("column");const n=document.createElement("div");n.classList.add("card");const a=document.createElement("header");a.classList.add("card-header");const o=document.createElement("p");o.classList.add("card-header-title"),o.textContent=e.title,a.appendChild(o),n.appendChild(o);const i=document.createElement("div");i.classList.add("card-content");const r=document.createElement("content");r.classList.add("content"),r.textContent=e.desc,i.appendChild(r),n.appendChild(i);const d=document.createElement("footer");d.classList.add("card-footer");const c=document.createElement("p");c.classList.add("card-footer-item"),c.textContent=e.dueDate,d.appendChild(c);const l=document.createElement("p");l.classList.add("card-footer-item"),l.textContent=e.priority,d.appendChild(l);const m=document.createElement("a");m.classList.add("card-footer-item"),m.classList.add("task-delete-btn"),m.textContent="Delete",m.addEventListener("click",(e=>{e.target.closest("div").remove()})),d.appendChild(m),n.appendChild(d),s.appendChild(n),t.appendChild(s)}))},renderHome:()=>{const s=document.createElement("section");s.classList.add("section"),s.setAttribute("id","home"),e.appendChild(s),t()},clearTasks:s,renderTaskView:t}})(),t=(()=>{let e=[];class t{constructor(t,s,n,a,o){this.title=t,this.desc=s,this.dueDate=n,this.priority=a,this.project=o||"default",e.push(this),console.log(e)}}return{createTask:(e,s,n,a,o)=>{new t(e,s,n,a,o)},deleteTask:t=>{const s=t.target.closest("div");e.forEach((t=>{s.querySelector(".card-header-title").innerHTML===t.title&&(e.splice(t,1),console.log(e))}))},getTaskLibrary:()=>e}})();s(790),console.log("webpack enabled"),e.renderHome(),t.createTask("test","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","today","high"),t.createTask("test 2","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","tomorrow","low"),t.createTask("test 3","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","4/25/21","medium"),t.createTask("test 4","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","5/22/21","low"),e.renderTasks(t.getTaskLibrary())})()})();