(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{408:function(t,a,s){"use strict";s.r(a);var n=s(52),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flutter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter"}},[t._v("#")]),t._v(" Flutter")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("万事开头难")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Flutter Learning\n")])])])]),t._v(" "),s("h2",{attrs:{id:"环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("物料")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("下载地址")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("window10")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("fultter.zip")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://storage.flutter-io.cn/flutter_infra_release/releases/stable/windows/flutter_windows_3.0.1-stable.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载地址"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("android studio")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://developer.android.google.cn/studio",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android studio"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("-")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("安装步骤")])]),t._v(" "),s("ol",[s("li",[t._v("解压文件包 "),s("strong",[t._v("flutter_windows_3.0.1-stable.zip")]),t._v(" ，复制到C盘并确认位置")]),t._v(" "),s("li",[t._v("设置window环境变量 打开电脑高级属性设置 -> 环境变量 -> 用户变量的path里添加 C:\\xxx\\flutter\\bin （flutter-path:） 以及 C:\\xxx\\flutter\\bin\\cache\\dart-sdk\\bin （dart-path）；保存")]),t._v(" "),s("li",[t._v("检查是否成功：打开 CMD 面板，输入 flutter --version 检验 flutter，输入 dart --version")]),t._v(" "),s("li",[t._v("安装android studio，一路点击安装即可；安装 flutter 插件以及dart 插件（plugin maket中搜索）")]),t._v(" "),s("li",[t._v("配置 虚拟显示机：找到 Device manager，找到创建按钮 create device, 定位 Phone 选择项，创建一个属于自己的虚拟手机设备（studio自带的设备无法运行的）")]),t._v(" "),s("li",[t._v('新建项目：打开CMD面板，在你的目标文件夹下，运行 flutter create "projectname" 创建项目')]),t._v(" "),s("li",[t._v("使用 android studio 打开项目，点击运行或（Ctrl + F5）")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("flutter pub get 出错")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("如果在创建项目是出现错误，那么需要进行额外配置请求地址\n打开电脑高级属性设置，在系统变量中加入两个变量\nPUB_HOSTED_URL=https://pub.flutter-io.cn\nFLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn\n")])])])]),t._v(" "),s("h2",{attrs:{id:"dart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dart"}},[t._v("#")]),t._v(" dart")]),t._v(" "),s("blockquote",[s("p",[t._v("函数是一等公民")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 位置可选参数")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 命名可选参数")]),t._v("\n\n")])])]),s("blockquote",[s("p",[t._v("运算符")])]),t._v(" "),s("ol",[s("li",[t._v("??= (:😃 当原来的变量有值时，当前的操作不执行")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lisi'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lilei'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("?? (:😃 如果前面的数据有值  那么使用前面的。（相当于三目元算符）")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lisi'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" temp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lilei'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("... 级联运算符")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("for循环")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("\n   main "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" names "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);