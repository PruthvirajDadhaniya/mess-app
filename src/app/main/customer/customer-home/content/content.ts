import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-content',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  visibleCount = 6;

  chefs = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: 'Kolhapur Khanaval',
    image: i % 3 === 0
      ? './assets/images/food1.jpg'
      : i % 3 === 1
        ? './assets/images/food2.jpg'
        : './assets/images/food3.jpg',
    rating: 4.1,
    reviews: 397,
    address: '925, Main road, Bazar lane,\n Hadapsar, Pune',
    distance: '0.8 km',
    timing: '11:00 AM to 2:00 PM',
    evening: '7:15 PM to 9:30 PM',
    phone: '+91 987456123'
  }));

  get displayedChefs() {
    return this.chefs.slice(0, this.visibleCount);
  }

  showMore() {
    this.visibleCount += 6;
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = './assets/images/thali-1.jpg'; // Fallback image if original fails to load
  }
}
