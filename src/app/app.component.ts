import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'bicing-perversio-socialisme';
  authService = inject(AuthService);
  router = inject(Router);
  // http = inject(HttpClient);

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        })
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log('Status:', this.authService.currentUserSig());
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
