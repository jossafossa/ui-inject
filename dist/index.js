// ==UserScript==
// @name          Github Enhancer
// @namespace     http://tampermonkey.net/
// @version       1753707330566
// @description   Enhance your Github experience with additional features.
// @author        Jossafossa
// @match         https://github.com/*
// @icon          https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant         none
// @grant         GM_setValue
// @grant         GM_getValue
// @grant         GM_registerMenuCommand
// @downloadURL   https://raw.githubusercontent.com/jossafossa/github-inject/refs/heads/master/dist/index.js
// @updateURL     https://raw.githubusercontent.com/jossafossa/github-inject/refs/heads/master/dist/index.js
// ==/UserScript==

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=".extended_filter{resize:horizontal;overflow:auto}",n=document.createElement("style");n.innerHTML=d;document.head.appendChild(n);console.log(`asda
  sdasd
  asda
  sda
  sda
  sd
  asd
  asd
  asd
  ads

  `);
