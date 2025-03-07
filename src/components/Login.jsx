import React, { useState } from 'react'
import imgLogin from '../assets/parrot.jpg'
import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { CircularProgress, TextField } from '@mui/material'
import { Navigate } from 'react-router-dom'

const auth = getAuth(appFirebase)

const Login = (usuario) => {
    if (!usuario) {
        return <Navigate to="/" replace />;
    }

    if (usuario && usuario.rol === 'admin') {
        return <Navigate to="/admin" />;
    }
    if (usuario && usuario.rol === 'policia') {
        return <Navigate to="/policia" />;
    }

    //variables de estado
    const [registrando, setRegistrando] = useState(false)
    const [loading, setLoading] = useState(false)

    const functAutentication = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;

        setLoading(true); // Mostrar el indicador de carga

        try {
            if (registrando) {
                await createUserWithEmailAndPassword(auth, correo, password)
            } else {
                await signInWithEmailAndPassword(auth, correo, password)
            }
        } catch (error) {
            alert("El correo o la contraseña son incorrectos")
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 4000);
            setLoading(false);
        }
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={imgLogin} alt="" className='estilo-profile' />
                            <form onSubmit={functAutentication}>
                                <input variant='outlined' type="text" placeholder='Ingresa Correo' className='cajaTexto' id='email' required />
                                <input type='password' placeholder='Ingresa Contraseña' className='cajaTexto' id='password' required />
                                
                                <button className='btnform' type="submit" disabled={loading}>
                                    {loading ? <CircularProgress size={24} /> : 'Iniciar Sesión'}
                                </button><br />
                                <p style={{display:'flex',justifyContent: 'center'}} variant="outlined">© 2025</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login