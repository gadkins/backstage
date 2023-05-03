/*! For license information please see 37a16fa9.d92d8911.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[404236],{356224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(824246),a=r(511151);const s={id:"v1.0.0",title:"v1.0.0",description:"Backstage Release v1.0.0"},c=void 0,i={unversionedId:"releases/v1.0.0",id:"releases/v1.0.0",title:"v1.0.0",description:"Backstage Release v1.0.0",source:"@site/../docs/releases/v1.0.0.md",sourceDirName:"releases",slug:"/releases/v1.0.0",permalink:"/docs/releases/v1.0.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.0.0.md",tags:[],version:"current",frontMatter:{id:"v1.0.0",title:"v1.0.0",description:"Backstage Release v1.0.0"},sidebar:"releases",previous:{title:"v1.1.0",permalink:"/docs/releases/v1.1.0"}},o={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Packages Reaching 1.0",id:"packages-reaching-10",level:3},{value:"Backstage Core",id:"backstage-core",level:4},{value:"Software Catalog",id:"software-catalog",level:4},{value:"Software Templates",id:"software-templates",level:4},{value:"TechDocs",id:"techdocs",level:4},{value:"Switch from <code>@vscode/sqlite3</code> to <code>better-sqlite3</code>",id:"switch-from-vscodesqlite3-to-better-sqlite3",level:3},{value:"New plugin: Google Calendar",id:"new-plugin-google-calendar",level:3},{value:"Scaffolder Template Preview",id:"scaffolder-template-preview",level:3},{value:"Package renames:",id:"package-renames",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li",code:"code"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.0.0 release of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.h3,{id:"packages-reaching-10",children:"Packages Reaching 1.0"}),"\n",(0,n.jsxs)(t.p,{children:["Several packages have reached version 1.0, you can read more about the effect of this in our ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning policy"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"backstage-core",children:"Backstage Core"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/app-defaults",children:(0,n.jsx)(t.code,{children:"@backstage/app-defaults"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/config-loader",children:(0,n.jsx)(t.code,{children:"@backstage/config-loader"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/config",children:(0,n.jsx)(t.code,{children:"@backstage/config"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/core-app-api",children:(0,n.jsx)(t.code,{children:"@backstage/core-app-api"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/core-plugin-api",children:(0,n.jsx)(t.code,{children:"@backstage/core-plugin-api"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/dev-utils",children:(0,n.jsx)(t.code,{children:"@backstage/dev-utils"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/errors",children:(0,n.jsx)(t.code,{children:"@backstage/errors"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/integration-react",children:(0,n.jsx)(t.code,{children:"@backstage/integration-react"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/integration",children:(0,n.jsx)(t.code,{children:"@backstage/integration"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/test-utils",children:(0,n.jsx)(t.code,{children:"@backstage/test-utils"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/types",children:(0,n.jsx)(t.code,{children:"@backstage/types"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/version-bridge",children:(0,n.jsx)(t.code,{children:"@backstage/version-bridge"})})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"software-catalog",children:"Software Catalog"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/catalog-client",children:(0,n.jsx)(t.code,{children:"@backstage/catalog-client"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/catalog-model",children:(0,n.jsx)(t.code,{children:"@backstage/catalog-model"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-catalog-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-catalog-common",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-common"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-catalog-react",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-react"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-catalog",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog"})})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"software-templates",children:"Software Templates"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-scaffolder-common",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-common"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-scaffolder",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder"})})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"techdocs",children:"TechDocs"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-techdocs-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-techdocs-backend"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-techdocs-node",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-techdocs-node"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-techdocs",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-techdocs"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@techdocs/cli",children:(0,n.jsx)(t.code,{children:"@techdocs/cli"})})}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"switch-from-vscodesqlite3-to-better-sqlite3",children:["Switch from ",(0,n.jsx)(t.code,{children:"@vscode/sqlite3"})," to ",(0,n.jsx)(t.code,{children:"better-sqlite3"})]}),"\n",(0,n.jsxs)(t.p,{children:["The default SQLite3 driver has been switched to ",(0,n.jsx)(t.a,{href:"https://github.com/JoshuaWise/better-sqlite3",children:"better-sqlite3"}),", as many users were running into issues with installation of ",(0,n.jsx)(t.code,{children:"@vscode/sqlite3"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"new-plugin-google-calendar",children:"New plugin: Google Calendar"}),"\n",(0,n.jsxs)(t.p,{children:["The new ",(0,n.jsx)(t.code,{children:"@backstage/plugin-gcalendar"})," plugin provides a home page widget that shows your Google Calendar events. Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/alexrybch",children:"@alexrybch"})," (",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/9719",children:"#9719"}),")"]}),"\n",(0,n.jsx)(t.h3,{id:"scaffolder-template-preview",children:"Scaffolder Template Preview"}),"\n",(0,n.jsxs)(t.p,{children:["The scaffolder page now provides a editor and preview page for templates, where you can see a live preview of the template form. The preview page can be found under the ",(0,n.jsx)(t.code,{children:"/preview"})," sub route, typically at ",(0,n.jsx)(t.code,{children:"/create/preview"}),". Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/kuangp",children:"@kuangp"})," (",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/9841",children:"#9841"}),")"]}),"\n",(0,n.jsx)(t.h3,{id:"package-renames",children:"Package renames:"}),"\n",(0,n.jsx)(t.p,{children:"The following packages have been renamed, be sure to update your usage:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"@backstage/search-common"})," -> ",(0,n.jsx)(t.code,{children:"@backstage/plugin-search-common"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"@backstage/techdocs-common"})," -> ",(0,n.jsx)(t.code,{children:"@backstage/plugin-techdocs-node"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/releases/tag/v1.0.0",children:"Changelog"})," for this release"]}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var s,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),o=1;o<arguments.length;o++){for(var l in s=Object(arguments[o]))r.call(s,l)&&(i[l]=s[l]);if(t){c=t(s);for(var d=0;d<c.length;d++)n.call(s,c[d])&&(i[c[d]]=s[c[d]])}}return i}},371426:(e,t,r)=>{r(862525);var n=r(827378),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),t.Fragment=s("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!o.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:d,props:s,_owner:c.current}}t.jsx=l,t.jsxs=l},541535:(e,t,r)=>{var n=r(862525),a=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,i=60110,o=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;a=h("react.element"),s=h("react.portal"),t.Fragment=h("react.fragment"),t.StrictMode=h("react.strict_mode"),t.Profiler=h("react.profiler"),c=h("react.provider"),i=h("react.context"),o=h("react.forward_ref"),t.Suspense=h("react.suspense"),l=h("react.memo"),d=h("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}function m(){}function k(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=j.prototype;var b=k.prototype=new m;b.constructor=k,n(b,j.prototype),b.isPureReactComponent=!0;var x={current:null},w=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function y(e,t,r){var n,s={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)w.call(t,n)&&!v.hasOwnProperty(n)&&(s[n]=t[n]);var o=arguments.length-2;if(1===o)s.children=r;else if(1<o){for(var l=Array(o),d=0;d<o;d++)l[d]=arguments[d+2];s.children=l}if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===s[n]&&(s[n]=o[n]);return{$$typeof:a,type:e,key:c,ref:i,props:s,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var o=!1;if(null===e)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case a:case s:o=!0}}if(o)return c=c(o=e),e=""===n?"."+C(o,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),O(c,t,r,"",(function(e){return e}))):null!=c&&(_(c)&&(c=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||o&&o.key===c.key?"":(""+c.key).replace(S,"$&/")+"/")+e)),t.push(c)),1;if(o=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=n+C(i=e[l],l);o+=O(i,t,r,d,c)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(i=e.next()).done;)o+=O(i=i.value,t,r,d=n+C(i,l++),c);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return o}function R(e,t,r){if(null==e)return e;var n=[],a=0;return O(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(p(321));return e}var T={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:R,forEach:function(e,t,r){R(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=j,t.PureComponent=k,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var s=n({},e.props),c=e.key,i=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,o=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)w.call(t,d)&&!v.hasOwnProperty(d)&&(s[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)s.children=r;else if(1<d){l=Array(d);for(var h=0;h<d;h++)l[h]=arguments[h+2];s.children=l}return{$$typeof:a,type:e.type,key:c,ref:i,props:s,_owner:o}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=y,t.createFactory=function(e){var t=y.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:o,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>s});var n=r(667294);const a=n.createContext({});function s(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||c:s(e),n.createElement(a.Provider,{value:i},t)}}}]);