/*! For license information please see e983e476.6c807154.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[799053],{850525:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=t(824246),o=t(511151);const a={id:"plugin-scaffolder-backend.taskworker.onreadytoclaimtask",title:"TaskWorker.onReadyToClaimTask()",description:"API reference for TaskWorker.onReadyToClaimTask()"},c=void 0,i={unversionedId:"reference/plugin-scaffolder-backend.taskworker.onreadytoclaimtask",id:"reference/plugin-scaffolder-backend.taskworker.onreadytoclaimtask",title:"TaskWorker.onReadyToClaimTask()",description:"API reference for TaskWorker.onReadyToClaimTask()",source:"@site/../docs/reference/plugin-scaffolder-backend.taskworker.onreadytoclaimtask.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.taskworker.onreadytoclaimtask",permalink:"/docs/reference/plugin-scaffolder-backend.taskworker.onreadytoclaimtask",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.taskworker.onreadytoclaimtask.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.taskworker.onreadytoclaimtask",title:"TaskWorker.onReadyToClaimTask()",description:"API reference for TaskWorker.onReadyToClaimTask()"}},s={},u=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskworker",children:(0,n.jsx)(r.code,{children:"TaskWorker"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskworker.onreadytoclaimtask",children:(0,n.jsx)(r.code,{children:"onReadyToClaimTask"})})]}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"protected onReadyToClaimTask(): Promise<void>;\n"})}),"\n",(0,n.jsx)(r.p,{children:"Returns:"}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in a=Object(arguments[s]))t.call(a,u)&&(i[u]=a[u]);if(r){c=r(a);for(var f=0;f<c.length;f++)n.call(a,c[f])&&(i[c[f]]=a[c[f]])}}return i}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,a={},u=null,f=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(f=r.ref),r)i.call(r,n)&&!s.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:f,props:a,_owner:c.current}}r.jsx=u,r.jsxs=u},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,i=60110,s=60112;r.Suspense=60113;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),c=l("react.provider"),i=l("react.context"),s=l("react.forward_ref"),r.Suspense=l("react.suspense"),u=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function m(e,r,t){this.props=e,this.context=r,this.refs=k,this.updater=t||y}function h(){}function v(e,r,t){this.props=e,this.context=r,this.refs=k,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var b=v.prototype=new h;b.constructor=v,n(b,m.prototype),b.isPureReactComponent=!0;var g={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,a={},c=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)_.call(r,n)&&!j.hasOwnProperty(n)&&(a[n]=r[n]);var s=arguments.length-2;if(1===s)a.children=t;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];a.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:g.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return c=c(s=e),e=""===n?"."+R(s,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),S(c,r,t,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),r.push(c)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=n+R(i=e[u],u);s+=S(i,r,t,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(i=e.next()).done;)s+=S(i=i.value,r,t,f=n+R(i,u++),c);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function x(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function T(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function P(){var e=E.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:x,forEach:function(e,r,t){x(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return x(e,(function(){r++})),r},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=m,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var a=n({},e.props),c=e.key,i=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,s=g.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in r)_.call(r,f)&&!j.hasOwnProperty(f)&&(a[f]=void 0===r[f]&&void 0!==u?u[f]:r[f])}var f=arguments.length-2;if(1===f)a.children=t;else if(1<f){u=Array(f);for(var l=0;l<f;l++)u[l]=arguments[l+2];a.children=u}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:T}},r.memo=function(e,r){return{$$typeof:u,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return P().useCallback(e,r)},r.useContext=function(e,r){return P().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return P().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return P().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return P().useLayoutEffect(e,r)},r.useMemo=function(e,r){return P().useMemo(e,r)},r.useReducer=function(e,r,t){return P().useReducer(e,r,t)},r.useRef=function(e){return P().useRef(e)},r.useState=function(e){return P().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>i,ah:()=>a});var n=t(667294);const o=n.createContext({});function a(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function i({components:e,children:r,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:a(e),n.createElement(o.Provider,{value:i},r)}}}]);