import app from 'firebase/app';
import firebaseConfig from '../../config/firebaseConfig';

// const firebase = app.initializeApp(firebaseConfig);
// export default firebase;

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}

export default Firebase;
