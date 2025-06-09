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

	const handleGoogleRegister = () => {
		window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google/redirect`;
	};

	return (
		<Card className="border-emerald-100 shadow-lg">
			<CardHeader>
				<CardTitle className="text-center text-2xl">Daftar Akun</CardTitle>
				<CardDescription className="text-center">
					Silakan isi data di bawah untuk membuat akun baru di Racik
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
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t border-gray-300" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-white px-2 text-gray-500">Atau</span>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<Button
							type="button"
							variant="outline"
							className="col-span-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
							onClick={handleGoogleRegister}
							disabled={isLoading}
							aria-label="Daftar dengan Google"
						>
							<svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								/>
								<path
									fill="currentColor"
									d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								/>
								<path
									fill="currentColor"
									d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								/>
								<path
									fill="currentColor"
									d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								/>
							</svg>
							Daftar dengan Google
						</Button>
						{/* TODO: Implement Facebook login */}
						{/* <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
							<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
							</svg>
							Facebook
						</Button> */}
					</div>
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
