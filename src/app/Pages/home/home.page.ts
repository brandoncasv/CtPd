import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import  { Contacto } from "../../Interfaces/contacto";
import { CrudFirestoreService } from "../../Services/crud-firestore.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

    amigos_Truee: boolean = false;
    trabajo_Truee: boolean = false;
    social_Truee: boolean = false;

    otros: Contacto[];
    trabajos: Contacto[];
    amigos: Contacto[];

    constructor(private router: Router,
              private crudService: CrudFirestoreService,) {


  }

  ngOnInit() {
      this.crudService.get_Contacts_Amigos().subscribe(res => {
          console.log(res);
          this.amigos = res;
      });

      this.crudService.get_Contacts_Otros().subscribe(res => {
          console.log(res);

          this.otros = res;
      });

      this.crudService.get_Contacts_Trabajo().subscribe(res => {
          console.log(res);
          this.trabajos = res;
      });
  }
}

