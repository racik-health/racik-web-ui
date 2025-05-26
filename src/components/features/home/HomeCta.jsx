import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const HomeCta = () => {
	return (
		<section className="bg-gradient-to-br from-emerald-500 to-teal-600 px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-4xl text-center">
				<div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
					<Droplets className="h-8 w-8 text-white" />
				</div>
				<h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Sudahkah Anda Minum Jamu Hari Ini?</h2>
				<p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
					Jangan biarkan kesehatan Anda menunggu. Mulai perjalanan hidup sehat dengan Racik sekarang juga!
				</p>
				<div className="flex flex-col justify-center gap-4 sm:flex-row">
					<Link to="/analysis">
						<Button size="lg" className="bg-white px-8 py-3 text-lg text-emerald-600 hover:bg-gray-50">
							Mulai Analisis Sekarang
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</Link>
				</div>
				{/* <p className="mt-6 text-sm text-white/80">
					Gratis untuk 30 hari pertama • Tanpa komitmen • Batalkan kapan saja
				</p> */}
			</div>
		</section>
	);
};

export default HomeCta;
