import axios from "axios";

export async function pingHandler(): Promise<void> {
	try {
		await axios.get(`${import.meta.env.VITE_BACKEND_URL}/`);
		console.debug("Backend pinged successfully!");
	} catch (err) {
		console.warn("Backend ping failed: ", err);
	}
}
