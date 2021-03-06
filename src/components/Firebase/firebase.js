import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCPj9TcWdGoiM2zRrmo4Nc6CmvGufFR22c",
  authDomain: "sample-s-e80ef.firebaseapp.com",
  databaseURL: "https://sample-s-e80ef.firebaseio.com",
  projectId: "sample-s-e80ef",
  storageBucket: "sample-s-e80ef.appspot.com",
  messagingSenderId: "147691871671",
  appId: "1:147691871671:web:b2e46e1929c6b21811dc32",
  measurementId: "G-0C4T04XNCG"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.firestore();

    this.db.collection("cities").doc("LA").set({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password)
  
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => {
    this.auth.signOut()
  }

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Events API ***
  //events = this.db. 
  //user = uid => this.db.ref(`users/${uid}`);

  // users = () => this.db.ref('users');
}

export default Firebase;
