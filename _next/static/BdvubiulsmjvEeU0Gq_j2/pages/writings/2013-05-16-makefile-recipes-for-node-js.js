(window.webpackJsonp=window.webpackJsonp||[]).push([["50eb"],{"I/Hb":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/writings/2013-05-16-makefile-recipes-for-node-js",function(){var e=t("aFz3");return{page:e.default||e}}])},aFz3:function(e,n,t){"use strict";t.r(n),t.d(n,"title",function(){return o}),t.d(n,"default",function(){return c});var a=t("z3IF"),i=t("2Fjn"),l=(t("mXGw"),t("SAVP")),r=t("SGno"),o="Makefile recipes for Node.js packages",b={title:o},p=r.a;function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)(p,Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"When you write code for Node.js you certainly will have a couple of things in\nyour build-test-release cycle to automate. I use ",Object(l.b)("inlineCode",{parentName:"p"},"make")," utility for that, mainly\nbecause it is simple and concise."),Object(l.b)("p",null,"To start using ",Object(l.b)("inlineCode",{parentName:"p"},"make")," you should create a ",Object(l.b)("inlineCode",{parentName:"p"},"Makefile")," file in your project root\ndirectory. ",Object(l.b)("inlineCode",{parentName:"p"},"Makefile")," contains variable and tasks declarations (below I'll give\nthe examples). To perform some task you just call ",Object(l.b)("inlineCode",{parentName:"p"},"make <task name>")," from a\ncommand line. Easy!"),Object(l.b)("p",null,"Below is my generic ",Object(l.b)("inlineCode",{parentName:"p"},"Makefile")," from which I usually start a new Node.js or\nBrowserify project. I'll go step by step through it."),Object(l.b)("p",null,"First thing is to define some useful variables: I store sources in ",Object(l.b)("inlineCode",{parentName:"p"},"src")," and\ncompiled code in ",Object(l.b)("inlineCode",{parentName:"p"},"lib")," (yes, I use CoffeeScript but feel free to customize\ntemplate to any language you like)."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"BIN = ./node_modules/.bin\nSRC = $(wildcard src/*.coffee)\nLIB = $(SRC:src/%.coffee=lib/%.js)\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"SRC")," will contain a list of ",Object(l.b)("inlineCode",{parentName:"p"},".coffee")," files in ",Object(l.b)("inlineCode",{parentName:"p"},"src")," directory and ",Object(l.b)("inlineCode",{parentName:"p"},"LIB")," — a\nlist of corresponding (but not-yet-existent) ",Object(l.b)("inlineCode",{parentName:"p"},".js")," files in ",Object(l.b)("inlineCode",{parentName:"p"},"lib")," directory — the\n",Object(l.b)("inlineCode",{parentName:"p"},"$(VAR:pattern1=pattern2)")," form  allows to specify a transformation on each item\nstored in a variable."),Object(l.b)("p",null,"So if we have ",Object(l.b)("inlineCode",{parentName:"p"},"src/index.coffee src/mod.coffee")," in filesystem then ",Object(l.b)("inlineCode",{parentName:"p"},"SRC")," will\ncapture them and ",Object(l.b)("inlineCode",{parentName:"p"},"LIB")," will contain ",Object(l.b)("inlineCode",{parentName:"p"},"lib/index.js lib/mod.js")," correspondingly."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"BIN")," points to a directory with executables of local Node modules installation."),Object(l.b)("h2",null,"Build"),Object(l.b)("p",null,"Now let's define our first task called ",Object(l.b)("inlineCode",{parentName:"p"},"build")," and state that it depends on all\nfiles stored in ",Object(l.b)("inlineCode",{parentName:"p"},"LIB")," variable."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"build: $(LIB)\n")),Object(l.b)("p",null,"Easy, right? ",Object(l.b)("inlineCode",{parentName:"p"},"$(LIB)")," syntax is just a way ",Object(l.b)("inlineCode",{parentName:"p"},"make")," dereferences variables."),Object(l.b)("p",null,"After running ",Object(l.b)("inlineCode",{parentName:"p"},"make build")," the utility will try to ensure all files in ",Object(l.b)("inlineCode",{parentName:"p"},"LIB")," are\nin place and up to date. But how we tell ",Object(l.b)("inlineCode",{parentName:"p"},"make")," on how to get all these files in\n",Object(l.b)("inlineCode",{parentName:"p"},"LIB")," from corresponding files in ",Object(l.b)("inlineCode",{parentName:"p"},"SRC"),"?"),Object(l.b)("p",null,"The next snippet defines a so called wildcard rule which is applicable to files\nmatched by a given pattern, in this case — ",Object(l.b)("inlineCode",{parentName:"p"},"lib/%.js")," — exactly this pattern\nwill match files in ",Object(l.b)("inlineCode",{parentName:"p"},"LIB")," variable."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"lib/%.js: src/%.coffee\n  @mkdir -p $(@D)\n  @$(BIN)/coffee -bcp $< > $@\n")),Object(l.b)("p",null,"This rule tells ",Object(l.b)("inlineCode",{parentName:"p"},"make")," that file ",Object(l.b)("inlineCode",{parentName:"p"},"lib/%.js")," depends on corresponding\n",Object(l.b)("inlineCode",{parentName:"p"},"src/%.coffee")," file and so ",Object(l.b)("inlineCode",{parentName:"p"},"make")," will rebuild the former file if the latter is\nchanged."),Object(l.b)("p",null,"How it works? First it creates a directory for a target file (",Object(l.b)("inlineCode",{parentName:"p"},"$(@D)")," denotes\nsuch directory, it is a ",Object(l.b)("inlineCode",{parentName:"p"},"make")," magic variable), then it calls CoffeeScript\ncompiler on corresponding ",Object(l.b)("inlineCode",{parentName:"p"},".coffee")," file denoted by ",Object(l.b)("inlineCode",{parentName:"p"},"$<")," which writes result\ninto target file denoted by ",Object(l.b)("inlineCode",{parentName:"p"},"$@"),"."),Object(l.b)("p",null,"Note the ",Object(l.b)("inlineCode",{parentName:"p"},"@"),"-prefixed lines — by default ",Object(l.b)("inlineCode",{parentName:"p"},"make")," prints all lines it executes,\nbut lines prefixed with ",Object(l.b)("inlineCode",{parentName:"p"},"@")," will not be printed."),Object(l.b)("p",null,"Enough for a build process — ",Object(l.b)("inlineCode",{parentName:"p"},"make build")," will rebuild all outdated (and only\nthose) files in ",Object(l.b)("inlineCode",{parentName:"p"},"lib")," directory from corresponding files in ",Object(l.b)("inlineCode",{parentName:"p"},"src")," directory."),Object(l.b)("h2",null,"Test"),Object(l.b)("p",null,"Test ",Object(l.b)("inlineCode",{parentName:"p"},"task")," is very easy"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"test: build\n  @$(BIN)/mocha -b specs\n")),Object(l.b)("p",null,"We just specify that ",Object(l.b)("inlineCode",{parentName:"p"},"test")," depends on ",Object(l.b)("inlineCode",{parentName:"p"},"build")," — we want to run tests on fresh\ncode — and run our test runner of choice, ",Object(l.b)("inlineCode",{parentName:"p"},"mocha")," in this case."),Object(l.b)("h2",null,"Auxiliary tasks"),Object(l.b)("p",null,"Next go auxiliary tasks — ",Object(l.b)("inlineCode",{parentName:"p"},"clean")," which removes all compiled code:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"clean:\n  @rm -f $(LIB)\n")),Object(l.b)("p",null,"and ",Object(l.b)("inlineCode",{parentName:"p"},"install")," and ",Object(l.b)("inlineCode",{parentName:"p"},"link")," tasks which simply run corresponding subcommand of\n",Object(l.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"install link:\n  @npm $@\n")),Object(l.b)("p",null,"Note the trick with ",Object(l.b)("inlineCode",{parentName:"p"},"$@")," variable and how it allows use propagate task name into\na subcommand of ",Object(l.b)("inlineCode",{parentName:"p"},"npm"),"."),Object(l.b)("h2",null,"Releases"),Object(l.b)("p",null,"Next thing is releases."),Object(l.b)("p",null,"The following snippet may seem a bit magical but actually it's really simple.\nIt defines a parametrized macro for doing patch, minor and major releases and it\nis used by tasks below."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'define release\n  VERSION=`node -pe "require(\'./package.json\').version"` && \\\n  NEXT_VERSION=`node -pe "require(\'semver\').inc(\\"$$VERSION\\", \'$(1)\')"` && \\\n  node -e "\\\n    var j = require(\'./package.json\');\\\n    j.version = \\"$$NEXT_VERSION\\";\\\n    var s = JSON.stringify(j, null, 2);\\\n    require(\'fs\').writeFileSync(\'./package.json\', s);" && \\\n  git commit -m "release $$NEXT_VERSION" -- package.json && \\\n  git tag "$$NEXT_VERSION" -m "release $$NEXT_VERSION"\nendef\n')),Object(l.b)("p",null,"In short, it rewrites ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," with a new incremented version (which part\nof version is incremented is defined via ",Object(l.b)("inlineCode",{parentName:"p"},"$1")," variable which is a macro\nparameter) then it creates a corresponding git commit and a git tag."),Object(l.b)("p",null,"Next up just call a ",Object(l.b)("inlineCode",{parentName:"p"},"release")," macro with ",Object(l.b)("inlineCode",{parentName:"p"},"patch"),", ",Object(l.b)("inlineCode",{parentName:"p"},"minor")," and ",Object(l.b)("inlineCode",{parentName:"p"},"major")," parameters\nto create correspondingly ",Object(l.b)("inlineCode",{parentName:"p"},"release-patch"),", ",Object(l.b)("inlineCode",{parentName:"p"},"release-minor")," and ",Object(l.b)("inlineCode",{parentName:"p"},"release-major"),"\ntasks which in turn depend on ",Object(l.b)("inlineCode",{parentName:"p"},"build")," and ",Object(l.b)("inlineCode",{parentName:"p"},"test")," tasks. That way we cannot make\nreleases if we fail on build or test phases."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"release-patch: build test\n  @$(call release,patch)\n\nrelease-minor: build test\n  @$(call release,minor)\n\nrelease-major: build test\n  @$(call release,major)\n")),Object(l.b)("p",null,"The final point is a ",Object(l.b)("inlineCode",{parentName:"p"},"publish")," task which just pushes commits into a repo and\npublish package on npm."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"publish:\n  git push --tags origin HEAD:master\n  npm publish\n")),Object(l.b)("p",null,"Now to make a new minor release you just need to execute ",Object(l.b)("inlineCode",{parentName:"p"},"make release-minor\npublish")," from a command line — minor version in ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," will be\nincremented, new commit and tag will be created and pushed into a repo and,\nfinally, package will be published on npm."),Object(l.b)("p",null,"The entire ",Object(l.b)("inlineCode",{parentName:"p"},"Makefile")," is available ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/5588256"}),"here"),"."))}c.isMDXComponent=!0}},[["I/Hb","5d41","9da1"]]]);