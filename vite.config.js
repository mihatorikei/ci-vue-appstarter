import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import WindiCSS from 'vite-plugin-windicss'
import Pages from 'vite-plugin-pages'

export default defineConfig(() => {

	const env = loadEnv(null, process.cwd())

	return {

		plugins: [
			vue(),
			WindiCSS(),
			VitePWA(),
			Pages({
				dirs: 'resources/pages',
			})
		],

		build: {
			emptyOutDir: false,
			outDir: './public/',
			assetsDir: env.VITE_BUILD_DIR,
			manifest: true,
			rollupOptions: {
				input: `./${env.VITE_RESOURCES_DIR}/${env.VITE_ENTRY_FILE}`
			}
		},

		server: {
			origin: env.VITE_ORIGIN,
			port: env.VITE_PORT,
			strictPort: true,
			hmr: true
		},

		resolve: {
			alias: {
				'@': path.resolve(__dirname, `./${env.VITE_RESOURCES_DIR}`)
			}
		}

	}
})
