webpackHotUpdate(6,{

/***/ "./pages/restaurant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_dynamic__ = __webpack_require__("./node_modules/next/dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__("./api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_withLayout__ = __webpack_require__("./components/withLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_helpers__ = __webpack_require__("./components/helpers.js");



var _jsxFileName = "/Users/brian.parks/Documents/etb/pages/restaurant.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Lightbox = __WEBPACK_IMPORTED_MODULE_2_next_dynamic___default()( false ? new (require('next/dynamic').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('react-image-lightbox');

    m.__webpackChunkName = 'react_image_lightbox_65979c8056b2b266b92ff6a8853dd6eb.js';
    resolve(m);
  }, 'chunks/react_image_lightbox_65979c8056b2b266b92ff6a8853dd6eb.js');
}) : new (__webpack_require__("./node_modules/next/dynamic.js").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("./node_modules/react-image-lightbox/dist/main.js");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(4).then((function (require) {
    try {
      var m = __webpack_require__("./node_modules/react-image-lightbox/dist/main.js");

      m.__webpackChunkName = 'react_image_lightbox_65979c8056b2b266b92ff6a8853dd6eb';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}));

var Restaurant =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Restaurant, _React$PureComponent);

  function Restaurant() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Restaurant);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Restaurant.__proto__ || Object.getPrototypeOf(Restaurant)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        photoIndex: 0,
        isOpen: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "initializeLightbox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(post) {
        window.images = [];
        window.images = Object(__WEBPACK_IMPORTED_MODULE_6__components_helpers__["a" /* buildImageaArray */])(post);

        _this.setState({
          isOpen: true
        });
      }
    }), _temp));
  }

  _createClass(Restaurant, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        post: this.props.post
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window !== 'undefined') {
        window.WOW = __webpack_require__("./node_modules/wowjs/dist/wow.js");
        window.wow = new WOW.WOW({
          live: true
        });
        window.wow.init();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          post = _state.post,
          photoIndex = _state.photoIndex,
          isOpen = _state.isOpen;
      var title = 'Eat This Beef, bruh';
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        property: "og:title",
        content: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        property: "og:image",
        content: '/static/img/' + post.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "twitter:title",
        content: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "twitter:image",
        content: '/static/img/' + post.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: '/static/img/logo.png',
        className: 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: '/static/img/logo-stacked.png',
        className: 'logo stacked',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), isOpen && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Lightbox, {
        mainSrc: window.images[photoIndex].src,
        nextSrc: window.images[(photoIndex + 1) % window.images.length].src,
        prevSrc: window.images[(photoIndex + window.images.length - 1) % window.images.length].src,
        imageTitle: window.images[photoIndex].title,
        animationOnKeyInput: 'true',
        onCloseRequest: function onCloseRequest() {
          return _this2.setState({
            isOpen: false
          });
        },
        onMovePrevRequest: function onMovePrevRequest() {
          return _this2.setState({
            photoIndex: (photoIndex + window.images.length - 1) % window.images.length
          });
        },
        onMoveNextRequest: function onMoveNextRequest() {
          return _this2.setState({
            photoIndex: (photoIndex + 1) % window.images.length
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        className: 'restaurant-list',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        key: post.id,
        className: 'restaurant single ' + Object(__WEBPACK_IMPORTED_MODULE_6__components_helpers__["e" /* getWowClass */])(this.window),
        "data-wow-duration": ".5s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        dangerouslySetInnerHTML: {
          __html: post.title.rendered
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: '/static/img/' + Object(__WEBPACK_IMPORTED_MODULE_6__components_helpers__["c" /* getCategoryIcon */])(post.section) + '.png',
        className: 'icon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: 'address',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: Object(__WEBPACK_IMPORTED_MODULE_6__components_helpers__["d" /* getGoogleMapsUrl */])(post),
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, post.addressstreet + ', ' + post.addresscity + ', ' + post.addressstate)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        className: 'img-thumb',
        onClick: function onClick() {
          return _this2.initializeLightbox(post);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: '/static/img/' + post.imgthumb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: 'copy',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: post.content.rendered
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
        var slug, res, post;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                slug = _ref2.query.slug, res = _ref2.res;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_4__api__["a" /* default */].posts().slug(slug).embed();

              case 3:
                post = _context.sent[0];

                if (!post) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", {
                  post: post
                });

              case 6:
                if (res) {
                  res.statusCode = 404;
                }

                return _context.abrupt("return", {
                  error: true
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Restaurant;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5__components_withLayout__["a" /* default */])(Restaurant));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/restaurant")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.17074a970e2b6525aae5.hot-update.js.map