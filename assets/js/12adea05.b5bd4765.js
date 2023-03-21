/*! For license information please see 12adea05.b5bd4765.js.LICENSE.txt */
(self.webpackChunksevencorners_styleguide=self.webpackChunksevencorners_styleguide||[]).push([[3308],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||s;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8684:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=r(7462),o=r(7294),s=r(3905),a=r(4051),i=r(1555);const c="heroSize_CGf7";const l=function(e){let{}=e;return o.createElement(o.Fragment,null,o.createElement(a.Z,{className:`d-flex justify-content-center sc-bg-typography ${c}`},o.createElement(i.Z,{sm:12,md:8,className:"d-flex align-items-center p-5 px-md-0"},o.createElement("div",null,o.createElement("h1",{className:"text-center text-md-start"},"This is a Hero Banner"),o.createElement("p",{className:"text-center text-md-start fs-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")))))},u={sidebar_position:5,slug:"/hero-banners"},p="Hero Banners",d={unversionedId:"heros-banners",id:"heros-banners",title:"Hero Banners",description:"Simple Card",source:"@site/docs/heros-banners.mdx",sourceDirName:".",slug:"/hero-banners",permalink:"/sevencorners-styleguide/hero-banners",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/hero-banners"},sidebar:"tutorialSidebar",previous:{title:"Cards",permalink:"/sevencorners-styleguide/cards"},next:{title:"Tutorial - Extras",permalink:"/sevencorners-styleguide/category/tutorial---extras"}},f={},m=[{value:"Simple Card",id:"simple-card",level:2}],y={toc:m};function v(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"hero-banners"},"Hero Banners"),(0,s.kt)("h2",{id:"simple-card"},"Simple Card"),(0,s.kt)("p",null,"It uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"sc-bg-typography")," class to change the background image."),(0,s.kt)("div",{className:"p-3"},(0,s.kt)(l,{mdxType:"HeroBanner"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<div class="Hero_heroSize__v16OW d-flex justify-content-center sc-bg-typography row">\n    <div class="d-flex align-items-center col-md-8 col-sm-12 p-5 px-md-0">\n        <div>\n            <h1 class="text-center text-md-start">This is a Hero Banner</h1>\n            <p class="text-center text-md-start fs-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>\n        </div>\n    </div>\n</div>\n')))}v.isMDXComponent=!0},4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},1555:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(4184),o=r.n(n),s=r(7294),a=r(6792),i=r(5893);const c=s.forwardRef(((e,t)=>{const[{className:r,...n},{as:s="div",bsPrefix:c,spans:l}]=function({as:e,bsPrefix:t,className:r,...n}){t=(0,a.vE)(t,"col");const s=(0,a.pi)(),i=(0,a.zG)(),c=[],l=[];return s.forEach((e=>{const r=n[e];let o,s,a;delete n[e],"object"==typeof r&&null!=r?({span:o,offset:s,order:a}=r):o=r;const u=e!==i?`-${e}`:"";o&&c.push(!0===o?`${t}${u}`:`${t}${u}-${o}`),null!=a&&l.push(`order${u}-${a}`),null!=s&&l.push(`offset${u}-${s}`)})),[{...n,className:o()(r,...c,...l)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,i.jsx)(s,{...n,ref:t,className:o()(r,!l.length&&c)})}));c.displayName="Col";const l=c},4051:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(4184),o=r.n(n),s=r(7294),a=r(6792),i=r(5893);const c=s.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},s)=>{const c=(0,a.vE)(e,"row"),l=(0,a.pi)(),u=(0,a.zG)(),p=`${c}-cols`,d=[];return l.forEach((e=>{const t=n[e];let r;delete n[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const o=e!==u?`-${e}`:"";null!=r&&d.push(`${p}${o}-${r}`)})),(0,i.jsx)(r,{ref:s,...n,className:o()(t,c,...d)})}));c.displayName="Row";const l=c},6792:(e,t,r)=>{"use strict";r.d(t,{pi:()=>l,vE:()=>c,zG:()=>u});var n=r(7294);r(5893);const o=["xxl","xl","lg","md","sm","xs"],s=n.createContext({prefixes:{},breakpoints:o,minBreakpoint:"xs"}),{Consumer:a,Provider:i}=s;function c(e,t){const{prefixes:r}=(0,n.useContext)(s);return e||r[t]||t}function l(){const{breakpoints:e}=(0,n.useContext)(s);return e}function u(){const{minBreakpoint:e}=(0,n.useContext)(s);return e}},5251:(e,t,r)=>{"use strict";r(7418);var n=r(7294),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),s("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:a.current}}t.jsx=l},5893:(e,t,r)=>{"use strict";e.exports=r(5251)}}]);