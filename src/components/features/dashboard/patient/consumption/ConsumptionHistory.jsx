"use client";

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { id as LocaleID } from "date-fns/locale";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const mockConsumptionData = [
	{
		id: "cons001",
		namaJamu: "Jahe Hangat",
		tanggalKonsumsi: new Date("2024-05-25T10:00:00"),
		jumlah: "1",
		satuan: "gelas",
		catatan: "Dari rekomendasi AI, setelah sarapan.",
	},
	{
		id: "cons002",
		namaJamu: "Kunyit Asam",
		tanggalKonsumsi: new Date("2024-05-25T15:30:00"),
		jumlah: "100",
		satuan: "ml",
		catatan: "Beli di warung jamu.",
	},
	{
		id: "cons003",
		namaJamu: "Kencur & Madu",
		tanggalKonsumsi: new Date("2024-05-24T08:00:00"),
		jumlah: "1",
		satuan: "sdm",
		catatan: "Untuk batuk.",
	},
];

const ConsumptionHistory = () => {
	const [consumptionData, setConsumptionData] = useState([]);

	// useEffect(() => {
	// 	setConsumptionData(mockConsumptionData);
	// }, []);

	return (
		<Card className="shadow-md">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-gray-900">Jurnal Konsumsi Anda</CardTitle>
				<CardDescription>Catatan semua jamu yang telah Anda minum.</CardDescription>
			</CardHeader>
			<CardContent>
				{consumptionData.length === 0 ? (
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
							{consumptionData.map(entry => (
								<TableRow key={entry.id}>
									<TableCell className="py-[13px] font-medium">
										{format(new Date(entry.tanggalKonsumsi), "dd MMM yyyy, HH:mm", {
											locale: LocaleID,
										})}
									</TableCell>
									<TableCell className="py-[13px]">{entry.namaJamu}</TableCell>
									<TableCell>
										{entry.jumlah} {entry.satuan}
									</TableCell>
									<TableCell className="truncate py-[13px] text-sm text-gray-600">
										{entry.catatan || "-"}
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
