import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TelefonoService } from "../../Services/telefono.service";
import {Contacto, Direccion, Telefono, Contact, address, cell} from "../../Interfaces/contacto";
import { ContactService } from "../../Services/contact.service";
import { AngularFirestoreDocument } from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {DireccionService} from "../../Services/direccion.service";
import {async} from "@angular/core/testing";

@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.page.html',
  styleUrls: ['./details-contact.page.scss'],
})
export class DetailsContactPage implements OnInit {

  cell: Observable<cell>;
  address: Observable<address>;
  contact: Observable<Contact>;
  contact_Id: string = '';
  constructor(private  route: ActivatedRoute,
              private _telefono: TelefonoService,
              private _contact: ContactService,
              private _direccion: DireccionService) {
  }

  ngOnInit() {
    this.contact_Id = this.route.snapshot.params['id'];
<<<<<<< HEAD
    this._contact.get_Contacts().subscribe(res => this.name = res);
    this._telefono.get_Telefonos().subscribe(res => this.telefonos = res);
    this._direccion.get_Direcciones().subscribe(res=>this.direcciones=res);


=======
    this.contact = this._contact.get_Contact(this.contact_Id).valueChanges();
    this.address = this._direccion.get_Direccion(this.contact_Id).valueChanges();
    this.cell = this._telefono.get_Telefono(this.contact_Id).valueChanges();
>>>>>>> 1382b8e40e1dc02b0263e241f542e2f23f070df8

  }

}
