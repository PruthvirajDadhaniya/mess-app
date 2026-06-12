import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css',
})
export class Feedback {

  reviews = [
    {
      name: 'Subhojit Paul',
      title: 'Food taste good',
      description:
        'Very good place... Food is amazing. Very crowded place. 15-20 minutes of time will take to get a table.'
    },
    {
      name: 'Kajol Agrawal',
      title: 'Great at the service',
      description:
        'Very nice service and food. Mr. Ayan served us very well. Thank you.'
    },
    {
      name: 'Anusua Paul',
      title: 'Food taste good',
      description:
        'Very good place... Food is amazing. Very crowded place. 15-20 minutes of time will take to get a table.'
    }
  ];

}


