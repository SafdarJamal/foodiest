import { onAuthStateChanged } from 'firebase/auth';

const authStateObserver = (firebase, stopLoading, setUser) => {
  const unsubscribe = onAuthStateChanged(firebase.auth, user => {
    if (user) {
      unsubscribe();

      firebase
        .getUser(user.uid)
        .then(querySnapshot => {
          // console.log(querySnapshot.data());

          const userData = querySnapshot.data();
          userData.uid = user.uid;
          userData.isVerified = user.emailVerified;

          setUser({ user: userData });
        })
        .then(() => {
          stopLoading();
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(errorMessage);

          stopLoading();
        });
    } else {
      unsubscribe();

      stopLoading();
    }
  });
};

export { authStateObserver };
