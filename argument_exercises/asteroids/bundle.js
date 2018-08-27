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

eval("module.exports = function() {\n  const Util = __webpack_require__(/*! ./utils */ \"./utils.js\");\n  const MovingObject = __webpack_require__(/*! ./moving_object */ \"./moving_object.js\");\n  const Ship = __webpack_require__(/*! ./ship */ \"./ship.js\");\n  const Bullet = __webpack_require__(/*! ./bullet */ \"./bullet.js\");\n\n  function Asteroid(options) {\n    options = options || {};\n    options.color = \"#666666\";\n    options.radius = 25;\n    options.vel = options.vel || Util.randomVec(4);\n  }\n  Util.inherit(Asteroid, MovingObject);\n\n\n};\n\n\n//# sourceURL=webpack:///./asteroids.js?");

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

eval("const prototypalInheritance = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './inherit.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nprototypalInheritance();\nconst asteroids = __webpack_require__(/*! ./asteroids.js */ \"./asteroids.js\");\nasteroids();\nconst bullet = __webpack_require__(/*! ./bullet.js */ \"./bullet.js\");\nbullet();\nconst game_view = __webpack_require__(/*! ./game_view.js */ \"./game_view.js\");\ngame_view();\nconst game = __webpack_require__(/*! ./game.js */ \"./game.js\");\ngame();\nconst ship = __webpack_require__(/*! ./ship */ \"./ship.js\");\nship();\nconst utils = __webpack_require__(/*! ./utils */ \"./utils.js\");\nutils();\n\n\n//# sourceURL=webpack:///./entry.js?");

/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (19:4)\\nYou may need an appropriate loader to handle this file type.\\n|     while (asteroids.length < 10) {\\n|       asteroids.push(new Asteroid({pos: randomPosition()})\\n>     };\\n|   }\\n| \");\n\n//# sourceURL=webpack:///./game.js?");

/***/ }),

/***/ "./game_view.js":
/*!**********************!*\
  !*** ./game_view.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function() {\n  const Util = __webpack_require__(/*! ./utils */ \"./utils.js\");\n  const MovingObject = __webpack_require__(/*! ./moving_object */ \"./moving_object.js\");\n  const Ship = __webpack_require__(/*! ./ship */ \"./ship.js\");\n  const Bullet = __webpack_require__(/*! ./bullet */ \"./bullet.js\");\n\n  function GameView (ctx) {\n    this.game = ths.game || new Game();\n    this.ctx = ctx;\n  }\n\n  GameView.prototype.start = function () {\n    setInterval(this.game.moveObjects(), this.game.draw(this.ctx), 20);\n  };\n\n};\n\n\n//# sourceURL=webpack:///./game_view.js?");

/***/ }),

/***/ "./moving_object.js":
/*!**************************!*\
  !*** ./moving_object.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\n  function MovingObject(options){\n    this.pos = options[pos];\n    this.vel = options[vel];\n    this.radius = options[radius];\n    this.color = options[color];\n\n  }\n  MovingObject.prototype.move = function() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  };\n\n  MovingObject.prototype.draw = function(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n      this.centerX,\n      this.centerY,\n      this.radius,\n      0,\n      2 * Math.PI,\n      false\n    );\n\n    ctx.fill();\n  };\n\n\n  MovingObject.prototype.isCollidedWith = function(otherMovingObject) {\n\n  };\n};\n\n\n//# sourceURL=webpack:///./moving_object.js?");

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

eval("module.exports = function() { inherits = function(child, parent) {\n  function Surrogate () {}\n  Surrogate.prototype = parent.prototype;\n  child.prototype = new Surrogate();\n  child.prototype.constructor = child;\n};\n\nconst Util = {\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\n};\n\n\n//# sourceURL=webpack:///./utils.js?");

/***/ })

/******/ });