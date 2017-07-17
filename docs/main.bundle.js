webpackJsonp([1,4],{

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 129;


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_index__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(148);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_index__["a" /* CarouselModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.imageSources = [
            'http://www.violinshoptampa.com/Violin%20Shop%20Tampa-15.jpg',
            'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
            'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
            'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg'
        ];
        // example config
        this.config = {
            verifyBeforeLoad: true,
            log: true,
            animation: true,
            animationType: __WEBPACK_IMPORTED_MODULE_1__services__["d" /* AnimationConfig */].SLIDE,
            autoplay: true,
            autoplayDelay: 2000,
            stopAutoplayMinWidth: 768
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(305),
        styles: [__webpack_require__(300)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselArrowsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselArrowsComponent = (function () {
    function CarouselArrowsComponent() {
        this.DISABLE_ELEMENT_TIME = 750;
        this.changeSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    CarouselArrowsComponent.prototype.onChangeSlide = function (direction) {
        this.changeSlide.emit(direction);
    };
    CarouselArrowsComponent.prototype.disableNavButtons = function () {
        var _this = this;
        this.disableElement = true;
        setTimeout(function () { return _this.disableElement = false; }, this.DISABLE_ELEMENT_TIME);
    };
    return CarouselArrowsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], CarouselArrowsComponent.prototype, "changeSlide", void 0);
CarouselArrowsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'carousel-arrows',
        template: __webpack_require__(306),
        styles: [__webpack_require__(301)]
    }),
    __metadata("design:paramtypes", [])
], CarouselArrowsComponent);

var _a;
//# sourceMappingURL=arrows.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeWhile__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pins__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__arrows__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CarouselComponent = (function () {
    function CarouselComponent(carouselService, windowWidthService) {
        this.carouselService = carouselService;
        this.windowWidthService = windowWidthService;
        this.currentSlide = 0;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryLength = this.sources.length;
        var _a = this.sources, showImmediate = _a[0], showWhenLoad = _a.slice(1);
        this.loadedImages = this.config.verifyBeforeLoad ? [showImmediate] : this.sources;
        if (this.galleryLength < 2) {
            return;
        }
        this.carouselService.init(showWhenLoad, this.config);
        this.carouselService.onImageLoad()
            .takeWhile(function () { return !!_this.galleryLength; })
            .subscribe(function (image) { return _this.loadedImages.push(image); });
        if (this.config.autoplay) {
            this.config.autoplayDelay = this.config.autoplayDelay < 1000 ? 1000 : this.config.autoplayDelay;
            var minWidth = this.config.stopAutoplayMinWidth;
            this.windowWidthService.onResize(minWidth, true)
                .takeWhile(function () { return !!_this.galleryLength; })
                .subscribe(function (isMinWidth) {
                _this.preventAutoplay = !isMinWidth;
                _this.onHandleAutoplay(!_this.config.autoplay);
            });
        }
    };
    CarouselComponent.prototype.onChangeSlide = function (direction) {
        if (direction === 'prev') {
            this.currentSlide = this.currentSlide === 0 ? this.loadedImages.length - 1 : --this.currentSlide;
        }
        else {
            this.currentSlide = this.currentSlide === this.loadedImages.length - 1 ? 0 : ++this.currentSlide;
        }
        this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
        this.disableCarouselNavBtns();
    };
    CarouselComponent.prototype.onChangeSlideIndex = function (index) {
        if (index === this.currentSlide) {
            return;
        }
        var direction = index > this.currentSlide ? 'next' : 'prev';
        this.currentSlide = index;
        this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
        this.disableCarouselNavBtns();
    };
    CarouselComponent.prototype.onHandleAutoplay = function (stopAutoplay) {
        if (stopAutoplay || this.preventAutoplay) {
            clearInterval(this.autoplayIntervalId);
            return;
        }
        this.startAutoplay(this.config.autoplayDelay);
    };
    CarouselComponent.prototype.startAutoplay = function (delay) {
        var _this = this;
        this.autoplayIntervalId = setInterval(function () {
            _this.onChangeSlide('next');
            _this.pinsComponent.disableNavButtons();
            _this.carouselArrowsComponent.disableNavButtons();
        }, delay);
    };
    CarouselComponent.prototype.disableCarouselNavBtns = function () {
        if (!this.config.animation) {
            return;
        }
        this.carouselArrowsComponent.disableNavButtons();
        this.pinsComponent.disableNavButtons();
    };
    CarouselComponent.prototype.ngOnDestroy = function () {
        if (this.autoplayIntervalId) {
            clearInterval(this.autoplayIntervalId);
        }
    };
    return CarouselComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], CarouselComponent.prototype, "sources", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ICarouselConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ICarouselConfig */]) === "function" && _a || Object)
], CarouselComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* CarouselHandlerDirective */]; })),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* CarouselHandlerDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* CarouselHandlerDirective */]) === "function" && _b || Object)
], CarouselComponent.prototype, "carouselHandlerDirective", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__arrows__["a" /* CarouselArrowsComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__arrows__["a" /* CarouselArrowsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__arrows__["a" /* CarouselArrowsComponent */]) === "function" && _c || Object)
], CarouselComponent.prototype, "carouselArrowsComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__pins__["a" /* PinsComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__pins__["a" /* PinsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pins__["a" /* PinsComponent */]) === "function" && _d || Object)
], CarouselComponent.prototype, "pinsComponent", void 0);
CarouselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'carousel',
        template: __webpack_require__(307),
        styles: [__webpack_require__(302)]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* CarouselService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* CarouselService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* WindowWidthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* WindowWidthService */]) === "function" && _f || Object])
], CarouselComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrows__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pins__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__slide__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__carousel_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__arrows__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__pins__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PinsComponent = (function () {
    function PinsComponent() {
        this.DISABLE_ELEMENT_TIME = 750;
        this.changeSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    PinsComponent.prototype.onChangeSlide = function (slideIndex) {
        this.changeSlide.emit(slideIndex);
    };
    PinsComponent.prototype.disableNavButtons = function () {
        var _this = this;
        this.disableElement = true;
        setTimeout(function () { return _this.disableElement = false; }, this.DISABLE_ELEMENT_TIME);
    };
    return PinsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], PinsComponent.prototype, "images", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], PinsComponent.prototype, "currentSlide", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], PinsComponent.prototype, "changeSlide", void 0);
PinsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'carousel-pins',
        template: __webpack_require__(308),
        styles: [__webpack_require__(303)]
    }),
    __metadata("design:paramtypes", [])
], PinsComponent);

var _a;
//# sourceMappingURL=pins.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_component__ = __webpack_require__(141);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__slide_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlideComponent = (function () {
    function SlideComponent() {
    }
    return SlideComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], SlideComponent.prototype, "src", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], SlideComponent.prototype, "slideNo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], SlideComponent.prototype, "isHidden", void 0);
SlideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'carousel-slide',
        template: __webpack_require__(309),
        styles: [__webpack_require__(304)]
    }),
    __metadata("design:paramtypes", [])
], SlideComponent);

//# sourceMappingURL=slide.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel__["d"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselHandlerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselHandlerDirective = (function () {
    function CarouselHandlerDirective(el, carouselService) {
        this.el = el;
        this.carouselService = carouselService;
        this.handleAutoplay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.currentSlide = 0;
    }
    CarouselHandlerDirective.prototype.setNewSlide = function (newSlide, direction) {
        var currentSlide = this.el.nativeElement.querySelector("[data-slide=\"" + this.currentSlide + "\"]");
        var nextSlide = this.el.nativeElement.querySelector("[data-slide=\"" + newSlide + "\"]");
        this.animate(currentSlide, nextSlide, direction);
        this.currentSlide = newSlide;
    };
    CarouselHandlerDirective.prototype.animate = function (currentSlide, nextSlide, direction) {
        if (!this.config.animation) {
            this.toggleClass('slide--hidden-initial', currentSlide, nextSlide);
            return;
        }
        var animationType = this.config.animationType;
        currentSlide.className = nextSlide.className = 'slide';
        this.toggleClass("slide--hidden-" + animationType + "-" + direction, currentSlide);
        this.toggleClass("slide--show-" + animationType + "-" + direction, nextSlide);
    };
    CarouselHandlerDirective.prototype.toggleClass = function (className) {
        var elements = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            elements[_i - 1] = arguments[_i];
        }
        elements.forEach(function (element) {
            element.classList.toggle(className);
        });
    };
    CarouselHandlerDirective.prototype.ngOnInit = function () {
        this.config = this.carouselService.getConfig();
        if (this.config.autoplay) {
            this.autoplayHandler();
        }
    };
    CarouselHandlerDirective.prototype.autoplayHandler = function () {
        var _this = this;
        this.el.nativeElement.addEventListener('mouseenter', function () {
            _this.handleAutoplay.emit(true);
        });
        this.el.nativeElement.addEventListener('mouseleave', function () {
            _this.handleAutoplay.emit(false);
        });
        document.addEventListener('visibilitychange', function () {
            _this.handleAutoplay.emit(document.hidden);
        });
    };
    return CarouselHandlerDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], CarouselHandlerDirective.prototype, "handleAutoplay", void 0);
CarouselHandlerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[appCarouselHandler]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* CarouselService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* CarouselService */]) === "function" && _c || Object])
], CarouselHandlerDirective);

var _a, _b, _c;
//# sourceMappingURL=carouselHandler.directive.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();


var CarouselModule = (function () {
    function CarouselModule() {
    }
    return CarouselModule;
}());
CarouselModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__components__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components__["b" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components__["c" /* SlideComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components__["d" /* CarouselArrowsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components__["e" /* PinsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* CarouselHandlerDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__components__["b" /* CarouselComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services__["a" /* CarouselService */], __WEBPACK_IMPORTED_MODULE_3__services__["b" /* WindowWidthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__components__["a" /* AppComponent */]]
    })
], CarouselModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselService = (function () {
    function CarouselService() {
        this.imageLoadedCount = 0;
    }
    CarouselService.prototype.init = function (imageSources, config) {
        this.imageLoadedCount = 0;
        this.imageLoad = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        config.autoplayDelay = config.autoplayDelay < 1000 ? 1000 : config.autoplayDelay;
        this.config = config;
        if (!this.config.verifyBeforeLoad) {
            return;
        }
        this.loadImages(imageSources);
    };
    CarouselService.prototype.onImageLoad = function () {
        return this.imageLoad.asObservable();
    };
    CarouselService.prototype.getConfig = function () {
        return Object.assign({}, this.config);
    };
    CarouselService.prototype.loadImages = function (imageSources) {
        var _this = this;
        var createImageElement = function (image) {
            var imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.onload = _this.onImageElementLoad.bind(_this, imageSources, image);
            imgElement.onerror = _this.onImageElementLoadError.bind(_this, imageSources, image);
        };
        imageSources.forEach(createImageElement);
    };
    CarouselService.prototype.onImageElementLoad = function (imageSources, image) {
        this.imageLoadedCount++;
        this.imageLoad.next(image);
        this.carouselTinyLogger(image, true);
        this.emitIfAllImagesLoaded(imageSources);
    };
    CarouselService.prototype.onImageElementLoadError = function (imageSources, image) {
        imageSources.splice(imageSources.indexOf(image), 1);
        this.carouselTinyLogger(image, false);
        this.emitIfAllImagesLoaded(imageSources);
    };
    CarouselService.prototype.emitIfAllImagesLoaded = function (imageSources) {
        if (this.imageLoadedCount === imageSources.length) {
            this.imageLoad.complete();
        }
    };
    CarouselService.prototype.carouselTinyLogger = function (image, isLoaded) {
        if (!this.config.log) {
            return;
        }
        if (isLoaded) {
            console.log("Carousel module: image loaded: " + image);
            return;
        }
        console.error("Carousel module: image load error: " + image);
    };
    return CarouselService;
}());
CarouselService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CarouselService);

