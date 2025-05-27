import { homeFaqs } from "@/constants/homePageData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HomeFaq = () => {
	return (
		<section id="faq" className="bg-white/50 px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-4xl">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
						Pertanyaan yang Sering Diajukan
					</h2>
					<p className="text-lg text-gray-600">Temukan jawaban untuk pertanyaan umum tentang Racik</p>
				</div>
				<Accordion type="single" collapsible className="space-y-4">
					{homeFaqs.map((faq, index) => (
						<AccordionItem
							key={index}
							value={`item-${index}`}
							className="rounded-2xl border border-emerald-100 bg-white px-6 data-[state=open]:border-emerald-200"
						>
							<AccordionTrigger className="py-6 text-left font-semibold text-gray-900 hover:text-emerald-600">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="pb-6 leading-relaxed text-gray-600">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};

export default HomeFaq;
