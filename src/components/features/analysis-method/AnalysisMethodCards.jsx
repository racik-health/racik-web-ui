import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnalysisMethodCards = () => {
	return (
		<div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
			<Card className="group flex flex-col border-emerald-100 transition-all duration-300 hover:border-emerald-200 hover:shadow-xl">
				<CardHeader className="pb-6 text-center">
					<div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 transition-transform duration-300 group-hover:scale-110">
						<Zap className="h-10 w-10 text-white" />
					</div>
					<CardTitle className="text-2xl font-bold text-gray-900">Coba Analisis Langsung</CardTitle>
					<CardDescription className="text-lg text-gray-600">
						Langsung rasakan kecanggihan AI kami tanpa perlu masuk atau mendaftar.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-1 flex-col justify-between space-y-4">
					<div className="space-y-3">
						<div className="flex items-center space-x-3">
							{" "}
							<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></div>{" "}
							<span className="text-gray-700">Akses instan, tidak perlu registrasi.</span>
						</div>
						<div className="flex items-center space-x-3">
							<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></div>
							<span className="text-gray-700">Analisis gejala lengkap dengan AI.</span>
						</div>
						<div className="flex items-center space-x-3">
							<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></div>{" "}
							<span className="text-gray-700">
								<span className="font-semibold">Minus:</span> Hasil analisis{" "}
								<span className="font-semibold">tidak disimpan.</span>
							</span>
						</div>
					</div>
					<div className="pt-4">
						<Link to="/analysis-guest">
							<Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 py-6 text-lg hover:from-emerald-600 hover:to-teal-700">
								Mulai Analisis Cepat
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</Link>
					</div>
				</CardContent>
			</Card>
			<Card className="group flex flex-col border-teal-100 transition-all duration-300 hover:border-teal-200 hover:shadow-xl">
				<CardHeader className="pb-6 text-center">
					<div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 transition-transform duration-300 group-hover:scale-110">
						<Save className="h-10 w-10 text-white" />
					</div>
					<CardTitle className="text-2xl font-bold text-gray-900">Daftar & Simpan Hasil</CardTitle>
					<CardDescription className="text-lg text-gray-600">
						Buat akun gratis untuk menyimpan riwayat dan memantau kesehatan Anda.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-1 flex-col justify-between space-y-4">
					<div className="space-y-3">
						<div className="flex items-center space-x-3">
							<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500"></div>
							<span className="text-gray-700">Simpan riwayat analisis Anda dengan aman.</span>
						</div>
						<div className="flex items-center space-x-3">
							<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500"></div>
							<span className="text-gray-700">Pantau perkembangan kesehatan Anda.</span>
						</div>
						<div className="flex items-center space-x-3">
							<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500"></div>
							<span className="text-gray-700">Dapatkan rekomendasi yang lebih akurat seiring waktu.</span>
						</div>
					</div>
					<div className="pt-4">
						<Link to="/register">
							<Button
								variant="outline"
								className="w-full border-teal-600 py-6 text-lg text-teal-700 hover:border-teal-700 hover:bg-teal-50"
							>
								Daftar & Mulai Analisis
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default AnalysisMethodCards;
