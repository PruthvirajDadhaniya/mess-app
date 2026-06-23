import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Sidenav } from './sidenav/sidenav';
import { MessownerFooter } from "./messowner-footer/messowner-footer";

@Component({
  standalone: true,
  selector: 'app-mess-owner-dashboard',
  imports: [RouterOutlet, Navbar, Sidenav, MessownerFooter],
  templateUrl: './mess-owner-dashboard.html',
  styleUrls: ['./mess-owner-dashboard.css'],
})
export class MessOwnerDashboard {
  isSidebarOpen = false;
  hideToggle = false;

  @HostListener('window:scroll', [])
  onScroll() {

    if (this.isSidebarOpen) {
      return;
    }

    this.hideToggle = window.scrollY > 100;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;

    if (this.isSidebarOpen) {
      this.hideToggle = true;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeSidebar() {
    this.isSidebarOpen = false;
    this.hideToggle = false;
    document.body.style.overflow = 'auto';
  }
}
