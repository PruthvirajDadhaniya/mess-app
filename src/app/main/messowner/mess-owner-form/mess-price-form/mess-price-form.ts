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
  // Set to 3 so that ONLY the Price step gets the active highlight style
  currentStep: number = 3; 

  constructor(private router: Router) {}

  goToStep(stepNum: number) {
    if (stepNum === 1) this.router.navigate(['/mess-owner-form']); 
    if (stepNum === 2) this.router.navigate(['/mess-owner-form/mess-menu-form']);
    if (stepNum === 3) this.router.navigate(['/mess-owner-form/mess-price-form']);
    if (stepNum === 4) this.router.navigate(['/mess-owner-form/mess-time-form']);
  }

  onBack(): void {
    this.router.navigate(['/mess-owner-form/mess-menu-form']);
  }

  onNext(): void {
    this.router.navigate(['/mess-owner-form/mess-time-form']);
  }
}