(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04e6":function(t,e,a){t.exports=a.p+"img/illustration.5d83cc5a.jpg"},1382:function(t,e,a){t.exports=a.p+"img/opiny_rounded.af8e6235.png"},"15ac":function(t,e,a){"use strict";a("5566")},"2be6":function(t,e,a){},"3aea":function(t,e,a){"use strict";a("dd42")},4714:function(t,e,a){"use strict";a("2be6")},"49f8":function(t,e,a){var n={"./en.json":"edd4","./es.json":"a306","./fr.json":"f693","./pt.json":"5d67","./ru.json":"7704","./tr.json":"ffeb"};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id="49f8"},5566:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=a("7496"),o=a("a523"),i=a("f6c4"),s=function(){var t=this,e=t._self._c;return e(r["a"],{staticStyle:{"background-color":"black",color:"white"},attrs:{"theme-dark":""}},[e(i["a"],[e(o["a"],{attrs:{fluid:"",color:""}},[e("router-view")],1)],1),e("Footer")],1)},l=[],c=a("b0af"),u=a("99d9"),d=a("553a"),p=a("2fa4"),g=function(){var t=this,e=t._self._c;return e(d["a"],{attrs:{app:"",inset:"",padless:"",absolute:"",width:"auto"}},[e(c["a"],{staticClass:"flex",attrs:{flat:"",tile:""}},[e(u["d"],{staticClass:"black"},[e(p["a"]),e("h2",{staticClass:"hover-effect"},[e("span",{attrs:{id:"emoji"},on:{click:function(e){return t.replaceEmoji()}}},[t._v("👀")])]),e(p["a"])],1)],1)],1)},m=[],f={name:"Footer",data:()=>({hand:!1}),methods:{replaceEmoji(){document.getElementById("emoji").innerHTML=this.hand?"👋":"👀",this.hand=!this.hand}}},h=f,b=(a("4714"),a("2877")),v=Object(b["a"])(h,g,m,!1,null,null,null),y=v.exports,w={name:"App",computed:{md(){return 10},offset_md(){return 0}},components:{Footer:y},data:()=>({})},k=w,x=Object(b["a"])(k,s,l,!1,null,null,null),C=x.exports,S=a("8c4f"),_=a("cc20"),j=a("132d"),O=a("71a3"),I=a("c671"),T=a("fe57"),E=a("aac8"),F=function(){var t=this,e=t._self._c;return e(o["a"],{staticClass:"root"},[t.isTabVertical?e(T["a"],{attrs:{vertical:"","background-color":"transparent",dark:"","slider-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(a){return e(O["a"],{key:a,attrs:{dark:""}},[t._v(" "+t._s(a)+" ")])})),1):e(T["a"],{attrs:{"background-color":"transparent",dark:"","slider-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(a){return e(O["a"],{key:a,attrs:{dark:""}},[t._v(" "+t._s(a)+" ")])})),1),e(E["a"],{staticStyle:{"background-color":"black"},attrs:{dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabs,(function(a){return e(I["a"],{key:a,attrs:{transition:t.itemTransition}},[e("div",{style:{height:t.titleGap+"px"}}),a.length>0&&"contact"===a[0].type?e("div",t._l(a,(function(a,n){return e("div",{key:n},[e(_["a"],{staticClass:"ma-2",attrs:{outlined:""},on:{click:function(e){return t.openUri(a.uri)}}},[e(j["a"],{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v(" "+t._s(a.label)+" ")],1)],1)})),0):e("div",[e("div",{staticClass:"projects-grid"},t._l(a,(function(t,a){return e("ProjectCard",{key:a,attrs:{title:t.title,subtitle:t.subtitle,description:t.description,urls:t.urls,actionLabel:t.actionLabel,imageUrl:t.imageUrl,backgroundImage:t.backgroundImage,gradientStartColor:t.gradientStartColor,gradientEndColor:t.gradientEndColor}})})),1)])])})),1)],1)},L=[],P=a("8212"),U=a("62ad"),$=a("0789"),A=a("adda"),G=function(){var t=this,e=t._self._c;return e("div",{ref:"expandedItem",staticClass:"root"},[e(c["a"],{staticClass:"custom-card",style:t.getStyle(),attrs:{ripple:!1,width:t.getMaxWidth(),dark:""},on:{click:function(e){return t.openDescription(t.description,t.url)}}},[e("div",{staticClass:"d-flex"},[e(P["a"],{staticClass:"ma-3",attrs:{size:t.getAvatarSize(),tile:""}},[e(A["a"],{staticClass:"avatar-image",attrs:{src:t.imageUrl}})],1),e(U["a"],{staticClass:"text-column"},[e(u["d"],{class:t.getTitleClass(),domProps:{textContent:t._s(t.title)}}),e(u["b"],{class:t.getSubtitleClass(),domProps:{textContent:t._s(t.subtitle)}})],1)],1),e($["a"],[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e("div",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.4)","backdrop-filter":"blur(4px)"}},[e(u["c"],{domProps:{textContent:t._s(t.description)}})],1),e(u["a"],t._l(t.urls,(function(a,n){return e(_["a"],{key:n,staticClass:"ma-2",attrs:{color:"white","text-color":"black"},on:{click:function(e){return e.stopPropagation(),t.openUri(a.url)}}},[e(j["a"],{attrs:{left:""}},[t._v("mdi-link")]),t._v(" "+t._s(a.actionLabel)+" ")],1)})),1)],1)])],1)],1)},M=[],B={components:{},name:"ProjectCard",props:{title:String,subtitle:String,description:String,urls:{url:String,actionLabel:String},actionLabel:String,imageUrl:String,backgroundImage:String,gradientStartColor:{type:String,default:"#ffffff"},gradientEndColor:{type:String,default:"#000000"}},data(){return{show:!1}},methods:{openDescription(t,e){void 0!==t?(this.show=!this.show,this.show&&setTimeout(()=>{this.$refs.expandedItem.scrollIntoView({block:"center",behavior:"smooth"})},125),setTimeout(()=>{document.activeElement.blur()},125)):this.openUri(e)},openUri(t){window.open(t,t),setTimeout(()=>{document.activeElement.blur()},125)},getGradientBackground(){return this.backgroundImage?null:`linear-gradient(to right, ${this.gradientStartColor}, ${this.gradientEndColor})`},getStyle(){return this.backgroundImage?{backgroundImage:`url(${this.backgroundImage})`}:{background:this.getGradientBackground()}},getAvatarSize(){switch(this.$vuetify.breakpoint.name){case"xs":return 96;case"sm":case"md":case"lg":case"xl":default:return 125}},getMaxWidth(){var t=window.innerWidth;if(t<350)return 260;switch(this.$vuetify.breakpoint.name){case"xs":return 300;case"sm":return 320;case"md":return 360;case"lg":case"xl":default:return 460}},getTitleClass(){switch(this.$vuetify.breakpoint.name){case"xs":return"text-h6 text-with-shadow";case"sm":return"text-h5 text-with-shadow";case"md":return"text-h4 text-with-shadow";case"lg":case"xl":default:return"text-h4 text-with-shadow"}},getSubtitleClass(){switch(this.$vuetify.breakpoint.name){case"xs":return"text-with-shadow";case"sm":case"md":case"lg":case"xl":default:return"text-with-shadow"}}}},N=B,J=(a("15ac"),Object(b["a"])(N,G,M,!1,null,"723112d1",null)),D=J.exports,H={components:{ProjectCard:D},name:"Home",computed:{offset_md(){switch(this.$vuetify.breakpoint.name){case"xs":return 0;case"sm":return 2;case"md":return 8;case"lg":return 16;case"xl":default:return 16}},titleGap(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return 32;case"md":return 36;case"lg":case"xl":default:return 42}},itemTransition(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return;case"md":case"lg":case"xl":default:return!1}},isTabVertical(){switch(this.$vuetify.breakpoint.name){case"xs":return!0;case"sm":case"md":case"lg":case"xl":default:return!1}}},data(){return{tabs:[[{title:"enigine",subtitle:"3D Game Engine",description:"This is my playground project for Game Engine design. It utilizes C++, OpenGL and Conan. It features a PBR pipeline with various extensions like transmission, volume and emissive. Fragments are lit using deferred shading. Parallax occlusion mapping renders displacements. Cascaded shadow mapping is employed for shadowing. SSAO calculates ambient occlusion. The post-process setup supports FXAA, tone mapping, HDR and bloom. The particle system supports geometry instancing and sprite atlas. The animation system supports blending. Bullet is integrated for physics, and OpenAL handles audio. The engine includes built-in systems such as interactive ragdoll, raycast vehicle and terrain with geometry clipmaps. The project goal is to release a game using this engine.",urls:[{url:"https://github.com/furkansarihan/enigine",actionLabel:"GitHub"}],imageUrl:a("a55f"),backgroundImage:a("a55f"),gradientStartColor:"#000000",gradientEndColor:"#FFCC00"},{title:"Monotony",subtitle:"Anonymous Chat",description:"Monotony is a mobile app focused on connecting people anonymously. It started as a hobby messaging app project with Flutter. Then, the project evolved into a long-term challenge with a lot of experience and success. I gained confidence with creating and maintaining a large-scale codebase and transforming it into a living software system with many users. The app reached over 500.000 downloads and had more than 10.000 daily active users. The app is self-sustaining, and I am not currently working on it.",urls:[{url:"https://play.google.com/store/apps/details?id=com.appmonotony.monotony",actionLabel:"Google Play Store"}],imageUrl:a("e94d"),gradientStartColor:"#000000",gradientEndColor:"#863BFF"},{title:"Opiny",subtitle:"Comments for Spotify",description:"Opiny is a product of an idea, which is creating a real-time content-agnostic review platform. While it’s not reached its potential or final form, I love this project as a beautiful product.",urls:[{url:"https://opiny.net",actionLabel:"opiny.net"}],imageUrl:a("1382"),gradientStartColor:"#000000",gradientEndColor:"#FF3B77"}],[{title:"Sketch",description:"🖊️",imageUrl:a("c900"),backgroundImage:a("c900"),urls:[{url:"https://instagram.com/fusarihan",actionLabel:"Instagram"}]},{title:"Illustration",description:"💿",imageUrl:a("04e6"),backgroundImage:a("04e6"),urls:[{url:"https://instagram.com/fusarihan",actionLabel:"Instagram"}]},{title:"Music",description:"🎹",imageUrl:a("c14b"),backgroundImage:a("c14b"),urls:[{url:"https://open.spotify.com/artist/7BjEXGwhHsIV2RYjho4lFc",actionLabel:"Spotify"},{url:"https://soundcloud.com/fusarihan",actionLabel:"SoundCloud"}]},{title:"Video",description:"🖱️",imageUrl:a("faed"),backgroundImage:a("faed"),urls:[{url:"https://instagram.com/fusarihan",actionLabel:"Instagram"}]}],[{type:"contact",icon:"mdi-email",label:"fusarihan@gmail.com",uri:"mailto:fusarihan@gmail.com?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email"},{type:"contact",icon:"mdi-github",label:"GitHub",uri:"https://www.github.com/furkansarihan/"},{type:"contact",icon:"mdi-linkedin",label:"LinkedIn",uri:"https://www.linkedin.com/in/furkansarihan/"}]],tab:null,items:["Projects","Furkan Sarıhan","Contact"]}},methods:{openUri(t){window.open(t,t)}}},z=H,V=(a("3aea"),Object(b["a"])(z,F,L,!1,null,"27cc22e0",null)),W=V.exports,R=a("a925"),X=a("2f62");function q(t={}){const e={languageCodeOnly:!1},a={...e,...t},n=void 0===navigator.languages?[navigator.language]:navigator.languages;if(n)return n.map(t=>{const e=t.trim();return a.languageCodeOnly?e.split(/-|_/)[0]:e})}n["a"].use(X["a"]);const Y=["en","tr","ar","pt","es","fr","ru"],Z=q({languageCodeOnly:!0});var K;if(Z.length>0){const t=Z[0];K=Y.includes(t)?t:"en"}else K="en";console.log("init lang code: ",K),localStorage.langCode&&(K=localStorage.langCode),console.log("local storage lang code: ",localStorage.langCode);var Q=new X["a"].Store({state:{tab:null,drawerState:!1,langCode:K},mutations:{toggleDrawerState(t,e){t.drawerState=e},changeLanguage(t,e){localStorage.langCode=e,t.langCode=e}},getters:{drawerState:t=>t.drawerState,langCode:t=>t.langCode}});function tt(){const t=a("49f8"),e={};return t.keys().forEach(a=>{const n=a.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){const r=n[1];e[r]=t(a)}}),e}n["a"].use(R["a"]);var et=new R["a"]({locale:Q.state.langCode||"en",fallbackLocale:Q.state.langCode||"en",messages:tt()});n["a"].use(S["a"]);const at=new S["a"]({mode:"history",routes:[{path:"/",name:"Home",component:W,meta:{title:et.t("appbar-title")}},{path:"*",component:W}],scrollBehavior(){return{x:0,y:0}}});at.beforeEach((t,e,a)=>{const n=t.matched.slice().reverse().find(t=>t.meta&&t.meta.title),r=t.matched.slice().reverse().find(t=>t.meta&&t.meta.metaTags),o=e.matched.slice().reverse().find(t=>t.meta&&t.meta.metaTags);if(n?document.title=n.meta.title:o&&(document.title=o.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(t=>t.parentNode.removeChild(t)),!r)return a();r.meta.metaTags.map(t=>{const e=document.createElement("meta");return Object.keys(t).forEach(a=>{e.setAttribute(a,t[a])}),e.setAttribute("data-vue-router-controlled",""),e}).forEach(t=>document.head.appendChild(t)),a()});var nt=at,rt=a("f309");n["a"].use(rt["a"]);var ot=new rt["a"]({});n["a"].config.productionTip=!1,new n["a"]({store:Q,vuetify:ot,router:nt,computed:{langCode:{get(){return this.$store.getters.langCode},set(t){return this.$store.commit("changeLanguage",t)}}},i18n:et,render:t=>t(C)}).$mount("#app")},"5d67":function(t){t.exports=JSON.parse('{"appbar-title":"Furkan Sarıhan"}')},7704:function(t){t.exports=JSON.parse('{"appbar-title":"Furkan Sarıhan"}')},a306:function(t){t.exports=JSON.parse('{"appbar-title":"Furkan Sarıhan"}')},a55f:function(t,e,a){t.exports=a.p+"img/enigine_1.a4a39e02.jpg"},c14b:function(t,e,a){t.exports=a.p+"img/warp_cover.d627f0ac.jpg"},c900:function(t,e,a){t.exports=a.p+"img/sketch.94495247.jpg"},dd42:function(t,e,a){},e94d:function(t,e,a){t.exports=a.p+"img/monotony_rounded.c2c2728b.png"},edd4:function(t){t.exports=JSON.parse('{"appbar-title":"Furkan Sarıhan"}')},f693:function(t){t.exports=JSON.parse('{"appbar-title":"Furkan Sarıhan"}')},faed:function(t,e,a){t.exports=a.p+"img/video.23562c43.jpg"},ffeb:function(t){t.exports=JSON.parse('{"appbar-title":"Furkan Sarıhan"}')}});
//# sourceMappingURL=app.cb340803.js.map