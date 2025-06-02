import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const initialFormData = {
	email: "",
	password: "",
};

const LoginForm = () => {
	const [formData, setFormData] = useState(initialFormData);
	const [showPassword, setShowPassword] = useState(false);
	const { isLoading, login } = useAuth();
	const navigate = useNavigate();

	const handleChangeInput = e => {
		const { name, value } = e.target;
		setFormData(form => ({ ...form, [name]: value }));
	};

	const handleFormSubmit = async e => {
		e.preventDefault();

		try {
			const result = await login(formData);
			console.log("Login successful:", result);
			navigate("/patient", { replace: true });
		} catch (error) {
			console.error("Login failed:", error);
		} finally {
			setFormData(initialFormData);
		}
	};

	return (
		<Card className="border-emerald-100 shadow-lg">
			<CardHeader>
				<CardTitle className="text-center text-2xl">Masuk Akun</CardTitle>
				<CardDescription className="text-center">
					Gunakan email dan password untuk mengakses akun Anda
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="space-y-6" method="POST" onSubmit={handleFormSubmit}>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							name="email"
							placeholder="asepbensin@gmail"
							className="border-emerald-200 focus:border-emerald-500"
							value={formData.email}
							onChange={handleChangeInput}
							required
							autoFocus
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<div className="relative">
							<Input
								id="password"
								type={showPassword ? "text" : "password"}
								name="password"
								placeholder="Masukkan password Anda"
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
								onClick={() => setShowPassword(prev => !prev)}
								aria-label="Toggle password visibility"
							>
								{showPassword ? (
									<EyeOff className="h-4 w-4 text-gray-400" />
								) : (
									<Eye className="h-4 w-4 text-gray-400" />
								)}
							</Button>
						</div>
					</div>
					<Button
						type="submit"
						className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 py-6 text-lg hover:from-emerald-600 hover:to-teal-700"
						disabled={isLoading}
					>
						{isLoading ? "Memproses..." : "Masuk"}
					</Button>
					<div className="text-center">
						<p className="text-gray-600">
							Belum punya akun?{" "}
							<Link to="/register" className="font-medium text-emerald-600 hover:text-emerald-700">
								Daftar sekarang
							</Link>
						</p>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default LoginForm;
