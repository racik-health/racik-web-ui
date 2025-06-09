import apiConfig from "@/constants/apiConfig";

const createContact = async contactData => {
	try {
		const response = await apiConfig.post("/contact", contactData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

const contactService = {
	createContact,
};

export default contactService;
