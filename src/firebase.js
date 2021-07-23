import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC3S5tu9Q23gVxMY8Cwg2vRY-b4A84ha14",
  authDomain: "netflix-clone-85bd7.firebaseapp.com",
  projectId: "netflix-clone-85bd7",
  storageBucket: "netflix-clone-85bd7.appspot.com",
  messagingSenderId: "141222081756",
  appId: "1:141222081756:web:edf8091fef325b6eb7b019",
  measurementId: "G-XSNBGJ23G2"
},
firebaseApp = firebase.initializeApp(firebaseConfig),
database = firebaseApp.firestore(),
auth = firebase.auth();

export { auth };
export default database;