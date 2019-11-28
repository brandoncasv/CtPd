import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Contacto } from "../Interfaces/contacto";

@Injectable({
  providedIn: 'root'
})
export class CrudFirestoreService {

  private trabajo_Collection: AngularFirestoreCollection<Contacto>;
  private trabajo_Contacs: Observable<Contacto[]>;
  private amigos_Collection: AngularFirestoreCollection<Contacto>;
  private amigos_Contacs: Observable<Contacto[]>;
  private otros_Collection: AngularFirestoreCollection<Contacto>;
  private otros_Contacs: Observable<Contacto[]>;
  constructor(private fs: AngularFirestore) {

    this.trabajo_Collection = fs.collection<Contacto>('Contacto',
            ref => ref.where('Circulo', '==', 'Trabajo') );
    this.trabajo_Contacs = this.trabajo_Collection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }
    ));

    this.amigos_Collection = fs.collection<Contacto>('Contacto',
        ref => ref.where('Circulo', '==', 'Amigos') );
    this.amigos_Contacs = this.amigos_Collection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }
    ));

    this.otros_Collection = fs.collection<Contacto>('Contacto',
        ref => ref.where('Circulo', '==', 'Otros') );
    this.otros_Contacs = this.otros_Collection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }
    ));


  }

  get_Contacts_Otros() {
    return this.otros_Contacs;
  }
  get_Contacts_Amigos() {
    return this.amigos_Contacs;
  }
  get_Contacts_Trabajo() {
    return this.trabajo_Contacs
  }

}
