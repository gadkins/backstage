/*! For license information please see 3e1c30e8.93752f45.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[339223],{950072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(824246),i=n(511151);const s={id:"plugin-tech-insights-backend",title:"@backstage/plugin-tech-insights-backend",description:"API Reference for @backstage/plugin-tech-insights-backend"},c=void 0,o={unversionedId:"reference/plugin-tech-insights-backend",id:"reference/plugin-tech-insights-backend",title:"@backstage/plugin-tech-insights-backend",description:"API Reference for @backstage/plugin-tech-insights-backend",source:"@site/../docs/reference/plugin-tech-insights-backend.md",sourceDirName:"reference",slug:"/reference/plugin-tech-insights-backend",permalink:"/docs/reference/plugin-tech-insights-backend",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-tech-insights-backend.md",tags:[],version:"current",frontMatter:{id:"plugin-tech-insights-backend",title:"@backstage/plugin-tech-insights-backend",description:"API Reference for @backstage/plugin-tech-insights-backend"}},a={},l=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-tech-insights-backend"})})]}),"\n",(0,r.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Function"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.createfactretrieverregistration",children:"createFactRetrieverRegistration(options)"})}),(0,r.jsx)(t.td,{children:"A helper function to construct fact retriever registrations."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.createrouter",children:"createRouter(options)"})}),(0,r.jsxs)(t.td,{children:["Constructs a tech-insights router.","Exposes endpoints to handle facts Exposes optional endpoints to handle checks if a FactChecker implementation is passed in"]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Interface"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.factretrieverengine",children:"FactRetrieverEngine"})}),(0,r.jsx)(t.td,{children:"FactRetrieverEngine responsible scheduling and running fact retrieval tasks."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.factretrieverregistry",children:"FactRetrieverRegistry"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.routeroptions",children:"RouterOptions"})}),(0,r.jsx)(t.td,{children:"RouterOptions to construct TechInsights endpoints"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.techinsightsoptions",children:"TechInsightsOptions"})}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"variables",children:"Variables"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.buildtechinsightscontext",children:"buildTechInsightsContext"})}),(0,r.jsx)(t.td,{children:"Constructs needed persistence context, fact retriever engine and optionally fact checker implementations to be used in the tech insights module."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.entitymetadatafactretriever",children:"entityMetadataFactRetriever"})}),(0,r.jsx)(t.td,{children:"Generates facts which indicate the completeness of entity metadata."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.entityownershipfactretriever",children:"entityOwnershipFactRetriever"})}),(0,r.jsx)(t.td,{children:"Generates facts which indicate the quality of data in the spec.owner field."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.initializepersistencecontext",children:"initializePersistenceContext"})}),(0,r.jsx)(t.td,{children:"A factory function to construct persistence context for running implementation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.techdocsfactretriever",children:"techdocsFactRetriever"})}),(0,r.jsx)(t.td,{children:"Generates facts related to the completeness of techdocs configuration for entities."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type Alias"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.factretrieverregistrationoptions",children:"FactRetrieverRegistrationOptions"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.persistencecontext",children:"PersistenceContext"})}),(0,r.jsx)(t.td,{children:"A Container for persistence related components in TechInsights"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.persistencecontextoptions",children:"PersistenceContextOptions"})}),(0,r.jsx)(t.td,{children:"A Container for persistence context initialization options"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend.techinsightscontext",children:"TechInsightsContext"})}),(0,r.jsx)(t.td,{})]})]})]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var s,c,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in s=Object(arguments[a]))n.call(s,l)&&(o[l]=s[l]);if(t){c=t(s);for(var u=0;u<c.length;u++)r.call(s,c[u])&&(o[c[u]]=s[c[u]])}}return o}},371426:(e,t,n)=>{n(862525);var r=n(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;i=s("react.element"),t.Fragment=s("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:u,props:s,_owner:c.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),i=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,o=60110,a=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;i=d("react.element"),s=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),c=d("react.provider"),o=d("react.context"),a=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function x(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=j.prototype;var b=y.prototype=new x;b.constructor=y,r(b,j.prototype),b.isPureReactComponent=!0;var v={current:null},m=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,s={},c=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(c=""+t.key),t)m.call(t,r)&&!k.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(1===a)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===s[r]&&(s[r]=a[r]);return{$$typeof:i,type:e,key:c,ref:o,props:s,_owner:v.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var w=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,c){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case s:a=!0}}if(a)return c=c(a=e),e=""===r?"."+R(a,0):r,Array.isArray(c)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),C(c,t,n,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),t.push(c)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+R(o=e[l],l);a+=C(o,t,n,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)a+=C(o=o.value,t,n,u=r+R(o,l++),c);else if("object"===o)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function E(e,t,n){if(null==e)return e;var r=[],i=0;return C(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(f(321));return e}var I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(f(143));return e}},t.Component=j,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var s=r({},e.props),c=e.key,o=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,a=v.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)m.call(t,u)&&!k.hasOwnProperty(u)&&(s[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:i,type:e.type,key:c,ref:o,props:s,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:o,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>s});var r=n(667294);const i=r.createContext({});function s(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:s(e),r.createElement(i.Provider,{value:o},t)}}}]);