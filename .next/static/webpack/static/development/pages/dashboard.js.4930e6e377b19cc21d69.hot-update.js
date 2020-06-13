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
    }).then(function (users) {
      dispatch({
        type: 'SET_USERS',
        users: users
      });
    });
  }, []);

  var onLogin = function onLogin() {
    if (formData && formData.username && formData.Password) {
      var userExists = state.users.find(function (p) {
        return p.username == formData.username;
      });

      if (userExists && formData.Password == "123") {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/dashboard");
      } else {
        dispatch({
          type: 'ON_LOGIN_FAILED'
        });
      }

      return;
    }

    alert("Please enter all fields");
  };

  var onLogOff = function onLogOff() {
    return dispatch({
      type: 'ON_LOG_OFF'
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 12
    }
  }, state.loginSuccess ? __jsx("button", {
    onClick: onLogOff,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 34
    }
  }, "Log Off") : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
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
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx("button", {
    onClick: onLogin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Login"), state.message && __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlUmVkdWNlciIsIlJlZHVjZXIiLCJwb3N0cyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidXNlcnMiLCJ0eXBlIiwib25Mb2dpbiIsInVzZXJuYW1lIiwiUGFzc3dvcmQiLCJ1c2VyRXhpc3RzIiwiZmluZCIsInAiLCJSb3V0ZXIiLCJwdXNoIiwiYWxlcnQiLCJvbkxvZ09mZiIsImxvZ2luU3VjY2VzcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxvQkFFRkMsd0RBQVUsQ0FBQ0MsZ0RBQUQsRUFBVTtBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFWLENBRlI7QUFBQSxNQUVyQkMsS0FGcUI7QUFBQSxNQUVkQyxRQUZjOztBQUFBLGtCQUdJQyxzREFBUSxDQUFlLElBQWYsQ0FIWjtBQUFBLE1BR3JCQyxRQUhxQjtBQUFBLE1BR1hDLFdBSFc7O0FBSzVCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsU0FBSyxDQUFDLDRDQUFELEVBQStDO0FBQ2hEQyxhQUFPLEVBQUU7QUFDTCx1Q0FBK0IsR0FEMUI7QUFFTCx3Q0FBZ0M7QUFGM0I7QUFEdUMsS0FBL0MsQ0FBTCxDQUtHQyxJQUxILENBS1EsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FMaEIsRUFNS0YsSUFOTCxDQU1VLFVBQUFHLEtBQUssRUFBSTtBQUNYVixjQUFRLENBQUM7QUFDTFcsWUFBSSxFQUFFLFdBREQ7QUFFTEQsYUFBSyxFQUFFQTtBQUZGLE9BQUQsQ0FBUjtBQUlILEtBWEw7QUFZSCxHQWJRLEVBYU4sRUFiTSxDQUFUOztBQWVBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFFbEIsUUFBSVYsUUFBUSxJQUFJQSxRQUFRLENBQUNXLFFBQXJCLElBQWlDWCxRQUFRLENBQUNZLFFBQTlDLEVBQXdEO0FBRXBELFVBQUlDLFVBQVUsR0FBR2hCLEtBQUssQ0FBQ1csS0FBTixDQUFZTSxJQUFaLENBQWlCLFVBQUNDLENBQUQ7QUFBQSxlQUFjQSxDQUFDLENBQUNKLFFBQUYsSUFBY1gsUUFBUSxDQUFDVyxRQUFyQztBQUFBLE9BQWpCLENBQWpCOztBQUVBLFVBQUlFLFVBQVUsSUFBSWIsUUFBUSxDQUFDWSxRQUFULElBQXFCLEtBQXZDLEVBQThDO0FBRTFDSSwwREFBTSxDQUFDQyxJQUFQLENBQVksWUFBWjtBQUVILE9BSkQsTUFJTztBQUVIbkIsZ0JBQVEsQ0FBQztBQUNMVyxjQUFJLEVBQUU7QUFERCxTQUFELENBQVI7QUFJSDs7QUFFRDtBQUNIOztBQUNEUyxTQUFLLENBQUMseUJBQUQsQ0FBTDtBQUNILEdBckJEOztBQXVCQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFdBQU1yQixRQUFRLENBQUM7QUFBRVcsVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFkO0FBQUEsR0FBakI7O0FBRUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUNaLEtBQUssQ0FBQ3VCLFlBQU4sR0FBcUI7QUFBUSxXQUFPLEVBQUVELFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBckIsR0FBbUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUMvRDtBQUFPLFlBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLGFBQU9wQixXQUFXLENBQUM7QUFBRVUsZ0JBQVEsRUFBRVUsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXJCO0FBQTRCWCxnQkFBUSxFQUFFWixRQUFGLGFBQUVBLFFBQUYsdUJBQUVBLFFBQVEsQ0FBRVk7QUFBaEQsT0FBRCxDQUFsQjtBQUFBLEtBQWpCO0FBQWlHLGVBQVcsRUFBQyxXQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRCtELEVBRS9EO0FBQU8sWUFBUSxFQUFFLGtCQUFDUyxDQUFEO0FBQUEsYUFBT3BCLFdBQVcsQ0FBQztBQUFFVyxnQkFBUSxFQUFFUyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBckI7QUFBNEJaLGdCQUFRLEVBQUVYLFFBQUYsYUFBRUEsUUFBRix1QkFBRUEsUUFBUSxDQUFFVztBQUFoRCxPQUFELENBQWxCO0FBQUEsS0FBakI7QUFBaUcsZUFBVyxFQUFDLFVBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGK0QsRUFHL0Q7QUFBUSxXQUFPLEVBQUVELE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIK0QsRUFLM0RiLEtBQUssQ0FBQzJCLE9BQU4sSUFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRM0IsS0FBSyxDQUFDMkIsT0FBZCxDQUwwQyxDQUZwRSxDQUFQO0FBWUg7O0dBekR1Qi9CLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZC5qcy40OTMwZTZlMzc3YjE5Y2MyMWQ2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XHJcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnLi90eXBlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihSZWR1Y2VyLCB7IHBvc3RzOiBbXSB9KVxyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxJVXNlciB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIjogXCIqXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4odXNlcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUlMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzOiB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IG9uTG9naW4gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChmb3JtRGF0YSAmJiBmb3JtRGF0YS51c2VybmFtZSAmJiBmb3JtRGF0YS5QYXNzd29yZCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHVzZXJFeGlzdHMgPSBzdGF0ZS51c2Vycy5maW5kKChwOiBJVXNlcikgPT4gcC51c2VybmFtZSA9PSBmb3JtRGF0YS51c2VybmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlckV4aXN0cyAmJiBmb3JtRGF0YS5QYXNzd29yZCA9PSBcIjEyM1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnT05fTE9HSU5fRkFJTEVEJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGFsbCBmaWVsZHNcIilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkxvZ09mZiA9ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ09OX0xPR19PRkYnIH0pIFxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdGUubG9naW5TdWNjZXNzID8gPGJ1dHRvbiBvbkNsaWNrPXtvbkxvZ09mZn0+TG9nIE9mZjwvYnV0dG9uPiA6IDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSwgUGFzc3dvcmQ6IGZvcm1EYXRhPy5QYXNzd29yZCB9KX0gcGxhY2Vob2xkZXI9XCJ1c2VyIG5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyBQYXNzd29yZDogZS50YXJnZXQudmFsdWUsIHVzZXJuYW1lOiBmb3JtRGF0YT8udXNlcm5hbWUgfSl9IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkxvZ2lufT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLm1lc3NhZ2UgJiYgPGxhYmVsPntzdGF0ZS5tZXNzYWdlfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==