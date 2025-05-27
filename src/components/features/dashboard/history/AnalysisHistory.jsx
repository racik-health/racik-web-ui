"use client";

import React, { useState, useEffect } from "react";
import { Eye, Trash2, Download } from "lucide-react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";

const mockHistoryData = [
	{
		id: "analysis001",
		tanggalAnalisis: "2024-05-25",
		gejalaUtama: "Pusing, Mual",
		rekomendasiJamu: "Jahe Hangat",
		tingkatKepercayaan: "Tinggi (90%)",
		statusAnalisis: "Selesai",
		detailGejala:
			"Pusing berputar terutama saat bangun tidur, disertai mual ringan tanpa muntah. Dirasakan sejak kemarin pagi.",
		detailRekomendasi: {
			namaJamu: "Jahe Hangat",
			dosis: "1 gelas, 2 kali sehari setelah makan.",
			aturanPakai: "Seduh 1 ruas jahe geprek dengan air panas, tambahkan sedikit gula aren jika suka.",
			khasiat: "Membantu meredakan mual, menghangatkan tubuh, dan melancarkan peredaran darah.",
			peringatan: "Hati-hati bagi penderita maag.",
		},
	},
	{
		id: "analysis002",
		tanggalAnalisis: "2024-05-20",
		gejalaUtama: "Batuk, Pilek",
		rekomendasiJamu: "Kencur & Madu",
		tingkatKepercayaan: "Sedang (75%)",
		statusAnalisis: "Selesai",
		detailGejala: "Batuk kering disertai pilek dan sedikit demam. Sudah 2 hari.",
		detailRekomendasi: {
			namaJamu: "Kencur & Madu",
			dosis: "1 sendok teh, 3 kali sehari.",
			aturanPakai: "Parut kencur, peras airnya, campurkan dengan madu murni.",
			khasiat: "Meredakan batuk, melegakan tenggorokan, dan meningkatkan daya tahan tubuh.",
			peringatan: "Tidak untuk anak di bawah 1 tahun.",
		},
	},
	{
		id: "analysis003",
		tanggalAnalisis: "2024-05-26",
		gejalaUtama: "Nyeri Perut",
		rekomendasiJamu: null,
		tingkatKepercayaan: null,
		statusAnalisis: "Menunggu Hasil",
		detailGejala: "Nyeri di bagian perut bawah, hilang timbul.",
		detailRekomendasi: null,
	},
];

const AnalysisHistory = () => {
	const [historyData, setHistoryData] = useState([]);
	const [selectedAnalysis, setSelectedAnalysis] = useState(null);
	const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);

	useEffect(() => {
		setHistoryData(mockHistoryData);
	}, []);

	const handleViewDetails = analysis => {
		setSelectedAnalysis(analysis);
		setIsDetailDialogOpen(true);
	};

	if (historyData.length === 0) {
		return (
			<Card>
				<CardContent className="pt-6">
					<p className="text-center text-gray-500">Belum ada riwayat analisis yang tersimpan.</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<>
			<Card className="shadow-md">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-gray-900">Daftar Riwayat</CardTitle>
					<CardDescription>Berikut adalah semua analisis yang pernah Anda lakukan.</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[150px]">Tanggal Analisis</TableHead>
								<TableHead>Gejala Utama</TableHead>
								<TableHead>Rekomendasi Jamu</TableHead>
								<TableHead>Status</TableHead>
								<TableHead className="w-[200px] text-right">Aksi</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{historyData.map(analysis => (
								<TableRow key={analysis.id}>
									<TableCell className="font-medium">
										{new Date(analysis.tanggalAnalisis).toLocaleDateString("id-ID", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</TableCell>
									<TableCell>{analysis.gejalaUtama}</TableCell>
									<TableCell>{analysis.rekomendasiJamu || "-"}</TableCell>
									<TableCell>
										<Badge variant={analysis.statusAnalisis === "Selesai" ? "success" : "warning"}>
											{analysis.statusAnalisis}
										</Badge>
									</TableCell>
									<TableCell className="space-x-2 text-right">
										<Button
											variant="outline"
											size="sm"
											onClick={() => handleViewDetails(analysis)}
											disabled={!analysis.rekomendasiJamu}
										>
											<Eye className="mr-1 h-4 w-4" /> Detail
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			{selectedAnalysis && selectedAnalysis.detailRekomendasi && (
				<Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
					<DialogContent className="sm:max-w-[600px]">
						<DialogHeader>
							<DialogTitle className="text-2xl">
								Detail Rekomendasi untuk "{selectedAnalysis.gejalaUtama}"
							</DialogTitle>
							<DialogDescription>
								Tanggal Analisis:{" "}
								{new Date(selectedAnalysis.tanggalAnalisis).toLocaleDateString("id-ID", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
								<br />
								Tingkat Kepercayaan AI: {selectedAnalysis.tingkatKepercayaan}
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<div className="space-y-1">
								<h4 className="text-md font-semibold">Gejala yang Dilaporkan:</h4>
								<p className="rounded-md bg-gray-50 p-3 text-sm text-gray-700">
									{selectedAnalysis.detailGejala}
								</p>
							</div>
							<hr />
							<div className="space-y-3">
								<h4 className="text-md font-semibold">
									Rekomendasi Jamu:{" "}
									<span className="font-bold text-emerald-600">
										{selectedAnalysis.detailRekomendasi.namaJamu}
									</span>
								</h4>
								<div>
									<p className="text-sm font-medium text-gray-800">Dosis:</p>
									<p className="text-sm text-gray-600">{selectedAnalysis.detailRekomendasi.dosis}</p>
								</div>
								<div>
									<p className="text-sm font-medium text-gray-800">Aturan Pakai:</p>
									<p className="text-sm text-gray-600">
										{selectedAnalysis.detailRekomendasi.aturanPakai}
									</p>
								</div>
								<div>
									<p className="text-sm font-medium text-gray-800">Khasiat Utama:</p>
									<p className="text-sm text-gray-600">
										{selectedAnalysis.detailRekomendasi.khasiat}
									</p>
								</div>
								{selectedAnalysis.detailRekomendasi.peringatan && (
									<div className="mt-2 rounded-md border border-amber-200 bg-amber-50 p-3">
										<p className="text-sm font-medium text-amber-800">Perhatian:</p>
										<p className="text-sm text-amber-700">
											{selectedAnalysis.detailRekomendasi.peringatan}
										</p>
									</div>
								)}
							</div>
						</div>
						<DialogFooter className="sm:justify-start">
							<DialogClose asChild>
								<Button type="button" variant="secondary">
									Tutup
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			)}
		</>
	);
};

export default AnalysisHistory;
