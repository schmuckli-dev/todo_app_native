webpackHotUpdate("bundle",{

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



var appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },

  methods: {
    start() {
      var session_token = appSettings.getString("session_token", undefined);
      console.log(session_token);

      if (session_token !== undefined) {
        alert(session_token).then(() => {
          console.log("Alert dialog closed.");
        });
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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWFpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc2NobXVja2xpY2xvdWRfc2VydmljZS5qcyJdLCJuYW1lcyI6WyJhcHBfaWQiLCJhcHBfc2VjcmV0IiwicmVmX2F1dGgiLCJzQ0F1dGgiLCJyZWZfc3RvcmFnZSIsInNDU3RvcmFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFEQTtBQUVBO0FBRkE7QUFJQSxHQU5BOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBO0FBRkE7QUFJQSxXQU5BO0FBT0EsU0FUQSxNQVNBO0FBQ0Esa0NBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxXQUhBO0FBSUE7QUFDQSxPQWhCQTtBQWlCQTs7QUFyQkE7QUFQQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFHQSxHQUxBOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsNkJBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxTQUhBO0FBSUEsT0FMQSxNQUtBO0FBQ0E7QUFDQSx3Q0FDQSxJQURBLENBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUE7QUFGQTtBQUlBLFNBTkE7QUFPQTtBQUNBOztBQW5CQTtBQU5BLEc7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLDBDQUFmO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLGtFQUFuQjtBQUVBLElBQUlDLFFBQVEsR0FBRyxJQUFJQywwREFBSixDQUFXSCxNQUFYLEVBQW1CQyxVQUFuQixDQUFmO0FBQ0EsSUFBSUcsV0FBVyxHQUFHLElBQUlDLGdFQUFKLENBQWNMLE1BQWQsRUFBc0JDLFVBQXRCLENBQWxCIiwiZmlsZSI6ImJ1bmRsZS4wMzIxOTRjMzRkODAxZDAxODM1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8QWN0aW9uQmFyIGZsYXQ9XCJ0cnVlXCIgdGl0bGU9XCJMb2dpblwiLz5cbiAgICAgICAgPEFic29sdXRlTGF5b3V0PlxuICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IHRvcD1cIjEzMFwiIHdpZHRoPVwiMTAwJVwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cImVtYWlsXCIgaGludD1cIkVtYWlsXCIgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cInBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiIGhpbnQ9XCJQYXNzd29yZFwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJMb2dpblwiIEB0YXA9XCJvbkxvZ2luXCIgLz5cbiAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgIDwvQWJzb2x1dGVMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vc2NobXVja2xpY2xvdWRfc2VydmljZVwiO1xuaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uL3JvdXRpbmdcIjtcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uTG9naW4oKXtcbiAgICAgIHZhciBnbG9iYWxfdGhpcyA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVtYWlsLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgIGF1dGguYXV0aG9yaXplRW1haWxQYXNzd29yZCh0aGlzLmVtYWlsLCB0aGlzLnBhc3N3b3JkKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgaWYocmVzcG9uc2UuaXNPSyl7XG4gICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwic2Vzc2lvbl90b2tlblwiLCByZXNwb25zZS5kYXRhLnNlc3Npb25fdG9rZW4pO1xuICAgICAgICAgIGFsZXJ0KCdBdXRob3JpemF0aW9uIHN1Y2Nlc3NmdWwuJylcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWxfdGhpcy4kbmF2aWdhdGVUbyhSb3V0aW5nLm1haW4sIHtcbiAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBiYWNrc3RhY2tWaXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQocmVzcG9uc2UubWVzc2FnZSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsZXJ0IGRpYWxvZyBjbG9zZWQuXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIEFjdGlvbkJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG5cbiAgICBGbGV4Ym94TGF5b3V0IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmZcbiAgICB9XG5cbiAgICBCdXR0b24ge1xuICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4OTg5YmI7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjODk4OWJiIDAlLCAjYTVhNGNiIDc0JSk7XG4gICAgfVxuXG4gICAgVGV4dEZpZWxkIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBtYXJnaW46IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIEBsb2FkZWQ9XCJzdGFydFwiPlxuICAgICAgICA8QWN0aW9uQmFyIGZsYXQ9XCJ0cnVlXCIgdGl0bGU9XCJTdGFydFwiPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24vPlxuICAgICAgICA8L0FjdGlvbkJhcj5cbiAgICAgICAgPEZsZXhib3hMYXlvdXQgdG9wPVwiMzBcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XCJ0cnVlXCIgQGJ1c3lDaGFuZ2U9XCJvbkJ1c3lDaGFuZ2VkXCIgLz5cbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIi4uL3NjaG11Y2tsaWNsb3VkX3NlcnZpY2VcIjtcbmltcG9ydCBSb3V0aW5nIGZyb20gXCIuLi9yb3V0aW5nXCI7XG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc3RhcnQoKXtcbiAgICAgIHZhciBzZXNzaW9uX3Rva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwic2Vzc2lvbl90b2tlblwiLCB1bmRlZmluZWQpO1xuICAgICAgY29uc29sZS5sb2coc2Vzc2lvbl90b2tlbik7XG4gICAgICBpZihzZXNzaW9uX3Rva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWxlcnQoc2Vzc2lvbl90b2tlbilcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGVydCBkaWFsb2cgY2xvc2VkLlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGdsb2JhbF90aGlzID0gdGhpcztcbiAgICAgICAgYWxlcnQoXCJZb3UgYXJlIG5vdCBhdXRob3JpemVkXCIpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGdsb2JhbF90aGlzLiRuYXZpZ2F0ZVRvKFJvdXRpbmcubG9naW4sIHtcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgYmFja3N0YWNrVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIEFjdGlvbkJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG5cbiAgICBGbGV4Ym94TGF5b3V0IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmZcbiAgICB9XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgc0NBdXRoIH0gZnJvbSBcInNjaG11Y2tsaWNsb3VkX2F1dGhcIjtcbmltcG9ydCB7IHNDU3RvcmFnZSB9IGZyb20gXCJzY2htdWNrbGljbG91ZF9zdG9yYWdlXCI7XG5cbmNvbnN0IGFwcF9pZCA9IFwiNDA3MjkyYTBlZDU2NGJlYWQ1OTAyM2ZhOTY2MDNjNWM2YTk1NTNkM1wiO1xuY29uc3QgYXBwX3NlY3JldCA9IFwiNjZkNzU0OWI0NDBmZTZiMzYyODdmNWY4ODAwZjY4Y2Q2ODFhNmM2NDM5ZjM5MTUwNDBlNjBmOWEwNmUwZDZmNlwiO1xuXG5sZXQgcmVmX2F1dGggPSBuZXcgc0NBdXRoKGFwcF9pZCwgYXBwX3NlY3JldCk7XG5sZXQgcmVmX3N0b3JhZ2UgPSBuZXcgc0NTdG9yYWdlKGFwcF9pZCwgYXBwX3NlY3JldCk7XG5cbmV4cG9ydCB7cmVmX2F1dGggYXMgYXV0aCwgcmVmX3N0b3JhZ2UgYXMgc3RvcmFnZX07Il0sInNvdXJjZVJvb3QiOiIifQ==