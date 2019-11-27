import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Telefono } from "../Interfaces/contacto";

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {

  private telefono_Document: AngularFirestoreCollection<Telefono>;
  private telefono_Contacs: Observable<Telefono[]>;
  constructor(private fs: AngularFirestore) {
    this.telefono_Document = fs.collection<Telefono>('Telefonos');
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
