import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Resolve, Router} from "@angular/router";
import { TelefonoService } from "../../Services/telefono.service";
import {Direccion, Telefono, Contact, address, cell, Contacto, Fecha} from "../../Interfaces/contacto";
import { ContactService } from "../../Services/contact.service";
import {Observable} from "rxjs";
import {DireccionService} from "../../Services/direccion.service";
import {LoadingController, NavController} from "@ionic/angular";
import {FechaService} from "../../Services/fecha.service";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.page.html',
  styleUrls: ['./details-contact.page.scss'],
})
export class DetailsContactPage implements OnInit {

  cell: Telefono[];
  address: Direccion[];
  fechas: Fecha[];
  contact: Observable<Contact>;
  contact_Id: string = '';
  data; dir; tel; fecha: any ;
  constructor(private route: ActivatedRoute,
              private _telefono: TelefonoService,
              private _contact: ContactService,
              private _direccion: DireccionService,
              private _loadingController: LoadingController,
              private _nav: NavController,
              private _router: Router,
              private _fecha: FechaService,
              private _alert: AlertController) { }

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
    this._fecha.getFecha(this.contact_Id).subscribe(res => {
        this.fechas = res;
    });
  }

   async delete_Contact() {

     await this._contact.delete_Contact(this.contact_Id);
    await this.cell.filter(check => {
      if (check.id_Contacto !== '') {
        this._telefono.delete_Telefono(check.id);
          this._nav.navigateForward('/');

      }
    });
     await this.address.filter(check => {
      if (check.id_Contacto !== '') {
        this._direccion.delete_Direccion(check.id);
        this._nav.navigateForward('/');
      }
    });
      this.fechas.filter(check => {
         if (check.id_Contacto !== '') {
             this._fecha.deleteFecha(check.id);
         }
     });

  }
    async presentAlert() {
        const alert = await this._alert.create({
            header: '¿Estas seguro de borrar el contacto ?',
            message: 'Esto eliminara el contacto para siempre',
            buttons: [{
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    console.log('Confirm Cancel');
                }
            }, {
                text: 'Aceptar',
                handler: () => {
                    this.delete_Contact();
                 }
            }]
        });

        await alert.present();
    }
   async asignData() {
         this.tel = await this.cell[0];
         this.dir = await this.address[0];
         this.fecha = await this.fechas[0];
         console.log( this.tel);
       let navigationExtras: NavigationExtras = {
        state: {
            user: this.data,
            dir: this.dir,
            tel: this.tel,
            fecha: this.fecha,
            id: this.contact_Id
        }
      };
      await this._router.navigate(['edit'], navigationExtras);
  }

}
