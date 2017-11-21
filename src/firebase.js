import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCn5SdgSv_CR3Ds-GrX5SjwvYn3pGtQQt0",
    authDomain: "trello-exam.firebaseapp.com",
    databaseURL: "https://trello-exam.firebaseio.com",
    projectId: "trello-exam",
    storageBucket: "",
    messagingSenderId: "170592659763"
  };
  firebase.initializeApp(config);
  
  export const database = firebase.database();
  export const auth = firebase.auth();
  export const storage = firebase.storage();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();