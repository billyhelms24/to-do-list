(()=>{"use strict";var e={790:(e,t,s)=>{s.r(t)}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var d=t[a]={exports:{}};return e[a](d,d.exports,s),d.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=(()=>{let e=[],t=0;class s{constructor(s,a,n,d,i){this.title=s,this.desc=a,this.dueDate=n,this.priority=d,this.project=i||"inbox",this.id=t,t++,e.push(this),console.log(e)}}return{createTask:(e,t,a,n,d)=>{new s(e,t,a,n,d)},deleteTask:t=>{e.forEach((s=>{s.id===Number(t)&&(e.splice(e.findIndex((e=>e.id===Number(t))),1),console.log(e))}))},getTaskLibrary:()=>e}})(),t=(()=>{const s=document.querySelector("body"),a=()=>{const e=document.querySelector(".section"),t=document.createElement("div");t.classList.add("container","is-max-desktop"),t.id="taskView",t.appendChild((()=>{const e=document.createElement("button");return e.classList.add("button","is-danger","mb-5"),e.textContent="+",e.addEventListener("click",(()=>{document.querySelector("#newTaskModal").classList.add("is-active")})),e})()),t.appendChild((()=>{const e=document.createElement("div");e.classList.add("modal"),e.id="newTaskModal";const t=document.createElement("div");t.classList.add("modal-background"),e.appendChild(t);const s=document.createElement("div");s.classList.add("modal-card");const a=document.createElement("header");a.classList.add("modal-card-head");const n=document.createElement("p");n.classList.add("modal-card-title"),n.textContent="New Task";const d=document.createElement("button");d.classList.add("delete"),d.setAttribute("aria-label","close"),d.addEventListener("click",(e=>{e.target.closest(".modal").classList.remove("is-active")})),a.appendChild(n),a.appendChild(d),s.appendChild(a);const i=document.createElement("section");i.classList.add("modal-card-body");const o=document.createElement("div");o.classList.add("field");const r=document.createElement("label");r.classList.add("label"),r.textContent="Title";const c=document.createElement("div");c.classList.add("control");const l=document.createElement("input");l.classList.add("input"),l.type="text",l.placeholder="Enter a task title...",c.appendChild(l),o.appendChild(r),o.appendChild(c),i.appendChild(o);const m=document.createElement("div");m.classList.add("field");const p=document.createElement("label");p.classList.add("label"),p.textContent="Description";const u=document.createElement("div");u.classList.add("control");const h=document.createElement("textarea");return h.classList.add("textarea"),h.placeholder="Enter a task description...",u.appendChild(h),m.appendChild(p),m.appendChild(u),i.appendChild(m),s.appendChild(i),e.appendChild(s),e})()),e.appendChild(t)},n=()=>{document.querySelectorAll(".card").forEach((e=>{e.remove()}))};return{renderTasks:s=>{n();const a=document.querySelector("#taskView");s.forEach((s=>{const n=document.createElement("div");n.classList.add("card","mb-5"),n.id=s.id;const d=document.createElement("header");d.classList.add("card-header");const i=document.createElement("label");i.classList.add("card-header-title","checkbox"),i.innerHTML="<input type='checkbox'> &nbsp"+s.title;const o=document.createElement("a");o.classList.add("card-header-icon"),o.setAttribute("aria-label","more options"),o.addEventListener("click",(e=>{e.target.closest(".card").querySelector(".card-content").classList.contains("is-hidden")?(document.querySelectorAll(".card").forEach((e=>{e.querySelector(".card-content").classList.add("is-hidden"),e.querySelector("footer").classList.add("is-hidden"),e.querySelector("i").classList.remove("fa-chevron-down"),e.querySelector("i").classList.add("fa-chevron-left")})),e.target.closest(".card").querySelector("i").classList.remove("fa-chevron-left"),e.target.closest(".card").querySelector("i").classList.add("fa-chevron-down"),e.target.closest(".card").querySelector(".card-content").classList.remove("is-hidden"),e.target.closest(".card").querySelector("footer").classList.remove("is-hidden")):(e.target.closest(".card").querySelector("i").classList.remove("fa-chevron-down"),e.target.closest(".card").querySelector("i").classList.add("fa-chevron-left"),e.target.closest(".card").querySelector(".card-content").classList.add("is-hidden"),e.target.closest(".card").querySelector("footer").classList.add("is-hidden"))}));const r=document.createElement("span");r.classList.add("icon");const c=document.createElement("i");c.classList.add("fas","fa-chevron-left"),c.setAttribute("aria-hidden","true"),r.appendChild(c),o.appendChild(r),d.appendChild(i),d.appendChild(o),n.appendChild(d);const l=document.createElement("div");l.classList.add("card-content","is-hidden");const m=document.createElement("content");m.classList.add("content"),m.textContent=s.desc,l.appendChild(m),n.appendChild(l);const p=document.createElement("footer");p.classList.add("card-footer","is-hidden");const u=document.createElement("p");u.classList.add("card-footer-item"),u.textContent=s.dueDate,p.appendChild(u);const h=document.createElement("p");h.classList.add("card-footer-item"),h.textContent=s.priority,p.appendChild(h);const y=document.createElement("a");y.classList.add("card-footer-item"),y.textContent="edit",y.addEventListener("click",(()=>{})),p.appendChild(y);const L=document.createElement("a");L.classList.add("card-footer-item"),L.classList.add("task-delete-btn"),L.textContent="delete",L.addEventListener("click",(s=>{e.deleteTask(s.target.closest(".card").id),t.renderTasks(e.getTaskLibrary())})),p.appendChild(L),n.appendChild(p),a.appendChild(n)}))},renderHome:()=>{const e=document.createElement("section");e.classList.add("section","has-background-link"),e.setAttribute("id","home"),s.appendChild(e),a()},clearTasks:n,renderTaskView:a}})();s(790),console.log("webpack enabled"),t.renderHome(),e.createTask("test","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","today","high"),e.createTask("test 2","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","tomorrow","low"),e.createTask("test 3","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","4/25/21","medium"),e.createTask("test 4","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","5/22/21","low"),t.renderTasks(e.getTaskLibrary())})()})();