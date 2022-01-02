import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownService } from 'src/app/app-common/services/countdown.service';

@Component({
  selector: 'ss-app-timer-counts-service',
  templateUrl: './timer-counts-service.component.html',
  styleUrls: ['./timer-counts-service.component.scss']
})
export class TimerCountsServiceComponent implements OnInit, OnDestroy {
  timerCountSubscription: Subscription = new Subscription();
  startCount: number = 0;
  pauseCount: number = 0;
  constructor(private countdown: CountdownService) {
  }

  ngOnInit(): void {
    this.timerCountSubscription = this.countdown.timerCountSubject
      .subscribe(value => {
        this.startCount = value.startCount;
        this.pauseCount = value.pauseCount;
      });
  }

  ngOnDestroy(): void {
    this.timerCountSubscription.unsubscribe();
  }

}
