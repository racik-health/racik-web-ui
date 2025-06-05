import {
	Award,
	Brain,
	Clock,
	Droplets,
	Github,
	Heart,
	Linkedin,
	Mail,
	Shield,
	Smartphone,
	Sparkles,
	Twitter,
	Users,
	Zap,
} from "lucide-react";

const homeProductIntroduction = [
	{ id: 1, description: "100% Herbal Alami", iconComponent: Shield },
	{ id: 2, description: "Analisis Real-time", iconComponent: Zap },
	{ id: 3, description: "Personalisasi AI", iconComponent: Sparkles },
];

const homeStats = [
	{
		id: 1,
		icon: Users,
		value: "500+",
		label: "Pengguna Aktif",
		description: "Telah mempercayai Racik",
	},
	{
		id: 2,
		icon: Heart,
		value: "96%",
		label: "Tingkat Kepuasan",
		description: "Pengguna merasa puas",
	},
	{
		id: 3,
		icon: Award,
		value: "10+",
		label: "Resep Jamu",
		description: "Tersedia dalam database",
	},
	{
		id: 4,
		icon: Clock,
		value: "24/7",
		label: "Layanan",
		description: "Siap melayani kapan saja",
	},
];

const homeFeatures = [
	{
		icon: Brain,
		title: "Monitoring Real-Time",
		description: "Pantau konsumsi jamu dan kondisi kesehatan Anda secara real-time melalui aplikasi yang intuitif.",
	},
	{
		icon: Smartphone,
		title: "Laporan Konsumsi",
		description: "Dapatkan laporan detail tentang pola konsumsi jamu dan efeknya terhadap kesehatan Anda.",
	},
	{
		icon: Droplets,
		title: "Rekomendasi Jamu",
		description: "Terima rekomendasi jamu yang dipersonalisasi berdasarkan hasil analisis kesehatan Anda.",
	},
	{
		icon: Clock,
		title: "Analisis AI",
		description:
			"Analisis data kesehatan Anda dengan teknologi AI yang canggih untuk memberikan rekomendasi yang lebih akurat.",
	},
	{
		icon: Shield,
		title: "Keamanan Data",
		description: "Data kesehatan Anda dilindungi dengan enkripsi tingkat tinggi untuk menjaga privasi.",
	},
];

const teamSocialMedia = [
	{ id: 1, href: "#", label: "Mail", icon: Mail },
	{ id: 2, href: "#", label: "Linkedin", icon: Linkedin },
	{ id: 3, href: "https://github.com/racik-health", label: "Github", icon: Github },
	{ id: 4, href: "#", label: "Twitter", icon: Twitter },
];

const homeFaqs = [
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
];

export { homeProductIntroduction, homeStats, homeFeatures, teamSocialMedia, homeFaqs };
