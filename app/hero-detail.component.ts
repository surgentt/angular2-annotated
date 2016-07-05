// Import Component and Input delegator from the Angular Core Library.
// Import OnInit and OnDestroy interfaces since HeroService has been included. 
import { Component, Input, OnInit, OnDestroy  } from '@angular/core';
// This is for showing a hero detail component from the id params
import { ActivatedRoute } from '@angular/router';
// Get the Hero Model to call attributes
import { Hero } from './hero';
// Import Hero Service so we can fetch a specific hero.
import { HeroService } from './hero.service';

// Add meta data to the Component Constructor
@Component({
  // Define the name the tag <my-hero-detail>
  selector: 'my-hero-detail',
  // Create the needed html template
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <button (click)="goBack()">Back</button>
    </div>
  `
})

// Expose the HeroDetailComponent to the rest of the application
// Declaire that the hero property is an input to be used other locations
export class HeroDetailComponent implements OnInit, OnDestroy {

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

  // Notice that the hero property is the target of a property binding — it's in square brackets to the left of the (=).
  // Angular insists that we declare a target property to be an input property. If we don't, Angular rejects the binding and throws an error.
  // Annotate the hero property with the @Input decorator 
  // <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  @Input()
  // The component must be told which Hero to display
  hero: Hero;
}