import { Injectable } from '@angular/core';
import  { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private fs: AngularFirestore) { }


  getContacto() {
    this.fs.collection('Contacto').snapshotChanges();
  }
}
