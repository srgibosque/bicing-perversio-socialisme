import { Routes } from '@angular/router';
import { LiadesListComponent } from './components/liades-list/liades-list.component';
import { AddLiadaComponent } from './components/add-liada/add-liada.component';
import { UpdateLiadaComponent } from './components/update-liada/update-liada.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: 'liades', 
    component: LiadesListComponent,
    children: [
      {
        path: 'add', 
        component: AddLiadaComponent
      },
      {
        path: 'update', 
        component: UpdateLiadaComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  { path: '', redirectTo: '/liades', pathMatch: 'full' }
];
