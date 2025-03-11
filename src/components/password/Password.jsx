import { Box } from '@mui/material'
import { Typography } from 'antd';
import React from 'react'

export default function Password() {
    if (!usuario) {
        return <Navigate to="/password" replace />; // Redirige al login si no hay usuario
      }
  return (
    <Box>
        <Typography></Typography>
    </Box>
  )
}
