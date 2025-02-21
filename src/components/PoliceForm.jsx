import { useState } from "react";
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {doc,setDoc ,getFirestore, collection, addDoc } from "firebase/firestore"; // Asegúrate de tener estos imports
import { db } from "../credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../credenciales'; 


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

  //
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

    //
    // Validar que todos los campos estén llenos
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !numeroMatricula || !numeroPatrulla || !municipio || !institucion || !entidadFederativa || !cargoPolitico || !correo || !rol || !contraseña) {
      alert('Por favor, complete todos los campos.');
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
      const docRef = await addDoc(collection(db, 'users'), userData);
      console.log("Usuario creado con ID: ", docRef.id);
      alert('Usuario creado exitosamente');
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
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Usuario creado con éxito:", user);
  
      
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        email: user.email,
        rol: 'user', 
        
      });
  
      console.log("Datos adicionales guardados en Firestore.");
    } catch (error) {
      console.error("Error al crear el usuario:", error.message);
    }
  }
  //

  return (
    <div>
      <Button size="small" variant="contained" onClick={() => setIsCreating(true)}>
        Agregar Nuevo Policia
      </Button>

      {isCreating && (
        <div className="form-container">
          <h3>Agregue Datos Del Nuevo Policia</h3>

          <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
            <TextField label="Nombre" variant="outlined" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            <TextField label="Apellido Paterno" variant="outlined" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} required />
            <TextField label="Apellido Materno" variant="outlined" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} required />
            <TextField label="Número de Matricula" variant="outlined" value={numeroMatricula} onChange={(e) => setNumeroMatricula(e.target.value)} required />
            <TextField label="Número de Patrulla" variant="outlined" value={numeroPatrulla} onChange={(e) => setNumeroPatrulla(e.target.value)} required />
            <TextField label="Municipio" variant="outlined" value={municipio} onChange={(e) => setMunicipio(e.target.value)} required />
            <TextField label="Institución" variant="outlined" value={institucion} onChange={(e) => setInstitucion(e.target.value)} required />
            <TextField label="Entidad Federativa" variant="outlined" value={entidadFederativa} onChange={(e) => setEntidadFederativa(e.target.value)} required />
            <TextField label="Cargo Político" variant="outlined" value={cargoPolitico} onChange={(e) => setCargoPolitico(e.target.value)} required />

            <h4>Datos para que Inicie Sesión</h4>
            <TextField label="Correo" variant="outlined" value={correo} onChange={(e) => setCorreo(e.target.value)} required />

            <FormControl fullWidth>
              <InputLabel>Rol</InputLabel>
              <Select value={rol} onChange={(e) => setRol(e.target.value)} required>
                <MenuItem value="policia">Policía</MenuItem>
                <MenuItem value="secretaria">Secretaria</MenuItem>
                <MenuItem value="otro">Otro</MenuItem>
              </Select>
            </FormControl>

            <TextField label="Contraseña (8-10 dígitos)" value={contraseña} variant="outlined" type="password" onChange={(e) => setContraseña(e.target.value)} required />

            <Button size="small" variant="contained" onClick={handleCreateUser}>
              Agregar Nuevo Policia
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};

export default PoliceForm;
