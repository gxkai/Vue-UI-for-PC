!function(e){function n(n){for(var r,i,a=n[0],u=n[1],f=n[2],d=0,s=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(n);s.length;)s.shift()();return c.push.apply(c,f||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={index:0},c=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var c,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2b90e152":"ebeadacf","chunk-2d0aa5c8":"435b90ef","chunk-2d0b68f8":"f68e05f8","chunk-2d0bd236":"f84431ed","chunk-2d0d6ce0":"ef08d348","chunk-2d0de553":"174bc3be","chunk-2d0e1fe2":"ea1d0f45","chunk-2d0e95df":"bcf39c6e","chunk-2d2250c5":"0b93b149","chunk-52a9cd2e":"a0b44339"}[e]+".js"}(e);var u=new Error;c=function(n){a.onerror=a.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",u.name="ChunkLoadError",u.type=r,u.request=c,t[1](u)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:a})}),12e4);a.onerror=a.onload=c,document.head.appendChild(a)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/Vue-UI-for-PC/web/",i.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var f=0;f<a.length;f++)n(a[f]);var l=u;c.push([0,"vendors","ak"]),t()}({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"parseTime",(function(){return P})),t.d(r,"getAppBaseUrl",(function(){return H})),t.d(r,"numberFormat",(function(){return T})),t.d(r,"filterHTMLTag",(function(){return _})),t.d(r,"trim",(function(){return A}));t("744f"),t("6c7b"),t("7514"),t("20d6"),t("1c4c"),t("6762"),t("cadf"),t("e804"),t("55dd"),t("d04f"),t("c8ce"),t("217b"),t("7f7f"),t("f400"),t("7f25"),t("536b"),t("d9ab"),t("f9ab"),t("32d7"),t("25c9"),t("9f3c"),t("042e"),t("c7c6"),t("f4ff"),t("049f"),t("7872"),t("a69f"),t("0b21"),t("6c1a"),t("c7c62"),t("84b4"),t("c5f6"),t("2e37"),t("fca0"),t("7cdf"),t("ee1d"),t("b1b1"),t("87f3"),t("9278"),t("5df2"),t("04ff"),t("f751"),t("4504"),t("fee7"),t("ffc1"),t("0d6d"),t("9986"),t("8e6e"),t("25db"),t("e4f7"),t("b9a1"),t("64d5"),t("9aea"),t("db97"),t("66c8"),t("57f0"),t("165b"),t("456d"),t("cf6a"),t("fd24"),t("8615"),t("551c"),t("097d"),t("df1b"),t("2397"),t("88ca"),t("ba16"),t("d185"),t("ebde"),t("2d34"),t("f6b3"),t("2251"),t("c698"),t("a19f"),t("9253"),t("9275"),t("3b2b"),t("3846"),t("4917"),t("a481"),t("28a5"),t("386d"),t("6b54"),t("4f7f"),t("8a81"),t("ac4d"),t("8449"),t("9c86"),t("fa83"),t("48c0"),t("a032"),t("aef6"),t("d263"),t("6c37"),t("9ec8"),t("5695"),t("2fdb"),t("d0b0"),t("5df3"),t("b54a"),t("f576"),t("ed50"),t("788d"),t("14b9"),t("f386"),t("f559"),t("1448"),t("673e"),t("242a"),t("c66f"),t("b05c"),t("34ef"),t("6aa2"),t("15ac"),t("af56"),t("b6e4"),t("9c29"),t("63d9"),t("4dda"),t("10ad"),t("c02b"),t("4795"),t("130f"),t("ac6a"),t("96cf");var o=t("2b0e"),c=(t("a41b"),{name:"App",created:function(){}}),i=(t("5c0b"),t("2877")),a=Object(i.a)(c,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),[],!1,null,null,null).exports,u=t("a18c"),f=t("3a0d"),l=t("2f62"),d={state:{hello:"hello",helloWord:""},mutations:{changeHello:function(e){e.hello+="欢迎"}},actions:{toggleHello:function(e){(0,e.commit)("changeHello")}}};o.a.use(l.a);var s=new l.a.Store({getters:{hello:function(e){return e.app.hello},helloWord:function(e){return e.app.helloWord}},modules:{app:d}}),p=t("fa7d"),b=t("8237"),m=t.n(b);function h(e,n){return e.filter((function(e){return!!function(e,n){return!(e.meta&&e.meta.permission&&Array.isArray(n))||n.some((function(n){return n.href===e.path}))}(e,n)&&(e.children&&e.children.length&&(e.children=h(e.children,n)),!0)}))}function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){v(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var w=["/login","/404","/","/signOut"];u.c.beforeEach((function(e,n,t){if(e.meta.title&&(document.title=e.meta.title),~w.indexOf(e.path))return t(),!1;Object(p.c)()?(u.c.resolve({path:"*"}).route.name||(console.log("需要添加动态路由"),function(e){var n=Object(p.b)("_menu",1);console.log("addRoutes");var t=Object(p.b)("token",1),r=m()(JSON.stringify(n)+t),o=Object(p.b)("md5",1);if(n&&o&&r!==o)return console.log("菜单权限异常，退出处理"),e.push("/signOut"),!1;if(n&&t){var c=u.a.concat(u.b),i=h(Object(p.a)(c),n);e.addRoutes(i),console.log("addRoutes success ...",i)}}(u.c),t(y(y({},e),{},{replace:!0}))),t()):(console.log("登录超时或者是页面确实是不存在"),t({path:"/",query:{redirect:e.fullPath}}))})),u.c.afterEach((function(e,n){console.log("进入页面 '".concat(e.path,"' 成功!"))}));var O={},k=function(e){e.directive("permission",{inserted:function(e,n){(function(e,n){var t=!1;if(Array.isArray(n))if(Array.isArray(e))for(var r=function(r){var o=e[r];n.some((function(e){return e.href===o}))&&(t=!0)},o=0;o<e.length;o++)r(o);else t=n.some((function(n){return n.href===e}));return t})(n.value,Object(p.b)("_menu")||"[]")||e.parentNode.removeChild(e)},update:function(e,n,t,r){}})};window.Vue&&(window.omPermission=O,Vue.use(k)),O.install=k;var S=O;function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,n){if(!e)return"";var t=n||"{y}-{m}-{d} {h}:{i}:{s}",r=null,o={y:(r="object"===j(e)?e:new Date(parseInt(e))).getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()};return t.replace(/{(y|m|d|h|i|s|a)+}/g,(function(e,n){var t=o[n];return"a"===n?["一","二","三","四","五","六","日"][t-1]:(e.length>0&&t<10&&(t="0"+t),t||0)}))}function H(e){return window.APP_CONFIG.VUE_APP_BASE_URL||"/"}function T(e){return+(e=(e=""+e).replace(/,/g,""))}function _(e){return"number"!=typeof e&&"boolean"!=typeof e&&"function"!=typeof e||(e=""+e),e?e.replace(/<[^>]+>/gm,""):""}function A(e){return e.replace(/(^\s*)|(\s*$)/g,"")}var M=function(e,n){e.directive("textOverflow",{inserted:function(e,n){if(e.innerHTML&&e.scrollHeight>e.offsetHeight){for(var t=e.innerHTML.split("");e.scrollHeight>e.offsetHeight;)e.innerHTML=t.join(""),t.pop();e.innerHTML=e.innerHTML.substr(0,e.innerHTML.length-1)+"..."}}})};o.a.config.productionTip=!1,o.a.use(f.a),o.a.use(S),o.a.use(M),Object.keys(r).forEach((function(e){o.a.filter(e,r[e])})),new o.a({router:u.c,store:s,render:function(e){return e(a)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("e332");t.n(r).a},a18c:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return a}));var r=t("2b0e"),o=t("8c4f");r.a.use(o.a);var c=[{path:"/",name:"HelloWorld",component:function(){return t.e("chunk-2d0b68f8").then(t.bind(null,"1e4b"))},meta:{title:"HelloWorld"}},{path:"/404",name:"404",component:function(){return t.e("chunk-2d0e95df").then(t.bind(null,"8cdb"))}},{path:"/signOut",name:"signOut",component:function(){return t.e("chunk-2d0de553").then(t.bind(null,"84cd"))}},{path:"/login",name:"login",component:function(){return t.e("chunk-52a9cd2e").then(t.bind(null,"edb6"))}}];n.c=new o.a({mode:"history",base:"/Vue-UI-for-PC/web/",scrollBehavior:function(){return{y:0}},routes:c});var i=[{path:"/admin",name:"admin",component:function(){return t.e("chunk-2d0e1fe2").then(t.bind(null,"7d98"))},redirect:"/admin/main",meta:{title:"主页",icon:"fa fa-home"},children:[{path:"/admin/main",name:"main",component:function(){return t.e("chunk-2d0aa5c8").then(t.bind(null,"114f"))},meta:{title:"后台首页"}}]},{path:"/admin/components",name:"components",component:function(){return t.e("chunk-2d0e1fe2").then(t.bind(null,"7d98"))},redirect:"/admin/table",meta:{title:"组件",icon:"fa fa-file-code-o"},children:[{path:"/admin/table",name:"table",component:function(){return t.e("chunk-2b90e152").then(t.bind(null,"b342"))},meta:{title:"表格"}},{path:"/admin/echarts",name:"echarts",component:function(){return t.e("chunk-2d0bd236").then(t.bind(null,"2b5e"))},meta:{title:"图形图表"}}]},{path:"/admin/userCenter",name:"components",component:function(){return t.e("chunk-2d0e1fe2").then(t.bind(null,"7d98"))},redirect:"/admin/user",meta:{title:"用户管理",icon:"fa fa-user-o",permission:!0},children:[{path:"/admin/user",name:"user",component:function(){return t.e("chunk-2d2250c5").then(t.bind(null,"e378"))},meta:{title:"用户列表",permission:!0}},{path:"/admin/addUser",name:"addUser",component:function(){return t.e("chunk-2d0d6ce0").then(t.bind(null,"73b0"))},meta:{title:"新增用户",permission:!0}},{path:"/admin/addUser2",name:"addUser2",component:function(){return t.e("chunk-2d0d6ce0").then(t.bind(null,"73b0"))},meta:{title:"新增用户2",permission:!0}}]}],a=[{path:"*",redirect:"/404"}]},a41b:function(e,n,t){},e332:function(e,n,t){},fa7d:function(e,n,t){"use strict";t.d(n,"f",(function(){return i})),t.d(n,"b",(function(){return a})),t.d(n,"d",(function(){return u})),t.d(n,"a",(function(){return f})),t.d(n,"c",(function(){return l})),t.d(n,"g",(function(){return d})),t.d(n,"e",(function(){return s}));var r=t("a78e"),o=t.n(r);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n,t){if(0===t)window.localStorage.setItem(e,JSON.stringify(n));else if(void 0===t)window.sessionStorage.setItem(e,JSON.stringify(n));else if(t>0){var r=new Date,o=JSON.stringify({value:n,time:r.setSeconds(r.getSeconds()+3600*t)});window.localStorage.setItem(e,o)}}function a(e,n){if(void 0===n){var t=window.sessionStorage.getItem(e);return t?JSON.parse(t):t}var r=new Date,o=window.localStorage.getItem(e);if(o){var c=JSON.parse(o);return c.time?r<new Date(c.time)?c.value:(window.localStorage.removeItem(e),null):c}return o}function u(e,n){void 0===n?window.sessionStorage.removeItem(e):window.localStorage.removeItem(e)}function f(e){if("object"===c(e)){var n=e instanceof Array?[]:{};for(var t in e)e.hasOwnProperty(t)&&(n[t]="object"===c(e[t])?f(e[t]):e[t]);return n}}function l(e){var n=e?"refreshToken":"token";return o.a.get(n)}function d(e,n){if(e){e="Bearer_"+e;var t="token",r=.02;return n&&(t="refreshToken",r=.98/24),o.a.set(t,e,{expires:r})}}function s(e){var n=e?"refreshToken":"token";return o.a.remove(n)}}});