webpackHotUpdate(5,{

/***/ "./api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wpapi__ = __webpack_require__("./node_modules/wpapi/wpapi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wpapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_wpapi__);



var endpoint = 'https://api.eatthisbeef.com/wp-json';

if (typeof window !== 'undefined') {
  endpoint = "https://cors-anywhere.herokuapp.com/".concat(endpoint);
}

var api = new __WEBPACK_IMPORTED_MODULE_0_wpapi___default.a({
  endpoint: endpoint
});
/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ })

})
//# sourceMappingURL=5.ce84ed391047a4c42eb3.hot-update.js.map