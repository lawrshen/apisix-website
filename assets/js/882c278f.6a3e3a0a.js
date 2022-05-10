"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29925],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64962:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(25773),o=r(30808),i=(r(27378),r(35318)),a=["components"],u={title:"The Vulnerability of Leaking Information in Error Response from jwt-auth Plugin\uff08CVE-2022-29266\uff09",keywords:["Vulnerability","jwt-auth","Error Response"],description:"In APISIX 2.13.0 and previous versions, there is a problem of information leakage caused by the `jwt- auth` plugin.",tags:["Security"]},c=void 0,l={permalink:"/blog/2022/04/20/cve-2022-29266",source:"@site/blog/2022/04/20/cve-2022-29266.md",title:"The Vulnerability of Leaking Information in Error Response from jwt-auth Plugin\uff08CVE-2022-29266\uff09",description:"In APISIX 2.13.0 and previous versions, there is a problem of information leakage caused by the `jwt- auth` plugin.",date:"2022-04-20T00:00:00.000Z",formattedDate:"April 20, 2022",tags:[{label:"Security",permalink:"/blog/tags/security"}],readingTime:1.025,truncated:!0,authors:[],prevItem:{title:"Best Practices for TiDB-based Apache APISIX High Availability Configuration",permalink:"/blog/2022/04/22/apisix-with-tidb-practice"},nextItem:{title:"Biweekly Report\uff5cExplore the weeks of Apr 1st - Apr 14th",permalink:"/blog/2022/04/20/weekly-report-0420"}},p={authorsImageUrls:[]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In APISIX 2.13.0 and previous versions, there is a problem of information leakage caused by the ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt- auth")," plugin.")))}m.isMDXComponent=!0}}]);