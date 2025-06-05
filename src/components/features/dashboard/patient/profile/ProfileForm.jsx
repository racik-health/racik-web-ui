"use client";

import { useEffect, useState } from "react";
import { Loader2, Save } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import useUserProfile from "@/hooks/useUserProfile";
import { formatISODateToYMD } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

const initialFormData = {
	name: "",
	date_of_birth: "",
	allergies: "",
	medical_conditions: "",
};

const ProfileForm = () => {
	const [formData, setFormData] = useState(initialFormData);
	const { isLoading, updateProfile } = useUserProfile();
	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			setFormData({
				name: user?.name || "",
				date_of_birth: formatISODateToYMD(user?.profile?.date_of_birth) || "",
				allergies: user?.profile?.allergies || "",
				medical_conditions: user?.profile?.medical_conditions || "",
			});
		}
	}, [user]);

	const handleChangeInput = e => {
		const { name, value } = e.target;
		setFormData(form => ({ ...form, [name]: value }));
	};

	const handleFormSubmit = async e => {
		e.preventDefault();

		try {
			await updateProfile(user?.id, formData);
			toast.success("Profil berhasil diperbarui!");
		} catch (error) {
			toast.error(error?.message.split("(")[0] || "Terjadi kesalahan saat memperbarui profil.");
		}
	};

	return (
		<Card className="shadow-md">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-gray-900">Informasi Profil</CardTitle>
				<CardDescription>Perbarui data diri dan informasi kesehatan penting Anda.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<form method="POST" onSubmit={handleFormSubmit} className="space-y-6">
					<div className="space-y-2">
						<Label htmlFor="name">Nama Lengkap</Label>
						<Input
							id="name"
							type="text"
							name="name"
							placeholder="Masukkan nama lengkap Anda"
							className="border-emerald-200 focus:border-emerald-500"
							value={formData.name}
							onChange={handleChangeInput}
							required
							autoFocus
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="date_of_birth">Tanggal Lahir</Label>
						<Input
							id="date_of_birth"
							type="date"
							name="date_of_birth"
							placeholder="Masukkan tanggal lahir Anda"
							className="border-emerald-200 focus:border-emerald-500"
							value={formData.date_of_birth}
							onChange={handleChangeInput}
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							name="email"
							placeholder="Masukkan email Anda"
							className="border-emerald-200 focus:border-emerald-500"
							value={user?.email || ""}
							disabled
							readOnly
						/>
						<p className="text-sm text-gray-500">Email tidak dapat diubah.</p>
					</div>
					<div className="space-y-2">
						<Label htmlFor="allergies">Catatan Alergi</Label>
						<Textarea
							id="allergies"
							name="allergies"
							placeholder="Sebutkan alergi yang Anda miliki (makanan, obat, dll.) pisahkan dengan koma."
							className="min-h-[100px] border-emerald-200 focus:border-emerald-500"
							value={formData.allergies}
							onChange={handleChangeInput}
						/>
						<p className="text-sm text-gray-500">Informasi ini penting untuk akurasi rekomendasi.</p>
					</div>
					<div className="space-y-2">
						<Label htmlFor="medical_conditions">Kondisi Medis Lainnya</Label>
						<Textarea
							id="medical_conditions"
							name="medical_conditions"
							placeholder="Sebutkan kondisi medis yang Anda miliki (jika ada) pisahkan dengan koma."
							className="min-h-[100px] border-emerald-200 focus:border-emerald-500"
							value={formData.medical_conditions}
							onChange={handleChangeInput}
						/>
						<p className="text-sm text-gray-500">Contoh: Hipertensi, Diabetes, Asam Lambung.</p>
					</div>
					<Button
						type="submit"
						className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 sm:w-auto"
						disabled={isLoading}
						aria-label="Simpan perubahan profil"
					>
						{isLoading ? (
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						) : (
							<Save className="mr-2 h-4 w-4" />
						)}
						{isLoading ? "Menyimpan..." : "Simpan Perubahan Profil"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};

export default ProfileForm;
