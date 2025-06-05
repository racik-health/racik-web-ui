import apiConfig from "@/constants/apiConfig";

const getDashboardData = async () => {
	try {
		const response = await apiConfig.get("/patient/dashboard");
		return response.data;
	} catch (error) {
		throw error?.response?.data || error;
	}
};

const dashboardService = {
	getDashboardData,
};

export default dashboardService;
