import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { TelefonoService } from "../../Services/telefono.service";
import {Telefono} from "../../Interfaces/contacto";

@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.page.html',
  styleUrls: ['./details-contact.page.scss'],
})
export class DetailsContactPage implements OnInit {

  telefonos: Telefono[];
  contact_Id: string = '';
  constructor(private  route: ActivatedRoute,
              private _telefono: TelefonoService) { }

  ngOnInit() {
    this.contact_Id = this.route.snapshot.params['id'];
    this._telefono.get_Telefono(this.contact_Id);
  }
  get_Tels() {
    this._telefono.get_Telefonos().subscribe(res => {
      console.log(res);
    });
  }
}
