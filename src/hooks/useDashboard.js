import { useCallback, useEffect, useState } from "react";
import dashboardService from "@/services/dashboardService";

let cachedData = null;

const useDashboard = (options = {}) => {
	const { autoFetchOnMount = false } = options;
	const [isLoading, setIsLoading] = useState(autoFetchOnMount && !cachedData);
	const [data, setData] = useState(cachedData || null);
	const [error, setError] = useState(null);

	const fetchDashboardData = useCallback(async (force = false) => {
		if (!force && cachedData) {
			setData(cachedData);
			return cachedData;
		}

		setIsLoading(true);
		setError(null);

		try {
			const result = await dashboardService.getDashboardData();

			if (result && result?.data) {
				setData(result.data);
				cachedData = result.data;
			} else {
				console.error("Invalid data format received from API:", result);
				setData(null);
				cachedData = null;
				throw new Error("Invalid data format received from API");
			}

			return result;
		} catch (error) {
			console.error("Failed to fetch dashboard data:", error);
			setError(error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		if (autoFetchOnMount) {
			fetchDashboardData();
		}
	}, [autoFetchOnMount, fetchDashboardData]);

	return { isLoading, data, error, fetchDashboardData };
};

export default useDashboard;
