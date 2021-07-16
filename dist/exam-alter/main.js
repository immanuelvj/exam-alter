(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admindashboard/admindashboard.component */ "./src/app/admin/admindashboard/admindashboard.component.ts");
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login.guard */ "./src/app/login.guard.ts");
/* harmony import */ var _route_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../route.guard */ "./src/app/route.guard.ts");









var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_6__["AdmindashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'admin', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuardService"]] },
                    { path: 'admin_dashboard', component: _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_6__["AdmindashboardComponent"], canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]] }
                ]),
            ],
            providers: [_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuardService"], _route_guard__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admindashboard/admindashboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admindashboard/admindashboard.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    \r\n    background-color:lightgray;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-size: cover;\r\n    box-shadow: 0px 4px 40px rgba(181, 181, 181, 0.2);\r\n}\r\n\r\n.insidebox{\r\n    margin-left:50px;\r\n    margin-right:50px;\r\n    background-color: #ffffff;\r\n    margin-top: 50px;\r\n    height: 700px;\r\n    border-radius: 40px;\r\n}\r\n\r\ninput,select{\r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius:0px;\r\n    border-left: 0px;\r\n    border-right: 0px;\r\n    border-top:0px;\r\n    border-bottom: 1px solid #b81250;\r\n    font-family: Montserrat,sans-serif;\r\n    color:#b81250\r\n}\r\n\r\ninput::-moz-placeholder,option{\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:16px;\r\n    color:gray;\r\n    font-weight:200;\r\n}\r\n\r\ninput::placeholder,option{\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:16px;\r\n    color:gray;\r\n    font-weight:200;\r\n}\r\n\r\n.hover:hover{\r\n  color:#b81250;\r\n  font-weight: 800;\r\n  font-size: 26px;\r\n}\r\n\r\n.blink {\r\n  animation: blink-animation 1s steps(5, start) infinite;\r\n  -webkit-animation: blink-animation 1s steps(5, start) infinite;\r\n}\r\n\r\n@keyframes blink-animation {\r\n  to {\r\n    border:0px\r\n  }\r\n}\r\n\r\n@-webkit-keyframes blink-animation {\r\n  to {\r\n    border:0px\r\n  }\r\n}\r\n\r\n.isactive{\r\n  color: white;\r\n  background-color:#b81250;\r\n}\r\n\r\n.isnotactive{\r\n  color: black;\r\n  background-color: #FFFFFF;\r\n  \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5kYXNoYm9hcmQvYWRtaW5kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUxBO0lBQ0ksaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RCw4REFBOEQ7QUFDaEU7O0FBQ0E7RUFDRTtJQUNFO0VBQ0Y7QUFDRjs7QUFDQTtFQUNFO0lBQ0U7RUFDRjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFHQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7O0FBRTNCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW5kYXNoYm9hcmQvYWRtaW5kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JheTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0MHB4IHJnYmEoMTgxLCAxODEsIDE4MSwgMC4yKTtcclxufVxyXG5cclxuLmluc2lkZWJveHtcclxuICAgIG1hcmdpbi1sZWZ0OjUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuXHJcbmlucHV0LHNlbGVjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICBib3JkZXItbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXItdG9wOjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjgxMjUwO1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiNiODEyNTBcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVyLG9wdGlvbntcclxuICAgIGZvbnQtZmFtaWx5Ok1vbnRzZXJyYXQsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgY29sb3I6Z3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OjIwMDtcclxufVxyXG5cclxuLmhvdmVyOmhvdmVye1xyXG4gIGNvbG9yOiNiODEyNTA7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbi5ibGluayB7XHJcbiAgYW5pbWF0aW9uOiBibGluay1hbmltYXRpb24gMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluay1hbmltYXRpb24gMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgYmxpbmstYW5pbWF0aW9uIHtcclxuICB0byB7XHJcbiAgICBib3JkZXI6MHB4XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBibGluay1hbmltYXRpb24ge1xyXG4gIHRvIHtcclxuICAgIGJvcmRlcjowcHhcclxuICB9XHJcbn1cclxuXHJcbi5pc2FjdGl2ZXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojYjgxMjUwO1xyXG59XHJcblxyXG5cclxuLmlzbm90YWN0aXZle1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admindashboard/admindashboard.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/admindashboard/admindashboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid background\">\n\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n\n\n      <div class=\"insidebox\" style=\"padding:40px;\">\n        <!-- nav-->\n        <div class=\"row text-center\">\n          <div class=\"col-xs-2\" (click)=\"activate('create')\" style=\"padding: 5px;cursor: pointer;\"\n            [ngClass]=\"{'isactive':create == true,'isnotactive':create == false}\">\n            <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">Create or Edit User</p>\n          </div>\n          <div class=\"col-xs-2\" (click)=\"activate('exam')\" style=\"padding: 5px;cursor: pointer;\"\n            [ngClass]=\"{'isactive':exam == true,'isnotactive':exam == false}\">\n            <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">Create Exam Schedule</p>\n          </div>\n          <div class=\"col-xs-2\" (click)=\"activate('details')\" style=\"padding: 5px;cursor: pointer;\"\n            [ngClass]=\"{'isactive':details == true,'isnotactive':details == false}\">\n            <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">User List</p>\n          </div>\n          <div class=\"col-xs-2\" (click)=\"activate('examdetails')\" style=\"padding: 5px;cursor: pointer;\"\n            [ngClass]=\"{'isactive':examdetails == true,'isnotactive':examdetails == false}\">\n            <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">Exam List</p>\n          </div>\n          <div class=\"col-xs-2\" (click)=\"activate('staff')\" style=\"padding: 5px;cursor: pointer;\"\n            [ngClass]=\"{'isactive':staff == true,'isnotactive':staff == false}\">\n            <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">Reschedule Request</p>\n          </div>\n\n          <div class=\"col-xs-2 hover\" style=\"padding: 5px;cursor: pointer;\" (click)=\"logout()\">\n            <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;text-align: right;\">Logout</p>\n          </div>\n        </div>\n        <!-- end nav -->\n\n        <!-- create or edit  -->\n\n        <div class=\"row\" style=\"padding: 80px;padding-top:50px;\" *ngIf=\"create\">\n          <div class=\"col-xs-12\">\n\n            <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Create or edit User</p>\n            <div class=\"row\" style=\"margin-top: 10px;\">\n              <div class=\"col-xs-1\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Exisiting User</p>\n\n\n              </div>\n              <div class=\"col-xs-6\">\n                <select [(ngModel)]=\"userId\" (click)=\"changevalue()\" placeholder=\"Select a user\">\n                  <option [value]=\"null\">Select a User</option>\n                  <option *ngFor=\"let obj of users\" [value]=\"obj.userId\">{{obj.email}}</option>\n                </select>\n\n              </div>\n            </div>\n            <div class=\"row\" style=\"margin-top: 40px;\">\n              <div class=\"col-xs-6\">\n                <input type=\"text\" placeholder=\"First name\" name=\"firstName\" [(ngModel)]=\"firstName\" />\n              </div>\n              <div class=\"col-xs-6\">\n                <input type=\"text\" placeholder=\"Last name\" name=\"lastName\" [(ngModel)]=\"lastName\" />\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-top:40px;\">\n              <div class=\"col-xs-6\">\n                <input type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\" />\n              </div>\n              <div class=\"col-xs-6\">\n                <input type=\"text\" placeholder=\"Phone No\" name=\"mobileNumber\" [(ngModel)]=\"mobileNumber\" />\n              </div>\n            </div>\n\n\n            <div class=\"row\" style=\"margin-top:40px;\">\n              <div class=\"col-xs-6\">\n\n                <select [(ngModel)]=\"department\"> // value is a string or number\n                  <option [value]=\"null\">Select a Department</option>\n                  <option *ngFor=\"let obj of departments\" [value]=\"obj.value\">{{obj.name}}</option>\n                </select>\n              </div>\n              <div class=\"col-xs-6\">\n                <input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\" />\n              </div>\n            </div>\n\n\n\n            <div class=\"row\" style=\"margin-top:40px;\">\n              <div class=\"col-xs-6\">\n\n                <select [(ngModel)]=\"usertype\">\n                  <option [value]=\"null\">Select Usertype</option>\n                  <option *ngFor=\"let obj of usertypes\" [value]=\"obj.value\">{{obj.name}}</option>\n                </select>\n              </div>\n\n            </div>\n\n            <div class=\"row\" style=\"margin-top:40px;\">\n              <div class=\"col-xs-12 text-center\">\n\n                <button class=\"btn\" (click)=\"createUser()\"\n                  style=\"background-color: #b81250;font-family:Montserrat,sans-serif;font-size: 16px;color:white\">Create\n                  / Update</button>\n\n              </div>\n\n            </div>\n\n\n          </div>\n        </div>\n\n        <!-- end create or edit-->\n\n\n        <!-- Create exam schedule or edit -->\n\n        <div class=\"row\" style=\"padding: 80px;padding-top:50px;\" *ngIf=\"exam\">\n          <div class=\"col-xs-12\">\n\n            <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Create or edit Exam Schedule\n            </p>\n            <div class=\"row\" style=\"margin-top: 10px;\">\n              <div class=\"col-xs-1\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Exisiting Schedule</p>\n\n\n              </div>\n              <div class=\"col-xs-6\">\n                <select [(ngModel)]=\"scheduleId\" (click)=\"changevalueschedule()\" placeholder=\"Select a Schedule\">\n                  <option [value]=\"null\">Select a Schedule</option>\n                  <option *ngFor=\"let obj of schedules\" [value]=\"obj.scheduleId\">{{obj.HallNo}} {{obj.Date}}</option>\n                </select>\n\n              </div>\n            </div>\n            <div class=\"row\" style=\"margin-top: 40px;\">\n              <div class=\"col-xs-6\">\n                <input type=\"text\" placeholder=\"Hall No\" name=\"hallNo\" [(ngModel)]=\"hallNo\" />\n              </div>\n              <div class=\"col-xs-6\">\n                <input type=\"date\" placeholder=\"Date\" name=\"examdate\" [(ngModel)]=\"examdate\" />\n              </div>\n            </div>\n\n\n\n\n            <div class=\"row\" style=\"margin-top:40px;\">\n              <div class=\"col-xs-6\">\n\n                <select [(ngModel)]=\"examslot\"> // value is a string or number\n                  <option [value]=\"null\">Select a slot</option>\n                  <option *ngFor=\"let obj of slot\" [ngValue]=\"obj\">{{obj.name}}</option>\n                </select>\n              </div>\n              <div class=\"col-xs-6\">\n                <div class=\"col-xs-6\">\n                  <select [(ngModel)]=\"examinerId\" (click)=\"changevalueexaminer()\" placeholder=\"Select a faculty\">\n                    <option [value]=\"null\">Select a User</option>\n                    <option *ngFor=\"let obj of users\" [value]=\"obj.userId\">{{obj.email}}</option>\n                  </select>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-top:40px;\">\n              <div class=\"col-xs-12 text-center\">\n\n                <button class=\"btn\" (click)=\"createExam()\"\n                  style=\"background-color: #b81250;font-family:Montserrat,sans-serif;font-size: 16px;color:white\">Create\n                  / Update</button>\n\n              </div>\n\n            </div>\n\n\n          </div>\n        </div>\n\n        <!--end create exam schedule -->\n\n        <!--user List -->\n\n\n        <div class=\"row\" style=\"padding: 80px;padding-top:50px;\" *ngIf=\"details\">\n          <div class=\"col-xs-12\">\n\n            <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">User List and Roles\n            </p>\n            <div class=\"row\" style=\"margin-top: 40px;\">\n              <div class=\"col-xs-1\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\"></p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Name</p>\n              </div>\n              <div class=\"col-xs-3\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Email</p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Department</p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Phone</p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Role</p>\n              </div>\n            </div>\n\n\n            <div class=\"row\" style=\"margin-top:10px;\" *ngFor=\"let user of users\">\n              <div class=\"col-xs-1\">\n                <p style=\"font-size: 12px;font-family: Montserrat,sans-serif;font-weight: 800;\"><input type=\"checkbox\"  (click)=\"addId(user.userId)\"></p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{user.firstName}} {{user.LastName}}</p>\n              </div>\n              <div class=\"col-xs-3\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{user.email}}</p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{user.department}}</p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{user.mobileNumber}}</p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{user.usertype}}</p>\n              </div>\n            </div>\n\n\n            <div class=\"row\" style=\"margin-top:40px;\">\n              <div class=\"col-xs-12 text-center\">\n\n                <button class=\"btn\" (click)=\"deleteUser()\"\n                  style=\"background-color: #b81250;font-family:Montserrat,sans-serif;font-size: 16px;color:white\">Delete</button>\n\n              </div>\n\n            </div>\n\n\n          </div>\n        </div>\n\n        <!-- end user list -->\n\n\n        <!-- Schedule List-->\n\n        \n        <div class=\"row\" style=\"padding: 80px;padding-top:50px;\" *ngIf=\"examdetails\">\n          <div class=\"col-xs-12\">\n\n            <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Exam Schedule\n            </p>\n            <div class=\"row\" style=\"margin-top: 40px;\">\n              <div class=\"col-xs-1\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\"></p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">HallNo</p>\n              </div>\n              <div class=\"col-xs-3\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Faculty Name</p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Department</p>\n              </div>\n\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Timing</p>\n              </div>\n            </div>\n\n\n            <div class=\"row\" style=\"margin-top:10px;\" *ngFor=\"let schedule of schedules\">\n              <div class=\"col-xs-1\">\n                <p style=\"font-size: 12px;font-family: Montserrat,sans-serif;font-weight: 800;\"><input type=\"checkbox\"  (click)=\"addsId(schedule.scheduleId)\"></p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{schedule.HallNo}}</p>\n              </div>\n              <div class=\"col-xs-3\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{schedule.Name}}</p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{schedule.Department}}</p>\n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{schedule.Date}}</p>\n              </div>\n\n            </div>\n\n\n            <div class=\"row\" style=\"margin-top:40px;\">\n              <div class=\"col-xs-12 text-center\">\n\n                <button class=\"btn\" (click)=\"deleteSchedule()\"\n                  style=\"background-color: #b81250;font-family:Montserrat,sans-serif;font-size: 16px;color:white\">Delete</button>\n\n              </div>\n\n            </div>\n\n\n          </div>\n        </div>\n        <!-- end Schedule List-->\n        <!--req-->\n        <div class=\"row\" style=\"padding: 80px;padding-top:50px;\" *ngIf=\"staff\">\n          <div class=\"col-xs-12\">\n\n            <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Received req for Schedule change\n            </p>\n            <div class=\"row\" style=\"margin-top: 40px;\">\n\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Name / Department</p>\n              </div>\n\n              <div class=\"col-xs-3\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">HallNo / Timing</p>\n              </div>\n\n              \n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Assigned to </p>\n              </div>\n\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Action</p>\n              </div>\n              \n            </div>\n\n\n            <div class=\"row\" style=\"margin-top:10px;\" *ngFor=\"let req of req\">\n\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{req.Name}} / {{req.Department}}</p>\n              </div>\n              <div class=\"col-xs-3\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{req.HallNo}} /<br> {{req.Date}}\n                </p>\n              </div>\n              \n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{req.receiverName}} / {{req.receiverDepartment}}</p>\n              </div>\n              <div class=\"col-xs-2\">\n                <button class=\"btn\" (click)=\"acceptreq(req)\"\n                style=\"background-color: #b81250;font-family:Montserrat,sans-serif;font-size: 16px;color:white\">Accept Request</button>\n  \n              </div>\n              <div class=\"col-xs-2\">\n                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\"> <button class=\"btn\" (click)=\"rejectreq(req)\"\n                  style=\"background-color: #b81250;font-family:Montserrat,sans-serif;font-size: 16px;color:white\">Reject Request</button>\n    </p>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <!--end req-->\n      </div>\n\n    </div>\n  </div>\n\n\n  <div class=\"row text-center\" style=\"margin-top: 30px;\">\n    <p style=\"font-family:Montserrat;font-weight: 800;\">Designed and Developed by the JUSTICE LEAGUE OF AMRITA CBE</p>\n  </div>\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/admin/admindashboard/admindashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admindashboard/admindashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: AdmindashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashboardComponent", function() { return AdmindashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);






var AdmindashboardComponent = /** @class */ (function () {
    function AdmindashboardComponent(appService, toastr, router) {
        var _this = this;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.departments = [{ 'name': 'Computer Science and Engineering', 'value': 'Computer Science and Engineering' }, { name: 'Electronics and Engineering', 'value': 'Electronics and Engineering' }];
        this.usertypes = [{ 'name': 'Faculty', 'value': 'faculty' }, { 'name': 'Admin', 'value': 'admin' }, { 'name': 'Department Controller of Examination', 'value': 'dcoe' },];
        this.slot = [{ 'name': '9.00 am - 10.00 am', 'value': '1' }, { 'name': '10.00 am - 11.00 am', 'value': '2' }, { 'name': '11.00 am - 12.00 pm', 'value': '3' }, { 'name': '1.00 pm - 2.00 pm', 'value': '4' }, { 'name': '2.00 pm - 3.00 pm', 'value': '5' }, { 'name': '3.00 pm - 4.00 pm', 'value': '6' }];
        this.users = [];
        this.userChange = [];
        this.scheduleChange = [];
        this.req = [];
        this.getallUser = function () {
            _this.appService.getalluser()
                .subscribe(function (apiResponse) {
                _this.users = apiResponse.data;
            });
        };
        this.getallSchedule = function () {
            _this.appService.getSchedule()
                .subscribe(function (apiResponse) {
                _this.schedules = apiResponse.data;
            });
        };
        this.changevalue = function () {
            for (var i = 0; i < _this.users.length; i++) {
                if (_this.users[i].userId == _this.userId) {
                    console.log(_this.users[i]);
                    _this.firstName = _this.users[i].firstName;
                    _this.lastName = _this.users[i].lastName;
                    _this.email = _this.users[i].email;
                    _this.password = _this.users[i].password;
                    _this.mobileNumber = _this.users[i].mobileNumber;
                    _this.department = _this.users[i].department;
                    _this.usertype = _this.users[i].usertype;
                    _this.edit = true;
                }
            }
        };
        this.changevalueexaminer = function () {
            for (var i = 0; i < _this.users.length; i++) {
                if (_this.users[i].userId == _this.examinerId) {
                    _this.examinername = _this.users[i].firstName + " " + _this.users[i].lastName;
                    _this.examinerdepartment = _this.users[i].department;
                }
            }
        };
        this.changevalueschedule = function () {
            for (var i = 0; i < _this.schedules.length; i++) {
                if (_this.schedules[i].scheduleId == _this.scheduleId) {
                    console.log(_this.scheduleId);
                    _this.examinerId = _this.schedules[i].userId;
                    _this.hallNo = _this.schedules[i].HallNo;
                    _this.examinername = _this.schedules[i].Name;
                    _this.examslot = _this.slot[_this.schedules[i].Slot - 1];
                    _this.examinerdepartment = _this.schedules[i].Department;
                    _this.examdate = _this.schedules[i].examdate;
                    _this.examedit = true;
                }
            }
        };
        this.activate = function (data) {
            if (data == 'create') {
                _this.create = true;
                _this.exam = false;
                _this.details = false;
                _this.staff = false;
                _this.examdetails = false;
            }
            else if (data == 'exam') {
                _this.create = false;
                _this.exam = true;
                _this.details = false;
                _this.staff = false;
                _this.examdetails = false;
            }
            else if (data == 'details') {
                _this.create = false;
                _this.exam = false;
                _this.details = true;
                _this.staff = false;
                _this.examdetails = false;
            }
            else if (data == 'examdetails') {
                _this.create = false;
                _this.exam = false;
                _this.examdetails = true;
                _this.details = false;
                _this.staff = false;
            }
            else if (data == 'staff') {
                _this.create = false;
                _this.exam = false;
                _this.details = false;
                _this.staff = true;
                _this.examdetails = false;
            }
        };
        this.createUser = function () {
            var data = {
                firstName: _this.firstName,
                lastName: _this.lastName,
                email: _this.email,
                department: _this.department,
                usertype: _this.usertype,
                mobileNumber: _this.mobileNumber,
                password: _this.password,
                userId: _this.userId
            };
            if (_this.edit == true) {
                _this.appService.edituserData(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success('User Edited');
                        console.log(data);
                        _this.firstName = '';
                        _this.lastName = '';
                        _this.password = '';
                        _this.mobileNumber = '';
                        _this.email = '';
                        _this.usertype = null;
                        _this.department = null;
                        _this.edit = false;
                        _this.userId = null;
                        _this.getallUser();
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                        _this.firstName = '';
                        _this.lastName = '';
                        _this.password = '';
                        _this.mobileNumber = '';
                        _this.email = '';
                        _this.usertype = null;
                        _this.department = null;
                        _this.edit = false;
                        _this.getallUser();
                    }
                });
            }
            else {
                _this.appService.signupFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success('User created !');
                        _this.firstName = '';
                        _this.lastName = '';
                        _this.password = '';
                        _this.mobileNumber = '';
                        _this.email = '';
                        _this.usertype = null;
                        _this.department = null;
                        _this.edit = false;
                        _this.getallUser();
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                        _this.firstName = '';
                        _this.lastName = '';
                        _this.password = '';
                        _this.mobileNumber = '';
                        _this.email = '';
                        _this.usertype = null;
                        _this.department = null;
                        _this.edit = false;
                        _this.getallUser();
                    }
                });
            }
        };
        this.createExam = function () {
            var data = {
                scheduleId: _this.scheduleId,
                Name: _this.examinername,
                userId: _this.examinerId,
                Department: _this.examinerdepartment,
                Date: _this.examdate + " " + _this.examslot.name,
                HallNo: _this.hallNo,
                Slot: _this.examslot.value,
                examdate: _this.examdate,
            };
            if (_this.examedit == false) {
                _this.appService.createScheduleData(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status == '200') {
                        _this.toastr.success('Exam Schedule Created');
                        _this.getallSchedule();
                        _this.examinername = '';
                        _this.examinerId = null;
                        _this.examinerdepartment = null;
                        _this.examdate = '';
                        _this.examslot = null;
                        _this.hallNo = '';
                        _this.examedit = false;
                        _this.getallSchedule();
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                        _this.examinername = '';
                        _this.examinerId = null;
                        _this.examinerdepartment = null;
                        _this.examdate = '';
                        _this.examslot = null;
                        _this.hallNo = '';
                        _this.examedit = false;
                        _this.getallSchedule();
                    }
                });
            }
            else {
                console.log(data);
                _this.appService.editScheduleData(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success('Exam Schedule Edited ');
                        _this.getallSchedule();
                        _this.scheduleId = null;
                        _this.examinername = '';
                        _this.examinerId = null;
                        _this.examinerdepartment = null;
                        _this.examdate = '';
                        _this.examslot = null;
                        _this.hallNo = '';
                        _this.examedit = false;
                        _this.getallSchedule();
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                        _this.examinername = '';
                        _this.examinerId = null;
                        _this.examinerdepartment = null;
                        _this.examdate = '';
                        _this.examslot = null;
                        _this.hallNo = '';
                        _this.scheduleId = null;
                        _this.examedit = false;
                        _this.getallSchedule();
                    }
                });
            }
        };
        this.deleteUser = function () {
            var data = {
                userId: _this.userChange
            };
            _this.appService.deleteuserData(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success('Users Deleted');
                }
                _this.getallUser();
                _this.userChange = [];
            });
        };
        this.deleteSchedule = function () {
            var data = {
                scheduleId: _this.scheduleChange
            };
            _this.appService.deletescheduleData(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success('Schedules Deleted');
                }
                _this.getallSchedule();
                _this.scheduleChange = [];
            });
        };
        this.logout = function () {
            _this.appService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success('Logout done !');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('receiverId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('receiverName');
                    _this.router.navigate(['/admin']);
                }
                else {
                    _this.toastr.error('Logout failed !');
                }
            });
        };
        this.getreq = function () {
            var data = {
                userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId')
            };
            _this.appService.adminreqData(data)
                .subscribe(function (apiResponse) {
                _this.req = apiResponse.data;
            });
        };
        this.acceptreq = function (data) {
            data.status = "Request accepted by admin , schedule modified";
            data.level = 'success';
            var newdata = {
                scheduleId: data.scheduleId,
                Name: data.receiverName,
                userId: data.receiverId,
                Department: data.receiverDepartment,
                Date: data.Date,
                HallNo: data.HallNo,
                Slot: data.Slot,
                examdate: data.examdate,
            };
            _this.appService.editScheduleData(newdata)
                .subscribe(function (apiResponse) {
                _this.appService.editreqData(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status == '200') {
                        _this.toastr.success('Request accepted ');
                        _this.getreq();
                        _this.getallSchedule();
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                });
            });
        };
        this.rejectreq = function (data) {
            data.status = "Request rejected by admin";
            data.level = 'rejected';
            _this.appService.editreqData(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == '200') {
                    _this.toastr.success('Request is rejected ');
                    _this.getreq();
                    _this.getallSchedule();
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            });
        };
    }
    AdmindashboardComponent.prototype.ngOnInit = function () {
        this.getallUser();
        this.getallSchedule();
        this.getreq();
        this.create = true;
        this.edit = false;
        this.userId = null;
        this.examslot = null;
        this.examedit = false;
        this.scheduleId = null;
        this.department = null;
        this.usertype = null;
        this.examinerId = null;
    };
    AdmindashboardComponent.prototype.addId = function (id) {
        if (this.userChange.includes(id)) {
            var index = this.userChange.indexOf(id);
            if (index > -1) {
                this.userChange.splice(index, 1);
            }
        }
        else {
            this.userChange.push(id);
        }
    };
    AdmindashboardComponent.prototype.addsId = function (id) {
        if (this.scheduleChange.includes(id)) {
            var index = this.scheduleChange.indexOf(id);
            if (index > -1) {
                this.scheduleChange.splice(index, 1);
            }
        }
        else {
            this.scheduleChange.push(id);
        }
    };
    AdmindashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admindashboard',
            template: __webpack_require__(/*! ./admindashboard.component.html */ "./src/app/admin/admindashboard/admindashboard.component.html"),
            styles: [__webpack_require__(/*! ./admindashboard.component.css */ "./src/app/admin/admindashboard/admindashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdmindashboardComponent);
    return AdmindashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    \r\n    background-color:lightgray;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-size: cover;\r\n    box-shadow: 0px 4px 40px rgba(181, 181, 181, 0.2);\r\n}\r\n\r\n.insidebox{\r\n    margin-left:50px;\r\n    margin-right:50px;\r\n    background-color: #ffffff;\r\n    margin-top: 50px;\r\n    height: 700px;\r\n    border-radius: 40px;\r\n}\r\n\r\ninput{\r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius:0px;\r\n    border-left: 0px;\r\n    border-right: 0px;\r\n    border-top:0px;\r\n    border-bottom: 1px solid #b81250;\r\n    font-family: Montserrat,sans-serif;\r\n    color:#b81250\r\n}\r\n\r\ninput::-moz-placeholder{\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:16px;\r\n    color:gray;\r\n    font-weight:200;\r\n}\r\n\r\ninput::placeholder{\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:16px;\r\n    color:gray;\r\n    font-weight:200;\r\n}\r\n\r\n.blink {\r\n  animation: blink-animation 1s steps(5, start) infinite;\r\n  -webkit-animation: blink-animation 1s steps(5, start) infinite;\r\n}\r\n\r\n@keyframes blink-animation {\r\n  to {\r\n    border:0px\r\n  }\r\n}\r\n\r\n@-webkit-keyframes blink-animation {\r\n  to {\r\n    border:0px\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUxBO0lBQ0ksaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RCw4REFBOEQ7QUFDaEU7O0FBQ0E7RUFDRTtJQUNFO0VBQ0Y7QUFDRjs7QUFDQTtFQUNFO0lBQ0U7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JheTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0MHB4IHJnYmEoMTgxLCAxODEsIDE4MSwgMC4yKTtcclxufVxyXG5cclxuLmluc2lkZWJveHtcclxuICAgIG1hcmdpbi1sZWZ0OjUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweDtcclxuICAgIGJvcmRlci10b3A6MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiODEyNTA7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCxzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6I2I4MTI1MFxyXG59XHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgICBmb250LWZhbWlseTpNb250c2VycmF0LHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBmb250LXdlaWdodDoyMDA7XHJcbn1cclxuXHJcbi5ibGluayB7XHJcbiAgYW5pbWF0aW9uOiBibGluay1hbmltYXRpb24gMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluay1hbmltYXRpb24gMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgYmxpbmstYW5pbWF0aW9uIHtcclxuICB0byB7XHJcbiAgICBib3JkZXI6MHB4XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBibGluay1hbmltYXRpb24ge1xyXG4gIHRvIHtcclxuICAgIGJvcmRlcjowcHhcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid background\">\n\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"insidebox\">\n\n        <div class=\"row\">\n          <div class=\"col-xs-6\" style=\"padding:20px;\">\n            <img src=\"../../assets/logo.png\" style=\"width:70%;\" alt=\"college_logo\" />\n            <img src=\"../../assets/undraw_exams_g4ow.svg\" alt=\"exam_image\" style=\"width:100%;\" />\n          </div>\n\n          <div class=\"col-xs-6 text-center\" style=\"margin:0px;padding: 10px;padding-left: 0px;margin-top:2px\">\n\n            <div class=\"row\" style=\"margin-left:10px;margin-top:100px;\">\n              <div class=\"col-xs-10\">\n\n                <p style=\"font-family: Orelega One ,cursive;font-size:4.5rem;font-weight: 300px;\"><span><img alt=\"user\"\n                      src=\"../../assets/vector-creator.png\" style=\"width:80px;\" /> Login</span><span\n                    style=\"font-family: Montserrat,sans-serif;;font-size: 2rem;margin-left: 20px;font-weight:700;\">-\n                    Admin Portal</span></p>\n\n              </div>\n            </div>\n\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:40px;\">\n              <div class=\"col-xs-10\">\n\n                <input type=\"text\" placeholder=\"Enter Username\" [(ngModel)]=\"email\" name=\"email\" id=\"email\"\n                  (keydown.enter)=\"login()\" />\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:50px;\">\n              <div class=\"col-xs-10\">\n\n                <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\"\n                  (keydown.enter)=\"login()\" />\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:70px;\">\n              <div class=\"col-xs-10\">\n\n                <button type=\"submit\" (click)=\"login()\" class=\"btn\"\n                  style=\"background-color:#b81250;width: 60%;height: 50px;border-radius: 40px;border:0px;color: white;font-size:20px;font-family:Montserrat,sans-serif;;\">Login</button>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:30px;\">\n              <div class=\"col-xs-10\">\n                <p style=\"font-family:Montserrat, sans-serif;cursor: pointer;\" id=\"forget_password\"\n                  [routerLink]=\"['/reset']\">Forgot Password ? Reset Now</p>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:20px;\">\n              <div class=\"col-xs-10\">\n\n                <button (click)=\"routeToFacSchedule()\" class=\"btn blink\"\n                  style=\"color:#b81250;width: 60%;height: 50px;border:0px;border: 1px solid #b81250;font-size:20px;font-family:Montserrat,sans-serif;;font-weight: 800;\"\n                  id=\"faculty_schedule\">Faculty Schedule</button>\n              </div>\n            </div>\n\n\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"row text-center\">\n    <p style=\"font-family:Montserrat;font-weight: 800;\">Designed and Developed by the JUSTICE LEAGUE OF AMRITA CBE</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, appService, router) {
        var _this = this;
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this.login_enter = function (event) {
            alert(event);
        };
        this.login = function () {
            if (!_this.email) {
                _this.toastr.error('missing paramater', 'Enter Email');
            }
            else if (!_this.password) {
                _this.toastr.error('missing parameter', "Enter Password");
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.adminsigninFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.toastr.success('Login Succesful');
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.router.navigate(['/admin_dashboard']);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    console.log('Internal error');
                });
                // end condition
            }
        };
        this.routeToFacSchedule = function () {
            _this.router.navigate(['/faculty_schedule']);
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/admin/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'exam-alter';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _faculty_schedule_faculty_schedule_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faculty-schedule/faculty-schedule.component */ "./src/app/faculty-schedule/faculty-schedule.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login.guard */ "./src/app/login.guard.ts");
/* harmony import */ var _route_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./route.guard */ "./src/app/route.guard.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _faculty_schedule_faculty_schedule_component__WEBPACK_IMPORTED_MODULE_11__["FacultyScheduleComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_13__["UserModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_14__["AdminModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_15__["LoginGuardService"]] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: 'faculty_schedule', component: _faculty_schedule_faculty_schedule_component__WEBPACK_IMPORTED_MODULE_11__["FacultyScheduleComponent"] },
                    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_16__["RouteGuardService"]] },
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"], _login_guard__WEBPACK_IMPORTED_MODULE_15__["LoginGuardService"], _route_guard__WEBPACK_IMPORTED_MODULE_16__["RouteGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    } // end constructor  
    AppService.prototype.signupFunction = function (data) {
        return this.http.post(this.url + "/api/v1/users/signup", data);
    }; // end of signinFunction function.
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/login", params);
    }; // end of signinFunction function.
    AppService.prototype.adminsigninFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/adminlogin", params);
    }; // end of signinFunction function.
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'))
            .set('userId', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userId'));
        return this.http.post(this.url + "/api/v1/users/logout", params);
    }; // end logout function
    AppService.prototype.getSchedule = function () {
        return this.http.get(this.url + "/api/v1/schedule/view/all");
    };
    AppService.prototype.getPasswordRecover = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('email', data.email);
        return this.http.post(this.url + "/api/v1/users/recoverPassword", params);
    };
    //set Password Email
    AppService.prototype.setPasswordRecover = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('userId', data.userId)
            .set('authToken', data.authToken)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/resetPassword", params);
    };
    AppService.prototype.getalluser = function () {
        var data = { authToken: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken') };
        return this.http.post(this.url + "/api/v1/users/view/all", data);
    };
    AppService.prototype.getuserData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.get(this.url + "/api/v1/users/" + data + "/details");
    };
    AppService.prototype.edituserData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.put(this.url + "/api/v1/users/" + data.userId + "/edit", data);
    };
    AppService.prototype.deleteuserData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.post(this.url + "/api/v1/users/delete", data);
    };
    AppService.prototype.deletescheduleData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.post(this.url + "/api/v1/schedule/delete", data);
    };
    AppService.prototype.userscheduleData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.post(this.url + "/api/v1/schedule/user", data);
    };
    AppService.prototype.userfreescheduleData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.post(this.url + "/api/v1/schedule/freeuser", data);
    };
    AppService.prototype.createScheduleData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.post(this.url + "/api/v1/schedule/create", data);
    };
    AppService.prototype.createreqData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.post(this.url + "/api/v1/request/create", data);
    };
    AppService.prototype.reqData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.post(this.url + "/api/v1/request/getreq", data);
    };
    AppService.prototype.adminreqData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.post(this.url + "/api/v1/request/getadminreq", data);
    };
    AppService.prototype.statusreqData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.post(this.url + "/api/v1/request/getstatusreq", data);
    };
    AppService.prototype.editreqData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.post(this.url + "/api/v1/request/editreq", data);
    };
    AppService.prototype.editScheduleData = function (data) {
        data.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        return this.http.post(this.url + "/api/v1/schedule/edit", data);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    \r\n    background-color:lightgray;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-size: cover;\r\n    box-shadow: 0px 4px 40px rgba(181, 181, 181, 0.2);\r\n}\r\n\r\n.insidebox{\r\n    margin-left:50px;\r\n    margin-right:50px;\r\n    background-color: #ffffff;\r\n    margin-top: 50px;\r\n    height: 700px;\r\n    border-radius: 40px;\r\n}\r\n\r\ninput,select{\r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius:0px;\r\n    border-left: 0px;\r\n    border-right: 0px;\r\n    border-top:0px;\r\n    border-bottom: 1px solid #b81250;\r\n    font-family: Montserrat,sans-serif;\r\n    color:#b81250\r\n}\r\n\r\ninput::-moz-placeholder,option{\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:16px;\r\n    color:gray;\r\n    font-weight:200;\r\n}\r\n\r\ninput::placeholder,option{\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:16px;\r\n    color:gray;\r\n    font-weight:200;\r\n}\r\n\r\n.hover:hover{\r\n  color:#b81250;\r\n  font-weight: 800;\r\n  font-size: 26px;\r\n}\r\n\r\n.blink {\r\n  animation: blink-animation 1s steps(5, start) infinite;\r\n  -webkit-animation: blink-animation 1s steps(5, start) infinite;\r\n}\r\n\r\n@keyframes blink-animation {\r\n  to {\r\n    border:0px\r\n  }\r\n}\r\n\r\n@-webkit-keyframes blink-animation {\r\n  to {\r\n    border:0px\r\n  }\r\n}\r\n\r\n.isactive{\r\n  color: white;\r\n  background-color:#b81250;\r\n}\r\n\r\n.isnotactive{\r\n  color: black;\r\n  background-color: #FFFFFF;\r\n  \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEM7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBTEE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELDhEQUE4RDtBQUNoRTs7QUFDQTtFQUNFO0lBQ0U7RUFDRjtBQUNGOztBQUNBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5Qjs7QUFFM0IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNDBweCByZ2JhKDE4MSwgMTgxLCAxODEsIDAuMik7XHJcbn1cclxuXHJcbi5pbnNpZGVib3h7XHJcbiAgICBtYXJnaW4tbGVmdDo1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG5pbnB1dCxzZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlci1yaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXRvcDowcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I4MTI1MDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjojYjgxMjUwXHJcbn1cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlcixvcHRpb257XHJcbiAgICBmb250LWZhbWlseTpNb250c2VycmF0LHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBmb250LXdlaWdodDoyMDA7XHJcbn1cclxuXHJcbi5ob3Zlcjpob3ZlcntcclxuICBjb2xvcjojYjgxMjUwO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4uYmxpbmsge1xyXG4gIGFuaW1hdGlvbjogYmxpbmstYW5pbWF0aW9uIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmstYW5pbWF0aW9uIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGJsaW5rLWFuaW1hdGlvbiB7XHJcbiAgdG8ge1xyXG4gICAgYm9yZGVyOjBweFxyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmstYW5pbWF0aW9uIHtcclxuICB0byB7XHJcbiAgICBib3JkZXI6MHB4XHJcbiAgfVxyXG59XHJcblxyXG4uaXNhY3RpdmV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2I4MTI1MDtcclxufVxyXG5cclxuXHJcbi5pc25vdGFjdGl2ZXtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid background\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n\r\n\r\n            <div class=\"insidebox\" style=\"padding:40px;\">\r\n                <!-- nav-->\r\n                <div class=\"row text-center\">\r\n                    <div class=\"col-xs-3\" (click)=\"activate('exam')\" style=\"padding: 5px;cursor: pointer;\" [ngClass]=\"{'isactive':exam == true,'isnotactive':exam == false}\">\r\n                        <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">Assigned Exam Schedules</p>\r\n                    </div>\r\n                    <div class=\"col-xs-3\" (click)=\"activate('rexam')\" style=\"padding: 5px;cursor: pointer;\" [ngClass]=\"{'isactive':rexam == true,'isnotactive':rexam == false}\">\r\n                        <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">Reassign Exam Schedules</p>\r\n                    </div>\r\n                    <div class=\"col-xs-3\" (click)=\"activate('rsexam')\" style=\"padding: 5px;cursor: pointer;\" [ngClass]=\"{'isactive':rsexam == true,'isnotactive':rsexam == false}\">\r\n                        <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">Accept / Reject request</p>\r\n                    </div>\r\n                    <div class=\"col-xs-2\" (click)=\"activate('rssexam')\" style=\"padding: 5px;cursor: pointer;\" [ngClass]=\"{'isactive':rssexam == true,'isnotactive':rssexam == false}\">\r\n                        <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">Request Status</p>\r\n                    </div>\r\n\r\n                    <div class=\"col-xs-1 hover\" style=\"padding: 5px;cursor: pointer;\" (click)=\"logout()\">\r\n                        <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;text-align: right;\">Logout</p>\r\n                    </div>\r\n                </div>\r\n                <!-- end nav -->\r\n\r\n                <!-- exam -->\r\n\r\n                <div class=\"row\" style=\"padding: 80px;padding-top:50px;\" *ngIf=\"exam\">\r\n                    <div class=\"col-xs-12\">\r\n\r\n                        <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Assigned Exam Schedules\r\n                        </p>\r\n                        <div class=\"row\" style=\"margin-top: 40px;\">\r\n\r\n                            <div class=\"col-xs-2\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Name</p>\r\n                            </div>\r\n\r\n                            <div class=\"col-xs-2\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Department</p>\r\n                            </div>\r\n                            <div class=\"col-xs-2\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">HallNo</p>\r\n                            </div>\r\n                            <div class=\"col-xs-3\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Date & Time Slot</p>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"row\" style=\"margin-top:10px;\" *ngFor=\"let schedule of schedules\">\r\n\r\n                            <div class=\"col-xs-2\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{schedule.Name}}</p>\r\n                            </div>\r\n                            <div class=\"col-xs-2\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{schedule.Department}}\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"col-xs-2\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{schedule.HallNo}}</p>\r\n                            </div>\r\n                            <div class=\"col-xs-3\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{schedule.Date}}</p>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <!--end exam -->\r\n\r\n                <!-- rexam -->\r\n\r\n                <div class=\"row\" style=\"padding: 80px;padding-top:50px;\" *ngIf=\"rexam\">\r\n                    <div class=\"col-xs-12\">\r\n\r\n                        <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Request a reassign\r\n                        </p>\r\n                        <div class=\"row\" style=\"margin-top:40px\">\r\n                            <div class=\"col-xs-6\">\r\n                                <select [(ngModel)]=\"scheduleId\" (click)=\"changevalueschedule()\" placeholder=\"Select a Schedule\">\r\n                  <option [value]=\"null\">Select a Schedule</option>\r\n                  <option *ngFor=\"let obj of schedules\" [value]=\"obj.scheduleId\">{{obj.HallNo}} {{obj.Date}}</option>\r\n                </select>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"margin-top:40px\">\r\n                            <div class=\"col-xs-6\">\r\n\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">Name : {{examinername}}</p>\r\n\r\n                            </div>\r\n                            <div class=\"col-xs-6\">\r\n\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">Department : {{examinerdepartment}}</p>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" style=\"margin-top: 40px;\">\r\n                            <div class=\"col-xs-6\">\r\n\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">HallNo : {{hallNo}}</p>\r\n\r\n                            </div>\r\n                            <div class=\"col-xs-6\">\r\n\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">Timing : {{examdate}}</p>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" style=\"margin-top: 40px;\">\r\n\r\n                            <div class=\"col-xs-1\">\r\n\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;\">Reassign to :</p>\r\n                            </div>\r\n                            <div class=\"col-xs-6\">\r\n                                <select [(ngModel)]=\"reUserId\" placeholder=\"Select a User\">\r\n                  <option [value]=\"null\">Select a User</option>\r\n                  <option *ngFor=\"let obj of freeuser\" [ngValue]=\"obj\">{{obj.firstName}} {{obj.lastName}} - {{obj.department}}</option>\r\n                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"row\" style=\"margin-top:40px;\">\r\n                            <div class=\"col-xs-12 text-center\">\r\n\r\n                                <button class=\"btn\" (click)=\"sendreq()\" style=\"background-color: #b81250;font-family:Montserrat,sans-serif;font-size: 16px;color:white\">Send Request</button>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <!--end rexam -->\r\n\r\n                <!--rs exam -->\r\n                <div class=\"row\" style=\"padding: 80px;padding-top:50px;\" *ngIf=\"rsexam\">\r\n                    <div class=\"col-xs-12\">\r\n\r\n                        <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Received req for Schedule change\r\n                        </p>\r\n                        <div class=\"row\" style=\"margin-top: 40px;\">\r\n\r\n                            <div class=\"col-xs-3\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Name / Department</p>\r\n                            </div>\r\n\r\n                            <div class=\"col-xs-4\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">HallNo / Timing</p>\r\n                            </div>\r\n                            <div class=\"col-xs-2\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Action</p>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                        <div class=\"row\" style=\"margin-top:10px;\" *ngFor=\"let req of req\">\r\n\r\n                            <div class=\"col-xs-3\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{req.Name}} / {{req.Department}}</p>\r\n                            </div>\r\n                            <div class=\"col-xs-4\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{req.HallNo}} / {{req.Date}}\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"col-xs-2\">\r\n                                <button class=\"btn\" (click)=\"acceptreq(req)\" style=\"background-color: #b81250;font-family:Montserrat,sans-serif;font-size: 16px;color:white\">Accept Request</button>\r\n\r\n                            </div>\r\n                            <div class=\"col-xs-2\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\"> <button class=\"btn\" (click)=\"rejectreq(req)\" style=\"background-color: #b81250;font-family:Montserrat,sans-serif;font-size: 16px;color:white\">Reject Request</button>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <!--re exam-->\r\n\r\n                <!-- exam -->\r\n\r\n                <div class=\"row\" style=\"padding: 80px;padding-top:50px;\" *ngIf=\"rssexam\">\r\n                    <div class=\"col-xs-12\">\r\n\r\n                        <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Status of request\r\n                        </p>\r\n                        <div class=\"row\" style=\"margin-top: 40px;\">\r\n\r\n                            <div class=\"col-xs-2\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">HallNo</p>\r\n                            </div>\r\n\r\n                            <div class=\"col-xs-3\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Timing</p>\r\n                            </div>\r\n                            <div class=\"col-xs-3\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Assigned to </p>\r\n                            </div>\r\n                            <div class=\"col-xs-4\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 800;\">Status</p>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"row\" style=\"margin-top: 40px;\" *ngFor=\"let req of statusreq\">\r\n\r\n                            <div class=\"col-xs-2\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{req.HallNo}}</p>\r\n                            </div>\r\n\r\n                            <div class=\"col-xs-3\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{req.Date}}</p>\r\n                            </div>\r\n                            <div class=\"col-xs-3\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{req.receiverName}}/{{req.receiverDepartment}}</p>\r\n                            </div>\r\n                            <div class=\"col-xs-4\">\r\n                                <p style=\"font-size: 16px;font-family: Montserrat,sans-serif;font-weight: 500;\">{{req.status}}</p>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <!--end exam -->\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row text-center\" style=\"margin-top: 30px;\">\r\n        <p style=\"font-family:Montserrat;font-weight: 800;\">Designed and Developed by the JUSTICE LEAGUE OF AMRITA CBE</p>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(appService, toastr, router) {
        var _this = this;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.slot = [{ 'name': '9.00 am - 10.00 am', 'value': '1' }, { 'name': '10.00 am - 11.00 am', 'value': '2' }, { 'name': '11.00 am - 12.00 pm', 'value': '3' }, { 'name': '1.00 pm - 2.00 pm', 'value': '4' }, { 'name': '2.00 pm - 3.00 pm', 'value': '5' }, { 'name': '3.00 pm - 4.00 pm', 'value': '6' }];
        this.freeuser = [];
        this.req = [];
        this.statusreq = [];
        this.logout = function () {
            _this.appService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success('Logout done !');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('receiverId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('receiverName');
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.toastr.error('Logout failed !');
                }
            });
        };
        this.getUserSchedule = function () {
            var data = {
                userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId')
            };
            console.log(data.userId);
            _this.appService.userscheduleData(data)
                .subscribe(function (apiResponse) {
                console.log(apiResponse.data);
                _this.schedules = apiResponse.data;
            });
        };
        this.activate = function (data) {
            if (data == 'exam') {
                _this.exam = true;
                _this.rexam = false;
                _this.rsexam = false;
                _this.rssexam = false;
            }
            else if (data == 'rexam') {
                _this.exam = false;
                _this.rexam = true;
                _this.rsexam = false;
                _this.rssexam = false;
            }
            else if (data == 'rsexam') {
                _this.exam = false;
                _this.rexam = false;
                _this.rsexam = true;
                _this.rssexam = false;
            }
            else if (data == 'rssexam') {
                _this.exam = false;
                _this.rexam = false;
                _this.rsexam = false;
                _this.rssexam = true;
            }
        };
        this.changevalueschedule = function () {
            for (var i = 0; i < _this.schedules.length; i++) {
                if (_this.schedules[i].scheduleId == _this.scheduleId) {
                    console.log(_this.scheduleId);
                    _this.examinerId = _this.schedules[i].userId;
                    _this.hallNo = _this.schedules[i].HallNo;
                    _this.examinername = _this.schedules[i].Name;
                    _this.examslot = _this.slot[_this.schedules[i].Slot - 1];
                    _this.Slot = _this.schedules[i].Slot;
                    _this.examinerdepartment = _this.schedules[i].Department;
                    _this.examdate = _this.schedules[i].examdate;
                    _this.Date = _this.schedules[i].Date;
                    _this.getfree();
                }
            }
        };
        this.getfree = function () {
            var data = {
                HallNo: _this.hallNo,
                examdate: _this.examdate,
                Slot: _this.Slot
            };
            _this.appService.userfreescheduleData(data)
                .subscribe(function (apiResponse) {
                _this.freeuser = apiResponse.data;
            });
        };
        this.sendreq = function () {
            var data = {
                scheduleId: _this.scheduleId,
                Name: _this.examinername,
                Department: _this.examinerdepartment,
                HallNo: _this.hallNo,
                Date: _this.Date,
                examdate: _this.examdate,
                userId: _this.examinerId,
                Slot: _this.Slot,
                senderId: _this.examinerId,
                senderName: _this.examinername,
                senderDepartment: _this.examinerdepartment,
                receiverId: _this.reUserId.userId,
                receiverName: _this.reUserId.firstName + " " + _this.reUserId.lastName,
                receiverDepartment: _this.reUserId.department,
                status: "Request sent to " + _this.reUserId.firstName + " " + _this.reUserId.lastName,
                level: 'faculty'
            };
            _this.appService.createreqData(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == '200') {
                    _this.toastr.success('Request sent');
                    _this.getreq();
                    _this.getstatusreq();
                    _this.getstatusreq();
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            });
        };
        this.getreq = function () {
            var data = {
                userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId')
            };
            _this.appService.reqData(data)
                .subscribe(function (apiResponse) {
                _this.req = apiResponse.data;
            });
        };
        this.getstatusreq = function () {
            var data = {
                userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId')
            };
            _this.appService.statusreqData(data)
                .subscribe(function (apiResponse) {
                _this.statusreq = apiResponse.data;
            });
        };
        this.acceptreq = function (data) {
            data.status = "Request accepted by " + data.receiverName + " , admin approval needed";
            data.level = 'admin';
            _this.appService.editreqData(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == '200') {
                    _this.toastr.success('Request sent for admin approval');
                    _this.getreq();
                    _this.getstatusreq();
                    _this.getstatusreq();
                    _this.getUserSchedule();
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            });
        };
        this.rejectreq = function (data) {
            data.status = "Request rejected by " + data.receiverName;
            data.level = 'rejected';
            _this.appService.editreqData(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == '200') {
                    _this.toastr.success('Request is rejected ');
                    _this.getreq();
                    _this.getstatusreq();
                    _this.getstatusreq();
                    _this.getUserSchedule();
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            });
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.exam = true;
        this.rexam = false;
        this.rsexam = false;
        this.rssexam = false;
        this.scheduleId = null;
        this.getUserSchedule();
        this.getreq();
        this.getstatusreq();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/faculty-schedule/faculty-schedule.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/faculty-schedule/faculty-schedule.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar {\r\n    width: 10px;\r\n  }\r\n  \r\n  /* Track */\r\n  \r\n  ::-webkit-scrollbar-track {\r\n\r\n    \r\n    border-radius: 18px;\r\n  }\r\n  \r\n  /* Handle */\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background:lightgray; \r\n  }\r\n  \r\n  /* Handle on hover */\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #b81250; \r\n  }\r\n  \r\n  .background{\r\n    \r\n    background-color:lightgray;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-size: cover;\r\n    box-shadow: 0px 4px 40px rgba(181, 181, 181, 0.2);\r\n}\r\n  \r\n  .insidebox{\r\n    margin-left:50px;\r\n    margin-right:50px;\r\n    background-color: #ffffff;\r\n    margin-top: 50px;\r\n    height: 700px;\r\n    border-radius: 40px;\r\n}\r\n  \r\n  .headingfont{\r\n    font-family: Montserrat,sans-serif;font-size:20px;color: #b81250;font-weight: 800;\r\n}\r\n  \r\n  .bodyfont{\r\n    font-family: Montserrat,sans-serif;font-size:13.5px;color:black;font-weight:500;\r\n}\r\n  \r\n  .bodybg{\r\n    background-color: rgba(181, 181, 181, 0.1);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFjdWx0eS1zY2hlZHVsZS9mYWN1bHR5LXNjaGVkdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUEsVUFBVTs7RUFDVjs7O0lBR0UsbUJBQW1CO0VBQ3JCOztFQUVBLFdBQVc7O0VBQ1g7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUEsb0JBQW9COztFQUNwQjtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFRjs7SUFFSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaURBQWlEO0FBQ3JEOztFQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0VBRUE7SUFDSSxrQ0FBa0MsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLGdCQUFnQjtBQUNyRjs7RUFHQTtJQUNJLGtDQUFrQyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxlQUFlO0FBQ25GOztFQUVBO0lBQ0ksMENBQTBDO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvZmFjdWx0eS1zY2hlZHVsZS9mYWN1bHR5LXNjaGVkdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUcmFjayAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICB9XHJcbiAgIFxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDpsaWdodGdyYXk7IFxyXG4gIH1cclxuICBcclxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiODEyNTA7IFxyXG4gIH1cclxuXHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JheTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0MHB4IHJnYmEoMTgxLCAxODEsIDE4MSwgMC4yKTtcclxufVxyXG5cclxuLmluc2lkZWJveHtcclxuICAgIG1hcmdpbi1sZWZ0OjUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nZm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LHNhbnMtc2VyaWY7Zm9udC1zaXplOjIwcHg7Y29sb3I6ICNiODEyNTA7Zm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuXHJcbi5ib2R5Zm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LHNhbnMtc2VyaWY7Zm9udC1zaXplOjEzLjVweDtjb2xvcjpibGFjaztmb250LXdlaWdodDo1MDA7XHJcbn1cclxuXHJcbi5ib2R5Ymd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MSwgMTgxLCAxODEsIDAuMSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/faculty-schedule/faculty-schedule.component.html":
