var xe=Object.defineProperty,ze=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var de=(o,l,t)=>l in o?xe(o,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[l]=t,H=(o,l)=>{for(var t in l||(l={}))Le.call(l,t)&&de(o,t,l[t]);if(ue)for(var t of ue(l))Ce.call(l,t)&&de(o,t,l[t]);return o},K=(o,l)=>ze(o,Ie(l));var fe=(o,l,t)=>new Promise((i,z)=>{var h=d=>{try{$(t.next(d))}catch(p){z(p)}},s=d=>{try{$(t.throw(d))}catch(p){z(p)}},$=d=>d.done?i(d.value):Promise.resolve(d.value).then(h,s);$((t=t.apply(o,l)).next())});import{m as ve,u as M}from"./request.b205aa07.js";import{d as me,aw as pe,r as _,ax as Ee,s as Te,c as b,w as oe,Z as ge,o as we,a as k,b as le,h as u,e as E,p as w,n as f,u as a,j as Oe,k as x,f as N,F as re,q as Se,y as Ne,Q as $e,R as Ae,i as ie,g as U,T as Re,X as Ye,ay as Xe,z as Be,t as Me,m as Ve}from"./index.9f622a37.js";import{ag as De,A,b as he,d as se,I as ce,ap as Fe,aq as je,u as ye,P as Pe,E as S,i as He,ar as We,ad as Ze,as as qe,z as Qe,at as Ge,au as Ke,_ as _e,O as B,af as Ue,w as be,Q as Je,a as et}from"./base.130d3d79.js";import{u as ke}from"./index.0cd3ee2d.js";import{d as tt}from"./debounce.1c205aad.js";import{u as at}from"./index.36cab1dc.js";import{g as nt}from"./scroll.4c4cec4f.js";var ot="Expected a function";function ne(o,l,t){var i=!0,z=!0;if(typeof o!="function")throw new TypeError(ot);return De(t)&&(i="leading"in t?!!t.leading:i,z="trailing"in t?!!t.trailing:z),tt(o,l,{leading:i,maxWait:l,trailing:z})}const lt=(o,l)=>{if(!A||!o||!l)return!1;const t=o.getBoundingClientRect();let i;return l instanceof Element?i=l.getBoundingClientRect():i={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},t.top<i.bottom&&t.bottom>i.top&&t.right>i.left&&t.left<i.right},Tt=o=>{let l,t;return o.type==="touchend"?(t=o.changedTouches[0].clientY,l=o.changedTouches[0].clientX):o.type.startsWith("touch")?(t=o.touches[0].clientY,l=o.touches[0].clientX):(t=o.clientY,l=o.clientX),{clientX:l,clientY:t}},rt=()=>A&&/firefox/i.test(window.navigator.userAgent),it=he({urlList:{type:se(Array),default:()=>ve([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),st={close:()=>!0,switch:o=>ce(o)},ct=["src"],ut={name:"ElImageViewer"},dt=me(K(H({},ut),{props:it,emits:st,setup(o,{emit:l}){const t=o,i={CONTAIN:{name:"contain",icon:pe(Fe)},ORIGINAL:{name:"original",icon:pe(je)}},z=rt()?"DOMMouseScroll":"mousewheel",{t:h}=ke(),s=ye("image-viewer"),{nextZIndex:$}=Pe(),d=_(),p=_([]),I=Ee(),L=_(!0),v=_(t.initialIndex),g=Te(i.CONTAIN),c=_({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),V=b(()=>{const{urlList:n}=t;return n.length<=1}),R=b(()=>v.value===0),W=b(()=>v.value===t.urlList.length-1),J=b(()=>t.urlList[v.value]),D=b(()=>{const{scale:n,deg:e,offsetX:r,offsetY:m,enableTransition:T}=c.value;let y=r/n,O=m/n;switch(e%360){case 90:case-270:[y,O]=[O,-y];break;case 180:case-180:[y,O]=[-y,-O];break;case 270:case-90:[y,O]=[-O,y];break}const X={transform:`scale(${n}) rotate(${e}deg) translate(${y}px, ${O}px)`,transition:T?"transform .3s":""};return g.value.name===i.CONTAIN.name&&(X.maxWidth=X.maxHeight="100%"),X}),ee=b(()=>ce(t.zIndex)?t.zIndex:$());function Y(){te(),l("close")}function F(){const n=ne(r=>{switch(r.code){case B.esc:t.closeOnPressEscape&&Y();break;case B.space:P();break;case B.left:Q();break;case B.up:C("zoomIn");break;case B.right:G();break;case B.down:C("zoomOut");break}}),e=ne(r=>{(r.wheelDelta?r.wheelDelta:-r.detail)>0?C("zoomIn",{zoomRate:1.2,enableTransition:!1}):C("zoomOut",{zoomRate:1.2,enableTransition:!1})});I.run(()=>{M(document,"keydown",n),M(document,z,e)})}function te(){I.stop()}function ae(){L.value=!1}function Z(n){L.value=!1,n.target.alt=h("el.image.error")}function q(n){if(L.value||n.button!==0||!d.value)return;c.value.enableTransition=!1;const{offsetX:e,offsetY:r}=c.value,m=n.pageX,T=n.pageY,y=ne(X=>{c.value=K(H({},c.value),{offsetX:e+X.pageX-m,offsetY:r+X.pageY-T})}),O=M(document,"mousemove",y);M(document,"mouseup",()=>{O()}),n.preventDefault()}function j(){c.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function P(){if(L.value)return;const n=Ue(i),e=Object.values(i),r=g.value.name,T=(e.findIndex(y=>y.name===r)+1)%n.length;g.value=i[n[T]],j()}function Q(){if(R.value&&!t.infinite)return;const n=t.urlList.length;v.value=(v.value-1+n)%n}function G(){if(W.value&&!t.infinite)return;const n=t.urlList.length;v.value=(v.value+1)%n}function C(n,e={}){if(L.value)return;const{zoomRate:r,rotateDeg:m,enableTransition:T}=H({zoomRate:1.4,rotateDeg:90,enableTransition:!0},e);switch(n){case"zoomOut":c.value.scale>.2&&(c.value.scale=Number.parseFloat((c.value.scale/r).toFixed(3)));break;case"zoomIn":c.value.scale<7&&(c.value.scale=Number.parseFloat((c.value.scale*r).toFixed(3)));break;case"clockwise":c.value.deg+=m;break;case"anticlockwise":c.value.deg-=m;break}c.value.enableTransition=T}return oe(J,()=>{ge(()=>{const n=p.value[0];n!=null&&n.complete||(L.value=!0)})}),oe(v,n=>{j(),l("switch",n)}),we(()=>{var n,e;F(),(e=(n=d.value)==null?void 0:n.focus)==null||e.call(n)}),(n,e)=>(k(),le(Ye,{to:"body",disabled:!n.teleported},[u(Re,{name:"viewer-fade",appear:""},{default:E(()=>[w("div",{ref_key:"wrapper",ref:d,tabindex:-1,class:f(a(s).e("wrapper")),style:ie({zIndex:a(ee)})},[w("div",{class:f(a(s).e("mask")),onClick:e[0]||(e[0]=Oe(r=>n.hideOnClickModal&&Y(),["self"]))},null,2),x(" CLOSE "),w("span",{class:f([a(s).e("btn"),a(s).e("close")]),onClick:Y},[u(a(S),null,{default:E(()=>[u(a(He))]),_:1})],2),x(" ARROW "),a(V)?x("v-if",!0):(k(),N(re,{key:0},[w("span",{class:f([a(s).e("btn"),a(s).e("prev"),a(s).is("disabled",!n.infinite&&a(R))]),onClick:Q},[u(a(S),null,{default:E(()=>[u(a(We))]),_:1})],2),w("span",{class:f([a(s).e("btn"),a(s).e("next"),a(s).is("disabled",!n.infinite&&a(W))]),onClick:G},[u(a(S),null,{default:E(()=>[u(a(Ze))]),_:1})],2)],64)),x(" ACTIONS "),w("div",{class:f([a(s).e("btn"),a(s).e("actions")])},[w("div",{class:f(a(s).e("actions__inner"))},[u(a(S),{onClick:e[1]||(e[1]=r=>C("zoomOut"))},{default:E(()=>[u(a(qe))]),_:1}),u(a(S),{onClick:e[2]||(e[2]=r=>C("zoomIn"))},{default:E(()=>[u(a(Qe))]),_:1}),w("i",{class:f(a(s).e("actions__divider"))},null,2),u(a(S),{onClick:P},{default:E(()=>[(k(),le(Se(a(g).icon)))]),_:1}),w("i",{class:f(a(s).e("actions__divider"))},null,2),u(a(S),{onClick:e[3]||(e[3]=r=>C("anticlockwise"))},{default:E(()=>[u(a(Ge))]),_:1}),u(a(S),{onClick:e[4]||(e[4]=r=>C("clockwise"))},{default:E(()=>[u(a(Ke))]),_:1})],2)],2),x(" CANVAS "),w("div",{class:f(a(s).e("canvas"))},[(k(!0),N(re,null,Ne(n.urlList,(r,m)=>$e((k(),N("img",{ref_for:!0,ref:T=>p.value[m]=T,key:r,src:r,style:ie(a(D)),class:f(a(s).e("img")),onLoad:ae,onError:Z,onMousedown:q},null,46,ct)),[[Ae,m===v.value]])),128))],2),U(n.$slots,"default")],6)]),_:3})],8,["disabled"]))}}));var ft=_e(dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const pt=be(ft),vt=he({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:se([String,Object])},previewSrcList:{type:se(Array),default:()=>ve([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0}}),mt={load:o=>o instanceof Event,error:o=>o instanceof Event,switch:o=>ce(o),close:()=>!0},gt=["src","loading"],wt={key:0},ht={name:"ElImage",inheritAttrs:!1},yt=me(K(H({},ht),{props:vt,emits:mt,setup(o,{emit:l}){const t=o;let i="";const{t:z}=ke(),h=ye("image"),s=Xe(),$=at(),d=_(),p=_(!1),I=_(!0),L=_(!1),v=_(),g=_(),c=A&&"loading"in HTMLImageElement.prototype;let V,R;const W=b(()=>s.style),J=b(()=>{const{fit:e}=t;return A&&e?{objectFit:e}:{}}),D=b(()=>{const{previewSrcList:e}=t;return Array.isArray(e)&&e.length>0}),ee=b(()=>{const{previewSrcList:e,initialIndex:r}=t;let m=r;return r>e.length-1&&(m=0),m}),Y=b(()=>t.loading==="eager"?!1:!c&&t.loading==="lazy"||t.lazy),F=()=>{!A||(I.value=!0,p.value=!1,d.value=t.src)};function te(e){I.value=!1,p.value=!1,l("load",e)}function ae(e){I.value=!1,p.value=!0,l("error",e)}function Z(){lt(v.value,g.value)&&(F(),P())}const q=et(Z,200);function j(){return fe(this,null,function*(){var e;if(!A)return;yield ge();const{scrollContainer:r}=t;Je(r)?g.value=r:Ve(r)&&r!==""?g.value=(e=document.querySelector(r))!=null?e:void 0:v.value&&(g.value=nt(v.value)),g.value&&(V=M(g,"scroll",q),setTimeout(()=>Z(),100))})}function P(){!A||!g.value||!q||(V==null||V(),g.value=void 0)}function Q(e){if(!!e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function G(){!D.value||(R=M("wheel",Q,{passive:!1}),i=document.body.style.overflow,document.body.style.overflow="hidden",L.value=!0)}function C(){R==null||R(),document.body.style.overflow=i,L.value=!1,l("close")}function n(e){l("switch",e)}return oe(()=>t.src,()=>{Y.value?(I.value=!0,p.value=!1,P(),j()):F()}),we(()=>{Y.value?j():F()}),(e,r)=>(k(),N("div",{ref_key:"container",ref:v,class:f([a(h).b(),e.$attrs.class]),style:ie(a(W))},[d.value!==void 0&&!p.value?(k(),N("img",Be({key:0},a($),{src:d.value,loading:e.loading,style:a(J),class:[a(h).e("inner"),a(D)&&a(h).e("preview"),I.value&&a(h).is("loading")],onClick:G,onLoad:te,onError:ae}),null,16,gt)):x("v-if",!0),I.value||p.value?(k(),N("div",{key:1,class:f(a(h).e("wrapper"))},[I.value?U(e.$slots,"placeholder",{key:0},()=>[w("div",{class:f(a(h).e("placeholder"))},null,2)]):p.value?U(e.$slots,"error",{key:1},()=>[w("div",{class:f(a(h).e("error"))},Me(a(z)("el.image.error")),3)]):x("v-if",!0)],2)):x("v-if",!0),a(D)?(k(),N(re,{key:2},[L.value?(k(),le(a(pt),{key:0,"z-index":e.zIndex,"initial-index":a(ee),infinite:e.infinite,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:C,onSwitch:n},{default:E(()=>[e.$slots.viewer?(k(),N("div",wt,[U(e.$slots,"viewer")])):x("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):x("v-if",!0)],64)):x("v-if",!0)],6))}}));var _t=_e(yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const Ot=be(_t);export{Ot as E,Tt as g};