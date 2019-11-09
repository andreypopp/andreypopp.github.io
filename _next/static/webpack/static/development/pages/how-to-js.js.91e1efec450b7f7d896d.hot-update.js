webpackHotUpdate("static/development/pages/how-to-js.js",{

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
      id: "3341349097",
      dynamic: [fontSize, theme.textColor, fontSize, theme.spacing * 6, theme.spacing * 3, theme.labelColor, theme.spacing * 6, theme.spacing * 3, theme.labelColor, theme.spacing * 4, theme.spacing * 2, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.backgroundSecondaryColor, theme.textColor, theme.dimmedColor, theme.backgroundSecondaryColor],
      __self: this
    }, ".content{width:100%;}.content *{font-size:".concat(fontSize, ";line-height:1.4em;}.content p,.content h1,.content h2,.content h3,.content h4,.content h5,.content h6,.content ul,.content ol,.content li{color:").concat(theme.textColor, ";font-size:").concat(fontSize, ";font-weight:500;line-height:1.4em;}.content h1{margin-top:").concat(theme.spacing * 6, "px;margin-bottom:").concat(theme.spacing * 3, "px;color:").concat(theme.labelColor, ";font-weight:800;font-size:24pt;}.content h2{margin-top:").concat(theme.spacing * 6, "px;margin-bottom:").concat(theme.spacing * 3, "px;color:").concat(theme.labelColor, ";font-weight:800;font-size:20pt;}.content h3{margin-top:").concat(theme.spacing * 4, "px;margin-bottom:").concat(theme.spacing * 2, "px;color:").concat(theme.labelColor, ";font-size:18pt;font-weight:800;}.content h4{color:").concat(theme.labelColor, ";font-size:16pt;}.content h5{color:").concat(theme.labelColor, ";font-size:14pt;}.content h6{color:").concat(theme.labelColor, ";font-size:12pt;}.content ul,.content ol{padding:0;padding-left:18px;}.content ul li{list-style-type:square;}.content li{padding:0;list-style-position:outside;}.content pre{line-height:1.1em;margin-top:1em;margin-bottom:1em;background-color:").concat(theme.backgroundSecondaryColor, ";color:").concat(theme.textColor, ";border-left:3px solid ").concat(theme.dimmedColor, ";padding-top:15px;padding-bottom:15px;padding-left:15px;}.content code{font-size:10pt;font-weight:700;font-family:Menlo,Monaco,monospace;padding:2px;background-color:").concat(theme.backgroundSecondaryColor, ";}.content pre>code{font-size:10pt;font-weight:700;font-family:Menlo,Monaco,monospace;padding:0;background-color:transparent;}.content em{font-weight:900;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hcnJvd3Jlc2VhcmNoL2NvZGUvbm9kZV9tb2R1bGVzL3VpL0NvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ5QixBQUdzQixBQUc0QixBQWFKLEFBT08sQUFPQSxBQU9BLEFBT04sQUFJQSxBQUlBLEFBTTFCLEFBSWEsQUFHYixBQUlRLEFBV0gsQUFPQSxBQU9DLFVBbkNFLEFBT1UsQ0FqRTlCLElBZ0ZrQixBQU9BLENBT0UsRUF6QkgsS0FQakIsS0FIQSxHQXNCdUMsQUFPQSxFQWxCbkIsQ0F5QnBCLENBL0V5QyxDQTRCeEIsQUFJQSxBQUlBLEVBY2pCLENBL0RvQixHQW9CMkIsQUFPQSxBQU9DLFNBUWhELEFBSUEsQUFJQSxBQWtCaUQsTUFuRWpELFNBOEVjLEFBT0YsUUF4RU0sRUF5RWEsRUFQa0IsU0EzRFosQUFPQSxDQU9DLEVBcEJsQixRQXNEa0IsT0FtQnRDLEdBeEVBLGNBTWtCLEFBT0EsRUFPRCxDQTZDakIsU0FYc0QsSUEvQ3JDLEFBT0EsQ0FPQyxjQWJsQixBQU9BLEVBT0EsK0JBaUNtQixpQkFDRyxvQkFDRixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL2Fycm93cmVzZWFyY2gvY29kZS9ub2RlX21vZHVsZXMvdWkvQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUtd2ViJztcbmltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5pbXBvcnQgKiBhcyBTdHlsZSBmcm9tICcuL1N0eWxlJztcbmltcG9ydCB7IGhhbmRsZVByZXNzLCBMaW5rIH0gZnJvbSAnLi9MaW5rJztcblxuZXhwb3J0IHsgTGluayB9O1xuXG5sZXQgY29udGVudENvbXBvbmVudHMgPSB7XG4gIGE6IExpbmssXG59O1xuXG5leHBvcnQgbGV0IENvbnRlbnQgPSAocHJvcHM6IHt8XG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlLFxuICBmb250U2l6ZT86IG51bWJlciB8IHN0cmluZyxcbnx9KSA9PiB7XG4gIGxldCB0aGVtZSA9IFN0eWxlLnVzZVRoZW1lKCk7XG4gIGxldCB7IGNoaWxkcmVuLCBmb250U2l6ZSA9IFN0eWxlLmZvbnRTaXplLm5vcm1hbCB9ID0gcHJvcHM7XG5cbiAgbGV0IHN0eWxlcyA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gKFxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50ICoge1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZX07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHAsXG4gICAgICAgIC5jb250ZW50IGgxLFxuICAgICAgICAuY29udGVudCBoMixcbiAgICAgICAgLmNvbnRlbnQgaDMsXG4gICAgICAgIC5jb250ZW50IGg0LFxuICAgICAgICAuY29udGVudCBoNSxcbiAgICAgICAgLmNvbnRlbnQgaDYsXG4gICAgICAgIC5jb250ZW50IHVsLFxuICAgICAgICAuY29udGVudCBvbCxcbiAgICAgICAgLmNvbnRlbnQgbGkge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLnRleHRDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRTaXplfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IGgxIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcgKiA2fXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZyAqIDN9cHg7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZyAqIDZ9cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nICogM31weDtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoMyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nICogNH1weDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcgKiAyfXB4O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThwdDtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGg0IHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDUge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoNiB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQgdWwsXG4gICAgICAgIC5jb250ZW50IG9sIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB1bCBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgbGkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBwcmUge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYmFja2dyb3VuZFNlY29uZGFyeUNvbG9yfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS50ZXh0Q29sb3J9O1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHt0aGVtZS5kaW1tZWRDb2xvcn07XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGNvZGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYmFja2dyb3VuZFNlY29uZGFyeUNvbG9yfTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBwcmUgPiBjb2RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgbW9ub3NwYWNlO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgZW0ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgKSxcbiAgICBbdGhlbWUsIGZvbnRTaXplXSxcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17Y29udGVudENvbXBvbmVudHN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAge3N0eWxlc31cbiAgICA8L01EWFByb3ZpZGVyPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/andreypopp/Workspace/arrowresearch/code/node_modules/ui/Content.js */"));
  }, [theme, fontSize]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: contentComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, children), styles);
};

/***/ })

})
//# sourceMappingURL=how-to-js.js.91e1efec450b7f7d896d.hot-update.js.map