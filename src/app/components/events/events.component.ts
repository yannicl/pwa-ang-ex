import { Component, OnInit } from '@angular/core';
import { ApiAlarmClientService } from 'src/app/services/api-alarm-client.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private apiAlarmClientService: ApiAlarmClientService) { }

  history: String[] = []

  ngOnInit(): void {
    this.apiAlarmClientService.getAlarmStatus().subscribe(alarmStatus => {
      this.history = alarmStatus.history;
    })
  }

}
