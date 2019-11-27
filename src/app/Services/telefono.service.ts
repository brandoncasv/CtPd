import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {Contacto, Telefono} from "../Interfaces/contacto";
import actions from "@angular/fire/schematics/deploy/actions";
@Injectable({
  providedIn: 'root'
})
export class TelefonoService {

  private telefono_Document: AngularFirestoreCollection<Telefono>;
  private telefono_Contacs: Observable<Telefono[]>;
  constructor(private fs: AngularFirestore) {}


  /*get_Telefono(id: string) {
    // this.telefono_Collection = this.fs.collection<Telefono>('Telefono', ref => {
    //     'id_Contacto', '==', id
    // });
    // this.telefono_Contacs = this.telefono_Collection.snapshotChanges().pipe(map(
    //     actions => {
    //       return actions.map(a => {
    //         const data = a.payload.doc.data();
    //         const id = a.payload.doc.id;
    //         return {id, ...data};
    //       });
    //     }
    // ));*/


  get_Telefono(id: string) {
    this.telefono_Document = this.fs.collection<Telefono>('Telefonos', ref =>
      ref.where('id_Contact', '==', 'K0t6v5Ki1uez1jnw7QYP'));
    this.telefono_Contacs = this.telefono_Document.snapshotChanges().pipe(map(
       actions => {
       return actions.map(a =>{
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         return {id, ...data};
       });
       }
    ));
  }

  get_Telefonos() {
    return this.telefono_Contacs;
  }


    /*this.telefono_Document = this.fs.doc<Telefono>(`Telefono/${id}`);
    this.telefono_Contacs = this.telefono_Document.snapshotChanges().pipe(map(
       actions => {
         const data = actions.payload.data;
         const id = actions.payload.id;
         console.log(actions);
       }
    ));
    return this.telefono_Contacs;
  }*/

}
