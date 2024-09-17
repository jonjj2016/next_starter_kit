import { URL, fileURLToPath } from "node:url"
import env from "vite-plugin-env-compatible"
import { defineConfig } from "vitest/config"

export default defineConfig({
    test: {
        coverage: {
            provider: "v8",
            reportsDirectory: "./tests/coverage",
        },
    },
    plugins: [env()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./", import.meta.url)),
        },
    },
})
