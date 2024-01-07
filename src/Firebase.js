import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8e7GnmiSc0s_okadPpDPwlNSYbjaJIFQ",
  authDomain: "fitnes-pro-a9533.firebaseapp.com",
  databaseURL: "https://fitnes-pro-a9533-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitnes-pro-a9533",
  storageBucket: "fitnes-pro-a9533.appspot.com",
  messagingSenderId: "430839690751",
  appId: "1:430839690751:web:4041418114d7776303a3ca"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)