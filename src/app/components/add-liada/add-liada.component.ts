import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LiadesFirebaseService } from '../../services/liades-firebase.service';

@Component({
  selector: 'app-add-liada',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-liada.component.html',
  styleUrl: './add-liada.component.scss'
})
export class AddLiadaComponent {
  liadesFirebaseService = inject(LiadesFirebaseService);
  router = inject(Router);

  addLiadaForm: FormGroup = this.fb.group({ // Initialize here
    name: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    if (this.addLiadaForm.valid) {
      const name = this.addLiadaForm.value.name;
      this.liadesFirebaseService.addLiada(name).subscribe({
        next: (liadaId) => {
          console.log('Liada added with ID:', liadaId);
          this.router.navigate(['/liades']);
        },
        error: (err) => {
          console.error('Error adding liada:', err);
        }
      });
    } else {
      console.log('Form is invalid!');
    }
  }
}
