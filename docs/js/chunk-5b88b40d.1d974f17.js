(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b88b40d"],{"06c1":function(t,e,i){"use strict";var n=i("906d"),a=i.n(n);a.a},1508:function(t,e,i){"use strict";var n=i("a16a"),a=i.n(n);a.a},1760:function(t,e,i){"use strict";var n=i("d392"),a=i.n(n);a.a},3708:function(t,e,i){},"43bc":function(t,e,i){"use strict";var n=i("3708"),a=i.n(n);a.a},"87cc":function(t,e,i){},"88d0":function(t,e,i){"use strict";var n=i("87cc"),a=i.n(n);a.a},"906d":function(t,e,i){},"96cf":function(t,e,i){var n=function(t){"use strict";var e,i=Object.prototype,n=i.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function o(t,e,i,n){var a=e&&e.prototype instanceof p?e:p,r=Object.create(a.prototype),s=new S(n||[]);return r._invoke=j(t,i,s),r}function l(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(n){return{type:"throw",arg:n}}}t.wrap=o;var d="suspendedStart",u="suspendedYield",h="executing",m="completed",f={};function p(){}function v(){}function g(){}var b={};b[r]=function(){return this};var w=Object.getPrototypeOf,y=w&&w(w(k([])));y&&y!==i&&n.call(y,r)&&(b=y);var _=g.prototype=p.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function A(t,e){function i(a,r,s,c){var o=l(t[a],t,r);if("throw"!==o.type){var d=o.arg,u=d.value;return u&&"object"===typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){i("next",t,s,c)}),(function(t){i("throw",t,s,c)})):e.resolve(u).then((function(t){d.value=t,s(d)}),(function(t){return i("throw",t,s,c)}))}c(o.arg)}var a;function r(t,n){function r(){return new e((function(e,a){i(t,n,e,a)}))}return a=a?a.then(r,r):r()}this._invoke=r}function j(t,e,i){var n=d;return function(a,r){if(n===h)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw r;return E()}i.method=a,i.arg=r;while(1){var s=i.delegate;if(s){var c=x(s,i);if(c){if(c===f)continue;return c}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===d)throw n=m,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=h;var o=l(t,e,i);if("normal"===o.type){if(n=i.done?m:u,o.arg===f)continue;return{value:o.arg,done:i.done}}"throw"===o.type&&(n=m,i.method="throw",i.arg=o.arg)}}}function x(t,i){var n=t.iterator[i.method];if(n===e){if(i.delegate=null,"throw"===i.method){if(t.iterator["return"]&&(i.method="return",i.arg=e,x(t,i),"throw"===i.method))return f;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=l(n,t.iterator,i.arg);if("throw"===a.type)return i.method="throw",i.arg=a.arg,i.delegate=null,f;var r=a.arg;return r?r.done?(i[t.resultName]=r.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,f):r:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,f)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function k(t){if(t){var i=t[r];if(i)return i.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,s=function i(){while(++a<t.length)if(n.call(t,a))return i.value=t[a],i.done=!1,i;return i.value=e,i.done=!0,i};return s.next=s}}return{next:E}}function E(){return{value:e,done:!0}}return v.prototype=_.constructor=g,g.constructor=v,g[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(A.prototype),A.prototype[s]=function(){return this},t.AsyncIterator=A,t.async=function(e,i,n,a,r){void 0===r&&(r=Promise);var s=new A(o(e,i,n,a),r);return t.isGeneratorFunction(i)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},L(_),_[c]="Generator",_[r]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function a(n,a){return c.type="throw",c.arg=t,i.next=n,a&&(i.method="next",i.arg=e),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],c=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var o=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(o&&l){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(o){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),I(i),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var a=n.arg;I(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:k(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},a15b:function(t,e,i){"use strict";var n=i("23e7"),a=i("44ad"),r=i("fc6a"),s=i("a640"),c=[].join,o=a!=Object,l=s("join",",");n({target:"Array",proto:!0,forced:o||!l},{join:function(t){return c.call(r(this),void 0===t?",":t)}})},a16a:function(t,e,i){},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"home-top"},[i("m-nav",{attrs:{isShowAll:!1}}),i("div",{staticClass:"main"},[i("left-menu",{attrs:{"cur-page":"home"}}),i("swiper",{attrs:{dataList:t.sWiperList}})],1),i("div",{staticClass:"channel-box"},[i("div",{staticClass:"channel-box-content"},[i("ul",{staticClass:"channel-list"},t._l(t.channelList,(function(e){return i("li",{key:e.id},[i("img",{attrs:{src:e.imgSrc,alt:""}}),i("p",[t._v(t._s(e.title))])])})),0),i("ul",{staticClass:"promo-list"},t._l(t.promoList,(function(t){return i("li",{key:t.id},[i("img",{attrs:{src:t.imgSrc,alt:""}})])})),0)])])],1),i("div",{staticClass:"home-bottom"},[i("div",{staticClass:"home-bottom-content"},[i("shan-gou"),i("advert",{attrs:{"img-src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17ae6ffbdd4156119e41dec7d85ebced.jpeg?thumb=1&w=1533&h=150&f=webp&q=90"}}),i("phone"),i("advert",{attrs:{"img-src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3b86ede4dd31d7c126d56fbdde4f855.jpg?thumb=1&w=1533&h=150&f=webp&q=90"}}),i("other-pub",{attrs:{"data-list":"家电"}}),i("advert",{attrs:{"img-src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=1533&h=150&f=webp&q=90"}}),i("other-pub",{attrs:{"data-list":"智能"}}),i("advert",{attrs:{"img-src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ddec858a9371b4d7833181941520bf8b.jpg?thumb=1&w=1533&h=150&f=webp&q=90"}}),i("other-pub",{attrs:{"data-list":"搭配"}}),i("advert",{attrs:{"img-src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9880db34d227b6c1df5b45cb7df4f465.jpg?thumb=1&w=1533&h=150&f=webp&q=90"}}),i("other-pub",{attrs:{"data-list":"配件"}}),i("advert",{attrs:{"img-src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ddec858a9371b4d7833181941520bf8b.jpg?thumb=1&w=1533&h=150&f=webp&q=90"}}),i("other-pub",{attrs:{"data-list":"周边"}}),t._v("> "),i("advert",{attrs:{"img-src":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1533&h=150&f=webp&q=90"}}),i("m-video-sub"),i("tools-bar")],1)])])},a=[],r=(i("c975"),i("33af")),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper",on:{mouseenter:t.enterSwiper,mouseleave:t.leaveSwiper}},[i("ul",t._l(t.dataList,(function(e,n){return i("li",{key:e.id,class:{active:t.imgIndex===n}},[i("img",{attrs:{src:e.imgSrc}})])})),0),i("div",{staticClass:"btns"},[i("div",{staticClass:"btn el-icon-arrow-left",on:{click:t.prev}}),i("div",{staticClass:"btn el-icon-arrow-right",on:{click:t.next}})]),i("div",{staticClass:"sliders"},t._l(t.dataList.length,(function(e,n){return i("span",{key:e,class:{active:n===t.imgIndex},on:{click:function(e){return t.handleSlider(n)}}})})),0)])},c=[],o={props:["dataList"],data:function(){return{imgIndex:0,changeImgTimer:null}},created:function(){this.autoPlay()},methods:{prev:function(){0===this.imgIndex?this.imgIndex=this.dataList.length-1:this.imgIndex-=1},next:function(){this.imgIndex===this.dataList.length-1?this.imgIndex=0:this.imgIndex+=1},enterSwiper:function(){clearInterval(this.changeImgTimer)},leaveSwiper:function(){this.autoPlay()},autoPlay:function(){var t=this;this.changeImgTimer=setInterval((function(){t.imgIndex===t.dataList.length-1?t.imgIndex=0:t.imgIndex++}),5e3)},handleSlider:function(t){this.imgIndex=t}}},l=o,d=(i("1508"),i("2877")),u=Object(d["a"])(l,s,c,!1,null,"d9b5a1c8",null),h=u.exports,m=i("110b"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shan-gou"},[i("div",{staticClass:"shan-gou-header"},[i("div",{staticClass:"title"},[t._v("小米闪购")]),i("div",{staticClass:"btns"},[i("span",{class:{"el-icon-arrow-left":!0,disabled:t.prevDisabled},on:{click:t.prev}}),i("span",{class:{"el-icon-arrow-right":!0,disabled:t.nextDisabled},on:{click:t.next}})])]),i("div",{staticClass:"shan-gou-content",on:{mouseenter:t.enterShangou,mouseleave:t.leaveShangou}},[i("div",{staticClass:"seckill"},[i("p",{staticClass:"sessions"},[t._v(t._s(t.sessions+":00 场"))]),t._m(0),i("p",{staticClass:"surplus"},[t._v("距离结束还有")]),i("p",{staticClass:"time-box"},[i("span",{staticClass:"time"},[t._v(t._s("0"+t.overTimeHours))]),i("span",{staticClass:"time-box-other"},[t._v(":")]),i("span",{staticClass:"time"},[t._v(t._s(t.overTimeMinute))]),i("span",{staticClass:"time-box-other"},[t._v(":")]),i("span",{staticClass:"time"},[t._v(t._s(t.overTimeSecond))])])]),i("div",{staticClass:"shan-swiper"},[i("ul",{style:"left:"+t.oUlLeft+"px",attrs:{id:"shan-swiper-content"},on:{transitionend:t.handleLock}},t._l(t.shangouList,(function(e,n){return i("li",{key:e.id,class:"shan-swiper-item-"+n,attrs:{"data-index":n}},[i("div",[i("img",{attrs:{src:e.imgSrc,alt:""}})]),i("h3",[t._v(t._s(e.title))]),i("p",{staticClass:"des"},[t._v(t._s(e.des))]),i("p",{staticClass:"price"},[i("span",{staticClass:"nowPrice"},[t._v(t._s(e.nowPrice))]),i("span",{staticClass:"oldPrice"},[i("del",[t._v(t._s(e.oldPrice))])])])])})),0)])])])},p=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"shandian"},[i("img",{attrs:{src:"data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ%0AbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp%0Abj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6%0AeD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1%0AMTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo%0AdHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw%0AdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv%0AIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS%0AZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD%0AcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j%0AZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1%0AbWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N%0AOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy%0AQzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF%0AOEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht%0AcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE%0AcHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf%0AS48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY%0AjRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN%0AJbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL%0AijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7%0AKnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L%0AbN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc%0AxDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V%0AkBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU%0AKc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E%0AcnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ%0A7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII=",alt:""}})])}],v=(i("a15b"),i("fb6a"),{data:function(){return{sessions:"20:00",overTimeHours:1,overTimeMinute:59,overTimeSecond:59,shangouList:[],nowPage:1,totalPage:1,remainder:0,autoMoveTimer:null,prevDisabled:!0,nextDisabled:!1,listNum:0,oUlLeft:0,liWidth:234,lock:!1}},created:function(){var t=this;this.getTime(),this.$api.getShangouList().then((function(e){if("OK"===e.statusText){var i=e.data.shangou;t.listNum=i.length,t.shangouList=i,t.remainder=i.length%4,t.totalPage=Math.ceil(i.length/4)}})),this.autoMove()},methods:{getTime:function(){var t=this,e=(new Date).getTime(),i=e+72e5;function n(t,e){return(Array(e).join(0)+t).slice(-e)}this.sessions=new Date(i).getHours(),setInterval((function(){t.overTimeSecond--,t.overTimeSecond<10&&(t.overTimeSecond=n(t.overTimeSecond,2)),t.overTimeMinute<10&&(t.overTimeMinute=n(t.overTimeMinute,2)),"00"===t.overTimeSecond&&(t.overTimeSecond=59,t.overTimeMinute-=1),0===t.overTimeMinute&&(t.overTimeMinute=59,t.overTimeHours-=1),0===t.overTimeHours&&0===t.overTimeMinute&&0===t.overTimeSecond&&(t.overTimeHours=1,t.overTimeMinute=59,t.overTimeSecond=59,t.getTime())}),1e3)},handleLock:function(){4!==this.nowPage&&(this.lock=!1)},prev:function(){this.prevDisabled||this.move("left")},next:function(){this.nextDisabled||this.move("right")},move:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right";if(!this.lock){var e=document.getElementById("shan-swiper-content");if(e){this.lock=!0,"left"===t?this.nowPage-=1:this.nowPage+=1;var i=0,n=e.offsetLeft;i=this.nowPage===this.totalPage||"left"===t&&this.nowPage===this.totalPage-1?this.liWidth*this.remainder+14*this.remainder:56+4*this.liWidth,this.nowPage===this.totalPage?this.nextDisabled=!0:1===this.nowPage?this.prevDisabled=!0:(this.nextDisabled=!1,this.prevDisabled=!1),this.oUlLeft="left"===t?n+i:n-i}}},autoMove:function(){var t=this;this.autoMoveTimer=setInterval((function(){t.nowPage===t.totalPage?(t.nowPage=1,t.oUlLeft=0,t.prevDisabled=!0,t.nextDisabled=!1):t.move()}),5e3)},enterShangou:function(){clearInterval(this.autoMoveTimer)},leaveShangou:function(){this.autoMove()}}}),g=v,b=(i("06c1"),Object(d["a"])(g,f,p,!1,null,"6910695d",null)),w=b.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"phone"},[t._m(0),i("div",{staticClass:"phone-content"},[t._m(1),i("div",{staticClass:"content-right"},[i("ul",t._l(t.dataList,(function(e){return i("li",{key:e.id},[i("img",{attrs:{src:e.imgSrc,alt:""}}),i("h3",[t._v(t._s(e.name))]),i("p",{staticClass:"des"},[t._v(t._s(e.des))]),i("p",{staticClass:"price"},[i("span",{staticClass:"now-price"},[t._v(t._s(e.nowPrice))]),i("del",{staticClass:"old-price"},[t._v(t._s(e.oldPrice&&e.oldPrice))])])])})),0)])])])},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"phone-header"},[i("div",{staticClass:"phone-title"},[t._v("手机")]),i("div",{staticClass:"check-all"},[t._v(" 查看全部 "),i("span",[i("i",{staticClass:"el-icon-arrow-right"})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-left"},[i("img",{attrs:{src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=293&h=768&f=webp&q=90",alt:""}})])}],L={data:function(){return{dataList:[]}},created:function(){var t=this;this.$api.getPhoneList().then((function(e){"OK"===e.statusText&&(t.dataList=e.data.phoneList)}))}},A=L,j=(i("1760"),Object(d["a"])(A,y,_,!1,null,"264b87b2",null)),x=j.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"other-pub"},[i("div",{staticClass:"other-pub-header"},[i("div",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{staticClass:"nav"},[i("ul",t._l(t.navList,(function(e){return i("li",{key:e,class:{active:e===t.showItem},on:{mouseenter:function(i){return t.changeNav(e)}}},[t._v(t._s(e))])})),0)])]),i("div",{staticClass:"other-pub-content"},[i("ul",{staticClass:"left-ul"},[t._l(t.leftUL,(function(t){return i("li",{key:t.id},[i("img",{attrs:{src:t.imgSrc}})])})),t._m(0)],2),i("ul",{staticClass:"content-list"},[t._l(t.contentList[t.showItem],(function(e){return i("li",{key:e.id,class:{"space-item":""===e.id}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.imgSrc}})]),i("div",{staticClass:"info"},[i("h3",[t._v(t._s(e.name))]),i("p",{staticClass:"des"},[t._v(t._s(e.des&&e.des))]),i("p",{staticClass:"price"},[i("span",{staticClass:"now-price"},[t._v(" "+t._s(e.nowPrice&&e.nowPrice)+" ")]),i("del",{staticClass:"old-price"},[t._v(" "+t._s(e.oldPrice&&e.oldPrice)+" ")])])])])})),i("div",{staticClass:"more",class:{"space-more":t.spaceMore}},[i("div",{staticClass:"info"},[i("p",[t._v("浏览更多")]),i("p",{staticClass:"hot"},[t._v(t._s(t.showItem))])]),t._m(1)])],2)])])},I=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("img",{attrs:{src:"",alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon-arrow"},[i("span",[i("i",{staticClass:"el-icon-right"})])])}];i("96cf"),i("d3b7");function S(t,e,i,n,a,r,s){try{var c=t[r](s),o=c.value}catch(l){return void i(l)}c.done?e(o):Promise.resolve(o).then(n,a)}function k(t){return function(){var e=this,i=arguments;return new Promise((function(n,a){var r=t.apply(e,i);function s(t){S(r,n,a,s,c,"next",t)}function c(t){S(r,n,a,s,c,"throw",t)}s(void 0)}))}}var E={data:function(){return{title:"",navList:[],leftUL:[],contentList:{},showItem:"",spaceMore:!1}},props:["data-list"],created:function(){var t=this;this.getData().then((function(e){t.title=e.title,t.navList=e.nav,t.leftUL=e.leftUL,t.contentList=e.list,t.showItem=e.nav[0],""===t.contentList[t.showItem][t.contentList[t.showItem].length-1].id?t.spaceMore=!0:t.spaceMore=!1}))},methods:{getData:function(){var t=this;return k(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=null,"家电"!==t.dataList){e.next=6;break}return e.next=4,t.$api.getJiadianList().then((function(t){i=t.data.dataList}));case 4:e.next=24;break;case 6:if("智能"!==t.dataList){e.next=11;break}return e.next=9,t.$api.getZhinengList().then((function(t){i=t.data.dataList}));case 9:e.next=24;break;case 11:if("搭配"!==t.dataList){e.next=16;break}return e.next=14,t.$api.getDapeiList().then((function(t){i=t.data.dataList}));case 14:e.next=24;break;case 16:if("配件"!==t.dataList){e.next=21;break}return e.next=19,t.$api.getPeijianList().then((function(t){i=t.data.dataList}));case 19:e.next=24;break;case 21:if("周边"!==t.dataList){e.next=24;break}return e.next=24,t.$api.getZhoubianList().then((function(t){i=t.data.dataList}));case 24:return e.abrupt("return",i);case 25:case"end":return e.stop()}}),e)})))()},changeNav:function(t){this.showItem=t}}},T=E,M=(i("d67e"),Object(d["a"])(T,C,I,!1,null,"7be9eec7",null)),N=M.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"m-video-sub"},[t._m(0),i("div",{staticClass:"m-video-sub-content"},[i("ul",t._l(t.list,(function(e){return i("li",{key:e.id},[i("img",{attrs:{src:e.imgSrc,alt:e.title}}),t._m(1,!0),i("h3",[t._v(t._s(e.title))]),i("p",{staticClass:"des"},[t._v(t._s(e.des&&e.des))])])})),0)])])},O=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"m-video-sub-header"},[i("div",{staticClass:"title"},[t._v("视频")]),i("div",{staticClass:"check-all"},[t._v(" 查看全部 "),i("span",[i("i",{staticClass:"el-icon-arrow-right"})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"play-btn"},[i("i",{staticClass:"el-icon-caret-right"})])}],D={data:function(){return{list:[]}},created:function(){var t=this;this.$api.getVideosList().then((function(e){t.list=e.data.videoList}))}},R=D,U=(i("f6b1"),Object(d["a"])(R,P,O,!1,null,"778b5944",null)),F=U.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"advert"},[i("img",{attrs:{src:t.imgSrc,alt:""}})])},Z=[],G={props:["imgSrc"]},Q=G,B=(i("88d0"),Object(d["a"])(Q,Y,Z,!1,null,"3f3e44e2",null)),V=B.exports,z=i("defb"),W={data:function(){return{sWiperList:[{id:"swiper_1",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ade887b241d057d81e2de96590a1a6f.jpg?w=2452&h=920"},{id:"swiper_2",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a82846d975204e12923de52add19339.jpg?thumb=1&w=1533&h=575&f=webp&q=90"},{id:"swiper_3",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/be3a556e9cd1896f049c122a8bab3ce2.jpg?thumb=1&w=1533&h=575&f=webp&q=90"},{id:"swiper_4",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad9c1cb79a2eeb2d5ccf54dfa9782032.jpg?thumb=1&w=1533&h=575&f=webp&q=90"},{id:"swiper_5",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6ef43cf9f138a7fc3a39273d7e3d13b6.jpg?thumb=1&w=1533&h=575&f=webp&q=90"}],channelList:[{id:"channel-0",title:"小米秒杀",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48"},{id:"channel-1",title:"企业团购",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48"},{id:"channel-2",title:"F码通道",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48"},{id:"channel-3",title:"米粉卡",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48"},{id:"channel-4",title:"以旧换新",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48"},{id:"channel-5",title:"话费充值",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48"}],promoList:[{id:"promo-0",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d158f243b54d5ec68dd2ac72bd24555d.jpg?w=632&h=340"},{id:"promo-1",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fbff319c7dd00e75c9758acf248d3784.jpg?w=632&h=340"},{id:"promo-2",imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340"}]}},components:{MNav:r["a"],Swiper:h,LeftMenu:m["a"],ShanGou:w,Phone:x,OtherPub:N,MVideoSub:F,Advert:V,ToolsBar:z["a"]},created:function(){var t=document.cookie.indexOf("login=true")>-1;this.$store.commit("changeIsLogin",t)}},H=W,J=(i("43bc"),Object(d["a"])(H,n,a,!1,null,"473afd10",null));e["default"]=J.exports},bdd1:function(t,e,i){},d392:function(t,e,i){},d67e:function(t,e,i){"use strict";var n=i("bdd1"),a=i.n(n);a.a},f6b1:function(t,e,i){"use strict";var n=i("ff8d"),a=i.n(n);a.a},fb6a:function(t,e,i){"use strict";var n=i("23e7"),a=i("861d"),r=i("e8b5"),s=i("23cb"),c=i("50c4"),o=i("fc6a"),l=i("8418"),d=i("b622"),u=i("1dde"),h=i("ae40"),m=u("slice"),f=h("slice",{ACCESSORS:!0,0:0,1:2}),p=d("species"),v=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!m||!f},{slice:function(t,e){var i,n,d,u=o(this),h=c(u.length),m=s(t,h),f=s(void 0===e?h:e,h);if(r(u)&&(i=u.constructor,"function"!=typeof i||i!==Array&&!r(i.prototype)?a(i)&&(i=i[p],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return v.call(u,m,f);for(n=new(void 0===i?Array:i)(g(f-m,0)),d=0;m<f;m++,d++)m in u&&l(n,d,u[m]);return n.length=d,n}})},ff8d:function(t,e,i){}}]);
//# sourceMappingURL=chunk-5b88b40d.1d974f17.js.map