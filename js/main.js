"use strict";var t=document.querySelectorAll(".list__items"),e=document.querySelector("#selectLink"),i=document.querySelector("#selectLogo"),n=document.querySelector("#selectTitle"),s=document.querySelector("#selectInfo p"),o=document.querySelector("#modal"),r=document.querySelector("#modalBtnClose"),c=document.querySelector("#mainLogo"),l=document.querySelector(".overlay");t.forEach((function(t){t.addEventListener("click",(function(t){if(window.innerWidth<=1024){var r=this.getAttribute("data-src"),c=this.getAttribute("data-ref"),d=this.getAttribute("data-title"),a=this.querySelector(".list__info");n.textContent=d,s.textContent=a.textContent,i.setAttribute("src",r),e.setAttribute("href",c),o.classList.add("is-open"),l.classList.add("is-visible")}}))})),c.addEventListener("click",(function(t){if(window.innerWidth<=1024){var r=this.getAttribute("data-src"),c=this.getAttribute("data-ref"),d=this.getAttribute("data-title"),a=this.querySelector(".main-logo__info p");n.textContent=d,s.textContent=a.textContent,i.setAttribute("src",r),e.setAttribute("href",c),o.classList.add("is-open"),l.classList.add("is-visible")}})),l.addEventListener("click",(function(){o.classList.remove("is-open"),l.classList.remove("is-visible")})),r.addEventListener("click",(function(t){o.classList.remove("is-open"),l.classList.remove("is-visible")}));var d=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(d,"px")),window.addEventListener("resize",(function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}));