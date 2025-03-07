import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    allowedHosts:[
      '.ngrok-free.app' // Esto permitirá todos los subdominios de ngrok-free.app
    ], // Agrega tu dominio de ngrok aquí
    host: true, // Permite acceder desde otros dispositivos en la red
    port: 5173, // Asegúrate de que coincida con tu puerto de desarrollo
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'IPH',
        short_name: 'App',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  optimizeDeps: {
    exclude: ['@mui/x-date-pickers-pro', '@mui/x-date-pickers', 'date-fns']
  }  
});
