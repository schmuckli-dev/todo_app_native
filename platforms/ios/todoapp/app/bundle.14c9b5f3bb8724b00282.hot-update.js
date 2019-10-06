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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBREE7QUFFQTtBQUZBO0FBSUEsR0FOQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBO0FBSUEsV0FOQTtBQU9BLFNBVEEsTUFTQTtBQUNBLGtDQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0EsV0FIQTtBQUlBO0FBQ0EsT0FoQkE7QUFpQkE7O0FBckJBO0FBUEEsRyIsImZpbGUiOiJidW5kbGUuMTRjOWI1ZjNiYjg3MjRiMDAyODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cbiAgICAgICAgPEFjdGlvbkJhciBmbGF0PVwidHJ1ZVwiIHRpdGxlPVwiTG9naW5cIi8+XG4gICAgICAgIDxBYnNvbHV0ZUxheW91dD5cbiAgICAgICAgICA8RmxleGJveExheW91dCB0b3A9XCIxMzBcIiB3aWR0aD1cIjEwMCVcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHYtbW9kZWw9XCJlbWFpbFwiIGhpbnQ9XCJFbWFpbFwiIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHYtbW9kZWw9XCJwYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIiBoaW50PVwiUGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiTG9naW5cIiBAdGFwPVwib25Mb2dpblwiIC8+XG4gICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICA8L0Fic29sdXRlTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3NjaG11Y2tsaWNsb3VkX3NlcnZpY2VcIjtcbmltcG9ydCBSb3V0aW5nIGZyb20gXCIuLi9yb3V0aW5nXCI7XG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkxvZ2luKCl7XG4gICAgICB2YXIgZ2xvYmFsX3RoaXMgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2codGhpcy5lbWFpbCwgdGhpcy5wYXNzd29yZCk7XG4gICAgICBhdXRoLmF1dGhvcml6ZUVtYWlsUGFzc3dvcmQodGhpcy5lbWFpbCwgdGhpcy5wYXNzd29yZCkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgIGlmKHJlc3BvbnNlLmlzT0spe1xuICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInNlc3Npb25fdG9rZW5cIiwgcmVzcG9uc2UuZGF0YS5zZXNzaW9uX3Rva2VuKTtcbiAgICAgICAgICBhbGVydCgnQXV0aG9yaXphdGlvbiBzdWNjZXNzZnVsLicpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsX3RoaXMuJG5hdmlnYXRlVG8oUm91dGluZy5tYWluLCB7XG4gICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgYmFja3N0YWNrVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1lc3NhZ2UpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGVydCBkaWFsb2cgY2xvc2VkLlwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICBBY3Rpb25CYXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuXG4gICAgRmxleGJveExheW91dCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmXG4gICAgfVxuXG4gICAgQnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMzBweDtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk4OWJiO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzg5ODliYiAwJSwgI2E1YTRjYiA3NCUpO1xuICAgIH1cblxuICAgIFRleHRGaWVsZCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=