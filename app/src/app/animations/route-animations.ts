import {
    trigger,
    transition,
    style,
    animate,
    query,
    group
  } from '@angular/animations';
  
  export const slideInAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 0,
        })
      ], { optional: true }), // Rendre cette requête optionnelle
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' })
      ], { optional: true }), // Rendre cette requête optionnelle
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
        ], { optional: true }), // Rendre cette requête optionnelle
        query(':enter', [
          animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ], { optional: true }) // Rendre cette requête optionnelle
      ])
    ])
  ]);