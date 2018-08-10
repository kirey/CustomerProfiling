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

/***/ "./src/app/algorithms/algorithms.component.html":
/*!******************************************************!*\
  !*** ./src/app/algorithms/algorithms.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"algorithms\" class=\"flex center\">\r\n  <button mat-mini-fab color=\"primary\" matTooltip=\"Add Algorithm\" matTooltipPosition=\"above\" (click)=\"openAddDialog()\">\r\n    <i class=\"material-icons\">add</i>\r\n  </button>\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n    <!-- Name -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef>Algorithm Name</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.algorithmName}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Description -->\r\n    <ng-container matColumnDef=\"description\">\r\n      <th mat-header-cell *matHeaderCellDef> Description </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <div class=\"justify\">{{element.description}} </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Library -->\r\n    <ng-container matColumnDef=\"library\">\r\n      <th mat-header-cell *matHeaderCellDef> Library </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.library}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Actions -->\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <i class=\"material-icons view-icon\" matTooltip=\"View Algorithm\" (click)=\"openViewDialog(element)\">\r\n          visibility\r\n        </i>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/algorithms/algorithms.component.scss":
/*!******************************************************!*\
  !*** ./src/app/algorithms/algorithms.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\n#algorithms table.mat-table {\n  margin-top: 200px; }\n\n#algorithms tr.mat-header-row {\n  background: linear-gradient(to right, #311B92, #7C4DFF); }\n\n#algorithms th.mat-header-cell {\n  width: 250px;\n  color: #fff; }\n\n#algorithms .view-icon {\n  color: #311B92;\n  margin-left: 8px; }\n\n#algorithms .view-icon:hover {\n  color: #FF3D00;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/algorithms/algorithms.component.ts":
/*!****************************************************!*\
  !*** ./src/app/algorithms/algorithms.component.ts ***!
  \****************************************************/
/*! exports provided: AlgorithmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmsComponent", function() { return AlgorithmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _algorithms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms.service */ "./src/app/algorithms/algorithms.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_add_algorithm_add_algorithm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs/add-algorithm/add-algorithm.component */ "./src/app/dialogs/add-algorithm/add-algorithm.component.ts");
/* harmony import */ var _dialogs_view_algorithm_view_algorithm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/view-algorithm/view-algorithm.component */ "./src/app/dialogs/view-algorithm/view-algorithm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlgorithmsComponent = /** @class */ (function () {
    function AlgorithmsComponent(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'description', 'library', 'actions'];
    }
    AlgorithmsComponent.prototype.getAll = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (res) {
            console.log(res);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res['data']);
        }, function (err) {
            console.log(err);
        });
    };
    AlgorithmsComponent.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_algorithm_add_algorithm_component__WEBPACK_IMPORTED_MODULE_3__["AddAlgorithmComponent"], {
            width: '800px'
        });
        dialogRef.afterClosed().subscribe(function (results) {
            _this.getAll();
        });
    };
    AlgorithmsComponent.prototype.openViewDialog = function (obj) {
        var dialogRef = this.dialog.open(_dialogs_view_algorithm_view_algorithm_component__WEBPACK_IMPORTED_MODULE_4__["ViewAlgorithmComponent"], {
            width: '800px',
            data: obj
        });
        // dialogRef.afterClosed().subscribe(results => {
        //   this.getAll();
        // });
    };
    AlgorithmsComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    AlgorithmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-algorithms',
            template: __webpack_require__(/*! ./algorithms.component.html */ "./src/app/algorithms/algorithms.component.html"),
            styles: [__webpack_require__(/*! ./algorithms.component.scss */ "./src/app/algorithms/algorithms.component.scss")]
        }),
        __metadata("design:paramtypes", [_algorithms_service__WEBPACK_IMPORTED_MODULE_1__["AlgorithmsService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AlgorithmsComponent);
    return AlgorithmsComponent;
}());



/***/ }),

/***/ "./src/app/algorithms/algorithms.service.ts":
/*!**************************************************!*\
  !*** ./src/app/algorithms/algorithms.service.ts ***!
  \**************************************************/
/*! exports provided: AlgorithmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmsService", function() { return AlgorithmsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlgorithmsService = /** @class */ (function () {
    function AlgorithmsService(_http) {
        this._http = _http;
        this.baseUrl = '/CustomerProfiling/rest/algorithms';
    }
    AlgorithmsService.prototype.getAll = function () {
        return this._http.get(this.baseUrl);
    };
    AlgorithmsService.prototype.geAlgorithm = function (id) {
        return this._http.get(this.baseUrl + '/' + id);
    };
    AlgorithmsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AlgorithmsService);
    return AlgorithmsService;
}());



/***/ }),

/***/ "./src/app/analyze/analyze.component.html":
/*!************************************************!*\
  !*** ./src/app/analyze/analyze.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"selectAlgorithm\">\r\n    <h4>Select Algorithm:</h4>\r\n    <div *ngIf=\"initialAlgorithm != null && parameters.length != 0\">\r\n        <mat-form-field>\r\n            <mat-select [(ngModel)]=\"initialAlgorithm\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Select Algorithm\" (selectionChange)=\"getParameters($event.value)\">\r\n                <mat-option *ngFor=\"let algorithm of algorithms\" [value]=\"algorithm\">\r\n                    {{algorithm.algorithmName}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <h4>Algorithm Details:</h4>\r\n        <div class=\"algorithmDetails\">\r\n            <label class=\"labels\"> <strong class=\"name\">Algorithm Name:</strong> {{initialAlgorithm.algorithmName}}</label>\r\n            <label class=\"labels bottomLabel\"><strong class=\"desc\">Algorithm Description:</strong> {{initialAlgorithm.description}}</label>\r\n            <table mat-table [dataSource]=\"parameters\" class=\"mat-elevation-z8\">\r\n                <ng-container matColumnDef=\"parameterName\">\r\n                    <th mat-header-cell *matHeaderCellDef> Parameter Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.parameterName}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"parameterValueType\">\r\n                    <th mat-header-cell *matHeaderCellDef> Parameter Value Type </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.parameterValueType}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"parameterDefaultValue\">\r\n                    <th mat-header-cell *matHeaderCellDef> Parameter Default Value </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.defaultValue}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"parameterValue\">\r\n                    <th mat-header-cell *matHeaderCellDef> Parameter Value </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.parameterValues[0] != null ? element.parameterValues[0].value : element.defaultValue}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"actions\">\r\n                    <th mat-header-cell *matHeaderCellDef> Add Value</th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <i matTooltip=\"Add value\" (click)=\"addValue(element)\" matTooltipPosition=\"above\" class=\"material-icons table-icons\"> add </i>\r\n                    </td>\r\n                </ng-container>\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <button mat-button>Add</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/analyze/analyze.component.scss":
/*!************************************************!*\
  !*** ./src/app/analyze/analyze.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\n.selectAlgorithm {\n  border: ridge;\n  border-width: 1px;\n  border-color: #757575;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 2%;\n  margin-bottom: 5%; }\n\nh4 {\n  margin-left: 15px; }\n\n.mat-form-field {\n  margin-left: 40px; }\n\n.labels {\n  padding-left: 35px; }\n\n.algorithmDetails {\n  background: #fafafa;\n  display: -ms-grid;\n  display: grid; }\n\n.name {\n  padding-right: 48px; }\n\n.desc {\n  padding-right: 10px; }\n\n.bottomLabel {\n  margin-top: 20px; }\n\ntable {\n  border-spacing: 0;\n  margin: 40px; }\n"

/***/ }),

/***/ "./src/app/analyze/analyze.component.ts":
/*!**********************************************!*\
  !*** ./src/app/analyze/analyze.component.ts ***!
  \**********************************************/
/*! exports provided: AnalyzeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeComponent", function() { return AnalyzeComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_add_value_add_value_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dialogs/add-value/add-value.component */ "./src/app/dialogs/add-value/add-value.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _analyze_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analyze.service */ "./src/app/analyze/analyze.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnalyzeComponent = /** @class */ (function () {
    function AnalyzeComponent(_analyzeService, _formBuilder, _dialog) {
        this._analyzeService = _analyzeService;
        this._formBuilder = _formBuilder;
        this._dialog = _dialog;
        this.parameters = [];
        this.displayedColumns = ['parameterName', 'parameterValueType', 'parameterDefaultValue', 'parameterValue', 'actions'];
        this.selectedAlgorithms = [];
    }
    AnalyzeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._analyzeService.getAlgorithms().subscribe(function (res) {
            _this.algorithms = JSON.parse(res.text()).data;
        }, function (err) {
        }, function () {
            _this.initialAlgorithm = _this.algorithms[0];
            console.log(_this.initialAlgorithm);
            _this.getParameters(_this.initialAlgorithm);
        });
    };
    AnalyzeComponent.prototype.getParameters = function (algorithm) {
        var _this = this;
        console.log(this.parameters);
        this.parameters = [];
        algorithm.parameters.forEach(function (element) {
            _this.parameters.push(element);
            console.log(element);
            // console.log(element.parameterValues[0]);
        });
        console.log(this.parameters);
    };
    AnalyzeComponent.prototype.addValue = function (element) {
        var _this = this;
        var dialogRef = this._dialog.open(_dialogs_add_value_add_value_component__WEBPACK_IMPORTED_MODULE_1__["AddValueComponent"], {
            width: '850px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //here we take value from dialog back to component and need to put it back in array changed and to delete old one
            for (var i = 0; i < _this.parameters.length; i++) {
                if (element == _this.parameters[i]) {
                    var newParameter = {
                        defaultValue: element.defaultValue,
                        id: element.id,
                        parameterName: element.parameterName,
                        parameterValueType: element.parameterValueType,
                        parameterValues: [
                            {
                                value: result
                            }
                        ]
                    };
                    console.log(newParameter);
                    delete _this.parameters[i];
                    _this.parameters.push(newParameter);
                }
            }
            //to remove undefined element that is deleted previously
            _this.parameters = _this.parameters.filter(function (element) {
                return element !== undefined;
            });
        });
    };
    AnalyzeComponent.prototype.addAlgorithm = function () {
    };
    AnalyzeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-analyze',
            template: __webpack_require__(/*! ./analyze.component.html */ "./src/app/analyze/analyze.component.html"),
            styles: [__webpack_require__(/*! ./analyze.component.scss */ "./src/app/analyze/analyze.component.scss")]
        }),
        __metadata("design:paramtypes", [_analyze_service__WEBPACK_IMPORTED_MODULE_3__["AnalyzeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], AnalyzeComponent);
    return AnalyzeComponent;
}());



/***/ }),

/***/ "./src/app/analyze/analyze.service.ts":
/*!********************************************!*\
  !*** ./src/app/analyze/analyze.service.ts ***!
  \********************************************/
/*! exports provided: AnalyzeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeService", function() { return AnalyzeService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyzeService = /** @class */ (function () {
    function AnalyzeService(_http) {
        this._http = _http;
        this.baseUrl = 'rest/algorithms/';
    }
    AnalyzeService.prototype.getAlgorithms = function () {
        return this._http.get(this.baseUrl);
    };
    AnalyzeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], AnalyzeService);
    return AnalyzeService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <a routerLink=\"/dashboard\" class=\"logo\">Customer Profiling</a>\r\n</div>\r\n<mat-sidenav-container class=\"navContainer\">\r\n    <mat-sidenav class=\"sideContent\" *ngIf=\"_auth.isLoggedIn()\" mode=\"side\" opened>\r\n        <mat-nav-list>\r\n            <a mat-list-item routerLink=\"/dashboard\" routerLinkActive=\"active\">\r\n                <mat-icon>dashboard</mat-icon>\r\n                <span>Dashboard</span>\r\n            </a>\r\n        </mat-nav-list>\r\n        <mat-nav-list>\r\n            <a mat-list-item routerLink=\"/projects\" routerLinkActive=\"active\">\r\n                <mat-icon>filter_list</mat-icon>\r\n                <span>Projects</span>\r\n            </a>\r\n        </mat-nav-list>\r\n        <mat-nav-list>\r\n            <a mat-list-item routerLink=\"/datasets\" routerLinkActive=\"active\">\r\n                <mat-icon>router</mat-icon>\r\n                <span>Datasets</span>\r\n            </a>\r\n        </mat-nav-list>\r\n        <mat-nav-list>\r\n            <a mat-list-item routerLink=\"/algorithms\" routerLinkActive=\"active\">\r\n                <mat-icon>developer_board</mat-icon>\r\n                <span>Algorithms</span>\r\n            </a>\r\n        </mat-nav-list>\r\n        <mat-nav-list>\r\n            <a mat-list-item href=\"javascript:void(0)\" routerLinkActive=\"active\">\r\n                <mat-icon>computer</mat-icon>\r\n                <span>System monitor</span>\r\n            </a>\r\n        </mat-nav-list>\r\n        <mat-nav-list class=\"logout\">\r\n            <a mat-list-item (click)=\"logout()\" routerLinkActive=\"active\">\r\n                <mat-icon>exit_to_app</mat-icon>\r\n                <span>Logout</span>\r\n            </a>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"mainContent\">\r\n        <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.title = 'CustomerProfiling';
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this._auth.logout()
            .subscribe(function (res) {
            localStorage.removeItem('username');
            _this._router.navigate(['/login']);
        }, function (err) { return console.log(err); });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _analyze_analyze_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analyze/analyze.service */ "./src/app/analyze/analyze.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_modules_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/modules/material.module */ "./src/app/shared/modules/material.module.ts");
