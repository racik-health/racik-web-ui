"use client";

import AnalysisMethodCards from "@/components/features/analysis-method/AnalysisMethodCards";
import AnalysisMethodExplain from "@/components/features/analysis-method/AnalysisMethodExplain";
import AnalysisMethodHero from "@/components/features/analysis-method/AnalysisMethodHero";

const AnalysisMethodPage = () => {
	return (
		<section className="px-4 py-14 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<AnalysisMethodHero />
				<AnalysisMethodCards />
				<AnalysisMethodExplain />
			</div>
		</section>
	);
};

export default AnalysisMethodPage;
