webpackHotUpdate("static/development/pages/_app.js",{

/***/ "../node_modules/ui/Link.js":
/*!**********************************!*\
  !*** ../node_modules/ui/Link.js ***!
  \**********************************/
/*! exports provided: Link, LinkButton, handlePress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return LinkButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePress", function() { return handlePress; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web */ "../node_modules/react-native-web/dist/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ "../node_modules/react-feather/dist/index.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Style */ "../node_modules/ui/Style.js");
/* harmony import */ var _Lang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Lang */ "../node_modules/ui/Lang.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ "../node_modules/ui/Button.js");


var _jsxFileName = "/Users/andreypopp/Workspace/arrowresearch/code/node_modules/ui/Link.js";







var Link = function Link(_ref) {
  var href = _ref.href,
      children = _ref.children,
      _ref$onPress = _ref.onPress,
      onPress = _ref$onPress === void 0 ? _Lang__WEBPACK_IMPORTED_MODULE_7__["emptyFunctionThatReturns"](false) : _ref$onPress,
      extraStyle = _ref.style;

  var _handlePress = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (e) {
    return handlePress(e, href, onPress);
  }, [href, onPress]);

  var theme = _Style__WEBPACK_IMPORTED_MODULE_6__["useTheme"]();
  var styles = _Style__WEBPACK_IMPORTED_MODULE_6__["useStyles"](function (theme) {
    return {
      root: {
        display: 'inline',
        borderRadius: 2,
        paddingHorizontal: 4,
        marginHorizontal: -4
      },
      label: {
        color: theme.linkColor,
        fontWeight: '600',
        textDecorationLine: 'underline'
      }
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["TouchableHighlight"], {
    underlayColor: theme.backgroundHighlightedColor,
    onPress: _handlePress,
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    accessibilityRole: "link",
    style: [styles.label, extraStyle],
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, children));
};
var LinkButton = function LinkButton(_ref2) {
  var href = _ref2.href,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["href"]);

  var onPress = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (e) {
    return handlePress(e, href, _Lang__WEBPACK_IMPORTED_MODULE_7__["emptyFunctionThatReturns"](false));
  }, [href]);
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onPress: onPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }));
};
var handlePress = function handlePress(e, href, onPress) {
  if (isExternalHref(href)) {
    return;
  }

  e.preventDefault();

  if (onPress != null && onPress(e)) {
    return;
  }

  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(href);
};

var isExternalHref = function isExternalHref(href) {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');
};

/***/ })

})
//# sourceMappingURL=_app.js.4fcc58bdcdaa0a6ef7f3.hot-update.js.map