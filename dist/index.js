// ==UserScript==
// @name          UI Enhancer
// @namespace     http://tampermonkey.net/
// @version       1756388149484
// @description   Enhance your Github experience with additional features.
// @author        Jossafossa
// @match         *://*/*
// @icon          https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant         none
// @grant         GM_setValue
// @grant         GM_getValue
// @grant         GM_registerMenuCommand
// @downloadURL   https://raw.githubusercontent.com/jossafossa/ui-inject/refs/heads/master/dist/index.js
// @updateURL     https://raw.githubusercontent.com/jossafossa/ui-inject/refs/heads/master/dist/index.js
// ==/UserScript==

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c='.extended_filter{resize:horizontal;overflow:auto}[data-testid=top-bar-component]{position:relative}[data-testid=top-bar-component]:before{--light: rgb(255, 230, 0);--dark: brown;content:"";position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:999999999;mix-blend-mode:color-burn;opacity:.1;pointer-events:none;background-image:repeating-linear-gradient(45deg,var(--dark),var(--dark) 10px,var(--light) 10px,var(--light) 20px)}',i=document.createElement("style");i.innerHTML=c;document.head.appendChild(i);console.log("UI enhancer loaded");
