"use client";

import { format } from "date-fns";
import { id as LocaleID } from "date-fns/locale";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import useConsumptionLog from "@/hooks/useConsumptionLog";
import PageLoader from "@/components/common/PageLoader";

const ConsumptionHistory = () => {
	const { isLoading, logs, error, fetchAllConsumptionLogs } = useConsumptionLog({ autoFetchOnMount: true });

	if (isLoading && logs.length === 0) {
		return <PageLoader />;
	}

	if (error && logs.length === 0) {
		return (
			<section className="space-y-6 py-4 sm:ml-[16rem] sm:py-8 md:space-y-8">
				<Card className="border-red-300 bg-red-50">
					<CardHeader>
						<div className="flex items-center">
							<AlertTriangle className="mr-3 h-6 w-6 text-red-600" />
							<CardTitle className="text-lg font-semibold text-red-800">Terjadi Kesalahan</CardTitle>
						</div>
					</CardHeader>
					<CardContent>
						<p className="text-red-700">
							Gagal memuat jurnal konsumsi: {error.message || "Silakan coba lagi nanti."}
						</p>
						<Button onClick={() => fetchAllConsumptionLogs(true)} className="mt-4" variant="destructive">
							Coba Lagi
						</Button>
					</CardContent>
				</Card>
			</section>
		);
	}

	return (
		<Card className="shadow-md">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-gray-900">Jurnal Konsumsi Anda</CardTitle>
				<CardDescription>Catatan semua jamu yang telah Anda minum.</CardDescription>
			</CardHeader>
			<CardContent>
				{logs.length > 0 ? (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Tanggal & Waktu</TableHead>
								<TableHead>Nama Jamu</TableHead>
								<TableHead>Jumlah</TableHead>
								<TableHead>Catatan</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{logs.map(consumption => (
								<TableRow key={consumption.id}>
									<TableCell className="py-[13px] font-medium">
										{format(new Date(consumption.consumed_at), "dd MMM yyyy, HH:mm", {
											locale: LocaleID,
										})}
									</TableCell>
									<TableCell className="py-[13px]">{consumption.herbal_medicine_name}</TableCell>
									<TableCell>
										{consumption.quantity} {consumption.unit || "porsi"}
									</TableCell>
									<TableCell className="truncate py-[13px] text-sm text-gray-600">
										{consumption.notes || "-"}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				) : (
					<p className="py-8 text-center text-gray-500">Belum ada catatan konsumsi.</p>
				)}
			</CardContent>
		</Card>
	);
};

export default ConsumptionHistory;
