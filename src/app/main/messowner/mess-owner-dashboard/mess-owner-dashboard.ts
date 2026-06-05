import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Sidenav } from './sidenav/sidenav';

@Component({
  standalone: true,
  selector: 'app-mess-owner-dashboard',
  imports: [RouterOutlet, Navbar, Sidenav],
  templateUrl: './mess-owner-dashboard.html',
  styleUrls: ['./mess-owner-dashboard.css'],
})
export class MessOwnerDashboard {

}
