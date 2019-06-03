webpackHotUpdate("static/development/pages/index.js",{

/***/ "../node_modules/ui/Style.js":
/*!***********************************!*\
  !*** ../node_modules/ui/Style.js ***!
  \***********************************/
/*! exports provided: iOSPalette, lightTheme, darkTheme, useFocusState, useMediaQuery, useDarkMode, useThemeState, useTheme, ThemeContext, WithTheme, useStyles, useStyle, styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iOSPalette", function() { return iOSPalette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusState", function() { return useFocusState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMediaQuery", function() { return useMediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDarkMode", function() { return useDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThemeState", function() { return useThemeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithTheme", function() { return WithTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyle", function() { return useStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var polychrome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polychrome */ "../node_modules/polychrome/dist/polychrome.es.js");
/* harmony import */ var keyboard_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keyboard-focus */ "../node_modules/keyboard-focus/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ "../node_modules/react-native-web/dist/index.js");


var _jsxFileName = "/Users/andreypopp/Workspace/andreypopp.com/node_modules/ui/Style.js";



if (typeof document !== 'undefined') {
  Object(keyboard_focus__WEBPACK_IMPORTED_MODULE_3__["default"])(document);
}



var iOSPalette = {
  tint: {
    red: Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('rgb(255, 59, 48)'),
    orange: Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('rgb(255, 149, 0)'),
    yellow: Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('rgb(255, 204, 0)'),
    green: Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('rgb(76, 217, 100)'),
    teal: Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('rgb(90, 200, 250)'),
    blue: Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('rgb(0, 122, 255)'),
    purple: Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('rgb(88, 86, 214)'),
    pink: Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('rgb(255, 45, 85)')
  }
};

function makeLightTheme() {
  var backgroundColor = Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('#f9f5f3');
  var backgroundSecondaryColor = Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('rgba(139, 75, 96, 0.10)');
  var titleColor = Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('#9c4663');
  var textColor = Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('#4e2936');
  var linkColor = Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('#9c4663');
  var labelColor = Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('#9c4663');
  return {
    themeName: 'light',
    backgroundColor: backgroundColor.rgb(),
    backgroundSecondaryColor: backgroundSecondaryColor.rgb(),
    backgroundSelectedColor: '#93ddff',
    backgroundHighlightedColor: '#C7C7CC',
    borderColor: backgroundColor.darken(25).rgb(),
    titleColor: titleColor.rgb(),
    textColor: textColor.rgb(),
    labelColor: labelColor.rgb(),
    linkColor: linkColor.rgb(),
    dimmedColor: textColor.fadeOut(30).rgb(),
    success: {
      backgroundColor: '#008641',
      textColor: '#F7F7F7'
    },
    danger: {
      backgroundColor: '#FF3B30',
      textColor: '#F7F7F7'
    }
  };
}

function makeDarkTheme() {
  var backgroundColor = Object(polychrome__WEBPACK_IMPORTED_MODULE_2__["default"])('#181818');
  return {
    themeName: 'dark',
    backgroundColor: backgroundColor.rgb(),
    backgroundSecondaryColor: backgroundColor.lighten(70).rgb(),
    backgroundSelectedColor: '#0b61a5',
    backgroundHighlightedColor: '#444444',
    borderColor: backgroundColor.lighten(100).rgb(),
    textColor: '#CCCCCC',
    titleColor: '#CCCCCC',
    labelColor: '#DDDDDD',
    linkColor: '#5AC8FA',
    dimmedColor: '#888888',
    success: {
      backgroundColor: '#00c861',
      textColor: '#F7F7F7'
    },
    danger: {
      backgroundColor: '#ff756d',
      textColor: '#F7F7F7'
    }
  };
}

var lightTheme = makeLightTheme();
var darkTheme = makeDarkTheme();
var useFocusState = function useFocusState() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$trackOnlyKeyboar = _ref.trackOnlyKeyboardFocus,
      trackOnlyKeyboardFocus = _ref$trackOnlyKeyboar === void 0 ? false : _ref$trackOnlyKeyboar;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      focus = _React$useState2[0],
      setFocus = _React$useState2[1];

  var props = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    var onFocus = function onFocus(e) {
      if (trackOnlyKeyboardFocus) {
        // $FlowFixMe: ...
        if (typeof e.target.getAttribute === 'function') {
          // $FlowFixMe: ...
          var isKeyboard = e.target.getAttribute('keyboard-focus') != null;

          if (isKeyboard) {
            setFocus(true);
          }
        } else {
          setFocus(true);
        }
      } else {
        setFocus(true);
      }
    };

    var onBlur = function onBlur() {
      return setFocus(false);
    };

    return {
      onFocus: onFocus,
      onBlur: onBlur
    };
  });
  return [focus, props];
};

