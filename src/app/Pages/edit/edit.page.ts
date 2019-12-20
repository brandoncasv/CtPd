import { Component, OnInit } from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from "@capacitor/core";
import {ActivatedRoute, Router} from "@angular/router";
import { Contacto, Direccion, Telefono } from "../../Interfaces/contacto";
import { ContactService } from "../../Services/contact.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoadingController, NavController, ToastController} from "@ionic/angular";
import {TelefonoService} from "../../Services/telefono.service";
import {DireccionService} from "../../Services/direccion.service";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  private photo: any = '';
  private data; id_contacto; data2; data3; fechaData = [];
  private contac_Form; tel_Form: FormGroup;
  private dir_Form; fecha_Form; correo_Form: FormGroup;
  private showDir; showCorreo: boolean = false;
  private showfecha; showTel: boolean = false;
  private showLocalTel; showLocalDir: boolean = false;
  private showLocalCorreo; showLocalFecha:boolean = false;
  constructor(private _route: ActivatedRoute,
              private router: Router,
              private _contact: ContactService,
              private _builder: FormBuilder,
              private _action: ActionSheetController,
              private toastController: ToastController,
              private loadingController: LoadingController,
              private nav: NavController,
              private _telService: TelefonoService,
              private _dirService: DireccionService) { }

   ngOnInit() {
    this._route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.id_contacto = this.router.getCurrentNavigation().extras.state.id;
        this.data2 = this.router.getCurrentNavigation().extras.state.user;
        this.data3 = this.router.getCurrentNavigation().extras.state.tel;
        this.data = this.router.getCurrentNavigation().extras.state.dir;
        this.fechaData = this.router.getCurrentNavigation().extras.state.fecha;

        this.showTel = this.data3 !== undefined;
        this.showDir = this.data !== undefined;
        this.showfecha = this.fechaData !== undefined;
        this.showCorreo = this.data2['Correo'] !== '';
          console.log( this.data2, this.data3, this.showTel, this.fechaData, this.showfecha, this.showDir);

      }
    });

    this.contac_Form = this._builder.group({
      Nombre: [ this.data2['Nombre'], Validators.required],
      Apellidos: [ this.data2['Apellidos']],
      Correo: [ this.data2['Correo'], Validators.email],
      Apodo: [ this.data2['Apodo']],
      Circulo: [ this.data2['Circulo']],
      Prefijo: [ this.data2['Prefijo']],
      SitioWeb: [ this.data2['SitioWeb'], Validators.minLength(10)],

    });
    this.correo_Form = this._builder.group({});
    if(this.showTel) {
      this.tel_Form = this._builder.group({
        Telefono: [this.data3['Telefono']],
        tipo_Telefono: [this.data3['tipo_Telefono']],
      });
    } else  {
    this.tel_Form = this._builder.group({

    });
    }
    if (this.showDir) {
      this.dir_Form = this._builder.group({
        Numero: [this.data['Numero']],
        CP: [this.data['CP']],
        Calle: [this.data['Calle']],
        Ciudad: [this.data['Ciudad']],
        Estado: [this.data['Estado']],

      });
    } else {
      this.dir_Form = this._builder.group({

      });
    }
    if (this.showfecha) {
      this.fecha_Form = this._builder.group({
        Fecha: [this.fechaData['Fecha']],
        tipo_Fecha: [this.fechaData['tipo_Fecha']],
        Descripcion: [this.fechaData['Descripcion']],
      });
    } else {
      this.fecha_Form = this._builder.group({

      });
    }
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

  async updateCollections(contacForm, telForm, dirForm, correoForm) {
    const loading = await this.loadingController.create({
      message: 'Actualizando datos...'
    });


    //await loading.present();
    //await this._contact.update_Contact(this.id_contacto, contacForm);
    //let idTel = Object.values(this.data[0]);
    //let idDir = Object.values(this.data3[0]);

    //await this._telService.update_Telefono(telForm, idTel[0].toString());
    //await  this._dirService.update_Direccion(dirForm, idDir[0].toString());
    console.log(this.contac_Form.value, this.tel_Form.value,);

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

addTel() {
  this.showLocalTel = true;
  this.tel_Form.addControl('Telefono', new FormControl(
      '', Validators.minLength(10)));
  this.tel_Form.addControl('tipo_Telefono', new FormControl(
      '', Validators.maxLength(10)));
  console.log(this.tel_Form.value)
  }
  deleteTel() {
    this.showLocalTel = false;
  }
  addDir() {
    if (!this.showLocalDir && !this.showDir) {
      this.showLocalDir = true;
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
      console.log(this.dir_Form);
    }
    if (!this.showLocalDir) {
      this.showDir = true;
    }
  }
  deleteDir() {
    if (this.showLocalDir) {
      this.showLocalDir = false;
    }
    if (this.showDir) {
      this.showDir = false;
      console.log('cambio boolean fuera')
    }

  }
  addCorreo() {
    if (!this.showLocalCorreo && this.data2['Correo'] === '') {
      this.showLocalCorreo = true;
      this.correo_Form.addControl('Correo', new FormControl(''));
      console.log(this.correo_Form.value)
    }
    if (!this.showLocalCorreo && this.data2['Correo'] !== '' ) {
      this.showCorreo = true;
    }
  }
  deleteCorreo() {
    if (this.showLocalCorreo) {
      this.showLocalCorreo = false;
      console.log('cambio boolean local')
    }
    if (this.showCorreo) {
      this.showCorreo = false;
      console.log('cambio boolean fuera')
    }

  }
  addFecha() {
    this.showLocalFecha = true;
    this.fecha_Form.addControl('Descripcion', new FormControl(''));
    this.fecha_Form.addControl('Fecha', new FormControl(''));
    this.fecha_Form.addControl('tipo_Fecha', new FormControl(''));
    console.log(this.fecha_Form);

  }
  deleteFecha() {
    this.showLocalFecha = false;
  }
}
