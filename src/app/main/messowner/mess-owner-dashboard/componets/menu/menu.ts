import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
  encapsulation: ViewEncapsulation.None
})
export class Menu implements OnInit {

  activeSideTab: string = 'menu';

  days: DayMenu[] = [
    {
      name: 'Monday', isOpen: true, newItem: '',
      items: [
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: false },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
      ]
    },
    {
      name: 'Tuesday', isOpen: true, newItem: '',
      items: [
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: false },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
      ]
    },
    {
      name: 'Wednesday', isOpen: true, newItem: '',
      items: [
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: false },
        { name: 'Chapati', checked: true },
      ]
    },
    {
      name: 'Thursday', isOpen: true, newItem: '',
      items: [
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: false },
        { name: 'Chapati', checked: true },
      ]
    },
    {
      name: 'Friday', isOpen: true, newItem: '',
      items: [
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: false },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
      ]
    },
    {
      name: 'Saturday', isOpen: true, newItem: '',
      items: [
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: false },
        { name: 'Chapati', checked: true },
      ]
    },
    {
      name: 'Sunday', isOpen: true, newItem: '',
      items: [
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: true },
        { name: 'Chapati', checked: false },
        { name: 'Chapati', checked: true },
      ]
    },
  ];

  ngOnInit(): void { }

  toggleDay(index: number): void {
    this.days[index].isOpen = !this.days[index].isOpen;
  }

  toggleItem(dayIndex: number, itemIndex: number): void {
    this.days[dayIndex].items[itemIndex].checked =
      !this.days[dayIndex].items[itemIndex].checked;
  }

  addItem(day: DayMenu): void {
    const name = day.newItem?.trim();
    if (!name) return;
    day.items.push({ name, checked: false });
    day.newItem = '';
  }

  expandAll(): void {
    this.days.forEach(d => (d.isOpen = true));
  }

  collapseAll(): void {
    this.days.forEach(d => (d.isOpen = false));
  }

  onEdit(): void {
    console.log('Edit clicked', this.days);
  }

  onSave(): void {
    console.log('Save clicked', this.days);
  }
}