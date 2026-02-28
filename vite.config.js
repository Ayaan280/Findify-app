import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // ADD THIS LINE: replace 'your-repo-name' with your actual GitHub repository name
  base: '/Findify-app/', 
  
  logLevel: 'error', 
  plugins: [
    base44({
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      visualEditAgent: true
    }),
    react(),
  ]
});
