(window.webpackJsonp=window.webpackJsonp||[]).push([["ecf3"],{"WJH+":function(e,n,t){"use strict";t.r(n),t.d(n,"title",function(){return b}),t.d(n,"default",function(){return s});var a=t("z3IF"),o=t("2Fjn"),i=(t("mXGw"),t("SAVP")),r=t("SGno"),b="Open source goodies for Backbone",c={title:b},l=r.a;function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(l,Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Recently I've released a few small modules for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://backbonejs.org"}),"Backbone"),". Basically these are\npatterns I found I use often while developing JavaScript applications."),Object(i.b)("h2",null,"Backbone.Module"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/andreypopp/backbone.module"}),"Backbone.Module")," is a rip off from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://spinejs.com"}),"Spine.Module"),". It exports a single\nbase class ",Object(i.b)("inlineCode",{parentName:"p"},"Module")," with ",Object(i.b)("inlineCode",{parentName:"p"},"@extend")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@include")," constructor methods which\nprovide a way to mixin some object properties into constructor and prototype\ncorrespondingly."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"{Module} = require 'backbone.module'\n\nclass MyClass extends Module\n  @extend ConstructorMethods\n  @include Methods\n")),Object(i.b)("p",null,"It also automatically mixins ",Object(i.b)("inlineCode",{parentName:"p"},"Module")," methods into ",Object(i.b)("inlineCode",{parentName:"p"},"Backbone.View"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"Backbone.Router"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Backbone.Model")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Backbone.Collection")," constructors so\nyou can use ",Object(i.b)("inlineCode",{parentName:"p"},"@extend")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@include")," with those classes' subclasses as well."),Object(i.b)("p",null,"I found this pattern useful cause it allows to define a class as a set of\ndifferent and orthogonal tiny behaviours."),Object(i.b)("h2",null,"Backbone.Record"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/andreypopp/backbone.record"}),"Backbone.Record")," provides a single class ",Object(i.b)("inlineCode",{parentName:"p"},"Backbone.Record")," which is a little\nsubclass of ",Object(i.b)("inlineCode",{parentName:"p"},"Backbone.Model")," with a constructor method ",Object(i.b)("inlineCode",{parentName:"p"},"@define")," for specifiying\nfield names a model can store."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Record = require 'backbone.record'\n\nclass User extends Record\n  @define 'username', 'email', 'birthday'\n")),Object(i.b)("p",null,"That way class ",Object(i.b)("inlineCode",{parentName:"p"},"User")," will have properties ",Object(i.b)("inlineCode",{parentName:"p"},"username"),", ",Object(i.b)("inlineCode",{parentName:"p"},"email")," and ",Object(i.b)("inlineCode",{parentName:"p"},"birthday"),"\ngenerated automatically which allows to use standard syntax for getting and\nsetting data with model instances instead of using cubersome ",Object(i.b)("inlineCode",{parentName:"p"},".get()")," and\n",Object(i.b)("inlineCode",{parentName:"p"},".set()")," methods."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"user = new User()\n\n# fires 'change:username' as if\n# I used user.set('username', 'andreypopp')\nuser.username = 'andreypopp'\n\nconsole.log(user.usernmae) # prints 'andreypopp' to console\n")),Object(i.b)("p",null,"Note that you can only assign those fields to model which were defined via\n",Object(i.b)("inlineCode",{parentName:"p"},"@define")," call, otherwise an ",Object(i.b)("inlineCode",{parentName:"p"},"Error")," would be trhown."),Object(i.b)("p",null,"Under the hood ",Object(i.b)("inlineCode",{parentName:"p"},"@define")," calls ",Object(i.b)("inlineCode",{parentName:"p"},"Object.defineProperty")," on a model class so this\nworks only with modern browsers (means doesn't work in IE < 9)."),Object(i.b)("h2",null,"Backbone.ViewEvents"),Object(i.b)("p",null,"The last one in today's open source batch is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/andreypopp/backbone.viewevents"}),"Backbone.ViewEvents"),", an alternative\nevents implementation for ",Object(i.b)("inlineCode",{parentName:"p"},"Backbone.View")," which allows events to bubble up\nthrough a view hierarchy."),Object(i.b)("p",null,"The basic example is"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"{View} = require 'backbone.viewevents'\n\nparent = new View().render()\nchild = new View().render()\n\nparent.$el.append(child.$el)\n\n# register listener on parent\nparent.on 'someevent', (msg) ->\n  console.log('caught!', msg)\n\n# trigger event on child\nchild.trigger('someevent', 'hello')\n")),Object(i.b)("p",null,"As you see there is no need to manually maintain view hierarchy. It is inferred\nfrom views' position in the DOM — that way ",Object(i.b)("inlineCode",{parentName:"p"},"child")," automatically becomes a child\nof ",Object(i.b)("inlineCode",{parentName:"p"},"parent")," because it is attached down the DOM tree of ",Object(i.b)("inlineCode",{parentName:"p"},"parent"),"'s element."),Object(i.b)("p",null,"This is implemented through the usage of custom DOM events, so ",Object(i.b)("inlineCode",{parentName:"p"},".trigger()")," and\n",Object(i.b)("inlineCode",{parentName:"p"},".on()")," methods actually use view's ",Object(i.b)("inlineCode",{parentName:"p"},"el")," DOM element to trigger and listen for\nevents. This allows to effectively re-use DOM events implementation for bubbling\nevents up through the DOM tree reaching parent views."),Object(i.b)("p",null,"Views bubbling events is a very useful feature for me — it allows to write views\nwhich don't hold references to its parents and still able to notify them. That\nway entire view hierarchy can be seen (of course to some extent) as a Shadow DOM\nwhich composed of high-level view objects instead of low-level presentation\ndetails."),Object(i.b)("h2",null,"Try it"),Object(i.b)("p",null,"All modules are installable via ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://twitter.github.com/bower/"}),"Bower")," client-side package manager:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"bower install backbone.module backbone.record backbone.viewevents\n")),Object(i.b)("p",null,"You can use them with a CommonJS (think ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://browserify.org"}),"Browserify"),") or an AMD loader (like\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://requirejs.org"}),"RequireJS"),"). They also export objects to browser globals (under the\n",Object(i.b)("inlineCode",{parentName:"p"},"Backbone")," namespace, see each module for details)."))}s.isMDXComponent=!0},bnh9:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/writings/2012-02-02-open-source-goodies-for-backbone",function(){var e=t("WJH+");return{page:e.default||e}}])}},[["bnh9","5d41","9da1"]]]);