/*!******************************************************************!*\
  !*** ./src/app/faculty-schedule/faculty-schedule.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid background\" style=\"overflow: hidden;\">\r\n  <!--Inside Container Box-->\r\n  <div class=\"row\">\r\n \r\n    <div class=\"col-xs-12\">\r\n      <div class=\"insidebox\">\r\n\r\n       \r\n        <div class=\"row\">\r\n          <div class=\"col-xs-6\" style=\"padding:20px;\">\r\n            <img src=\"../../assets/logo.png\" alt=\"college_logo\" style=\"width:70%;cursor: pointer;\" (click)=\"movetoLogin()\"/>\r\n           \r\n          </div>\r\n          <div class=\"col-xs-6\" style=\"padding:20px\">\r\n            <p style=\"font-family: Montserrat,sans-serif;font-size: 10px;margin-left: 50px;margin-top: 0px;text-align: right;margin-right: 20px;font-weight: 900;\"> * ( Click logo to redirect to login page )</p>\r\n            \r\n          </div>\r\n        </div>\r\n      \r\n        <div class=\"row\" *ngIf=\"!notfound\">\r\n          <div class=\"col-xs-8 col-xs-offset-2\" style=\"max-height:480px;overflow:auto\">\r\n            \r\n            <!--data-->\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-2\" style=\"border:1px solid #b81250;text-align: center;padding:10px 0;\">\r\n                <p class=\"headingfont\">Hall no </p>\r\n              </div>\r\n              <div class=\"col-xs-7\" style=\"border:1px solid #b81250;text-align: center;padding:10px 0;\">\r\n                <p class=\"headingfont\">Faculty Name - Department </p>\r\n              </div>\r\n              <div class=\"col-xs-3\" style=\"border:1px solid #b81250;text-align: center;padding:10px 0;\">\r\n                <p class=\"headingfont\">Date & Time </p>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"row\" *ngFor=\"let data of datas\">\r\n              <div class=\"col-xs-2 bodybg\" style=\"border:1px solid #b81250;text-align: center;padding:10px 0;\">\r\n                <p class=\"bodyfont\">{{data.HallNo}}</p>\r\n              </div>\r\n              <div class=\"col-xs-7 bodybg\" style=\"border:1px solid #b81250;text-align: center;padding:10px 0;\">\r\n                <p class=\"bodyfont\">{{data.Name}} - {{data.Department}}</p>\r\n              </div>\r\n              <div class=\"col-xs-3 bodybg\" style=\"border:1px solid #b81250;text-align: center;padding:10px 0;\">\r\n                <p class=\"bodyfont\">{{data.Date}}</p>\r\n              </div>\r\n\r\n            </div>\r\n            <!--end data-->\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\" *ngIf=\"notfound\">\r\n          <div class=\"col-xs-6 \" style=\"display: flex;align-items: center;justify-content: center;\">\r\n            <img src=\"../../assets/oldman.png\" alt=\"data_not_available\"  style=\"width:250px;\"/>\r\n          </div>\r\n          <div class=\"col-xs-6\">\r\n            <p class=\"headingfont\" style=\"font-size: 30px;font-weight: 500;margin-top: 50px;\">Hello , I am admin </p>\r\n            <p class=\"headingfont\" style=\"font-size: 25px;color:black;font-weight: 500;\">I am still working on the schedule ,<br> I request you to wait</p>\r\n\r\n            <p class=\"headingfont\" style=\"font-size: 25px;font-weight: 500;margin-top: 50px;\">Thanks & Regards ,\r\n            <br> Admin</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  \r\n  \r\n  \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/faculty-schedule/faculty-schedule.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/faculty-schedule/faculty-schedule.component.ts ***!
  \****************************************************************/
