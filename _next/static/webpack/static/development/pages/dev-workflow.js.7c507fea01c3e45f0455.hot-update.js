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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ "../node_modules/react-native-web/dist/index.js");
/* harmony import */ var _Layout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Layout.js */ "../node_modules/ui/Layout.js");




var _jsxFileName = "/Users/andreypopp/Workspace/arrowresearch/code/node_modules/ui/Image.js";




function delay(ms) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function Image(_ref) {
  var source = _ref.source,
      previewSource = _ref.previewSource,
      _ref$size = _ref.size,
      width = _ref$size.width,
      height = _ref$size.height;

  var _useDOMSize = Object(_Layout_js__WEBPACK_IMPORTED_MODULE_6__["useDOMSize"])(),
      _useDOMSize2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useDOMSize, 2),
      size = _useDOMSize2[0],
      ref = _useDOMSize2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"](),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      img = _React$useState2[0],
      setImg = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    var img = new window.Image();
    img.src = source;
    img.decode().then(
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return delay(1000);

            case 2:
              setImg(source);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    return function () {
      img.src = '';

      try {
        delete img.src;
      } catch (e) {// On Safari in Strict mode this will throw an exception,
      }

      img = null;
    };
  }, [source]);

  if (size == null) {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_5__["View"], {
      ref: ref,
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    });
  }

  var ratio = height / width;
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    source: img != null ? img : previewSource,
    style: {
      width: size.width,
      height: size.width * ratio
    },
    resizeMode: "contain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=dev-workflow.js.7c507fea01c3e45f0455.hot-update.js.map