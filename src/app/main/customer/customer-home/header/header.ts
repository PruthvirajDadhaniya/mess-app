import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialog } from './filter-dialog/filter-dialog';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  constructor(public dialog: MatDialog, private router: Router) { }

  // isMenuOpen = false;

  // toggleMenu(): void {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

    isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  openFilterDialog(): void {
    this.dialog.open(FilterDialog, {

      // Optional for custom styling
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login-register']);
  }
}
