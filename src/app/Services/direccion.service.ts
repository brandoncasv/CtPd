import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {address, Direccion} from "../Interfaces/contacto";
import actions from "@angular/fire/schematics/deploy/actions";

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  private direccion_Collection: AngularFirestoreCollection<Direccion>;
  private direccion_Contacs: Observable<Direccion[]>;
  constructor(private fs: AngularFirestore) {
    this.direccion_Collection = fs.collection<Direccion>('Direccion');
    this.direccion_Contacs = this.direccion_Collection.snapshotChanges().pipe(map(
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
    return this.direccion_Contacs;
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


}
