import { useLocation } from "react-router-dom";
import SEO from "@/components/common/SEO";
import { defaultSeo, seoContent } from "@/constants/seoData";
import HomeContact from "@/components/features/home/HomeContact";
import HomeCta from "@/components/features/home/HomeCta";
import HomeFaq from "@/components/features/home/HomeFaq";
import HomeFeatures from "@/components/features/home/HomeFeatures";
import HomeHero from "@/components/features/home/HomeHero";
import HomeInnovator from "@/components/features/home/HomeInnovator";
import HomeStats from "@/components/features/home/HomeStats";
import HomeVideo from "@/components/features/home/HomeVideo";

const HomePage = () => {
	const { pathname } = useLocation();
	const currentPageSeo = seoContent[pathname] || defaultSeo;

	return (
		<>
			<SEO
				title={currentPageSeo.title}
				description={currentPageSeo.description}
				keywords={currentPageSeo.keywords}
				ogImage={currentPageSeo.ogImage}
				ogImageAlt={currentPageSeo.ogImageAlt}
				noIndex={currentPageSeo.noIndex}
			/>
			<HomeHero />
			<HomeVideo />
			<HomeStats />
			<HomeFeatures />
			<HomeInnovator />
			<HomeCta />
			<HomeFaq />
			<HomeContact />
		</>
	);
};

export default HomePage;
