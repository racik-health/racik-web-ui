import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<Card className="border-emerald-100 shadow-lg">
			<CardHeader>
				<CardTitle className="text-center text-2xl">Informasi Pribadi</CardTitle>
				<CardDescription className="text-center">
					Lengkapi data diri Anda untuk pengalaman yang lebih personal
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<form className="space-y-6">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="firstName">Nama Depan</Label>
							<Input
								id="firstName"
								placeholder="Ujang"
								className="border-emerald-200 focus:border-emerald-500"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="lastName">Nama Belakang</Label>
							<Input
								id="lastName"
								placeholder="Ronda"
								className="border-emerald-200 focus:border-emerald-500"
								required
							/>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="ujangronda@gmail.com"
							className="border-emerald-200 focus:border-emerald-500"
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="phone">Nomor Telepon</Label>
						<Input
							id="phone"
							type="tel"
							placeholder="+62 812 3456 7890"
							className="border-emerald-200 focus:border-emerald-500"
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password *</Label>
						<div className="relative">
							<Input
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="Minimal 8 karakter"
								className="border-emerald-200 pr-10 focus:border-emerald-500"
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
						<Label htmlFor="confirmPassword">Konfirmasi Password *</Label>
						<div className="relative">
							<Input
								id="confirmPassword"
								type={showConfirmPassword ? "text" : "password"}
								placeholder="Ulangi password"
								className="border-emerald-200 pr-10 focus:border-emerald-500"
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
							<Checkbox id="terms" className="border-emerald-300 data-[state=checked]:bg-emerald-600" />
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
					>
						Daftar Sekarang
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
