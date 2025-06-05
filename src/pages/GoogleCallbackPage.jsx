import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { defaultSeo, seoContent } from "@/constants/seoData";
import useAuth from "@/hooks/useAuth";
import SEO from "@/components/common/SEO";
import PageLoader from "@/components/common/PageLoader";

const GoogleCallbackPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { loginWithToken } = useAuth();
	const currentPageSeo = seoContent[location.pathname] || defaultSeo;

	useEffect(() => {
		(async () => {
			const searchParams = new URLSearchParams(location.search);
			const token = searchParams.get("access_token");

			if (token) {
				const user = await loginWithToken(token);

				if (user) {
					user?.role === "admin"
						? navigate("/admin", { replace: true })
						: navigate("/patient", { replace: true });
				}
			} else {
				console.error("No access token found in the URL.");
				navigate("/login", { replace: true });
			}
		})();
	}, [location, navigate, loginWithToken]);

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
			<PageLoader message="Memproses masuk dengan Google..." />
		</>
	);
};

export default GoogleCallbackPage;
