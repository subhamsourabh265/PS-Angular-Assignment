import { Component, OnInit } from '@angular/core';
import { pageLoadAnimation } from 'src/app/app-common/animations';

@Component({
  selector: 'ss-app-ctimer-service-main',
  templateUrl: './ctimer-service-main.component.html',
  styleUrls: ['./ctimer-service-main.component.scss'],
  animations: [pageLoadAnimation],
})
export class CtimerServiceMainComponent implements OnInit {
  timerValue: number = 0;
  timeCounter = [];
  timeLogger = [];
  timerStatus: string = '';
  timeStamp: string = '';
  startCount: number = 0;
  pauseCount: number = 0;
  constructor() {}

  ngOnInit(): void {}

  updateTimer(event: any): void {
    this.timerValue = event;
  }

  logTime(event: any): void {
    this.timerStatus = event.status;
    this.timeStamp = event.timeStamp;
  }

  countClicks(event: any): void {
    this.startCount = event.startCount;
    this.pauseCount = event.pauseCount;
  }
}
