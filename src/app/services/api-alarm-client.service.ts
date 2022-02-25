import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlarmStatus } from '../models/AlarmStatus';
import { Observable, timer, switchMap, Subject, delay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiAlarmClientService {

  private readonly apiUrl: string = 'https://us-central1-portegarage.cloudfunctions.net/alarm-status-mock';

  private _alarmStatus: Subject<AlarmStatus>;

  constructor(private http: HttpClient) {
    this._alarmStatus = new Subject();
    timer(1, 10000).pipe(switchMap(() => this.http.get<AlarmStatus>(this.apiUrl))).subscribe((alarmStatus) => {
      this._alarmStatus.next(alarmStatus);
    });
  }

  getAlarmStatus(): Observable<AlarmStatus> {
    return this._alarmStatus.asObservable();
  }

  arm() : Observable<any> {
    return this.http.get<AlarmStatus>(this.apiUrl).pipe(delay(3000));
  }

  disarm() : Observable<any> {
    return this.http.get<AlarmStatus>(this.apiUrl).pipe(delay(3000));
  }
}
