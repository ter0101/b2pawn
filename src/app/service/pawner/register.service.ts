import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";

import { Pawner } from "../../modules/pawner";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class PawnerRegisterService {
  pawnerCollection: AngularFirestoreCollection<Pawner>;
  pawners: Observable<Pawner[]>;
  pawnerDoc: AngularFirestoreDocument<Pawner>;

  constructor(public list: AngularFirestore) {
    // this.items = this.list.collection('items').valueChanges();

    this.pawnerCollection = this.list.collection('pawner', ref => ref.orderBy('title', 'asc'));

    this.pawners = this.list.collection('pawner').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Pawner;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
   }

  getItems() {
    return this.pawners;
  }

  addPawner(user: Pawner) {
    this.pawnerCollection.add(user);
  }

  deleteItem(user: Pawner) {
    this.pawnerDoc = this.list.doc(`pawner/${user.id}`);
    this.pawnerDoc.delete();
  }

  updateItem(user: Pawner) {
    this.pawnerDoc = this.list.doc(`pawner/${user.id}`);
    this.pawnerDoc.update(user);
  }
}

