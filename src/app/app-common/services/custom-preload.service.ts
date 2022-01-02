import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadService implements PreloadingStrategy{

  constructor() { }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if(route && route.data?.preload) {
      return fn();
    } else {
      return EMPTY;
    }
  }
}
