import { Navigate, Route, Routes } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import MainLayout from "@/components/layouts/main/MainLayout";
import HomePage from "@/pages/HomePage";
import AnalysisMethodPage from "@/pages/AnalysisMethodPage";
import UnauthorizedPage from "@/pages/UnauthorizedPage";
import NotFoundPage from "@/pages/NotFoundPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "@/components/layouts/dashboard/patient/DashboardLayout";
import AnalysisPage from "@/pages/dashboard/patient/AnalysisPage";
import HistoryPage from "@/pages/dashboard/patient/HistoryPage";
import ConsumptionPage from "@/pages/dashboard/patient/ConsumptionPage";
import ProfilePage from "@/pages/dashboard/patient/ProfilePage";
import SettingsPage from "@/pages/dashboard/patient/SettingsPage";
import DashboardHomePage from "@/pages/dashboard/patient/DashboardHomePage";
import AdminLayout from "@/components/layouts/dashboard/admin/AdminLayout";
import AdminDashboardHomePage from "@/pages/dashboard/admin/AdminDashboardHomePage";

const AppRoutes = () => {
	const { isAuthenticated, user } = useAuth();

	return (
		<Routes>
			{/* Public routes */}
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="analysis-method" element={<AnalysisMethodPage />} />
				<Route
					path="register"
					element={
						isAuthenticated ? (
							<Navigate to={user?.role === "admin" ? "/admin" : "/patient"} replace />
						) : (
							<RegisterPage />
						)
					}
				/>
				<Route
					path="login"
					element={
						isAuthenticated ? (
							<Navigate to={user?.role === "admin" ? "/admin" : "/patient"} replace />
						) : (
							<LoginPage />
						)
					}
				/>
			</Route>
			{/* Route for patient dashboard */}
			<Route element={<ProtectedRoute allowedRole={"user"} />}>
				<Route path="patient" element={<DashboardLayout />}>
					<Route index element={<DashboardHomePage />} />
					<Route path="analysis" element={<AnalysisPage />} />
					<Route path="history" element={<HistoryPage />} />
					<Route path="consumption" element={<ConsumptionPage />} />
					<Route path="profile" element={<ProfilePage />} />
					<Route path="settings" element={<SettingsPage />} />
				</Route>
			</Route>
			{/* Route for admin dashboard */}
			<Route element={<ProtectedRoute allowedRole={"admin"} />}>
				<Route path="admin" element={<AdminLayout />}>
					<Route index element={<AdminDashboardHomePage />} />
				</Route>
			</Route>
			{/* Catch-all route for unauthorized access and 404 not found */}
			<Route path="unauthorized" element={<UnauthorizedPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRoutes;
