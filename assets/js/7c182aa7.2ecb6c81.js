/*! For license information please see 7c182aa7.2ecb6c81.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[879789],{435969:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>f});var n=t(824246),o=t(511151);const a={id:"plugin-graphql-voyager.graphqlvoyagerapiref",title:"graphQlVoyagerApiRef",description:"API reference for graphQlVoyagerApiRef"},i=void 0,u={unversionedId:"reference/plugin-graphql-voyager.graphqlvoyagerapiref",id:"reference/plugin-graphql-voyager.graphqlvoyagerapiref",title:"graphQlVoyagerApiRef",description:"API reference for graphQlVoyagerApiRef",source:"@site/../docs/reference/plugin-graphql-voyager.graphqlvoyagerapiref.md",sourceDirName:"reference",slug:"/reference/plugin-graphql-voyager.graphqlvoyagerapiref",permalink:"/docs/reference/plugin-graphql-voyager.graphqlvoyagerapiref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-graphql-voyager.graphqlvoyagerapiref.md",tags:[],version:"current",frontMatter:{id:"plugin-graphql-voyager.graphqlvoyagerapiref",title:"graphQlVoyagerApiRef",description:"API reference for graphQlVoyagerApiRef"}},c={},f=[];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-graphql-voyager",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-graphql-voyager"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-graphql-voyager.graphqlvoyagerapiref",children:(0,n.jsx)(r.code,{children:"graphQlVoyagerApiRef"})})]}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'graphQlVoyagerApiRef: import("@backstage/core-plugin-api").ApiRef<GraphQLVoyagerApi>\n'})})]})}const s=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var f in a=Object(arguments[c]))t.call(a,f)&&(u[f]=a[f]);if(r){i=r(a);for(var l=0;l<i.length;l++)n.call(a,i[l])&&(u[i[l]]=a[i[l]])}}return u}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,t){var n,a={},f=null,l=null;for(n in void 0!==t&&(f=""+t),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,n)&&!c.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:f,ref:l,props:a,_owner:i.current}}r.jsx=f,r.jsxs=f},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,u=60110,c=60112;r.Suspense=60113;var f=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),r.Fragment=s("react.fragment"),r.StrictMode=s("react.strict_mode"),r.Profiler=s("react.profiler"),i=s("react.provider"),u=s("react.context"),c=s("react.forward_ref"),r.Suspense=s("react.suspense"),f=s("react.memo"),l=s("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function h(e,r,t){this.props=e,this.context=r,this.refs=d,this.updater=t||g}function v(){}function m(e,r,t){this.props=e,this.context=r,this.refs=d,this.updater=t||g}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var _=m.prototype=new v;_.constructor=m,n(_,h.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,t){var n,a={},i=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(i=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(a[n]=r[n]);var c=arguments.length-2;if(1===c)a.children=t;else if(1<c){for(var f=Array(c),l=0;l<c;l++)f[l]=arguments[l+2];a.children=f}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:u,props:a,_owner:b.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,t,n,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+S(c,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(R,"$&/")+"/"),C(i,r,t,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),r.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var l=n+S(u=e[f],f);c+=C(u,r,t,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),f=0;!(u=e.next()).done;)c+=C(u=u.value,r,t,l=n+S(u,f++),i);else if("object"===u)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function E(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function x(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var q={current:null};function P(){var e=q.current;if(null===e)throw Error(y(321));return e}var $={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:E,forEach:function(e,r,t){E(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(y(143));return e}},r.Component=h,r.PureComponent=m,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,t){if(null==e)throw Error(y(267,e));var a=n({},e.props),i=e.key,u=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,c=b.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in r)j.call(r,l)&&!k.hasOwnProperty(l)&&(a[l]=void 0===r[l]&&void 0!==f?f[l]:r[l])}var l=arguments.length-2;if(1===l)a.children=t;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];a.children=f}return{$$typeof:o,type:e.type,key:i,ref:u,props:a,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var r=O.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:x}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return P().useCallback(e,r)},r.useContext=function(e,r){return P().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return P().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return P().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return P().useLayoutEffect(e,r)},r.useMemo=function(e,r){return P().useMemo(e,r)},r.useReducer=function(e,r,t){return P().useReducer(e,r,t)},r.useRef=function(e){return P().useRef(e)},r.useState=function(e){return P().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>a});var n=t(667294);const o=n.createContext({});function a(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||i:a(e),n.createElement(o.Provider,{value:u},r)}}}]);