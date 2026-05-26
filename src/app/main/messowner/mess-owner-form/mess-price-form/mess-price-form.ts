import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mess-price-form',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './mess-price-form.html',
  styleUrls: ['./mess-price-form.css']
})
export class MessPriceForm {

  constructor(private router: Router) {}

  back() {
    this.router.navigate(['/mess-owner-form/mess-menu-form']);
  }

  next() {
    this.router.navigate(['/mess-owner-form/mess-time-form']);
  }
}