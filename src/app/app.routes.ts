import { Routes } from '@angular/router';
import { LiadesListComponent } from './components/liades-list/liades-list.component';
import { AddLiadaComponent } from './components/add-liada/add-liada.component';
import { UpdateLiadaComponent } from './components/update-liada/update-liada.component';

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
  { path: '', redirectTo: '/liades', pathMatch: 'full' }
];
