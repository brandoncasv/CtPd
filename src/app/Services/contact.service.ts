import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Contact, Contacto} from "../Interfaces/contacto";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import actions from "@angular/fire/schematics/deploy/actions";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts_Collection: AngularFirestoreCollection<Contacto>;
  private all_Contacs: Observable<Contacto[]>;
  constructor(private fs: AngularFirestore) {
    this.contacts_Collection = fs.collection<Contacto>('Contacto');
    this.all_Contacs = this.contacts_Collection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }
    ));
  }

  get_Contacts() {
    return this.all_Contacs;
  }
  get_Contact(id: string): AngularFirestoreDocument<Contact> {
   return this.fs.collection('Contacto').doc(id);
  }
  update_Contact(contact: Contacto, id: string) {
    return this.contacts_Collection.doc(id).update(contact);
  }
  add_Contact(contac: Contacto) {
    return this.contacts_Collection.add(contac);
  }
  delete_Contact(id: string) {
    return this.contacts_Collection.doc(id).delete();
  }
}
