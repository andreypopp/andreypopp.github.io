webpackHotUpdate("static/development/pages/dev-workflow.js",{

/***/ "../node_modules/ui/Image.js":
/*!***********************************!*\
  !*** ../node_modules/ui/Image.js ***!
  \***********************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "../node_modules/react-native-web/dist/index.js");
/* harmony import */ var _Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.js */ "../node_modules/ui/Layout.js");
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style.js */ "../node_modules/ui/Style.js");

var _jsxFileName = "/Users/andreypopp/Workspace/arrowresearch/code/node_modules/ui/Image.js";




function Image(_ref) {
  var source = _ref.source,
      previewSource = _ref.previewSource,
      _ref$size = _ref.size,
      width = _ref$size.width,
      height = _ref$size.height;

  var _useDOMSize = Object(_Layout_js__WEBPACK_IMPORTED_MODULE_3__["useDOMSize"])(),
      _useDOMSize2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDOMSize, 2),
      size = _useDOMSize2[0],
      ref = _useDOMSize2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      loaded = _React$useState2[0],
      setLoaded = _React$useState2[1];

  var theme = Object(_Style_js__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  var ratio = height / width;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    ref: ref,
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, size == null ? null : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    source: source,
    onLoad: function onLoad() {
      return setLoaded(true);
    },
    style: {
      width: size.width,
      height: size.width * ratio,
      backgroundColor: loaded ? undefined : theme.backgroundSecondaryColor
    },
    resizeMode: "contain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=dev-workflow.js.d590580b813e255c71e2.hot-update.js.map