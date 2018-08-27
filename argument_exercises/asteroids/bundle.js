/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./asteroids.js":
/*!**********************!*\
  !*** ./asteroids.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function() {\n  const MovingObject = __webpack_require__(/*! ./moving_object */ \"./moving_object.js\");\n  Asteroid.prototype.Spacerock = function () {\n    this.inherit(MovingObject);\n  };\n};\n\n\n//# sourceURL=webpack:///./asteroids.js?");

/***/ }),

/***/ "./bullet.js":
/*!*******************!*\
  !*** ./bullet.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function() {\n  const MovingObject = __webpack_require__(/*! ./moving_object */ \"./moving_object.js\");\n  Bullet.prototype.bullet = function () {\n    this.inherit(MovingObject);\n  };\n};\n\n\n//# sourceURL=webpack:///./bullet.js?");

/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const prototypalInheritance = __webpack_require__(/*! ./inherit.js */ \"./inherit.js\");\nprototypalInheritance();\nconst asteroids = __webpack_require__(/*! ./asteroids.js */ \"./asteroids.js\");\nasteroids();\nconst bullet = __webpack_require__(/*! ./bullet.js */ \"./bullet.js\");\nbullet();\nconst game_view = __webpack_require__(/*! ./game_view.js */ \"./game_view.js\");\ngame_view();\nconst game = __webpack_require__(/*! ./game.js */ \"./game.js\");\ngame();\nconst inherit = __webpack_require__(/*! ./inherit.js */ \"./inherit.js\");\ninherit();\nconst ship = __webpack_require__(/*! ./ship */ \"./ship.js\");\nship();\nconst utils = __webpack_require__(/*! ./utils */ \"./utils.js\");\nutils();\n\n\n//# sourceURL=webpack:///./entry.js?");

/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {};\n\n\n//# sourceURL=webpack:///./game.js?");

/***/ }),

/***/ "./game_view.js":
/*!**********************!*\
  !*** ./game_view.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {};\n\n\n//# sourceURL=webpack:///./game_view.js?");

/***/ }),

/***/ "./inherit.js":
/*!********************!*\
  !*** ./inherit.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() { Function.prototype.inherits = function(parent) {\n  function Surrogate () {}\n  Surrogate.prototype = parent.prototype;\n  this.prototype = new Surrogate();\n  this.prototype.constructor = this;\n};\n};\n\n\n//# sourceURL=webpack:///./inherit.js?");

/***/ }),

/***/ "./moving_object.js":
/*!**************************!*\
  !*** ./moving_object.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() { MovingObject.prototype.move = function() {\n\n}\n\nMovingObject.prototype.draw = function(ctx) {\n\n}\n\n\nMovingObject.prototype.isCollidedWith = function(otherMovingObject) {\n\n}\n}\n\n\n//# sourceURL=webpack:///./moving_object.js?");

/***/ }),

/***/ "./ship.js":
/*!*****************!*\
  !*** ./ship.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function() {\n  const MovingObject = __webpack_require__(/*! ./moving_object */ \"./moving_object.js\");\n  Ship.prototype.Ship = function () {\n    this.inherit(MovingObject);\n  };\n};\n\n\n//# sourceURL=webpack:///./ship.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {}\n\n\n//# sourceURL=webpack:///./utils.js?");

/***/ })

/******/ });