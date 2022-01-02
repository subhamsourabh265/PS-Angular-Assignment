import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { leftPanelAnimation } from '../../animations';
import { LEFTMENUITEMS } from '../../app-settings.config';

@Component({
  selector: 'ss-app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss'],
  animations: [trigger('openClose', leftPanelAnimation)]
})
export class LeftPanelComponent implements OnInit {

  @Output() showHideEvent = new EventEmitter();
  menuItems: {name: string, menuText: string,  path: string}[] = LEFTMENUITEMS;
  showLeftPanel = true;
  constructor() { }

  ngOnInit(): void {
  }

  itemById(index: any, item: any) {
    return item.name;
  }

  showHide(): void {
    this.showLeftPanel=!this.showLeftPanel;
    this.showHideEvent.emit(this.showLeftPanel);
  }

}
