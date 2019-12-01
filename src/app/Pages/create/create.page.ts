import {Component, OnInit} from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {FormControl, FormGroup, FormBuilder, Validators, FormGroupName} from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
import { ContactService } from "../../Services/contact.service";
import {AngularFirestoreDocument, DocumentReference} from "@angular/fire/firestore";
import {cell, Contacto, Direccion} from "../../Interfaces/contacto";
import {Observable} from "rxjs";
import {TelefonoService} from "../../Services/telefono.service";
import {forEach} from "@angular-devkit/schematics";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  private create_Form: FormGroup;
  private tel_Form: FormGroup;
  private show: boolean = false;
 /* private tel_Counter: number = 0;
  private tipotel_Counter: number = 0;*/
  private dir_Form: FormGroup;
  private dir_Counter: number = 0;
  private photo: any = '';
  public contact_ID: string;

    constructor(private sanitizer: DomSanitizer,
              private  builder: FormBuilder,
              private crudService: ContactService,
              private toastController: ToastController,
              private router: Router,
              private loadingController: LoadingController,
              private nav: NavController,
              private _telService: TelefonoService ) {}


    /*
    add_Controldir() {
         this.dir_Counter++;
         this.dir_Form.addControl('cp' + this.dir_Counter, new FormControl(''));
         this.dir_Form.addControl('calle' + this.dir_Counter, new FormControl(''));
         this.dir_Form.addControl('ciudad' + this.dir_Counter, new FormControl(''));
         this.dir_Form.addControl('estado' + this.dir_Counter, new FormControl(''));
         this.dir_Form.addControl('numero' + this.dir_Counter, new FormControl(''));
         console.log(this.dir_Form.value);
    }
    delete_Controldir(control) {
         this.dir_Counter--;
         this.dir_Form.removeControl(control.key);
    }*/


 ngOnInit() {

     this.create_Form = this.builder.group({
         Nombre: ['', Validators.required],
         Apellidos: [''],
         Correo: ['', Validators.email],
         Apodo: [''],
         Circulo: [''],
         Prefijo: [''],
         SitioWeb: ['', Validators.minLength(10)],

     });
     this.tel_Form = this.builder.group({

     });
     this.dir_Form = this.builder.group({

     });

 }
    async take_a_Photo() {
        const image = await Plugins.Camera.getPhoto({
            quality: 100,
            allowEditing: false,
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera
        });
        this.photo = image.webPath;
    }
    async openToast(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000,
        });
        toast.present();
    }


    async save_Contact(createForm, telForm,) {
     const loading = await this.loadingController.create({
         message: 'Subiendo a la nube'
     });
     await loading.present();
        this.contact_ID = await this.crudService.add_Contact(createForm).then((result) => {
            this.nav.navigateForward('/');
            return result.id;
            });
        console.log(this.contact_ID);
        let data: cell[]=[];
        for (i=0; telForm.length; i++)
        {
               data.push(telForm[i].value)
        }
        let id= `id_Contacto:${this.contact_ID}`;
        data.push(id);

        console.log(telForm);
        await this._telService.add_Telefono(telForm).then(() => {
            loading.dismiss();
            this.nav.navigateForward('/');
        });
 }



    add_Controltel() {
        this.show = true;
        this.tel_Form.addControl('Telefono', new FormControl(
            '', Validators.minLength(10)));
        this.tel_Form.addControl('tipo_Telefono', new FormControl(
            '', Validators.maxLength(10)));
        console.log(this.tel_Form.value)
    }

    delete_Controltel(control) {
        this.tel_Form.removeControl(control.key)
    }




}


