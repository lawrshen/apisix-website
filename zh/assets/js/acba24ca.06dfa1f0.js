"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15813],{35318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69e3:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=t(25773),i=t(30808),o=(t(27378),t(35318)),a=["components"],l={title:"Developer Guide"},u=void 0,p={unversionedId:"developer-guide",id:"version-0.2.0/developer-guide",isDocsHomePage:!1,title:"Developer Guide",description:"\x3c!--",source:"@site/docs-apisix-python-plugin-runner_versioned_docs/version-0.2.0/developer-guide.md",sourceDirName:".",slug:"/developer-guide",permalink:"/zh/docs/python-plugin-runner/developer-guide",editUrl:null,tags:[],version:"0.2.0",frontMatter:{title:"Developer Guide"},sidebar:"version-0.2.0/docs",previous:{title:"Getting started",permalink:"/zh/docs/python-plugin-runner/getting-started"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Debug",id:"debug",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Test",id:"test",children:[]},{value:"Data Format",id:"data-format",children:[]},{value:"Data Protocol",id:"data-protocol",children:[]}],c={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This documentation explains how to develop this project."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python 3.7+"),(0,o.kt)("li",{parentName:"ul"},"APISIX 2.7.0+")),(0,o.kt)("h2",{id:"debug"},"Debug"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"make setup")," installation dependencies"),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"make install")," installation runner to system"),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"make dev")," to start it")),(0,o.kt)("h2",{id:"plugin"},"Plugin"),(0,o.kt)("h4",{id:"plugin-directory"},"Plugin directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/path/to/apisix-python-plugin-runner/apisix/plugin\n")),(0,o.kt)("p",null,"the ",(0,o.kt)("inlineCode",{parentName:"p"},".py")," files in this directory autoload"),(0,o.kt)("h4",{id:"plugin-example"},"Plugin example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/path/to/apisix-python-plugin-runner/apisix/plugin/stop.py\n/path/to/apisix-python-plugin-runner/apisix/plugin/rewrite.py\n")),(0,o.kt)("h4",{id:"plugin-format"},"Plugin Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Any\nfrom apisix.runner.http.request import Request\nfrom apisix.runner.http.response import Response\nfrom apisix.runner.plugin.core import PluginBase\n\n\nclass Test(PluginBase):\n\n    def name(self) -> str:\n        """\n        The name of the plugin registered in the runner\n        :return:\n        """\n        return "test"\n\n    def config(self, conf: Any) -> Any:\n        """\n        Parse plugin configuration\n        :param conf:\n        :return:\n        """\n        return conf\n\n    def filter(self, conf: Any, request: Request, response: Response):\n        """\n        The plugin executes the main function\n        :param conf:\n            plugin configuration after parsing\n        :param request:\n            request parameters and information\n        :param response:\n            response parameters and information\n        :return:\n        """\n\n        # print plugin configuration\n        print(conf)\n\n        # Fetch request nginx variable `host`\n        host = request.get_var("host")\n        print(host)\n\n        # Fetch request body\n        body = request.get_body()\n        print(body)\n\n        # Set response headers\n        response.set_header("X-Resp-A6-Runner", "Python")\n\n        # Set response body\n        response.set_body("Hello, Python Runner of APISIX")\n\n        # Set response status code\n        response.set_status_code(201)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plugins must inherit the ",(0,o.kt)("inlineCode",{parentName:"li"},"PluginBase")," class and implement all functions.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," function: used to set the registered plugin name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config")," function: used to parse plugin configuration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filter")," function: used to filter requests.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"conf")," parameter: plugin configuration after parsing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"request")," parameter: Request object, which can be used to get and set request information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"response")," parameter: Response object, which can be used to set response information.")))))),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"make test"),"."),(0,o.kt)("h2",{id:"data-format"},"Data Format"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/flatbuffers"},"FlatBuffers")),(0,o.kt)("h2",{id:"data-protocol"},"Data Protocol"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1 byte of type + 3 bytes of length + data\n")))}d.isMDXComponent=!0}}]);