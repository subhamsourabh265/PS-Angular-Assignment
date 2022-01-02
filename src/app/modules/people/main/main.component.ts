import { Component, OnInit } from '@angular/core';
import { pageLoadAnimation } from 'src/app/app-common/animations';

@Component({
  selector: 'ss-app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [pageLoadAnimation],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
