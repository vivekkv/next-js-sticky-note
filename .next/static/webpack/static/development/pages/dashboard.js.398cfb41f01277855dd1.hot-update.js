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

_s(Login, "34vWns1pJM53ul/wzCu8nCIsdZQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlUmVkdWNlciIsIlJlZHVjZXIiLCJwb3N0cyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidHlwZSIsIm9uTG9nT2ZmIiwibWFwIiwiaSIsImlkIiwidGl0bGUiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxvQkFFRkMsd0RBQVUsQ0FBQ0MsZ0RBQUQsRUFBVTtBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFWLENBRlI7QUFBQSxNQUVyQkMsS0FGcUI7QUFBQSxNQUVkQyxRQUZjOztBQUk1QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFNBQUssQ0FBQyw0Q0FBRCxFQUErQztBQUNoREMsYUFBTyxFQUFFO0FBQ0wsdUNBQStCLEdBRDFCO0FBRUwsd0NBQWdDO0FBRjNCO0FBRHVDLEtBQS9DLENBQUwsQ0FLR0MsSUFMSCxDQUtRLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBTGhCLEVBTUtGLElBTkwsQ0FNVSxVQUFBTixLQUFLLEVBQUk7QUFDWEUsY0FBUSxDQUFDO0FBQ0xPLFlBQUksRUFBRSxXQUREO0FBRUxULGFBQUssRUFBRUE7QUFGRixPQUFELENBQVI7QUFJSCxLQVhMO0FBWUgsR0FiUSxFQWFOLEVBYk0sQ0FBVDs7QUFnQkEsTUFBTVUsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNUixRQUFRLENBQUM7QUFBRU8sVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFkO0FBQUEsR0FBakI7O0FBR0EsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0g7QUFBUSxXQUFPLEVBQUVDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERyxFQUVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUVQsS0FBSyxDQUFDRCxLQUFOLENBQVlXLEdBQVosQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFPO0FBRW5CLFdBQU87QUFBSSxTQUFHLEVBQUVBLENBQUMsQ0FBQ0MsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRCxDQUFDLENBQUNFLEtBQVAsQ0FERyxFQUVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUYsQ0FBQyxDQUFDRyxJQUFOLENBRkcsQ0FBUDtBQUlILEdBTkQsQ0FGUixDQUZHLENBQVA7QUFjSDs7R0FyQ3VCbEIsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGFzaGJvYXJkLmpzLjM5OGNmYjQxZjAxMjc3ODU1ZGQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihSZWR1Y2VyLCB7IHBvc3RzOiBbXSB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIjogXCIqXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocG9zdHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiU0VUX1BPU1RTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdHM6IHBvc3RzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIGNvbnN0IG9uTG9nT2ZmID0gKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnT05fTE9HX09GRicgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkxvZ09mZn0+TG9nIE9mZjwvYnV0dG9uPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucG9zdHMubWFwKChpKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntpLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpLmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==