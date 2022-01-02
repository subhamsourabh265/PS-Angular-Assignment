import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pageLoadAnimation } from 'src/app/app-common/animations';
import { DataService } from 'src/app/app-common/services/data.service';

@Component({
  selector: 'ss-app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [pageLoadAnimation],
})
export class DetailsComponent implements OnInit {
  @ViewChild('formTable') formTable: ElementRef | any;
  formDetails: any;
  scrolling: boolean = false;
  scrollTimer: any;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.data.formData) {
      this.formDetails = this.data.formData;
    } else if (sessionStorage.getItem('studentForm')) {
      const data: any = sessionStorage.getItem('studentForm');
      const parsedData = JSON.parse(data);
      this.formDetails = parsedData.students;
    }
  }

  backClick() {
    this.router.navigate(['/studentForm/formMain']);
  }

  onScroll() {
    if (this.scrollTimer) {
      console.log('return');
      return;
    }

    this.scrollTimer = setTimeout(() => {
      console.log(this.formTable);
      if (this.formTable?.nativeElement?.scrollTop == 0) {
        this.scrolling = false;
      } else {
        this.scrolling = true;
      }
      this.scrollTimer = undefined;
    }, 2000);
  }
}
