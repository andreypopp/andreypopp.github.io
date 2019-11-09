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
      id: "3824016397",
      dynamic: [fontSize, theme.textColor, fontSize, theme.spacing * 6, theme.spacing * 3, theme.labelColor, theme.spacing * 6, theme.spacing * 3, theme.labelColor, theme.spacing * 4, theme.spacing * 2, theme.labelColor, theme.labelColor, theme.labelColor, theme.labelColor, theme.backgroundSecondaryColor, theme.textColor, theme.backgroundSecondaryColor],
      __self: this
    }, ".content{width:100%;}.content *{font-size:".concat(fontSize, ";line-height:1.4em;}.content p,.content .paragraph,.content h1,.content h2,.content h3,.content h4,.content h5,.content h6,.content ul,.content ol,.content li{color:").concat(theme.textColor, ";font-size:").concat(fontSize, ";font-weight:500;line-height:1.4em;}.content p,.content .paragraph{margin-top:1.5em;margin-bottom:1.5em;}.content h1{margin-top:").concat(theme.spacing * 6, "px;margin-bottom:").concat(theme.spacing * 3, "px;color:").concat(theme.labelColor, ";font-weight:800;font-size:24pt;}.content h2{margin-top:").concat(theme.spacing * 6, "px;margin-bottom:").concat(theme.spacing * 3, "px;color:").concat(theme.labelColor, ";font-weight:800;font-size:20pt;}.content h3{margin-top:").concat(theme.spacing * 4, "px;margin-bottom:").concat(theme.spacing * 2, "px;color:").concat(theme.labelColor, ";font-size:16pt;font-weight:700;}.content h4{color:").concat(theme.labelColor, ";font-size:16pt;}.content h5{color:").concat(theme.labelColor, ";font-size:14pt;}.content h6{color:").concat(theme.labelColor, ";font-size:12pt;}.content ul,.content ol{padding:0;padding-left:18px;}.content ul li{list-style-type:square;}.content li{padding:0;list-style-position:outside;}.content pre{line-height:1.1em;margin-top:1em;margin-bottom:1em;background-color:").concat(theme.backgroundSecondaryColor, ";color:").concat(theme.textColor, ";padding-top:15px;padding-bottom:15px;padding-left:15px;}.content code{font-size:11pt;font-weight:500;font-family:Menlo,Monaco,monospace;padding:2px;padding-left:4px;padding-right:4px;margin-left:-1px;margin-right:-1px;background-color:").concat(theme.backgroundSecondaryColor, ";}.content pre>code{font-size:11pt;font-weight:500;font-family:Menlo,Monaco,monospace;padding:0;background-color:transparent;}.content em{font-weight:900;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hcnJvd3Jlc2VhcmNoL2NvZGUvbm9kZV9tb2R1bGVzL3VpL0NvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0J5QixBQUdzQixBQUc0QixBQWNKLEFBUWxCLEFBS3lCLEFBT0EsQUFPQSxBQU9OLEFBSUEsQUFJQSxBQU0xQixBQUlhLEFBR2IsQUFJUSxBQVVILEFBV0EsQUFPQyxVQXRDRSxBQU9VLENBeEU5QixJQXNGa0IsQUFXQSxDQU9FLENBL0VFLENBbURMLEtBUGpCLEtBSEEsR0FxQnVDLEFBV0EsRUFyQm5CLENBNEJwQixDQXhGeUMsQ0FrQ3hCLEFBSUEsQUFJQSxDQWpDakIsQ0ErQ0EsQ0F0RW9CLEdBMkIyQixBQU9BLEFBT0MsU0FRaEQsQUFJQSxBQUlBLEFBa0JpRCxNQTFFakQsU0FvRmMsQUFXRixRQWpGTSxFQWtGYSxFQVhaLFNBMURrQixBQU9BLENBT0MsRUExQmxCLEtBdUVBLEdBWGtCLE9Bc0J0QyxHQWpGQSxLQXVFbUIsU0EzREQsQUFPQSxFQU9ELE1BOENHLElBWkQsSUEvQ0YsQUFPQSxDQU9DLFNBOEMrQixHQVozQixFQS9DdEIsQUFPQSxFQU9BLGdCQWtDb0Isa0JBQ3BCLE1BV0EiLCJmaWxlIjoiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL2Fycm93cmVzZWFyY2gvY29kZS9ub2RlX21vZHVsZXMvdWkvQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUtd2ViJztcbmltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5pbXBvcnQgKiBhcyBTdHlsZSBmcm9tICcuL1N0eWxlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuL0xpbmsnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuL0ltYWdlJztcblxuZXhwb3J0IHsgTGluaywgSW1hZ2UgfTtcblxuZnVuY3Rpb24gUGFyYWdyYXBoKHtjaGlsZHJlbn0pIHtcbiAgY29uc29sZS5sb2coY2hpbGRyZW4pO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYXJhZ3JhcGhcIj57Y2hpbGRyZW59PC9kaXY+O1xufVxuXG5sZXQgY29udGVudENvbXBvbmVudHMgPSB7XG4gIGE6IExpbmssXG4gIGltZzogSW1hZ2UsXG4gIHA6IFBhcmFncmFwaCxcbn07XG5cbmV4cG9ydCBsZXQgQ29udGVudCA9IChwcm9wczoge3xcbiAgY2hpbGRyZW46IFJlYWN0Lk5vZGUsXG4gIGZvbnRTaXplPzogbnVtYmVyIHwgc3RyaW5nLFxufH0pID0+IHtcbiAgbGV0IHRoZW1lID0gU3R5bGUudXNlVGhlbWUoKTtcbiAgbGV0IHsgY2hpbGRyZW4sIGZvbnRTaXplID0gU3R5bGUuZm9udFNpemUubm9ybWFsIH0gPSBwcm9wcztcblxuICBsZXQgc3R5bGVzID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiAoXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgKiB7XG4gICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRTaXplfTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgcCxcbiAgICAgICAgLmNvbnRlbnQgLnBhcmFncmFwaCxcbiAgICAgICAgLmNvbnRlbnQgaDEsXG4gICAgICAgIC5jb250ZW50IGgyLFxuICAgICAgICAuY29udGVudCBoMyxcbiAgICAgICAgLmNvbnRlbnQgaDQsXG4gICAgICAgIC5jb250ZW50IGg1LFxuICAgICAgICAuY29udGVudCBoNixcbiAgICAgICAgLmNvbnRlbnQgdWwsXG4gICAgICAgIC5jb250ZW50IG9sLFxuICAgICAgICAuY29udGVudCBsaSB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUudGV4dENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6ICR7Zm9udFNpemV9O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQgcCxcbiAgICAgICAgLmNvbnRlbnQgLnBhcmFncmFwaCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCBoMSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nICogNn1weDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcgKiAzfXB4O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGgyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcgKiA2fXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZyAqIDN9cHg7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDMge1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZyAqIDR9cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nICogMn1weDtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCBoNCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGFiZWxDb2xvcn07XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGg1IHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDYge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHVsLFxuICAgICAgICAuY29udGVudCBvbCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgdWwgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGxpIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgcHJlIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xZW07XG4gICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJhY2tncm91bmRTZWNvbmRhcnlDb2xvcn07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUudGV4dENvbG9yfTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgY29kZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJhY2tncm91bmRTZWNvbmRhcnlDb2xvcn07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgcHJlID4gY29kZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGVtIHtcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICksXG4gICAgW3RoZW1lLCBmb250U2l6ZV0sXG4gICk7XG4gIHJldHVybiAoXG4gICAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e2NvbnRlbnRDb21wb25lbnRzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIHtzdHlsZXN9XG4gICAgPC9NRFhQcm92aWRlcj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/andreypopp/Workspace/arrowresearch/code/node_modules/ui/Content.js */"));
  }, [theme, fontSize]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: contentComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, children), styles);
};

/***/ })

})
//# sourceMappingURL=dev-workflow.js.bfe068b6725848d81960.hot-update.js.map