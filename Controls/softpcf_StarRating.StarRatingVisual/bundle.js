/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./StarRatingVisual/index.ts"
/*!***********************************!*\
  !*** ./StarRatingVisual/index.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StarRatingVisual: () => (/* binding */ StarRatingVisual)\n/* harmony export */ });\nclass StarRatingVisual {\n  constructor() {\n    // ── State ──────────────────────────────────────────────────────────\n    this._currentRating = 0; // committed value → saved to Dataverse\n    this._hoverRating = 0; // transient hover highlight\n    // ── Config (from manifest properties) ─────────────────────────────\n    this._maxStars = 5;\n    this._starColor = \"#f5a623\";\n    this._allowClear = true;\n    this._showLabel = true;\n    this._isDisabled = false;\n  }\n  // ══════════════════════════════════════════════════════════════════\n  // init — called ONCE when the component first loads\n  // ══════════════════════════════════════════════════════════════════\n  init(context, notifyOutputChanged, _state, container) {\n    this._container = container;\n    this._notifyOutputChanged = notifyOutputChanged;\n    // Read initial property values\n    this._readProperties(context);\n    // Create the root wrapper div\n    this._wrapper = document.createElement(\"div\");\n    this._wrapper.className = \"sr-wrapper\";\n    this._container.appendChild(this._wrapper);\n    this._render();\n  }\n  // ══════════════════════════════════════════════════════════════════\n  // updateView — called every time the form data or properties change\n  // ══════════════════════════════════════════════════════════════════\n  updateView(context) {\n    this._readProperties(context);\n    this._render();\n  }\n  // ══════════════════════════════════════════════════════════════════\n  // getOutputs — called by Power Apps after notifyOutputChanged fires\n  // Return the new value that should be written back to Dataverse\n  // ══════════════════════════════════════════════════════════════════\n  getOutputs() {\n    return {\n      rating: this._currentRating\n    };\n  }\n  // ══════════════════════════════════════════════════════════════════\n  // destroy — cleanup when the component is removed from the DOM\n  // ══════════════════════════════════════════════════════════════════\n  destroy() {\n    this._wrapper.innerHTML = \"\";\n  }\n  // ══════════════════════════════════════════════════════════════════\n  // PRIVATE HELPERS\n  // ══════════════════════════════════════════════════════════════════\n  /** Read all configurable properties from the PCF context object */\n  _readProperties(context) {\n    var _a, _b, _c, _d, _e, _f, _g, _h, _j;\n    this._currentRating = (_b = (_a = context.parameters.rating) === null || _a === void 0 ? void 0 : _a.raw) !== null && _b !== void 0 ? _b : this._currentRating;\n    this._maxStars = (_d = (_c = context.parameters.maxStars) === null || _c === void 0 ? void 0 : _c.raw) !== null && _d !== void 0 ? _d : 5;\n    this._starColor = ((_e = context.parameters.starColor) === null || _e === void 0 ? void 0 : _e.raw) || \"#f5a623\";\n    this._allowClear = (_g = (_f = context.parameters.allowClear) === null || _f === void 0 ? void 0 : _f.raw) !== null && _g !== void 0 ? _g : true;\n    this._showLabel = (_j = (_h = context.parameters.showLabel) === null || _h === void 0 ? void 0 : _h.raw) !== null && _j !== void 0 ? _j : true;\n    this._isDisabled = context.mode.isControlDisabled;\n  }\n  /** Full render — rebuilds all stars inside _wrapper */\n  _render() {\n    this._wrapper.innerHTML = \"\";\n    // ── Stars row ──────────────────────────────────────────────────\n    var starsRow = document.createElement(\"div\");\n    starsRow.className = \"sr-stars-row\";\n    starsRow.setAttribute(\"role\", \"radiogroup\");\n    starsRow.setAttribute(\"aria-label\", \"Rating: \".concat(this._currentRating, \" of \").concat(this._maxStars));\n    for (var i = 1; i <= this._maxStars; i++) {\n      starsRow.appendChild(this._buildStar(i));\n    }\n    // Reset hover when mouse leaves the entire row\n    starsRow.addEventListener(\"mouseleave\", () => {\n      this._hoverRating = 0;\n      this._refreshFills(starsRow);\n    });\n    this._wrapper.appendChild(starsRow);\n    // ── Numeric label  e.g. \"4 / 5\" ───────────────────────────────\n    if (this._showLabel) {\n      var label = document.createElement(\"span\");\n      label.className = \"sr-label\";\n      label.textContent = this._currentRating > 0 ? \"\".concat(this._currentRating, \" / \").concat(this._maxStars) : \"0 / \".concat(this._maxStars);\n      this._wrapper.appendChild(label);\n    }\n    // ── Clear button ───────────────────────────────────────────────\n    if (this._allowClear && this._currentRating > 0 && !this._isDisabled) {\n      var clearBtn = document.createElement(\"button\");\n      clearBtn.className = \"sr-clear-btn\";\n      clearBtn.textContent = \"✕ Clear\";\n      clearBtn.title = \"Clear rating\";\n      clearBtn.addEventListener(\"click\", () => {\n        this._currentRating = 0;\n        this._notifyOutputChanged();\n        this._render();\n      });\n      this._wrapper.appendChild(clearBtn);\n    }\n  }\n  /** Build a single star <button> for position `index` (1-based) */\n  _buildStar(index) {\n    var btn = document.createElement(\"button\");\n    btn.className = \"sr-star\";\n    btn.setAttribute(\"role\", \"radio\");\n    btn.setAttribute(\"aria-label\", \"\".concat(index, \" star\").concat(index !== 1 ? \"s\" : \"\"));\n    btn.setAttribute(\"aria-checked\", String(index === this._currentRating));\n    btn.disabled = this._isDisabled;\n    btn.innerHTML = this._starSVG(index <= this._currentRating);\n    if (!this._isDisabled) {\n      // Hover: preview fill up to this star\n      btn.addEventListener(\"mouseenter\", () => {\n        this._hoverRating = index;\n        var row = btn.closest(\".sr-stars-row\");\n        if (row) this._refreshFills(row);\n      });\n      // Click: commit rating (or toggle off if same star)\n      btn.addEventListener(\"click\", () => {\n        if (this._allowClear && index === this._currentRating) {\n          this._currentRating = 0;\n        } else {\n          this._currentRating = index;\n        }\n        this._hoverRating = 0;\n        this._notifyOutputChanged(); // tell Power Apps a new value is ready\n        this._render();\n      });\n    }\n    return btn;\n  }\n  /**\n   * Refresh the SVG fill of every star in `row` without rebuilding\n   * the DOM — used during hover so there is no flicker.\n   */\n  _refreshFills(row) {\n    var stars = row.querySelectorAll(\".sr-star\");\n    stars.forEach((btn, idx) => {\n      var filled = this._hoverRating > 0 ? idx + 1 <= this._hoverRating : idx + 1 <= this._currentRating;\n      btn.innerHTML = this._starSVG(filled);\n    });\n  }\n  /** Returns an inline SVG star polygon — filled or empty */\n  _starSVG(filled) {\n    var fill = filled ? this._starColor : \"none\";\n    var stroke = filled ? this._starColor : \"#c8c8c8\";\n    return \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n                 width=\\\"28\\\" height=\\\"28\\\" viewBox=\\\"0 0 24 24\\\"\\n                 fill=\\\"\".concat(fill, \"\\\"\\n                 stroke=\\\"\").concat(stroke, \"\\\"\\n                 stroke-width=\\\"1.5\\\"\\n                 stroke-linecap=\\\"round\\\"\\n                 stroke-linejoin=\\\"round\\\"\\n                 aria-hidden=\\\"true\\\">\\n              <polygon points=\\\"12 2 15.09 8.26 22 9.27 17 14.14\\n                               18.18 21.02 12 17.77 5.82 21.02\\n                               7 14.14 2 9.27 8.91 8.26 12 2\\\"/>\\n            </svg>\");\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./StarRatingVisual/index.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./StarRatingVisual/index.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('StarRating.StarRatingVisual', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.StarRatingVisual);
} else {
	var StarRating = StarRating || {};
	StarRating.StarRatingVisual = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.StarRatingVisual;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}