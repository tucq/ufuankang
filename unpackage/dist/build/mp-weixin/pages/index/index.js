(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"77aa":function(t,n,e){"use strict";(function(t){e("6fa9"),e("921b");r(e("66fd"));var n=r(e("eb81"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"8ba9":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,r,a,i,u){try{var o=t[i](u),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(r,a)}function u(t){return function(){var n=this,e=arguments;return new Promise(function(r,a){var u=t.apply(n,e);function o(t){i(u,r,a,o,s,"next",t)}function s(t){i(u,r,a,o,s,"throw",t)}o(void 0)})}}var o={data:function(){return{titleNViewBackground:"",swiperCurrent:0,swiperLength:0,carouselList:[],goodsList:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=u(r.default.mark(function t(){var n,e;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("carouselList");case 2:return n=t.sent,this.titleNViewBackground=n[0].background,this.swiperLength=n.length,this.carouselList=n,t.next=8,this.$api.json("goodsList");case 8:e=t.sent,this.goodsList=e||[];case 10:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),swiperChange:function(t){var n=t.detail.current;this.swiperCurrent=n,this.titleNViewBackground=this.carouselList[n].background},navToDetailPage:function(n){var e=n.title;t.navigateTo({url:"/pages/product/product?id=".concat(e)})}}};n.default=o}).call(this,e("543d")["default"])},9207:function(t,n,e){"use strict";var r=e("e5b9"),a=e.n(r);a.a},b14d:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return a})},e5b9:function(t,n,e){},eb81:function(t,n,e){"use strict";e.r(n);var r=e("b14d"),a=e("f321");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("9207");var u=e("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);n["default"]=o.exports},f321:function(t,n,e){"use strict";e.r(n);var r=e("8ba9"),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n["default"]=a.a}},[["77aa","common/runtime","common/vendor"]]]);