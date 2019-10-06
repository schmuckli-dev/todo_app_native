webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=script&lang=js&":
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NYWluLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUdBLEdBTEE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSw2QkFDQSxJQURBLENBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQSxPQUxBLE1BS0E7QUFDQTtBQUNBLHdDQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQTtBQUZBO0FBSUEsU0FOQTtBQU9BO0FBQ0E7O0FBbkJBO0FBTkEsRyIsImZpbGUiOiJidW5kbGUuMzA1MTJkNzBlMmZjOTBmYjhiZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBAbG9hZGVkPVwic3RhcnRcIj5cbiAgICAgICAgPEFjdGlvbkJhciBmbGF0PVwidHJ1ZVwiIHRpdGxlPVwiU3RhcnRcIj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uLz5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IHRvcD1cIjMwXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciBidXN5PVwidHJ1ZVwiIEBidXN5Q2hhbmdlPVwib25CdXN5Q2hhbmdlZFwiIC8+XG4gICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuLi9zY2htdWNrbGljbG91ZF9zZXJ2aWNlXCI7XG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vcm91dGluZ1wiO1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcblxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHN0YXJ0KCl7XG4gICAgICB2YXIgc2Vzc2lvbl90b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInNlc3Npb25fdG9rZW5cIiwgdW5kZWZpbmVkKTtcbiAgICAgIGNvbnNvbGUubG9nKHNlc3Npb25fdG9rZW4pO1xuICAgICAgaWYoc2Vzc2lvbl90b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFsZXJ0KHNlc3Npb25fdG9rZW4pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxlcnQgZGlhbG9nIGNsb3NlZC5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBnbG9iYWxfdGhpcyA9IHRoaXM7XG4gICAgICAgIGFsZXJ0KFwiWW91IGFyZSBub3QgYXV0aG9yaXplZFwiKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBnbG9iYWxfdGhpcy4kbmF2aWdhdGVUbyhSb3V0aW5nLmxvZ2luLCB7XG4gICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGJhY2tzdGFja1Zpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICBBY3Rpb25CYXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuXG4gICAgRmxleGJveExheW91dCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmXG4gICAgfVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=