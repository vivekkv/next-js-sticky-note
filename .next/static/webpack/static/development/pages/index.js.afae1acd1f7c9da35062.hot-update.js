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
      var userExists = state.users.find(function (p) {
        return p.username == formData.username;
      });

      if (userExists && formData.Password == "123") {
        dispatch({
          type: "ON_LOGIN_SUCCESS"
        });
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("dashboard");
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
      lineNumber: 55,
      columnNumber: 12
    }
  }, state.loginSuccess ? __jsx("button", {
    onClick: onLogOff,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 34
    }
  }, "Log Off") : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 58,
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
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx("button", {
    onClick: onLogin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Login"), state.message && __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVJlZHVjZXIiLCJSZWR1Y2VyIiwidXNlcnMiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInR5cGUiLCJvbkxvZ2luIiwidXNlcm5hbWUiLCJQYXNzd29yZCIsInVzZXJFeGlzdHMiLCJmaW5kIiwicCIsIlJvdXRlciIsInB1c2giLCJhbGVydCIsIm9uTG9nT2ZmIiwibG9naW5TdWNjZXNzIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLG9CQUVGQyx3REFBVSxDQUFDQyxnREFBRCxFQUFVO0FBQUVDLFNBQUssRUFBRTtBQUFULEdBQVYsQ0FGUjtBQUFBLE1BRXJCQyxLQUZxQjtBQUFBLE1BRWRDLFFBRmM7O0FBQUEsa0JBR0lDLHNEQUFRLENBQWUsSUFBZixDQUhaO0FBQUEsTUFHckJDLFFBSHFCO0FBQUEsTUFHWEMsV0FIVzs7QUFLNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxTQUFLLENBQUMsNENBQUQsRUFBK0M7QUFDaERDLGFBQU8sRUFBRTtBQUNMLHVDQUErQixHQUQxQjtBQUVMLHdDQUFnQztBQUYzQjtBQUR1QyxLQUEvQyxDQUFMLENBS0dDLElBTEgsQ0FLUSxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUxoQixFQU1LRixJQU5MLENBTVUsVUFBQVQsS0FBSyxFQUFJO0FBQ1hFLGNBQVEsQ0FBQztBQUNMVSxZQUFJLEVBQUUsV0FERDtBQUVMWixhQUFLLEVBQUVBO0FBRkYsT0FBRCxDQUFSO0FBSUgsS0FYTDtBQVlILEdBYlEsRUFhTixFQWJNLENBQVQ7O0FBZUEsTUFBTWEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUVsQixRQUFJVCxRQUFRLElBQUlBLFFBQVEsQ0FBQ1UsUUFBckIsSUFBaUNWLFFBQVEsQ0FBQ1csUUFBOUMsRUFBd0Q7QUFFcEQsVUFBSUMsVUFBVSxHQUFHZixLQUFLLENBQUNELEtBQU4sQ0FBWWlCLElBQVosQ0FBaUIsVUFBQ0MsQ0FBRDtBQUFBLGVBQWNBLENBQUMsQ0FBQ0osUUFBRixJQUFjVixRQUFRLENBQUNVLFFBQXJDO0FBQUEsT0FBakIsQ0FBakI7O0FBRUEsVUFBSUUsVUFBVSxJQUFJWixRQUFRLENBQUNXLFFBQVQsSUFBcUIsS0FBdkMsRUFBOEM7QUFFMUNiLGdCQUFRLENBQUM7QUFDTFUsY0FBSSxFQUFFO0FBREQsU0FBRCxDQUFSO0FBSUFPLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxXQUFaO0FBRUgsT0FSRCxNQVFPO0FBRUhsQixnQkFBUSxDQUFDO0FBQ0xVLGNBQUksRUFBRTtBQURELFNBQUQsQ0FBUjtBQUlIOztBQUVEO0FBQ0g7O0FBQ0RTLFNBQUssQ0FBQyx5QkFBRCxDQUFMO0FBQ0gsR0F6QkQ7O0FBMkJBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsV0FBTXBCLFFBQVEsQ0FBQztBQUFFVSxVQUFJLEVBQUU7QUFBUixLQUFELENBQWQ7QUFBQSxHQUFqQjs7QUFFQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQ1gsS0FBSyxDQUFDc0IsWUFBTixHQUFxQjtBQUFRLFdBQU8sRUFBRUQsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFyQixHQUFtRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQy9EO0FBQU8sWUFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsYUFBT25CLFdBQVcsQ0FBQztBQUFFUyxnQkFBUSxFQUFFVSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBckI7QUFBNEJYLGdCQUFRLEVBQUVYLFFBQUYsYUFBRUEsUUFBRix1QkFBRUEsUUFBUSxDQUFFVztBQUFoRCxPQUFELENBQWxCO0FBQUEsS0FBakI7QUFBaUcsZUFBVyxFQUFDLFdBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEK0QsRUFFL0Q7QUFBTyxZQUFRLEVBQUUsa0JBQUNTLENBQUQ7QUFBQSxhQUFPbkIsV0FBVyxDQUFDO0FBQUVVLGdCQUFRLEVBQUVTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFyQjtBQUE0QlosZ0JBQVEsRUFBRVYsUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVVO0FBQWhELE9BQUQsQ0FBbEI7QUFBQSxLQUFqQjtBQUFpRyxlQUFXLEVBQUMsVUFBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUYrRCxFQUcvRDtBQUFRLFdBQU8sRUFBRUQsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUgrRCxFQUszRFosS0FBSyxDQUFDMEIsT0FBTixJQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVExQixLQUFLLENBQUMwQixPQUFkLENBTDBDLENBRnBFLENBQVA7QUFZSDs7R0E3RHVCOUIsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWZhZTFhY2QxZjdjOWRhMzUwNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xyXG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJy4vdHlwZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoUmVkdWNlciwgeyB1c2VyczogW10gfSlcclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8SVVzZXIgfCBudWxsPihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHVzZXJzID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1VTRVJTJyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyczogdXNlcnNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBvbkxvZ2luID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZm9ybURhdGEgJiYgZm9ybURhdGEudXNlcm5hbWUgJiYgZm9ybURhdGEuUGFzc3dvcmQpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB1c2VyRXhpc3RzID0gc3RhdGUudXNlcnMuZmluZCgocDogSVVzZXIpID0+IHAudXNlcm5hbWUgPT0gZm9ybURhdGEudXNlcm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJFeGlzdHMgJiYgZm9ybURhdGEuUGFzc3dvcmQgPT0gXCIxMjNcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk9OX0xPR0lOX1NVQ0NFU1NcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcImRhc2hib2FyZFwiKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ09OX0xPR0lOX0ZBSUxFRCcsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhbGwgZmllbGRzXCIpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25Mb2dPZmYgPSAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdPTl9MT0dfT0ZGJyB9KSBcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxvZ2luU3VjY2VzcyA/IDxidXR0b24gb25DbGljaz17b25Mb2dPZmZ9PkxvZyBPZmY8L2J1dHRvbj4gOiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyB1c2VybmFtZTogZS50YXJnZXQudmFsdWUsIFBhc3N3b3JkOiBmb3JtRGF0YT8uUGFzc3dvcmQgfSl9IHBsYWNlaG9sZGVyPVwidXNlciBuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgUGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlLCB1c2VybmFtZTogZm9ybURhdGE/LnVzZXJuYW1lIH0pfSBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25Mb2dpbn0+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tZXNzYWdlICYmIDxsYWJlbD57c3RhdGUubWVzc2FnZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=