import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import Button from "../ui/Button";
import Background from "../ui/Background";

/** Place file at `public/images/trusted-icon.png` (or `.svg` — update path below if needed). */
const HERO_AVATARS = [
  "/images/pfp1.jpg",
  "/images/pfp2.jpg",
  "/images/pfp3.jpg",
  "/images/pfp4.jpg",
];

const HeroSection = () => {
  return (
    <Background>
    <section className="relative w-full overflow-hidden bg-transparent font-open-sans">
      <div className="relative mx-auto max-w-[90%] py-12 sm:py-14 lg:py-13">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.03, duration: 0.5 }}
              className="mb-5 flex items-center justify-center gap-3 lg:justify-start"
            >
              <div className="flex -space-x-2">
                {HERO_AVATARS.map((avatar, index) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt={`Get Me Tutor learner ${index + 1}`}
                    className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm"
                    loading="eager"
                  />
                ))}
              </div>

              <div className="rounded-full border border-white/75 bg-white/88 px-3 py-2 text-left shadow-[0_18px_40px_-22px_rgba(15,23,42,0.35)] ring-1 ring-gray-200/60 backdrop-blur">
                <div className="flex gap-0.5" aria-hidden>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-[var(--color-primary)] text-[var(--color-primary)]"
                    />
                  ))}
                </div>
                <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                  Loved by students and parents.
                </p>
              </div>
            </motion.div>

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
              
             <Button to="/demo" text="Book Free Trial"/>
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
                src="/images/hero-img2.jpg"
                alt="Students learning online with GetmeTutor"
                className="h-[60vh] md:h-[70vh] relative z-1 w-full rounded-3xl border border-gray-200/80 bg-white/40 object-cover shadow-[0_20px_60px_-15px_rgba(15,23,42,0.18)]"
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
