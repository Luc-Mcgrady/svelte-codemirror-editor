function O(){}function X(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function H(){return Object.create(null)}function v(t){t.forEach(G)}function Y(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Z(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null)return O;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function gt(t,e,n){t.$$.on_destroy.push(tt(e,n))}function xt(t,e,n,i){if(t){const c=J(t,e,n,i);return t[0](c)}}function J(t,e,n,i){return t[1]&&i?X(n.ctx.slice(),t[1](i(e))):n.ctx}function bt(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const u=[],r=Math.max(e.dirty.length,c.length);for(let s=0;s<r;s+=1)u[s]=e.dirty[s]|c[s];return u}return e.dirty|c}return e.dirty}function $t(t,e,n,i,c,u){if(c){const r=J(e,n,i,u);t.p(r,c)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let C=!1;function et(){C=!0}function nt(){C=!1}function it(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(c>0&&e[n[c]].claim_order<=l?c+1:it(1,c,d=>e[n[d]].claim_order,l))-1;i[o]=n[f]+1;const _=f+1;n[_]=o,c=Math.max(_,c)}const u=[],r=[];let s=e.length-1;for(let o=n[c]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);s>=o;s--)r.push(e[s]);s--}for(;s>=0;s--)r.push(e[s]);u.reverse(),r.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<r.length;o++){for(;l<u.length&&r[o].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(r[o],f)}}function rt(t,e){if(C){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){C&&!n?rt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function Et(){return I(" ")}function St(){return I("")}function At(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return t===""?null:+t}function lt(t){return Array.from(t.childNodes)}function ut(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function K(t,e,n,i,c=!1){ut(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(e(s)){const o=n(s);return o===void 0?t.splice(r,1):t[r]=o,c||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(e(s)){const o=n(s);return o===void 0?t.splice(r,1):t[r]=o,c?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function at(t,e,n,i){return K(t,c=>c.nodeName===e,c=>{const u=[];for(let r=0;r<c.attributes.length;r++){const s=c.attributes[r];n[s.name]||u.push(s.name)}u.forEach(r=>c.removeAttribute(r))},()=>i(e))}function Nt(t,e,n){return at(t,e,n,st)}function ft(t,e){return K(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Mt(t){return ft(t," ")}function qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Pt(t,e){t.value=e==null?"":e}function Tt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Bt(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Dt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function dt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,i,e),c}function Lt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let w;function $(t){w=t}function x(){if(!w)throw new Error("Function called outside component initialization");return w}function Ot(t){x().$$.on_mount.push(t)}function It(t){x().$$.after_update.push(t)}function zt(t){x().$$.on_destroy.push(t)}function Ft(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[e];if(c){const u=dt(e,n,{cancelable:i});return c.slice().forEach(r=>{r.call(t,u)}),!u.defaultPrevented}return!0}}function Ht(t,e){return x().$$.context.set(t,e),e}function Wt(t){return x().$$.context.get(t)}const b=[],W=[],A=[],B=[],Q=Promise.resolve();let D=!1;function R(){D||(D=!0,Q.then(U))}function Gt(){return R(),Q}function L(t){A.push(t)}function Jt(t){B.push(t)}const T=new Set;let S=0;function U(){const t=w;do{for(;S<b.length;){const e=b[S];S++,$(e),_t(e.$$)}for($(null),b.length=0,S=0;W.length;)W.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];T.has(n)||(T.add(n),n())}A.length=0}while(b.length);for(;B.length;)B.pop()();D=!1,T.clear(),$(t)}function _t(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const j=new Set;let g;function Kt(){g={r:0,c:[],p:g}}function Qt(){g.r||v(g.c),g=g.p}function V(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Rt(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Ut(t,e){t.d(1),e.delete(t.key)}function Vt(t,e,n,i,c,u,r,s,o,l,f,_){let d=t.length,m=u.length,h=d;const N={};for(;h--;)N[t[h].key]=h;const k=[],M=new Map,q=new Map;for(h=m;h--;){const a=_(c,u,h),p=n(a);let y=r.get(p);y?i&&y.p(a,e):(y=l(p,a),y.c()),M.set(p,k[h]=y),p in N&&q.set(p,Math.abs(h-N[p]))}const z=new Set,F=new Set;function P(a){V(a,1),a.m(s,f),r.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=k[m-1],p=t[d-1],y=a.key,E=p.key;a===p?(f=a.first,d--,m--):M.has(E)?!r.has(y)||z.has(y)?P(a):F.has(E)?d--:q.get(y)>q.get(E)?(F.add(y),P(a)):(z.add(E),d--):(o(p,r),d--)}for(;d--;){const a=t[d];M.has(a.key)||o(a,r)}for(;m;)P(k[m-1]);return k}function Xt(t,e){const n={},i={},c={$$scope:1};let u=t.length;for(;u--;){const r=t[u],s=e[u];if(s){for(const o in r)o in s||(i[o]=1);for(const o in s)c[o]||(n[o]=s[o],c[o]=1);t[u]=s}else for(const o in r)c[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Yt(t){return typeof t=="object"&&t!==null?t:{}}function Zt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function te(t){t&&t.c()}function ee(t,e){t&&t.l(e)}function ht(t,e,n,i){const{fragment:c,on_mount:u,on_destroy:r,after_update:s}=t.$$;c&&c.m(e,n),i||L(()=>{const o=u.map(G).filter(Y);r?r.push(...o):v(o),t.$$.on_mount=[]}),s.forEach(L)}function mt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(b.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ne(t,e,n,i,c,u,r,s=[-1]){const o=w;$(t);const l=t.$$={fragment:null,ctx:null,props:u,update:O,not_equal:c,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:H(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&c(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&pt(t,_)),d}):[],l.update(),f=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){et();const _=lt(e.target);l.fragment&&l.fragment.l(_),_.forEach(ot)}else l.fragment&&l.fragment.c();e.intro&&V(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),nt(),U()}$(o)}class ie{$destroy(){mt(this,1),this.$destroy=O}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const c=i.indexOf(n);c!==-1&&i.splice(c,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{v as $,Xt as A,Yt as B,mt as C,X as D,Gt as E,Wt as F,rt as G,xt as H,Lt as I,Vt as J,$t as K,wt as L,bt as M,gt as N,Ut as O,Ft as P,zt as Q,W as R,ie as S,Zt as T,L as U,Pt as V,Bt as W,At as X,Jt as Y,Ct as Z,kt as _,lt as a,Dt as a0,jt as b,Nt as c,ot as d,st as e,Tt as f,vt as g,ft as h,ne as i,qt as j,Et as k,St as l,Mt as m,O as n,Kt as o,Rt as p,Qt as q,V as r,yt as s,I as t,Ht as u,It as v,Ot as w,te as x,ee as y,ht as z};