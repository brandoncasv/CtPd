import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import { Fecha } from "../Interfaces/contacto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FechaService {

  private fechas_Collection: AngularFirestoreCollection<Fecha>;
  private fwchas_Contacs: Observable<Fecha[]>;
  constructor(private _fs: AngularFirestore) {
    this.fechas_Collection = _fs.collection<Fecha>('Fecha');
  }

  addFecha( fechaForm) {
   return  this.fechas_Collection.add(fechaForm);
  }
}
