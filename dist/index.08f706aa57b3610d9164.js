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

/***/ "./modules/submitForm/submitForm.scss":
/*!********************************************!*\
  !*** ./modules/submitForm/submitForm.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./modules/submitForm/submitForm.scss?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/style.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _modules_submitForm_submitForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/submitForm/submitForm */ \"./modules/submitForm/submitForm.js\");\n\n//import Form module\n\n//Add form module\nconst form = document.querySelector(\".form\");\nform.addEventListener(\"submit\", _modules_submitForm_submitForm__WEBPACK_IMPORTED_MODULE_1__.formData );\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/submitForm/submitForm.js":
/*!******************************************!*\
  !*** ./modules/submitForm/submitForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formData\": () => (/* binding */ formData)\n/* harmony export */ });\n/* harmony import */ var _submitForm_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submitForm.scss */ \"./modules/submitForm/submitForm.scss\");\n\n\nconst formData = (e) => {\n  e.preventDefault();\n  const form = document.querySelector(\"form\");\n  const buttonText = document.querySelector(\".btn-text\");\n  const spinner = document.querySelector(\".icon-spinner8\");\n  const submitText = document.querySelector(\".success-text\");\n\n  buttonText.style.display = \"none\";\n  spinner.classList.add(\"active\");\n\n  const sendData = async (url) => {\n    const response = await fetch(url, {\n      method: \"POST\",\n      body: new FormData(form)\n    })\n      .then(res => {\n        spinner.classList.remove(\"active\");\n        buttonText.style.display = \"block\";\n        submitText.classList.add(\"active\");\n        //удаление активного класса, который подтверждает успешный запрос\n        setTimeout(() => {\n          submitText.classList.remove(\"active\");\n        }, 1000);\n      })\n      .catch(err => {\n        alert(\"Ошибка запроса: \" + err.message)\n        form.reset();\n        spinner.classList.remove(\"active\");\n        buttonText.style.display = \"block\";\n      })\n    form.reset();\n  }\n  sendData('https://jsonplaceholder.typicode.com/posts');\n}\n\n\n//# sourceURL=webpack:///./modules/submitForm/submitForm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;