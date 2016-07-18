"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import Component and Input delegator from the Angular Core Library.
// Import OnInit and OnDestroy interfaces since HeroService has been included. 
var core_1 = require('@angular/core');
// This is for showing a hero detail component from the id params
var router_1 = require('@angular/router');
// Get the Hero Model to call attributes
var hero_1 = require('./hero');
// Import Hero Service so we can fetch a specific hero.
var hero_service_1 = require('./hero.service');
// Add meta data to the Component Decorator
var HeroDetailComponent = (function () {
    // Build the private heroService and route to the HeroDetailComponent
    function HeroDetailComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    // Runs OnInit
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // The subscribe method will deliver our array of route parameters
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                // The javasctipy + operator transforms a string to an integer
                // let is similar to var, but with better scoping
                var id = +params['id'];
                _this.navigated = true;
                _this.heroService.getHero(id)
                    .then(function (hero) { return _this.hero = hero; });
            }
            else {
                _this.navigated = false;
                _this.hero = new hero_1.Hero(); // The hero-detail.component.html requires an instance of Hero to be shown to the page. 
            }
        });
    };
    HeroDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService
            .save(this.hero)
            .then(function (hero) {
            _this.hero = hero; // saved hero, w/ id if new
            _this.goBack(hero);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    // Navigates backwards one step.
    HeroDetailComponent.prototype.goBack = function (savedHero) {
        if (savedHero === void 0) { savedHero = null; }
        this.close.emit(savedHero);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroDetailComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeroDetailComponent.prototype, "close", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            templateUrl: 'app/html/hero-detail.component.html',
            styleUrls: ['app/css/hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent; // End
