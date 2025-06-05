"use client";

import { useLocation } from "react-router-dom";
import SEO from "@/components/common/SEO";
import { defaultSeo, seoContent } from "@/constants/seoData";
import AnalysisMethodCards from "@/components/features/analysis-method/AnalysisMethodCards";
import AnalysisMethodExplain from "@/components/features/analysis-method/AnalysisMethodExplain";
import AnalysisMethodHero from "@/components/features/analysis-method/AnalysisMethodHero";

const AnalysisMethodPage = () => {
	const { pathname } = useLocation();
	const currentPageSeo = seoContent[pathname] || defaultSeo;

	return (
		<section className="px-4 py-14 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<SEO
					title={currentPageSeo.title}
					description={currentPageSeo.description}
					keywords={currentPageSeo.keywords}
					ogImage={currentPageSeo.ogImage}
					ogImageAlt={currentPageSeo.ogImageAlt}
					noIndex={currentPageSeo.noIndex}
				/>
				<AnalysisMethodHero />
				<AnalysisMethodCards />
				<AnalysisMethodExplain />
			</div>
		</section>
	);
};

export default AnalysisMethodPage;
