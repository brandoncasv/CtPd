import {Component, OnInit} from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {FormControl, FormGroup, FormBuilder, Validators, FormGroupName} from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
import { ContactService } from "../../Services/contact.service";
import {TelefonoService} from "../../Services/telefono.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  private create_Form: FormGroup;
  private tel_Form: FormGroup;
  private dir_Form: FormGroup;
  private show: boolean = false;
  private showDir: boolean = false;
  private showCorreo: boolean = false;

  private photo: any = '';
  public contact_ID: string;
  private default_Text: string = '';
  private default_Number:Number = null;

    constructor(private sanitizer: DomSanitizer,
                private  builder: FormBuilder,
                private crudService: ContactService,
                private toastController: ToastController,
                private router: Router,
                private loadingController: LoadingController,
                private nav: NavController,
                private _telService: TelefonoService ) {}


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
     this.tel_Form = this.builder.group({});
     this.dir_Form = this.builder.group({});

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


    async save_Contact(createForm, telForm) {
     const loading = await this.loadingController.create({
         message: 'Subiendo a la nube'
     });
     await loading.present();
        this.contact_ID = await this.crudService.add_Contact(createForm).then((result) => {
            return result.id;
        });
            console.log(this.contact_ID);
            console.log(this.tel_Form, telForm);

     if (this.show) {
            this.tel_Form.addControl('id_Contacto', new FormControl(this.contact_ID));
            await this._telService.add_Telefono(this.tel_Form.value).then(() => {
                loading.dismiss();
                this.nav.navigateForward('/');
            });
        } else {
            this.tel_Form.addControl('id_Contacto', new FormControl(this.contact_ID));
            this.tel_Form.addControl('Telefono', new FormControl(this.default_Text));
            this.tel_Form.addControl('tipo_Telefono', new FormControl(this.default_Number));
            await  this._telService.add_Telefono(this.tel_Form.value).then(() => {
                loading.dismiss();
                this.nav.navigateForward('/');
            });


        }
 }

    add_Controltel() {
        this.show = true;
        this.tel_Form.addControl('Telefono', new FormControl(
            '', Validators.minLength(10)));
        this.tel_Form.addControl('tipo_Telefono', new FormControl(
            '', Validators.maxLength(10)));
        console.log(this.tel_Form.value)
    }
    delete_Controltel() {
        this.show = false;
 }
    add_Controldir() {
        this.showDir = true;
        this.dir_Form.addControl('Calle', new FormControl(
            '', Validators.minLength(10)));
        this.dir_Form.addControl('Ciudad', new FormControl(
            '', Validators.maxLength(10)));
        this.dir_Form.addControl('Estado', new FormControl(
            '', Validators.maxLength(10)));
        this.dir_Form.addControl('Numero', new FormControl(
            '', Validators.maxLength(10)));
        this.dir_Form.addControl('CP', new FormControl(
            '', Validators.maxLength(10)));
        console.log(this.tel_Form.value)
    }
    delete_Controldir() {
        this.showDir = false;
    }
    add_Correo() {
        this.showCorreo = true;
}
    delete_Controlcorreo() {
        this.showCorreo = false;
    }




}


