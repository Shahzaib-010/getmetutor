import React from "react";
import { ArrowRight, BookOpen, GraduationCap, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const highlights = [
	{
		title: "UK USA Canada Coverage",
		description: "Aligned with GCSE A Level and K 12 standards.",
		icon: Globe2,
	},
	{
		title: "All Core Subjects",
		description: "Maths, English , Science, Physics , Chemistry and more.",
		icon: BookOpen,
	},
	{
		title: "Clear Learning Path",
		description: "From early years to advanced levels with structured progression.",
		icon: GraduationCap,
	},
];

function SubjectSection() {
	// WhatsApp contact used for card clicks (same as WhatsAppButton)
	const phone = "+923130672552";
	const defaultMessage = "Hi, I want to book a demo";

	return (
		<section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
			<div className="mx-auto w-[90%] overflow-hidden rounded-4xl border border-slate-200 bg-[linear-gradient(135deg,#fff8f1_0%,#ffffff_42%,#f8fafc_100%)] p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)] sm:p-8 lg:p-10">
				<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
					<div className="max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
							Curriculum support
						</p>
						<h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
							Explore UK, USA & Canadian Curriculum Before You Book a Tutor

						</h2>
						<p className="mt-4 pb-8 text-base leading-8 text-slate-600">
							Understand what your child will learn at every stage from early years to GCSE A Levels and K 12. Compare subjects grade levels and exam boards before choosing the right tutor.

						</p>
						<Button to="/demo" text="Book Free Trial" />
					</div>

					<div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
						{highlights.map(({ title, description, icon: Icon }) => {
							// create a contextual message that includes the subject title
							const message = `${defaultMessage} - I'm interested in ${title}`;
							const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

							return (
								<a
									key={title}
									href={waUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="group block rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm cursor-pointer no-underline focus:outline-none focus:ring-2 focus:ring-orange-400 transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-md"
									aria-label={`Chat on WhatsApp about ${title}`}
								>
									<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-colors duration-200 group-hover:bg-orange-100">
										<Icon size={20} />
									</span>
									<h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
									<p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default SubjectSection;
