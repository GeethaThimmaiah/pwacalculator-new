if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>i(e,c),a={module:{uri:c},exports:o,require:t};s[c]=Promise.all(n.map((e=>a[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-2ee34cca"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icon-192.png",revision:"75adc28cf1fc8361d42223449ba4dc26"},{url:"assets/icon-384.png",revision:"a6b835302e63588a265cb4e59c74a40a"},{url:"assets/icon-512.png",revision:"0e6ac5b90a70b8986de9497ea9277b5c"},{url:"index.css",revision:"23f97a5f8f4e2c65029cb57763daf028"},{url:"index.html",revision:"8ae1326e9ef388e8c4d99aafee21e7b3"},{url:"index.js",revision:"9e3b393fd58a9926237950804d8996c7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
