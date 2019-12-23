import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import {JsonParseMode} from "@angular-devkit/core";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _fireAuth: AngularFireAuth,
              private _router: Router,) {
    this._fireAuth.authState.subscribe(userResponse => {
      if(userResponse) {
        localStorage.setItem('user', JSON.stringify(userResponse));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(email: string, password: string) {
    return await this._fireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  async register(email: string, password: string) {
    return await this._fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  async sendEmailVerification() {
    return await this._fireAuth.auth.currentUser.sendEmailVerification();
  }
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this._fireAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }
  async logout() {
    return await this._fireAuth.auth.signOut();
  }
  isUserLoggedIn() {
    return JSON.parse(localStorage.getItem('user'));
  }
  async loginWithGoogle() {
    return await this._fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
