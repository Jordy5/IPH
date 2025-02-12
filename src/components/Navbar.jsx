import { useState } from 'react';
import '../App.css';


import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)
let vacio = '';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const abrir_cerrar_menu = () => {
        let menu_desplegable = document.getElementById('menu');
        let boton_cerrar = document.getElementById('x');
        menu_desplegable.classList.toggle('abrir_menu');
        boton_cerrar.classList.toggle('colocar_x');
    };
    return (
        <>
            <div>
                <header>
                    <div className="barras">
                        <button
                            onClick={() => {
                                setIsOpen(!isOpen);
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
                            <li><a href={vacio}>Inicio</a></li>
                            <li><a href={vacio}>Configuracion</a></li>
                            <li><a href={vacio} onClick={() => signOut(auth)}>Cerrar Sesión</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    );
}


export default Navbar;
