import { inject, Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, increment, updateDoc } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Liada } from '../models/liada.interface';
import { addDoc, DocumentReference } from 'firebase/firestore';

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
    const toCreateLiada: { name: string, times: number } = { name: name, times: 1 }
    const promise = addDoc(this.liadesCollection, toCreateLiada)
      .then((res) => res.id);
    return from(promise);
  }

  deleteLiada(liadaId: string): Observable<void> {
    const docRef: DocumentReference = doc(this.firestore, 'liades', liadaId);
    const promise = deleteDoc(docRef);
    return from(promise);
  }

  incrementTimes(liadaId: string): Observable<void> {
    const docRef: DocumentReference = doc(this.firestore, 'liades', liadaId);
    const promise = updateDoc(docRef, {
      times: increment(1)
    });
    return from(promise);
  }

  decrementTimes(liadaId: string): Observable<void> {
    const docRef: DocumentReference = doc(this.firestore, 'liades', liadaId);
    const promise = updateDoc(docRef, {
      times: increment(-1)
    });
    return from(promise);
  }
}
