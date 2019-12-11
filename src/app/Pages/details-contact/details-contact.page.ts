import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Resolve, Router} from "@angular/router";
import { TelefonoService } from "../../Services/telefono.service";
import {Direccion, Telefono, Contact, address, cell, Contacto} from "../../Interfaces/contacto";
import { ContactService } from "../../Services/contact.service";
import {Observable} from "rxjs";
import {DireccionService} from "../../Services/direccion.service";
import {LoadingController, NavController} from "@ionic/angular";

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
  data: any ;
  constructor(private route: ActivatedRoute,
              private _telefono: TelefonoService,
              private _contact: ContactService,
              private _direccion: DireccionService,
              private _loadingController: LoadingController,
              private _nav: NavController,
              private _router: Router) { }

  ngOnInit() {
    this.contact_Id = this.route.snapshot.params['id'];
    this.contact = this._contact.get_Contact(this.contact_Id).valueChanges();
    this.contact.subscribe(res => {
        this.data = res;
    });
    this._direccion.get_Direccion(this.contact_Id).subscribe(res=>{
      this.address =res;
    });
    this._telefono.get_Telefono(this.contact_Id).subscribe(res=>{
      this.cell = res;
    });
  }

   async delete_Contact() {

     await this._contact.delete_Contact(this.contact_Id);
    await this.cell.filter(check => {
      if (check.id_Contacto !== '') {
        this._telefono.delete_Telefono(check.id);
      }
    });
     await this.address.filter(check => {
      if (check.id_Contacto !== '') {
        this._direccion.delete_Direccion(check.id);
        this._nav.navigateForward('/');
      }
    });

  }

     asignData() {

       console.log(this.data);
       let navigationExtras: NavigationExtras = {
        state: {
            user: Object.values(this.data),
            dir: this.address
        }
      };
      this._router.navigate(['edit'], navigationExtras);
  }

}
