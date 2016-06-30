// Import Component and Input fro the Angular Core Library
import { Component, Input } from '@angular/core';
// Get the Hero Model 
import { Hero } from './hero';

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
    </div>
  `
})

// Expose the HeroDetailComponent to the rest of the application
// Declaire that the hero propoerty is an input to be used other locations
export class HeroDetailComponent {
  // Notice that the hero property is the target of a property binding — it's in square brackets to the left of the (=).
  // Angular insists that we declare a target property to be an input property. If we don't, Angular rejects the binding and throws an error.
  // Annotate the hero property with the @Input decorator 
  // <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  @Input()
  // The component must be told which Hero to display
  hero: Hero;
}