(function(e){function t(t){for(var r,a,i=t[0],o=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s={app:0},c=[];function i(e){return o.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-3dbd1a44":"667dcd98","chunk-b1b5b44c":"1487ad6b","chunk-d21dfbfe":"8a4e0ab8"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-3dbd1a44":1,"chunk-b1b5b44c":1,"chunk-d21dfbfe":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3dbd1a44":"622e74d7","chunk-b1b5b44c":"7b00b344","chunk-d21dfbfe":"2c7ccc2b"}[e]+".css",s=o.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}s[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b68":function(e,t,n){},"0e68":function(e,t,n){"use strict";var r=n("c092"),a=n.n(r);a.a},1:function(e,t){},"1ccf":function(e,t,n){},2:function(e,t){},3:function(e,t){},4:function(e,t){},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),s=n("0e44"),c=n("88b4"),i=n.n(c),o=(n("96cf"),n("1da1")),u=n("5530"),l=n("6ef5"),f=n("a18c"),d=n("e140"),p=n("14b7"),v={userInfo:{},tokens:{accessToken:"",refreshToken:""},fingerprint:""},h={GET_USER:function(e){return e}},m={SET_USER_DATA:function(e,t){e.tokens=Object(u["a"])({},t),e.userInfo=Object(u["a"])({},p.decode(t.accessToken))},REMOVE_USER_DATA:function(e){e.tokens={accessToken:"",refreshToken:""},e.userInfo={}},SET_FINGERPRINT:function(e,t){e.fingerprint=t}},b={LOGIN:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].baseHttpReq("auth/login","post",n);case 3:if(r=e.sent,200!==r.status){e.next=9;break}return e.next=7,t.commit("SET_USER_DATA",r.data);case 7:return e.next=9,f["a"].push({path:"/servers"});case 9:401===r.status&&Object(d["a"])("Неверный логин или пароль"),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));function t(t,n){return e.apply(this,arguments)}return t}(),UPDATE_TOKENS:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].baseHttpReq("auth/refresh-tokens","post",{refreshToken:t.state.tokens.refreshToken,fingerprint:t.state.fingerprint});case 3:if(n=e.sent,200!==n.status){e.next=8;break}return e.next=7,t.commit("SET_USER_DATA",n.data);case 7:return e.abrupt("return",!0);case 8:if(401!==n.status){e.next=14;break}return e.next=11,t.commit("REMOVE_USER_DATA");case 11:return e.next=13,f["a"].push({path:"/login"});case 13:Object(d["a"])("Сессия истекла, необходимо заново пройти авторизацию");case 14:return e.abrupt("return",!1);case 17:return e.prev=17,e.t0=e["catch"](0),console.error(e.t0),e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));function t(t){return e.apply(this,arguments)}return t}(),LOGOUT:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].extendHttpReq("auth/logout","post",{refreshToken:t.state.tokens.refreshToken});case 3:if(n=e.sent,200!==n.status){e.next=11;break}return e.next=7,T.commit("server/REMOVE_SERVER_LIST");case 7:return e.next=9,t.commit("REMOVE_USER_DATA");case 9:return e.next=11,f["a"].push({path:"/login"});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));function t(t){return e.apply(this,arguments)}return t}(),SET_FINGERPRINT:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.commit("SET_FINGERPRINT",n);case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},g={namespaced:!0,state:v,getters:h,actions:b,mutations:m},E=(n("c740"),n("a434"),{serverList:[]}),R={SET_SERVER_LIST:function(e,t){e.serverList=t},EDIT_SERVER:function(e,t){var n=e.serverList.findIndex((function(e){return e.id===t.id}));r["a"].set(e.serverList,n,t)},ADD_SERVER:function(e,t){e.serverList.push(t)},DELETE_SERVER:function(e,t){var n=e.serverList.findIndex((function(e){return e.id===t}));e.serverList.splice(n,1)},REMOVE_SERVER_LIST:function(e){e.serverList=[]}},k={GET_SERVER_LIST:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].extendHttpReq("server","get");case 3:if(n=e.sent,200!==n.status){e.next=7;break}return e.next=7,t.commit("SET_SERVER_LIST",n.data);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}(),EDIT_SERVER:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].extendHttpReq("server","patch",n);case 3:if(r=e.sent,204!==r.status){e.next=8;break}return e.next=7,t.commit("EDIT_SERVER",n);case 7:Object(d["a"])("Изменения сохранены","is-success");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));function t(t,n){return e.apply(this,arguments)}return t}(),ADD_SERVER:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].extendHttpReq("server","post",n);case 3:if(r=e.sent,200!==r.status){e.next=9;break}return n.id=r.data.id,e.next=8,t.commit("ADD_SERVER",n);case 8:Object(d["a"])("Сервер добавлен","is-success");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));function t(t,n){return e.apply(this,arguments)}return t}(),DELETE_SERVER:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].extendHttpReq("server","delete",{data:{id:n}});case 3:if(r=e.sent,204!==r.status){e.next=8;break}return e.next=7,t.commit("DELETE_SERVER",n);case 7:Object(d["a"])("Сервер удалён","is-success");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));function t(t,n){return e.apply(this,arguments)}return t}()},x={namespaced:!0,state:E,actions:k,mutations:R},_=new i.a({encodingType:"aes",isCompression:!1});r["a"].use(a["a"]);var w=new a["a"].Store({plugins:[Object(s["a"])({storage:{getItem:function(e){return _.get(e)},setItem:function(e,t){return _.set(e,t)},removeItem:function(e){return _.remove(e)}}})],modules:{user:g,server:x}}),T=t["a"]=w},5188:function(e,t,n){"use strict";var r=n("0b68"),a=n.n(r);a.a},"54cd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("f5df1");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("top-bar"),n("router-view",{staticClass:"pages"})],1)},s=[],c=(n("a15b"),n("d81d"),n("96cf"),n("1da1")),i=n("5530"),o=n("2f62"),u=n("e813"),l=n.n(u),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"section is-vertical-center"},[r("b-navbar",{staticClass:"navbar-custom",attrs:{"fixed-top":""}},[r("template",{slot:"brand"},[r("b-navbar-item",{staticClass:"item-logo",attrs:{href:"https://shpakov.dev/",target:"_blank",rel:"noopener"}},[r("img",{attrs:{src:n("9b19"),alt:"img-logo"}})])],1),r("template",{slot:"start"},[r("b-button",{ref:"button-link",staticClass:"is-text",attrs:{tag:"router-link",to:e.accessToken?"Servers":"Login"}},[e._v(e._s(e.accessToken?"Сервера":"Войти"))])],1),r("template",{slot:"end"},[r("b-button",{staticClass:"is-text",attrs:{tag:"router-link",to:"About"}},[e._v("О приложении")]),r("b-button",{attrs:{tag:"a",href:"https://github.com/mikhail-shpakov/role-based-jwt-authorization-with-express-and-vue",target:"_blank",rel:"noopener","icon-left":"github"}},[e._v("Репозиторий")]),e.accessToken?r("b-button",{ref:"button-logout",staticClass:"is-danger is-outlined",attrs:{tag:"a",loading:e.isLoading},nativeOn:{click:function(t){return e.logout()}}},[e._v("Выйти")]):e._e()],1)],2)],1)},d=[],p={name:"TopBar",data:function(){return{isLoading:!1}},computed:Object(i["a"])({},Object(o["c"])("user",{accessToken:function(e){return e.tokens.accessToken}})),methods:Object(i["a"])({},Object(o["b"])("user",["LOGOUT"]),{logout:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.LOGOUT();case 3:e.isLoading=!1;case 4:case"end":return t.stop()}}),t)})))()}})},v=p,h=(n("7f2a"),n("2877")),m=Object(h["a"])(v,f,d,!1,null,"0ba9d788",null),b=m.exports,g=n("a9cf"),E={components:{TopBar:b,Servers:g["default"]},methods:Object(i["a"])({},Object(o["b"])("user",["SET_FINGERPRINT"]),{setFingerprint:function(){var e=this,t=function(){l.a.get(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.map((function(e){return e.value})),a=l.a.x64hash128(r.join(""),31),e.next=4,n(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},n=function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.SET_FINGERPRINT(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();window.requestIdleCallback?requestIdleCallback(Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)})))):setTimeout(Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)}))),500)}}),mounted:function(){this.setFingerprint()}},R=E,k=(n("cf25"),Object(h["a"])(R,a,s,!1,null,null,null)),x=k.exports,_=(n("c519"),n("289d")),w=n("9483");Object(w["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("5363");var T=n("a18c"),O=n("4360");r["a"].use(_["a"],{defaultIconPack:"mdi"}),r["a"].config.productionTip=!1,new r["a"]({router:T["a"],store:O["a"],render:function(e){return e(x)}}).$mount("#app")},6172:function(e,t,n){"use strict";var r=n("8a5d"),a=n.n(r);a.a},"6ef5":function(e,t,n){"use strict";n("caad"),n("96cf");var r=n("1da1"),a=n("bc3a"),s=n.n(a),c="https://role-based-auth-express-vue.herokuapp.com",i=function(){return s.a.create({baseURL:c})},o=n("4360"),u=n("e140"),l=o["a"].getters["user/GET_USER"],f=["auth/login","auth/refresh-tokens"],d=function(e){f.includes(e)||(s.a.defaults.headers.common.Authorization="Bearer ".concat(l.tokens.accessToken))},p=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(f.includes(t)){e.next=4;break}return n=l.userInfo.exp,r=Math.floor(Date.now().valueOf()/1e3),e.abrupt("return",!(n<r)||o["a"].dispatch("user/UPDATE_TOKENS"));case 4:return e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:null,e.abrupt("return",i()[n](t,r).then((function(e){return e})).catch((function(e){return e.response&&401===e.response.status||Object(u["a"])("При запросе на сервер произошла ошибка, попробуйте повторить позднее"),e.response||e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"get",r=s.length>2&&void 0!==s[2]?s[2]:null,e.next=4,p(t);case 4:if(a=e.sent,!a){e.next=8;break}return d(t),e.abrupt("return",v(t,n,r));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t["a"]={baseHttpReq:v,extendHttpReq:h}},"7e9e":function(e,t,n){"use strict";var r=n("bfbf"),a=n.n(r);a.a},"7f2a":function(e,t,n){"use strict";var r=n("1ccf"),a=n.n(r);a.a},"8a5d":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.2c1ecc8d.svg"},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),a=n("8c4f"),s=(n("caad"),n("4360")),c=function(e,t,n){var r=["/","/login","/about","/404"],a=r.includes(e.path.toLowerCase()),c=s["a"].getters["user/GET_USER"];return a||c.tokens.accessToken?n():n("/login")};r["a"].use(a["a"]);var i=[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:function(){return n.e("chunk-d21dfbfe").then(n.bind(null,"31e4"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-3dbd1a44").then(n.bind(null,"d530"))}},{path:"/servers",name:"Servers",component:function(){return Promise.resolve().then(n.bind(null,"a9cf"))}},{path:"/404",name:"404",component:function(){return n.e("chunk-b1b5b44c").then(n.bind(null,"588b"))}},{path:"*",redirect:"/404"}],o=new a["a"]({mode:"history",base:"/",routes:i});o.beforeEach((function(e,t,n){c(e,t,n)}));t["a"]=o},a9cf:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-half"},[n("server-list",{on:{selectServer:e.selectServer}})],1),n("div",{staticClass:"column form"},[n("transition",{attrs:{name:"fade",mode:"out-in",duration:{enter:150,leave:150}}},["id"in e.selected?n("server-form",{attrs:{selected:e.selected}}):n("div",[n("div",{staticClass:"img",class:{choice:"admin"===e.role,"not-allowed":"user"===e.role}}),n("p",{staticClass:"has-text-centered"},[e._v(e._s(e.imgSubtitle))])])],1)],1)])},a=[],s=(n("b64b"),n("5530")),c=(n("6ef5"),n("2f62")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("p",{staticClass:"title is-size-4"},[e._v("Список серверов")]),n("p",{staticClass:"subtitle"},[e._v(e._s(e.subtitleText))]),"admin"===e.role?n("a",{on:{click:function(t){return e.addServer()}}},[e._v("Добавить сервер")]):e._e(),n("div",{staticClass:"table-box"},[n("b-table",{attrs:{data:e.serverList,columns:e.columns,loading:e.isLoading,selected:e.selected,hoverable:"",striped:""},on:{"update:selected":function(t){e.selected=t}}},[n("template",{slot:"footer"},[n("div",{staticClass:"has-text-right"},[e._v("Серверов всего: "+e._s(e.serverList.length))])]),n("template",{slot:"empty"},[n("section",{staticClass:"section"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[n("p",[n("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),n("p",[e._v("Список серверов пуст")])])])])],2)],1)])},o=[],u=(n("96cf"),n("1da1")),l={name:"serverList",data:function(){return{isLoading:!0,selected:{},columns:[{field:"id",label:"ID",width:"60"},{field:"serverName",label:"Название сервера"},{field:"serverType",label:"Тип сервера"}]}},computed:Object(s["a"])({},Object(c["c"])("server",{serverList:function(e){return e.serverList}}),{},Object(c["c"])("user",{role:function(e){return Object.keys(e.userInfo).length?e.userInfo.permissions[0]:"user"}}),{subtitleText:function(){return"admin"===this.role?"Нажмите на любой сервер, чтобы начать редактирование и Esc, чтобы выйти из режима редактирования":"Пользователь может только просматривать список серверов"}}),methods:Object(s["a"])({},Object(c["b"])("server",["GET_SERVER_LIST"]),{fetchServerList:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.GET_SERVER_LIST();case 2:e.isLoading=!1;case 3:case"end":return t.stop()}}),t)})))()},addListenerEsc:function(){var e=this;document.addEventListener("keyup",(function(t){"Escape"===t.code&&(e.selected={})}))},addServer:function(){var e={id:0,serverName:"",serverType:"dedicated"};this.$emit("selectServer",e)}}),watch:{selected:function(){"admin"===this.role&&this.$emit("selectServer",this.selected)},serverList:{handler:function(){this.selected={}},deep:!0}},mounted:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchServerList();case 2:e.addListenerEsc();case 3:case"end":return t.stop()}}),t)})))()}},f=l,d=(n("7e9e"),n("5188"),n("2877")),p=Object(d["a"])(f,i,o,!1,null,"4908a581",null),v=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"title is-size-4"},[e._v(e._s(e.selected.id?"Редактировать":"Новый сервер"))]),n("form",{staticClass:"box",on:{submit:function(t){return t.preventDefault(),e.saveChanges(t)}}},[e.selected.id?[n("p",[n("strong",[e._v("ID:")]),e._v(" "+e._s(e.selected.id))]),n("div",{staticClass:"divider"})]:e._e(),n("b-field",{attrs:{label:"Название сервера"}},[n("b-input",{attrs:{expanded:"",required:""},model:{value:e.local.serverName,callback:function(t){e.$set(e.local,"serverName","string"===typeof t?t.trim():t)},expression:"local.serverName"}})],1),n("b-field",{staticClass:"input-margin",attrs:{label:"Тип сервера"}},[n("b-select",{attrs:{expanded:""},model:{value:e.local.serverType,callback:function(t){e.$set(e.local,"serverType","string"===typeof t?t.trim():t)},expression:"local.serverType"}},e._l(["dedicated","vds","hosting"],(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0)],1),n("div",{staticClass:"buttons is-pulled-right button-custom"},[e.selected.id?n("b-button",{attrs:{type:"is-danger","icon-left":"delete",loading:e.isLoadingDelete},on:{click:function(t){return e.confirmDelete()}}},[e._v("Удалить")]):e._e(),n("b-button",{attrs:{type:"is-success",loading:e.isLoadingChanges,disabled:e.isCheckStatusButton},on:{click:function(t){return e.saveChanges(e.selected.id?"edit":"add")}}},[e._v(e._s(e.selected.id?"Сохранить изменения":"Добавить сервер"))])],1)],2)])},m=[],b=(n("45fc"),{name:"serverForm",props:{selected:{type:Object,required:!0}},data:function(){return{isLoadingChanges:!1,isLoadingDelete:!1,local:{id:"",serverName:"",serverType:""}}},methods:Object(s["a"])({},Object(c["b"])("server",["EDIT_SERVER","ADD_SERVER","DELETE_SERVER"]),{saveChanges:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.isCheckStatusButton){n.next=2;break}return n.abrupt("return");case 2:if(t.isLoadingChanges=!0,"edit"!==e){n.next=8;break}return n.next=6,t.EDIT_SERVER(t.local);case 6:n.next=10;break;case 8:return n.next=10,t.ADD_SERVER({serverName:t.local.serverName,serverType:t.local.serverType});case 10:t.isLoadingChanges=!1;case 11:case"end":return n.stop()}}),n)})))()},confirmDelete:function(){var e=this;this.$buefy.dialog.confirm({message:"Удалить сервер с названием <strong>".concat(this.local.serverName,"</strong>?"),cancelText:"Отмена",confirmText:"Удалить",type:"is-danger",onConfirm:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.deleteServer();case 2:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()})},deleteServer:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoadingDelete=!0,t.next=3,e.DELETE_SERVER(e.local.id);case 3:e.isLoadingDelete=!1;case 4:case"end":return t.stop()}}),t)})))()}}),computed:{isCheckStatusButton:function(){var e=this;if(this.local.serverName.length<3)return!0;var t=Object.keys(this.local).some((function(t){return e.local[t]!==e.selected[t]}));return!t}},watch:{selected:{handler:function(){this.local=Object.assign({},this.selected)},immediate:!0}}}),g=b,E=(n("c19c"),n("6172"),Object(d["a"])(g,h,m,!1,null,"7483c616",null)),R=E.exports,k={name:"Servers",components:{ServerList:v,ServerForm:R},data:function(){return{selected:{}}},computed:Object(s["a"])({},Object(c["c"])("user",{role:function(e){return Object.keys(e.userInfo).length?e.userInfo.permissions[0]:"user"}}),{imgSubtitle:function(){return"admin"===this.role?"Сервер для редактирования не выбран":"Добавлять, удалять и редактировать сервера может только администратор"}}),methods:{selectServer:function(e){this.selected=e}}},x=k,_=(n("0e68"),Object(d["a"])(x,r,a,!1,null,"5b48d46e",null));t["default"]=_.exports},bfbf:function(e,t,n){},c092:function(e,t,n){},c19c:function(e,t,n){"use strict";var r=n("54cd"),a=n.n(r);a.a},c519:function(e,t,n){},cf25:function(e,t,n){"use strict";var r=n("fea6"),a=n.n(r);a.a},e140:function(e,t,n){"use strict";var r=n("aced");t["a"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"is-danger";r["a"].open({message:e,position:"is-bottom",type:t,duration:3e3})}},fea6:function(e,t,n){}});
//# sourceMappingURL=app-legacy.f073608c.js.map