webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schmucklicloud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./schmucklicloud_service.js");
/* harmony import */ var _schmucklicloud_service__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_schmucklicloud_service__WEBPACK_IMPORTED_MODULE_0__);
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
      ref.authorizeEmailPassword(this.email, this.password).then(function (response) {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBREE7QUFFQTtBQUZBO0FBSUEsR0FOQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBO0FBSUEsV0FOQTtBQU9BLFNBVEEsTUFTQTtBQUNBLGtDQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0EsV0FIQTtBQUlBO0FBQ0EsT0FoQkE7QUFpQkE7O0FBckJBO0FBUEEsRyIsImZpbGUiOiJidW5kbGUuZmY5MmIwNTU2MzFmMWExNTllZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cbiAgICAgICAgPEFjdGlvbkJhciBmbGF0PVwidHJ1ZVwiIHRpdGxlPVwiTG9naW5cIi8+XG4gICAgICAgIDxBYnNvbHV0ZUxheW91dD5cbiAgICAgICAgICA8RmxleGJveExheW91dCB0b3A9XCIxMzBcIiB3aWR0aD1cIjEwMCVcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHYtbW9kZWw9XCJlbWFpbFwiIGhpbnQ9XCJFbWFpbFwiIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHYtbW9kZWw9XCJwYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIiBoaW50PVwiUGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiTG9naW5cIiBAdGFwPVwib25Mb2dpblwiIC8+XG4gICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICA8L0Fic29sdXRlTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3NjaG11Y2tsaWNsb3VkX3NlcnZpY2VcIjtcbmltcG9ydCBSb3V0aW5nIGZyb20gXCIuLi9yb3V0aW5nXCI7XG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkxvZ2luKCl7XG4gICAgICB2YXIgZ2xvYmFsX3RoaXMgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2codGhpcy5lbWFpbCwgdGhpcy5wYXNzd29yZCk7XG4gICAgICByZWYuYXV0aG9yaXplRW1haWxQYXNzd29yZCh0aGlzLmVtYWlsLCB0aGlzLnBhc3N3b3JkKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgaWYocmVzcG9uc2UuaXNPSyl7XG4gICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwic2Vzc2lvbl90b2tlblwiLCByZXNwb25zZS5kYXRhLnNlc3Npb25fdG9rZW4pO1xuICAgICAgICAgIGFsZXJ0KCdBdXRob3JpemF0aW9uIHN1Y2Nlc3NmdWwuJylcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWxfdGhpcy4kbmF2aWdhdGVUbyhSb3V0aW5nLm1haW4sIHtcbiAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBiYWNrc3RhY2tWaXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQocmVzcG9uc2UubWVzc2FnZSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsZXJ0IGRpYWxvZyBjbG9zZWQuXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIEFjdGlvbkJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG5cbiAgICBGbGV4Ym94TGF5b3V0IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmZcbiAgICB9XG5cbiAgICBCdXR0b24ge1xuICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4OTg5YmI7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjODk4OWJiIDAlLCAjYTVhNGNiIDc0JSk7XG4gICAgfVxuXG4gICAgVGV4dEZpZWxkIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBtYXJnaW46IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==