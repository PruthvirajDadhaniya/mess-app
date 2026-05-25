import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  foodOptions = ['Veg', 'Non-Veg', 'Both'];
  licenseFileName = '';
  messImageCount = 0;
  isDragOver = false;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.messForm = this.fb.group({
      name: ['', Validators.required],

      address: this.fb.group({
        shopNumber: ['', Validators.required],
        area:       ['', Validators.required],
        city:       ['', Validators.required],
        pincode:    ['', [
          Validators.required,
          Validators.pattern(/^\d{6}$/)
        ]],
        landmark:   ['', Validators.required]
      }),

      mobile:        ['', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ]],
      email:         ['', [Validators.required, Validators.email]],
      licenseNumber: ['', Validators.required],
      licenseImage:  [null, Validators.required],
      foodType:      ['Veg', Validators.required],
      messImages:    [null, Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.messForm.controls;
  }

  get address(): { [key: string]: AbstractControl } {
    return (this.messForm.get('address') as FormGroup).controls;
  }

  selectFoodType(option: string): void {
    this.messForm.get('foodType')?.setValue(option);
  }

  onLicenseSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      this.licenseFileName = file.name;
      this.messForm.get('licenseImage')?.setValue(file);
    }
  }

  onMessImagesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.messImageCount = input.files.length;
      this.messForm.get('messImages')?.setValue(Array.from(input.files));
    }
  }

  onDragLeave(): void {
    this.isDragOver = false;
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

  onBack(): void {
    console.log('Back clicked');
    // this.router.navigate(['/previous']);
  }

  onNext(): void {
    this.submitted = true;
    if (this.messForm.invalid) {
      this.messForm.markAllAsTouched();
      return;
    }
    console.log('Form submitted:', this.messForm.value);
    // this.router.navigate(['/menu']);
  }
}
