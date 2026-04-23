import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BookOpen, ChevronRight, Search, Sparkles } from "lucide-react";

import { countryOrder, syllabusData } from "../data/syllabusData";

const STORAGE_KEY = "syllabus-selected-country";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const subjectContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

const subjectItem = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

function Syllabus() {
  const [selectedCountry, setSelectedCountry] = useState(countryOrder[0]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [subjectSearch, setSubjectSearch] = useState("");
  const [activeGradeId, setActiveGradeId] = useState("");

  const subjectSectionRef = useRef(null);
  const gradeSectionRef = useRef(null);

  useEffect(() => {
    const savedCountry = window.localStorage.getItem(STORAGE_KEY);
    if (savedCountry && syllabusData[savedCountry]) {
      setSelectedCountry(savedCountry);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, selectedCountry);
  }, [selectedCountry]);

  const countryContent = syllabusData[selectedCountry];

  const filteredSubjects = useMemo(() => {
    const query = subjectSearch.trim().toLowerCase();
    if (!query) {
      return countryContent.subjects;
    }

    return countryContent.subjects.filter((subject) =>
      `${subject.name} ${subject.shortDescription}`.toLowerCase().includes(query)
    );
  }, [countryContent.subjects, subjectSearch]);

  const selectedSubjectData = useMemo(
    () =>
      countryContent.subjects.find((subject) => subject.name === selectedSubject) ?? null,
    [countryContent.subjects, selectedSubject]
  );

  const activeGradeData = useMemo(() => {
    if (!selectedSubjectData) {
      return null;
    }

    return (
      selectedSubjectData.grades.find((grade) => grade.id === activeGradeId) ??
      selectedSubjectData.grades[0] ??
      null
    );
  }, [activeGradeId, selectedSubjectData]);

  useEffect(() => {
    if (selectedSubjectData && gradeSectionRef.current) {
      gradeSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSubjectData]);

  useEffect(() => {
    if (selectedSubjectData?.grades?.length) {
      setActiveGradeId(selectedSubjectData.grades[0].id);
      return;
    }

    setActiveGradeId("");
  }, [selectedSubjectData]);

  const handleCountryChange = (country) => {
    if (country === selectedCountry) {
      return;
    }

    setSelectedCountry(country);
    setSelectedSubject("");
    setSubjectSearch("");
    setActiveGradeId("");

    requestAnimationFrame(() => {
      subjectSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleSubjectSelect = (subjectName) => {
    setSelectedSubject(subjectName);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,98,0,0.10),_transparent_30%),linear-gradient(180deg,#fffdf8_0%,#ffffff_38%,#f8fafc_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.9),_rgba(255,255,255,0))]" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/85 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-orange-600 uppercase shadow-sm backdrop-blur">
            <Sparkles size={16} />
            Curriculum Explorer
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Choose Your Curriculum
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Select your country to explore available subjects and syllabus.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 w-full max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div className="overflow-x-auto rounded-[2rem] border border-slate-200/70 bg-white/90 p-2 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur supports-[backdrop-filter]:bg-white/75">
            <div className="grid snap-x snap-mandatory grid-cols-1 gap-2 sm:grid-cols-2 lg:min-w-0 lg:grid-cols-3">
              {countryOrder.map((country) => {
                const isActive = country === selectedCountry;
                const countryMeta = syllabusData[country];

                return (
                  <button
                    key={country}
                    type="button"
                    onClick={() => handleCountryChange(country)}
                    className={`group relative snap-start overflow-hidden rounded-[1.5rem] px-5 py-5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-slate-950 text-white shadow-lg"
                        : "bg-white text-slate-700 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md"
                    }`}
                    aria-pressed={isActive}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-lg font-semibold">{country}</div>
                        <p
                          className={`mt-2 text-sm leading-6 ${
                            isActive ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {countryMeta.helper}
                        </p>
                      </div>
                      <span
                        className={`mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-white/15 bg-white/10 text-white"
                            : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-500"
                        }`}
                      >
                        <ChevronRight size={18} />
                      </span>
                    </div>

                    <AnimatePresence>
                      {isActive ? (
                        <motion.span
                          layoutId="active-country-pill"
                          className={`absolute inset-x-4 bottom-2 h-1 rounded-full bg-gradient-to-r ${countryMeta.accent}`}
                        />
                      ) : null}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={subjectSectionRef}
          className="mt-12 rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8 lg:p-10"
          key={selectedCountry}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                <BookOpen size={16} className="text-orange-500" />
                {countryContent.label} syllabus pathways
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Explore subjects for {countryContent.label}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {countryContent.approach}
              </p>
            </div>

            <label className="relative block w-full max-w-md">
              <span className="sr-only">Search subjects</span>
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={subjectSearch}
                onChange={(event) => setSubjectSearch(event.target.value)}
                placeholder="Search subjects"
                className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </label>
          </div>

          <motion.div
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
            variants={subjectContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredSubjects.map((subject) => {
              const isActive = selectedSubject === subject.name;

              return (
                <motion.button
                  key={subject.id}
                  type="button"
                  variants={subjectItem}
                  onClick={() => handleSubjectSelect(subject.name)}
                  className={`group relative overflow-hidden rounded-[1.5rem] border p-5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-transparent bg-slate-950 text-white shadow-xl"
                      : "border-slate-200 bg-white hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                  }`}
                  aria-pressed={isActive}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${countryContent.accent} ${
                      isActive ? "opacity-100" : "opacity-0 transition-opacity group-hover:opacity-100"
                    }`}
                  />
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{subject.name}</h3>
                      <p
                        className={`mt-2 text-sm leading-6 ${
                          isActive ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {subject.shortDescription}
                      </p>
                    </div>
                    <span
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-orange-50 group-hover:text-orange-500"
                      }`}
                    >
                      <ChevronRight size={18} />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {filteredSubjects.length === 0 ? (
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-500">
              No subjects match your search. Try a broader keyword.
            </div>
          ) : null}
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedSubjectData ? (
            <motion.div
              ref={gradeSectionRef}
              key={`${selectedCountry}-${selectedSubject}`}
              className="mt-12"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                    {selectedCountry} • {selectedSubjectData.name}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    {selectedSubjectData.name} syllabus roadmap
                  </h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Pick a grade from the bar below and the syllabus overview will update instantly
                    in the section underneath.
                  </p>
                </div>
                <div className={`rounded-2xl bg-gradient-to-r ${countryContent.accent} p-[1px]`}>
                  <div className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-700">
                    {selectedSubjectData.grades.length} grade levels available
                  </div>
                </div>
              </div>

              <motion.div
                className="mt-8 overflow-x-auto rounded-[1.75rem] border border-slate-200 bg-white/90 p-3 shadow-[0_18px_48px_-36px_rgba(15,23,42,0.35)]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex min-w-max gap-3">
                  {(selectedSubjectData.grades ?? []).map((grade) => {
                    const isActive = activeGradeData?.id === grade.id;

                    return (
                      <button
                        key={grade.id}
                        type="button"
                        onClick={() => setActiveGradeId(grade.id)}
                        className={`relative rounded-2xl border px-4 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 ${
                          isActive
                            ? "border-transparent bg-slate-950 text-white shadow-lg"
                            : "border-slate-200 bg-white text-slate-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
                        }`}
                        aria-pressed={isActive}
                      >
                        {grade.title === "Kindergarten" ? "KG" : grade.title}
                        {isActive ? (
                          <motion.span
                            layoutId="active-grade-pill"
                            className={`absolute inset-x-3 bottom-1 h-1 rounded-full bg-gradient-to-r ${countryContent.accent}`}
                          />
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {activeGradeData ? (
                <motion.article
                  key={activeGradeData.id}
                  className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_-36px_rgba(15,23,42,0.55)] transition-all duration-300 sm:p-8"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {activeGradeData.title}
                      </span>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                        {selectedSubjectData.name} for {activeGradeData.title}
                      </h3>
                    </div>
                    <div className={`rounded-2xl bg-gradient-to-r ${countryContent.accent} p-[1px]`}>
                      <div className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-700">
                        Selected level
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5 lg:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 shadow-sm">
                          Overview
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {activeGradeData.overview}
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 shadow-sm">
                          How We Help at Get Me Tutor
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {activeGradeData.howWeHelp}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 lg:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                          What Students Learn
                        </span>
                      </div>
                      <ul className="mt-4 space-y-3">
                        {(activeGradeData.whatStudentsLearn ?? []).map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-7 text-slate-600"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                          Key Skills Developed
                        </span>
                      </div>
                      <ul className="mt-4 space-y-3">
                        {(activeGradeData.keySkillsDeveloped ?? []).map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-7 text-slate-600"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Syllabus;
