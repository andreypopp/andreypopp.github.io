webpackHotUpdate("static/development/pages/dev-workflow.js",{

/***/ "../node_modules/ui/Content.js":
/*!*************************************!*\
  !*** ../node_modules/ui/Content.js ***!
  \*************************************/
/*! exports provided: Link, Image, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "../node_modules/react-native-web/dist/index.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "../node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "../node_modules/ui/Style.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Link */ "../node_modules/ui/Link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_5__["Link"]; });

/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Image */ "../node_modules/ui/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_6__["Image"]; });

var _jsxFileName = "/Users/andreypopp/Workspace/arrowresearch/code/node_modules/ui/Content.js";









function Paragraph(_ref) {
  var children = _ref.children;
  console.log(children);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, children);
}

var contentComponents = {
  a: _Link__WEBPACK_IMPORTED_MODULE_5__["Link"],
  img: _Image__WEBPACK_IMPORTED_MODULE_6__["Image"],
  p: Paragraph
};
var Content = function Content(props) {
  var theme = _Style__WEBPACK_IMPORTED_MODULE_4__["useTheme"]();
  var children = props.children,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? _Style__WEBPACK_IMPORTED_MODULE_4__["fontSize"].normal : _props$fontSize;
  var styles = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3916440071",
      dynamic: [fontSize, theme.textColor, fontSize, theme.spacing * 6, theme.spacing * 3, theme.labelColor, theme.spacing * 6, theme.spacing * 3, theme.labelColor, theme.spacing * 4, theme.spacing * 2, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.backgroundSecondaryColor, theme.textColor, theme.backgroundSecondaryColor],
      __self: this
    }, ".content{width:100%;}.content *{font-size:".concat(fontSize, ";line-height:1.4em;}.content p,.content .paragraph,.content h1,.content h2,.content h3,.content h4,.content h5,.content h6,.content ul,.content ol,.content li{color:").concat(theme.textColor, ";font-size:").concat(fontSize, ";font-weight:500;line-height:1.4em;}.content p,.content .paragraph{margin-bottom:1.5em;}.content h1{margin-top:").concat(theme.spacing * 6, "px;margin-bottom:").concat(theme.spacing * 3, "px;color:").concat(theme.labelColor, ";font-weight:800;font-size:24pt;}.content h2{margin-top:").concat(theme.spacing * 6, "px;margin-bottom:").concat(theme.spacing * 3, "px;color:").concat(theme.labelColor, ";font-weight:800;font-size:20pt;}.content h3{margin-top:").concat(theme.spacing * 4, "px;margin-bottom:").concat(theme.spacing * 2, "px;color:").concat(theme.labelColor, ";font-size:16pt;font-weight:700;}.content h4{color:").concat(theme.labelColor, ";font-size:16pt;}.content h5{color:").concat(theme.labelColor, ";font-size:14pt;}.content h6{color:").concat(theme.labelColor, ";font-size:12pt;}.content ul,.content ol{padding:0;padding-left:18px;}.content ul li{list-style-type:square;}.content li{padding:0;list-style-position:outside;}.content pre{line-height:1.1em;margin-top:1em;margin-bottom:1em;background-color:").concat(theme.backgroundSecondaryColor, ";color:").concat(theme.textColor, ";padding-top:15px;padding-bottom:15px;padding-left:15px;}.content code{font-size:11pt;font-weight:500;font-family:Menlo,Monaco,monospace;padding:2px;padding-left:4px;padding-right:4px;margin-left:-1px;margin-right:-1px;background-color:").concat(theme.backgroundSecondaryColor, ";}.content pre>code{font-size:11pt;font-weight:500;font-family:Menlo,Monaco,monospace;padding:0;background-color:transparent;}.content em{font-weight:900;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hcnJvd3Jlc2VhcmNoL2NvZGUvbm9kZV9tb2R1bGVzL3VpL0NvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0J5QixBQUdzQixBQUc0QixBQWNKLEFBUWYsQUFJc0IsQUFPQSxBQU9BLEFBT04sQUFJQSxBQUlBLEFBTTFCLEFBSWEsQUFHYixBQUlRLEFBVUgsQUFXQSxBQU9DLFVBdENFLEFBT1UsQ0F2RTlCLElBcUZrQixBQVdBLENBT0UsRUE1QkgsRUFsRGpCLEdBMkNBLEtBSEEsR0FxQnVDLEFBV0EsRUFyQm5CLENBNEJwQixDQXZGeUMsQ0FpQ3hCLEFBSUEsQUFJQSxFQWNqQixDQXJFb0IsR0EwQjJCLEFBT0EsQUFPQyxTQVFoRCxBQUlBLEFBSUEsQUFrQmlELE1BekVqRCxTQW1GYyxBQVdGLFFBaEZNLEVBaUZhLEVBWFosU0ExRGtCLEFBT0EsQ0FPQyxFQXpCbEIsS0FzRUEsR0FYa0IsT0FzQnRDLEdBaEZBLEtBc0VtQixTQTNERCxBQU9BLEVBT0QsTUE4Q0csSUFaRCxJQS9DRixBQU9BLENBT0MsU0E4QytCLEdBWjNCLEVBL0N0QixBQU9BLEVBT0EsZ0JBa0NvQixrQkFDcEIsTUFXQSIsImZpbGUiOiIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvYXJyb3dyZXNlYXJjaC9jb2RlL25vZGVfbW9kdWxlcy91aS9Db250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZS13ZWInO1xuaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tICdAbWR4LWpzL3JlYWN0JztcbmltcG9ydCAqIGFzIFN0eWxlIGZyb20gJy4vU3R5bGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4vTGluayc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4vSW1hZ2UnO1xuXG5leHBvcnQgeyBMaW5rLCBJbWFnZSB9O1xuXG5mdW5jdGlvbiBQYXJhZ3JhcGgoe2NoaWxkcmVufSkge1xuICBjb25zb2xlLmxvZyhjaGlsZHJlbik7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhcmFncmFwaFwiPntjaGlsZHJlbn08L2Rpdj47XG59XG5cbmxldCBjb250ZW50Q29tcG9uZW50cyA9IHtcbiAgYTogTGluayxcbiAgaW1nOiBJbWFnZSxcbiAgcDogUGFyYWdyYXBoLFxufTtcblxuZXhwb3J0IGxldCBDb250ZW50ID0gKHByb3BzOiB7fFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZSxcbiAgZm9udFNpemU/OiBudW1iZXIgfCBzdHJpbmcsXG58fSkgPT4ge1xuICBsZXQgdGhlbWUgPSBTdHlsZS51c2VUaGVtZSgpO1xuICBsZXQgeyBjaGlsZHJlbiwgZm9udFNpemUgPSBTdHlsZS5mb250U2l6ZS5ub3JtYWwgfSA9IHByb3BzO1xuXG4gIGxldCBzdHlsZXMgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IChcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCAqIHtcbiAgICAgICAgICBmb250LXNpemU6ICR7Zm9udFNpemV9O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBwLFxuICAgICAgICAuY29udGVudCAucGFyYWdyYXBoLFxuICAgICAgICAuY29udGVudCBoMSxcbiAgICAgICAgLmNvbnRlbnQgaDIsXG4gICAgICAgIC5jb250ZW50IGgzLFxuICAgICAgICAuY29udGVudCBoNCxcbiAgICAgICAgLmNvbnRlbnQgaDUsXG4gICAgICAgIC5jb250ZW50IGg2LFxuICAgICAgICAuY29udGVudCB1bCxcbiAgICAgICAgLmNvbnRlbnQgb2wsXG4gICAgICAgIC5jb250ZW50IGxpIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS50ZXh0Q29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZX07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCBwLFxuICAgICAgICAuY29udGVudCAucGFyYWdyYXBoIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IGgxIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcgKiA2fXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZyAqIDN9cHg7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZyAqIDZ9cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nICogM31weDtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoMyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nICogNH1weDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcgKiAyfXB4O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGg0IHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDUge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoNiB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQgdWwsXG4gICAgICAgIC5jb250ZW50IG9sIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB1bCBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgbGkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBwcmUge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYmFja2dyb3VuZFNlY29uZGFyeUNvbG9yfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS50ZXh0Q29sb3J9O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBjb2RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDExcHQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgbW9ub3NwYWNlO1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYmFja2dyb3VuZFNlY29uZGFyeUNvbG9yfTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBwcmUgPiBjb2RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDExcHQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgbW9ub3NwYWNlO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgZW0ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgKSxcbiAgICBbdGhlbWUsIGZvbnRTaXplXSxcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17Y29udGVudENvbXBvbmVudHN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAge3N0eWxlc31cbiAgICA8L01EWFByb3ZpZGVyPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/andreypopp/Workspace/arrowresearch/code/node_modules/ui/Content.js */"));
  }, [theme, fontSize]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: contentComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, children), styles);
};

/***/ })

})
//# sourceMappingURL=dev-workflow.js.a5ef7f39f1439f788b78.hot-update.js.map