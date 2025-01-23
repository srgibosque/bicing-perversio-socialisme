import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMessage: string | null = null;
  fb = inject(FormBuilder);
  // http = inject(HttpClient);
  router = inject(Router);
  private authService = inject(AuthService);

  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  async onSubmit(): Promise<void> {
    if (this.loginForm.invalid) return;

    try {
      await this.authService.login(
        this.loginForm.value.email || '', 
        this.loginForm.value.password  || ''
      );
      this.router.navigate(['/']);
    } catch (err) {
      console.error(err);
    }
  }
}
