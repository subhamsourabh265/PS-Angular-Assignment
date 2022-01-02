import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownTimerRoutingModule } from './countdown-timer-routing.module';
import { CtimerMainComponent } from './ctimer-main/ctimer-main.component';
import { CountdownDisplayComponent } from './ctimer-main/countdown-display/countdown-display.component';
import { TimerInputComponent } from './ctimer-main/timer-input/timer-input.component';
import { TimerLogComponent } from './ctimer-main/timer-log/timer-log.component';
import { TimerCountsComponent } from './ctimer-main/timer-counts/timer-counts.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CtimerMainComponent,
    CountdownDisplayComponent,
    TimerInputComponent,
    TimerLogComponent,
    TimerCountsComponent
  ],
  imports: [
    CommonModule,
    CountdownTimerRoutingModule,
    FormsModule
  ]
})
export class CountdownTimerModule { }
