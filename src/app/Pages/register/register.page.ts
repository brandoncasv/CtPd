import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../Services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  title = 'firebaseLogin';

  selectedVal: string;
  responseMessage: string = '';
  responseMessageType: string = '';
  emailInput: string;
  passwordInput: string;
  isForgotPassword: boolean;
  userDetails: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.selectedVal = 'login';
    this.isForgotPassword = false;
  }

  // Command Method to Show Message and Hide after 2 seconds
  showMessage(type, msg) {
    this.responseMessageType = type;
    this.responseMessage = msg;
    setTimeout(() => {
      this.responseMessage = '';
    }, 2000);
  }
  // Called on switching Login/ Register tabs
  public onValChange(val: string) {
    this.showMessage("", "");
    this.selectedVal = val;
  }

  //Check localStorage is having User Data
  isUserLoggedIn() {
    this.userDetails = this.authService.isUserLoggedIn();
  }

  //SignOut Firebase Session and Clean LocalStorage
  logoutUser() {
    this.authService.logout().then(res => {
      console.log(res);
      this.userDetails = undefined;
      localStorage.removeItem('user');
    }, err => {
      this.showMessage("danger", err.message);
    });
  }

  //Login user with provided Email/Password
  loginUser() {
    this.responseMessage = '';
    this.authService.login(this.emailInput, this.passwordInput)
        .then(res => {
          console.log(res);
          this.showMessage("success", "Successfully Loged In!");
          this.isUserLoggedIn();
        }, err => {
          this.showMessage("danger", err.message);
        });
  }

  //Register user with provided Email/Password
  registerUser() {
    this.authService.register(this.emailInput, this.passwordInput)
        .then(res => {
          //send Verification link in email
          this.authService.sendEmailVerification().then(res => {
            console.log(res);
            this.isForgotPassword = false;
            this.showMessage("success",
                "Registration Successful! Please verify your email");
          }, error => {
            this.showMessage("danger", error.message);
          });
          this.isUserLoggedIn();
        }, error => {
          this.showMessage("danger", error.message);
        });
  }

  //Send link on given email to reset password
  forgotPassword() {
    this.authService.sendPasswordResetEmail(this.emailInput)
        .then(res => {
          console.log(res);
          this.isForgotPassword = false;
          this.showMessage("success", "Please check your email");
        }, error => {
          this.showMessage("danger", error.message);
        });
  }
  //open Popup to Login with Google Account
  googleLogin() {
    this.authService.loginWithGoogle()
        .then(res => {
          console.log(res);
          this.showMessage("success",
              "Successfully logged in with Google");
          this.isUserLoggedIn();
        }, error => {
          this.showMessage("danger", error.message);
        });
  }

}
