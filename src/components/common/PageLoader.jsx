const PageLoader = ({ message = "Sedang memuat, mohon tunggu..." }) => {
	return (
		<div className="bg-background/80 fixed inset-0 z-[9999] flex flex-col items-center justify-center backdrop-blur-sm">
			<div className="flex space-x-2">
				<div className="h-3 w-3 animate-bounce rounded-full bg-emerald-500 [animation-delay:-0.3s]"></div>
				<div className="h-3 w-3 animate-bounce rounded-full bg-emerald-500 [animation-delay:-0.15s]"></div>
				<div className="h-3 w-3 animate-bounce rounded-full bg-emerald-500"></div>
			</div>
			{message && (
				<p className="text-md text-foreground/80 dark:text-foreground/70 mt-6 font-medium">{message}</p>
			)}
		</div>
	);
};

export default PageLoader;
