import React from 'react'
import Navbar from '../components/Navbar'
import appFirebase from '../credenciales'
import { getAuth } from 'firebase/auth'
import Box from '@mui/material/Box'
import { TextField } from '@mui/material'


const auth = getAuth(appFirebase)

function Settings({ usuario }) {
    return (
        <div>
            <Navbar></Navbar>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
        </div>
    )

}

export default Settings