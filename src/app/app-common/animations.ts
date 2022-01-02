import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const leftPanelAnimation = [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-100%)' }),
    animate('0.4s', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('0.3s', style({ opacity: 0, transform: 'translateX(-100%)' })),
  ]),
];

export const bannerAnimation = [
  transition(':enter', [
    style({ opacity: 1, transform: 'translateX(-100%)' }),
    animate('4s', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('4s', style({ opacity: 1, transform: 'translateX(100%)' })),
  ]),
];

export const bannerRotate = [
  state(
    'small',
    style({
      opacity: 1,
      transform: 'scale(-0.5)',
    })
  ),
  state(
    'large',
    style({
      opacity: '1',
      transform: 'scale(4)',
    })
  ),
  transition('small => large', animate('4s 100ms ease-in')),
  transition('large => small', animate('4s 100ms ease-out')),

  // transition('out', [
  //   style({ opacity: 1, transform: 'scale(-1)' }),
  //   animate('2s', style({ opacity: 1, transform: 'scale(3)' })),
  // ]),
  // transition('in', [
  //   animate('2s', style({ opacity: 1, transform: 'scale(0.2)' })),
  // ]),
];

export const dynamicDiv = [
  transition(':enter', [
    style({ opacity: 1, transform: 'translateX(-400%)' }),
    animate('2s', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('0.5s', style({ opacity: 1, transform: 'translateX(100%)' })),
  ]),
];

export const pageLoadAnimation = trigger('pageLoadAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scaleY(95%)' }),
    animate('0.8s', style({ opacity: 1, transform: 'scaleY(100%)' })),
  ]),
  transition(':leave', [
    animate('0.1s', style({ opacity: 0, transform: 'scaleY(100%)' })),
  ]),
]);
