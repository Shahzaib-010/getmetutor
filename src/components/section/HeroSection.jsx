import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full bg-transparent font-open-sans">
      <div className="max-w-[90%] mx-auto  py-14 sm:py-16 lg:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* TRUSTED BADGE */}
            <div className="flex flex-col items-start gap-2 mb-6">
              
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

              <div className="flex items-center  gap-3 text-sm text-gray-600">
                <span className="w-6 h-px bg-gray-400" />
                Trusted by 120+ students
                <span className="w-6 h-px bg-gray-400" />
              </div>
            </div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-none text-black"
            >
              Build skills with getme<span className="text-[var(--color-primary)]">tutor</span> 
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-5 text-sm sm:text-base text-gray-600 max-w-xl mx-auto lg:mx-0"
            >
              Tutory gives you a complete learning experience that helps you gain
              real, job-ready skills and take the next step in your career.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex justify-center lg:justify-start"
            >
              
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE (IMAGE PLACEHOLDER) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full flex justify-center lg:justify-center "
          >
           <img src="/images/hero-img.png" alt="" className=" rounded-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;