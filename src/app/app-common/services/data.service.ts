import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable, Subject } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  viewChangeSubject = new BehaviorSubject<string>('desktop');
  dataCaptureSubject = new BehaviorSubject<any>({});

  firstClick = false;
  formData: any;

  constructor(private http: HttpClient) {}

  getTableData(): Observable<any> {
    return this.http.get('assets/mocks/studentMarks.json');
  }

  getProductData(): Observable<any> {
    return this.http.get('assets/mocks/products.json');
  }

  getApiData(): BehaviorSubject<any> {
    if (!this.firstClick) {
      this.firstClick = true;
      lastValueFrom(this.http.get('assets/mocks/people.json')).then(
        (res: any) => {
          if (res) {
            this.dataCaptureSubject.next(res);
          }
        }
      );
      // .subscribe(
      //   (res:any) => {
      //     if (res) {
      //       this.dataCaptureSubject.next(res);
      //     }
      //   }
      // );
    }
    return this.dataCaptureSubject;
  }

  fetchData(path: string) {
    return fetch(path).then((res) => res.json());
  }

  getJsonData(path: string): Observable<any> {
    return this.http.get(path, {
      observe: 'events',
    });
  }
}
