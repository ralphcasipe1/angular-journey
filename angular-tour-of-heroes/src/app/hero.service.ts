import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private readonly messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    this.messageService.add('HeroService: Fetched heroes');

    return heroes;
  }
}
