import { Component, OnInit } from '@angular/core';
import { ApiAlarmClientService } from 'src/app/services/api-alarm-client.service'

@Component({
  selector: 'app-arm-button',
  templateUrl: './arm-button.component.html',
  styleUrls: ['./arm-button.component.css']
})
export class ArmButtonComponent implements OnInit {

  isArmed : boolean = false;
  isWaitingCmd : boolean = false;
  isWaitingInit : boolean = true;

  constructor(private apiAlarmClientService: ApiAlarmClientService) { }

  ngOnInit(): void {
    this.apiAlarmClientService.getAlarmStatus().subscribe(alarmStatus => {
      this.isWaitingInit = false;
      this.isArmed = (alarmStatus.lastAction === "arm");
    })
  }

  onClick() : void {
    this.isWaitingCmd = true;
    if (this.isArmed) {
      this.apiAlarmClientService.disarm().subscribe(() => {
        this.isWaitingCmd = false;
        this.isArmed = false;
      });
    } else {
      this.apiAlarmClientService.arm().subscribe(() => {
        this.isWaitingCmd = false;
        this.isArmed = true;
      });
    }
  }

}
