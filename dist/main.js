(()=>{console.log("index.js is working");let t,e=document.querySelector("#add-task"),n=document.querySelector("body"),i=[];function r(t,e,n,i){let r=document.createElement("input");return r.setAttribute("id",t),r.setAttribute("type",e),r.setAttribute("name",i),r.setAttribute("placeholder",n),r}function a(...t){t.forEach((t=>{t.setAttribute("required","")}))}function u(t,e,n){let i=document.createElement(t);return i.setAttribute("id",e),n.appendChild(i),i}function d(t){let e=document.createElement("div");return e.classList.add("input-position"),t.appendChild(e),e}function o(t,e){let n=document.createElement("label");return n.setAttribute("for",e),t.appendChild(n),n}function s(t,e){let n=d(t);return o(n,e),n}function l(){document.querySelector("#add-task-menu").remove()}e.addEventListener("click",(()=>{n.classList.add("blur"),function(){let e=u("form","add-task-menu",n);u("button","exit-menu-button",e).addEventListener("click",(()=>{l(),n.classList.remove("blur")}));let p=r("task-name","text","Task Name","name"),m=r("task-description","text","Description","description"),b=function(t,e,n){let i=document.createElement("input");return i.setAttribute("id","task-due-date"),i.setAttribute("type","date"),i.setAttribute("name","date"),i}();s(e,"task-name").appendChild(p),s(e,"task-description").appendChild(m);let f=u("div","date-radio-div",e);s(f,"task-date-input").appendChild(b),function(t,e,...n){let i=u("div","radio-inputs-div",t);n.forEach((t=>{let n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("id",t),n.setAttribute("name",e),n.setAttribute("value",t.toUpperCase()),i.appendChild(n),o(i,e).textContent=t.toUpperCase(),a(n)}))}(f,"priority","low","medium","high"),function(t){let e=document.createElement("select");e.setAttribute("id","project-selector"),e.setAttribute("name","project"),d(t).appendChild(e);for(let t=0;t<i.length;t++){let n=i[t].getProjectname(),r=document.createElement("option");r.setAttribute("value",n),r.textContent=n,e.appendChild(r)}}(e),a(p,b),u("button","submit-form-button",e).setAttribute("type","submit"),e.addEventListener("submit",(e=>{e.preventDefault();let i=Object.fromEntries(new FormData(e.target).entries());!function(e,n,i,r){let a=c(e,n,i,r);t.taskArray.push(a)}(i.name,i.description,i.date,i.priority),l(),n.classList.remove("blur")}))}()}));let c=(t,e,n,i)=>({getTaskName:()=>t,getTaskDescription:()=>e,getTaskDueDate:()=>n,getTaskPriority:()=>i});!function(){let e=document.querySelector("#sidebar"),n=document.createElement("button");n.setAttribute("id","tasks-inbox"),e.appendChild(n);let r=(a="inbox",{getProjectname:()=>a,taskArray:[]});var a;i.push(r),t=i[0]}()})();