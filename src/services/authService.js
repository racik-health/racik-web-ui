import apiConfig from "@/constants/apiConfig";

const userRegister = async formData => {
	try {
		const response = await apiConfig.post("/register", formData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

const userLogin = async formData => {
	try {
		const response = await apiConfig.post("/login", formData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

const userLogout = async () => {
	try {
		const response = await apiConfig.post("/logout");
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

const getUserProfile = async () => {
	try {
		const response = await apiConfig.get("/user");
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

export const authService = { userRegister, userLogin, userLogout, getUserProfile };
