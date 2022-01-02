import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { pageLoadAnimation } from 'src/app/app-common/animations';

@Component({
  selector: 'ss-app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss'],
  animations: [pageLoadAnimation],
})
export class AlertBoxComponent implements OnInit {
  @Output() closeAlertBox = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  closeAlert(): void {
    this.closeAlertBox.emit('');
  }
}
