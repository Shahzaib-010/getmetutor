import React from "react";
import { motion } from "motion/react";
import { ArrowRight,Star } from "lucide-react";
import Button from "../ui/Button";
import Background from "../ui/Background";

/** Place file at `public/images/trusted-icon.png` (or `.svg` — update path below if needed). */
const TRUSTED_BADGE_SRC = "/images/trusted-icon1.png";

const HeroSection = () => {
  return (
    <Background>
    <section className="relative w-full overflow-hidden bg-transparent font-open-sans">
      <div className="relative mx-auto max-w-[90%] py-12 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 text-center lg:text-left"
          >
            {/* TRUSTED BADGE */}
            {/* <div className="flex flex-col items-start gap-2 mb-6">
              
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="black"
                      className="text-black"
                    />
                  ))}
                </div>
              </div>
            </div> */}

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.55 }}
              className="text-balance text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-[3.65rem] xl:text-[4.5rem]"
            >
              1-to-1 <span className="text-[var(--color-primary)]">Online Tutoring</span>  for Maths, English &amp; Science
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.55 }}
              className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-gray-700 sm:text-base lg:mx-0"
            >
              Live 1-to-1 sessions, personalized learning plans, and expert tutors to help your child succeed in school.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.55 }}
              className="mt-7 flex flex-col items-center gap-3 sm:mt-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              
             <Button to="/demo" text="Book Free Demo"/>
            </motion.div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 flex w-full justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <div
                className="pointer-events-none absolute -inset-4 rounded-4xl bg-linear-to-br from-(--color-primary)/15 via-transparent to-transparent blur-2xl sm:-inset-6"
                aria-hidden
              />
              <img
                src="/images/hero-img.png"
                alt="Students learning online with GetmeTutor"
                className="relative z-1 w-full rounded-3xl border border-gray-200/80 bg-white/40 object-cover shadow-[0_20px_60px_-15px_rgba(15,23,42,0.18)]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </Background>
  );
};

export default HeroSection;