var createDummyMediaQueryList = function createDummyMediaQueryList(matches) {
  return {
    matches: matches,
    addListener: function addListener(_listener) {},
    removeListener: function removeListener(_listener) {}
  };
};

function useMediaQuery(queryExpression, defaultValue) {
  var dependencies = [queryExpression];
  var query = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    return typeof window !== 'undefined' ? window.matchMedia(queryExpression) : createDummyMediaQueryList(Boolean(defaultValue));
  }, dependencies);

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__["useState"](query.matches),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      matches = _React$useState4[0],
      setMatches = _React$useState4[1];

  var handleQueryChange = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](function (e) {
    setMatches(e.matches);
  }, dependencies);
  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    query.addListener(handleQueryChange);
    return function () {
      return query.removeListener(handleQueryChange);
    };
  }, dependencies);
  return matches;
}
var prefersColorSchemeDark = '(prefers-color-scheme: dark)';
function useDarkMode() {
  return useMediaQuery(prefersColorSchemeDark);
}
var useThemeState = function useThemeState(defaultTheme) {
  var isDarkMode = useDarkMode();
  var systemTheme = isDarkMode ? darkTheme : lightTheme;

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4__["useState"](null),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      currentTheme = _React$useState6[0],
      setTheme = _React$useState6[1];

  var value = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    var theme = currentTheme != null ? currentTheme : defaultTheme != null ? defaultTheme : systemTheme;
    return [theme, setTheme];
  }, [defaultTheme, systemTheme, currentTheme]);
  return value;
};
var useTheme = function useTheme(defaultTheme) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4__["useContext"](ThemeContext),
      _React$useContext2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useContext, 2),
      theme = _React$useContext2[0],
      _setTheme = _React$useContext2[1];

  return theme;
};
var ThemeContext = react__WEBPACK_IMPORTED_MODULE_4__["createContext"]([typeof window !== 'undefined' ? window.matchMedia(prefersColorSchemeDark).matches ? darkTheme : lightTheme : lightTheme, function () {}]);
var WithTheme = function WithTheme(_ref2) {
  var children = _ref2.children,
      defaultTheme = _ref2.defaultTheme;
  var value = useThemeState(defaultTheme);
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](ThemeContext.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, children);
};
var useStyles = function useStyles(spec, dependencies) {
  var _React$useContext3 = react__WEBPACK_IMPORTED_MODULE_4__["useContext"](ThemeContext),
      _React$useContext4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useContext3, 2),
      theme = _React$useContext4[0],
      _setTheme = _React$useContext4[1];

  if (dependencies == null) {
    dependencies = [theme.themeName];
  } else {
    dependencies = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dependencies), [theme.themeName]);
  }

  var styles = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    return react_native_web__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"].create(spec(theme));
  }, dependencies);
  return styles;
};
var useStyle = function useStyle(spec, dependencies) {
  var _React$useContext5 = react__WEBPACK_IMPORTED_MODULE_4__["useContext"](ThemeContext),
      _React$useContext6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useContext5, 2),
      theme = _React$useContext6[0],
      _setTheme = _React$useContext6[1];

  if (dependencies == null) {
    dependencies = [theme.themeName];
  } else {
    dependencies = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dependencies), [theme.themeName]);
  }

  var styles = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    return react_native_web__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"].create({
      root: spec(theme)
    });
  }, dependencies);
  return styles.root;
};
var styles = react_native_web__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"].create({
  focus: {
    outlineStyle: 'auto',
    outlineColor: '-webkit-focus-ring-color'
  }
});

/***/ })

})
//# sourceMappingURL=index.js.3e0cd688a5cc361e065c.hot-update.js.map