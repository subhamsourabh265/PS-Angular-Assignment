import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ss-app-timer-counts',
  templateUrl: './timer-counts.component.html',
  styleUrls: ['./timer-counts.component.scss']
})
export class TimerCountsComponent implements OnInit {

  @Input() startCount: number = 0;
  @Input() pauseCount: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
}
