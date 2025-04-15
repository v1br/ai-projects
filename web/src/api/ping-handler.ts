import axios from "axios";

export async function pingHandler<TResponse>(
): Promise<TResponse> {
	try {
		const response = await axios.get<TResponse>(
			`${import.meta.env.VITE_BACKEND_URL}/`,
		);
		return response.data;
	} catch (error) {
		console.error("PING handler error: ", error);
		throw error;
	}
}