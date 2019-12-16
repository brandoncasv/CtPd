import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import { Fecha } from "../Interfaces/contacto";
import  { AngularFireAuth} from "@angular/fire/auth";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FechaService {

  private fechas_Collection; fecha_Collection: AngularFirestoreCollection<Fecha>;
  private fwchas_Contacs: Observable<Fecha[]>;
  constructor(private _fs: AngularFirestore,
              private  _fa: AngularFireAuth) {
    this.fechas_Collection = _fs.collection<Fecha>('Fecha');
  }

  addFecha( fechaForm) {
   return  this.fechas_Collection.add(fechaForm);

  }
  getFecha(id: string) {
      this.fecha_Collection = this._fs.collection('Fecha', ref =>
        ref.where('id_Contacto', '==', id));
      return this.fwchas_Contacs = this.fecha_Collection.snapshotChanges().pipe(
          map(actions => {
            return actions.map(a =>{
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return {id, ...data}
            })
          }));
  }

}
