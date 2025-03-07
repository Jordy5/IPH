import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { db } from '../src/credenciales';
import {ProTypes} from 'prop-types'
import Carga from './components/Carga/Carga'

//modulos de FireBase
import appFirebase from '../src/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth' 
import { getDoc, doc, getFirestore, updateDoc } from 'firebase/firestore'
const auth = getAuth(appFirebase) 


//componentes las vistas
import Login from '../src/components/Login'
import './App.css'
import Home from '../src/components/Home'
import Settings from '../src/components/settings'
import AdminDashboard from './components/AdminDashboard'
import PoliceDashboard from './components/PoliceDashboard'

function App() {
  const [usuario, setUsuario] = useState(null)
  const [loading, setLoading] = useState(true) 
  
 
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const userRef = doc(db, "users", user.uid);
  //       const docSnap = await getDoc(userRef);

  //       if (docSnap.exists()) {
  //         const userData = docSnap.data();
  //         if (userData.rol) {
  //           setUsuario(user);
  //         } else {
  //           console.log("No se encontró el rol del usuario.");
  //           setUsuario(null);
  //         }
  //       } else {
  //         console.log("No se encontró el documento del usuario.");
  //         setUsuario(null);
  //       }
  //     } else {
  //       console.log("No hay usuario autenticado.");
  //       setUsuario(null);
  //     }
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, []);
  //
  

  

  const menu = () => {
    let menu_despl = document.getElementById('menu');
    let boton_cerrar = document.getElementByIdt('x');
    menu_despl.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');
  }

  onAuthStateChanged(auth, async (user) => {
    // console.log("Auth: ", auth)
    // console.log("User: ", user)
    if (user) {
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        if (userData.rol) {
          setUsuario(userData);
        } else {
          setUsuario(null);
        }
      } else {
        setUsuario(null);
      }
    } else {
      console.log("No hay usuario autenticado.");
      setUsuario(null);
    }
    setLoading(false);
  });



  // onAuthStateChanged(auth, async (usuarioFirebase) => {
  //   if (usuarioFirebase) {
  //     try {
  //       const userRef = doc(db, "users", usuarioFirebase.uid);
  //       const docSnap = await getDoc(userRef);

  //       if (docSnap.exists()) {
  //         const userData = docSnap.data();
  //         if (userData.rol) {
  //           setUsuario({ ...usuarioFirebase, ...userData });
  //         } else {
  //           console.log("No se encontró el rol del usuario.");
  //           setUsuario(null);
  //           return <navigate to="/login" />
  //         }
  //       } else {
  //         console.log("No se encontró el documento del usuario.");
  //         setUsuario(null);
  //         return <navigate to="/login" />
  //       }
  //     } catch (error) {
  //       console.error("Error al obtener los datos del usuario:", error);
  //       setUsuario(null);
  //       return <navigate to="/login" />
  //     }
  //   } else {
  //     console.log("No hay usuario autenticado.");
  //     setUsuario(null);
  //     return <navigate to="/login" />
  //   }
  //   setLoading(false);
  // });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={loading ? <Carga/>: usuario ? <Home correoUsuario={usuario.email} usuario={usuario} rol={usuario.rol} /> : <Login />
          }
          />
          <Route path="/home" element={loading ? <Carga /> : usuario ? <Home correoUsuario={usuario.email} usuario={usuario} rol={usuario.rol} /> : <Login />} />
          <Route path="/login" element={loading ? <Carga/> : <Login />} />
          <Route path="/admin" element={loading ? <Carga/> : <AdminDashboard usuario={usuario} />} />
          <Route path="/policia" element={loading ? <Carga/> : <PoliceDashboard usuario={usuario} />} />
          <Route path="/settings" element={loading ? <Carga/> : <Settings usuario={usuario} />} />

        </Routes>
      </BrowserRouter>


    </>
    // <>
    // <div>
    // {usuario ? <Home correoUsuario={usuario.email} usuario={usuario} /> : <Login />}      
    // </div>
    // </>
  )
}

export default App