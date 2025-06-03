import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "react-use";
import { authService } from "@/services/authService";
import PageLoader from "@/components/common/PageLoader";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [token, setToken, removeToken] = useLocalStorage("authToken", null);
	const [user, setUser, removeUser] = useLocalStorage("authUser", null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setIsLoading(true);

			if (token) {
				try {
					const fetchedUser = await authService.getUserProfile();
					setUser(fetchedUser?.data);
				} catch (error) {
					console.error("Failed to fetch user data:", error);
					// await authService.userLogout();
					removeToken();
					removeUser();
				}
			} else {
				removeUser();
			}

			setIsLoading(false);
		})();
	}, [token]);

	const register = useCallback(async formData => {
		setIsLoading(true);

		try {
			const result = await authService.userRegister(formData);
			return result;
		} catch (error) {
			console.error("Registration failed:", error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	const login = useCallback(async formData => {
		setIsLoading(true);

		try {
			const result = await authService.userLogin(formData);

			if (result && result.data.access_token && result.data.user) {
				setToken(result.data.access_token);
				setUser(result.data.user);
			} else {
				console.error("Invalid login response:", result);
				throw new Error("Invalid login response");
			}

			return result;
		} catch (error) {
			console.error("Login failed:", error);
			removeToken();
			removeUser();
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	const logout = useCallback(async () => {
		setIsLoading(true);

		try {
			await authService.userLogout();
		} catch (error) {
			console.warn("Logout failed:", error);
			throw error;
		} finally {
			removeToken();
			removeUser();
			setIsLoading(false);
		}
	}, []);

	const value = useMemo(
		() => ({
			register,
			login,
			logout,
			token,
			user,
			isLoading,
			isAuthenticated: !!token && !!user,
		}),
		[register, login, logout, token, user, isLoading]
	);

	return <AuthContext.Provider value={value}>{isLoading ? <PageLoader /> : children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
