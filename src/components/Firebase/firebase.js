import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBBuiXCzsZar09GIMVJhgtbXz-wQrofELk",
  authDomain: "fe20tp2.firebaseapp.com",
  databaseURL: "https://fe20tp2-default-rtdb.firebaseio.com",
  projectId: "fe20tp2",
  storageBucket: "fe20tp2.appspot.com",
  messagingSenderId: "175837587205",
  appId: "1:175837587205:web:8b97a0e5eef0a99cc9396c",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    /* Helper */
    this.serverValue = app.database.ServerValue;
    this.auth = app.auth();
    this.db = app.database();
  }
  //*** Auth API ***/
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then((snapshot) => {
            const dbUser = snapshot.val();
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };
            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***
  user = (uid) => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");

  // *** Message API ***
  message = (uid) => this.db.ref(`messages/${uid}`);
  messages = () => this.db.ref("messages");
}
export default Firebase;
