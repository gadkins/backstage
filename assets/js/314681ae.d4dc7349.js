/*! For license information please see 314681ae.d4dc7349.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[829954],{729330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(824246),o=r(511151);const a={id:"scaling",title:"Scaling Backstage Deployments",sidebar_label:"Scaling",description:"Scaling Backstage production deployments"},i=void 0,s={unversionedId:"deployment/scaling",id:"deployment/scaling",title:"Scaling Backstage Deployments",description:"Scaling Backstage production deployments",source:"@site/../docs/deployment/scaling.md",sourceDirName:"deployment",slug:"/deployment/scaling",permalink:"/docs/deployment/scaling",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/deployment/scaling.md",tags:[],version:"current",frontMatter:{id:"scaling",title:"Scaling Backstage Deployments",sidebar_label:"Scaling",description:"Scaling Backstage production deployments"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/deployment/"},next:{title:"Docker",permalink:"/docs/deployment/docker"}},c={},u=[];function l(e){const t=Object.assign({p:"p",a:"a"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"There are several different methods for scaling Backstage deployments. The most\nstraight-forward one is to simply deploy multiple identical instances and distributing\nincoming requests across them. The one requirement for this to work is that all instances\nneed to share the same external resources, such as the database, and optional caching or\nsearch services. The Backstage backend plugins will coordinate through the database\nto share state and coordinate work."}),"\n",(0,n.jsxs)(t.p,{children:["Another method for scaling Backstage deployments is to break apart the backend\ninto multiple different services, each running a different set of plugins. This\nis a more advanced approach and requires you to be able to route requests to\nthe appropriate backends based on the plugin ID. Both for ingress, but also\ninternal traffic between Backstage backends, which is done by creating a custom\nimplementation of the ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-plugin-api.discoveryservice",children:"DiscoveryService"})," interface."]}),"\n",(0,n.jsx)(t.p,{children:"Lastly, you can also replicate the Backstage deployments across multiple regions.\nThis is not a pattern that there is built-in support for and typically only makes\nsense to do for individual backend plugins."})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in a=Object(arguments[c]))r.call(a,u)&&(s[u]=a[u]);if(t){i=t(a);for(var l=0;l<i.length;l++)n.call(a,i[l])&&(s[i[l]]=a[i[l]])}}return s}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,a={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:i.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),s=f("react.context"),c=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var b=v.prototype=new g;b.constructor=v,n(b,m.prototype),b.isPureReactComponent=!0;var _={current:null},k=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+C(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),E(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+C(s=e[u],u);c+=E(s,t,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=E(s=s.value,t,r,l=n+C(s,u++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function x(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function P(){var e=R.current;if(null===e)throw Error(d(321));return e}var B={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:x,forEach:function(e,t,r){x(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var a=n({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)k.call(t,l)&&!w.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:s,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>a});var n=r(667294);const o=n.createContext({});function a(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||i:a(e),n.createElement(o.Provider,{value:s},t)}}}]);