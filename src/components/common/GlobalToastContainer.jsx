import { Toaster } from "react-hot-toast";

const GlobalToastContainer = () => {
	return (
		<Toaster
			position="top-right"
			reverseOrder={false}
			gutter={8}
			containerClassName=""
			containerStyle={{}}
			toastOptions={{
				// Define default options
				className: "",
				duration: 3000,
				removeDelay: 1000,
				style: {
					background: "#fff",
					color: "#363636",
				},

				// Default options for specific types
				success: {
					duration: 3000,
					iconTheme: {
						primary: "green",
						secondary: "white",
					},
				},
				error: {
					duration: 3000,
					iconTheme: {
						primary: "red",
						secondary: "white",
					},
				},
				info: {
					duration: 3000,
					iconTheme: {
						primary: "blue",
						secondary: "white",
					},
				},
				warning: {
					duration: 3000,
					iconTheme: {
						primary: "orange",
						secondary: "white",
					},
				},
			}}
		/>
	);
};

export default GlobalToastContainer;
