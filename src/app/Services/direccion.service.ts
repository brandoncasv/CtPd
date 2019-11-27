import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Direccion } from "../Interfaces/contacto";

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
}
