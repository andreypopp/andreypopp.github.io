webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "../node_modules/react-native-web/dist/index.js");
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui */ "../node_modules/ui/index.js");
/* harmony import */ var ui_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/Style */ "../node_modules/ui/Style.js");
/* harmony import */ var ui_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui/Content */ "../node_modules/ui/Content.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Page */ "./Page.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Section */ "./Section.js");
/* harmony import */ var ui_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ui/Link */ "../node_modules/ui/Link.js");

var _jsxFileName = "/Users/andreypopp/Workspace/andreypopp.com/site/pages/index.js";









var writingsIndex = __webpack_require__(/*! ../writings-index.compute */ "./writings-index.compute.js");

var geoloc = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ui_Content__WEBPACK_IMPORTED_MODULE_5__["Link"], {
  href: "https://en.wikipedia.org/wiki/Saint_Petersburg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "St.Petersburg, Russia");
var twitter = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ui_Content__WEBPACK_IMPORTED_MODULE_5__["Link"], {
  href: "https://twitter.com/andreypopp",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "twitter.com/andreypopp");
var github = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ui_Content__WEBPACK_IMPORTED_MODULE_5__["Link"], {
  href: "https://github.com/andreypopp",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "github.com/andreypopp");
var email = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ui_Content__WEBPACK_IMPORTED_MODULE_5__["Link"], {
  href: "mailto:8mayday@gmail.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "8mayday@gmail.com");

var WritingLink = function WritingLink(_ref) {
  var writing = _ref.writing;

  var _handlePress = function _handlePress(e) {
    return Object(ui_Link__WEBPACK_IMPORTED_MODULE_8__["handlePress"])(e, writing.href);
  };

  var styles = ui_Style__WEBPACK_IMPORTED_MODULE_4__["useStyles"](function (theme) {
    return {
      root: {
        paddingVertical: 8
      },
      date: {
        color: theme.dimmedColor,
        fontSize: '8pt',
        fontWeight: '800'
      },
      title: {
        textTransform: 'uppercase',
        color: theme.linkColor,
        fontWeight: '800'
      }
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    accessibilityRole: "link",
    style: styles.title,
    href: writing.href,
    onPress: _handlePress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, writing.title), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: styles.date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, writing.date.year, "/", writing.date.month, "/", writing.date.day));
};

var WritingsArchive = function WritingsArchive(_ref2) {
  var writings = _ref2.writings;
  var children = [];
  var lastYear = null;
  var styles = ui_Style__WEBPACK_IMPORTED_MODULE_4__["useStyles"](function (theme) {
    return {
      year: {
        paddingTop: 30,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: theme.dimmedColor
      },
      yearText: {
        color: theme.dimmedColor,
        fontWeight: '900',
        fontSize: '8pt'
      }
    };
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(writings), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.date.year !== lastYear) {
        lastYear = item.date.year;
        children.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: styles.year,
          key: "year-".concat(lastYear),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          style: styles.yearText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, lastYear)));
      }

      children.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
        key: item.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WritingLink, {
        writing: item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })));
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

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var styles = ui_Style__WEBPACK_IMPORTED_MODULE_4__["useStyles"](function (theme) {
    return {
      me: {
        paddingVertical: 50
      }
    };
  });
  var recently = writingsIndex.filter(function (item) {
    return item.date.year >= 2019;
  }).slice(0, 3).map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WritingLink, {
      writing: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Page__WEBPACK_IMPORTED_MODULE_6__["Page"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, recently.lentgh > 0 ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Section__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    title: "Recently",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, recently)) : null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: styles.me,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ui_Content__WEBPACK_IMPORTED_MODULE_5__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "I'm Andrey Popp, software engineer based in ", geoloc, "."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "You can follow me on ", twitter, " which is mostly about tech. If you have something to say to me directly you can reach me via ", email, "."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "The list of my current interests include: Reason/OCaml, query languages, end-user programming, development tooling, programming language theory, vim/neovim, ..."))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Section__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    title: "Archive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WritingsArchive, {
    writings: writingsIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.b7549ea0a4469dcb550c.hot-update.js.map