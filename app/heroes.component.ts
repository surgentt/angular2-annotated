import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }                from './hero';
import { HeroService }         from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/html/heroes.component.html',
  styleUrls:  ['app/css/heroes.component.css'],
  directives: [HeroDetailComponent]
})

// Export the HeroesComponent to somewhere else. 
// Grab the OnInit decorator and implement with ngOnInit.
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;

  // Constructor: function Book(){} | var myBook = new Book();
  // The constructor is for simple initializations like wiring constructor parameters to properties
  // keep complex logic out of the constructor, especially anything that might call a server as a data access method is sure to do.
  constructor(
    private router: Router,
    private heroService: HeroService) { 
  }

  getHeroes() {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes)
        .catch(error => this.error = error);
  }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  deleteHero(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService
        .delete(hero)
        .then(res => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        })
        .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { 
    this.selectedHero = hero; 
    this.addingHero = false;
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}