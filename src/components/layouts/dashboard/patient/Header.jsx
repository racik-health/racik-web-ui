"use client";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Bell, UserCircle, LogOut, Settings, Home } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuth from "@/hooks/useAuth";

const Header = ({ pageTitle = "Dashboard", onToggleMobileSidebar }) => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logout();
		toast.success("Anda telah berhasil keluar.");
		navigate("/login");
	};

	return (
		<header className="bg-background sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b px-4 shadow-sm sm:px-6">
			<Button variant="outline" size="icon" className="sm:hidden" onClick={onToggleMobileSidebar}>
				<Menu className="h-5 w-5" />
				<span className="sr-only">Toggle Menu</span>
			</Button>
			<div className="flex-1">
				<h1 className="text-foreground hidden text-xl font-semibold sm:block">{pageTitle}</h1>
			</div>
			<div className="flex items-center gap-4">
				{/* <Button variant="ghost" size="icon" className="rounded-full">
					<Bell className="text-muted-foreground h-5 w-5" />
					<span className="sr-only">Notifikasi</span>
				</Button> */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="relative h-10 w-10 rounded-full">
							<Avatar className="h-9 w-9">
								<AvatarImage
									className="bg-gradient-to-r from-emerald-600 to-teal-600"
									src={`https://placehold.co/40x40/10b981/FFFFFF?text=${user?.name?.substring(0, 2).toUpperCase()}`}
									loading="lazy"
									alt={user?.name}
								/>
								<AvatarFallback>{user?.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" align="end" forceMount>
						<DropdownMenuLabel className="font-normal">
							<div className="flex flex-col flex-wrap space-y-1">
								<p className="text-sm leading-none font-medium">{user?.name}</p>
								<p className="text-muted-foreground text-xs leading-none">{user?.email}</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem asChild>
							<Link to="/" className="flex items-center">
								{" "}
								<Home className="mr-2 h-4 w-4" />
								Beranda
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link to="/patient/profile" className="flex items-center">
								{" "}
								<UserCircle className="mr-2 h-4 w-4" />
								Profil
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link to="/patient/settings" className="flex items-center">
								{" "}
								<Settings className="mr-2 h-4 w-4" />
								Pengaturan
							</Link>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={handleLogout}
							className="flex cursor-pointer items-center text-red-600 hover:!bg-red-50 hover:!text-red-600 dark:hover:!bg-red-700/20"
						>
							<LogOut className="mr-2 h-4 w-4" />
							Keluar
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
};

export default Header;
