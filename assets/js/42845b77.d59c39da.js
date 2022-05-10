"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84833],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(n),f=a,m=h["".concat(u,".").concat(f)]||h[f]||l[f]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86617:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),c=["components"],i={title:"Why do you need Apache APISIX when you have NGINX and Kong?",slug:"2021/06/28/why-we-need-apache-apisix",author:"Yuansheng Wang",authorURL:"https://github.com/membphis",authorImageURL:"https://avatars.githubusercontent.com/u/6814606?v=4",keywords:["APISIX","Kong","Nginx","API Gateway","Open Source"],description:"This article describes the evolution of the Apache APISIX architecture and compares what the advantages of the two frameworks, Apache APISIX and Nginx, are.",tags:["Technology"]},u=void 0,p={permalink:"/blog/2021/06/28/why-we-need-apache-apisix",source:"@site/blog/2021/06/28/why-we-need-Apache-APISIX.md",title:"Why do you need Apache APISIX when you have NGINX and Kong?",description:"This article describes the evolution of the Apache APISIX architecture and compares what the advantages of the two frameworks, Apache APISIX and Nginx, are.",date:"2021-06-28T00:00:00.000Z",formattedDate:"June 28, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:13.075,truncated:!0,authors:[{name:"Yuansheng Wang",url:"https://github.com/membphis",imageURL:"https://avatars.githubusercontent.com/u/6814606?v=4"}],prevItem:{title:"Release Apache APISIX 2.7.0",permalink:"/blog/2021/06/29/release-apache-apisix-2.7"},nextItem:{title:"Deploy Apache APISIX and Apache APISIX Ingress Controller on Rancher",permalink:"/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast"}},s={authorsImageUrls:[void 0]},l=[],h={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article describes the history of the evolution of the Apache APISIX architecture and compares what the advantages of the two frameworks, Apache APISIX and Nginx, are.")))}f.isMDXComponent=!0}}]);