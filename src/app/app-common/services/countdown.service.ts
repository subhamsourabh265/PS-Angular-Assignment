import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { timerCount, timerLog } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  timerSubject = new Subject<number>();
  timerLogSubject = new Subject<timerLog>();
  timerCountSubject = new Subject<timerCount>();
  constructor() { }
}
