import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  private heroes = HEROES;
  private selectedHero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  heroKilled(heroId: number) {
    console.log("Received kill event for hero:" + heroId);
    this.selectedHero = null;
    const index = this.heroes.findIndex(hero => hero.id == heroId);
    this.heroes.splice(index, 1);
  }
}
