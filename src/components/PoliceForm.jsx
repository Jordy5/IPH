import { useState } from "react";
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {doc,setDoc ,getFirestore, collection, addDoc } from "firebase/firestore"; // Asegúrate de tener estos imports
import { BASE_URL, db } from "../credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../credenciales'; 
import { Typography } from '@mui/material';


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
      <Button
      variant="contained" onClick={() => setIsCreating(true) }>
        Agregar Nuevo Elemento
      </Button>
      

      {isCreating && (
        <div className="form-container">
          <br />
          <Typography variant="h4">Agregue Datos Del Nuevo Elemento</Typography>

          <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
            <TextField label="Nombre" variant="outlined" value={nombre} onChange={(e) => setNombre(e.target.value)}  />
            <TextField label="Apellido Paterno" variant="outlined" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)}  />
            <TextField label="Apellido Materno" variant="outlined" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)}  />
            <TextField label="Número de Matricula" variant="outlined" value={numeroMatricula} onChange={(e) => setNumeroMatricula(e.target.value)}  />
            <TextField label="Número de Patrulla" variant="outlined" value={numeroPatrulla} onChange={(e) => setNumeroPatrulla(e.target.value)}  />
            <TextField label="Municipio" variant="outlined" value={municipio} onChange={(e) => setMunicipio(e.target.value)} />
            <TextField label="Institución" variant="outlined" value={institucion} onChange={(e) => setInstitucion(e.target.value)}/>
            <TextField label="Entidad Federativa" variant="outlined" value={entidadFederativa} onChange={(e) => setEntidadFederativa(e.target.value)}  />
            <TextField label="Cargo Político" variant="outlined" value={cargoPolitico} onChange={(e) => setCargoPolitico(e.target.value)} />
            <FormControl fullWidth>
              <InputLabel>Rol</InputLabel>
              <Select value={rol} onChange={(e) => setRol(e.target.value)}>
                <MenuItem value="policia">Policía</MenuItem>
                <MenuItem value="secretaria">Secretaria</MenuItem>
                <MenuItem value="otro">Otro</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="h5">Datos para que Inicie Sesión en la App</Typography>
            <TextField label="Correo" variant="outlined" value={correo} onChange={(e) => setCorreo(e.target.value)}  />

            

            <TextField label="Contraseña (8-10 dígitos)" value={contraseña} variant="outlined" type="password" onChange={(e) => setContraseña(e.target.value)} /><br />
            <div style={{color: 'red'}}><Typography variant="body2">Recuerda Proporcionar estos datos al nuevo usuario.</Typography></div>
            <Button variant="contained" onClick={handleCreateUser} loading={loading}>
              Guardar Datos
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};
export default PoliceForm;