import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { MatInputModule }     from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule }    from '@angular/material/button';
import { MatIconModule }      from '@angular/material/icon';

@Component({
  selector: 'app-mess-details-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './mess-details-form.html',
  styleUrl: './mess-details-form.css',
})
export class MessDetailsForm  implements OnInit {
   messForm!: FormGroup;
  foodOptions     = ['Veg', 'Non-Veg', 'Both'];
  licenseFileName = '';
  messImageCount  = 0;
  isDragOver      = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.messForm = this.fb.group({
      name: [''],
      address: this.fb.group({
        shopNumber: [''],
        area:       [''],
        city:       [''],
        pincode:    [''],
        landmark:   ['']
      }),
      mobile:        [''],
      email:         [''],
      licenseNumber: [''],
      licenseImage:  [null],
      foodType:      ['Veg'],
      messImages:    [null]
    });
  }

  get f() {
    return this.messForm.controls;
  }

  get address() {
    return (this.messForm.get('address') as FormGroup).controls;
  }

  selectFoodType(option: string): void {
    this.messForm.get('foodType')?.setValue(option);
  }

  onLicenseSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.licenseFileName = input.files[0].name;
      this.messForm.get('licenseImage')?.setValue(input.files[0]);
    }
  }

  onMessImagesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.messImageCount = input.files.length;
      this.messForm.get('messImages')?.setValue(Array.from(input.files));
    }
  }

  onImageDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer?.files.length) {
      this.messImageCount = event.dataTransfer.files.length;
      this.messForm.get('messImages')
          ?.setValue(Array.from(event.dataTransfer.files));
    }
  }

  goToStep(step: number): void {
    switch (step) {
      case 1: this.router.navigate(['/register/mess-details']); break;
      case 2: this.router.navigate(['/register/menu']);         break;
      case 3: this.router.navigate(['/register/price']);        break;
      case 4: this.router.navigate(['/register/time']);         break;
    }
  }

  onBack(): void {
    this.router.navigate(['/']);
  }

  onNext(): void {
    this.router.navigate(['/mess-owner-form/mess-menu-form']);
  }
}
