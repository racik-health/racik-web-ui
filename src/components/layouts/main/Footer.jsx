import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					<div className="col-span-1 md:col-span-2">
						<div className="mb-4 flex items-center space-x-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg">
								<img
									src="/assets/icons/racik-icon-16x16.webp"
									alt="Racik Logo"
									className="h-8 w-8"
									loading="lazy"
								/>
							</div>
							<span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-2xl font-bold">
								Racik
							</span>
						</div>
						<p className="mb-6 max-w-md text-gray-400">
							Revolusi jamu tradisional dengan teknologi AI dan IoT. Kesehatan personal yang cerdas dan
							mudah diakses.
						</p>
					</div>
					<div>
						<h3 className="mb-4 font-semibold">Fitur Unggulan</h3>
						<ul className="space-y-2 text-gray-400">
							<li>
								<HashLink to="/#features" className="transition-colors hover:text-emerald-400">
									Fitur
								</HashLink>
							</li>
							<li>
								<HashLink to="/#about" className="transition-colors hover:text-emerald-400">
									Tentang
								</HashLink>
							</li>
							<li>
								<HashLink to="/#faq" className="transition-colors hover:text-emerald-400">
									FAQ
								</HashLink>
							</li>
							<li>
								<HashLink to="/#contact" className="transition-colors hover:text-emerald-400">
									Kontak
								</HashLink>
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
					<p className="text-sm text-gray-400">© 2025 Racik V0.2. Dibuat dengan 💚 oleh Tim Peracik</p>
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
