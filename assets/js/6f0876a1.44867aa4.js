/*! For license information please see 6f0876a1.44867aa4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[79380],{344261:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var t=n(824246),o=n(511151);const i={id:"core-components.signinproviderconfig",title:"SignInProviderConfig",description:"API reference for SignInProviderConfig"},c=void 0,s={unversionedId:"reference/core-components.signinproviderconfig",id:"reference/core-components.signinproviderconfig",title:"SignInProviderConfig",description:"API reference for SignInProviderConfig",source:"@site/../docs/reference/core-components.signinproviderconfig.md",sourceDirName:"reference",slug:"/reference/core-components.signinproviderconfig",permalink:"/docs/reference/core-components.signinproviderconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.signinproviderconfig.md",tags:[],version:"current",frontMatter:{id:"core-components.signinproviderconfig",title:"SignInProviderConfig",description:"API reference for SignInProviderConfig"}},u={},a=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components",children:(0,t.jsx)(r.code,{children:"@backstage/core-components"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components.signinproviderconfig",children:(0,t.jsx)(r.code,{children:"SignInProviderConfig"})})]}),"\n",(0,t.jsx)(r.p,{children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type SignInProviderConfig = {\n    id: string;\n    title: string;\n    message: string;\n    apiRef: ApiRef<ProfileInfoApi & BackstageIdentityApi & SessionApi>;\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:["References:"," ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.apiref",children:"ApiRef"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.profileinfoapi",children:"ProfileInfoApi"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.backstageidentityapi",children:"BackstageIdentityApi"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.sessionapi",children:"SessionApi"})]})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var a in i=Object(arguments[u]))n.call(i,a)&&(s[a]=i[a]);if(r){c=r(i);for(var f=0;f<c.length;f++)t.call(i,c[f])&&(s[c[f]]=i[c[f]])}}return s}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,i={},a=null,f=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(f=r.ref),r)s.call(r,t)&&!u.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:o,type:e,key:a,ref:f,props:i,_owner:c.current}}r.jsx=a,r.jsxs=a},541535:(e,r,n)=>{var t=n(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,s=60110,u=60112;r.Suspense=60113;var a=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),c=l("react.provider"),s=l("react.context"),u=l("react.forward_ref"),r.Suspense=l("react.suspense"),a=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,r,n){this.props=e,this.context=r,this.refs=g,this.updater=n||y}function v(){}function m(e,r,n){this.props=e,this.context=r,this.refs=g,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var _=m.prototype=new v;_.constructor=m,t(_,h.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var t,i={},c=null,s=null;if(null!=r)for(t in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(c=""+r.key),r)j.call(r,t)&&!S.hasOwnProperty(t)&&(i[t]=r[t]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var a=Array(u),f=0;f<u;f++)a[f]=arguments[f+2];i.children=a}if(e&&e.defaultProps)for(t in u=e.defaultProps)void 0===i[t]&&(i[t]=u[t]);return{$$typeof:o,type:e,key:c,ref:s,props:i,_owner:b.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,n,t,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return c=c(u=e),e=""===t?"."+C(u,0):t,Array.isArray(c)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),P(c,r,n,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),r.push(c)),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=t+C(s=e[a],a);u+=P(s,r,n,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(s=e.next()).done;)u+=P(s=s.value,r,n,f=t+C(s,a++),c);else if("object"===s)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function x(e,r,n){if(null==e)return e;var t=[],o=0;return P(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function I(){var e=R.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:x,forEach:function(e,r,n){x(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return x(e,(function(){r++})),r},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=m,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var i=t({},e.props),c=e.key,s=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,u=b.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in r)j.call(r,f)&&!S.hasOwnProperty(f)&&(i[f]=void 0===r[f]&&void 0!==a?a[f]:r[f])}var f=arguments.length-2;if(1===f)i.children=n;else if(1<f){a=Array(f);for(var l=0;l<f;l++)a[l]=arguments[l+2];i.children=a}return{$$typeof:o,type:e.type,key:c,ref:s,props:i,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return I().useCallback(e,r)},r.useContext=function(e,r){return I().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return I().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return I().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return I().useLayoutEffect(e,r)},r.useMemo=function(e,r){return I().useMemo(e,r)},r.useReducer=function(e,r,n){return I().useReducer(e,r,n)},r.useRef=function(e){return I().useRef(e)},r.useState=function(e){return I().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>s,ah:()=>i});var t=n(667294);const o=t.createContext({});function i(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function s({components:e,children:r,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||c:i(e),t.createElement(o.Provider,{value:s},r)}}}]);