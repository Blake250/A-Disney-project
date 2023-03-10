
// v9 compat packages are API compatible with v8 code
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB54WkrFCFyg8qs3D7xLur08n2me2IdHRY",
  authDomain: "disney-clone-6d417.firebaseapp.com",
  projectId: "disney-clone-6d417",
  storageBucket: "disney-clone-6d417.appspot.com",
  messagingSenderId: "562618633968",
  appId: "1:562618633968:web:c78fa15420a7fa18987c35"
};





  const firebaseApp = initializeApp(firebaseConfig)

 const auth = getAuth(firebaseApp);

 const db = getFirestore(firebaseApp);

 const storage = getStorage(firebaseApp);

const provider = new GoogleAuthProvider(firebaseApp)



  export  {auth, provider, storage}
  
  export default db


