import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  Check,
  Laptop,
  Lock,
  Sparkles,
  Star,
  Trophy,
  User,
  Zap,
} from "lucide-react";
import Button from "../ui/Button";

/** Design tokens — match reference */
const ORANGE = "#FF6B35";
const DARK_CARD = "#111111";

const REGIONS = {
  USA: {
    code: "USA",
    label: "USA",
    currencyLabel: "USD",
    formatPrice: (n) => `$${n}`,
    subheader: [
      { text: "One-time purchase", icon: Sparkles },
      { text: "All features in every plan", icon: Check },
    ],
    plans: {
      personal: {
        name: "Standard Plan",
        tagline: "Good for steady weekly progress",
        price: 200, // 8 lessons x $25
        was: 240,
        cta: "Book Free Trial",
        devices: "8 Lessons / Month",
        icon: User,
        features: [
          { text: "8 Lessons / Month", highlight: true },
          { text: "50-minute 1-to-1 lessons" },
          { text: "Monthly billing" },
          { text: "$25 per lesson" },
        ],
      },
      standard: {
        name: "Popular Plan",
        tagline: "Most Popular — Best for faster improvement and exam prep",
        price: 264, // 12 lessons x $22
        was: 312,
        cta: "Book Free Trial",
        devices: "12 Lessons / Month",
        icon: Zap,
        featured: true,
        features: [
          { text: "12 Lessons / Month", highlight: true },
          { text: "50-minute 1-to-1 lessons" },
          { text: "Monthly billing" },
          { text: "$22 per lesson" },
        ],
      },
      pro: {
        name: "Custom Plan",
        tagline: "Need more or fewer lessons?",
        price: 0,
        was: 0,
        cta: "Book Free Trial",
        devices: "Custom schedule",
        icon: Trophy,
        features: [
          { text: "We can build a plan that fits your child’s schedule.", highlight: true },
          { text: "Flexible scheduling" },
          { text: "Tailored lesson counts & pacing" },
        ],
      },
    },
  },
  UK: {
    code: "UK",
    label: "UK",
    currencyLabel: "GBP",
    formatPrice: (n) => `£${n}`,
    subheader: [
      { text: "One-time purchase", icon: Sparkles },
      { text: "All features in every plan", icon: Check },
      { text: "30-day money-back guarantee", icon: Lock },
    ],
    footerLine1: "Prices in GBP. VAT may apply.",
    footerLine2: "Secure checkout · Works on modern browsers",
    refundNote:
      "If you're not happy with GetmeTutor, we'll refund you—no questions asked. Email support@getmetutor.online.",
    plans: {
      personal: {
        name: "Standard Plan",
        tagline: "Good for steady weekly progress",
        price: 160, // 8 lessons x £20
        was: 192,
        cta: "Book Free Trial",
        devices: "8 Lessons / Month",
        icon: User,
        features: [
          { text: "8 Lessons / Month", highlight: true },
          { text: "50-minute 1-to-1 lessons" },
          { text: "Monthly billing" },
          { text: "£20 per lesson" },
        ],
      },
      standard: {
        name: "Popular Plan",
        tagline: "Most Popular — Best for faster improvement and exam prep",
        price: 216, // 12 lessons x £18
        was: 256,
        cta: "Book Free Trial",
        devices: "12 Lessons / Month",
        icon: Zap,
        featured: true,
        features: [
          { text: "12 Lessons / Month", highlight: true },
          { text: "50-minute 1-to-1 lessons" },
          { text: "Monthly billing" },
          { text: "£18 per lesson" },
        ],
      },
      pro: {
        name: "Custom Plan",
        tagline: "Need more or fewer lessons?",
        price: 0,
        was: 0,
        cta: "Book Free Trial",
        devices: "Custom schedule",
        icon: Trophy,
        features: [
          { text: "We can build a plan that fits your child’s schedule.", highlight: true },
          { text: "Flexible scheduling" },
          { text: "Tailored lesson counts & pacing" },
        ],
      },
    },
  },
  Canada: {
    code: "Canada",
    label: "Canada",
    currencyLabel: "CAD",
    formatPrice: (n) => `$${n}`,
    subheader: [
      { text: "One-time purchase", icon: Sparkles },
      { text: "All features in every plan", icon: Check },
      { text: "30-day money-back guarantee", icon: Lock },
    ],
    footerLine1: "Prices in CAD. Taxes may apply.",
    footerLine2: "Secure checkout · Works on modern browsers",
    refundNote:
      "If you're not happy with GetmeTutor, we'll refund you—no questions asked. Email support@getmetutor.online.",
    plans: {
      personal: {
        name: "Standard Plan",
        tagline: "Good for steady weekly progress",
        price: 200, // 8 lessons x $25
        was: 240,
        cta: "Book Free Trial",
        devices: "8 Lessons / Month",
        icon: User,
        features: [
          { text: "8 Lessons / Month", highlight: true },
          { text: "50-minute 1-to-1 lessons" },
          { text: "Monthly billing" },
          { text: "$25 per lesson" },
        ],
      },
      standard: {
        name: "Popular Plan",
        tagline: "Most Popular — Best for faster improvement and exam prep",
        price: 264, // 12 lessons x $22
        was: 312,
        cta: "Book Free Trial",
        devices: "12 Lessons / Month",
        icon: Zap,
        featured: true,
        features: [
          { text: "12 Lessons / Month", highlight: true },
          { text: "50-minute 1-to-1 lessons" },
          { text: "Monthly billing" },
          { text: "$22 per lesson" },
        ],
      },
      pro: {
        name: "Custom Plan",
        tagline: "Need more or fewer lessons?",
        price: 0,
        was: 0,
        cta: "Book Free Trial",
        devices: "Custom schedule",
        icon: Trophy,
        features: [
          { text: "We can build a plan that fits your child’s schedule.", highlight: true },
          { text: "Flexible scheduling" },
          { text: "Tailored lesson counts & pacing" },
        ],
      },
    },
  },
  Australia: {
    code: "Australia",
    label: "Australia",
    currencyLabel: "AUD",
    formatPrice: (n) => `$${n}`,
    subheader: [
      { text: "One-time purchase", icon: Sparkles },
      { text: "All features in every plan", icon: Check },
      { text: "30-day money-back guarantee", icon: Lock },
    ],
    footerLine1: "Prices in AUD. GST may apply.",
    footerLine2: "Secure checkout · Works on modern browsers",
    refundNote:
      "If you're not happy with GetmeTutor, we'll refund you—no questions asked. Email support@getmetutor.online.",
    plans: {
      personal: {
        name: "Standard Plan",
        tagline: "Good for steady weekly progress",
        price: 200, // 8 lessons x $25
        was: 240,
        cta: "Book Free Trial",
        devices: "8 Lessons / Month",
        icon: User,
        features: [
          { text: "8 Lessons / Month", highlight: true },
          { text: "50-minute 1-to-1 lessons" },
          { text: "Monthly billing" },
          { text: "$25 per lesson" },
        ],
      },
      standard: {
        name: "Popular Plan",
        tagline: "Most Popular — Best for faster improvement and exam prep",
        price: 264, // 12 lessons x $22
        was: 312,
        cta: "Book Free Trial",
        devices: "12 Lessons / Month",
        icon: Zap,
        featured: true,
        features: [
          { text: "12 Lessons / Month", highlight: true },
          { text: "50-minute 1-to-1 lessons" },
          { text: "Monthly billing" },
          { text: "$22 per lesson" },
        ],
      },
      pro: {
        name: "Custom Plan",
        tagline: "Need more or fewer lessons?",
        price: 0,
        was: 0,
        cta: "Book Free Trial",
        devices: "Custom schedule",
        icon: Trophy,
        features: [
          { text: "We can build a plan that fits your child’s schedule.", highlight: true },
          { text: "Flexible scheduling" },
          { text: "Tailored lesson counts & pacing" },
        ],
      },
    },
  },
};

