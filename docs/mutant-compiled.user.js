// ==UserScript==
// @name         Svelte Userscript
// @namespace    https://svelte.dev/
// @version      0.1
// @description  try to take over the world!
// @author       cohost.org/lexi
// @match        https://cohost.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cohost.org
// @grant        GM_xmlhttpRequest
// ==/UserScript==

__init=false;window.onload=(async _=>{if(__init)return;__init=true;let style = document.createElement('style');style.innerHTML = `.input.svelte-12fmvmh.svelte-12fmvmh{height:1em}.bg-click.svelte-12fmvmh.svelte-12fmvmh{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.3);z-index:100}.picker.svelte-12fmvmh.svelte-12fmvmh{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;background:white;color:#000;border-radius:10px;z-index:101;display:flex;flex-direction:column;padding:10px}.categories.svelte-12fmvmh.svelte-12fmvmh{display:flex;flex-direction:row;flex-wrap:wrap}.categories.svelte-12fmvmh>div.svelte-12fmvmh:not(:last-child),.search.svelte-12fmvmh>input.svelte-12fmvmh{margin-right:10px}.search.svelte-12fmvmh.svelte-12fmvmh{display:flex;flex-direction:row;align-items:center;margin-bottom:10px}.search.svelte-12fmvmh>input.svelte-12fmvmh{flex:1}.emojis.svelte-12fmvmh.svelte-12fmvmh{display:flex;flex-direction:row;flex-wrap:wrap;overflow-y:scroll;font-size:200%}.emoji.svelte-12fmvmh.svelte-12fmvmh{margin:2px 5px}.highlight.svelte-12fmvmh.svelte-12fmvmh{background:#0ff}.customize.svelte-12fmvmh.svelte-12fmvmh{margin-left:auto}.hr.svelte-12fmvmh.svelte-12fmvmh{height:1px;background:#000;margin:5px 0}`;document.head.appendChild(style);;!function(){"use strict";function t(t){if("string"!=typeof t&&(t=""+t),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function e(t){return"string"!=typeof t&&(t=""+t),t}function r(t){this.map={},t instanceof r?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function o(t){return t.bodyUsed?p.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function n(t){return new p(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function i(t){var e=new FileReader;return e.readAsArrayBuffer(t),n(e)}function s(t){var e=new FileReader;return e.readAsText(t),n(e)}function a(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(c.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(c.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else{if(t)throw Error("unsupported BodyInit type");this._bodyText=""}},c.blob?(this.blob=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return p.resolve(this._bodyBlob);if(this._bodyFormData)throw Error("could not read FormData body as blob");return p.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(i)},this.text=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return s(this._bodyBlob);if(this._bodyFormData)throw Error("could not read FormData body as text");return p.resolve(this._bodyText)}):this.text=function(){var t=o(this);return t?t:p.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(f)}),this.json=function(){return this.text().then(JSON.parse)},this}function u(t){var e=t.toUpperCase();return y.indexOf(e)>-1?e:t}function h(t,e){if(e=e||{},this.url=t,this.credentials=e.credentials||"omit",this.headers=new r(e.headers),this.method=u(e.method||"GET"),this.mode=e.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&e.body)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(e.body)}function f(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function d(t){var e=new r,o=t.trim().split("\n");return o.forEach(function(t){var r=t.trim().split(":"),o=r.shift().trim(),n=r.join(":").trim();e.append(o,n)}),e}function l(t,e){e||(e={}),this._initBody(t),this.type="default",this.url=null,this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof r?e.headers:new r(e.headers),this.url=e.url||""}var p=window.Bluebird||window.Promise;if(!self.GM_fetch){r.prototype.append=function(r,o){r=t(r),o=e(o);var n=this.map[r];n||(n=[],this.map[r]=n),n.push(o)},r.prototype["delete"]=function(e){delete this.map[t(e)]},r.prototype.get=function(e){var r=this.map[t(e)];return r?r[0]:null},r.prototype.getAll=function(e){return this.map[t(e)]||[]},r.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},r.prototype.set=function(r,o){this.map[t(r)]=[e(o)]},r.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(o){t.call(e,o,r,this)},this)},this)};var c={blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self},y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];a.call(h.prototype),a.call(l.prototype),self.Headers=r,self.Request=h,self.Response=l,self.GM_fetch=function(t,e){var r;return r=h.prototype.isPrototypeOf(t)&&!e?t:new h(t,e),new p(function(t,e){function o(t,e,r){return t?t:/^X-Request-URL:/m.test(e)?r.get("X-Request-URL"):void 0}var n,i={};i.method=r.method,i.url=r.url,i.synchronous=!1,i.onload=function(r){var i=r.status;if(100>i||i>599)return void e(new TypeError("Network request failed"));var s=r.responseHeaders;n=d(s);var a={status:i,statusText:r.statusText,headers:n,url:o(r.finalUrl,s,n)},u=r.responseText;t(new l(u,a))},i.onerror=function(){e(new TypeError("Network request failed"))},i.headers={},r.headers.forEach(function(t,e){i.headers[e]=t}),void 0!==r._bodyInit&&(i.data=r._bodyInit),GM_xmlhttpRequest(i)})},self.GM_fetch.polyfill=!0}}();;;(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function re(){}function Ge(e){return e()}function Te(){return Object.create(null)}function V(e){e.forEach(Ge)}function Je(e){return typeof e=="function"}function Me(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ae;function Oe(e,t){return ae||(ae=document.createElement("a")),ae.href=t,e===ae.href}function Ve(e){return Object.keys(e).length===0}function k(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function _e(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function ie(e){return document.createTextNode(e)}function N(){return ie(" ")}function Xe(){return ie("")}function B(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function w(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function We(e){return Array.from(e.childNodes)}function Ne(e,t){e.value=t==null?"":t}function He(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function Z(e,t,n){e.classList[n?"add":"remove"](t)}let Se;function se(e){Se=e}const oe=[],Y=[],de=[],we=[],Ye=Promise.resolve();let ye=!1;function Ze(){ye||(ye=!0,Ye.then(Qe))}function Ce(e){de.push(e)}function be(e){we.push(e)}const ke=new Set;let me=0;function Qe(){const e=Se;do{for(;me<oe.length;){const t=oe[me];me++,se(t),xe(t.$$)}for(se(null),oe.length=0,me=0;Y.length;)Y.pop()();for(let t=0;t<de.length;t+=1){const n=de[t];ke.has(n)||(ke.add(n),n())}de.length=0}while(oe.length);for(;we.length;)we.pop()();ye=!1,ke.clear(),se(e)}function xe(e){if(e.fragment!==null){e.update(),V(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ce)}}const he=new Set;let Q;function x(){Q={r:0,c:[],p:Q}}function ee(){Q.r||V(Q.c),Q=Q.p}function L(e,t){e&&e.i&&(he.delete(e),e.i(t))}function H(e,t,n,l){if(e&&e.o){if(he.has(e))return;he.add(e),Q.c.push(()=>{he.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function je(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function fe(e){e&&e.c()}function te(e,t,n,l){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),l||Ce(()=>{const s=e.$$.on_mount.map(Ge).filter(Je);e.$$.on_destroy?e.$$.on_destroy.push(...s):V(s),e.$$.on_mount=[]}),i.forEach(Ce)}function ne(e,t){const n=e.$$;n.fragment!==null&&(V(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function et(e,t){e.$$.dirty[0]===-1&&(oe.push(e),Ze(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(e,t,n,l,o,i,s,f=[-1]){const r=Se;se(e);const u=e.$$={fragment:null,ctx:[],props:i,update:re,not_equal:o,bound:Te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:Te(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};s&&s(u.root);let p=!1;if(u.ctx=n?n(e,t.props||{},(v,d,...c)=>{const _=c.length?c[0]:d;return u.ctx&&o(u.ctx[v],u.ctx[v]=_)&&(!u.skip_bound&&u.bound[v]&&u.bound[v](_),p&&et(e,v)),d}):[],u.update(),p=!0,V(u.before_update),u.fragment=l?l(u.ctx):!1,t.target){if(t.hydrate){const v=We(t.target);u.fragment&&u.fragment.l(v),v.forEach(E)}else u.fragment&&u.fragment.c();t.intro&&L(e.$$.fragment),te(e,t.target,t.anchor,t.customElement),Qe()}se(r)}class $e{$destroy(){ne(this,1),this.$destroy=re}$on(t,n){if(!Je(n))return re;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!Ve(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function tt(){let e=[],t=[],n=[],l={},o=s=>[...new Set(s)];e=JSON.parse(localStorage.emoji_data);let i={};for(let s of e){let f=s.cat;if(t.includes(f)||(t.push(f),n.push(s),i[f]={}),i[f][s.root]||(i[f][s.root]=[]),i[f][s.root].push(s),s.root==="hand"){let{morph:r,color:u}=s;l[r]||(l[r]=[]),l[r]=o([...l[r],u])}}return{emojis:e,categories:t,catIcons:n,morphs:l}}function Ae(e){let t,n,l;return{c(){t=y("img"),Oe(t.src,n="https://lxhom.github.io/mutant-html/assets/webp_128/"+e[0].short+".webp")||w(t,"src",n),He(t,"width","1em"),He(t,"height","1em"),w(t,"alt",l=e[0].short+" emoji")},m(o,i){$(o,t,i)},p(o,i){i&1&&!Oe(t.src,n="https://lxhom.github.io/mutant-html/assets/webp_128/"+o[0].short+".webp")&&w(t,"src",n),i&1&&l!==(l=o[0].short+" emoji")&&w(t,"alt",l)},d(o){o&&E(t)}}}function nt(e){let t,n=e[0]&&Ae(e);return{c(){n&&n.c(),t=Xe()},m(l,o){n&&n.m(l,o),$(l,t,o)},p(l,[o]){l[0]?n?n.p(l,o):(n=Ae(l),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:re,o:re,d(l){n&&n.d(l),l&&E(t)}}}function lt(e,t,n){let{emoji:l}=t;return e.$$set=o=>{"emoji"in o&&n(0,l=o.emoji)},[l]}class pe extends $e{constructor(t){super(),Ee(this,t,lt,nt,Me,{emoji:0})}}function Pe(e,t,n){const l=e.slice();return l[37]=t[n],l}function ze(e,t,n){const l=e.slice();return l[40]=t[n],l}function Be(e,t,n){const l=e.slice();return l[43]=t[n],l}function Ie(e,t,n){const l=e.slice();return l[46]=t[n],l[48]=n,l}function qe(e){let t,n,l,o,i,s,f,r,u,p,v,d,c,_,I,z,A,j,q,P,S,D,a,C,m,K,X,W,le,ce,U=e[11],T=[];for(let h=0;h<U.length;h+=1)T[h]=Re(Ie(e,U,h));const ge=h=>H(T[h],1,1,()=>{T[h]=null});let F=e[8],O=[];for(let h=0;h<F.length;h+=1)O[h]=De(Be(e,F,h));const ve=h=>H(O[h],1,1,()=>{O[h]=null});return{c(){t=y("div"),n=N(),l=y("div"),o=y("div"),i=y("div"),i.textContent="Categories",s=N();for(let h=0;h<T.length;h+=1)T[h].c();f=N(),r=y("div"),r.textContent="Customize",u=N(),p=y("div"),v=y("input"),d=N(),c=y("div"),_=y("input"),I=N(),z=y("label"),z.textContent="Bigger",A=ie(" | "),j=y("input"),q=N(),P=y("label"),P.textContent="Comment mode",S=N(),D=y("sub"),a=ie("?"),C=ie(" | "),m=y("span"),m.textContent="Close",K=N(),X=y("div");for(let h=0;h<O.length;h+=1)O[h].c();w(t,"class","bg-click svelte-12fmvmh"),w(i,"class","svelte-12fmvmh"),w(r,"class","customize svelte-12fmvmh"),w(o,"class","categories svelte-12fmvmh"),w(v,"type","text"),w(v,"class","input svelte-12fmvmh"),w(v,"placeholder","Search emojis..."),w(_,"type","checkbox"),w(_,"id","bigger"),w(z,"for","bigger"),w(j,"type","checkbox"),w(j,"id","commentMode"),w(P,"for","commentMode"),w(D,"title",e[16]),w(m,"class","close"),w(p,"class","search svelte-12fmvmh"),w(X,"class","emojis svelte-12fmvmh"),w(l,"class","picker svelte-12fmvmh")},m(h,M){$(h,t,M),$(h,n,M),$(h,l,M),k(l,o),k(o,i),k(o,s);for(let b=0;b<T.length;b+=1)T[b].m(o,null);k(o,f),k(o,r),k(l,u),k(l,p),k(p,v),Ne(v,e[5]),e[22](v),k(p,d),k(p,c),k(c,_),_.checked=e[10],k(c,I),k(c,z),k(c,A),k(c,j),j.checked=e[1],k(c,q),k(c,P),k(c,S),k(c,D),k(D,a),k(c,C),k(c,m),k(l,K),k(l,X);for(let b=0;b<O.length;b+=1)O[b].m(X,null);W=!0,le||(ce=[B(t,"click",e[18]),B(r,"click",e[20]),B(v,"input",e[21]),B(_,"change",e[23]),B(j,"change",e[24]),B(D,"click",e[25]),B(m,"click",e[26])],le=!0)},p(h,M){if(M[0]&6192){U=h[11];let b;for(b=0;b<U.length;b+=1){const G=Ie(h,U,b);T[b]?(T[b].p(G,M),L(T[b],1)):(T[b]=Re(G),T[b].c(),L(T[b],1),T[b].m(o,f))}for(x(),b=U.length;b<T.length;b+=1)ge(b);ee()}if(M[0]&32&&v.value!==h[5]&&Ne(v,h[5]),M[0]&1024&&(_.checked=h[10]),M[0]&2&&(j.checked=h[1]),M[0]&33024){F=h[8];let b;for(b=0;b<F.length;b+=1){const G=Be(h,F,b);O[b]?(O[b].p(G,M),L(O[b],1)):(O[b]=De(G),O[b].c(),L(O[b],1),O[b].m(X,null))}for(x(),b=F.length;b<O.length;b+=1)ve(b);ee()}},i(h){if(!W){for(let M=0;M<U.length;M+=1)L(T[M]);for(let M=0;M<F.length;M+=1)L(O[M]);W=!0}},o(h){T=T.filter(Boolean);for(let M=0;M<T.length;M+=1)H(T[M]);O=O.filter(Boolean);for(let M=0;M<O.length;M+=1)H(O[M]);W=!1},d(h){h&&E(t),h&&E(n),h&&E(l),_e(T,h),e[22](null),_e(O,h),le=!1,V(ce)}}}function Re(e){let t,n,l,o,i,s;l=new pe({props:{emoji:e[12][e[48]]}});function f(){return e[19](e[48])}return{c(){t=y("div"),n=y("div"),fe(l.$$.fragment),w(n,"title",e[46]),w(t,"class","category svelte-12fmvmh"),Z(t,"highlight",e[48]===e[4]&&!e[5])},m(r,u){$(r,t,u),k(t,n),te(l,n,null),o=!0,i||(s=B(t,"click",f),i=!0)},p(r,u){e=r,(!o||u[0]&48)&&Z(t,"highlight",e[48]===e[4]&&!e[5])},i(r){o||(L(l.$$.fragment,r),o=!0)},o(r){H(l.$$.fragment,r),o=!1},d(r){r&&E(t),ne(l),i=!1,s()}}}function De(e){let t,n,l,o,i,s,f,r;l=new pe({props:{emoji:e[43]}});function u(){return e[27](e[43])}return{c(){t=y("div"),n=y("div"),fe(l.$$.fragment),i=N(),w(n,"class","emoji svelte-12fmvmh"),w(n,"title",o=e[43].desc),w(t,"class","emoji svelte-12fmvmh")},m(p,v){$(p,t,v),k(t,n),te(l,n,null),k(t,i),s=!0,f||(r=B(t,"click",u),f=!0)},p(p,v){e=p;const d={};v[0]&256&&(d.emoji=e[43]),l.$set(d),(!s||v[0]&256&&o!==(o=e[43].desc))&&w(n,"title",o)},i(p){s||(L(l.$$.fragment,p),s=!0)},o(p){H(l.$$.fragment,p),s=!1},d(p){p&&E(t),ne(l),f=!1,r()}}}function Ke(e){let t,n,l,o,i,s,f,r,u,p,v,d,c,_,I,z,A=Object.keys(e[13]),j=[];for(let a=0;a<A.length;a+=1)j[a]=Ue(ze(e,A,a));const q=a=>H(j[a],1,1,()=>{j[a]=null});let P=e[7],S=[];for(let a=0;a<P.length;a+=1)S[a]=Fe(Pe(e,P,a));const D=a=>H(S[a],1,1,()=>{S[a]=null});return{c(){t=y("div"),n=N(),l=y("div"),o=y("div"),i=y("div"),i.textContent="Customize",s=N(),f=y("div"),f.textContent="Save",r=N(),u=y("div");for(let a=0;a<j.length;a+=1)j[a].c();p=N(),v=y("div"),d=N(),c=y("div");for(let a=0;a<S.length;a+=1)S[a].c();w(t,"class","bg-click svelte-12fmvmh"),w(i,"class","svelte-12fmvmh"),w(f,"class","customize svelte-12fmvmh"),w(o,"class","categories svelte-12fmvmh"),w(u,"class","emojis svelte-12fmvmh"),w(v,"class","hr svelte-12fmvmh"),w(c,"class","emojis svelte-12fmvmh"),w(l,"class","picker svelte-12fmvmh")},m(a,C){$(a,t,C),$(a,n,C),$(a,l,C),k(l,o),k(o,i),k(o,s),k(o,f),k(l,r),k(l,u);for(let m=0;m<j.length;m+=1)j[m].m(u,null);k(l,p),k(l,v),k(l,d),k(l,c);for(let m=0;m<S.length;m+=1)S[m].m(c,null);_=!0,I||(z=[B(t,"click",e[28]),B(f,"click",e[29])],I=!0)},p(a,C){if(C[0]&24588){A=Object.keys(a[13]);let m;for(m=0;m<A.length;m+=1){const K=ze(a,A,m);j[m]?(j[m].p(K,C),L(j[m],1)):(j[m]=Ue(K),j[m].c(),L(j[m],1),j[m].m(u,null))}for(x(),m=A.length;m<j.length;m+=1)q(m);ee()}if(C[0]&16524){P=a[7];let m;for(m=0;m<P.length;m+=1){const K=Pe(a,P,m);S[m]?(S[m].p(K,C),L(S[m],1)):(S[m]=Fe(K),S[m].c(),L(S[m],1),S[m].m(c,null))}for(x(),m=P.length;m<S.length;m+=1)D(m);ee()}},i(a){if(!_){for(let C=0;C<A.length;C+=1)L(j[C]);for(let C=0;C<P.length;C+=1)L(S[C]);_=!0}},o(a){j=j.filter(Boolean);for(let C=0;C<j.length;C+=1)H(j[C]);S=S.filter(Boolean);for(let C=0;C<S.length;C+=1)H(S[C]);_=!1},d(a){a&&E(t),a&&E(n),a&&E(l),_e(j,a),_e(S,a),I=!1,V(z)}}}function Ue(e){let t,n,l,o,i,s;n=new pe({props:{emoji:e[14](e[40],e[2])}});function f(){return e[30](e[40])}return{c(){t=y("div"),fe(n.$$.fragment),l=N(),w(t,"class","emoji svelte-12fmvmh"),Z(t,"highlight",e[3]===e[40])},m(r,u){$(r,t,u),te(n,t,null),k(t,l),o=!0,i||(s=B(t,"click",f),i=!0)},p(r,u){e=r;const p={};u[0]&4&&(p.emoji=e[14](e[40],e[2])),n.$set(p),(!o||u[0]&8200)&&Z(t,"highlight",e[3]===e[40])},i(r){o||(L(n.$$.fragment,r),o=!0)},o(r){H(n.$$.fragment,r),o=!1},d(r){r&&E(t),ne(n),i=!1,s()}}}function Fe(e){let t,n,l,o,i,s;n=new pe({props:{emoji:e[14](e[3],e[37])}});function f(){return e[31](e[37])}return{c(){t=y("div"),fe(n.$$.fragment),l=N(),w(t,"class","emoji svelte-12fmvmh"),Z(t,"highlight",e[2]===e[37])},m(r,u){$(r,t,u),te(n,t,null),k(t,l),o=!0,i||(s=B(t,"click",f),i=!0)},p(r,u){e=r;const p={};u[0]&136&&(p.emoji=e[14](e[3],e[37])),n.$set(p),(!o||u[0]&132)&&Z(t,"highlight",e[2]===e[37])},i(r){o||(L(n.$$.fragment,r),o=!0)},o(r){H(n.$$.fragment,r),o=!1},d(r){r&&E(t),ne(n),i=!1,s()}}}function ot(e){let t,n,l,o=e[0]&&qe(e),i=e[9]&&Ke(e);return{c(){o&&o.c(),t=N(),i&&i.c(),n=Xe()},m(s,f){o&&o.m(s,f),$(s,t,f),i&&i.m(s,f),$(s,n,f),l=!0},p(s,f){s[0]?o?(o.p(s,f),f[0]&1&&L(o,1)):(o=qe(s),o.c(),L(o,1),o.m(t.parentNode,t)):o&&(x(),H(o,1,1,()=>{o=null}),ee()),s[9]?i?(i.p(s,f),f[0]&512&&L(i,1)):(i=Ke(s),i.c(),L(i,1),i.m(n.parentNode,n)):i&&(x(),H(i,1,1,()=>{i=null}),ee())},i(s){l||(L(o),L(i),l=!0)},o(s){H(o),H(i),l=!1},d(s){o&&o.d(s),s&&E(t),i&&i.d(s),s&&E(n)}}}function it(e,t,n){var G,Le;let{emojis:l,categories:o,catIcons:i,morphs:s}=tt(),f=(G=localStorage.emoji_color)!=null?G:localStorage.emoji_color="default",r=(Le=localStorage.emoji_morph)!=null?Le:localStorage.emoji_morph="paw",u,p=(g,J="default")=>l.find(R=>R.root==="hand"&&R.morph===g&&R.color===J)||l.find(R=>R.root==="hand"&&R.morph===g),v=0,d="",c=[],{open:_=!1}=t,I=!1,z=!1,A=-1,j=null,{commentMode:q=!1}=t;document.addEventListener("keydown",g=>{if(g.ctrlKey&&g.key==="."&&_===!1){if(j=g.target,j.tagName!=="TEXTAREA")return;n(1,q=j.placeholder==="leave a comment..."),g.preventDefault(),n(0,_=!0),A=j.selectionStart,console.log("opened",{open:_})}});let P=async g=>{let J=g.desc.replace('"',"'"),R=q?`![${J}](https://lxhom.github.io/mutant-html/assets/webp_${z?128:32}/${g.short}.webp#_generated_with_mutant.us.to)`:`<img src="https://lxhom.github.io/mutant-html/assets/webp_128/${g.short}.webp#_generated_with_mutant.us.to" alt="${J}" title="${J}" style="width: ${z?2:1}em; height: ${z?2:1}em; margin: 0; display: inline;">`;if(window.running_as_page){if("navigator"in window&&"clipboard"in navigator)await navigator.clipboard.writeText(R);else{let ue=document.createElement("textarea");ue.value=R,document.body.appendChild(ue),ue.select(),document.execCommand("copy"),document.body.removeChild(ue)}m(`Copied <pre>${R.replace("<","&lt;")}</pre> to clipboard`)}else S(R);n(0,_=!1)},S=g=>{let J=j.value;j.value=J.slice(0,A)+g+J.slice(A),j.selectionStart=A+g.length,j.selectionEnd=A+g.length,j.dispatchEvent(new Event("input",{bubbles:!0}))},D="Use Markdown syntax ![]() instead of HTML syntax <img> to use them in places without HTML support, like Cohost comments.",a={},{message:C=""}=t,m=g=>{n(17,C=g)};const K=()=>n(0,_=!1),X=g=>{n(5,d=""),n(4,v=g)},W=()=>{n(0,_=!1),n(9,I=!0)};function le(){d=this.value,n(5,d),n(0,_)}function ce(g){Y[g?"unshift":"push"](()=>{a=g,n(6,a)})}function U(){z=this.checked,n(10,z)}function T(){q=this.checked,n(1,q)}const ge=()=>alert(D),F=()=>n(0,_=!1),O=g=>P(g),ve=()=>{n(0,_=!0),n(9,I=!1)},h=()=>{n(0,_=!0),n(9,I=!1)},M=g=>n(3,r=g),b=g=>n(2,f=g);return e.$$set=g=>{"open"in g&&n(0,_=g.open),"commentMode"in g&&n(1,q=g.commentMode),"message"in g&&n(17,C=g.message)},e.$$.update=()=>{e.$$.dirty[0]&4&&(localStorage.emoji_color=f),e.$$.dirty[0]&8&&(localStorage.emoji_morph=r),e.$$.dirty[0]&8&&n(7,u=s[r]),e.$$.dirty[0]&1&&n(5,d=""),e.$$.dirty[0]&60&&n(8,c=l.filter(g=>!(o[v]!==g.cat&&!d||g.morph&&g.morph!==r||g.color&&g.color!==f||g.desc.indexOf(d)===-1&&g.short.indexOf(d)===-1))),e.$$.dirty[0]&65&&a&&a.focus&&(console.log("focusing",a),a.focus())},[_,q,f,r,v,d,a,u,c,I,z,o,i,s,p,P,D,C,K,X,W,le,ce,U,T,ge,F,O,ve,h,M,b]}class st extends $e{constructor(t){super(),Ee(this,t,it,ot,Me,{open:0,commentMode:1,message:17},null,[-1,-1])}}function rt(e){let t,n,l,o,i,s,f,r,u,p,v,d;return{c(){t=y("p"),t.innerHTML='Hi there! This is the page hosting Mutant Standard for Cohost. See <a href="https://cohost.org/lexi/post/470324-if-you-ever-wanted-t/" target="_blank">the post on Cohost</a> for more.',n=N(),l=y("p"),l.innerHTML='This uses the <a href="https://mutant.tech">Mutant Standard</a> emoji set.',o=N(),i=y("p"),i.innerHTML='The emoji picker is available as an <a href="mutant-compiled.user.js" target="_blank">userscript</a>. Open it while focusing on a textbox with CTRL+. on Cohost, or use it here:',s=N(),f=y("p"),r=y("button"),r.textContent="Open picker",u=N(),p=y("p")},m(c,_){$(c,t,_),$(c,n,_),$(c,l,_),$(c,o,_),$(c,i,_),$(c,s,_),$(c,f,_),k(f,r),$(c,u,_),$(c,p,_),p.innerHTML=e[2],v||(d=B(r,"click",e[3]),v=!0)},p(c,_){_&4&&(p.innerHTML=c[2])},d(c){c&&E(t),c&&E(n),c&&E(l),c&&E(o),c&&E(i),c&&E(s),c&&E(f),c&&E(u),c&&E(p),v=!1,d()}}}function ft(e){let t,n,l,o,i,s,f=window.running_as_page&&rt(e);function r(d){e[4](d)}function u(d){e[5](d)}function p(d){e[6](d)}let v={};return e[0]!==void 0&&(v.open=e[0]),e[1]!==void 0&&(v.commentMode=e[1]),e[2]!==void 0&&(v.message=e[2]),n=new st({props:v}),Y.push(()=>je(n,"open",r)),Y.push(()=>je(n,"commentMode",u)),Y.push(()=>je(n,"message",p)),{c(){f&&f.c(),t=N(),fe(n.$$.fragment)},m(d,c){f&&f.m(d,c),$(d,t,c),te(n,d,c),s=!0},p(d,[c]){window.running_as_page&&f.p(d,c);const _={};!l&&c&1&&(l=!0,_.open=d[0],be(()=>l=!1)),!o&&c&2&&(o=!0,_.commentMode=d[1],be(()=>o=!1)),!i&&c&4&&(i=!0,_.message=d[2],be(()=>i=!1)),n.$set(_)},i(d){s||(L(n.$$.fragment,d),s=!0)},o(d){H(n.$$.fragment,d),s=!1},d(d){f&&f.d(d),d&&E(t),ne(n,d)}}}function ct(e,t,n){let l=!1,o=!1,i="";const s=()=>n(0,l=!0);function f(p){l=p,n(0,l)}function r(p){o=p,n(1,o)}function u(p){i=p,n(2,i)}return[l,o,i,s,f,r,u]}class ut extends $e{constructor(t){super(),Ee(this,t,ct,ft,Me,{})}}let at=async()=>{if(!localStorage.emoji_data)if(window.running_as_page){let n=await fetch("assets/data.json");localStorage.emoji_data=await n.text()}else{let n=await GM_fetch("https://lxhom.github.io/mutant-html/assets/data.json");localStorage.emoji_data=await n.text(),alert("Downloaded emoji data! Use CTRL+. in a textbox to open the emoji picker.")}let e=document.createElement("div");e.id="userscript-app",document.body.appendChild(e);const t=new ut({target:e});console.log("Svelte initialized on",t.$$.root)};at().then();;;});