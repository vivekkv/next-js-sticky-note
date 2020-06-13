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
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: onLogin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Login"), state.message && __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVJlZHVjZXIiLCJSZWR1Y2VyIiwidXNlcnMiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInR5cGUiLCJvbkxvZ2luIiwidXNlcm5hbWUiLCJQYXNzd29yZCIsInVzZXJFeGlzdHMiLCJmaW5kIiwicCIsIlJvdXRlciIsInB1c2giLCJhbGVydCIsIm9uTG9nT2ZmIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLG9CQUVGQyx3REFBVSxDQUFDQyxnREFBRCxFQUFVO0FBQUVDLFNBQUssRUFBRTtBQUFULEdBQVYsQ0FGUjtBQUFBLE1BRXJCQyxLQUZxQjtBQUFBLE1BRWRDLFFBRmM7O0FBQUEsa0JBR0lDLHNEQUFRLENBQWUsSUFBZixDQUhaO0FBQUEsTUFHckJDLFFBSHFCO0FBQUEsTUFHWEMsV0FIVzs7QUFLNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxTQUFLLENBQUMsNENBQUQsRUFBK0M7QUFDaERDLGFBQU8sRUFBRTtBQUNMLHVDQUErQixHQUQxQjtBQUVMLHdDQUFnQztBQUYzQjtBQUR1QyxLQUEvQyxDQUFMLENBS0dDLElBTEgsQ0FLUSxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUxoQixFQU1LRixJQU5MLENBTVUsVUFBQVQsS0FBSyxFQUFJO0FBQ1hFLGNBQVEsQ0FBQztBQUNMVSxZQUFJLEVBQUUsV0FERDtBQUVMWixhQUFLLEVBQUVBO0FBRkYsT0FBRCxDQUFSO0FBSUgsS0FYTDtBQVlILEdBYlEsRUFhTixFQWJNLENBQVQ7O0FBZUEsTUFBTWEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUVsQixRQUFJVCxRQUFRLElBQUlBLFFBQVEsQ0FBQ1UsUUFBckIsSUFBaUNWLFFBQVEsQ0FBQ1csUUFBOUMsRUFBd0Q7QUFFcEQsVUFBSUMsVUFBVSxHQUFHZixLQUFLLENBQUNELEtBQU4sQ0FBWWlCLElBQVosQ0FBaUIsVUFBQ0MsQ0FBRDtBQUFBLGVBQWNBLENBQUMsQ0FBQ0osUUFBRixJQUFjVixRQUFRLENBQUNVLFFBQXJDO0FBQUEsT0FBakIsQ0FBakI7O0FBRUEsVUFBSUUsVUFBVSxJQUFJWixRQUFRLENBQUNXLFFBQVQsSUFBcUIsS0FBdkMsRUFBOEM7QUFFMUNJLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxZQUFaO0FBRUgsT0FKRCxNQUlPO0FBRUhsQixnQkFBUSxDQUFDO0FBQ0xVLGNBQUksRUFBRTtBQURELFNBQUQsQ0FBUjtBQUlIOztBQUVEO0FBQ0g7O0FBQ0RTLFNBQUssQ0FBQyx5QkFBRCxDQUFMO0FBQ0gsR0FyQkQ7O0FBdUJBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsV0FBTXBCLFFBQVEsQ0FBQztBQUFFVSxVQUFJLEVBQUU7QUFBUixLQUFELENBQWQ7QUFBQSxHQUFqQjs7QUFFQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxZQUFRLEVBQUUsa0JBQUNXLENBQUQ7QUFBQSxhQUFPbEIsV0FBVyxDQUFDO0FBQUVTLGdCQUFRLEVBQUVTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFyQjtBQUE0QlYsZ0JBQVEsRUFBRVgsUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVXO0FBQWhELE9BQUQsQ0FBbEI7QUFBQSxLQUFqQjtBQUFpRyxlQUFXLEVBQUMsV0FBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBTyxZQUFRLEVBQUUsa0JBQUNRLENBQUQ7QUFBQSxhQUFPbEIsV0FBVyxDQUFDO0FBQUVVLGdCQUFRLEVBQUVRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFyQjtBQUE0QlgsZ0JBQVEsRUFBRVYsUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVVO0FBQWhELE9BQUQsQ0FBbEI7QUFBQSxLQUFqQjtBQUFpRyxlQUFXLEVBQUMsVUFBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBUSxXQUFPLEVBQUVELE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixFQUtRWixLQUFLLENBQUN5QixPQUFOLElBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUXpCLEtBQUssQ0FBQ3lCLE9BQWQsQ0FMekIsQ0FERyxDQUFQO0FBVUg7O0dBdkR1QjdCLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmI4Zjg2MWExNmNlN2ZjNmUzZDQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcclxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuL3R5cGUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFJlZHVjZXIsIHsgdXNlcnM6IFtdIH0pXHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlPElVc2VyIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOiBcIipcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbih1c2VycyA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9VU0VSUycsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHVzZXJzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qgb25Mb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGZvcm1EYXRhICYmIGZvcm1EYXRhLnVzZXJuYW1lICYmIGZvcm1EYXRhLlBhc3N3b3JkKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXNlckV4aXN0cyA9IHN0YXRlLnVzZXJzLmZpbmQoKHA6IElVc2VyKSA9PiBwLnVzZXJuYW1lID09IGZvcm1EYXRhLnVzZXJuYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VyRXhpc3RzICYmIGZvcm1EYXRhLlBhc3N3b3JkID09IFwiMTIzXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIilcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdPTl9MT0dJTl9GQUlMRUQnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYWxsIGZpZWxkc1wiKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uTG9nT2ZmID0gKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnT05fTE9HX09GRicgfSlcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSwgUGFzc3dvcmQ6IGZvcm1EYXRhPy5QYXNzd29yZCB9KX0gcGxhY2Vob2xkZXI9XCJ1c2VyIG5hbWVcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IFBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSwgdXNlcm5hbWU6IGZvcm1EYXRhPy51c2VybmFtZSB9KX0gcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25Mb2dpbn0+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubWVzc2FnZSAmJiA8bGFiZWw+e3N0YXRlLm1lc3NhZ2V9PC9sYWJlbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9