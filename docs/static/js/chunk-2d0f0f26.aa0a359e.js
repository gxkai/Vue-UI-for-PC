(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0f0f26"],{"9f14":function(s,a,t){"use strict";t.r(a);var r={data:function(){return{value1:0,value2:50,value3:25,value4:25,value5:30,value6:30,value7:30,value8:[30,60],value9:[30,50],value10:80,marks:{0:"start",25:"25%",50:"center",75:"75%",100:'<i style="color:red">end</i>'}}},methods:{formatTooltip:function(s){return s+"%"}}},l=t("2877"),e=Object(l.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("Slider 滑块")]),s._m(0),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("p",[s._v("基础用法："+s._s(s.value1))]),t("div",[t("ak-slider",{model:{value:s.value1,callback:function(a){s.value1=a},expression:"value1"}})],1),t("p",[s._v("隐藏提示："+s._s(s.value2))]),t("div",[t("ak-slider",{attrs:{showTooltip:!1},model:{value:s.value2,callback:function(a){s.value2=a},expression:"value2"}})],1),t("p",[s._v("格式化提示："+s._s(s.value3))]),t("div",[t("ak-slider",{attrs:{formatTooltip:s.formatTooltip},model:{value:s.value3,callback:function(a){s.value3=a},expression:"value3"}})],1),t("p",[s._v("禁用状态："+s._s(s.value4))]),t("div",[t("ak-slider",{attrs:{disabled:!0},model:{value:s.value4,callback:function(a){s.value4=a},expression:"value4"}})],1)])]],2),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  \n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("基础用法：{{value1}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value1"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("隐藏提示：{{value2}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":showTooltip")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("格式化提示：{{value3}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":formatTooltip")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"formatTooltip"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("禁用状态：{{value4}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value4"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    \n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n   data(){\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value1")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value2")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(",\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value3")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(",\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value4")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v("\n     }\n   },\n   "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(":{\n     formatTooltip(value){\n       "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" value+"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'%'")]),s._v("\n     }\n   }\n }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(1),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("p",[s._v("指定滑动步长："+s._s(s.value5))]),t("div",[t("ak-slider",{attrs:{step:10},model:{value:s.value5,callback:function(a){s.value5=a},expression:"value5"}})],1),t("p",[s._v("显示间断点："+s._s(s.value6))]),t("div",[t("ak-slider",{attrs:{step:10,showStops:!0},model:{value:s.value6,callback:function(a){s.value6=a},expression:"value6"}})],1)])]],2),t("p",[s._v("步长"),t("code",[s._v("step=10")])]),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  \n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("指定滑动步长：{{value5}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value5"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("显示间断点：{{value6}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value6"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":showStops")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    \n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n   data(){\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value5")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(",\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value6")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v("\n     }\n   }\n }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(2),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("p",[s._v("指定最大值和最小值："+s._s(s.value7))]),t("div",[t("ak-slider",{attrs:{min:10,max:80},model:{value:s.value7,callback:function(a){s.value7=a},expression:"value7"}})],1)])]],2),t("p",[t("code",[s._v("min")]),s._v("最小值10，"),t("code",[s._v("max")]),s._v("最大值80")]),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  \n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("指定最大值和最小值：{{value7}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value7"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"80"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    \n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n   data(){\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value7")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(",\n     }\n }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(3),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("p",[s._v("选择范围"+s._s(s.value8))]),t("div",[t("ak-slider",{model:{value:s.value8,callback:function(a){s.value8=a},expression:"value8"}})],1),t("p",[s._v("选择范围，并指定最大最小值"+s._s(s.value9))]),t("div",[t("ak-slider",{attrs:{min:10,max:80},model:{value:s.value9,callback:function(a){s.value9=a},expression:"value9"}})],1)])]],2),t("p",[s._v("通用"),t("code",[s._v("value")]),s._v("传入两个值即可")]),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  \n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("选择范围{{value8}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value8"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("选择范围，并指定最大最小值{{value9}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value9"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"80"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    \n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n   data(){\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value8")]),s._v(":["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v("],\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value9")]),s._v(":["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v("]\n     }\n   }\n }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(4),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("p",[s._v("展示标记"+s._s(s.value10))]),t("div",[t("ak-slider",{attrs:{marks:s.marks},model:{value:s.value10,callback:function(a){s.value10=a},expression:"value10"}})],1)])]],2),t("p",[s._v("key表示当前所占百分比位置")]),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  \n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("展示标记{{value10}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value10"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":marks")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"marks"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ak-slider")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    \n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n   data(){\n     "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value10")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80")]),s._v(",\n       "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marks")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'start'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'25%'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("75")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'75%'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<i style=\"color:red\">end</i>'")]),s._v("\n        }\n     }\n   }\n }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(5),s._m(6),s._m(7),s._m(8),s._m(9)],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}},[this._v("¶")]),this._v(" 基础用法")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"%E6%8C%87%E5%AE%9A%E6%BB%91%E5%8A%A8%E6%AD%A5%E9%95%BF"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E6%8C%87%E5%AE%9A%E6%BB%91%E5%8A%A8%E6%AD%A5%E9%95%BF"}},[this._v("¶")]),this._v(" 指定滑动步长")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%B0%8F%E5%80%BC%E5%92%8C%E6%9C%80%E5%A4%A7%E5%80%BC"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%B0%8F%E5%80%BC%E5%92%8C%E6%9C%80%E5%A4%A7%E5%80%BC"}},[this._v("¶")]),this._v(" 设置最小值和最大值")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"%E8%AE%BE%E5%AE%9A%E9%80%89%E6%8B%A9%E8%8C%83%E5%9B%B4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E8%AE%BE%E5%AE%9A%E9%80%89%E6%8B%A9%E8%8C%83%E5%9B%B4"}},[this._v("¶")]),this._v(" 设定选择范围")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"%E5%B1%95%E7%A4%BA%E6%A0%87%E8%AE%B0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%B1%95%E7%A4%BA%E6%A0%87%E8%AE%B0"}},[this._v("¶")]),this._v(" 展示标记")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[this._v("¶")]),this._v(" API")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"slider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slider"}},[this._v("¶")]),this._v(" Slider")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),t("th",[s._v("类型")]),t("th",[s._v("说明")])])]),t("tbody",[t("tr",[t("td",[s._v("value")]),t("td",[s._v("Number,Array")]),t("td",[s._v("当前值，默认为0。Array时为范围选择")])]),t("tr",[t("td",[s._v("min")]),t("td",[s._v("Number/0")]),t("td",[s._v("最小值")])]),t("tr",[t("td",[s._v("max")]),t("td",[s._v("Number/100")]),t("td",[s._v("最大值")])]),t("tr",[t("td",[s._v("step")]),t("td",[s._v("Number/1")]),t("td",[s._v("步长")])]),t("tr",[t("td",[s._v("disabled")]),t("td",[s._v("Boolean/false")]),t("td",[s._v("是否禁用")])]),t("tr",[t("td",[s._v("showStops")]),t("td",[s._v("Boolean/false")]),t("td",[s._v("是否显示间断点")])]),t("tr",[t("td",[s._v("showTooltip")]),t("td",[s._v("Boolean/false")]),t("td",[s._v("是否显示 tooltip")])]),t("tr",[t("td",[s._v("formatTooltip")]),t("td",[s._v("Function")]),t("td",[s._v("格式化 tooltip message，仅当showTooltip为true时")])]),t("tr",[t("td",[s._v("marks")]),t("td",[s._v("Function")]),t("td",[s._v("标记， key 的类型必须为number，表示当前位置")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"slider-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slider-event"}},[this._v("¶")]),this._v(" Slider Event")])},function(){var s=this.$createElement,a=this._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[this._v("参数")]),a("th",[this._v("说明")])])]),a("tbody",[a("tr",[a("td",[this._v("change")]),a("td",[this._v("值改变时触发")])])])])}],!1,null,null,null);a.default=e.exports}}]);