import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
      { text: "30-day money-back guarantee", icon: Lock },
    ],
    footerLine1: "Prices in USD. Taxes may apply.",
    footerLine2: "Secure checkout · Works on modern browsers",
    refundNote:
      "If you're not happy with GetmeTutor, we'll refund you—no questions asked. Email support@getmetutor.com.",
    plans: {
      personal: {
        name: "Personal",
        tagline: "For students & solo learners",
        price: 37,
        was: 50,
        cta: "Get Personal",
        devices: "1 active learner profile",
        icon: User,
        features: [
          { text: "Unlock all core subjects & materials", highlight: true },
          { text: "Live chat with tutors during sessions" },
          { text: "Recorded session playback" },
          { text: "Progress tracking & goals" },
        ],
      },
      standard: {
        name: "Standard",
        tagline: "For freelancers & busy parents",
        price: 57,
        was: 70,
        cta: "Get Standard",
        devices: "2 learner profiles",
        icon: Zap,
        featured: true,
        features: [
          { text: "Everything in Personal", highlight: true },
          { text: "Priority matching with tutors" },
          { text: "Weekly progress reports" },
          { text: "Flexible scheduling windows" },
        ],
      },
      pro: {
        name: "Pro",
        tagline: "For families & study groups",
        price: 77,
        was: 100,
        cta: "Get Pro",
        devices: "Up to 5 learner profiles",
        icon: Trophy,
        features: [
          { text: "Everything in Standard", highlight: true },
          { text: "Shared family dashboard" },
          { text: "Group session booking" },
          { text: "Priority support" },
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
      "If you're not happy with GetmeTutor, we'll refund you—no questions asked. Email support@getmetutor.com.",
    plans: {
      personal: {
        name: "Personal",
        tagline: "For students & solo learners",
        price: 29,
        was: 39,
        cta: "Get Personal",
        devices: "1 active learner profile",
        icon: User,
        features: [
          { text: "Unlock all core subjects & materials", highlight: true },
          { text: "Live chat with tutors during sessions" },
          { text: "Recorded session playback" },
          { text: "Progress tracking & goals" },
        ],
      },
      standard: {
        name: "Standard",
        tagline: "For freelancers & busy parents",
        price: 45,
        was: 58,
        cta: "Get Standard",
        devices: "2 learner profiles",
        icon: Zap,
        featured: true,
        features: [
          { text: "Everything in Personal", highlight: true },
          { text: "Priority matching with tutors" },
          { text: "Weekly progress reports" },
          { text: "Flexible scheduling windows" },
        ],
      },
      pro: {
        name: "Pro",
        tagline: "For families & study groups",
        price: 62,
        was: 79,
        cta: "Get Pro",
        devices: "Up to 5 learner profiles",
        icon: Trophy,
        features: [
          { text: "Everything in Standard", highlight: true },
          { text: "Shared family dashboard" },
          { text: "Group session booking" },
          { text: "Priority support" },
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
      "If you're not happy with GetmeTutor, we'll refund you—no questions asked. Email support@getmetutor.com.",
    plans: {
      personal: {
        name: "Personal",
        tagline: "For students & solo learners",
        price: 49,
        was: 65,
        cta: "Get Personal",
        devices: "1 active learner profile",
        icon: User,
        features: [
          { text: "Unlock all core subjects & materials", highlight: true },
          { text: "Live chat with tutors during sessions" },
          { text: "Recorded session playback" },
          { text: "Progress tracking & goals" },
        ],
      },
      standard: {
        name: "Standard",
        tagline: "For freelancers & busy parents",
        price: 75,
        was: 95,
        cta: "Get Standard",
        devices: "2 learner profiles",
        icon: Zap,
        featured: true,
        features: [
          { text: "Everything in Personal", highlight: true },
          { text: "Priority matching with tutors" },
          { text: "Weekly progress reports" },
          { text: "Flexible scheduling windows" },
        ],
      },
      pro: {
        name: "Pro",
        tagline: "For families & study groups",
        price: 99,
        was: 129,
        cta: "Get Pro",
        devices: "Up to 5 learner profiles",
        icon: Trophy,
        features: [
          { text: "Everything in Standard", highlight: true },
          { text: "Shared family dashboard" },
          { text: "Group session booking" },
          { text: "Priority support" },
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
      "If you're not happy with GetmeTutor, we'll refund you—no questions asked. Email support@getmetutor.com.",
    plans: {
      personal: {
        name: "Personal",
        tagline: "For students & solo learners",
        price: 55,
        was: 72,
        cta: "Get Personal",
        devices: "1 active learner profile",
        icon: User,
        features: [
          { text: "Unlock all core subjects & materials", highlight: true },
          { text: "Live chat with tutors during sessions" },
          { text: "Recorded session playback" },
          { text: "Progress tracking & goals" },
        ],
      },
      standard: {
        name: "Standard",
        tagline: "For freelancers & busy parents",
        price: 85,
        was: 108,
        cta: "Get Standard",
        devices: "2 learner profiles",
        icon: Zap,
        featured: true,
        features: [
          { text: "Everything in Personal", highlight: true },
          { text: "Priority matching with tutors" },
          { text: "Weekly progress reports" },
          { text: "Flexible scheduling windows" },
        ],
      },
      pro: {
        name: "Pro",
        tagline: "For families & study groups",
        price: 115,
        was: 148,
        cta: "Get Pro",
        devices: "Up to 5 learner profiles",
        icon: Trophy,
        features: [
          { text: "Everything in Standard", highlight: true },
          { text: "Shared family dashboard" },
          { text: "Group session booking" },
          { text: "Priority support" },
        ],
      },
    },
  },
};

const REGION_KEYS = ["USA", "UK", "Canada", "Australia"];

function PricingSection({ className = "" }) {
  const [regionKey, setRegionKey] = useState("USA");
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-gray-900 leading-[1.15]">
            Small investment
            <br />
            <span style={{ color: ORANGE }}>Huge learning boost</span>
          </h2>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs sm:text-sm text-gray-600">
            {region.subheader.map((item, i) => (
              <span key={item.text} className="inline-flex items-center gap-1.5">
                {i > 0 && (
                  <span className="text-gray-300 hidden sm:inline" aria-hidden>
                    ·
                  </span>
                )}
                <item.icon className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                <span>{item.text}</span>
              </span>
            ))}
          </div>

          {/* Social proof */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-linear-to-br from-gray-200 to-gray-300"
                  aria-hidden
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">
                from <strong className="text-gray-900">1,000+</strong> happy learners
              </span>
            </div>
          </div>

          {/* Country switcher */}
          <div className="mt-8 flex justify-center">
            <div
              role="tablist"
              aria-label="Select region for pricing"
              className="inline-flex flex-wrap justify-center gap-1 rounded-xl border border-gray-200 bg-white p-1 shadow-sm"
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
                      "min-w-18 rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold transition-colors",
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
        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-stretch">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              region={region}
              orange={ORANGE}
              dark={DARK_CARD}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 md:mt-12 text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-500 flex flex-wrap items-center justify-center gap-2">
            <span>{region.footerLine1}</span>
          </p>
          <p className="text-xs sm:text-sm text-gray-500 inline-flex flex-wrap items-center justify-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-gray-400" />
            {region.footerLine2}
          </p>
          <div className="pt-6 border-t border-dashed border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              {region.refundNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, region, orange, dark }) {
  const Icon = plan.icon;
  const isFeatured = plan.featured;

  return (
    <motion.article
      layout
      className={[
        "relative flex flex-col rounded-2xl border p-6 sm:p-7",
        isFeatured
          ? "border-gray-800 shadow-xl lg:scale-[1.02] z-10"
          : "border-gray-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]",
      ].join(" ")}
      style={isFeatured ? { backgroundColor: dark } : { backgroundColor: "#ffffff" }}
    >
      {isFeatured && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[52%] rounded-t-2xl opacity-90"
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
          className="absolute top-4 right-4 rounded-md px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: orange }}
        >
          Most popular
        </span>
      )}

      <div className="flex items-start gap-3">
        <span
          className={[
            "grid h-10 w-10 shrink-0 place-items-center rounded-xl",
            isFeatured ? "" : "bg-gray-100",
          ].join(" ")}
          style={
            isFeatured
              ? { backgroundColor: orange }
              : undefined
          }
        >
          <Icon
            className={isFeatured ? "h-5 w-5 text-white" : "h-5 w-5 text-gray-600"}
          />
        </span>
        <div>
          <h3
            className={`text-lg font-bold ${
              isFeatured ? "text-white" : "text-gray-900"
            }`}
          >
            {plan.name}
          </h3>
          <p
            className={`mt-0.5 text-sm ${
              isFeatured ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {plan.tagline}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={`${region.code}-${plan.price}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className={`text-4xl sm:text-5xl font-extrabold tabular-nums ${
              isFeatured ? "text-white" : "text-gray-900"
            }`}
          >
            {region.formatPrice(plan.price)}
          </motion.span>
        </AnimatePresence>
        <span
          className={`text-base line-through ${
            isFeatured ? "text-gray-500" : "text-gray-400"
          }`}
        >
          {region.formatPrice(plan.was)}
        </span>
      </div>

      <button
        type="button"
        className={[
          "mt-6 w-full rounded-xl py-3 text-sm font-semibold transition-colors",
          isFeatured
            ? "text-white shadow-md hover:opacity-95"
            : "border border-gray-900 bg-white text-gray-900 hover:bg-gray-50",
        ].join(" ")}
        style={isFeatured ? { backgroundColor: orange } : undefined}
      >
        {plan.cta}
      </button>

      <div
        className={`mt-6 flex items-center gap-2 text-sm ${
          isFeatured ? "text-white" : "text-gray-700"
        }`}
      >
        <Laptop
          className="h-4 w-4 shrink-0"
          style={{ color: isFeatured ? orange : undefined }}
        />
        <span className={isFeatured ? "" : "text-gray-600"}>{plan.devices}</span>
      </div>

      <div
        className={`my-5 h-px border-t border-dotted ${
          isFeatured ? "border-gray-600" : "border-gray-200"
        }`}
      />

      <ul className="space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f.text} className="flex gap-3 text-sm">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${
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