/* harmony import */ var _projects_projects_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.service */ "./src/app/projects/projects.service.ts");
/* harmony import */ var _dialogs_edit_project_edit_project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialogs/edit-project/edit.project.service */ "./src/app/dialogs/edit-project/edit.project.service.ts");
/* harmony import */ var _algorithms_algorithms_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./algorithms/algorithms.service */ "./src/app/algorithms/algorithms.service.ts");
/* harmony import */ var _project_overview_project_overview_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project-overview/project.overview.service */ "./src/app/project-overview/project.overview.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _dialogs_addProject_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialogs/addProject/add.component */ "./src/app/dialogs/addProject/add.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _dialogs_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dialogs/edit-project/edit-project.component */ "./src/app/dialogs/edit-project/edit-project.component.ts");
/* harmony import */ var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dialogs/delete/delete.component */ "./src/app/dialogs/delete/delete.component.ts");
/* harmony import */ var _dialogs_copyProject_copy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialogs/copyProject/copy.component */ "./src/app/dialogs/copyProject/copy.component.ts");
/* harmony import */ var _dataset_dataset_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dataset/dataset.component */ "./src/app/dataset/dataset.component.ts");
/* harmony import */ var _data_tab_data_tab_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./data-tab/data-tab.component */ "./src/app/data-tab/data-tab.component.ts");
/* harmony import */ var _data_tab_data_tab_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./data-tab/data-tab.service */ "./src/app/data-tab/data-tab.service.ts");
/* harmony import */ var _project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./project-overview/project-overview.component */ "./src/app/project-overview/project-overview.component.ts");
/* harmony import */ var _dialogs_add_dataset_add_dataset_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dialogs/add-dataset/add-dataset.component */ "./src/app/dialogs/add-dataset/add-dataset.component.ts");
/* harmony import */ var _dialogs_dataset_detail_dataset_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dialogs/dataset-detail/dataset-detail.component */ "./src/app/dialogs/dataset-detail/dataset-detail.component.ts");
/* harmony import */ var _dialogs_data_tab_view_data_tab_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dialogs/data-tab-view/data-tab-view.component */ "./src/app/dialogs/data-tab-view/data-tab-view.component.ts");
/* harmony import */ var _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./algorithms/algorithms.component */ "./src/app/algorithms/algorithms.component.ts");
/* harmony import */ var _dialogs_addProject_addProject_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dialogs/addProject/addProject.service */ "./src/app/dialogs/addProject/addProject.service.ts");
/* harmony import */ var _dialogs_copyProject_copyProject_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dialogs/copyProject/copyProject.service */ "./src/app/dialogs/copyProject/copyProject.service.ts");
/* harmony import */ var _dialogs_add_algorithm_add_algorithm_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dialogs/add-algorithm/add-algorithm.component */ "./src/app/dialogs/add-algorithm/add-algorithm.component.ts");
/* harmony import */ var _dialogs_view_algorithm_view_algorithm_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dialogs/view-algorithm/view-algorithm.component */ "./src/app/dialogs/view-algorithm/view-algorithm.component.ts");
/* harmony import */ var _one_project_one_project_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./one-project/one-project.component */ "./src/app/one-project/one-project.component.ts");
/* harmony import */ var _analyze_analyze_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./analyze/analyze.component */ "./src/app/analyze/analyze.component.ts");
/* harmony import */ var _dialogs_add_value_add_value_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./dialogs/add-value/add-value.component */ "./src/app/dialogs/add-value/add-value.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Modules

// Services





// Components











