import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBmiWeP-yqOCw0gC5C4H5UerM4ODdP52hY",
  authDomain: "ctpd-3a4b1.firebaseapp.com",
  databaseURL: "https://ctpd-3a4b1.firebaseio.com",
  projectId: "ctpd-3a4b1",
  storageBucket: "ctpd-3a4b1.appspot.com",
  messagingSenderId: "43262084276",
  appId: "1:43262084276:web:dd1905ddbe3ae1e6aa43e1",
  measurementId: "G-MZGQVXZW96"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
  AngularFirestoreModule.enablePersistence()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
