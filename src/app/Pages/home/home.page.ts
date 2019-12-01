import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import  { Contacto } from "../../Interfaces/contacto";
import { CrudFirestoreService } from "../../Services/crud-firestore.service";
import { ContactService } from "../../Services/contact.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    private amigos_Truee: boolean = false;
    private trabajo_Truee: boolean = false;
    private social_Truee: boolean = false;
    private texto_busqueda: string = '';
    private otros: Contacto[];
    private trabajos: Contacto[];
    private amigos: Contacto[];
    private busqueda: Contacto[];
    private change_State: boolean = false;

    constructor(private router: Router,
                private crudService: CrudFirestoreService,
                private _contacService: ContactService) {


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
        this._contacService.get_Contacts().subscribe(res => {
            console.log(res);
            this.busqueda = res;
        });
    }

    buscarUsuario(event) {
        const texto = event.target.value;
        this.texto_busqueda = texto;

        if (texto === '') {
            this.change_State = false;
        }
        if (texto != '') {
            this.change_State = true;
        }
    }
}

