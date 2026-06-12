import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login-register.html',
  styleUrl: './login-register.css',
})
export class LoginRegister {

 // 2. Set 'customer' as the default matching your tab string values
  selectedRole: 'owner' | 'customer' = 'customer'; 
  hidePassword = true;
  hideConfirmPassword = true;
  showRegister = false;

  // 3. Inject Router service
  constructor(private router: Router) {}

  // 4. Handle navigation logic on click
  onLogin() {
    if (this.selectedRole === 'customer') {
      this.router.navigate(['/customer-home']); // Target route for customer
    } else if (this.selectedRole === 'owner') {
      this.router.navigate(['/mess-owner-form/mess-details-form']); // Target route for owner
    }
  }
}
