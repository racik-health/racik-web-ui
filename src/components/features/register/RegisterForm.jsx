import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const initialFormData = {
	name: "",
	email: "",
	phone: "",
	password: "",
	password_confirmation: "",
};

const RegisterForm = () => {
	const [formData, setFormData] = useState(initialFormData);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const { isLoading, register } = useAuth();
	const navigate = useNavigate();

	const handleChangeInput = e => {
		const { name, value } = e.target;
		setFormData(form => ({ ...form, [name]: value }));
	};

	const handleFormSubmit = async e => {
		e.preventDefault();

		try {
			await register(formData);
			setFormData(initialFormData);
			toast.success("Pendaftaran berhasil! Silakan masuk ke akun Anda.");
			navigate("/login", { replace: true });
		} catch (error) {
			toast.error(error.message.split("(")[0] || "Terjadi kesalahan saat mendaftar. Silakan coba lagi.");
		}
	};

	return (
		<Card className="border-emerald-100 shadow-lg">
			<CardHeader>
				<CardTitle className="text-center text-2xl">Informasi Pribadi</CardTitle>
				<CardDescription className="text-center">
					Lengkapi data diri Anda untuk pengalaman yang lebih personal
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<form className="space-y-6" method="POST" onSubmit={handleFormSubmit}>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="col-span-2 space-y-2">
							<Label htmlFor="name">Nama Lengkap</Label>
							<Input
								type="text"
								id="name"
								name="name"
								placeholder="Ujang Ronda"
								className="border-emerald-200 focus:border-emerald-500"
								value={formData.name}
								onChange={handleChangeInput}
								required
								autoFocus
							/>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							type="email"
							id="email"
							name="email"
							placeholder="ujangronda@gmail.com"
							className="border-emerald-200 focus:border-emerald-500"
							value={formData.email}
							onChange={handleChangeInput}
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="phone">Nomor Telepon</Label>
						<Input
							type="tel"
							id="phone"
							name="phone"
							placeholder="+62 812 3456 7890"
							className="border-emerald-200 focus:border-emerald-500"
							value={formData.phone}
							onChange={handleChangeInput}
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<div className="relative">
							<Input
								type={showPassword ? "text" : "password"}
								id="password"
								name="password"
								placeholder="Minimal 8 karakter"
								className="border-emerald-200 pr-10 focus:border-emerald-500"
								value={formData.password}
								onChange={handleChangeInput}
								required
							/>
							<Button
								type="button"
								variant="ghost"
								size="sm"
								className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<EyeOff className="h-4 w-4 text-gray-400" />
								) : (
									<Eye className="h-4 w-4 text-gray-400" />
								)}
							</Button>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password_confirmation">Konfirmasi Password</Label>
						<div className="relative">
							<Input
								type={showConfirmPassword ? "text" : "password"}
								name="password_confirmation"
								id="password_confirmation"
								placeholder="Ulangi password"
								className="border-emerald-200 pr-10 focus:border-emerald-500"
								value={formData.password_confirmation}
								onChange={handleChangeInput}
								required
							/>
							<Button
								type="button"
								variant="ghost"
								size="sm"
								className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
							>
								{showConfirmPassword ? (
									<EyeOff className="h-4 w-4 text-gray-400" />
								) : (
									<Eye className="h-4 w-4 text-gray-400" />
								)}
							</Button>
						</div>
					</div>
					<div className="space-y-4">
						<div className="flex items-center space-x-3">
							<Checkbox
								id="terms"
								className="border-emerald-300 data-[state=checked]:bg-emerald-600"
								aria-describedby="terms-description"
								required
							/>
							<div className="text-sm">
								<label htmlFor="terms" className="cursor-pointer text-gray-700">
									Saya menyetujui{" "}
									<Link to="#" className="text-emerald-600 underline hover:text-emerald-700">
										Syarat dan Ketentuan
									</Link>{" "}
									serta{" "}
									<Link to="#" className="text-emerald-600 underline hover:text-emerald-700">
										Kebijakan Privasi
									</Link>{" "}
									Racik
								</label>
							</div>
						</div>
						<div className="flex items-center space-x-3">
							<Checkbox
								id="newsletter"
								className="border-emerald-300 data-[state=checked]:bg-emerald-600"
							/>
							<label htmlFor="newsletter" className="cursor-pointer text-sm text-gray-700">
								Saya ingin menerima newsletter dan update produk dari Racik
							</label>
						</div>
					</div>
					<Button
						type="submit"
						className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 py-6 text-lg hover:from-emerald-600 hover:to-teal-700"
						disabled={isLoading}
						aria-label="Daftar Sekarang"
					>
						{isLoading ? "Memproses..." : "Daftar Sekarang"}
					</Button>
					<div className="text-center">
						<p className="text-gray-600">
							Sudah punya akun?{" "}
							<Link to="/login" className="font-medium text-emerald-600 hover:text-emerald-700">
								Masuk di sini
							</Link>
						</p>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default RegisterForm;
