import { Link } from "react-router-dom";
import { ArrowLeft, LogIn } from "lucide-react";

const LoginHeader = () => {
	return (
		<section className="mb-8 text-center">
			<Link
				to="/analysis-method"
				className="mb-4 inline-flex items-center text-emerald-600 hover:text-emerald-700"
			>
				<ArrowLeft className="mr-2 h-4 w-4" />
				Kembali ke Analisis
			</Link>
			<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600">
				<LogIn className="h-8 w-8 text-white" />
			</div>
			<h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Masuk ke Racik</h1>
			<p className="text-lg text-gray-600">
				Selamat datang kembali! Masuk untuk melanjutkan analisis kesehatan Anda
			</p>
		</section>
	);
};

export default LoginHeader;
