(window.webpackJsonp=window.webpackJsonp||[]).push([["fca8"],{L0uA:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/writings/2012-09-02-docgen.mk",function(){var e=t("jFox");return{page:e.default||e}}])},jFox:function(e,n,t){"use strict";t.r(n),t.d(n,"title",function(){return r}),t.d(n,"default",function(){return s});var a=t("z3IF"),o=t("2Fjn"),i=(t("mXGw"),t("SAVP")),l=t("SGno"),r="docgen.mk",b={title:r},c=l.a;function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are a lot of static site generators out there and there is really no\nreason to write yet another one. But I did it — meet ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/andreypopp/docgen.mk"}),"docgen.mk"),"."),Object(i.b)("p",null,"Docgen.mk is designed to be a really simple piece of software — I will show a\nusage example on a real world case — this blog. You can find the full source\ncode in the GitHub ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/andreypopp/braintrace.ru"}),"repo")," by the way."),Object(i.b)("h2",null,"Layout"),Object(i.b)("p",null,"The thing you should start first is layout:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"braintrace.ru\n├── Makefile\n├── build\n├── docgen\n│   ├── bin\n│   ├── docgen.core.mk\n│   ├── docgen.jinja2.mk\n│   ├── docgen.markdown.mk\n│   ├── docgen.prelude.mk\n├── settings.yaml\n├── src\n│   ├── css\n│   ├── index.html.jinja2\n│   ├── posts\n│   ├── rss.xml.jinja2\n└── templates\n    ├── base.jinja2\n    └── post.jinja2\n")),Object(i.b)("p",null,"Here you can find:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Makefile")," — this is a description of the build process, don't worry you\ndon't need to write any complex Makefile stuff if you don't want to —\ndocgen.mk works almost out of the box there (see below).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"build")," — you build results will be store here, usually you want to ",Object(i.b)("inlineCode",{parentName:"p"},"rsync"),"\nthis directory to remote machine where you site hosted.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"docgen")," — cloned repo of docgen.mk.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"settings.yaml")," — YAML file with site metadata such as author, site name and\nso on (see below).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src")," — site sources, such as static pages, blog posts and static assets\n(css, javascript, images).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"templates")," — templates for pages, in this particular case I use\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://jinja2.pocoo.org"}),"Jinja2"),", but docgen.mk designed to be agnostic to that sort of things."))),Object(i.b)("h2",null,"Makefile"),Object(i.b)("p",null,"Now the main part of the process, the ",Object(i.b)("inlineCode",{parentName:"p"},"Makefile"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"# settings\nSRC         := src\nBUILD       := build\nBIN         := docgen/bin\nTEMPLATE_md := templates/post.jinja2\n\n# docgen\ninclude ./docgen/docgen.prelude.mk\ninclude ./docgen/docgen.markdown.mk\ninclude ./docgen/docgen.jinja2.mk\ninclude ./docgen/docgen.core.mk\n\n# helpers\npreview:\n  @(cd build; python -m SimpleHTTPServer)\n")),Object(i.b)("p",null,"You tell where your sources is and your results should be stored via ",Object(i.b)("inlineCode",{parentName:"p"},"SRC")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"BUILD")," variables and set where docgen binaries located via ",Object(i.b)("inlineCode",{parentName:"p"},"BIN"),". Ah, you also\nwould want to set ",Object(i.b)("inlineCode",{parentName:"p"},"TEMPLATE_md")," variable to template you want to use for\nrendered markdown files."),Object(i.b)("p",null,"Then you need to include ",Object(i.b)("inlineCode",{parentName:"p"},"docgen.mk")," macros — in this case I use Jinja2\ntemplates for pages and markdown for blog posts so I've included\n",Object(i.b)("inlineCode",{parentName:"p"},"docgen.jinja2.mk")," and ",Object(i.b)("inlineCode",{parentName:"p"},"docgen.markdown.mk")," plugins besides required\n",Object(i.b)("inlineCode",{parentName:"p"},"docgen.prelude.mk")," (this one is required to be included first) and\n",Object(i.b)("inlineCode",{parentName:"p"},"docgen.core.mk")," (this one is required to be included last)."),Object(i.b)("h2",null,"Building site"),Object(i.b)("p",null,"That's basically all you need to generate your site from sources, just issue\n",Object(i.b)("inlineCode",{parentName:"p"},"make")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"% make\n")),Object(i.b)("p",null,"and your built site stored in ",Object(i.b)("inlineCode",{parentName:"p"},"build")," directory!"),Object(i.b)("h2",null,"How it works"),Object(i.b)("p",null,"By default, with only ",Object(i.b)("inlineCode",{parentName:"p"},"docgen.prelude.mk")," and ",Object(i.b)("inlineCode",{parentName:"p"},"docgen.core.mk")," included, it just\ncopies files from ",Object(i.b)("inlineCode",{parentName:"p"},"src")," to ",Object(i.b)("inlineCode",{parentName:"p"},"build")," dir — this works well for css, images and\nother static assets but not for pages you want to apply to templates or blog\nposts stored in markdown."),Object(i.b)("p",null,"When you include ",Object(i.b)("inlineCode",{parentName:"p"},"docgen.jinja2.mk")," macros it instructs docgen to process files\nending with ",Object(i.b)("inlineCode",{parentName:"p"},".jinja2")," suffix differently — by rendering them using Jinja2\ntemplating engine — the result then stored inside ",Object(i.b)("inlineCode",{parentName:"p"},"build")," directory with dropped\nsuffix so ",Object(i.b)("inlineCode",{parentName:"p"},"src/index.html.jinja2")," becomes ",Object(i.b)("inlineCode",{parentName:"p"},"build/index.html")," and so on. Other\nplugins like ",Object(i.b)("inlineCode",{parentName:"p"},"docgen.markdown.mk")," work effectively the same."),Object(i.b)("h2",null,"Metadata extraction"),Object(i.b)("p",null,"Sometimes you need to render pages which should be aware of all blog posts\nfound in your blog or something like that — ",Object(i.b)("em",{parentName:"p"},"a list of recent blog posts"),", ",Object(i.b)("em",{parentName:"p"},"a\ngallery of all your photos uploaded"),". For that reason plugins are allowed to\nhave an additional build phase for ",Object(i.b)("em",{parentName:"p"},"metadata extraction"),"."),Object(i.b)("p",null,"For example ",Object(i.b)("inlineCode",{parentName:"p"},"docgen.markdown.mk")," allows ",Object(i.b)("inlineCode",{parentName:"p"},"*.md")," files to have YAML document as a\nheader (separated by empty line from document itself):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"title: A blog post\ntags: blog, post\npublished: 2027/09/01\n\nHello, this is a blog post...\n")),Object(i.b)("p",null,"During ",Object(i.b)("em",{parentName:"p"},"metadata extraction"),' phase only those YAML "headers" are processed and\naggregated into single file ',Object(i.b)("inlineCode",{parentName:"p"},"build/.metadata.yaml")," which then can be used by\nJinja2 templates or by other plugins."),Object(i.b)("h2",null,"Parallelism"),Object(i.b)("p",null,"And yes — as a free bonus for using ",Object(i.b)("inlineCode",{parentName:"p"},"make")," you get a parallel builds our of the\nbox:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"% make -j16\n")),Object(i.b)("p",null,"will build your site forking 16 processes in parallel ;-)."))}s.isMDXComponent=!0}},[["L0uA","5d41","9da1"]]]);