import { useCallback, useState } from "react";
import analysisService from "@/services/analysisService ";

const useAnalysis = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const fetchAllAnalyses = useCallback(async () => {
		setIsLoading(true);

		try {
			const result = await analysisService.getAllAnalyses();
			setData(result);
			return result;
		} catch (error) {
			console.error("Failed to fetch analyses:", error);
			setError(error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	const fetchAnalysisById = useCallback(async analysisId => {
		setIsLoading(true);

		try {
			const result = await analysisService.getAnalysisById(analysisId);
			setData(result);
			return result;
		} catch (error) {
			console.error("Failed to fetch analysis by ID:", error);
			setError(error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	const performCreateAnalysis = useCallback(async analysisData => {
		setIsLoading(true);

		try {
			const result = await analysisService.createAnalysis(analysisData);
			setData(result);
			return result;
		} catch (error) {
			console.error("Failed to create analysis:", error);
			setError(error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	return {
		isLoading,
		data,
		error,
		fetchAllAnalyses,
		fetchAnalysisById,
		performCreateAnalysis,
	};
};

export default useAnalysis;
