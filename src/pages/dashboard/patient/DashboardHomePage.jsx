"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Activity,
	ClipboardList,
	Sparkles,
	GlassWater,
	TrendingUp,
	PlusCircle,
	CalendarDays,
	Pill,
	AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const mockDashboardData = {
	userName: "Salman Abdurrahman",
	userAvatar: "https://placehold.co/40x40/10b981/FFFFFF?text=SA",
	totalAnalisis: 5,
	rekomendasiAktif: {
		namaJamu: "Jahe Merah Super",
		jadwalMinum: "Pagi & Malam (Setelah Makan)",
		catatan: "Bantu jaga stamina dan hangatkan badan.",
		linkDetail: "/dashboard/history/detail/rec001",
	},
	konsumsiHariIni: {
		sudahMinum: 1,
		targetMinum: 2,
		jamuBerikutnya: "Jahe Merah Super (Malam)",
	},
	analisisTerakhir: {
		tanggal: "2024-05-26",
		statusRingkas: "Kondisi Cukup Baik",
		linkDetail: "/dashboard/history/detail/analysis003",
	},
	peringatanPenting: null,
};

const DashboardHomePage = () => {
	const [dashboardData, setDashboardData] = useState(null);

	useEffect(() => {
		setDashboardData(mockDashboardData);
	}, []);

	if (!dashboardData) {
		return <div className="flex h-64 items-center justify-center">Memuat data dashboard...</div>;
	}

	const konsumsiProgress =
		dashboardData.konsumsiHariIni.targetMinum > 0
			? (dashboardData.konsumsiHariIni.sudahMinum / dashboardData.konsumsiHariIni.targetMinum) * 100
			: 0;

	return (
		<section className="space-y-6 py-4 sm:ml-[16rem] sm:py-8 md:space-y-8">
			<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
				<div>
					<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
						Selamat Datang Kembali, {dashboardData.userName}!
					</h1>
					<p className="mt-1 text-gray-600 dark:text-gray-400">
						Semoga harimu menyenangkan dan penuh semangat. Ini ringkasan kesehatanmu.
					</p>
				</div>
				<Link to="/patient/analysis">
					<Button
						size="lg"
						className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md transition-all hover:from-emerald-600 hover:to-teal-700 hover:shadow-lg sm:w-auto"
					>
						<PlusCircle className="mr-2 h-5 w-5" />
						Mulai Analisis Baru
					</Button>
				</Link>
			</div>
			{dashboardData.peringatanPenting && (
				<Card className="border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/30">
					<CardHeader className="pb-3">
						<div className="flex items-center">
							<AlertTriangle className="mr-3 h-6 w-6 text-yellow-600 dark:text-yellow-400" />
							<CardTitle className="text-lg font-semibold text-yellow-800 dark:text-yellow-300">
								Peringatan Penting
							</CardTitle>
						</div>
					</CardHeader>
					<CardContent>
						<p className="text-yellow-700 dark:text-yellow-200">{dashboardData.peringatanPenting}</p>
					</CardContent>
				</Card>
			)}
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<Card className="shadow transition-shadow duration-300 hover:shadow-lg">
					<CardHeader className="pb-3">
						<div className="flex items-center justify-between">
							<CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
								Rekomendasi Aktif
							</CardTitle>
							<Sparkles className="h-6 w-6 text-emerald-500" />
						</div>
					</CardHeader>
					<CardContent className="space-y-2">
						{dashboardData.rekomendasiAktif ? (
							<>
								<h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
									{dashboardData.rekomendasiAktif.namaJamu}
								</h3>
								<div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
									<div className="flex items-center">
										<CalendarDays className="text-muted-foreground mr-2 h-4 w-4" />
										<span>{dashboardData.rekomendasiAktif.jadwalMinum}</span>
									</div>
									<p>
										<span className="font-medium">Catatan:</span>{" "}
										{dashboardData.rekomendasiAktif.catatan}
									</p>
								</div>
								<Button variant="outline" size="sm" className="mt-3 w-full" asChild>
									<Link to={dashboardData.rekomendasiAktif.linkDetail}>Lihat Detail Rekomendasi</Link>
								</Button>
							</>
						) : (
							<p className="text-gray-500 dark:text-gray-400">Tidak ada rekomendasi aktif saat ini.</p>
						)}
					</CardContent>
				</Card>
				<Card className="shadow transition-shadow duration-300 hover:shadow-lg">
					<CardHeader className="pb-3">
						<div className="flex items-center justify-between">
							<CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
								Konsumsi Hari Ini
							</CardTitle>
							<GlassWater className="h-6 w-6 text-sky-500" />
						</div>
					</CardHeader>
					<CardContent className="space-y-3">
						<div className="flex items-center justify-between">
							<span className="text-sm text-gray-600 dark:text-gray-400">Progress:</span>
							<Badge variant="outline" className="font-semibold">
								{dashboardData.konsumsiHariIni.sudahMinum} / {dashboardData.konsumsiHariIni.targetMinum}{" "}
								Sesi
							</Badge>
						</div>
						<Progress
							value={konsumsiProgress}
							aria-label={`${konsumsiProgress}% konsumsi selesai`}
							className="h-3 [&>div]:bg-sky-500"
						/>
						<p className="text-xs text-gray-500 dark:text-gray-400">
							Jamu berikutnya:{" "}
							<span className="font-medium">{dashboardData.konsumsiHariIni.jamuBerikutnya}</span>
						</p>
					</CardContent>
				</Card>
				<Card className="shadow transition-shadow duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
					<CardHeader className="pb-3">
						<div className="flex items-center justify-between">
							<CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
								Analisis Terakhir
							</CardTitle>
							<Activity className="h-6 w-6 text-indigo-500" />
						</div>
					</CardHeader>
					<CardContent className="space-y-2">
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Tanggal:{" "}
							<span className="font-medium">
								{new Date(dashboardData.analisisTerakhir.tanggal).toLocaleDateString("id-ID", {
									weekday: "long",
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</span>
						</p>
						<div className="flex items-center space-x-2">
							<span className="text-sm text-gray-600 dark:text-gray-400">Status:</span>
							<Badge
								variant={
									dashboardData.analisisTerakhir.statusRingkas === "Kondisi Cukup Baik"
										? "success"
										: "warning"
								}
							>
								{dashboardData.analisisTerakhir.statusRingkas}
							</Badge>
						</div>
						<Button variant="outline" size="sm" className="mt-3 w-full" asChild>
							<Link to={dashboardData.analisisTerakhir.linkDetail}>Lihat Detail Analisis</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
			<Card className="shadow transition-shadow duration-300 hover:shadow-lg">
				<CardHeader>
					<CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
						Jamu Favorit Anda
					</CardTitle>
					<CardDescription>Berdasarkan riwayat konsumsi Anda.</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-700/30">
						<Pill className="h-8 w-8 text-amber-500" />
						<div>
							<h4 className="font-semibold text-gray-700 dark:text-gray-200">Kunyit Asam</h4>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								Telah dikonsumsi 3 kali bulan ini.
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>
	);
};

export default DashboardHomePage;
