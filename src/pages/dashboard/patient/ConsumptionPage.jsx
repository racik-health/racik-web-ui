import { History } from "lucide-react";
import PageSEO from "@/components/common/PageSEO";
import ConsumptionHistory from "@/components/features/dashboard/patient/consumption/ConsumptionHistory";

const ConsumptionPage = () => {
	return (
		<section className="space-y-6 py-4 sm:py-8 md:space-y-8 lg:ml-[16rem]">
			<PageSEO />
			<div className="rounded-xl border border-green-200 bg-green-50 p-4 shadow sm:p-6">
				<div className="flex items-start space-x-3 sm:space-x-4">
					<div className="mt-1 flex-shrink-0">
						<History className="h-8 w-8 text-green-600 sm:h-10 sm:w-10" />
					</div>
					<div>
						<h2 className="text-xl font-semibold text-green-800 sm:text-2xl">Jurnal Konsumsi</h2>
						<p className="mt-1 text-sm leading-relaxed text-green-700 sm:text-base">
							Lacak riwayat konsumsi jamu Anda di sini.
						</p>
					</div>
				</div>
			</div>
			<ConsumptionHistory />
		</section>
	);
};

export default ConsumptionPage;
