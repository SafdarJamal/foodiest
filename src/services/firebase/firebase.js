import app from 'firebase/compat/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
} from 'firebase/auth';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = getAuth();
    this.db = app.firestore();
  }

  // Auth API
  signUp = (email, password) =>
    createUserWithEmailAndPassword(this.auth, email, password);

  sendEmailVerification = () =>
    sendEmailVerification(this.auth.currentUser, {
      url: process.env.REACT_APP_EMAIL_CONFIRMATION_REDIRECT,
    });

  signIn = (email, password) =>
    signInWithEmailAndPassword(this.auth, email, password);

  resetPassword = email => sendPasswordResetEmail(this.auth, email);

  updatePassword = password => updatePassword(this.auth.currentUser, password);

  signOut = () => signOut(this.auth);

  // Database API
  addUser = (uid, userData) =>
    this.db.collection('users').doc(uid).set(userData);

  getUser = uid => this.db.collection('users').doc(uid).get();
}

export default Firebase;
