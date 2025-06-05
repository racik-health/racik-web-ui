import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "react-use";
import { authService } from "@/services/authService";
import PageLoader from "@/components/common/PageLoader";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [token, setToken, removeToken] = useLocalStorage("authToken", null);
	const [user, setUser, removeUser] = useLocalStorage("authUser", null);
	const [isInitializing, setIsInitializing] = useState(true);
	const [isLoadingAction, setIsLoadingAction] = useState(false);

	useEffect(() => {
		(async () => {
			if (token) {
				try {
					const fetchedUser = await authService.getUserProfile();

					if (fetchedUser && fetchedUser?.data) {
						setUser(fetchedUser.data);
					}
				} catch (error) {
					console.error("Failed to fetch user data:", error);
					// await authService.userLogout();
					removeToken();
					removeUser();
				}
			} else {
				removeUser();
			}

			if (isInitializing) {
				setIsInitializing(false);
			}
		})();
	}, [token]);

	const register = useCallback(async formData => {
		setIsLoadingAction(true);

		try {
			const result = await authService.userRegister(formData);
			return result;
		} catch (error) {
			console.error("Registration failed:", error);
			throw error;
		} finally {
			setIsLoadingAction(false);
		}
	}, []);

	const login = useCallback(async formData => {
		setIsLoadingAction(true);

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
			setIsLoadingAction(false);
		}
	}, []);

	const logout = useCallback(async () => {
		setIsLoadingAction(true);

		try {
			await authService.userLogout();
		} catch (error) {
			console.warn("Logout failed:", error);
			throw error;
		} finally {
			removeToken();
			removeUser();
			setIsLoadingAction(false);
		}
	}, []);

	const loginWithToken = useCallback(async receivedToken => {
		setIsLoadingAction(true);

		try {
			setToken(receivedToken);

			const fetchedUser = await authService.getUserProfile();
			if (fetchedUser && fetchedUser?.data) {
				setUser(fetchedUser.data);
				return fetchedUser.data;
			} else {
				console.error("Invalid user profile response:", fetchedUser);
				throw new Error("Invalid user profile response");
			}
		} catch (error) {
			console.error("Login with token failed:", error);
			removeToken();
			removeUser();
			throw error;
		} finally {
			setIsLoadingAction(false);
		}
	}, []);

	const value = useMemo(
		() => ({
			register,
			login,
			logout,
			loginWithToken,
			token,
			user,
			isLoading: isLoadingAction,
			isInitializing,
			isAuthenticated: !!token && !!user,
		}),
		[register, login, logout, loginWithToken, token, user, isLoadingAction, isInitializing]
	);

	return (
		<AuthContext.Provider value={value}>
			{isLoadingAction || isInitializing ? <PageLoader /> : children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
