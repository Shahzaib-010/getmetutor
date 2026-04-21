import React from "react";
import { InlineWidget } from "react-calendly";
import BannerLoop from "../components/section/BannerLoop";
import TestimonialsSection from "../components/section/TestimonialsSection";
import Faq from "../components/section/Faq";

const CALENDLY_EVENT_URL = "https://calendly.com/letsmail-shahzaib/30min";

function Demo() {
  return (
    <div className="font-open-sans">
      <section className="flex h-full py-24 items-center">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8 md:px-10 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
            Demo Page
          </p>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-(--color-text) sm:text-5xl md:text-6xl">
            See how GetmeTutor feels in one clean flow.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            This page brings together the strongest existing sections in a simple,
            focused layout so visitors can quickly understand the value.
          </p>
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

      <section className="mx-auto w-full px-5 py-14 sm:px-8 md:px-10 lg:px-16 bg-[var(--color-bg)] rounded-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Book a meeting
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Reserve Your Demo Session
          </h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Pick any available slot and confirm your call in under a minute.
          </p>
        </div>

        
          <InlineWidget
            url={CALENDLY_EVENT_URL}
            styles={{ height: "760px" }}
            pageSettings={{
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
            }}
          />
        
      </section>

      <section className="h-full w-full flex justify-center bg-[var(--color-bg)] p-10 ">
        <div className="w-[55%]">
          <div className="rounded-xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] overflow-hidden">
            <div
              className="hs-form-frame p-6"
              data-region="na2"
              data-form-id="293527e0-e5c4-4072-8ddc-edd6539c2096"
              data-portal-id="245970448"
            />
          </div>
        </div>

      </section>

      <TestimonialsSection />
      <Faq />
    </div>
  );
}

export default Demo;