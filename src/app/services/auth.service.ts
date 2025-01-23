import { inject, Injectable, signal } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Auth, authState, updateProfile, user } from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential
} from 'firebase/auth';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  readonly authState$ = authState(this.firebaseAuth)
  // user$ = user(this.firebaseAuth);
  // currentUserSig = signal<User | null | undefined>(undefined);

  signup(email: string, password: string): Promise<UserCredential | void> {
    return createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    );
  }

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    );
  }

  logout(): Promise<void> {
    return this.firebaseAuth.signOut();
  }

}
