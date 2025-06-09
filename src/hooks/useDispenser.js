import { useCallback, useEffect, useState } from "react";
import { off, onValue, ref } from "firebase/database";
import dispenserService from "@/services/dispenserService";
import { database } from "@/lib/firebase";
import { DISPENSE_STATUS } from "@/constants/dispenserData";

const useDispenser = dispenserId => {
	const [status, setStatus] = useState(DISPENSE_STATUS.IDLE);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!dispenserId) return;

		const commandRef = ref(database, `dispenser_commands/${dispenserId}`);
		const unsubscribe = onValue(commandRef, snapshot => {
			const commandData = snapshot.val();

			if (commandData && commandData.status) {
				setStatus(commandData.status);

				if (commandData.status === DISPENSE_STATUS.ERROR) {
					setError(commandData.error_message || "Dispenser reported an error.");
				} else {
					setError(null);
				}
			}
		});

		return () => off(commandRef, "value", unsubscribe);
	}, [dispenserId]);

	const performDispense = useCallback(async (herbalName, analysisId) => {
		setStatus(DISPENSE_STATUS.SENDING);
		setError(null);

		try {
			const result = await dispenserService.dispenseHerbalMedicine(herbalName, analysisId);
			setData(result);
			return result;
		} catch (error) {
			console.error("Failed to create herbal medicine:", error);
			setStatus(DISPENSE_STATUS.ERROR);
			setError(error);
			throw error;
		}
	}, []);

	return { status, data, error, DISPENSE_STATUS, performDispense };
};

export default useDispenser;
