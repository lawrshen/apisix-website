"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30015],{35318:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return I}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=u(a),I=r,d=s["".concat(i,".").concat(I)]||s[I]||h[I]||p;return a?n.createElement(d,l(l({ref:t},o),{},{components:a})):n.createElement(d,l({ref:t},o))}));function I(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<p;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},57394:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return i},default:function(){return I},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h}});var n=a(25773),r=a(30808),p=(a(27378),a(35318)),l=["components"],c={title:"\u767e\u4e07\u7ea7 QPS \u4e1a\u52a1\u65b0\u5ba0\uff0c\u91d1\u5c71\u529e\u516c\u643a\u624b Apache APISIX \u6253\u9020\u7f51\u5173\u5b9e\u8df5\u65b0\u4f53\u9a8c",slug:"2021/09/28/wps-usercase",author:"\u5f20\u5f3a",keywords:["Apache APISIX","API \u7f51\u5173","\u91d1\u5c71\u529e\u516c","WPS"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u91d1\u5c71\u529e\u516c\u5982\u4f55\u4f7f\u7528 Apache APISIX \u5e94\u5bf9\u767e\u4e07\u7ea7 QPS \u4e1a\u52a1\uff0c\u540c\u65f6\u57fa\u4e8e Apache APISIX \u66f4\u65b0\u4e0e\u6539\u8fdb\u7f51\u5173\u5b9e\u8df5\u5c42\u9762\u7684\u5185\u5bb9\u3002",tags:["User Case"]},i=void 0,u={permalink:"/zh/blog/2021/09/28/wps-usercase",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/09/28/WPS-usercase.md",title:"\u767e\u4e07\u7ea7 QPS \u4e1a\u52a1\u65b0\u5ba0\uff0c\u91d1\u5c71\u529e\u516c\u643a\u624b Apache APISIX \u6253\u9020\u7f51\u5173\u5b9e\u8df5\u65b0\u4f53\u9a8c",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u91d1\u5c71\u529e\u516c\u5982\u4f55\u4f7f\u7528 Apache APISIX \u5e94\u5bf9\u767e\u4e07\u7ea7 QPS \u4e1a\u52a1\uff0c\u540c\u65f6\u57fa\u4e8e Apache APISIX \u66f4\u65b0\u4e0e\u6539\u8fdb\u7f51\u5173\u5b9e\u8df5\u5c42\u9762\u7684\u5185\u5bb9\u3002",date:"2021-09-28T00:00:00.000Z",formattedDate:"2021\u5e749\u670828\u65e5",tags:[{label:"User Case",permalink:"/zh/blog/tags/user-case"}],readingTime:11.645,truncated:!0,authors:[{name:"\u5f20\u5f3a"}],prevItem:{title:"Apache APISIX 2.10.0 \u6b63\u5f0f\u53d1\u5e03\uff0c\u5e26\u6765\u7b2c\u4e00\u4e2a LTS \u7248\u672c\uff01",permalink:"/zh/blog/2021/09/29/release-apache-apisix-2.10"},nextItem:{title:"Apache APISIX Ingress \u4e3a\u4f55\u6210\u4e3a\u53c8\u62cd\u4e91\u6253\u9020\u5bb9\u5668\u7f51\u5173\u7684\u65b0\u9009\u62e9\uff1f",permalink:"/zh/blog/2021/09/24/youpaicloud-usercase"}},o={authorsImageUrls:[void 0]},h=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",children:[]},{value:"\u91d1\u5c71\u529e\u516c\u7684\u7f51\u5173\u6f14\u8fdb",id:"\u91d1\u5c71\u529e\u516c\u7684\u7f51\u5173\u6f14\u8fdb",children:[]},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9\u4e86 Apache APISIX",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9\u4e86-apache-apisix",children:[]},{value:"\u7f51\u5173\u5e73\u6ed1\u8fc1\u79fb\u7ecf\u9a8c\u5206\u4eab",id:"\u7f51\u5173\u5e73\u6ed1\u8fc1\u79fb\u7ecf\u9a8c\u5206\u4eab",children:[]},{value:"\u57fa\u4e8e Apache APISIX \u7684 Shared State \u6539\u8fdb",id:"\u57fa\u4e8e-apache-apisix-\u7684-shared-state-\u6539\u8fdb",children:[{value:"\u4f18\u5316\u4e00\uff1a\u591a\u53f0\u673a\u5668\u76d1\u542c\u4e0b\u7684 etcd \u67b6\u6784\u4f18\u5316",id:"\u4f18\u5316\u4e00\u591a\u53f0\u673a\u5668\u76d1\u542c\u4e0b\u7684-etcd-\u67b6\u6784\u4f18\u5316",children:[]},{value:"\u4f18\u5316\u4e8c\uff1a\u89e3\u51b3\u8def\u7531\u751f\u6548\u8fc7\u7a0b\u4e2d\u7684\u6027\u80fd\u95ee\u9898",id:"\u4f18\u5316\u4e8c\u89e3\u51b3\u8def\u7531\u751f\u6548\u8fc7\u7a0b\u4e2d\u7684\u6027\u80fd\u95ee\u9898",children:[]},{value:"\u66f4\u591a Shared State \u4f7f\u7528\u7ecf\u9a8c",id:"\u66f4\u591a-shared-state-\u4f7f\u7528\u7ecf\u9a8c",children:[]}]},{value:"\u5f00\u6e90\u8bdd\u9898\u8ba8\u8bba",id:"\u5f00\u6e90\u8bdd\u9898\u8ba8\u8bba",children:[{value:"\u7a33\u5b9a\u6027\u4e0e\u529f\u80fd\u5c42\u9762\u7684\u53d6\u820d",id:"\u7a33\u5b9a\u6027\u4e0e\u529f\u80fd\u5c42\u9762\u7684\u53d6\u820d",children:[]},{value:"\u57fa\u4e8e Apache APISIX \u4ea7\u54c1\u5316\u7ecf\u9a8c",id:"\u57fa\u4e8e-apache-apisix-\u4ea7\u54c1\u5316\u7ecf\u9a8c",children:[]}]}],s={toc:h};function I(e){var t=e.components,a=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7531\u91d1\u5c71\u529e\u516c\u4e2d\u53f0\u90e8\u95e8 SRE \u7f51\u7edc\u8d1f\u8d23\u4eba\u5f20\u5f3a\u4ecb\u7ecd\u4e86\u91d1\u5c71\u529e\u516c\u5982\u4f55\u4f7f\u7528 Apache APISIX \u5e94\u5bf9\u767e\u4e07\u7ea7 QPS \u4e1a\u52a1\uff0c\u540c\u65f6\u57fa\u4e8e Apache APISIX \u66f4\u65b0\u4e0e\u6539\u8fdb\u7f51\u5173\u5b9e\u8df5\u5c42\u9762\u7684\u5185\u5bb9\u3002")),(0,p.kt)("h2",{id:"\u80cc\u666f\u4ecb\u7ecd"},"\u80cc\u666f\u4ecb\u7ecd"),(0,p.kt)("p",null,"\u91d1\u5c71\u529e\u516c\u662f\u76ee\u524d\u56fd\u5185\u6700\u5927\u7684\u529e\u516c\u8f6f\u4ef6\u5382\u5546\uff0c\u65d7\u4e0b\u4ea7\u54c1\u6d89\u53ca WPS\u3001\u91d1\u5c71\u6587\u6863\u3001\u7a3b\u58f3\u7b49\u3002\u5728\u4e1a\u52a1\u5c42\u9762\u4e0a\u7531\u6570\u5343\u4e2a\u4e1a\u52a1\u4ee5\u5bb9\u5668\u5316\u90e8\u7f72\u5728\u5185\u90e8\u4e91\u539f\u751f\u5e73\u53f0\uff0c\u76ee\u524d ",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," \u5728\u91d1\u5c71\u529e\u516c\u4e3b\u8981\u8d1f\u8d23\u4e3a\u4e2d\u53f0\u90e8\u95e8\u4e1a\u52a1\uff08\u767e\u4e07\u7ea7 QPS \uff09\u63d0\u4f9b\u76f8\u5173\u7f51\u5173\u670d\u52a1\u3002"),(0,p.kt)("h2",{id:"\u91d1\u5c71\u529e\u516c\u7684\u7f51\u5173\u6f14\u8fdb"},"\u91d1\u5c71\u529e\u516c\u7684\u7f51\u5173\u6f14\u8fdb"),(0,p.kt)("p",null,"\u5728 1.0 \u9636\u6bb5\u65f6\uff0c\u6211\u4eec\u5bf9\u4e8e API Gateway \u7684\u7279\u6027\u6ca1\u6709\u4ec0\u4e48\u5f3a\u9700\u6c42\uff0c\u53ea\u662f\u60f3\u89e3\u51b3\u8fd0\u7ef4\u95ee\u9898\uff0c\u6240\u4ee5\u57fa\u4e8e OpenResty \u4e0e Lua \u8fdb\u884c\u4e86\u81ea\u7814\uff0c\u5b9e\u73b0\u4e86\u52a8\u6001 Upstream\u3001\u9ed1\u540d\u5355\u3001waf \u7b49\u529f\u80fd\u3002\n\u867d\u7136\u81ea\u7814\u6210\u529f\uff0c\u4f46\u5728\u529f\u80fd\u4e0a\u5374\u9057\u7559\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u6bd4\u5982\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u52a8\u6001\u5316\u53ea\u505a\u5230\u5230 Upstream \u7ef4\u5ea6"),(0,p.kt)("li",{parentName:"ul"},"\u9700\u8981 Reload \u624d\u80fd\u5e26\u51fa\u65b0\u57df\u540d"),(0,p.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u8bbe\u8ba1\u7b80\u5355\uff0c\u529f\u80fd\u6269\u5c55\u80fd\u529b\u4e0d\u5f3a")),(0,p.kt)("p",null,"\u540e\u7eed\u6211\u4eec\u5bf9 API Gateway \u529f\u80fd\u6709\u4e86\u5f3a\u9700\u6c42\u540e\uff0c\u5f00\u59cb\u53bb\u8c03\u7814\u76f8\u5173\u7684\u5f00\u6e90\u7f51\u5173\u4ea7\u54c1\u3002"),(0,p.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9\u4e86-apache-apisix"},"\u4e3a\u4ec0\u4e48\u9009\u62e9\u4e86 Apache APISIX"),(0,p.kt)("p",null,"\u5b9e\u9645\u4e0a 2019 \u5e74\u5e74\u5e95\u5f00\u59cb\u8c03\u7814\u7f51\u5173\u4ea7\u54c1\u65f6\uff0cKong \u7b97\u662f\u4e00\u4e2a\u6bd4\u8f83\u6d41\u884c\u7684\u9009\u62e9\u3002"),(0,p.kt)("p",null,"\u4f46\u540e\u7eed\u7ecf\u8fc7\u6d4b\u8bd5\u53d1\u73b0\uff0cKong \u7684\u6027\u80fd\u4e0d\u592a\u80fd\u6ee1\u8db3\u6211\u4eec\u7684\u9700\u6c42\uff0c\u540c\u65f6\u6211\u4eec\u8ba4\u4e3a Kong \u7684\u67b6\u6784\u4e0d\u662f\u5f88\u4f18\u79c0\uff1a\u56e0\u4e3a\u5176\u914d\u7f6e\u4e2d\u5fc3\u9009\u7528 PostgreSQL\uff0c\u6240\u4ee5 Kong \u53ea\u80fd\u5229\u7528\u975e\u4e8b\u4ef6\u9a71\u52a8\u53bb\u66f4\u65b0\u8def\u7531\uff0c\u4f9d\u8d56\u6bcf\u4e2a\u8282\u70b9\u53bb\u5237\u65b0\u8def\u7531\u3002"),(0,p.kt)("p",null,"\u8fdb\u4e00\u6b65\u8c03\u7814\u65f6\uff0c\u6211\u4eec\u53d1\u73b0\u4e86 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX"),"\u3002\u9996\u5148 Apache APISIX \u7684\u6027\u80fd\u6bd4 Kong \u5f3a\uff0c\u5728 Apache APISIX \u7684 GitHub Readme \u4e2d\u6709\u4e2a\u975e\u5e38\u8be6\u7ec6\u7684\u5bf9\u6bd4\u56fe\uff0c\u5217\u51fa\u4e86\u4e24\u8005\u7684",(0,p.kt)("a",{parentName:"p",href:"https://gist.github.com/membphis/137db97a4bf64d3653aa42f3e016bd01"},"\u6027\u80fd\u6d4b\u8bd5\u5dee\u8ddd"),"\uff0c\u8fd9\u4e0e\u6211\u4eec\u81ea\u5df1\u6d4b\u8bd5\u4e0b\u6765\u7684\u6570\u636e\u57fa\u672c\u4e00\u81f4\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632796929580-a6d7847c-bba6-4417-a7f0-9c127313264e.png",alt:"Apache APISIX \u4e0e Kong \u6027\u80fd\u5bf9\u6bd4\u56fe"})),(0,p.kt)("p",null,"\u5728\u67b6\u6784\u65b9\u9762\uff0cApache APISIX \u7684 etcd \u914d\u7f6e\u5bf9\u6211\u4eec\u800c\u8a00\u662f\u4e00\u9879\u66f4\u4f18\u7684\u9009\u62e9\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632796952262-b814e37d-cbc5-43f5-b504-ab1751a9aa83.png",alt:"Apache APISIX \u67b6\u6784"})),(0,p.kt)("p",null,"\u5f53\u7136\uff0c\u6700\u4e3b\u8981\u7684\u539f\u56e0\u662f\u6211\u4eec\u89c9\u5f97\u793e\u533a\u4e5f\u5f88\u91cd\u8981\u3002\u793e\u533a\u5982\u679c\u6d3b\u8dc3\uff0c\u5728\u7248\u672c\u66f4\u65b0\u8fed\u4ee3\u3001\u95ee\u9898\u89e3\u51b3\u548c\u529f\u80fd\u4f18\u5316\u4e0a\u7684\u901f\u5ea6\u5c31\u4f1a\u5f88\u5feb\u3002\u4ece GitHub \u548c\u5e73\u65f6\u7684\u90ae\u4ef6\u53cd\u9988\u4e2d\u6211\u4eec\u770b\u5230\u4e86 Apache APISIX \u793e\u533a\u7684\u6d3b\u8dc3\uff0c\u4e3a\u4ea7\u54c1\u529f\u80fd\u548c\u7a33\u5b9a\u6027\u63d0\u4f9b\u4e86\u5f3a\u6709\u529b\u7684\u4fdd\u8bc1\u3002"),(0,p.kt)("h2",{id:"\u7f51\u5173\u5e73\u6ed1\u8fc1\u79fb\u7ecf\u9a8c\u5206\u4eab"},"\u7f51\u5173\u5e73\u6ed1\u8fc1\u79fb\u7ecf\u9a8c\u5206\u4eab"),(0,p.kt)("p",null,"\u5927\u90e8\u5206\u670b\u53cb\u5728\u5f00\u59cb\u63a5\u89e6 Apache APISIX \u65f6\uff0c\u90fd\u4f1a\u7528 CLI \u53bb\u751f\u6210\u914d\u7f6e\u5e76\u8d77\u5b9e\u4f8b\u3002\u4f46\u5728\u6211\u4eec\u505a\u5e73\u6ed1\u8fc1\u79fb\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5e76\u6ca1\u6709\u4f7f\u7528 CLI \u53bb\u751f\u6210\u914d\u7f6e\u3002"),(0,p.kt)("p",null,"\u4e3b\u8981\u539f\u56e0\u662f Apache APISIX \u5728 OpenResty \u4e2d\u4f1a\u751f\u6548\u4e00\u4e9b Phase\uff0c\u6bd4\u5982\u521d\u59cb\u5316 init\u3001init_worker\u3001HTTP \u548c Upstream \u76f8\u5173 Phase \u7b49\u3002\u5bf9\u5e94\u5230 Apache APISIX \u7684\u914d\u7f6e\u540e\u6211\u4eec\u53d1\u73b0\uff0c\u8fd9\u4e9b\u90fd\u53ef\u4ee5\u8131\u79bb CLI \u800c\u5b58\u5728\u3002"),(0,p.kt)("p",null,"\u6240\u4ee5\u57fa\u4e8e\u4e0a\u8ff0\u539f\u56e0\uff0c\u6211\u4eec\u6700\u7ec8\u91c7\u53d6\u4e86\u5982\u4e0b\u884c\u52a8\u8fdb\u884c\u5e73\u6ed1\u8fc1\u79fb\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4e0d\u4f7f\u7528 Apache APISIX \u7684 CLI \u751f\u6210\u914d\u7f6e"),(0,p.kt)("li",{parentName:"ul"},"\u5f15\u5165 Apache APISIX \u7684 Package Path \u5e76\u5c06 Apache APISIX \u4f5c\u4e3a Default Server"),(0,p.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u5176\u5b83\u9759\u6001\u914d\u7f6e\u4e2d\u7684\u57df\u540d\uff0c\u7531\u4e8e\u65b0\u57df\u540d\u672a\u5728\u9759\u6001\u914d\u7f6e\u4e2d\uff0c\u5c06 Fallback \u5230 Apache APISIX"),(0,p.kt)("li",{parentName:"ul"},"\u6700\u7ec8\u5c06\u9759\u6001\u914d\u7f6e\u9010\u6e10\u8fc1\u79fb\u5230 Apache APISIX \u4e2d")),(0,p.kt)("p",null,"\u5f53\u7136\uff0c\u9664\u4e86\u4e0a\u8ff0\u65b9\u6cd5\uff0c\u6211\u4eec\u4e5f\u7ed9\u5927\u5bb6\u63a8\u8350\u4e00\u79cd\u300c\u8f7b\u6df7\u6a21\u5f0f\u300d\uff0c\u5373\u4f7f\u7528\u9759\u6001\u914d\u7f6e\u914d\u5408 Apache APISIX \u4f5c\u4e3a Location\uff0c\u5f15\u5165\u524d\u8fb9\u63d0\u5230\u7684\u4e00\u4e9b Phase \u6216 Lua \u4ee3\u7801\u8fdb\u884c\u914d\u7f6e\u5373\u53ef\u3002\u8fd9\u6837\u505a\u53ef\u4ee5\u5728\u9759\u6001\u914d\u7f6e\u4e2d\u5f15\u5165\u4e00\u4e9b\u7279\u6b8a\u914d\u7f6e\uff0c\u5b9e\u73b0\u52a8\u6001\u5316\u7b49\u6548\u679c\u3002"),(0,p.kt)("h2",{id:"\u57fa\u4e8e-apache-apisix-\u7684-shared-state-\u6539\u8fdb"},"\u57fa\u4e8e Apache APISIX \u7684 Shared State \u6539\u8fdb"),(0,p.kt)("p",null,"\u9996\u5148\u5728\u6211\u4e2a\u4eba\u770b\u6765\uff0c\u300c\u8f6c\u53d1\u6548\u7387\u4e00\u5b9a\u4e0d\u662f\u95ee\u9898\uff0c\u800c Shared State \u662f\u5f71\u54cd\u7a33\u5b9a\u6027\u7684\u6700\u5927\u56e0\u7d20\u300d\uff0c\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bf4\uff1f"),(0,p.kt)("p",null,"\u56e0\u4e3a\u8f6c\u53d1\u6548\u7387\u53ef\u4ee5\u901a\u8fc7\u6a2a\u5411\u6269\u5bb9\u53bb\u89e3\u51b3\uff0c\u4f46 Shared State \u662f\u6240\u6709\u7684\u8282\u70b9\u5171\u4eab\u7684\uff0c\u6240\u4ee5\u662f\u81f3\u5173\u91cd\u8981\u7684\u6a21\u5757\u3002"),(0,p.kt)("p",null,"\u6240\u4ee5\u5728\u4f7f\u7528 Apache APISIX \u540e\uff0c\u6211\u4eec\u4e3b\u8981\u9488\u5bf9 Shared State \u5c42\u9762\u8fdb\u884c\u4e86\u4e00\u4e9b\u8c03\u6574\u4e0e\u4f18\u5316\u3002"),(0,p.kt)("h3",{id:"\u4f18\u5316\u4e00\u591a\u53f0\u673a\u5668\u76d1\u542c\u4e0b\u7684-etcd-\u67b6\u6784\u4f18\u5316"},"\u4f18\u5316\u4e00\uff1a\u591a\u53f0\u673a\u5668\u76d1\u542c\u4e0b\u7684 etcd \u67b6\u6784\u4f18\u5316"),(0,p.kt)("p",null,"\u4e00\u822c\u516c\u53f8\u7f51\u5173\u67b6\u6784\u4e2d\uff0c\u90fd\u4f1a\u6d89\u53ca\u591a\u53f0\u673a\u5668\uff0c\u6709\u7684\u53ef\u80fd\u591a\u81f3\u51e0\u767e\u53f0\uff0c\u540c\u65f6\u6bcf\u53f0\u673a\u5668\u8fd8\u8981\u987e\u53ca worker \u6570\u91cf\u3002\u6240\u4ee5\u5f53\u591a\u53f0\u673a\u5668\u76d1\u63a7\u76f8\u540c Key \u65f6\uff0cetcd \u7684\u538b\u529b\u5c31\u4f1a\u6bd4\u8f83\u5927\uff0c\u56e0\u4e3a etcd \u7684\u5176\u4e2d\u4e00\u4e2a\u673a\u5236\u662f\u4e3a\u4e86\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4\u6027\uff0c\u9700\u8981\u6240\u6709\u4e8b\u4ef6\u8fd4\u56de\u7ed9\u76d1\u542c\u8bf7\u6c42\u540e\u624d\u80fd\u5904\u7406\u65b0\u8bf7\u6c42\uff0c\u5f53\u53d1\u9001\u7f13\u51b2\u6ee1\u4e86\u540e\u5c31\u4f1a\u4e22\u5f03\u8bf7\u6c42\u3002\u6240\u4ee5\u5f53\u591a\u53f0\u673a\u5668\u540c\u65f6\u76d1\u542c\u65f6\u5c31\u4f1a\u5bfc\u81f4 etcd \u8d85\u65f6\u8fd0\u884c\uff0c\u63d0\u793a Overload \u62a5\u9519\u7b49\u72b6\u51b5\u3002"),(0,p.kt)("p",null,"\u9488\u5bf9\u4e0a\u8ff0\u95ee\u9898\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u81ea\u7814\u7684 etcd Proxy\u3002\u4e4b\u524d Apache APISIX \u4e0e etcd \u7684\u8fde\u63a5\u5173\u7cfb\u5982\u4e0b\u56fe\u5de6\u4fa7\u6240\u793a\uff0c\u6bcf\u4e2a\u8282\u70b9\u5747\u4e0e etcd \u8fde\u63a5\u3002\u6240\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u5927\u89c4\u6a21\u5165\u53e3\u65f6\uff0c\u8fde\u63a5\u6570\u91cf\u4f1a\u7279\u522b\u5927\uff0c\u5bf9 etcd \u9020\u6210\u538b\u529b\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632796985052-c2453a37-edc1-4102-bbb7-8e03627765d5.png",alt:"etcd Proxy"})),(0,p.kt)("p",null,"\u65e2\u7136\u662f\u76d1\u542c\u76f8\u540c\u7684 Key\uff0c\u6211\u4eec\u505a\u4e86\u4e00\u4e2a\u4ee3\u7406\u6765\u8fdb\u884c\u7edf\u4e00\u76d1\u542c\uff0c\u5f53\u6709\u7ed3\u679c\u53cd\u9988\u65f6\uff0c\u518d\u8fd4\u56de\u7ed9 Apache APISIX\u3002\u5177\u4f53\u67b6\u6784\u5982\u4e0a\u56fe\u53f3\u4fa7\u6240\u793a\uff0c\u5728 Apache APISIX \u548c etcd \u4e2d\u95f4\u653e\u7f6e\u4e86 etcd Proxy \u7ec4\u4ef6\u6765\u76d1\u63a7 Key \u503c\u7684\u53d8\u5316\u3002"),(0,p.kt)("h3",{id:"\u4f18\u5316\u4e8c\u89e3\u51b3\u8def\u7531\u751f\u6548\u8fc7\u7a0b\u4e2d\u7684\u6027\u80fd\u95ee\u9898"},"\u4f18\u5316\u4e8c\uff1a\u89e3\u51b3\u8def\u7531\u751f\u6548\u8fc7\u7a0b\u4e2d\u7684\u6027\u80fd\u95ee\u9898"),(0,p.kt)("p",null,"\u968f\u7740\u516c\u53f8\u89c4\u6a21\u63d0\u5347\uff0c\u8def\u7531\u6570\u91cf\u7684\u589e\u957f\u4e5f\u4f1a\u968f\u4e4b\u800c\u6765\u3002\u6211\u4eec\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u5728\u6bcf\u6b21\u8def\u7531\u66f4\u65b0\u65f6\uff0cApache APISIX \u90fd\u4f1a\u91cd\u5efa\u7528\u6765\u5339\u914d\u8def\u7531\u7684\u524d\u7f00\u6811\u3002\u8fd9\u4e2a\u4e3b\u8981\u662f\u7531\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"table.sort")," \u6027\u80fd\u4e0d\u8db3\u6240\u5bfc\u81f4\u7684\u3002"),(0,p.kt)("p",null,"\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u89c2\u5bdf\u5230\u8def\u7531\u9891\u7e41\u66f4\u65b0\u65f6\uff0c\u7f51\u5173 CPU \u5347\u9ad8\u3001\u4e22\u5305\u7387\u5347\u9ad8\uff0c\u8fdb\u4e00\u6b65\u6392\u67e5\u540e\u53d1\u73b0\u4e22\u5305\u7387\u5347\u9ad8\u7684\u4e3b\u8981\u539f\u56e0\u4e3a Listen overflow \u6240\u9020\u6210\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632797671795-141a410b-0dd5-4873-b3dc-56f892aa2f07.png",alt:"CPU \u706b\u7130\u56fe"})),(0,p.kt)("p",null,"\u5728 CPU \u5347\u9ad8\u73b0\u8c61\u4e0a\uff0c\u901a\u8fc7\u706b\u7130\u56fe\u53ef\u4ee5\u660e\u663e\u770b\u5230\u5927\u90e8\u5206 CPU \u7684\u65f6\u95f4\u90fd\u662f\u5212\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"auxsort")," \u4e0a\uff0c\u5b83\u662f\u7531 FUNCC \u89e6\u53d1\u3002\u800c FUNCC \u7684\u89e6\u53d1\u4e5f\u6307\u660e\u4e86\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u8bc1\u660e\u76f8\u5173\u6570\u636e\u6ca1\u6709\u7ecf\u8fc7 LuaJIT\uff0c\u53ea\u6709\u56fe\u4e2d\u6700\u53f3\u4fa7\u7684\u4e00\u5c0f\u90e8\u5206\u5904\u7406\u4e86\u6b63\u5e38\u8bf7\u6c42\u3002"),(0,p.kt)("p",null,"\u51fa\u73b0\u8fd9\u79cd\u73b0\u8c61\u7684\u539f\u56e0\u4e3b\u8981\u662f LuaJIT \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"table.sort")," \u4e0d\u662f\u5b8c\u5168\u4f9d\u9760 JIT \u6a21\u5f0f\uff0c\u8fd9\u70b9\u53ef\u4ee5\u5728 ",(0,p.kt)("a",{parentName:"p",href:"http://wiki.luajit.org/NYI"},"LuaJIT \u5b98\u7f51 wiki")," \u4e2d\u770b\u5230\u76f8\u5173\u8bf4\u660e\uff0c\u6240\u4ee5\u5728 Lua \u4ee3\u7801\u73af\u5883\u4e2d\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"table.sort")," \u6548\u7387\u662f\u6bd4\u8f83\u4f4e\u7684\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632797702785-9afdc28d-6c7a-4643-8cac-72b41fee8e2b.png",alt:"LuaJIT Wiki"})),(0,p.kt)("p",null,"\u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u81ea\u5df1\u4f7f\u7528\u7eaf Lua \u4ee3\u7801\u5b9e\u73b0\u4e86\u9488\u5bf9\u4e0a\u8ff0\u573a\u666f\u7684 sort \u914d\u7f6e\u8fdb\u884c\u4e86\u89e3\u51b3\uff0c\u4f46\u5176\u5b9e Apache APISIX \u5728\u4e4b\u540e\u7684\u7248\u672c\u66f4\u65b0\u4e2d\u5df2\u7ecf\u4fee\u590d\u4e86\u8fd9\u9879\u95ee\u9898\uff0c\u5177\u4f53\u601d\u8def\u4e5f\u8ddf\u6211\u4eec\u7406\u89e3\u7684\u7c7b\u4f3c\u3002"),(0,p.kt)("h3",{id:"\u66f4\u591a-shared-state-\u4f7f\u7528\u7ecf\u9a8c"},"\u66f4\u591a Shared State \u4f7f\u7528\u7ecf\u9a8c"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5728\u4fee\u6539 Apache APISIX \u6216\u8005\u81ea\u5df1\u8fdb\u884c\u63d2\u4ef6\u5f00\u53d1\u65f6\uff0c\u786e\u4fdd\u505a\u597d Schema \u6821\u9a8c\uff0c\u5305\u542b\u5224\u7a7a\uff0c\u5c24\u5176\u662f\u5728\u5339\u914d\u90e8\u5206\u3002\u56e0\u4e3a\u5728\u5339\u914d\u90e8\u5206\u51fa\u95ee\u9898\u7684\u8bdd\uff0c\u4f1a\u9020\u6210\u6574\u4f53\u6027\u7684\u5f71\u54cd\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u505a\u597d\u4e1a\u52a1\u62c6\u5206\u89c4\u5212\u3002\u6839\u636e\u4e1a\u52a1\u91cf\u53bb\u89c4\u5212\u597d\u76f8\u5173 etcd Prefix \u548c IP \u6570\u91cf\uff0c\u90e8\u7f72\u66f4\u7a33\u56fa\u7684\u96c6\u7fa4\uff0c\u628a\u7cfb\u7edf\u6027\u98ce\u9669\u964d\u5230\u6700\u4f4e")),(0,p.kt)("h2",{id:"\u5f00\u6e90\u8bdd\u9898\u8ba8\u8bba"},"\u5f00\u6e90\u8bdd\u9898\u8ba8\u8bba"),(0,p.kt)("h3",{id:"\u7a33\u5b9a\u6027\u4e0e\u529f\u80fd\u5c42\u9762\u7684\u53d6\u820d"},"\u7a33\u5b9a\u6027\u4e0e\u529f\u80fd\u5c42\u9762\u7684\u53d6\u820d"),(0,p.kt)("p",null,"\u76ee\u524d\u91d1\u5c71\u529e\u516c\u4f7f\u7528 Apache APISIX \u5df2\u7ecf\u5feb\u4e24\u5e74\u4e86\uff0c\u4f5c\u4e3a\u4ea7\u54c1\u7528\u6237\uff0c\u6211\u8ba4\u4e3a Apache APISIX \u786e\u5b9e\u662f\u4e00\u6b3e\u7a33\u5b9a\u53ef\u4fe1\u7684\u5f00\u6e90\u4ea7\u54c1\uff0c\u5728\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u90fd\u4f1a\u53ca\u65f6\u5730\u4e0e\u793e\u533a\u6700\u65b0\u7248\u672c\u4fdd\u6301\u4e00\u81f4\u3002"),(0,p.kt)("p",null,"\u4f46\u662f\u4e00\u822c\u63a5\u89e6\u5e76\u5e94\u7528\u8fc7\u5f00\u6e90\u4ea7\u54c1\u7684\u516c\u53f8\u5e94\u8be5\u90fd\u6709\u4f53\u4f1a\uff0c\u5347\u7ea7\u7248\u672c\u4f1a\u6709\u4e00\u4e9b\u65b0\u529f\u80fd\u7684\u51fa\u73b0\uff0c\u4f46\u540c\u65f6\u4e5f\u4f1a\u5e26\u6765\u4e00\u4e9b\u7a33\u5b9a\u6027\u4e0a\u7684\u95ee\u9898\uff0c\u6240\u4ee5\u5728\u5347\u7ea7\u7248\u672c\u548c\u7a33\u5b9a\u6027\u4e2d\u6211\u4eec\u5e94\u8be5\u5982\u4f55\u53d6\u820d\u3002"),(0,p.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u80af\u5b9a\u6ca1\u6709\u7edf\u4e00\u7684\u7b54\u6848\uff0c\u4f46\u662f\u6211\u4e2a\u4eba\u89c9\u5f97\u9488\u5bf9 Apache APISIX \u8fd9\u9879\u4ea7\u54c1\uff0c\u5c3d\u91cf\u4e0e\u5b98\u7f51\u7248\u672c\u4fdd\u6301\u4e00\u81f4\u3002"),(0,p.kt)("p",null,"\u5c31\u91d1\u5c71\u529e\u516c\u800c\u8a00\uff0c\u6211\u4eec\u76ee\u524d\u56e0\u4e3a\u5927\u89c4\u6a21\u4f7f\u7528\u5230 Apache APISIX\uff0c\u6240\u4ee5\u5bf9\u7a33\u5b9a\u6027\u6709\u6781\u81f4\u8ffd\u6c42\u3002\u4e4b\u524d\u8ddf\u4e0d\u4e0a\u5b98\u65b9\u66f4\u65b0\u8fdb\u5ea6\u65f6\u4e5f\u5bf9\u6211\u4eec\u7684\u4f7f\u7528\u9020\u6210\u4e86\u4e00\u5b9a\u7a0b\u5ea6\u7684\u5f71\u54cd\uff0c\u6240\u4ee5\u63a8\u8350\u5927\u5bb6\u5c3d\u91cf\u4e0e\u5b98\u65b9\u7248\u672c\u4fdd\u6301\u4e00\u81f4\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u8bf4\u4f60\u50cf\u6211\u4eec\u4e00\u6837\uff0c\u6709\u65f6\u5019\u53ef\u80fd\u8ddf\u4e0d\u4e0a\u5b98\u65b9\u7248\u672c\uff0c\u81f3\u5c11\u4e5f\u5e94\u8be5\u505a\u5230\u6bcf\u5468\u67e5\u9605 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"GitHub")," \u7684 Master Change Log \u7b49\u76f8\u5173\u6587\u6863\uff0c\u65f6\u523b\u5173\u6ce8\u4ea7\u54c1\u53d8\u5316\u3002"),(0,p.kt)("h3",{id:"\u57fa\u4e8e-apache-apisix-\u4ea7\u54c1\u5316\u7ecf\u9a8c"},"\u57fa\u4e8e Apache APISIX \u4ea7\u54c1\u5316\u7ecf\u9a8c"),(0,p.kt)("p",null,"\u6211\u4eec\u57fa\u4e8e Apache APISIX \u5305\u88c5\u4e86\u5f88\u591a\u4ea7\u54c1\u5316\u529f\u80fd\uff0c\u6bd4\u5982\u591a\u673a\u623f\u5e94\u7528\u6bd4\u4f8b\u5207\u91cf\u3001\u4e00\u952e\u5c01\u7981\u8def\u7531\u7b49\u3002\u5728\u5b9e\u8df5\u5e94\u7528\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u8ba4\u8bc6\u5230 Apache APISIX \u662f\u4e00\u4e2a\u6781\u5176\u7075\u6d3b\u5f3a\u5927\u7684\u4ea7\u54c1\uff0c\u6240\u4ee5\u5728\u8fdb\u884c\u4ea7\u54c1\u5316\u6539\u9020\u65f6\u6211\u4eec\u5c31\u5e94\u8be5\u660e\u767d\u4e00\u4e2a\u70b9\uff1a\u5f3a\u5927 = \u907f\u514d\u4e0d\u4e86\u7684\u590d\u6742\u548c\u5371\u9669\u3002"),(0,p.kt)("p",null,"\u8fd9\u70b9\u5728 Apache APISIX \u672c\u8eab\u7684\u4ee3\u7801\u8bbe\u8ba1\u4e0a\u4e5f\u6709\u5f88\u591a\u7684\u4f53\u73b0\uff0c\u6bd4\u5982\u4e00\u4e9b\u63d2\u4ef6\u7684\u6539\u9020\u53ef\u80fd\u5c31\u9700\u8981\u81ea\u5df1\u53bb\u7f16\u8bd1\uff0c\u56e0\u4e3a\u6bd5\u7adf\u5404\u81ea\u5e94\u7528\u8d77\u6765\u65f6\u573a\u666f\u6ca1\u6709\u529e\u6cd5\u505a\u5230\u7edf\u4e00\u3002"),(0,p.kt)("p",null,"\u6700\u540e\uff0c\u57fa\u4e8e\u6211\u4eec\u524d\u8fb9\u63d0\u5230\u7684\u5b9e\u8df5\u7ecf\u9a8c\uff0c\u4e5f\u5efa\u8bae\u5927\u5bb6\u5728\u8fdb\u884c Apache APISIX \u9879\u76ee\u4ea7\u54c1\u5316\u65f6\uff0c\u63d0\u524d\u89c4\u5212\u597d\u7f51\u5173\u5171\u4eab\u7684\u9897\u7c92\u5ea6\uff0c\u51cf\u5c11\u540e\u7eed\u4f7f\u7528\u95ee\u9898\u3002"))}I.isMDXComponent=!0}}]);