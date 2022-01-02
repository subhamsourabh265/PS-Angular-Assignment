import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { TIMERLABELS } from 'src/app/app-common/app-settings.config';
import { timerCount, timerLog } from 'src/app/app-common/models';
import { CountdownService } from 'src/app/app-common/services/countdown.service';

@Component({
  selector: 'ss-app-timer-input-service',
  templateUrl: './timer-input-service.component.html',
  styleUrls: ['./timer-input-service.component.scss']
})
export class TimerInputServiceComponent implements OnInit, OnDestroy {

  timerLabels = TIMERLABELS;
  timerInput = 0;
  timerValue = this.timerInput;
  timerStatus: string = '';
  timeStamp: any;
  pausedAt: number = 0;
  startCount: number = 0;
  pauseCount: number = 0;
  timer: any;
  logItems: number[] = [];
  showLogs = false;
  constructor(private countdown: CountdownService) { }

  ngOnInit(): void {

  }

  startTimer(): void {
    if (this.timerStatus) {
      if (this.timerStatus === 'started') {
        this.timerStatus = 'paused';
        this.pauseCount++;
        
        if (this.timerValue > 0) {
          this.logItems.push(this.timerValue);
        }
        this.showLogs = !!this.logItems.length;
        clearInterval(this.timer);
      } else {
        this.timerStatus = 'started';
        this.startCount++;
        this.timer = setInterval(() => {
          this.timerValue--;
          if (this.timerValue >= 0) {
            this.countdown.timerSubject.next(this.timerValue);
          }
          if (this.timerValue <= 0) {
            clearInterval(this.timer);
          }
        }, 1);
      }
    } else {
      this.timerValue = this.timerInput;
      this.timerStatus = 'started';
      this.startCount++;
      this.timer = setInterval(() => {
        this.timerValue--;
        if (this.timerValue >= 0) {
          this.countdown.timerSubject.next(this.timerValue);
        }
        
        if (this.timerValue <= 0) {
          clearInterval(this.timer);
        }
      }, 1);
    }
    if (this.timerValue > 0) {
      this.countdown.timerLogSubject.next({
        status: this.timerStatus,
        timeStamp: new Date().toLocaleString()
      });
      this.countdown.timerCountSubject.next({
        startCount: this.startCount,
        pauseCount: this.pauseCount
      });
    }
    
  }

  resetTimer(): void {
    this.timerStatus = '';
    this.timerValue = 0;
    this.timerInput = 0;
    this.startCount = 0;
    this.pauseCount = 0;
    this.logItems = [];
    this.showLogs = false;
    this.countdown.timerSubject.next(this.timerValue);
    this.countdown.timerLogSubject.next({
      status: this.timerStatus,
      timeStamp: new Date().toLocaleString()
    });
    this.countdown.timerCountSubject.next({
      startCount: this.startCount,
      pauseCount: this.pauseCount
    });
    clearInterval(this.timer);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}
