import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
// Importing the Hero Service
// Don't ever heroService = new HeroService(); This could work, but is a bad idea.
import { HeroService } from './hero.service';

import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/css/heroes.component.css']
})

// Export the App Component to be used in index.html
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
  // Call my ngOnInit. 
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}