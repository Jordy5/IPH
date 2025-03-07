import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import '../App.css';

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}

import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(appFirebase);
let vacio = '';

function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const abrir_cerrar_menu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar-container">
            <div className="navbar">
                <button
                    id='menu-button'
                    onClick={abrir_cerrar_menu}
                    className="menu-button"
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
                <h2 className="navbar-title">IPH</h2>
            </div>
            <nav id='menu' className={`menu ${isOpen ? "open" : ""}`}>
                <ul className="menu-list">
                    <li><a href={vacio} onClick={() => navigate("/")}><HomeIcon sx={{ fontSize: 30 }}/>Inicio</a></li>
                    <li><a
                        href={vacio}
                        onClick={async (e) => {
                            e.preventDefault();
                            try {
                                await signOut(auth);
                                navigate("/");
                            } catch (error) {
                                console.error("Error al cerrar sesión:", error);
                            }
                        }}
                    >
                        <LoginIcon />Cerrar Sesión
                    </a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
