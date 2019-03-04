import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/functions";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.database = app.database();
    this.functions = app.functions();
    this.firestore = app.firestore();
  }

  // API - Auth
  registerUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  login = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  logout = () => this.auth.signOut();

  // API - user/company
  createCompany = (userUUID, company) =>
    this.database.ref(`companies/${userUUID}`).set(company);

  isEmailTaken = () => this.functions.httpsCallable("isEmailTaken");
}

export default Firebase;
