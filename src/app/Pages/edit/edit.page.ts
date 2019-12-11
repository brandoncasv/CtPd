import { Component, OnInit } from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from "@capacitor/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  private photo: any = '';
  private data;
  private data2 ;
  constructor(private _route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.dir;
        this.data2 = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data, this.data2);

      }
    });
  }

  async take_a_Photo() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
    this.photo = image.webPath;
  }
}
