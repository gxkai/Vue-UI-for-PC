(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0b68f8"],{"1e4b":function(t,e,a){"use strict";a.r(e);var n=a("bc3a"),l=a.n(n),r={data:function(){return{textarea:"00",type:1,tableData:[{date:"2016-05-03",name:"1张三",province:"广东",city:"天河区",address:"广东市天河区无名路888号",zip:200330,trClass:"trClass"},{date:"2016-05-02",name:"2张三",province:"广东",city:"天河区",address:"广东市天河区无名路888号",zip:200331}]}},methods:{btn:function(){l.a.get("https://translate.google.cn/translate_a/single?client=webapp&sl=en&tl=zh-CN&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&otf=1&ssel=0&tsel=0&kc=4&tk=946608.573767&q=what").then((function(t){console.log(t)}))},click:function(t){this.type=t,this.$refs.table.resetColumn()}},mounted:function(){}},o=a("2877"),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticStyle:{"text-align":"center",margin:"50px auto"}},[t._v("组件doc及示例演示请运行 npm run docs")]),a("p",{staticStyle:{"text-align":"center"}},[a("router-link",{attrs:{to:"/login"}},[t._v("应用实例")])],1),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textarea,expression:"textarea"}],staticStyle:{width:"500px",height:"200px"},domProps:{value:t.textarea},on:{input:function(e){e.target.composing||(t.textarea=e.target.value)}}})]),a("div",{on:{click:t.btn}},[t._v("btn")]),a("div",[t._v(t._s(t.type)+"\n    "),a("p",{on:{click:function(e){return t.click(1)}}},[t._v("type=1")]),a("br"),a("p",{on:{click:function(e){return t.click(2)}}},[t._v("type=2")]),a("br"),a("p",{on:{click:function(e){return t.click(3)}}},[t._v("type=3")]),a("br"),a("akTable",{ref:"table",attrs:{data:t.tableData}},[a("akColumn",{attrs:{label:"日期",prop:"date",title:!0}}),1===t.type?[a("akColumn",{attrs:{label:"姓名",prop:"name"}})]:t._e(),2===t.type?a("akColumn",{attrs:{label:"省份",prop:"province"}}):t._e(),3===t.type?a("akColumn",{attrs:{label:"城市",prop:"city"}}):t._e(),1===t.type?a("akColumn",{attrs:{label:"地址",prop:"address"}}):t._e(),a("akColumn",{attrs:{label:"邮编",prop:"zip"}})],2)],1)])}),[],!1,null,null,null);e.default=i.exports}}]);