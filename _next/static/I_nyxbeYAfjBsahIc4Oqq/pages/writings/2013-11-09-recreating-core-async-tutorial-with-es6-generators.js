(window.webpackJsonp=window.webpackJsonp||[]).push([["6ca2"],{"93Ty":function(e,n,t){"use strict";t.r(n),t.d(n,"title",function(){return l}),t.d(n,"default",function(){return b});var a=t("z3IF"),r=t("2Fjn"),i=(t("mXGw"),t("SAVP")),o=t("SGno"),l="Recreating core.async tutorial with ES6 generators",c={title:l},s=o.a;function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/swannodette"}),"David Nolen")," publishes excellent ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/clojure/clojurescript"}),"ClojureScript")," tutorials on his\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://swannodette.github.io/"}),"blog"),"."),Object(i.b)("p",null,"ClojureScript is a Clojure compiler which targets JavaScript runtimes and thus\nallows running Clojure code in a browser. One of its main selling points is\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://clojure.github.io/core.async/"}),"core.async")," library which hugely simplifies working with async operations."),Object(i.b)("p",null,"The last published tutorial by David named ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://swannodette.github.io/2013/11/07/clojurescript-101/"}),'"ClojureScript 101"')," is about how\nto use core.async to make a little web app to search Wikipedia."),Object(i.b)("p",null,"Use of core.async makes working with async values and operations (events and XHR\ncalls) a joy — clean code and no callback spaghettis."),Object(i.b)("p",null,"In this blog post I'll try to replicate the tutorial by using pure JavaScript\nwith ES6 generators instead."),Object(i.b)("p",null,"While ES6 generators are not yet available in browsers we are going to use\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/regenerator/"}),"regenerator")," transpiler developed by Facebook. It transforms each generator\nfound in the source code into a  state machine while preserving the semantics of\nthe former."),Object(i.b)("p",null,"So let's start with creating an ",Object(i.b)("inlineCode",{parentName:"p"},"index.html")," HTML page which will host our application:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<!doctype html>\n<input id="query" type="text"></input>\n<button id="search">Search</button>\n<div id="results"></div>\n<script src="bundle.js"><\/script>\n')),Object(i.b)("p",null,"As you can see, the app is going to be pretty simple — when user clicks on a\nbutton with the ",Object(i.b)("inlineCode",{parentName:"p"},"search")," id, app reads current query from the ",Object(i.b)("inlineCode",{parentName:"p"},"query")," input, calls\nWikipedia API and renders results in to the ",Object(i.b)("inlineCode",{parentName:"p"},"results")," container."),Object(i.b)("h2",null,"Initial setup"),Object(i.b)("p",null,"While ClojureScript makes entire Google Closure library available for use in\nyour application, we are going to use some libraries from npm instead."),Object(i.b)("p",null,"The obvious way to use npm packages to develop a browser app is to use\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://browserify.org"}),"browserify"),". We also need a browserify transform which would process our\nsources through regenerator transpiler. Such transform is called\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/amiorin/regeneratorify"}),"regeneratorify")," and could be also installed through npm:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"% npm install browserify regeneratorify\n")),Object(i.b)("p",null,"We are going to put our code in ",Object(i.b)("inlineCode",{parentName:"p"},"index.js")," file and have it compiled with\nbrowserify into ",Object(i.b)("inlineCode",{parentName:"p"},"bundle.js")," which will be picked up ",Object(i.b)("inlineCode",{parentName:"p"},"index.html")," page."),Object(i.b)("p",null,"To bundle our code you run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"% ./node_modules/.bin/browserify -t regeneratorify ./index.js > bundle.js\n")),Object(i.b)("p",null,"Instead of running this command manually every time we change some code, let's\nwrite a simple Makefile instead:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"watch:\n  watch -n0.5 $(MAKE) bundle.js\n\nbundle.js: index.js\n  ./node_modules/.bin/browserify -t regeneratorify $< > $@\n")),Object(i.b)("p",null,"This just tells that ",Object(i.b)("inlineCode",{parentName:"p"},"bundle.js")," depends on ",Object(i.b)("inlineCode",{parentName:"p"},"index.js")," (it allow ",Object(i.b)("inlineCode",{parentName:"p"},"make")," to know\nthat we should rebuild ",Object(i.b)("inlineCode",{parentName:"p"},"bundle.js")," only if ",Object(i.b)("inlineCode",{parentName:"p"},"index.js")," was modified by comparing\nmtimes of both)."),Object(i.b)("p",null,"Now just open ",Object(i.b)("inlineCode",{parentName:"p"},"index.html")," in a browser, run"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"% make watch\n")),Object(i.b)("p",null,"forget about it — ",Object(i.b)("inlineCode",{parentName:"p"},"bundle.js")," will always contain the latest version of code."),Object(i.b)("p",null,"It it doesn't work, you probably doesn't have ",Object(i.b)("inlineCode",{parentName:"p"},"watch")," utility installed, install\nit via ",Object(i.b)("inlineCode",{parentName:"p"},"brew install watch")," if you are running Mac OS X. I think most Linux\ndistributions have this utility installed out of the box, if not, consult your\npackage manager."),Object(i.b)("h2",null,"Events as infinite generators"),Object(i.b)("p",null,"We are going to listen for events in an unusual way."),Object(i.b)("p",null,"We create a generator function which would create for us infinite generators of\nevents of type ",Object(i.b)("inlineCode",{parentName:"p"},"evType")," occurred on DOM element ",Object(i.b)("inlineCode",{parentName:"p"},"el"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"function *listen(el, evType) {\n  while (true)\n    yield function(cb) {\n      var fire = function(ev) {\n        el.removeEventListener(evType, fire);\n        cb(null, ev);\n      }\n      el.addEventListener(evType, fire);\n    }\n}\n")),Object(i.b)("p",null,"Note that created generators will yield functions which take a single ",Object(i.b)("inlineCode",{parentName:"p"},"cb"),"\n(callback) argument. We call such functions continuables, they represent some\nvalue which will be available in the future."),Object(i.b)("p",null,"We need a special way to run such generators, let's talk shortly about that."),Object(i.b)("p",null,"Note also that we're using the ",Object(i.b)("inlineCode",{parentName:"p"},"while(true)")," loop. This won't cause any\ndifficulties for us like hogging our CPU on meaningless computations. Generators\nsuspend on ",Object(i.b)("inlineCode",{parentName:"p"},"yield")," and the way we are going to run them does guarantee that we\nwill resume a generator only when its consumer is ready to handle another event."),Object(i.b)("p",null,"For running async generators there's excellent ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Raynos/gens"}),"gens")," library which supports\nthe notion of continuables out of the box. Install it via npm:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"% npm install gens\n")),Object(i.b)("p",null,"Let's do some demo code which will consume ",Object(i.b)("inlineCode",{parentName:"p"},"click")," events from a generator\ncreated with ",Object(i.b)("inlineCode",{parentName:"p"},"listen")," and log them to browser's console:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"var gens = require('gens');\n\nfunction go(gen) {\n  gens(gen)(function(err) { if (err) throw err; });\n}\n\ngo(function*() {\n  var clicks = listen(document.getElementById('search'), 'click');\n\n  while (true) {\n    // wait for click event and log it\n    console.log(yield clicks.next().value);\n  }\n});\n")),Object(i.b)("p",null,"After refreshing page in the browser you should see ",Object(i.b)("inlineCode",{parentName:"p"},"MouseEvent"),"s logged in the\nconsole when clicking on the button."),Object(i.b)("h2",null,"Fetching search results"),Object(i.b)("p",null,"Now that we can listen for events let's write a final piece of code to search\nand render results."),Object(i.b)("p",null,"We are going to use ",Object(i.b)("inlineCode",{parentName:"p"},"jsonp")," library from npm to call Wikipedia API:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"% npm install jsonp\n")),Object(i.b)("p",null,"Now we write a ",Object(i.b)("inlineCode",{parentName:"p"},"fetch")," function which partially applies ",Object(i.b)("inlineCode",{parentName:"p"},"jsonp")," to search query\nand so returns a function which accepts just a single callback argument — that\nway we create continuables to use later with generators."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"var jsonp = require('jsonp');\n\nfunction fetch(url) {\n  return jsonp.bind(null, url);\n}\n")),Object(i.b)("p",null,"We also need a function to render an array of results into DOM:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"function render(el, items) {\n  var items = items.map(function(item) {\n    return '<li>' + item + '</li>';\n  });\n  el.innerHTML = '<ul>' + items.join('');  + '</ul>';\n}\n")),Object(i.b)("p",null,"For this tutorial we just stick with basic ",Object(i.b)("inlineCode",{parentName:"p"},"innerHTML")," manipulation and string\nconcatenation.  For the real application I recommend using excellent ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://reactjs.org"}),"React"),"\nlibrary, also developed by Facebook."),Object(i.b)("p",null,"Now the final part is just to glue these functions inside the ",Object(i.b)("inlineCode",{parentName:"p"},"go")," block we\nwrote earlier:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"go(function*() {\n  var results = document.getElementById('results');\n  var query = document.getElementById('query');\n  var clicks = listen(document.getElementById('search'), 'click');\n\n  while (true) {\n    yield clicks.next().value; // wait for 'click' event\n\n    var url = 'http://en.wikipedia.org/w/api.php' +\n      '?action=opensearch&format=json&search=' +\n      encodeURIComponent(query.value);\n\n    var data = yield fetch(url);\n    render(results, data[1]);\n  }\n});\n")),Object(i.b)("p",null,"That's all! Refresh the page in the browser, enter some query into the input\nelement and click on the button — after some time (needed to call Wikipedia\nAPI) results will appear on the page."),Object(i.b)("p",null,"Note that we didn't use any callbacks to specify the behaviour of our\napplication. Furthermore, I believe, this approach scales well on more complex\napps."),Object(i.b)("h2",null,"Complete code"),Object(i.b)("p",null,"The complete code listing which is also available as a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/andreypopp/7385755"}),"gist"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"var jsonp = require('jsonp');\nvar gens = require('gens');\n\nfunction *listen(el, evType) {\n  while (true)\n    yield function(cb) {\n      var fire = function(ev) {\n        el.removeEventListener(evType, fire);\n        cb(null, ev);\n      }\n      el.addEventListener(evType, fire);\n    }\n}\n\nfunction fetch(url) {\n  return jsonp.bind(null, url);\n}\n\nfunction render(el, items) {\n  var items = items.map(function(item) {\n    return '<li>' + item + '</li>';\n  });\n  el.innerHTML = '<ul>' + items.join('');  + '</ul>';\n}\n\nfunction go(gen) {\n  gens(gen)(function(err) { if (err) throw err; });\n}\n\ngo(function*() {\n  var results = document.getElementById('results');\n  var query = document.getElementById('query');\n  var clicks = listen(document.getElementById('search'), 'click');\n\n  while (true) {\n    yield clicks.next().value; // wait for 'click' event\n\n    var url = 'http://en.wikipedia.org/w/api.php' +\n      '?action=opensearch&format=json&search=' +\n      encodeURIComponent(query.value);\n\n    var data = yield fetch(url);\n    render(results, data[1]);\n  }\n});\n")),Object(i.b)("p",null,"It's even comparable in LOC to the original core.async tutorial code, which is\nsurprising, given the expressiveness of Clojure."))}b.isMDXComponent=!0},N7p4:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/writings/2013-11-09-recreating-core-async-tutorial-with-es6-generators",function(){var e=t("93Ty");return{page:e.default||e}}])}},[["N7p4","5d41","9da1"]]]);