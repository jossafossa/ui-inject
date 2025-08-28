// ==UserScript==
// @name          UI Enhancer
// @namespace     http://tampermonkey.net/
// @version       ui-inject-1756389649975
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

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=(...n)=>{console.log("%c[github-extensions]%c","color: #f0db4f; font-weight: bold; background: #323330; padding: 2px 5px; border-radius: 3px;","color: #fff; font-weight: normal; background: #323330; padding: 2px 5px; border-radius: 3px;",...n)},u='[data-testid=top-bar-component]{position:relative}[data-testid=top-bar-component]:before{--light: rgb(255, 230, 0);--dark: brown;content:"";position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:999999999;mix-blend-mode:color-burn;opacity:.1;pointer-events:none;background-image:repeating-linear-gradient(45deg,var(--dark),var(--dark) 10px,var(--light) 10px,var(--light) 20px)}',f=()=>window.self!==window.top,m=()=>{if(f())return;const n=["navigation","blockNavigation","registerActionButton","mounted","notification","navigation","backdrop","header","export"];addEventListener("simplicateMessage",e=>{const t=e.detail,{action:o,payload:a,type:c}=t;d(`${c} zegt:
 ${o}:
`,a)});const r=document.querySelector("#root"),i=(e,t)=>{for(const o of e)if(o.type==="childList"){dispatchEvent(new CustomEvent("simplicateLoaded")),t.disconnect();break}};new MutationObserver(i).observe(r,{attributes:!0,childList:!0,subtree:!0}),addEventListener("simplicateLoaded",()=>{const e=window.messageBus;n.forEach(t=>{e.subscribe(t,o=>{dispatchEvent(new CustomEvent("simplicateMessage",{detail:{action:t,payload:o,type:"message"}}))})}),addEventListener("simplicateIframeMessage",t=>{const o=t.detail,{params:a}=o;a.forEach(({action:c,payload:p})=>{dispatchEvent(new CustomEvent("simplicateMessage",{detail:{action:c,payload:p,type:"iframe"}}))})})})},l=document.createElement("style");l.innerHTML=u;document.head.appendChild(l);d("UI enhancer loaded");m();
