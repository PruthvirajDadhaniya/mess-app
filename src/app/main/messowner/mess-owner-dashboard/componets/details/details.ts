import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  images: string[] = [
    '../../../../../../assets/images/thali-1.jpg',
    '../../../../../../assets/images/thali-2.jpg',
    '../../../../../../assets/images/thali-3.jpg',
    '../../../../../../assets/images/left-thali.png'
  ];

  currentImageIndex = 0;


  // Form fields
  messName = 'Kolhapur Khanaval';
  shopNumber = '951235467823';
  area = 'Murgud';
  city = 'Kolhapur';
  pincode = '416212';
  landmark = 'Tukaram chawk';
  mobile = '+91-9874563210';
  email = 'joseph.j@gmail.com';
  license = 'UID-9786-221';

  // Food
  foodOptions = ['Veg', 'Non-Veg', 'Both'];
  selectedFood = 'Veg';

  onEdit(): void { console.log('Edit clicked'); }
  onSave(): void { console.log('Save clicked'); }


  nextImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.images.length;
  }

  previousImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
