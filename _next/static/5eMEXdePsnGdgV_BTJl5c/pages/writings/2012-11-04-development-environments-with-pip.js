(window.webpackJsonp=window.webpackJsonp||[]).push([["ba59"],{O8KF:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/writings/2012-11-04-development-environments-with-pip",function(){var e=t("wuM0");return{page:e.default||e}}])},wuM0:function(e,n,t){"use strict";t.r(n),t.d(n,"title",function(){return l}),t.d(n,"default",function(){return c});var i=t("z3IF"),o=t("2Fjn"),r=(t("mXGw"),t("SAVP")),a=t("SGno"),l="Development environments with pip",p={title:l},s=a.a;function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)(s,Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There's a way to get development environments for Python projects up and running\nvery quickly — just include this piece of code into your project's ",Object(r.b)("inlineCode",{parentName:"p"},"Makefile"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"SDIST_CACHE=lib\n\nrequirements.txt: requirements.src.txt\n  pip install \\\n    --no-install \\\n    --download-dir $(SDIST_CACHE) \\\n    -r $<\n  find $(SDIST_CACHE) -type file > $@\n\nrequirements: requirements.txt\n  pip install \\\n    --no-index \\\n    --no-deps \\\n    --find-links $(SDIST_CACHE) \\\n    -r $<\n")),Object(r.b)("p",null,"and then use ",Object(r.b)("inlineCode",{parentName:"p"},"requirements.src.txt")," to specify dependencies for your project.\nAfter changing it you should run ",Object(r.b)("inlineCode",{parentName:"p"},"make requirements.txt")," to download all source\ntarballs into ",Object(r.b)("inlineCode",{parentName:"p"},"lib")," directory and regenerate ",Object(r.b)("inlineCode",{parentName:"p"},"requirements.txt")," to list all\ntarballs inside ",Object(r.b)("inlineCode",{parentName:"p"},"lib"),"."),Object(r.b)("p",null,"You would want to commit ",Object(r.b)("inlineCode",{parentName:"p"},"lib")," directory into your VCS repo — that way you guard\nyourself and other developers against unavailable package indexes and/or\ndownload locations and also provide more faster bootstrapping process."),Object(r.b)("p",null,"Basically, running ",Object(r.b)("inlineCode",{parentName:"p"},"make requirements")," would install all packages inside ",Object(r.b)("inlineCode",{parentName:"p"},"lib"),"\nwithout touching network."),Object(r.b)("p",null,"P.S. This still requires from us to build dependencies from sources (when\nneeded), the other way is to cache binary packages, but pip currently lacks that\nfeature — I hope ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://pypi.python.org/pypi/wheel"}),"wheel")," would help us regarding this in the future."),Object(r.b)("p",null,"P.P.S. Know any other way to do this more effectively? Please share in comments!"))}c.isMDXComponent=!0}},[["O8KF","5d41","9da1"]]]);