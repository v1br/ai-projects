import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
	{
		ignores: ["dist"],
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: {
			globals: globals.browser,
		},
		plugins: { js },
		rules: {
			...js.configs.recommended.rules,
			"indent": ["error", "tab", { "SwitchCase": 1 }], // Use tabs for indentation
			"quotes": ["error", "double"], // Enforce double quotes
			"semi": ["error", "always"], // Always require semicolons
			"no-tabs": "off", // Allow tabs for indentation
			"react/react-in-jsx-scope": "off", // Ignore default react import
		},
	},
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: tsParser,
		},
		plugins: { "@typescript-eslint": tseslint },
		rules: {
			...tseslint.configs.recommended.rules,
			"react/react-in-jsx-scope": "off",
		} 
	},
	{
		files: ["**/*.{jsx,tsx}"],
		settings: {
			react: {
				version: "detect",
			},
		},
		plugins: { react: pluginReact },
		rules: {
			...pluginReact.configs.flat.recommended.rules,
			"react/react-in-jsx-scope": "off",
		}
	},
]);
