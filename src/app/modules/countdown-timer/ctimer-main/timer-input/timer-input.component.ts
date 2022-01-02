import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { TIMERLABELS } from 'src/app/app-common/app-settings.config';

@Component({
  selector: 'ss-app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.scss'],
})
export class TimerInputComponent implements OnInit, OnChanges {
  @Output() timerStatusEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() timerValue: any;

  timerLabels = TIMERLABELS;
  timerInput = 0;
  timerStatus: string = '';
  timeStamp: any;
  pausedAt: number = 0;
  startCount: number = 0;
  pauseCount: number = 0;
  timer: any;
  logItems: number[] = [];
  showLogs = false;
  setTimerValue = false;
  startButtonDisabled = false;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.timerStatus && this.timerValue <= 1) {
      this.startButtonDisabled = true;
    }
  }

  startTimer(): void {
    if (this.timerStatus) {
      if (this.timerStatus === 'started') {
        this.setTimerValue = false;
        this.timerStatus = 'paused';
      } else {
        this.timerStatus = 'started';
        this.setTimerValue = false;
      }
    } else {
      this.setTimerValue = true;
      this.timerStatus = 'started';
    }
    this.timerStatusEvent.emit({
      setTimerValue: this.setTimerValue,
      timerStatus: this.timerStatus,
      timerInput: this.timerInput,
      resetTimer: false,
      startTimer: true,
    });
  }

  resetTimer(): void {
    this.startButtonDisabled = false;
    this.timerStatus = '';
    this.timerInput = 0;
    this.timerStatusEvent.emit({
      timerStatus: this.timerStatus,
      timerInput: this.timerInput,
      resetTimer: true,
      startTimer: false,
    });
  }
}
