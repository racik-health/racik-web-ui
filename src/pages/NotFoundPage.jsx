import { Link } from "react-router-dom";
import { Frown, Home } from "lucide-react";
import PageSEO from "@/components/common/PageSEO";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
	return (
		<section className="flex min-h-[80vh] items-center justify-center bg-white px-4 py-14 sm:px-6 lg:px-8">
			<PageSEO />
			<div className="mx-auto max-w-lg text-center">
				<Frown className="mx-auto mb-6 h-24 w-24 text-emerald-300" strokeWidth={1.5} />
				<h1 className="mb-4 text-8xl font-extrabold text-emerald-600 md:text-[110px]">404</h1>
				<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-[34px]">Oops! Halaman Tidak Ditemukan.</h2>
				<p className="mb-10 text-lg text-gray-600">
					Maaf, halaman yang kamu cari sepertinya sudah hilang ditelan waktu atau memang tidak pernah ada.
				</p>
				<Link to="/">
					<Button
						size="lg"
						className="bg-gradient-to-r from-emerald-500 to-teal-600 text-lg hover:from-emerald-600 hover:to-teal-700"
					>
						<Home className="mr-2 h-5 w-5" />
						Kembali ke Beranda
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default NotFoundPage;
