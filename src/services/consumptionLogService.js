import apiConfig from "@/constants/apiConfig";

const getAllConsumptionLogs = async () => {
	try {
		const response = await apiConfig.get("/patient/consumption-logs");
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

const createConsumptionLog = async consumptionLogData => {
	try {
		const response = await apiConfig.post("/patient/consumption-logs", consumptionLogData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

const consumptionLogService = {
	getAllConsumptionLogs,
	createConsumptionLog,
};

export default consumptionLogService;
