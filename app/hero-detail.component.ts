// Import Component and Input delegator from the Angular Core Library.
// Import OnInit and OnDestroy interfaces since HeroService has been included. 
import { Component, OnInit, OnDestroy  } from '@angular/core';
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
  hero: Hero;
  sub: any;

  // Build the private heroService and route to the HeroDetailComponent
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  // Runs on init
  ngOnInit() {
    // The subscribe method will deliver our array of route parameters
    this.sub = this.route.params.subscribe(params => {
      // The javasctipy + operator transforms a string to an integer
      // let is similar to var, but with better scoping
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // Navigates backwards one step.
  goBack() {
    window.history.back();
  }

} // End