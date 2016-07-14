import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

// Resue the Hero Service for the dashboard view
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/html/dashboard.component.html',
  styleUrls:  ['app/css/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  // Create a local heroes array property
  heroes: Hero[] = [];

  // inject the HeroService in the constructor and hold it in a private heroService field.
  constructor(
    private router: Router,
    private heroService: HeroService) { 
  }

  // call the service to get heroes inside the Angular ngOnInit lifecycle hook.
  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}