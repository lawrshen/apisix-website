"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32746],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16615:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),l=["components"],o={title:"consumer-restriction"},s=void 0,u={unversionedId:"plugins/consumer-restriction",id:"version-2.12/plugins/consumer-restriction",isDocsHomePage:!1,title:"consumer-restriction",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.12/plugins/consumer-restriction.md",sourceDirName:"plugins",slug:"/plugins/consumer-restriction",permalink:"/docs/apisix/2.12/plugins/consumer-restriction",editUrl:null,tags:[],version:"2.12",frontMatter:{title:"consumer-restriction"},sidebar:"version-2.12/docs",previous:{title:"referer-restriction",permalink:"/docs/apisix/2.12/plugins/referer-restriction"},next:{title:"limit-req",permalink:"/docs/apisix/2.12/plugins/limit-req"}},d=[{value:"Summary",id:"summary",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Example",id:"example",children:[{value:"How to restrict <code>consumer_name</code>",id:"how-to-restrict-consumer_name",children:[]},{value:"How to restrict <code>allowed_by_methods</code>",id:"how-to-restrict-allowed_by_methods",children:[]}]},{value:"How to restrict <code>service_id</code>",id:"how-to-restrict-service_id",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},"Attributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#example"},"Example"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-restrict-consumer_name"},"How to restrict consumer_name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-restrict-service_id"},"How to restrict service_id")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},"Disable Plugin"))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," makes corresponding access restrictions based on different objects selected."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"consumer_name"),(0,i.kt)("td",{parentName:"tr",align:null},'["consumer_name", "service_id", "route_id"]'),(0,i.kt)("td",{parentName:"tr",align:null},"According to different objects, corresponding restrictions, support ",(0,i.kt)("inlineCode",{parentName:"td"},"consumer_name"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"service_id"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"route_id"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"whitelist"),(0,i.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Grant full access to all users specified in the provided list , ",(0,i.kt)("strong",{parentName:"td"},"has the priority over ",(0,i.kt)("inlineCode",{parentName:"strong"},"allowed_by_methods")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"blacklist"),(0,i.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Reject connection to all users specified in the provided list , ",(0,i.kt)("strong",{parentName:"td"},"has the priority over ",(0,i.kt)("inlineCode",{parentName:"strong"},"whitelist")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"403"),(0,i.kt)("td",{parentName:"tr",align:null},"[200,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"The HTTP status code returned when the request is rejected.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The message returned when the request is rejected.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"allowed_by_methods"),(0,i.kt)("td",{parentName:"tr",align:null},"array","[object]"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Set a list of allowed HTTP methods for the selected user , HTTP methods can be ",(0,i.kt)("inlineCode",{parentName:"td"},'["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS", "CONNECT", "TRACE"]'))))),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field is an enumerated type, it can be ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_name")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"service_id"),". They stand for the following meanings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"consumer_name"),": Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"username")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"consumer")," to a whitelist or blacklist (supporting single or multiple consumers) to restrict access to services or routes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"service_id"),": Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"service")," to a whitelist or blacklist (supporting one or more services) to restrict access to the service. It needs to be used in conjunction with authorized plugins.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"how-to-restrict-consumer_name"},"How to restrict ",(0,i.kt)("inlineCode",{parentName:"h3"},"consumer_name")),(0,i.kt)("p",null,"The following is an example. The ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," plugin is enabled on the specified route to restrict consumer access."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "username": "jack1",\n    "plugins": {\n        "basic-auth": {\n            "username":"jack2019",\n            "password": "123456"\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "username": "jack2",\n    "plugins": {\n        "basic-auth": {\n            "username":"jack2020",\n            "password": "123456"\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {},\n        "consumer-restriction": {\n            "whitelist": [\n                "jack1"\n            ]\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test Plugin")),(0,i.kt)("p",null,"Requests from jack1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -u jack2019:123456 http://127.0.0.1:9080/index.html\nHTTP/1.1 200 OK\n...\n")),(0,i.kt)("p",null,"Requests from jack2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -u jack2020:123456 http://127.0.0.1:9080/index.html -i\nHTTP/1.1 403 Forbidden\n...\n{"message":"The consumer_name is forbidden."}\n')),(0,i.kt)("h3",{id:"how-to-restrict-allowed_by_methods"},"How to restrict ",(0,i.kt)("inlineCode",{parentName:"h3"},"allowed_by_methods")),(0,i.kt)("p",null,"This example restrict the user ",(0,i.kt)("inlineCode",{parentName:"p"},"jack1")," to only ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," on the resource"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {},\n        "consumer-restriction": {\n            "allowed_by_methods":[{\n                "user": "jack1",\n                "methods": ["POST"]\n            }]\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test Plugin")),(0,i.kt)("p",null,"Requests from jack1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -u jack2019:123456 http://127.0.0.1:9080/index.html\nHTTP/1.1 403 Forbidden\n...\n{"message":"The consumer_name is forbidden."}\n')),(0,i.kt)("p",null,"Add the capability for ",(0,i.kt)("inlineCode",{parentName:"p"},"jack1")," to get the resource"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {},\n        "consumer-restriction": {\n            "allowed_by_methods":[{\n                "user": "jack1",\n                "methods": ["POST","GET"]\n            }]\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Requests from jack1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -u jack2019:123456 http://127.0.0.1:9080/index.html\nHTTP/1.1 200 OK\n")),(0,i.kt)("h2",{id:"how-to-restrict-service_id"},"How to restrict ",(0,i.kt)("inlineCode",{parentName:"h2"},"service_id")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"service_id")," method needs to be used together with the authorization plug-in. Here, the key-auth authorization plug-in is taken as an example."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create two services.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/services/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "desc": "new service 001"\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/services/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "desc": "new service 002"\n}\'\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Bind the ",(0,i.kt)("inlineCode",{parentName:"li"},"consumer-restriction")," plugin on the ",(0,i.kt)("inlineCode",{parentName:"li"},"consumer")," (need to cooperate with an authorized plugin to bind), and add the ",(0,i.kt)("inlineCode",{parentName:"li"},"service_id")," whitelist list.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "new_consumer",\n    "plugins": {\n    "key-auth": {\n        "key": "auth-jack"\n    },\n    "consumer-restriction": {\n           "type": "service_id",\n            "whitelist": [\n                "1"\n            ],\n            "rejected_code": 403\n        }\n    }\n}\'\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"key-auth")," plugin on the route and bind the ",(0,i.kt)("inlineCode",{parentName:"li"},"service_id")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "service_id": 1,\n    "plugins": {\n         "key-auth": {\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test Plugin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html -H 'apikey: auth-jack' -i\nHTTP/1.1 200 OK\n...\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"service_id")," in the whitelist column allows access, and the plug-in configuration takes effect."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"key-auth")," plugin on the route and bind the ",(0,i.kt)("inlineCode",{parentName:"li"},"service_id")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "service_id": 2,\n    "plugins": {\n         "key-auth": {\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test Plugin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/index.html -H \'apikey: auth-jack\' -i\nHTTP/1.1 403 Forbidden\n...\n{"message":"The service_id is forbidden."}\n')),(0,i.kt)("p",null,"It means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"service_id")," that is not in the whitelist is denied access, and the plug-in configuration takes effect."),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {}\n    }\n}\'\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," plugin has been disabled now. It works for other plugins."))}c.isMDXComponent=!0}}]);