import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import GlobalToastContainer from "./components/common/GlobalToastContainer";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<Router>
				<AppRoutes />
				<GlobalToastContainer />
			</Router>
		</AuthProvider>
	</StrictMode>
);
