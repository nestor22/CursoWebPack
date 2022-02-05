/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js-portfolio/./src/styles/main.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_Template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/Template.js */ \"./src/templates/Template.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n\n\n\n(async function App() {\n  const main =  false || document.getElementById('main');\n  main.innerHTML = await (0,_templates_Template_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n})();\n\n\n//# sourceURL=webpack://js-portfolio/./src/index.js?");

/***/ }),

/***/ "./src/templates/Template.js":
/*!***********************************!*\
  !*** ./src/templates/Template.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData.js */ \"./src/utils/getData.js\");\n\n\nconst Template = async () => {\n  const data = await (0,_utils_getData_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  const view = `\n    <div class=\"About\">\n      <div class=\"card\">\n        <div class=\"card_details\">\n          <div class=\"card_photo center circle\">\n            <img src=\"${data.picture.large}\" alt=\"${data.name.first}\">\n            <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" style=\"enable-background:new -580 439 577.9 194;\"\n              xml:space=\"preserve\">\n              <circle cx=\"50\" cy=\"50\" r=\"40\" />\n            </svg>\n          </div>\n          <p class=\"card_title\">Hi, My name is</p>\n          <p class=\"card_value\">${data.name.first} ${data.name.last}</p>\n        </div>\n        <div class=\"card_userdata\">\n          <ul>\n            <li>${data.email}</li>\n            <li>${data.location.country}</li>\n          </ul>\n        </div>\n        <div class=\"card_social\">\n          <a href=\"https://twitter.com/gndx\">\n            <img src=\"../src/assets/images/twitter.png\" />\n          </a>\n          <a href=\"https://github.com/gndx\">\n            <img src=\"../src/assets/images/github.png\" />\n          </a>\n          <a href=\"https://instagram.com/gndx\">\n            <img src=\"../src/assets/images/instagram.png\" />\n          </a>\n        </div>\n      </div>\n    </div>\n  `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Template);\n\n//# sourceURL=webpack://js-portfolio/./src/templates/Template.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API = 'https://randomuser.me/api/';\n\nconst getData = async (id) => {\n  const apiURl = id ? `${API}${id}` : API;\n  try {\n    const response = await fetch(apiURl);\n    const data = await response.json();\n    return data.results[0];\n  } catch (error) {\n    console.log('Fetch Error', error);\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://js-portfolio/./src/utils/getData.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;