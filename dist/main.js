(()=>{console.log("index.js is working");let t,e=document.querySelector("#add-task"),n=document.querySelector("body"),i=[],r=document.querySelector("#add-project-button");function u(t,e,n){let i=document.createElement("input");return i.setAttribute("id",t),i.setAttribute("type",e),i.setAttribute("name",n),i}function a(t,e,n,i){let r=document.createElement("input");return r.setAttribute("id",t),r.setAttribute("type",e),r.setAttribute("name",i),r.setAttribute("placeholder",n),r}function d(...t){t.forEach((t=>{t.setAttribute("required","")}))}function o(t,e,n){let i=document.createElement(t);return i.setAttribute("id",e),n.appendChild(i),i}function s(t){let e=document.createElement("div");return e.classList.add("input-position"),t.appendChild(e),e}function c(t,e){let n=document.createElement("label");return n.setAttribute("for",e),t.appendChild(n),n}function l(t,e){let n=s(t);return c(n,e),n}function m(){document.querySelector("#add-task-menu").remove()}e.addEventListener("click",(()=>{(function(){let e=o("form","add-task-menu",n);o("button","exit-menu-button",e).addEventListener("click",(()=>{m(),n.classList.remove("blur")}));let r=a("task-name","text","Task Name","name"),b=a("task-description","text","Description","description"),f=u("task-due-date","date","date");l(e,"task-name").appendChild(r),l(e,"task-description").appendChild(b);let A=o("div","date-radio-div",e);l(A,"task-date-input").appendChild(f),function(t,e,...n){let i=o("div","radio-inputs-div",t);n.forEach((t=>{let n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("id",t),n.setAttribute("name",e),n.setAttribute("value",t.toUpperCase()),i.appendChild(n),c(i,e).textContent=t.toUpperCase(),d(n)}))}(A,"priority","low","medium","high"),function(t){let e=document.createElement("select");e.setAttribute("id","project-selector"),e.setAttribute("name","project"),s(t).appendChild(e);for(let t=0;t<i.length;t++){let n=i[t].getProjectname(),r=document.createElement("option");r.setAttribute("value",n),r.textContent=n,e.appendChild(r)}}(e),d(r,f),o("button","submit-form-button",e).setAttribute("type","submit"),e.addEventListener("submit",(e=>{e.preventDefault();let i=Object.fromEntries(new FormData(e.target).entries());!function(e,n,i,r){let u=p(e,n,i,r);t.taskArray.push(u)}(i.name,i.description,i.date,i.priority),m(),n.classList.remove("blur")}))})(),n.classList.add("blur")}));let p=(t,e,n,i)=>({getTaskName:()=>t,getTaskDescription:()=>e,getTaskDueDate:()=>n,getTaskPriority:()=>i});r.addEventListener("click",(()=>{!function(){let t=document.createElement("form");t.setAttribute("id","add-project-menu"),n.appendChild(t),o("button","exit-menu-button",t).addEventListener("click",(()=>{document.querySelector("#add-project-menu").remove(),n.classList.remove("blur")}));let e=u("project-name","text","name");e.setAttribute("required",""),t.appendChild(e),o("button","submit-form-button",t).setAttribute("type","submit")}(),n.classList.add("blur")})),function(){let e=(n="inbox",{getProjectname:()=>n,taskArray:[]});var n;i.push(e),t=i[0]}()})();