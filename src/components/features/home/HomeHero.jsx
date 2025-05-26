import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HashLink } from "react-router-hash-link";

const HomeHero = () => {
	return (
		<section className="px-4 pt-24 pb-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="text-center">
					<div className="mb-6 inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
						<Sparkles className="mr-2 h-4 w-4" />
						Teknologi AI & IoT
					</div>
					<h1 className="mb-6 text-4xl leading-[1.3] font-bold text-gray-900 md:text-[50px]">
						Dispenser Jamu Otomatis Dengan{" "}
						<span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
							Analisis Kesehatan AI
						</span>
					</h1>
					<p className="mx-auto mb-8 max-w-3xl text-lg leading-[1.7] text-gray-600">
						Racik menghadirkan revolusi dalam dunia jamu tradisional dengan teknologi AI dan IoT. Dapatkan
						rekomendasi jamu yang tepat berdasarkan analisis kesehatan personal Anda.
					</p>
					<div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Link to="/analysis">
							<Button className="bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-5 text-base hover:from-emerald-600 hover:to-teal-700">
								Coba Sekarang
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</Link>
						<HashLink smooth to="/#features">
							<Button
								variant="outline"
								className="border-emerald-200 px-8 py-5 text-base text-emerald-700 hover:bg-emerald-50"
							>
								Pelajari Lebih Lanjut
							</Button>
						</HashLink>
					</div>
					{/* <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
						<div className="flex items-center justify-center space-x-3 rounded-xl border border-emerald-100 bg-white/60 p-4">
							<Shield className="h-6 w-6 text-emerald-600" />
							<span className="font-medium text-gray-700">100% Herbal Alami</span>
						</div>
						<div className="flex items-center justify-center space-x-3 rounded-xl border border-emerald-100 bg-white/60 p-4">
							<Zap className="h-6 w-6 text-emerald-600" />
							<span className="font-medium text-gray-700">Analisis Real-time</span>
						</div>
						<div className="flex items-center justify-center space-x-3 rounded-xl border border-emerald-100 bg-white/60 p-4">
							<Sparkles className="h-6 w-6 text-emerald-600" />
							<span className="font-medium text-gray-700">Personalisasi AI</span>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
