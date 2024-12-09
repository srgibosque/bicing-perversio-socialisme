import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDf2Qz4t7l_mM7zn_1F_jyKk_KAwA7QWIA",
  authDomain: "bicing-perversio-socialisme.firebaseapp.com",
  projectId: "bicing-perversio-socialisme",
  storageBucket: "bicing-perversio-socialisme.firebasestorage.app",
  messagingSenderId: "12631905388",
  appId: "1:12631905388:web:13d95390facc441a9e7449",
  measurementId: "G-8N4T9WRVGG"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())

  ]
};
