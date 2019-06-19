import firebase from 'firebase/app';
import firebaseConfig from '../config/firebaseConfig';

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}

export default Firebase;
