!function(_){var e={};function r(s){if(e[s])return e[s].exports;var t=e[s]={i:s,l:!1,exports:{}};return _[s].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=_,r.c=e,r.d=function(_,e,s){r.o(_,e)||Object.defineProperty(_,e,{enumerable:!0,get:s})},r.r=function(_){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},r.t=function(_,e){if(1&e&&(_=r(_)),8&e)return _;if(4&e&&"object"==typeof _&&_&&_.__esModule)return _;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:_}),2&e&&"string"!=typeof _)for(var t in _)r.d(s,t,function(e){return _[e]}.bind(null,t));return s},r.n=function(_){var e=_&&_.__esModule?function(){return _.default}:function(){return _};return r.d(e,"a",e),e},r.o=function(_,e){return Object.prototype.hasOwnProperty.call(_,e)},r.p="",r(r.s="./src/index.js")}({"./src/img/image.jpg":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./img/image.jpg");\n\n//# sourceURL=webpack:///./src/img/image.jpg?')},"./src/img/sprite.svg":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./img/sprite.svg");\n\n//# sourceURL=webpack:///./src/img/sprite.svg?')},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main */ "./src/js/main.js");\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_main__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_sprite_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/sprite.svg */ "./src/img/sprite.svg");\n/* harmony import */ var _img_image_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/image.jpg */ "./src/img/image.jpg");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sass/style.sass */ "./src/sass/style.sass");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?')},"./src/js/main.js":function(module,exports){eval("$(document).ready(function () {\r\n    $(\".slider\").slick({\r\n        dots: true,\r\n        prevArrow: \"<button class='slick-prev slick-arrow'><svg><use href='img/sprite.svg#arrow-left'></use></svg></button>\",\r\n        nextArrow: \"<button class='slick-next slick-arrow'><svg><use href='img/sprite.svg#arrow-right'></use></svg></button>\",\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?")},"./src/sass/style.sass":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/style.sass?")}});