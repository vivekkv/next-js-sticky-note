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
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, state.posts.map(function (i) {
    return __jsx("li", {
      key: i.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 28
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, i.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlUmVkdWNlciIsIlJlZHVjZXIiLCJwb3N0cyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidHlwZSIsIm1hcCIsImkiLCJpZCIsInRpdGxlIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsb0JBRUZDLHdEQUFVLENBQUNDLGdEQUFELEVBQVU7QUFBRUMsU0FBSyxFQUFFO0FBQVQsR0FBVixDQUZSO0FBQUEsTUFFckJDLEtBRnFCO0FBQUEsTUFFZEMsUUFGYzs7QUFJNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxTQUFLLENBQUMsNENBQUQsRUFBK0M7QUFDaERDLGFBQU8sRUFBRTtBQUNMLHVDQUErQixHQUQxQjtBQUVMLHdDQUFnQztBQUYzQjtBQUR1QyxLQUEvQyxDQUFMLENBS0dDLElBTEgsQ0FLUSxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUxoQixFQU1LRixJQU5MLENBTVUsVUFBQU4sS0FBSyxFQUFJO0FBQ1hFLGNBQVEsQ0FBQztBQUNMTyxZQUFJLEVBQUUsV0FERDtBQUVMVCxhQUFLLEVBQUVBO0FBRkYsT0FBRCxDQUFSO0FBSUgsS0FYTDtBQVlILEdBYlEsRUFhTixFQWJNLENBQVQ7QUFlQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFDLEtBQUssQ0FBQ0QsS0FBTixDQUFZVSxHQUFaLENBQWdCLFVBQUNDLENBQUQsRUFBTztBQUVuQixXQUFPO0FBQUksU0FBRyxFQUFFQSxDQUFDLENBQUNDLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0QsQ0FBQyxDQUFDRSxLQUFQLENBREcsRUFFSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlGLENBQUMsQ0FBQ0csSUFBTixDQUZHLENBQVA7QUFJSCxHQU5ELENBRlIsQ0FERyxDQUFQO0FBYUg7O0dBaEN1QmpCLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZC5qcy44ZTI3MzllMWNhNThjM2E4ZGQ2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XHJcbmltcG9ydCB7IElQb3N0cyB9IGZyb20gJy4vdHlwZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoUmVkdWNlciwgeyBwb3N0czogW10gfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHBvc3RzID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNFVF9QT1NUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RzOiBwb3N0c1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucG9zdHMubWFwKChpKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntpLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpLmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==