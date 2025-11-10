// ==UserScript==
// @name          UI Enhancer
// @namespace     http://tampermonkey.net/
// @version       ui-inject-1762776622310
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

(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const d=(...r)=>{console.log("%c[ui-inject]%c","color: #f0db4f; font-weight: bold; background: #323330; padding: 2px 5px; border-radius: 3px;","color: #fff; font-weight: normal; background: #323330; padding: 2px 5px; border-radius: 3px;",...r)},u='[data-testid=top-bar-component]{position:relative}[data-testid=top-bar-component]:before{--light: rgb(255, 230, 0);--dark: brown;content:"";position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:999999999;mix-blend-mode:color-burn;opacity:.1;pointer-events:none;background-image:repeating-linear-gradient(45deg,var(--dark),var(--dark) 10px,var(--light) 10px,var(--light) 20px)}',f=()=>window.self!==window.top,m=()=>{if(f())return;const r=["navigation","blockNavigation","registerActionButton","mounted","notification","navigation","backdrop","header","export","simplicateApiV3Pending","simplicateApiV3Fulfilled","simplicateApiV3Rejected"];addEventListener("simplicateMessage",t=>{const e=t.detail,{action:o,payload:a,type:c}=e;d(`${c}: "${o}":
`,a)});const i=document.querySelector("#root"),n=(t,e)=>{for(const o of t)if(o.type==="childList"){dispatchEvent(new CustomEvent("simplicateLoaded")),e.disconnect();break}};new MutationObserver(n).observe(i,{attributes:!0,childList:!0,subtree:!0}),addEventListener("simplicateLoaded",()=>{const t=window.messageBus;r.forEach(e=>{d("Subscribing to action:",e),t.subscribe(e,o=>{console.log("Received message from messageBus:",e,o),dispatchEvent(new CustomEvent("simplicateMessage",{detail:{action:e,payload:o,type:"legacy-react"}}))})}),addEventListener("simplicateIframeMessage",e=>{const o=e.detail,{params:a}=o;a.forEach(({action:c,payload:p})=>{dispatchEvent(new CustomEvent("simplicateMessage",{detail:{action:c,payload:p,type:"iframe"}}))})})})},l=document.createElement("style");l.innerHTML=u;document.head.appendChild(l);d("UI enhancer loaded");m();
