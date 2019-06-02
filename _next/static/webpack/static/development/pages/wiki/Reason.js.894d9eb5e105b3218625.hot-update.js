webpackHotUpdate("static/development/pages/wiki/Reason.js",{

/***/ "./Wiki.js":
/*!*****************!*\
  !*** ./Wiki.js ***!
  \*****************/
/*! exports provided: Wiki */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wiki", function() { return Wiki; });
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "../node_modules/react-native-web/dist/index.js");
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui */ "../node_modules/ui/index.js");
/* harmony import */ var ui_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/Link */ "../node_modules/ui/Link.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page */ "./Page.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Section */ "./Section.js");

var _jsxFileName = "/Users/andreypopp/Workspace/andreypopp.com/site/Wiki.js";







var index = __webpack_require__(/*! ./wiki-index.compute */ "./wiki-index.compute.js");

var Wiki = function Wiki(props) {
  var children = props.children,
      title = props.title,
      shouldRestoreScrollPosition = props.shouldRestoreScrollPosition;
  var pages = [];
  var curr = null;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(index.pages), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var name = _step.value;
      var item = index.pagesByName[name];

      if (item.title === title) {
        curr = item;
      }

      pages.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PageLink, {
        page: item,
        key: item.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var styles = Object(ui__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(function (theme) {
    return {
      index: {
        width: '100%',
        paddingTop: 50
      }
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Page__WEBPACK_IMPORTED_MODULE_5__["Page"], {
    showBackLink: true,
    title: title,
    shouldRestoreScrollPosition: shouldRestoreScrollPosition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ui__WEBPACK_IMPORTED_MODULE_3__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: styles.index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Section__WEBPACK_IMPORTED_MODULE_6__["Section"], {
    title: "pages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, pages)));
};

var PageLink = function PageLink(_ref) {
  var page = _ref.page;
  var styles = Object(ui__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(function (theme) {
    return {
      root: {
        width: '100%',
        paddingVertical: 5
      },
      titleText: {
        fontSize: '10pt',
        fontWeight: '900',
        textTransform: 'uppercase',
        color: theme.linkColor
      }
    };
  });

  var onPress = function onPress(e) {
    return Object(ui_Link__WEBPACK_IMPORTED_MODULE_4__["handlePress"])(e, page.href);
  };

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: styles.root,
    onPress: onPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    accessibilityRole: "link",
    style: styles.titleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, page.title));
};

/***/ })

})
//# sourceMappingURL=Reason.js.894d9eb5e105b3218625.hot-update.js.map