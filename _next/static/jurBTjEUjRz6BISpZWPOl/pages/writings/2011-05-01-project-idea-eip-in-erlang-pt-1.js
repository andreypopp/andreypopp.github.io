(window.webpackJsonp=window.webpackJsonp||[]).push([["e7c9"],{Ah6Z:function(e,a,t){"use strict";t.r(a),t.d(a,"title",function(){return c}),t.d(a,"default",function(){return l});var n=t("z3IF"),s=t("2Fjn"),r=(t("mXGw"),t("SAVP")),i=t("SGno"),c="Implementation of EIP in Erlang, part 1: Idea",o={title:c},p=i.a;function l(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(r.b)(p,Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The idea of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.eaipatterns.com/"}),"EIP")," (enterprise integration patterns) is pretty simple and\nuseful — it's just a list of recipes and common behaviours for messaging with a\nstrong bias towards integration needs."),Object(r.b)("p",null,"There're primitive patterns (they act as building blocks), some of them are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Exchange")," — encapsulates a single piece of communication, it can has\nsynchronous or asynchronous semantics.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Message")," — a piece of data which represents some event or command.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Channel")," — a route for ",Object(r.b)("em",{parentName:"p"},"exchanges"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Message processor")," — its name says all about what it does.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Filter")," — filters messages by some predicate."))),Object(r.b)("p",null,"Some more complex ones are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Message router")," — routes different messages to different channels.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Aggregator")," — aggregates a some (defined via predicate) set of messages\nand processes it as a single message.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Recipient list")," — provides multicast mechanism."))),Object(r.b)("p",null,"If you're interested in full list of patterns, please see EIP ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.eaipatterns.com/toc.html"}),"reference")," or\nread the dedicated ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.amazon.com/dp/0321200683"}),"book")," on these."),Object(r.b)("p",null,"The one implementation of EIP I was working with is excellent ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://camel.apache.org/"}),"Apache Camel"),'\nJava library. There\'re many so-called "components" for Apache Camel, which\nprovides adapters from/to various persistence mechanisms (relational databases,\nfile systems, ...), messaging solutions (AMQP, beanstalkd, ...), web services\nand so on. Using such components you can compose them in different ways with\nhelp of internal fluent DSL. Better visit ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://camel.apache.org/examples.html"}),"examples")," page for seeing how it\nworks."),Object(r.b)("p",null,"But I think that Erlang/OTP fits much better for this kind of things:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Parallel runtime with preemptive lightweight processes with N-M scheduler (N\nnumber of processes maps to M number of OS-level threads).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Isolated processes helps localize failures of independent exchanges.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Process linking allows build sophisticated error handling and recovery\nstrategies.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Pattern matching on message structure makes code more clear and concise in\ncomparison to dynamic type casting and nested ",Object(r.b)("em",{parentName:"p"},"if-statements")," in Java.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"OTP framework provides a solid foundation as a set of behaviours --\nprocess supervising tree, finite state machine, event listener and etc.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Hot code reloading makes updates easy — while in-fly exchanges can use old\ncode for processing, new ones can be processed by updated version of code."))),Object(r.b)("p",null,"In future posts I'll try to provide implementation sketch and architectural\noverview of such a system. Stay tuned."),Object(r.b)("h4",null,"Update"),Object(r.b)("p",null,"Yes, I'm aware of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://camel.apache.org/scala-dsl.html"}),"Scala DSL")," for Camel (which seems abandoned for now) and\nmore strong ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/krasserm/scalaz-camel/wiki"}),"scalaz-camel")," library, moreover I've used Scala with Apache\nCamel and I should say — Scala makes my application's code suck much less. But\nI'm also expect much more from applicaton written in such expressive and\npowerful language as Scala — ",Object(r.b)("em",{parentName:"p"},"(a)")," type safe routes, ",Object(r.b)("em",{parentName:"p"},"(b)")," redesigned core\nbased on Scala concurrency primitives (maybe ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://akka.io/"}),"Akka")," actors) allowing to get\nrid of all this Java boilerplate and garbage."),Object(r.b)("p",null,"While I understand I cannot gain ",Object(r.b)("em",{parentName:"p"},"(a)")," by designing such a library in Erlang --\ndynamically typed language — it makes more sense not to expect statical type\nchecks in Erlang than to see runtime cast errors in such a language like Java or\nScala beeing statically typed from the ground up."))}l.isMDXComponent=!0},O4IG:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/writings/2011-05-01-project-idea-eip-in-erlang-pt-1",function(){var e=t("Ah6Z");return{page:e.default||e}}])}},[["O4IG","5d41","9da1"]]]);