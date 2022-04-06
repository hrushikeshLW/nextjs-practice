"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/news";
exports.ids = ["pages/news"];
exports.modules = {

/***/ "./pages/news/index.js":
/*!*****************************!*\
  !*** ./pages/news/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst News = ({ news: news1  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"List of news\"\n            }, void 0, false, {\n                fileName: \"/Users/lw/hrushikeshLW/learning/nextjs/nextjs-practice/pages/news/index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            news1.map((news)=>{\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            news.id,\n                            \" \",\n                            news.title,\n                            \" | \",\n                            news.category\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lw/hrushikeshLW/learning/nextjs/nextjs-practice/pages/news/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, undefined)\n                }, news.id, false, {\n                    fileName: \"/Users/lw/hrushikeshLW/learning/nextjs/nextjs-practice/pages/news/index.js\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, undefined));\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lw/hrushikeshLW/learning/nextjs/nextjs-practice/pages/news/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);\nasync function getServerSideProps() {\n    const response = await fetch(\"http://localhost:4000/news\");\n    const data = await response.json();\n    return {\n        props: {\n            news: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFFekIsS0FBSyxDQUFDQyxJQUFJLElBQUksQ0FBQ0MsQ0FBQUEsSUFBSSxFQUFKQSxLQUFJLEdBQUMsR0FBSyxDQUFDO0lBQ3hCLE1BQU0sNkVBQ0hDLENBQUc7O3dGQUNEQyxDQUFFOzBCQUFDLENBQVk7Ozs7OztZQUNmRixLQUFJLENBQUNHLEdBQUcsRUFBRUgsSUFBSSxHQUFLLENBQUM7Z0JBQ25CLE1BQU0sNkVBQ0hDLENBQUc7MEdBQ0RHLENBQUU7OzRCQUNBSixJQUFJLENBQUNLLEVBQUU7NEJBQUMsQ0FBQzs0QkFBQ0wsSUFBSSxDQUFDTSxLQUFLOzRCQUFDLENBQUc7NEJBQUNOLElBQUksQ0FBQ08sUUFBUTs7Ozs7OzttQkFGakNQLElBQUksQ0FBQ0ssRUFBRTs7Ozs7WUFNckIsQ0FBQzs7Ozs7OztBQUdQLENBQUM7QUFDRCxpRUFBZU4sSUFBSSxFQUFDO0FBRWIsZUFBZVMsa0JBQWtCLEdBQUcsQ0FBQztJQUMxQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUE0QjtJQUN6RCxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csSUFBSTtJQUVoQyxNQUFNLENBQUMsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUNOYixJQUFJLEVBQUVXLElBQUk7UUFDWixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXdzL2luZGV4LmpzPzdhYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBOZXdzID0gKHtuZXdzfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TGlzdCBvZiBuZXdzPC9oMT5cbiAgICAgIHtuZXdzLm1hcCgobmV3cykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtuZXdzLmlkfT5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAge25ld3MuaWR9IHtuZXdzLnRpdGxlfSB8IHtuZXdzLmNhdGVnb3J5fVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE5ld3M7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvbmV3c1wiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBuZXdzOiBkYXRhLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOZXdzIiwibmV3cyIsImRpdiIsImgxIiwibWFwIiwiaDIiLCJpZCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/news/index.js"));
module.exports = __webpack_exports__;

})();