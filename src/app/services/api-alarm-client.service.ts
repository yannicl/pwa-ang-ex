import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlarmStatus } from '../models/AlarmStatus';
import { ActionStatus } from '../models/ActionStatus';
import { Observable, timer, switchMap, Subject, delay } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiAlarmClientService {

  private readonly apiUrl: string = '';

  private _alarmStatus: Subject<AlarmStatus>;

  private httpOptions = {
    headers: new HttpHeaders({
    })
  };


  constructor(private http: HttpClient, private config: ConfigurationService) {
    this._alarmStatus = new Subject();
    this.httpOptions.headers = this.httpOptions.headers.set("apiKey", this.config.getAccessKey());
    const action = {
      action: "read"
    }
    timer(1, 10000).pipe(switchMap(() => this.http.post<AlarmStatus>(this.config.getBaseUrl() + this.apiUrl, action, this.httpOptions))).subscribe((alarmStatus) => {
      this._alarmStatus.next(alarmStatus);
    });
  }

  getAlarmStatus(): Observable<AlarmStatus> {
    return this._alarmStatus.asObservable();
  }

  arm() : Observable<any> {
    const action = {
      action: "arm"
    }
    return this.http.post<ActionStatus>(this.config.getBaseUrl() + this.apiUrl, action, this.httpOptions).pipe(delay(500));
  }

  disarm() : Observable<any> {
    const action = {
      action: "disarm"
    }
    return this.http.post<ActionStatus>(this.config.getBaseUrl() + this.apiUrl, action, this.httpOptions).pipe(delay(500));
  }
}