//# sourceMappingURL=carousel.service.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnimationConfig; });
var AnimationConfig;
(function (AnimationConfig) {
    AnimationConfig[AnimationConfig["APPEAR"] = 0] = "APPEAR";
    AnimationConfig[AnimationConfig["SLIDE_OVERLAP"] = 1] = "SLIDE_OVERLAP";
    AnimationConfig[AnimationConfig["SLIDE"] = 2] = "SLIDE";
})(AnimationConfig || (AnimationConfig = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowWidthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WindowWidthService = (function () {
    function WindowWidthService() {
    }
    WindowWidthService.prototype.onResize = function (minWidthBreakpoint, scrollBar) {
        this.minWidthBreakpoint = minWidthBreakpoint;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'resize')
            .map(this.assertSize.bind(this, scrollBar))
            .startWith(this.assertSize(scrollBar))
            .distinctUntilChanged();
    };
    ;
    WindowWidthService.prototype.assertSize = function (scrollBar) {
        var area = scrollBar ? window.innerWidth : document.documentElement.clientWidth;
        return this.minWidthBreakpoint <= area;
    };
    return WindowWidthService;
}());
WindowWidthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], WindowWidthService);

//# sourceMappingURL=window-width.service.js.map

/***/ }),

/***/ 148:
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

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n  width: 80%;\n  margin: 0 auto;\n  height: 400px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".carousel-nav__clickable-area {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 50px; }\n  .carousel-nav__clickable-area:hover {\n    cursor: pointer; }\n  .carousel-nav__clickable-area--left {\n    right: auto;\n    left: 0; }\n    .carousel-nav__clickable-area--left:hover .carousel-nav__btn--left {\n      color: rgba(255, 255, 255, 0.8); }\n  .carousel-nav__clickable-area--right {\n    left: auto;\n    right: 0; }\n    .carousel-nav__clickable-area--right:hover .carousel-nav__btn--right {\n      color: rgba(255, 255, 255, 0.8); }\n\n.carousel-nav__btn {\n  position: absolute;\n  top: 50%;\n  font-size: 46px;\n  -webkit-transform: scaleX(0.8) translateY(-50%);\n          transform: scaleX(0.8) translateY(-50%);\n  text-shadow: rgba(0, 0, 0, 0.8) 0 0 7px;\n  color: rgba(255, 255, 255, 0.6);\n  cursor: pointer; }\n  .carousel-nav__btn:hover {\n    color: rgba(255, 255, 255, 0.8); }\n  .carousel-nav__btn--left {\n    left: 15px; }\n  .carousel-nav__btn--right {\n    right: 15px; }\n  .carousel-nav__btn--disabled {\n    pointer-events: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".carousel-wrapper {\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".carousel-nav-list {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 5%;\n  margin: 0;\n  text-align: center; }\n  .carousel-nav-list__item {\n    display: inline-block;\n    margin: 0 6px;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    background-color: #ffffff;\n    cursor: pointer;\n    opacity: 0.6; }\n    .carousel-nav-list__item:hover {\n      opacity: 0.9; }\n    .carousel-nav-list__item--active {\n      opacity: 0.9; }\n  .carousel-nav-list__item--current {\n    background-color: #e55342;\n    opacity: 1; }\n  .carousel-nav-list__item--disabled {\n    pointer-events: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".slide {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  min-height: 400px;\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1); }\n  .slide--hidden-initial {\n    display: none; }\n  .slide--hidden-1-next {\n    left: -100%;\n    transition: left 0.7s linear; }\n  .slide--hidden-1-prev {\n    left: 100%;\n    transition: left 0.7s linear; }\n\n@-webkit-keyframes next {\n  0% {\n    left: 99%; }\n  100% {\n    left: 0; } }\n\n@keyframes next {\n  0% {\n    left: 99%; }\n  100% {\n    left: 0; } }\n\n@-webkit-keyframes prev {\n  0% {\n    left: -99%; }\n  100% {\n    left: 0; } }\n\n@keyframes prev {\n  0% {\n    left: -99%; }\n  100% {\n    left: 0; } }\n  .slide--show-1-next {\n    -webkit-animation: next 0.7s 1 ease-out;\n            animation: next 0.7s 1 ease-out; }\n  .slide--show-1-prev {\n    -webkit-animation: prev 0.7s 1 ease-out;\n            animation: prev 0.7s 1 ease-out; }\n  .slide--hidden-2-next {\n    left: -100%;\n    transition: left 0.7s ease-out; }\n  .slide--hidden-2-prev {\n    left: 100%;\n    transition: left 0.7s ease-out; }\n\n@-webkit-keyframes next-overlap {\n  0% {\n    left: 99%; }\n  100% {\n    left: 0; } }\n\n@keyframes next-overlap {\n  0% {\n    left: 99%; }\n  100% {\n    left: 0; } }\n\n@-webkit-keyframes prev-overlap {\n  0% {\n    left: -99%; }\n  100% {\n    left: 0; } }\n\n@keyframes prev-overlap {\n  0% {\n    left: -99%; }\n  100% {\n    left: 0; } }\n  .slide--show-2-next {\n    -webkit-animation: next-overlap 0.7s 1 ease-out;\n            animation: next-overlap 0.7s 1 ease-out; }\n  .slide--show-2-prev {\n    -webkit-animation: prev-overlap 0.7s 1 ease-out;\n            animation: prev-overlap 0.7s 1 ease-out; }\n  .slide--hidden-0-next {\n    transition: opacity 0.7s ease-in;\n    opacity: 0; }\n  .slide--hidden-0-prev {\n    transition: opacity 0.7s ease-in;\n    opacity: 0; }\n\n@-webkit-keyframes next-appear {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes next-appear {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes prev-appear {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes prev-appear {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  .slide--show-0-next {\n    -webkit-animation: next-appear 0.7s 1 ease-out;\n            animation: next-appear 0.7s 1 ease-out; }\n  .slide--show-0-prev {\n    -webkit-animation: prev-appear 0.7s 1 ease-out;\n            animation: prev-appear 0.7s 1 ease-out; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <carousel [sources]=\"imageSources\" [config]=\"config\"></carousel>\r\n</div>\r\n"

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-nav\">\r\n  <div (click)=\"onChangeSlide('prev')\"\r\n       [class.carousel-nav__btn--disabled]=\"disableElement\">\r\n    <div class=\"carousel-nav__clickable-area carousel-nav__clickable-area--left\">\r\n      <i class=\"fa fa-angle-left carousel-nav__btn carousel-nav__btn--left\" aria-hidden=\"true\"></i>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"onChangeSlide('next')\"\r\n       [class.carousel-nav__btn--disabled]=\"disableElement\">\r\n    <div class=\"carousel-nav__clickable-area carousel-nav__clickable-area--right\">\r\n      <i class=\"fa fa-angle-right carousel-nav__btn carousel-nav__btn--right\" aria-hidden=\"true\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-wrapper\" appCarouselHandler (handleAutoplay)=\"onHandleAutoplay($event)\">\r\n  <carousel-slide\r\n       *ngFor=\"let img of loadedImages; let i = index\"\r\n       [src]=\"img\"\r\n       [slideNo]=\"i\"\r\n       [isHidden]=\"i !== 0\">\r\n  </carousel-slide>\r\n\r\n  <carousel-pins\r\n    *ngIf=\"galleryLength > 1\"\r\n    [images]=\"loadedImages\"\r\n    [currentSlide]=\"currentSlide\"\r\n    (changeSlide)=\"onChangeSlideIndex($event);\">\r\n  </carousel-pins>\r\n\r\n  <carousel-arrows\r\n    *ngIf=\"galleryLength > 1\"\r\n    (changeSlide)=\"onChangeSlide($event);\"></carousel-arrows>\r\n</div>\r\n"

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = "<ul class=\"carousel-nav-list\">\r\n  <li class=\"carousel-nav-list__item\"\r\n      *ngFor=\"let counter of images; let i = index\"\r\n      (click)=\"onChangeSlide(i)\"\r\n      [class.carousel-nav-list__item--current]=\"currentSlide === i\"\r\n      [class.carousel-nav-list__item--disabled]=\"disableElement\">\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ 309:
/***/ (function(module, exports) {

module.exports = "<img class=\"slide\" [src]=\"src\"\r\n     [class.slide--hidden-initial]=\"isHidden\"\r\n     [attr.data-slide]=\"slideNo\">\r\n"

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window_width_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__declarations__ = __webpack_require__(146);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__carousel_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__declarations__["ICarouselConfig"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__declarations__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__window_width_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrows_component__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__arrows_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pins_component__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pins_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carouselHandler_directive__ = __webpack_require__(143);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__carouselHandler_directive__["a"]; });


//# sourceMappingURL=index.js.map

/***/ })

},[340]);
//# sourceMappingURL=main.bundle.js.map