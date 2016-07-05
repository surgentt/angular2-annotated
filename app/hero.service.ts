// Get Dependency Injects from the model
import { Injectable } from '@angular/core';
// Get the Hero Model
import { Hero } from './hero';
// Get the Mock Heres Array
import { HEROES } from './mock-heroes';

// TypeSecruot sees the @Injectable Decorator and emits meta data about the service
@Injectable()

export class HeroService {
	// The Getter method doesn't care where data come from.
  getHeroes() {
    return Promise.resolve(HEROES);
  }

	getHero(id: number) {
	  return this.getHeroes()
	             .then(heroes => heroes.filter(hero => hero.id === id)[0]);
	}
}