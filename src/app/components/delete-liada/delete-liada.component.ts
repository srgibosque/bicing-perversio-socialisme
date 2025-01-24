import { Component, inject, OnInit } from '@angular/core';
import { LiadesFirebaseService } from '../../services/liades-firebase.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Liada } from '../../models/liada.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-delete-liada',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './delete-liada.component.html',
  styleUrl: './delete-liada.component.scss'
})
export class DeleteLiadaComponent implements OnInit {
  liades: Liada[] = [];

  liadesFirebaseService = inject(LiadesFirebaseService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  liadaId!: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.liadaId = this.route.snapshot.paramMap.get('id')!;
  }


  onDelete(): void {
    this.liadesFirebaseService.deleteLiada(this.liadaId).subscribe(() => {
      this.router.navigate(['/liades']);
    });
  }
}
