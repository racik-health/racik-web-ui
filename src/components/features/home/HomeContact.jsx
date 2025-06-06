import { useState } from "react";
import useContact from "@/hooks/useContact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import toast from "react-hot-toast";

const initialFormData = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

const HomeContact = () => {
	const [formData, setFormData] = useState(initialFormData);
	const { isLoading, performCreateContact } = useContact();

	const handleChangeInput = e => {
		const { name, value } = e.target;
		setFormData(form => ({ ...form, [name]: value }));
	};

	const handleFormSubmit = async e => {
		e.preventDefault();

		try {
			await performCreateContact(formData);
			setFormData(initialFormData);
			toast.success("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");
		} catch (error) {
			toast.error(error.message.split("(")[0] || "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
		}
	};

	return (
		<section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Hubungi Kami</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-600">
						Ada pertanyaan atau butuh bantuan? Tim kami siap membantu Anda
					</p>
				</div>
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
					<div>
						<h3 className="mb-6 text-2xl font-semibold text-gray-900">Informasi Kontak</h3>
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100">
									<MapPin className="h-6 w-6 text-emerald-600" />
								</div>
								<div>
									<h4 className="mb-1 font-semibold text-gray-900">Alamat</h4>
									<p className="text-gray-600">
										Gg. Kapuas No.47 Jetis, Wedomartani
										<br />
										Kec. Ngemplak, Kabupaten Sleman
										<br />
										Daerah Istimewa Yogyakarta
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100">
									<Phone className="h-6 w-6 text-emerald-600" />
								</div>
								<div>
									<h4 className="mb-1 font-semibold text-gray-900">Telepon</h4>
									<p className="text-gray-600">+62 21 1234 5678</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100">
									<Mail className="h-6 w-6 text-emerald-600" />
								</div>
								<div>
									<h4 className="mb-1 font-semibold text-gray-900">Email</h4>
									<p className="text-gray-600">hello@racik.my.id</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100">
									<Clock className="h-6 w-6 text-emerald-600" />
								</div>
								<div>
									<h4 className="mb-1 font-semibold text-gray-900">Jam Operasional</h4>
									<p className="text-gray-600">
										Senin - Jumat: 09:00 - 18:00
										<br />
										Sabtu: 09:00 - 15:00
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
						<h3 className="mb-6 text-2xl font-semibold text-gray-900">Kirim Pesan</h3>
						<form className="space-y-6" method="POST" onSubmit={handleFormSubmit}>
							<div>
								<label className="mb-2 block text-sm font-medium text-gray-700">Nama Lengkap</label>
								<Input
									type="text"
									name="name"
									placeholder="Asep Bensin"
									className="border-emerald-200 focus:border-emerald-500"
									value={formData.name}
									onChange={handleChangeInput}
									required
								/>
							</div>
							<div>
								<label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
								<Input
									type="email"
									name="email"
									placeholder="asepbensin@gmail.com"
									className="border-emerald-200 focus:border-emerald-500"
									value={formData.email}
									onChange={handleChangeInput}
									required
								/>
							</div>
							<div>
								<label className="mb-2 block text-sm font-medium text-gray-700">Subjek</label>
								<Input
									type="text"
									name="subject"
									placeholder="Pertanyaan tentang Racik"
									className="border-emerald-200 focus:border-emerald-500"
									value={formData.subject}
									onChange={handleChangeInput}
									required
								/>
							</div>
							<div>
								<label className="mb-2 block text-sm font-medium text-gray-700">Pesan</label>
								<Textarea
									name="message"
									placeholder="Tulis pesan Anda di sini..."
									rows={4}
									className="min-h-[100px] border-emerald-200 focus:border-emerald-500"
									value={formData.message}
									onChange={handleChangeInput}
									required
								/>
							</div>
							<Button
								className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
								type="submit"
								disabled={isLoading}
								aria-label="Kirim Pesan"
							>
								{isLoading ? "Memproses..." : "Kirim Pesan"}
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeContact;
