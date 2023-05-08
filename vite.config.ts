import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    "process.env": Object.entries(process.env).reduce(
      (acc, [key, value]) => ({
        ...acc,
        ...((key.startsWith("VITE") || ["NODE_ENV"].includes(key)) && {
          [key]: value,
        }),
      }),
      {}
    ),
    global: "window",
  },
});
