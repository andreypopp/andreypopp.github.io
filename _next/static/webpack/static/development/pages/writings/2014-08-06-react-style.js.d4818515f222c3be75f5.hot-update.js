webpackHotUpdate("static/development/pages/writings/2014-08-06-react-style.js",{

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
      // TODO: move to theme
      color: theme.themeName === 'light' ? theme.textColor : '#000000',
      backgroundColor: theme.themeName === 'light' ? '#ffd12f' : theme.linkColor,
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
      lineNumber: 25
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
      id: "534134747",
      dynamic: [fontSize, theme.textColor, fontSize, theme.backgroundSecondaryColor, theme.textColor, theme.dimmedColor, theme.backgroundSecondaryColor],
      __self: this
    }, ".content{width:100%;}.content *{font-size:".concat(fontSize, ";line-height:1.4em;}.content p,.content h1,.content h2,.content h3,.content h4,.content h5,.content h6,.content ul,.content ol,.content li{color:").concat(theme.textColor, ";font-size:").concat(fontSize, ";font-weight:500;line-height:1.4em;}.content h1{font-size:20pt;}.content h2{font-size:18pt;}.content h3{font-size:18pt;}.content h4{font-size:16pt;}.content h5{font-size:14pt;}.content h6{font-size:12pt;}.content ul,.content ol{padding:0;padding-left:18px;}.content ul li{list-style-type:square;}.content li{padding:0;list-style-position:outside;}.content pre{line-height:1.1em;margin-top:1em;margin-bottom:1em;background-color:").concat(theme.backgroundSecondaryColor, ";color:").concat(theme.textColor, ";border-left:3px solid ").concat(theme.dimmedColor, ";padding-top:15px;padding-bottom:15px;padding-left:15px;}.content code{font-size:10pt;font-weight:700;font-family:Menlo,Monaco,monospace;padding:2px;background-color:").concat(theme.backgroundSecondaryColor, ";}.content pre>code{font-size:10pt;font-weight:700;font-family:Menlo,Monaco,monospace;padding:0;background-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hbmRyZXlwb3BwLmNvbS9ub2RlX21vZHVsZXMvdWkvQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHlCLEFBR3NCLEFBRzRCLEFBYUosQUFPcEIsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBS0wsQUFJYSxBQUdiLEFBSVEsQUFXSCxBQU9BLFVBNUJHLEFBT1UsQ0FsRDlCLElBdUJBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQTJCa0IsQUFPQSxHQWxCRCxLQVBqQixLQUhBLEdBc0J1QyxBQU9BLEVBbEJuQixFQXZDcUIsR0FtQ3pDLENBaERvQixZQXFENEIsTUFwRGhELFNBK0RjLEFBT0YsUUF6RE0sRUEwRGEsRUFQaUIsWUFsRDVCLE9BdUNpQixRQW1CckMsR0F6REEsZ0JBa0RBLFFBWHFELG1EQUNsQyxpQkFDRyxvQkFDRixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL2FuZHJleXBvcHAuY29tL25vZGVfbW9kdWxlcy91aS9Db250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZS13ZWInO1xuaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tICdAbWR4LWpzL3JlYWN0JztcbmltcG9ydCAqIGFzIFN0eWxlIGZyb20gJy4vU3R5bGUnO1xuaW1wb3J0IHsgaGFuZGxlUHJlc3MgfSBmcm9tICcuL0xpbmsnO1xuXG5leHBvcnQgbGV0IExpbmsgPSAoe1xuICBocmVmLFxuICBjaGlsZHJlbixcbn06IHt8XG4gIGhyZWY6IHN0cmluZyxcbiAgY2hpbGRyZW46IFJlYWN0Lk5vZGUsXG58fSkgPT4ge1xuICBsZXQgX2hhbmRsZVByZXNzID0gKGU6IFVJRXZlbnQpID0+IGhhbmRsZVByZXNzKGUsIGhyZWYpO1xuICBsZXQgc3R5bGUgPSBTdHlsZS51c2VTdHlsZSh0aGVtZSA9PiAoe1xuICAgIC8vIFRPRE86IG1vdmUgdG8gdGhlbWVcbiAgICBjb2xvcjogdGhlbWUudGhlbWVOYW1lID09PSAnbGlnaHQnID8gdGhlbWUudGV4dENvbG9yIDogJyMwMDAwMDAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUudGhlbWVOYW1lID09PSAnbGlnaHQnID8gJyNmZmQxMmYnIDogdGhlbWUubGlua0NvbG9yLFxuICAgIHBhZGRpbmdIb3Jpem9udGFsOiAyLFxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICB9KSk7XG4gIHJldHVybiAoXG4gICAgPFRleHRcbiAgICAgIGFjY2Vzc2liaWxpdHlSb2xlPVwibGlua1wiXG4gICAgICBzdHlsZT17W3N0eWxlXX1cbiAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICBvblByZXNzPXtfaGFuZGxlUHJlc3N9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGV4dD5cbiAgKTtcbn07XG5cbmxldCBjb250ZW50Q29tcG9uZW50cyA9IHtcbiAgYTogTGluayxcbn07XG5cbmV4cG9ydCBsZXQgQ29udGVudCA9IChwcm9wczoge3xcbiAgY2hpbGRyZW46IFJlYWN0Lk5vZGUsXG4gIGZvbnRTaXplPzogbnVtYmVyIHwgc3RyaW5nLFxufH0pID0+IHtcbiAgbGV0IHsgY2hpbGRyZW4sIGZvbnRTaXplID0gJzEycHQnIH0gPSBwcm9wcztcbiAgbGV0IHRoZW1lID0gU3R5bGUudXNlVGhlbWUoKTtcblxuICBsZXQgc3R5bGVzID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiAoXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgKiB7XG4gICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRTaXplfTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgcCxcbiAgICAgICAgLmNvbnRlbnQgaDEsXG4gICAgICAgIC5jb250ZW50IGgyLFxuICAgICAgICAuY29udGVudCBoMyxcbiAgICAgICAgLmNvbnRlbnQgaDQsXG4gICAgICAgIC5jb250ZW50IGg1LFxuICAgICAgICAuY29udGVudCBoNixcbiAgICAgICAgLmNvbnRlbnQgdWwsXG4gICAgICAgIC5jb250ZW50IG9sLFxuICAgICAgICAuY29udGVudCBsaSB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUudGV4dENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6ICR7Zm9udFNpemV9O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoNSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGg2IHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB1bCxcbiAgICAgICAgLmNvbnRlbnQgb2wge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHVsIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBsaSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHByZSB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMWVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5iYWNrZ3JvdW5kU2Vjb25kYXJ5Q29sb3J9O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLnRleHRDb2xvcn07XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAke3RoZW1lLmRpbW1lZENvbG9yfTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgY29kZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5iYWNrZ3JvdW5kU2Vjb25kYXJ5Q29sb3J9O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHByZSA+IGNvZGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICksXG4gICAgW3RoZW1lXSxcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17Y29udGVudENvbXBvbmVudHN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAge3N0eWxlc31cbiAgICA8L01EWFByb3ZpZGVyPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/andreypopp/Workspace/andreypopp.com/node_modules/ui/Content.js */"));
  }, [theme]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: contentComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, children), styles);
};

/***/ })

})
//# sourceMappingURL=2014-08-06-react-style.js.d4818515f222c3be75f5.hot-update.js.map