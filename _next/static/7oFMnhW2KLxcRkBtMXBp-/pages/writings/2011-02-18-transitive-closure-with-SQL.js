(window.webpackJsonp=window.webpackJsonp||[]).push([["fcf3"],{"5yzG":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/writings/2011-02-18-transitive-closure-with-SQL",function(){var e=t("NGm/");return{page:e.default||e}}])},"NGm/":function(e,n,t){"use strict";t.r(n),t.d(n,"title",function(){return a}),t.d(n,"default",function(){return s});var c=t("z3IF"),r=t("2Fjn"),o=(t("mXGw"),t("SAVP")),b=t("SGno"),a="Транзитивное замыкание в SQL",p={title:a},l=b.a;function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(l,Object(c.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Последнее время мне часто приходится заниматься обработкой данных, для этого я,\nв основном, использую замечательную БД PostgreSQL. Хочу поделиться решением\nодной из проблем, c которой мне недавно пришлось столкнуться -- нахождение\nтранзитивного замыкания некоторого отношения."),Object(o.b)("p",null,"Допустим у нас есть следующая табличка"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"postgres=# table rel;\n a | b \n---+---\n 1 | 2\n 2 | 3\n(2 rows)\n")),Object(o.b)("p",null,"и мы хотим получить её транзитивное замыкание, то есть добавить строчку ",Object(o.b)("inlineCode",{parentName:"p"},"(1,\n3)"),". Для этого в ",Object(o.b)("em",{parentName:"p"},"SQL2003")," существует ",Object(o.b)("em",{parentName:"p"},"recursive common table expressions"),",\nвот как это можно сделать с их помощью:"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"postgres=# with recursive c as (\n  select * from rel \n    union \n  select rel.a, c.b from rel join c on rel.b = c.a) table c;\n a | b \n---+---\n 1 | 2\n 2 | 3\n 1 | 3\n(3 rows)\n")),Object(o.b)("p",null,"просто и со вкусом!"))}s.isMDXComponent=!0}},[["5yzG","5d41","9da1"]]]);