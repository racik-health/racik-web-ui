import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FRONTEND_BASE_URL } from "@/constants/appConfig";
import { defaultSeo } from "@/constants/seoData";

const SEO = ({ title, description, keywords, ogImage, ogImageAlt, noIndex = false, author = defaultSeo.author }) => {
	const { pathname } = useLocation();
	const currentUrl = `${FRONTEND_BASE_URL}${pathname}`;

	// Generate SEO metadata
	const seoTitle = title ? `${title} | ${defaultSeo.siteName}` : defaultSeo.title;
	const seoDescription = description || defaultSeo.description;
	const seoKeywords = keywords
		? Array.isArray(keywords)
			? keywords.join(", ")
			: keywords
		: defaultSeo.keywords.join(", ");
	const seoOgImage = ogImage || defaultSeo.ogImage;
	const seoOgImageAlt = ogImageAlt || seoTitle;

	// Favicon links
	const smallFavicon = `${FRONTEND_BASE_URL}/assets/icons/racik-icon-16x16.webp`;
	const largeFavicon = `${FRONTEND_BASE_URL}/assets/icons/racik-icon-32x32.webp`;
	const appleTouchIcon = `${FRONTEND_BASE_URL}/assets/icons/apple-touch-icon.webp`;
	const manifestJson = `${FRONTEND_BASE_URL}/manifest.json`;

	// Website schema for structured data
	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: defaultSeo.siteName,
		url: FRONTEND_BASE_URL,
		description: defaultSeo.description,
		publisher: {
			"@type": "Organization",
			name: defaultSeo.siteName,
			logo: {
				"@type": "ImageObject",
				url: defaultSeo.logo,
				width: 120,
				height: 60,
			},
		},
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${FRONTEND_BASE_URL}/search?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
	};

	// WebPage schema for the current page
	const webPageSchema = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		url: currentUrl,
		name: seoTitle,
		description: seoDescription,
		isPartOf: {
			"@id": `${FRONTEND_BASE_URL}/#website`,
		},
	};

	return (
		<Helmet>
			{/* General tags */}
			<html lang="id-ID" />
			<title>{seoTitle}</title>
			<meta name="description" content={seoDescription} />
			<meta name="keywords" content={seoKeywords} />
			<meta name="author" content={author} />
			<link rel="canonical" href={currentUrl} />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={currentUrl} />
			<meta property="og:title" content={seoTitle} />
			<meta property="og:description" content={seoDescription} />
			<meta property="og:image" content={seoOgImage} />
			<meta property="og:image:alt" content={seoOgImageAlt} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:locale" content="id_ID" />
			<meta property="og:site_name" content={defaultSeo.siteName} />

			{/* Twitter Card tags */}
			<meta name="twitter:card" content="summary_large_image" />
			{/* <meta name="twitter:site" content="@usernameTwitterRacik" /> 
			{/* <meta name="twitter:creator" content="@usernameAuthor" /> */}
			<meta name="twitter:title" content={seoTitle} />
			<meta name="twitter:description" content={seoDescription} />
			<meta name="twitter:image" content={seoOgImage} />
			<meta name="twitter:image:alt" content={seoOgImageAlt} />

			{/* Favicon and App Icons */}
			<link rel="icon" type="image/png" sizes="32x32" href={largeFavicon} />
			<link rel="icon" type="image/png" sizes="16x16" href={smallFavicon} />
			<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
			<link rel="manifest" href={manifestJson} />
			<meta name="msapplication-TileColor" content="#10b981" />
			<meta name="theme-color" content="#ffffff" />

			{/* Robots meta tag */}
			{noIndex ? (
				<meta name="robots" content="noindex, nofollow" />
			) : (
				<meta
					name="robots"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
			)}

			{/* Security Headers */}
			{/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
			{/* CSP bisa sangat kompleks dan berpotensi memblokir resource jika tidak dikonfigurasi dengan benar.
                Lebih baik di-set di level server (misal Nginx/Apache) atau melalui meta tag jika benar-benar paham.
                'upgrade-insecure-requests' aman, tapi CSP yang lebih detail butuh perhatian.
            */}
			<meta name="referrer" content="strict-origin-when-cross-origin" />

			{/* Structured Data */}
			<script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
		</Helmet>
	);
};

export default SEO;
