import { Link } from "react-router-dom";
import { Droplets, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					<div className="col-span-1 md:col-span-2">
						<div className="mb-4 flex items-center space-x-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
								<Droplets className="h-5 w-5 text-white" />
							</div>
							<span className="text-xl font-bold">Racik</span>
						</div>
						<p className="mb-6 max-w-md text-gray-400">
							Revolusi jamu tradisional dengan teknologi AI dan IoT. Kesehatan personal yang cerdas dan
							mudah diakses.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-emerald-600"
							>
								<Facebook className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-emerald-600"
							>
								<Twitter className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-emerald-600"
							>
								<Instagram className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-emerald-600"
							>
								<Linkedin className="h-5 w-5" />
							</a>
						</div>
					</div>
					<div>
						<h3 className="mb-4 font-semibold">Produk</h3>
						<ul className="space-y-2 text-gray-400">
							<li>
								<Link href="#" className="transition-colors hover:text-emerald-400">
									Fitur
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-emerald-400">
									Harga
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-emerald-400">
									Demo
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-emerald-400">
									API
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 font-semibold">Perusahaan</h3>
						<ul className="space-y-2 text-gray-400">
							<li>
								<Link href="#" className="transition-colors hover:text-emerald-400">
									Tentang Kami
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-emerald-400">
									Karir
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-emerald-400">
									Blog
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-emerald-400">
									Kontak
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
					<p className="text-sm text-gray-400">© 2025 Racik V0. Dibuat dengan ❤️ oleh Tim Peracik</p>
					<div className="mt-4 flex space-x-6 md:mt-0">
						<Link href="#" className="text-sm text-gray-400 transition-colors hover:text-emerald-400">
							Kebijakan Privasi
						</Link>
						<Link href="#" className="text-sm text-gray-400 transition-colors hover:text-emerald-400">
							Syarat Layanan
						</Link>
						<Link href="#" className="text-sm text-gray-400 transition-colors hover:text-emerald-400">
							Cookie Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
