import { teamSocialMedia } from "@/constants/homePageData";
import { Button } from "@/components/ui/button";

const HomeInnovator = () => {
	return (
		<section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Bertemu dengan Innovator</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-600">
						Kenali tim visioner di balik teknologi Racik
					</p>
				</div>
				<div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm md:p-12">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
						<div>
							<div className="mb-6 flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600">
								<span className="text-4xl font-bold text-white">P</span>
							</div>
							<h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">Tim Peracik</h3>
							<p className="mb-6 leading-relaxed text-gray-600">
								Kami adalah tim multidisiplin yang berdedikasi untuk menghadirkan inovasi dalam dunia
								jamu tradisional Indonesia.
							</p>
							<div className="flex flex-col gap-4 space-x-4 sm:flex-row sm:gap-0">
								{teamSocialMedia.map(media => (
									<a href={media.href} target="_blank" key={media.id}>
										<Button
											size="sm"
											variant="outline"
											className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
										>
											<media.icon className="mr-2 h-4 w-4" />
											{media.label}
										</Button>
									</a>
								))}
							</div>
						</div>
						<div className="space-y-6">
							<div className="rounded-2xl bg-emerald-50 p-6">
								<h4 className="mb-2 font-semibold text-emerald-800">Visi Kami</h4>
								<p className="text-emerald-700">
									Menjadikan jamu tradisional Indonesia dapat diakses oleh semua orang dengan
									teknologi modern yang mudah digunakan.
								</p>
							</div>
							<div className="rounded-2xl bg-teal-50 p-6">
								<h4 className="mb-2 font-semibold text-teal-800">Misi Kami</h4>
								<p className="text-teal-700">
									Mengintegrasikan kearifan lokal dengan teknologi AI dan IoT untuk menciptakan solusi
									kesehatan yang personal dan efektif.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeInnovator;
