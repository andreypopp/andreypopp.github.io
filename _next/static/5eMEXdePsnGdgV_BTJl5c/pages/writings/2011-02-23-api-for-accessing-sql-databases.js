(window.webpackJsonp=window.webpackJsonp||[]).push([["eb00"],{ie5j:function(e,a,n){"use strict";n.r(a),n.d(a,"title",function(){return r}),n.d(a,"default",function(){return b});var t=n("z3IF"),o=n("2Fjn"),s=(n("mXGw"),n("SAVP")),i=n("SGno"),r="API for accessing SQL databases",l={title:r},c=i.a;function b(e){var a=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)(c,Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"In this post I want to discuss database access layers for SQL databases. This is driven by my experience of working with MySQL and PostgreSQL database\nengines both for online and offline applications."),Object(s.b)("h2",null,"No ORM"),Object(s.b)("p",null,"I don't need ORM to access SQL databases. At the beginning of my professional\ncareer as a software developer I was very excited about ORM frameworks and what\nkind of things I can achieve with its help like managing lazy loading data\nfrom database or some other fancy tricks. Now I'm completely sure — ORM is\njust another ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Leaky_abstraction"}),"leaky abstraction")," that doesn't work well or scale for\ncomplex applications."),Object(s.b)("p",null,"There are many reasons I've said so, some of them are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"I don't like my application code intermix with persistence-managing code,\nbut this is a kind of things ORM is forcing me to do by providing lazy\nloading relationships mappings or etc.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Huge feature disbalance between an ORM and a database engine."))),Object(s.b)("p",null,"Maybe I am wrong about ORMs or I just shouldn't use its advanced features,\nbut I feel completely comfortable writing plain SQL and converting results\nto stateless domain models by hand."),Object(s.b)("p",null,"But what I really need from an API for accessing SQL database is..."),Object(s.b)("h2",null,"Support for database specific features"),Object(s.b)("p",null,"This is the most disturbing issue for me. I like to use good-designed API with\nsupport for database specific features per-database engine, not something like\nPython DB-API or JDBC or even SQLAlchemy or Hibernate that fits every\nrelational database engine in the world."),Object(s.b)("p",null,"I don't usually develop database agnostic applications in a sense of \"swapping\ndatabase engine without writing single line of code\". I'm sure, a good-designed\nand scalable application should benefit from features, that are specific for a\nchosen database engine."),Object(s.b)("p",null,"The responsibility for all of this should be taken by SQL database vendors in\nthe manner NoSQL vendors do — for example, MongoDB has a ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"http://www.mongodb.org/display/DOCS/Drivers"}),"set of officially\nsupported")," database drivers for many programming languages (including even\nlanguages that don't hit mainstream yet, like Scala, Haskell or Erlang),\nwhich are kept in sync with progress made by MongoDB engine itself."),Object(s.b)("h2",null,"What would be ideal for me right now"),Object(s.b)("p",null,"Keeping all these thoughts in mind, I think the best option for me is to:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Use the database connectivity layer of SQLAlchemy, this gives me\nconnection pooling and other goodness.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Write plain SQL queries.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Design simple and slick (and of course reusable) mapping layer from\ndatabase objects to domain model objects."))),Object(s.b)("p",null,"Let's see:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{}),'from imagination.orm import *\n\ndef extract_user(row):\n    return User(row["username"], row["password"])\n\ndef extract_profile(row):\n    return Profile(row["username"], row["email"])\n\nusers = (connection\n  .execute("select username, password, email, data from users")\n  .map([extract_user, extract_profile]))\n\nassert users == [(User(..), Profile(..)), ...]\n')),Object(s.b)("p",null,"Oh no, I've just designed yet another poor man's ORM. :-)"))}b.isMDXComponent=!0},qqu7:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/writings/2011-02-23-api-for-accessing-sql-databases",function(){var e=n("ie5j");return{page:e.default||e}}])}},[["qqu7","5d41","9da1"]]]);