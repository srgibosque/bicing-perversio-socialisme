import { Component, inject, OnInit } from '@angular/core';
import {  RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'bicing-perversio-socialisme';
  isUserLoggedIn = false;
  authStateObs$ = inject(AuthService).authState$;

  ngOnInit() {
    this.authStateObs$.subscribe((user) => {
      this.isUserLoggedIn = !!user;
    });
  };
}
