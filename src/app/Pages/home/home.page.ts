import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import  { Contacto } from "../../Interfaces/contacto";
import { ContactoService } from '../../Services/contacto.service';
import { CrudFirestoreService } from "../../Services/crud-firestore.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

    contacts: Contacto[];
    amigos_Truee: boolean = false;
    trabajo_Truee: boolean = false;
    social_Truee: boolean = false;

  constructor(private router: Router,
              private  contac_service: ContactoService,
              private crudService: CrudFirestoreService,) {
      //uso del servicio contactoService
      /*this.contacts = [];
      this.contacts = this.contac_service.get_Contacts();*/
      //uso del servicio crudFirestore


  }

  ngOnInit() {
      this.crudService.get_Contacts().subscribe(res => {
          console.log(`Colección de contactos ${res}`);
          console.log(res);
          this.contacts = res;
      });

  }
  //funcion que envia a la page create
  /*create_Contact() {
    this.router.navigateByUrl('/create');
  }*/


}

