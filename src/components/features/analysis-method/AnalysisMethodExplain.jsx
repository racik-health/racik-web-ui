import { Clock } from "lucide-react";

const AnalysisMethodExplain = () => {
	return (
		<div className="rounded-2xl border border-emerald-100 bg-white/60 p-8">
			<div className="text-center">
				<Clock className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
				<h3 className="mb-4 text-2xl font-semibold text-gray-900">Mengapa Harus Daftar Terlebih Dahulu?</h3>
				<div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
					<div className="text-center">
						<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
							<span className="font-bold text-emerald-600">1</span>
						</div>
						<h4 className="mb-2 font-semibold text-gray-900">Data Tersimpan Aman</h4>
						<p className="text-sm text-gray-600">
							Riwayat kesehatan dan hasil analisis tersimpan dengan enkripsi tingkat tinggi
						</p>
					</div>
					<div className="text-center">
						<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
							<span className="font-bold text-emerald-600">2</span>
						</div>
						<h4 className="mb-2 font-semibold text-gray-900">Tracking Progress</h4>
						<p className="text-sm text-gray-600">Pantau perkembangan kesehatan Anda dari waktu ke waktu</p>
					</div>
					<div className="text-center">
						<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
							<span className="font-bold text-emerald-600">3</span>
						</div>
						<h4 className="mb-2 font-semibold text-gray-900">Rekomendasi Personal</h4>
						<p className="text-sm text-gray-600">
							Dapatkan rekomendasi yang semakin akurat berdasarkan riwayat Anda
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnalysisMethodExplain;
