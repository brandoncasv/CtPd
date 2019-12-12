import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {address, Direccion, Telefono} from "../Interfaces/contacto";
import actions from "@angular/fire/schematics/deploy/actions";

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  private direccion_Collection: AngularFirestoreCollection<Direccion>;
  private direccion_Contacs: Observable<Direccion[]>;
  private direcciones_Collection: AngularFirestoreCollection<Direccion>;
  private direcciones_Contacs: Observable<Direccion[]>;
  constructor(private fs: AngularFirestore) {
    this.direcciones_Collection = fs.collection<Direccion>('Direccion');
    this.direcciones_Contacs = this.direcciones_Collection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }
    ));

  }

  get_Direcciones() {
    return this.direcciones_Contacs;
  }
   get_Direccion(id: string)  {
    this.direccion_Collection = this.fs.collection('Direccion', ref =>
        ref.where('id_Contacto', '==', id));
    return this.direccion_Contacs =  this.direccion_Collection.snapshotChanges().pipe(map(
            actions => {
              return actions.map(a =>{
                const data = a.payload.doc.data();
                const  id = a.payload.doc.id;
                return {id, ...data};
              })
            }
        ));
  }

  add_Direccion(direccion: Direccion) {
      return this.direcciones_Collection.add(direccion);
  }
  delete_Direccion(id: string) {
      return this.direcciones_Collection.doc(id).delete();
  }
    update_Direccion(direccion: Direccion, id: string) {
        return this.direcciones_Collection.doc(id).update(direccion);
    }

}
