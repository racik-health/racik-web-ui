import { Link } from "react-router-dom";
import { ShieldAlert, Home, ArrowLeft } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import PageSEO from "@/components/common/PageSEO";
import { Button } from "@/components/ui/button";

const UnauthorizedPage = () => {
	const { user } = useAuth();

	const getBackHref = () => {
		if (window.history.length > 1) {
			return -1;
		} else if (user?.role === "user") {
			return "/patient";
		} else if (user?.role === "admin") {
			return "/admin";
		} else {
			return "/";
		}
	};

	return (
		<section className="flex min-h-[80vh] items-center justify-center bg-white px-4 py-14 sm:px-6 lg:px-8">
			<PageSEO />
			<div className="mx-auto max-w-lg text-center">
				<ShieldAlert className="mx-auto mb-6 h-24 w-24 text-red-400" strokeWidth={1.5} />
				<h1 className="mb-4 text-8xl font-extrabold text-red-500 md:text-[110px]">403</h1>
				<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-[34px]">Akses Ditolak!</h2>
				<p className="mb-10 text-lg text-gray-600">
					Maaf, kamu tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi administrator jika
					menurutmu ini adalah kesalahan.
				</p>
				<div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
					<Link to={getBackHref()}>
						<Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
							<ArrowLeft className="mr-2 h-5 w-5" />
							Kembali
						</Button>
					</Link>
					<Link to={user?.role === "admin" ? "/admin" : user?.role === "user" ? "/patient" : "/"}>
						<Button
							size="lg"
							className="bg-gradient-to-r from-emerald-500 to-teal-600 text-lg hover:from-emerald-600 hover:to-teal-700"
						>
							<Home className="mr-2 h-5 w-5" />
							{user ? "Ke Dashboard" : "Ke Beranda"}
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default UnauthorizedPage;
