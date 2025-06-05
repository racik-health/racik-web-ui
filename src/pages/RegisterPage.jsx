"use client";

import { useLocation } from "react-router-dom";
import SEO from "@/components/common/SEO";
import { defaultSeo, seoContent } from "@/constants/seoData";
import RegisterForm from "@/components/features/register/RegisterForm";
import RegisterHeader from "@/components/features/register/RegisterHeader";

const RegisterPage = () => {
	const { pathname } = useLocation();
	const currentPageSeo = seoContent[pathname] || defaultSeo;

	return (
		<section className="px-4 py-8 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-2xl">
				<SEO
					title={currentPageSeo.title}
					description={currentPageSeo.description}
					keywords={currentPageSeo.keywords}
					ogImage={currentPageSeo.ogImage}
					ogImageAlt={currentPageSeo.ogImageAlt}
					noIndex={currentPageSeo.noIndex}
				/>
				<RegisterHeader />
				<RegisterForm />
			</div>
		</section>
	);
};

export default RegisterPage;
