import { CommonModule } from '@angular/common';
import { Liada } from '../../models/liada.interface';
import { LiadesFirebaseService } from './../../services/liades-firebase.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-liades-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './liades-list.component.html',
  styleUrl: './liades-list.component.scss'
})
export class LiadesListComponent implements OnInit {
  liades: Liada[] = [];
  isDeleteButtonShown = false;
  liadesFirebaseService = inject(LiadesFirebaseService);

  ngOnInit(): void {
    this.liadesFirebaseService.getLiades()
      .subscribe(liades => {
        this.liades = liades.sort((a, b) => b.times - a.times);
      })
  }


  toggleDeleteButton(): void {
    this.isDeleteButtonShown = !this.isDeleteButtonShown;
  }

  deleteLiada(liadaId: string): void {
    this.liadesFirebaseService.deleteLiada(liadaId).subscribe(() => {
      console.log('Liada deleted successfully!');
      this.liades = this.liades.filter(liada => liada.id !== liadaId);
    })
  }
}
