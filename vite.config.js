import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
    // Default to root-hosted builds (Vercel), but allow subpath deployments
    // like `/turboreader/` to opt in via an env var in CI.
    base: command === 'serve' ? '/' : process.env.VITE_BASE_PATH || '/',
}))
