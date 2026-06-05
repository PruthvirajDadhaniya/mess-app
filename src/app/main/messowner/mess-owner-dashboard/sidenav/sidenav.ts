import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterOutlet,
   
  ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
})
export class Sidenav {

}
