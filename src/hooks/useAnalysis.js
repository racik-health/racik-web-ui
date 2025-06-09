import { useCallback, useEffect, useState } from "react";
import analysisService from "@/services/analysisService ";

let cachedAnalyses = null;

const useAnalysis = (options = {}) => {
	const { autoFetchOnMount = false } = options;
	const [isLoading, setIsLoading] = useState(autoFetchOnMount && !cachedAnalyses);
	const [analyses, setAnalyses] = useState(cachedAnalyses || []);
	const [error, setError] = useState(null);

	const fetchAllAnalyses = useCallback(async (force = false) => {
		if (!force && cachedAnalyses) {
			setAnalyses(cachedAnalyses);
			return cachedAnalyses;
		}

		setIsLoading(true);
		setError(null);

		try {
			const result = await analysisService.getAllAnalyses();

			if (result && result?.data && Array.isArray(result?.data)) {
				setAnalyses(result.data);
				cachedAnalyses = result.data;
			} else {
				setAnalyses([]);
				cachedAnalyses = null;
				throw new Error("Invalid data format received from API");
			}

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
			await fetchAllAnalyses(true);
			return result;
		} catch (error) {
			console.error("Failed to create analysis:", error);
			setError(error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		if (autoFetchOnMount) {
			fetchAllAnalyses();
		}
	}, [autoFetchOnMount, fetchAllAnalyses]);

	return {
		isLoading,
		analyses,
		error,
		fetchAllAnalyses,
		fetchAnalysisById,
		performCreateAnalysis,
	};
};

export default useAnalysis;
