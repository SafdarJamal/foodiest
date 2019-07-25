const authStateObserver = (firebase, Loading, SignIn) => {
  const unsubscribe = firebase.auth.onAuthStateChanged(user => {
    if (user) {
      unsubscribe();

      return firebase
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
        });
    } else {
      unsubscribe();

      Loading({ isLoading: false });
    }
  });
};

export { authStateObserver };
