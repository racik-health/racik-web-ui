"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import toast from "react-hot-toast";
import { diseasesToAnalyze, severityLevels, symptomDuration } from "@/constants/analysisPageData";
import useAnalysis from "@/hooks/useAnalysis";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const initialFormData = {
	main_symptoms: [],
	other_description: "",
	severity_level: "",
	symptom_duration: "",
};

const AnalysisForm = () => {
	const [formData, setFormData] = useState(initialFormData);
	const { isLoading, performCreateAnalysis } = useAnalysis();

	const handleCheckboxChange = (symptomValue, checked) => {
		setFormData(form => {
			const updatedSymptoms = checked
				? [...form.main_symptoms, symptomValue]
				: form.main_symptoms.filter(symptom => symptom !== symptomValue);
			return { ...form, main_symptoms: updatedSymptoms };
		});
	};

	const handleChangeInput = e => {
		const { name, value } = e.target;
		setFormData(form => ({ ...form, [name]: value }));
	};

	const handleSeverityChange = value => {
		setFormData(form => ({ ...form, severity_level: value }));
	};

	const handleDurationChange = value => {
		setFormData(form => ({ ...form, symptom_duration: value }));
	};

	const handleFormSubmit = async e => {
		e.preventDefault();

		if (formData.main_symptoms.length === 0) {
			toast.error("Silakan pilih setidaknya satu gejala utama.");
			return;
		}

		if (!formData.severity_level) {
			toast.error("Silakan pilih tingkat keparahan.");
			return;
		}

		if (!formData.symptom_duration) {
			toast.error("Silakan pilih durasi gejala.");
			return;
		}

		try {
			await performCreateAnalysis(formData);
			toast.success("Analisis berhasil dibuat! Tunggu rekomendasi jamu Anda.");
		} catch (error) {
			toast.error(error?.message.split("(")[0] || "Terjadi kesalahan saat membuat analisis.");
		} finally {
			setFormData(initialFormData);
		}
	};

	return (
		<Card className="w-full shadow-sm">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-gray-900">Mulai Analisis Baru</CardTitle>
				<CardDescription>
					Deskripsikan keluhan Anda untuk mendapatkan rekomendasi jamu berbasis AI.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form method="POST" className="space-y-6" onSubmit={handleFormSubmit}>
					<div className="space-y-2">
						<div className="mb-4">
							<p className="text-base font-medium">Gejala Utama</p>
							<p className="text-sm text-gray-500">
								Pilih satu atau lebih gejala yang paling Anda rasakan.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
							{diseasesToAnalyze.map(disease => (
								<div
									key={disease.id}
									className="flex items-center space-y-0 space-x-3 rounded-md border border-emerald-200 p-4 hover:bg-gray-50 focus:border-emerald-500"
								>
									<Checkbox
										id={disease.id}
										name="main_symptoms[]"
										className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white"
										value={disease.label}
										checked={formData.main_symptoms.includes(disease.label)}
										onCheckedChange={checked => handleCheckboxChange(disease.label, checked)}
									/>
									<Label className="cursor-pointer text-sm font-normal" htmlFor={disease.id}>
										{disease.label}
									</Label>
								</div>
							))}
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="other_description">Deskripsi Tambahan (Opsional)</Label>
						<Textarea
							id="other_description"
							name="other_description"
							className="min-h-[100px] border-emerald-200 focus:border-emerald-500"
							placeholder="Ceritakan lebih detail tentang gejala Anda..."
							value={formData.other_description}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="space-y-2">
						<p className="text-base font-medium">Tingkat Keparahan</p>
						<RadioGroup
							className="flex gap-4 sm:gap-8"
							value={formData.severity_level}
							onValueChange={handleSeverityChange}
						>
							{severityLevels.map(level => (
								<div className="flex items-center space-y-0 space-x-4" key={level.id}>
									<RadioGroupItem
										id={level.id}
										name="severity_level"
										className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white"
										value={level.value}
									/>
									<Label className="font-normal" htmlFor={level.id}>
										{level.label}
									</Label>
								</div>
							))}
						</RadioGroup>
					</div>
					<div className="space-y-2">
						<Label htmlFor="symptom_duration">Gejala Dirasakan Sejak Kapan</Label>
						<Select value={formData.symptom_duration} onValueChange={handleDurationChange}>
							<SelectTrigger className="w-[180px] border border-emerald-200 focus:border-emerald-500">
								<SelectValue placeholder="Pilih durasi..." />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup name="symptom_duration">
									<SelectLabel>Durasi Gejala</SelectLabel>
									{symptomDuration.map(duration => (
										<SelectItem value={duration.value} key={duration.id}>
											{duration.label}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
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
			</CardContent>
		</Card>
	);
};

export default AnalysisForm;
