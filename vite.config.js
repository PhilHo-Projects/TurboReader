import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
    // Keep local dev at the root, but build assets for the production subpath.
    base: command === 'serve' ? '/' : '/turboreader/',
}))
