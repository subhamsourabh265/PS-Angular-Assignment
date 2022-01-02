import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownTimerServiceRoutingModule } from './countdown-timer-service-routing.module';
import { CtimerServiceMainComponent } from './ctimer-service-main/ctimer-service-main.component';
import { CountdownDisplayServiceComponent } from './ctimer-service-main/countdown-display-service/countdown-display-service.component';
import { TimerCountsServiceComponent } from './ctimer-service-main/timer-counts-service/timer-counts-service.component';
import { TimerInputServiceComponent } from './ctimer-service-main/timer-input-service/timer-input-service.component';
import { TimerLogServiceComponent } from './ctimer-service-main/timer-log-service/timer-log-service.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CtimerServiceMainComponent,
    CountdownDisplayServiceComponent,
    TimerCountsServiceComponent,
    TimerInputServiceComponent,
    TimerLogServiceComponent
  ],
  imports: [
    CommonModule,
    CountdownTimerServiceRoutingModule,
    FormsModule
  ]
})
export class CountdownTimerServiceModule { }
