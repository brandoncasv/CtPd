import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {cell, Contacto, Telefono} from "../Interfaces/contacto";

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {

  private telefono_Collection: AngularFirestoreCollection<Telefono>;
  private telefono_Contacs: Observable<Telefono[]>;
    private telefonos_Collection: AngularFirestoreCollection<Telefono>;
    private telefonos_Contacs: Observable<Telefono[]>;
  constructor(private fs: AngularFirestore) {
    this.telefonos_Collection = fs.collection<Telefono>('Telefonos');
    this.telefonos_Contacs = this.telefonos_Collection.snapshotChanges().pipe(map(
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
    return this.telefonos_Contacs;
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
    add_Telefono(telefono: Telefono) {
        return this.telefonos_Collection.add(telefono);
    }
    delete_Telefono(id: string) {
        return this.telefonos_Collection.doc(id).delete();
    }
    update_Telefono(telefono: Telefono, id: string) {
        return this.telefonos_Collection.doc(id).update(telefono);
    }

}
