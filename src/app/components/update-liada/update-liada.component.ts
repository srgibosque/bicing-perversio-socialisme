import { Component, inject, OnInit } from '@angular/core';
import { LiadesFirebaseService } from '../../services/liades-firebase.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Liada } from '../../models/liada.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-liada',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-liada.component.html',
  styleUrl: './update-liada.component.scss'
})
export class UpdateLiadaComponent implements OnInit {
  incrementForm!: FormGroup;
  liades: Liada[] = [];

  liadesFirebaseService = inject(LiadesFirebaseService);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.incrementForm = this.fb.group({
      selectedLiada: ['', Validators.required], 
    });

    this.liadesFirebaseService.getLiades().subscribe((liades: Liada[]) => {
      this.liades = liades;
    });
  }

  onSubmit(): void {
    if (this.incrementForm.valid) {
      const selectedLiadaId = this.incrementForm.value.selectedLiada;
      this.liadesFirebaseService.incrementTimes(selectedLiadaId).subscribe({
        next: () => {
          console.log('Times incremented successfully!');
        },
        error: (err) => {
          console.error('Error incrementing times:', err);
        }
      });
    } else {
      console.log('Form is invalid!');
    }
  }
}
