"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { AlertTriangle, CheckCircle, Eye, Loader2, Send } from "lucide-react";
import useAnalysis from "@/hooks/useAnalysis";
import useDispenser from "@/hooks/useDispenser";
import PageLoader from "@/components/common/PageLoader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
import { DISPENSE_STATUS } from "@/constants/dispenserData";

const AnalysisHistory = () => {
	const [historyData, setHistoryData] = useState([]);
	const [selectedAnalysis, setSelectedAnalysis] = useState(null);
	const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
	const { isLoading: isHistoryLoading, data: dataFromHook, fetchAllAnalyses } = useAnalysis();
	const { status: dispenseStatus, error: dispenseError, performDispense } = useDispenser("dispenser_1");

	useEffect(() => {
		fetchAllAnalyses();
	}, [fetchAllAnalyses]);

	useEffect(() => {
		if (dataFromHook && dataFromHook?.data) {
			setHistoryData(dataFromHook.data);
		} else {
			setHistoryData([]);
		}
	}, [dataFromHook]);

	const handleViewDetails = analysis => {
		const detailForDialog = {
			id: analysis?.id,
			mainSymptom: analysis?.main_symptoms.join(", "),
			analysisDate: analysis?.created_at,
			aiConfidence: analysis?.recommendation?.ai_confidence_level * 100 || "N/A",
			symptomDetails: analysis?.other_description || analysis?.main_symptoms.join(", "),
			recommendationDetails: {
				herbalName: analysis?.recommendation?.recommended_herbal_medicine || "None",
				dosage: analysis?.recommendation?.herbal_medicine_details?.dosage || "-",
				usageRules: analysis?.recommendation?.herbal_medicine_details?.usage_rules || "-",
				benefits: analysis?.recommendation?.herbal_medicine_details?.benefits || "-",
				warnings: analysis?.recommendation?.herbal_medicine_details?.warnings || null,
			},
		};

		setSelectedAnalysis(detailForDialog);
		setIsDetailDialogOpen(true);
	};

	const handleDispenseClick = async () => {
		try {
			if (selectedAnalysis && selectedAnalysis?.recommendationDetails?.herbalName && selectedAnalysis?.id) {
				await performDispense(selectedAnalysis.recommendationDetails.herbalName, selectedAnalysis.id);
			} else {
				throw new Error("Tidak ada rekomendasi jamu yang tersedia untuk dianalisis.");
			}
		} catch (error) {
			toast.error(
				error.message.split("(")[0] || "Terjadi kesalahan saat memproses permintaan. Silakan coba lagi."
			);
		}
	};

	const renderDispenseButton = () => {
		switch (dispenseStatus) {
			case DISPENSE_STATUS.SENDING:
			case DISPENSE_STATUS.PENDING:
			case DISPENSE_STATUS.MAKING:
				return (
					<Button disabled className="w-[180px]">
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						{dispenseStatus === "making" ? "Membuat..." : "Memproses..."}
					</Button>
				);
			case DISPENSE_STATUS.COMPLETED:
				return (
					<div className="flex flex-col items-center text-center">
						<p className="flex items-center font-semibold text-green-600">
							<CheckCircle className="mr-2 h-5 w-5" />
							Jamu Selesai!
						</p>
						<p className="text-xs text-gray-500">Silakan ambil di dispenser.</p>
					</div>
				);
			case DISPENSE_STATUS.ERROR:
				return (
					<div className="flex flex-col items-center text-center">
						<p className="flex items-center font-semibold text-red-600">
							<AlertTriangle className="mr-2 h-5 w-5" />
							Gagal
						</p>
						<p className="text-xs text-red-500">{dispenseError}</p>
						<Button onClick={handleDispenseClick} variant="destructive" size="sm" className="mt-1">
							Coba Lagi
						</Button>
					</div>
				);
			case DISPENSE_STATUS.IDLE:
			default:
				return (
					<Button
						onClick={handleDispenseClick}
						className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
						disabled={selectedAnalysis?.recommendationDetails?.herbalName === "Tidak Ada"}
					>
						<Send className="mr-2 h-4 w-4" />
						Buat Jamu
					</Button>
				);
		}
	};

	if (isHistoryLoading) {
		return <PageLoader />;
	}

	return (
		<>
			<Card className="shadow-md">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-gray-900">Daftar Riwayat</CardTitle>
					<CardDescription>Berikut adalah semua analisis yang pernah Anda lakukan.</CardDescription>
				</CardHeader>
				<CardContent>
					{historyData.length > 0 ? (
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Tanggal Analisis</TableHead>
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
											{new Date(analysis?.created_at).toLocaleDateString("id-ID", {
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</TableCell>
										<TableCell>{analysis?.main_symptoms.join(", ")}</TableCell>
										<TableCell>
											{analysis?.recommendation?.recommended_herbal_medicine || "-"}
										</TableCell>
										<TableCell>
											<Badge variant={analysis?.status === "completed" ? "success" : "warning"}>
												{analysis?.status}
											</Badge>
										</TableCell>
										<TableCell className="space-x-2 text-right">
											<Button
												variant="outline"
												size="sm"
												onClick={() => handleViewDetails(analysis)}
												disabled={!analysis?.recommendation?.recommended_herbal_medicine}
											>
												<Eye className="mr-1 h-4 w-4" /> Detail
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					) : (
						<p className="py-8 text-center text-gray-500">Belum ada riwayat analisis yang tersimpan.</p>
					)}
				</CardContent>
			</Card>
			{selectedAnalysis && selectedAnalysis.recommendationDetails && (
				<Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
					<DialogContent className="overflow-auto sm:max-w-[600px]">
						<DialogHeader>
							<DialogTitle className="text-2xl">
								Detail Rekomendasi untuk "{selectedAnalysis.mainSymptom}"
							</DialogTitle>
							<DialogDescription>
								Tanggal Analisis:{" "}
								{new Date(selectedAnalysis.analysisDate).toLocaleDateString("id-ID", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
								<br />
								Tingkat Kepercayaan AI:{" "}
								{!isNaN(selectedAnalysis.aiConfidence) ? `${selectedAnalysis.aiConfidence}%` : "N/A"}
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<div className="space-y-1">
								<h4 className="text-md font-semibold">Gejala yang Dilaporkan:</h4>
								<p className="rounded-md bg-gray-50 p-3 text-sm text-gray-700">
									{selectedAnalysis.symptomDetails}
								</p>
							</div>
							<hr />
							<div className="space-y-3">
								<h4 className="text-md font-semibold">
									Rekomendasi Jamu:{" "}
									<span className="font-bold text-emerald-600">
										{selectedAnalysis.recommendationDetails.herbalName || "Tidak ada rekomendasi"}
									</span>
								</h4>
								<div>
									<p className="text-sm font-medium text-gray-800">Dosis:</p>
									<p className="text-sm text-gray-600">
										{selectedAnalysis.recommendationDetails.dosage}
									</p>
								</div>
								<div>
									<p className="text-sm font-medium text-gray-800">Aturan Pakai:</p>
									<p className="text-sm text-gray-600">
										{selectedAnalysis.recommendationDetails.usageRules}
									</p>
								</div>
								<div>
									<p className="text-sm font-medium text-gray-800">Khasiat Utama:</p>
									<p className="text-sm text-gray-600">
										{selectedAnalysis.recommendationDetails.benefits}
									</p>
								</div>
								{selectedAnalysis.recommendationDetails.warnings && (
									<div className="mt-2 rounded-md border border-amber-200 bg-amber-50 p-3">
										<p className="text-sm font-medium text-amber-800">Perhatian:</p>
										<p className="text-sm text-amber-700">
											{selectedAnalysis.recommendationDetails.warnings}
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
							{renderDispenseButton()}
						</DialogFooter>
					</DialogContent>
				</Dialog>
			)}
		</>
	);
};

export default AnalysisHistory;
