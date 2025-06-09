/**
 * Axios instance configured for API requests.
 *
 * - Sets the base URL from API_BASE_URL.
 * - Sets default headers for JSON requests.
 * - Sets a request timeout of 10 seconds.
 * - Attaches a Bearer token from localStorage to the Authorization header if available.
 * - Removes the authentication token from localStorage on 401 Unauthorized responses.
 *
 * @module apiConfig
 * @type {import('axios').AxiosInstance}
 */
import axios from "axios";
import { API_BASE_URL } from "./appConfig";

const apiConfig = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
	// timeout: 10000,
});

apiConfig.interceptors.request.use(
	config => {
		try {
			const storedToken = localStorage.getItem("authToken");
			const token = storedToken ? JSON.parse(storedToken) : null;

			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
		} catch (error) {
			console.warn("Error parsing authToken from localStorage:", error);
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

apiConfig.interceptors.response.use(
	response => response,
	error => {
		if (error.response && error.response.status === 401) {
			localStorage.removeItem("authToken");
		}
		return Promise.reject(error);
	}
);

export default apiConfig;
