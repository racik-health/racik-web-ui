import { useCallback, useState } from "react";
import userProfileService from "@/services/userProfileService";

const useUserProfile = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const updateProfile = useCallback(async (userId, profileData) => {
		setIsLoading(true);

		try {
			const result = await userProfileService.updateUserProfile(userId, profileData);
			setData(result);
			return result;
		} catch (error) {
			console.error("Failed to update profile:", error);
			setError(error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	const updatePassword = useCallback(async passwordData => {
		setIsLoading(true);

		try {
			const result = await userProfileService.updateUserPassword(passwordData);
			setData(result);
			return result;
		} catch (error) {
			console.error("Failed to update password:", error);
			setError(error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	return {
		isLoading,
		data,
		error,
		updateProfile,
		updatePassword,
	};
};

export default useUserProfile;
