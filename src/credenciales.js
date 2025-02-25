import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, getIdToken } from "firebase/auth"; // Correcto para v9+
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { jwtDecode } from "jwt-decode";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD8LFlIv71OFUzz3JAPhYUvzmBlRppEyFU",
  authDomain: "iph-react.firebaseapp.com",
  projectId: "iph-react",
  storageBucket: "iph-react.firebasestorage.app",
  messagingSenderId: "667998453788",
  appId: "1:667998453788:web:2a1de9bfc8c7955da81fd9",
};


const app = initializeApp(firebaseConfig); 


export const auth = getAuth(app); 

export const BASE_URL = 'http://127.0.0.1:5001/iph-react/us-central1'


const db = getFirestore(app);
const functions = getFunctions(app);

if (typeof window !== "undefined" && window.location.hostname === "localhost") {
  connectFunctionsEmulator(functions, "localhost", 5001);
  console.log("⚡ Usando el emulador de Firebase Functions en localhost:5001");
}


async function getUserRole(userId) {
  const userRef = doc(db, "users", userId);  
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    const userData = docSnap.data();
    const userRole = userData.rol; 
    console.log("Rol del usuario:", userRole);
    return userRole;
  } else {
    console.log("No se encontró el rol del usuario.");
    return null;
  }
}


// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     try {
//       const idToken = await getIdToken(user, true);
//       console.log("Token:", idToken);  

//       const decodedToken = jwtDecode(idToken);
//       console.log("Decoded token:", decodedToken);

      
//       const userRole = await getUserRole(user.uid);
//       console.log("Rol del usuario desde Firestore:", userRole);
      
//     } catch (error) {
//       console.error("Error al obtener el token:", error);
//     }
//   } else {
//     console.log("Usuario no autenticado.");
//   }
// });


export { db }; 

const appFirebase = initializeApp(firebaseConfig);
export default appFirebase


