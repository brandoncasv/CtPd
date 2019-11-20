import { Injectable } from '@angular/core';
import  { AngularFirestore } from '@angular/fire/firestore';
import  { Contacto, direccion} from "../Interfaces/contacto";

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private fs: AngularFirestore) {

  }
}
