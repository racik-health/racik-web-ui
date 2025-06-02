import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<Router>
				<AppRoutes />
			</Router>
		</AuthProvider>
	</StrictMode>
);
