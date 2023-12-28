import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router: Router) {
    firebase.initializeApp(environment.firebase);
  }

  public loginUser(data: any): string {

    const {email, password } = data
    const auth = getAuth();
    let user: any
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        user = userCredential;
        return user

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage
      });

      return user
  }

  async setObject() {
    await Preferences.set({
      key: 'user',
      value: JSON.stringify({
        value: true,
      })
    });
  }
}
