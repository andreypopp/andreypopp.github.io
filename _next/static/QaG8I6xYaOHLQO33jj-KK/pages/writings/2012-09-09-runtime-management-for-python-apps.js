(window.webpackJsonp=window.webpackJsonp||[]).push([["c619"],{B2Wx:function(e,n,t){"use strict";t.r(n),t.d(n,"title",function(){return s}),t.d(n,"default",function(){return l});var o=t("z3IF"),a=t("2Fjn"),r=(t("mXGw"),t("SAVP")),c=t("SGno"),s="Runtime management for Python apps",i={title:s},p=c.a;function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)(p,Object(o.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Using Django or almost any other Python web framework you probably noticed there\nare some variables which are appeared to be global but really not — they are\ntied to current request being processed and using them you are effectively in\n"thread-safe" zone.'),Object(r.b)("p",null,"The well known example is how Django manages database connections — on each\nrequest there's new database connection opened and maintained during all the\nrequest processing phase; when request is processed, database connection is\nclosed. Note, that you don't get database connection as an argument to a view\nfunction — you just import model classes you want and get data from there.\nAnother thing to note is that using the same models other threads processing\nother requests will get their own database connections. That means such\nconnections are stored in a ",Object(r.b)("em",{parentName:"p"},"thread-local")," container."),Object(r.b)("p",null,'This approach to managing and exposing resources to client code is sometimes\ncriticized for being too error-prone and not too "clean" as opposed to just\npassing resources as function arguments but I like to think of it as of an yet\nanother compromise — you rarely want all your view functions to have an\nadditional argument for each of database connection, memcache connection,\ninitialized Facebook API wrapper and so on...'),Object(r.b)("p",null,"For that reason I extracted this pattern into reusable library called\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/andreypopp/runtime"}),"runtime"),". Most of the code is shamelessly borrowed from excellent\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://werkzeug.pocoo.org"}),"Werkzeug")," library."),Object(r.b)("p",null,"The usage is centered around a ",Object(r.b)("inlineCode",{parentName:"p"},"Context")," class:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"from runtime import Context\n")),Object(r.b)("p",null,"which works like a container for a set of related resources which should be\naccessible in some predefined scope."),Object(r.b)("p",null,"For web applications I usually like to have two different contexts (that means\ntwo different scopes) — one per-applicaiton and one per-request."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"app_ctx = Context('app')\nrequest_ctx = Context('request')\n")),Object(r.b)("p",null,"You can create proxies for resources which will be bound only in contexts'\nscopes"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"config = app_ctx.config # currently unbound\nrequest = request_ctx.request # currently unbound\n")),Object(r.b)("p",null,"That effectively means that ",Object(r.b)("inlineCode",{parentName:"p"},"config")," is defined in per-application and so we can\nhave two or more differently configured applications instances per process and\neach request processing phase will have ",Object(r.b)("inlineCode",{parentName:"p"},"request")," variable bound to current\nrequest which is being processed."),Object(r.b)("p",null,"Now, following the example with web applicaitons, there is a WSGI application\nwhich defines scopes for ",Object(r.b)("inlineCode",{parentName:"p"},"app_ctx")," and ",Object(r.b)("inlineCode",{parentName:"p"},"request_ctx")," contexts using\n",Object(r.b)("inlineCode",{parentName:"p"},"with"),"-statements"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"class App(object):\n\n    def __init__(self, config):\n        self.config = config\n\n    def __call__(self, environ, start_response):\n        with app_ctx(config=self.config):\n            request = Request(environ)\n            with request_ctx(request=request):\n                # call views\n")),Object(r.b)("p",null,"Now code which is called inside ",Object(r.b)("inlineCode",{parentName:"p"},"app_ctx")," and ",Object(r.b)("inlineCode",{parentName:"p"},"request_ctx")," contexts may access\nproxies defined with corresponding contexts which will be effectively bound to\nvalues passed to corresponding contexts."))}l.isMDXComponent=!0},b0CD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/writings/2012-09-09-runtime-management-for-python-apps",function(){var e=t("B2Wx");return{page:e.default||e}}])}},[["b0CD","5d41","9da1"]]]);