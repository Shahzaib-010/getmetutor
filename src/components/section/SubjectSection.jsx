import React from "react";
import { ArrowRight, BookOpen, GraduationCap, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
	{
		title: "Global curricula",
		description: "Compare pathways across leading academic systems in one guided flow.",
		icon: Globe2,
	},
	{
		title: "Subject depth",
		description: "Explore core disciplines with clear progression from early years to senior grades.",
		icon: BookOpen,
	},
	{
		title: "Grade-by-grade clarity",
		description: "Preview syllabus expectations before choosing the best-fit tutoring plan.",
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
							Discover the syllabus flow before you book tutoring.
						</h2>
						<p className="mt-4 text-base leading-8 text-slate-600">
							Navigate country-specific subjects, compare progression by grade, and understand what
							students are expected to master at every stage.
						</p>
						<Link
							to="/syllabus"
							className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-500"
						>
							Explore syllabus
							<ArrowRight size={16} />
						</Link>
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
