import { useCallback, useState } from "react";
import dashboardService from "@/services/dashboardService";

const useDashboard = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const fetchDashboardData = useCallback(async () => {
		setIsLoading(true);

		try {
			const result = await dashboardService.getDashboardData();
			setData(result);
			return result;
		} catch (error) {
			console.error("Failed to fetch dashboard data:", error);
			setError(error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	return { isLoading, data, error, fetchDashboardData };
};

export default useDashboard;
