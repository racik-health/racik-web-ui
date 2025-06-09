import { Play } from "lucide-react";
import { homeProductIntroduction } from "@/constants/homePageData";

const HomeVideo = () => {
	return (
		<section className="-mt-12 px-4 pb-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				{/* <div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Apa itu Racik?</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-600">
						Tonton video penjelasan lengkap tentang bagaimana Racik bekerja dan mengapa ini adalah masa
						depan jamu tradisional
					</p>
				</div> */}
				<div className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100">
					{/* <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
							<Play className="ml-1 h-8 w-8 text-emerald-600" />
						</div>
					</div> */}
					{/* <div className="absolute bottom-6 left-6 text-white">
						<h3 className="mb-2 text-xl font-semibold">Pengenalan Racik</h3>
						<p className="text-white/90">Durasi: 3:45</p>
					</div> */}
					<iframe
						className="absolute inset-0 h-full w-full border-none"
						src="https://www.youtube.com/embed/Gh7H4qYDLac?si=_tS75qKIswomuG19&rel=0&modestbranding=1&autohide=1&showinfo=0"
						title="Pengenalan Racik"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						referrerPolicy="strict-origin-when-cross-origin"
						tabIndex={0}
						aria-label="Video pengenalan Racik"
						loading="lazy"
					></iframe>
				</div>
				<div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 pt-6 md:grid-cols-3">
					{homeProductIntroduction.map(product => (
						<div
							className="flex items-center justify-center space-x-3 rounded-xl border border-emerald-100 bg-white/60 p-3"
							key={product.id}
						>
							<product.iconComponent className="h-5 w-5 text-emerald-600" />
							<span className="font-medium text-gray-700">{product.description}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeVideo;
