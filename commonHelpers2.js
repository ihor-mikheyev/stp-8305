/* empty css                      */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const i={popupWindow:document.getElementById("popup"),acceptButton:document.getElementById("button-accept"),declineButton:document.getElementById("button-decline")};f();i.acceptButton.addEventListener("click",p);i.declineButton.addEventListener("click",m);function p(){localStorage.setItem("popup-cookie","accepted"),i.popupWindow.style.display="none"}function m(){localStorage.setItem("popup-cookie","declined"),i.popupWindow.style.display="none"}function f(){localStorage.getItem("popup-cookie")===null||localStorage.getItem("popup-cookie")==="declined"?i.popupWindow.style.display="block":i.popupWindow.style.display="none"}(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-open")}})();document.getElementById("toggleMenu").addEventListener("click",function(){document.getElementById("mobileMenu").classList.toggle("open")});var y=document.querySelectorAll(".nav-list-link-modal"),g=document.querySelector(".modal-overlay"),v=document.querySelector(".mobile-menu-close-btn");function u(){g.classList.remove("is-open")}v.addEventListener("click",function(){u()});y.forEach(function(o){o.addEventListener("click",function(){u()})});document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("reviewList"),t=document.querySelectorAll(".review-card"),r=document.getElementById("prevBtn"),c=document.getElementById("nextBtn");if(t.length===0)return;let e=0;const n=t[0].offsetWidth+8;function l(){const d=-(t.length-1)*n;let s=-e*n;s<d&&(s=d),o.style.transform=`translateX(${s}px)`}r.addEventListener("click",function(){e>0&&(e--,l())}),c.addEventListener("click",function(){e<t.length-1&&(e++,l())})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-item").forEach(t=>{const r=t.querySelector(".accordion-btn"),c=t.querySelector(".accordion-icon use"),e=t.querySelector(".faq-list-text");r.addEventListener("click",()=>{t.classList.toggle("open"),t.classList.contains("open")?(e.style.maxHeight=e.scrollHeight+"px",c.setAttribute("href","./img/sprite.svg#icon-chevron-up")):(e.style.maxHeight=null,c.setAttribute("href","./img/sprite.svg#icon-chevron-down"))})})});document.addEventListener("DOMContentLoaded",a);function a(){return window.innerWidth<1200}a()?new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:30,loop:!0,navigation:{nextEl:"#nextSlide",prevEl:"#prevSlide"}}):(document.querySelector(".features-list").style.display="flex",document.querySelector(".features-list").style.flexDirection="column",document.querySelector(".nav-btn").style.display="none");new Swiper(".myGallerySwiper",{slidesPerView:1,spaceBetween:30,loop:!0,navigation:{nextEl:"#nextGallerySlide",prevEl:"#prevGallerySlide"}});
//# sourceMappingURL=commonHelpers2.js.map
