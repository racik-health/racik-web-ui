"use client";

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { id as LocaleID } from "date-fns/locale";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import useConsumptionLog from "@/hooks/useConsumptionLog";
import PageLoader from "@/components/common/PageLoader";

const ConsumptionHistory = () => {
	const [consumptionData, setConsumptionData] = useState([]);
	const { isLoading, data: dataFromHook, fetchAllConsumptionLogs } = useConsumptionLog();

	useEffect(() => {
		fetchAllConsumptionLogs();
	}, [fetchAllConsumptionLogs]);

	useEffect(() => {
		if (dataFromHook && dataFromHook?.data) {
			setConsumptionData(dataFromHook.data);
		} else {
			setConsumptionData([]);
		}
	}, [dataFromHook]);

	if (isLoading && consumptionData.length === 0) {
		return <PageLoader />;
	}

	return (
		<Card className="shadow-md">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-gray-900">Jurnal Konsumsi Anda</CardTitle>
				<CardDescription>Catatan semua jamu yang telah Anda minum.</CardDescription>
			</CardHeader>
			<CardContent>
				{!isLoading && consumptionData.length === 0 ? (
					<p className="py-8 text-center text-gray-500">Belum ada catatan konsumsi.</p>
				) : (
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
							{consumptionData.map(consumption => (
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
				)}
			</CardContent>
		</Card>
	);
};

export default ConsumptionHistory;
