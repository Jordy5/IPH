import React, { useEffect, useState } from 'react'
import appFirebase from '../credenciales'
import { getAuth } from 'firebase/auth'
import Navbar from './Navbar'
import { Navigate } from 'react-router'
import PoliceForm from './PoliceForm'

const auth = getAuth(appFirebase)

function AdminDashboard({ usuario }) {
  

  if (!usuario) {
    return <Navigate to="/" replace />;
  }
  const [isCreating, setIsCreating] = useState(false);

  const [rol, setRol] = useState(10);
  const handleChange = (event) => {
    console.log("Nuevo valor de rol:", event.target.value);
    setRol(event.target.value);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  
    return (
      <div>
        <Navbar></Navbar>
        <h2 className='text-center' style={{ margin: 0, padding: 0 }}>Bienvenido {usuario?.nombre}</h2>        
        <div>
          <PoliceForm/>
        </div>
      </div>
    )
  }

  export default AdminDashboard;