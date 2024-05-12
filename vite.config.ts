import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "component-library": resolve(__dirname, "./lib/main.ts"),
        },
    },
    plugins: [
        react(),
        dts({
            rollupTypes: false,
            include: ["./lib/**/*.ts", "./lib/**/*.tsx"],
            exclude: ["**/*.stories.tsx"],
            insertTypesEntry: true,
        }),
    ],
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
