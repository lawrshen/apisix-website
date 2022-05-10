"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88584],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,h=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43972:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var a=n(25773),r=n(30808),o=(n(27378),n(35318)),l=["components"],i={title:"Release Apache APISIX 2.7.0",author:"Ruofei Zhao",authorURL:"https://github.com/Serendipity96",authorImageURL:"https://avatars.githubusercontent.com/u/23514812?v=4",keywords:["Apache APISIX","Release Notes"],Description:"Apache APISIX 2.7.0 has been released!",tags:["Release"]},u=void 0,p={permalink:"/blog/2021/06/29/release-apache-apisix-2.7",source:"@site/blog/2021/06/29/release-apache-apisix-2.7.md",title:"Release Apache APISIX 2.7.0",description:"Apache APISIX 2.7.0 has been released!",date:"2021-06-29T00:00:00.000Z",formattedDate:"June 29, 2021",tags:[{label:"Release",permalink:"/blog/tags/release"}],readingTime:1.43,truncated:!0,authors:[{name:"Ruofei Zhao",url:"https://github.com/Serendipity96",imageURL:"https://avatars.githubusercontent.com/u/23514812?v=4"}],prevItem:{title:"Does etcd 3 Support HTTP Access Perfectly?",permalink:"/blog/2021/06/30/etcd3-support-http-access-perfectly"},nextItem:{title:"Why do you need Apache APISIX when you have NGINX and Kong?",permalink:"/blog/2021/06/28/why-we-need-apache-apisix"}},c={authorsImageUrls:[void 0]},s=[{value:"Release Notes",id:"release-notes",children:[{value:"Multi-language plugin",id:"multi-language-plugin",children:[]},{value:"Enhanced four-layer TCP proxy",id:"enhanced-four-layer-tcp-proxy",children:[]},{value:"Enhanced Nginx configuration",id:"enhanced-nginx-configuration",children:[]}]},{value:"Download",id:"download",children:[]}],d={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache APISIX 2.7.0 has been released!")),(0,o.kt)("p",null,"Apache APISIX 2.7.0 has been released! Welcome to download and use it."),(0,o.kt)("p",null,"This version supports multi-language plugins, enhances the four-layer TCP proxy and Nginx configuration. More than 20 developers participated, and 70 plus pull requests have been submitted. The following is an introduction to the key features."),(0,o.kt)("h2",{id:"release-notes"},"Release Notes"),(0,o.kt)("h3",{id:"multi-language-plugin"},"Multi-language plugin"),(0,o.kt)("p",null,"With the release of the first version of apisix-java-plugin-runner, and apisix-go-plugin-runner completes its main functions, the multi-language plugin of Apache APISIX supports the two most widely used back-end programming languages. If you are still worried that the development of Apache APISIX plugin will be limited to Lua ecosystem, please try our multi-language plugin runner to develop Java / Go plugins."),(0,o.kt)("h3",{id:"enhanced-four-layer-tcp-proxy"},"Enhanced four-layer TCP proxy"),(0,o.kt)("p",null,"In version 2.7, we have developed new features of TCP proxy, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Allow domain name configuration in upstream"),(0,o.kt)("li",{parentName:"ul"},"Allow mqtt-proxy plugin to configure domain name"),(0,o.kt)("li",{parentName:"ul"},"Support for receiving TLS over TCP connections, the certificate of which can be dynamically configured just like HTTPS certificate"),(0,o.kt)("li",{parentName:"ul"},"SNI-based route rules"),(0,o.kt)("li",{parentName:"ul"},"Dynamic verification of client certificates")),(0,o.kt)("p",null,"In future releases, we will continue to improve TCP proxy, so stay tuned!"),(0,o.kt)("h3",{id:"enhanced-nginx-configuration"},"Enhanced Nginx configuration"),(0,o.kt)("p",null,"We hope to dynamically set more and more Nginx configurations, so we add our own patches and Nginx C modules to enhance the native Nginx."),(0,o.kt)("p",null,"The following new features are currently included:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dynamically set mTLS"),(0,o.kt)("li",{parentName:"ul"},"Dynamically set client_max_body_size")),(0,o.kt)("p",null,"In future releases, we will continue to allow the following Nginx configurations to be set dynamically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"upstream keepalive"),(0,o.kt)("li",{parentName:"ul"},"gzip"),(0,o.kt)("li",{parentName:"ul"},"real_ip"),(0,o.kt)("li",{parentName:"ul"},"proxy_max_temp_file_size")),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"Download Apache APISIX 2.7.0-Release"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Source code: please visit ",(0,o.kt)("a",{parentName:"li",href:"https://apisix.apache.org/downloads/"},"download page")),(0,o.kt)("li",{parentName:"ul"},"Binary installation package: please visit ",(0,o.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/how-to-build/"},"Installation Guide"))))}f.isMDXComponent=!0}}]);