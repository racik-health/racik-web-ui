import { useLocation } from "react-router-dom";
import { Bot } from "lucide-react";
import { defaultSeo, seoContent } from "@/constants/seoData";
import SEO from "@/components/common/SEO";
import AnalysisForm from "@/components/features/dashboard/patient/analysis/AnalysisForm";

const AnalysisPage = () => {
	const { pathname } = useLocation();
	const currentPageSeo = seoContent[pathname] || defaultSeo;

	return (
		<section className="space-y-6 py-4 sm:py-8 md:space-y-8 lg:ml-[16rem]">
			<SEO
				title={currentPageSeo.title}
				description={currentPageSeo.description}
				keywords={currentPageSeo.keywords}
				ogImage={currentPageSeo.ogImage}
				ogImageAlt={currentPageSeo.ogImageAlt}
				noIndex={currentPageSeo.noIndex}
			/>
			<div className="rounded-xl border border-green-200 bg-green-50 p-4 shadow sm:p-6">
				<div className="flex items-start space-x-3 sm:space-x-4">
					<div className="mt-1 flex-shrink-0">
						<Bot className="h-8 w-8 text-green-600 sm:h-10 sm:w-10" />
					</div>
					<div>
						<h2 className="text-xl font-semibold text-green-800 sm:text-2xl">Analisis Baru</h2>
						<p className="mt-1 text-sm leading-relaxed text-green-700 sm:text-base">
							Buat analisis baru dan dapatkan rekomendasi jamu yang sesuai dengan kebutuhan Anda.
						</p>
					</div>
				</div>
			</div>
			<AnalysisForm />
		</section>
	);
};

export default AnalysisPage;
