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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
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
    fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
      return response.json();
    }).then(function (posts) {
      dispatch({
        type: "SET_POSTS",
        posts: posts
      });
    });
  }, []);

  var onLogOff = function onLogOff() {
    dispatch({
      type: 'ON_LOG_OFF'
    });
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }, __jsx("button", {
    onClick: onLogOff,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Log Off"), __jsx("ul", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlUmVkdWNlciIsIlJlZHVjZXIiLCJwb3N0cyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJ0eXBlIiwib25Mb2dPZmYiLCJSb3V0ZXIiLCJwdXNoIiwibWFwIiwiaSIsImlkIiwidGl0bGUiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsb0JBRUZDLHdEQUFVLENBQUNDLGdEQUFELEVBQVU7QUFBRUMsU0FBSyxFQUFFO0FBQVQsR0FBVixDQUZSO0FBQUEsTUFFckJDLEtBRnFCO0FBQUEsTUFFZEMsUUFGYzs7QUFJNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxTQUFLLENBQUMsNENBQUQsQ0FBTCxDQUFvREMsSUFBcEQsQ0FBeUQsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FBakUsRUFDS0YsSUFETCxDQUNVLFVBQUFMLEtBQUssRUFBSTtBQUNYRSxjQUFRLENBQUM7QUFDTE0sWUFBSSxFQUFFLFdBREQ7QUFFTFIsYUFBSyxFQUFFQTtBQUZGLE9BQUQsQ0FBUjtBQUlILEtBTkw7QUFPSCxHQVJRLEVBUU4sRUFSTSxDQUFUOztBQVVBLE1BQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkJQLFlBQVEsQ0FBQztBQUFFTSxVQUFJLEVBQUU7QUFBUixLQUFELENBQVI7QUFDQUUsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSCxHQUhEOztBQUtBLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQVEsV0FBTyxFQUFFRixRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREcsRUFFSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFSLEtBQUssQ0FBQ0QsS0FBTixDQUFZWSxHQUFaLENBQWdCLFVBQUNDLENBQUQsRUFBTztBQUVuQixXQUFPO0FBQUksU0FBRyxFQUFFQSxDQUFDLENBQUNDLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0QsQ0FBQyxDQUFDRSxLQUFQLENBREcsRUFFSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlGLENBQUMsQ0FBQ0csSUFBTixDQUZHLENBQVA7QUFJSCxHQU5ELENBRlIsQ0FGRyxDQUFQO0FBY0g7O0dBakN1Qm5CLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZC5qcy4zMjJmODRhZTE2NmI1MzFiYTZkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFJlZHVjZXIsIHsgcG9zdHM6IFtdIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHBvc3RzID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNFVF9QT1NUU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RzOiBwb3N0c1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IG9uTG9nT2ZmID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ09OX0xPR19PRkYnIH0pO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uTG9nT2ZmfT5Mb2cgT2ZmPC9idXR0b24+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wb3N0cy5tYXAoKGkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2kuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2kudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2kuYm9keX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9