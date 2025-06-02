import { LoaderCircle } from "lucide-react";

const PageLoader = ({ message = "Sedang memuat, mohon tunggu..." }) => {
	return (
		<div className="bg-background/80 fixed inset-0 z-[9999] flex flex-col items-center justify-center backdrop-blur-sm">
			<LoaderCircle className="h-12 w-12 animate-spin text-emerald-600 dark:text-emerald-400" />
			{message && (
				<p className="text-md text-foreground/80 dark:text-foreground/70 mt-4 font-medium">{message}</p>
			)}
		</div>
	);
};

export default PageLoader;
