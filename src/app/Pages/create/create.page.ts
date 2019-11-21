import {Component} from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import { FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import { ContactoService } from '../../Services/contacto.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage  {

  create_Form: FormGroup;
  photo: any;
  constructor(private sanitizer: DomSanitizer,
              private  builder: FormBuilder,
              private fire_Service: ContactoService) {
      this.create_Form = this.builder.group({
          nombre: ['', Validators.required],
          apellidos: ['', Validators.compose([Validators.minLength(4),
              Validators.maxLength(40)])],
          correo: ['', Validators.compose([Validators.email, Validators.required])],
          apodo: [''],
      })
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
    };
    this.fire_Service.create_Contact(data).then(res => {
        console.log('Done');
    });
 }

}
