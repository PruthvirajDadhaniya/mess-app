import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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

export class MessMenuForm implements OnInit {
  activeMealTab: 'morning' | 'evening' = 'morning';
  days: DayMenu[] = [];

  private dayNames = [
    'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buildDays(this.activeMealTab);
  }

  // ── Build days for selected tab ──────────────
  private buildDays(tab: 'morning' | 'evening'): void {
    this.days = this.dayNames.map((name, index) => ({
      name,
      isOpen: index === 0,   // only Monday open by default
      newItem: '',
      items: this.getDefaultItems(tab)
    }));
  }

  // ── Default items per tab ────────────────────
  private getDefaultItems(tab: 'morning' | 'evening'): MenuItem[] {
    const morningItems = ['Idli', 'Poha', 'Upma', 'Chapati',];
    const eveningItems = ['Chapati', 'Dal', 'Rice', 'Sabji'];
    const list = tab === 'morning' ? morningItems : eveningItems;
    return list.map((name, i) => ({
      name,
      checked: i < 0  // first 3 checked by default
    }));
  }

  // ── Switch meal tab ──────────────────────────
  switchTab(tab: 'morning' | 'evening'): void {
    if (this.activeMealTab === tab) return; // already active
    this.activeMealTab = tab;
    this.buildDays(tab);  // rebuild days with new tab items
  }

  // ── Toggle day open/close ────────────────────
  toggleDay(index: number): void {
    this.days[index].isOpen = !this.days[index].isOpen;
  }

  // ── Toggle checkbox ──────────────────────────
  toggleItem(day: DayMenu, item: MenuItem): void {
    item.checked = !item.checked;
  }

  // ── Add new item to day ──────────────────────
  addItem(day: DayMenu): void {
    const val = day.newItem.trim();
    if (!val) return;
    // Avoid duplicates
    const exists = day.items.some(
      i => i.name.toLowerCase() === val.toLowerCase()
    );
    if (exists) {
      day.newItem = '';
      return;
    }
  }

  // ── Navigation ───────────────────────────────
  goToStep(step: number): void {
    switch (step) {
      case 1: this.router.navigate(['/register/mess-details']); break;
      case 2: this.router.navigate(['/register/menu']); break;
      case 3: this.router.navigate(['/register/price']); break;
      case 4: this.router.navigate(['/register/time']); break;
    }
  }

  onBack(): void {
    this.router.navigate(['/mess-owner-form/mess-details-form']);
  }

  onNext(): void {
    this.router.navigate(['/mess-owner-form/mess-price-form']);
  }
}
