import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';

export default defineConfig({
    server: {
        host: 'ws2.domaindriven.net',
        port: 3001,
        cors: true,
        https: {
            cert: fs.readFileSync('/home/ws2/ssl.cert'),
            key: fs.readFileSync('/home/ws2/ssl.key'),
        },
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
