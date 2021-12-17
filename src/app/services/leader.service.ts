import { LEADERS } from './../shared/Leaders';
import { Injectable } from '@angular/core';
import { Leader } from '../shared/Leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(): Leader {
    return LEADERS[3];
  }
}
