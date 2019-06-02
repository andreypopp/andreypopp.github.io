webpackHotUpdate("static/development/pages/writings/2014-07-21-fighting-node-callbacks-with-purescript.js",{

/***/ "./Page.js":
/*!*****************!*\
  !*** ./Page.js ***!
  \*****************/
/*! exports provided: Page, PageFooter, Logo, PageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooter", function() { return PageFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeader", function() { return PageHeader; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web */ "../node_modules/react-native-web/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "../node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui */ "../node_modules/ui/index.js");
/* harmony import */ var ui_Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui/Style */ "../node_modules/ui/Style.js");


var _jsxFileName = "/Users/andreypopp/Workspace/andreypopp.com/site/Page.js";






var useLayoutStyle = function useLayoutStyle() {};

var Page = function Page(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subtitle = _ref.subtitle,
      showBackLink = _ref.showBackLink;

  var _UI$useDOMSize = ui__WEBPACK_IMPORTED_MODULE_5__["useDOMSize"](),
      _UI$useDOMSize2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UI$useDOMSize, 2),
      size = _UI$useDOMSize2[0],
      sizeRef = _UI$useDOMSize2[1];

  var isWideScreen = size != null && size.width > 700;
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (title) {
      document.title = _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(title) ? title.join() : title;
    } else {
      document.title = "@andreypopp";
    }
  }, [title]);
  var layoutStyle = ui__WEBPACK_IMPORTED_MODULE_5__["useStyle"](function (theme) {
    return {
      width: isWideScreen ? 700 : 350
    };
  }, [isWideScreen]);
  var styles = ui__WEBPACK_IMPORTED_MODULE_5__["useStyles"](function (theme) {
    return {
      root: {
        backgroundColor: theme.backgroundColor,
        flexGrow: 1
      },
      children: {
        alignItems: 'flex-start',
        paddingBottom: 80
      },
      header: {
        alignItems: 'flex-start'
      },
      wrapper: {
        alignItems: 'center',
        flexBasis: 0
      }
    };
  });
  var headerElement = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PageHeader, {
      showBackLink: showBackLink,
      title: title,
      subtitle: subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    });
  }, [showBackLink, title, subtitle]);
  var footerElement = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PageFooter, {
      layoutStyle: layoutStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    });
  }, [layoutStyle]);

  var onScroll = function onScroll(e) {
    var offsetY = e.nativeEvent.currentOffset.y;
    console.log(offsetY);
  };

  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    ref: sizeRef,
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["ScrollView"], {
    onScroll: onScroll,
    contentContainerStyle: styles.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: [layoutStyle, styles.header],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, headerElement), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: [layoutStyle, styles.children],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, children)), footerElement);
};
var PageFooter = function PageFooter(_ref2) {
  var layoutStyle = _ref2.layoutStyle;
  var styles = ui__WEBPACK_IMPORTED_MODULE_5__["useStyles"](function (theme) {
    return {
      root: {
        alignItems: 'center',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: theme.dimmedColor
      },
      wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      credit: {
        flexGrow: 1
      },
      creditText: {
        color: theme.dimmedColor,
        fontSize: '10pt',
        fontWeight: '600'
      },
      creditTextEm: {
        color: theme.dimmedColor,
        fontWeight: '900'
      }
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: [styles.wrapper, layoutStyle],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: styles.credit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: styles.creditText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "by ANDREY", react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: styles.creditTextEm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "POPP"))), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ui__WEBPACK_IMPORTED_MODULE_5__["ThemeSwitch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })));
};
var Logo = function Logo() {
  var styles = ui__WEBPACK_IMPORTED_MODULE_5__["useStyles"](function (theme) {
    return {
      titleText: {
        color: theme.titleColor,
        fontSize: '22pt',
        fontWeight: '600'
      },
      titleTextBold: {
        color: theme.titleColor,
        fontSize: '22pt',
        fontWeight: '900'
      }
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: styles.titleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "ANDREY"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: styles.titleTextBold,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "POPP"));
};
var PageHeader = function PageHeader(_ref3) {
  var title = _ref3.title,
      subtitle = _ref3.subtitle,
      showBackLink = _ref3.showBackLink;
  var styles = ui__WEBPACK_IMPORTED_MODULE_5__["useStyles"](function (theme) {
    return {
      root: {
        paddingTop: 50,
        paddingBottom: 50
      },
      backLink: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '12pt',
        fontWeight: '600',
        textDecorationLine: 'none'
      },
      titleRoot: {
        paddingTop: 50,
        paddingBottom: 10,
        flexDirection: 'row'
      },
      titleText: {
        color: theme.titleColor,
        fontSize: '22pt',
        fontWeight: '600'
      },
      titleTextBold: {
        color: theme.titleColor,
        fontSize: '22pt',
        fontWeight: '900'
      }
    };
  });
  var titleElement = null;

  if (title != null) {
    titleElement = react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      style: styles.titleText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, title);
  } else {
    titleElement = react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Logo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, showBackLink ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ui__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    href: "/",
    style: styles.backLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_feather__WEBPACK_IMPORTED_MODULE_4__["ArrowLeft"], {
    size: 18,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }), " back home") : null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: styles.titleRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, titleElement), subtitle);
};

/***/ })

})
//# sourceMappingURL=2014-07-21-fighting-node-callbacks-with-purescript.js.26e35411a1754d036534.hot-update.js.map