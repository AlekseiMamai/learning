(()=>{"use strict";function t(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}function e(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",e&&clearInterval(e)}window.addEventListener("DOMContentLoaded",(function(){const n=setTimeout((()=>e(".modal",n)),5e4);(function(t,e,n,o){let s=document.querySelectorAll(t),a=document.querySelectorAll(e),r=document.querySelector(n);function c(){a.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),s.forEach((t=>{t.classList.remove(o)}))}function i(t=0){a[t].classList.add("show","fade"),a[t].classList.remove("hide"),s[t].classList.add(o)}c(),i(),r.addEventListener("click",(function(e){const n=e.target;n&&n.classList.contains(t.slice(1))&&s.forEach(((t,e)=>{n==t&&(c(),i(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,s){const a=document.querySelectorAll(n),r=document.querySelector(o);a.forEach((t=>{t.addEventListener("click",(()=>e(o,s)))})),r.addEventListener("click",(e=>{e.target!==r&&""!=e.target.getAttribute("data-close")||t(o)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&r.classList.contains("show")&&t(o)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(o,s),window.removeEventListener("scroll",t))}))}("[data-modal]",".modal",n),function(t,e){function n(t){return t>=0&&t<10?"0"+t:t}!function(t,e){const o=document.querySelector(t),s=o.querySelector("#days"),a=o.querySelector("#hours"),r=o.querySelector("#minutes"),c=o.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date),n=Math.floor(e/864e5),o=Math.floor(e/1e3%60),s=Math.floor(e/1e3/60%60);return{total:e,days:n,hours:Math.floor(e/36e5%24),minutes:s,seconds:o}}(e);s.innerHTML=n(t.days),a.innerHTML=n(t.hours),r.innerHTML=n(t.minutes),c.innerHTML=n(t.seconds),t.total<=0&&clearInterval(i)}l()}(t,e)}(".timer","2022-06-11"),function(){class t{constructor(t,e,n,o,s,a,...r){this.src=t,this.alt=e,this.title=n,this.descr=o,this.price=s,this.classes=r,this.parent=document.querySelector(a),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.classes="menu__item",t.classList.add(this.classes)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(t)}}(async function(t){let e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return await e.json()})("http://localhost:3000/menu").then((e=>{e.forEach((({img:e,altimg:n,title:o,descr:s,price:a})=>{new t(e,n,o,s,a,".menu .container").render()}))}))}(),function(){const t=document.querySelector(".calculating__result span");let e,n,o,s,a;function r(){t.textContent=e&&n&&o&&s&&a?"female"===e?Math.round((447.6+9.2*o+3.1*n-4.3*s)*a):Math.round((88.36+13.4*o+4.8*n-5.7*s)*a):"____"}function c(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function i(t,n){const o=document.querySelectorAll(t);o.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(a=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),o.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),r()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":o=+e.value;break;case"age":s=+e.value}r()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,localStorage.setItem("ratio",1.375)),r(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(n,o){function s(n){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),e(".modal",o);const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `,document.querySelector(".modal").append(a),setTimeout((()=>{a.remove(),s.classList.add("show"),s.classList.remove("hide"),t(".modal")}),4e3)}document.querySelectorAll(n).forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();let n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",n);const o=new FormData(e);(async(t,e)=>{let n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((t=>{console.log(t),s("Спасибо! Скоро мы с вами свяжемся"),n.remove()})).catch((()=>{s("Что-то пошло не так...")})).finally((()=>{e.reset()}))}))}))}("form",n),function({container:t,slide:e,nextArrow:n,prevArrow:o,totalCounter:s,currentCounter:a,wrapper:r,field:c}){let i=0,l=1;const d=document.querySelectorAll(e),u=document.querySelector(t),m=document.querySelector(o),h=document.querySelector(n),g=document.querySelector(s),f=document.querySelector(a),y=document.querySelector(r),p=window.getComputedStyle(y).width,v=document.querySelector(c);d.length<10?(g.textContent=`0${d.length}`,f.textContent=`0${l}`):(g.textContent=d.length,f.textContent=l),v.style.width=100*d.length+"%",v.style.display="flex",v.style.transition="0.5s all",y.style.overflow="hidden",d.forEach((t=>{t.style.width=p})),u.style.position="relative";const _=document.createElement("ol"),L=[];_.classList.add("carousel-indicators"),_.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ",u.append(_);for(let t=0;t<d.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        ",0==t&&(e.style.opacity=1),_.append(e),L.push(e)}function w(t){return+t.replace(/\D/g,"")}h.addEventListener("click",(()=>{i==w(p)*(d.length-1)?i=0:i+=w(p),v.style.transform=`translateX(-${i}px)`,l==d.length?l=1:l++,d.length<10?f.textContent=`0${l}`:f.textContent=l,L.forEach((t=>t.style.opacity=".5")),L[l-1].style.opacity=1})),m.addEventListener("click",(()=>{0==i?i=w(p)*(d.length-1):i-=w(p),v.style.transform=`translateX(-${i}px)`,1==l?l=d.length:l--,d.length<10?f.textContent=`0${l}`:f.textContent=l,L.forEach((t=>t.style.opacity=".5")),L[l-1].style.opacity=1})),L.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");l=e,i=w(p)*(e-1),v.style.transform=`translateX(-${i}px)`,d.length<10?f.textContent=`0${l}`:f.textContent=l,L.forEach((t=>t.style.opacity=".5")),L[l-1].style.opacity=1}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))})();
//# sourceMappingURL=bundle.js.map