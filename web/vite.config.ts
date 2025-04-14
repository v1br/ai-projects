import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { UserConfig } from "vite";

export default defineConfig({
	base: "./",
	plugins: [react(), tailwindcss()],
	server: {
		hmr: true,
	},
} as UserConfig);