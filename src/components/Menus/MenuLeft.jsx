import React from 'react'
import { Button, Box, Paper } from '@mui/material';

const MenuLeft = ({ setActiveMenu }) => {
  return (
    <Paper elevation={0}>
        
        <Button style={{ marginBottom: 5, marginTop: 5, marginLeft: 20 }}
        variant="contained" onClick={() => setActiveMenu('menu1')}>
        Agregar Nuevo Elemento
    </Button>
      
    <Button style={{ marginBottom: 5, marginTop: 5, marginLeft: 20 }}
        variant="contained" onClick={() => setActiveMenu('menu2')}>
        menu 2
    </Button>
     <Button style={{ marginBottom: 5, marginTop: 5, marginLeft: 20 }}
        variant="contained" onClick={() => setActiveMenu('menu3')}>
        Menú 3
     </Button>
     <Button style={{ marginBottom: 5, marginTop: 5, marginLeft: 20 }}
        variant="contained" onClick={() => setActiveMenu('menu4')}>
        Menú 4
     </Button>
     <Button style={{ marginBottom: 5, marginTop: 5, marginLeft: 20 }}
        variant="contained" onClick={() => setActiveMenu('menu5')}>
        Menú 5
    </Button>
    </Paper>
  )
}

export default MenuLeft