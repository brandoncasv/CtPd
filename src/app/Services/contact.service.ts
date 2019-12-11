import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference
} from "@angular/fire/firestore";
import {Contact, Contacto} from "../Interfaces/contacto";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts_Collection: AngularFirestoreCollection<Contacto>;
   id_Contact: string = '';
  constructor(private fs: AngularFirestore) {
    this.contacts_Collection = fs.collection<Contacto>('Contacto');

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
/*
.then(
    function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    }).catch(function (error)  {
  console.error('Error agregando un documento: ', error);
})



.then(
         function get_Id (docRef) {
           let id = docRef.id;
           console.log(docRef.id);
           return id
         }
     ).catch(function (error) {
       console.error('Error al agregar el documento', error);
     })
*/
