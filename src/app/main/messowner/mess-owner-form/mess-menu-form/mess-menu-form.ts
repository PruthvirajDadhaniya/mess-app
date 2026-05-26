import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule }       from '@angular/forms';
import { Router }            from '@angular/router';
import { MatButtonModule }   from '@angular/material/button';
import { MatIconModule }     from '@angular/material/icon';

export interface MenuItem {
  name: string;
  checked: boolean;
}

export interface DayMenu {
  name: string;
  isOpen: boolean;
  items: MenuItem[];
  newItem: string;
}

@Component({
  selector: 'app-mess-menu-form',
  imports: [
     CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './mess-menu-form.html',
  styleUrl: './mess-menu-form.css',
})

export class MessMenuForm implements OnInit{
   activeMealTab: 'morning' | 'evening' = 'morning';

  days: DayMenu[] = [];

  private dayNames = [
    'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  private defaultItems: string[] = [
    'Chapati', 'Chapati', 'Chapati',
    'Chapati', 'Chapati', 'Chapati'
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.buildDays();
  }

  buildDays(): void {
    this.days = this.dayNames.map((name, index) => ({
      name,
      isOpen: index === 0,
      newItem: '',
      items: this.defaultItems.map((item, i) => ({
        name: item,
        checked: [0, 1, 2, 4].includes(i)
      }))
    }));
  }

  switchTab(tab: 'morning' | 'evening'): void {
    this.activeMealTab = tab;
    this.buildDays();
  }

  toggleDay(index: number): void {
    this.days[index].isOpen = !this.days[index].isOpen;
  }

  toggleItem(day: DayMenu, item: MenuItem): void {
    item.checked = !item.checked;
  }

  addItem(day: DayMenu): void {
    const val = day.newItem.trim();
    if (!val) return;
    day.items.push({ name: val, checked: true });
    day.newItem = '';
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
