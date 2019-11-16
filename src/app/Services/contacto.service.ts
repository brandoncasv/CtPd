import { Injectable } from '@angular/core';
import  { AngularFirestore } from '@angular/fire/firestore';
import  { Contacto, direccion} from "../Interfaces/contacto";
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  contacts: Contacto[] = [];
  //data: Observable<any[]>;
  contacto: AngularFirestoreCollection<any[]>;
  constructor(private fs: AngularFirestore) {
    this.contacto = fs.collection<any>('Contacto');

    this.contacto.snapshotChanges()
        .subscribe(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          //this.contacts = a.payload.doc.data();
          console.log(id, data['Direccion']['CP']);

          let direccion: direccion= {
            CP: String(data['Direccion']['CP']),
            Calle: String(data['Direccion']['Calle']),
            Ciudad: String(data['Direccion']['Ciudad']),
            Estado: String(data['Direccion']['Estado']),
            Numero: Number(data['Direccion']['Numero']),

          };
          let contact =
              {
                Nombre: String(data['Nombre']),
                Apellidos: String(data['Apellidos']),
                Circulo: String(data['Circulo']),
                Correo: String(data['Correo']),
                Prefijo: String(data['Prefijo']),
                SitioWeb: String(data['SitioWeb']),
                Direccion: direccion,
              };
          this.contacts.push(contact);
        }));
  }



}
