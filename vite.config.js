import { defineConfig, loadEnv} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';


const env = loadEnv('production', process.cwd());
export default defineConfig({
    server: {
        host: env.VITE_HOST || '127.0.0.1',
        port: env.VITE_PORT || 3000,
        cors: true,
        https: {
            cert: fs.readFileSync(env.VITE_SSL_CERT_PATH),
            key: fs.readFileSync(env.VITE_SSL_KEY_PATH),
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
