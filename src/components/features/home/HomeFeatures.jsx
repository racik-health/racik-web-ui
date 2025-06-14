import { homeFeatures } from "@/constants/homePageData";

const HomeFeatures = () => {
	return (
		<section id="features" className="bg-white/50 px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Mengapa Memilih Racik?</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-600">
						Fitur-fitur unggulan yang membuat Racik menjadi pilihan terbaik untuk kesehatan Anda
					</p>
				</div>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{homeFeatures.map((feature, index) => (
						<div
							key={index}
							className="group rounded-2xl border border-emerald-100 bg-white p-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-lg"
						>
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 transition-transform duration-300 group-hover:scale-110">
								<feature.icon className="h-6 w-6 text-white" />
							</div>
							<h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
							<p className="leading-relaxed text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeFeatures;
