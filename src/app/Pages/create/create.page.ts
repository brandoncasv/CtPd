import {Component, OnInit} from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {FormControl, FormGroup, FormBuilder, Validators, FormGroupName} from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { NavController, LoadingController } from "@ionic/angular";
import { ContactService } from "../../Services/contact.service";
import {TelefonoService} from "../../Services/telefono.service";
import {DireccionService} from "../../Services/direccion.service";
import {FechaService} from "../../Services/fecha.service";
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  private create_Form; tel_Form; dir_Form: FormGroup;
  private correo_Form; fecha_Form: FormGroup;

  private show; showDir; showCorreo: boolean = false;
  private showfecha: boolean = false;
  private photo: any = '';
  public contact_ID; default_Text: string;
  private default_Number:Number = null;

    constructor(private sanitizer: DomSanitizer,
                private builder: FormBuilder,
                private crudService: ContactService,
                private toastController: ToastController,
                private loadingController: LoadingController,
                private nav: NavController,
                private _telService: TelefonoService,
                private _dirService: DireccionService,
                private _fechaService: FechaService,
                private _action: ActionSheetController) {}


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
     this.correo_Form = this.builder.group({});
     this.fecha_Form = this.builder.group({});

 }

    async take_a_Photo(id) {
        if (id === 'Camara') {
            const image = await Plugins.Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Uri,
                source: CameraSource.Camera
            });
            this.photo = image.webPath;
        } else {
            const image = await Plugins.Camera.getPhoto({
                quality: 100,
                allowEditing: true,
                resultType: CameraResultType.Uri,
                source: CameraSource.Photos
            });
            this.photo = image.webPath;
        }
    }

    async save_Contact(createForm) {
     const loading = await this.loadingController.create({
         message: 'Subiendo a la nube'
     });
     await loading.present();
        this.contact_ID = await this.crudService.add_Contact(createForm).then((result) => {
            loading.dismiss();
            this.nav.navigateForward('/');
            return result.id;
        });
            console.log(this.contact_ID);

     if (this.show) {
            this.tel_Form.addControl('id_Contacto', new FormControl(this.contact_ID));
            await this._telService.add_Telefono(this.tel_Form.value).then(() => {
                loading.dismiss();
                this.nav.navigateForward('/');
            });

        }

     if(this.showCorreo){
         await this.crudService.update_Contact(this.correo_Form.value, this.contact_ID).then(() => {
             loading.dismiss();
             this.nav.navigateForward('/');
         });
     }
     if(this.showDir) {
         this.dir_Form.addControl('id_Contacto', new FormControl(this.contact_ID));
         await this._dirService.add_Direccion(this.dir_Form.value).then(() => {
             loading.dismiss();
             this.nav.navigateForward('/');
         });
     }

     if(this.showfecha) {
         this.fecha_Form.addControl('id_Contacto', new  FormControl(this.contact_ID));
         await this._fechaService.addFecha(this.fecha_Form.value).then(() => {
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
        this.correo_Form.addControl('Correo', new FormControl(''));
}
    delete_Controlcorreo() {
        this.showCorreo = false;
    }
    add_fecha() {
        this.showfecha = true;
        this.fecha_Form.addControl('Descripcion', new FormControl(''));
        this.fecha_Form.addControl('Fecha', new FormControl(''));
        this.fecha_Form.addControl('tipo_Fecha', new FormControl(''));
    }
    delete_Controlfecha() {
        this.showfecha = false;
    }

    async showAction() {
        const actionSheet = await this._action.create({
           header: 'Agrega una imagen',
           buttons: [
               {
                   text: 'Camara',
                   icon: 'camera',
                   handler: (id: string = 'Camara') => {
                       this.take_a_Photo(id);
                   }
               },
               {
                 text: 'Galeria',
                 icon: 'images',
                 handler: (id: string = 'Galeria') => {
                     this.take_a_Photo(id);
                 }
               },
               ]
        });
        await actionSheet.present();
    }
    async openToast(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000,
        });
        toast.present();
    }

}


