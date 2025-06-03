"use client";

import { useState } from "react";
import { Loader2, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUserProfile from "@/hooks/useUserProfile";

const initialFormData = {
	current_password: "",
	password: "",
	password_confirmation: "",
};

const SettingsForm = () => {
	const [formData, setFormData] = useState(initialFormData);
	const { isLoading, updatePassword } = useUserProfile();

	const handleChangeInput = e => {
		const { name, value } = e.target;
		setFormData(form => ({ ...form, [name]: value }));
	};

	const handleFormSubmit = async e => {
		e.preventDefault();

		if (formData.password !== formData.password_confirmation) {
			toast.error("Konfirmasi password tidak cocok.");
			return;
		}

		try {
			await updatePassword(formData);
			toast.success("Password berhasil diperbarui!");
		} catch (error) {
			toast.error(error?.message.split("(")[0] || "Terjadi kesalahan saat memperbarui password.");
		} finally {
			setFormData(initialFormData);
		}
	};

	return (
		<Card className="shadow-md">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-gray-900">Ubah Password</CardTitle>
				<CardDescription>Jaga keamanan akun Anda dengan password yang kuat.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<form method="POST" className="space-y-6" onSubmit={handleFormSubmit}>
					<div className="space-y-2">
						<Label htmlFor="current_password">Password Lama</Label>
						<Input
							id="current_password"
							type="text"
							name="current_password"
							placeholder="Masukkan password lama Anda"
							className="border-emerald-200 focus:border-emerald-500"
							value={formData.current_password}
							onChange={handleChangeInput}
							required
							autoFocus
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password Baru</Label>
						<Input
							id="password"
							type="text"
							name="password"
							placeholder="Minimal 8 karakter"
							className="border-emerald-200 focus:border-emerald-500"
							value={formData.password}
							onChange={handleChangeInput}
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password_confirmation">Konfirmasi Password Baru</Label>
						<Input
							id="password_confirmation"
							type="text"
							name="password_confirmation"
							placeholder="Ketik ulang password baru Anda"
							className="border-emerald-200 focus:border-emerald-500"
							value={formData.password_confirmation}
							onChange={handleChangeInput}
							required
						/>
					</div>
					<Button
						type="submit"
						className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 sm:w-auto"
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						) : (
							<ShieldCheck className="mr-2 h-4 w-4" />
						)}
						{isLoading ? "Menyimpan..." : "Ubah Password"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};

export default SettingsForm;
