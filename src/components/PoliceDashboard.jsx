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
      <h2  className='text-center'>Bienvenida {usuario.nombre}❤️</h2>
      <h3 className='text-center'>Tienes el rol de: El Amor de mi Vida🥰</h3>
     
      
      <div className='text-center'style={{alignItems: "rigth"}}>
      <p>
     .......▄██▄ <br />
......(((//)))) <br />
...........(((◕_◕ )))..♥ <br />
░░▄███▄███▄ <br />
░░█████████ <br />
░░▒▀█████▀ <br />
░░░░░░▒░░▀█▀ .... Para Tiii
      </p>
      </div>
      {/*
       * 
       * 
       * 
       * 
       */}
      
      </div>
      
  )
}

export default PoliceDashboard