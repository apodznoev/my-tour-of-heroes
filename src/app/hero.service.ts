import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeroService {

  constructor(private _messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this._messageService.add('Fetching heroes');

    const subject = new Subject<Hero[]>();
    subject.subscribe(heroes => {
      this._messageService.add(heroes.length + ' heroes successfully fetched:');
    }, error => {
      this._messageService.add('Error fetching heroes:' + error);
    }, () => {
      this._messageService.add('Heroes fetching done');
    });

    setTimeout(() => {
      this._messageService.add('Timeout1 ended');
      subject.next(HEROES.slice(0, HEROES.length / 2));
    }, 1000);
    setTimeout(() => {
      this._messageService.add('Timeout2 ended');
      subject.next(HEROES.slice(HEROES.length / 2, HEROES.length));
      subject.complete();
    }, 3000);

    return subject.asObservable();
  }

  deleteHero(heroId: number): Observable<void> {
    this._messageService.add(`Deleting hero: ${heroId}`);

    const subject = new Subject<void>();
    setTimeout(() => {
      this._messageService.add('Timeout deleting hero ended');
      const heroIndex = HEROES.findIndex(hero => hero.id === heroId);
      if (heroIndex > -1) {
        if (HEROES[heroIndex].isKillable) {
          HEROES.splice(heroIndex, 1);
          subject.complete();
        } else {
          subject.error('Unkillable');
        }
      }

    }, 2000);
    return subject.asObservable();
  }

  getHero(heroId: number): Observable<Hero> {
    this._messageService.add('Fetching hero by id:' + heroId);

    const subject = new Subject<Hero>();
    setTimeout(() => {
      this._messageService.add('Timeout getting hero ended');
      const hero = HEROES.find(hero => hero.id === heroId);
      if (hero != null) {
        subject.next(hero);
        subject.complete();
        return;
      }
      subject.error(`Cannot find hero with given id ${heroId}`);
    }, 2000);
    return subject.asObservable();
  }
}
