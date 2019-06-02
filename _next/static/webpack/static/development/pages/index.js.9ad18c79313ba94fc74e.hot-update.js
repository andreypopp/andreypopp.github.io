webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Section.js":
/*!********************!*\
  !*** ./Section.js ***!
  \********************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web */ "../node_modules/react-native-web/dist/index.js");
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui */ "../node_modules/ui/index.js");
/* harmony import */ var ui_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/Style */ "../node_modules/ui/Style.js");
var _jsxFileName = "/Users/andreypopp/Workspace/andreypopp.com/site/Section.js";




var Section = function Section(props) {
  var styles = ui_Style__WEBPACK_IMPORTED_MODULE_3__["useStyles"](function (theme) {
    return {
      root: {
        // backgroundColor: theme.backgroundSecondaryColor,
        width: '100%',
        borderTopWidth: 2,
        borderTopColor: theme.dimmedColor,
        paddingVertical: 10
      },
      title: {
        color: theme.dimmedColor,
        fontWeight: '900',
        fontSize: '8pt',
        textTransform: 'uppercase'
      },
      children: {
        paddingTop: 10
      }
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: styles.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: styles.children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.children));
};

/***/ })

})
//# sourceMappingURL=index.js.9ad18c79313ba94fc74e.hot-update.js.map