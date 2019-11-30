import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TelefonoService } from "../../Services/telefono.service";
import { Direccion, Telefono, Contact, address, cell} from "../../Interfaces/contacto";
import { ContactService } from "../../Services/contact.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {DireccionService} from "../../Services/direccion.service";

@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.page.html',
  styleUrls: ['./details-contact.page.scss'],
})
export class DetailsContactPage implements OnInit {

  cell: Telefono[];
  address: Direccion[];
  contact: Observable<Contact>;
  contact_Id: string = '';
  constructor(private  route: ActivatedRoute,
              private _telefono: TelefonoService,
              private _contact: ContactService,
              private _direccion: DireccionService,
              private router: Router) {
  }

  ngOnInit() {
    this.contact_Id = this.route.snapshot.params['id'];
    this.contact = this._contact.get_Contact(this.contact_Id).valueChanges();

    this._direccion.get_Direccion(this.contact_Id).subscribe(res=>{
      this.address =res;
    });
    this._telefono.get_Telefono(this.contact_Id).subscribe(res=>{
      this.cell = res;
    });
  }
  /*back_Button() {
    this.router.navigateByUrl('/home');
  }*/
}
