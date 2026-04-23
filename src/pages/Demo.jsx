import React from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { InlineWidget } from "react-calendly";
import BannerLoop from "../components/section/BannerLoop";
import TestimonialsSection from "../components/section/TestimonialsSection";
import Faq from "../components/section/Faq";
import Button from "../components/ui/Button";

const CALENDLY_EVENT_URL = "https://calendly.com/getmetutoronline/60min";

const heroStats = [
  { value: "1:1", label: "live tutor attention" },
  { value: "60m", label: "focused demo session" },
  { value: "Fast", label: "booking confirmation" },
];

function Demo() {
  return (
    <div className="font-open-sans bg-[linear-gradient(180deg,#fffaf3_0%,#ffffff_28%,#f8fafc_100%)]">
      <section className="relative isolate flex flex-col md:flex-row md:min-h-screen overflow-hidden px-5 py-8 md:py-[10rem] lg:py-[10rem] sm:px-8 md:px-10 lg:px-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,115,0,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.1),_transparent_28%)]" />
        <div className="mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            

            <h1 className="mx-auto mt-5 w-[90%] text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-5xl lg:text-6xl">
              Book a free trial <br/> Experience personalised tutoring live
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Claim a complimentary 60-minute trial with a tutor matched to your needs.
              Reserve your free slot now — booking takes under a minute with instant
              confirmation.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href="#book-demo"
                text="Book Free Demo"
                className="justify-center bg-orange-500 px-5 py-3 text-sm font-semibold hover:bg-slate-950"
              />
            </div>

            <div className="mx-auto mt-8 flex w-full max-w-4xl flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-center">
              {heroStats.map((item, idx) => (
                <React.Fragment key={item.label}>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-orange-500 block" />
                    <div className="text-left">
                      <div className="text-lg font-semibold text-slate-900">{item.value}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
                    </div>
                  </div>

                  {/* vertical divider on larger screens, horizontal separator on mobile */}
                  {idx < heroStats.length - 1 && (
                    <>
                      <div className="hidden sm:block sm:h-6 sm:w-px sm:bg-slate-200 sm:mx-4" />
                      <div className="sm:hidden h-px w-full bg-slate-200 my-2" />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>

        
      </section>

      <BannerLoop
        items={[
          "BOOK DEMO",
          "AVAILABLE SLOTS",
          "INSTANT CONFIRMATION",
          "MEET YOUR TUTOR",
          "LEARN FASTER",
        ]}
        bg="#0b0b0b"
      />

      <section
        id="book-demo"
        className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 md:px-10 lg:px-16 lg:py-20"
      >
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_90px_-55px_rgba(15,23,42,0.45)]">
          <div className="border-b border-slate-200 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_55%,#f8fafc_100%)] px-6 py-10 text-center sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Book a meeting
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Reserve Your Demo Session
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Now that the visitor has context, the booking section arrives at the right
              moment. Pick any available slot and confirm the session in under a minute.
            </p>
          </div>

          <div className="bg-[var(--color-bg)] px-2 pb-2 pt-4 sm:px-4 sm:pb-4">
            <InlineWidget
              url={CALENDLY_EVENT_URL}
              styles={{ height: "640px" }}
              pageSettings={{
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
              }}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-bg)] px-5 py-12 sm:px-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-[0_18px_50px_-35px_rgba(15,23,42,0.3)]">
            <div
              className="hs-form-frame"
              data-region="na2"
              data-form-id="f0444412-7986-4570-866c-9e0828f7ad10"
              data-portal-id="245933383"
            ></div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <Faq />
    </div>
  );
}

export default Demo;
