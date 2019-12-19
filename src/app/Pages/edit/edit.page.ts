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
  private contac_Form: FormGroup; tel_Form: FormGroup;
  private dir_Form: FormGroup; correo_Form: FormGroup;
  private showDir; showCorreo: boolean = false;
  private showfecha; showTel: boolean = false;
  private showLocalTel; showLocalDir: boolean = false;
  showLocalCorreo; showLocalFecha:boolean = false;
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
          console.log( this.data2, this.data3, this.showTel, this.fechaData, this.showfecha);

      }
    });

    this.contac_Form = this._builder.group({
      Nombre: ['', Validators.required],
      Apellidos: [''],
      Correo: ['', Validators.email],
      Apodo: [''],
      Circulo: [''],
      Prefijo: [''],
      SitioWeb: ['', Validators.minLength(10)],

    });
    this.tel_Form = this._builder.group({
      Telefono: ['', ],
      CP: [''],
      Calle: [''],
      Ciudad: [''],
      Estado: [''],
      Numero: [''],

    });
    this.dir_Form = this._builder.group({});
    this.correo_Form = this._builder.group({});
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
    let idTel = Object.values(this.data[0]);
    let idDir = Object.values(this.data3[0]);

    //await this._telService.update_Telefono(telForm, idTel[0].toString());
    //await  this._dirService.update_Direccion(dirForm, idDir[0].toString());
    console.log(idTel[0].toString(), idDir);

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
  console.log(this.tel_Form)
  }
  deleteTel() {
    this.showLocalTel = false;
  }
  addDir() {
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
  deleteDir() {
    this.showLocalTel = false;
  }
  addCorreo() {
    this.showLocalCorreo = true;
    this.correo_Form.addControl('Correo', new FormControl(''));
  }
  deleteCorreo() {
    this.showLocalCorreo = false;
  }
  addFecha() {
    this.showLocalFecha = true;
    this.fecha_Form.addControl('Descripcion', new FormControl(''));
    this.fecha_Form.addControl('Fecha', new FormControl(''));
    this.fecha_Form.addControl('tipo_Fecha', new FormControl(''));
  }
  deleteFecha() {
    this.showLocalFecha = false;
  }
}
