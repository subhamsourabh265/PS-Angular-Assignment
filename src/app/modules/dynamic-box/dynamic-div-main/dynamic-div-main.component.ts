import { trigger } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { dynamicDiv, pageLoadAnimation } from 'src/app/app-common/animations';

@Component({
  selector: 'ss-app-dynamic-div-main',
  templateUrl: './dynamic-div-main.component.html',
  styleUrls: ['./dynamic-div-main.component.scss'],
  animations: [trigger('openDiv', dynamicDiv), pageLoadAnimation],
})
export class DynamicDivMainComponent implements OnInit, OnDestroy {
  isAnimate = false;
  setTimer: any;
  showAlert = false;
  clickedDiv: string = '';
  dynamicBoxes: string[] = new Array(10).fill('box');
  @ViewChild('scrollDiv') scrollDiv: ElementRef | any;
  setScrollUpTimer: any;
  scrollValue: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.scrollDiv);
  }

  showAlertBox(index: number) {
    console.log(index);
    const lastChar = index.toString().charAt(index.toString().length - 1);
    this.showAlert = true;
    if (index >= 4 && index <= 20) {
      this.clickedDiv = `${index}th`;
    } else if (lastChar === '1') {
      this.clickedDiv = `${index}st`;
    } else if (lastChar === '2') {
      this.clickedDiv = `${index}nd`;
    } else if (lastChar === '3') {
      this.clickedDiv = `${index}rd`;
    } else {
      this.clickedDiv = `${index}th`;
    }
  }

  itemById(index: any, item: any) {
    console.log(item);
    return item;
  }

  onScroll() {
    this.scrollValue = {
      top: this.scrollDiv?.nativeElement?.scrollTop,
      height: this.scrollDiv?.nativeElement.scrollHeight,
      offsetheight: this.scrollDiv?.nativeElement.offsetHeight,
    };
    if (
      this.scrollDiv.nativeElement.scrollTop >=
      this.scrollDiv?.nativeElement.scrollHeight -
        this.scrollDiv?.nativeElement.offsetHeight -
        1
    ) {
      this.dynamicBoxes.push(...new Array(10).fill('box'));
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.setTimer);
    clearTimeout(this.setScrollUpTimer);
  }
}
