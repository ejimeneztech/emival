import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env': process.env, // Makes env variables available in your app
	},
});
