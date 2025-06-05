import { FRONTEND_BASE_URL } from "./appConfig";

const defaultSeo = {
	siteName: "Racik",
	title: "Racik - Rekomendasi Jamu Tradisional Berbasis AI",
	description:
		"Temukan jamu tradisional Indonesia yang tepat untuk keluhan kesehatan Anda. Analisis gejala cerdas dan rekomendasi jamu herbal alami dari Racik.",
	keywords: [
		"racik",
		"jamu",
		"herbal",
		"tradisional",
		"indonesia",
		"kesehatan",
		"resep jamu",
		"analisis gejala",
		"rekomendasi jamu",
		"obat herbal",
		"pengobatan alami",
		"AI kesehatan",
	],
	author: "Tim Peracik",
	ogImage: `${FRONTEND_BASE_URL}/images/racik-og-default.png`,
	ogImageAlt: "Logo Racik - Rekomendasi Jamu Tradisional AI",
	logo: `${FRONTEND_BASE_URL}/assets/icons/racik-icon-32x32.webp`,
	twitterHandle: "",
};

const seoContent = {
	"/": {
		title: "Beranda",
		description:
			"Racik: Solusi cerdas temukan jamu tradisional Indonesia untuk keluhan kesehatan Anda. Analisis gejala akurat, rekomendasi jamu alami berbasis AI.",
		keywords: [
			"racik beranda",
			"jamu AI",
			"analisis kesehatan online",
			"rekomendasi jamu otomatis",
			"herbal indonesia pintar",
		],
		// ogImage: `${FRONTEND_BASE_URL}/images/racik-homepage-og.png`,
	},
	"/analysis-method": {
		title: "Metode Analisis Kami",
		description:
			"Pelajari bagaimana Racik menggunakan teknologi AI dan data jamu tradisional untuk memberikan rekomendasi yang akurat dan personal untuk Anda.",
		keywords: [
			"metode analisis racik",
			"AI jamu",
			"teknologi kesehatan tradisional",
			"cara kerja racik",
			"data jamu",
		],
	},
	"/register": {
		title: "Daftar Akun Baru",
		description:
			"Buat akun Racik gratis untuk menyimpan riwayat analisis, mendapatkan rekomendasi jamu yang dipersonalisasi, dan memulai perjalanan sehatmu.",
		keywords: ["daftar racik", "buat akun jamu", "registrasi pengguna baru", "akun kesehatan herbal"],
		noIndex: false,
	},
	"/login": {
		title: "Masuk ke Akun Racik",
		description:
			"Masuk ke akun Racik Anda untuk mengakses riwayat analisis, rekomendasi jamu, dan fitur personal lainnya.",
		keywords: ["login racik", "masuk akun jamu", "akses pengguna racik"],
		noIndex: false,
	},
	"/auth/google/callback": {
		title: "Autentikasi Google",
		description: "Memproses autentikasi Google Anda...",
		keywords: [],
		noIndex: true,
	},
	// Patient Dashboard
	"/patient": {
		title: "Dashboard Saya",
		description: "Ringkasan kesehatan dan aktivitas jamu Anda di Racik.",
		keywords: [],
		noIndex: true,
	},
	"/patient/analysis": {
		title: "Mulai Analisis Baru",
		description: "Deskripsikan keluhan Anda untuk mendapatkan rekomendasi jamu dari Racik.",
		keywords: [],
		noIndex: true,
	},
	"/patient/history": {
		title: "Riwayat Analisis Saya",
		description: "Lihat semua riwayat analisis gejala dan rekomendasi jamu yang pernah Anda terima.",
		keywords: [],
		noIndex: true,
	},
	"/patient/consumption": {
		title: "Riwayat Konsumsi Jamu",
		description: "Catat dan lihat riwayat konsumsi jamu Anda.",
		keywords: [],
		noIndex: true,
	},
	"/patient/profile": {
		title: "Profil Saya",
		description: "Kelola informasi profil dan data kesehatan Anda di Racik.",
		keywords: [],
		noIndex: true,
	},
	"/patient/settings": {
		title: "Pengaturan Akun",
		description: "Atur preferensi dan pengaturan akun Racik Anda.",
		keywords: [],
		noIndex: true,
	},
	// Admin Dashboard
	"/admin": {
		title: "Dashboard Admin",
		description: "Panel administrasi untuk Racik.",
		keywords: [],
		noIndex: true,
	},
	"/unauthorized": {
		title: "Akses Ditolak (403)",
		description: "Maaf, Anda tidak memiliki izin untuk mengakses halaman ini.",
		keywords: [],
		noIndex: true,
	},
	"*": {
		title: "Halaman Tidak Ditemukan (404)",
		description: "Maaf, halaman yang Anda cari tidak ditemukan.",
		keywords: [],
		noIndex: true,
	},
};

export { defaultSeo, seoContent };
