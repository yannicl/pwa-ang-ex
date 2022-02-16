import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlarmStatus } from '../models/AlarmStatus';
import { Observable, timer, switchMap, Subject, merge } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiAlarmClientService {

  readonly apiUrl: string = 'https://us-central1-portegarage.cloudfunctions.net/alarm-status-mock';

  private subject: Subject<number>;

  constructor(private http: HttpClient) {
    this.subject = new Subject();
   }

  getAlarmStatus(): Observable<AlarmStatus> {
    return merge(timer(1, 10000), this.subject.asObservable()).pipe(switchMap(() => this.http.get<AlarmStatus>(this.apiUrl)));
  }

  refresh(): void {
    this.subject.next(0);
  }
}
