import { Component, OnInit } from '@angular/core';
import { ApiAlarmClientService } from 'src/app/services/api-alarm-client.service'
import { Zone } from 'src/app/models/AlarmStatus';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  zones: Zone[] = [];

  constructor(private apiAlarmClientService: ApiAlarmClientService) { }

  ngOnInit(): void {
    this.apiAlarmClientService.getAlarmStatus().subscribe(alarmStatus => {
      this.zones = alarmStatus.zones;
    })
  }

  convZoneStatus2Icon(status: string) {
    switch(status) {
      case "ARMED": {
        return "notifications_none";
      }
      case "TRIGGERED" : {
        return "notifications_active";
      }
      default : {
        return  "notifications_off";
      }
    }
  }

  convZoneStatus2Color(status: string) {
    switch(status) {
      case "ARMED": {
        return "";
      }
      case "TRIGGERED" : {
        return "warn";
      }
      default : {
        return  "";
      }
    }
  }

}
