"use client";

import React, { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const passwordFormSchema = z
	.object({
		passwordLama: z.string().min(1, "Password lama harus diisi."),
		passwordBaru: z.string().min(8, "Password baru minimal 8 karakter."),
		konfirmasiPasswordBaru: z.string().min(8, "Konfirmasi password baru minimal 8 karakter."),
	})
	.refine(data => data.passwordBaru === data.konfirmasiPasswordBaru, {
		message: "Password baru dan konfirmasi password tidak cocok.",
		path: ["konfirmasiPasswordBaru"],
	});

const SettingsForm = () => {
	const [passwordLoading, setPasswordLoading] = useState(false);
	const [passwordSuccess, setPasswordSuccess] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const passwordForm = useForm({
		resolver: zodResolver(passwordFormSchema),
		defaultValues: {
			passwordLama: "",
			passwordBaru: "",
			konfirmasiPasswordBaru: "",
		},
	});

	async function onPasswordSubmit(values) {
		setPasswordLoading(true);
		setPasswordSuccess("");
		setPasswordError("");
		console.log("Data Password Dikirim:", values);
		// Simulasi API call
		await new Promise(resolve => setTimeout(resolve, 1500));
		// Ganti dengan logika API call sebenarnya
		// if (berhasil) {
		//   setPasswordSuccess("Password berhasil diubah!");
		//   passwordForm.reset(); // Kosongkan form password
		// } else {
		//   setPasswordError("Gagal mengubah password. Coba lagi.");
		// }
		setPasswordSuccess("Password berhasil diubah! (Simulasi)");
		passwordForm.reset();
		setPasswordLoading(false);
	}

	return (
		<Card className="shadow-md">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-gray-900">Ubah Password</CardTitle>
				<CardDescription>Jaga keamanan akun Anda dengan password yang kuat.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				{passwordSuccess && (
					<Alert variant="success">
						<AlertTitle>Berhasil!</AlertTitle>
						<AlertDescription>{passwordSuccess}</AlertDescription>
					</Alert>
				)}
				{passwordError && (
					<Alert variant="destructive">
						<AlertTitle>Oops!</AlertTitle>
						<AlertDescription>{passwordError}</AlertDescription>
					</Alert>
				)}
				<Form {...passwordForm}>
					<form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
						<FormField
							control={passwordForm.control}
							name="passwordLama"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password Lama</FormLabel>
									<FormControl>
										<Input type="password" placeholder="Masukkan password lama Anda" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={passwordForm.control}
							name="passwordBaru"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password Baru</FormLabel>
									<FormControl>
										<Input type="password" placeholder="Minimal 8 karakter" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={passwordForm.control}
							name="konfirmasiPasswordBaru"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Konfirmasi Password Baru</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="Ketik ulang password baru Anda"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							disabled={passwordLoading}
							className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 sm:w-auto"
						>
							{passwordLoading ? (
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							) : (
								<ShieldCheck className="mr-2 h-4 w-4" />
							)}
							{passwordLoading ? "Menyimpan..." : "Ubah Password"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default SettingsForm;
