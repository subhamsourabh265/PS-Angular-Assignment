import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { pageLoadAnimation } from 'src/app/app-common/animations';
import { PRICEFILTER } from 'src/app/app-common/app-settings.config';
import { DataService } from 'src/app/app-common/services/data.service';

@Component({
  selector: 'ss-app-e-com-main',
  templateUrl: './e-com-main.component.html',
  styleUrls: ['./e-com-main.component.scss'],
  animations: [pageLoadAnimation],
})
export class EComMainComponent implements OnInit {
  productSource: any;
  viewChangeText: string = 'switch to list view';
  viewType: string = 'grid';
  filterOptions = PRICEFILTER;
  lowerLimit: any;
  upperLimit: any;
  selectedFilter: any;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.selectedFilter = 'select';
    this.data.getProductData().subscribe((res) => {
      this.productSource = res.productDetails;
    });
  }

  changeView(): void {
    if (this.viewType === 'grid') {
      this.viewType = 'list';
      this.viewChangeText = 'switch to grid view';
    } else {
      this.viewType = 'grid';
      this.viewChangeText = 'switch to list view';
    }
  }

  itemById(index: any, item: any) {
    return item.name;
  }

  applyFilter(item: any) {
    if (item == 'select') {
      this.upperLimit = 0;
      this.lowerLimit = 0;
    } else {
      const itemObj = JSON.parse(item);
      this.lowerLimit = itemObj.lowerLimit;
      this.upperLimit = itemObj.upperLimit;
    }
  }
}
