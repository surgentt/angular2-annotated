import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/html/heroes.component.html',
  styleUrls:  ['app/css/heroes.component.css']
})

// Export the HeroesComponent to somewhere else. 
// Grab the OnInit decorator and implement with ngOnInit.
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // Constructor: function Book(){} | var myBook = new Book();
  // The constructor is for simple initializations like wiring constructor parameters to properties
  // keep complex logic out of the constructor, especially anything that might call a server as a data access method is sure to do.
  constructor(
    private router: Router,
    private heroService: HeroService) { 
  }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}