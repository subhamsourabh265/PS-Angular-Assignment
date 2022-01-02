import { Component, OnInit } from '@angular/core';
import { FOOTERLABELS } from '../../app-settings.config';

@Component({
  selector: 'ss-app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerLabels: {heading: string} = FOOTERLABELS;
  constructor() { }

  ngOnInit(): void {
  }

}
