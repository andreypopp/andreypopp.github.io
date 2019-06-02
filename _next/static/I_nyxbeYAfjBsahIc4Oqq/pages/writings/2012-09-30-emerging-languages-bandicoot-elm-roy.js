(window.webpackJsonp=window.webpackJsonp||[]).push([["dfcf"],{Q9SR:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/writings/2012-09-30-emerging-languages-bandicoot-elm-roy",function(){var e=n("pOJS");return{page:e.default||e}}])},pOJS:function(e,t,n){"use strict";n.r(t),n.d(t,"title",function(){return s}),n.d(t,"default",function(){return p});var a=n("z3IF"),o=n("2Fjn"),i=(n("mXGw"),n("SAVP")),r=n("SGno"),s="Emerging Languages: Bandicoot, Roy and Elm",l={title:s},c=r.a;function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This year I've been attending ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://thestrangeloop.com"}),"Stangeloop")," conference along with Emerging\nLanguages Camp which was collocated to it. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://emerginglangs.com"}),"Emerging languages camp"),' is "an\nannual gathering of programming language innovators" and this is not about some\nexperimental academic things — all of the talks were about languages you can\nalready use to solve real-world problems.'),Object(i.b)("h2",null,"Bandicoot"),Object(i.b)("p",null,"One of the most interesting things there was ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://bandilab.org"}),"Bandicoot"),", a set-based\nprogramming language. The idea is to provide a language plus a runtime with a\npersistence mechanism which can facilitate managing and processing relational\ndata. Given that the obvious leader in this domain is SQL which was designed in\nlate 80s, I think there are a lot of possible areas of improvement."),Object(i.b)("p",null,"SQL isn't composable and so doesn't provide means to build reusable abstractions\nwhile it's quite good for writing ad-hoc queries — Bandicoot tries to improve\nthe situation by providing composable and consistent abstractions from the\nground up so you don't have to recourse to string concatenation then you want\njust to parametrize some query over relations you want to use in."),Object(i.b)("p",null,"In some sense Bandicoot can be seen as a more low-level language than SQL because\nthere's no query planner which builds execution plan for you and you have to do\nit by yourself using language constructs. This is more important for building\nreusable software because you can use provided runtime more efficiently though\nfor ad-hoc queries SQL's approach is still better, I think."),Object(i.b)("p",null,"Another interesting aspect is that Bandicoot uses HTTP protocol as an interface\n— ",Object(i.b)("inlineCode",{parentName:"p"},"GET")," requests for querying relations and ",Object(i.b)("inlineCode",{parentName:"p"},"POST")," requests to mutating them."),Object(i.b)("p",null,"Language feels pretty interesting but I'd rather like it to be implemented on\ntop of PostgreSQL which is now becomes a really huge ecosystem for data-driven\napplications."),Object(i.b)("h2",null,"Elm and Roy"),Object(i.b)("p",null,"Both languages are functional, statically typed (with type inference) and both\nare... using JavaScript as their platform. For those tired of ",Object(i.b)("em",{parentName:"p"},"undefined is not\na function")," these languages can provide an escape path towards better and\nstatically typed future."),Object(i.b)("p",null,"Judging from the talk ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://elm-lang.org"}),"Elm")," looks totally like Haskell dialect and it seems\nit targeted directly for writing apps with huge need for interactive graphics —\ngames for example."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://roy.brianmckenna.org"}),"Roy")," seems closer to development of traditional apps. Though it's also\nfunctional so there's paradigm gap for those started with\nJavaScript/CoffeeScript but I don't think that's a problem now when almost any\nnew language have some \"functional\" taste and almost any new library aims to\nbring \"functional\" features to a language."),Object(i.b)("p",null,"Type inference surely helps to avoid boilerplate by not writing type annotations\nto every declaration but what really helps is that Roy have ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Structural_type_system"}),Object(i.b)("em",{parentName:"a"},"structural\ntyping"))," for objects — that's the way to tell the compiler to infer not just\ntype declarations for given objects but also objects' types themselves based on\nhow you use objects in your functions."),Object(i.b)("p",null,"For example consider a basic function to sum complex numbers which are\nrepresented as objects"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"let sumComplex a b = {x: a.x + b.x, y: a.y + b.y}\n")),Object(i.b)("p",null,"In this case structural typing helps identify types of ",Object(i.b)("inlineCode",{parentName:"p"},"a")," and ",Object(i.b)("inlineCode",{parentName:"p"},"b")," not as just\narbitrary objects but as ",Object(i.b)("em",{parentName:"p"},"objects which have ",Object(i.b)("inlineCode",{parentName:"em"},"x")," and ",Object(i.b)("inlineCode",{parentName:"em"},"y")," properties which are\nnumbers")," by the way (because of ",Object(i.b)("inlineCode",{parentName:"p"},"+")," operator)."),Object(i.b)("p",null,"I'd love to play with Roy some more in the future."))}p.isMDXComponent=!0}},[["Q9SR","5d41","9da1"]]]);