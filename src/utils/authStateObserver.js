const authStateObserver = (firebase, Loading, SignIn) => {
  const unsubscribe = firebase.auth.onAuthStateChanged(user => {
    if (user) {
      unsubscribe();

      firebase
        .getUser(user.uid)
        .then(querySnapshot => {
          // console.log(querySnapshot.data());

          const userData = querySnapshot.data();
          userData.uid = user.uid;
          userData.isVerified = user.emailVerified;

          SignIn(userData);
        })
        .then(() => {
          Loading({ isLoading: false });
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(errorMessage);

          Loading({ isLoading: false });
        });
    } else {
      unsubscribe();

      Loading({ isLoading: false });
    }
  });
};

export { authStateObserver };
