import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [
      ".jsx",
      ".js"
    ]
  },
  loader: {
    '.js': 'jsx', // Add this line to specify that '.js' files should be treated as JSX
  },
})
