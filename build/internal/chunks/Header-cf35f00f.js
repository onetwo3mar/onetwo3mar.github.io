import{X as K,Y as M,D as O,S as U,i as Z,s as $,e as _,k as H,t as S,c as h,a as b,d as i,m as P,h as q,b as o,L as N,g as C,J as n,n as x,o as B,p as ee,q as F,Q as G,j as te,N as T,W,R as w,V as X}from"./vendor-600b8a1e.js";import{b as Y}from"./paths-28a87002.js";const se=()=>{const u=K("__svelte__");return{page:{subscribe:u.page.subscribe},navigating:{subscribe:u.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:u.navigating.subscribe}},session:u.session}},ae={subscribe(u){return se().page.subscribe(u)}};let ue=M(500),re=O(null);function le(u){let e,d,m,f,c,p,l,y,z,v,k,t,a,E,D="< back",I,A,g,j;return{c(){e=_("div"),d=_("div"),m=S("work"),f=H(),c=_("div"),p=S("/"),l=H(),y=_("div"),z=S(u[1]),t=H(),a=_("div"),E=_("a"),I=S(D),this.h()},l(s){e=h(s,"DIV",{class:!0});var r=b(e);d=h(r,"DIV",{class:!0});var V=b(d);m=q(V,"work"),V.forEach(i),f=P(r),c=h(r,"DIV",{class:!0});var R=b(c);p=q(R,"/"),R.forEach(i),l=P(r),y=h(r,"DIV",{class:!0});var J=b(y);z=q(J,u[1]),J.forEach(i),r.forEach(i),t=P(s),a=h(s,"DIV",{class:!0});var L=b(a);E=h(L,"A",{class:!0,href:!0});var Q=b(E);I=q(Q,D),Q.forEach(i),L.forEach(i),this.h()},h(){o(d,"class","svelte-1bkcyfz"),o(c,"class","svelte-1bkcyfz"),o(y,"class","selected project-title svelte-1bkcyfz"),o(e,"class","nav-left svelte-1bkcyfz"),o(E,"class","btn-back svelte-1bkcyfz"),o(E,"href",Y+"/"),o(a,"class","nav-right")},m(s,r){C(s,e,r),n(e,d),n(d,m),n(e,f),n(e,c),n(c,p),n(e,l),n(e,y),n(y,z),C(s,t,r),C(s,a,r),n(a,E),n(E,I),j=!0},p(s,r){(!j||r&2)&&te(z,s[1])},i(s){j||(T(()=>{k&&k.end(1),v=W(e,w,{duration:300,delay:200}),v.start()}),T(()=>{g&&g.end(1),A=W(a,w,{duration:300,delay:200}),A.start()}),j=!0)},o(s){v&&v.invalidate(),k=X(e,w,{duration:150}),A&&A.invalidate(),g=X(a,w,{duration:150}),j=!1},d(s){s&&i(e),s&&k&&k.end(),s&&i(t),s&&i(a),s&&g&&g.end()}}}function ie(u){let e,d,m,f,c,p,l,y,z,v,k;return{c(){e=_("a"),d=_("span"),m=S("work"),p=H(),l=_("a"),y=S("about"),this.h()},l(t){e=h(t,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var a=b(e);d=h(a,"SPAN",{});var E=b(d);m=q(E,"work"),E.forEach(i),a.forEach(i),p=P(t),l=h(t,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var D=b(l);y=q(D,"about"),D.forEach(i),this.h()},h(){o(e,"sveltekit:prefetch",""),o(e,"href",Y+"/"),o(e,"class","nav-item work svelte-1bkcyfz"),N(e,"selected",!u[0].url.pathname.includes("about")),o(l,"sveltekit:prefetch",""),o(l,"href",Y+"/about"),o(l,"class","nav-item about svelte-1bkcyfz"),N(l,"selected",u[0].url.pathname.includes("about"))},m(t,a){C(t,e,a),n(e,d),n(d,m),C(t,p,a),C(t,l,a),n(l,y),k=!0},p(t,a){a&1&&N(e,"selected",!t[0].url.pathname.includes("about")),a&1&&N(l,"selected",t[0].url.pathname.includes("about"))},i(t){k||(T(()=>{c&&c.end(1),f=W(e,w,{duration:300,delay:200}),f.start()}),T(()=>{v&&v.end(1),z=W(l,w,{duration:300,delay:200}),z.start()}),k=!0)},o(t){f&&f.invalidate(),c=X(e,w,{duration:150}),z&&z.invalidate(),v=X(l,w,{duration:150}),k=!1},d(t){t&&i(e),t&&c&&c.end(),t&&i(p),t&&i(l),t&&v&&v.end()}}}function ne(u){let e,d,m,f,c,p,l,y,z,v,k,t,a,E,D,I;const A=[ie,le],g=[];function j(s,r){return r&1&&(k=null),k==null&&(k=!s[0].url.pathname.includes("project")),k?0:1}return t=j(u,-1),a=g[t]=A[t](u),{c(){e=_("header"),d=_("div"),m=H(),f=_("div"),c=_("div"),p=_("div"),l=_("a"),y=S("omar nema"),z=H(),v=_("div"),a.c(),E=H(),D=_("div"),this.h()},l(s){e=h(s,"HEADER",{class:!0});var r=b(e);d=h(r,"DIV",{class:!0}),b(d).forEach(i),m=P(r),f=h(r,"DIV",{class:!0});var V=b(f);c=h(V,"DIV",{class:!0});var R=b(c);p=h(R,"DIV",{class:!0});var J=b(p);l=h(J,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var L=b(l);y=q(L,"omar nema"),L.forEach(i),J.forEach(i),R.forEach(i),z=P(V),v=h(V,"DIV",{class:!0});var Q=b(v);a.l(Q),Q.forEach(i),V.forEach(i),E=P(r),D=h(r,"DIV",{class:!0}),b(D).forEach(i),r.forEach(i),this.h()},h(){o(d,"class","header-padding left svelte-1bkcyfz"),o(l,"sveltekit:prefetch",""),o(l,"href",Y+"/"),o(l,"class","svelte-1bkcyfz"),o(p,"class","header-name svelte-1bkcyfz"),o(c,"class","name-holder svelte-1bkcyfz"),o(v,"class","header-nav svelte-1bkcyfz"),N(v,"split",u[0].url.pathname.includes("project")),o(f,"class","inner-header svelte-1bkcyfz"),o(D,"class","header-padding right svelte-1bkcyfz"),o(e,"class","svelte-1bkcyfz")},m(s,r){C(s,e,r),n(e,d),n(e,m),n(e,f),n(f,c),n(c,p),n(p,l),n(l,y),n(f,z),n(f,v),g[t].m(v,null),n(e,E),n(e,D),I=!0},p(s,[r]){let V=t;t=j(s,r),t===V?g[t].p(s,r):(x(),B(g[V],1,1,()=>{g[V]=null}),ee(),a=g[t],a?a.p(s,r):(a=g[t]=A[t](s),a.c()),F(a,1),a.m(v,null)),r&1&&N(v,"split",s[0].url.pathname.includes("project"))},i(s){I||(F(a),I=!0)},o(s){B(a),I=!1},d(s){s&&i(e),g[t].d()}}}function ce(u,e,d){let m,f;return G(u,ae,c=>d(0,m=c)),G(u,re,c=>d(1,f=c)),[m,f]}class fe extends U{constructor(e){super();Z(this,e,ce,ne,$,{})}}export{fe as H,re as s,ue as t};
