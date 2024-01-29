
import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8e7GnmiSc0s_okadPpDPwlNSYbjaJIFQ",
  authDomain: "fitnes-pro-a9533.firebaseapp.com",
  databaseURL: "https://fitnes-pro-a9533-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitnes-pro-a9533",
  storageBucket: "fitnes-pro-a9533.appspot.com",
  messagingSenderId: "430839690751",
  appId: "1:430839690751:web:1a2938a490b99ab403a3ca"
};

const app = initializeApp(firebaseConfig);
console.log(app)
// const auth = getAuth(firebaseConfig);
// const db = getDatabase(firebaseConfig);