import { Routes } from '@angular/router';
import { LiadesListComponent } from './components/liades-list/liades-list.component';
import { AddLiadaComponent } from './components/add-liada/add-liada.component';
import { DeleteLiadaComponent } from './components/delete-liada/delete-liada.component';

export const routes: Routes = [
  // {
  //   path: 'auth',
  //   canActivate: [publicGuard],
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginComponent
  //     },
  //     {
  //       path: 'signup',
  //       component: SignUpComponent
  //     },

  //   ]
  // },
  {
    path: 'liades', 
    component: LiadesListComponent,
    children: [
      {
        path: 'add', 
        component: AddLiadaComponent
      },
      {
        path: 'delete/:id', 
        component:  DeleteLiadaComponent
      }
    ]
  },
  // {
  //   path: 'profile', 
  //   component: ProfileComponent,
  //   canActivate: [authGuard],
  // },
  
  { path: '', redirectTo: '/liades', pathMatch: 'full' }
];
