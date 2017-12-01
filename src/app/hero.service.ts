import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';
import {Subject} from 'rxjs/Subject';

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

    setTimeout(some => {
      this._messageService.add('Timeout1 ended');
      subject.next(HEROES.slice(0, HEROES.length / 2));
    }, 1000);
    setTimeout(some => {
      this._messageService.add('Timeout2 ended');
      subject.next(HEROES.slice(HEROES.length / 2, HEROES.length));
      subject.complete();
    }, 3000);

    return subject.asObservable();
  }
}
