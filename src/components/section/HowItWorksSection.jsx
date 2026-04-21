import React from "react";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";

const steps = [
	{
		n: "01",
		title: "Book a Free Trial",
		body: "Schedule a session in seconds or message us on WhatsApp.",
		icon: BookOpen,
	},
	{
		n: "02",
		title: "Meet Your Tutor",
		body: "We match your child with the right tutor based on subject and level.",
		icon: Sparkles,
	},
	{
		n: "03",
		title: "Start Learning",
		body: "Continue with regular 1-to-1 sessions and track progress.",
		icon: GraduationCap,
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.12, delayChildren: 0.08 },
	},
};

const item = {
	hidden: { opacity: 0, y: 28 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function HowItWorksSection({ className = "" }) {
	return (
		<section
			id="howitworks"
			className={`relative overflow-hidden bg-black font-open-sans text-white ${className}`}
		>
			{/* Ambient accents */}
			<div
				className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-white/6 blur-[100px]"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-white/5 blur-[90px]"
				aria-hidden
			/>

			<div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.35 }}
					transition={{ duration: 0.55 }}
					className="mx-auto max-w-3xl text-center"
				>
					<p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
						How It Works
					</p>
					<h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.35rem] md:leading-tight">
						Get started in 3 simple steps
					</h2>
					<p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
						Get started in 3 simple steps
					</p>
				</motion.div>

				{/* Desktop: connected row */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
					className="relative mt-14 md:mt-16"
				>
					{/* Connector line (md+) */}
					<div
						className="pointer-events-none absolute left-[8%] right-[8%] top-11 hidden h-px md:block"
						aria-hidden
					>
						<div className="h-full bg-linear-to-r from-transparent via-white/15 to-transparent" />
						<motion.div
							className="absolute inset-y-0 left-0 w-1/3 origin-left bg-linear-to-r from-white/55 to-transparent"
							initial={{ scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
						/>
					</div>

					<div className="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
						{steps.map((step, i) => {
							const Icon = step.icon;
							return (
								<motion.article
									key={step.n}
									variants={item}
									className="group relative flex flex-col"
								>
									{/* Mobile vertical connector */}
									{i < steps.length - 1 && (
										<div
											className="absolute left-7 top-18 h-[calc(100%+2rem)] w-px bg-linear-to-b from-(--color-primary)/40 via-white/10 to-transparent md:hidden"
											aria-hidden
										/>
									)}

									<div className="relative flex flex-1 flex-col rounded-2xl border border-white/8 bg-[#141414] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition-all duration-300 hover:border-(--color-primary)/35 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)] sm:p-7">
										{/* Step index + icon */}
										<div className="flex items-start justify-between gap-4">
											<div className="flex items-center gap-3">
												<span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/6 text-lg font-bold tabular-nums text-[var(--color-primary)]  shadow-[0_0_20px_-6px_rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:scale-[1.03]">
													{step.n}
												</span>
												<div
													className="hidden h-10 w-px bg-linear-to-b from-white/35 to-transparent sm:block"
													aria-hidden
												/>
											</div>
											<Icon
												className="h-5 w-5 text-white/65 transition-colors group-hover:text-white"
												strokeWidth={1.75}
												aria-hidden
											/>
										</div>

										<h3 className="mt-6 text-lg font-semibold leading-snug text-[var(--color-primary)] sm:text-xl">
											{step.title}
										</h3>
										<p className="mt-3 text-sm leading-relaxed text-white/55">
											{step.body}
										</p>

										{/* Micro detail: bottom accent bar */}
										<div className="mt-6 flex items-center gap-2">
											<span className="h-px flex-1 bg-linear-to-r from-white/40 to-transparent" />
											<ArrowRight className="h-4 w-4 shrink-0 text-white/55 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white/80 group-hover:opacity-100" />
										</div>
									</div>
								</motion.article>
							);
						})}
					</div>
				</motion.div>

				{/* CTA below steps */}
				<div className="mt-10 text-center">
					<a
						href="/demo"
						className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
					>
						Book Free Trial
					</a>
				</div>
			</div>
		</section>
	);
}
