import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Dna,
  FlaskConical,
  Atom,
  Microscope,
  Languages,
  Flag,
  TrendingUp,
  Brain,
  Landmark,
  Code2,
} from "lucide-react";

const SubjectSection = () => {
  const subjects = [
    { name: "Maths", icon: Calculator, color: "text-blue-600" },
    { name: "Biology", icon: Dna, color: "text-green-600" },
    { name: "Chemistry", icon: FlaskConical, color: "text-violet-600" },
    { name: "Physics", icon: Atom, color: "text-indigo-600" },
    { name: "Science", icon: Microscope, color: "text-teal-600" },
    { name: "English", icon: Languages, color: "text-pink-600" },
    { name: "German", icon: Flag, color: "text-orange-500" },
    { name: "Spanish", icon: Flag, color: "text-red-500" },
    { name: "Economics", icon: TrendingUp, color: "text-blue-500" },
    { name: "Psychology", icon: Brain, color: "text-purple-500" },
    { name: "History", icon: Landmark, color: "text-slate-600" },
    { name: "Coding", icon: Code2, color: "text-gray-700" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-5 sm:px-8 md:px-10 lg:px-16 font-open-sans">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Pick a subject to get started
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Handpicked experts across 30+ subjects from KS2 to A-Level &
            university.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {subjects.map((subject, index) => {
            const Icon = subject.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 250 }}
                className="group cursor-pointer rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center shadow-sm hover:shadow-md hover:border-[var(--color-primary)] transition-all duration-300"
              >
                <div
                  className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 group-hover:bg-[var(--color-primary)]/10 transition-all duration-300`}
                >
                  <Icon
                    size={20}
                    className={`${subject.color} group-hover:scale-110 transition-all duration-300`}
                  />
                </div>

                <h3 className="text-sm sm:text-[15px] font-semibold text-slate-800">
                  {subject.name}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SubjectSection;