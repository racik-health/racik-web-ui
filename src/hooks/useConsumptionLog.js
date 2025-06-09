import { useCallback, useEffect, useState } from "react";
import consumptionLogService from "@/services/consumptionLogService";

let cachedLogs = null;

const useConsumptionLog = (options = {}) => {
	const { autoFetchOnMount = false } = options;
	const [isLoading, setIsLoading] = useState(autoFetchOnMount && !cachedLogs);
	const [logs, setLogs] = useState(cachedLogs || []);
	const [error, setError] = useState(null);

	const fetchAllConsumptionLogs = useCallback(async (force = false) => {
		if (!force && cachedLogs) {
			setLogs(cachedLogs);
			return;
		}

		setIsLoading(true);
		setError(null);

		try {
			const result = await consumptionLogService.getAllConsumptionLogs();

			if (result && result?.data && Array.isArray(result?.data)) {
				setLogs(result.data);
				cachedLogs = result.data;
			} else {
				setLogs([]);
				cachedLogs = null;
				throw new Error("Invalid data format received from API");
			}

			return result;
		} catch (error) {
			console.error("Failed to fetch consumption logs:", error);
			setError(error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	const performCreateConsumptionLog = useCallback(async consumptionLogData => {
		setIsLoading(true);

		try {
			const result = await consumptionLogService.createConsumptionLog(consumptionLogData);
			await fetchAllConsumptionLogs(true);
			return result;
		} catch (error) {
			console.error("Failed to create consumption log:", error);
			setError(error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		if (autoFetchOnMount) {
			fetchAllConsumptionLogs();
		}
	}, [autoFetchOnMount, fetchAllConsumptionLogs]);

	return { isLoading, logs, error, fetchAllConsumptionLogs, performCreateConsumptionLog };
};

export default useConsumptionLog;
