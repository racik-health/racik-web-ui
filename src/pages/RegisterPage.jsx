"use client";

import RegisterForm from "@/components/features/register/RegisterForm";
import RegisterHeader from "@/components/features/register/RegisterHeader";

const RegisterPage = () => {
	return (
		<section className="px-4 py-8 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-2xl">
				<RegisterHeader />
				<RegisterForm />
			</div>
		</section>
	);
};

export default RegisterPage;
