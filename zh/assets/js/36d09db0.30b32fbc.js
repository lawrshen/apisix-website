"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31790],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14175:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(25773),i=n(30808),o=(n(27378),n(35318)),a=["components"],c={title:"Script"},p=void 0,l={unversionedId:"architecture-design/script",id:"version-2.13/architecture-design/script",isDocsHomePage:!1,title:"Script",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.13/architecture-design/script.md",sourceDirName:"architecture-design",slug:"/architecture-design/script",permalink:"/zh/docs/apisix/architecture-design/script",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"Script"},sidebar:"version-2.13/docs",previous:{title:"Plugin",permalink:"/zh/docs/apisix/architecture-design/plugin"},next:{title:"Service",permalink:"/zh/docs/apisix/architecture-design/service"}},u=[],s={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Script")," \u8868\u793a\u5c06\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP")," \u8bf7\u6c42/\u54cd\u5e94\u751f\u547d\u5468\u671f\u671f\u95f4\u6267\u884c\u7684\u811a\u672c\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Script")," \u914d\u7f6e\u53ef\u76f4\u63a5\u7ed1\u5b9a\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," \u4e0a\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Script")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugin")," \u4e92\u65a5\uff0c\u4e14\u4f18\u5148\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"Script")," \uff0c\u8fd9\u610f\u5473\u7740\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"Script")," \u540e\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," \u4e0a\u914d\u7f6e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugin")," \u5c06\u4e0d\u88ab\u6267\u884c\u3002"),(0,o.kt)("p",null,"\u7406\u8bba\u4e0a\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Script")," \u4e2d\u53ef\u4ee5\u5199\u4efb\u610f lua \u4ee3\u7801\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u5df2\u6709\u63d2\u4ef6\u4ee5\u91cd\u7528\u5df2\u6709\u7684\u4ee3\u7801\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Script")," \u4e5f\u6709\u6267\u884c\u9636\u6bb5\u6982\u5ff5\uff0c\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"access"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"header_filter"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"body_filter")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," \u9636\u6bb5\u3002\u7cfb\u7edf\u4f1a\u5728\u76f8\u5e94\u9636\u6bb5\u4e2d\u81ea\u52a8\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"Script")," \u811a\u672c\u4e2d\u5bf9\u5e94\u9636\u6bb5\u7684\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "script": "local _M = {} \\n function _M.access(api_ctx) \\n ngx.log(ngx.INFO,\\"hit access phase\\") \\n end \\nreturn _M"\n}\n')))}d.isMDXComponent=!0}}]);