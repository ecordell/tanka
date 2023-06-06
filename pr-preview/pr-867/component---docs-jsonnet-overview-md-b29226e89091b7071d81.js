(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"5bP6":function(a,e,s){"use strict";s.r(e),s.d(e,"_frontmatter",(function(){return b})),s.d(e,"default",(function(){return N}));var t=s("wx14"),n=s("zLVn"),m=(s("q1tI"),s("7ljp")),p=s("BIGe"),c=(s("qKvR"),["components"]),b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!Object.prototype.hasOwnProperty.call(b,"__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/jsonnet/overview.md"}});var l={_frontmatter:b},r=p.a;function N(a){var e=a.components,s=Object(n.a)(a,c);return Object(m.b)(r,Object(t.a)({},l,s,{components:e,mdxType:"MDXLayout"}),Object(m.b)("h1",{id:"language-overview"},"Language overview"),Object(m.b)("p",null,Object(m.b)("a",{parentName:"p",href:"https://jsonnet.org"},"Jsonnet")," is the data templating language Tanka uses for\nexpressing what shall be deployed to your Kubernetes cluster. Understanding\nJsonnet is crucial to using Tanka effectively."),Object(m.b)("p",null,"This page covers the Jsonnet language itself. For more information on how to\nuse Jsonnet with Kubernetes, see ",Object(m.b)("a",{parentName:"p",href:"/pr-preview/pr-867/tutorial/jsonnet"},"the tutorial"),". There's\nalso ",Object(m.b)("a",{parentName:"p",href:"https://jsonnet.org/learning/tutorial.html"},"the official Jsonnet tutorial"),"\nthat provides a more detailed review of language features."),Object(m.b)("h2",{id:"syntax"},"Syntax"),Object(m.b)("p",null,"Being a superset of JSON, the syntax is very similar:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// Line comment")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"/* Block comment */")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// a local variable (not exported)")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," greeting "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"hello world!"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},";")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// the exported/returned object")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"foo:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"bar"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// string")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"bar:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"5"),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// int")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"baz:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"false"),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// bool")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"list:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," ["),Object(m.b)("span",{parentName:"span",className:"mtk4"},"1"),Object(m.b)("span",{parentName:"span",className:"mtk1"},","),Object(m.b)("span",{parentName:"span",className:"mtk4"},"2"),Object(m.b)("span",{parentName:"span",className:"mtk1"},","),Object(m.b)("span",{parentName:"span",className:"mtk4"},"3"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"], "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// array")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// object")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"dict:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"nested:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," greeting, "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// using the local")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk7"},"hidden::"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"incognito!"'),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// an unexported field")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("h2",{id:"abstraction"},"Abstraction"),Object(m.b)("p",null,"Jsonnet has rich abstraction features, which makes it interesting for\nconfiguring Kubernetes, as it allows to keep configurations concise, yet\nreadable."),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},Object(m.b)("a",{parentName:"li",href:"#imports"},"Imports")),Object(m.b)("li",{parentName:"ul"},Object(m.b)("a",{parentName:"li",href:"#merging"},"Merging")),Object(m.b)("li",{parentName:"ul"},Object(m.b)("a",{parentName:"li",href:"#functions"},"Functions"))),Object(m.b)("h3",{id:"imports"},"Imports"),Object(m.b)("p",null,"Just as other languages, Jsonnet allows code to be imported from other files:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," secret "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"import"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"./secret.libsonnet"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},";")))),Object(m.b)("p",null,"The exported object (the only non-local one) of ",Object(m.b)("inlineCode",{parentName:"p"},"secret.libsonnet")," is now\navailable as a ",Object(m.b)("inlineCode",{parentName:"p"},"local")," variable called ",Object(m.b)("inlineCode",{parentName:"p"},"secret"),"."),Object(m.b)("p",null,"When using Tanka, it is also possible to directly import ",Object(m.b)("inlineCode",{parentName:"p"},".json")," and ",Object(m.b)("inlineCode",{parentName:"p"},".yaml"),"\nfiles, as if they were a ",Object(m.b)("inlineCode",{parentName:"p"},".libsonnet"),"."),Object(m.b)("p",null,"Make sure to also take a look at the libraries documentation to learn how to use ",Object(m.b)("inlineCode",{parentName:"p"},"import")," and re-use code.\nThe documentation on ",Object(m.b)("a",{parentName:"p",href:"/pr-preview/pr-867/libraries/import-paths"},"Tanka import paths")," and ",Object(m.b)("a",{parentName:"p",href:"/pr-preview/pr-867/libraries/install-publish"},"vendoring")," are useful to understand how imports work in Tanka's context."),Object(m.b)("h3",{id:"merging"},"Merging"),Object(m.b)("p",null,"Deep merging allows you to change parts of an object without touching all of it.\nConsider the following example:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," secret "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"kind:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," Secret,")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"metadata:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"name:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"mySecret"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line vscode-highlight-line-highlighted"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"namespace:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"default"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// need to change that")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"data:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"foo:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," std."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"base64"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"foo"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},")")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  }")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"};")))),Object(m.b)("p",null,"To change the namespace only, we can use the special merge key ",Object(m.b)("inlineCode",{parentName:"p"},"+:")," like so:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// define the patch:")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," patch "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"metadata+:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"namespace:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"myApp"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  }")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"The difference between ",Object(m.b)("inlineCode",{parentName:"p"},":")," and ",Object(m.b)("inlineCode",{parentName:"p"},"+:")," is that the former replaces the original\ndata at that key, while the latter applies the new object as a patch on top,\nmeaning that values will be updated if possible but all other stay like they\nare.",Object(m.b)("br",{parentName:"p"}),"\n","To merge those two, just add (",Object(m.b)("inlineCode",{parentName:"p"},"+"),") the patch to the original:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"secret "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," patch")))),Object(m.b)("p",null,"The output of this is the following JSON object:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"json"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk12"},"kind"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"Secret"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk12"},"metadata"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk7"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"mySecret"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk7"},"namespace"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"myApp"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"},")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk12"},"data"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk7"},"foo"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"Zm9vCg=="),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"}")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"}")))),Object(m.b)("h3",{id:"functions"},"Functions"),Object(m.b)("p",null,"Jsonnet supports functions, similar to how Python does. They can be defined in\ntwo different ways:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk9"},"add"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"(x,y) "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," x "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," y;")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," mul "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," ("),Object(m.b)("span",{parentName:"span",className:"mtk9"},"function"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"(x, y) x "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"*"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," y);")))),Object(m.b)("p",null,"Objects can have methods:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk9"},"greet"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"(who)"),Object(m.b)("span",{parentName:"span",className:"mtk12"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"hello "'),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," who,")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Default values, keyword-args and more examples can be found at\n",Object(m.b)("a",{parentName:"p",href:"https://jsonnet.org/learning/tutorial.html#functions"},"jsonnet.org"),"."),Object(m.b)("h2",{id:"standard-library"},"Standard library"),Object(m.b)("p",null,"The Jsonnet standard library includes many helper methods ranging from object\nand array mutation, over string utils to computation helpers."),Object(m.b)("p",null,"Documentation is available at\n",Object(m.b)("a",{parentName:"p",href:"https://jsonnet.org/ref/stdlib.html"},"jsonnet.org"),"."),Object(m.b)("h2",{id:"conditionals"},"Conditionals"),Object(m.b)("p",null,"Jsonnet supports a conditionals in a fashion similar to a ternary operator:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," tag "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5 mtki"},"if"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," prod "),Object(m.b)("span",{parentName:"span",className:"mtk5 mtki"},"then"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"v1.0"'),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5 mtki"},"else"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"latest"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},";")))),Object(m.b)("p",null,"More on ",Object(m.b)("a",{parentName:"p",href:"https://jsonnet.org/learning/tutorial.html#conditionals"},"jsonnet.org"),"."),Object(m.b)("h2",{id:"references"},"References"),Object(m.b)("p",null,"Jsonnet has multiple options to refer to parts of an object:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{ "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// this is $")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"junk:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"foo"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"nested:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," { "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// this is self")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"app:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"Tanka"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"msg:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"self"),Object(m.b)("span",{parentName:"span",className:"mtk1"},".app "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'" rocks!"'),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},'// "Tanka rocks!"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"children:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," { "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// this is also self")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"baz:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"bar"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"junk:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"$"),Object(m.b)("span",{parentName:"span",className:"mtk1"},".junk "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"self"),Object(m.b)("span",{parentName:"span",className:"mtk1"},".baz, "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},'// "foobar"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  }")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"For more information take a look at\n",Object(m.b)("a",{parentName:"p",href:"https://jsonnet.org/learning/tutorial.html#references"},"jsonnet.org")),Object(m.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==N&&N&&N===Object(N)&&Object.isExtensible(N)&&!Object.prototype.hasOwnProperty.call(N,"__filemeta")&&Object.defineProperty(N,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/jsonnet/overview.md"}}),N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-jsonnet-overview-md-b29226e89091b7071d81.js.map