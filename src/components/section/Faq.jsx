import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import Button from "../ui/Button";

const ORANGE = "#E94D35";
const WHATSAPP_URL =
  "https://wa.me/923160479437?text=" +
  encodeURIComponent("Hi, I’m interested in Get Me Tutor tutoring. Can you share more details?");

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
              q: "What subjects do you offer?",
              a: "We cover Math, English, Physics, Chemistry, Biology, and Science.",
            },
            {
              q: "Who are the tutors?",
              a: "Our tutors are experienced educators and subject specialists with strong backgrounds in teaching students across grade levels.",
            },
            {
              q: "How do online tutoring sessions work?",
              a: "Sessions are conducted live online through an easy-to-use platform where students can interact with tutors in real time for questions, explanations, and guided practice.",
            },
            {
              q: "Can I choose my tutor?",
              a: "Yes — you can select a tutor based on subject expertise and availability. We also provide recommendations if you prefer our matching support.",
            },
            {
              q: "Do you offer a free trial session?",
              a: "Yes, we offer a free trial session so you can meet a tutor and experience our teaching approach before committing.",
            },
            {
              q: "What grades or levels do you support?",
              a: "We provide tutoring for Reception to Year 13 (UK, Australia, New Zealand) and KG to Grade 12 (USA, Canada).",
            },
            {
              q: "How do I schedule a session?",
              a: "Book sessions directly online at your preferred time — click 'Book Now' to fill out a short form and our team will contact you to confirm.",
            },
            {
              q: "Is there a refund policy?",
              a: "Yes, we have a refund policy. Please review our Refund Policy page or contact support for details.",
            },
          ],
    [items]
  );


  const [openIdx, setOpenIdx] = useState(1);

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

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            text="Contact Us"
          />
        </div>
      </div>
    </section>
  );
}

