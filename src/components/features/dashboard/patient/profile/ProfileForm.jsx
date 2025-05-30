"use client";

import React, { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const profileFormSchema = z.object({
	namaLengkap: z.string().min(3, "Nama lengkap minimal 3 karakter.").max(100),
	email: z.string().email("Format email tidak valid.").optional(),
	alergi: z.string().max(500, "Catatan alergi maksimal 500 karakter.").optional(),
	kondisiMedis: z.string().max(500, "Catatan kondisi medis maksimal 500 karakter.").optional(),
});

const mockUserData = {
	namaLengkap: "Salman Abdurrahman",
	email: "salman.racik@example.com",
	alergi: "Debu, Udang",
	kondisiMedis: "Kadang-kadang maag kambuh kalau telat makan.",
};

const ProfileForm = () => {
	const [profileLoading, setProfileLoading] = useState(false);
	const [profileSuccess, setProfileSuccess] = useState("");
	const [profileError, setProfileError] = useState("");

	const profileForm = useForm({
		resolver: zodResolver(profileFormSchema),
		defaultValues: {
			namaLengkap: mockUserData.namaLengkap || "",
			email: mockUserData.email || "",
			alergi: mockUserData.alergi || "",
			kondisiMedis: mockUserData.kondisiMedis || "",
		},
	});

	async function onProfileSubmit(values) {
		setProfileLoading(true);
		setProfileSuccess("");
		setProfileError("");
		console.log("Data Profil Dikirim:", values);
		// Simulasi API call
		await new Promise(resolve => setTimeout(resolve, 1500));
		// Ganti dengan logika API call sebenarnya
		// if (berhasil) {
		//   setProfileSuccess("Profil berhasil diperbarui!");
		// } else {
		//   setProfileError("Gagal memperbarui profil. Coba lagi.");
		// }
		setProfileSuccess("Profil berhasil diperbarui! (Simulasi)");
		setProfileLoading(false);
	}

	return (
		<Card className="shadow-md">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-gray-900">Informasi Profil</CardTitle>
				<CardDescription>Perbarui data diri dan informasi kesehatan penting Anda.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				{profileSuccess && (
					<Alert variant="success">
						<AlertTitle>Berhasil!</AlertTitle>
						<AlertDescription>{profileSuccess}</AlertDescription>
					</Alert>
				)}
				{profileError && (
					<Alert variant="destructive">
						<AlertTitle>Oops!</AlertTitle>
						<AlertDescription>{profileError}</AlertDescription>
					</Alert>
				)}
				<Form {...profileForm}>
					<form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
						<FormField
							control={profileForm.control}
							name="namaLengkap"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nama Lengkap</FormLabel>
									<FormControl>
										<Input placeholder="Masukkan nama lengkap Anda" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={profileForm.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="email@anda.com"
											{...field}
											readOnly
											className="cursor-not-allowed bg-gray-100 dark:bg-gray-700"
										/>
									</FormControl>
									<FormDescription>Email tidak dapat diubah.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={profileForm.control}
							name="alergi"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Catatan Alergi</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Sebutkan alergi yang Anda miliki (makanan, obat, dll.) pisahkan dengan koma."
											className="min-h-[100px]"
											{...field}
										/>
									</FormControl>
									<FormDescription>Informasi ini penting untuk akurasi rekomendasi.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={profileForm.control}
							name="kondisiMedis"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Kondisi Medis Lainnya</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Sebutkan kondisi medis yang Anda miliki (jika ada) pisahkan dengan koma."
											className="min-h-[100px]"
											{...field}
										/>
									</FormControl>
									<FormDescription>Contoh: Hipertensi, Diabetes, Asam Lambung.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							disabled={profileLoading}
							className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 sm:w-auto"
						>
							{profileLoading ? (
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							) : (
								<Save className="mr-2 h-4 w-4" />
							)}
							{profileLoading ? "Menyimpan..." : "Simpan Perubahan Profil"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default ProfileForm;
