"use client";

import PageSEO from "@/components/common/PageSEO";
import LoginHeader from "@/components/features/login/LoginHeader";
import LoginForm from "@/components/features/login/LoginForm";

const LoginPage = () => {
	return (
		<section className="px-4 py-8 sm:px-6 lg:px-8">
			<PageSEO />
			<div className="mx-auto max-w-md">
				<LoginHeader />
				<LoginForm />
			</div>
		</section>
	);
};

export default LoginPage;
