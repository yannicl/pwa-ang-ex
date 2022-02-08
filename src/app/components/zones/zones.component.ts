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

  isInitialProgressBarDisplayed: boolean = true;
  isUpdateProgressBarDisplayed: boolean = false;
  isCounterProgressBarDisplayed: boolean = false;
  zones: Zone[] = [];
  updateZonesSubscription!: Subscription;
  tickCounterUpdateZones: number = 0;

  constructor(private apiAlarmClientService: ApiAlarmClientService) { }

  ngOnInit(): void {
    this.apiAlarmClientService.getAlarmStatus().subscribe(alarmStatus => {
      this.isInitialProgressBarDisplayed = false;
      this.zones = alarmStatus.zones;
      this.updateZonesSubscription = interval(100).subscribe(() => this.tickUpdateZones());
      this.isCounterProgressBarDisplayed = true;
    })
  }

  ngOnDestroy() {
    if (this.updateZonesSubscription != null) {
      this.updateZonesSubscription.unsubscribe()
    }
  }

  tickUpdateZones() {
    this.tickCounterUpdateZones++;
    if (this.tickCounterUpdateZones >= 200) {
      this.tickCounterUpdateZones = 0;
      this.updateZones();
    }
  }

  updateZones(): void {
    this.isUpdateProgressBarDisplayed = true;
    this.isCounterProgressBarDisplayed = false;
    this.apiAlarmClientService.getAlarmStatus().subscribe(alarmStatus => {
      this.isUpdateProgressBarDisplayed = false;
      this.isCounterProgressBarDisplayed = true;
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
