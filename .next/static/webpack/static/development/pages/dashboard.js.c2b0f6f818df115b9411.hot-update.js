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
    users: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlUmVkdWNlciIsIlJlZHVjZXIiLCJ1c2VycyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidHlwZSIsIm9uTG9naW4iLCJ1c2VybmFtZSIsIlBhc3N3b3JkIiwidXNlckV4aXN0cyIsImZpbmQiLCJwIiwiUm91dGVyIiwicHVzaCIsImFsZXJ0Iiwib25Mb2dPZmYiLCJsb2dpblN1Y2Nlc3MiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsb0JBRUZDLHdEQUFVLENBQUNDLGdEQUFELEVBQVU7QUFBRUMsU0FBSyxFQUFFO0FBQVQsR0FBVixDQUZSO0FBQUEsTUFFckJDLEtBRnFCO0FBQUEsTUFFZEMsUUFGYzs7QUFBQSxrQkFHSUMsc0RBQVEsQ0FBZSxJQUFmLENBSFo7QUFBQSxNQUdyQkMsUUFIcUI7QUFBQSxNQUdYQyxXQUhXOztBQUs1QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFNBQUssQ0FBQyw0Q0FBRCxFQUErQztBQUNoREMsYUFBTyxFQUFFO0FBQ0wsdUNBQStCLEdBRDFCO0FBRUwsd0NBQWdDO0FBRjNCO0FBRHVDLEtBQS9DLENBQUwsQ0FLR0MsSUFMSCxDQUtRLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBTGhCLEVBTUtGLElBTkwsQ0FNVSxVQUFBVCxLQUFLLEVBQUk7QUFDWEUsY0FBUSxDQUFDO0FBQ0xVLFlBQUksRUFBRSxXQUREO0FBRUxaLGFBQUssRUFBRUE7QUFGRixPQUFELENBQVI7QUFJSCxLQVhMO0FBWUgsR0FiUSxFQWFOLEVBYk0sQ0FBVDs7QUFlQSxNQUFNYSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBRWxCLFFBQUlULFFBQVEsSUFBSUEsUUFBUSxDQUFDVSxRQUFyQixJQUFpQ1YsUUFBUSxDQUFDVyxRQUE5QyxFQUF3RDtBQUVwRCxVQUFJQyxVQUFVLEdBQUdmLEtBQUssQ0FBQ0QsS0FBTixDQUFZaUIsSUFBWixDQUFpQixVQUFDQyxDQUFEO0FBQUEsZUFBY0EsQ0FBQyxDQUFDSixRQUFGLElBQWNWLFFBQVEsQ0FBQ1UsUUFBckM7QUFBQSxPQUFqQixDQUFqQjs7QUFFQSxVQUFJRSxVQUFVLElBQUlaLFFBQVEsQ0FBQ1csUUFBVCxJQUFxQixLQUF2QyxFQUE4QztBQUUxQ0ksMERBQU0sQ0FBQ0MsSUFBUCxDQUFZLFlBQVo7QUFFSCxPQUpELE1BSU87QUFFSGxCLGdCQUFRLENBQUM7QUFDTFUsY0FBSSxFQUFFO0FBREQsU0FBRCxDQUFSO0FBSUg7O0FBRUQ7QUFDSDs7QUFDRFMsU0FBSyxDQUFDLHlCQUFELENBQUw7QUFDSCxHQXJCRDs7QUF1QkEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNcEIsUUFBUSxDQUFDO0FBQUVVLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBZDtBQUFBLEdBQWpCOztBQUVBLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVDWCxLQUFLLENBQUNzQixZQUFOLEdBQXFCO0FBQVEsV0FBTyxFQUFFRCxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXJCLEdBQW1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDL0Q7QUFBTyxZQUFRLEVBQUUsa0JBQUNFLENBQUQ7QUFBQSxhQUFPbkIsV0FBVyxDQUFDO0FBQUVTLGdCQUFRLEVBQUVVLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFyQjtBQUE0QlgsZ0JBQVEsRUFBRVgsUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVXO0FBQWhELE9BQUQsQ0FBbEI7QUFBQSxLQUFqQjtBQUFpRyxlQUFXLEVBQUMsV0FBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQrRCxFQUUvRDtBQUFPLFlBQVEsRUFBRSxrQkFBQ1MsQ0FBRDtBQUFBLGFBQU9uQixXQUFXLENBQUM7QUFBRVUsZ0JBQVEsRUFBRVMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXJCO0FBQTRCWixnQkFBUSxFQUFFVixRQUFGLGFBQUVBLFFBQUYsdUJBQUVBLFFBQVEsQ0FBRVU7QUFBaEQsT0FBRCxDQUFsQjtBQUFBLEtBQWpCO0FBQWlHLGVBQVcsRUFBQyxVQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRitELEVBRy9EO0FBQVEsV0FBTyxFQUFFRCxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSCtELEVBSzNEWixLQUFLLENBQUMwQixPQUFOLElBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUTFCLEtBQUssQ0FBQzBCLE9BQWQsQ0FMMEMsQ0FGcEUsQ0FBUDtBQVlIOztHQXpEdUI5QixLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkYXNoYm9hcmQuanMuYzJiMGY2ZjgxOGRmMTE1Yjk0MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xyXG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJy4vdHlwZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoUmVkdWNlciwgeyB1c2VyczogW10gfSlcclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8SVVzZXIgfCBudWxsPihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHVzZXJzID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1VTRVJTJyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyczogdXNlcnNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBvbkxvZ2luID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZm9ybURhdGEgJiYgZm9ybURhdGEudXNlcm5hbWUgJiYgZm9ybURhdGEuUGFzc3dvcmQpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB1c2VyRXhpc3RzID0gc3RhdGUudXNlcnMuZmluZCgocDogSVVzZXIpID0+IHAudXNlcm5hbWUgPT0gZm9ybURhdGEudXNlcm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJFeGlzdHMgJiYgZm9ybURhdGEuUGFzc3dvcmQgPT0gXCIxMjNcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ09OX0xPR0lOX0ZBSUxFRCcsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhbGwgZmllbGRzXCIpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25Mb2dPZmYgPSAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdPTl9MT0dfT0ZGJyB9KSBcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxvZ2luU3VjY2VzcyA/IDxidXR0b24gb25DbGljaz17b25Mb2dPZmZ9PkxvZyBPZmY8L2J1dHRvbj4gOiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyB1c2VybmFtZTogZS50YXJnZXQudmFsdWUsIFBhc3N3b3JkOiBmb3JtRGF0YT8uUGFzc3dvcmQgfSl9IHBsYWNlaG9sZGVyPVwidXNlciBuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgUGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlLCB1c2VybmFtZTogZm9ybURhdGE/LnVzZXJuYW1lIH0pfSBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25Mb2dpbn0+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tZXNzYWdlICYmIDxsYWJlbD57c3RhdGUubWVzc2FnZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=