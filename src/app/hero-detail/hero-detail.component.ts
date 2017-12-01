import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  private _hero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

  @Output('killEvent') kill = new EventEmitter<number>();

  get hero(): Hero {
    return this._hero;
  }

  @Input()
  set hero(value: Hero) {
    this._hero = value;
  }
}
