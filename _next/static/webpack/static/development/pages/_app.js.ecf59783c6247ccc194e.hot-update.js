webpackHotUpdate("static/development/pages/_app.js",{

/***/ "../node_modules/ui/Content.js":
/*!*************************************!*\
  !*** ../node_modules/ui/Content.js ***!
  \*************************************/
/*! exports provided: Link, Content */
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

var _jsxFileName = "/Users/andreypopp/Workspace/arrowresearch/code/node_modules/ui/Content.js";







var contentComponents = {
  a: _Link__WEBPACK_IMPORTED_MODULE_5__["Link"]
};
var Content = function Content(props) {
  var theme = _Style__WEBPACK_IMPORTED_MODULE_4__["useTheme"]();
  var children = props.children,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? _Style__WEBPACK_IMPORTED_MODULE_4__["fontSize"].normal : _props$fontSize;
  var styles = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3896463136",
      dynamic: [fontSize, theme.textColor, fontSize, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.backgroundSecondaryColor, theme.textColor, theme.dimmedColor, theme.backgroundSecondaryColor],
      __self: this
    }, ".content{width:100%;}.content *{font-size:".concat(fontSize, ";line-height:1.4em;}.content p,.content h1,.content h2,.content h3,.content h4,.content h5,.content h6,.content ul,.content ol,.content li{color:").concat(theme.textColor, ";font-size:").concat(fontSize, ";font-weight:500;line-height:1.4em;}.content h1{color:").concat(theme.labelColor, ";font-size:20pt;}.content h2{color:").concat(theme.labelColor, ";font-size:18pt;}.content h3{color:").concat(theme.labelColor, ";font-size:18pt;}.content h4{color:").concat(theme.labelColor, ";font-size:16pt;}.content h5{color:").concat(theme.labelColor, ";font-size:14pt;}.content h6{color:").concat(theme.labelColor, ";font-size:12pt;}.content ul,.content ol{padding:0;padding-left:18px;}.content ul li{list-style-type:square;}.content li{padding:0;list-style-position:outside;}.content pre{line-height:1.1em;margin-top:1em;margin-bottom:1em;background-color:").concat(theme.backgroundSecondaryColor, ";color:").concat(theme.textColor, ";border-left:3px solid ").concat(theme.dimmedColor, ";padding-top:15px;padding-bottom:15px;padding-left:15px;}.content code{font-size:10pt;font-weight:700;font-family:Menlo,Monaco,monospace;padding:2px;background-color:").concat(theme.backgroundSecondaryColor, ";}.content pre>code{font-size:10pt;font-weight:700;font-family:Menlo,Monaco,monospace;padding:0;background-color:transparent;}.content em{font-weight:900;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hcnJvd3Jlc2VhcmNoL2NvZGUvbm9kZV9tb2R1bGVzL3VpL0NvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ5QixBQUdzQixBQUc0QixBQWFKLEFBT0EsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBTXpCLEFBSWEsQUFHYixBQUlRLEFBV0gsQUFPQSxBQU9DLFVBbkNFLEFBT1UsQ0F4RDlCLElBdUVrQixBQU9BLENBT0UsRUF6QkgsS0FQakIsS0FIQSxHQXNCdUMsQUFPQSxFQWxCbkIsQ0F5QnBCLENBdEV5QyxBQU94QixBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsR0FjakIsQ0F0RG9CLFdBcUJwQixBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQ0FrQmdELE1BMURoRCxTQXFFYyxBQU9GLFFBL0RNLEVBZ0VhLEVBUGtCLFlBeEQ3QixPQTZDa0IsUUFtQnRDLEdBL0RBLGlCQXdEQSxRQVhzRCxvREFDbkMsaUJBQ0csb0JBQ0Ysa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hcnJvd3Jlc2VhcmNoL2NvZGUvbm9kZV9tb2R1bGVzL3VpL0NvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlLXdlYic7XG5pbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuaW1wb3J0ICogYXMgU3R5bGUgZnJvbSAnLi9TdHlsZSc7XG5pbXBvcnQgeyBoYW5kbGVQcmVzcywgTGluayB9IGZyb20gJy4vTGluayc7XG5cbmV4cG9ydCB7TGlua31cblxubGV0IGNvbnRlbnRDb21wb25lbnRzID0ge1xuICBhOiBMaW5rLFxufTtcblxuZXhwb3J0IGxldCBDb250ZW50ID0gKHByb3BzOiB7fFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZSxcbiAgZm9udFNpemU/OiBudW1iZXIgfCBzdHJpbmcsXG58fSkgPT4ge1xuICBsZXQgdGhlbWUgPSBTdHlsZS51c2VUaGVtZSgpO1xuICBsZXQgeyBjaGlsZHJlbiwgZm9udFNpemUgPSBTdHlsZS5mb250U2l6ZS5ub3JtYWwgfSA9IHByb3BzO1xuXG4gIGxldCBzdHlsZXMgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IChcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCAqIHtcbiAgICAgICAgICBmb250LXNpemU6ICR7Zm9udFNpemV9O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBwLFxuICAgICAgICAuY29udGVudCBoMSxcbiAgICAgICAgLmNvbnRlbnQgaDIsXG4gICAgICAgIC5jb250ZW50IGgzLFxuICAgICAgICAuY29udGVudCBoNCxcbiAgICAgICAgLmNvbnRlbnQgaDUsXG4gICAgICAgIC5jb250ZW50IGg2LFxuICAgICAgICAuY29udGVudCB1bCxcbiAgICAgICAgLmNvbnRlbnQgb2wsXG4gICAgICAgIC5jb250ZW50IGxpIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS50ZXh0Q29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZX07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCBoMSB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGgyIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDMge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThwdDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoNCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGg1IHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDYge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHVsLFxuICAgICAgICAuY29udGVudCBvbCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgdWwgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGxpIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgcHJlIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xZW07XG4gICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJhY2tncm91bmRTZWNvbmRhcnlDb2xvcn07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUudGV4dENvbG9yfTtcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR7dGhlbWUuZGltbWVkQ29sb3J9O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBjb2RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgbW9ub3NwYWNlO1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJhY2tncm91bmRTZWNvbmRhcnlDb2xvcn07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgcHJlID4gY29kZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGVtIHtcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICksXG4gICAgW3RoZW1lLCBmb250U2l6ZV0sXG4gICk7XG4gIHJldHVybiAoXG4gICAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e2NvbnRlbnRDb21wb25lbnRzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIHtzdHlsZXN9XG4gICAgPC9NRFhQcm92aWRlcj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/andreypopp/Workspace/arrowresearch/code/node_modules/ui/Content.js */"));
  }, [theme, fontSize]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: contentComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, children), styles);
};

/***/ })

})
//# sourceMappingURL=_app.js.ecf59783c6247ccc194e.hot-update.js.map