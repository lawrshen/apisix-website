"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58506],{35318:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(27378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),o=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=o(t.components);return r.createElement(u.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=o(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||h[m]||i;return n?r.createElement(f,l(l({ref:e},c),{},{components:n})):r.createElement(f,l({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},76300:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return h}});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),l=["components"],p={title:"APISIX jwt-auth \u63d2\u4ef6\u5b58\u5728\u9519\u8bef\u54cd\u5e94\u4e2d\u6cc4\u9732\u4fe1\u606f\u7684\u98ce\u9669\u516c\u544a\uff08CVE-2022-29266\uff09",keywords:["\u98ce\u9669\u516c\u544a","jwt-auth","\u9519\u8bef\u54cd\u5e94","\u6f0f\u6d1e\u8865\u4e01"],description:"\u5728 APISIX 2.13.0 \u53ca\u4e4b\u524d\u7248\u672c\u4e2d\uff0c\u5b58\u5728\u56e0 `jwt-auth` \u63d2\u4ef6\u5f15\u8d77\u7684\u4fe1\u606f\u6cc4\u6f0f\u95ee\u9898\uff0c\u73b0\u5c06\u5904\u7406\u4fe1\u606f\u8fdb\u884c\u76f8\u5173\u516c\u544a\u3002",tags:["Security"]},u=void 0,o={permalink:"/zh/blog/2022/04/20/cve-2022-29266",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/04/20/cve-2022-29266.md",title:"APISIX jwt-auth \u63d2\u4ef6\u5b58\u5728\u9519\u8bef\u54cd\u5e94\u4e2d\u6cc4\u9732\u4fe1\u606f\u7684\u98ce\u9669\u516c\u544a\uff08CVE-2022-29266\uff09",description:"\u5728 APISIX 2.13.0 \u53ca\u4e4b\u524d\u7248\u672c\u4e2d\uff0c\u5b58\u5728\u56e0 `jwt-auth` \u63d2\u4ef6\u5f15\u8d77\u7684\u4fe1\u606f\u6cc4\u6f0f\u95ee\u9898\uff0c\u73b0\u5c06\u5904\u7406\u4fe1\u606f\u8fdb\u884c\u76f8\u5173\u516c\u544a\u3002",date:"2022-04-20T00:00:00.000Z",formattedDate:"2022\u5e744\u670820\u65e5",tags:[{label:"Security",permalink:"/zh/blog/tags/security"}],readingTime:1.515,truncated:!0,authors:[],prevItem:{title:"\u57fa\u4e8e TiDB \u7684 Apache APISIX \u9ad8\u53ef\u7528\u914d\u7f6e\u4e2d\u5fc3\u7684\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/blog/2022/04/22/apisix-with-tidb-practice"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff5c4.1-4.14 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/zh/blog/2022/04/20/weekly-report-0420"}},c={authorsImageUrls:[]},h=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",children:[]},{value:"\u5f71\u54cd\u7248\u672c",id:"\u5f71\u54cd\u7248\u672c",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]},{value:"\u6f0f\u6d1e\u8be6\u60c5",id:"\u6f0f\u6d1e\u8be6\u60c5",children:[]},{value:"\u8d21\u732e\u8005\u7b80\u4ecb",id:"\u8d21\u732e\u8005\u7b80\u4ecb",children:[]}],s={toc:h};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5728 APISIX 2.13.0 \u53ca\u4e4b\u524d\u7248\u672c\u4e2d\uff0c\u5b58\u5728\u56e0 ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u5f15\u8d77\u7684\u4fe1\u606f\u6cc4\u6f0f\u95ee\u9898\uff0c\u73b0\u5c06\u5904\u7406\u4fe1\u606f\u8fdb\u884c\u76f8\u5173\u516c\u544a\u3002")),(0,i.kt)("h2",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u5b58\u5728\u6cc4\u9732\u7528\u6237\u79d8\u94a5\u7684\u5b89\u5168\u95ee\u9898\uff0c\u56e0\u4e3a\u4ece\u4f9d\u8d56\u5e93 ",(0,i.kt)("inlineCode",{parentName:"p"},"lua-resty-jwt")," \u8fd4\u56de\u7684\u9519\u8bef\u4fe1\u606f\u4e2d\u5305\u542b\u654f\u611f\u4fe1\u606f\u3002"),(0,i.kt)("h2",{id:"\u5f71\u54cd\u7248\u672c"},"\u5f71\u54cd\u7248\u672c"),(0,i.kt)("p",null,"Apache APISIX 2.13.0 \u53ca\u5176\u4e4b\u524d\u5168\u90e8\u7248\u672c"),(0,i.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8bf7\u7acb\u5373\u5347\u7ea7\u81f3 Apache APISIX 2.13.1 \u53ca\u4ee5\u4e0a\u7248\u672c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u65b9\u4fbf\u66f4\u65b0\u7248\u672c\uff0c\u8bf7\u5728 Apache APISIX \u4e0a\u5b89\u88c5\u5bf9\u5e94\u7248\u672c\u7684\u8865\u4e01\u5305\uff0c\u5b9e\u73b0\u91cd\u6784\uff0c\u4ee5\u7ed5\u8fc7\u8be5\u6f0f\u6d1e\uff08\u8865\u4e01\u5305\u5b89\u88c5\u4e14\u751f\u6548\u540e\uff0c\u8c03\u7528\u65b9\u63a5\u6536\u5230\u7684\u9519\u8bef\u4fe1\u606f\u5c06\u4e3a\u4fee\u590d\u540e\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u4e0d\u518d\u5305\u542b\u654f\u611f\u4fe1\u606f\uff09\u3002")),(0,i.kt)("p",null,"\u4ee5\u4e0b\u8865\u4e01\u5305\u9002\u7528\u4e8e LTS 2.13.x \u6216\u4e3b\u7248\u672c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/6846"},"https://github.com/apache/apisix/pull/6846")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/6847"},"https://github.com/apache/apisix/pull/6847")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/6858"},"https://github.com/apache/apisix/pull/6858"))),(0,i.kt)("p",null,"\u4ee5\u4e0b\u8865\u4e01\u5305\u9002\u7528\u4e8e\u6700\u65b0\u7684 LTS 2.10.x \u7248\u672c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/6847"},"https://github.com/apache/apisix/pull/6847")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/6855"},"https://github.com/apache/apisix/pull/6855"))),(0,i.kt)("h2",{id:"\u6f0f\u6d1e\u8be6\u60c5"},"\u6f0f\u6d1e\u8be6\u60c5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6f0f\u6d1e\u4f18\u5148\u7ea7\uff1a\u7d27\u6025"),(0,i.kt)("li",{parentName:"ul"},"\u6f0f\u6d1e\u516c\u5f00\u65f6\u95f4\uff1a2022 \u5e74 4 \u6708 20 \u65e5"),(0,i.kt)("li",{parentName:"ul"},"CVE \u8be6\u7ec6\u4fe1\u606f\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://nvd.nist.gov/vuln/detail/CVE-2022-29266"},"https://nvd.nist.gov/vuln/detail/CVE-2022-29266"))),(0,i.kt)("h2",{id:"\u8d21\u732e\u8005\u7b80\u4ecb"},"\u8d21\u732e\u8005\u7b80\u4ecb"),(0,i.kt)("p",null,"\u8be5\u6f0f\u6d1e\u7531\u91d1\u8776\u8f6f\u4ef6(\u4e2d\u56fd)\u6709\u9650\u516c\u53f8\u7684\u5510\u5fe0\u8fdc\u3001\u8c22\u9e3f\u5cf0\u548c\u9648\u5175\u53d1\u73b0\u5e76\u62a5\u544a\uff0c\u611f\u8c22\u5404\u4f4d\u5bf9 Apache APISIX \u793e\u533a\u7684\u8d21\u732e\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650768035541-306d3c7d-cbd4-4b79-ad9c-9f916549b8e7.png",alt:"Kingdee logo"})))}m.isMDXComponent=!0}}]);