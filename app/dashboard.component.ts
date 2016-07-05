import { Component, OnInit } from '@angular/core';

// Resue the Hero Service for the dashboard view
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  // Create a local heroes array property
  heroes: Hero[] = [];

  // inject the HeroService in the constructor and hold it in a private heroService field.
  constructor(private heroService: HeroService) { }

  // call the service to get heroes inside the Angular ngOnInit lifecycle hook.
  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail() { /* not implemented yet */}
}