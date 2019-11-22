import {Component} from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {FormControl, FormGroup, FormBuilder, Validators, FormGroupName} from "@angular/forms";
import { ContactoService } from '../../Services/contacto.service';
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage  {

  private create_Form: FormGroup;
  private tel_Form: FormGroup;
  private tel_Counter: number = 0;
  private dir_Form: FormGroup;
  private dir_Counter: number = 0;
  private photo: any;

  constructor(private sanitizer: DomSanitizer,
              private  builder: FormBuilder,
              private fire_Service: ContactoService,
              private toastController: ToastController,
              private router: Router,) {
      this.create_Form = this.builder.group({
          nombre: ['', Validators.required],
          apellidos: [''],
          correo: ['', Validators.email],
          apodo: [''],
          circulo: [''],
          prefijo: [''],
          sitioWeb: ['', Validators.minLength(10)]
      });

      this.tel_Form = this.builder.group({

      });
      this.dir_Form = this.builder.group({

      });
  }

 async  take_a_Photo() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
    this.photo = image.webPath;
 }


 new_contact(form) {
    let data = {
        Nombre: form.nombre,
        Apellidos: form.apellidos,
        Correo: form.correo,
        Apodo: form.apodo,
        Circulo: form.circulo,
        Prefijo: form.prefijo,
        SitioWeb: form.sitioWeb,
    };
    /*let direccion: direccion  = {
        CP: form.cp,
        Calle: form.calle,
        Ciudad: form.ciudad,
        Estado: form.estado,
        Numero: form.numero,
    };*/
    this.fire_Service.create_Contact(data).then(res => {
        this.openToast('Contacto guardado');
        this.router.navigateByUrl('/home');
    });
 }

 async openToast(message) {
      const toast = await this.toastController.create({
          message: message,
          duration: 2000,
      });
      toast.present();
 }

 add_Tel() {

 }
 add_Controltel() {
      this.tel_Counter++;
      this.tel_Form.addControl('telefono' + this.tel_Counter, new FormControl('', Validators.minLength(10)));
      console.log(this.tel_Form.value)
 }
 delete_Controltel(control) {
      this.tel_Counter--;
      this.tel_Form.removeControl(control.key)
 }
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
 }

}