// import { ProjectOverviewComponent } from './project-overview/project-overview.component';












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _dialogs_addProject_add_component__WEBPACK_IMPORTED_MODULE_17__["AddComponent"],
                _dialogs_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_21__["EditProjectComponent"],
                _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_22__["DeleteComponent"],
                _dialogs_copyProject_copy_component__WEBPACK_IMPORTED_MODULE_23__["CopyComponent"],
                _dataset_dataset_component__WEBPACK_IMPORTED_MODULE_24__["DatasetComponent"],
                _data_tab_data_tab_component__WEBPACK_IMPORTED_MODULE_25__["DataTabComponent"],
                _project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_27__["ProjectOverviewComponent"],
                _dialogs_add_dataset_add_dataset_component__WEBPACK_IMPORTED_MODULE_28__["AddDatasetComponent"],
                _dialogs_dataset_detail_dataset_detail_component__WEBPACK_IMPORTED_MODULE_29__["DatasetDetailComponent"],
                _dialogs_data_tab_view_data_tab_view_component__WEBPACK_IMPORTED_MODULE_30__["DataTabViewComponent"],
                _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_31__["AlgorithmsComponent"],
                _dialogs_add_algorithm_add_algorithm_component__WEBPACK_IMPORTED_MODULE_34__["AddAlgorithmComponent"],
                _dialogs_view_algorithm_view_algorithm_component__WEBPACK_IMPORTED_MODULE_35__["ViewAlgorithmComponent"],
                _one_project_one_project_component__WEBPACK_IMPORTED_MODULE_36__["OneProjectComponent"],
                _analyze_analyze_component__WEBPACK_IMPORTED_MODULE_37__["AnalyzeComponent"],
                _dialogs_add_value_add_value_component__WEBPACK_IMPORTED_MODULE_38__["AddValueComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_7__["AppRoutes"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _shared_modules_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]
            ],
            providers: [
                _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
                _projects_projects_service__WEBPACK_IMPORTED_MODULE_11__["ProjectsService"],
                _dialogs_edit_project_edit_project_service__WEBPACK_IMPORTED_MODULE_12__["EditProjectsService"],
                _data_tab_data_tab_service__WEBPACK_IMPORTED_MODULE_26__["DataTabService"],
                _algorithms_algorithms_service__WEBPACK_IMPORTED_MODULE_13__["AlgorithmsService"],
                _dialogs_addProject_addProject_service__WEBPACK_IMPORTED_MODULE_32__["AddProjectService"],
                _dialogs_copyProject_copyProject_service__WEBPACK_IMPORTED_MODULE_33__["CopyProjectService"],
                _project_overview_project_overview_service__WEBPACK_IMPORTED_MODULE_14__["ProjectOverviewService"],
                _analyze_analyze_service__WEBPACK_IMPORTED_MODULE_0__["AnalyzeService"],
                _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_15__["SharedService"]
            ],
            entryComponents: [
                _dialogs_addProject_add_component__WEBPACK_IMPORTED_MODULE_17__["AddComponent"],
                _dialogs_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_21__["EditProjectComponent"],
                _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_22__["DeleteComponent"],
                _dialogs_copyProject_copy_component__WEBPACK_IMPORTED_MODULE_23__["CopyComponent"],
                _dialogs_add_dataset_add_dataset_component__WEBPACK_IMPORTED_MODULE_28__["AddDatasetComponent"],
                _dialogs_dataset_detail_dataset_detail_component__WEBPACK_IMPORTED_MODULE_29__["DatasetDetailComponent"],
                _dialogs_data_tab_view_data_tab_view_component__WEBPACK_IMPORTED_MODULE_30__["DataTabViewComponent"],
                _dialogs_copyProject_copy_component__WEBPACK_IMPORTED_MODULE_23__["CopyComponent"],
                _dialogs_add_algorithm_add_algorithm_component__WEBPACK_IMPORTED_MODULE_34__["AddAlgorithmComponent"],
                _dialogs_view_algorithm_view_algorithm_component__WEBPACK_IMPORTED_MODULE_35__["ViewAlgorithmComponent"],
                _dialogs_add_value_add_value_component__WEBPACK_IMPORTED_MODULE_38__["AddValueComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _one_project_one_project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-project/one-project.component */ "./src/app/one-project/one-project.component.ts");
/* harmony import */ var _dataset_dataset_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataset/dataset.component */ "./src/app/dataset/dataset.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./algorithms/algorithms.component */ "./src/app/algorithms/algorithms.component.ts");




// Components





var routes = [
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'datasets', component: _dataset_dataset_component__WEBPACK_IMPORTED_MODULE_1__["DatasetComponent"], canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'one-project', component: _one_project_one_project_component__WEBPACK_IMPORTED_MODULE_0__["OneProjectComponent"] },
    // { path: 'data-tab', component: DataTabComponent, canActivate: [AuthGuard] },
    { path: 'algorithms', component: _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_8__["AlgorithmsComponent"], canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '**', component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
];
var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboardPanel\">\r\n    <h1>Dashboard</h1>\r\n    <div class=\"flex-grid\">\r\n        <div class=\"col\">\r\n            <mat-card>\r\n                <mat-title>Projects Overview</mat-title>\r\n            </mat-card>\r\n        </div>\r\n        <div class=\"col\">\r\n            <mat-card>\r\n                <mat-title>Analytical Tools Overview</mat-title>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n    <div class=\"flex-grid\">\r\n        <div class=\"col\">\r\n            <mat-card>\r\n                <mat-title>Datasets Overview</mat-title>\r\n            </mat-card>\r\n        </div>\r\n        <div class=\"col\">\r\n            <mat-card>\r\n                <mat-title>System Monitor Overview</mat-title>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n    <div class=\"flex-grid\">\r\n        <div class=\"colFullWidth\">\r\n            <mat-card>\r\n                <mat-title>Panel Detail</mat-title>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\n.dashboardPanel {\n  width: 98%;\n  margin-left: 2%; }\n\n.flex-grid {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1%; }\n\n.col {\n  width: 49%;\n  height: 250px;\n  border-width: 1px;\n  border-style: groove;\n  border-color: #E1F5FE; }\n\n.colFullWidth {\n  width: 100%;\n  height: 240px;\n  border-width: 1px;\n  border-style: groove;\n  border-color: #E1F5FE; }\n\nmat-card {\n  background: linear-gradient(#311B92, #7C4DFF) !important;\n  color: white !important; }\n\n@media (max-width: 400px) {\n  .flex-grid {\n    display: block; }\n  .col {\n    margin-top: 1%;\n    width: 100%; } }\n\nh1 {\n  color: #757575; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data-tab/data-tab.component.html":
/*!**************************************************!*\
  !*** ./src/app/data-tab/data-tab.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"data-tab\">\r\n  <!-- Basic info -->\r\n  <h2 class=\"subtitle\">DATASET - Info & Stats</h2>\r\n  <div class=\"flex space-around border\">\r\n    <!-- DATASET DETAILS -->\r\n    <mat-card class=\"info-box justify\">\r\n      <div *ngIf=\"details\">\r\n        <div class=\"details-item\">\r\n          <strong>Dataset: </strong>\r\n          {{details.datasetName}}\r\n        </div>\r\n        <div class=\"details-item\">\r\n          <strong>Description: </strong>\r\n          {{details.datasetDesc}}\r\n        </div>\r\n        <div class=\"details-item\">\r\n          <strong>Dataset size: </strong>\r\n          {{details.datasetSize}} KB\r\n        </div>\r\n        <div class=\"details-item\">\r\n          <strong>Number of rows: </strong>\r\n          {{details.numberOfRows}}\r\n        </div>\r\n        <div class=\"details-item\">\r\n          <strong>Number of variables: </strong>\r\n          {{details.numberOfVariables}}\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n    <!-- LIST OF VARIABLES -->\r\n    <mat-card class=\"info-box justify\">\r\n      <div *ngIf=\"details && details.variableDetails.length > 0\">\r\n        <div>\r\n          <strong>Variable details: </strong>\r\n        </div>\r\n        <div *ngFor=\"let item of  details.variableDetails; let i = index\">\r\n          <span>{{i+1}}. </span>\r\n          <span>\r\n            <strong>Name:</strong> {{item.variableName}} </span>\r\n          <span>\r\n            <br>\r\n            <strong>Varience:</strong> {{item.varience}} </span>\r\n          <span>\r\n            <br>\r\n            <strong>Min:</strong> {{item.min}} </span>\r\n          <span>\r\n            <strong>Max:</strong> {{item.max}} </span>\r\n          <span>\r\n            <br>\r\n            <strong>Distinct Count:</strong> {{item.distinctCount}} </span>\r\n          <br>\r\n          <span>\r\n            <strong>Average:</strong> {{item.average}} </span>\r\n          <br>\r\n          <br>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  <!-- Pre Processing -->\r\n  <h2 class=\"subtitle\">DATASET - Pre Processing</h2>\r\n  <div class=\"border\">\r\n    <!-- Titles -->\r\n    <div class=\"flex space-around title-bar\" *ngIf=\"variables\">\r\n      <span class=\"processing-title\">\r\n        Variable Name\r\n      </span>\r\n      <span class=\"processing-title\">\r\n        Type of Variable\r\n      </span>\r\n      <span class=\"processing-title\">\r\n        Type of Data\r\n      </span>\r\n      <span class=\"processing-title\">\r\n        Type of Operation\r\n      </span>\r\n      <span class=\"processing-title\">\r\n        Parameters\r\n      </span>\r\n    </div>\r\n    <!-- Data -->\r\n    <div class=\"flex column\">\r\n      <div *ngFor=\"let variable of variables; let i = index\" class=\"flex space-around variable-items\">\r\n        <!-- Variable Name -->\r\n        <span>{{variable.variableName}}</span>\r\n\r\n        <!-- Variable Type -->\r\n        <mat-form-field>\r\n          <mat-select (selectionChange)=\"selectionChanged($event, i, 'typeOfVariable')\" placeholder=\"Variable Type\">\r\n            <mat-option *ngFor=\"let type of variableTypes\" [value]=\"type\">\r\n              {{type}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <!-- Data Type -->\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)]=\"variables[i].typeOfData\" (selectionChange)=\"selectionChanged($event, i, 'typeOfData')\" placeholder=\"Data Type\">\r\n            <mat-option *ngFor=\"let type of dataTypes\" [value]=\"type\">\r\n              {{type}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <!-- Operation Type -->\r\n        <div>\r\n          <!-- Numeric -->\r\n          <mat-form-field *ngIf=\"variables[i].typeOfData == 'NUMERIC'\">\r\n            <mat-select (selectionChange)=\"setParams($event, i)\" placeholder=\"Operation Type\">\r\n              <mat-option *ngFor=\"let type of numericOperationTypes\" [value]=\"type\">\r\n                {{type}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <!-- Text -->\r\n          <mat-form-field *ngIf=\"variables[i].typeOfData == 'TEXT'\">\r\n            <mat-select (selectionChange)=\"setParams($event, i)\" placeholder=\"Operation Type\">\r\n              <mat-option *ngFor=\"let type of textOperationTypes\" [value]=\"type\">\r\n                {{type}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <!--  P A R A M S -->\r\n        <span class=\"params\">\r\n          <!-- Min & Max -->\r\n          <div *ngIf=\"variables[i]['params']; else noData\">\r\n            <span *ngIf=\"variables[i]['params']['minmax'] == true\">\r\n              <mat-form-field class=\"small-input\">\r\n                <input (change)=\"paramsChanged($event, i, 'scaleMin')\" matInput placeholder=\"Min\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"small-input\">\r\n                <input (change)=\"paramsChanged($event, i, 'scaleMax')\" matInput placeholder=\"Max\">\r\n              </mat-form-field>\r\n            </span>\r\n            <!-- Bins -->\r\n            <span *ngIf=\"variables[i]['params']['bins'] == true\">\r\n              <mat-form-field class=\"small-input\">\r\n                <input (change)=\"paramsChanged($event, i, 'bins')\" matInput placeholder=\"Bins\">\r\n              </mat-form-field>\r\n            </span>\r\n          </div>\r\n          <ng-template #noData>\r\n            No parameters.\r\n          </ng-template>\r\n        </span>\r\n      </div>\r\n      <div class=\"warn-message\"> {{message}}</div>\r\n      <!-- Buttons -->\r\n      <span class=\"buttons\">\r\n        <button mat-raised-button color=\"primary\" (click)=submit()>Save</button>\r\n        <button mat-stroked-button color=\"warn\" (click)=\"viewObject()\">View</button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/data-tab/data-tab.component.scss":
/*!**************************************************!*\
  !*** ./src/app/data-tab/data-tab.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\n#data-tab {\n  margin: 5% 10%; }\n\n#data-tab .border {\n    border: 1px solid #E0E0E0;\n    padding: 50px; }\n\n#data-tab .info-box {\n    padding: 50px;\n    width: 400px;\n    margin: 0 20px; }\n\n#data-tab .title-bar {\n    margin-bottom: 20px; }\n\n#data-tab .processing-title {\n    color: #311B92;\n    margin-top: 20px;\n    font-size: 18px;\n    width: 158px;\n    font-weight: bold; }\n\n#data-tab .variable-items > span {\n    width: 150px;\n    padding: 20px 0;\n    font-size: 16px; }\n\n#data-tab .params {\n    padding: 0 !important;\n    font-size: 16px !important;\n    display: flex;\n    align-items: center; }\n\n#data-tab .mat-form-field-infix {\n    width: 150px !important; }\n\n#data-tab .small-input {\n    width: 45px !important;\n    margin-right: 10px; }\n\n#data-tab .buttons {\n    margin-top: 40px; }\n\n#data-tab button {\n    float: right;\n    margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/data-tab/data-tab.component.ts":
/*!************************************************!*\
  !*** ./src/app/data-tab/data-tab.component.ts ***!
  \************************************************/
/*! exports provided: DataTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTabComponent", function() { return DataTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_tab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-tab.service */ "./src/app/data-tab/data-tab.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _project_overview_project_overview_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project-overview/project.overview.service */ "./src/app/project-overview/project.overview.service.ts");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataTabComponent = /** @class */ (function () {
    function DataTabComponent(dataTabService, dialog, sharedService, projectOverviewService, snackbar) {
        this.dataTabService = dataTabService;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.projectOverviewService = projectOverviewService;
        this.snackbar = snackbar;
        this.numericOperationTypes = [];
        this.textOperationTypes = [];
    }
    DataTabComponent.prototype.getVariables = function () {
        var _this = this;
        this.dataTabService.getVariables(this.datasetId)
            .subscribe(function (res) {
            console.log(res);
            _this.variables = res['data'];
        }, function (err) {
            console.log(err);
        });
    };
    DataTabComponent.prototype.getVariableTypes = function () {
        var _this = this;
        this.dataTabService.getVariableTypes()
            .subscribe(function (res) {
            // console.log(res);
            _this.variableTypes = res['data'];
        }, function (err) {
            console.log(err);
        });
    };
    DataTabComponent.prototype.getDataTypes = function () {
        var _this = this;
        this.dataTabService.getDataTypes()
            .subscribe(function (res) {
            // console.log(res);
            _this.dataTypes = res['data'];
        }, function (err) {
            console.log(err);
        });
    };
    DataTabComponent.prototype.getDatasetDetails = function () {
        var _this = this;
        this.projectOverviewService.getDatasetDetails(this.datasetId).subscribe(function (res) {
            _this.details = res.data;
            console.log(_this.details);
        }, function (err) {
            console.log(err);
            _this.snackbar.openSnackBar('Something went wrong.', 'Error');
        });
    };
    DataTabComponent.prototype.setOperationTypes = function () {
        var _this = this;
        this.dataTabService.getOperationTypes('NUMERIC')
            .subscribe(function (res) {
            console.log(res);
            _this.numericOperationTypes = res['data'];
            // this.variables[index]['operationTypes'] = res['data'];
        }, function (err) {
            console.log(err);
        });
        this.dataTabService.getOperationTypes('TEXT')
            .subscribe(function (res) {
            console.log(res);
            _this.textOperationTypes = res['data'];
            // this.variables[index]['operationTypes'] = res['data'];
        }, function (err) {
            console.log(err);
        });
    };
    DataTabComponent.prototype.selectionChanged = function (ev, index, type) {
        this.variables[index][type] = ev.value;
        if (type == 'typeOfData' && ev.value == 'TEXT') {
            if (this.variables[index]['scaleMin'])
                this.variables[index]['scaleMin'] = null;
            if (this.variables[index]['scaleMax'])
                this.variables[index]['scaleMax'] = null;
            if (this.variables[index]['bins'])
                this.variables[index]['bins'] = null;
        }
        if (type == 'typeOfData' && this.variables[index]['params']) {
            delete this.variables[index]['params'];
        }
        console.log(this.variables);
    };
    DataTabComponent.prototype.paramsChanged = function (ev, index, type) {
        this.variables[index][type] = ev.target.value;
        // console.log(this.variables);
    };
    DataTabComponent.prototype.setParams = function (ev, index) {
        switch (ev.value) {
            case 'Scaling operation':
                this.variables[index]['params'] = { 'minmax': true, 'bins': false };
                if (this.variables[index]['bins'])
                    this.variables[index]['bins'] = null;
                this.variables[index]['distinct'] = false;
                this.variables[index]['leaveAsItIs'] = false;
                break;
            case 'Binning operation':
                this.variables[index]['params'] = { 'minmax': false, 'bins': true };
                if (this.variables[index]['scaleMin'])
                    this.variables[index]['scaleMin'] = null;
                if (this.variables[index]['scaleMax'])
                    this.variables[index]['scaleMax'] = null;
                this.variables[index]['distinct'] = false;
                this.variables[index]['leaveAsItIs'] = false;
                break;
            case 'Unfolding with distinct categories':
                this.variables[index]['distinct'] = true;
                this.variables[index]['leaveAsItIs'] = false;
                if (this.variables[index]['bins'])
                    this.variables[index]['bins'] = null;
                if (this.variables[index]['scaleMin'])
                    this.variables[index]['scaleMin'] = null;
                if (this.variables[index]['scaleMax'])
                    this.variables[index]['scaleMax'] = null;
                break;
            case 'Live as it is':
                this.variables[index]['leaveAsItIs'] = true;
                this.variables[index]['distinct'] = false;
                if (this.variables[index]['bins'])
                    this.variables[index]['bins'] = null;
                if (this.variables[index]['scaleMin'])
                    this.variables[index]['scaleMin'] = null;
                if (this.variables[index]['scaleMax'])
                    this.variables[index]['scaleMax'] = null;
                break;
        }
        console.log(this.variables);
    };
    DataTabComponent.prototype.viewObject = function () {
        var checkArray = [];
        // Check for empty fields
        for (var i = 0; i < this.variables.length; i++) {
            if (!this.variables[i]['typeOfVariable']) {
                this.message = 'Select variable type.';
                break;
            }
            else if (!this.variables[i]['typeOfData']) {
                this.message = 'Select data type.';
                break;
            }
            else if (!this.variables[i]['bins'] && !this.variables[i]['scaleMin'] && !this.variables[i]['scaleMax'] && !this.variables[i]['distinct'] && !this.variables[i]['leaveAsItIs']) {
                this.message = 'Select parameters.';
                break;
            }
            else if (!this.variables[i]['bins'] && !this.variables[i]['scaleMin'] && !this.variables[i]['scaleMax'] && !this.variables[i]['distinct'] && !this.variables[i]['leaveAsItIs']) {
                this.message = 'Select parameters.';
                break;
            }
            else {
                checkArray.push(true);
            }
        }
        // Send request after check
        if (checkArray.length == this.variables.length) {
            var list = this.variables;
            for (var i = 0; i < list.length; i++) {
                delete list[i]['params'];
                delete list[i]['operationTypes'];
            }
            this.dataTabService.getProcessingView(this.datasetId, list)
                .subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
            // console.log(this.variables);
            // this.message = '';
            // const dialogRef = this.dialog.open(DataTabViewComponent, {
            //   width: '800px',
            //   data: this.variables
            // });
        }
    };
    DataTabComponent.prototype.submit = function () {
        var checkArray = [];
        // Check for empty fields
        for (var i = 0; i < this.variables.length; i++) {
            if (!this.variables[i]['typeOfVariable']) {
                this.message = 'Select variable type.';
                break;
            }
            else if (!this.variables[i]['typeOfData']) {
                this.message = 'Select data type.';
                break;
            }
            else if (!this.variables[i]['bins'] && !this.variables[i]['scaleMin'] && !this.variables[i]['scaleMax'] && !this.variables[i]['distinct'] && !this.variables[i]['leaveAsItIs']) {
                this.message = 'Select parameters.';
                break;
            }
            else if (!this.variables[i]['bins'] && !this.variables[i]['scaleMin'] && !this.variables[i]['scaleMax'] && !this.variables[i]['distinct'] && !this.variables[i]['leaveAsItIs']) {
                this.message = 'Select parameters.';
                break;
            }
            else {
                checkArray.push(true);
            }
        }
        // Send request after check
        if (checkArray.length == this.variables.length) {
            console.log(this.variables);
            this.message = '';
            var data = this.variables;
            // 
            // Variables has params property
            // 
            for (var i = 0; i < data.length; i++) {
                delete data[i]['params'];
                delete data[i]['operationTypes'];
            }
            this, this.dataTabService.save(this.datasetId, this.projectId, data)
                .subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
    };
    DataTabComponent.prototype.ngOnInit = function () {
        this.datasetId = this.sharedService.getDatasetId();
        this.projectId = this.sharedService.getProjectId();
        this.getVariables();
        this.getDataTypes();
        this.getVariableTypes();
        this.setOperationTypes();
        this.getDatasetDetails();
    };
    DataTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-tab',
            template: __webpack_require__(/*! ./data-tab.component.html */ "./src/app/data-tab/data-tab.component.html"),
            styles: [__webpack_require__(/*! ./data-tab.component.scss */ "./src/app/data-tab/data-tab.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_data_tab_service__WEBPACK_IMPORTED_MODULE_2__["DataTabService"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _project_overview_project_overview_service__WEBPACK_IMPORTED_MODULE_4__["ProjectOverviewService"], _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"]])
    ], DataTabComponent);
    return DataTabComponent;
}());



/***/ }),

/***/ "./src/app/data-tab/data-tab.service.ts":
/*!**********************************************!*\
  !*** ./src/app/data-tab/data-tab.service.ts ***!
  \**********************************************/
/*! exports provided: DataTabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTabService", function() { return DataTabService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTabService = /** @class */ (function () {
    function DataTabService(_http) {
        this._http = _http;
        this.baseUrl = '/CustomerProfiling/rest/dataset/';
    }
    DataTabService.prototype.getVariables = function (id) {
        return this._http.get(this.baseUrl + 'preprocessing?datasetId=' + id);
    };
    DataTabService.prototype.getDataTypes = function () {
        return this._http.get(this.baseUrl + 'dataTypes');
    };
    DataTabService.prototype.getVariableTypes = function () {
        return this._http.get(this.baseUrl + 'columnTypes');
    };
    DataTabService.prototype.getOperationTypes = function (type) {
        return this._http.get(this.baseUrl + 'operationTypes?dataType=' + type);
    };
    DataTabService.prototype.getProcessingView = function (datasetId, list) {
        return this._http.post(this.baseUrl + 'preprocessing/view?datasetId=' + datasetId, list);
    };
    DataTabService.prototype.save = function (datasetId, projectId, list) {
        return this._http.post(this.baseUrl + 'preprocessing/save?datasetId=' + datasetId + '&projectId=' + projectId, list);
    };
    DataTabService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataTabService);
    return DataTabService;
}());



/***/ }),

