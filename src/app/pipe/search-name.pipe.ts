import { Pipe, PipeTransform } from '@angular/core';
import {Contacto} from "../Interfaces/contacto";

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform( contacts: Contacto[], texto: string): Contacto[] {

    if(texto.length === 0) { return contacts; }

    texto = texto.toLocaleLowerCase();

    return contacts.filter( usuario => {
      return usuario.Nombre.toLocaleLowerCase().includes(texto)
            || usuario.Apellidos.toLocaleLowerCase().includes(texto);
    });
  }

}
