import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController,  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Preferences } from '@capacitor/preferences';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  loginForm: FormGroup;
  errorMessage: string = '';
  validation_messages!: {
    'email': [
      {type: 'required', message: 'Email é requerido'},
      {type: 'pattern', message: 'Digite um email válido' }
    ],
    'password': [
      {type: 'required', message: 'Senha é requerido'},
      {type: 'minLenght', message: 'Senha deve ter ao  menos 5 caracteres' }
    ],
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    public menu: MenuController,
    public loadingController: LoadingController) {
      this.loginForm = new FormGroup({
        'email': new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        'password': new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])),
      })
    }

  ngOnInit() {
    this.menu.enable(false);
  }

  doLogin(values: any) {
    const {email, password } = values
    const auth = getAuth();
    let user: any
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        user = userCredential.user.uid;
        if (user) {
          this.setStorage();
          this.menu.enable(true);
          this.router.navigate(['/exames/exameslist'])
        }


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

      });

  }

  async setStorage(){

    await Preferences.set({
      key: 'isLoggedIn',
      value: 'true'
    })
  }

}
