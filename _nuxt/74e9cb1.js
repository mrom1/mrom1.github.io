(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,9,11],{504:function(t,e,r){var content=r(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("6d637a5e",content,!0,{sourceMap:!1})},505:function(t,e,r){"use strict";r(504)},506:function(t,e,r){var n=r(11)(!1);n.push([t.i,"body[data-v-448aac4e]{background:#fff;color:#fff}.this[data-v-448aac4e]{width:160px;height:160px;cursor:pointer;position:relative;margin:50px auto}.this .sq[data-v-448aac4e]{width:60px;height:60px;background:#48bb78;position:absolute;left:50px;top:50px}.this .s1[data-v-448aac4e]{border-color:transparent transparent #48bb78;border-width:0 30px 50px;transform:translateY(-10px);transform-origin:50% 100%;top:0}.this .s1[data-v-448aac4e],.this .s2[data-v-448aac4e]{display:inline-block;border-style:solid;position:absolute;left:50px;transition:all 1s ease-in-out}.this .s2[data-v-448aac4e]{border-color:#48bb78 transparent transparent;border-width:50px 30px 0;bottom:0;transform:translateY(10px);transform-origin:50% 0}.this .s3[data-v-448aac4e]{border-color:transparent #48bb78 transparent transparent;border-width:30px 50px 30px 0;left:0;transform:translateX(-10px);transform-origin:100% 50%}.this .s3[data-v-448aac4e],.this .s4[data-v-448aac4e]{display:inline-block;border-style:solid;position:absolute;top:50px;transition:all 1s ease-in-out}.this .s4[data-v-448aac4e]{border-color:transparent transparent transparent #48bb78;border-width:30px 0 30px 50px;right:0;transform:translateX(10px);transform-origin:0 50%}.this .text[data-v-448aac4e]{font-family:Helvetica,sans-serif;position:absolute;left:53%;color:#348a58;text-transform:uppercase;font-size:1.2em;letter-spacing:6px;bottom:20px;opacity:0;font-weight:100;transform:translateX(-50%);transition:all .1s linear}.this .perspective[data-v-448aac4e]{transform-style:preserve-3d;perspective:300px;position:absolute;left:50%;width:160px;height:160px;margin-left:-80px;transform-origin:center;transform:rotateX(0deg);transition:all 1s ease-in-out}.this:hover .perspective[data-v-448aac4e]{transform:rotateX(60deg) rotate(45deg)}.this:hover .perspective .s1[data-v-448aac4e]{transform:translateX(0) rotateX(-126.87deg)}.this:hover .perspective .s2[data-v-448aac4e]{transform:translateX(0) rotateX(126.87deg)}.this:hover .perspective .s3[data-v-448aac4e]{transform:translateX(0) rotateY(126.87deg)}.this:hover .perspective .s4[data-v-448aac4e]{transform:translateX(0) rotateY(-126.87deg);border-left:50px solid #348a58}.this:hover .text[data-v-448aac4e]{opacity:1;transition:all .5s linear .5s}",""]),t.exports=n},507:function(t,e,r){var content=r(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("417c2c42",content,!0,{sourceMap:!1})},510:function(t,e,r){"use strict";r.r(e);r(505);var n=r(27),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"this"},[r("div",{staticClass:"perspective"},[r("div",{staticClass:"sq"}),t._v(" "),r("div",{staticClass:"s1"}),t._v(" "),r("div",{staticClass:"s2"}),t._v(" "),r("div",{staticClass:"s3"}),t._v(" "),r("div",{staticClass:"s4"})]),t._v(" "),r("div",{staticClass:"text"},[t._v("mrom1/blog")])])}],!1,null,"448aac4e",null);e.default=component.exports},511:function(t,e,r){"use strict";r(507)},512:function(t,e,r){var n=r(11)(!1);n.push([t.i,".tagBox[data-v-4602c680]{color:#3e6d8e;background-color:#e0eaf1;border-bottom:1px solid #3e6d8e;border-right:1px solid #7f9fb6;padding:3px 4px;margin:2px 2px 2px 0;text-decoration:none;font-size:90%;line-height:2.4;white-space:nowrap}.articleEntryDescriptionContainer[data-v-4602c680]{justify-content:center}",""]),t.exports=n},517:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0},date:{type:String,required:!0},readingTime:{type:String,required:!0},tags:{type:Array,required:!0},slug:{type:String,required:!0}}},o=(r(511),r(27)),l=r(36),c=r.n(l),d=r(498),v=r(229),f=r(227),x=r(494),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"articleEntryContainer"},[r("v-col",[r("v-row",[r("div",{staticClass:"articleEntryTitleContainer"},[r("NuxtLink",{attrs:{to:{name:"articles-slug",params:{slug:t.slug}}}},[t._v("\n          "+t._s(t.title)+"\n        ")])],1)])],1),t._v(" "),r("v-col",[r("v-row",[r("div",{staticClass:"articleEntryDescriptionContainer"},[r("v-icon",{attrs:{size:"14"}},[t._v("mdi-calendar")]),t._v(" "),r("span",{staticClass:"text-white text-sm"},[t._v(t._s(t.date))]),t._v("\n        -\n        "),r("v-icon",{attrs:{size:"14"}},[t._v("mdi-clock")]),t._v(" "),r("span",{staticClass:"text-white text-sm"},[t._v(t._s(t.readingTime))]),t._v(" "),t.tags.length?r("div",{staticClass:"text-sm",staticStyle:{display:"inline-block"}},[t._v("\n          -\n          "),t._l(t.tags,(function(e,n){return r("span",{key:n,staticClass:"tagBox"},[t._v(t._s(e))])}))],2):t._e()],1)])],1),t._v(" "),r("v-divider")],1)}),[],!1,null,"4602c680",null);e.default=component.exports;c()(component,{VCol:d.a,VDivider:v.a,VIcon:f.a,VRow:x.a})},519:function(t,e,r){"use strict";r.r(e);var n=r(27),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("WelcomeLogo")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WelcomeLogo:r(510).default})},539:function(t,e,r){"use strict";r.r(e);var n=r(35),o=(r(101),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("articles").only(["title","createdAt","slug","tags","readingtime"]).sortBy("createdAt","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Articles"}}}),l=r(27),c=r(36),d=r.n(c),v=r(229),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("WelcomeText"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"listOfArticlesContent"},t._l(t.articles,(function(article){return r("AppArticleEntry",{key:article.slug,attrs:{title:article.title,date:t.convertDateToLocalTime(article.createdAt),"reading-time":article.readingtime,tags:article.tags,slug:article.slug}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{WelcomeText:r(519).default,AppArticleEntry:r(517).default}),d()(component,{VDivider:v.a})}}]);