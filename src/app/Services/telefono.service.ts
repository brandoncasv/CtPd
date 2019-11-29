import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {cell, Telefono} from "../Interfaces/contacto";

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



  get_Telefonos() {
    return this.telefono_Contacs;
  }

  get_Telefono(id: string): AngularFirestoreDocument<cell> {
    return this.fs.collection('Telefonos').doc(id);
  }



}
