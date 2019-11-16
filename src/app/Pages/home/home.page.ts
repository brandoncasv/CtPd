import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {groupBy, map} from "rxjs/operators";
import { NavController } from '@ionic/angular'
import { Router} from "@angular/router";
import  { Contacto, direccion} from "../../Interfaces/contacto";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    contacts: Contacto[] = [];
    amigos_Truee: boolean = false;
    social_Truee: boolean = false;


    //data: Observable<any[]>;
  contacto: AngularFirestoreCollection<any[]>;
  constructor(private fs: AngularFirestore, private router: Router) {
  this.contacto = fs.collection<any>('Contacto');

    this.contacto.snapshotChanges()
      .subscribe(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          //this.contacts = a.payload.doc.data();
          //console.log(id, data['Direccion']['CP']);

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
         // this.friends_Contacts = this.contacts.filter(friends => friends.Circulo === 'Amigos');
          console.log(this.contacts);
          return{data}
      }));
  }

  create_Contact() {
    this.router.navigateByUrl('/create');
  }

  amigos_Show() {
    this.amigos_Truee = this.amigos_Truee === false;
  }
    social_Show() {
        this.social_Truee = this.social_Truee === false;
    }

}

