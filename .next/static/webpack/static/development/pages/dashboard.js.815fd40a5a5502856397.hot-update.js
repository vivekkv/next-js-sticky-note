webpackHotUpdate("static\\development\\pages\\dashboard.js",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./pages/dashboard/index.tsx":
/*!***********************************!*\
  !*** ./pages/dashboard/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./pages/dashboard/reducer.tsx");
var _jsxFileName = "C:\\Works\\Farmers Fresh\\sticky_note\\pages\\dashboard\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Login() {
  _s();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    posts: []
  }),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      formData = _useState[0],
      setFormData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (posts) {
      dispatch({
        type: "SET_POSTS",
        posts: posts
      });
    });
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 12
    }
  }, state.loginSuccess ? __jsx("button", {
    onClick: onLogOff,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 34
    }
  }, "Log Off") : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 80
    }
  }, __jsx("input", {
    onChange: function onChange(e) {
      return setFormData({
        username: e.target.value,
        Password: formData === null || formData === void 0 ? void 0 : formData.Password
      });
    },
    placeholder: "user name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("input", {
    onChange: function onChange(e) {
      return setFormData({
        Password: e.target.value,
        username: formData === null || formData === void 0 ? void 0 : formData.username
      });
    },
    placeholder: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("button", {
    onClick: onLogin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Login"), state.message && __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 38
    }
  }, state.message)));
}

_s(Login, "PIXuliTlIfON9vQgVNXEQRTEU7I=");

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlUmVkdWNlciIsIlJlZHVjZXIiLCJwb3N0cyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidHlwZSIsImxvZ2luU3VjY2VzcyIsIm9uTG9nT2ZmIiwiZSIsInVzZXJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJQYXNzd29yZCIsIm9uTG9naW4iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUllLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxvQkFFRkMsd0RBQVUsQ0FBQ0MsZ0RBQUQsRUFBVTtBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFWLENBRlI7QUFBQSxNQUVyQkMsS0FGcUI7QUFBQSxNQUVkQyxRQUZjOztBQUFBLGtCQUdJQyxzREFBUSxDQUFlLElBQWYsQ0FIWjtBQUFBLE1BR3JCQyxRQUhxQjtBQUFBLE1BR1hDLFdBSFc7O0FBSzVCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsU0FBSyxDQUFDLDRDQUFELEVBQStDO0FBQ2hEQyxhQUFPLEVBQUU7QUFDTCx1Q0FBK0IsR0FEMUI7QUFFTCx3Q0FBZ0M7QUFGM0I7QUFEdUMsS0FBL0MsQ0FBTCxDQUtHQyxJQUxILENBS1EsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FMaEIsRUFNS0YsSUFOTCxDQU1VLFVBQUFULEtBQUssRUFBSTtBQUNYRSxjQUFRLENBQUM7QUFDTFUsWUFBSSxFQUFFLFdBREQ7QUFFTFosYUFBSyxFQUFFQTtBQUZGLE9BQUQsQ0FBUjtBQUlILEtBWEw7QUFZSCxHQWJRLEVBYU4sRUFiTSxDQUFUO0FBZUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUNDLEtBQUssQ0FBQ1ksWUFBTixHQUFxQjtBQUFRLFdBQU8sRUFBRUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFyQixHQUFtRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQy9EO0FBQU8sWUFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsYUFBT1YsV0FBVyxDQUFDO0FBQUVXLGdCQUFRLEVBQUVELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFyQjtBQUE0QkMsZ0JBQVEsRUFBRWYsUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVlO0FBQWhELE9BQUQsQ0FBbEI7QUFBQSxLQUFqQjtBQUFpRyxlQUFXLEVBQUMsV0FBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQrRCxFQUUvRDtBQUFPLFlBQVEsRUFBRSxrQkFBQ0osQ0FBRDtBQUFBLGFBQU9WLFdBQVcsQ0FBQztBQUFFYyxnQkFBUSxFQUFFSixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBckI7QUFBNEJGLGdCQUFRLEVBQUVaLFFBQUYsYUFBRUEsUUFBRix1QkFBRUEsUUFBUSxDQUFFWTtBQUFoRCxPQUFELENBQWxCO0FBQUEsS0FBakI7QUFBaUcsZUFBVyxFQUFDLFVBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGK0QsRUFHL0Q7QUFBUSxXQUFPLEVBQUVJLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIK0QsRUFLM0RuQixLQUFLLENBQUNvQixPQUFOLElBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUXBCLEtBQUssQ0FBQ29CLE9BQWQsQ0FMMEMsQ0FGcEUsQ0FBUDtBQVlIOztHQWhDdUJ4QixLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkYXNoYm9hcmQuanMuODE1ZmQ0MGE1YTU1MDI4NTYzOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xyXG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJy4vdHlwZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoUmVkdWNlciwgeyBwb3N0czogW10gfSlcclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8SVVzZXIgfCBudWxsPihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHBvc3RzID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNFVF9QT1NUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RzOiBwb3N0c1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdGUubG9naW5TdWNjZXNzID8gPGJ1dHRvbiBvbkNsaWNrPXtvbkxvZ09mZn0+TG9nIE9mZjwvYnV0dG9uPiA6IDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSwgUGFzc3dvcmQ6IGZvcm1EYXRhPy5QYXNzd29yZCB9KX0gcGxhY2Vob2xkZXI9XCJ1c2VyIG5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyBQYXNzd29yZDogZS50YXJnZXQudmFsdWUsIHVzZXJuYW1lOiBmb3JtRGF0YT8udXNlcm5hbWUgfSl9IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkxvZ2lufT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLm1lc3NhZ2UgJiYgPGxhYmVsPntzdGF0ZS5tZXNzYWdlfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==