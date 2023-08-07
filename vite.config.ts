import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});

console.log(JSON.stringify(config));

export default config;
