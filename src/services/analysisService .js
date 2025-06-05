import apiConfig from "@/constants/apiConfig";

const getAllAnalyses = async () => {
	try {
		const response = await apiConfig.get("/patient/analyses");
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

const getAnalysisById = async analysisId => {
	try {
		const response = await apiConfig.get(`/patient/analyses/${analysisId}`);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

const createAnalysis = async analysisData => {
	try {
		const response = await apiConfig.post("/patient/analyses", analysisData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

const analysisService = {
	getAllAnalyses,
	getAnalysisById,
	createAnalysis,
};

export default analysisService;
