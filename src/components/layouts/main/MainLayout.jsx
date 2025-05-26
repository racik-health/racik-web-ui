import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
	const { pathname } = useLocation();

	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
			<Navbar />
			<main className={`${pathname !== "/" ? "pt-24 pb-16" : "pt-16 pb-12"}`}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
