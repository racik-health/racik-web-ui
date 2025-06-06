import { useCallback, useState } from "react";
import contactService from "@/services/contactService";

const useContact = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const performCreateContact = useCallback(async contactData => {
		setIsLoading(true);

		try {
			const result = await contactService.createContact(contactData);
			setData(result);
			return result;
		} catch (error) {
			console.error("Failed to create contact:", error);
			setError(error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	return { isLoading, data, error, performCreateContact };
};

export default useContact;
