(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+UK2":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return b}));var n=t("wx14"),r=t("zLVn"),s=(t("q1tI"),t("7ljp")),m=t("BIGe"),c=(t("qKvR"),["components"]),l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!Object.prototype.hasOwnProperty.call(l,"__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/namespaces.md"}});var o={_frontmatter:l},p=m.a;function b(e){var a=e.components,t=Object(r.a)(e,c);return Object(s.b)(p,Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"namespaces"},"Namespaces"),Object(s.b)("p",null,"When using Tanka, namespaces are handled slightly different compared to\n",Object(s.b)("inlineCode",{parentName:"p"},"kubectl"),", because environments offer more granular control than contexts used\nby ",Object(s.b)("inlineCode",{parentName:"p"},"kubectl"),"."),Object(s.b)("h2",{id:"default-namespaces"},"Default namespaces"),Object(s.b)("p",null,"In the ",Object(s.b)("a",{parentName:"p",href:"/config/#file-format"},Object(s.b)("inlineCode",{parentName:"a"},"spec.json"))," of each environment, you can set the\n",Object(s.b)("inlineCode",{parentName:"p"},"spec.namespace")," field, which is the default namespace. The default namespace is\nset for every resource that ",Object(s.b)("strong",{parentName:"p"},"does not")," have a namespace ",Object(s.b)("strong",{parentName:"p"},"set from Jsonnet"),"."),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null}),Object(s.b)("th",{parentName:"tr",align:null},"Scenario"),Object(s.b)("th",{parentName:"tr",align:null},"Action"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"1."),Object(s.b)("td",{parentName:"tr",align:null},"Your resource ",Object(s.b)("strong",{parentName:"td"},"lacks namespace")," information (",Object(s.b)("inlineCode",{parentName:"td"},"metadata.namespace"),") unset or ",Object(s.b)("inlineCode",{parentName:"td"},'""')),Object(s.b)("td",{parentName:"tr",align:null},"Tanka sets ",Object(s.b)("inlineCode",{parentName:"td"},"metadata.namespace")," to the value of ",Object(s.b)("inlineCode",{parentName:"td"},"spec.namespace")," in ",Object(s.b)("inlineCode",{parentName:"td"},"spec.json"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"2."),Object(s.b)("td",{parentName:"tr",align:null},"Your resource ",Object(s.b)("strong",{parentName:"td"},"already has")," namespace information"),Object(s.b)("td",{parentName:"tr",align:null},"Tanka does nothing, accepting the explicit namespace")))),Object(s.b)("p",null,"While we recommend keeping environments limited to a single namespace, there are\nlegit cases where it's handy to have them span multiple namespaces, for example:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Some other piece of software (Operators, etc) require resources to be in a specific namespace"),Object(s.b)("li",{parentName:"ul"},'A rarely changing "base" environment holding resources deployed for many clusters in the same way'),Object(s.b)("li",{parentName:"ul"},"etc.")),Object(s.b)("h2",{id:"cluster-wide-resources"},"Cluster-wide resources"),Object(s.b)("p",null,"Some resources in Kubernetes are cluster-wide, meaning they don't belong to a single namespace at all."),Object(s.b)("p",null,"Tanka will make an attempt to not add namespaces to ",Object(s.b)("em",{parentName:"p"},"known")," cluster-wide types.\nIt does this with a short list of types in ",Object(s.b)("a",{parentName:"p",href:"https://github.com/grafana/tanka/blob/main/pkg/process/namespace.go"},"the source code"),"."),Object(s.b)("p",null,"Tanka cannot feasibly maintain this list for all known custom resource types. In those cases, resources will have namespaces added to their manifests,\nand kubectl should happily apply them as non-namespaced resources."),Object(s.b)("p",null,"If this presents a problem for your workflow, you can ",Object(s.b)("strong",{parentName:"p"},"override this")," behavior\nper-resource, by setting the ",Object(s.b)("inlineCode",{parentName:"p"},"tanka.dev/namespaced")," annotation to ",Object(s.b)("inlineCode",{parentName:"p"},'"false"'),"\n(must be of ",Object(s.b)("inlineCode",{parentName:"p"},"string")," type):"),Object(s.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(s.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(s.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(s.b)("span",{parentName:"span",className:"mtk10"},"thing:"),Object(s.b)("span",{parentName:"span",className:"mtk1"}," clusterRole."),Object(s.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(s.b)("span",{parentName:"span",className:"mtk1"},"("),Object(s.b)("span",{parentName:"span",className:"mtk6"},'"myClusterRole"'),Object(s.b)("span",{parentName:"span",className:"mtk1"},")")),"\n",Object(s.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(s.b)("span",{parentName:"span",className:"mtk1"},"       "),Object(s.b)("span",{parentName:"span",className:"mtk12"},"+"),Object(s.b)("span",{parentName:"span",className:"mtk1"}," clusterRole.mixin.metadata."),Object(s.b)("span",{parentName:"span",className:"mtk9"},"withAnnotationsMixin"),Object(s.b)("span",{parentName:"span",className:"mtk1"},"({ "),Object(s.b)("span",{parentName:"span",className:"mtk6"},'"tanka.dev/namespaced"'),Object(s.b)("span",{parentName:"span",className:"mtk1"},": "),Object(s.b)("span",{parentName:"span",className:"mtk6"},'"false"'),Object(s.b)("span",{parentName:"span",className:"mtk1"}," })")))),Object(s.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!Object.prototype.hasOwnProperty.call(b,"__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/namespaces.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-namespaces-md-1b52cbab950b19a251fd.js.map