/*! exports provided: FacultyScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyScheduleComponent", function() { return FacultyScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");




var FacultyScheduleComponent = /** @class */ (function () {
    function FacultyScheduleComponent(AppService, Router) {
        var _this = this;
        this.AppService = AppService;
        this.Router = Router;
        this.notfound = false;
        this.datas = [];
        this.getschedule = function () {
            _this.AppService.getSchedule()
                .subscribe(function (apiResponse) {
                if (apiResponse.status == '404') {
                    _this.notfound = true;
                }
                else {
                    _this.notfound = false;
                    _this.datas = apiResponse.data;
                    console.log(_this.datas);
                }
            });
        };
        this.movetoLogin = function () {
            _this.Router.navigate(['/login']);
        };
    }
    FacultyScheduleComponent.prototype.ngOnInit = function () {
        this.getschedule();
    };
    FacultyScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty-schedule',
            template: __webpack_require__(/*! ./faculty-schedule.component.html */ "./src/app/faculty-schedule/faculty-schedule.component.html"),
            styles: [__webpack_require__(/*! ./faculty-schedule.component.css */ "./src/app/faculty-schedule/faculty-schedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FacultyScheduleComponent);
    return FacultyScheduleComponent;
}());



/***/ }),

/***/ "./src/app/login.guard.ts":
/*!********************************!*\
  !*** ./src/app/login.guard.ts ***!
  \********************************/
