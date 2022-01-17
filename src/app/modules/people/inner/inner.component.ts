import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/app-common/services/data.service';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'ss-app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss'],
})
export class InnerComponent implements OnInit {
  apiData: any;
  source: string = '';

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data
      .getApiData()
      // .pipe(
      //   skipWhile((res: Object) => {
      //     return Object.keys(res).length == 0;
      //   })
      // )
      // .pipe(skipWhile((res:any)=> !!res.data ))
      .subscribe((res: any) => {
        this.apiData = res;
        this.source = 'From Behavior Subject';
      });
  }
}
