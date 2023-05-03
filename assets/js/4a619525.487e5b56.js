/*! For license information please see 4a619525.487e5b56.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[848894],{79408:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>f});var n=t(824246),o=t(511151);const i={id:"config.configreader",title:"ConfigReader",description:"API reference for ConfigReader"},c=void 0,s={unversionedId:"reference/config.configreader",id:"reference/config.configreader",title:"ConfigReader",description:"API reference for ConfigReader",source:"@site/../docs/reference/config.configreader.md",sourceDirName:"reference",slug:"/reference/config.configreader",permalink:"/docs/reference/config.configreader",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/config.configreader.md",tags:[],version:"current",frontMatter:{id:"config.configreader",title:"ConfigReader",description:"API reference for ConfigReader"}},a={},f=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/config",children:(0,n.jsx)(r.code,{children:"@backstage/config"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader",children:(0,n.jsx)(r.code,{children:"ConfigReader"})})]}),"\n",(0,n.jsxs)(r.p,{children:["An implementation of the ",(0,n.jsx)(r.code,{children:"Config"})," interface that uses a plain JavaScript object for the backing data, with the ability of linking multiple readers together."]}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class ConfigReader implements Config \n"})}),"\n",(0,n.jsxs)(r.p,{children:["Implements:"," ",(0,n.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"})]}),"\n",(0,n.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Constructor"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader._constructor_",children:"(constructor)(data, context, fallback, prefix)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Constructs a new instance of the ","ConfigReader"," class"]})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Method"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.fromconfigs",children:"fromConfigs(configs)"})}),(0,n.jsx)(r.td,{children:"static"}),(0,n.jsx)(r.td,{children:"Instantiates the config reader from a list of application config objects."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.get",children:"get(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Same as ","getOptional",", but will throw an error if there's no value for the given key."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getboolean",children:"getBoolean(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Same as ","getOptionalBoolean",", but will throw an error if there's no value for the given key."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getconfig",children:"getConfig(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Same as ","getOptionalConfig",", but will throw an error if there's no value for the given key."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getconfigarray",children:"getConfigArray(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Same as ","getOptionalConfigArray",", but will throw an error if there's no value for the given key."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getnumber",children:"getNumber(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Same as ","getOptionalNumber",", but will throw an error if there's no value for the given key."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getoptional",children:"getOptional(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Read out all configuration data for the given key.","Usage of this method should be avoided as the typed alternatives provide much better error reporting. The main use-case of this method is to determine the type of a configuration value in the case where there are multiple possible shapes of the configuration."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getoptionalboolean",children:"getOptionalBoolean(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Reads a configuration value at the given key, expecting it to be a boolean."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getoptionalconfig",children:"getOptionalConfig(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Creates a sub-view of the configuration object. The configuration value at the position of the provided key must be an object."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getoptionalconfigarray",children:"getOptionalConfigArray(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Creates a sub-view of an array of configuration objects. The configuration value at the position of the provided key must be an array of objects."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getoptionalnumber",children:"getOptionalNumber(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Reads a configuration value at the given key, expecting it to be a number."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getoptionalstring",children:"getOptionalString(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Reads a configuration value at the given key, expecting it to be a string."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getoptionalstringarray",children:"getOptionalStringArray(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Reads a configuration value at the given key, expecting it to be an array of strings."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getstring",children:"getString(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Same as ","getOptionalString",", but will throw an error if there's no value for the given key."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getstringarray",children:"getStringArray(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Same as ","getOptionalStringArray",", but will throw an error if there's no value for the given key."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.has",children:"has(key)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Checks whether the given key is present."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.keys",children:"keys()"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Lists all available configuration keys."})]})]})]})]})}const d=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var f in i=Object(arguments[a]))t.call(i,f)&&(s[f]=i[f]);if(r){c=r(i);for(var l=0;l<c.length;l++)n.call(i,c[l])&&(s[c[l]]=i[c[l]])}}return s}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,t){var n,i={},f=null,l=null;for(n in void 0!==t&&(f=""+t),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!a.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:f,ref:l,props:i,_owner:c.current}}r.jsx=f,r.jsxs=f},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,s=60110,a=60112;r.Suspense=60113;var f=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),r.Fragment=d("react.fragment"),r.StrictMode=d("react.strict_mode"),r.Profiler=d("react.profiler"),c=d("react.provider"),s=d("react.context"),a=d("react.forward_ref"),r.Suspense=d("react.suspense"),f=d("react.memo"),l=d("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p={};function j(e,r,t){this.props=e,this.context=r,this.refs=p,this.updater=t||g}function y(){}function x(e,r,t){this.props=e,this.context=r,this.refs=p,this.updater=t||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=j.prototype;var v=x.prototype=new y;v.constructor=x,n(v,j.prototype),v.isPureReactComponent=!0;var b={current:null},m=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,r,t){var n,i={},c=null,s=null;if(null!=r)for(n in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(c=""+r.key),r)m.call(r,n)&&!k.hasOwnProperty(n)&&(i[n]=r[n]);var a=arguments.length-2;if(1===a)i.children=t;else if(1<a){for(var f=Array(a),l=0;l<a;l++)f[l]=arguments[l+2];i.children=f}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===i[n]&&(i[n]=a[n]);return{$$typeof:o,type:e,key:c,ref:s,props:i,_owner:b.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function O(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return c=c(a=e),e=""===n?"."+O(a,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),S(c,r,t,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),r.push(c)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var l=n+O(s=e[f],f);a+=S(s,r,t,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),f=0;!(s=e.next()).done;)a+=S(s=s.value,r,t,l=n+O(s,f++),c);else if("object"===s)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function R(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(h(321));return e}var A={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:R,forEach:function(e,r,t){R(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return R(e,(function(){r++})),r},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(h(143));return e}},r.Component=j,r.PureComponent=x,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,t){if(null==e)throw Error(h(267,e));var i=n({},e.props),c=e.key,s=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,a=b.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in r)m.call(r,l)&&!k.hasOwnProperty(l)&&(i[l]=void 0===r[l]&&void 0!==f?f[l]:r[l])}var l=arguments.length-2;if(1===l)i.children=t;else if(1<l){f=Array(l);for(var d=0;d<l;d++)f[d]=arguments[d+2];i.children=f}return{$$typeof:o,type:e.type,key:c,ref:s,props:i,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=_,r.createFactory=function(e){var r=_.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>s,ah:()=>i});var n=t(667294);const o=n.createContext({});function i(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function s({components:e,children:r,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||c:i(e),n.createElement(o.Provider,{value:s},r)}}}]);