const REGION_KEYS = ["USA", "UK", "Canada", "Australia"];
const PFP_IMAGES = [
  "/images/pfp1.jpg",
  "/images/pfp2.jpg",
  "/images/pfp3.jpg",
  "/images/pfp4.jpg",
];

function  PricingSection({ className = "" }) {
  const [regionKey, setRegionKey] = useState("USA");
  const navigate = useNavigate();
  const region = REGIONS[regionKey];

  const plans = useMemo(
    () => [
      region.plans.personal,
      region.plans.standard,
      region.plans.pro,
    ],
    [region]
  );

  return (
    <section
      className={`w-full font-open-sans antialiased ${className}`}
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-11 md:py-14">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-extrabold tracking-tight text-gray-900 leading-snug">
            Small investment
            <br />
            <span style={{ color: ORANGE }}>Huge learning boost</span>
          </h2>
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1.5 text-[11px] sm:text-xs text-gray-600">
           
          </div>

          {/* Social proof */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <div className="flex -space-x-1.5">
              {PFP_IMAGES.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Learner ${i + 1}`}
                  className="h-6 w-6 rounded-full border-2 border-white object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-700">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">
                from <strong className="text-gray-900 font-semibold">1,000+</strong> happy learners
              </span>
            </div>
          </div>

          {/* Country switcher */}
          <div className="mt-6 flex justify-center">
            <div
              role="tablist"
              aria-label="Select region for pricing"
              className="inline-flex flex-wrap justify-center gap-0.5 rounded-lg border border-gray-200 bg-white p-0.5 shadow-sm"
            >
              {REGION_KEYS.map((key) => {
                const active = regionKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setRegionKey(key)}
                    className={[
                      "min-w-14 rounded-md px-2.5 py-1.5 text-[11px] sm:text-xs font-semibold transition-colors",
                      active
                        ? "text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                    ].join(" ")}
                    style={
                      active
                        ? { backgroundColor: ORANGE }
                        : undefined
                    }
                  >
                    {REGIONS[key].label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 md:mt-9 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 items-stretch">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              region={region}
              orange={ORANGE}
              dark={DARK_CARD}
              onCardClick={() => navigate("/demo")}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 flex justify-center">
          <Button to="/demo" text="Book Free Trial" />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, region, orange, dark, onCardClick }) {
  const Icon = plan.icon;
  const isFeatured = plan.featured;
  const perLessonFeature = plan.features.find((feature) =>
    /per lesson/i.test(feature.text)
  );
  const perLessonRate = perLessonFeature
    ? perLessonFeature.text.replace(/\s*per lesson\s*/i, "").trim()
    : "Custom";
  const perLessonLabel = perLessonFeature ? "per lesson" : "tailored rate";

  return (
    <motion.article
      layout
      role="button"
      tabIndex={0}
      onClick={onCardClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onCardClick();
        }
      }}
      className={[
        "relative flex flex-col rounded-xl border p-4 sm:p-5 cursor-pointer",
        isFeatured
          ? "border-gray-800 shadow-lg lg:scale-[1.01] z-10"
          : "border-gray-200/80 bg-white shadow-[0_6px_24px_rgba(15,23,42,0.05)]",
      ].join(" ")}
      style={isFeatured ? { backgroundColor: dark } : { backgroundColor: "#ffffff" }}
    >
      {isFeatured && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[52%] rounded-t-xl opacity-90"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "18px 18px",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 55%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, #000 55%, transparent 100%)",
          }}
          aria-hidden
        />
      )}
      {isFeatured && (
        <span
          className="absolute top-2.5 right-2.5 rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: orange }}
        >
          Most popular
        </span>
      )}

      <div className="flex items-start gap-2.5">
        <span
          className={[
            "grid h-8 w-8 shrink-0 place-items-center rounded-lg",
            isFeatured ? "" : "bg-gray-100",
          ].join(" ")}
          style={
            isFeatured
              ? { backgroundColor: orange }
              : undefined
          }
        >
          <Icon
            className={isFeatured ? "h-4 w-4 text-white" : "h-4 w-4 text-gray-600"}
          />
        </span>
        <div>
          <h3
            className={`text-base font-bold ${
              isFeatured ? "text-white" : "text-gray-900"
            }`}
          >
            {plan.name}
          </h3>
          <p
            className={`mt-0.5 text-xs leading-snug ${
              isFeatured ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {plan.tagline}
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-baseline gap-1.5">
        <AnimatePresence mode="wait">
          <motion.span
            key={`${region.code}-${plan.name}-${perLessonRate}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className={`text-3xl sm:text-[2.1rem] font-extrabold tabular-nums tracking-tight ${
              isFeatured ? "text-white" : "text-gray-900"
            }`}
          >
            {perLessonRate}
          </motion.span>
        </AnimatePresence>
        <span
          className={`text-xs font-medium uppercase tracking-wide ${
            isFeatured ? "text-gray-500" : "text-gray-400"
          }`}
        >
          {perLessonLabel}
        </span>
      </div>

      <button
        type="button"
        onClick={onCardClick}
        className={[
          "mt-4 w-full rounded-lg py-2 text-xs font-semibold transition-colors",
          isFeatured
            ? "text-white shadow-sm hover:opacity-95"
            : "border border-gray-900 bg-white hover:bg-orange-500 text-gray-900 ",
        ].join(" ")}
        style={isFeatured ? { backgroundColor: orange } : undefined}
      >
        {plan.cta}
      </button>

      <div
        className={`mt-4 flex items-center gap-1.5 text-xs ${
          isFeatured ? "text-white" : "text-gray-700"
        }`}
      >
        <Laptop
          className="h-3.5 w-3.5 shrink-0"
          style={{ color: isFeatured ? orange : undefined }}
        />
        <span className={isFeatured ? "" : "text-gray-600"}>{plan.devices}</span>
      </div>

      <div
        className={`my-3.5 h-px border-t border-dotted ${
          isFeatured ? "border-gray-600" : "border-gray-200"
        }`}
      />

      <ul className="space-y-2 flex-1">
        {plan.features.map((f) => (
          <li key={f.text} className="flex gap-2 text-xs leading-relaxed">
            <Check
              className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                isFeatured ? "text-gray-400" : "text-gray-400"
              }`}
            />
            <span
              className={
                f.highlight
                  ? isFeatured
                    ? "text-white underline decoration-gray-600 underline-offset-2"
                    : "text-gray-900 underline decoration-gray-300 underline-offset-2 font-medium"
                  : isFeatured
                    ? "text-gray-300"
                    : "text-gray-600"
              }
            >
              {f.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default PricingSection;
