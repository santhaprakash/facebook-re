import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCZIQRuQZBjdcIXqiIA0P47yk3M7NwMVB4",
    authDomain: "fb-mern-clone-f1779.firebaseapp.com",
    projectId: "fb-mern-clone-f1779",
    storageBucket: "fb-mern-clone-f1779.appspot.com",
    messagingSenderId: "983291962622",
    appId: "1:983291962622:web:5d44a8d7b3ce2f4bca71af",
    measurementId: "G-Q9GDX420EQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db;