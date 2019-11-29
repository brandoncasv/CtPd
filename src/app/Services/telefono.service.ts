import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {cell, Telefono} from "../Interfaces/contacto";
import actions from "@angular/fire/schematics/deploy/actions";

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {

  private telefono_Collection: AngularFirestoreCollection<Telefono>;
  private telefono_Contacs: Observable<Telefono[]>;
  constructor(private fs: AngularFirestore) {
    this.telefono_Collection = fs.collection<Telefono>('Telefonos');
    this.telefono_Contacs = this.telefono_Collection.snapshotChanges().pipe(map(
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

  get_Telefono(id: string) {
    this.telefono_Collection = this.fs.collection('Telefonos',
    ref => ref.where('id_Contacto', '==', id));
    return this.telefono_Contacs = this.telefono_Collection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        }
    ));
  }



}
