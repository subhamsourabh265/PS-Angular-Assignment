import {
  HttpClient,
  HttpErrorResponse,
  HttpHandler,
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { DataService } from './data.service';

fdescribe('DataService', () => {
  let service: DataService, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch JSON data', () => {
    const url1 = 'https://jsonplaceholder.typicode.com/posts';
    service.getJsonData(url1).subscribe((response) => {
      expect(response.body.length).toBe(101);
    });
    const req = httpTestingController.expectOne(url1);
    console.log(req);
    expect(req.request.method).toEqual('GET');
    // req.flush({payload:Object.values(obj)});
  });

  it('should give an error if test fails', () => {
    const url1 = 'https://jsonplaceholder.typicode.com/posts';
    service.getJsonData(url1).subscribe(
      (response) => {
        fail('the course operation should have failed');
      },
      (error) => {
        expect(error.status).toBe(500);
      }
    );
    const req = httpTestingController.expectOne(url1);
  });
});
