// Import Component and Input delegator from the Angular Core Library.
// Import OnInit and OnDestroy interfaces since HeroService has been included. 
import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
// This is for showing a hero detail component from the id params
import { ActivatedRoute }                from '@angular/router';

// Get the Hero Model to call attributes
import { Hero } from './hero';
// Import Hero Service so we can fetch a specific hero.
import { HeroService } from './hero.service';

// Add meta data to the Component Constructor
@Component({
  selector:    'my-hero-detail',
  templateUrl: 'app/html/hero-detail.component.html',
  styleUrls:  ['app/css/hero-detail.component.css']
})

// Expose the HeroDetailComponent to the rest of the application
// Declaire that the hero property is an input to be used other locations
export class HeroDetailComponent implements OnInit, OnDestroy {
  // The component must be told which Hero to display
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false; // true if navigated here

  // Build the private heroService and route to the HeroDetailComponent
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  // Runs OnInit
  ngOnInit() {
    // The subscribe method will deliver our array of route parameters
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        // The javasctipy + operator transforms a string to an integer
        // let is similar to var, but with better scoping
        let id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save() {
    this.heroService
      .save(this.hero)
      .then(hero => {
        this.hero = hero; // saved hero, w/ id if new
        this.goBack(hero);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  // Navigates backwards one step.
  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }

} // End