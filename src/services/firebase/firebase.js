import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    initializeApp(firebaseConfig);

    this.auth = getAuth();
    this.db = getFirestore();
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
  addUser = (uid, data) => setDoc(doc(this.db, 'users', uid), data);

  getUser = uid => getDoc(doc(this.db, 'users', uid));
}

export default Firebase;
