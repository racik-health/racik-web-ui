"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Settings,
	PanelLeftClose,
	BarChartBig,
	Users,
	BotMessageSquare,
	ShieldAlert,
	Power,
	Archive,
	ClipboardList,
} from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

// Definisikan item navigasi (bisa di-refactor jadi satu file konstan)
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

const AdminMobileSidebar = ({ isOpen, onToggle }) => {
	const { pathname } = useLocation();

	return (
		<Sheet open={isOpen} onOpenChange={onToggle}>
			<SheetContent side="left" className="w-64 p-0 lg:max-w-xs">
				<SheetHeader className="border-b px-5 py-[14px]">
					<div className="flex items-center justify-between">
						<SheetTitle asChild>
							<Link to="/patient" className="flex items-center space-x-2" onClick={onToggle}>
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
						</SheetTitle>
						<SheetClose asChild>
							<Button variant="ghost" size="icon">
								<PanelLeftClose className="h-6 w-6" />
							</Button>
						</SheetClose>
					</div>
					<SheetDescription className="sr-only">
						Navigasi utama dashboard Racik. Pilih menu untuk melanjutkan.
					</SheetDescription>
				</SheetHeader>
				<ScrollArea className="h-full">
					<div className="px-3 py-2">
						<nav className="grid items-start gap-1 px-2 text-sm font-medium">
							{adminNavItems.map(item =>
								item.type === "separator" ? (
									<hr key={item.key} className="border-border my-2" />
								) : (
									<SheetClose asChild key={item.href}>
										<Link
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
									</SheetClose>
								)
							)}
						</nav>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
};

export default AdminMobileSidebar;
