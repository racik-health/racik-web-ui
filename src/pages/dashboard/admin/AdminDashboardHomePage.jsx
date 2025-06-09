"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/common/PageSEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { Badge } from "@/components/ui/badge";
import {
	Users,
	BarChartBig,
	BotMessageSquare,
	PackageOpen,
	Activity,
	ShieldAlert,
	ListChecks,
	Archive,
	Power,
	Settings,
} from "lucide-react";

const mockAdminDashboardData = {
	adminName: "Super Admin",
	statistics: {
		totalUsers: 1250,
		newUsersToday: 15,
		totalAnalyses: 3570,
		analysesToday: 45,
		pendingReviewAnalyses: 5, // Analisis yang mungkin butuh review admin
	},
	dispenserSummary: {
		totalDispensers: 4,
		online: 3,
		offline: 1,
		lowStockSlots: 2, // Jumlah slot yang stoknya rendah di semua dispenser
	},
	recentActivities: [
		{
			id: 1,
			timestamp: "2024-05-30 10:15",
			type: "user_analysis",
			action: "Pengguna 'salman@example.com' melakukan analisis baru.",
			link: "/admin/analyses/detail/xyz",
		},
		{
			id: 2,
			timestamp: "2024-05-30 09:30",
			type: "dispenser_alert",
			action: "Dispenser 'D001' melaporkan stok Kunyit Asam rendah.",
			link: "/admin/dispensers/D001/stock",
		},
		{
			id: 3,
			timestamp: "2024-05-29 17:00",
			type: "admin_action",
			action: "Admin 'admin_utama' memperbarui pengaturan sistem.",
			link: "/admin/system-logs",
		},
		{
			id: 4,
			timestamp: "2024-05-29 15:00",
			type: "new_user",
			action: "Pengguna baru 'budi.racik@example.com' mendaftar.",
			link: "/admin/users/detail/abc",
		},
	],
	quickLinks: [
		{ label: "Kelola Pengguna", href: "/admin/users", icon: Users },
		{ label: "Status Dispenser", href: "/admin/dispensers/status", icon: Power },
		{ label: "Kelola Stok Bahan", href: "/admin/dispensers/stock", icon: Archive },
		{ label: "Lihat Laporan Penggunaan", href: "/admin/reports/usage", icon: BarChartBig },
	],
};

const AdminDashboardHomePage = () => {
	const [adminData, setAdminData] = useState(null);

	useEffect(() => {
		setAdminData(mockAdminDashboardData);
	}, []);

	if (!adminData) {
		return <div className="flex h-64 items-center justify-center">Memuat data dashboard admin...</div>;
	}

	const { statistics, dispenserSummary, recentActivities, quickLinks } = adminData;

	return (
		<section className="space-y-6 py-4 sm:py-8 md:space-y-8 lg:ml-[16rem]">
			<PageSEO />
			<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
				<div>
					<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Admin Overview</h1>
					<p className="mt-1 text-gray-600 dark:text-gray-400">
						Selamat datang, {adminData.adminName}! Pantau aktivitas dan kelola platform Racik.
					</p>
				</div>
				{/* Bisa tambahkan tombol aksi global untuk admin jika perlu, misal "Buat Pengumuman" */}
			</div>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				<Card className="shadow transition-shadow hover:shadow-lg">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Pengguna</CardTitle>
						<Users className="h-5 w-5 text-blue-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{statistics.totalUsers.toLocaleString("id-ID")}</div>
						<p className="text-muted-foreground text-xs">
							+{statistics.newUsersToday} pengguna baru hari ini
						</p>
					</CardContent>
				</Card>
				<Card className="shadow transition-shadow hover:shadow-lg">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Analisis Pengguna</CardTitle>
						<BotMessageSquare className="h-5 w-5 text-emerald-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{statistics.totalAnalyses.toLocaleString("id-ID")}</div>
						<p className="text-muted-foreground text-xs">
							+{statistics.analysesToday} analisis dilakukan hari ini
						</p>
					</CardContent>
				</Card>
				<Card className="shadow transition-shadow hover:shadow-lg">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Dispenser Aktif</CardTitle>
						<Power className="h-5 w-5 text-sky-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{dispenserSummary.online}{" "}
							<span className="text-muted-foreground text-sm font-normal">
								/ {dispenserSummary.totalDispensers} Total
							</span>
						</div>
						<p className="text-muted-foreground text-xs">
							{dispenserSummary.offline > 0
								? `${dispenserSummary.offline} dispenser offline`
								: "Semua dispenser online"}
						</p>
					</CardContent>
				</Card>
				<Card className="shadow transition-shadow hover:shadow-lg">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Slot Stok Rendah</CardTitle>
						<Archive className="h-5 w-5 text-amber-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{dispenserSummary.lowStockSlots}</div>
						<p className="text-muted-foreground text-xs">Slot bahan jamu perlu diisi ulang</p>
					</CardContent>
				</Card>
			</div>
			<div className="grid gap-6 lg:grid-cols-3">
				{" "}
				<Card className="shadow transition-shadow hover:shadow-lg lg:col-span-2">
					{" "}
					<CardHeader>
						<CardTitle className="text-lg font-semibold">Aktivitas Terbaru Sistem</CardTitle>
						<CardDescription>Log kejadian penting di platform.</CardDescription>
					</CardHeader>
					<CardContent className="max-h-96 space-y-3 overflow-y-auto">
						{" "}
						{recentActivities.length > 0 ? (
							recentActivities.map(activity => (
								<Link
									to={activity.link || "#"}
									key={activity.id}
									className="block rounded-md p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/40"
								>
									<div className="flex items-start space-x-3 text-sm">
										{activity.type === "user_analysis" && (
											<BotMessageSquare className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-500" />
										)}
										{activity.type === "dispenser_alert" && (
											<ShieldAlert className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
										)}
										{activity.type === "admin_action" && (
											<Settings className="mt-1 h-4 w-4 flex-shrink-0 text-indigo-500" />
										)}
										{activity.type === "new_user" && (
											<Users className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
										)}
										{!["user_analysis", "dispenser_alert", "admin_action", "new_user"].includes(
											activity.type
										) && <Activity className="text-muted-foreground mt-1 h-4 w-4 flex-shrink-0" />}
										<div>
											<p className="leading-snug text-gray-800 dark:text-gray-200">
												{activity.action}
											</p>
											<p className="text-muted-foreground text-xs">
												{new Date(activity.timestamp).toLocaleString("id-ID", {
													dateStyle: "medium",
													timeStyle: "short",
												})}
											</p>
										</div>
									</div>
								</Link>
							))
						) : (
							<p className="text-muted-foreground">Tidak ada aktivitas terbaru.</p>
						)}
					</CardContent>
				</Card>
				<Card className="shadow transition-shadow hover:shadow-lg">
					{" "}
					<CardHeader>
						<CardTitle className="text-lg font-semibold">Akses Cepat</CardTitle>
						<CardDescription>Navigasi ke fitur admin utama.</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-3 overflow-auto">
						{" "}
						{quickLinks.map(link => (
							<Button
								key={link.href}
								variant="outline"
								className="w-full justify-start py-3 text-base"
								asChild
							>
								<Link to={link.href}>
									<link.icon className="mr-3 h-5 w-5" />
									{link.label}
								</Link>
							</Button>
						))}
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default AdminDashboardHomePage;
