import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD2QTBGifnDuVlIPhTD8uhoI2cqtWrcm4Q",
    authDomain: "trello-88f82.firebaseapp.com",
    databaseURL: "https://trello-88f82.firebaseio.com",
    projectId: "trello-88f82",
    storageBucket: "trello-88f82.appspot.com",
    messagingSenderId: "242725123531"
  };
  firebase.initializeApp(config);

  export default firebase;
  
  export const database = firebase.database();
  export const auth = firebase.auth();
  export const storage = firebase.storage();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();