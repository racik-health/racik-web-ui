"use client";

import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";

const getPageTitle = pathname => {
	if (pathname.startsWith("/dashboard/analysis")) return "Analisis Baru";
	if (pathname.startsWith("/dashboard/history")) return "Riwayat & Rekomendasi";
	if (pathname.startsWith("/dashboard/consumption")) return "Jurnal Konsumsi";
	if (pathname.startsWith("/dashboard/profile")) return "Profil Saya";
	if (pathname.startsWith("/dashboard/settings")) return "Pengaturan";
	if (pathname.startsWith("/dashboard/help")) return "Bantuan & FAQ";
	return "Beranda Dashboard";
};

const DashboardLayout = () => {
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
	const { pathname } = useLocation();
	const pageTitle = getPageTitle(pathname);

	const toggleMobileSidebar = () => {
		setIsMobileSidebarOpen(!isMobileSidebarOpen);
	};

	useEffect(() => {
		setIsMobileSidebarOpen(false);
	}, [pathname]);

	return (
		<section className="bg-muted/40 flex min-h-screen w-full flex-col">
			<Sidebar className="hidden sm:block" />
			<MobileSidebar isOpen={isMobileSidebarOpen} onToggle={toggleMobileSidebar} />
			<div className="sm:pl-[100% - 16rem] flex flex-col sm:gap-4">
				{" "}
				<Header pageTitle={pageTitle} onToggleMobileSidebar={toggleMobileSidebar} />
				<main className="flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
					<Outlet />
				</main>
				{/* <footer className="bg-background text-muted-foreground mt-auto border-t px-6 py-4 text-center text-sm sm:pl-72">
					© {new Date().getFullYear()} Racik. Semua hak dilindungi.
				</footer> */}
			</div>
		</section>
	);
};

export default DashboardLayout;
