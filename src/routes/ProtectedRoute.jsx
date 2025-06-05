import { Navigate, Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const ProtectedRoute = ({ allowedRole }) => {
	const { isAuthenticated, user } = useAuth();

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	if (allowedRole && user && user?.role !== allowedRole) {
		return <Navigate to="/unauthorized" replace />;
	}

	if (allowedRole && (!user || !user?.role)) {
		return <Navigate to="/unauthorized" replace />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
