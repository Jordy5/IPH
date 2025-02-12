import React from 'react'
import appFirebase from '../credenciales'
import {getAuth} from 'firebase/auth'
import Navbar from '../components/Navbar'


const auth = getAuth(appFirebase)

const Home = ({ correoUsuario }) => {
  return (
    <>
    <Navbar></Navbar>
    <h2 className='text-center'>Bienvenido {correoUsuario}</h2>
    </>
  )
}

export default Home