import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { pageLoadAnimation } from 'src/app/app-common/animations';

@Component({
  selector: 'ss-app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [pageLoadAnimation],
})
export class MainComponent implements OnInit {
  value: number = 0;
  sub: any;
  constructor() {}

  ngOnInit(): void {
    const interval$ = interval(1000);
    const sub = interval$.subscribe({
      next: (value: number) => {
        console.log(value);
        this.value = value;
      },
      error: (err) => console.log(err),
      complete: () => console.log('completed'),
    });

    setTimeout(() => {
      sub.unsubscribe();
      behaviouSub.next(100);
      behaviouSub.unsubscribe();
      console.log(behaviouSub);
      console.log(sub);
      console.log(interval$);
      behaviouSub.next(22);
      // interval$.subscribe(
      //   (val) => {
      //     console.log(val);
      //   },
      //   (err: any) => {
      //     console.log(err);
      //   },
      //   () => {
      //     console.log('completed');
      //   }
      // );
    }, 10000);

    const behaviouSub: BehaviorSubject<number> = new BehaviorSubject<number>(5);
    behaviouSub.subscribe({
      next: (val: number) => console.log(val),
      error: (err: Error) => console.log(err),
      complete: () => console.log('completed'),
    });
    behaviouSub.next(3);
  }
}
