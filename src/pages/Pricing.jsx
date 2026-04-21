import React from "react";
import PricingSection from "../components/section/PricingSection";
import TestimonialsSection from "../components/section/TestimonialsSection";
import Faq from "../components/section/Faq";

export default function Pricing() {
  return (
    <div className="w-full h-full">
      <PricingSection className="" />
      <TestimonialsSection className="pt-12" />
      <Faq className="pt-12 bg-[var(--color-bg)]" />
    </div>
  );
}
