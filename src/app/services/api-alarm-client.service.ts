import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlarmStatus } from '../models/AlarmStatus';
import { Observable, delay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiAlarmClientService {

  readonly apiUrl: string = 'https://us-central1-portegarage.cloudfunctions.net/alarm-status-mock';

  constructor(private http: HttpClient) { }

  getAlarmStatus(): Observable<AlarmStatus> {
    return this.http.get<AlarmStatus>(this.apiUrl).pipe(delay(3000));
  }
}
