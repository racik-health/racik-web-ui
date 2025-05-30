"use client";

import React, { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const analysisFormSchema = z.object({
	gejalaUtama: z.array(z.string()).refine(value => value.some(item => item), {
		message: "Anda harus memilih setidaknya satu gejala.",
	}),
	deskripsiLainnya: z.string().max(500, "Deskripsi tidak boleh lebih dari 500 karakter.").optional(),
	tingkatKeparahan: z.enum(["ringan", "sedang", "berat"], {
		required_error: "Anda harus memilih tingkat keparahan.",
	}),
	sejakKapan: z.string({
		required_error: "Anda harus memilih durasi gejala.",
	}),
});

const daftarGejala = [
	{ id: "pusing", label: "Pusing / Sakit Kepala" },
	{ id: "mual", label: "Mual / Muntah" },
	{ id: "demam", label: "Demam" },
	{ id: "batuk", label: "Batuk / Pilek" },
	{ id: "nyeri_perut", label: "Nyeri Perut" },
	{ id: "lemas", label: "Lemas / Mudah Lelah" },
	{ id: "susah_tidur", label: "Susah Tidur (Insomnia)" },
	{ id: "nyeri_sendi", label: "Nyeri Sendi / Otot" },
];

const AnalysisForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const form = useForm({
		resolver: zodResolver(analysisFormSchema),
		defaultValues: { gejalaUtama: [], deskripsiLainnya: "" },
	});

	async function onSubmit(values) {
		setIsLoading(true);
		setIsSuccess(false);
		setErrorMessage("");
		console.log("Data Form:", values);

		// Simulasi API call
		await new Promise(resolve => setTimeout(resolve, 2000));

		// Nanti ganti dengan logika asli
		const success = Math.random() > 0.3; // 70% chance of success (for demo)
		if (success) {
			setIsSuccess(true);
			form.reset();
		} else {
			setErrorMessage("Maaf, terjadi gangguan saat mengirim data. Coba lagi.");
		}

		setIsLoading(false);
	}

	return (
		<Card className="w-full shadow-sm">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-gray-900">Mulai Analisis Baru</CardTitle>
				<CardDescription>
					Deskripsikan keluhan Anda untuk mendapatkan rekomendasi jamu berbasis AI.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="gejalaUtama"
							render={() => (
								<FormItem>
									<div className="mb-4">
										<FormLabel className="text-base font-medium">Gejala Utama*</FormLabel>
										<FormDescription>
											Pilih satu atau lebih gejala yang paling Anda rasakan.
										</FormDescription>
									</div>
									<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
										{daftarGejala.map(item => (
											<FormField
												key={item.id}
												control={form.control}
												name="gejalaUtama"
												render={({ field }) => (
													<FormItem className="flex items-center space-y-0 space-x-3 rounded-md border p-4 hover:bg-gray-50">
														<FormControl>
															<Checkbox
																checked={field.value?.includes(item.id)}
																className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white"
																onCheckedChange={checked => {
																	return checked
																		? field.onChange([
																				...(field.value || []),
																				item.id,
																			])
																		: field.onChange(
																				(field.value || []).filter(
																					v => v !== item.id
																				)
																			);
																}}
															/>
														</FormControl>
														<FormLabel className="cursor-pointer text-sm font-normal">
															{item.label}
														</FormLabel>
													</FormItem>
												)}
											/>
										))}
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="deskripsiLainnya"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="font-medium">Deskripsi Tambahan (Opsional)</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Ceritakan lebih detail..."
											className="min-h-[100px] resize-y"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="tingkatKeparahan"
							render={({ field }) => (
								<FormItem className="space-y-3">
									<FormLabel className="font-medium">Tingkat Keparahan*</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="flex gap-4 sm:gap-8"
										>
											<FormItem className="flex items-center space-y-0 space-x-2">
												<FormControl>
													<RadioGroupItem
														value="ringan"
														className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white"
													/>
												</FormControl>
												<FormLabel className="font-normal">Ringan</FormLabel>
											</FormItem>
											<FormItem className="flex items-center space-y-0 space-x-2">
												<FormControl>
													<RadioGroupItem
														value="sedang"
														className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white"
													/>
												</FormControl>
												<FormLabel className="font-normal">Sedang</FormLabel>
											</FormItem>
											<FormItem className="flex items-center space-y-0 space-x-2">
												<FormControl>
													<RadioGroupItem
														value="berat"
														className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white"
													/>
												</FormControl>
												<FormLabel className="font-normal">Berat</FormLabel>
											</FormItem>
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="sejakKapan"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="font-medium">Gejala Dirasakan Sejak Kapan?*</FormLabel>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Pilih durasi..." />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="hari_ini">Hari ini</SelectItem>
											<SelectItem value="kemarin">Kemarin</SelectItem>
											<SelectItem value="2_3_hari">2-3 hari lalu</SelectItem>
											<SelectItem value="lebih_3_hari">Lebih dari 3 hari lalu</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						{isLoading && (
							<Alert>
								<Loader2 className="h-4 w-4 animate-spin" />
								<AlertDescription>Sedang mengirim data...</AlertDescription>
							</Alert>
						)}
						{isSuccess && !isLoading && (
							<Alert variant="success">
								<AlertTitle>Berhasil!</AlertTitle>
								<AlertDescription>
									Data Anda sudah diterima. Silakan cek halaman Riwayat & Rekomendasi.
								</AlertDescription>
							</Alert>
						)}
						{errorMessage && !isLoading && (
							<Alert variant="destructive">
								<AlertTitle>Gagal!</AlertTitle>
								<AlertDescription>{errorMessage}</AlertDescription>
							</Alert>
						)}
						<Button
							type="submit"
							size="lg"
							className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 sm:w-auto"
							disabled={isLoading}
						>
							{isLoading ? (
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							) : (
								<Send className="mr-2 h-4 w-4" />
							)}
							{isLoading ? "Mengirim..." : "Kirim & Dapatkan Rekomendasi"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default AnalysisForm;