/***/ "./src/app/dataset/dataset.component.html":
/*!************************************************!*\
  !*** ./src/app/dataset/dataset.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"datasets\">\r\n    <h1>My Datasets </h1>\r\n    <div class=\"aboveTable\">\r\n        <button class=\"addBtn\" (click)=\"addDataset()\" matTooltip=\"Add Dataset\" matTooltipPosition=\"above\" mat-mini-fab>\r\n            <i class=\"material-icons plus\">add</i>\r\n        </button>\r\n    </div>\r\n    <div *ngIf=\"dataSource\">\r\n        <mat-form-field class=\"filterInput\">\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search table\">\r\n        </mat-form-field>\r\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n            <ng-container matColumnDef=\"datasetName\">\r\n                <th mat-header-cell *matHeaderCellDef> Dataset Name </th>\r\n                <td mat-cell *matCellDef=\"let dataset\"> {{dataset.name}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"actions\">\r\n                <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n                <td mat-cell *matCellDef=\"let dataset\">\r\n                    <i matTooltip=\"Delete dateset\" (click)=\"deleteDataset(dataset)\" matTooltipPosition=\"above\" class=\"material-icons table-icons\"> delete </i>\r\n                    <i matTooltip=\"Show dateset\" (click)=\"showDatasetDetail(dataset.id)\" matTooltipPosition=\"above\" class=\"material-icons table-icons\"> visibility </i>\r\n                </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <mat-paginator [length]=\"dataSource.length\" [pageSize]=\"10\" [pageSizeOptions]=\"[1,5, 10, 25, 100]\"></mat-paginator>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dataset/dataset.component.scss":
/*!************************************************!*\
  !*** ./src/app/dataset/dataset.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\ntable {\n  width: 70%;\n  margin-left: 15%; }\n\n.aboveTable {\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-bottom: 1%; }\n\nbutton {\n  margin-left: 95%; }\n\nh1 {\n  margin-left: 4%; }\n\n@media (max-width: 1400px) {\n  button {\n    margin-left: 92%; } }\n\n@media (max-width: 750px) {\n  button {\n    margin-left: 87%; } }\n\n@media (max-width: 500px) {\n  button {\n    margin-left: 83%; } }\n\ntr.mat-header-row {\n  background: linear-gradient(#311B92, #7C4DFF); }\n\nth.mat-header-cell {\n  text-align: center;\n  color: white; }\n\ntd {\n  text-align: center; }\n\n.addBtn {\n  background: #311B92;\n  color: white !important; }\n\ntable i {\n  color: #311B92;\n  font-size: 22px; }\n\nh1 {\n  color: #757575; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  margin-left: 15%;\n  margin-right: 15%; }\n\n.filterInput {\n  margin-left: 15%; }\n"

/***/ }),

/***/ "./src/app/dataset/dataset.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dataset/dataset.component.ts ***!
  \**********************************************/
/*! exports provided: DatasetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetComponent", function() { return DatasetComponent; });
/* harmony import */ var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../dialogs/delete/delete.component */ "./src/app/dialogs/delete/delete.component.ts");
/* harmony import */ var _dataset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataset.service */ "./src/app/dataset/dataset.service.ts");
/* harmony import */ var _dialogs_dataset_detail_dataset_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dialogs/dataset-detail/dataset-detail.component */ "./src/app/dialogs/dataset-detail/dataset-detail.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_add_dataset_add_dataset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogs/add-dataset/add-dataset.component */ "./src/app/dialogs/add-dataset/add-dataset.component.ts");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DatasetComponent = /** @class */ (function () {
    function DatasetComponent(_dialog, _datasetService, _snackBarService) {
        this._dialog = _dialog;
        this._datasetService = _datasetService;
        this._snackBarService = _snackBarService;
        this.displayedColumns = ['datasetName', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
    }
    Object.defineProperty(DatasetComponent.prototype, "datasourcePaginator", {
        set: function (paginator) {
            this.paginator = paginator;
            this.dataSource.paginator = this.paginator;
        },
        enumerable: true,
        configurable: true
    });
    DatasetComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    DatasetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._datasetService.getDatasets().subscribe(function (res) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](JSON.parse(res.text()).data);
        }, function (err) { }, function () {
            _this.dataSource.filterPredicate = function (data, filter) {
                return data.name.toLowerCase().includes(filter);
            };
        });
    };
    DatasetComponent.prototype.addDataset = function () {
        var _this = this;
        var dialogRef = this._dialog.open(_dialogs_add_dataset_add_dataset_component__WEBPACK_IMPORTED_MODULE_5__["AddDatasetComponent"], {
            width: '850px'
        });
        dialogRef.afterClosed().subscribe(function (results) {
            _this._datasetService.getDatasets().subscribe(function (res) {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](JSON.parse(res.text()).data);
            });
        });
    };
    DatasetComponent.prototype.showDatasetDetail = function (id) {
        var _this = this;
        var objToShow;
        this._datasetService.getDataset(id).subscribe(function (res) {
            objToShow = JSON.parse(res.text()).data;
        }, function (err) { }, function () {
            var dialogRef = _this._dialog.open(_dialogs_dataset_detail_dataset_detail_component__WEBPACK_IMPORTED_MODULE_2__["DatasetDetailComponent"], {
                width: '1000px',
                data: objToShow
            });
            dialogRef.afterClosed().subscribe(function (results) {
            });
        });
    };
    DatasetComponent.prototype.deleteDataset = function (dataset) {
        var _this = this;
        var dialogRef = this._dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_0__["DeleteComponent"], {
            width: '500px',
            data: { type: "dataset", value: dataset.name }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res == true) {
                _this._datasetService.deleteDataset(dataset.id).subscribe(function (res) {
                }, function (err) {
                    _this._snackBarService.openSnackBar('Error', 'Something went wrong!');
                }, function () {
                    _this._snackBarService.openSnackBar('Success', 'You have successfuly deleted dataset!');
                    _this._datasetService.getDatasets().subscribe(function (res) {
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](JSON.parse(res.text()).data);
                    });
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]])
    ], DatasetComponent.prototype, "datasourcePaginator", null);
    DatasetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dataset',
            template: __webpack_require__(/*! ./dataset.component.html */ "./src/app/dataset/dataset.component.html"),
            styles: [__webpack_require__(/*! ./dataset.component.scss */ "./src/app/dataset/dataset.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _dataset_service__WEBPACK_IMPORTED_MODULE_1__["DatasetService"], _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]])
    ], DatasetComponent);
    return DatasetComponent;
}());



/***/ }),

/***/ "./src/app/dataset/dataset.service.ts":
/*!********************************************!*\
  !*** ./src/app/dataset/dataset.service.ts ***!
  \********************************************/
/*! exports provided: DatasetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetService", function() { return DatasetService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasetService = /** @class */ (function () {
    function DatasetService(_http) {
        this._http = _http;
        this.baseUrl = 'rest/dataset/';
    }
    DatasetService.prototype.getDatasets = function () {
        return this._http.get(this.baseUrl);
    };
    DatasetService.prototype.addDataset = function (formData) {
        return this._http.post(this.baseUrl + 'addNewDataset', formData);
    };
    DatasetService.prototype.getDataset = function (id) {
        return this._http.get(this.baseUrl + id);
    };
    DatasetService.prototype.deleteDataset = function (id) {
        return this._http.delete(this.baseUrl + id);
    };
    DatasetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], DatasetService);
    return DatasetService;
}());



/***/ }),

/***/ "./src/app/dialogs/add-algorithm/add-algorithm.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/add-algorithm/add-algorithm.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"add-algorithm\">\r\n  <h1 class=\"subtitle\" mat-dialog-title>Add Algorithm</h1>\r\n  <mat-divider></mat-divider>\r\n  <mat-dialog-content>\r\n    <!-- Form  -->\r\n    <form [formGroup]=\"addAlgorithmForm\" class=\"flex space-between\" autocomplete=\"off\">\r\n      <div class=\"flex column\">\r\n        <h3 class=\"subtitle\">Basic Information</h3>\r\n        <!-- Name -->\r\n        <mat-form-field>\r\n          <input formControlName=\"algorithmName\" matInput placeholder=\"Algorithm Name\">\r\n        </mat-form-field>\r\n        <mat-error *ngIf=\"algorithmName.touched && algorithmName.errors\">\r\n          <strong> You have to enter algorithm name.</strong>\r\n        </mat-error>\r\n        <!-- Library -->\r\n        <mat-form-field>\r\n          <input formControlName=\"library\" matInput placeholder=\"Library\">\r\n        </mat-form-field>\r\n        <mat-error *ngIf=\"library.touched && library.errors\">\r\n          <strong> You have to enter library title.</strong>\r\n        </mat-error>\r\n        <!-- Description -->\r\n        <mat-form-field appearance=\"outline\">\r\n          <textarea formControlName=\"description\" matInput placeholder=\"Description\"></textarea>\r\n          <mat-hint>Enter algorithm description.</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n    <mat-divider></mat-divider>\r\n    <!-- P A R A M S -->\r\n    <div class=\"flex \">\r\n      <form [formGroup]=\"addParametersForm\" (ngSubmit)=\"addParameter()\" class=\"flex column\">\r\n        <h3 class=\"subtitle\">Add Algorithm Parameters</h3>\r\n        <!-- Param Name -->\r\n        <mat-form-field>\r\n          <input formControlName=\"parameterName\" matInput placeholder=\"Parameter Name\">\r\n        </mat-form-field>\r\n        <mat-error *ngIf=\"parameterName.touched && parameterName.errors\">\r\n          <strong> You have to enter parameter name.</strong>\r\n        </mat-error>\r\n        <!-- Param Type -->\r\n        <mat-form-field>\r\n          <input formControlName=\"parameterValueType\" matInput placeholder=\"Parameter Type\">\r\n        </mat-form-field>\r\n        <mat-error *ngIf=\"parameterValueType.touched && parameterValueType.errors\">\r\n          <strong> You have to enter parameter type.</strong>\r\n        </mat-error>\r\n        <!-- Param Value -->\r\n        <mat-form-field>\r\n          <input formControlName=\"defaultValue\" matInput placeholder=\"Default Value\">\r\n        </mat-form-field>\r\n        <mat-error *ngIf=\"defaultValue.touched && defaultValue.errors\">\r\n          <strong> You have to enter default value.</strong>\r\n        </mat-error>\r\n        <button type=\"submit\" mat-stroked-button color=\"warn\" [disabled]=\"addParametersForm.invalid\">Add Parameter</button>\r\n        <mat-error class=\"message\">\r\n          <strong *ngIf=\"message\"> You cannot enter paramaters with same name.</strong>\r\n        </mat-error>\r\n      </form>\r\n      <div class=\"flex column added-params\">\r\n        <h3 class=\"subtitle\"> Added Parameters</h3>\r\n        <div *ngFor=\"let param of parameters; let i = index\">\r\n          <span class=\"params-show\">\r\n            <mat-icon class=\"unselect-icon\" (click)=\"removeJobParam(param, i)\">close</mat-icon>\r\n            {{i+1}}. {{param.parameterName}}\r\n            <i *ngIf=\"selectedParam != i\" class=\"material-icons params-expand-icon\" (click)=\"expandParamsInfo(i)\">\r\n              expand_more\r\n            </i>\r\n            <i *ngIf=\"expand == true && selectedParam == i\" class=\"material-icons params-expand-icon\" (click)=\"expandParamsInfo(i)\">\r\n              expand_less\r\n            </i>\r\n          </span>\r\n          <div *ngIf=\"expand == true && selectedParam == i\">\r\n            <div class=\"params-expanded\">\r\n              <span class=\"param-value\">\r\n                <strong>Type: </strong>\r\n                <br> {{param.parameterValueType}}\r\n              </span>\r\n              <span class=\"param-description\">\r\n                <strong>Default Value: </strong>\r\n                <br> {{param.defaultValue}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions class=\"buttons\">\r\n    <button mat-stroked-button mat-dialog-close color=\"warn\">Close</button>\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"addAlgorithmForm.invalid\" (click)=\"submit()\">Add algorithm</button>\r\n  </mat-dialog-actions>\r\n</div>"

/***/ }),

/***/ "./src/app/dialogs/add-algorithm/add-algorithm.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/add-algorithm/add-algorithm.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\n#add-algorithm form {\n  margin: 20px 0; }\n\n#add-algorithm .mat-form-field {\n  width: 340px; }\n\n#add-algorithm mat-error {\n  margin-bottom: 30px; }\n\n#add-algorithm .message {\n  margin-top: 20px; }\n\n#add-algorithm .params-show {\n  display: flex;\n  align-items: center;\n  font-size: 18px; }\n\n#add-algorithm .added-params {\n  margin-top: 20px;\n  margin-left: 45px; }\n\n#add-algorithm .params-expand-icon {\n  padding-top: 2px;\n  font-size: 29px;\n  padding-left: 5px;\n  color: #311B92; }\n\n#add-algorithm .params-expand-icon:hover {\n  cursor: pointer;\n  color: #424242; }\n\n#add-algorithm .params-expanded {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px; }\n\n#add-algorithm .param-value {\n  margin-right: 20px;\n  word-break: break-word;\n  width: 140px; }\n\n#add-algorithm .param-description {\n  word-break: break-word;\n  width: 140px; }\n\n#add-algorithm .param-value > strong, #add-algorithm .param-description > strong {\n  color: #311B92; }\n\n#add-algorithm .unselect-icon {\n  color: #FF3D00;\n  height: 18px;\n  font-size: 20px;\n  margin-right: 3px;\n  font-weight: 600; }\n\n#add-algorithm .unselect-icon:hover {\n  cursor: pointer;\n  color: #424242; }\n\n#add-algorithm mat-dialog-actions {\n  float: right; }\n\n#add-algorithm mat-dialog-actions > button {\n  margin-top: 30px;\n  margin-left: 15px; }\n"

/***/ }),

/***/ "./src/app/dialogs/add-algorithm/add-algorithm.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/add-algorithm/add-algorithm.component.ts ***!
  \******************************************************************/
