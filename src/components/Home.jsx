import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'; // Para hacer las redirecciones
import appFirebase from '../credenciales'
import { getAuth } from 'firebase/auth'
import Navbar from '../components/Navbar'

const auth = getAuth(appFirebase)

const Home = ({ correoUsuario, usuario }) => {

  if(!usuario){
    return <Navigate to="/" replace />; 
  }
  
  if (usuario && usuario.rol === 'admin') {
    return <Navigate to="/admin" />; 
  }
  if (usuario && usuario.rol === 'policia') {
    return <Navigate to="/policia" />; 
  } 
 
  return (
    <div>
      <Navbar></Navbar>
      <h2 className='text-center' style={{ margin: 0, padding: 0 }}>Bienvenido {usuario.nombre}</h2>
      <p>Tienes el rol de: {usuario.rol}</p> 
    </div>
  )
}

export default Home;
