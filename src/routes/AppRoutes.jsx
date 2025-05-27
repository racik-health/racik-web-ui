import { Route, Routes } from "react-router-dom";
import MainLayout from "@/components/layouts/main/MainLayout";
import HomePage from "@/pages/HomePage";
import AnalysisMethodPage from "@/pages/AnalysisMethodPage";
import NotFoundPage from "@/pages/NotFoundPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import AnalysisPage from "@/pages/dashboard/AnalysisPage";
import HistoryPage from "@/pages/dashboard/HistoryPage";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="analysis-method" element={<AnalysisMethodPage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="login" element={<LoginPage />} />
			</Route>
			<Route path="/dashboard" element={<DashboardLayout />}>
				<Route index element={<div>Dashboard Page</div>} />
				<Route path="analysis" element={<AnalysisPage />} />
				<Route path="history" element={<HistoryPage />} />
				<Route path="consumption" element={<div>Consumption Page</div>} />
				<Route path="profile" element={<div>Profile Page</div>} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRoutes;
