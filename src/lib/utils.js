import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
	return twMerge(clsx(inputs));
}

const formatISODateToYMD = isoDateTimeString => {
	if (typeof isoDateTimeString !== "string" || isoDateTimeString.length <= 10) {
		return null;
	}
	return isoDateTimeString.slice(0, 10);
};

export { cn, formatISODateToYMD };