/*! exports provided: AddAlgorithmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAlgorithmComponent", function() { return AddAlgorithmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_algorithm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-algorithm.service */ "./src/app/dialogs/add-algorithm/add-algorithm.service.ts");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddAlgorithmComponent = /** @class */ (function () {
    function AddAlgorithmComponent(fb, service, snackbar) {
        this.fb = fb;
        this.service = service;
        this.snackbar = snackbar;
        this.parameters = [];
        this.message = false;
        this.expand = false;
    }
    // Add Parameter
    AddAlgorithmComponent.prototype.addParameter = function () {
        if (this.parameters.length > 0) {
            for (var i = 0; i < this.parameters.length; i++) {
                if (this.addParametersForm.value['parameterName'] == this.parameters[i]['parameterName']) {
                    return this.message = true;
                }
                else
                    this.message = false;
            }
        }
        if (!this.message) {
            this.parameters.push(this.addParametersForm.value);
            console.log(this.parameters);
        }
    };
    // Remove Param
    AddAlgorithmComponent.prototype.removeJobParam = function (param, index) {
        this.parameters.splice(index, 1);
    };
    // Expand Param Info
    AddAlgorithmComponent.prototype.expandParamsInfo = function (i) {
        this.expand = !this.expand;
        if (this.expand)
            this.selectedParam = i;
        else
            this.selectedParam = null;
    };
    // SUBIMT FUNCTION
    AddAlgorithmComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.addAlgorithmForm.value);
        this.addAlgorithmForm.value['parameters'] = this.parameters;
        this.service.addAlgorithm(this.addAlgorithmForm.value)
            .subscribe(function (res) {
            console.log(res);
            _this.snackbar.openSnackBar('Algorithm added successfully.', 'Success');
        }, function (err) {
            console.log(err);
        });
    };
    AddAlgorithmComponent.prototype.ngOnInit = function () {
        this.addParametersForm = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            parameterName: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            parameterValueType: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            defaultValue: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.addAlgorithmForm = this.fb.group({
            algorithmName: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            library: ['', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['']
        });
    };
    Object.defineProperty(AddAlgorithmComponent.prototype, "algorithmName", {
        // FORM GETTERS
        get: function () {
            return this.addAlgorithmForm.get('algorithmName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddAlgorithmComponent.prototype, "library", {
        get: function () {
            return this.addAlgorithmForm.get('library');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddAlgorithmComponent.prototype, "description", {
        get: function () {
            return this.addAlgorithmForm.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddAlgorithmComponent.prototype, "parameterName", {
        get: function () {
            return this.addParametersForm.get('parameterName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddAlgorithmComponent.prototype, "parameterValueType", {
        get: function () {
            return this.addParametersForm.get('parameterValueType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddAlgorithmComponent.prototype, "defaultValue", {
        get: function () {
            return this.addParametersForm.get('defaultValue');
        },
        enumerable: true,
        configurable: true
    });
    AddAlgorithmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-algorithm',
            template: __webpack_require__(/*! ./add-algorithm.component.html */ "./src/app/dialogs/add-algorithm/add-algorithm.component.html"),
            styles: [__webpack_require__(/*! ./add-algorithm.component.scss */ "./src/app/dialogs/add-algorithm/add-algorithm.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _add_algorithm_service__WEBPACK_IMPORTED_MODULE_2__["AddAlgorithmService"], _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"]])
    ], AddAlgorithmComponent);
    return AddAlgorithmComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add-algorithm/add-algorithm.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/add-algorithm/add-algorithm.service.ts ***!
  \****************************************************************/
/*! exports provided: AddAlgorithmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAlgorithmService", function() { return AddAlgorithmService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddAlgorithmService = /** @class */ (function () {
    function AddAlgorithmService(_http) {
        this._http = _http;
        this.baseUrl = 'rest/algorithms';
    }
    AddAlgorithmService.prototype.addAlgorithm = function (obj) {
        return this._http.post(this.baseUrl, obj);
    };
    AddAlgorithmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], AddAlgorithmService);
    return AddAlgorithmService;
}());



/***/ }),

/***/ "./src/app/dialogs/add-dataset/add-dataset.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/add-dataset/add-dataset.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addDataset\">\r\n    <h1>Add Dataset </h1>\r\n    <mat-divider></mat-divider>\r\n    <mat-dialog-content>\r\n        <form [formGroup]=\"datasetForm\" (ngSubmit)=\"addDataset()\">\r\n            <mat-form-field>\r\n                <input matInput formControlName=\"name\" type=\"text\" placeholder=\"Dataset name\" autocomplete=\"off\" [(ngModel)]=\"name\">\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"datasetForm.get('name').touched && datasetForm.get('name').hasError('required')\">\r\n                Name is required!\r\n            </mat-error>\r\n            <mat-form-field>\r\n                <input matInput formControlName=\"description\" type=\"text\" placeholder=\"Dataset description\" autocomplete=\"off\" [(ngModel)]=\"description\">\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"datasetForm.get('description').touched && datasetForm.get('description').hasError('required')\">\r\n                Description is required!\r\n            </mat-error>\r\n            <mat-dialog-actions class=\"buttons\">\r\n                <label class=\"btn btn-default btn-file\">\r\n                  {{csvFileButton}}\r\n                  <input style=\"display: none;\" formControlName=\"csv\" type=\"file\" accept=\".csv\" (change)=\"handleCSVFile($event.target.files)\">\r\n                </label>\r\n                <button type=\"submit\" mat-raised-button [disabled]=\"datasetForm.invalid\">Add dataset</button>\r\n            </mat-dialog-actions>\r\n        </form>\r\n    </mat-dialog-content>\r\n</div>"

/***/ }),

/***/ "./src/app/dialogs/add-dataset/add-dataset.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/add-dataset/add-dataset.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\n#addDataset {\n  display: flex;\n  flex-direction: column;\n  padding-right: 20px; }\n\n#addDataset .mat-form-field {\n    width: 100%;\n    padding: 10px 10px 10px 10px; }\n\n#addDataset .mat-dialog-content {\n    height: 300px; }\n\n#addDataset .buttons {\n    float: right; }\n\n#addDataset .btn-file {\n    position: relative;\n    overflow: hidden;\n    background: #311B92;\n    margin-right: 10px;\n    color: white;\n    padding: 15px; }\n\n#addDataset .btn-file input[type=file] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-width: 100%;\n    min-height: 100%;\n    font-size: 100px;\n    text-align: right;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    outline: none;\n    color: white;\n    background: #311B92;\n    cursor: inherit;\n    display: block; }\n\n#addDataset button {\n    background: #311B92;\n    color: white; }\n\n#addDataset button:disabled,\n  #addDataset button[disabled] {\n    background-color: #cccccc;\n    color: black; }\n\n#addDataset h1 {\n    text-align: center; }\n\n#addDataset .mat-error {\n    padding-left: 10px;\n    margin-top: -20px; }\n\n#addDataset .mat-dialog-content {\n    margin-top: 50px;\n    margin-bottom: 20px;\n    display: block;\n    padding: 0 24px;\n    max-height: 65vh;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch; }\n"

/***/ }),

/***/ "./src/app/dialogs/add-dataset/add-dataset.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/add-dataset/add-dataset.component.ts ***!
  \**************************************************************/
/*! exports provided: AddDatasetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDatasetComponent", function() { return AddDatasetComponent; });
/* harmony import */ var _dataset_dataset_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../dataset/dataset.service */ "./src/app/dataset/dataset.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddDatasetComponent = /** @class */ (function () {
    function AddDatasetComponent(dialogRef, data, _formBuilder, _datasetService, _snackBarService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._formBuilder = _formBuilder;
        this._datasetService = _datasetService;
        this._snackBarService = _snackBarService;
        this.csvFileButton = 'Browse for .csv file';
    }
    AddDatasetComponent.prototype.ngOnInit = function () {
        this.datasetForm = this._formBuilder.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            csv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    AddDatasetComponent.prototype.handleCSVFile = function (files) {
        this.csvFile = files[0];
        this.csvFileButton = files[0].name + ' Size:' + files[0].size;
    };
    AddDatasetComponent.prototype.addDataset = function () {
        var _this = this;
        var datasetObj = {
            name: this.name,
            description: this.description,
            filename: null,
            database: null,
            schema: null,
            dbQuery: null,
            originalDataset: null,
            project: null,
            variables: null,
            derivedDatasets: null
        };
        var formData = new FormData();
        formData.append('csvFile', this.csvFile);
        formData.append('dataset', new Blob([JSON.stringify(datasetObj)], {
            type: "application/json"
        }));
        this._datasetService.addDataset(formData).subscribe(function (res) {
        }, function (err) {
        }, function () {
            _this.dialogRef.close();
            _this._snackBarService.openSnackBar('Success', 'You have successfuly added dataset!');
        });
    };
    AddDatasetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-dataset',
            template: __webpack_require__(/*! ./add-dataset.component.html */ "./src/app/dialogs/add-dataset/add-dataset.component.html"),
            styles: [__webpack_require__(/*! ./add-dataset.component.scss */ "./src/app/dialogs/add-dataset/add-dataset.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _dataset_dataset_service__WEBPACK_IMPORTED_MODULE_0__["DatasetService"], _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"]])
    ], AddDatasetComponent);
    return AddDatasetComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add-value/add-value.component.html":
/*!************************************************************!*\
  !*** ./src/app/dialogs/add-value/add-value.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addValue\">\r\n    <h1>Add Value for parameter </h1>\r\n    <mat-divider></mat-divider>\r\n    <mat-dialog-content>\r\n        <form [formGroup]=\"addValueForm\" (ngSubmit)=\"addValue()\">\r\n            <mat-form-field>\r\n                <input matInput formControlName=\"value\" type=\"text\" placeholder=\"Enter value\" autocomplete=\"off\" [(ngModel)]=\"value\">\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"addValueForm.get('value').touched && addValueForm.get('value').hasError('required')\">\r\n                Value is required!\r\n            </mat-error>\r\n            <mat-dialog-actions class=\"buttons\">\r\n                <button type=\"submit\" mat-raised-button [disabled]=\"addValueForm.invalid\">Add value</button>\r\n            </mat-dialog-actions>\r\n        </form>\r\n    </mat-dialog-content>\r\n</div>"

/***/ }),

/***/ "./src/app/dialogs/add-value/add-value.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dialogs/add-value/add-value.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\n#addValue {\n  display: flex;\n  flex-direction: column;\n  padding-right: 20px; }\n\n#addValue .mat-form-field {\n    width: 100%;\n    padding: 10px 10px 10px 10px; }\n\n#addValue .mat-dialog-content {\n    height: 300px; }\n\n#addValue .buttons {\n    float: right; }\n\n#addValue button {\n    background: #311B92;\n    color: white; }\n\n#addValue button:disabled,\n  #addValue button[disabled] {\n    background-color: #cccccc;\n    color: black; }\n\n#addValue h1 {\n    text-align: center; }\n\n#addValue .mat-error {\n    padding-left: 10px;\n    margin-top: -20px; }\n\n#addValue .mat-dialog-content {\n    margin-top: 50px;\n    margin-bottom: 20px;\n    display: block;\n    padding: 0 24px;\n    max-height: 65vh;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch; }\n"

/***/ }),

/***/ "./src/app/dialogs/add-value/add-value.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dialogs/add-value/add-value.component.ts ***!
  \**********************************************************/
