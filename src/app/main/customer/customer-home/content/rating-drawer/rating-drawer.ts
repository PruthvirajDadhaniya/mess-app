import { Component, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export interface Review {
  name: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-rating-drawer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  templateUrl: './rating-drawer.html',
  styleUrls: ['./rating-drawer.css'],
})
export class RatingDrawer {
  // ── Summary ───────────────────────────────────────
  averageRating = 4.1;
  totalReviews = 397;

  // ── Reviews Data ──────────────────────────────────
  allReviews: Review[] = [
    {
      name: 'Subhajit Paul',
      rating: 5,
      comment:
        'Food taste good and the packaging is amazing. Home delivery in 30-35 minutes, they will take longer in some cases.',
    },
    {
      name: 'Kajal Agrawal',
      rating: 4,
      comment:
        'Great at the service. Very nice service and food. Mr. Ayan served us very well, thank you.',
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      comment:
        'Absolutely loved the home-cooked taste! The dal was exactly like my mom used to make. Will order again.',
    },
    {
      name: 'Rahul Verma',
      rating: 4,
      comment:
        'Good food overall. Delivery was on time and packaging was neat. Portion size could be a bit larger.',
    },
    {
      name: 'Sneha Patil',
      rating: 3,
      comment: 'Average experience. Food was okay but expected more flavour for the price.',
    },
    {
      name: 'Amit Desai',
      rating: 5,
      comment:
        "Best home chef platform! The thali was fresh and reminded me of my grandmother's cooking.",
    },
    {
      name: 'Divya Nair',
      rating: 4,
      comment: 'Tasty food and prompt delivery. The UI to place an order is very smooth.',
    },
    {
      name: 'Rohan Joshi',
      rating: 5,
      comment:
        'Exceptional quality. Every dish is cooked with care. Highly recommend the Kolhapur special thali.',
    },
    {
      name: 'Anita Kulkarni',
      rating: 3,
      comment:
        'Food was decent. Packing kept everything intact. Would like more variety in the menu.',
    },
    {
      name: 'Vikram Mehta',
      rating: 4,
      comment: 'Nice concept and good execution. Will suggest friends and family to try it out.',
    },
  ];

  // ── Pagination ─────────────────────────────────────
  itemsPerPage = 2;
  currentPage = 1;

  get totalPages(): number {
    return Math.ceil(this.allReviews.length / this.itemsPerPage);
  }

  get paginatedReviews(): Review[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.allReviews.slice(start, start + this.itemsPerPage);
  }

  // ── User Feedback ──────────────────────────────────
  userRating = 0;
  hoveredStar = 0;
  userMessage = '';

  constructor(
    @Optional() public dialogRef: MatDialogRef<RatingDrawer>,
    private snackBar: MatSnackBar
  ) {}

  // ── Star Helpers ───────────────────────────────────
  getFilledStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.round(rating)).fill(0);
  }

  getStarIcon(index: number, source: 'avg' | 'review' | 'input', rating?: number): string {
    const ref = source === 'input'
      ? (this.hoveredStar || this.userRating)
      : (rating ?? 0);
    return index <= ref ? 'star' : 'star_border';
  }

  // ── Pagination Helpers ─────────────────────────────
  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(this.totalPages, start + maxVisible - 1);
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  showEllipsisBefore(): boolean {
    return this.getPageNumbers()[0] > 1;
  }

  showEllipsisAfter(): boolean {
    const pages = this.getPageNumbers();
    return pages[pages.length - 1] < this.totalPages;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  // ── Submit Feedback ────────────────────────────────
  submitFeedback(): void {
    if (!this.userRating) {
      this.snackBar.open('Please select a star rating first.', 'OK', { duration: 3000 });
      return;
    }
    if (!this.userMessage.trim()) {
      this.snackBar.open('Please write a message before submitting.', 'OK', { duration: 3000 });
      return;
    }

    this.allReviews.unshift({
      name: 'You',
      rating: this.userRating,
      comment: this.userMessage,
    });
    this.totalReviews += 1;
    this.currentPage = 1;
    this.userRating = 0;
    this.hoveredStar = 0;
    this.userMessage = '';

    this.snackBar.open('Thank you for your feedback!', '✓', {
      duration: 3000,
      panelClass: ['success-snack'],
    });
  }

  // ── Close with animation ──────────────────────────
  close(): void {
    if (this.dialogRef) {
      // Get the overlay pane
      const overlayPane = document.querySelector('.cdk-overlay-pane.ratings-dialog-panel') as HTMLElement;
      
      if (overlayPane) {
        overlayPane.classList.add('slide-out');
        // Wait for animation to finish
        setTimeout(() => {
          this.dialogRef.close();
        }, 300);
      } else {
        this.dialogRef.close();
      }
    }
  }
}
