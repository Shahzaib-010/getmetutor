import React from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "I went from barely passing to an A in Maths. My tutor explained topics the way my brain actually works—not just the textbook version.",
    name: "Sarah M.",
    meta: "A-Level Mathematics · Year 13",
    initials: "SM",
  },
  {
    quote:
      "Scheduling around a part-time job was impossible until this. Sessions are flexible and I always get prep notes before class.",
    name: "James K.",
    meta: "University prep · Economics",
    initials: "JK",
  },
  {
    quote:
      "English was never my strength. The feedback on essays was specific and kind—I finally know what examiners want.",
    name: "Emma L.",
    meta: "GCSE English · Year 11",
    initials: "EL",
  },
  {
    quote:
      "We booked for our daughter’s Physics mocks. Her confidence jumped in three weeks; worth every session.",
    name: "Priya & Rahul N.",
    meta: "Parents · IB Physics",
    initials: "PN",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function StarRow({ className = "" }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-(--color-primary) text-(--color-primary) sm:h-4 sm:w-4"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection({ className = "" }) {
  return (
    <section
      className={`w-full bg-(--color-bg) font-open-sans ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left — editorial intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary)"
            >
              Testimonials
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-(--color-text) sm:text-4xl">
              Real students.{" "}
              <span className="text-(--color-primary)">Real progress.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
              Learners and parents trust GetmeTutor for clear explanations, structured
              support, and tutors who show up prepared—every time.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-gray-200/90 pt-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold tabular-nums text-(--color-text)">
                    4.9
                  </span>
                  <StarRow />
                </div>
                <p className="mt-1 text-xs text-gray-500">Average session rating</p>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden sm:block" aria-hidden />
              <div>
                <p className="text-3xl font-bold tabular-nums text-(--color-text)">
                  1,200+
                </p>
                <p className="mt-1 text-xs text-gray-500">Reviews from learners</p>
              </div>
            </div>
          </motion.div>

          {/* Right — cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-8"
          >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {reviews.map((r) => (
                <motion.article
                  key={r.name}
                  variants={item}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white p-5 shadow-[0_2px_20px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:border-(--color-primary)/25 hover:shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] sm:p-6"
                >
                  <Quote
                    className="pointer-events-none absolute right-3 top-3 h-9 w-9 text-(--color-primary)/12 transition-colors group-hover:text-(--color-primary)/20 sm:right-4 sm:top-4 sm:h-11 sm:w-11"
                    strokeWidth={1}
                    aria-hidden
                  />

                  <StarRow className="mb-4" />

                  <p className="relative z-1 flex-1 pr-10 text-sm leading-relaxed text-gray-700 sm:pr-12 sm:text-[15px] sm:leading-relaxed">
                    “{r.quote}”
                  </p>

                  <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
                    <div
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-(--color-primary) text-xs font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] ring-2 ring-white"
                      aria-hidden
                    >
                      {r.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-(--color-text)">
                        {r.name}
                      </p>
                      <p className="truncate text-xs text-gray-500">{r.meta}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
