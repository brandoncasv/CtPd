import {Component, OnInit} from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {FormControl, FormGroup, FormBuilder, Validators, FormGroupName} from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
import { CrudFirestoreService } from "../../Services/crud-firestore.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  private create_Form: FormGroup;
  private tel_Counter: number = 0;
  private tipotel_Counter: number = 0;
  private dir_Form: FormGroup;
  private dir_Counter: number = 0;
  private photo: any = '';
  private tel_Form: FormGroup;
  contact_Id = null;


    constructor(private sanitizer: DomSanitizer,
              private  builder: FormBuilder,
              private crudService: CrudFirestoreService,
              private toastController: ToastController,
              private router: Router,
              private loadingController: LoadingController,
              private nav: NavController, ) {}


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
     this.crudService.add_Contact(createForm).then(() => {
       loading.dismiss();
       this.nav.navigateForward('/');
     });
 }
    add_Controltel() {
        this.tel_Counter++;
        this.tel_Form.addControl('telefono' + this.tel_Counter, new FormControl(
            '', Validators.minLength(10)));
        this.tel_Form.addControl('tipo_Telefono' + this.tipotel_Counter, new FormControl(
            '', Validators.maxLength(10)));
        console.log(this.tel_Form.value)
    }
    delete_Controltel(control) {
        this.tel_Counter--;
        this.tel_Form.removeControl(control.key)
    }

}
