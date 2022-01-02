import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { TIMERLABELS } from 'src/app/app-common/app-settings.config';
import { timerCount, timerLog } from 'src/app/app-common/models';

@Component({
  selector: 'ss-app-countdown-display',
  templateUrl: './countdown-display.component.html',
  styleUrls: ['./countdown-display.component.scss'],
})
export class CountdownDisplayComponent implements OnInit, OnChanges {
  timerValue: number = 0;
  @Input() timerStatus: string = '';
  @Input() timerInput: any;
  @Input() resetTimer: any;
  @Input() startTimer: any;
  @Input() setTimerValue: any;

  @Output() timerEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() timerLogEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() timerCountEvent: EventEmitter<timerCount> =
    new EventEmitter<timerCount>();

  timerLabels = TIMERLABELS;
  pausedAt: number = 0;
  startCount: number = 0;
  pauseCount: number = 0;
  timer: any;
  logItems: number[] = [];
  showLogs = false;
  myName: string;
  constructor(private cd: ChangeDetectorRef) {
    this.myName = "Subham";
  }

  ngOnChanges(): void {
    console.log('ngOnchanges called');
    if (this.resetTimer) {
      this.reset();
    } else if (this.startTimer) {
      this.start();
    }
  }

  ngOnInit(): void {}

  start(): void {
    if (this.timerValue < 0) {
      this.timerValue = 0;
      this.timerStatus = '';
    }
    if (this.timerStatus) {
      if (this.timerStatus === 'paused') {
        this.cd.detectChanges();
        this.pauseCount++;
        if (this.timerValue > 0) {
          this.logItems.push(this.timerValue);
        }
        this.showLogs = !!this.logItems.length;
        clearInterval(this.timer);
        if (this.timerValue <= 0) {
          this.timerStatus = '';
          clearInterval(this.timer);
        }
      } else {
        this.cd.detectChanges();
        if (this.setTimerValue) {
          this.timerValue = this.timerInput;
        }

        this.startCount++;
        this.timer = setInterval(() => {
          this.timerValue--;
          if (this.timerValue <= 0) {
            this.timerStatus = '';
            clearInterval(this.timer);
          }
        }, 1000);
      }
    }    
    if (this.timerValue >= 0) {
      this.timerLogEvent.emit({
        timerValue: this.timerValue,
        status: this.timerStatus,
        timeStamp: new Date().toLocaleString(),
      });
      this.timerCountEvent.emit({
        startCount: this.startCount,
        pauseCount: this.pauseCount,
      });
    }
  }

  reset(): void {
    this.timerValue = 0;
    this.timerInput = 0;
    this.startCount = 0;
    this.pauseCount = 0;
    this.logItems = [];
    this.showLogs = false;
    this.timerLogEvent.emit({
      status: this.timerStatus,
      timeStamp: new Date().toLocaleString(),
    });
    this.timerCountEvent.emit({
      startCount: this.startCount,
      pauseCount: this.pauseCount,
    });
    clearInterval(this.timer);
  }
}
