import { LEADERS } from './../shared/leaders';
import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(): Observable<Leader> {
    return of(LEADERS[3]).pipe(delay(2000));
  }
}
