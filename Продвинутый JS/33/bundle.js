(()=>{"use strict";var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function r(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function o(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var l=document.documentElement;function s(t){var e="";return t.fake&&(e=l.style.overflow,t.style.background="",t.style.overflow=l.style.overflow="hidden",l.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),l.style.overflow=e,l.offsetHeight)}function f(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function d(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),h=p?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},m=p?function(t,e){h(t,e)||t.classList.add(e)}:function(t,e){h(t,e)||(t.className+=" "+e)},y=p?function(t,e){h(t,e)&&t.classList.remove(e)}:function(t,e){h(t,e)&&(t.className=t.className.replace(e,""))};function g(t,e){return t.hasAttribute(e)}function x(t,e){return t.getAttribute(e)}function b(t){return void 0!==t.item}function w(t,e){if(t=b(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function C(t,e){t=b(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function M(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function T(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function A(t){return"none"!==window.getComputedStyle(t).display}function N(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function L(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var B=!1;try{var S=Object.defineProperty({},"passive",{get:function(){B=!0}});window.addEventListener("test",null,S)}catch(t){}var H=!!B&&{passive:!0};function O(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&H;t.addEventListener(i,e[i],a)}}function D(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&H;t.removeEventListener(n,e[n],i)}}function k(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var R=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var n=document,l=window,p={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},b={},B=t.useLocalStorage;if(B){var S=navigator.userAgent,H=new Date;try{(b=l.localStorage)?(b.setItem(H,H),B=b.getItem(H)==H,b.removeItem(H)):B=!1,B||(b={})}catch(t){B=!1}B&&(b.tnsApp&&b.tnsApp!==S&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){b.removeItem(t)})),localStorage.tnsApp=S)}var I=b.tC?r(b.tC):o(b,"tC",function(){var t=document,e=u(),n=s(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",l=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],f=0;f<3;f++)if(r=l[f],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?c(e,n):i.remove(),a}(),B),P=b.tPL?r(b.tPL):o(b,"tPL",function(){var t,e=document,n=u(),i=s(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var l=0;l<70;l++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?c(n,i):a.remove(),t}(),B),z=b.tMQ?r(b.tMQ):o(b,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=u(),i=s(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?c(n,i):a.remove(),"absolute"===t}(),B),W=b.tTf?r(b.tTf):o(b,"tTf",N("transform"),B),q=b.t3D?r(b.t3D):o(b,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=u(),a=s(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?c(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(W),B),F=b.tTDu?r(b.tTDu):o(b,"tTDu",N("transitionDuration"),B),j=b.tTDe?r(b.tTDe):o(b,"tTDe",N("transitionDelay"),B),V=b.tADu?r(b.tADu):o(b,"tADu",N("animationDuration"),B),G=b.tADe?r(b.tADe):o(b,"tADe",N("animationDelay"),B),Q=b.tTE?r(b.tTE):o(b,"tTE",L(F,"Transition"),B),X=b.tAE?r(b.tAE):o(b,"tAE",L(V,"Animation"),B),Y=l.console&&"function"==typeof l.console.warn,K=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],J={};if(K.forEach((function(e){if("string"==typeof t[e]){var i=t[e],a=n.querySelector(i);if(J[e]=i,!a||!a.nodeName)return void(Y&&console.warn("Can't find",t[e]));t[e]=a}})),!(t.container.children.length<1)){var U=t.responsive,_=t.nested,Z="carousel"===t.mode;if(U){0 in U&&(t=a(t,U[0]),delete U[0]);var $={};for(var tt in U){var et=U[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}U=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,rt=t.animateNormal}var ot,ut,lt="horizontal"===t.axis,st=n.createElement("div"),ct=n.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,ht=pt.length,mt=On(),yt=!1;U&&$n(),Z&&(ft.className+=" tns-vpfix");var gt,xt,bt,wt,Ct,Mt,Tt,Et,At=t.autoWidth,Nt=Pn("fixedWidth"),Lt=Pn("edgePadding"),Bt=Pn("gutter"),St=Rn(),Ht=Pn("center"),Ot=At?1:Math.floor(Pn("items")),Dt=Pn("slideBy"),kt=t.viewportMax||t.fixedWidthViewportWidth,Rt=Pn("arrowKeys"),It=Pn("speed"),Pt=t.rewind,zt=!Pt&&t.loop,Wt=Pn("autoHeight"),qt=Pn("controls"),Ft=Pn("controlsText"),jt=Pn("nav"),Vt=Pn("touch"),Gt=Pn("mouseDrag"),Qt=Pn("autoplay"),Xt=Pn("autoplayTimeout"),Yt=Pn("autoplayText"),Kt=Pn("autoplayHoverPause"),Jt=Pn("autoplayResetOnVisibility"),Ut=(null,Tt=Pn("nonce"),Et=document.createElement("style"),Tt&&Et.setAttribute("nonce",Tt),document.querySelector("head").appendChild(Et),Et.sheet?Et.sheet:Et.styleSheet),_t=t.lazyload,Zt=t.lazyloadSelector,$t=[],te=zt?(Ct=function(){if(At||Nt&&!kt)return ht-1;var e=Nt?"fixedWidth":"items",n=[];if((Nt||t[e]<ht)&&n.push(t[e]),U)for(var i in U){var a=U[i][e];a&&(Nt||a<ht)&&n.push(a)}return n.length||n.push(0),Math.ceil(Nt?kt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Mt=Z?Math.ceil((5*Ct-ht)/2):4*Ct-ht,Mt=Math.max(Ct,Mt),In("edgePadding")?Mt+1:Mt):0,ee=Z?ht+2*te:ht+te,ne=!(!Nt&&!At||zt),ie=Nt?Ei():null,ae=!Z||!zt,re=lt?"left":"top",oe="",ue="",le=Nt?function(){return Ht&&!zt?ht-1:Math.ceil(-ie/(Nt+Bt))}:At?function(){for(var t=0;t<ee;t++)if(gt[t]>=-ie)return t}:function(){return Ht&&Z&&!zt?ht-1:zt||Z?Math.max(0,ee-Math.ceil(Ot)):ee-1},se=Bn(Pn("startIndex")),ce=se,fe=(Ln(),0),de=At?null:le(),ve=t.preventActionWhenRunning,pe=t.swipeAngle,he=!pe||"?",me=!1,ye=t.onInit,ge=new k,xe=" tns-slider tns-"+t.mode,be=ft.id||(wt=window.tnsId,window.tnsId=wt?wt+1:1,"tns"+window.tnsId),we=Pn("disable"),Ce=!1,Me=t.freezable,Te=!(!Me||At)&&Zn(),Ee=!1,Ae={click:ki,keydown:function(t){t=ji(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ke.disabled||ki(t,-1):Je.disabled||ki(t,1))}},Ne={click:function(t){if(me){if(ve)return;Oi()}for(var e=Vi(t=ji(t));e!==$e&&!g(e,"data-nav");)e=e.parentNode;if(g(e,"data-nav")){var n=an=Number(x(e,"data-nav")),i=Nt||At?n*ht/en:n*Ot;Di(Re?n:Math.min(Math.ceil(i),ht-1),t),rn===n&&(fn&&Wi(),an=-1)}},keydown:function(t){t=ji(t);var e=n.activeElement;if(g(e,"data-nav")){var i=[p.LEFT,p.RIGHT,p.ENTER,p.SPACE].indexOf(t.keyCode),a=Number(x(e,"data-nav"));i>=0&&(0===i?a>0&&Fi(Ze[a-1]):1===i?a<en-1&&Fi(Ze[a+1]):(an=a,Di(a,t)))}}},Le={mouseover:function(){fn&&(Ii(),dn=!0)},mouseout:function(){dn&&(Ri(),dn=!1)}},Be={visibilitychange:function(){n.hidden?fn&&(Ii(),pn=!0):pn&&(Ri(),pn=!1)}},Se={keydown:function(t){t=ji(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&ki(t,0===e?-1:1)}},He={touchstart:Yi,touchmove:Ki,touchend:Ui,touchcancel:Ui},Oe={mousedown:Yi,mousemove:Ki,mouseup:Ui,mouseleave:Ui},De=In("controls"),ke=In("nav"),Re=!!At||t.navAsThumbnails,Ie=In("autoplay"),Pe=In("touch"),ze=In("mouseDrag"),We="tns-slide-active",qe="tns-slide-cloned",Fe="tns-complete",je={load:function(t){li(Vi(t))},error:function(t){var e;e=Vi(t),m(e,"failed"),si(e)}},Ve="force"===t.preventScrollOnTouch;if(De)var Ge,Qe,Xe=t.controlsContainer,Ye=t.controlsContainer?t.controlsContainer.outerHTML:"",Ke=t.prevButton,Je=t.nextButton,Ue=t.prevButton?t.prevButton.outerHTML:"",_e=t.nextButton?t.nextButton.outerHTML:"";if(ke)var Ze,$e=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=At?ht:Zi(),nn=0,an=-1,rn=Hn(),on=rn,un="tns-nav-active",ln="Carousel Page ",sn=" (Current Slide)";if(Ie)var cn,fn,dn,vn,pn,hn="forward"===t.autoplayDirection?1:-1,mn=t.autoplayButton,yn=t.autoplayButton?t.autoplayButton.outerHTML:"",gn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Pe||ze)var xn,bn,wn={},Cn={},Mn=!1,Tn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};At||Nn(we||Te),W&&(re=W,oe="translate",q?(oe+=lt?"3d(":"3d(0px, ",ue=lt?", 0px, 0px)":", 0px)"):(oe+=lt?"X(":"Y(",ue=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){if(In("gutter"),st.className="tns-outer",ct.className="tns-inner",st.id=be+"-ow",ct.id=be+"-iw",""===ft.id&&(ft.id=be),xe+=P||At?" tns-subpixel":" tns-no-subpixel",xe+=I?" tns-calc":" tns-no-calc",At&&(xe+=" tns-autowidth"),xe+=" tns-"+t.axis,ft.className+=xe,Z?((ot=n.createElement("div")).id=be+"-mw",ot.className="tns-ovh",st.appendChild(ot),ot.appendChild(ct)):st.appendChild(ct),Wt&&((ot||ct).className+=" tns-ah"),dt.insertBefore(st,ft),ct.appendChild(ft),v(pt,(function(t,e){m(t,"tns-item"),t.id||(t.id=be+"-item"+e),!Z&&rt&&m(t,rt),w(t,{"aria-hidden":"true",tabindex:"-1"})})),te){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),a=te;a--;){var r=a%ht,o=pt[r].cloneNode(!0);if(m(o,qe),C(o,"id"),i.insertBefore(o,i.firstChild),Z){var u=pt[ht-1-r].cloneNode(!0);m(u,qe),C(u,"id"),e.appendChild(u)}}ft.insertBefore(e,ft.firstChild),ft.appendChild(i),pt=ft.children}}(),function(){if(!Z)for(var e=se,n=se+Math.min(ht,Ot);e<n;e++){var i=pt[e];i.style.left=100*(e-se)/Ot+"%",m(i,nt),y(i,rt)}if(lt&&(P||At?(f(Ut,"#"+be+" > .tns-item","font-size:"+l.getComputedStyle(pt[0]).fontSize+";",d(Ut)),f(Ut,"#"+be,"font-size:0;",d(Ut))):Z&&v(pt,(function(t,e){t.style.marginLeft=function(t){return I?I+"("+100*t+"% / "+ee+")":100*t/ee+"%"}(e)}))),z){if(F){var a=ot&&t.autoHeight?Vn(t.speed):"";f(Ut,"#"+be+"-mw",a,d(Ut))}a=zn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),f(Ut,"#"+be+"-iw",a,d(Ut)),Z&&(a=lt&&!At?"width:"+Wn(t.fixedWidth,t.gutter,t.items)+";":"",F&&(a+=Vn(It)),f(Ut,"#"+be,a,d(Ut))),a=lt&&!At?qn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=Fn(t.gutter)),Z||(F&&(a+=Vn(It)),V&&(a+=Gn(It))),a&&f(Ut,"#"+be+" > .tns-item",a,d(Ut))}else Z&&Wt&&(ot.style[F]=It/1e3+"s"),ct.style.cssText=zn(Lt,Bt,Nt,Wt),Z&&lt&&!At&&(ft.style.width=Wn(Nt,Bt,Ot)),a=lt&&!At?qn(Nt,Bt,Ot):"",Bt&&(a+=Fn(Bt)),a&&f(Ut,"#"+be+" > .tns-item",a,d(Ut));if(U&&z)for(var r in U){r=parseInt(r);var o=U[r],u=(a="",""),s="",c="",p="",h=At?null:Pn("items",r),g=Pn("fixedWidth",r),x=Pn("speed",r),b=Pn("edgePadding",r),w=Pn("autoHeight",r),C=Pn("gutter",r);F&&ot&&Pn("autoHeight",r)&&"speed"in o&&(u="#"+be+"-mw{"+Vn(x)+"}"),("edgePadding"in o||"gutter"in o)&&(s="#"+be+"-iw{"+zn(b,C,g,x,w)+"}"),Z&&lt&&!At&&("fixedWidth"in o||"items"in o||Nt&&"gutter"in o)&&(c="width:"+Wn(g,C,h)+";"),F&&"speed"in o&&(c+=Vn(x)),c&&(c="#"+be+"{"+c+"}"),("fixedWidth"in o||Nt&&"gutter"in o||!Z&&"items"in o)&&(p+=qn(g,C,h)),"gutter"in o&&(p+=Fn(C)),!Z&&"speed"in o&&(F&&(p+=Vn(x)),V&&(p+=Gn(x))),p&&(p="#"+be+" > .tns-item{"+p+"}"),(a=u+s+c+p)&&Ut.insertRule("@media (min-width: "+r/16+"em) {"+a+"}",Ut.cssRules.length)}}(),Qn();var En=zt?Z?function(){var t=fe,e=de;t+=Dt,e-=Dt,Lt?(t+=1,e-=1):Nt&&(St+Bt)%(Nt+Bt)&&(e-=1),te&&(se>e?se-=ht:se<t&&(se+=ht))}:function(){if(se>de)for(;se>=fe+ht;)se-=ht;else if(se<fe)for(;se<=de-ht;)se+=ht}:function(){se=Math.max(fe,Math.min(de,se))},An=Z?function(){var t,e,n,i,a,r,o,u,l,s,c;Mi(ft,""),F||!It?(Li(),It&&A(ft)||Oi()):(t=ft,e=re,n=oe,i=ue,a=Ai(),r=It,o=Oi,u=Math.min(r,10),l=a.indexOf("%")>=0?"%":"px",a=a.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(a-s)/r*u,setTimeout((function a(){r-=u,s+=c,t.style[e]=n+s+l+i,r>0?setTimeout(a,u):o()}),u)),lt||_i()}:function(){$t=[];var t={};t[Q]=t[X]=Oi,D(pt[ce],t),O(pt[se],t),Bi(ce,nt,it,!0),Bi(se,rt,nt),Q&&X&&It&&A(ft)||Oi()};return{version:"2.9.4",getInfo:ta,events:ge,goTo:Di,play:function(){Qt&&!fn&&(zi(),vn=!1)},pause:function(){fn&&(Wi(),vn=!0)},isOn:yt,updateSliderHeight:hi,refresh:Qn,destroy:function(){if(Ut.disabled=!0,Ut.ownerNode&&Ut.ownerNode.remove(),D(l,{resize:Un}),Rt&&D(n,Se),Xe&&D(Xe,Ae),$e&&D($e,Ne),D(ft,Le),D(ft,Be),mn&&D(mn,{click:qi}),Qt&&clearInterval(cn),Z&&Q){var e={};e[Q]=Oi,D(ft,e)}Vt&&D(ft,He),Gt&&D(ft,Oe);var i=[vt,Ye,Ue,_e,tn,yn];for(var a in K.forEach((function(e,n){var a="container"===e?st:t[e];if("object"==typeof a&&a){var r=!!a.previousElementSibling&&a.previousElementSibling,o=a.parentNode;a.outerHTML=i[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),K=nt=it=at=rt=lt=st=ct=ft=dt=vt=pt=ht=ut=mt=At=Nt=Lt=Bt=St=Ot=Dt=kt=Rt=It=Pt=zt=Wt=Ut=_t=gt=$t=te=ee=ne=ie=ae=re=oe=ue=le=se=ce=fe=de=pe=he=me=ye=ge=xe=be=we=Ce=Me=Te=Ee=Ae=Ne=Le=Be=Se=He=Oe=De=ke=Re=Ie=Pe=ze=We=Fe=je=xt=qt=Ft=Xe=Ye=Ke=Je=Ge=Qe=jt=$e=tn=Ze=en=nn=an=rn=on=un=ln=sn=Qt=Xt=hn=Yt=Kt=mn=yn=Jt=gn=cn=fn=dn=vn=pn=wn=Cn=xn=Mn=bn=Tn=Vt=Gt=null,this)"rebuild"!==a&&(this[a]=null);yt=!1},rebuild:function(){return R(a(t,J))}}}function Nn(t){t&&(qt=jt=Vt=Gt=Rt=Qt=Kt=Jt=!1)}function Ln(){for(var t=Z?se-te:se;t<0;)t+=ht;return t%ht+1}function Bn(t){return t=t?Math.max(0,Math.min(zt?ht-1:ht-Ot,t)):0,Z?t+te:t}function Sn(t){for(null==t&&(t=se),Z&&(t-=te);t<0;)t+=ht;return Math.floor(t%ht)}function Hn(){var t,e=Sn();return t=Re?e:Nt||At?Math.ceil((e+1)*en/ht-1):Math.floor(e/Ot),!zt&&Z&&se===de&&(t=en-1),t}function On(){return l.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function Dn(t){return"top"===t?"afterbegin":"beforeend"}function kn(t){if(null!=t){var e,i,a=n.createElement("div");return t.appendChild(a),i=(e=a.getBoundingClientRect()).right-e.left,a.remove(),i||kn(t.parentNode)}}function Rn(){var t=Lt?2*Lt-Bt:0;return kn(dt)-t}function In(e){if(t[e])return!0;if(U)for(var n in U)if(U[n][e])return!0;return!1}function Pn(e,n){if(null==n&&(n=mt),"items"===e&&Nt)return Math.floor((St+Bt)/(Nt+Bt))||1;var i=t[e];if(U)for(var a in U)n>=parseInt(a)&&e in U[a]&&(i=U[a][e]);return"slideBy"===e&&"page"===i&&(i=Pn("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function zn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=lt?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(lt?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&a&&F&&i&&(r+=Vn(i)),r}function Wn(t,e,n){return t?(t+e)*ee+"px":I?I+"("+100*ee+"% / "+n+")":100*ee/n+"%"}function qn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var a=Z?ee:n;i=I?I+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==_?i+";":i+" !important;"}function Fn(t){var e="";return!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;"),e}function jn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Vn(t){return jn(F,18)+"transition-duration:"+t/1e3+"s;"}function Gn(t){return jn(V,17)+"animation-duration:"+t/1e3+"s;"}function Qn(){if(In("autoHeight")||At||!lt){var t=ft.querySelectorAll("img");v(t,(function(t){var e=t.src;_t||(e&&e.indexOf("data:image")<0?(t.src="",O(t,je),m(t,"loading"),t.src=e):li(t))})),e((function(){di(M(t),(function(){xt=!0}))})),In("autoHeight")&&(t=ci(se,Math.min(se+Ot-1,ee-1))),_t?Xn():e((function(){di(M(t),Xn)}))}else Z&&Ni(),Kn(),Jn()}function Xn(){if(At&&ht>1){var t=zt?se:ht-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Yn():setTimeout((function(){e()}),16)}()}else Yn()}function Yn(){lt&&!At||(mi(),At?(ie=Ei(),Me&&(Te=Zn()),de=le(),Nn(we||Te)):_i()),Z&&Ni(),Kn(),Jn()}function Kn(){if(yi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ri()+"</span>  of "+ht+"</div>"),bt=st.querySelector(".tns-liveregion .current"),Ie){var e=Qt?"stop":"start";mn?w(mn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(Dn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+gn[0]+e+gn[1]+Yt[0]+"</button>"),mn=st.querySelector("[data-action]")),mn&&O(mn,{click:qi}),Qt&&(zi(),Kt&&O(ft,Le),Jt&&O(ft,Be))}if(ke){if($e)w($e,{"aria-label":"Carousel Pagination"}),v(Ze=$e.children,(function(t,e){w(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":be})}));else{for(var n="",i=Re?"":'style="display:none"',a=0;a<ht;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+be+'" '+i+' aria-label="'+ln+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(Dn(t.navPosition),n),$e=st.querySelector(".tns-nav"),Ze=$e.children}if($i(),F){var r=F.substring(0,F.length-18).toLowerCase(),o="transition: all "+It/1e3+"s";r&&(o="-"+r+"-"+o),f(Ut,"[aria-controls^="+be+"-item]",o,d(Ut))}w(Ze[rn],{"aria-label":ln+(rn+1)+sn}),C(Ze[rn],"tabindex"),m(Ze[rn],un),O($e,Ne)}De&&(Xe||Ke&&Je||(st.insertAdjacentHTML(Dn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+be+'">'+Ft[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+be+'">'+Ft[1]+"</button></div>"),Xe=st.querySelector(".tns-controls")),Ke&&Je||(Ke=Xe.children[0],Je=Xe.children[1]),t.controlsContainer&&w(Xe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&w([Ke,Je],{"aria-controls":be,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(w(Ke,{"data-controls":"prev"}),w(Je,{"data-controls":"next"})),Ge=xi(Ke),Qe=xi(Je),Ci(),Xe?O(Xe,Ae):(O(Ke,Ae),O(Je,Ae))),ti()}function Jn(){if(Z&&Q){var e={};e[Q]=Oi,O(ft,e)}Vt&&O(ft,He,t.preventScrollOnTouch),Gt&&O(ft,Oe),Rt&&O(n,Se),"inner"===_?ge.on("outerResized",(function(){_n(),ge.emit("innerLoaded",ta())})):(U||Nt||At||Wt||!lt)&&O(l,{resize:Un}),Wt&&("outer"===_?ge.on("innerLoaded",fi):we||fi()),ui(),we?ii():Te&&ni(),ge.on("indexChanged",vi),"inner"===_&&ge.emit("innerLoaded",ta()),"function"==typeof ye&&ye(ta()),yt=!0}function Un(t){e((function(){_n(ji(t))}))}function _n(e){if(yt){"outer"===_&&ge.emit("outerResized",ta(e)),mt=On();var i,a=ut,r=!1;U&&($n(),(i=a!==ut)&&ge.emit("newBreakpointStart",ta(e)));var o,u,l=Ot,s=we,c=Te,p=Rt,h=qt,g=jt,x=Vt,b=Gt,w=Qt,C=Kt,M=Jt,A=se;if(i){var N=Nt,L=Wt,B=Ft,S=Ht,H=Yt;if(!z)var k=Bt,R=Lt}if(Rt=Pn("arrowKeys"),qt=Pn("controls"),jt=Pn("nav"),Vt=Pn("touch"),Ht=Pn("center"),Gt=Pn("mouseDrag"),Qt=Pn("autoplay"),Kt=Pn("autoplayHoverPause"),Jt=Pn("autoplayResetOnVisibility"),i&&(we=Pn("disable"),Nt=Pn("fixedWidth"),It=Pn("speed"),Wt=Pn("autoHeight"),Ft=Pn("controlsText"),Yt=Pn("autoplayText"),Xt=Pn("autoplayTimeout"),z||(Lt=Pn("edgePadding"),Bt=Pn("gutter"))),Nn(we),St=Rn(),lt&&!At||we||(mi(),lt||(_i(),r=!0)),(Nt||At)&&(ie=Ei(),de=le()),(i||Nt)&&(Ot=Pn("items"),Dt=Pn("slideBy"),(u=Ot!==l)&&(Nt||At||(de=le()),En())),i&&we!==s&&(we?ii():function(){if(Ce){if(Ut.disabled=!1,ft.className+=xe,Ni(),zt)for(var t=te;t--;)Z&&E(pt[t]),E(pt[ee-t-1]);if(!Z)for(var e=se,n=se+ht;e<n;e++){var i=pt[e],a=e<se+Ot?nt:rt;i.style.left=100*(e-se)/Ot+"%",m(i,a)}ei(),Ce=!1}}()),Me&&(i||Nt||At)&&(Te=Zn())!==c&&(Te?(Li(Ai(Bn(0))),ni()):(function(){if(Ee){if(Lt&&z&&(ct.style.margin=""),te)for(var t="tns-transparent",e=te;e--;)Z&&y(pt[e],t),y(pt[ee-e-1],t);ei(),Ee=!1}}(),r=!0)),Nn(we||Te),Qt||(Kt=Jt=!1),Rt!==p&&(Rt?O(n,Se):D(n,Se)),qt!==h&&(qt?Xe?E(Xe):(Ke&&E(Ke),Je&&E(Je)):Xe?T(Xe):(Ke&&T(Ke),Je&&T(Je))),jt!==g&&(jt?(E($e),$i()):T($e)),Vt!==x&&(Vt?O(ft,He,t.preventScrollOnTouch):D(ft,He)),Gt!==b&&(Gt?O(ft,Oe):D(ft,Oe)),Qt!==w&&(Qt?(mn&&E(mn),fn||vn||zi()):(mn&&T(mn),fn&&Wi())),Kt!==C&&(Kt?O(ft,Le):D(ft,Le)),Jt!==M&&(Jt?O(n,Be):D(n,Be)),i){if(Nt===N&&Ht===S||(r=!0),Wt!==L&&(Wt||(ct.style.height="")),qt&&Ft!==B&&(Ke.innerHTML=Ft[0],Je.innerHTML=Ft[1]),mn&&Yt!==H){var I=Qt?1:0,P=mn.innerHTML,W=P.length-H[I].length;P.substring(W)===H[I]&&(mn.innerHTML=P.substring(0,W)+Yt[I])}}else Ht&&(Nt||At)&&(r=!0);if((u||Nt&&!At)&&(en=Zi(),$i()),(o=se!==A)?(ge.emit("indexChanged",ta()),r=!0):u?o||vi():(Nt||At)&&(ui(),yi(),ai()),u&&!Z&&function(){for(var t=se+Math.min(ht,Ot),e=ee;e--;){var n=pt[e];e>=se&&e<t?(m(n,"tns-moving"),n.style.left=100*(e-se)/Ot+"%",m(n,nt),y(n,rt)):n.style.left&&(n.style.left="",m(n,rt),y(n,nt)),y(n,it)}setTimeout((function(){v(pt,(function(t){y(t,"tns-moving")}))}),300)}(),!we&&!Te){if(i&&!z&&(Lt===R&&Bt===k||(ct.style.cssText=zn(Lt,Bt,Nt,It,Wt)),lt)){Z&&(ft.style.width=Wn(Nt,Bt,Ot));var q=qn(Nt,Bt,Ot)+Fn(Bt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Ut,d(Ut)-1),f(Ut,"#"+be+" > .tns-item",q,d(Ut))}Wt&&fi(),r&&(Ni(),ce=se)}i&&ge.emit("newBreakpointEnd",ta(e))}}function Zn(){if(!Nt&&!At)return ht<=(Ht?Ot-(Ot-1)/2:Ot);var t=Nt?(Nt+Bt)*ht:gt[ht],e=Lt?St+2*Lt:St+Bt;return Ht&&(e-=Nt?(St-Nt)/2:(St-(gt[se+1]-gt[se]-Bt))/2),t<=e}function $n(){for(var t in ut=0,U)t=parseInt(t),mt>=t&&(ut=t)}function ti(){!Qt&&mn&&T(mn),!jt&&$e&&T($e),qt||(Xe?T(Xe):(Ke&&T(Ke),Je&&T(Je)))}function ei(){Qt&&mn&&E(mn),jt&&$e&&E($e),qt&&(Xe?E(Xe):(Ke&&E(Ke),Je&&E(Je)))}function ni(){if(!Ee){if(Lt&&(ct.style.margin="0px"),te)for(var t="tns-transparent",e=te;e--;)Z&&m(pt[e],t),m(pt[ee-e-1],t);ti(),Ee=!0}}function ii(){if(!Ce){if(Ut.disabled=!0,ft.className=ft.className.replace(xe.substring(1),""),C(ft,["style"]),zt)for(var t=te;t--;)Z&&T(pt[t]),T(pt[ee-t-1]);if(lt&&Z||C(ct,["style"]),!Z)for(var e=se,n=se+ht;e<n;e++){var i=pt[e];C(i,["style"]),y(i,nt),y(i,rt)}ti(),Ce=!0}}function ai(){var t=ri();bt.innerHTML!==t&&(bt.innerHTML=t)}function ri(){var t=oi(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function oi(t){null==t&&(t=Ai());var e,n,i,a=se;if(Ht||Lt?(At||Nt)&&(n=-(parseFloat(t)+Lt),i=n+St+2*Lt):At&&(n=gt[se],i=n+St),At)gt.forEach((function(t,r){r<ee&&((Ht||Lt)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(Nt){var r=Nt+Bt;Ht||Lt?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(St/r)-1}else if(Ht||Lt){var o=Ot-1;if(Ht?(a-=o/2,e=se+o/2):e=se+o,Lt){var u=Lt*Ot/St;a-=u,e+=u}a=Math.floor(a),e=Math.ceil(e)}else e=a+Ot-1;a=Math.max(a,0),e=Math.min(e,ee-1)}return[a,e]}function ui(){if(_t&&!we){var t=oi();t.push(Zt),ci.apply(null,t).forEach((function(t){if(!h(t,Fe)){var e={};e[Q]=function(t){t.stopPropagation()},O(t,e),O(t,je),t.src=x(t,"data-src");var n=x(t,"data-srcset");n&&(t.srcset=n),m(t,"loading")}}))}}function li(t){m(t,"loaded"),si(t)}function si(t){m(t,Fe),y(t,"loading"),D(t,je)}function ci(t,e,n){var i=[];for(n||(n="img");t<=e;)v(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function fi(){var t=ci.apply(null,oi());e((function(){di(t,hi)}))}function di(t,n){return xt?n():(t.forEach((function(e,n){!_t&&e.complete&&si(e),h(e,Fe)&&t.splice(n,1)})),t.length?void e((function(){di(t,n)})):n())}function vi(){ui(),yi(),ai(),Ci(),function(){if(jt&&(rn=an>=0?an:Hn(),an=-1,rn!==on)){var t=Ze[on],e=Ze[rn];w(t,{tabindex:"-1","aria-label":ln+(on+1)}),y(t,un),w(e,{"aria-label":ln+(rn+1)+sn}),C(e,"tabindex"),m(e,un),on=rn}}()}function pi(t,e){for(var n=[],i=t,a=Math.min(t+e,ee);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function hi(){var t=Wt?pi(se,Ot):pi(te,ht),e=ot||ct;e.style.height!==t&&(e.style.height=t+"px")}function mi(){gt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];v(pt,(function(i,a){a&&gt.push(i.getBoundingClientRect()[t]-n),a===ee-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function yi(){var t=oi(),e=t[0],n=t[1];v(pt,(function(t,i){i>=e&&i<=n?g(t,"aria-hidden")&&(C(t,["aria-hidden","tabindex"]),m(t,We)):g(t,"aria-hidden")||(w(t,{"aria-hidden":"true",tabindex:"-1"}),y(t,We))}))}function gi(t){return t.nodeName.toLowerCase()}function xi(t){return"button"===gi(t)}function bi(t){return"true"===t.getAttribute("aria-disabled")}function wi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ci(){if(qt&&!Pt&&!zt){var t=Ge?Ke.disabled:bi(Ke),e=Qe?Je.disabled:bi(Je),n=se<=fe,i=!Pt&&se>=de;n&&!t&&wi(Ge,Ke,!0),!n&&t&&wi(Ge,Ke,!1),i&&!e&&wi(Qe,Je,!0),!i&&e&&wi(Qe,Je,!1)}}function Mi(t,e){F&&(t.style[F]=e)}function Ti(t){return null==t&&(t=se),At?(St-(Lt?Bt:0)-(gt[t+1]-gt[t]-Bt))/2:Nt?(St-Nt)/2:(Ot-1)/2}function Ei(){var t=St+(Lt?Bt:0)-(Nt?(Nt+Bt)*ee:gt[ee]);return Ht&&!zt&&(t=Nt?-(Nt+Bt)*(ee-1)-Ti():Ti(ee-1)-gt[ee-1]),t>0&&(t=0),t}function Ai(t){var e;if(null==t&&(t=se),lt&&!At)if(Nt)e=-(Nt+Bt)*t,Ht&&(e+=Ti());else{var n=W?ee:Ot;Ht&&(t-=Ti()),e=100*-t/n}else e=-gt[t],Ht&&At&&(e+=Ti());return ne&&(e=Math.max(e,ie)),e+(!lt||At||Nt?"px":"%")}function Ni(t){Mi(ft,"0s"),Li(t)}function Li(t){null==t&&(t=Ai()),ft.style[re]=oe+t+ue}function Bi(t,e,n,i){var a=t+Ot;zt||(a=Math.min(a,ee));for(var r=t;r<a;r++){var o=pt[r];i||(o.style.left=100*(r-se)/Ot+"%"),at&&j&&(o.style[j]=o.style[G]=at*(r-t)/1e3+"s"),y(o,e),m(o,n),i&&$t.push(o)}}function Si(t,e){ae&&En(),(se!==ce||e)&&(ge.emit("indexChanged",ta()),ge.emit("transitionStart",ta()),Wt&&fi(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&Wi(),me=!0,An())}function Hi(t){return t.toLowerCase().replace(/-/g,"")}function Oi(t){if(Z||me){if(ge.emit("transitionEnd",ta(t)),!Z&&$t.length>0)for(var e=0;e<$t.length;e++){var n=$t[e];n.style.left="",G&&j&&(n.style[G]="",n.style[j]=""),y(n,it),m(n,rt)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Hi(t.propertyName)===Hi(re)){if(!ae){var i=se;En(),se!==i&&(ge.emit("indexChanged",ta()),Ni())}"inner"===_&&ge.emit("innerLoaded",ta()),me=!1,ce=se}}}function Di(t,e){if(!Te)if("prev"===t)ki(e,-1);else if("next"===t)ki(e,1);else{if(me){if(ve)return;Oi()}var n=Sn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?ht-Ot-n:ht-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(ht-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Ot){var a=i>0?1:-1;i+=se+i-ht>=fe?ht*a:2*ht*a*-1}se+=i,Z&&zt&&(se<fe&&(se+=ht),se>de&&(se-=ht)),Sn(se)!==Sn(ce)&&Si(e)}}function ki(t,e){if(me){if(ve)return;Oi()}var n;if(!e){for(var i=Vi(t=ji(t));i!==Xe&&[Ke,Je].indexOf(i)<0;)i=i.parentNode;var a=[Ke,Je].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(Pt){if(se===fe&&-1===e)return void Di("last",t);if(se===de&&1===e)return void Di("first",t)}e&&(se+=Dt*e,At&&(se=Math.floor(se)),Si(n||t&&"keydown"===t.type?t:null))}function Ri(){cn=setInterval((function(){ki(null,hn)}),Xt),fn=!0}function Ii(){clearInterval(cn),fn=!1}function Pi(t,e){w(mn,{"data-action":t}),mn.innerHTML=gn[0]+t+gn[1]+e}function zi(){Ri(),mn&&Pi("stop",Yt[1])}function Wi(){Ii(),mn&&Pi("start",Yt[0])}function qi(){fn?(Wi(),vn=!0):(zi(),vn=!1)}function Fi(t){t.focus()}function ji(t){return Gi(t=t||l.event)?t.changedTouches[0]:t}function Vi(t){return t.target||l.event.srcElement}function Gi(t){return t.type.indexOf("touch")>=0}function Qi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Xi(){return r=Cn.y-wn.y,o=Cn.x-wn.x,e=Math.atan2(r,o)*(180/Math.PI),n=pe,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Yi(t){if(me){if(ve)return;Oi()}Qt&&fn&&Ii(),Mn=!0,bn&&(i(bn),bn=null);var e=ji(t);ge.emit(Gi(t)?"touchStart":"dragStart",ta(t)),!Gi(t)&&["img","a"].indexOf(gi(Vi(t)))>=0&&Qi(t),Cn.x=wn.x=e.clientX,Cn.y=wn.y=e.clientY,Z&&(xn=parseFloat(ft.style[re].replace(oe,"")),Mi(ft,"0s"))}function Ki(t){if(Mn){var n=ji(t);Cn.x=n.clientX,Cn.y=n.clientY,Z?bn||(bn=e((function(){Ji(t)}))):("?"===he&&(he=Xi()),he&&(Ve=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ve&&t.preventDefault()}}function Ji(t){if(he){if(i(bn),Mn&&(bn=e((function(){Ji(t)}))),"?"===he&&(he=Xi()),he){!Ve&&Gi(t)&&(Ve=!0);try{t.type&&ge.emit(Gi(t)?"touchMove":"dragMove",ta(t))}catch(t){}var n=xn,a=Tn(Cn,wn);!lt||Nt||At?(n+=a,n+="px"):(n+=W?a*Ot*100/((St+Bt)*ee):100*a/(St+Bt),n+="%"),ft.style[re]=oe+n+ue}}else Mn=!1}function Ui(n){if(Mn){bn&&(i(bn),bn=null),Z&&Mi(ft,""),Mn=!1;var a=ji(n);Cn.x=a.clientX,Cn.y=a.clientY;var r=Tn(Cn,wn);if(Math.abs(r)){if(!Gi(n)){var o=Vi(n);O(o,{click:function t(e){Qi(e),D(o,{click:t})}})}Z?bn=e((function(){if(lt&&!At){var t=-r*Ot/(St+Bt);t=r>0?Math.floor(t):Math.ceil(t),se+=t}else{var e=-(xn+r);if(e<=0)se=fe;else if(e>=gt[ee-1])se=de;else for(var i=0;i<ee&&e>=gt[i];)se=i,e>gt[i]&&r<0&&(se+=1),i++}Si(n,r),ge.emit(Gi(n)?"touchEnd":"dragEnd",ta(n))})):he&&ki(n,r>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Ve=!1),pe&&(he="?"),Qt&&!fn&&Ri()}function _i(){(ot||ct).style.height=gt[se+Ot]-gt[se]+"px"}function Zi(){var t=Nt?(Nt+Bt)*ht/St:ht/Ot;return Math.min(Math.ceil(t),ht)}function $i(){if(jt&&!Re&&en!==nn){var t=nn,e=en,n=E;for(nn>en&&(t=en,e=nn,n=T);t<e;)n(Ze[t]),t++;nn=en}}function ta(t){return{container:ft,slideItems:pt,navContainer:$e,navItems:Ze,controlsContainer:Xe,hasControls:De,prevButton:Ke,nextButton:Je,items:Ot,slideBy:Dt,cloneCount:te,slideCount:ht,slideCountNew:ee,index:se,indexCached:ce,displayIndex:Ln(),navCurrentIndex:rn,navCurrentIndexCached:on,pages:en,pagesCached:nn,sheet:Ut,isOn:yt,event:t||{}}}Y&&console.warn("No slides found in",t.container)};R({container:".my-slider",items:1,slideBy:"page",autoplay:!1})})();
//# sourceMappingURL=bundle.js.map