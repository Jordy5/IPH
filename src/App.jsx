import { useState } from 'react'

//importando los modulos de FireBase
import appFirebase from '../src/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'  //no ayuda a saber si una persona se a autentica|do o no
const auth = getAuth(appFirebase) //de aqui obtiene la base

//importaremos nuestros componentes las vistas
import Login from '../src/components/Login'
import './App.css'
import Home from '../src/components/Home'

function App() {
  //const del menu
  const menu = () => {
    let menu_despl = document.getElementById('menu');
    let boton_cerrar = documen.getElementByIdt('x');
    menu_despl.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');
  }
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else {
      setUsuario(null)
    }
  })

  return (
    <>
    <div>
    {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}      
    </div>
    </>
  )

}
export default App