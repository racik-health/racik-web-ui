import apiConfig from "@/constants/apiConfig";

const dispenseHerbalMedicine = async (herbalName, analysisId) => {
	try {
		const response = await apiConfig.post("/patient/dispense", {
			herbal_medicine_name: herbalName,
			analysis_id: analysisId,
		});
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

const dispenserService = {
	dispenseHerbalMedicine,
};

export default dispenserService;
