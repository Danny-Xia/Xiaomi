(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df0706ca"],{"0058":function(t,i,s){},"0b4c":function(t,i,s){"use strict";var c=s("3ae0"),e=s.n(c);e.a},"3ae0":function(t,i,s){},"3ca3":function(t,i,s){"use strict";var c=s("6547").charAt,e=s("69f3"),n=s("7dd0"),a="String Iterator",o=e.set,r=e.getterFor(a);n(String,"String",(function(t){o(this,{type:a,string:String(t),index:0})}),(function(){var t,i=r(this),s=i.string,e=i.index;return e>=s.length?{value:void 0,done:!0}:(t=c(s,e),i.index+=t.length,{value:t,done:!1})}))},"517e":function(t,i,s){"use strict";var c=s("fb56"),e=s.n(c);e.a},6547:function(t,i,s){var c=s("a691"),e=s("1d80"),n=function(t){return function(i,s){var n,a,o=String(e(i)),r=c(s),p=o.length;return r<0||r>=p?t?"":void 0:(n=o.charCodeAt(r),n<55296||n>56319||r+1===p||(a=o.charCodeAt(r+1))<56320||a>57343?t?o.charAt(r):n:t?o.slice(r,r+2):a-56320+(n-55296<<10)+65536)}};t.exports={codeAt:n(!1),charAt:n(!0)}},"6d54":function(t,i,s){"use strict";var c=s("aa96"),e=s.n(c);e.a},aa3d:function(t,i,s){"use strict";s.r(i);var c=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"shop"},[t.$store.state.isLogin?t._e():s("p",{staticClass:"is-login"},[t._v(" 为方便您购买，请提前登录 "),s("router-link",{staticClass:"to-login",attrs:{tag:"span",to:"/login"}},[t._v("立即登录")]),s("span",{staticClass:"close el-icon-close"})],1),s("div",{staticClass:"shop-content"},[s("div",{staticClass:"commodity"},[s("div",{staticClass:"left-swiper"},[s("el-carousel",{attrs:{trigger:"click",height:"565px"}},t._l(t.$store.state.shopSwiperList,(function(t){return s("el-carousel-item",{key:t.id},[s("img",{attrs:{src:t.imgSrc}})])})),1)],1),s("div",{staticClass:"right-march"},[s("h2",[t._v(t._s(t.title))]),s("p",{staticClass:"des",domProps:{innerHTML:t._s(t.des)}}),s("p",{staticClass:"color-red xiaomi"},[t._v("小米自营")]),s("p",{staticClass:"price color-red"},[t._v(t._s(t.$store.state.shopCurPrice)+" 元")]),s("div",{staticClass:"position"},[t._m(0),s("p",{staticClass:"color-red in-stock"},[t._v(t._s(t.inStock))])]),s("choose-square",{attrs:{title:"选择版本",contents:t.edition}}),s("choose-square",{attrs:{title:"选择颜色",contents:t.colors}}),s("choose-service",{attrs:{"data-source":t.$store.state.accident}}),s("choose-service",{attrs:{"data-source":t.$store.state.guarantee}}),s("choose-service",{attrs:{"data-source":t.$store.state.cloud}}),s("div",{staticClass:"settlement"},[s("p",{staticClass:"phone-info"},[s("span",[t._v(" "+t._s(t.$store.state.phoneModel)+" "+t._s(t.$store.state.phoneROM)+" "+t._s(t.$store.state.phoneColor)+" ")]),s("span",{staticClass:"price"},[t._v(t._s(t.$store.state.shopCurPrice)+" 元")])]),s("ul",{staticClass:"other-service"},t._l(t.$store.getters.settlementList,(function(i){return s("li",{key:i.title},[s("span",{directives:[{name:"show",rawName:"v-show",value:i.title,expression:"item.title"}]},[t._v(t._s(i.title))]),s("span",{directives:[{name:"show",rawName:"v-show",value:i.price,expression:"item.price"}],staticClass:"price"},[t._v(t._s(i.price)+" 元")])])})),0),s("p",{staticClass:"totalPrice color-red"},[t._v("总计："+t._s(t.$store.getters.totalPrice)+" 元")])]),t._m(1),s("div",{staticClass:"icons"},[s("ul",t._l(t.iconsList,(function(i){return s("li",{key:i.id},[s("i",{class:i.icon}),s("span",[t._v(t._s(i.title))])])})),0)])],1)])]),t._m(2)])},e=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("p",[s("i",{staticClass:"el-icon-location-information"}),s("span",{staticClass:"city"},[s("span",[t._v("北京")]),s("span",[t._v("北京市")]),s("span",[t._v("海淀区")]),s("span",[t._v("清河街区")])]),s("span",{staticClass:"color-red edit"},[t._v("修改")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"settlement-btns"},[s("button",{staticClass:"add-gwc"},[t._v("加入购物车")]),s("button",{staticClass:"like"},[s("i",{staticClass:"iconfont iconxin"}),t._v(" 喜欢 ")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"price-explain"},[s("div",{staticClass:"price-explain-content"},[s("h3",[t._v("价格说明")]),s("img",{attrs:{src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a482afa34053b1b32ece1023475af7fb.jpeg",alt:""}})])])}],n=(s("c975"),function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"choose-square"},[s("div",{staticClass:"title"},[t._v(t._s(t.title))]),s("ul",{staticClass:"content"},t._l(t.contents,(function(i,c){return s("li",{key:i.id,class:{active:c===t.curIndex},on:{click:function(s){return t.handleClick(c,i.content)}}},[t._v(" "+t._s(i.content)+" ")])})),0)])}),a=[],o=s("5530"),r=s("2f62"),p={props:["title","contents"],data:function(){return{curIndex:0,blue:[{id:"blue-1",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817543.6538379.jpg"},{id:"blue-2",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817543.64522755.jpg"},{id:"blue-3",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817543.65858985.jpg"},{id:"blue-4",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817543.6531945.jpg"},{id:"blue-5",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817543.6483614.jpg"}],qing:[{id:"qing-1",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817487.06835456.jpg"},{id:"qing-2",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817487.06316490.jpg"},{id:"qing-3",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817487.06272588.jpg"},{id:"qing-4",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817487.06835456.jpg"},{id:"qing-5",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817487.06381642.jpg"}],block:[{id:"block-1",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817381.81497487.jpg"},{id:"block-2",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817423.33677202.jpg"},{id:"block-3",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817414.30541430.jpg"},{id:"block-4",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817381.87186612.jpg"},{id:"block-5",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817381.81631646.jpg"}],pink:[{id:"pink-1",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.03891296.jpg"},{id:"pink-2",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.03417574.jpg"},{id:"pink-3",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.0391459.jpg"},{id:"pink-4",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.02758535.jpg"},{id:"pink-5",imgSrc:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.03663677.jpg"}]}},methods:Object(o["a"])(Object(o["a"])({},Object(r["c"])(["changeShopCurPrice","changePhoneROM","changePhoneColor","changeShopSwiperList"])),{},{handleClick:function(t,i){if(this.curIndex=t,"选择版本"===this.title)this.changeShopCurPrice(this.contents[t].price),this.changePhoneROM(this.contents[t].content);else if("选择颜色"===this.title){var s=this.contents[t].content;this.changePhoneColor(s),"莲藕粉"===s?this.changeShopSwiperList(this.pink):"霓虹蓝"===s?this.changeShopSwiperList(this.blue):"墨黛青"===s?this.changeShopSwiperList(this.qing):"碳素黑"===s&&this.changeShopSwiperList(this.block)}}})},l=p,d=(s("0b4c"),s("2877")),m=Object(d["a"])(l,n,a,!1,null,"dd1522cc",null),h=m.exports,u=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"choose-service"},[s("div",{staticClass:"title"},[s("span",{staticClass:"h-title"},[t._v(t._s(t.dataSource.title))]),s("span",{staticClass:"subtitle"},[t._v(" "+t._s(t.dataSource.subtitle)+" "),s("i",{staticClass:"el-icon-arrow-right"})])]),s("div",{staticClass:"content"},t._l(t.dataSource.content,(function(i){return s("service-square",{key:i.contentTitle,attrs:{"data-source":t.dataSource.name,"data-self-source":i.contentTitle}})})),1)])},g=[],f=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"service-square"},[s("div",{staticClass:"left-inp"},[s("span",{staticClass:"inp",class:{"inp-active":t.tempSource.checked},on:{click:t.handleInp}},[s("i",{staticClass:"el-icon-check",class:{"inp-active":t.tempSource.checked}})])]),s("div",{staticClass:"right-content"},[s("div",{staticClass:"icon-bao"},[s("img",{attrs:{src:t.tempSource.icon,alt:""}})]),s("div",{staticClass:"right-main"},[s("h3",[t._v(" "+t._s(t.tempSource.contentTitle)+" "),s("span",{staticClass:"h-price"},[t._v(t._s(t.tempSource.price)+" 元")])]),s("p",{staticClass:"des"},[t._v(t._s(t.tempSource.des))]),s("p",{staticClass:"alread-box"},[s("span",{staticClass:"alread"},[s("span",{staticClass:"inp",class:{"inp-active":t.tempSource.checked},on:{click:t.handleInp}},[s("i",{staticClass:"el-icon-check",class:{"inp-active":t.tempSource.checked}})]),t._v(" 我已阅读 "),s("span",{staticClass:"color-red"},[t._v("服务条款|")]),s("span",{staticClass:"color-red"},[t._v("常见问题")])]),s("span",{staticClass:"price"},[t._v(t._s(t.tempSource.price)+" 元")])])])])])},v=[];s("4de4"),s("4160"),s("159b"),s("a4d3"),s("e01a"),s("d28b"),s("d3b7"),s("3ca3"),s("ddb0");function b(t){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}var _={data:function(){return{}},computed:{tempSource:function(){var t=this.dataSource,i=this.dataSelfSource,s=this.$store.state[t].content,c=s.filter((function(t){return t.contentTitle===i}));return c[0]}},created:function(){},props:["data-source","data-self-source"],methods:Object(o["a"])(Object(o["a"])({},Object(r["c"])(["changeCloud","changeAccident","changeGuarantee"])),{},{handleInp:function(){var t=this,i=this.dataSource;this.dataSelfSource;function s(t){var i=Array.isArray(t)?[]:{};if(t&&"object"===b(t))for(var c in t)t.hasOwnProperty(c)&&(i[c]=t&&"object"===b(t[c])?s(t[c]):t[c]);return i}var c=s(this.$store.state[i]);c.content.forEach((function(i){i.contentTitle===t.tempSource.contentTitle?i.checked=!i.checked:i.checked=!1})),"accident"===i?this.changeAccident(c):"guarantee"===i?this.changeGuarantee(c):"cloud"===i&&this.changeCloud(c)}})},S=_,C=(s("6d54"),Object(d["a"])(S,f,v,!1,null,"8a10d81a",null)),j=C.exports,k={data:function(){return{}},props:["data-source"],components:{ServiceSquare:j}},y=k,$=(s("517e"),Object(d["a"])(y,u,g,!1,null,"6d64cad0",null)),w=$.exports,x={data:function(){return{title:"",inStock:"有现货",des:'<span class="color-red">「4GB+64GB到手价仅799元」</span> 5020mAh超长续航+18W快充 / G80高性能处理器 / 128GB大内存 / 全场景 AI 四摄 / 1080P 全高清大屏 / 6.53"水滴大屏 / 大功率扬声器 / 指纹识别+人脸解锁 / 红外遥控',edition:[{id:"edition-1",content:"4GB+64GB",price:799},{id:"edition-2",content:"4GB+128GB",price:999},{id:"edition-3",content:"6GB+128GB",price:1199}],colors:[{id:"colors-1",content:"莲藕粉"},{id:"colors-2",content:"霓虹蓝"},{id:"colors-3",content:"墨黛青"},{id:"colors-4",content:"碳素黑"}],iconsList:[{id:"icons1",icon:"el-icon-circle-check",title:"小米自营"},{id:"icons2",icon:"el-icon-circle-check",title:"小米发货"},{id:"icons3",icon:"el-icon-circle-check",title:"7天无理由退货"},{id:"icons4",icon:"el-icon-circle-check",title:"运费说明"},{id:"icons5",icon:"el-icon-circle-check",title:"企业信息"},{id:"icons6",icon:"el-icon-circle-check",title:"7天价格保护"}]}},components:{ChooseSquare:h,ChooseService:w},created:function(){var t=document.cookie.indexOf("login=true")>-1;this.$store.commit("changeIsLogin",t),this.title=this.$route.params.id}},O=x,q=(s("dc30"),Object(d["a"])(O,c,e,!1,null,null,null));i["default"]=q.exports},aa96:function(t,i,s){},d28b:function(t,i,s){var c=s("746f");c("iterator")},dc30:function(t,i,s){"use strict";var c=s("0058"),e=s.n(c);e.a},ddb0:function(t,i,s){var c=s("da84"),e=s("fdbc"),n=s("e260"),a=s("9112"),o=s("b622"),r=o("iterator"),p=o("toStringTag"),l=n.values;for(var d in e){var m=c[d],h=m&&m.prototype;if(h){if(h[r]!==l)try{a(h,r,l)}catch(g){h[r]=l}if(h[p]||a(h,p,d),e[d])for(var u in n)if(h[u]!==n[u])try{a(h,u,n[u])}catch(g){h[u]=n[u]}}}},e01a:function(t,i,s){"use strict";var c=s("23e7"),e=s("83ab"),n=s("da84"),a=s("5135"),o=s("861d"),r=s("9bf2").f,p=s("e893"),l=n.Symbol;if(e&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),i=this instanceof m?new l(t):void 0===t?l():l(t);return""===t&&(d[i]=!0),i};p(m,l);var h=m.prototype=l.prototype;h.constructor=m;var u=h.toString,g="Symbol(test)"==String(l("test")),f=/^Symbol\((.*)\)[^)]+$/;r(h,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,i=u.call(t);if(a(d,t))return"";var s=g?i.slice(7,-1):i.replace(f,"$1");return""===s?void 0:s}}),c({global:!0,forced:!0},{Symbol:m})}},fb56:function(t,i,s){}}]);
//# sourceMappingURL=chunk-df0706ca.482549e3.js.map