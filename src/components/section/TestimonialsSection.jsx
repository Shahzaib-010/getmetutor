import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Quote, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Before joining Get Me Tutor, my son was really struggling with GCSE Maths and had lost confidence. His tutor explains everything clearly and patiently, and we’ve already seen a big improvement in his results",
    name: "Sarah M.",
    meta: "A-Level Mathematics · Year 13",
    initials: "SM",
  },
  {
    quote:
      "I used to get confused during algebra lessons at school, but my tutor from Get Me Tutor explains everything step by step. Now I understand the topics much better and my grades have improved.",
    name: "Ethan Student-Texas USA",
    meta: "University prep · Economics",
    initials: "JK",
  },
  {
    quote:
      "English was never my strength. The feedback on essays was specific and kind. I finally know what examiners want.",
    name: "Emma L.",
    meta: "GCSE English · Year 11",
    initials: "EL",
  },
  {
    quote:
      "We booked for our daughter's Physics mocks. Her confidence jumped in three weeks and it was worth every session.",
    name: "Priya & Rahul N.",
    meta: "Parents · IB Physics",
    initials: "PN",
  },
   {
    quote:
      "We booked for our daughter's Physics mocks. Her confidence jumped in three weeks and it was worth every session.",
    name: "Priya & Rahul N.",
    meta: "Parents · IB Physics",
    initials: "PN",
  },
  {
    quote:
      "We booked for our daughter's Physics mocks. Her confidence jumped in three weeks and it was worth every session.",
    name: "Priya & Rahul N.",
    meta: "Parents · IB Physics",
    initials: "PN",
  },
  {
    quote:
      "Our son finally stopped dreading Chemistry. The sessions were calm, structured, and focused exactly on the areas he kept losing marks in.",
    name: "Nadia T.",
    meta: "Parent · GCSE Chemistry",
    initials: "NT",
  },
  {
    quote:
      "I liked that every lesson had a clear plan. It never felt random, and my confidence in problem solving improved week by week.",
    name: "Omar H.",
    meta: "IGCSE Maths · Year 10",
    initials: "OH",
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
  const [showMore, setShowMore] = useState(false);
  const [featuredReview, ...supportingReviews] = reviews;
  const primarySupportingReviews = supportingReviews.slice(0, 2);
  const extraSupportingReviews = supportingReviews.slice(2, 4);

  return (
    <section className={`w-full bg-(--color-bg) font-open-sans ${className}`}>
      <div className="mx-auto w-[90%] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary)">
              Testimonials
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-(--color-text) sm:text-4xl">
              Real students. <span className="text-(--color-primary)">Real progress.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
              Learners and parents trust GetmeTutor for clear explanations, structured support,
              and tutors who show up prepared every time.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-gray-200/90 pt-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold tabular-nums text-(--color-text)">4.9</span>
                  <StarRow />
                </div>
                <p className="mt-1 text-xs text-gray-500"> 
Trusted by students & parents in UK, USA, Canada & Australia
</p>
              </div>
              <div className="hidden h-10 w-px bg-gray-200 sm:block" aria-hidden />
              
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-8"
          >
            <div className="grid gap-4 sm:gap-5">
              <motion.article
                variants={item}
                className="group relative flex overflow-hidden rounded-[2rem] border border-(--color-primary)/20 bg-[linear-gradient(180deg,#fff8f2_0%,#ffffff_100%)] p-6 shadow-[0_18px_50px_-24px_rgba(255,98,0,0.25)] transition-shadow duration-300 hover:shadow-[0_24px_64px_-24px_rgba(255,98,0,0.35)] sm:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-(--color-primary)" />
                <Quote
                  className="pointer-events-none absolute right-4 top-4 h-14 w-14 text-(--color-primary)/12 sm:right-6 sm:top-6 sm:h-16 sm:w-16"
                  strokeWidth={1}
                  aria-hidden
                />

                <div className="grid w-full gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-(--color-primary)/15 bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-(--color-primary)">
                      Featured story
                    </div>
                    <StarRow className="mt-5" />
                    <p className="mt-5 max-w-2xl pr-8 text-base leading-8 text-gray-700 sm:pr-10 sm:text-md">
                      "{featuredReview.quote}"
                    </p>
                  </div>

                  <div className="flex flex-col justify-end rounded-[1.5rem] border border-(--color-primary)/10 bg-white/75 p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
                      Student spotlight
                    </p>
                    <div className="mt-5 flex items-center gap-4">
                      <div
                        className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-(--color-primary) text-lg font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] ring-4 ring-white"
                        aria-hidden
                      >
                        {featuredReview.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-base font-semibold text-(--color-text)">
                          {featuredReview.name}
                        </p>
                        <p className="truncate text-sm text-gray-500">{featuredReview.meta}</p>
                      </div>
                    </div>
                    <div className="mt-5 h-px bg-(--color-primary)/10" />
                    <p className="mt-5 text-sm leading-7 text-gray-600">
                      High-impact outcomes, clearer confidence, and tutoring support that feels
                      personal from the first session.
                    </p>
                  </div>
                </div>
              </motion.article>

              <div className="grid gap-4 sm:grid-cols-2">
                {primarySupportingReviews.map((review) => (
                  <motion.article
                    key={review.name}
                    variants={item}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white p-5 shadow-[0_2px_20px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:border-(--color-primary)/25 hover:shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] sm:p-6"
                  >
                    <Quote
                      className="pointer-events-none absolute right-3 top-3 h-9 w-9 text-(--color-primary)/12 transition-colors group-hover:text-(--color-primary)/20 sm:right-4 sm:top-4 sm:h-11 sm:w-11"
                      strokeWidth={1}
                      aria-hidden
                    />

                    <StarRow className="mb-4" />

                    <p className="flex-1 pr-10 text-sm leading-relaxed text-gray-700 sm:pr-12 sm:text-[15px]">
                      "{review.quote}"
                    </p>

                    <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
                      <div
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-(--color-primary) text-xs font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] ring-2 ring-white"
                        aria-hidden
                      >
                        {review.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-(--color-text)">
                          {review.name}
                        </p>
                        <p className="truncate text-xs text-gray-500">{review.meta}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {extraSupportingReviews.length > 0 ? (
                <div className="mt-5">
                  <motion.div
                    initial={false}
                    animate={{
                      height: showMore ? "auto" : 0,
                      opacity: showMore ? 1 : 0,
                      marginTop: showMore ? 20 : 0,
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      {extraSupportingReviews.map((review) => (
                        <motion.article
                          key={review.name}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{
                            opacity: showMore ? 1 : 0,
                            y: showMore ? 0 : 16,
                          }}
                          transition={{ duration: 0.28 }}
                          className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white p-5 shadow-[0_2px_20px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:border-(--color-primary)/25 hover:shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] sm:p-6"
                        >
                          <Quote
                            className="pointer-events-none absolute right-3 top-3 h-9 w-9 text-(--color-primary)/12 transition-colors group-hover:text-(--color-primary)/20 sm:right-4 sm:top-4 sm:h-11 sm:w-11"
                            strokeWidth={1}
                            aria-hidden
                          />

                          <StarRow className="mb-4" />

                          <p className="flex-1 pr-10 text-sm leading-relaxed text-gray-700 sm:pr-12 sm:text-[15px]">
                            "{review.quote}"
                          </p>

                          <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
                            <div
                              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-(--color-primary) text-xs font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] ring-2 ring-white"
                              aria-hidden
                            >
                              {review.initials}
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-(--color-text)">
                                {review.name}
                              </p>
                              <p className="truncate text-xs text-gray-500">{review.meta}</p>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </motion.div>

                  <button
                    type="button"
                    onClick={() => setShowMore((current) => !current)}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-(--color-primary)/20 bg-white px-4 py-2 text-xs font-semibold text-(--color-text) transition hover:border-(--color-primary)/35 hover:text-(--color-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                  >
                    {showMore ? "Show less" : "View more"}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
