import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-menu-drawer',
  imports: [
    CommonModule, MatButtonModule, MatIconModule, MatCardModule
  ],
  templateUrl: './menu-drawer.html',
  styleUrls: ['./menu-drawer.css'],
  animations: [
    trigger('backdropAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ opacity: 0 }))
      ])
    ]),

    trigger('drawerAnim', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)'
        }),
        animate(
          '300ms ease-out',
          style({
            transform: 'translateX(0)'
          })
        )
      ]),
      transition(':leave', [
        animate(
          '250ms ease-in',
          style({
            transform: 'translateX(100%)'
          })
        )
      ])
    ])
  ]
})
export class MenuDrawer {
  isOpen = false;

  chef: any = {
    name: '',
    subtitle: '',
    timing: '',
    distance: '',
    rating: '',
    foodType: '',
    address: '',
    contact: '',
    liked: false,
    heroImg: '',
    menuImg: '',
  };

  loadChef(data: any): void {
    console.log('Chef Data:', data);
    this.chef = { ...data };
  }

  open(): void {
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.isOpen = false;
    document.body.style.overflow = '';
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    console.error('Image failed:', img.src);

    img.src = 'assets/images/thali-1.jpg';
  }
}
