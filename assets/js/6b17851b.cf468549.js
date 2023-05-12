/*! For license information please see 6b17851b.cf468549.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[694375],{235744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=n(824246),o=n(511151);const c={id:"plugin-tech-insights-backend-module-jsonfc.jsonrulesenginefactcheckerfactoryoptions",title:"JsonRulesEngineFactCheckerFactoryOptions",description:"API reference for JsonRulesEngineFactCheckerFactoryOptions"},s=void 0,i={unversionedId:"reference/plugin-tech-insights-backend-module-jsonfc.jsonrulesenginefactcheckerfactoryoptions",id:"reference/plugin-tech-insights-backend-module-jsonfc.jsonrulesenginefactcheckerfactoryoptions",title:"JsonRulesEngineFactCheckerFactoryOptions",description:"API reference for JsonRulesEngineFactCheckerFactoryOptions",source:"@site/../docs/reference/plugin-tech-insights-backend-module-jsonfc.jsonrulesenginefactcheckerfactoryoptions.md",sourceDirName:"reference",slug:"/reference/plugin-tech-insights-backend-module-jsonfc.jsonrulesenginefactcheckerfactoryoptions",permalink:"/docs/reference/plugin-tech-insights-backend-module-jsonfc.jsonrulesenginefactcheckerfactoryoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-tech-insights-backend-module-jsonfc.jsonrulesenginefactcheckerfactoryoptions.md",tags:[],version:"current",frontMatter:{id:"plugin-tech-insights-backend-module-jsonfc.jsonrulesenginefactcheckerfactoryoptions",title:"JsonRulesEngineFactCheckerFactoryOptions",description:"API reference for JsonRulesEngineFactCheckerFactoryOptions"}},u={},a=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend-module-jsonfc",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-tech-insights-backend-module-jsonfc"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend-module-jsonfc.jsonrulesenginefactcheckerfactoryoptions",children:(0,r.jsx)(t.code,{children:"JsonRulesEngineFactCheckerFactoryOptions"})})]}),"\n",(0,r.jsx)(t.p,{children:"Constructor options for JsonRulesEngineFactCheckerFactory"}),"\n",(0,r.jsx)(t.p,{children:"Implementation of checkRegistry is optional. If there is a need to use persistent storage for checks, it is recommended to inject a storage implementation here. Otherwise an in-memory option is instantiated and used."}),"\n",(0,r.jsx)(t.p,{children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type JsonRulesEngineFactCheckerFactoryOptions = {\n    checks: TechInsightJsonRuleCheck[];\n    logger: Logger;\n    checkRegistry?: TechInsightCheckRegistry<TechInsightJsonRuleCheck>;\n    operators?: Operator[];\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["References:"," ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend-module-jsonfc.techinsightjsonrulecheck",children:"TechInsightJsonRuleCheck"}),", ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.techinsightcheckregistry",children:"TechInsightCheckRegistry"})]})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,s,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var a in c=Object(arguments[u]))n.call(c,a)&&(i[a]=c[a]);if(t){s=t(c);for(var f=0;f<s.length;f++)r.call(c,s[f])&&(i[s[f]]=c[s[f]])}}return i}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,c={},a=null,f=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,r)&&!u.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:f,props:c,_owner:s.current}}t.jsx=a,t.jsxs=a},541535:(e,t,n)=>{var r=n(862525),o=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,i=60110,u=60112;t.Suspense=60113;var a=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),s=l("react.provider"),i=l("react.context"),u=l("react.forward_ref"),t.Suspense=l("react.suspense"),a=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}function m(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var j=k.prototype=new m;j.constructor=k,r(j,g.prototype),j.isPureReactComponent=!0;var v={current:null},b=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,c={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)b.call(t,r)&&!_.hasOwnProperty(r)&&(c[r]=t[r]);var u=arguments.length-2;if(1===u)c.children=n;else if(1<u){for(var a=Array(u),f=0;f<u;f++)a[f]=arguments[f+2];c.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===c[r]&&(c[r]=u[r]);return{$$typeof:o,type:e,key:s,ref:i,props:c,_owner:v.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case c:u=!0}}if(u)return s=s(u=e),e=""===r?"."+w(u,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(R,"$&/")+"/"),E(s,t,n,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=r+w(i=e[a],a);u+=E(i,t,n,f,s)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(i=e.next()).done;)u+=E(i=i.value,t,n,f=r+w(i,a++),s);else if("object"===i)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function x(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var F={current:null};function P(){var e=F.current;if(null===e)throw Error(h(321));return e}var $={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:x,forEach:function(e,t,n){x(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(h(143));return e}},t.Component=g,t.PureComponent=k,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var c=r({},e.props),s=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=v.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in t)b.call(t,f)&&!_.hasOwnProperty(f)&&(c[f]=void 0===t[f]&&void 0!==a?a[f]:t[f])}var f=arguments.length-2;if(1===f)c.children=n;else if(1<f){a=Array(f);for(var l=0;l<f;l++)a[l]=arguments[l+2];c.children=a}return{$$typeof:o,type:e.type,key:s,ref:i,props:c,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:a,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return P().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,n){return P().useReducer(e,t,n)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>c});var r=n(667294);const o=r.createContext({});function c(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:c(e),r.createElement(o.Provider,{value:i},t)}}}]);