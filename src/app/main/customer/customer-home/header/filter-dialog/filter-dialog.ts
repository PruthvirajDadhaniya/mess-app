import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-filter-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule,
    MatDividerModule
  ],
  templateUrl: './filter-dialog.html',
  styleUrl: './filter-dialog.css',
})
export class FilterDialog {
  ratingOptions = ['Any', '3.5+', '4.5+', '5.0'];
  foodOptions = ['Veg Only', 'Non-veg'];

  selectedRating = 'Any';
  selectedFood = '';

  constructor(private dialogRef: MatDialogRef<FilterDialog>) { }

  resetFilters(): void {
    this.selectedRating = 'Any';
    this.selectedFood = '';
  }

  applyFilters(): void {
    this.dialogRef.close({
      rating: this.selectedRating,
      food: this.selectedFood
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
