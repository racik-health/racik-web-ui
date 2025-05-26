"use client";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);

	return (
		<nav className="fixed top-0 z-50 w-full border-b border-emerald-100 bg-white/80 backdrop-blur-md">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link to="/">
						<div className="flex items-center space-x-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
								<Droplets className="h-5 w-5 text-white" />
							</div>
							<span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-xl font-bold text-transparent">
								Racik
							</span>
						</div>
					</Link>
					<div className="hidden items-center space-x-8 md:flex">
						<HashLink
							smooth
							to="/#features"
							className="text-gray-700 transition-colors hover:text-emerald-600"
						>
							Fitur
						</HashLink>
						<HashLink
							smooth
							to="/#about"
							className="text-gray-700 transition-colors hover:text-emerald-600"
						>
							Tentang
						</HashLink>
						<HashLink smooth to="/#faq" className="text-gray-700 transition-colors hover:text-emerald-600">
							FAQ
						</HashLink>
						<HashLink
							smooth
							to="/#contact"
							className="text-gray-700 transition-colors hover:text-emerald-600"
						>
							Kontak
						</HashLink>
					</div>
					<div className="hidden items-center space-x-8 md:flex">
						<Link to="/analysis">
							<Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
								Mulai Sekarang
							</Button>
						</Link>
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
							<HashLink
								smooth
								to="/#features"
								className="text-gray-700 transition-colors hover:text-emerald-600"
							>
								Fitur
							</HashLink>
							<HashLink
								smooth
								to="/#about"
								className="text-gray-700 transition-colors hover:text-emerald-600"
							>
								Tentang
							</HashLink>
							<HashLink
								smooth
								to="/#faq"
								className="text-gray-700 transition-colors hover:text-emerald-600"
							>
								FAQ
							</HashLink>
							<HashLink
								smooth
								to="/#contact"
								className="text-gray-700 transition-colors hover:text-emerald-600"
							>
								Kontak
							</HashLink>
							<div className="flex flex-col space-y-2 pt-2">
								<Link to="/analysis">
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
