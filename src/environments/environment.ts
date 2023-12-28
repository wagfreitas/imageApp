// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replace,s `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  shell: {
    debug: false,
    networkDelay: 1000
  },
  firebase: {
    projectId: 'sistatend-ae6a9',
    appId: '1:169324066077:web:aa3433ffecbca11cbaddf4',
    databaseURL: 'https://sistatend-ae6a9.firebaseio.com',
    storageBucket: 'sistatend-ae6a9.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyAQYFyuzvShqsLS0ZkVIS0x9pCDUadSyT0',
    authDomain: 'sistatend-ae6a9.firebaseapp.com',
    messagingSenderId: '169324066077',
  },

  apiUrl: 'https://us-central1-sistatend-ae6a9.cloudfunctions.net/app',

  apiUrlLocal: 'http://127.0.0.1:5001/sistatend-ae6a9/us-central1/app'
};
