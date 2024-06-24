import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/goit-react-hw-01/',
  plugins: [react()],
});
