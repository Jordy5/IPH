import React from 'react'
import Navbar from './Navbar'
import { Navigate } from 'react-router'
import { Typography } from 'antd';

function PoliceDashboard({ usuario }) {
  if (!usuario) {
    return <Navigate to="/" replace />; // Redirige al login si no hay usuario
  }
  return (
    <div>


      <Navbar></Navbar>
      <h2  className='text-center'>Bienvenido {usuario.nombre}❤️</h2>
      
      
      </div>
      
  )
}

export default PoliceDashboard