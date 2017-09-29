webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <img width=\"100\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<!-- <yo-name first=\"Stencil\" last=\"JS\"></yo-name> -->\n\n\n<h3><i>Form with Stencil Form Inputs</i></h3>\n<form [formGroup]=\"heroForm\" novalidate>\n    <ng-template ngFor let-field [ngForOf]=\"fields\">\n      <app-custom-input [label]=\"field.label\" [type]=\"field.type\" [formControl]=\"getControl(field.controlName)\"></app-custom-input>\n    </ng-template>\n</form>\n\n<h3><i>Form Infos</i></h3>\n<p>Form value: {{ heroForm.value | json }}</p>\n<p>Form status: {{ heroForm.status | json }}</p>\n\n\n<!-- <input [value]='name' (input)=\"name=$event\"> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_model__ = __webpack_require__("../../../../../src/app/data-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(fb, cd) {
        this.fb = fb;
        this.cd = cd;
        this.title = 'app';
        this.fieldControls = {};
        this.fields = [
            { label: 'name', type: 'text', controlName: 'name' },
            { label: 'Street', type: 'text', controlName: 'street' },
            { label: 'City', type: 'text', controlName: 'city' },
            { label: 'State', type: 'select', controlName: 'state' },
            { label: 'Zip', type: 'number', controlName: 'zip' }
        ];
        this.createForm();
    }
    AppComponent.prototype.createForm = function () {
        var _this = this;
        this.fields.forEach(function (f) {
            _this.fieldControls[f.controlName] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        });
        this.heroForm = this.fb.group(this.fieldControls);
        this.fieldControls.name.setValue(__WEBPACK_IMPORTED_MODULE_2__data_model__["a" /* heroes */][0].name);
        this.cd.markForCheck();
    };
    AppComponent.prototype.getControl = function (controlName) {
        return this.fieldControls[controlName];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_input_custom_input_component__ = __webpack_require__("../../../../../src/app/custom-input/custom-input.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__custom_input_custom_input_component__["a" /* CustomInputComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/custom-input/custom-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/custom-input/custom-input.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-group\" [ngSwitch]=\"type\">\n  <label class=\"center-block\">{{label}}: \n    <ng-template ngSwitchCase=\"select\">\n          <select class=\"form-control\">\n            <option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</option>\n          </select>\n    </ng-template>  \n    <ng-template ngSwitchDefault>\n      <form-input-base [value]=\"value\" (valueChange)=\"onValueChange($event)\"></form-input-base>\n    </ng-template>  \n  </label>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/custom-input/custom-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CUSTOM_INPUT_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CUSTOM_INPUT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return CustomInputComponent; }),
    multi: true
};
var noop = function () { };
var CustomInputComponent = (function () {
    function CustomInputComponent(cd) {
        this.cd = cd;
        /** Callback registered via registerOnTouched (ControlValueAccessor) */
        this._onTouchedCallback = noop;
        /** Callback registered via registerOnChange (ControlValueAccessor) */
        this._onChangeCallback = noop;
        /** @internal */
        this._value = '';
    }
    Object.defineProperty(CustomInputComponent.prototype, "value", {
        /** @internal */
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this._onChangeCallback(v);
                this.cd.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    CustomInputComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    CustomInputComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    CustomInputComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    CustomInputComponent.prototype.onValueChange = function (ev) {
        this.value = ev.target.value;
    };
    return CustomInputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CustomInputComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CustomInputComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CustomInputComponent.prototype, "value", null);
CustomInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-custom-input',
        template: __webpack_require__("../../../../../src/app/custom-input/custom-input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/custom-input/custom-input.component.css")],
        providers: [CUSTOM_INPUT_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _a || Object])
], CustomInputComponent);

var _a;
//# sourceMappingURL=custom-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/data-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Hero */
/* unused harmony export Address */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return heroes; });
/* unused harmony export states */
var Hero = (function () {
    function Hero() {
        this.id = 0;
        this.name = '';
    }
    return Hero;
}());

var Address = (function () {
    function Address() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    return Address;
}());

var heroes = [
    {
        id: 1,
        name: 'Whirlwind',
        addresses: [
            { street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801' },
            { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226' },
        ]
    },
    {
        id: 2,
        name: 'Bombastic',
        addresses: [
            { street: '789 Elm', city: 'Smallville', state: 'OH', zip: '04501' },
        ]
    },
    {
        id: 3,
        name: 'Magneta',
        addresses: []
    },
];
var states = ['CA', 'MD', 'OH', 'VA'];
//# sourceMappingURL=data-model.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map