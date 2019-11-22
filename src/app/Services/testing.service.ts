import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Contacto, direccion } from "../Interfaces/contacto";

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private fs: AngularFirestore) { }
}
