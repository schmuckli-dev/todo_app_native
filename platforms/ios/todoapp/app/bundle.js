require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schmucklicloud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./schmucklicloud_service.js");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./routing.js");
//
//
//
//
//
//
//
//
//
//
//
//
//



var appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      email: '',
      password: ''
    };
  },

  methods: {
    onLogin() {
      var global_this = this;
      console.log(this.email, this.password);
      _schmucklicloud_service__WEBPACK_IMPORTED_MODULE_0__["auth"].authorizeEmailPassword(this.email, this.password).then(function (response) {
        if (response.isOK) {
          appSettings.setString("session_token", response.data.session_token);
          alert('Authorization successful.').then(() => {
            global_this.$navigateTo(_routing__WEBPACK_IMPORTED_MODULE_1__["default"].main, {
              clearHistory: true,
              backstackVisible: true
            });
          });
        } else {
          alert(response.message).then(() => {
            console.log("Alert dialog closed.");
          });
        }
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schmucklicloud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./schmucklicloud_service.js");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./routing.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      items: []
    };
  },

  methods: {
    start() {
      var session_token = appSettings.getString("session_token", undefined);

      if (session_token !== undefined) {
        _schmucklicloud_service__WEBPACK_IMPORTED_MODULE_0__["storage"].setAuthToken(session_token);
        _schmucklicloud_service__WEBPACK_IMPORTED_MODULE_0__["storage"].getAll("items").then(function (response) {
          if (response.isOK) {
            this.items = response.data;
          }
        }.bind(this));
      } else {
        var global_this = this;
        alert("You are not authorized").then(() => {
          global_this.$navigateTo(_routing__WEBPACK_IMPORTED_MODULE_1__["default"].login, {
            clearHistory: true,
            backstackVisible: true
          });
        });
      }
    }

  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\nActionBar[data-v-c27482c4] {\n    background-color: white;\n    color: #000;\n}\nFlexboxLayout[data-v-c27482c4] {\n  background: #ffffff\n}\nButton[data-v-c27482c4] {\n  margin: 30px;\n  padding: 30px;\n  border-radius: 25px;\n  color: white;\n  font-size: 25px;\n  text-transform: capitalize;\n  background-color: #8989bb;\n  background-image: linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%);\n}\nTextField[data-v-c27482c4] {\n  background: rgb(241, 241, 241);\n  font-size: 25px;\n  padding: 30px;\n  margin: 30px;\n  border-radius: 25px;\n  border: 2px solid black;\n  width: 100%;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Login.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=style&index=0&id=f889b9d8&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\nActionBar[data-v-f889b9d8] {\n    background-color: white;\n    color: #000;\n}\nLabel[data-v-f889b9d8] {\n  color: black;\n  font-size: 20px;\n}\nListView[data-v-f889b9d8] {\n  color: black;\n}\n.item[data-v-f889b9d8] {\n  padding: 30px;\n}\n.total[data-v-f889b9d8] {\n  margin: 30px;\n}\n.list_item[data-v-f889b9d8] {\n  margin-bottom: 30px;\n}\nFlexboxLayout[data-v-f889b9d8] {\n  background: #ffffff\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Main.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { flat: "true", title: "Login" } }),
      _c(
        "AbsoluteLayout",
        [
          _c(
            "FlexboxLayout",
            { attrs: { top: "130", width: "100%", flexDirection: "column" } },
            [
              _c("TextField", {
                attrs: { hint: "Email", text: _vm.email },
                on: {
                  textChange: function($event) {
                    _vm.email = $event.value
                  }
                }
              }),
              _c("TextField", {
                attrs: { secure: "true", hint: "Password", text: _vm.password },
                on: {
                  textChange: function($event) {
                    _vm.password = $event.value
                  }
                }
              }),
              _c("Button", {
                attrs: { text: "Login" },
                on: { tap: _vm.onLogin }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=template&id=f889b9d8&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { on: { loaded: _vm.start } },
    [
      _c(
        "ActionBar",
        { attrs: { flat: "true", title: "Start" } },
        [_c("NavigationButton")],
        1
      ),
      _c(
        "StackLayout",
        [
          _c("Label", {
            staticClass: "total",
            attrs: { text: _vm.items.length + " Items" }
          }),
          _c(
            "ListView",
            {
              attrs: {
                top: "20",
                height: "100%",
                separatorColor: "transparent",
                items: _vm.items,
                "+alias": "item"
              }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        { staticClass: "item" },
                        [
                          _c("Label", { attrs: { text: item.data.name } }),
                          _c("Label", {
                            attrs: { text: item.data.description }
                          }),
                          _c("Label", { attrs: { text: "" } })
                        ],
                        1
                      )
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss",
	"./main.js": "./main.js",
	"./routing.js": "./routing.js",
	"./schmucklicloud_service.js": "./schmucklicloud_service.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for dark variables\r\n * Includes base variables with dark overrides\r\n **/\n/**\r\n * Dark variable overrides\r\n **/\n/**\r\n * Color classes\r\n * The following creates this pattern:\r\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\r\n**/\n.c-white {\n  color: #fff; }\n\n.c-bg-white {\n  background-color: #fff; }\n\n.c-black {\n  color: #000; }\n\n.c-bg-black {\n  background-color: #000; }\n\n.c-aqua {\n  color: #00caab; }\n\n.c-bg-aqua {\n  background-color: #00caab; }\n\n.c-blue {\n  color: #3d5afe; }\n\n.c-bg-blue {\n  background-color: #3d5afe; }\n\n.c-charcoal {\n  color: #303030; }\n\n.c-bg-charcoal {\n  background-color: #303030; }\n\n.c-brown {\n  color: #795548; }\n\n.c-bg-brown {\n  background-color: #795548; }\n\n.c-forest {\n  color: #006968; }\n\n.c-bg-forest {\n  background-color: #006968; }\n\n.c-grey {\n  color: #e0e0e0; }\n\n.c-bg-grey {\n  background-color: #e0e0e0; }\n\n.c-grey-light {\n  color: #bababa; }\n\n.c-bg-grey-light {\n  background-color: #bababa; }\n\n.c-grey-dark {\n  color: #5c687c; }\n\n.c-bg-grey-dark {\n  background-color: #5c687c; }\n\n.c-purple {\n  color: #8130ff; }\n\n.c-bg-purple {\n  background-color: #8130ff; }\n\n.c-lemon {\n  color: #ffea00; }\n\n.c-bg-lemon {\n  background-color: #ffea00; }\n\n.c-lime {\n  color: #aee406; }\n\n.c-bg-lime {\n  background-color: #aee406; }\n\n.c-orange {\n  color: #f57c00; }\n\n.c-bg-orange {\n  background-color: #f57c00; }\n\n.c-ruby {\n  color: #ff1744; }\n\n.c-bg-ruby {\n  background-color: #ff1744; }\n\n.c-sky {\n  color: #30bcff; }\n\n.c-bg-sky {\n  background-color: #30bcff; }\n\n/* Width/Height */\n.w-full {\n  width: 100%; }\n\n.w-100 {\n  width: 100; }\n\n.h-full {\n  height: 100%; }\n\n.h-100 {\n  height: 100; }\n\n/**\r\n * Margin and Padding\r\n * The following creates this pattern:\r\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\r\n * Same for Padding (using the 'p' abbreviation)\r\n * From 0, 2, 5, 10, 15, 20, 25, 30\r\n**/\n.m-0 {\n  margin: 0; }\n\n.m-t-0 {\n  margin-top: 0; }\n\n.m-r-0 {\n  margin-right: 0; }\n\n.m-b-0 {\n  margin-bottom: 0; }\n\n.m-l-0 {\n  margin-left: 0; }\n\n.m-x-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.m-y-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.m-2 {\n  margin: 2; }\n\n.m-t-2 {\n  margin-top: 2; }\n\n.m-r-2 {\n  margin-right: 2; }\n\n.m-b-2 {\n  margin-bottom: 2; }\n\n.m-l-2 {\n  margin-left: 2; }\n\n.m-x-2 {\n  margin-right: 2;\n  margin-left: 2; }\n\n.m-y-2 {\n  margin-top: 2;\n  margin-bottom: 2; }\n\n.m-4 {\n  margin: 4; }\n\n.m-t-4 {\n  margin-top: 4; }\n\n.m-r-4 {\n  margin-right: 4; }\n\n.m-b-4 {\n  margin-bottom: 4; }\n\n.m-l-4 {\n  margin-left: 4; }\n\n.m-x-4 {\n  margin-right: 4;\n  margin-left: 4; }\n\n.m-y-4 {\n  margin-top: 4;\n  margin-bottom: 4; }\n\n.m-5 {\n  margin: 5; }\n\n.m-t-5 {\n  margin-top: 5; }\n\n.m-r-5 {\n  margin-right: 5; }\n\n.m-b-5 {\n  margin-bottom: 5; }\n\n.m-l-5 {\n  margin-left: 5; }\n\n.m-x-5 {\n  margin-right: 5;\n  margin-left: 5; }\n\n.m-y-5 {\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.m-8 {\n  margin: 8; }\n\n.m-t-8 {\n  margin-top: 8; }\n\n.m-r-8 {\n  margin-right: 8; }\n\n.m-b-8 {\n  margin-bottom: 8; }\n\n.m-l-8 {\n  margin-left: 8; }\n\n.m-x-8 {\n  margin-right: 8;\n  margin-left: 8; }\n\n.m-y-8 {\n  margin-top: 8;\n  margin-bottom: 8; }\n\n.m-10 {\n  margin: 10; }\n\n.m-t-10 {\n  margin-top: 10; }\n\n.m-r-10 {\n  margin-right: 10; }\n\n.m-b-10 {\n  margin-bottom: 10; }\n\n.m-l-10 {\n  margin-left: 10; }\n\n.m-x-10 {\n  margin-right: 10;\n  margin-left: 10; }\n\n.m-y-10 {\n  margin-top: 10;\n  margin-bottom: 10; }\n\n.m-12 {\n  margin: 12; }\n\n.m-t-12 {\n  margin-top: 12; }\n\n.m-r-12 {\n  margin-right: 12; }\n\n.m-b-12 {\n  margin-bottom: 12; }\n\n.m-l-12 {\n  margin-left: 12; }\n\n.m-x-12 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.m-y-12 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.m-15 {\n  margin: 15; }\n\n.m-t-15 {\n  margin-top: 15; }\n\n.m-r-15 {\n  margin-right: 15; }\n\n.m-b-15 {\n  margin-bottom: 15; }\n\n.m-l-15 {\n  margin-left: 15; }\n\n.m-x-15 {\n  margin-right: 15;\n  margin-left: 15; }\n\n.m-y-15 {\n  margin-top: 15;\n  margin-bottom: 15; }\n\n.m-16 {\n  margin: 16; }\n\n.m-t-16 {\n  margin-top: 16; }\n\n.m-r-16 {\n  margin-right: 16; }\n\n.m-b-16 {\n  margin-bottom: 16; }\n\n.m-l-16 {\n  margin-left: 16; }\n\n.m-x-16 {\n  margin-right: 16;\n  margin-left: 16; }\n\n.m-y-16 {\n  margin-top: 16;\n  margin-bottom: 16; }\n\n.m-20 {\n  margin: 20; }\n\n.m-t-20 {\n  margin-top: 20; }\n\n.m-r-20 {\n  margin-right: 20; }\n\n.m-b-20 {\n  margin-bottom: 20; }\n\n.m-l-20 {\n  margin-left: 20; }\n\n.m-x-20 {\n  margin-right: 20;\n  margin-left: 20; }\n\n.m-y-20 {\n  margin-top: 20;\n  margin-bottom: 20; }\n\n.m-24 {\n  margin: 24; }\n\n.m-t-24 {\n  margin-top: 24; }\n\n.m-r-24 {\n  margin-right: 24; }\n\n.m-b-24 {\n  margin-bottom: 24; }\n\n.m-l-24 {\n  margin-left: 24; }\n\n.m-x-24 {\n  margin-right: 24;\n  margin-left: 24; }\n\n.m-y-24 {\n  margin-top: 24;\n  margin-bottom: 24; }\n\n.m-25 {\n  margin: 25; }\n\n.m-t-25 {\n  margin-top: 25; }\n\n.m-r-25 {\n  margin-right: 25; }\n\n.m-b-25 {\n  margin-bottom: 25; }\n\n.m-l-25 {\n  margin-left: 25; }\n\n.m-x-25 {\n  margin-right: 25;\n  margin-left: 25; }\n\n.m-y-25 {\n  margin-top: 25;\n  margin-bottom: 25; }\n\n.m-28 {\n  margin: 28; }\n\n.m-t-28 {\n  margin-top: 28; }\n\n.m-r-28 {\n  margin-right: 28; }\n\n.m-b-28 {\n  margin-bottom: 28; }\n\n.m-l-28 {\n  margin-left: 28; }\n\n.m-x-28 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.m-y-28 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.m-30 {\n  margin: 30; }\n\n.m-t-30 {\n  margin-top: 30; }\n\n.m-r-30 {\n  margin-right: 30; }\n\n.m-b-30 {\n  margin-bottom: 30; }\n\n.m-l-30 {\n  margin-left: 30; }\n\n.m-x-30 {\n  margin-right: 30;\n  margin-left: 30; }\n\n.m-y-30 {\n  margin-top: 30;\n  margin-bottom: 30; }\n\n.p-0 {\n  padding: 0; }\n\n.p-t-0 {\n  padding-top: 0; }\n\n.p-r-0 {\n  padding-right: 0; }\n\n.p-b-0 {\n  padding-bottom: 0; }\n\n.p-l-0 {\n  padding-left: 0; }\n\n.p-x-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.p-y-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.p-2 {\n  padding: 2; }\n\n.p-t-2 {\n  padding-top: 2; }\n\n.p-r-2 {\n  padding-right: 2; }\n\n.p-b-2 {\n  padding-bottom: 2; }\n\n.p-l-2 {\n  padding-left: 2; }\n\n.p-x-2 {\n  padding-right: 2;\n  padding-left: 2; }\n\n.p-y-2 {\n  padding-top: 2;\n  padding-bottom: 2; }\n\n.p-4 {\n  padding: 4; }\n\n.p-t-4 {\n  padding-top: 4; }\n\n.p-r-4 {\n  padding-right: 4; }\n\n.p-b-4 {\n  padding-bottom: 4; }\n\n.p-l-4 {\n  padding-left: 4; }\n\n.p-x-4 {\n  padding-right: 4;\n  padding-left: 4; }\n\n.p-y-4 {\n  padding-top: 4;\n  padding-bottom: 4; }\n\n.p-5 {\n  padding: 5; }\n\n.p-t-5 {\n  padding-top: 5; }\n\n.p-r-5 {\n  padding-right: 5; }\n\n.p-b-5 {\n  padding-bottom: 5; }\n\n.p-l-5 {\n  padding-left: 5; }\n\n.p-x-5 {\n  padding-right: 5;\n  padding-left: 5; }\n\n.p-y-5 {\n  padding-top: 5;\n  padding-bottom: 5; }\n\n.p-8 {\n  padding: 8; }\n\n.p-t-8 {\n  padding-top: 8; }\n\n.p-r-8 {\n  padding-right: 8; }\n\n.p-b-8 {\n  padding-bottom: 8; }\n\n.p-l-8 {\n  padding-left: 8; }\n\n.p-x-8 {\n  padding-right: 8;\n  padding-left: 8; }\n\n.p-y-8 {\n  padding-top: 8;\n  padding-bottom: 8; }\n\n.p-10 {\n  padding: 10; }\n\n.p-t-10 {\n  padding-top: 10; }\n\n.p-r-10 {\n  padding-right: 10; }\n\n.p-b-10 {\n  padding-bottom: 10; }\n\n.p-l-10 {\n  padding-left: 10; }\n\n.p-x-10 {\n  padding-right: 10;\n  padding-left: 10; }\n\n.p-y-10 {\n  padding-top: 10;\n  padding-bottom: 10; }\n\n.p-12 {\n  padding: 12; }\n\n.p-t-12 {\n  padding-top: 12; }\n\n.p-r-12 {\n  padding-right: 12; }\n\n.p-b-12 {\n  padding-bottom: 12; }\n\n.p-l-12 {\n  padding-left: 12; }\n\n.p-x-12 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.p-y-12 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.p-15 {\n  padding: 15; }\n\n.p-t-15 {\n  padding-top: 15; }\n\n.p-r-15 {\n  padding-right: 15; }\n\n.p-b-15 {\n  padding-bottom: 15; }\n\n.p-l-15 {\n  padding-left: 15; }\n\n.p-x-15 {\n  padding-right: 15;\n  padding-left: 15; }\n\n.p-y-15 {\n  padding-top: 15;\n  padding-bottom: 15; }\n\n.p-16 {\n  padding: 16; }\n\n.p-t-16 {\n  padding-top: 16; }\n\n.p-r-16 {\n  padding-right: 16; }\n\n.p-b-16 {\n  padding-bottom: 16; }\n\n.p-l-16 {\n  padding-left: 16; }\n\n.p-x-16 {\n  padding-right: 16;\n  padding-left: 16; }\n\n.p-y-16 {\n  padding-top: 16;\n  padding-bottom: 16; }\n\n.p-20 {\n  padding: 20; }\n\n.p-t-20 {\n  padding-top: 20; }\n\n.p-r-20 {\n  padding-right: 20; }\n\n.p-b-20 {\n  padding-bottom: 20; }\n\n.p-l-20 {\n  padding-left: 20; }\n\n.p-x-20 {\n  padding-right: 20;\n  padding-left: 20; }\n\n.p-y-20 {\n  padding-top: 20;\n  padding-bottom: 20; }\n\n.p-24 {\n  padding: 24; }\n\n.p-t-24 {\n  padding-top: 24; }\n\n.p-r-24 {\n  padding-right: 24; }\n\n.p-b-24 {\n  padding-bottom: 24; }\n\n.p-l-24 {\n  padding-left: 24; }\n\n.p-x-24 {\n  padding-right: 24;\n  padding-left: 24; }\n\n.p-y-24 {\n  padding-top: 24;\n  padding-bottom: 24; }\n\n.p-25 {\n  padding: 25; }\n\n.p-t-25 {\n  padding-top: 25; }\n\n.p-r-25 {\n  padding-right: 25; }\n\n.p-b-25 {\n  padding-bottom: 25; }\n\n.p-l-25 {\n  padding-left: 25; }\n\n.p-x-25 {\n  padding-right: 25;\n  padding-left: 25; }\n\n.p-y-25 {\n  padding-top: 25;\n  padding-bottom: 25; }\n\n.p-28 {\n  padding: 28; }\n\n.p-t-28 {\n  padding-top: 28; }\n\n.p-r-28 {\n  padding-right: 28; }\n\n.p-b-28 {\n  padding-bottom: 28; }\n\n.p-l-28 {\n  padding-left: 28; }\n\n.p-x-28 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.p-y-28 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.p-30 {\n  padding: 30; }\n\n.p-t-30 {\n  padding-top: 30; }\n\n.p-r-30 {\n  padding-right: 30; }\n\n.p-b-30 {\n  padding-bottom: 30; }\n\n.p-l-30 {\n  padding-left: 30; }\n\n.p-x-30 {\n  padding-right: 30;\n  padding-left: 30; }\n\n.p-y-30 {\n  padding-top: 30;\n  padding-bottom: 30; }\n\n/* Dividers */\n.hr-light {\n  height: 1;\n  background-color: #e0e0e0;\n  width: 100%; }\n\n.hr-dark {\n  height: 1;\n  background-color: #303030;\n  width: 100%; }\n\n/* Alignment */\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n/**\r\n * Font size\r\n * The following creates this pattern:\r\n * .t-10{font-size:10}\r\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\r\n**/\n.t-10 {\n  font-size: 10; }\n\n.t-12 {\n  font-size: 12; }\n\n.t-14 {\n  font-size: 14; }\n\n.t-15 {\n  font-size: 15; }\n\n.t-16 {\n  font-size: 16; }\n\n.t-17 {\n  font-size: 17; }\n\n.t-18 {\n  font-size: 18; }\n\n.t-19 {\n  font-size: 19; }\n\n.t-20 {\n  font-size: 20; }\n\n.t-25 {\n  font-size: 25; }\n\n.t-30 {\n  font-size: 30; }\n\n.img-rounded {\n  border-radius: 5; }\n\n.img-circle {\n  border-radius: 20; }\n\n.img-thumbnail {\n  border-radius: 0; }\n\n.invisible {\n  visibility: collapse; }\n\n.pull-left {\n  horizontal-align: left; }\n\n.pull-right {\n  horizontal-align: right; }\n\n.m-x-auto {\n  horizontal-align: center; }\n\n.m-y-auto {\n  vertical-align: center; }\n\n.text-primary {\n  color: #30bcff; }\n\n.text-danger {\n  color: #d50000; }\n\n.text-muted {\n  color: gray; }\n\n.bg-primary {\n  background-color: #30bcff;\n  color: #fff; }\n\n.bg-danger {\n  background-color: #d50000;\n  color: #fff; }\n\n.action-bar {\n  background-color: #303030;\n  color: #fff; }\n  .action-bar .action-bar-title {\n    font-weight: bold;\n    font-size: 17;\n    vertical-align: center; }\n  .action-bar .action-item {\n    font-weight: normal; }\n\n.activity-indicator {\n  color: #30bcff;\n  width: 30;\n  height: 30; }\n\n.btn {\n  color: #30bcff;\n  background-color: transparent;\n  min-height: 36;\n  min-width: 64;\n  padding: 10 10 10 10;\n  font-size: 18;\n  margin: 8 16 8 16; }\n  .btn.btn-active:highlighted {\n    color: #fff;\n    background-color: #c0ebff; }\n\n.btn-primary {\n  background-color: #30bcff;\n  border-color: #30bcff;\n  color: #fff; }\n  .btn-primary.btn-active:highlighted {\n    background-color: #01a0ec;\n    border-color: #01a0ec; }\n  .btn-primary.btn-aqua {\n    background-color: #00caab; }\n  .btn-primary.btn-blue {\n    background-color: #3d5afe; }\n  .btn-primary.btn-brown {\n    background-color: #795548; }\n  .btn-primary.btn-forest {\n    background-color: #006968; }\n  .btn-primary.btn-grey {\n    background-color: #5c687c; }\n  .btn-primary.btn-lemon {\n    background-color: #ffea00;\n    color: #000; }\n  .btn-primary.btn-lime {\n    background-color: #aee406;\n    color: #000; }\n  .btn-primary.btn-orange {\n    background-color: #f57c00; }\n  .btn-primary.btn-purple {\n    background-color: #8130ff; }\n  .btn-primary.btn-ruby {\n    background-color: #ff1744; }\n  .btn-primary.btn-sky {\n    background-color: #30bcff; }\n\n.btn-outline {\n  background-color: transparent;\n  border-color: #30bcff;\n  color: #30bcff; }\n  .btn-outline.btn-active:highlighted {\n    background-color: #c0ebff; }\n\n.btn[isEnabled=false] {\n  color: #a4a4a4;\n  background-color: #e0e0e0;\n  border-color: #e0e0e0; }\n\n.fa {\n  font-family: FontAwesome, fontawesome-webfont; }\n\n.form .input {\n  padding: 16 8 16 8;\n  background-color: transparent; }\n  .form .input.input-border {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 2;\n    padding: 16; }\n  .form .input.input-rounded {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 28;\n    padding: 16; }\n  .form .input[isEnabled='false'] {\n    background-color: #fafafa; }\n\n.form .input-field {\n  margin: 8; }\n  .form .input-field .label {\n    font-size: 12;\n    color: #bababa; }\n  .form .input-field .input {\n    padding: 0;\n    margin: 0 0 8 0; }\n  .form .input-field .hr-light.active,\n  .form .input-field .hr-dark.active {\n    background-color: #30bcff; }\n  .form .input-field.input-sides .label {\n    font-size: 18;\n    margin: 0 0 8 0; }\n\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 4;\n  font-weight: normal;\n  color: #fff; }\n\n.body,\n.body2,\n.footnote {\n  font-weight: normal;\n  color: #b3b3b3; }\n\n.h1 {\n  font-size: 32; }\n\n.h2 {\n  font-size: 22; }\n\n.h3 {\n  font-size: 15; }\n\n.h4 {\n  font-size: 12; }\n\n.h5 {\n  font-size: 11; }\n\n.h6 {\n  font-size: 10; }\n\n.body {\n  font-size: 14; }\n\n.body2 {\n  font-size: 17; }\n\n.footnote {\n  font-size: 13; }\n\n.list-group .list-group-item {\n  color: #fff;\n  font-size: 16;\n  margin: 0;\n  padding: 16; }\n  .list-group .list-group-item Label {\n    vertical-align: center; }\n  .list-group .list-group-item .thumb {\n    stretch: fill;\n    width: 40;\n    height: 40;\n    margin-right: 16; }\n  .list-group .list-group-item.active {\n    background-color: #e0e0e0; }\n  .list-group .list-group-item .list-group-item-text {\n    color: #b3b3b3;\n    font-size: 14; }\n\n.page {\n  background-color: #303030; }\n\n.progress {\n  color: #30bcff;\n  background-color: #bababa; }\n\n.segmented-bar {\n  font-size: 13;\n  background-color: #303030;\n  color: #fff;\n  selected-background-color: #30bcff; }\n\n.sidedrawer-left, .sidedrawer-center {\n  background-color: #303030; }\n\n.sidedrawer-header {\n  background-color: #30bcff;\n  height: 148;\n  width: 100%; }\n\n.sidedrawer-left .sidedrawer-header {\n  padding: 16 16 0 16; }\n\n.sidedrawer-center .sidedrawer-header {\n  padding: 20 15 0 15; }\n\n.sidedrawer-header-image {\n  background-color: #e0e0e0; }\n\n.sidedrawer-left .sidedrawer-header-image {\n  height: 64;\n  width: 64;\n  border-radius: 32;\n  horizontal-align: left;\n  margin-bottom: 36; }\n\n.sidedrawer-center .sidedrawer-header-image {\n  height: 74;\n  width: 74;\n  border-radius: 37;\n  horizontal-align: center;\n  margin-bottom: 24; }\n\n.sidedrawer-header-brand {\n  color: #fff; }\n\n.sidedrawer-left .sidedrawer-header-brand {\n  horizontal-align: left;\n  font-size: 14; }\n\n.sidedrawer-center .sidedrawer-header-brand {\n  horizontal-align: center;\n  font-size: 15; }\n\n.sidedrawer-list-item {\n  height: 48;\n  horizontal-align: left;\n  width: 100%;\n  orientation: horizontal; }\n  .sidedrawer-list-item .sidedrawer-list-item-icon {\n    width: 24;\n    text-align: center;\n    font-size: 20;\n    height: 48;\n    vertical-align: center; }\n  .sidedrawer-list-item.active {\n    color: #30bcff;\n    background-color: #2b2b2b; }\n    .sidedrawer-list-item.active .sidedrawer-list-item-icon {\n      color: #fff; }\n\n.sidedrawer-left .sidedrawer-list-item-icon {\n  margin: 0 16 0 16; }\n\n.sidedrawer-center .sidedrawer-list-item-icon {\n  margin: 0 0 0 15; }\n\n.sidedrawer-list-item-text {\n  horizontal-align: left;\n  text-align: left;\n  font-size: 15;\n  background-color: transparent;\n  border-width: 0.1;\n  width: 80%;\n  vertical-align: center; }\n\n.sidedrawer-left .sidedrawer-list-item-text {\n  padding-left: 16; }\n\n.sidedrawer-center .sidedrawer-list-item-text {\n  padding-left: 15; }\n\n.slider {\n  background-color: #30bcff; }\n  .slider[isEnabled=false] {\n    background-color: #e0e0e0;\n    color: #e0e0e0; }\n\n.switch[checked=true] {\n  background-color: #30bcff;\n  color: #30bcff; }\n\n.switch[checked=true][isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #fff; }\n\n.switch[isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #e0e0e0; }\n\n.tab-view {\n  /*color: $secondary;*/\n  selected-color: #30bcff;\n  tabs-background-color: #303030; }\n  .tab-view .tab-view-item {\n    background-color: #303030;\n    tabs-background-color: #303030; }\n\n#login-background {\n  margin-top: -20;\n  background-size: cover;\n  background-position: center; }\n\n.login-wrap {\n  padding: 0 40; }\n\n.logo-wrap {\n  margin: 60 0 10 0;\n  padding: 20 0; }\n  .logo-wrap .login-logo {\n    text-align: center;\n    font-size: 30;\n    font-weight: bold;\n    margin-bottom: 10;\n    opacity: 1;\n    color: #fff;\n    opacity: .9; }\n  .logo-wrap .login-logo-sub {\n    color: #fff;\n    opacity: .8;\n    text-align: center; }\n\n.login-wrapper {\n  padding: 20;\n  background-color: #fff;\n  border-radius: 3; }\n  .login-wrapper TextField {\n    padding: 10 10;\n    margin: 10 0 0 0; }\n\n.go-back {\n  font-size: 14;\n  text-align: center;\n  color: #fff;\n  margin-top: 10; }\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c27482c4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c27482c4')) {
      api.createRecord('c27482c4', component.options)
    } else {
      api.reload('c27482c4', component.options)
    }
    module.hot.accept("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
(function () {
      api.rerender('c27482c4', {
        render: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Main.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Main.vue?vue&type=template&id=f889b9d8&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Main.vue?vue&type=style&index=0&id=f889b9d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f889b9d8",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('f889b9d8')) {
      api.createRecord('f889b9d8', component.options)
    } else {
      api.reload('f889b9d8', component.options)
    }
    module.hot.accept("./components/Main.vue?vue&type=template&id=f889b9d8&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Main.vue?vue&type=template&id=f889b9d8&scoped=true&");
(function () {
      api.rerender('f889b9d8', {
        render: _Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Main.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Main.vue?vue&type=style&index=0&id=f889b9d8&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=style&index=0&id=f889b9d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Main.vue?vue&type=template&id=f889b9d8&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=template&id=f889b9d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./routing.js");
/* harmony import */ var nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-vue-devtools/index.js");
/* harmony import */ var nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_2__);

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        



if (true) {
  nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_2___default.a);
} // Prints Vue logs when --env.production is *NOT* set while building


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = "development" === 'production';
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h('frame', [h(_routing__WEBPACK_IMPORTED_MODULE_1__["default"].main)])
}).$start();
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","markingMode":"none"},"main":"main","name":"todo_app","version":"1.0.0"};

/***/ }),

/***/ "./routing.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Main.vue");


var routing = {
  login: _components_Login__WEBPACK_IMPORTED_MODULE_0__["default"],
  main: _components_Main__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (routing);

/***/ }),

/***/ "./schmucklicloud_service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return ref_auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return ref_storage; });
/* harmony import */ var schmucklicloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/schmucklicloud_auth/index.js");
/* harmony import */ var schmucklicloud_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/schmucklicloud_storage/index.js");


var app_id = "407292a0ed564bead59023fa96603c5c6a9553d3";
var app_secret = "66d7549b440fe6b36287f5f8800f68cd681a6c6439f3915040e60f9a06e0d6f6";
var ref_auth = new schmucklicloud_auth__WEBPACK_IMPORTED_MODULE_0__["sCAuth"](app_id, app_secret);
var ref_storage = new schmucklicloud_storage__WEBPACK_IMPORTED_MODULE_1__["sCStorage"](app_id, app_secret);
ref_storage.setBucket(16);


/***/ })

},[["./main.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWFpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/YzNlOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4udnVlPzAzYTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/M2NlOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4udnVlPzhmODMiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlP2U2MDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/YTEwZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT9mYjRmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluLnZ1ZT8xOTk5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFpbi52dWU/NjNlZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4udnVlPzZlMWYiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL3NjaG11Y2tsaWNsb3VkX3NlcnZpY2UuanMiXSwibmFtZXMiOlsiUm91dGluZyIsIlZ1ZURldnRvb2xzIiwiVE5TX0VOViIsIlZ1ZSIsInVzZSIsImNvbmZpZyIsInNpbGVudCIsInJlbmRlciIsImgiLCJyb3V0aW5nIiwibG9naW4iLCJMb2dpbiIsIm1haW4iLCJNYWluIiwiYXBwX2lkIiwiYXBwX3NlY3JldCIsInJlZl9hdXRoIiwic0NBdXRoIiwicmVmX3N0b3JhZ2UiLCJzQ1N0b3JhZ2UiLCJzZXRCdWNrZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQURBO0FBRUE7QUFGQTtBQUlBLEdBTkE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FDQSxJQURBLENBQ0E7QUFDQTtBQUNBLGdDQURBO0FBRUE7QUFGQTtBQUlBLFdBTkE7QUFPQSxTQVRBLE1BU0E7QUFDQSxrQ0FDQSxJQURBLENBQ0E7QUFDQTtBQUNBLFdBSEE7QUFJQTtBQUNBLE9BaEJBO0FBaUJBOztBQXJCQTtBQVBBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQUxBOztBQU1BO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLENBSUEsSUFKQSxDQUlBLElBSkE7QUFLQSxPQVBBLE1BT0E7QUFDQTtBQUNBLHdDQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQTtBQUZBO0FBSUEsU0FOQTtBQU9BO0FBQ0E7O0FBcEJBO0FBTkEsRzs7Ozs7OztBQ3pCQSx5RUFBMkIsbUJBQU8sQ0FBQyxnREFBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsaUNBQWlDLDhCQUE4QixrQkFBa0IsR0FBRyxrQ0FBa0MsMEJBQTBCLDJCQUEyQixpQkFBaUIsa0JBQWtCLHdCQUF3QixpQkFBaUIsb0JBQW9CLCtCQUErQiw4QkFBOEIsdUVBQXVFLEdBQUcsOEJBQThCLG1DQUFtQyxvQkFBb0Isa0JBQWtCLGlCQUFpQix3QkFBd0IsNEJBQTRCLGdCQUFnQixHQUFHOzs7QUFHeG1CLHdCQUF3QixtQkFBTyxDQUFDLDZEQUE4QjtBQUM5RCxJQUFJ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QUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFv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RyxJQUFJQywwREFBSixDQUFXSCxNQUFYLEVBQW1CQyxVQUFuQixDQUFmO0FBQ0EsSUFBSUcsV0FBVyxHQUFHLElBQUlDLGdFQUFKLENBQWNMLE1BQWQsRUFBc0JDLFVBQXRCLENBQWxCO0FBRUFHLFdBQVcsQ0FBQ0UsU0FBWixDQUFzQixFQUF0QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxBY3Rpb25CYXIgZmxhdD1cInRydWVcIiB0aXRsZT1cIkxvZ2luXCIvPlxuICAgICAgICA8QWJzb2x1dGVMYXlvdXQ+XG4gICAgICAgICAgPEZsZXhib3hMYXlvdXQgdG9wPVwiMTMwXCIgd2lkdGg9XCIxMDAlXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwiZW1haWxcIiBoaW50PVwiRW1haWxcIiAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwicGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCIgaGludD1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkxvZ2luXCIgQHRhcD1cIm9uTG9naW5cIiAvPlxuICAgICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgPC9BYnNvbHV0ZUxheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9zY2htdWNrbGljbG91ZF9zZXJ2aWNlXCI7XG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vcm91dGluZ1wiO1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25Mb2dpbigpe1xuICAgICAgdmFyIGdsb2JhbF90aGlzID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgYXV0aC5hdXRob3JpemVFbWFpbFBhc3N3b3JkKHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICBpZihyZXNwb25zZS5pc09LKXtcbiAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJzZXNzaW9uX3Rva2VuXCIsIHJlc3BvbnNlLmRhdGEuc2Vzc2lvbl90b2tlbik7XG4gICAgICAgICAgYWxlcnQoJ0F1dGhvcml6YXRpb24gc3VjY2Vzc2Z1bC4nKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbF90aGlzLiRuYXZpZ2F0ZVRvKFJvdXRpbmcubWFpbiwge1xuICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgIGJhY2tzdGFja1Zpc2libGU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChyZXNwb25zZS5tZXNzYWdlKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxlcnQgZGlhbG9nIGNsb3NlZC5cIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgQWN0aW9uQmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cblxuICAgIEZsZXhib3hMYXlvdXQge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZlxuICAgIH1cblxuICAgIEJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDMwcHg7XG4gICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg5ODliYjtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM4OTg5YmIgMCUsICNhNWE0Y2IgNzQlKTtcbiAgICB9XG5cbiAgICBUZXh0RmllbGQge1xuICAgICAgYmFja2dyb3VuZDogcmdiKDI0MSwgMjQxLCAyNDEpO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIG1hcmdpbjogMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgQGxvYWRlZD1cInN0YXJ0XCI+XG4gICAgICAgIDxBY3Rpb25CYXIgZmxhdD1cInRydWVcIiB0aXRsZT1cIlN0YXJ0XCI+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbi8+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJ0b3RhbFwiIDp0ZXh0PVwiaXRlbXMubGVuZ3RoICsgJyBJdGVtcydcIj48L0xhYmVsPlxuICAgICAgICAgIDxMaXN0VmlldyB0b3A9XCIyMFwiIGZvcj1cIml0ZW0gaW4gaXRlbXNcIiBoZWlnaHQ9XCIxMDAlXCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLmRhdGEubmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5kYXRhLmRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlwiIC8+XG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuLi9zY2htdWNrbGljbG91ZF9zZXJ2aWNlXCI7XG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vcm91dGluZ1wiO1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IFtdXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc3RhcnQoKXtcbiAgICAgIHZhciBzZXNzaW9uX3Rva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwic2Vzc2lvbl90b2tlblwiLCB1bmRlZmluZWQpO1xuICAgICAgaWYoc2Vzc2lvbl90b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0b3JhZ2Uuc2V0QXV0aFRva2VuKHNlc3Npb25fdG9rZW4pO1xuICAgICAgICBzdG9yYWdlLmdldEFsbChcIml0ZW1zXCIpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgIGlmKHJlc3BvbnNlLmlzT0spe1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGdsb2JhbF90aGlzID0gdGhpcztcbiAgICAgICAgYWxlcnQoXCJZb3UgYXJlIG5vdCBhdXRob3JpemVkXCIpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGdsb2JhbF90aGlzLiRuYXZpZ2F0ZVRvKFJvdXRpbmcubG9naW4sIHtcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgYmFja3N0YWNrVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIEFjdGlvbkJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG5cbiAgICBMYWJlbCB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgTGlzdFZpZXcge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgIC5pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgfVxuXG4gICAgLnRvdGFsIHtcbiAgICAgIG1hcmdpbjogMzBweDtcbiAgICB9XG5cbiAgICAubGlzdF9pdGVtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgRmxleGJveExheW91dCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmXG4gICAgfVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQWN0aW9uQmFyW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcbkZsZXhib3hMYXlvdXRbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmXFxufVxcbkJ1dHRvbltkYXRhLXYtYzI3NDgyYzRdIHtcXG4gIG1hcmdpbjogMzBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk4OWJiO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzg5ODliYiAwJSwgI2E1YTRjYiA3NCUpO1xcbn1cXG5UZXh0RmllbGRbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblwiLCBcIlwiXSk7XG5cblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0xvZ2luLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5BY3Rpb25CYXJbZGF0YS12LWY4ODliOWQ4XSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuTGFiZWxbZGF0YS12LWY4ODliOWQ4XSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbkxpc3RWaWV3W2RhdGEtdi1mODg5YjlkOF0ge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uaXRlbVtkYXRhLXYtZjg4OWI5ZDhdIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbi50b3RhbFtkYXRhLXYtZjg4OWI5ZDhdIHtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuLmxpc3RfaXRlbVtkYXRhLXYtZjg4OWI5ZDhdIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbkZsZXhib3hMYXlvdXRbZGF0YS12LWY4ODliOWQ4XSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmXFxufVxcblwiLCBcIlwiXSk7XG5cblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL01haW4udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgZmxhdDogXCJ0cnVlXCIsIHRpdGxlOiBcIkxvZ2luXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkFic29sdXRlTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB0b3A6IFwiMTMwXCIsIHdpZHRoOiBcIjEwMCVcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBoaW50OiBcIkVtYWlsXCIsIHRleHQ6IF92bS5lbWFpbCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmVtYWlsID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNlY3VyZTogXCJ0cnVlXCIsIGhpbnQ6IFwiUGFzc3dvcmRcIiwgdGV4dDogX3ZtLnBhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMb2dpblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25Mb2dpbiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IG9uOiB7IGxvYWRlZDogX3ZtLnN0YXJ0IH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBhdHRyczogeyBmbGF0OiBcInRydWVcIiwgdGl0bGU6IFwiU3RhcnRcIiB9IH0sXG4gICAgICAgIFtfYyhcIk5hdmlnYXRpb25CdXR0b25cIildLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG90YWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5pdGVtcy5sZW5ndGggKyBcIiBJdGVtc1wiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0b3A6IFwiMjBcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBpdGVtLmRhdGEubmFtZSB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBpdGVtLmRhdGEuZGVzY3JpcHRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCIsXG5cdFwiLi9tYWluLmpzXCI6IFwiLi9tYWluLmpzXCIsXG5cdFwiLi9yb3V0aW5nLmpzXCI6IFwiLi9yb3V0aW5nLmpzXCIsXG5cdFwiLi9zY2htdWNrbGljbG91ZF9zZXJ2aWNlLmpzXCI6IFwiLi9zY2htdWNrbGljbG91ZF9zZXJ2aWNlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBkYXJrIHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggZGFyayBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogRGFyayB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogQ29sb3IgY2xhc3Nlc1xcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLmMtZ3JleXtjb2xvcjojZTBlMGUwfS5jLWJnLWdyZXl7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwfVxcclxcbioqL1xcbi5jLXdoaXRlIHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmMtYmctd2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJsYWNrIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuLmMtYmctYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxcblxcbi5jLWFxdWEge1xcbiAgY29sb3I6ICMwMGNhYWI7IH1cXG5cXG4uYy1iZy1hcXVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG5cXG4uYy1ibHVlIHtcXG4gIGNvbG9yOiAjM2Q1YWZlOyB9XFxuXFxuLmMtYmctYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1YWZlOyB9XFxuXFxuLmMtY2hhcmNvYWwge1xcbiAgY29sb3I6ICMzMDMwMzA7IH1cXG5cXG4uYy1iZy1jaGFyY29hbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYnJvd24ge1xcbiAgY29sb3I6ICM3OTU1NDg7IH1cXG5cXG4uYy1iZy1icm93biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtZm9yZXN0IHtcXG4gIGNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtYmctZm9yZXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG5cXG4uYy1ncmV5IHtcXG4gIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmMtYmctZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmMtZ3JleS1saWdodCB7XFxuICBjb2xvcjogI2JhYmFiYTsgfVxcblxcbi5jLWJnLWdyZXktbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5jLWdyZXktZGFyayB7XFxuICBjb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLWJnLWdyZXktZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2ODdjOyB9XFxuXFxuLmMtcHVycGxlIHtcXG4gIGNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtYmctcHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTMwZmY7IH1cXG5cXG4uYy1sZW1vbiB7XFxuICBjb2xvcjogI2ZmZWEwMDsgfVxcblxcbi5jLWJnLWxlbW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1saW1lIHtcXG4gIGNvbG9yOiAjYWVlNDA2OyB9XFxuXFxuLmMtYmctbGltZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2OyB9XFxuXFxuLmMtb3JhbmdlIHtcXG4gIGNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtYmctb3JhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTdjMDA7IH1cXG5cXG4uYy1ydWJ5IHtcXG4gIGNvbG9yOiAjZmYxNzQ0OyB9XFxuXFxuLmMtYmctcnVieSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuXFxuLmMtc2t5IHtcXG4gIGNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLmMtYmctc2t5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4vKiBXaWR0aC9IZWlnaHQgKi9cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnctMTAwIHtcXG4gIHdpZHRoOiAxMDA7IH1cXG5cXG4uaC1mdWxsIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5oLTEwMCB7XFxuICBoZWlnaHQ6IDEwMDsgfVxcblxcbi8qKlxcclxcbiAqIE1hcmdpbiBhbmQgUGFkZGluZ1xcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLm0tMHttYXJnaW46MH0ubS10LTB7bWFyZ2luLXRvcDowfS5tLXItMHttYXJnaW4tcmlnaHQ6MH0ubS1iLTB7bWFyZ2luLWJvdHRvbTowfS5tLWwtMHttYXJnaW4tbGVmdDowfS5tLXgtMHttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDowfS5tLXktMHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcclxcbiAqIFNhbWUgZm9yIFBhZGRpbmcgKHVzaW5nIHRoZSAncCcgYWJicmV2aWF0aW9uKVxcclxcbiAqIEZyb20gMCwgMiwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwXFxyXFxuKiovXFxuLm0tMCB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4ubS10LTAge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcbi5tLXItMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG5cXG4ubS1iLTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5tLWwtMCB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5tLXgtMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5tLXktMCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5tLTIge1xcbiAgbWFyZ2luOiAyOyB9XFxuXFxuLm0tdC0yIHtcXG4gIG1hcmdpbi10b3A6IDI7IH1cXG5cXG4ubS1yLTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyOyB9XFxuXFxuLm0tYi0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDI7IH1cXG5cXG4ubS1sLTIge1xcbiAgbWFyZ2luLWxlZnQ6IDI7IH1cXG5cXG4ubS14LTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyO1xcbiAgbWFyZ2luLWxlZnQ6IDI7IH1cXG5cXG4ubS15LTIge1xcbiAgbWFyZ2luLXRvcDogMjtcXG4gIG1hcmdpbi1ib3R0b206IDI7IH1cXG5cXG4ubS00IHtcXG4gIG1hcmdpbjogNDsgfVxcblxcbi5tLXQtNCB7XFxuICBtYXJnaW4tdG9wOiA0OyB9XFxuXFxuLm0tci00IHtcXG4gIG1hcmdpbi1yaWdodDogNDsgfVxcblxcbi5tLWItNCB7XFxuICBtYXJnaW4tYm90dG9tOiA0OyB9XFxuXFxuLm0tbC00IHtcXG4gIG1hcmdpbi1sZWZ0OiA0OyB9XFxuXFxuLm0teC00IHtcXG4gIG1hcmdpbi1yaWdodDogNDtcXG4gIG1hcmdpbi1sZWZ0OiA0OyB9XFxuXFxuLm0teS00IHtcXG4gIG1hcmdpbi10b3A6IDQ7XFxuICBtYXJnaW4tYm90dG9tOiA0OyB9XFxuXFxuLm0tNSB7XFxuICBtYXJnaW46IDU7IH1cXG5cXG4ubS10LTUge1xcbiAgbWFyZ2luLXRvcDogNTsgfVxcblxcbi5tLXItNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDU7IH1cXG5cXG4ubS1iLTUge1xcbiAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5tLWwtNSB7XFxuICBtYXJnaW4tbGVmdDogNTsgfVxcblxcbi5tLXgtNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDU7XFxuICBtYXJnaW4tbGVmdDogNTsgfVxcblxcbi5tLXktNSB7XFxuICBtYXJnaW4tdG9wOiA1O1xcbiAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5tLTgge1xcbiAgbWFyZ2luOiA4OyB9XFxuXFxuLm0tdC04IHtcXG4gIG1hcmdpbi10b3A6IDg7IH1cXG5cXG4ubS1yLTgge1xcbiAgbWFyZ2luLXJpZ2h0OiA4OyB9XFxuXFxuLm0tYi04IHtcXG4gIG1hcmdpbi1ib3R0b206IDg7IH1cXG5cXG4ubS1sLTgge1xcbiAgbWFyZ2luLWxlZnQ6IDg7IH1cXG5cXG4ubS14LTgge1xcbiAgbWFyZ2luLXJpZ2h0OiA4O1xcbiAgbWFyZ2luLWxlZnQ6IDg7IH1cXG5cXG4ubS15LTgge1xcbiAgbWFyZ2luLXRvcDogODtcXG4gIG1hcmdpbi1ib3R0b206IDg7IH1cXG5cXG4ubS0xMCB7XFxuICBtYXJnaW46IDEwOyB9XFxuXFxuLm0tdC0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi5tLXItMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDsgfVxcblxcbi5tLWItMTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS1sLTEwIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDsgfVxcblxcbi5tLXgtMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDsgfVxcblxcbi5tLXktMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7XFxuICBtYXJnaW4tYm90dG9tOiAxMDsgfVxcblxcbi5tLTEyIHtcXG4gIG1hcmdpbjogMTI7IH1cXG5cXG4ubS10LTEyIHtcXG4gIG1hcmdpbi10b3A6IDEyOyB9XFxuXFxuLm0tci0xMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEyOyB9XFxuXFxuLm0tYi0xMiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLWwtMTIge1xcbiAgbWFyZ2luLWxlZnQ6IDEyOyB9XFxuXFxuLm0teC0xMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEyO1xcbiAgbWFyZ2luLWxlZnQ6IDEyOyB9XFxuXFxuLm0teS0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjtcXG4gIG1hcmdpbi1ib3R0b206IDEyOyB9XFxuXFxuLm0tMTUge1xcbiAgbWFyZ2luOiAxNTsgfVxcblxcbi5tLXQtMTUge1xcbiAgbWFyZ2luLXRvcDogMTU7IH1cXG5cXG4ubS1yLTE1IHtcXG4gIG1hcmdpbi1yaWdodDogMTU7IH1cXG5cXG4ubS1iLTE1IHtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tbC0xNSB7XFxuICBtYXJnaW4tbGVmdDogMTU7IH1cXG5cXG4ubS14LTE1IHtcXG4gIG1hcmdpbi1yaWdodDogMTU7XFxuICBtYXJnaW4tbGVmdDogMTU7IH1cXG5cXG4ubS15LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1O1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7IH1cXG5cXG4ubS0xNiB7XFxuICBtYXJnaW46IDE2OyB9XFxuXFxuLm0tdC0xNiB7XFxuICBtYXJnaW4tdG9wOiAxNjsgfVxcblxcbi5tLXItMTYge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjsgfVxcblxcbi5tLWItMTYge1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS1sLTE2IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNjsgfVxcblxcbi5tLXgtMTYge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gIG1hcmdpbi1sZWZ0OiAxNjsgfVxcblxcbi5tLXktMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7XFxuICBtYXJnaW4tYm90dG9tOiAxNjsgfVxcblxcbi5tLTIwIHtcXG4gIG1hcmdpbjogMjA7IH1cXG5cXG4ubS10LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwOyB9XFxuXFxuLm0tci0yMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwOyB9XFxuXFxuLm0tYi0yMCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLWwtMjAge1xcbiAgbWFyZ2luLWxlZnQ6IDIwOyB9XFxuXFxuLm0teC0yMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwO1xcbiAgbWFyZ2luLWxlZnQ6IDIwOyB9XFxuXFxuLm0teS0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwOyB9XFxuXFxuLm0tMjQge1xcbiAgbWFyZ2luOiAyNDsgfVxcblxcbi5tLXQtMjQge1xcbiAgbWFyZ2luLXRvcDogMjQ7IH1cXG5cXG4ubS1yLTI0IHtcXG4gIG1hcmdpbi1yaWdodDogMjQ7IH1cXG5cXG4ubS1iLTI0IHtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tbC0yNCB7XFxuICBtYXJnaW4tbGVmdDogMjQ7IH1cXG5cXG4ubS14LTI0IHtcXG4gIG1hcmdpbi1yaWdodDogMjQ7XFxuICBtYXJnaW4tbGVmdDogMjQ7IH1cXG5cXG4ubS15LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0O1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4ubS0yNSB7XFxuICBtYXJnaW46IDI1OyB9XFxuXFxuLm0tdC0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNTsgfVxcblxcbi5tLXItMjUge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNTsgfVxcblxcbi5tLWItMjUge1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS1sLTI1IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNTsgfVxcblxcbi5tLXgtMjUge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNTtcXG4gIG1hcmdpbi1sZWZ0OiAyNTsgfVxcblxcbi5tLXktMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7XFxuICBtYXJnaW4tYm90dG9tOiAyNTsgfVxcblxcbi5tLTI4IHtcXG4gIG1hcmdpbjogMjg7IH1cXG5cXG4ubS10LTI4IHtcXG4gIG1hcmdpbi10b3A6IDI4OyB9XFxuXFxuLm0tci0yOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI4OyB9XFxuXFxuLm0tYi0yOCB7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLWwtMjgge1xcbiAgbWFyZ2luLWxlZnQ6IDI4OyB9XFxuXFxuLm0teC0yOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI4O1xcbiAgbWFyZ2luLWxlZnQ6IDI4OyB9XFxuXFxuLm0teS0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODtcXG4gIG1hcmdpbi1ib3R0b206IDI4OyB9XFxuXFxuLm0tMzAge1xcbiAgbWFyZ2luOiAzMDsgfVxcblxcbi5tLXQtMzAge1xcbiAgbWFyZ2luLXRvcDogMzA7IH1cXG5cXG4ubS1yLTMwIHtcXG4gIG1hcmdpbi1yaWdodDogMzA7IH1cXG5cXG4ubS1iLTMwIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLm0tbC0zMCB7XFxuICBtYXJnaW4tbGVmdDogMzA7IH1cXG5cXG4ubS14LTMwIHtcXG4gIG1hcmdpbi1yaWdodDogMzA7XFxuICBtYXJnaW4tbGVmdDogMzA7IH1cXG5cXG4ubS15LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzA7IH1cXG5cXG4ucC0wIHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4ucC10LTAge1xcbiAgcGFkZGluZy10b3A6IDA7IH1cXG5cXG4ucC1yLTAge1xcbiAgcGFkZGluZy1yaWdodDogMDsgfVxcblxcbi5wLWItMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLWwtMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC14LTAge1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLXktMCB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuXFxuLnAtMiB7XFxuICBwYWRkaW5nOiAyOyB9XFxuXFxuLnAtdC0yIHtcXG4gIHBhZGRpbmctdG9wOiAyOyB9XFxuXFxuLnAtci0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI7IH1cXG5cXG4ucC1iLTIge1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC1sLTIge1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteC0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI7XFxuICBwYWRkaW5nLWxlZnQ6IDI7IH1cXG5cXG4ucC15LTIge1xcbiAgcGFkZGluZy10b3A6IDI7XFxuICBwYWRkaW5nLWJvdHRvbTogMjsgfVxcblxcbi5wLTQge1xcbiAgcGFkZGluZzogNDsgfVxcblxcbi5wLXQtNCB7XFxuICBwYWRkaW5nLXRvcDogNDsgfVxcblxcbi5wLXItNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA0OyB9XFxuXFxuLnAtYi00IHtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtbC00IHtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXgtNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA0O1xcbiAgcGFkZGluZy1sZWZ0OiA0OyB9XFxuXFxuLnAteS00IHtcXG4gIHBhZGRpbmctdG9wOiA0O1xcbiAgcGFkZGluZy1ib3R0b206IDQ7IH1cXG5cXG4ucC01IHtcXG4gIHBhZGRpbmc6IDU7IH1cXG5cXG4ucC10LTUge1xcbiAgcGFkZGluZy10b3A6IDU7IH1cXG5cXG4ucC1yLTUge1xcbiAgcGFkZGluZy1yaWdodDogNTsgfVxcblxcbi5wLWItNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLWwtNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC14LTUge1xcbiAgcGFkZGluZy1yaWdodDogNTtcXG4gIHBhZGRpbmctbGVmdDogNTsgfVxcblxcbi5wLXktNSB7XFxuICBwYWRkaW5nLXRvcDogNTtcXG4gIHBhZGRpbmctYm90dG9tOiA1OyB9XFxuXFxuLnAtOCB7XFxuICBwYWRkaW5nOiA4OyB9XFxuXFxuLnAtdC04IHtcXG4gIHBhZGRpbmctdG9wOiA4OyB9XFxuXFxuLnAtci04IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDg7IH1cXG5cXG4ucC1iLTgge1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC1sLTgge1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteC04IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDg7XFxuICBwYWRkaW5nLWxlZnQ6IDg7IH1cXG5cXG4ucC15LTgge1xcbiAgcGFkZGluZy10b3A6IDg7XFxuICBwYWRkaW5nLWJvdHRvbTogODsgfVxcblxcbi5wLTEwIHtcXG4gIHBhZGRpbmc6IDEwOyB9XFxuXFxuLnAtdC0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTA7IH1cXG5cXG4ucC1yLTEwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwOyB9XFxuXFxuLnAtYi0xMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTA7IH1cXG5cXG4ucC1sLTEwIHtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC14LTEwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDsgfVxcblxcbi5wLXktMTAge1xcbiAgcGFkZGluZy10b3A6IDEwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtMTIge1xcbiAgcGFkZGluZzogMTI7IH1cXG5cXG4ucC10LTEyIHtcXG4gIHBhZGRpbmctdG9wOiAxMjsgfVxcblxcbi5wLXItMTIge1xcbiAgcGFkZGluZy1yaWdodDogMTI7IH1cXG5cXG4ucC1iLTEyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMjsgfVxcblxcbi5wLWwtMTIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXgtMTIge1xcbiAgcGFkZGluZy1yaWdodDogMTI7XFxuICBwYWRkaW5nLWxlZnQ6IDEyOyB9XFxuXFxuLnAteS0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC0xNSB7XFxuICBwYWRkaW5nOiAxNTsgfVxcblxcbi5wLXQtMTUge1xcbiAgcGFkZGluZy10b3A6IDE1OyB9XFxuXFxuLnAtci0xNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNTsgfVxcblxcbi5wLWItMTUge1xcbiAgcGFkZGluZy1ib3R0b206IDE1OyB9XFxuXFxuLnAtbC0xNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteC0xNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNTtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4ucC15LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLTE2IHtcXG4gIHBhZGRpbmc6IDE2OyB9XFxuXFxuLnAtdC0xNiB7XFxuICBwYWRkaW5nLXRvcDogMTY7IH1cXG5cXG4ucC1yLTE2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2OyB9XFxuXFxuLnAtYi0xNiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTY7IH1cXG5cXG4ucC1sLTE2IHtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC14LTE2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2O1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5wLXktMTYge1xcbiAgcGFkZGluZy10b3A6IDE2O1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtMjAge1xcbiAgcGFkZGluZzogMjA7IH1cXG5cXG4ucC10LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMDsgfVxcblxcbi5wLXItMjAge1xcbiAgcGFkZGluZy1yaWdodDogMjA7IH1cXG5cXG4ucC1iLTIwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDsgfVxcblxcbi5wLWwtMjAge1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXgtMjAge1xcbiAgcGFkZGluZy1yaWdodDogMjA7XFxuICBwYWRkaW5nLWxlZnQ6IDIwOyB9XFxuXFxuLnAteS0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC0yNCB7XFxuICBwYWRkaW5nOiAyNDsgfVxcblxcbi5wLXQtMjQge1xcbiAgcGFkZGluZy10b3A6IDI0OyB9XFxuXFxuLnAtci0yNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNDsgfVxcblxcbi5wLWItMjQge1xcbiAgcGFkZGluZy1ib3R0b206IDI0OyB9XFxuXFxuLnAtbC0yNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteC0yNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNDtcXG4gIHBhZGRpbmctbGVmdDogMjQ7IH1cXG5cXG4ucC15LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLTI1IHtcXG4gIHBhZGRpbmc6IDI1OyB9XFxuXFxuLnAtdC0yNSB7XFxuICBwYWRkaW5nLXRvcDogMjU7IH1cXG5cXG4ucC1yLTI1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1OyB9XFxuXFxuLnAtYi0yNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjU7IH1cXG5cXG4ucC1sLTI1IHtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC14LTI1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1O1xcbiAgcGFkZGluZy1sZWZ0OiAyNTsgfVxcblxcbi5wLXktMjUge1xcbiAgcGFkZGluZy10b3A6IDI1O1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtMjgge1xcbiAgcGFkZGluZzogMjg7IH1cXG5cXG4ucC10LTI4IHtcXG4gIHBhZGRpbmctdG9wOiAyODsgfVxcblxcbi5wLXItMjgge1xcbiAgcGFkZGluZy1yaWdodDogMjg7IH1cXG5cXG4ucC1iLTI4IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyODsgfVxcblxcbi5wLWwtMjgge1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXgtMjgge1xcbiAgcGFkZGluZy1yaWdodDogMjg7XFxuICBwYWRkaW5nLWxlZnQ6IDI4OyB9XFxuXFxuLnAteS0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC0zMCB7XFxuICBwYWRkaW5nOiAzMDsgfVxcblxcbi5wLXQtMzAge1xcbiAgcGFkZGluZy10b3A6IDMwOyB9XFxuXFxuLnAtci0zMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMDsgfVxcblxcbi5wLWItMzAge1xcbiAgcGFkZGluZy1ib3R0b206IDMwOyB9XFxuXFxuLnAtbC0zMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteC0zMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMDtcXG4gIHBhZGRpbmctbGVmdDogMzA7IH1cXG5cXG4ucC15LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi8qIERpdmlkZXJzICovXFxuLmhyLWxpZ2h0IHtcXG4gIGhlaWdodDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5oci1kYXJrIHtcXG4gIGhlaWdodDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi8qIEFsaWdubWVudCAqL1xcbi50ZXh0LWxlZnQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi50ZXh0LXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LWxvd2VyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlOyB9XFxuXFxuLnRleHQtdXBwZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4udGV4dC1jYXBpdGFsaXplIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XFxuXFxuLmZvbnQtd2VpZ2h0LW5vcm1hbCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLmZvbnQtd2VpZ2h0LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uZm9udC1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLyoqXFxyXFxuICogRm9udCBzaXplXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAudC0xMHtmb250LXNpemU6MTB9XFxyXFxuICogRnJvbSAxMCwgMTIsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXFxyXFxuKiovXFxuLnQtMTAge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi50LTEyIHtcXG4gIGZvbnQtc2l6ZTogMTI7IH1cXG5cXG4udC0xNCB7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnQtMTUge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi50LTE2IHtcXG4gIGZvbnQtc2l6ZTogMTY7IH1cXG5cXG4udC0xNyB7XFxuICBmb250LXNpemU6IDE3OyB9XFxuXFxuLnQtMTgge1xcbiAgZm9udC1zaXplOiAxODsgfVxcblxcbi50LTE5IHtcXG4gIGZvbnQtc2l6ZTogMTk7IH1cXG5cXG4udC0yMCB7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXFxuLnQtMjUge1xcbiAgZm9udC1zaXplOiAyNTsgfVxcblxcbi50LTMwIHtcXG4gIGZvbnQtc2l6ZTogMzA7IH1cXG5cXG4uaW1nLXJvdW5kZWQge1xcbiAgYm9yZGVyLXJhZGl1czogNTsgfVxcblxcbi5pbWctY2lyY2xlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwOyB9XFxuXFxuLmltZy10aHVtYm5haWwge1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcblxcbi5pbnZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7IH1cXG5cXG4ucHVsbC1sZWZ0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7IH1cXG5cXG4ucHVsbC1yaWdodCB7XFxuICBob3Jpem9udGFsLWFsaWduOiByaWdodDsgfVxcblxcbi5tLXgtYXV0byB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubS15LWF1dG8ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LXByaW1hcnkge1xcbiAgY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4udGV4dC1kYW5nZXIge1xcbiAgY29sb3I6ICNkNTAwMDA7IH1cXG5cXG4udGV4dC1tdXRlZCB7XFxuICBjb2xvcjogZ3JheTsgfVxcblxcbi5iZy1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5iZy1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MDAwMDtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmFjdGlvbi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuICAuYWN0aW9uLWJhciAuYWN0aW9uLWJhci10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE3O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAuYWN0aW9uLWJhciAuYWN0aW9uLWl0ZW0ge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxuICBjb2xvcjogIzMwYmNmZjtcXG4gIHdpZHRoOiAzMDtcXG4gIGhlaWdodDogMzA7IH1cXG5cXG4uYnRuIHtcXG4gIGNvbG9yOiAjMzBiY2ZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtaW4taGVpZ2h0OiAzNjtcXG4gIG1pbi13aWR0aDogNjQ7XFxuICBwYWRkaW5nOiAxMCAxMCAxMCAxMDtcXG4gIGZvbnQtc2l6ZTogMTg7XFxuICBtYXJnaW46IDggMTYgOCAxNjsgfVxcbiAgLmJ0bi5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGViZmY7IH1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjtcXG4gIGJvcmRlci1jb2xvcjogIzMwYmNmZjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWEwZWM7XFxuICAgIGJvcmRlci1jb2xvcjogIzAxYTBlYzsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hcXVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2FhYjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ibHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1icm93biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZm9yZXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk2ODsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ncmV5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1sZW1vbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVhMDA7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWxpbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2O1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1vcmFuZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXB1cnBsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MTMwZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tcnVieSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDQ7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tc2t5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcblxcbi5idG4tb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogIzMwYmNmZjtcXG4gIGNvbG9yOiAjMzBiY2ZmOyB9XFxuICAuYnRuLW91dGxpbmUuYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGViZmY7IH1cXG5cXG4uYnRuW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgY29sb3I6ICNhNGE0YTQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmZhIHtcXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZSwgZm9udGF3ZXNvbWUtd2ViZm9udDsgfVxcblxcbi5mb3JtIC5pbnB1dCB7XFxuICBwYWRkaW5nOiAxNiA4IDE2IDg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLmZvcm0gLmlucHV0LmlucHV0LWJvcmRlciB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyO1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0LmlucHV0LXJvdW5kZWQge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjg7XFxuICAgIHBhZGRpbmc6IDE2OyB9XFxuICAuZm9ybSAuaW5wdXRbaXNFbmFibGVkPSdmYWxzZSddIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxcblxcbi5mb3JtIC5pbnB1dC1maWVsZCB7XFxuICBtYXJnaW46IDg7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEyO1xcbiAgICBjb2xvcjogI2JhYmFiYTsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMCAwIDggMDsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1saWdodC5hY3RpdmUsXFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmhyLWRhcmsuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkLmlucHV0LXNpZGVzIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIG1hcmdpbjogMCAwIDggMDsgfVxcblxcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYge1xcbiAgbWFyZ2luLWJvdHRvbTogNDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5ib2R5LFxcbi5ib2R5MixcXG4uZm9vdG5vdGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjYjNiM2IzOyB9XFxuXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogMzI7IH1cXG5cXG4uaDIge1xcbiAgZm9udC1zaXplOiAyMjsgfVxcblxcbi5oMyB7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLmg0IHtcXG4gIGZvbnQtc2l6ZTogMTI7IH1cXG5cXG4uaDUge1xcbiAgZm9udC1zaXplOiAxMTsgfVxcblxcbi5oNiB7XFxuICBmb250LXNpemU6IDEwOyB9XFxuXFxuLmJvZHkge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5ib2R5MiB7XFxuICBmb250LXNpemU6IDE3OyB9XFxuXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtc2l6ZTogMTM7IH1cXG5cXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIExhYmVsIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAudGh1bWIge1xcbiAgICBzdHJldGNoOiBmaWxsO1xcbiAgICB3aWR0aDogNDA7XFxuICAgIGhlaWdodDogNDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTY7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLXRleHQge1xcbiAgICBjb2xvcjogI2IzYjNiMztcXG4gICAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7IH1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgY29sb3I6ICMzMGJjZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLnNlZ21lbnRlZC1iYXIge1xcbiAgZm9udC1zaXplOiAxMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0LCAuc2lkZWRyYXdlci1jZW50ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmO1xcbiAgaGVpZ2h0OiAxNDg7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDE2IDE2IDAgMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDIwIDE1IDAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNjQ7XFxuICB3aWR0aDogNjQ7XFxuICBib3JkZXItcmFkaXVzOiAzMjtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAzNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA3NDtcXG4gIHdpZHRoOiA3NDtcXG4gIGJvcmRlci1yYWRpdXM6IDM3O1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbSB7XFxuICBoZWlnaHQ6IDQ4O1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3JpZW50YXRpb246IGhvcml6b250YWw7IH1cXG4gIC5zaWRlZHJhd2VyLWxpc3QtaXRlbSAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICAgIHdpZHRoOiAyNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBoZWlnaHQ6IDQ4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0uYWN0aXZlIHtcXG4gICAgY29sb3I6ICMzMGJjZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7IH1cXG4gICAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICAgICAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gIG1hcmdpbjogMCAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gIG1hcmdpbjogMCAwIDAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogMC4xO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcbiAgLnNsaWRlcltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gICAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc3dpdGNoW2NoZWNrZWQ9dHJ1ZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjtcXG4gIGNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi50YWItdmlldyB7XFxuICAvKmNvbG9yOiAkc2Vjb25kYXJ5OyovXFxuICBzZWxlY3RlZC1jb2xvcjogIzMwYmNmZjtcXG4gIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDsgfVxcbiAgLnRhYi12aWV3IC50YWItdmlldy1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG4gICAgdGFicy1iYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuI2xvZ2luLWJhY2tncm91bmQge1xcbiAgbWFyZ2luLXRvcDogLTIwO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxcblxcbi5sb2dpbi13cmFwIHtcXG4gIHBhZGRpbmc6IDAgNDA7IH1cXG5cXG4ubG9nby13cmFwIHtcXG4gIG1hcmdpbjogNjAgMCAxMCAwO1xcbiAgcGFkZGluZzogMjAgMDsgfVxcbiAgLmxvZ28td3JhcCAubG9naW4tbG9nbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgb3BhY2l0eTogLjk7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28tc3ViIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG9wYWNpdHk6IC44O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcHBlciB7XFxuICBwYWRkaW5nOiAyMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAzOyB9XFxuICAubG9naW4td3JhcHBlciBUZXh0RmllbGQge1xcbiAgICBwYWRkaW5nOiAxMCAxMDtcXG4gICAgbWFyZ2luOiAxMCAwIDAgMDsgfVxcblxcbi5nby1iYWNrIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IDEwOyB9XFxuXCIsIFwiXCJdKTtcblxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5zY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzI3NDgyYzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanVsaWFuL1Byb2plY3RzL3RvZG9fYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MyNzQ4MmM0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MyNzQ4MmM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MyNzQ4MmM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzI3NDgyYzQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mODg5YjlkOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTWFpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mODg5YjlkOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjg4OWI5ZDhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanVsaWFuL1Byb2plY3RzL3RvZG9fYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y4ODliOWQ4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y4ODliOWQ4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y4ODliOWQ4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mODg5YjlkOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmODg5YjlkOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9NYWluLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWY4ODliOWQ4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Zjg4OWI5ZDgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjg4OWI5ZDgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnXG5pbXBvcnQgUm91dGluZyBmcm9tICcuL3JvdXRpbmcnO1xuXG5pbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29scydcblxuXG5pZihUTlNfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVnVlLnVzZShWdWVEZXZ0b29scylcbn1cbiAgXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xuVnVlLmNvbmZpZy5zaWxlbnQgPSAoVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKVxuXG5cbm5ldyBWdWUoe1xuICBcbiAgcmVuZGVyOiBoID0+IGgoJ2ZyYW1lJywgW2goUm91dGluZy5tYWluKV0pXG59KS4kc3RhcnQoKVxuIiwiaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgTWFpbiBmcm9tICcuL2NvbXBvbmVudHMvTWFpbic7XG5cbmNvbnN0IHJvdXRpbmcgPSB7XG4gICAgbG9naW46IExvZ2luLFxuICAgIG1haW46IE1haW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGluZzsiLCJpbXBvcnQgeyBzQ0F1dGggfSBmcm9tIFwic2NobXVja2xpY2xvdWRfYXV0aFwiO1xuaW1wb3J0IHsgc0NTdG9yYWdlIH0gZnJvbSBcInNjaG11Y2tsaWNsb3VkX3N0b3JhZ2VcIjtcblxuY29uc3QgYXBwX2lkID0gXCI0MDcyOTJhMGVkNTY0YmVhZDU5MDIzZmE5NjYwM2M1YzZhOTU1M2QzXCI7XG5jb25zdCBhcHBfc2VjcmV0ID0gXCI2NmQ3NTQ5YjQ0MGZlNmIzNjI4N2Y1Zjg4MDBmNjhjZDY4MWE2YzY0MzlmMzkxNTA0MGU2MGY5YTA2ZTBkNmY2XCI7XG5cbmxldCByZWZfYXV0aCA9IG5ldyBzQ0F1dGgoYXBwX2lkLCBhcHBfc2VjcmV0KTtcbmxldCByZWZfc3RvcmFnZSA9IG5ldyBzQ1N0b3JhZ2UoYXBwX2lkLCBhcHBfc2VjcmV0KTtcblxucmVmX3N0b3JhZ2Uuc2V0QnVja2V0KDE2KTtcblxuZXhwb3J0IHtyZWZfYXV0aCBhcyBhdXRoLCByZWZfc3RvcmFnZSBhcyBzdG9yYWdlfTsiXSwic291cmNlUm9vdCI6IiJ9