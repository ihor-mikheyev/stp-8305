/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const c={popupWindow:document.getElementById("popup"),acceptButton:document.getElementById("button-accept"),declineButton:document.getElementById("button-decline")};a();c.acceptButton.addEventListener("click",s);c.declineButton.addEventListener("click",u);function s(){localStorage.setItem("popup-cookie","accepted"),c.popupWindow.style.display="none"}function u(){localStorage.setItem("popup-cookie","declined"),c.popupWindow.style.display="none"}function a(){localStorage.getItem("popup-cookie")===null||localStorage.getItem("popup-cookie")==="declined"?c.popupWindow.style.display="block":c.popupWindow.style.display="none"}(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n);function n(){o.modal.classList.toggle("is-open")}})();document.getElementById("toggleMenu").addEventListener("click",function(){document.getElementById("mobileMenu").classList.toggle("open")});var p=document.querySelectorAll(".nav-list-link-modal"),m=document.querySelector(".modal-overlay"),f=document.querySelector(".mobile-menu-close-btn");function r(){m.classList.remove("is-open")}f.addEventListener("click",function(){r()});p.forEach(function(o){o.addEventListener("click",function(){r()})});
//# sourceMappingURL=commonHelpers2.js.map
