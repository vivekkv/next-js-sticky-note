webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./pages/home/reducer.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Works\\Farmers Fresh\\sticky_note\\pages\\home\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Login() {
  _s();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    users: []
  }),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      formData = _useState[0],
      setFormData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch('https://jsonplaceholder.typicode.com/users', {
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
      var _state$users;

      var userExists = (_state$users = state.users) === null || _state$users === void 0 ? void 0 : _state$users.find(function (p) {
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

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 12
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
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
      lineNumber: 52,
      columnNumber: 13
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
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: onLogin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Login"), state.message && __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 34
    }
  }, state.message)));
}

_s(Login, "KABtwptNlETYJPkcqUGHqQtunX4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVJlZHVjZXIiLCJSZWR1Y2VyIiwidXNlcnMiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInR5cGUiLCJvbkxvZ2luIiwidXNlcm5hbWUiLCJQYXNzd29yZCIsInVzZXJFeGlzdHMiLCJmaW5kIiwicCIsIlJvdXRlciIsInB1c2giLCJhbGVydCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxvQkFFRkMsd0RBQVUsQ0FBQ0MsZ0RBQUQsRUFBVTtBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFWLENBRlI7QUFBQSxNQUVyQkMsS0FGcUI7QUFBQSxNQUVkQyxRQUZjOztBQUFBLGtCQUdJQyxzREFBUSxDQUFlLElBQWYsQ0FIWjtBQUFBLE1BR3JCQyxRQUhxQjtBQUFBLE1BR1hDLFdBSFc7O0FBSzVCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsU0FBSyxDQUFDLDRDQUFELEVBQStDO0FBQ2hEQyxhQUFPLEVBQUU7QUFDTCx1Q0FBK0IsR0FEMUI7QUFFTCx3Q0FBZ0M7QUFGM0I7QUFEdUMsS0FBL0MsQ0FBTCxDQUtHQyxJQUxILENBS1EsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FMaEIsRUFNS0YsSUFOTCxDQU1VLFVBQUFULEtBQUssRUFBSTtBQUNYRSxjQUFRLENBQUM7QUFDTFUsWUFBSSxFQUFFLFdBREQ7QUFFTFosYUFBSyxFQUFFQTtBQUZGLE9BQUQsQ0FBUjtBQUlILEtBWEw7QUFZSCxHQWJRLEVBYU4sRUFiTSxDQUFUOztBQWVBLE1BQU1hLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFFbEIsUUFBSVQsUUFBUSxJQUFJQSxRQUFRLENBQUNVLFFBQXJCLElBQWlDVixRQUFRLENBQUNXLFFBQTlDLEVBQXdEO0FBQUE7O0FBRXBELFVBQUlDLFVBQVUsbUJBQUdmLEtBQUssQ0FBQ0QsS0FBVCxpREFBRyxhQUFhaUIsSUFBYixDQUFrQixVQUFDQyxDQUFEO0FBQUEsZUFBY0EsQ0FBQyxDQUFDSixRQUFGLElBQWNWLFFBQVEsQ0FBQ1UsUUFBckM7QUFBQSxPQUFsQixDQUFqQjs7QUFFQSxVQUFJRSxVQUFVLElBQUlaLFFBQVEsQ0FBQ1csUUFBVCxJQUFxQixLQUF2QyxFQUE4QztBQUUxQ0ksMERBQU0sQ0FBQ0MsSUFBUCxDQUFZLFlBQVo7QUFFSCxPQUpELE1BSU87QUFFSGxCLGdCQUFRLENBQUM7QUFDTFUsY0FBSSxFQUFFO0FBREQsU0FBRCxDQUFSO0FBSUg7O0FBRUQ7QUFDSDs7QUFDRFMsU0FBSyxDQUFDLHlCQUFELENBQUw7QUFDSCxHQXJCRDs7QUF3QkEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sWUFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsYUFBT2pCLFdBQVcsQ0FBQztBQUFFUyxnQkFBUSxFQUFFUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBckI7QUFBNEJULGdCQUFRLEVBQUVYLFFBQUYsYUFBRUEsUUFBRix1QkFBRUEsUUFBUSxDQUFFVztBQUFoRCxPQUFELENBQWxCO0FBQUEsS0FBakI7QUFBaUcsZUFBVyxFQUFDLFdBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU8sWUFBUSxFQUFFLGtCQUFDTyxDQUFEO0FBQUEsYUFBT2pCLFdBQVcsQ0FBQztBQUFFVSxnQkFBUSxFQUFFTyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBckI7QUFBNEJWLGdCQUFRLEVBQUVWLFFBQUYsYUFBRUEsUUFBRix1QkFBRUEsUUFBUSxDQUFFVTtBQUFoRCxPQUFELENBQWxCO0FBQUEsS0FBakI7QUFBaUcsZUFBVyxFQUFDLFVBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQVEsV0FBTyxFQUFFRCxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosRUFLUVosS0FBSyxDQUFDd0IsT0FBTixJQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVF4QixLQUFLLENBQUN3QixPQUFkLENBTHpCLENBREcsQ0FBUDtBQVVIOztHQXREdUI1QixLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mOGNlNjQ0ZDMyNjJlYzNmN2Q4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XHJcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnLi90eXBlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihSZWR1Y2VyLCB7IHVzZXJzOiBbXSB9KVxyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxJVXNlciB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIjogXCIqXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4odXNlcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUlMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzOiB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IG9uTG9naW4gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChmb3JtRGF0YSAmJiBmb3JtRGF0YS51c2VybmFtZSAmJiBmb3JtRGF0YS5QYXNzd29yZCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHVzZXJFeGlzdHMgPSBzdGF0ZS51c2Vycz8uZmluZCgocDogSVVzZXIpID0+IHAudXNlcm5hbWUgPT0gZm9ybURhdGEudXNlcm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJFeGlzdHMgJiYgZm9ybURhdGEuUGFzc3dvcmQgPT0gXCIxMjNcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ09OX0xPR0lOX0ZBSUxFRCcsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhbGwgZmllbGRzXCIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlLCBQYXNzd29yZDogZm9ybURhdGE/LlBhc3N3b3JkIH0pfSBwbGFjZWhvbGRlcj1cInVzZXIgbmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgUGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlLCB1c2VybmFtZTogZm9ybURhdGE/LnVzZXJuYW1lIH0pfSBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkxvZ2lufT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tZXNzYWdlICYmIDxsYWJlbD57c3RhdGUubWVzc2FnZX08L2xhYmVsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=