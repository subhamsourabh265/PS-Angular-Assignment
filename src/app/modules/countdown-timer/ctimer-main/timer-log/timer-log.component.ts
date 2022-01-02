import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'ss-app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.scss']
})
export class TimerLogComponent implements OnInit, OnChanges {

  @Input() timerStatus: string = '';
  @Input() timeStamp: string = '';
  timeLogger: {timerStatus: string, timeStamp:string}[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.timerStatus){
      this.timeLogger.push({
        timerStatus: this.timerStatus,
        timeStamp: this.timeStamp
      });
    } else {
      this.timeLogger = [];
    }
    
  }

}
