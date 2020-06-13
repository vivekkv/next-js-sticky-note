webpackHotUpdate("static\\development\\pages\\dashboard.js",{

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
/* harmony import */ var _home_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/reducer */ "./pages/home/reducer.tsx");
var _jsxFileName = "C:\\Works\\Farmers Fresh\\sticky_note\\pages\\dashboard\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Login() {
  _s();

  var _this = this;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    posts: []
  }),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var _useReducer2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_home_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
      loginState = _useReducer2[0],
      loginDispatch = _useReducer2[1];

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

  var onLogOff = function onLogOff() {
    return dispatch({
      type: 'ON_LOG_OFF'
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 12
    }
  }, __jsx("button", {
    onClick: onLogOff,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Log Off"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, state.posts.map(function (i) {
    return __jsx("li", {
      key: i.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 28
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, i.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, i.body));
  })));
}

_s(Login, "brb3+oS9s1bNkRwEFbSodsbxa0M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlUmVkdWNlciIsIlJlZHVjZXIiLCJwb3N0cyIsInN0YXRlIiwiZGlzcGF0Y2giLCJMb2dpblJlZHVjZXIiLCJsb2dpblN0YXRlIiwibG9naW5EaXNwYXRjaCIsInVzZUVmZmVjdCIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJ0eXBlIiwib25Mb2dPZmYiLCJtYXAiLCJpIiwiaWQiLCJ0aXRsZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLG9CQUVGQyx3REFBVSxDQUFDQyxnREFBRCxFQUFVO0FBQUVDLFNBQUssRUFBRTtBQUFULEdBQVYsQ0FGUjtBQUFBLE1BRXJCQyxLQUZxQjtBQUFBLE1BRWRDLFFBRmM7O0FBQUEscUJBR1FKLHdEQUFVLENBQUNLLHFEQUFELEVBQWUsRUFBZixDQUhsQjtBQUFBLE1BR3JCQyxVQUhxQjtBQUFBLE1BR1RDLGFBSFM7O0FBSzVCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsU0FBSyxDQUFDLDRDQUFELEVBQStDO0FBQ2hEQyxhQUFPLEVBQUU7QUFDTCx1Q0FBK0IsR0FEMUI7QUFFTCx3Q0FBZ0M7QUFGM0I7QUFEdUMsS0FBL0MsQ0FBTCxDQUtHQyxJQUxILENBS1EsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FMaEIsRUFNS0YsSUFOTCxDQU1VLFVBQUFULEtBQUssRUFBSTtBQUNYRSxjQUFRLENBQUM7QUFDTFUsWUFBSSxFQUFFLFdBREQ7QUFFTFosYUFBSyxFQUFFQTtBQUZGLE9BQUQsQ0FBUjtBQUlILEtBWEw7QUFZSCxHQWJRLEVBYU4sRUFiTSxDQUFUOztBQWVBLE1BQU1hLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsV0FBTVgsUUFBUSxDQUFDO0FBQUVVLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBZDtBQUFBLEdBQWpCOztBQUVBLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQVEsV0FBTyxFQUFFQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREcsRUFFSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFaLEtBQUssQ0FBQ0QsS0FBTixDQUFZYyxHQUFaLENBQWdCLFVBQUNDLENBQUQsRUFBTztBQUVuQixXQUFPO0FBQUksU0FBRyxFQUFFQSxDQUFDLENBQUNDLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0QsQ0FBQyxDQUFDRSxLQUFQLENBREcsRUFFSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlGLENBQUMsQ0FBQ0csSUFBTixDQUZHLENBQVA7QUFJSCxHQU5ELENBRlIsQ0FGRyxDQUFQO0FBY0g7O0dBcEN1QnJCLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZC5qcy5mOGNlNjQ0ZDMyNjJlYzNmN2Q4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTG9naW5SZWR1Y2VyIGZyb20gJy4uL2hvbWUvcmVkdWNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoUmVkdWNlciwgeyBwb3N0czogW10gfSlcclxuICAgIGNvbnN0IFtsb2dpblN0YXRlLCBsb2dpbkRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoTG9naW5SZWR1Y2VyLCB7fSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOiBcIipcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihwb3N0cyA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJTRVRfUE9TVFNcIixcclxuICAgICAgICAgICAgICAgICAgICBwb3N0czogcG9zdHNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBvbkxvZ09mZiA9ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ09OX0xPR19PRkYnIH0pXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkxvZ09mZn0+TG9nIE9mZjwvYnV0dG9uPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucG9zdHMubWFwKChpKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntpLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpLmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==