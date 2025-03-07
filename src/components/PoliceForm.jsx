import { useState } from "react";
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, Menu, Typography, RadioGroup, FormControlLabel, Accordion, AccordionSummary, FormGroup } from "@mui/material";
import {doc,setDoc ,getFirestore, collection, addDoc } from "firebase/firestore"; // Asegúrate de tener estos imports
import { BASE_URL, db } from "../credenciales";
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { TextareaAutosize } from '@mui/material';
import Pagination from "../components/Pagination";






const PoliceForm = () => {
  const [isCreating, setIsCreating] = useState(false); // Cambié a 'false' para inicializarlo como un valor booleano
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [numeroMatricula, setNumeroMatricula] = useState('');
  const [numeroPatrulla, setNumeroPatrulla] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [institucion, setInstitucion] = useState('');
  const [entidadFederativa, setEntidadFederativa] = useState('');
  const [cargoPolitico, setCargoPolitico] = useState('');
  const [correo, setCorreo] = useState('');
  const [rol, setRol] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [loading, setLoading] = useState(false)
  

  const checkAdminRole = async () => {
    const user = firebase.auth().currentUser;
    if (user) {
      try {
        const idToken = await user.getIdToken(true);
        console.log(idToken);
        const decodedToken = jwt_decode(idToken); 
        console.log(decodedToken);
        if (decodedToken.role !== 'admin') {
          alert("No tienes permisos para crear usuarios.");
          return false;
        }
      } catch (error) {
        console.error("Error al obtener el token:", error);
        alert('Error al verificar permisos');
        return false;
      }
    } else {
      alert("Usuario no autenticado.");
      return false;
    }
    return true;
  };
  // Función para crear el usuario en Firebase
  const handleCreateUser = async () => {
    setLoading(true)
    //
    // Validar que todos los campos estén llenos
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !numeroMatricula || !numeroPatrulla || !municipio || !institucion || !entidadFederativa || !cargoPolitico || !correo || !rol || !contraseña) {
      alert('Por favor, complete todos los campos.');
      setLoading(false)
      return;
    }
    await createUser(correo, contraseña);
    const userData = {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      numeroMatricula,
      numeroPatrulla,
      municipio,
      institucion,
      entidadFederativa,
      cargoPolitico,
      correo,
      rol,
      contraseña, // Asegúrate de que la contraseña esté procesada o encriptada
    };

    try {
      // Usar addDoc y collection con la nueva API modular de Firebase
      // const docRef = await addDoc(collection(db, 'users'), userData);
      // console.log("Usuario creado con ID: ", docRef.id);
      // alert('Usuario creado exitosamente');
      setIsCreating(false);

      setNombre('');
      setApellidoPaterno('');
      setApellidoMaterno('');
      setNumeroMatricula('');
      setNumeroPatrulla('');
      setMunicipio('');
      setInstitucion('');
      setEntidadFederativa('');
      setCargoPolitico('');
      setCorreo('');
      setRol('');
      setContraseña('');
    } catch (error) {
      console.error("Error al crear el usuario: ", error);
      alert('Hubo un error al crear el usuario. Intenta nuevamente.');
    }
    setLoading(false)
  };
  //
  const validaPassword = (password)=>{
    if(password.length < 6){
      console.error("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    return true;
  }
  
  async function createUser(email, password) {
    if (!email || !password) {
      console.error("Email y contraseña son requeridos.");
      return;
    }
  
    try {
      // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const f = await fetch(`${BASE_URL}/createUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',            
        },
        body: JSON.stringify({ nombre, apellidoPaterno, apellidoMaterno, numeroMatricula, numeroPatrulla, municipio, institucion, entidadFederativa, cargoPolitico, correo, rol, contraseña })
      })

      const request = await f.json()
      console.log("REQUEST: ", request)
        
      
      // const userRef = doc(db, "users", user.uid);
      // await setDoc(userRef, {
      //   email: user.email,
      //   rol: 'user', 
        
      // });
      
      console.log("Datos adicionales guardados en Firestore.");
      alert("Datos Guardados correctamente")
    } catch (error) {
      console.error("Error al crear el usuario:", error.message);
    }
  }
  //
  
  return (
    <div>
      <Button style={{ marginBottom: 5 , marginTop: 5, marginLeft: 20}}
      
      variant="contained" onClick={() => setIsCreating(true) }>
        Agregar Nuevo Elemento
      </Button>
      
      
      {isCreating && (
        <div className="form-container" style={{ padding: 20 }}>
          <Typography variant="h4">Agregue Datos Del Nuevo Elemento</Typography>
          
          <br />
          <Pagination />
          <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
          </Box>
        </div>
      )}
    </div>
  );
};
export default PoliceForm;