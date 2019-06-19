webpackHotUpdate("static/development/pages/_app.js",{

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
      color: theme.textColor,
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
      id: "2712129864",
      dynamic: [fontSize, theme.textColor, fontSize, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.backgroundSecondaryColor, theme.textColor, theme.dimmedColor, theme.backgroundSecondaryColor],
      __self: this
    }, ".content{width:100%;}.content *{font-size:".concat(fontSize, ";line-height:1.4em;}.content p,.content h1,.content h2,.content h3,.content h4,.content h5,.content h6,.content ul,.content ol,.content li{color:").concat(theme.textColor, ";font-size:").concat(fontSize, ";font-weight:500;line-height:1.4em;}.content h1{color:").concat(theme.labelColor, ";font-size:20pt;}.content h2{color:").concat(theme.labelColor, ";font-size:18pt;}.content h3{color:").concat(theme.labelColor, ";font-size:18pt;}.content h4{color:").concat(theme.labelColor, ";font-size:16pt;}.content h5{color:").concat(theme.labelColor, ";font-size:14pt;}.content h6{color:").concat(theme.labelColor, ";font-size:12pt;}.content ul,.content ol{padding:0;padding-left:18px;}.content ul li{list-style-type:square;}.content li{padding:0;list-style-position:outside;}.content pre{line-height:1.1em;margin-top:1em;margin-bottom:1em;background-color:").concat(theme.backgroundSecondaryColor, ";color:").concat(theme.textColor, ";border-left:3px solid ").concat(theme.dimmedColor, ";padding-top:15px;padding-bottom:15px;padding-left:15px;}.content code{font-size:10pt;font-weight:700;font-family:Menlo,Monaco,monospace;padding:2px;background-color:").concat(theme.backgroundSecondaryColor, ";}.content pre>code{font-size:10pt;font-weight:700;font-family:Menlo,Monaco,monospace;padding:0;background-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hbmRyZXlwb3BwLmNvbS9ub2RlX21vZHVsZXMvdWkvQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHlCLEFBR3NCLEFBRzRCLEFBYUosQUFPQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFNekIsQUFJYSxBQUdiLEFBSVEsQUFXSCxBQU9BLFVBNUJHLEFBT1UsQ0F4RDlCLElBdUVrQixBQU9BLEdBbEJELEtBUGpCLEtBSEEsR0FzQnVDLEFBT0EsRUFsQm5CLEVBN0NxQixBQU94QixBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsR0FjakIsQ0F0RG9CLFdBcUJwQixBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQ0FrQmdELE1BMURoRCxTQXFFYyxBQU9GLFFBL0RNLEVBZ0VhLEVBUGtCLFlBeEQ3QixPQTZDa0IsUUFtQnRDLEdBL0RBLGlCQXdEQSxRQVhzRCxvREFDbkMsaUJBQ0csb0JBQ0Ysa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hbmRyZXlwb3BwLmNvbS9ub2RlX21vZHVsZXMvdWkvQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUtd2ViJztcbmltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5pbXBvcnQgKiBhcyBTdHlsZSBmcm9tICcuL1N0eWxlJztcbmltcG9ydCB7IGhhbmRsZVByZXNzIH0gZnJvbSAnLi9MaW5rJztcblxuZXhwb3J0IGxldCBMaW5rID0gKHtcbiAgaHJlZixcbiAgY2hpbGRyZW4sXG59OiB7fFxuICBocmVmOiBzdHJpbmcsXG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlLFxufH0pID0+IHtcbiAgbGV0IF9oYW5kbGVQcmVzcyA9IChlOiBVSUV2ZW50KSA9PiBoYW5kbGVQcmVzcyhlLCBocmVmKTtcbiAgbGV0IHN0eWxlID0gU3R5bGUudXNlU3R5bGUodGhlbWUgPT4gKHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIHRoZW1lXG4gICAgY29sb3I6IHRoZW1lLnRleHRDb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnRoZW1lTmFtZSA9PT0gJ2xpZ2h0JyA/ICcjZmZkMTJmJyA6IHRoZW1lLmxpbmtDb2xvcixcbiAgICBwYWRkaW5nSG9yaXpvbnRhbDogMixcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgfSkpO1xuICByZXR1cm4gKFxuICAgIDxUZXh0XG4gICAgICBhY2Nlc3NpYmlsaXR5Um9sZT1cImxpbmtcIlxuICAgICAgc3R5bGU9e1tzdHlsZV19XG4gICAgICBocmVmPXtocmVmfVxuICAgICAgb25QcmVzcz17X2hhbmRsZVByZXNzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RleHQ+XG4gICk7XG59O1xuXG5sZXQgY29udGVudENvbXBvbmVudHMgPSB7XG4gIGE6IExpbmssXG59O1xuXG5leHBvcnQgbGV0IENvbnRlbnQgPSAocHJvcHM6IHt8XG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlLFxuICBmb250U2l6ZT86IG51bWJlciB8IHN0cmluZyxcbnx9KSA9PiB7XG4gIGxldCB7IGNoaWxkcmVuLCBmb250U2l6ZSA9ICcxMnB0JyB9ID0gcHJvcHM7XG4gIGxldCB0aGVtZSA9IFN0eWxlLnVzZVRoZW1lKCk7XG5cbiAgbGV0IHN0eWxlcyA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gKFxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50ICoge1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZX07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHAsXG4gICAgICAgIC5jb250ZW50IGgxLFxuICAgICAgICAuY29udGVudCBoMixcbiAgICAgICAgLmNvbnRlbnQgaDMsXG4gICAgICAgIC5jb250ZW50IGg0LFxuICAgICAgICAuY29udGVudCBoNSxcbiAgICAgICAgLmNvbnRlbnQgaDYsXG4gICAgICAgIC5jb250ZW50IHVsLFxuICAgICAgICAuY29udGVudCBvbCxcbiAgICAgICAgLmNvbnRlbnQgbGkge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLnRleHRDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRTaXplfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IGgxIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDIge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThwdDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoMyB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGg0IHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDUge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoNiB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQgdWwsXG4gICAgICAgIC5jb250ZW50IG9sIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB1bCBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgbGkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBwcmUge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYmFja2dyb3VuZFNlY29uZGFyeUNvbG9yfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS50ZXh0Q29sb3J9O1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHt0aGVtZS5kaW1tZWRDb2xvcn07XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGNvZGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYmFja2dyb3VuZFNlY29uZGFyeUNvbG9yfTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBwcmUgPiBjb2RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgbW9ub3NwYWNlO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICApLFxuICAgIFt0aGVtZV0sXG4gICk7XG4gIHJldHVybiAoXG4gICAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e2NvbnRlbnRDb21wb25lbnRzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIHtzdHlsZXN9XG4gICAgPC9NRFhQcm92aWRlcj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/andreypopp/Workspace/andreypopp.com/node_modules/ui/Content.js */"));
  }, [theme]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: contentComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, children), styles);
};

/***/ })

})
//# sourceMappingURL=_app.js.faded862ef2325855b43.hot-update.js.map