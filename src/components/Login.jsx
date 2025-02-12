import React, { useState } from 'react'
import imgLogin from '../assets/parrot.jpg'
import imge from '../assets/imagen.jpg'
import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {
    //variables de estado
    const { registrando, setRegistrando } = useState(false)
    const functAutentication = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;

        //si la contraseña es incorrecta o su contraseña saldra una alerta para notificar al usuario
        if (registrando) {
            await createUserWithEmailAndPassword(auth, correo, password)
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, password)
            } catch (error) {
                alert("El correo o la contraseña son incorrectos")
            }
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
                                <input type="text" placeholder='Ingresa Email' className='cajaTexto' id='email' />
                                <input type="password" placeholder='Ingresa password' className='cajaTexto' id='password' />
                                <button className='btnform'>Iniciar Sesión</button>
                                <a href=""></a>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login