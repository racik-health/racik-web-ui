import PageSEO from "@/components/common/PageSEO";
import HomeContact from "@/components/features/home/HomeContact";
import HomeCta from "@/components/features/home/HomeCta";
import HomeFaq from "@/components/features/home/HomeFaq";
import HomeFeatures from "@/components/features/home/HomeFeatures";
import HomeHero from "@/components/features/home/HomeHero";
import HomeInnovator from "@/components/features/home/HomeInnovator";
import HomeStats from "@/components/features/home/HomeStats";
import HomeVideo from "@/components/features/home/HomeVideo";

const HomePage = () => {
	return (
		<>
			<PageSEO />
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
