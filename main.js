(()=>{"use strict";const e=document.querySelector("#home"),t=document.querySelector("#menu"),n=document.querySelector("#contact");function c(){document.querySelector("#content").textContent=""}function o(){const e=document.querySelector("#content"),t=document.createElement("h1"),n=document.createElement("p");t.textContent="Welcome to My Restaurant",n.textContent="Experience the finest dining at our restaurant. With our exquisite dishes and cozy ambiance, we guarantee a memorable culinary journey for every visitor.",e.appendChild(t),e.appendChild(n)}e.addEventListener("click",(()=>{c(),o()})),t.addEventListener("click",(()=>{c(),function(){const e=document.querySelector("#content"),t=document.createElement("h1"),n=document.createElement("p"),c=document.createElement("ul"),o=document.createElement("p");t.textContent="Menu",n.textContent="This is our wonderful and complete menu";const a=document.createElement("li");a.textContent="Menu Item 1: Meat";const d=document.createElement("li");d.textContent="Menu Item 2: Refer back to menu item 1",o.textContent="If it wasn't clear, this restaurant isn't Clara friendly",c.appendChild(a),c.appendChild(d),e.appendChild(t),e.appendChild(n),e.appendChild(c),e.appendChild(o)}()})),n.addEventListener("click",(()=>{c(),function(){const e=document.querySelector("#content"),t=document.createElement("h1"),n=document.createElement("p"),c=document.createElement("ul");t.textContent="This is the contact page",n.textContent="Please don't contact me";const o=document.createElement("li");o.textContent="Leonardo Capocci";const a=document.createElement("li");a.textContent="Role: Creator?";const d=document.createElement("li");d.textContent="email: veryRealEmail@notfake.com",c.appendChild(o),c.appendChild(a),c.appendChild(d),e.appendChild(t),e.appendChild(n),e.appendChild(c)}()})),o()})();