/*! exports provided: AddValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddValueComponent", function() { return AddValueComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddValueComponent = /** @class */ (function () {
    function AddValueComponent(dialogRef, data, _formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._formBuilder = _formBuilder;
    }
    AddValueComponent.prototype.ngOnInit = function () {
        this.addValueForm = this._formBuilder.group({
            value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    };
    AddValueComponent.prototype.addValue = function () {
        this.dialogRef.close(this.value);
    };
    AddValueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-value',
            template: __webpack_require__(/*! ./add-value.component.html */ "./src/app/dialogs/add-value/add-value.component.html"),
            styles: [__webpack_require__(/*! ./add-value.component.scss */ "./src/app/dialogs/add-value/add-value.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], AddValueComponent);
    return AddValueComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/addProject/add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/dialogs/addProject/add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addProject\">\r\n  <h1>Create New Project</h1>\r\n  <form [formGroup]=\"addProjectForm\" (ngSubmit)=\"addProject()\" autocomplete=\"off\">\r\n    <mat-dialog-content>\r\n  <mat-form-field>\r\n    <input matInput formControlName=\"projectName\" placeholder=\"Name\">\r\n  </mat-form-field><br>\r\n  <mat-form-field>\r\n    <textarea matInput formControlName=\"description\" placeholder=\"Description\"></textarea>\r\n  </mat-form-field>\r\n</mat-dialog-content>\r\n<mat-dialog-actions class=\"buttons\">\r\n    <button mat-button mat-dialog-close (click)=\"cancel()\">Cancel</button>\r\n    <button type=\"submit\" color=\"warn\" mat-raised-button >Create project</button>\r\n</mat-dialog-actions>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/addProject/add.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/dialogs/addProject/add.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#addProject {\n  margin-left: 5%;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n  #addProject .mat-form-field {\n    width: 90%; }\n  #addProject .buttons {\n    float: right; }\n"

/***/ }),

/***/ "./src/app/dialogs/addProject/add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/dialogs/addProject/add.component.ts ***!
  \*****************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _addProject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addProject.service */ "./src/app/dialogs/addProject/addProject.service.ts");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddComponent = /** @class */ (function () {
    function AddComponent(addProjectService, dialogRef, data, formBuilder, snackbar) {
        this.addProjectService = addProjectService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
    }
    AddComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    AddComponent.prototype.addProject = function () {
        var _this = this;
        var project = this.addProjectForm.value;
        console.log(project);
        this.addProjectService.addProject(project).subscribe(function (res) {
            console.log(res);
            _this.snackbar.openSnackBar(res['data'], 'Success');
            _this.dialogRef.close();
        }, function (err) {
            console.log(err);
            _this.snackbar.openSnackBar('Something went wrong.', 'Error');
        });
    };
    AddComponent.prototype.ngOnInit = function () {
        this.addProjectForm = this.formBuilder.group({
            projectName: [''],
            description: ['']
        });
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/dialogs/addProject/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/dialogs/addProject/add.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_addProject_service__WEBPACK_IMPORTED_MODULE_3__["AddProjectService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/addProject/addProject.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/dialogs/addProject/addProject.service.ts ***!
  \**********************************************************/
/*! exports provided: AddProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectService", function() { return AddProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddProjectService = /** @class */ (function () {
    function AddProjectService(_http) {
        this._http = _http;
        this.baseUrl = '/CustomerProfiling/rest/';
    }
    AddProjectService.prototype.addProject = function (project) {
        return this._http.post(this.baseUrl + 'projects', project);
    };
    AddProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AddProjectService);
    return AddProjectService;
}());



/***/ }),

/***/ "./src/app/dialogs/copyProject/copy.component.html":
/*!*********************************************************!*\
  !*** ./src/app/dialogs/copyProject/copy.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"copyProject\">\r\n  <h1>Copy Project  {{data.id}}</h1>\r\n  <form #copyProjectForm=\"ngForm\">\r\n  <mat-dialog-content>\r\n    <mat-form-field>\r\n      <input matInput name=\"projectName\" type=\"text\" [(ngModel)]=\"data.projectName\" placeholder=\"New Project Name\">\r\n    </mat-form-field>\r\n    <br>\r\n    <!-- <mat-form-field>\r\n      <input matInput name=\"newProjectName\" type=\"text\" [(ngModel)]=\"data.newProjectName\" placeholder=\"New project name\">\r\n    </mat-form-field> -->\r\n    <br>\r\n    <mat-form-field>\r\n      <textarea matInput name=\"description\" type=\"text\" [(ngModel)]=\"data.description\" placeholder=\"Previous aproject Text\"></textarea>\r\n    </mat-form-field>\r\n    <br>\r\n    <!-- <mat-form-field>\r\n      <mat-select [(value)]=\"selected\">\r\n        <mat-option>None</mat-option>\r\n        <mat-option value=\"option1\">Option 1</mat-option>\r\n        <mat-option value=\"option2\">Option 2</mat-option>\r\n        <mat-option value=\"option3\">Option 3</mat-option>\r\n      </mat-select>\r\n    </mat-form-field> -->\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions class=\"buttons\">\r\n    <button mat-button mat-dialog-close (click)=\"cancel()\">Cancel</button>\r\n    <button type=\"submit\" color=\"warn\" mat-raised-button (click)=\"copyProject(copyProjectForm.value)\">Create project</button>\r\n  </mat-dialog-actions>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/copyProject/copy.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/dialogs/copyProject/copy.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#copyProject .mat-form-field {\n  width: 90%; }\n\n#copyProject .buttons {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/dialogs/copyProject/copy.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dialogs/copyProject/copy.component.ts ***!
  \*******************************************************/
/*! exports provided: CopyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyComponent", function() { return CopyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _copyProject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copyProject.service */ "./src/app/dialogs/copyProject/copyProject.service.ts");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CopyComponent = /** @class */ (function () {
    function CopyComponent(dialogRef, data, copyProjectService, snackbar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.copyProjectService = copyProjectService;
        this.snackbar = snackbar;
        this.selected = 'option2';
    }
    CopyComponent.prototype.copyProject = function (obj) {
        var _this = this;
        obj['id'] = this.data.id;
        console.log(obj);
        this.copyProjectService.copyProjects(obj).subscribe(function (res) {
            console.log(res);
            _this.snackbar.openSnackBar(res['data'], 'Success');
            _this.dialogRef.close();
        }, function (err) {
            console.log(err);
            _this.snackbar.openSnackBar('Something went wrong.', 'Error');
        });
    };
    CopyComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    CopyComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    CopyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-copy',
            template: __webpack_require__(/*! ./copy.component.html */ "./src/app/dialogs/copyProject/copy.component.html"),
            styles: [__webpack_require__(/*! ./copy.component.scss */ "./src/app/dialogs/copyProject/copy.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _copyProject_service__WEBPACK_IMPORTED_MODULE_2__["CopyProjectService"],
            _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"]])
    ], CopyComponent);
    return CopyComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/copyProject/copyProject.service.ts":
/*!************************************************************!*\
  !*** ./src/app/dialogs/copyProject/copyProject.service.ts ***!
  \************************************************************/
/*! exports provided: CopyProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyProjectService", function() { return CopyProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CopyProjectService = /** @class */ (function () {
    function CopyProjectService(_http) {
        this._http = _http;
        this.baseUrl = '/CustomerProfiling/rest/projects/';
    }
    CopyProjectService.prototype.copyProjects = function (obj) {
        return this._http.post(this.baseUrl + 'copy', obj);
    };
    CopyProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CopyProjectService);
    return CopyProjectService;
}());



/***/ }),

/***/ "./src/app/dialogs/data-tab-view/data-tab-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/data-tab-view/data-tab-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"data-tab-view\">\r\n    <h2 mat-dialog-title class=\"subtitle\">DATASET - Pre Processing VIEW</h2>\r\n    <mat-divider></mat-divider>\r\n    <mat-dialog-content *ngIf=\"data\">\r\n        <!-- Titles -->\r\n        <div class=\"flex space-around title-bar\">\r\n            <span class=\"processing-title\">\r\n                Variable Name\r\n            </span>\r\n            <span class=\"processing-title\">\r\n                Type of Variable\r\n            </span>\r\n            <span class=\"processing-title\">\r\n                Type of Data\r\n            </span>\r\n            <span class=\"processing-title\">\r\n                Parameters\r\n            </span>\r\n        </div>\r\n        <!-- Data -->\r\n        <div class=\"flex column\">\r\n            <div *ngFor=\"let item of data; let i = index\" class=\"flex space-around variable-items\">\r\n                <!-- Variable Name -->\r\n                <span>\r\n                    <strong>{{item.variableName}}</strong>\r\n                </span>\r\n                <!-- Variable Type -->\r\n                <span>\r\n                    {{item.typeOfVariable}}\r\n                </span>\r\n                <!-- Data Type -->\r\n                <span>\r\n                    {{item.typeOfData}}\r\n                </span>\r\n                <!-- Operation Type -->\r\n                <!-- <span>\r\n                    {{data}}\r\n                </span> -->\r\n                <!--  P A R A M S -->\r\n                <span *ngIf=\"item.leaveAsItIs == true\">\r\n                    Leave as it is\r\n                </span>\r\n                <span *ngIf=\"item.distinct == true\">\r\n                    Unfolding with distinct categories\r\n                </span>\r\n                <span *ngIf=\"item.scaleMin && item.scaleMax\" class=\"minmax\">\r\n                    <span>\r\n                        <strong>Min: </strong>{{item.scaleMin}} </span>\r\n                    <span>\r\n                        <strong>Max: </strong> {{item.scaleMax}}</span>\r\n                </span>\r\n                <span *ngIf=\"item.bins\">\r\n                    <strong> Bins: </strong> {{item.bins}}\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions>\r\n        <button mat-stroked-button color=\"primary\" mat-dialog-close>Close</button>\r\n    </mat-dialog-actions>\r\n</div>"

/***/ }),

/***/ "./src/app/dialogs/data-tab-view/data-tab-view.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/data-tab-view/data-tab-view.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\n#data-tab-view .title-bar {\n  margin-bottom: 20px; }\n\n#data-tab-view .processing-title {\n  color: #311B92;\n  margin-top: 20px;\n  font-size: 18px;\n  width: 158px;\n  font-weight: bold; }\n\n#data-tab-view .variable-items > span {\n  width: 150px;\n  padding: 20px 0;\n  font-size: 16px;\n  display: flex;\n  align-items: center; }\n\n#data-tab-view .minmax > span {\n  margin-right: 15px; }\n\n#data-tab-view mat-dialog-actions {\n  float: right; }\n\n#data-tab-view button {\n  margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/dialogs/data-tab-view/data-tab-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/data-tab-view/data-tab-view.component.ts ***!
  \******************************************************************/
/*! exports provided: DataTabViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTabViewComponent", function() { return DataTabViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DataTabViewComponent = /** @class */ (function () {
    function DataTabViewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DataTabViewComponent.prototype.ngOnInit = function () {
    };
    DataTabViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-tab-view',
            template: __webpack_require__(/*! ./data-tab-view.component.html */ "./src/app/dialogs/data-tab-view/data-tab-view.component.html"),
            styles: [__webpack_require__(/*! ./data-tab-view.component.scss */ "./src/app/dialogs/data-tab-view/data-tab-view.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DataTabViewComponent);
    return DataTabViewComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/dataset-detail/dataset-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/dataset-detail/dataset-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"datasetDetail\">\r\n    <mat-dialog-title>\r\n        <h1>Dataset detail </h1>\r\n        <mat-divider></mat-divider>\r\n    </mat-dialog-title>\r\n    <mat-dialog-content>\r\n        <form>\r\n            <div class=\"column\">\r\n                <label>Dataset Name:\r\n                    <span>{{data.datasetName}}</span>\r\n                </label>\r\n            </div>\r\n            <div class=\"column\">\r\n                <label>Number of rows:\r\n                    <span>{{data.numberOfRows}}</span>\r\n                </label>\r\n            </div>\r\n            <div class=\"column\">\r\n                <label>Number of Variables:\r\n                    <span>{{data.numberOfVariables}}</span>\r\n                </label>\r\n            </div>\r\n            <div class=\"column\">\r\n                <label>Dataset Size:\r\n                    <span>{{data.datasetSize}} KB</span>\r\n                </label>\r\n            </div>\r\n            <div class=\"column\">\r\n                <label>Dataset description:\r\n                    <span>{{data.datasetDesc}}</span>\r\n                </label>\r\n            </div>\r\n            <!-- List of Projects -->\r\n            <div class=\"column\" *ngIf=\"data.listProjects.length > 0;else noData\">\r\n                <label class=\"inline\">Project Associated</label>\r\n                <br>\r\n                <div class=\"flex column-style header-style\">\r\n                    <span>Project Name</span>\r\n                    <span>Description</span>\r\n                    <span>Status</span>\r\n                    <span>Creation Date</span>\r\n                    <span>Last Opened</span>\r\n                </div>\r\n                <div class=\"flex\" *ngFor=\"let item of data.listProjects; let i = index\">\r\n                    <div class=\"flex column-style\">\r\n                        <span>{{item.projectName}}</span>\r\n                        <span>{{item.description}}</span>\r\n                        <span>{{item.status}}</span>\r\n                        <span>{{item.creationDate}}</span>\r\n                        <span>{{item.lastOpened}}</span>\r\n                    </div>\r\n                </div>\r\n                <ng-template #noData>\r\n                    <span>No data.</span>\r\n                </ng-template>\r\n            </div>\r\n            <!-- List of VARIABLES -->\r\n            <div class=\"column\" *ngIf=\"data.variableDetails.length > 0;else noData\">\r\n                <label class=\"inline\">List of variables</label>\r\n                <br>\r\n                <div class=\"flex column-style header-style\">\r\n                    <span>Variable Name</span>\r\n                    <span>Distinct Count</span>\r\n                    <span>Min</span>\r\n                    <span>Max</span>\r\n                    <span>Average</span>\r\n                    <span>Varience</span>\r\n                </div>\r\n                <div class=\"flex  column-style\" *ngFor=\"let item of data.variableDetails; let i = index\">\r\n                    <span>{{item.variableName}}</span>\r\n                    <span>{{item.distinctCount}}</span>\r\n                    <span>{{item.min}}</span>\r\n                    <span>{{item.max}}</span>\r\n                    <span>{{item.average}}</span>\r\n                    <span>{{item.varience}}</span>\r\n                </div>\r\n                <ng-template #noData>\r\n                    <span>No data.</span>\r\n                </ng-template>\r\n            </div>\r\n        </form>\r\n    </mat-dialog-content>\r\n</div>"

/***/ }),

/***/ "./src/app/dialogs/dataset-detail/dataset-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/dataset-detail/dataset-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\n.column {\n  width: 100%;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  font-size: 17px;\n  font-weight: bolder; }\n\nh1 {\n  text-align: center; }\n\n.inline {\n  display: inline-flex; }\n\nspan {\n  font-weight: normal;\n  padding-left: 10px; }\n\n.header-style {\n  color: #7C4DFF;\n  font-weight: bold;\n  font-size: 17px;\n  margin: 10px 0; }\n\n.column-style > span {\n  width: 170px; }\n"

/***/ }),

