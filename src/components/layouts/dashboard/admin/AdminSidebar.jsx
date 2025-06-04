"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Archive,
	BarChartBig,
	BotMessageSquare,
	ClipboardList,
	Power,
	Settings,
	ShieldAlert,
	Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const adminNavItems = [
	{ href: "/admin", label: "Overview", icon: BarChartBig },
	{ href: "/admin/users", label: "Manajemen Pengguna", icon: Users },
	{ href: "/admin/analyses", label: "Data Analisis", icon: BotMessageSquare },
	{ href: "/admin/dispensers/status", label: "Status Mesin", icon: Power },
	{ href: "/admin/dispensers/stock", label: "Kelola Stok Bahan", icon: Archive },
	{ href: "/admin/reports/usage", label: "Laporan Penggunaan", icon: ClipboardList },
	// { href: "/admin/content", label: "Manajemen Konten", icon: FileText }, // Jika ada manajemen artikel/edukasi
	{ type: "separator", key: "sepAdmin1" },
	{ href: "/admin/system-logs", label: "Log Sistem & Aktivitas", icon: ShieldAlert },
	{ href: "/admin/settings", label: "Pengaturan Sistem", icon: Settings },
];

const AdminSidebar = ({ className }) => {
	const { pathname } = useLocation();

	return (
		<aside
			className={cn(
				"bg-background fixed top-0 left-0 z-40 h-screen w-64 border-r transition-transform lg:translate-x-0",
				className
			)}
		>
			<ScrollArea className="h-full py-4">
				<div className="px-3 py-2">
					<Link to="/patient" className="mb-6 flex items-center space-x-2 px-4">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg">
							<img
								src="/assets/icons/racik-icon-16x16.webp"
								alt="Racik Logo"
								className="h-8 w-8"
								loading="lazy"
							/>
						</div>
						<span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-2xl font-bold text-transparent">
							Racik
						</span>
					</Link>
					<nav className="grid items-start gap-1 px-2 text-sm font-medium">
						{adminNavItems.map(item =>
							item.type === "separator" ? (
								<hr key={item.key} className="border-border my-2" />
							) : (
								<Link
									key={item.href}
									to={item.href}
									className={cn(
										"text-muted-foreground hover:text-primary hover:bg-primary/10 flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all",
										pathname === item.href &&
											"bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold text-white"
									)}
								>
									<item.icon className="h-5 w-5" />
									{item.label}
								</Link>
							)
						)}
					</nav>
				</div>
			</ScrollArea>
		</aside>
	);
};

export default AdminSidebar;
