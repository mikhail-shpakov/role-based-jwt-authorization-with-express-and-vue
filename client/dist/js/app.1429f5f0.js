(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,r=1;r<s.length;r++){var i=s[r];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},r={app:0},a={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-45397d14":"6afaa522","chunk-705e41b8":"6c493571","chunk-9ff476da":"bf67bd6e"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={"chunk-45397d14":1,"chunk-705e41b8":1,"chunk-9ff476da":1};r[e]?t.push(r[e]):0!==r[e]&&s[e]&&t.push(r[e]=new Promise((function(t,s){for(var n="css/"+({}[e]||e)+"."+{"chunk-45397d14":"767eedb1","chunk-705e41b8":"6e612de3","chunk-9ff476da":"4469f24c"}[e]+".css",a=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],f.parentNode.removeChild(f),s(o)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,s){n=a[e]=[t,s]}));t.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var s=a[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,s[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0b68":function(e,t,s){},1:function(e,t){},2:function(e,t){},3:function(e,t){},"315f":function(e,t,s){},3881:function(e,t,s){},4:function(e,t){},"4a2e":function(e,t,s){},5188:function(e,t,s){"use strict";var n=s("0b68"),r=s.n(n);r.a},"56d7":function(e,t,s){"use strict";s.r(t);s("f5df");var n=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("top-bar"),s("router-view",{staticClass:"pages"})],1)},a=[],o=(s("e6cf"),s("5530")),i=s("2f62"),c=s("e813"),l=s.n(c),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section is-vertical-center"},[n("b-navbar",{staticClass:"navbar-custom",attrs:{"fixed-top":""}},[n("template",{slot:"brand"},[n("b-navbar-item",{staticClass:"item-logo",attrs:{href:"https://shpakov.dev/",target:"_blank",rel:"noopener"}},[n("img",{attrs:{src:s("9b19"),alt:"img-logo"}})])],1),n("template",{slot:"start"},[n("b-button",{ref:"button-link",staticClass:"is-text",attrs:{tag:"router-link",to:e.accessToken?"Servers":"Login"}},[e._v(e._s(e.accessToken?"Сервера":"Войти"))])],1),n("template",{slot:"end"},[n("b-button",{staticClass:"is-text",attrs:{tag:"router-link",to:"About"}},[e._v("О приложении")]),n("b-button",{attrs:{tag:"a",href:"https://github.com/mikhail-shpakov/role-based-jwt-authorization-with-express-and-vue",target:"_blank",rel:"noopener","icon-left":"github"}},[e._v("Репозиторий")]),e.accessToken?n("b-button",{ref:"button-logout",staticClass:"is-danger is-outlined",attrs:{tag:"a",loading:e.isLoading},nativeOn:{click:function(t){return e.logout()}}},[e._v("Выйти")]):e._e()],1)],2)],1)},d=[],f={name:"TopBar",data(){return{isLoading:!1}},computed:Object(o["a"])({},Object(i["c"])("user",{accessToken:e=>e.tokens.accessToken})),methods:Object(o["a"])({},Object(i["b"])("user",["LOGOUT"]),{async logout(){this.isLoading=!0,await this.LOGOUT(),this.isLoading=!1}})},h=f,p=(s("78b5"),s("2877")),v=Object(p["a"])(h,u,d,!1,null,"708de72a",null),m=v.exports,b=s("a9cf"),g={components:{TopBar:m,Servers:b["default"]},methods:Object(o["a"])({},Object(i["b"])("user",["SET_FINGERPRINT"]),{setFingerprint(){const e=()=>{l.a.get(async e=>{const s=e.map(e=>e.value),n=l.a.x64hash128(s.join(""),31);await t(n)})},t=async e=>{await this.SET_FINGERPRINT(e)};window.requestIdleCallback?requestIdleCallback(async()=>{e()}):setTimeout(async()=>{e()},500)}}),mounted(){this.setFingerprint()}},E=g,_=(s("cf25"),Object(p["a"])(E,r,a,!1,null,null,null)),T=_.exports,y=(s("c519"),s("289d")),S=s("9483");Object(S["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});s("5363"),s("96cf");var k=s("8c4f"),R=s("0e44"),w=s("88b4"),L=s.n(w),O=s("bc3a"),C=s.n(O);const j="https://role-based-auth-express-vue.herokuapp.com";var x=()=>C.a.create({baseURL:j}),I=s("aced"),D=function(e,t="is-danger"){I["a"].open({message:e,position:"is-bottom",type:t,duration:3e3})};const A=["auth/login","auth/refresh-tokens"],N=e=>{A.includes(e)||(C.a.defaults.headers.common.Authorization=`Bearer ${Y.state.user.tokens.accessToken}`)},V=async e=>{if(!A.includes(e)){const e=Y.state.user.userInfo.exp,t=Math.floor(Date.now().valueOf()/1e3);return!(e<t)||Y.dispatch("user/UPDATE_TOKENS")}return!0},P=async(e,t,s=null)=>x()[t](e,s).then(e=>e).catch(e=>(e.response&&401===e.response.status||D("При запросе на сервер произошла ошибка, попробуйте повторить позднее"),e.response||e)),q=async(e,t="get",s=null)=>{const n=await V(e);if(n)return N(e),P(e,t,s)};var U={baseHttpReq:P,extendHttpReq:q};const G=s("14b7"),$={userInfo:{},tokens:{accessToken:"",refreshToken:""},fingerprint:""},F={GET_USER:e=>e},B={SET_USER_DATA(e,t){e.tokens=Object(o["a"])({},t),e.userInfo=Object(o["a"])({},G.decode(t.accessToken))},REMOVE_USER_DATA(e){e.tokens={accessToken:"",refreshToken:""},e.userInfo={}},SET_FINGERPRINT(e,t){e.fingerprint=t}},H={LOGIN:async(e,t)=>{try{const s=await U.baseHttpReq("auth/login","post",t);200===s.status&&(await e.commit("SET_USER_DATA",s.data),await se.push({path:"/servers"})),401===s.status&&D("Неверный логин или пароль")}catch(s){console.error(s)}},UPDATE_TOKENS:async e=>{try{const t=await U.baseHttpReq("auth/refresh-tokens","post",{refreshToken:e.state.tokens.refreshToken,fingerprint:e.state.fingerprint});return 200===t.status?(await e.commit("SET_USER_DATA",t.data),!0):(401===t.status&&(await e.commit("REMOVE_USER_DATA"),await se.push({path:"/login"}),D("Сессия истекла, необходимо заново пройти авторизацию")),!1)}catch(t){return console.error(t),!1}},LOGOUT:async e=>{try{const t=await U.extendHttpReq("auth/logout","post",{refreshToken:e.state.tokens.refreshToken});200===t.status&&(await Y.commit("server/REMOVE_SERVER_LIST"),await e.commit("REMOVE_USER_DATA"),await se.push({path:"/login"}))}catch(t){console.error(t)}},SET_FINGERPRINT:async(e,t)=>{await e.commit("SET_FINGERPRINT",t)}};var M={namespaced:!0,state:$,getters:F,actions:H,mutations:B};s("a434");const z={serverList:[]},K={SET_SERVER_LIST(e,t){e.serverList=t},EDIT_SERVER(e,t){const s=e.serverList.findIndex(e=>e.id===t.id);n["a"].set(e.serverList,s,t)},ADD_SERVER(e,t){e.serverList.push(t)},DELETE_SERVER(e,t){const s=e.serverList.findIndex(e=>e.id===t);e.serverList.splice(s,1)},REMOVE_SERVER_LIST(e){e.serverList=[]}},J={GET_SERVER_LIST:async e=>{try{const t=await U.extendHttpReq("server","get");200===t.status&&await e.commit("SET_SERVER_LIST",t.data)}catch(t){console.error(t)}},EDIT_SERVER:async(e,t)=>{try{const s=await U.extendHttpReq("server","patch",t);204===s.status&&(await e.commit("EDIT_SERVER",t),D("Изменения сохранены","is-success"))}catch(s){console.error(s)}},ADD_SERVER:async(e,t)=>{try{const s=await U.extendHttpReq("server","post",t);200===s.status&&(t.id=s.data.id,await e.commit("ADD_SERVER",t),D("Сервер добавлен","is-success"))}catch(s){console.error(s)}},DELETE_SERVER:async(e,t)=>{try{const s=await U.extendHttpReq("server","delete",{data:{id:t}});204===s.status&&(await e.commit("DELETE_SERVER",t),D("Сервер удалён","is-success"))}catch(s){console.error(s)}}};var Q={namespaced:!0,state:z,actions:J,mutations:K};const W=new L.a({encodingType:"aes",isCompression:!1});n["a"].use(i["a"]);const X=new i["a"].Store({plugins:[Object(R["a"])({storage:{getItem:e=>W.get(e),setItem:(e,t)=>W.set(e,t),removeItem:e=>W.remove(e)}})],modules:{user:M,server:Q}});var Y=X,Z=(e,t,s)=>{const n=["/","/login","/about","/404"],r=n.includes(e.path.toLowerCase()),a=Y.getters["user/GET_USER"];return r||a.tokens.accessToken?s():s("/login")};n["a"].use(k["a"]);const ee=[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:()=>s.e("chunk-9ff476da").then(s.bind(null,"31e4"))},{path:"/about",name:"About",component:()=>s.e("chunk-705e41b8").then(s.bind(null,"d530"))},{path:"/servers",name:"Servers",component:()=>Promise.resolve().then(s.bind(null,"a9cf"))},{path:"/404",name:"404",component:()=>s.e("chunk-45397d14").then(s.bind(null,"588b"))},{path:"*",redirect:"/404"}],te=new k["a"]({mode:"history",base:"/",routes:ee});te.beforeEach((e,t,s)=>{Z(e,t,s)});var se=te;n["a"].use(y["a"],{defaultIconPack:"mdi"}),n["a"].config.productionTip=!1,new n["a"]({router:se,store:Y,render:e=>e(T)}).$mount("#app")},6172:function(e,t,s){"use strict";var n=s("8a5d"),r=s.n(n);r.a},"78b5":function(e,t,s){"use strict";var n=s("3881"),r=s.n(n);r.a},"79ee":function(e,t,s){"use strict";var n=s("315f"),r=s.n(n);r.a},"7c66":function(e,t,s){},"870a":function(e,t,s){"use strict";var n=s("4a2e"),r=s.n(n);r.a},"8a5d":function(e,t,s){},"9b19":function(e,t,s){e.exports=s.p+"img/logo.6835cdca.svg"},a9cf:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("server-list",{on:{selectServer:e.selectServer}})],1),s("div",{staticClass:"column form"},[s("transition",{attrs:{name:"fade",mode:"out-in",duration:{enter:150,leave:150}}},[Object.keys(e.selected).length?s("server-form",{attrs:{selected:e.selected}}):s("div",[s("div",{staticClass:"img",class:{choice:"admin"===e.role,"not-allowed":"user"===e.role}}),s("p",{staticClass:"has-text-centered"},[e._v(e._s(e.imgSubtitle))])])],1)],1)])},r=[],a=s("5530"),o=s("2f62"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("p",{staticClass:"title is-size-4"},[e._v("Список серверов")]),s("p",{staticClass:"subtitle"},[e._v(e._s(e.subtitleText))]),"admin"===e.role?s("a",{on:{click:function(t){return e.addServer()}}},[e._v("Добавить сервер")]):e._e(),s("div",{staticClass:"table-box"},[s("b-table",{attrs:{data:e.serverList,columns:e.columns,loading:e.isLoading,selected:e.selected,hoverable:"",striped:""},on:{"update:selected":function(t){e.selected=t}}},[s("template",{slot:"footer"},[s("div",{staticClass:"has-text-right"},[e._v("Серверов всего: "+e._s(e.serverList.length))])]),s("template",{slot:"empty"},[s("section",{staticClass:"section"},[s("div",{staticClass:"content has-text-grey has-text-centered"},[s("p",[s("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),s("p",[e._v("Список серверов пуст")])])])])],2)],1)])},c=[],l=(s("e6cf"),{name:"serverList",data(){return{isLoading:!0,selected:{},columns:[{field:"id",label:"ID",width:"60"},{field:"serverName",label:"Название сервера"},{field:"serverType",label:"Тип сервера"}]}},computed:Object(a["a"])({},Object(o["c"])("server",{serverList:e=>e.serverList}),{},Object(o["c"])("user",{role:e=>Object.keys(e.userInfo).length?e.userInfo.permissions[0]:"user"}),{subtitleText(){return"admin"===this.role?"Нажмите на любой сервер, чтобы начать редактирование и Esc, чтобы выйти из режима редактирования":"Пользователь может только просматривать список серверов"}}),methods:Object(a["a"])({},Object(o["b"])("server",["GET_SERVER_LIST"]),{async fetchServerList(){await this.GET_SERVER_LIST(),this.isLoading=!1},addListenerEsc(){document.addEventListener("keyup",e=>{"Escape"===e.code&&(this.selected={})})},addServer(){const e={id:0,serverName:"",serverType:"dedicated"};this.$emit("selectServer",e)}}),watch:{selected(){"admin"===this.role&&this.$emit("selectServer",this.selected)},serverList:{handler(){this.selected={}},deep:!0}},async mounted(){await this.fetchServerList(),this.addListenerEsc()}}),u=l,d=(s("870a"),s("5188"),s("2877")),f=Object(d["a"])(u,i,c,!1,null,"56dd8c6f",null),h=f.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"title is-size-4"},[e._v(e._s(e.selected.id?"Редактировать":"Новый сервер"))]),s("form",{staticClass:"box",on:{submit:function(t){return t.preventDefault(),e.saveChanges(t)}}},[e.selected.id?[s("p",[s("strong",[e._v("ID:")]),e._v(" "+e._s(e.selected.id))]),s("div",{staticClass:"divider"})]:e._e(),s("b-field",{attrs:{label:"Название сервера"}},[s("b-input",{attrs:{expanded:"",required:""},model:{value:e.local.serverName,callback:function(t){e.$set(e.local,"serverName","string"===typeof t?t.trim():t)},expression:"local.serverName"}})],1),s("b-field",{staticClass:"input-margin",attrs:{label:"Тип сервера"}},[s("b-select",{attrs:{expanded:""},model:{value:e.local.serverType,callback:function(t){e.$set(e.local,"serverType","string"===typeof t?t.trim():t)},expression:"local.serverType"}},e._l(["dedicated","vds","hosting"],(function(t){return s("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0)],1),s("div",{staticClass:"buttons is-pulled-right button-custom"},[e.selected.id?s("b-button",{ref:"button-delete",attrs:{type:"is-danger","icon-left":"delete",loading:e.isLoadingDelete},nativeOn:{click:function(t){return e.confirmDelete()}}},[e._v("Удалить")]):e._e(),s("b-button",{ref:"button-ed",attrs:{type:"is-success",loading:e.isLoadingChanges,disabled:e.isCheckStatusButton},nativeOn:{click:function(t){return e.saveChanges(e.selected.id?"edit":"add")}}},[e._v(e._s(e.selected.id?"Сохранить изменения":"Добавить сервер"))])],1)],2)])},v=[],m=(s("cca6"),{name:"serverForm",props:{selected:{type:Object,required:!0}},data(){return{isLoadingChanges:!1,isLoadingDelete:!1,local:{id:"",serverName:"",serverType:""}}},methods:Object(a["a"])({},Object(o["b"])("server",["EDIT_SERVER","ADD_SERVER","DELETE_SERVER"]),{async saveChanges(e){this.isCheckStatusButton||(this.isLoadingChanges=!0,"edit"===e?await this.EDIT_SERVER(this.local):await this.ADD_SERVER({serverName:this.local.serverName,serverType:this.local.serverType}),this.isLoadingChanges=!1)},confirmDelete(){this.$buefy.dialog.confirm({message:`Удалить сервер с названием <strong>${this.local.serverName}</strong>?`,cancelText:"Отмена",confirmText:"Удалить",type:"is-danger",onConfirm:async()=>{await this.deleteServer()}})},async deleteServer(){this.isLoadingDelete=!0,await this.DELETE_SERVER(this.local.id),this.isLoadingDelete=!1}}),computed:{isCheckStatusButton(){if(this.local.serverName.length<3)return!0;const e=Object.keys(this.local).some(e=>this.local[e]!==this.selected[e]);return!e}},watch:{selected:{handler(){this.local=Object.assign({},this.selected)},immediate:!0}}}),b=m,g=(s("79ee"),s("6172"),Object(d["a"])(b,p,v,!1,null,"4ad23e76",null)),E=g.exports,_={name:"Servers",components:{ServerList:h,ServerForm:E},data(){return{selected:{}}},computed:Object(a["a"])({},Object(o["c"])("user",{role:e=>Object.keys(e.userInfo).length?e.userInfo.permissions[0]:"user"}),{imgSubtitle(){return"admin"===this.role?"Сервер для редактирования не выбран":"Добавлять, удалять и редактировать сервера может только администратор"}}),methods:{selectServer(e){this.selected=e}}},T=_,y=(s("ffef"),Object(d["a"])(T,n,r,!1,null,"59195ffb",null));t["default"]=y.exports},c519:function(e,t,s){},cf25:function(e,t,s){"use strict";var n=s("fea6"),r=s.n(n);r.a},fea6:function(e,t,s){},ffef:function(e,t,s){"use strict";var n=s("7c66"),r=s.n(n);r.a}});
//# sourceMappingURL=app.1429f5f0.js.map