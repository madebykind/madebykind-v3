import { defineConfig } from 'vite'
import fs from 'fs'
import { resolve } from 'path';
import ViteRestart from 'vite-plugin-restart'
import viteSvgIcons from 'vite-plugin-svg-icons'
import copy from 'rollup-plugin-copy'
import {fileURLToPath, URL} from 'url'

// https://vitejs.dev/config/
export default ({command}) => ({
	base: command === 'serve' ? '' : '',
	build: {
		manifest: true,
		outDir: './dist/assets/',
		rollupOptions: {
			input: {
				app: './src/main.js',
			},
			output: {
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js',
				assetFileNames: '[name].[ext]',
			}
		}
	},
	plugins: [
		copy({
			targets: [{src: 'src/img/**/*', dest: './dist/img'}],
			hook: 'writeBundle'
		}),
		ViteRestart({
			reload: [
				'./layouts/**/*.{html,twig}',
			],
			restart: [
				'./.eslintrc.js',
				'./.prettierrc.js',
				'./.stylelintrc.js',
				'./postcss.config.js',
				'./prettier.config.js',
				'./tailwind.config.js',
			],
		}),
		// viteSvgIcons({
		// 	iconDirs: [resolve(process.cwd(), 'src/icons')],
		// 	symbolId: 'icon-[name]',
		// }),
	],
	publicDir: './dist/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
	},
	server: {
		host: true,
		// https: {
		//   key: fs.readFileSync('./.cert/key.pem'),
		//   cert: fs.readFileSync('./.cert/cert.pem'),
		// },
		origin: 'http://127.0.0.1:5173',
	},
});
