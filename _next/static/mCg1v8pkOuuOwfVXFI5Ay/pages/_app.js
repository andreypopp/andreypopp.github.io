(window.webpackJsonp=window.webpackJsonp||[]).push([["f496"],{"1TCz":function(t,e,n){"use strict";n.r(e);var r=n("UrUy"),o=n.n(r),u=n("R3/3"),a=n("LkAs"),c=n("Moms"),i=n("bMj6"),l=n("hZod"),f=n("YKN3"),s=n("tEuJ"),p=n("azxR"),d=n("mXGw"),h=n("FN78"),y=n("o42t"),v=n.n(y),m=n("6p84"),b=(n("2Fzb"),n("y857"));function w(){var t=m.h(function(t){return{root:{backgroundColor:t.backgroundColor,flexGrow:1,alignItems:"center",justifyContent:"center",flexDirection:"row"},text:{color:t.textColor,fontSize:"18pt",fontWeight:"900"}}});return d.createElement(h.a,{style:t.root},d.createElement(b.a,null))}var j=function(t){function e(){var t,n;Object(a.default)(this,e);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return n=Object(i.default)(this,(t=Object(l.default)(e)).call.apply(t,[this].concat(o))),Object(p.a)(Object(f.default)(n),"state",{loaded:!1}),n}return Object(s.default)(e,t),Object(c.default)(e,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return this.state.loaded?d.createElement(m.d,null,d.createElement(y.Container,null,d.createElement(e,n))):d.createElement(m.d,{defaultTheme:m.e},d.createElement(y.Container,null,d.createElement(w,null)))}},{key:"componentDidMount",value:function(){this.setState({loaded:!0})}}],[{key:"getInitialProps",value:function(){var t=Object(u.default)(o.a.mark(function t(e){var n,r,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,r=e.ctx,u={},!n.getInitialProps){t.next=6;break}return t.next=5,n.getInitialProps(r);case 5:u=t.sent;case 6:return t.abrupt("return",{pageProps:u});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}]),e}(v.a);e.default=j},"3Ckp":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var t=n("1TCz");return{page:t.default||t}}])},"6jsY":function(t,e,n){"use strict";var r=n("njzI"),o=r(n("l46N")),u=r(n("Q81b")),a=r(n("9doh")),c=r(n("Gq4l")),i=r(n("1poX")),l=r(n("SDhN")),f=r(n("WDFj")),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},p=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var d=s(n("mXGw")),h=p(n("OWZz")),y=n("MUK1"),v=n("bBV7"),m=function(t){function e(){return(0,a.default)(this,e),(0,i.default)(this,(0,l.default)(e).apply(this,arguments))}return(0,f.default)(e,t),(0,c.default)(e,[{key:"getChildContext",value:function(){return{router:v.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(t){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=j(e);return d.default.createElement(b,null,d.default.createElement(n,(0,u.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:function(t){var e=t.Component,n=(t.router,t.ctx);try{return o.default.resolve(y.loadGetInitialProps(e,n)).then(function(t){return{pageProps:t}})}catch(r){return o.default.reject(r)}}}]),e}(d.Component);m.childContextTypes={router:h.default.object},e.default=m;var b=function(t){function e(){return(0,a.default)(this,e),(0,i.default)(this,(0,l.default)(e).apply(this,arguments))}return(0,f.default)(e,t),(0,c.default)(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var t=window.location.hash;if(t=!!t&&t.substring(1)){var e=document.getElementById(t);e&&setTimeout(function(){return e.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),e}(d.Component);e.Container=b;var w=y.execOnce(function(){0});function j(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return w(),r},get pathname(){return w(),e},get asPath(){return w(),n},back:function(){w(),t.back()},push:function(e,n){return w(),t.push(e,n)},pushTo:function(e,n){w();var r=n?e:null,o=n||e;return t.push(r,o)},replace:function(e,n){return w(),t.replace(e,n)},replaceTo:function(e,n){w();var r=n?e:null,o=n||e;return t.replace(r,o)}}}e.createUrl=j},OKNm:function(t,e,n){t.exports=n("LPDj")},XzKa:function(t,e,n){t.exports=n("KELd")},YKN3:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.r(e),n.d(e,"default",function(){return r})},bMj6:function(t,e,n){"use strict";n.r(e);var r=n("t+lh"),o=n.n(r),u=n("XzKa"),a=n.n(u);function c(t){return(c="function"==typeof a.a&&"symbol"==typeof o.a?function(t){return typeof t}:function(t){return t&&"function"==typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":typeof t})(t)}function i(t){return(i="function"==typeof a.a&&"symbol"===c(o.a)?function(t){return c(t)}:function(t){return t&&"function"==typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":c(t)})(t)}var l=n("YKN3");function f(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?Object(l.default)(t):e}n.d(e,"default",function(){return f})},hZod:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n("jDdP"),o=n.n(r),u=n("OKNm"),a=n.n(u);function c(t){return(c=a.a?o.a:function(t){return t.__proto__||o()(t)})(t)}},jDdP:function(t,e,n){t.exports=n("n+bS")},l46N:function(t,e,n){t.exports=n("6oba")},o42t:function(t,e,n){t.exports=n("6jsY")},"t+lh":function(t,e,n){t.exports=n("gSCB")},tEuJ:function(t,e,n){"use strict";n.r(e);var r=n("6Ndq"),o=n.n(r),u=n("OKNm"),a=n.n(u);function c(t,e){return(c=a.a||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=o()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}n.d(e,"default",function(){return i})}},[["3Ckp","5d41","9da1"]]]);