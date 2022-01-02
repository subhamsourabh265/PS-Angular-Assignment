import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { TIMERLABELS } from 'src/app/app-common/app-settings.config';
import { CountdownService } from 'src/app/app-common/services/countdown.service';

@Component({
  selector: 'ss-app-countdown-display-service',
  templateUrl: './countdown-display-service.component.html',
  styleUrls: ['./countdown-display-service.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CountdownDisplayServiceComponent implements OnInit {

  timerLabels = TIMERLABELS;
  timerValue: any = 0;
  constructor(private countdown: CountdownService) { 
    this.timerValue = countdown.timerSubject;
  }

  ngOnInit(): void {
  }

}
