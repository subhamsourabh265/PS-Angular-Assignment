import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { pageLoadAnimation } from 'src/app/app-common/animations';
import { CountdownDisplayComponent } from './countdown-display/countdown-display.component';

@Component({
  selector: 'ss-app-ctimer-main',
  templateUrl: './ctimer-main.component.html',
  styleUrls: ['./ctimer-main.component.scss'],
  animations: [pageLoadAnimation],
})
export class CtimerMainComponent implements OnInit, AfterViewInit {
  timerValue: number = 0;
  timeCounter = [];
  timeLogger = [];
  timerStatus: string = '';
  timeStamp: string = '';
  startCount: number = 0;
  pauseCount: number = 0;
  timerInput: any;
  resetTimer: any;
  startTimer: any;
  setTimerValue: any;
  @ViewChild(CountdownDisplayComponent) childComp:
    | CountdownDisplayComponent
    | any;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    this.childComp.myName = 'Sourabh';
    console.log(this.childComp);
    this.cd.detectChanges();
  }

  updateTimer(event: any): void {
    this.timerValue = event;
  }

  setTimerStatus(event: any) {
    this.setTimerValue = event.setTimerValue;
    this.timerStatus = event.timerStatus;
    this.timerInput = event.timerInput;
    this.resetTimer = event.resetTimer;
    this.startTimer = event.startTimer;
  }

  logTime(event: any): void {
    this.timerValue = event.timerValue;
    this.timerStatus = event.status;
    this.timeStamp = event.timeStamp;
  }

  countClicks(event: any): void {
    this.startCount = event.startCount;
    this.pauseCount = event.pauseCount;
  }
}
