"use client";

import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminMobileSidebar from "./AdminMobileSidebar";
import AdminHeader from "./AdminHeader";

const getPageTitle = pathname => {
	switch (pathname) {
		case "/admin/users":
			return "Manajemen Pengguna";
		case "/admin/analyses":
			return "Data Analisis";
		case "/admin/dispensers/status":
			return "Status Mesin";
		case "/admin/dispensers/stock":
			return "Kelola Stok Bahan";
		case "/admin/reports/usage":
			return "Laporan Penggunaan";
		case "/admin/system-logs":
			return "Log Sistem & Aktivitas";
		case "/admin/settings":
			return "Pengaturan Sistem";
		default:
			return "Beranda Dashboard";
	}
};

const AdminLayout = () => {
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
			<AdminSidebar className="hidden sm:block" />
			<AdminMobileSidebar isOpen={isMobileSidebarOpen} onToggle={toggleMobileSidebar} />
			<div className="sm:pl-[100% - 16rem] flex flex-col sm:gap-4">
				{" "}
				<AdminHeader pageTitle={pageTitle} onToggleMobileSidebar={toggleMobileSidebar} />
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

export default AdminLayout;
