import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState(null);

  const openModal = (subject) => {
    setModalSubject(subject);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  // ✅ HUBSPOT POPUP FORM LOAD
  useEffect(() => {
    if (!modalOpen) return;

    const loadForm = () => {
      const target = document.getElementById("hubspot-modal-target");
      if (!target) return;

      target.innerHTML = "";

      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "245970448",
          formId: "293527e0-e5c4-4072-8ddc-edd6539c2096",
          target: "#hubspot-modal-target",
        });
      }
    };

    setTimeout(loadForm, 150);

    return () => {
      const target = document.getElementById("hubspot-modal-target");
      if (target) target.innerHTML = "";
    };
  }, [modalOpen]);

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Pick a subject to get started
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Click any subject to book your free trial lesson.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="cursor-pointer rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center shadow-sm hover:shadow-md transition"
                onClick={() => openModal(subject.name)}
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50">
                  <Icon size={20} className={subject.color} />
                </div>

                <h3 className="text-sm font-semibold text-slate-800">
                  {subject.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ✅ POPUP MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={closeModal}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 h-[70vh] w-full md:w-[80%] lg:w-[50%] bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b ">
                <div>
                  <h3 className="font-bold text-lg hidden lg:block">Book Free Trial</h3>
                  <p className="text-sm text-gray-500 hidden lg:block">
                    Selected Subject:{" "}
                    <span className="font-semibold">{modalSubject}</span>
                  </p>
                </div>

                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-black hidden lg:block"
                >
                  ✕
                </button>
              </div>

              {/* FORM HERE */}
              <div className="p-2 ">
              <div
              className="hs-form-frame "
              data-region="na2"
              data-form-id="293527e0-e5c4-4072-8ddc-edd6539c2096"
              data-portal-id="245970448"
            />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SubjectSection;