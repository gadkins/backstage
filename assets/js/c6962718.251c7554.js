/*! For license information please see c6962718.251c7554.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[501024],{158007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(824246),o=r(511151);const i={id:"plugin-catalog-backend-module-github",title:"@backstage/plugin-catalog-backend-module-github",description:"API Reference for @backstage/plugin-catalog-backend-module-github"},a=void 0,c={unversionedId:"reference/plugin-catalog-backend-module-github",id:"reference/plugin-catalog-backend-module-github",title:"@backstage/plugin-catalog-backend-module-github",description:"API Reference for @backstage/plugin-catalog-backend-module-github",source:"@site/../docs/reference/plugin-catalog-backend-module-github.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-github",permalink:"/docs/reference/plugin-catalog-backend-module-github",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-github.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-github",title:"@backstage/plugin-catalog-backend-module-github",description:"API Reference for @backstage/plugin-catalog-backend-module-github"}},s={},l=[{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-github"})})]}),"\n",(0,n.jsx)(t.p,{children:"A Backstage catalog backend module that helps integrate towards Github"}),"\n",(0,n.jsx)(t.h2,{id:"classes",children:"Classes"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Class"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubdiscoveryprocessor",children:"GithubDiscoveryProcessor"})}),(0,n.jsxs)(t.td,{children:["Extracts repositories out of a GitHub org.","The following will create locations for all projects which have a catalog-info.yaml on the default branch. The first is shorthand for the second.",'target: "',(0,n.jsx)(t.a,{href:"https://github.com/backstage",children:"https://github.com/backstage"}),'" or target: ',(0,n.jsx)(t.a,{href:"https://github.com/backstage/%5C*/blob/-/catalog-info.yaml",children:"https://github.com/backstage/\\*/blob/-/catalog-info.yaml"}),"You may also explicitly specify the source branch:","target: ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/%5C*/blob/main/catalog-info.yaml",children:"https://github.com/backstage/\\*/blob/main/catalog-info.yaml"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubentityprovider",children:"GithubEntityProvider"})}),(0,n.jsxs)(t.td,{children:["Discovers catalog files located in [GitHub](",(0,n.jsx)(t.a,{href:"https://github.com",children:"https://github.com"}),"). The provider will search your GitHub account and register catalog files matching the configured path as Location entity and via following processing steps add all contained catalog entities. This can be useful as an alternative to static locations or manually adding things to the catalog."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubentityprovider",children:"GitHubEntityProvider"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githublocationanalyzer",children:"GithubLocationAnalyzer"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgentityprovider",children:"GithubMultiOrgEntityProvider"})}),(0,n.jsx)(t.td,{children:"Ingests org data (users and groups) from GitHub."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgreaderprocessor",children:"GithubMultiOrgReaderProcessor"})}),(0,n.jsxs)(t.td,{children:["Extracts teams and users out of a multiple GitHub orgs namespaced per org.","Be aware that this processor may not be compatible with future org structures in the catalog."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovider",children:"GithubOrgEntityProvider"})}),(0,n.jsx)(t.td,{children:"Ingests org data (users and groups) from GitHub."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovider",children:"GitHubOrgEntityProvider"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgreaderprocessor",children:"GithubOrgReaderProcessor"})}),(0,n.jsx)(t.td,{children:"Extracts teams and users out of a GitHub org."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Interface"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgentityprovideroptions",children:"GithubMultiOrgEntityProviderOptions"})}),(0,n.jsxs)(t.td,{children:["Options for ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgentityprovider",children:"GithubMultiOrgEntityProvider"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovideroptions",children:"GithubOrgEntityProviderOptions"})}),(0,n.jsxs)(t.td,{children:["Options for ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovider",children:"GithubOrgEntityProvider"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.transformercontext",children:"TransformerContext"})}),(0,n.jsx)(t.td,{children:"Context passed to Transformers"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"variables",children:"Variables"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.defaultorganizationteamtransformer",children:"defaultOrganizationTeamTransformer"})}),(0,n.jsx)(t.td,{children:"Default transformer for GitHub Team to GroupEntity"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.defaultusertransformer",children:"defaultUserTransformer"})}),(0,n.jsx)(t.td,{children:"Default transformer for GitHub users to UserEntity"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type Alias"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githublocationanalyzeroptions",children:"GithubLocationAnalyzerOptions"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgconfig",children:"GithubMultiOrgConfig"})}),(0,n.jsx)(t.td,{children:"The configuration parameters for a multi-org GitHub processor."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgentityprovideroptions",children:"GitHubOrgEntityProviderOptions"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubteam",children:"GithubTeam"})}),(0,n.jsx)(t.td,{children:"Github Team"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubuser",children:"GithubUser"})}),(0,n.jsx)(t.td,{children:"Github User"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.teamtransformer",children:"TeamTransformer"})}),(0,n.jsx)(t.td,{children:"Transformer for GitHub Team to GroupEntity"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.usertransformer",children:"UserTransformer"})}),(0,n.jsx)(t.td,{children:"Transformer for GitHub users to UserEntity"})]})]})]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))r.call(i,l)&&(c[l]=i[l]);if(t){a=t(i);for(var u=0;u<a.length;u++)n.call(i,a[u])&&(c[a[u]]=i[a[u]])}}return c}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:a.current}}t.jsx=l,t.jsxs=l},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,c=60110,s=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),a=d("react.provider"),c=d("react.context"),s=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p={};function b(e,t,r){this.props=e,this.context=t,this.refs=p,this.updater=r||g}function m(){}function j(e,t,r){this.props=e,this.context=t,this.refs=p,this.updater=r||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var y=j.prototype=new m;y.constructor=j,n(y,b.prototype),y.isPureReactComponent=!0;var x={current:null},v=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,i={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)v.call(t,n)&&!k.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:x.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===n?"."+w(s,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),P(a,t,r,"",(function(e){return e}))):null!=a&&(O(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+w(c=e[l],l);s+=P(c,t,r,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)s+=P(c=c.value,t,r,u=n+w(c,l++),a);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function C(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function G(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function T(){var e=S.current;if(null===e)throw Error(f(321));return e}var R={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(f(143));return e}},t.Component=b,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,r){if(null==e)throw Error(f(267,e));var i=n({},e.props),a=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)v.call(t,u)&&!k.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:o,type:e.type,key:a,ref:c,props:i,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:G}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return T().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,r){return T().useReducer(e,t,r)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||a:i(e),n.createElement(o.Provider,{value:c},t)}}}]);