import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBYTvzcQs1GCdHYqgwW5lvVeIR3ZQT3Suw",
  authDomain: "whatsapp-clone-8b82b.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-8b82b.firebaseio.com",
  projectId: "whatsapp-clone-8b82b",
  storageBucket: "whatsapp-clone-8b82b.appspot.com",
  messagingSenderId: "389026144069",
  appId: "1:389026144069:web:0b82ce5d7724a0b93de82c",
  measurementId: "G-KRXMCFJ7F2"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;