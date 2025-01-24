import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  errorMessage: string | null = null;
  fb = inject(FormBuilder);
  router = inject(Router);
  private authService = inject(AuthService);

  signupForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  async onSubmit(): Promise<void> {
    if (this.signupForm.invalid) return;

    try {
      await this.authService.signup(
        this.signupForm.value.email || '',
        this.signupForm.value.password || '',
        this.signupForm.value.username || ''
      );
      this.router.navigate(['/auth/login']);
    } catch (err) {
      console.error(err);
    }
  }
}
