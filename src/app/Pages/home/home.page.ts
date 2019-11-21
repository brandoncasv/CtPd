import { Component } from '@angular/core';
import { Router} from "@angular/router";
import  { Contacto, direccion} from "../../Interfaces/contacto";
import { ContactoService } from '../../Services/contacto.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    contacts: Contacto[] = this.contac_service.all_Contacts;
    amigos_Truee: boolean = false;
    trabajo_Truee: boolean = false;
    social_Truee: boolean = false;

  constructor(private router: Router,
              private  contac_service: ContactoService) {
  }

  create_Contact() {
    this.router.navigateByUrl('/create');
  }


}