/***/ "./src/app/dialogs/dataset-detail/dataset-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/dataset-detail/dataset-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: DatasetDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetDetailComponent", function() { return DatasetDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DatasetDetailComponent = /** @class */ (function () {
    function DatasetDetailComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DatasetDetailComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    DatasetDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dataset-detail',
            template: __webpack_require__(/*! ./dataset-detail.component.html */ "./src/app/dialogs/dataset-detail/dataset-detail.component.html"),
            styles: [__webpack_require__(/*! ./dataset-detail.component.scss */ "./src/app/dialogs/dataset-detail/dataset-detail.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DatasetDetailComponent);
    return DatasetDetailComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/delete/delete.component.html":
/*!******************************************************!*\
  !*** ./src/app/dialogs/delete/delete.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"deleteDialog\">\r\n    <h2 class=\"dialog-title\">Delete </h2>\r\n    <mat-dialog-content>Are you sure you want to delete {{data.projectName}}?</mat-dialog-content>\r\n    <mat-dialog-actions>\r\n        <button mat-button mat-dialog-close (click)=\"cancel()\">Cancel</button>\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"true\">Yes</button>\r\n    </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/delete/delete.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dialogs/delete/delete.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/delete/delete.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dialogs/delete/delete.component.ts ***!
  \****************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/dialogs/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.scss */ "./src/app/dialogs/delete/delete.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit-project/edit-project.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/edit-project/edit-project.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"editProject\">\r\n    <h1>Edit Project {{data.id}}</h1>\r\n    <form #editProjectForm=\"ngForm\">\r\n      <mat-dialog-content>\r\n    <mat-form-field>\r\n      <input matInput name=\"projectName\" type=\"text\" [(ngModel)]=\"data.projectName\" placeholder=\" Project name\">\r\n    </mat-form-field><br>\r\n    <!-- <mat-form-field>\r\n        <input matInput name=\"creationDate\" type=\"text\" [(ngModel)]=\"data.createDate\" placeholder=\" Project date\">\r\n      </mat-form-field><br> -->\r\n      <mat-form-field fxFlexFill>\r\n          <input matInput name=\"creationDate\" [matDatepicker]=\"picker\" placeholder=\"Date\" [(ngModel)]=\"data.creationDate\" [value]=\"data.creationDate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      </mat-form-field>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n      <mat-form-field>\r\n          <input matInput name=\"status\" type=\"text\" [(ngModel)]=\"data.status\" placeholder=\" Project status\">\r\n        </mat-form-field>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions class=\"buttons\">\r\n      <button mat-button mat-dialog-close (click)=\"cancel()\">Cancel</button>\r\n      <button type=\"submit\" color=\"warn\" mat-raised-button (click)=\"editProject(editProjectForm.value)\">Save</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit-project/edit-project.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/edit-project/edit-project.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#editProject {\n  margin-left: 5%;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n  #editProject .mat-form-field {\n    width: 90%; }\n  #editProject .buttons {\n    float: right; }\n"

/***/ }),

/***/ "./src/app/dialogs/edit-project/edit-project.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/edit-project/edit-project.component.ts ***!
  \****************************************************************/
/*! exports provided: EditProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectComponent", function() { return EditProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.project.service */ "./src/app/dialogs/edit-project/edit.project.service.ts");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditProjectComponent = /** @class */ (function () {
    function EditProjectComponent(editProjectService, dialogRef, data, snackBarService) {
        this.editProjectService = editProjectService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBarService = snackBarService;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((new Date()).toISOString());
    }
    EditProjectComponent.prototype.editProject = function (obj) {
        var _this = this;
        obj['id'] = this.data.id;
        console.log(obj);
        this.editProjectService.editProjects(obj).subscribe(function (res) {
            console.log(res);
            _this.snackBarService.openSnackBar(res['data'], 'Success');
            _this.dialogRef.close();
        }, function (err) {
            console.log(err);
            _this.snackBarService.openSnackBar('Something went wrong.', 'Error');
        });
    };
    EditProjectComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    EditProjectComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    EditProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-project',
            template: __webpack_require__(/*! ./edit-project.component.html */ "./src/app/dialogs/edit-project/edit-project.component.html"),
            styles: [__webpack_require__(/*! ./edit-project.component.scss */ "./src/app/dialogs/edit-project/edit-project.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_edit_project_service__WEBPACK_IMPORTED_MODULE_3__["EditProjectsService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"]])
    ], EditProjectComponent);
    return EditProjectComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit-project/edit.project.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/edit-project/edit.project.service.ts ***!
  \**************************************************************/
/*! exports provided: EditProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectsService", function() { return EditProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditProjectsService = /** @class */ (function () {
    function EditProjectsService(_http) {
        this._http = _http;
        this.baseUrl = '/CustomerProfiling/rest/';
    }
    EditProjectsService.prototype.editProjects = function (obj) {
        return this._http.put(this.baseUrl + 'projects', obj);
    };
    EditProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EditProjectsService);
    return EditProjectsService;
}());



/***/ }),

/***/ "./src/app/dialogs/view-algorithm/view-algorithm.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/view-algorithm/view-algorithm.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"view-algorithm\" *ngIf=\"data\">\r\n  <h1 class=\"subtitle\" mat-dialog-title>View Algorithm</h1>\r\n  <mat-divider></mat-divider>\r\n  <!-- Dialog CONTENT -->\r\n  <mat-dialog-content>\r\n    <div class=\"flex center name\">\r\n      <h4>{{data.algorithmName}}</h4>\r\n    </div>\r\n    <div class=\"flex space-between wrap\">\r\n      <span class=\"description-library\">\r\n        <div class=\"data-title\">Description</div>\r\n        <div class=\"justify\"> {{data.description}}</div>\r\n      </span>\r\n      <span class=\"description-library\">\r\n        <div class=\"data-title\">Library</div>\r\n        {{data.library}}\r\n      </span>\r\n    </div>\r\n    <!-- List of Parameters -->\r\n    <div class=\"parameters \" *ngIf=\"data.parameters && data.parameters.length>0; else noData\">\r\n      <label class=\"data-title\">Parameters</label>\r\n      <br>\r\n      <div class=\"flex column-style header-style\">\r\n        <span>Parameter Name</span>\r\n        <span>Type</span>\r\n        <span>Value</span>\r\n      </div>\r\n      <div class=\"flex  column-style items-style\" *ngFor=\"let item of data.parameters\">\r\n        <span>{{item.parameterName}}</span>\r\n        <span>{{item.parameterValueType}}</span>\r\n        <span>{{item.defaultValue}}</span>\r\n      </div>\r\n      <ng-template #noData>\r\n        <span>No data.</span>\r\n      </ng-template>\r\n    </div>\r\n  </mat-dialog-content>\r\n  <!-- Dialog ACTIONS -->\r\n  <mat-dialog-actions class=\"buttons\">\r\n    <button mat-stroked-button mat-dialog-close color=\"warn\">Close</button>\r\n  </mat-dialog-actions>\r\n</div>"

/***/ }),

/***/ "./src/app/dialogs/view-algorithm/view-algorithm.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/view-algorithm/view-algorithm.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\n#view-algorithm .data-title {\n  color: #311B92;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 10px; }\n\n#view-algorithm .name {\n  background-color: #311B92;\n  color: #fff;\n  font-size: 21px;\n  margin: 20px 0; }\n\n#view-algorithm .description-library {\n  border: 1px solid #311B92;\n  padding: 20px;\n  width: 42%;\n  margin: 5px 0; }\n\n#view-algorithm .parameters {\n  border: 1px solid #311B92;\n  padding: 20px;\n  margin: 10px 0; }\n\n#view-algorithm .header-style {\n  color: #7C4DFF;\n  font-weight: bold;\n  font-size: 16px;\n  margin: 10px 0; }\n\n#view-algorithm .column-style > span {\n  width: 170px; }\n\n#view-algorithm .items-style > span {\n  margin-left: 1px; }\n\n#view-algorithm mat-dialog-actions {\n  float: right; }\n\n#view-algorithm button {\n  margin: 20px 0; }\n"

/***/ }),

