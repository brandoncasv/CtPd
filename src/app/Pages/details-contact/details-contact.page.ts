import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TelefonoService } from "../../Services/telefono.service";
import {Contacto, Direccion, Telefono} from "../../Interfaces/contacto";
import { ContactService } from "../../Services/contact.service";
import { AngularFirestoreDocument } from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {DireccionService} from "../../Services/direccion.service";

@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.page.html',
  styleUrls: ['./details-contact.page.scss'],
})
export class DetailsContactPage implements OnInit {

  telefonos: Telefono[];
  name: Contacto[];
  direcciones: Direccion[];
  contact_Id: string = '';
  contact: Contacto;
  constructor(private  route: ActivatedRoute,
              private _telefono: TelefonoService,
              private _contact: ContactService,
              private _direccion: DireccionService) { }

  ngOnInit() {
    this.contact_Id = this.route.snapshot.params['id'];
    this._contact.get_Contacts().subscribe(res => this.name = res);
    this._telefono.get_Telefonos().subscribe(res => this.telefonos = res);
    this._direccion.get_Direcciones().subscribe(res=>this.direcciones=res);



  }

}
