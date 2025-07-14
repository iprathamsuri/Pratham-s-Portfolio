// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/your-repo-name/', // ← CHANGE THIS to your GitHub repo name
  plugins: [react()],
});
