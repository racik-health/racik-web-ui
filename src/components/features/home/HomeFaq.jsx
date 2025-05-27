import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HomeFaq = () => {
	const faqs = [
		{
			question: "Apa itu Racik dan bagaimana cara kerjanya?",
			answer: "Racik adalah dispenser jamu otomatis yang menggunakan teknologi AI dan IoT. Sistem kami menganalisis kondisi kesehatan Anda melalui input data dan memberikan rekomendasi jamu yang tepat, kemudian secara otomatis menyiapkan ramuan sesuai kebutuhan.",
		},
		{
			question: "Apakah jamu yang dihasilkan aman untuk dikonsumsi?",
			answer: "Ya, sangat aman. Semua bahan herbal yang kami gunakan telah melalui proses seleksi ketat dan memenuhi standar BPOM. Sistem AI kami juga mempertimbangkan alergi dan kondisi medis tertentu dalam memberikan rekomendasi.",
		},
		{
			question: "Berapa lama hasil analisis kesehatan tersedia?",
			answer: "Analisis kesehatan menggunakan AI kami dapat memberikan hasil dalam waktu kurang dari 2 menit. Setelah itu, dispenser akan langsung menyiapkan ramuan jamu yang sesuai.",
		},
		{
			question: "Apakah data kesehatan saya aman?",
			answer: "Keamanan data adalah prioritas utama kami. Semua data kesehatan dienkripsi dengan standar tingkat militer dan disimpan sesuai dengan regulasi perlindungan data yang berlaku.",
		},
		{
			question: "Berapa biaya berlangganan Racik?",
			answer: "Kami menawarkan berbagai paket berlangganan mulai dari Rp 299.000/bulan untuk paket basic. Tersedia juga trial gratis 30 hari untuk pengguna baru.",
		},
		{
			question: "Apakah bisa digunakan untuk seluruh keluarga?",
			answer: "Ya, Racik mendukung multiple user profile dalam satu perangkat. Setiap anggota keluarga dapat memiliki profil kesehatan dan rekomendasi yang personal.",
		},
	];

	return (
		<section id="faq" className="bg-white/50 px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-4xl">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
						Pertanyaan yang Sering Diajukan
					</h2>
					<p className="text-lg text-gray-600">Temukan jawaban untuk pertanyaan umum tentang Racik</p>
				</div>
				<Accordion type="single" collapsible className="space-y-4">
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							value={`item-${index}`}
							className="rounded-2xl border border-emerald-100 bg-white px-6 data-[state=open]:border-emerald-200"
						>
							<AccordionTrigger className="py-6 text-left font-semibold text-gray-900 hover:text-emerald-600">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="pb-6 leading-relaxed text-gray-600">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};

export default HomeFaq;
