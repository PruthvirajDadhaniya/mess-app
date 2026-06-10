import { AfterViewInit, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Chart } from 'chart.js/auto';

@Component({
  standalone: true,
  selector: 'app-charts',
  imports: [
    MatCardModule
  ],
  templateUrl: './charts.html',
  styleUrls: ['./charts.css'],
})
export class Charts implements AfterViewInit {

   ngAfterViewInit(): void {

    new Chart('foodChart', {
      type: 'doughnut',
      data: {
        labels: ['Veg', 'Non-Veg'],
        datasets: [
          {
            data: [20, 80],
            backgroundColor: ['#8d7df6', '#f47b7b']
          }
        ]
      },
      options: {
        responsive: true,
        cutout: '65%'
      }
    });

    new Chart('visitChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            data: [10, 35, 65, 80, 20, 85, 72],
            backgroundColor: '#cf6242'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}
