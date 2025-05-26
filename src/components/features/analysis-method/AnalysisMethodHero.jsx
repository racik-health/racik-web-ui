import { Shield } from "lucide-react";

const AnalysisMethodHero = () => {
	return (
		<div className="mb-12 text-center">
			<h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Mulai Analisis Kesehatan Anda</h1>
			<p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
				Lakukan analisis penyakit untuk mendapatkan rekomendasi jamu yang tepat. Daftar terlebih dahulu agar
				data dan hasil pemeriksaan Anda dapat disimpan dengan aman.
			</p>
			<div className="mb-8 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
				<Shield className="mr-2 h-4 w-4" />
				Data Anda aman dan terlindungi.
			</div>
		</div>
	);
};

export default AnalysisMethodHero;
