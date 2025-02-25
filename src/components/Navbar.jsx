import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import SvgIcon from '@mui/material/SvgIcon';
import LoginIcon from '@mui/icons-material/Login';

import '../App.css';
//

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  function loginIcon(props){
    return(
        <SvgIcon{...props}>
         <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    )
  }
  
//

import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)
let vacio = '';
function Navbar() {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const abrir_cerrar_menu = () => {
        let menu_desplegable = document.getElementById('menu');
        let boton_cerrar = document.getElementById('x');
        menu_desplegable.classList.toggle('abrir_menu');
        boton_cerrar.classList.toggle('colocar_x');
    };
    return (
        <div style={{ height: '70px' }}>
            <div className="barras" >
                <button
                    id='x'
                    onClick={() => {
                        setIsOpen(!isOpen);
                        abrir_cerrar_menu()
                        console.log("Estado del menú:", isOpen); // Verifica si cambia
                    }}
                    className="text-white text-3xl md:hidden"
                >
                    ☰
                </button>

            </div>
            <nav id='menu' className="desplegable">
                <ul className={`${isOpen ? "block" : "hidden"
                    } md:flex md:gap-4 mt-2 bg-blue-500 md:bg-transparent p-2 md:p-0 text-white`}>
                    <h2>IPH</h2>
                    <li><a href={vacio} onClick={() => navigate("/")}><HomeIcon sx={{ fontSize: 30 }}/>Inicio</a></li>
                    {/*<li><a href={vacio} onClick={() => navigate("/settings")}>Configuracion</a></li>*/}
                    <li><a
                        href={vacio}
                        onClick={async (e) => {
                            e.preventDefault(); // Evita el comportamiento por defecto del enlace
                            try {
                                await signOut(auth);
                                navigate("/"); // Redirige al usuario al login
                            } catch (error) {
                                console.error("Error al cerrar sesión:", error);
                            }
                        }}
                    >

                        <LoginIcon/>Cerrar Sesión
                    </a></li>
                </ul>
            </nav>
        </div>
    );
}


export default Navbar;
