webpackHotUpdate("static/development/pages/index.js",{

/***/ "../node_modules/ui/Content.js":
/*!*************************************!*\
  !*** ../node_modules/ui/Content.js ***!
  \*************************************/
/*! exports provided: Link, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "../node_modules/react-native-web/dist/index.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "../node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "../node_modules/ui/Style.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Link */ "../node_modules/ui/Link.js");
var _jsxFileName = "/Users/andreypopp/Workspace/andreypopp.com/node_modules/ui/Content.js";






var Link = function Link(_ref) {
  var href = _ref.href,
      children = _ref.children;

  var _handlePress = function _handlePress(e) {
    return Object(_Link__WEBPACK_IMPORTED_MODULE_5__["handlePress"])(e, href);
  };

  var style = _Style__WEBPACK_IMPORTED_MODULE_4__["useStyle"](function (theme) {
    return {
      color: theme.linkColor,
      backgroundColor: theme.backgroundHighlightedColor,
      paddingHorizontal: 2,
      fontWeight: '500'
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    accessibilityRole: "link",
    style: [style],
    href: href,
    onPress: _handlePress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, children);
};
var contentComponents = {
  a: Link
};
var Content = function Content(props) {
  var children = props.children,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? '12pt' : _props$fontSize;
  var theme = _Style__WEBPACK_IMPORTED_MODULE_4__["useTheme"]();
  var styles = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2712129864",
      dynamic: [fontSize, theme.textColor, fontSize, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.backgroundSecondaryColor, theme.textColor, theme.dimmedColor, theme.backgroundSecondaryColor],
      __self: this
    }, ".content{width:100%;}.content *{font-size:".concat(fontSize, ";line-height:1.4em;}.content p,.content h1,.content h2,.content h3,.content h4,.content h5,.content h6,.content ul,.content ol,.content li{color:").concat(theme.textColor, ";font-size:").concat(fontSize, ";font-weight:500;line-height:1.4em;}.content h1{color:").concat(theme.labelColor, ";font-size:20pt;}.content h2{color:").concat(theme.labelColor, ";font-size:18pt;}.content h3{color:").concat(theme.labelColor, ";font-size:18pt;}.content h4{color:").concat(theme.labelColor, ";font-size:16pt;}.content h5{color:").concat(theme.labelColor, ";font-size:14pt;}.content h6{color:").concat(theme.labelColor, ";font-size:12pt;}.content ul,.content ol{padding:0;padding-left:18px;}.content ul li{list-style-type:square;}.content li{padding:0;list-style-position:outside;}.content pre{line-height:1.1em;margin-top:1em;margin-bottom:1em;background-color:").concat(theme.backgroundSecondaryColor, ";color:").concat(theme.textColor, ";border-left:3px solid ").concat(theme.dimmedColor, ";padding-top:15px;padding-bottom:15px;padding-left:15px;}.content code{font-size:10pt;font-weight:700;font-family:Menlo,Monaco,monospace;padding:2px;background-color:").concat(theme.backgroundSecondaryColor, ";}.content pre>code{font-size:10pt;font-weight:700;font-family:Menlo,Monaco,monospace;padding:0;background-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hbmRyZXlwb3BwLmNvbS9ub2RlX21vZHVsZXMvdWkvQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3lCLEFBR3NCLEFBRzRCLEFBYUosQUFPQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFNekIsQUFJYSxBQUdiLEFBSVEsQUFXSCxBQU9BLFVBNUJHLEFBT1UsQ0F4RDlCLElBdUVrQixBQU9BLEdBbEJELEtBUGpCLEtBSEEsR0FzQnVDLEFBT0EsRUFsQm5CLEVBN0NxQixBQU94QixBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsR0FjakIsQ0F0RG9CLFdBcUJwQixBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQ0FrQmdELE1BMURoRCxTQXFFYyxBQU9GLFFBL0RNLEVBZ0VhLEVBUGtCLFlBeEQ3QixPQTZDa0IsUUFtQnRDLEdBL0RBLGlCQXdEQSxRQVhzRCxvREFDbkMsaUJBQ0csb0JBQ0Ysa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hbmRyZXlwb3BwLmNvbS9ub2RlX21vZHVsZXMvdWkvQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUtd2ViJztcbmltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5pbXBvcnQgKiBhcyBTdHlsZSBmcm9tICcuL1N0eWxlJztcbmltcG9ydCB7IGhhbmRsZVByZXNzIH0gZnJvbSAnLi9MaW5rJztcblxuZXhwb3J0IGxldCBMaW5rID0gKHtcbiAgaHJlZixcbiAgY2hpbGRyZW4sXG59OiB7fFxuICBocmVmOiBzdHJpbmcsXG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlLFxufH0pID0+IHtcbiAgbGV0IF9oYW5kbGVQcmVzcyA9IChlOiBVSUV2ZW50KSA9PiBoYW5kbGVQcmVzcyhlLCBocmVmKTtcbiAgbGV0IHN0eWxlID0gU3R5bGUudXNlU3R5bGUodGhlbWUgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUubGlua0NvbG9yLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuYmFja2dyb3VuZEhpZ2hsaWdodGVkQ29sb3IsXG4gICAgcGFkZGluZ0hvcml6b250YWw6IDIsXG4gICAgZm9udFdlaWdodDogJzUwMCcsXG4gIH0pKTtcbiAgcmV0dXJuIChcbiAgICA8VGV4dFxuICAgICAgYWNjZXNzaWJpbGl0eVJvbGU9XCJsaW5rXCJcbiAgICAgIHN0eWxlPXtbc3R5bGVdfVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIG9uUHJlc3M9e19oYW5kbGVQcmVzc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UZXh0PlxuICApO1xufTtcblxubGV0IGNvbnRlbnRDb21wb25lbnRzID0ge1xuICBhOiBMaW5rLFxufTtcblxuZXhwb3J0IGxldCBDb250ZW50ID0gKHByb3BzOiB7fFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZSxcbiAgZm9udFNpemU/OiBudW1iZXIgfCBzdHJpbmcsXG58fSkgPT4ge1xuICBsZXQgeyBjaGlsZHJlbiwgZm9udFNpemUgPSAnMTJwdCcgfSA9IHByb3BzO1xuICBsZXQgdGhlbWUgPSBTdHlsZS51c2VUaGVtZSgpO1xuXG4gIGxldCBzdHlsZXMgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IChcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCAqIHtcbiAgICAgICAgICBmb250LXNpemU6ICR7Zm9udFNpemV9O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBwLFxuICAgICAgICAuY29udGVudCBoMSxcbiAgICAgICAgLmNvbnRlbnQgaDIsXG4gICAgICAgIC5jb250ZW50IGgzLFxuICAgICAgICAuY29udGVudCBoNCxcbiAgICAgICAgLmNvbnRlbnQgaDUsXG4gICAgICAgIC5jb250ZW50IGg2LFxuICAgICAgICAuY29udGVudCB1bCxcbiAgICAgICAgLmNvbnRlbnQgb2wsXG4gICAgICAgIC5jb250ZW50IGxpIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS50ZXh0Q29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZX07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCBoMSB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGgyIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDMge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThwdDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoNCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGg1IHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDYge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHVsLFxuICAgICAgICAuY29udGVudCBvbCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgdWwgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGxpIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgcHJlIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xZW07XG4gICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJhY2tncm91bmRTZWNvbmRhcnlDb2xvcn07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUudGV4dENvbG9yfTtcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR7dGhlbWUuZGltbWVkQ29sb3J9O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBjb2RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgbW9ub3NwYWNlO1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJhY2tncm91bmRTZWNvbmRhcnlDb2xvcn07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgcHJlID4gY29kZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgKSxcbiAgICBbdGhlbWVdLFxuICApO1xuICByZXR1cm4gKFxuICAgIDxNRFhQcm92aWRlciBjb21wb25lbnRzPXtjb250ZW50Q29tcG9uZW50c30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICB7c3R5bGVzfVxuICAgIDwvTURYUHJvdmlkZXI+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/andreypopp/Workspace/andreypopp.com/node_modules/ui/Content.js */"));
  }, [theme]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: contentComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, children), styles);
};

/***/ })

})
//# sourceMappingURL=index.js.edf0e0c3679cd004b2f1.hot-update.js.map