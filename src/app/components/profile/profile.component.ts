import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
   private authService = inject(AuthService);
    private router = inject(Router);
  async logout(): Promise<void> {
    try {
      await this.authService.logout();
      this.router.navigate(['auth/login']);
    } catch (err) {
      console.error(err);
    }
  }
}
