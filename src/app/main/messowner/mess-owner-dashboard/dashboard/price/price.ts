import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './price.html',
  styleUrls: ['./price.css']
})
export class Price {
  priceData = {
    monthlyMembership: '3500 Rs',
    singleMeal: '100 Rs',
    specialVeg: '150 Rs',
    specialNonVeg: '200 Rs'
  };

  onEdit() {
    console.log('Edit Price clicked');
  }

  onSave() {
    console.log('Save Price clicked:', this.priceData);
  }
}