import { Route, Routes } from "react-router-dom";
import MainLayout from "@/components/layouts/main/MainLayout";
import HomePage from "@/pages/HomePage";
import AnalysisMethodPage from "@/pages/AnalysisMethodPage";
import NotFoundPage from "@/pages/NotFoundPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import DashboardLayout from "@/components/layouts/dashboard/patient/DashboardLayout";
import AnalysisPage from "@/pages/dashboard/patient/AnalysisPage";
import HistoryPage from "@/pages/dashboard/patient/HistoryPage";
import ConsumptionPage from "@/pages/dashboard/patient/ConsumptionPage";
import ProfilePage from "@/pages/dashboard/patient/ProfilePage";
import SettingsPage from "@/pages/dashboard/patient/SettingsPage";
import DashboardHomePage from "@/pages/dashboard/patient/DashboardHomePage";
import AdminLayout from "@/components/layouts/dashboard/admin/AdminLayout";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="analysis-method" element={<AnalysisMethodPage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="login" element={<LoginPage />} />
			</Route>
			<Route path="patient" element={<DashboardLayout />}>
				<Route index element={<DashboardHomePage />} />
				<Route path="analysis" element={<AnalysisPage />} />
				<Route path="history" element={<HistoryPage />} />
				<Route path="consumption" element={<ConsumptionPage />} />
				<Route path="profile" element={<ProfilePage />} />
				<Route path="settings" element={<SettingsPage />} />
			</Route>
			<Route path="admin" element={<AdminLayout />}>
				<Route index element={<h1>Admin Dashboard Home</h1>} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRoutes;
