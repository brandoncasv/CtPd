import { Component, OnInit } from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from "@capacitor/core";
import {ActivatedRoute, Router} from "@angular/router";
import { Contacto, Direccion, Telefono } from "../../Interfaces/contacto";
import { ContactService } from "../../Services/contact.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  private data; id_contacto; data2; data3;
  private contac_Form: FormGroup; tel_Form: FormGroup;
  private dir_Form: FormGroup; correo_Form: FormGroup;
  private show; showDir; showCorreo: boolean = false;
  private showfecha; showTel: boolean = false;
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

        this.showTel = this.data3 !== undefined;

        this.data = this.router.getCurrentNavigation().extras.state.dir;
          console.log( this.data2, this.data3, this.showTel);

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


}
