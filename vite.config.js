import { defineConfig } from 'vite'

import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        svelte(),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'inline',
            workbox: {
                globPatterns: ['**/*.{js,css,svg,webp}'],
                cleanupOutdatedCaches: true
            },
            manifest: {
                "name": "Notcoin",
                "short_name": "Notcoin",
                "description": "Notcoin - tap and earn",
                "start_url": "./",
                "icons": [
                    {
                        "src": "/icons/android-chrome-192x192.png?v=1",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/android-chrome-512x512.png?v=1",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ],
                "theme_color": "#000000",
                "background_color": "#000000",
                "display": "standalone"
            }
        })
    ],
    build: {
        minify: 'terser',
        terserOptions: {
            ecma: 5,
            compress: {
                unsafe: true,
                drop_console: true,
                booleans_as_integers: true
            },
            format: {
                ascii_only: true
            }
        }
    }
})
