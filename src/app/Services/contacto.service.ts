import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import  { Contacto, direccion} from "../Interfaces/contacto";

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  all_Contacts: Contacto[] = [];
  all_Data: AngularFirestoreCollection<any[]>;
  constructor(private fs: AngularFirestore) {
    this.all_Contacts = [];
  }




    public create_Contact(data: {Nombre: string, Apellidos: string, Correo: string, Apodo: string,
    Circulo: string, Prefijo: string, SitioWeb: string}) {
    return this.fs.collection('Contacto').add(data)
  }
  public get_Contacts() {
      this.all_Data = this.fs.collection<any>('Contacto');
      this.all_Data.snapshotChanges().subscribe(actions => actions.map(a =>{
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          /*let direccion: direccion= {
              CP: String(data['Direccion']['CP']),
              Calle: String(data['Direccion']['Calle']),
              Ciudad: String(data['Direccion']['Ciudad']),
              Estado: String(data['Direccion']['Estado']),
              Numero: Number(data['Direccion']['Numero']),


          };*/
          let contact =
              {
                  Nombre: String(data['Nombre']),
                  Apellidos: String(data['Apellidos']),
                  Circulo: String(data['Circulo']),
                  Correo: String(data['Correo']),
                  Prefijo: String(data['Prefijo']),
                  SitioWeb: String(data['SitioWeb']),
                  Apodo: String(data['Apodo']),
              };
          this.all_Contacts.push(contact);
          // this.friends_Contacts = this.contacts.filter(friends => friends.Circulo === 'Amigos');
          console.log(id);
      }));
      console.log(this.all_Contacts);
        return this.all_Contacts;
  }
  public update_Contact() {}
  public delete_Contact() {}
}
