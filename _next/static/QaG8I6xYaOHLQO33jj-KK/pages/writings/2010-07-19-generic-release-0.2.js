(window.webpackJsonp=window.webpackJsonp||[]).push([["bf89"],{"/dDa":function(e,n,t){"use strict";t.r(n),t.d(n,"title",function(){return c}),t.d(n,"default",function(){return l});var a=t("z3IF"),r=t("2Fjn"),p=(t("mXGw"),t("SAVP")),o=t("SGno"),c="Generic 0.2",b={title:c},i=o.a;function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(p.b)(i,Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Выпустил версию ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"http://pypi.python.org/pypi/generic/0.2"}),"0.2")," библиотеки ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/andreypopp/generic"}),"generic"),"."),Object(p.b)("p",null,"Во-первых, написал хоть какую-то ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"http://packages.python.org/generic"}),"документацию")," по библиотеке."),Object(p.b)("p",null,"Во-вторых, теперь появилась возможность создавать методы с\nмультидиспетчеризацией. Об этом чуточку подробнее."),Object(p.b)("p",null,"Методы с мультидиспетчеризацией мало отличаются от функций с оной, о которых я\nуже рассказывал в предыдущем ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"http://braintrace.ru/posts/2010-07-16-generic-multidispatching.html"}),"посте"),". Самое главное и единственное\nразличие между ними -- неявная диспетчеризация последних по типу (классу)\nметода."),Object(p.b)("p",null,"Продемонстрирую это на следующем примере:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),'from generic.multidispatch import multimethod\nfrom generic.multidispatch import has_multimethods\n\n@has_multimethods\nclass A(object):\n    \n    @multimethod(int)\n    def foo(self, x):\n        return x + 1\n\n@has_multimethods\nclass B(A):\n\n    @A.foo.when(str)\n    def foo(self, x):\n        return x + "1"\n\nA().foo(1)      # 2\nA().foo("str")  # raises TypeError\nB().foo(1)      # 2\nB().foo("str")  # "str1"\n')),Object(p.b)("p",null,"Что из этого следует:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"При наследовании, реализации мультиметодов также наследуются от базовых\nклассов -- ",Object(p.b)("inlineCode",{parentName:"p"},"B().foo(1)")," работает и возвращает ",Object(p.b)("inlineCode",{parentName:"p"},"2"),".")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Наследники базового класса могут расширять определения мультиметодов новыми\nреализациями -- ",Object(p.b)("inlineCode",{parentName:"p"},'B().foo("str")'),". При этом, эти реализации не будут\nдоступны в базовом классе -- вызывается ",Object(p.b)("inlineCode",{parentName:"p"},"TypeError"),"."))),Object(p.b)("p",null,"Последние утверждение и означает диспетчеризацию по классу метода. Кстати,\nименно поэтому необходим декоратор для класса ",Object(p.b)("inlineCode",{parentName:"p"},"has_multimethods")," -- во время\nдекларации метода сам класс ещё не сконструирован и нам нечего использовать для\nопределения мультиметода."))}l.isMDXComponent=!0},P3ua:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/writings/2010-07-19-generic-release-0.2",function(){var e=t("/dDa");return{page:e.default||e}}])}},[["P3ua","5d41","9da1"]]]);