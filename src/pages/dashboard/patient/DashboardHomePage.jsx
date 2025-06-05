"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { defaultSeo, seoContent } from "@/constants/seoData";
import useDashboard from "@/hooks/useDashboard";
import SEO from "@/components/common/SEO";
import PageLoader from "@/components/common/PageLoader";
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
	Heart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DashboardHomePage = () => {
	const { isLoading, data: dashboardData, error, fetchDashboardData } = useDashboard();
	const { pathname } = useLocation();
	const currentPageSeo = seoContent[pathname] || defaultSeo;

	useEffect(() => {
		fetchDashboardData();
	}, [fetchDashboardData]);

	const handleRefreshButton = () => {
		window.location.reload();
	};

	if (isLoading && !dashboardData) {
		return <PageLoader />;
	}

	if (error) {
		return (
			<section className="space-y-6 py-4 sm:ml-[16rem] sm:py-8 md:space-y-8">
				<Card className="border-red-300 bg-red-50">
					<CardHeader>
						<div className="flex items-center">
							<AlertTriangle className="mr-3 h-6 w-6 text-red-600" />
							<CardTitle className="text-lg font-semibold text-red-800">Terjadi Kesalahan</CardTitle>
						</div>
					</CardHeader>
					<CardContent>
						<p className="text-red-700">
							Gagal memuat data dashboard: {error.message || "Silakan coba lagi nanti."}
						</p>
						<Button onClick={handleRefreshButton} className="mt-4" variant="destructive">
							Coba Lagi
						</Button>
					</CardContent>
				</Card>
			</section>
		);
	}

	if (!isLoading && !dashboardData) {
		return (
			<section className="space-y-6 py-4 sm:ml-[16rem] sm:py-8 md:space-y-8">
				<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
					<div>
						<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Selamat Datang!</h1>
						<p className="mt-1 text-gray-600 dark:text-gray-400">Data dashboard Anda belum tersedia.</p>
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
				<Card>
					<CardContent className="pt-6 text-center text-gray-500">
						Tidak ada data untuk ditampilkan. Coba mulai analisis baru.
					</CardContent>
				</Card>
			</section>
		);
	}

	return (
		<section className="space-y-6 py-4 sm:py-8 md:space-y-8 lg:ml-[16rem]">
			<SEO
				title={currentPageSeo.title}
				description={currentPageSeo.description}
				keywords={currentPageSeo.keywords}
				ogImage={currentPageSeo.ogImage}
				ogImageAlt={currentPageSeo.ogImageAlt}
				noIndex={currentPageSeo.noIndex}
			/>
			<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
				<div>
					<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
						Selamat Datang Kembali, {dashboardData?.data?.greetingName || "Pengguna"}!
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
			{/* {dashboardData.criticalAlert && (
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
                        <p className="text-yellow-700 dark:text-yellow-200">{dashboardData.criticalAlert}</p>
                    </CardContent>
                </Card>
            )} */}
			<div className="grid gap-6 md:grid-cols-2">
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
						{dashboardData?.data?.activeRecommendation ? (
							<>
								<h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
									{dashboardData.data.activeRecommendation.herbal_medicine_name}
								</h3>
								<div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
									<p>
										<span className="font-medium">Catatan:</span>{" "}
										{dashboardData.data.activeRecommendation.note}
									</p>
								</div>
								<Button variant="outline" size="sm" className="mt-3 w-full" asChild>
									<Link to="/patient/history">Lihat Riwayat Analisis</Link>
								</Button>
							</>
						) : (
							<p className="text-gray-500 dark:text-gray-400">Tidak ada rekomendasi aktif saat ini.</p>
						)}
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
						{dashboardData?.data?.lastAnalysis ? (
							<>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Tanggal:{" "}
									<span className="font-medium">
										{new Date(dashboardData.data.lastAnalysis.date).toLocaleDateString("id-ID", {
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
											dashboardData.data.lastAnalysis.status_summary === "Selesai"
												? "success"
												: "warning"
										}
									>
										{dashboardData.data.lastAnalysis.status_summary}
									</Badge>
								</div>
								<Button variant="outline" size="sm" className="mt-3 w-full" asChild>
									<Link to="/patient/history">Lihat Riwayat Analisis</Link>
								</Button>
							</>
						) : (
							<p className="text-gray-500 dark:text-gray-400">Belum ada analisis yang dilakukan.</p>
						)}
					</CardContent>
				</Card>
			</div>
			<Card className="shadow transition-shadow duration-300 hover:shadow-lg">
				<CardHeader className="pb-3">
					<div className="flex items-center justify-between">
						<CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
							Jamu Favorit (30 Hari Terakhir)
						</CardTitle>
						<Heart className="h-6 w-6 text-pink-500" />
					</div>
				</CardHeader>
				<CardContent>
					{dashboardData?.data?.favoriteHerbal ? (
						<div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-700/30">
							<Pill className="h-8 w-8 flex-shrink-0 text-amber-500" />
							<div>
								<h4 className="font-semibold text-gray-700 dark:text-gray-200">
									{dashboardData.data.favoriteHerbal.name}
								</h4>
								<p className="text-xs text-gray-500 dark:text-gray-400">
									Telah dikonsumsi {dashboardData.data.favoriteHerbal.frequency_info} kali.
								</p>
							</div>
						</div>
					) : (
						<p className="text-gray-500 dark:text-gray-400">Belum ada data jamu favorit bulan ini.</p>
					)}
				</CardContent>
			</Card>
		</section>
	);
};

export default DashboardHomePage;
