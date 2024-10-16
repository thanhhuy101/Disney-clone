import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: "AIzaSyCCgUGhZBERw4CtOqe98_19mPLRIBOt_mw",
  authDomain: "disney-clone-59027.firebaseapp.com",
  projectId: "disney-clone-59027",
  storageBucket: "disney-clone-59027.appspot.com",
  messagingSenderId: "34038213539",
  appId: "1:34038213539:web:b96b421aff144f8dfe8816",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
