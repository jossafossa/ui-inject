// ==UserScript==
// @name          UI Enhancer
// @namespace     http://tampermonkey.net/
// @version       ui-inject-1762776316963
// @description   
// @author        Jossafossa
// @match         *://*.internal/*
// @icon          https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant         none
// @grant         GM_setValue
// @grant         GM_getValue
// @grant         GM_registerMenuCommand
// @downloadURL   https://raw.githubusercontent.com/jossafossa/ui-inject/refs/heads/main/dist/index.js
// @updateURL     https://raw.githubusercontent.com/jossafossa/ui-inject/refs/heads/main/dist/index.js
// ==/UserScript==

(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=(...r)=>{console.log("%c[ui-inject]%c","color: #f0db4f; font-weight: bold; background: #323330; padding: 2px 5px; border-radius: 3px;","color: #fff; font-weight: normal; background: #323330; padding: 2px 5px; border-radius: 3px;",...r)},u='[data-testid=top-bar-component]{position:relative}[data-testid=top-bar-component]:before{--light: rgb(255, 230, 0);--dark: brown;content:"";position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:999999999;mix-blend-mode:color-burn;opacity:.1;pointer-events:none;background-image:repeating-linear-gradient(45deg,var(--dark),var(--dark) 10px,var(--light) 10px,var(--light) 20px)}',f=()=>window.self!==window.top,m=()=>{if(f())return;const r=["navigation","blockNavigation","registerActionButton","mounted","notification","navigation","backdrop","header","export","simplicateApiV3Pending","simplicateApiV3Fulfilled","simplicateApiV3Rejected"];addEventListener("simplicateMessage",e=>{const t=e.detail,{action:o,payload:a,type:c}=t;d(`${c}: "${o}":
`,a)});const i=document.querySelector("#root"),n=(e,t)=>{for(const o of e)if(o.type==="childList"){dispatchEvent(new CustomEvent("simplicateLoaded")),t.disconnect();break}};new MutationObserver(n).observe(i,{attributes:!0,childList:!0,subtree:!0}),addEventListener("simplicateLoaded",()=>{const e=window.messageBus;r.forEach(t=>{d("Subscribing to action:",t),e.subscribe(t,o=>{dispatchEvent(new CustomEvent("simplicateMessage",{detail:{action:t,payload:o,type:"legacy-react"}}))})}),addEventListener("simplicateIframeMessage",t=>{const o=t.detail,{params:a}=o;a.forEach(({action:c,payload:p})=>{dispatchEvent(new CustomEvent("simplicateMessage",{detail:{action:c,payload:p,type:"iframe"}}))})})})},l=document.createElement("style");l.innerHTML=u;document.head.appendChild(l);d("UI enhancer loaded");m();
