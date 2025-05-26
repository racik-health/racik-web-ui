import { Route, Routes } from "react-router-dom";
import MainLayout from "@/components/layouts/main/MainLayout";
import HomePage from "@/pages/HomePage";
import AnalysisMethodPage from "@/pages/AnalysisMethodPage";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="analysis-method" element={<AnalysisMethodPage />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
