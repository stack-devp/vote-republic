webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/stack/prod/voterepublic/vote-republic/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nHomePage.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var req, query, protocol, host, pageRequest, res, json;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            req = _ref.req, query = _ref.query;\n            protocol = req ? \"\".concat(req.headers['x-forwarded-proto'], \":\") : location.protocol;\n            host = req ? req.headers['x-forwarded-host'] : location.host;\n            pageRequest = \"\".concat(protocol, \"//\").concat(host, \"/api/profiles?page=\").concat(query.page || 1, \"&limit=\").concat(query.limit || 9);\n            _context.next = 6;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(pageRequest);\n\n          case 6:\n            res = _context.sent;\n            _context.next = 9;\n            return res.json();\n\n          case 9:\n            json = _context.sent;\n            return _context.abrupt(\"return\", json);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nfunction HomePage(props) {\n  var _this = this;\n\n  console.log('props', props);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, profiles.map(function (p) {\n    return __jsx(\"li\", {\n      className: \"profile\",\n      key: p.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/profile?id=\".concat(p.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      src: p.avatar,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }\n    }, p.name))));\n  })), __jsx(\"nav\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, page > 1 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/?page=\".concat(page - 1, \"&limit=9\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, \"Previous\")), page < pageCount && __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/?page=\".concat(page + 1, \"&limit=9\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"next\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \"Next\"))));\n}\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwicXVlcnkiLCJwcm90b2NvbCIsImhlYWRlcnMiLCJsb2NhdGlvbiIsImhvc3QiLCJwYWdlUmVxdWVzdCIsInBhZ2UiLCJsaW1pdCIsImZldGNoIiwicmVzIiwianNvbiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInByb2ZpbGVzIiwibWFwIiwicCIsImlkIiwiYXZhdGFyIiwibmFtZSIsInBhZ2VDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQUEsUUFBUSxDQUFDQyxlQUFUO0FBQUEsK0xBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxlQUFULFFBQVNBLEdBQVQsRUFBY0MsS0FBZCxRQUFjQSxLQUFkO0FBQ25CQyxvQkFEbUIsR0FDUkYsR0FBRyxhQUNiQSxHQUFHLENBQUNHLE9BQUosQ0FBWSxtQkFBWixDQURhLFNBRWhCQyxRQUFRLENBQUNGLFFBSFk7QUFJbkJHLGdCQUptQixHQUlaTCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0csT0FBSixDQUFZLGtCQUFaLENBQUgsR0FBcUNDLFFBQVEsQ0FBQ0MsSUFKckM7QUFLbkJDLHVCQUxtQixhQUtGSixRQUxFLGVBS1dHLElBTFgsZ0NBS3FDSixLQUFLLENBQUNNLElBQU4sSUFDNUQsQ0FOdUIsb0JBTVpOLEtBQUssQ0FBQ08sS0FBTixJQUFlLENBTkg7QUFBQTtBQUFBLG1CQU9QQyx5REFBSyxDQUFDSCxXQUFELENBUEU7O0FBQUE7QUFPbkJJLGVBUG1CO0FBQUE7QUFBQSxtQkFRTkEsR0FBRyxDQUFDQyxJQUFKLEVBUk07O0FBQUE7QUFRbkJBLGdCQVJtQjtBQUFBLDZDQVNsQkEsSUFUa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBWUEsU0FBU2IsUUFBVCxDQUFrQmMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDckJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJGLEtBQXJCO0FBQ0YsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUFDLENBQUM7QUFBQSxXQUNiO0FBQUksZUFBUyxFQUFDLFNBQWQ7QUFBd0IsU0FBRyxFQUFFQSxDQUFDLENBQUNDLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSx3QkFBaUJELENBQUMsQ0FBQ0MsRUFBbkIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFRCxDQUFDLENBQUNFLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPRixDQUFDLENBQUNHLElBQVQsQ0FGRixDQURGLENBREYsQ0FEYTtBQUFBLEdBQWQsQ0FESCxDQURGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYixJQUFJLEdBQUcsQ0FBUCxJQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLG1CQUFZQSxJQUFJLEdBQUcsQ0FBbkIsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQUZKLEVBTUdBLElBQUksR0FBR2MsU0FBUCxJQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLG1CQUFZZCxJQUFJLEdBQUcsQ0FBbkIsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FQSixDQWJGLENBREY7QUE0QkQ7O0tBOUJRVCxRO0FBZ0NNQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuSG9tZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxLCBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHByb3RvY29sID0gcmVxXG4gICAgPyBgJHtyZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtcHJvdG8nXX06YFxuICAgIDogbG9jYXRpb24ucHJvdG9jb2xcbiAgY29uc3QgaG9zdCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J10gOiBsb2NhdGlvbi5ob3N0XG4gIGNvbnN0IHBhZ2VSZXF1ZXN0ID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3R9L2FwaS9wcm9maWxlcz9wYWdlPSR7cXVlcnkucGFnZSB8fFxuICAgIDF9JmxpbWl0PSR7cXVlcnkubGltaXQgfHwgOX1gXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHBhZ2VSZXF1ZXN0KVxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICByZXR1cm4ganNvblxufVxuXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xuICAgIGNvbnNvbGUubG9nKCdwcm9wcycsIHByb3BzKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dWw+XG4gICAgICAgIHtwcm9maWxlcy5tYXAocCA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2ZpbGVcIiBrZXk9e3AuaWR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlP2lkPSR7cC5pZH1gfT5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3AuYXZhdGFyfSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPntwLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPG5hdj5cbiAgICAgICAge3BhZ2UgPiAxICYmIChcbiAgICAgICAgICA8TGluayBocmVmPXtgLz9wYWdlPSR7cGFnZSAtIDF9JmxpbWl0PTlgfT5cbiAgICAgICAgICAgIDxhPlByZXZpb3VzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgICAge3BhZ2UgPCBwYWdlQ291bnQgJiYgKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvP3BhZ2U9JHtwYWdlICsgMX0mbGltaXQ9OWB9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV4dFwiPk5leHQ8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})