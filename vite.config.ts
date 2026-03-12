import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'
import { qrcode } from 'vite-plugin-qrcode';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), glsl(), qrcode()],
    resolve: {
        dedupe: ['@react-three/fiber', 'three'],
    },
    server: {
        open: true
    }
})