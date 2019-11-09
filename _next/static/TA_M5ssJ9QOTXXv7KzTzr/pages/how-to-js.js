(window.webpackJsonp=window.webpackJsonp||[]).push([["d7ca"],{PImE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/how-to-js",function(){var e=n("PJfh");return{page:e.default||e}}])},PJfh:function(e,t,n){"use strict";n.r(t),n.d(t,"title",function(){return r}),n.d(t,"default",function(){return p});var o=n("z3IF"),c=n("2Fjn"),a=(n("mXGw"),n("SAVP")),l=n("SGno"),r="How to write JavaScript",b={title:r},i=l.a;function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)(i,Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This page is an assorted set of advice on how to write maintainable JavaScript,\nthough some of those can be applied to other programming languages as well."),Object(a.b)("h2",null,"Write boring code"),Object(a.b)("p",null,"It's that simple. Write boring code. Don't try to be smart, don't trade a bit of\nboilerplate for a tricky one-liner."),Object(a.b)("h3",null,"Example: for-of loop instead of map/filter/reduce"),Object(a.b)("p",null,"When you need transform an array it might be tempting to use a chain of calls to\n",Object(a.b)("inlineCode",{parentName:"p"},"map()"),", ",Object(a.b)("inlineCode",{parentName:"p"},"filter()"),", ",Object(a.b)("inlineCode",{parentName:"p"},"reduce()")," methods:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"let completed = items\n  .filter(item => item.status === 'accepted')\n  .reduce((acc, item) => acc + item.completed, 0);\n")),Object(a.b)("p",null,"Instead opt-out to use a simple ",Object(a.b)("inlineCode",{parentName:"p"},"for-of")," loop:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"let completed = 0;\nfor (let item of items) {\n  if (item.status === 'accepted') {\n    completed = completed + item.completed;\n  }\n}\n")),Object(a.b)("h2",null,"Do not use classes/this"),Object(a.b)("h2",null,"Use Flow or TypeScript"),Object(a.b)("h2",null,"Test your code"),Object(a.b)("h2",null,"Treat your tests like your code"),Object(a.b)("h2",null,"Test your interfaces, not implementations"),Object(a.b)("h2",null,"Organize code by domain, not by purpose"),Object(a.b)("p",null,"Bad:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"$ ls ./src\ncomponents\npages\nreducers\nactions\n")),Object(a.b)("p",null,"Good:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"$ ls ./src\nui\ntasks\nusers\n")))}p.isMDXComponent=!0}},[["PImE","5d41","9da1"]]]);