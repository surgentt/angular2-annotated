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
// Import Hero Service so we can fetch a specific hero.
var hero_service_1 = require('./hero.service');
// Add meta data to the Component Constructor
var HeroDetailComponent = (function () {
    // Build the private heroService and route to the HeroDetailComponent
    function HeroDetailComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
    }
    // Runs on init
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // The subscribe method will deliver our array of route parameters
        this.sub = this.route.params.subscribe(function (params) {
            // The javasctipy + operator transforms a string to an integer
            // let is similar to var, but with better scoping
            var id = +params['id'];
            _this.heroService.getHero(id)
                .then(function (hero) { return _this.hero = hero; });
        });
    };
    HeroDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    // Navigates backwards one step.
    HeroDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            // Define the name the tag <my-hero-detail>
            selector: 'my-hero-detail',
            // Create the needed html template
            templateUrl: 'app/hero-detail.component.html',
            styleUrls: ['app/css/hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