/***/ "./src/app/dialogs/view-algorithm/view-algorithm.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/view-algorithm/view-algorithm.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewAlgorithmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAlgorithmComponent", function() { return ViewAlgorithmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ViewAlgorithmComponent = /** @class */ (function () {
    function ViewAlgorithmComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ViewAlgorithmComponent.prototype.ngOnInit = function () {
    };
    ViewAlgorithmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-algorithm',
            template: __webpack_require__(/*! ./view-algorithm.component.html */ "./src/app/dialogs/view-algorithm/view-algorithm.component.html"),
            styles: [__webpack_require__(/*! ./view-algorithm.component.scss */ "./src/app/dialogs/view-algorithm/view-algorithm.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ViewAlgorithmComponent);
    return ViewAlgorithmComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"loginCard\">\r\n    <mat-card-title>Login</mat-card-title>\r\n    <form class=\"loginForm\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n        <mat-form-field class=\"loginFormField\">\r\n            <input matInput placeholder=\"Username*\" formControlName=\"username\" [(ngModel)]=\"username\">\r\n        </mat-form-field>\r\n        <mat-error *ngIf=\"loginForm.get('username').touched && loginForm.get('username').hasError('required')\">\r\n            Username is required!\r\n        </mat-error>\r\n        <mat-form-field class=\"loginFormField\">\r\n            <input matInput placeholder=\"Password*\" type=\"password\" formControlName=\"password\" [(ngModel)]=\"password\">\r\n        </mat-form-field>\r\n        <mat-error *ngIf=\"loginForm.get('password').touched && loginForm.get('password').hasError('required')\">\r\n            Password is required!\r\n        </mat-error>\r\n        <mat-card-actions class=\"loginActions\">\r\n            <button mat-button [disabled]=\"loginForm.invalid\">SIGN IN</button>\r\n            <button mat-button>SIGN UP</button>\r\n        </mat-card-actions>\r\n    </form>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginForm {\n  width: 100%; }\n\n.loginFormField {\n  width: 100%; }\n\n.loginCard {\n  margin: 0px auto;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin-top: 10%;\n  margin-left: 15%;\n  background: white !important;\n  color: black !important; }\n\n.loginActions {\n  margin-bottom: -15px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_formBuilder, _router, _auth, _snackBarService) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._auth = _auth;
        this._snackBarService = _snackBarService;
        if (this._auth.isLoggedIn()) {
            this._router.navigate(['/dashboard']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this._formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var loginObj = {
            username: this.username,
            password: this.password
        };
        this._auth.login(loginObj).subscribe(function (res) {
        }, function (err) {
            _this._snackBarService.openSnackBar('Error', 'Wrong username or password!');
        }, function () {
            localStorage.setItem('username', loginObj.username);
            _this._router.navigate(['/dashboard']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/one-project/one-project.component.html":
/*!********************************************************!*\
  !*** ./src/app/one-project/one-project.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-stretch-tabs class=\"mat-elevation-z4\">\r\n    <mat-tab label=\"Project Overview\">\r\n        <ng-template matTabContent>\r\n            <app-project-overview></app-project-overview>\r\n        </ng-template>\r\n    </mat-tab>\r\n    <mat-tab label=\"Data\">\r\n        <ng-template matTabContent>\r\n            <app-data-tab></app-data-tab>\r\n        </ng-template>\r\n    </mat-tab>\r\n    <mat-tab label=\"Analyze\">\r\n        <ng-template matTabContent>\r\n            <app-analyze></app-analyze>\r\n        </ng-template>\r\n    </mat-tab>\r\n    <mat-tab label=\"Question\">\r\n        <ng-template matTabContent>\r\n            <h1>Question</h1>\r\n            <p>...</p>\r\n        </ng-template>\r\n    </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/one-project/one-project.component.scss":
/*!********************************************************!*\
  !*** ./src/app/one-project/one-project.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/one-project/one-project.component.ts":
/*!******************************************************!*\
  !*** ./src/app/one-project/one-project.component.ts ***!
  \******************************************************/
/*! exports provided: OneProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneProjectComponent", function() { return OneProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OneProjectComponent = /** @class */ (function () {
    function OneProjectComponent() {
    }
    OneProjectComponent.prototype.ngOnInit = function () {
    };
    OneProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-one-project',
            template: __webpack_require__(/*! ./one-project.component.html */ "./src/app/one-project/one-project.component.html"),
            styles: [__webpack_require__(/*! ./one-project.component.scss */ "./src/app/one-project/one-project.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OneProjectComponent);
    return OneProjectComponent;
}());



/***/ }),

/***/ "./src/app/project-overview/project-overview.component.html":
/*!******************************************************************!*\
  !*** ./src/app/project-overview/project-overview.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"projectOverview\">\r\n  <h1>Project overview</h1>\r\n  <mat-dialog-content *ngIf=\"project\">\r\n    <h4 class=\"subtitle\">Project details for project ID: {{project.id}}</h4>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Project name\" [(ngModel)]=\"project.projectName\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Project description\" [(ngModel)]=\"project.description\" autocomplete=\"off\"></textarea>\r\n    </mat-form-field>\r\n    <div>Created: {{project.creationDate | date}}</div>\r\n    <div>Last opened: {{project.lastOpened | date}}</div>\r\n    <div>Projects status: {{project.status}}</div>\r\n    <mat-dialog-actions class=\"buttonsFirst\">\r\n      <button type=\"submit\" color=\"primary\" mat-raised-button>Save</button>\r\n    </mat-dialog-actions>\r\n  </mat-dialog-content>\r\n  <mat-divider></mat-divider>\r\n  <!-- Select dataset -->\r\n  <mat-dialog-content>\r\n    <h4 class=\"subtitle\">Dataset details</h4>\r\n\r\n    <!-- za selektovanje dataseta -  nije zavrseno -->\r\n    <mat-form-field>\r\n      <mat-select (selectionChange)=\"selectedDataset($event)\" placeholder=\"Select dataset\">\r\n        <mat-option *ngFor=\"let data of dataset; let i = index\" [value]=\"data\">{{data.name}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <div *ngIf=\"details && showDetails\">\r\n      <div class=\"details-item\">\r\n        <strong>Description: </strong>\r\n        {{details.datasetDesc}}\r\n      </div>\r\n      <div class=\"details-item\">\r\n        <strong>Dataset size: </strong>\r\n        {{details.datasetSize}} KB\r\n      </div>\r\n      <div class=\"details-item\">\r\n        <strong>Number of rows: </strong>\r\n        {{details.numberOfRows}}\r\n      </div>\r\n      <div class=\"details-item\">\r\n        <strong>Number of variables: </strong>\r\n        {{details.numberOfVariables}}\r\n      </div>\r\n      <br>\r\n      <div class=\"details-item\">\r\n        <div>\r\n          <strong>Variable details: </strong>\r\n        </div>\r\n        <div *ngFor=\"let item of  details.variableDetails; let i = index\">\r\n          <span>{{i+1}}. </span>\r\n          <span>\r\n            <strong>Name:</strong> {{item.variableName}} | </span>\r\n          <span>\r\n            <strong>Varience:</strong> {{item.varience}} | </span>\r\n          <span>\r\n            <strong>Min:</strong> {{item.min}} | </span>\r\n          <span>\r\n            <strong>Max:</strong> {{item.max}} | </span>\r\n          <span>\r\n            <strong>Distinct Count:</strong> {{item.distinctCount}} | </span>\r\n          <span>\r\n            <strong>Average:</strong> {{item.average}} </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <mat-dialog-actions class=\"buttons\">\r\n      <button class=\"link-btn\" [disabled]=\"!linkDatasetBool\" type=\"submit\" color=\"primary\" mat-stroked-button (click)=\"linkDataset()\">Link Dataset</button>\r\n    </mat-dialog-actions>\r\n  </mat-dialog-content>\r\n\r\n  <mat-divider></mat-divider>\r\n  <!-- Projects Properties -->\r\n  <h4 class=\"subtitle\">Project properties</h4>\r\n  <div class=\"cards\">\r\n    <mat-card *ngIf=\"algorithms\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Algorithms</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-divider></mat-divider>\r\n      <mat-card-content *ngFor=\"let algorithm of algorithms\">\r\n        <span>\r\n          <strong>Algorithm Name:</strong> {{algorithm.algorithmName}}</span>\r\n        <br>\r\n        <span>\r\n          <strong>Algorithm Description:</strong> {{algorithm.description}}</span>\r\n        <br>\r\n        <span>\r\n          <strong>Algorithm Library:</strong> {{algorithm.library}}</span>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Questions</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <p>\r\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes\r\n          very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\r\n        </p>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/project-overview/project-overview.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/project-overview/project-overview.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\n#projectOverview {\n  margin: 5% 15%; }\n\n#projectOverview mat-dialog-content {\n    display: flex;\n    flex-direction: column; }\n\n#projectOverview .buttons button {\n    float: right; }\n\n#projectOverview .buttonsFirst button {\n    float: right; }\n\n#projectOverview .cards {\n    margin-top: 50px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center; }\n\n#projectOverview mat-card {\n    margin: 10px; }\n\n#projectOverview mat-card-content {\n    margin-top: 10px; }\n\n#projectOverview mat-divider {\n    margin: 10px 0; }\n\n#projectOverview h4 {\n    color: #311B92; }\n\n#projectOverview .link-btn {\n    margin: 40px 0; }\n"

/***/ }),

/***/ "./src/app/project-overview/project-overview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/project-overview/project-overview.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectOverviewComponent", function() { return ProjectOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_overview_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.overview.service */ "./src/app/project-overview/project.overview.service.ts");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectOverviewComponent = /** @class */ (function () {
    function ProjectOverviewComponent(projectOverviewService, snackbar, sharedService) {
        this.projectOverviewService = projectOverviewService;
        this.snackbar = snackbar;
        this.sharedService = sharedService;
        this.selected = 'option2';
        this.showDetails = false;
        this.linkDatasetBool = false;
    }
    ProjectOverviewComponent.prototype.getAlorithmsProject = function () {
        var _this = this;
        this.projectOverviewService.getAlgorithms(this.projectId).subscribe(function (res) {
            _this.algorithms = res.data;
            console.log(_this.algorithms);
        }, function (err) { return console.log(err); });
    };
    ProjectOverviewComponent.prototype.getDataset = function () {
        var _this = this;
        this.projectOverviewService.getDataset().subscribe(function (res) {
            _this.dataset = res.data;
        }, function (err) { return console.log(err); });
    };
    ProjectOverviewComponent.prototype.selectedDataset = function (ev) {
        var _this = this;
        this.details = {};
        this.showDetails = false;
        this.selectedDatasetId = ev.value.id;
        this.projectOverviewService.getDatasetDetails(this.selectedDatasetId).subscribe(function (res) {
            _this.showDetails = true;
            _this.details = res.data;
            console.log(_this.details);
            _this.linkDatasetBool = true;
        }, function (err) {
            console.log(err);
            _this.linkDatasetBool = false;
            _this.snackbar.openSnackBar('Something went wrong.', 'Error');
        });
    };
    ProjectOverviewComponent.prototype.linkDataset = function () {
        this.sharedService.setDatasetId(this.selectedDatasetId);
        this.snackbar.openSnackBar('Dataset linked.', 'Success');
    };
    ProjectOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectId = this.sharedService.getProjectId();
        this.projectOverviewService.getProject(this.projectId).subscribe(function (res) {
            _this.project = res.data;
        });
        this.getDataset();
        this.getAlorithmsProject();
    };
    ProjectOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-overview',
            template: __webpack_require__(/*! ./project-overview.component.html */ "./src/app/project-overview/project-overview.component.html"),
            styles: [__webpack_require__(/*! ./project-overview.component.scss */ "./src/app/project-overview/project-overview.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_project_overview_service__WEBPACK_IMPORTED_MODULE_1__["ProjectOverviewService"], _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], ProjectOverviewComponent);
    return ProjectOverviewComponent;
}());



/***/ }),

/***/ "./src/app/project-overview/project.overview.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-overview/project.overview.service.ts ***!
  \**************************************************************/
/*! exports provided: ProjectOverviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectOverviewService", function() { return ProjectOverviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectOverviewService = /** @class */ (function () {
    function ProjectOverviewService(_http) {
        this._http = _http;
        this.baseUrl = '/CustomerProfiling/rest/';
    }
    ProjectOverviewService.prototype.getDataset = function () {
        return this._http.get(this.baseUrl + 'dataset');
    };
    ProjectOverviewService.prototype.getDatasetDetails = function (id) {
        return this._http.get(this.baseUrl + 'dataset/' + id);
    };
    ProjectOverviewService.prototype.getAlgorithms = function (id) {
        return this._http.get(this.baseUrl + 'algorithms/project/' + id);
    };
    ProjectOverviewService.prototype.getProject = function (id) {
        return this._http.get(this.baseUrl + 'projects/' + id);
    };
    ProjectOverviewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectOverviewService);
    return ProjectOverviewService;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"projects\">\r\n    <button mat-mini-fab color=\"primary\" matTooltip=\"Create Project\" matTooltipPosition=\"above\" (click)=\"openAddDialog()\">\r\n    <i class=\"material-icons\">add</i>\r\n  </button>\r\n    <table mat-table [dataSource]=\"projects\" class=\"mat-elevation-z8\">\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef> Id </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.projectName}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"creationDate\">\r\n            <th mat-header-cell *matHeaderCellDef> Creation Date </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.creationDate | date}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"lastOpened\">\r\n            <th mat-header-cell *matHeaderCellDef> Last Opened </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.lastOpened | date}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef> Status </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"description\">\r\n            <th mat-header-cell *matHeaderCellDef> Description </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n        </ng-container>\r\n        <!-- Actions -->\r\n        <ng-container matColumnDef=\"editing\">\r\n            <th mat-header-cell *matHeaderCellDef> Editing</th>\r\n            <td mat-cell *matCellDef=\"let element; let i = index\">\r\n                <span class=\"flex\">\r\n          <i matTooltip=\"Edit Project\" matTooltipPosition=\"above\" class=\"material-icons table-icons\" (click)=\"openEditDialog(element)\">\r\n            edit\r\n          </i>\r\n          <i matTooltip=\"Copy Project\" matTooltipPosition=\"above\" class=\"material-icons table-icons\" (click)=\"openCopyDialog(element, element.id)\">\r\n            file_copy\r\n          </i>\r\n          <i color=\"warn\" matTooltip=\"Delete Project\" matTooltipPosition=\"above\" class=\"material-icons table-icons\" (click)=\"openDeleteDialog(element.id)\">\r\n            delete\r\n          </i>\r\n          <i color=\"warn\" matTooltip=\"Open Project\" matTooltipPosition=\"above\" class=\"material-icons table-icons\" (click)=\"openProject(element.id)\">\r\n              open_in_new\r\n            </i>\r\n        </span>\r\n            </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <!-- <mat-paginator [length]=\"dataSource.length\" [pageSize]=\"10\" [pageSizeOptions]=\"[1,5, 10, 25, 100]\"></mat-paginator> -->\r\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n.column {\n  flex-direction: column; }\n\n.center {\n  align-items: center;\n  justify-content: center; }\n\n.space-around {\n  justify-content: space-around; }\n\n.space-between {\n  justify-content: space-between; }\n\n.wrap {\n  flex-wrap: wrap; }\n\n.align-items-center {\n  align-items: center; }\n\n.justify {\n  text-align: justify; }\n\n.subtitle {\n  color: #757575; }\n\n.warn-message {\n  color: #FF3D00;\n  margin-top: 30px;\n  font-size: 18px; }\n\n.navContainer {\n  width: 100%;\n  height: 89vh; }\n\n.sideContent {\n  width: 20%; }\n\n.mainContent {\n  width: 80%;\n  margin-left: 20% !important; }\n\nmat-nav-list a mat-icon {\n  padding-left: 25px; }\n\n.userDetail {\n  padding-left: 40px;\n  margin-bottom: 40px; }\n\n.logout {\n  margin-top: 45vh; }\n\n.header {\n  overflow: hidden;\n  background: linear-gradient(to right, #311B92, #7C4DFF);\n  padding: 20px 10px; }\n\n.header a {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px; }\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold; }\n\n.mat-nav-list a.active {\n  background: #EAFFD1; }\n\n.mat-nav-list a span {\n  padding-left: 12px; }\n\nmat-icon {\n  color: #311B92; }\n\n#projects {\n  margin: 5% 10%; }\n\n#projects table {\n    width: 100%; }\n\n#projects button {\n    margin-bottom: 2%; }\n\n#projects .flex i {\n    color: #311B92;\n    margin-right: 10px;\n    font-size: 18px; }\n\n#projects .flex i:hover {\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.service */ "./src/app/projects/projects.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_addProject_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/addProject/add.component */ "./src/app/dialogs/addProject/add.component.ts");
/* harmony import */ var _dialogs_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogs/edit-project/edit-project.component */ "./src/app/dialogs/edit-project/edit-project.component.ts");
/* harmony import */ var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialogs/delete/delete.component */ "./src/app/dialogs/delete/delete.component.ts");
/* harmony import */ var _dialogs_copyProject_copy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialogs/copyProject/copy.component */ "./src/app/dialogs/copyProject/copy.component.ts");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// dialogs






var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectsService, dialog, snackbar, _router, sharedService) {
        this.projectsService = projectsService;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this._router = _router;
        this.sharedService = sharedService;
        this.displayedColumns = ['id', 'name', 'creationDate', 'lastOpened', 'status', 'description', 'editing'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
    }
    Object.defineProperty(ProjectsComponent.prototype, "datasourcePaginator", {
        set: function (paginator) {
            this.paginator = paginator;
            this.dataSource.paginator = this.paginator;
        },
        enumerable: true,
        configurable: true
    });
    // Get Projects
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectsService.getProjects().subscribe(function (res) {
            console.log(res);
            _this.projects = res.data;
            console.log(_this.projects);
        }, function (err) { return console.log(err); });
    };
    ProjectsComponent.prototype.openProject = function (id) {
        this.sharedService.setProjectId(id);
        this._router.navigate(['/one-project']);
    };
    // open add dialog
    ProjectsComponent.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_addProject_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], {
            width: '800px'
        });
        dialogRef.afterClosed().subscribe(function (res) {
            _this.getProjects();
        });
    };
    // open edit dialog
    ProjectsComponent.prototype.openEditDialog = function (obj) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_5__["EditProjectComponent"], {
            width: '800px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(function (res) {
            _this.getProjects();
            console.log(res);
            console.log('uspesno');
        });
    };
    ProjectsComponent.prototype.openCopyDialog = function (obj) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_copyProject_copy_component__WEBPACK_IMPORTED_MODULE_7__["CopyComponent"], {
            width: '800px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(function (res) {
            _this.getProjects();
        });
    };
    // open delete dialog
    ProjectsComponent.prototype.openDeleteDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_6__["DeleteComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === true) {
                _this.projectsService.deleteProject(id).subscribe(function (res) {
                    _this.snackbar.openSnackBar(res['data'], 'Successful');
                    _this.getProjects();
                }, function (err) {
                    _this.snackbar.openSnackBar(res['error']['message'], 'Error');
                });
            }
        });
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('projectID');
        this.getProjects();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]])
    ], ProjectsComponent.prototype, "datasourcePaginator", null);
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__["SnackBarService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/projects/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsService = /** @class */ (function () {
    function ProjectsService(_http) {
        this._http = _http;
        this.baseUrl = '/CustomerProfiling/rest/';
    }
    ProjectsService.prototype.getProjects = function () {
        return this._http.get(this.baseUrl + 'projects');
    };
    ProjectsService.prototype.deleteProject = function (id) {
        return this._http.delete(this.baseUrl + 'projects/' + id);
    };
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this._auth.isLoggedIn()) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/modules/material.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/modules/material.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"]
            ],
            declarations: [],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"], useValue: [] }, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    AuthService.prototype.login = function (data) {
        return this._http.post('authentication', data);
    };
    AuthService.prototype.logout = function () {
        return this._http.post('logout', {});
    };
    AuthService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('username') != null) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/shared.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/shared.service.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    // PROJECT ID
    SharedService.prototype.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
    SharedService.prototype.getProjectId = function () {
        return this.projectId;
    };
    // DATASET ID
    SharedService.prototype.setDatasetId = function (id) {
        this.datasetId = id;
    };
    SharedService.prototype.getDatasetId = function () {
        return this.datasetId;
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/shared/services/snackbar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/snackbar.service.ts ***!
  \*****************************************************/
/*! exports provided: SnackBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarService", function() { return SnackBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackBarService = /** @class */ (function () {
    function SnackBarService(snackBar) {
        this.snackBar = snackBar;
    }
    SnackBarService.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackBarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackBarService);
    return SnackBarService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\CustomerProfiling\src\main\webapp\CustomerProfiling\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map