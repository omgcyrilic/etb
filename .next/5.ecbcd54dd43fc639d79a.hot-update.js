webpackHotUpdate(5,{

/***/ "./components/helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dateDisplay */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCategoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getGoogleMapsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildImageaArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getWowClass; });


var dateDisplay = function dateDisplay(dateString) {
  var d = new Date(dateString);
  var month = new Array();
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';
  var monthText = month[d.getMonth()];
  var year = d.getFullYear();
  return monthText + ' ' + year;
};
var getCategoryIcon = function getCategoryIcon(category) {
  var categoryId = parseInt(category[0]);

  if (categoryId === 1) {
    return 'top';
  }

  if (categoryId === 2) {
    return 'hm';
  }

  if (categoryId === 3) {
    return 'fail';
  }

  if (categoryId === 4) {
    return 'placeholder';
  } else {
    return 'error';
  }
};
var getGoogleMapsUrl = function getGoogleMapsUrl(post) {
  var url = '';
  url = 'https://www.google.com/maps/place/' + post.addressstreet + '+' + post.addresscity + '+' + post.addressstate;
  return url;
};
var buildImageaArray = function buildImageaArray(post) {
  var images = [];

  if (typeof post !== 'undefined') {
    if (typeof post.img !== 'undefined') {
      images.push({
        'src': '/static/img/' + post.img,
        'title': post.restaurant
      });
    }

    if (typeof post.imgbonus !== 'undefined') {
      images.push({
        'src': '/static/img/' + post.imgbonus,
        'title': post.restaurant
      });
    }

    if (typeof post.imgexterior !== 'undefined') {
      images.push({
        'src': '/static/img/' + post.imgexterior,
        'title': post.restaurant
      });
    }
  }

  return images;
}; // do not apply wow class when rendering server side for SEOz

var getWowClass = function getWowClass(window) {
  var wowClass = '';

  if (typeof window !== 'undefined') {
    wowClass = 'wow fadeInUp';
  }

  return wowClass;
};

/***/ }),

/***/ "./pages/fail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_waypoint__ = __webpack_require__("./node_modules/react-waypoint/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_dynamic__ = __webpack_require__("./node_modules/next/dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api__ = __webpack_require__("./api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_withLayout__ = __webpack_require__("./components/withLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_helpers__ = __webpack_require__("./components/helpers.js");



var _jsxFileName = "/Users/brian.parks/Documents/etb/pages/fail.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Lightbox = __WEBPACK_IMPORTED_MODULE_3_next_dynamic___default()( false ? new (require('next/dynamic').SameLoopPromise)(function (resolve, reject) {
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

var Fail =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Fail, _React$PureComponent);

  function Fail() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Fail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Fail.__proto__ || Object.getPrototypeOf(Fail)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        page: 1,
        loading: false,
        hasMore: true,
        photoIndex: 0,
        isOpen: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "loadMore", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var posts;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(_this.state.loading || !_this.state.hasMore)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _this.setState({
                    loading: true
                  });

                  _context.next = 5;
                  return __WEBPACK_IMPORTED_MODULE_6__api__["a" /* default */].posts().perPage(10).page(_this.state.page + 1).embed();

                case 5:
                  posts = _context.sent;

                  if (posts.length > 0) {
                    _this.setState({
                      posts: _this.state.posts.concat(posts),
                      page: _this.state.page + 1
                    });
                  } else {
                    _this.setState({
                      hasMore: false
                    });
                  }

                  _this.setState({
                    loading: false
                  });

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "initializeLightbox", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(post) {
        window.images = [];
        window.images = Object(__WEBPACK_IMPORTED_MODULE_8__components_helpers__["a" /* buildImageaArray */])(post);

        _this.setState({
          isOpen: true
        });
      }
    }), _temp));
  }

  _createClass(Fail, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        posts: this.props.posts
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
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (typeof window !== 'undefined') {
        window.wow.sync();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          posts = _state.posts,
          photoIndex = _state.photoIndex,
          isOpen = _state.isOpen;
      var title = 'Eat This Beef, bruh - Fail';
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        property: "og:title",
        content: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        property: "og:image",
        content: '/static/img/' + posts.map(function (post) {
          return post.img;
        })[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "twitter:title",
        content: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "twitter:image",
        content: '/static/img/' + posts.map(function (post) {
          return post.img;
        })[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Fail"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "The list disappoints. These are the burgers to avoid. You don't want to waste cash and calories here. Take our word for it and hit a place on the ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "/top-ten",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "top ten")), " instead. Or don't, do whatever the fuck you want. Maybe they changed chefs or something right?"), isOpen && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Lightbox, {
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
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        className: 'restaurant-list',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, posts.map(function (post) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
          key: post.id,
          className: 'restaurant' + Object(__WEBPACK_IMPORTED_MODULE_8__components_helpers__["d" /* getWowClass */])(_this2.window),
          "data-wow-duration": ".5s",
          "data-wow-offset": "10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
          href: {
            pathname: '/restaurant',
            query: {
              slug: post.slug
            }
          },
          as: "/restaurant/".concat(post.slug),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
          dangerouslySetInnerHTML: {
            __html: post.rank + '. ' + post.title.rendered
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: 'address',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: Object(__WEBPACK_IMPORTED_MODULE_8__components_helpers__["c" /* getGoogleMapsUrl */])(post),
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, post.addressstreet + ', ' + post.addresscity + ', ' + post.addressstate)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          className: 'img-thumb',
          onClick: function onClick() {
            return _this2.initializeLightbox(post);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: '/static/img/' + post.imgthumb,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: 'copy',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: post.content.rendered
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        })));
      })), this.state.hasMore && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_waypoint__["a" /* default */], {
        key: this.state.page,
        onEnter: this.loadMore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), this.state.loading && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: 'loading-more',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: '/static/img/logo-burger.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var posts;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_6__api__["a" /* default */].posts().order('asc').orderby('title').perPage(10).category(4).embed();

              case 2:
                posts = _context2.sent;
                return _context2.abrupt("return", {
                  posts: posts
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Fail;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_7__components_withLayout__["a" /* default */])(Fail));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/fail")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.ecbcd54dd43fc639d79a.hot-update.js.map