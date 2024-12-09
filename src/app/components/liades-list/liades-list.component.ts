import { CommonModule } from '@angular/common';
import { Liada } from '../../models/liada.interface';
import { LiadesFirebaseService } from './../../services/liades-firebase.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-liades-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './liades-list.component.html',
  styleUrl: './liades-list.component.scss'
})
export class LiadesListComponent implements OnInit {
  liades: Liada[] = [];
  liadesFirebaseService = inject(LiadesFirebaseService);

  ngOnInit(): void {
    this.liadesFirebaseService.getLiades()
      .subscribe(liades => {
        this.liades = liades.sort((a, b) => b.times - a.times);
      })
  }
}
