import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Liada } from '../models/liada.interface';
import { addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LiadesFirebaseService {

  constructor() { }
  firestore = inject(Firestore);
  liadesCollection = collection(this.firestore, 'liades');

  getLiades(): Observable<Liada[]> {
    return collectionData(this.liadesCollection, {
      idField: 'id'
    }) as Observable<Liada[]>
  }

  addLiada(name: string): Observable<string> {
    const toCreateLiada: Liada = { name: name, times: 0 }
    const promise = addDoc(this.liadesCollection, toCreateLiada)
      .then((res) => res.id);
    return from(promise);
  }
}
