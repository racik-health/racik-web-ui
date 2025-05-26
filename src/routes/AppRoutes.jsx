import { Route, Routes } from "react-router-dom";
import MainLayout from "@/components/layouts/main/MainLayout";
import HomePage from "@/pages/HomePage";
import AnalysisMethodPage from "@/pages/AnalysisMethodPage";
import NotFoundPage from "@/pages/NotFoundPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="analysis-method" element={<AnalysisMethodPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRoutes;
