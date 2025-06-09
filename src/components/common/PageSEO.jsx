import { useLocation } from "react-router-dom";
import SEO from "@/components/common/SEO";
import { defaultSeo, seoContent } from "@/constants/seoData";

const PageSEO = props => {
	const { pathname } = useLocation();
	const defaultPageSeo = seoContent[pathname] || defaultSeo;

	const finalSeoData = {
		title: props.title || defaultPageSeo.title,
		description: props.description || defaultPageSeo.description,
		keywords: props.keywords || defaultPageSeo.keywords,
		ogImage: props.ogImage || defaultPageSeo.ogImage,
		ogImageAlt: props.ogImageAlt || defaultPageSeo.ogImageAlt,
		noIndex: props.noIndex !== undefined ? props.noIndex : defaultPageSeo.noIndex,
	};

	return (
		<SEO
			title={finalSeoData.title}
			description={finalSeoData.description}
			keywords={finalSeoData.keywords}
			ogImage={finalSeoData.ogImage}
			ogImageAlt={finalSeoData.ogImageAlt}
			noIndex={finalSeoData.noIndex}
		/>
	);
};

export default PageSEO;
