import { LEADERS } from './../shared/leaders';
import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { of, Observable, catchError } from 'rxjs';
import { delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));
    // return of(LEADERS).pipe(delay(2000));
  }

  getLeader(): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/3')
      .pipe(catchError(this.processHTTPMsgService.handleError));

    // return of(LEADERS[3]).pipe(delay(2000));
  }
}
