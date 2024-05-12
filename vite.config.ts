import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "component-library": resolve(__dirname, "./lib/main.ts"),
        },
    },
    plugins: [react()],
    build: {
        lib: {
            // input and output
            entry: resolve(__dirname, "lib/main.ts"),
            name: "Component Library",
            fileName: "component-library",
        },
        // Vite bundler
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "react/jsx-runtime",
                },
            },
        },
    },
})
