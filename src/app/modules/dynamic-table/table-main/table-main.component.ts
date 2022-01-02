import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { pageLoadAnimation } from 'src/app/app-common/animations';
import { DataService } from 'src/app/app-common/services/data.service';

@Component({
  selector: 'ss-app-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.scss'],
  animations: [pageLoadAnimation],
})
export class TableMainComponent implements OnInit {
  dataSource: any = [];
  initialData: any = [];
  order: string = '';
  heading: string = '';

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getTableData().subscribe((response: any) => {
      this.dataSource = response.data;
      this.initialData = [...this.dataSource];
    });
  }

  setSortingOrder(heading: string): void {
    if (this.heading === heading) {
      if (this.order) {
        if (this.order === 'asc') {
          this.order = 'desc';
        } else if (this.order === 'desc') {
          this.order = 'reset';
        } else {
          this.order = 'asc';
        }
      } else {
        this.order = 'asc';
      }
    } else {
      this.order = 'asc';
    }

    this.heading = heading;
  }

  itemById(index: any, item: any) {
    return item.name;
  }
}
