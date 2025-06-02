"use client";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X, Droplets } from "lucide-react";
import { landingPageNavItems } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { isAuthenticated, user } = useAuth();
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);

	return (
		<nav className="fixed top-0 z-50 w-full border-b border-emerald-100 bg-white/80 backdrop-blur-md">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link to="/">
						<div className="flex items-center justify-center">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg">
								<img
									src="/assets/icons/racik-icon-16x16.webp"
									alt="Racik Logo"
									className="h-8 w-8"
									loading="lazy"
								/>
							</div>
							<span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-2xl font-bold text-transparent">
								Racik
							</span>
						</div>
					</Link>
					<div className="hidden items-center space-x-8 md:flex">
						{landingPageNavItems.map(item => (
							<HashLink
								smooth
								to={item.href}
								className="text-gray-700 transition-colors hover:text-emerald-600"
								key={item.id}
							>
								{item.label}
							</HashLink>
						))}
					</div>
					<div className="hidden items-center space-x-8 md:flex">
						{isAuthenticated ? (
							<Link to={user?.role === "admin" ? "/admin" : user?.role === "user" ? "/patient" : "/"}>
								<Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
									Dashboard
								</Button>
							</Link>
						) : (
							<Link to="/analysis-method">
								<Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
									Mulai Sekarang
								</Button>
							</Link>
						)}
					</div>
					<div className="md:hidden">
						<Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
						</Button>
					</div>
				</div>
				{isOpen && (
					<div className="border-t border-emerald-100 py-4 md:hidden">
						<div className="flex flex-col space-y-3">
							{landingPageNavItems.map(item => (
								<HashLink
									smooth
									to={item.href}
									className="text-gray-700 transition-colors hover:text-emerald-600"
									key={item.id}
								>
									{item.label}
								</HashLink>
							))}
							<div className="flex flex-col space-y-2 pt-2">
								<Link to="/analysis-method">
									<Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
										Mulai Sekarang
									</Button>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
