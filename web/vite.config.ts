import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { UserConfig } from "vite";

export default defineConfig({
	base: "./",
	plugins: [react()],
	server: {
		hmr: true,
	},
} as UserConfig);