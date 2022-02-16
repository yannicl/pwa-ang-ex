import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlarmStatus } from '../models/AlarmStatus';
import { Observable, delay, timer, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiAlarmClientService {

  readonly apiUrl: string = 'https://us-central1-portegarage.cloudfunctions.net/alarm-status-mock';

  constructor(private http: HttpClient) { }

  getAlarmStatus(): Observable<AlarmStatus> {
    return timer(1, 10000).pipe(switchMap(() => this.http.get<AlarmStatus>(this.apiUrl)));
  }
 
 
 
}
