webpackHotUpdate("static/development/pages/writings/2011-08-09-scalatypes-podcast.js",{

/***/ "./Post.js":
/*!*****************!*\
  !*** ./Post.js ***!
  \*****************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "../node_modules/react-native-web/dist/index.js");
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui */ "../node_modules/ui/index.js");
/* harmony import */ var ui_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/Link */ "../node_modules/ui/Link.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page */ "./Page.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Section */ "./Section.js");

var _jsxFileName = "/Users/andreypopp/Workspace/andreypopp.com/site/Post.js";







var index = __webpack_require__(/*! ./writings-index.compute */ "./writings-index.compute.js");

var Post = function Post(props) {
  var children = props.children,
      title = props.title;
  var curr = null;
  var next = null;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(index), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.title === title) {
        curr = item;
        continue;
      }

      if (curr != null) {
        next = item;
        break;
      }
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
      subtitle: {
        color: theme.dimmedColor,
        fontWeight: '600'
      }
    };
  });
  var subtitle = curr != null ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: styles.subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "published on ", curr.date.year, "/", curr.date.month, "/", curr.date.day) : null;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Page__WEBPACK_IMPORTED_MODULE_5__["Page"], {
    showBackLink: true,
    title: title,
    subtitle: subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ui__WEBPACK_IMPORTED_MODULE_3__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, children), next && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NextWriting, {
    writing: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
};

var NextWriting = function NextWriting(_ref) {
  var writing = _ref.writing;
  var styles = Object(ui__WEBPACK_IMPORTED_MODULE_3__["useStyles"])(function (theme) {
    return {
      root: {
        width: '100%',
        paddingTop: 50
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
    return Object(ui_Link__WEBPACK_IMPORTED_MODULE_4__["handlePress"])(e, writing.href);
  };

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Section__WEBPACK_IMPORTED_MODULE_6__["Section"], {
    title: "Next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    onPress: onPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: styles.titleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, writing.title))));
};

/***/ })

})
//# sourceMappingURL=2011-08-09-scalatypes-podcast.js.b5e0090a92c7bbe0b009.hot-update.js.map