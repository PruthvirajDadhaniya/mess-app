import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.css'],
})
export class Sidenav {
  constructor(private router: Router) { }

  navigateToCharts() {
    this.router.navigate(['/mess-owner-dashboard/charts']);
  }

  @Output() menuClick = new EventEmitter<void>();

  onMenuClick() {
    this.menuClick.emit();
  }
}
