function y(){}const P=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function Q(){return Object.create(null)}function w(t){t.forEach(K)}function T(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function Lt(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Tt(t,e,n,r){if(t){const s=U(t,e,n,r);return t[0](s)}}function U(t,e,n,r){return t[1]&&r?ft(n.ctx.slice(),t[1](r(e))):n.ctx}function Bt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],i=Math.max(e.dirty.length,s.length);for(let o=0;o<i;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function Ft(t,e,n,r,s,u){if(s){const i=U(e,n,r,u);t.p(i,s)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function It(t,e,n){return t.set(n),e}const V=typeof window!="undefined";let X=V?()=>window.performance.now():()=>Date.now(),B=V?t=>requestAnimationFrame(t):y;const v=new Set;function Y(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&B(Y)}function Z(t){let e;return v.size===0&&B(Y),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let M=!1;function mt(){M=!0}function pt(){M=!1}function yt(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=l?s+1:yt(1,s,a=>e[n[a]].claim_order,l))-1;r[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const u=[],i=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=r[c-1]){for(u.push(e[c-1]);o>=c;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);u.reverse(),i.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<i.length;c++){for(;l<u.length&&i[c].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(i[c],_)}}function bt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=et("style");return $t(tt(t),e),e}function $t(t,e){bt(t.head||t,e)}function wt(t,e){if(M){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Wt(t,e,n){M&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function vt(t){t.parentNode.removeChild(t)}function Gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function Jt(){return F(" ")}function Kt(){return F("")}function Qt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,r,s=!1){kt(t);const u=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const c=n(o);return c===void 0?t.splice(i,1):t[i]=c,s||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const c=n(o);return c===void 0?t.splice(i,1):t[i]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Ct(t,e,n,r){return nt(t,s=>s.nodeName===e,s=>{const u=[];for(let i=0;i<s.attributes.length;i++){const o=s.attributes[i];n[o.name]||u.push(o.name)}u.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Vt(t,e,n){return Ct(t,e,n,et)}function St(t,e){return nt(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>F(e),!0)}function Xt(t){return St(t," ")}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function te(t,e,n){t.classList[n?"add":"remove"](e)}function Nt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}const H=new Set;let R=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function I(t,e,n,r,s,u,i,o=0){const c=16.666/r;let l=`{
`;for(let m=0;m<=1;m+=c){const b=e+(n-e)*u(m);l+=m*100+`%{${i(b,1-b)}}
`}const _=l+`100% {${i(n,1-n)}}
}`,f=`__svelte_${jt(_)}_${o}`,a=tt(t);H.add(a);const h=a.__svelte_stylesheet||(a.__svelte_stylesheet=xt(t).sheet),d=a.__svelte_rules||(a.__svelte_rules={});d[f]||(d[f]=!0,h.insertRule(`@keyframes ${f} ${_}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${s}ms 1 both`,R+=1,f}function W(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),R-=s,R||At())}function At(){B(()=>{R||(H.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),H.clear())})}let k;function C(t){k=t}function z(){if(!k)throw new Error("Function called outside component initialization");return k}function ee(t){z().$$.on_mount.push(t)}function ne(t){z().$$.after_update.push(t)}function ie(t,e){z().$$.context.set(t,e)}function re(t){return z().$$.context.get(t)}const S=[],it=[],O=[],rt=[],st=Promise.resolve();let G=!1;function ct(){G||(G=!0,st.then(ot))}function se(){return ct(),st}function N(t){O.push(t)}const J=new Set;let D=0;function ot(){const t=k;do{for(;D<S.length;){const e=S[D];D++,C(e),qt(e.$$)}for(C(null),S.length=0,D=0;it.length;)it.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];J.has(n)||(J.add(n),n())}O.length=0}while(S.length);for(;rt.length;)rt.pop()();G=!1,J.clear(),C(t)}function qt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let j;function lt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function A(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const L=new Set;let g;function ce(){g={r:0,c:[],p:g}}function oe(){g.r||w(g.c),g=g.p}function Mt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function le(t,e,n,r){if(t&&t.o){if(L.has(t))return;L.add(t),g.c.push(()=>{L.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const ut={duration:0};function ue(t,e,n){let r=e(t,n),s=!1,u,i,o=0;function c(){u&&W(t,u)}function l(){const{delay:f=0,duration:a=300,easing:h=P,tick:d=y,css:p}=r||ut;p&&(u=I(t,0,1,a,f,h,p,o++)),d(0,1);const m=X()+f,b=m+a;i&&i.abort(),s=!0,N(()=>A(t,!0,"start")),i=Z(x=>{if(s){if(x>=b)return d(1,0),A(t,!0,"end"),c(),s=!1;if(x>=m){const $=h((x-m)/a);d($,1-$)}}return s})}let _=!1;return{start(){_||(_=!0,W(t),T(r)?(r=r(),lt().then(l)):l())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function ae(t,e,n,r){let s=e(t,n),u=r?0:1,i=null,o=null,c=null;function l(){c&&W(t,c)}function _(a,h){const d=a.b-u;return h*=Math.abs(d),{a:u,b:a.b,d,duration:h,start:a.start,end:a.start+h,group:a.group}}function f(a){const{delay:h=0,duration:d=300,easing:p=P,tick:m=y,css:b}=s||ut,x={start:X()+h,b:a};a||(x.group=g,g.r+=1),i||o?o=x:(b&&(l(),c=I(t,u,a,d,h,p,b)),a&&m(0,1),i=_(x,d),N(()=>A(t,a,"start")),Z($=>{if(o&&$>o.start&&(i=_(o,d),o=null,A(t,i.b,"start"),b&&(l(),c=I(t,u,i.b,i.duration,0,p,s.css))),i){if($>=i.end)m(u=i.b,1-u),A(t,i.b,"end"),o||(i.b?l():--i.group.r||w(i.group.c)),i=null;else if($>=i.start){const at=$-i.start;u=i.a+i.d*p(at/i.duration),m(u,1-u)}}return!!(i||o)}))}return{run(a){T(s)?lt().then(()=>{s=s(),f(a)}):f(a)},end(){l(),i=o=null}}}function fe(t,e){const n={},r={},s={$$scope:1};let u=t.length;for(;u--;){const i=t[u],o=e[u];if(o){for(const c in i)c in o||(r[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[u]=o}else for(const c in i)s[c]=1}for(const i in r)i in n||(n[i]=void 0);return n}function _e(t){return typeof t=="object"&&t!==null?t:{}}function de(t){t&&t.c()}function he(t,e){t&&t.l(e)}function Rt(t,e,n,r){const{fragment:s,on_mount:u,on_destroy:i,after_update:o}=t.$$;s&&s.m(e,n),r||N(()=>{const c=u.map(K).filter(T);i?i.push(...c):w(c),t.$$.on_mount=[]}),o.forEach(N)}function zt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(S.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,r,s,u,i,o=[-1]){const c=k;C(t);const l=t.$$={fragment:null,ctx:null,props:u,update:y,not_equal:s,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Q(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};i&&i(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(f,a,...h)=>{const d=h.length?h[0]:a;return l.ctx&&s(l.ctx[f],l.ctx[f]=d)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](d),_&&Ot(t,f)),a}):[],l.update(),_=!0,w(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){mt();const f=Et(e.target);l.fragment&&l.fragment.l(f),f.forEach(vt)}else l.fragment&&l.fragment.c();e.intro&&Mt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),pt(),ot()}C(c)}class pe{$destroy(){zt(this,1),this.$destroy=y}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const E=[];function ye(t,e){return{subscribe:Dt(t,e).subscribe}}function Dt(t,e=y){let n;const r=new Set;function s(o){if(_t(t,o)&&(t=o,n)){const c=!E.length;for(const l of r)l[1](),E.push(l,t);if(c){for(let l=0;l<E.length;l+=2)E[l][0](E[l+1]);E.length=0}}}function u(o){s(o(t))}function i(o,c=y){const l=[o,c];return r.add(l),r.size===1&&(n=e(s)||y),o(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:s,update:u,subscribe:i}}function ge(t,{delay:e=0,duration:n=400,easing:r=P}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:u=>`opacity: ${u*s}`}}export{zt as A,ft as B,Dt as C,se as D,Tt as E,Ft as F,Ht as G,Bt as H,wt as I,y as J,te as K,Qt as L,N as M,ae as N,Gt as O,Pt as P,ge as Q,It as R,pe as S,re as T,ye as U,ue as V,Lt as W,w as X,Zt as Y,it as Z,Et as a,Ut as b,Vt as c,vt as d,et as e,Wt as f,St as g,Yt as h,me as i,Jt as j,Kt as k,Xt as l,ce as m,le as n,oe as o,Mt as p,ie as q,ne as r,_t as s,F as t,ee as u,de as v,he as w,Rt as x,fe as y,_e as z};
