import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PruebasPage } from './pruebas.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PruebasPage
      }]),
    ReactiveFormsModule
  ],
  declarations: [PruebasPage]
})
export class PruebasPageModule {}
