import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, Menu, Typography, RadioGroup, FormControlLabel, Accordion, AccordionSummary, FormGroup } from "@mui/material";
import { ca } from 'date-fns/locale';
import Checkbox from '@mui/material/Checkbox';
import { TextareaAutosize } from '@mui/material';



export default function PaginatedForm() {
  const [page, setPage] = useState(1);


  const handleChange = (event, value) => {
    setPage(value);
    
  };
  
  const renderPageContent = () => {
    switch (page) {
      case 1:
        return (
          <div>
            <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
            <Typography variant="h5">1. Cédula Única de Identificación Personal</Typography>
            <TextField label="Entidad" variant="outlined" />
            <TextField label="Dependencia" variant="outlined" />
            <TextField label="CUIP" variant="outlined" />
            <TextField label="Entidad" variant="outlined" />
            <TextField label="Folio No." variant="outlined" />
            <Button variant="contained" size="large"> Guardar</Button>
            </Box>
            
          </div>
        );
      case 2:
        return (
          <div>
            <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
            <Typography variant="h5">2. DATOS PERSONALES</Typography>
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
            <Button variant="contained">Guardar</Button>
            </Box>
           
          </div>
        );
      case 3:
        return (
          <div>
            <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off" >
            <Typography variant="h5">3. DESARROLLO ACADÉMICO</Typography>
            
            <FormControl fullWidth>
              <InputLabel>Nivel maximo:</InputLabel>
              <Select label="Nivel maximo">
                <MenuItem value="">Sin escolaridado</MenuItem>
                <MenuItem value="">Primaria incompleta</MenuItem>
                <MenuItem value="">Primaria completa</MenuItem>
                <MenuItem value="">Secundaria incompleta</MenuItem>
                <MenuItem value="">Secundaria completa</MenuItem>
                <MenuItem value="">Carrera técnica incompleta</MenuItem>
                <MenuItem value="">Carrera técnica completa</MenuItem>
                <MenuItem value="">Bachillerato incompleto</MenuItem>
                <MenuItem value="">Bachillerato completo</MenuItem>
                <MenuItem value="">Licenciatura incompleta</MenuItem>
                <MenuItem value="">Licenciatura completa</MenuItem>
                <MenuItem value="">Especialidad incompleta</MenuItem>
                <MenuItem>Especialidad completa</MenuItem>
                <MenuItem>Maestria incompleta</MenuItem>
                <MenuItem>Maestria completa</MenuItem>
                <MenuItem>Doctorado incompleta</MenuItem>
                <MenuItem>Doctorado completo</MenuItem>
                <MenuItem>Analfabeta</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Escuela" variant="outlined" />
            <TextField label="Especialidad o estudio" variant="outlined" />
            <TextField label="No. de cedula profesional" variant="outlined" />
            <TextField label="Año de inicio" variant="outlined" />
            <TextField label="Año de termino" variant="outlined" />
            <TextField label="Número de folio de certificado" variant="outlined" />
            <TextField label="Promedio" variant="outlined" />
            <Button variant="contained">Guardar</Button>
            </Box>
            
          </div>
        );
        case 4:
            return (
              <div>
                <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off" >
                <Typography variant="h5">4. DOMICILIO</Typography>
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
            <Button variant="contained">Guardar</Button>
</Box>
             
              </div>
            );
        case 5:
            return (
              <div>
                <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off" >
                <Typography variant="h5">5. ADSCRIPCION</Typography>
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
            <Button variant="contained">Guardar</Button>
</Box>
               
              </div>
            );
        case 6:
            return (
              <div>
                <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off" >
                <Typography variant="h5">6. ADSCRIPCIÓN: DOMICILIO DE ADSCRIPCIÓN</Typography>
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
            <Button variant="contained">Guardar</Button>
</Box>
               
                </div>
            );
        case 7:
            return (
              <div>
                <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off" >
                <Typography variant="h5">7. DATOS GENERALES: EXPERIENCIA DOCENTE</Typography>
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
            <Button variant="contained">Guardar</Button>
            
</Box>
            
              </div>
            );
        case 8:
            return (
              <div>
                <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off" >
                <Typography variant="h5">8. DATOS GENERALES: REFERENCIAS</Typography>
            
            <TextField label="Apellido Paterno" variant="outlined" />
            <TextField label="Apellido Materno" variant="outlined" />
            <TextField label="Nombre" variant="outlined" />
            <FormControl fullWidth>
              <InputLabel>Sexo:</InputLabel>
              <Select value={""}>
                <MenuItem value="">Masculino</MenuItem>
                <MenuItem value="">Femenimo</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Ocupación" variant="outlined" />
            <TextField label="Relación o parentesco" variant="outlined" />
            <TextField label="Calle" variant="outlined" />
            <TextField label="No. Exterior" variant="outlined" />
            <TextField label="No. Interior" variant="outlined" />
            <TextField label="Colonia" variant="outlined" />
            <TextField label="Código Postal" variant="outlined"/>
            <TextField label="Número Telefonico" variant="outlined" />
            <TextField label="País" variant="outlined" />
            <TextField label="Entidad federativa" variant="outlined" />
            <TextField label="Municipio o Delegación" variant="outlined" />
            <TextField label="Ciudad o Población" variant="outlined" />
            <Button variant="contained">Guardar</Button>
</Box>
                
              </div>
            );
        case 9:
            return(
                <div>
                    <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off" >
                    <Typography variant="h5">9. DATOS GENERALES: REFERENCIAS(continuacion)</Typography>
            <TextField label="Apellido Paterno" variant="outlined" />
            <TextField label="Apellido Materno" variant="outlined" />
            <TextField label="Nombre" variant="outlined" />
            <FormControl fullWidth>
              <InputLabel>Sexo:</InputLabel>
              <Select value={""}>
                <MenuItem value="">Masculino</MenuItem>
                <MenuItem value="">Femenimo</MenuItem>
              </Select>
            </FormControl>
            
            <TextField label="Ocupación" variant="outlined" />
            <TextField label="Relación o parentesco" variant="outlined" />
            <TextField label="Calle" variant="outlined" />
            <TextField label="No. Exterior" variant="outlined" />
            <TextField label="No. Interior" variant="outlined" />
            <TextField label="Colonia" variant="outlined" />
            <TextField label="Código Postal" variant="outlined"/>
            <TextField label="Número Telefonico" variant="outlined" />
            <TextField label="País" variant="outlined" />
            <TextField label="Entidad federativa" variant="outlined" />
            <TextField label="Municipio o Delegación" variant="outlined" />
            <TextField label="Ciudad o Población" variant="outlined" />
            <Typography variant="subtitile1">Laboral</Typography>
            <TextField label="Apellido paterno" variant="outlined" />
            <TextField label="Apellido materno" variant="outlined" />
            <TextField label="Nombre" variant="outlined" />
            <FormControl fullWidth>
              <InputLabel>Sexo:</InputLabel>
              <Select value={""}>
                <MenuItem value="">Masculino</MenuItem>
                <MenuItem value="">Femenimo</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Ocupación" variant="outlined" />
            <TextField label="Relación o parentesco" variant="outlined" />
            <TextField label="Calle" variant="outlined" />
            <TextField label="No. Exterior" variant="outlined" />
            <TextField label="No. Interior" variant="outlined" />
            <TextField label="Colonia" variant="outlined" />
            <TextField label="Código Postal" variant="outlined"/>
            <TextField label="Número Telefonico" variant="outlined" />
            <TextField label="País" variant="outlined" />
            <TextField label="Entidad federativa" variant="outlined" />
            <TextField label="Municipio o Delegación" variant="outlined" />
            <TextField label="Ciudad o Población" variant="outlined" />
            <Button variant="contained">Guardar</Button>
</Box>
                  
                </div>
            );
        case 10:
            return(
                <div>
                    <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off" >
                    <Typography variant="h5">10. DATOS GENERALES: SOCIOECONÓMICO</Typography>
            <FormGroup>
              <Typography variant="subtitle1">¿Vive con su familia?</Typography>
              <FormControlLabel  control={<Checkbox />} label="Si" />
              <FormControlLabel control={<Checkbox />} label="No" />
            </FormGroup>
            <TextField label="Ingres familiar adicional" variant="outlined" />
            <FormControl fullWidth>
              <InputLabel>Su Domicilio es:</InputLabel>
              <Select value={""}>
                <MenuItem value="">Propio</MenuItem>
                <MenuItem value="">Rentado</MenuItem>
                <MenuItem value="">Hipoteca</MenuItem>
                <MenuItem value="">Prestado</MenuItem>
                <MenuItem value="">Familiar</MenuItem>
              </Select>
            </FormControl>
            <TextareaAutosize
              minRows={3}
              placeholder="Descripción adicional"
              style={{ width: '10%', marginTop: 10, border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: 4, padding: 8 }}
            />
            <TextareaAutosize
              minRows={3}
              placeholder="Especificación de inmueble y costo" 
              style={{ width: '10%', marginTop: 10, border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: 4, padding: 8 }}
            />
            <TextareaAutosize
              minRows={3}
              placeholder="Inversiones y monto aproximado"
              style={{ width: '10%', marginTop: 10, border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: 4, padding: 8 }}
            />
            <TextareaAutosize
              minRows={3}
              placeholder="vehiculo y costo aproximado"
              style={{ width: '10%', marginTop: 10, border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: 4, padding: 8 }}
            />
            <TextareaAutosize
              minRows={3}
              placeholder="Calidad de vida"
              style={{ width: '10%', marginTop: 10, border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: 4, padding: 8 }}
            />
            <TextareaAutosize
              minRows={3}
              placeholder="Vicios"
              style={{ width: '10%', marginTop: 10, border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: 4, padding: 8 }}
            />
            <TextareaAutosize
              minRows={3}
              placeholder="Imagen pública"
              style={{ width: '10%', marginTop: 10, border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: 4, padding: 8 }}
            />
            <TextareaAutosize
              minRows={3}
              placeholder="Comportamiento social"
              style={{ width: '10%', marginTop: 10, border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: 4, padding: 8 }}
              
            />
            <Button variant="contained">Guardar</Button>
</Box>
                     
                </div>
            );
        case 11:
            return(
                <div>
                    <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off" >
                    <Typography variant="h5">11. DATOS DEL CONYUGE Y DEPENDIENTES ECONOMICOS</Typography>
            <TextField label="Apellido Paterno" variant="outlined" />
            <TextField label="Apellido Materno" variant="outlined" />
            <TextField label="Nombre" variant="outlined" />
            <TextField label="Fecha de nacimiento" variant="outlined" />
            <FormControl fullWidth>
              <InputLabel>Sexo:</InputLabel>
              <Select value={""}>
                <MenuItem value="">Masculino</MenuItem>
                <MenuItem value="">Femenino</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained">Guardar</Button>
</Box>
                    
                </div>
            );
        case 12:
            return(
                <div>
                    <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off" >
                    <Typography variant="h5">12. DATOS GENERALES: PRESTACIONES</Typography>
            <TextField label="Tipo" variant="outlined"/>
            <TextField label="Fecha" variant="outlined"/>
            <TextField label="Monto" variant="outlined"/>
            <TextField label="Justificación" variant="outlined"/>
            <TextField label="Tipo" variant="outlined"/>
            <TextField label="Fecha" variant="outlined"/>
            <TextField label="Monto" variant="outlined"/>
            <TextField label="Justificación" variant="outlined"/>
            <Button variant="contained">Guardar</Button>
</Box>
                   
            
                </div>
            );
        case 13:
            return(
                <div>
                    <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off" >
                    <Typography variant="h5">13. OBJETOS ASIGNADOS: ARMAMENTO ASIGNADO (DE CARGO)
            </Typography>
            <TextField label="Número de licencia de portación" variant="outlined"/>
            <TextField label="Número de Matricula" variant="outlined"/>
            <TextField label="Inicio de vigencia" variant="outlined"/>
            <TextField label="Termino de vigencia" variant="outlined"/>
            <TextField label="Tipo de arma" variant="outlined"/>
            <TextField label="Marca del arma" variant="outlined"/>
            <TextField label="Calibre del arma" variant="outlined"/>
            <TextField label="Inicio de asignación" variant="outlined"/>
            <TextField label="Térino de asignación" variant="outlined"/>
            <TextField label="Término de asignación" variant="outlined"/>
            <TextField label="Documento de descargo" variant="outlined"/>
            <p>agregar para si tiene una o mas armas</p>
            <Button variant="contained">Guardar</Button>
</Box>

                    
                </div>
            );
      default:
        return <div>Página no encontrada</div>;
    }
  };

  return (
    <Stack spacing={3}>
      {renderPageContent()}
      <Pagination count={13} page={page} onChange={handleChange} />
    </Stack>
  );
}
