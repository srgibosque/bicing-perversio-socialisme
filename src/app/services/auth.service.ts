import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth, authState, updateProfile } from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential
} from 'firebase/auth';
import { User as FirebaseUser } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  readonly authState$: Observable<FirebaseUser | null> = authState(this.firebaseAuth);

  getCurrentUser(): Observable<FirebaseUser | null> {
    return this.authState$;
  }

  async signup( email: string, password: string, displayName: string ): Promise<UserCredential> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.firebaseAuth,
        email,
        password
      );
  
      const user = userCredential.user;
      if (user) {
        await updateProfile(user, { displayName });
      }
  
      return userCredential;

    } catch (error) {
      console.error('Error during signup:', error);
      throw error;
    }
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
