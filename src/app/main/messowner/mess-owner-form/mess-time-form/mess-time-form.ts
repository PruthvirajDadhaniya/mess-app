import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mess-time-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './mess-time-form.html',
  styleUrls: ['./mess-time-form.css']
})
export class MessTimeForm {
  // Set to 4 so that ONLY the Time step gets the active highlight style
  currentStep: number = 4;

  constructor(private router: Router) { }

  goToStep(stepNum: number) {
    if (stepNum === 1) this.router.navigate(['/mess-owner-form']);
    if (stepNum === 2) this.router.navigate(['/mess-owner-form/mess-menu-form']);
    if (stepNum === 3) this.router.navigate(['/mess-owner-form/mess-price-form']);
    if (stepNum === 4) this.router.navigate(['/mess-owner-form/mess-time-form']);
  }

  back() {
    this.goToStep(3);
  }

  done() {
    this.router.navigate(['/dashboard']);
  }
}