import { Users, Heart, Award, Clock } from "lucide-react";

const HomeStats = () => {
	const stats = [
		{
			icon: Users,
			value: "500+",
			label: "Pengguna Aktif",
			description: "Telah mempercayai Racik",
		},
		{
			icon: Heart,
			value: "96%",
			label: "Tingkat Kepuasan",
			description: "Pengguna merasa puas",
		},
		{
			icon: Award,
			value: "10+",
			label: "Resep Jamu",
			description: "Tersedia dalam database",
		},
		{
			icon: Clock,
			value: "24/7",
			label: "Layanan",
			description: "Siap melayani kapan saja",
		},
	];

	return (
		<section className="bg-white/50 px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
						Dipercaya oleh Ribuan Pengguna
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-600">
						Bergabunglah dengan komunitas yang telah merasakan manfaat teknologi Racik
					</p>
				</div>
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					{stats.map((stat, index) => (
						<div key={index} className="group text-center">
							<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 transition-transform duration-300 group-hover:scale-110">
								<stat.icon className="h-8 w-8 text-white" />
							</div>
							<div className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">{stat.value}</div>
							<div className="mb-1 text-lg font-semibold text-emerald-600">{stat.label}</div>
							<div className="text-sm text-gray-600">{stat.description}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeStats;