/*! exports provided: LoginGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardService", function() { return LoginGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");





var LoginGuardService = /** @class */ (function () {
    function LoginGuardService(Router, appService) {
        this.Router = Router;
        this.appService = appService;
    }
    LoginGuardService.prototype.canActivate = function (route) {
        var _this = this;
        if (!ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken')) {
            return true;
        }
        else {
            this.appService.getuserData(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId'))
                .subscribe(function (apiResponse) {
                if (apiResponse.data.usertype == 'admin') {
                    _this.Router.navigate(['/admin_dashboard']);
                }
                else {
                    _this.Router.navigate(['/dashboard']);
                }
            });
        }
    };
    LoginGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], LoginGuardService);
    return LoginGuardService;
}());



/***/ }),

/***/ "./src/app/route.guard.ts":
/*!********************************!*\
  !*** ./src/app/route.guard.ts ***!
  \********************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");





var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(Router, appService) {
        this.Router = Router;
        this.appService = appService;
    }
    RouteGuardService.prototype.canActivate = function (route) {
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken')) {
            return true;
        }
        else {
            this.Router.navigate(['/login']);
        }
    };
    RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    \r\n    background-color:lightgray;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-size: cover;\r\n    box-shadow: 0px 4px 40px rgba(181, 181, 181, 0.2);\r\n}\r\n\r\n.insidebox{\r\n    margin-left:50px;\r\n    margin-right:50px;\r\n    background-color: #ffffff;\r\n    margin-top: 50px;\r\n    height: 700px;\r\n    border-radius: 40px;\r\n}\r\n\r\ninput{\r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius:0px;\r\n    border-left: 0px;\r\n    border-right: 0px;\r\n    border-top:0px;\r\n    border-bottom: 1px solid #b81250;\r\n    font-family: Montserrat,sans-serif;\r\n    color:#b81250\r\n}\r\n\r\ninput::-moz-placeholder{\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:16px;\r\n    color:gray;\r\n    font-weight:200;\r\n}\r\n\r\ninput::placeholder{\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:16px;\r\n    color:gray;\r\n    font-weight:200;\r\n}\r\n\r\n.blink {\r\n  animation: blink-animation 1s steps(5, start) infinite;\r\n  -webkit-animation: blink-animation 1s steps(5, start) infinite;\r\n}\r\n\r\n@keyframes blink-animation {\r\n  to {\r\n    border:0px\r\n  }\r\n}\r\n\r\n@-webkit-keyframes blink-animation {\r\n  to {\r\n    border:0px\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEM7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBTEE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELDhEQUE4RDtBQUNoRTs7QUFDQTtFQUNFO0lBQ0U7RUFDRjtBQUNGOztBQUNBO0VBQ0U7SUFDRTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNDBweCByZ2JhKDE4MSwgMTgxLCAxODEsIDAuMik7XHJcbn1cclxuXHJcbi5pbnNpZGVib3h7XHJcbiAgICBtYXJnaW4tbGVmdDo1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICBib3JkZXItbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXItdG9wOjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjgxMjUwO1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiNiODEyNTBcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gICAgZm9udC1mYW1pbHk6TW9udHNlcnJhdCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgZm9udC13ZWlnaHQ6MjAwO1xyXG59XHJcblxyXG4uYmxpbmsge1xyXG4gIGFuaW1hdGlvbjogYmxpbmstYW5pbWF0aW9uIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmstYW5pbWF0aW9uIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGJsaW5rLWFuaW1hdGlvbiB7XHJcbiAgdG8ge1xyXG4gICAgYm9yZGVyOjBweFxyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmstYW5pbWF0aW9uIHtcclxuICB0byB7XHJcbiAgICBib3JkZXI6MHB4XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid background\">\n\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"insidebox\">\n\n        <div class=\"row\">\n          <div class=\"col-xs-6\" style=\"padding:20px;\">\n            <img src=\"../../assets/logo.png\" style=\"width:70%;\" alt=\"college_logo\" />\n            <img src=\"../../assets/undraw_exams_g4ow.svg\" alt=\"exam_image\" style=\"width:100%;\" />\n          </div>\n\n          <div class=\"col-xs-6 text-center\" style=\"margin:0px;padding: 10px;padding-left: 0px;margin-top:2px\">\n\n            <div class=\"row\" style=\"margin-left:10px;margin-top:100px;\">\n              <div class=\"col-xs-10\">\n\n                <p style=\"font-family: Orelega One ,cursive;font-size:4.5rem;font-weight: 300px;\"><span><img alt=\"user\"\n                      src=\"../../assets/vector-creator.png\" style=\"width:80px;\" /> Login</span><span\n                    style=\"font-family: Montserrat,sans-serif;;font-size: 2rem;margin-left: 20px;font-weight:700;\">-\n                    Faculty Portal</span></p>\n\n              </div>\n            </div>\n\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:40px;\">\n              <div class=\"col-xs-10\">\n\n                <input type=\"text\" placeholder=\"Enter Username\" [(ngModel)]=\"email\" name=\"email\" id=\"email\"\n                  (keydown.enter)=\"login()\" />\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:50px;\">\n              <div class=\"col-xs-10\">\n\n                <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\"\n                  (keydown.enter)=\"login()\" />\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:70px;\">\n              <div class=\"col-xs-10\">\n\n                <button type=\"submit\" (click)=\"login()\" class=\"btn\"\n                  style=\"background-color:#b81250;width: 60%;height: 50px;border-radius: 40px;border:0px;color: white;font-size:20px;font-family:Montserrat,sans-serif;;\">Login</button>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:30px;\">\n              <div class=\"col-xs-10\">\n                <p style=\"font-family:Montserrat, sans-serif;cursor: pointer;\" id=\"forget_password\"\n                  [routerLink]=\"['/reset']\">Forgot Password ? Reset Now</p>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:20px;\">\n              <div class=\"col-xs-10\">\n\n                <button (click)=\"routeToFacSchedule()\" class=\"btn blink\"\n                  style=\"color:#b81250;width: 60%;height: 50px;border:0px;border: 1px solid #b81250;font-size:20px;font-family:Montserrat,sans-serif;;font-weight: 800;\"\n                  id=\"faculty_schedule\">Faculty Schedule</button>\n              </div>\n            </div>\n\n\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n\n  <div class=\"row text-center\">\n    <p style=\"font-family:Montserrat;font-weight: 800;\">Designed and Developed by the JUSTICE LEAGUE OF AMRITA CBE</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, appService, router) {
        var _this = this;
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this.login_enter = function (event) {
            alert(event);
        };
        this.login = function () {
            if (!_this.email) {
                _this.toastr.error('missing paramater', 'Enter Email');
            }
            else if (!_this.password) {
                _this.toastr.error('missing parameter', "Enter Password");
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.toastr.success('Login Succesful');
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.router.navigate(['/dashboard']);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    console.log('Internal error');
                });
                // end condition
            }
        };
        this.routeToFacSchedule = function () {
            _this.router.navigate(['/faculty_schedule']);
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/password-change/password-change.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/password-change/password-change.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    \r\n    background-color:lightgray;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-size: cover;\r\n    box-shadow: 0px 4px 40px rgba(181, 181, 181, 0.2);\r\n}\r\n\r\n.insidebox{\r\n    margin-left:50px;\r\n    margin-right:50px;\r\n    background-color: #ffffff;\r\n    margin-top: 50px;\r\n    height: 700px;\r\n    border-radius: 40px;\r\n}\r\n\r\ninput{\r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius:0px;\r\n    border-left: 0px;\r\n    border-right: 0px;\r\n    border-top:0px;\r\n    border-bottom: 1px solid #b81250;\r\n    font-family: Montserrat,sans-serif;\r\n    color:#b81250\r\n}\r\n\r\ninput::-moz-placeholder{\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:16px;\r\n    color:gray;\r\n    font-weight:200;\r\n}\r\n\r\ninput::placeholder{\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:16px;\r\n    color:gray;\r\n    font-weight:200;\r\n}\r\n\r\n.blink {\r\n  animation: blink-animation 1s steps(5, start) infinite;\r\n  -webkit-animation: blink-animation 1s steps(5, start) infinite;\r\n}\r\n\r\n@keyframes blink-animation {\r\n  to {\r\n    border:0px\r\n  }\r\n}\r\n\r\n@-webkit-keyframes blink-animation {\r\n  to {\r\n    border:0px\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wYXNzd29yZC1jaGFuZ2UvcGFzc3dvcmQtY2hhbmdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQztBQUNKOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFMQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxzREFBc0Q7RUFDdEQsOERBQThEO0FBQ2hFOztBQUNBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGFzc3dvcmQtY2hhbmdlL3Bhc3N3b3JkLWNoYW5nZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDQwcHggcmdiYSgxODEsIDE4MSwgMTgxLCAwLjIpO1xyXG59XHJcblxyXG4uaW5zaWRlYm94e1xyXG4gICAgbWFyZ2luLWxlZnQ6NTBweDtcclxuICAgIG1hcmdpbi1yaWdodDo1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlci1yaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXRvcDowcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I4MTI1MDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjojYjgxMjUwXHJcbn1cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgIGZvbnQtZmFtaWx5Ok1vbnRzZXJyYXQsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgY29sb3I6Z3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OjIwMDtcclxufVxyXG5cclxuLmJsaW5rIHtcclxuICBhbmltYXRpb246IGJsaW5rLWFuaW1hdGlvbiAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rLWFuaW1hdGlvbiAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBibGluay1hbmltYXRpb24ge1xyXG4gIHRvIHtcclxuICAgIGJvcmRlcjowcHhcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rLWFuaW1hdGlvbiB7XHJcbiAgdG8ge1xyXG4gICAgYm9yZGVyOjBweFxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/password-change/password-change.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/password-change/password-change.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid background\">\n\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"insidebox\">\n\n        <div class=\"row\">\n          <div class=\"col-xs-6\" style=\"padding:20px;\">\n            <img src=\"../../assets/logo.png\" style=\"width:70%;\" alt=\"college_logo\" />\n            <img src=\"../../assets/undraw_exams_g4ow.svg\" alt=\"exam_image\" style=\"width:100%;\" />\n          </div>\n\n          <div class=\"col-xs-6 text-center\" style=\"margin:0px;padding: 10px;padding-left: 0px;margin-top:2px\">\n\n            <div class=\"row\" style=\"margin-left:10px;margin-top:100px;\">\n              <div class=\"col-xs-10\">\n\n                <p style=\"font-family: Orelega One ,cursive;font-size:4.5rem;font-weight: 300px;\"><span><img alt=\"user\"\n                      src=\"../../assets/vector-creator.png\" style=\"width:80px;\" />Password rst</span><span\n                    style=\"font-family: Montserrat,sans-serif;;font-size: 2rem;margin-left: 20px;font-weight:700;\">-\n                    Faculty Portal</span></p>\n\n              </div>\n            </div>\n\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:40px;\">\n              <div class=\"col-xs-10\">\n\n                <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" [(ngModel)]=\"password\" id=\"password\"\n                  (keydown.enter)=\"passwordreset()\" />\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:50px;\">\n              <div class=\"col-xs-10\">\n\n                <input type=\"password\" placeholder=\"Enter Confirm Password\" ame=\"confirmpassword\"\n                  [(ngModel)]=\"confirmpassword\" id=\"confirmpassword\" (keydown.enter)=\"passwordreset()\" />\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:70px;\">\n              <div class=\"col-xs-10\">\n\n                <button type=\"submit\" (click)=\"passwordreset()\" class=\"btn\"\n                  style=\"background-color:#b81250;width: 60%;height: 50px;border-radius: 40px;border:0px;color: white;font-size:20px;font-family:Montserrat,sans-serif;;\">Change\n                  Password</button>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:30px;\">\n              <div class=\"col-xs-10\">\n                <p style=\"font-family:Montserrat, sans-serif;cursor: pointer;\" id=\"forget_password\"\n                  [routerLink]=\"['/login']\">Nope , I remember the password Now ! , Login</p>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:20px;\">\n              <div class=\"col-xs-10\">\n\n                <button (click)=\"routeToFacSchedule()\" class=\"btn blink\"\n                  style=\"color:#b81250;width: 60%;height: 50px;border:0px;border: 1px solid #b81250;font-size:20px;font-family:Montserrat,sans-serif;;font-weight: 800;\"\n                  id=\"faculty_schedule\">Faculty Schedule</button>\n              </div>\n            </div>\n\n\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n\n  <div class=\"row text-center\">\n    <p style=\"font-family:Montserrat;font-weight: 800;\">Designed and Developed by the JUSTICE LEAGUE OF AMRITA CBE</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/password-change/password-change.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/password-change/password-change.component.ts ***!
  \*******************************************************************/
