import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { timerLog } from 'src/app/app-common/models';
import { CountdownService } from 'src/app/app-common/services/countdown.service';

@Component({
  selector: 'ss-app-timer-log-service',
  templateUrl: './timer-log-service.component.html',
  styleUrls: ['./timer-log-service.component.scss']
})
export class TimerLogServiceComponent implements OnInit, OnDestroy {

  timerLogSubscription: Subscription = new Subscription();
  timerStatus: string = '';
  timeStamp: string = '';
  timeLogger: timerLog[] = [];
  constructor(private countdown: CountdownService) { }

  ngOnInit(): void {
    this.timerLogSubscription = this.countdown.timerLogSubject
      .subscribe(value => {
        if(value.status){
          this.timeLogger.push(value);
        } else {
          this.timeLogger = [];
        }
      });
  }

  ngOnDestroy(): void {
    this.timerLogSubscription.unsubscribe();
  }
}
