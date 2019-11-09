import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   data: Observable<any[]>;
  contacto: AngularFirestoreCollection<any[]>;
  constructor(private fs: AngularFirestore) {
  this.contacto = fs.collection<any>('Contacto');

    this.contacto.snapshotChanges()
      .subscribe(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          this.data =data;
          console.log(id, data);
          return{data}
      }));
  }
}