/*! exports provided: PasswordChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangeComponent", function() { return PasswordChangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PasswordChangeComponent = /** @class */ (function () {
    function PasswordChangeComponent(ActivatedRoute, Router, AppService, Toastr) {
        var _this = this;
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.AppService = AppService;
        this.Toastr = Toastr;
        //reset password
        this.passwordreset = function () {
            console.log(_this.userId);
            console.log(_this.authToken);
            if (!_this.password) {
                _this.Toastr.error('Enter Password');
            }
            else if (!_this.confirmpassword) {
                _this.Toastr.error('Enter Confirm Password');
            }
            else if (_this.password != _this.confirmpassword) {
                _this.Toastr.error('Password does not match');
            }
            else {
                var data = {
                    userId: _this.userId,
                    password: _this.password,
                    authToken: _this.authToken
                };
                _this.AppService.setPasswordRecover(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.Toastr.success('Hurray ! reset done ');
                        setTimeout(function () {
                            _this.Router.navigate(['/login']);
                        }, 1000);
                    }
                    else {
                        _this.Toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    console.log(err);
                    //this.Router.navigate(['/technical'])
                });
            }
        };
    }
    PasswordChangeComponent.prototype.ngOnInit = function () {
        //ger userid and authtoken from link
        this.userId = this.ActivatedRoute.snapshot.paramMap.get('userId');
        this.authToken = this.ActivatedRoute.snapshot.paramMap.get('authToken');
    };
    PasswordChangeComponent.prototype.routeToFacSchedule = function () {
    };
    PasswordChangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password-change',
            template: __webpack_require__(/*! ./password-change.component.html */ "./src/app/user/password-change/password-change.component.html"),
            styles: [__webpack_require__(/*! ./password-change.component.css */ "./src/app/user/password-change/password-change.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], PasswordChangeComponent);
    return PasswordChangeComponent;
}());



/***/ }),

