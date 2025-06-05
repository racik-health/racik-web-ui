import apiConfig from "@/constants/apiConfig";

const updateUserProfile = async (userId, profileData) => {
	try {
		const response = await apiConfig.put(`/patient/profile/${userId}`, profileData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

const updateUserPassword = async passwordData => {
	try {
		const response = await apiConfig.patch(`/patient/password`, passwordData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

const userProfileService = {
	updateUserProfile,
	updateUserPassword,
};

export default userProfileService;
