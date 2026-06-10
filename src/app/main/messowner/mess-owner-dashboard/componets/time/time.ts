import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // [(ngModel)] sathi compulsory import

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule, FormsModule], // NgModel cha error yenar nahi yamuळे
  templateUrl: './time.html',
  styleUrls: ['./time.css']
})
export class Time { // Class cha naav 'Time' kela aahe jyamule lazy routing madhe error yenar nahi
  timeData = {
    morningFrom: '09:00 AM',
    morningTo: '01:00 PM',
    eveningFrom: '06:00 PM',
    eveningTo: '10:00 PM',
    holiday: 'Monday'
  };

  onEdit() {
    console.log('Time Edit Clicked');
  }

  onSave() {
    console.log('Time Save Clicked. Data:', this.timeData);
  }
}