/***/ "./src/app/user/reset/reset.component.css":
/*!************************************************!*\
  !*** ./src/app/user/reset/reset.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    \r\n    background-color:lightgray;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-size: cover;\r\n    box-shadow: 0px 4px 40px rgba(181, 181, 181, 0.2);\r\n}\r\n\r\n.insidebox{\r\n    margin-left:50px;\r\n    margin-right:50px;\r\n    background-color: #ffffff;\r\n    margin-top: 50px;\r\n    height: 700px;\r\n    border-radius: 40px;\r\n}\r\n\r\ninput{\r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius:0px;\r\n    border-left: 0px;\r\n    border-right: 0px;\r\n    border-top:0px;\r\n    border-bottom: 1px solid #b81250;\r\n    font-family: Montserrat,sans-serif;\r\n    color:#b81250\r\n}\r\n\r\ninput::-moz-placeholder{\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:16px;\r\n    color:gray;\r\n    font-weight:200;\r\n}\r\n\r\ninput::placeholder{\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:16px;\r\n    color:gray;\r\n    font-weight:200;\r\n}\r\n\r\n.blink {\r\n  animation: blink-animation 1s steps(5, start) infinite;\r\n  -webkit-animation: blink-animation 1s steps(5, start) infinite;\r\n}\r\n\r\n@keyframes blink-animation {\r\n  to {\r\n    border:0px\r\n  }\r\n}\r\n\r\n@-webkit-keyframes blink-animation {\r\n  to {\r\n    border:0px\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXNldC9yZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEM7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBTEE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELDhEQUE4RDtBQUNoRTs7QUFDQTtFQUNFO0lBQ0U7RUFDRjtBQUNGOztBQUNBO0VBQ0U7SUFDRTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Jlc2V0L3Jlc2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNDBweCByZ2JhKDE4MSwgMTgxLCAxODEsIDAuMik7XHJcbn1cclxuXHJcbi5pbnNpZGVib3h7XHJcbiAgICBtYXJnaW4tbGVmdDo1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICBib3JkZXItbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXItdG9wOjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjgxMjUwO1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiNiODEyNTBcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gICAgZm9udC1mYW1pbHk6TW9udHNlcnJhdCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgZm9udC13ZWlnaHQ6MjAwO1xyXG59XHJcblxyXG4uYmxpbmsge1xyXG4gIGFuaW1hdGlvbjogYmxpbmstYW5pbWF0aW9uIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmstYW5pbWF0aW9uIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGJsaW5rLWFuaW1hdGlvbiB7XHJcbiAgdG8ge1xyXG4gICAgYm9yZGVyOjBweFxyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmstYW5pbWF0aW9uIHtcclxuICB0byB7XHJcbiAgICBib3JkZXI6MHB4XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/reset/reset.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/reset/reset.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid background\">\n\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"insidebox\">\n\n        <div class=\"row\">\n          <div class=\"col-xs-6\" style=\"padding:20px;\">\n            <img src=\"../../assets/logo.png\" style=\"width:70%;\" alt=\"college_logo\" />\n            <img src=\"../../assets/undraw_exams_g4ow.svg\" alt=\"exam_image\" style=\"width:100%;\" />\n          </div>\n\n          <div class=\"col-xs-6 text-center\" style=\"margin:0px;padding: 10px;padding-left: 0px;margin-top:2px\">\n\n            <div class=\"row\" style=\"margin-left:10px;margin-top:100px;\">\n              <div class=\"col-xs-10\">\n\n                <p style=\"font-family: Orelega One ,cursive;font-size:4.5rem;font-weight: 300px;\"><span><img alt=\"user\"\n                      src=\"../../assets/vector-creator.png\" style=\"width:80px;\" /> Reset form</span><span\n                    style=\"font-family: Montserrat,sans-serif;;font-size: 2rem;margin-left: 20px;font-weight:700;\">-\n                    Faculty Portal</span></p>\n\n              </div>\n            </div>\n\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:40px;\">\n              <div class=\"col-xs-10\">\n\n                <input type=\"text\" placeholder=\"Enter Username\" [(ngModel)]=\"email\" name=\"email\" id=\"email\"\n                  (keydown.enter)=\"reset()\" />\n              </div>\n            </div>\n\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:70px;\">\n              <div class=\"col-xs-10\">\n\n                <button type=\"submit\" (click)=\"reset()\" class=\"btn\"\n                  style=\"background-color:#b81250;width: 60%;height: 50px;border-radius: 40px;border:0px;color: white;font-size:20px;font-family:Montserrat,sans-serif;;\">Request\n                  Link</button>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:30px;\">\n              <div class=\"col-xs-10\">\n                <p style=\"font-family:Montserrat, sans-serif;cursor: pointer;\" id=\"forget_password\"\n                  [routerLink]=\"['/login']\">Nope , I remember the password Now ! , Login</p>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-left:100px;margin-top:20px;\">\n              <div class=\"col-xs-10\">\n\n                <button (click)=\"routeToFacSchedule()\" class=\"btn blink\"\n                  style=\"color:#b81250;width: 60%;height: 50px;border:0px;border: 1px solid #b81250;font-size:20px;font-family:Montserrat,sans-serif;;font-weight: 800;\"\n                  id=\"faculty_schedule\">Faculty Schedule</button>\n              </div>\n            </div>\n\n\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n\n  <div class=\"row text-center\">\n    <p style=\"font-family:Montserrat;font-weight: 800;\">Designed and Developed by the JUSTICE LEAGUE OF AMRITA CBE</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/reset/reset.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/reset/reset.component.ts ***!
  \***********************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ResetComponent = /** @class */ (function () {
    function ResetComponent(Toastr, AppService, Router) {
        var _this = this;
        this.Toastr = Toastr;
        this.AppService = AppService;
        this.Router = Router;
        //reset functionality for UserName and 
        this.reset = function () {
            if (!_this.email) {
                _this.Toastr.error('Enter registered email ');
            }
            else {
                var data = {
                    email: _this.email
                };
                _this.AppService.getPasswordRecover(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.Toastr.success('Success , Link sent to registered Email !');
                    }
                    else {
                        _this.Toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    console.log("tech");
                    //this.Router.navigate(['/technical'])
                });
            }
        };
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent.prototype.routeToFacSchedule = function () {
    };
    ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/user/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.css */ "./src/app/user/reset/reset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/user/reset/reset.component.ts");
/* harmony import */ var _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-change/password-change.component */ "./src/app/user/password-change/password-change.component.ts");
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login.guard */ "./src/app/login.guard.ts");









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _reset_reset_component__WEBPACK_IMPORTED_MODULE_6__["ResetComponent"], _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_7__["PasswordChangeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'reset', component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_6__["ResetComponent"] },
                    { path: 'passwordChange/:userId/:authToken', component: _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_7__["PasswordChangeComponent"] }
                ]),
            ],
            providers: [_login_guard__WEBPACK_IMPORTED_MODULE_8__["LoginGuardService"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\imman\Desktop\exam_alter_webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map