webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncToGenerator; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcz8xZGExIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/stack/prod/voterepublic/vote-republic/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nHomePage.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var req, query, protocol, host, pageRequest, res, json;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            req = _ref.req, query = _ref.query;\n            protocol = req ? \"\".concat(req.headers['x-forwarded-proto'], \":\") : location.protocol;\n            host = req ? req.headers['x-forwarded-host'] : location.host;\n            pageRequest = \"https://9d6a8954f77b.ngrok.io/api/profiles?page=\".concat(query.page || 1, \"&limit=\").concat(query.limit || 9);\n            _context.next = 6;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(pageRequest);\n\n          case 6:\n            res = _context.sent;\n            _context.next = 9;\n            return res.json();\n\n          case 9:\n            json = _context.sent;\n            return _context.abrupt(\"return\", json);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nfunction HomePage(_ref3) {\n  var profiles = _ref3.profiles,\n      page = _ref3.page,\n      pageCount = _ref3.pageCount;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, \"Hello\"));\n}\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwicXVlcnkiLCJwcm90b2NvbCIsImhlYWRlcnMiLCJsb2NhdGlvbiIsImhvc3QiLCJwYWdlUmVxdWVzdCIsInBhZ2UiLCJsaW1pdCIsImZldGNoIiwicmVzIiwianNvbiIsInByb2ZpbGVzIiwicGFnZUNvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBQSxRQUFRLENBQUNDLGVBQVQ7QUFBQSwrTEFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGVBQVQsUUFBU0EsR0FBVCxFQUFjQyxLQUFkLFFBQWNBLEtBQWQ7QUFDbkJDLG9CQURtQixHQUNSRixHQUFHLGFBQ2JBLEdBQUcsQ0FBQ0csT0FBSixDQUFZLG1CQUFaLENBRGEsU0FFaEJDLFFBQVEsQ0FBQ0YsUUFIWTtBQUluQkcsZ0JBSm1CLEdBSVpMLEdBQUcsR0FBR0EsR0FBRyxDQUFDRyxPQUFKLENBQVksa0JBQVosQ0FBSCxHQUFxQ0MsUUFBUSxDQUFDQyxJQUpyQztBQUtuQkMsdUJBTG1CLDZEQUs4Q0wsS0FBSyxDQUFDTSxJQUFOLElBQ3JFLENBTnVCLG9CQU1aTixLQUFLLENBQUNPLEtBQU4sSUFBZSxDQU5IO0FBQUE7QUFBQSxtQkFPUEMseURBQUssQ0FBQ0gsV0FBRCxDQVBFOztBQUFBO0FBT25CSSxlQVBtQjtBQUFBO0FBQUEsbUJBUU5BLEdBQUcsQ0FBQ0MsSUFBSixFQVJNOztBQUFBO0FBUW5CQSxnQkFSbUI7QUFBQSw2Q0FTbEJBLElBVGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVlBLFNBQVNiLFFBQVQsUUFBaUQ7QUFBQSxNQUE3QmMsUUFBNkIsU0FBN0JBLFFBQTZCO0FBQUEsTUFBbkJMLElBQW1CLFNBQW5CQSxJQUFtQjtBQUFBLE1BQWJNLFNBQWEsU0FBYkEsU0FBYTtBQUMvQyxTQUNFLG1FQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxDQURGO0FBNkJEOztLQTlCUWYsUTtBQWdDTUEsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbkhvbWVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSwgcXVlcnkgfSkgPT4ge1xuICBjb25zdCBwcm90b2NvbCA9IHJlcVxuICAgID8gYCR7cmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLXByb3RvJ119OmBcbiAgICA6IGxvY2F0aW9uLnByb3RvY29sXG4gIGNvbnN0IGhvc3QgPSByZXEgPyByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddIDogbG9jYXRpb24uaG9zdFxuICBjb25zdCBwYWdlUmVxdWVzdCA9IGBodHRwczovLzlkNmE4OTU0Zjc3Yi5uZ3Jvay5pby9hcGkvcHJvZmlsZXM/cGFnZT0ke3F1ZXJ5LnBhZ2UgfHxcbiAgICAxfSZsaW1pdD0ke3F1ZXJ5LmxpbWl0IHx8IDl9YFxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwYWdlUmVxdWVzdClcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgcmV0dXJuIGpzb25cbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2UoeyBwcm9maWxlcywgcGFnZSwgcGFnZUNvdW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxzcGFuPkhlbGxvPC9zcGFuPlxuICAgICAgey8qIDx1bD5cbiAgICAgICAge3Byb2ZpbGVzLm1hcChwID0+IChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZmlsZVwiIGtleT17cC5pZH0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGU/aWQ9JHtwLmlkfWB9PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cC5hdmF0YXJ9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3AubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8bmF2PlxuICAgICAgICB7cGFnZSA+IDEgJiYgKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvP3BhZ2U9JHtwYWdlIC0gMX0mbGltaXQ9OWB9PlxuICAgICAgICAgICAgPGE+UHJldmlvdXM8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgICB7cGFnZSA8IHBhZ2VDb3VudCAmJiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8/cGFnZT0ke3BhZ2UgKyAxfSZsaW1pdD05YH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXh0XCI+TmV4dDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICl9XG4gICAgICA8L25hdj4gKi99XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})