import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HEADERLABELS } from '../../app-settings.config';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'ss-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerLabels: { heading: string };
  constructor(private data: DataService) {
    this.headerLabels = HEADERLABELS;
  }
}
