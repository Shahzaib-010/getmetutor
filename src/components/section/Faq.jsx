import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";

const ORANGE = "#E94D35";

export default function Faq({
  title = "Frequently Asked Questions",
  subtitle = "Our learners have used Tutory to transition careers, secure promotions, and break into competitive industries.",
  items,
  className = "bg-[var(--color-bg)]",
}) {
  const data = useMemo(
    () =>
      Array.isArray(items) && items.length
        ? items
        : [
            {
              q: "What types of courses do you offer?",
              a: "We offer skill-based courses across technology, design, and business—built with real-world projects and modern workflows.",
            },
            {
              q: "Are the courses beginner-friendly?",
              a: "Yes. Each course is structured from fundamentals to advanced topics, with guided exercises and clear milestones.",
            },
            {
              q: "How do I access the courses after enrolling?",
              a: "After enrollment, you’ll get instant access from your dashboard on desktop and mobile—anytime, anywhere.",
            },
            {
              q: "Are the courses self-paced?",
              a: "Most courses are self‑paced with suggested weekly plans so you can move faster or slower as needed.",
            },
            {
              q: "Do I receive a certificate after completion?",
              a: "Yes, you'll receive a certificate of completion after successfully finishing a course, which you can share on your resume or social profiles.",
            },
          ],
    [items]
  );


  const [openIdx, setOpenIdx] = useState(4);

  return (
    <section className={`w-full font-open-sans ${className}`}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 md:px-10 py-12 sm:py-14 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl sm:text-[28px] md:text-3xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-[13px] leading-relaxed text-gray-500 max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
          {data.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className={[
                  "rounded-xl bg-white/80 supports-backdrop-filter:bg-white/65 backdrop-blur-md",
                  "border border-gray-200/70 shadow-[0_8px_30px_rgba(15,23,42,0.06)]",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx((prev) => (prev === idx ? -1 : idx))}
                  className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-3.5 sm:py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={[
                        "grid place-items-center h-7 w-7 sm:h-8 sm:w-8 rounded-full",
                        "bg-orange-50 border border-orange-100",
                      ].join(" ")}
                      style={{ color: ORANGE }}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                      ) : (
                        <Plus className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                      )}
                    </span>
                    <span className="text-[13px] sm:text-sm font-semibold text-gray-900 truncate">
                      {item.q}
                    </span>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 -mt-1">
                        <div className="pl-10 sm:pl-11">
                          <p className="text-[12px] sm:text-[13px] leading-relaxed text-gray-600">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

