import { useCallback, useState } from "react";
import consumptionLogService from "@/services/consumptionLogService";

const useConsumptionLog = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const fetchAllConsumptionLogs = useCallback(async () => {
		setIsLoading(true);

		try {
			const result = await consumptionLogService.getAllConsumptionLogs();
			setData(result);
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
			setData(result);
			return result;
		} catch (error) {
			console.error("Failed to create consumption log:", error);
			setError(error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	return { isLoading, data, error, fetchAllConsumptionLogs, performCreateConsumptionLog };
};

export default useConsumptionLog;
