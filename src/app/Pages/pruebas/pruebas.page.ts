import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],

})
export class PruebasPage implements OnInit {

  private myForm: FormGroup;
  private  playerCount: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      player1: ['', Validators.required],
    });
    console.log(this.myForm.value);
  }

  addControl(){
    this.playerCount++;
    this.myForm.addControl('player' + this.playerCount, new FormControl('', Validators.required));
    console.log(this.myForm.value)
  }

  removeControl(control){
    this.playerCount--;
    this.myForm.removeControl(control.key);
  }

  ngOnInit() {
  }

}
