/* empty css                      */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();const r={popupWindow:document.getElementById("popup"),acceptButton:document.getElementById("button-accept"),declineButton:document.getElementById("button-decline")};f();r.acceptButton.addEventListener("click",p);r.declineButton.addEventListener("click",m);function p(){localStorage.setItem("popup-cookie","accepted"),r.popupWindow.style.display="none"}function m(){localStorage.setItem("popup-cookie","declined"),r.popupWindow.style.display="none"}function f(){localStorage.getItem("popup-cookie")===null||localStorage.getItem("popup-cookie")==="declined"?r.popupWindow.style.display="block":r.popupWindow.style.display="none"}(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-open")}})();document.getElementById("toggleMenu").addEventListener("click",function(){document.getElementById("mobileMenu").classList.toggle("open")});var y=document.querySelectorAll(".nav-list-link-modal"),g=document.querySelector(".modal-overlay"),v=document.querySelector(".mobile-menu-close-btn");function u(){g.classList.remove("is-open")}v.addEventListener("click",function(){u()});y.forEach(function(o){o.addEventListener("click",function(){u()})});document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("reviewList"),t=document.querySelectorAll(".review-card"),l=document.getElementById("prevBtn"),c=document.getElementById("nextBtn");if(t.length===0)return;let e=0;const n=t[0].offsetWidth+8;function i(){const d=-(t.length-1)*n;let s=-e*n;s<d&&(s=d),o.style.transform=`translateX(${s}px)`}l.addEventListener("click",function(){e>0&&(e--,i())}),c.addEventListener("click",function(){e<t.length-1&&(e++,i())})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-item").forEach(t=>{const l=t.querySelector(".accordion-btn");t.querySelector(".faq-list-text");const c=l.querySelector("use");l.addEventListener("click",()=>{t.classList.contains("open")?(t.classList.remove("open"),c.setAttribute("href","./img/sprite.svg#icon-chevron-down")):(t.classList.add("open"),c.setAttribute("href","./img/sprite.svg#icon-chevron-up"))})})});document.addEventListener("DOMContentLoaded",a);function a(){return window.innerWidth<1200}a()?new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:30,loop:!0,navigation:{nextEl:"#nextSlide",prevEl:"#prevSlide"}}):(document.querySelector(".features-list").style.display="flex",document.querySelector(".features-list").style.flexDirection="column",document.querySelector(".nav-btn").style.display="none");new Swiper(".myGallerySwiper",{slidesPerView:1,spaceBetween:30,loop:!0,navigation:{nextEl:"#nextGallerySlide",prevEl:"#prevGallerySlide"}});
//# sourceMappingURL=commonHelpers2.js.map
