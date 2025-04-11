import axios from "axios";

export async function postHandler<TInput, TResponse>(
  data: TInput,
): Promise<TResponse> {
  try {
    const response = await axios.post<TResponse>(
      `${import.meta.env.VITE_BACKEND_URL}/predict`,
      data,
    );
    return response.data;
  } catch (error) {
    console.error("POST handler error:", error);
    throw error;
  }
}
