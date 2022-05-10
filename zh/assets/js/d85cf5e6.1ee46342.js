"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90798],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(r),h=o,f=m["".concat(u,".").concat(h)]||m[h]||p[h]||a;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38096:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),c=["components"],i={title:"API \u7f51\u5173 Apache APISIX \u643a\u624b CoreDNS \u6253\u5f00\u670d\u52a1\u53d1\u73b0\u65b0\u5927\u95e8",authors:[{name:"\u9648\u6893\u6770",title:"Author",url:"https://github.com/CP3cham",image_url:"https://avatars.githubusercontent.com/u/87352162?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","API Gateway","CoreDNS","\u670d\u52a1\u53d1\u73b0","\u670d\u52a1\u6ce8\u518c","Ecosystem"],description:"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684\u4e91\u539f\u751f API \u7f51\u5173\uff0c\u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002\u4f5c\u4e3a\u4e91\u539f\u751f API \u7f51\u5173\uff0cApache APISIX \u4e5f\u96c6\u6210\u4e86\u591a\u79cd\u670d\u52a1\u53d1\u73b0\u7684\u80fd\u529b\uff0c\u672c\u6587\u5c06\u4e3a\u60a8\u5c55\u793a\u5728 Apache APISIX \u4e2d\u5982\u4f55\u914d\u7f6e CoreDNS\u3002",tags:["Technology","Ecosystem","Service Discovery"]},u=void 0,s={permalink:"/zh/blog/2022/03/04/apisix-uses-coredns-enable-service-discovery",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/03/04/apisix-uses-coredns-enable-service-discovery.md",title:"API \u7f51\u5173 Apache APISIX \u643a\u624b CoreDNS \u6253\u5f00\u670d\u52a1\u53d1\u73b0\u65b0\u5927\u95e8",description:"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684\u4e91\u539f\u751f API \u7f51\u5173\uff0c\u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002\u4f5c\u4e3a\u4e91\u539f\u751f API \u7f51\u5173\uff0cApache APISIX \u4e5f\u96c6\u6210\u4e86\u591a\u79cd\u670d\u52a1\u53d1\u73b0\u7684\u80fd\u529b\uff0c\u672c\u6587\u5c06\u4e3a\u60a8\u5c55\u793a\u5728 Apache APISIX \u4e2d\u5982\u4f55\u914d\u7f6e CoreDNS\u3002",date:"2022-03-04T00:00:00.000Z",formattedDate:"2022\u5e743\u67084\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"},{label:"Service Discovery",permalink:"/zh/blog/tags/service-discovery"}],readingTime:12.595,truncated:!0,authors:[{name:"\u9648\u6893\u6770",title:"Author",url:"https://github.com/CP3cham",image_url:"https://avatars.githubusercontent.com/u/87352162?v=4",imageURL:"https://avatars.githubusercontent.com/u/87352162?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"\u5316\u7e41\u4e3a\u7b80\uff0cApache APISIX \u96c6\u6210 ClickHouse \u63d2\u4ef6\u63d0\u5347\u5168\u94fe\u8def\u65e5\u5fd7\u6548\u7387",permalink:"/zh/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier"},nextItem:{title:"\u5f00\u6e90\u4e91 IDE \u4ea7\u54c1\u65b0\u5ba0\u513f\uff0c\u5982\u4f55\u4f7f\u7528 Gitpod \u5f00\u53d1 API \u7f51\u5173 Apache APISIX\uff1f",permalink:"/zh/blog/2022/03/03/develop-apisix-with-gitpod"}},l={authorsImageUrls:[void 0,void 0]},p=[],m={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684\u4e91\u539f\u751f API \u7f51\u5173\uff0c\u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002\u4f5c\u4e3a\u4e91\u539f\u751f API \u7f51\u5173\uff0cApache APISIX \u4e5f\u96c6\u6210\u4e86\u591a\u79cd\u670d\u52a1\u53d1\u73b0\u7684\u80fd\u529b\uff0c\u672c\u6587\u5c06\u4e3a\u60a8\u5c55\u793a\u5728 Apache APISIX \u4e2d\u5982\u4f55\u914d\u7f6e CoreDNS\u3002")))}h.isMDXComponent=!0}}]);