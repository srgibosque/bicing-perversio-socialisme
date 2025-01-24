import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User as FirebaseUser } from 'firebase/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user: FirebaseUser | null = null;
   private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.authState$.subscribe((user) => {
      this.user = user;
    });
  }

  async logout(): Promise<void> {
    try {
      await this.authService.logout();
      this.router.navigate(['auth/login']);
    } catch (err) {
      console.error(err);
    }
  }
}
