(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{AXtd:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return p}));var n=t("wx14"),s=t("Ff2n"),i=(t("q1tI"),t("7ljp")),l=t("hhGP");t("qKvR");const o=["components"],r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!Object.prototype.hasOwnProperty.call(r,"__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/exporting.md"}});const m={_frontmatter:r},c=l.a;function p(e){let{components:a}=e,t=Object(s.a)(e,o);return Object(i.b)(c,Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"exporting-as-yaml"},"Exporting as YAML"),Object(i.b)("p",null,"Tanka provides you with a day-to-day workflow for working with Kubernetes clusters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tk show")," for quickly checking the YAML representation looks good"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tk diff")," to ensure your changes will behave like they should"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tk apply")," makes it happen")),Object(i.b)("p",null,"However sometimes it can be required to integrate with other tooling that does\nonly support ",Object(i.b)("inlineCode",{parentName:"p"},".yaml")," files."),Object(i.b)("p",null,"For that case, ",Object(i.b)("inlineCode",{parentName:"p"},"tk export")," can be used:"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"#           <outputDir> <environment>")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"$ tk "),Object(i.b)("span",{parentName:"span",className:"mtk12"},"export"),Object(i.b)("span",{parentName:"span",className:"mtk1"}," promtail/   environments/promtail")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," The arguments flipped in v0.14.0, the ",Object(i.b)("inlineCode",{parentName:"p"},"<outputDir>")," comes first now.")),Object(i.b)("p",null,"This will create a separate ",Object(i.b)("inlineCode",{parentName:"p"},".yaml")," file for each Kubernetes resource included in your Jsonnet."),Object(i.b)("h2",{id:"filenames"},"Filenames"),Object(i.b)("p",null,"Tanka by default uses the following pattern:"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk5"},"${"),Object(i.b)("span",{parentName:"span",className:"mtk8"},"apiVersion"),Object(i.b)("span",{parentName:"span",className:"mtk5"},"}"),Object(i.b)("span",{parentName:"span",className:"mtk1"},"."),Object(i.b)("span",{parentName:"span",className:"mtk5"},"${"),Object(i.b)("span",{parentName:"span",className:"mtk8"},"kind"),Object(i.b)("span",{parentName:"span",className:"mtk5"},"}"),Object(i.b)("span",{parentName:"span",className:"mtk1"},"-"),Object(i.b)("span",{parentName:"span",className:"mtk5"},"${"),Object(i.b)("span",{parentName:"span",className:"mtk8"},"metadata.name"),Object(i.b)("span",{parentName:"span",className:"mtk5"},"}"),Object(i.b)("span",{parentName:"span",className:"mtk1"},".yaml")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# examples:")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"apps-v1.Deployment-distributor.yaml")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"v1.ConfigMap-loki.yaml")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"v1.Service-ingester.yaml")))),Object(i.b)("p",null,"If that does not fit your need, you can provide your own pattern using the ",Object(i.b)("inlineCode",{parentName:"p"},"--format")," flag:"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"tk "),Object(i.b)("span",{parentName:"span",className:"mtk12"},"export"),Object(i.b)("span",{parentName:"span",className:"mtk1"}," promtail environments/promtail --format="),Object(i.b)("span",{parentName:"span",className:"mtk5"},"'"),Object(i.b)("span",{parentName:"span",className:"mtk6"},"{{.metadata.labels.app}}-{{.metadata.name}}-{{.kind}}"),Object(i.b)("span",{parentName:"span",className:"mtk5"},"'")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The syntax is Go ",Object(i.b)("inlineCode",{parentName:"p"},"text/template"),". See ",Object(i.b)("a",{parentName:"p",href:"https://pkg.go.dev/text/template"},"https://pkg.go.dev/text/template"),"\nfor reference.")),Object(i.b)("p",null,"This would include the label named ",Object(i.b)("inlineCode",{parentName:"p"},"app"),", the ",Object(i.b)("inlineCode",{parentName:"p"},"name")," and ",Object(i.b)("inlineCode",{parentName:"p"},"kind")," of the resource:"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":""},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},"loki-distributor-Deployment"),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},"loki-loki-ConfigMap"),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},"loki-ingester-Service"))),Object(i.b)("p",null,"You can optionally use the template function ",Object(i.b)("inlineCode",{parentName:"p"},"lower")," for lower-casing fields, e.g. in the above example"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"... --format="),Object(i.b)("span",{parentName:"span",className:"mtk5"},"'"),Object(i.b)("span",{parentName:"span",className:"mtk6"},"{{.metadata.labels.app}}-{{.metadata.name}}-{{.kind | lower}}"),Object(i.b)("span",{parentName:"span",className:"mtk5"},"'")))),Object(i.b)("p",null,"would yield"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":""},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},"loki-distributor-deployment"))),Object(i.b)("p",null,"etc."),Object(i.b)("p",null,"You can also use a different file extension by providing ",Object(i.b)("inlineCode",{parentName:"p"},"--extension='yml'"),", for example."),Object(i.b)("h2",{id:"multiple-environments"},"Multiple environments"),Object(i.b)("p",null,"Tanka can also export multiple inline environments, as showcased in ",Object(i.b)("a",{parentName:"p",href:"/pr-preview/pr-916/inline-environments#use-case-consistent-inline-environments"},"Use case: consistent inline\nenvironments"),". This follows the same\nprinciples as describe before with the addition that you can also refer to Environment specific data through the ",Object(i.b)("inlineCode",{parentName:"p"},"env"),"\nkeyword."),Object(i.b)("p",null,"For example an export might refer to data from the Environment spec:"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Format based on environment {{env.<...>}}")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"$ tk "),Object(i.b)("span",{parentName:"span",className:"mtk12"},"export"),Object(i.b)("span",{parentName:"span",className:"mtk1"}," exportDir environments/dev/ \\")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"  --format "),Object(i.b)("span",{parentName:"span",className:"mtk5"},"'"),Object(i.b)("span",{parentName:"span",className:"mtk6"},"{{env.metadata.labels.cluster}}/{{env.spec.namespace}}//{{.kind}}-{{.metadata.name}}"),Object(i.b)("span",{parentName:"span",className:"mtk5"},"'")))),Object(i.b)("p",null,"Even more advanced use cases allow you to export multiple environments in a single execution:"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Export multiple environments")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"$ tk "),Object(i.b)("span",{parentName:"span",className:"mtk12"},"export"),Object(i.b)("span",{parentName:"span",className:"mtk1"}," exportDir environments/dev/ environments/qa/")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Recursive export")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"$ tk "),Object(i.b)("span",{parentName:"span",className:"mtk12"},"export"),Object(i.b)("span",{parentName:"span",className:"mtk1"}," exportDir environments/ --recursive")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Recursive export with labelSelector")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"$ tk "),Object(i.b)("span",{parentName:"span",className:"mtk12"},"export"),Object(i.b)("span",{parentName:"span",className:"mtk1"}," exportDir environments/ -r -l team=infra")))),Object(i.b)("h2",{id:"performance-features"},"Performance features"),Object(i.b)("p",null,"When exporting a large amount of environments, jsonnet evaluation can become a bottleneck. To speed up the process, Tanka provides a few optional features."),Object(i.b)("h3",{id:"partial-export-in-a-gitops-context"},"Partial export (in a GitOps context)"),Object(i.b)("p",null,"Given multiple environments, one may want to only export the environments that were modified since the last export. This is enabled by passing both the ",Object(i.b)("inlineCode",{parentName:"p"},"--merge-strategy=replace-envs")," flags."),Object(i.b)("p",null,"When these flags are passed, Tanka will:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Delete the manifests that were previously exported by the environments that are being exported. This is done by looking at the ",Object(i.b)("inlineCode",{parentName:"li"},"manifest.json")," file that is generated by Tanka when exporting. The related entries are also removed from the ",Object(i.b)("inlineCode",{parentName:"li"},"manifest.json")," file."),Object(i.b)("li",{parentName:"ol"},"Generate the manifests for the targeted environments into the output directory."),Object(i.b)("li",{parentName:"ol"},"Add in the new manifests entries into the ",Object(i.b)("inlineCode",{parentName:"li"},"manifest.json")," file and re-export it.")),Object(i.b)("h4",{id:"finding-out-which-environments-to-export"},"Finding out which environments to export"),Object(i.b)("p",null,"Tanka provides the ",Object(i.b)("inlineCode",{parentName:"p"},"tk tool importers")," command to figure out which ",Object(i.b)("inlineCode",{parentName:"p"},"main.jsonnet")," need to be re-exported based on what files were modified in a workspace."),Object(i.b)("p",null,"If, for example, the ",Object(i.b)("inlineCode",{parentName:"p"},"lib/my-lib/main.libsonnet")," file was modified, you could run the command like this to find which files to export:"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"console"},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},"# Find out which envs to re-export"),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},"$ tk tool importers lib/my-lib/main.libsonnet"),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},"my-repo-path/jsonnet/environments/my-env/main.jsonnet"),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"}),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},"# Re-export the envs"),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},"$ tk export myoutputdir my-repo-path/jsonnet/environments/my-env/main.jsonnet --merge-strategy=replace-envs"))),Object(i.b)("p",null,"Note that deleted environments need special consideration when doing this.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"tk tool importers")," utility only works with existing files so deleting an environment will result in stale ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.json")," entries and moving an environment will result in manifest conflicts.\nIn order to correctly handle deleted environments, they need to be passed to the export command:"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"console"},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},"$ tk export myoutputdir my-repo-path/jsonnet/environments/my-new-env-path/main.jsonnet --merge-strategy=replace-envs \\"),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},"  --merge-deleted-envs my-repo-path/jsonnet/environments/my-old-env-path/main.jsonnet \\"),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},"  --merge-deleted-envs my-repo-path/jsonnet/environments/other-deleted-env-path/main.jsonnet"))),Object(i.b)("h3",{id:"using-a-memory-ballast"},"Using a memory ballast"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Read ",Object(i.b)("a",{parentName:"em",href:"https://blog.twitch.tv/en/2019/04/10/go-memory-ballast-how-i-learnt-to-stop-worrying-and-love-the-heap/"},"this blog post")," for more information about memory ballasts.")),Object(i.b)("p",null,"For large environments that load lots of data into memory on evaluation, a memory ballast can dramatically improve performance. This feature is exposed through the ",Object(i.b)("inlineCode",{parentName:"p"},"--mem-ballast-size-bytes")," flag on the export command."),Object(i.b)("p",null,"Anecdotally (Grafana Labs), environments that took around a minute to load were able to load in around 45 secs with a ballast of 5GB (",Object(i.b)("inlineCode",{parentName:"p"},"--mem-ballast-size-bytes=5368709120"),"). Decreasing the ballast size resulted in negative impact on performance, and increasing it more did not result in any noticeable impact."),Object(i.b)("h3",{id:"caching"},"Caching"),Object(i.b)("p",null,"Tanka can also cache the results of the export. This is useful if you often export the same files and want to avoid recomputing them. The cache key is calculated from the main file and all of its transitive imports, so any change to any file possibly used in an environment will invalidate the cache."),Object(i.b)("p",null,"This is configured by two flags:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--cache-path"),": The local filesystem path where the cache will be stored. The cache is a flat directory of json files (one per environment)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--cache-envs"),": If exporting multiple environments, this flag can be used to specify, with regexes, which environments to cache. If not specified, all environments are cached.")),Object(i.b)("p",null,"Notes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Using the cache might be slower than evaluating jsonnet directy. It is only recommended for environments that are very CPU intensive to evaluate."),Object(i.b)("li",{parentName:"ul"},"To use object storage, you can point the ",Object(i.b)("inlineCode",{parentName:"li"},"--cache-path")," to a FUSE mount, such as ",Object(i.b)("a",{parentName:"li",href:"https://github.com/s3fs-fuse/s3fs-fuse"},Object(i.b)("inlineCode",{parentName:"a"},"s3fs")))),Object(i.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/exporting.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-exporting-md-c01a884402d114cb826a.js.map