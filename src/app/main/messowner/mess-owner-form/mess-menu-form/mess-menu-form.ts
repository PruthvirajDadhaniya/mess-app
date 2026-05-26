import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mess-menu-form',
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './mess-menu-form.html',
  styleUrl: './mess-menu-form.css',
})

export class MessMenuForm {
   constructor(private router: Router) {}
   selectedTab = 'morning';

  weeks = [
    {
      day: 'Monday',
      expanded: true,
      newItem: '',
      items: [
        { name: 'Chapati', checked: true },
        { name: 'Rice', checked: true },
        { name: 'Dal', checked: true },
        { name: 'Paneer', checked: false },
        { name: 'Salad', checked: false },
        { name: 'Milk', checked: true }
      ]
    },

    {
      day: 'Tuesday',
      expanded: false,
      newItem: '',
      items: [
        { name: 'Poha', checked: false },
        { name: 'Tea', checked: true }
      ]
    },

    {
      day: 'Wednesday',
      expanded: false,
      newItem: '',
      items: []
    },

    {
      day: 'Thursday',
      expanded: false,
      newItem: '',
      items: []
    },

    {
      day: 'Friday',
      expanded: false,
      newItem: '',
      items: []
    },

    {
      day: 'Saturday',
      expanded: false,
      newItem: '',
      items: []
    },

    {
      day: 'Sunday',
      expanded: false,
      newItem: '',
      items: []
    }
  ];
  

  togglePanel(index: number): void {
    this.weeks[index].expanded = !this.weeks[index].expanded;
  }

  addMenu(index: number): void {

    const value = this.weeks[index].newItem.trim();

    if (!value) return;

    this.weeks[index].items.push({
      name: value,
      checked: false
    });

    this.weeks[index].newItem = '';
  }

   goToStep(step: number): void {
    switch (step) {
      case 1: this.router.navigate(['/register/mess-details']); break;
      case 2: this.router.navigate(['/register/menu']);         break;
      case 3: this.router.navigate(['/register/price']);        break;
      case 4: this.router.navigate(['/register/time']);         break;
    }
  }
  onBack(): void {
    this.router.navigate(['/mess-owner-form/mess-details-form']);
  }

  onNext(): void {
    this.router.navigate(['/mess-owner-form/mess-price-form']);
  }
}
