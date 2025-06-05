"use client";

import { useLocation } from "react-router-dom";
import SEO from "@/components/common/SEO";
import { defaultSeo, seoContent } from "@/constants/seoData";
import LoginHeader from "@/components/features/login/LoginHeader";
import LoginForm from "@/components/features/login/LoginForm";

const LoginPage = () => {
	const { pathname } = useLocation();
	const currentPageSeo = seoContent[pathname] || defaultSeo;

	return (
		<section className="px-4 py-8 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-md">
				<SEO
					title={currentPageSeo.title}
					description={currentPageSeo.description}
					keywords={currentPageSeo.keywords}
					ogImage={currentPageSeo.ogImage}
					ogImageAlt={currentPageSeo.ogImageAlt}
					noIndex={currentPageSeo.noIndex}
				/>
				<LoginHeader />
				<LoginForm />
			</div>
		</section>
	);
};

export default LoginPage;
