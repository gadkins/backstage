/*! For license information please see 4773ebde.3f2d9248.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[765096],{405243:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>u,metadata:()=>a,toc:()=>s});var n=t(824246),o=t(511151);const u={id:"core-plugin-api.subrouteref",title:"SubRouteRef",description:"API reference for SubRouteRef"},c=void 0,a={unversionedId:"reference/core-plugin-api.subrouteref",id:"reference/core-plugin-api.subrouteref",title:"SubRouteRef",description:"API reference for SubRouteRef",source:"@site/../docs/reference/core-plugin-api.subrouteref.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.subrouteref",permalink:"/docs/reference/core-plugin-api.subrouteref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.subrouteref.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.subrouteref",title:"SubRouteRef",description:"API reference for SubRouteRef"}},i={},s=[{value:"Remarks",id:"remarks",level:2}];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.subrouteref",children:(0,n.jsx)(r.code,{children:"SubRouteRef"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Descriptor of a route relative to an absolute ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.routeref",children:"RouteRef"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type SubRouteRef<Params extends AnyParams = any> = {\n    $$routeRefType: 'sub';\n    parent: RouteRef;\n    path: string;\n    params: ParamKeys<Params>;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:["References:"," ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.anyparams",children:"AnyParams"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.routeref",children:"RouteRef"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.paramkeys",children:"ParamKeys"})]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["See ",(0,n.jsx)(r.a,{href:"https://backstage.io/docs/plugins/composability#routing-system",children:"https://backstage.io/docs/plugins/composability#routing-system"}),"."]})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var u,c,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var s in u=Object(arguments[i]))t.call(u,s)&&(a[s]=u[s]);if(r){c=r(u);for(var f=0;f<c.length;f++)n.call(u,c[f])&&(a[c[f]]=u[c[f]])}}return a}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),r.Fragment=u("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,u={},s=null,f=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,n)&&!i.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:f,props:u,_owner:c.current}}r.jsx=s,r.jsxs=s},541535:(e,r,t)=>{var n=t(862525),o=60103,u=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,a=60110,i=60112;r.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),u=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),c=l("react.provider"),a=l("react.context"),i=l("react.forward_ref"),r.Suspense=l("react.suspense"),s=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function b(){}function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var g=v.prototype=new b;g.constructor=v,n(g,m.prototype),g.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var n,u={},c=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(c=""+r.key),r)j.call(r,n)&&!R.hasOwnProperty(n)&&(u[n]=r[n]);var i=arguments.length-2;if(1===i)u.children=t;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];u.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===u[n]&&(u[n]=i[n]);return{$$typeof:o,type:e,key:c,ref:a,props:u,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function O(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function w(e,r,t,n,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case u:i=!0}}if(i)return c=c(i=e),e=""===n?"."+O(i,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(x,"$&/")+"/"),w(c,r,t,"",(function(e){return e}))):null!=c&&(S(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(x,"$&/")+"/")+e)),r.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=n+O(a=e[s],s);i+=w(a,r,t,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(a=e.next()).done;)i+=w(a=a.value,r,t,f=n+O(a,s++),c);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function P(e,r,t){if(null==e)return e;var n=[],o=0;return w(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(d(321));return e}var A={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:P,forEach:function(e,r,t){P(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(d(143));return e}},r.Component=m,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var u=n({},e.props),c=e.key,a=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,i=_.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in r)j.call(r,f)&&!R.hasOwnProperty(f)&&(u[f]=void 0===r[f]&&void 0!==s?s[f]:r[f])}var f=arguments.length-2;if(1===f)u.children=t;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];u.children=s}return{$$typeof:o,type:e.type,key:c,ref:a,props:u,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=S,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>u});var n=t(667294);const o=n.createContext({});function u(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||c:u(e),n.createElement(o.Provider,{value:a},r)}}}]);