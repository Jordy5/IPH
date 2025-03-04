import { useState } from "react";
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, Menu, Typography } from "@mui/material";
import {doc,setDoc ,getFirestore, collection, addDoc } from "firebase/firestore"; // Asegúrate de tener estos imports
import { BASE_URL, db } from "../credenciales";
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
          <Typography variant="h5">Cédula Única de Identificación Personal</Typography>

          <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
            <TextField label="Entidad" variant="outlined" />
            <TextField label="Dependencia" variant="outlined" />
            <TextField label="CUIP" variant="outlined" />
            <TextField label="Entidad" variant="outlined" />
            <TextField label="Folio No." variant="outlined" />
            <p>colocar linea de separación</p>
            <br />
            <Typography variant="h5">I. DATOS PERSONALES</Typography>
            <TextField label="Nombre" variant="outlined" />
            <TextField label="Segundo Nombre" variant="outlined" />
            <TextField label="Apellido Paterno" variant="outlined" />
            <TextField label="Apellido Materno" variant="outlined" />
            
            <TextField label="Fecha de nacimiento" variant="outlined" />
            <FormControl fullWidth>
              <InputLabel>Sexo:</InputLabel>
              <Select value={""}>
                <MenuItem value="policia">Masaculino</MenuItem>
                <MenuItem value="secretaria">Femenino</MenuItem>
              </Select>
            </FormControl>
            <TextField label="R.F.C" variant="outlined" />
            <TextField label="Clave de elector" variant="outlined" />
            <TextField label="Cartilla del S.M.N" variant="outlined" />
            <TextField label="Licencia de conducir" variant="outlined" />
            <TextField label="Vigencia de la licencia" variant="outlined" />
            <TextField label="CURP" variant="outlined" />
            <TextField label="Pasaporte" variant="outlined" />
            <TextField label="Fecha de naturalización" variant="outlined" />
            <FormControl fullWidth>
              <InputLabel>Modo de nacionalidad:</InputLabel>
              <Select value={""}>
                <MenuItem value="">Nacimineto</MenuItem>
                <MenuItem value="">Naturalizado</MenuItem>
                <MenuItem value="">Extranjero</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Pais de nacimiento" variant="outlined" />
            <TextField label="Entidad de nacimiento" variant="outlined" />
            <TextField label="Municipio de nacimiento" variant="outlined" />
            <TextField label="Ciudad de nacimiento" variant="outlined" />
            <TextField label="Nacionalidad" variant="outlined" />
           
            <FormControl fullWidth>
              <InputLabel>Estado civil:</InputLabel>
              <Select value={""}>
                <MenuItem value="">Soltero</MenuItem>
                <MenuItem value="">Casado</MenuItem>
                <MenuItem value="">Viudo</MenuItem>
                <MenuItem value="">Divorciado</MenuItem>
                <MenuItem value="">Union libre o concubinato</MenuItem>
              </Select>
            </FormControl>
            <p>----------------------------------</p>
            <Typography variant="h5">DESARROLLO ACADÉMICO</Typography>
            
            <FormControl fullWidth>
              <InputLabel>Nivel maximo:</InputLabel>
              <Select value={""}>
                <MenuItem value="">Sin escolaridado</MenuItem>
                <MenuItem value="">Primaria incompleta</MenuItem>
                <MenuItem value="">Primaria completa</MenuItem>
                <MenuItem value="">Secundaria incompleta</MenuItem>
                <MenuItem value="">Secundaria completa</MenuItem>
                <menuitem value="">Carrera técnica incompleta</menuitem>
                <menuitem value="">Carrera técnica completa</menuitem>
                <menuitem value="">Bachillerato incompleto</menuitem>
                <menuitem value="">Bachillerato completo</menuitem>
                <menuitem value="">Licenciatura incompleta</menuitem>
                <menuitem value="">Licenciatura completa</menuitem>
                <menuitem value="">Especialidad incompleta</menuitem>
                <menuitem>Especialidad completa</menuitem>
                <menuitem>Maestria incompleta</menuitem>
                <menuitem>Maestria completa</menuitem>
                <menuitem>Doctorado incompleta</menuitem>
                <menuitem>Doctorado completo</menuitem>
                <menuitem>Analfabeta</menuitem>
              </Select>
            </FormControl>
            <TextField label="Escuela" variant="outlined" />
            <TextField label="Especialidad o estudio" variant="outlined" />
            <TextField label="No. de cedula profesional" variant="outlined" />
            <TextField label="Año de inicio" variant="outlined" />
            <TextField label="Año de termino" variant="outlined" />
            
            <TextField label="Número de folio de certificado" variant="outlined" />
            <TextField label="Promedio" variant="outlined" />

            <Typography variant="h5">DOMICILIO</Typography>
            <TextField label="Calle" variant="outlined" />
            <TextField label="No. Exterior" variant="outlined" />
            <TextField label="No. Interior" variant="outlined" />
            <TextField label="Colonia" variant="outlined" />
            <TextField label="Entre la calle de" variant="outlined" />
            <TextField label="Y la calle de" variant="outlined" />
            <TextField label="Código Postal" variant="outlined" />
            <TextField label="Número Telefónico" variant="outlined" />
            <TextField label="Entidad fererativa" variant="outlined" />
            <TextField label="Municipio" variant="outlined" />
            <TextField label="Ciudad" variant="outlined" />
            <Typography variant="h5">ADSCRIPCION</Typography>
            <TextField label="Dependencia" variant="outlined" />
            <TextField label="Institución" variant="outlined" />
            <TextField label="Fecha de ingreso" variant="outlined" />
            <TextField label="Puesto" variant="outlined" />
            <TextField label="Especialidad" variant="outlined" />
            <TextField label="Rango o categoria" variant="outlined" />
            <TextField label="Nivel de mando" variant="outlined" />
            <TextField label="Número de placa" variant="outlined" />
            <TextField label="Número de expediente" variant="outlined" />
            <TextField label="Sueldo base(mensual)" variant="outlined" />
            <TextField label="Compensación(Mensual)" variant="outlined" />
            <TextField label="División" variant="outlined" />
            <TextField label="Funciones" variant="outlined"/>
            <TextField label="CUIP del jefe inmediato" variant="outlined" />
            <TextField label="Nombre del jefe inmediato" variant="outlined" />
            <TextField label="Entidad federativa" variant="outlined" />
            <TextField label="Municipio" variant="outlined" />
            <Typography variant="h5">ADSCRIPCIÓN: DOMICILIO DE ADSCRIPCIÓN</Typography>
            <TextField label="Calle" variant="outlined" />
            <TextField label="No. Exterior" variant="outlined" />
            <TextField label="No. Interior" variant="outlined" />
            <TextField label="Colonia" variant="outlined" />
            <TextField label="Entre la calle de" variant="outlined" />
            <TextField label="Y la calle de" variant="outlined" />
            <TextField label="Número Telefónico" variant="outlined" />
            <TextField label="Código Postal" variant="outlined" />
            <TextField label="Entidad federativa" variant="outlined" />
            <TextField label="Municipio o delegación" variant="outlined" />
            <TextField label="Ciudad o población" variant="outlined" />
            <Typography variant="h5">DATOS GENERALES: EXPERIENCIA DOCENTE</Typography>
            <p>aqui debo de poner algo de que si tiene experiencia se coloque</p>
            <TextField label="Nombre del curso" variant="outlined" />
            <TextField label="Nombre de la institución" variant="outlined" />
            <TextField label="Fecha de inicio" variant="outlined" />
            <TextField label="Fecha de termino" variant="outlined" />
            <TextField label="Certificado por:" variant="outlined" />
            <TextField label="Nombre del curso" variant="outlined" />
            <TextField label="Nombre de la institución" variant="outlined" />
            <TextField label="Fecha de inicio" variant="outlined" />
            <TextField label="Fecha de termino" variant="outlined" />
            <TextField label="Certificado por:" variant="outlined" />


            













            
            <br /><br />
            <Typography variant="h5">Datos que quitare</Typography>
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