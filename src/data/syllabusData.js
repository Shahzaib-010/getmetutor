const gradeSequence = [
  "Kindergarten",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];

const baseGradeThemes = {
  English: [
    "phonics, read-alouds, and early speaking confidence",
    "sentence building, vocabulary growth, and guided reading",
    "reading fluency, grammar patterns, and response writing",
    "comprehension strategies, paragraph writing, and storytelling",
    "genre study, spelling accuracy, and structured composition",
    "literary analysis, persuasive writing, and speaking tasks",
    "close reading, research basics, and analytical paragraphing",
    "argument writing, textual evidence, and oral presentation",
    "critical reading, rhetoric, and comparative response writing",
    "essay craft, revision workshops, and contextual interpretation",
    "advanced analysis, synthesis writing, and seminar discussion",
    "independent research, exam technique, and academic critique",
    "university-style reading, advanced rhetoric, and polished essays",
  ],
  Maths: [
    "number sense, shapes, patterns, and playful problem solving",
    "addition, subtraction, measurement, and daily maths language",
    "place value, mental strategies, and introductory word problems",
    "multiplication foundations, fractions, and data handling",
    "multi-step operations, geometry, and reasoning routines",
    "decimals, percentages, algebra beginnings, and rich problem sets",
    "ratios, integers, equations, and real-world applications",
    "expressions, proportional reasoning, and geometric thinking",
    "functions, statistics, and algebraic problem solving",
    "linear models, formal geometry, and exam-style reasoning",
    "advanced algebra, trigonometry, and mathematical modelling",
    "pre-calculus, probability, and extended investigations",
    "calculus readiness, rigorous proof, and college-level problem solving",
  ],
  Science: [
    "observing the natural world, seasons, and simple experiments",
    "plants, animals, materials, and hands-on investigation",
    "forces, habitats, and recording scientific observations",
    "states of matter, light, and evidence-based questioning",
    "energy, Earth systems, and fair-test planning",
    "cells, ecosystems, and data-led scientific enquiry",
    "particle ideas, reproduction, and experimental method",
    "chemical reactions, body systems, and scientific explanation",
    "waves, ecology, and structured practical write-ups",
    "integrated biology, chemistry, and physics concepts",
    "specialist lab work, scientific models, and evaluation",
    "applied investigations, interdisciplinary themes, and analysis",
    "advanced scientific thinking, independent projects, and exam preparation",
  ],
  Physics: [
    "motion through play, magnets, and noticing forces in action",
    "pushes, pulls, light, and sound exploration",
    "simple machines, energy ideas, and measurement practice",
    "heat, shadows, and beginning data collection",
    "circuits, gravity, and force explanations",
    "energy transfer, motion graphs, and practical testing",
    "waves, electricity, and particle models",
    "pressure, speed, and structured investigation",
    "fields, work, and energy calculations",
    "mechanics, electricity, and quantitative problem solving",
    "advanced waves, thermal physics, and laboratory precision",
    "circular motion, electromagnetism, and modelling",
    "calculus-linked mechanics, modern physics, and extended practical analysis",
  ],
  Chemistry: [
    "mixing materials, change, and safe classroom exploration",
    "solids, liquids, gases, and everyday materials",
    "properties, reversible change, and observation notes",
    "particles, mixtures, and simple separations",
    "acids and bases, material uses, and planning tests",
    "atoms, compounds, and reaction evidence",
    "periodic patterns, bonding, and lab safety routines",
    "rates, reactions, and quantitative chemistry foundations",
    "chemical equations, reactivity, and data interpretation",
    "stoichiometry, organic basics, and exam-style application",
    "equilibrium, energetics, and analytical chemistry",
    "electrochemistry, kinetics, and precision practical work",
    "advanced organic chemistry, synthesis, and research-informed analysis",
  ],
  Biology: [
    "living things, body awareness, and nature observation",
    "plants, animals, and basic life cycles",
    "habitats, food needs, and adaptation language",
    "human body systems, growth, and classification",
    "cells, ecosystems, and evidence gathering",
    "organ systems, inheritance, and biodiversity",
    "microscopy, reproduction, and scientific explanation",
    "genetics, ecology, and experimental biology",
    "homeostasis, evolution, and practical data skills",
    "molecular biology, physiology, and applied case studies",
    "biochemistry, immunity, and higher-order analysis",
    "population genetics, ecology, and independent investigations",
    "advanced cellular biology, biotechnology, and pre-university evaluation",
  ],
  History: [
    "family stories, timelines, and introducing the past",
    "local history, key figures, and sequencing events",
    "communities over time, artefacts, and source talk",
    "civilisations, cause and effect, and historical questions",
    "migration, empire, and comparing societies",
    "revolutions, reform, and writing from evidence",
    "medieval to modern transitions, chronology, and source evaluation",
    "global history, interpretation, and thematic analysis",
    "industrial change, conflict, and extended historical writing",
    "nation-building, rights movements, and debate",
    "historiography, document analysis, and essay planning",
    "comparative case studies, research, and exam technique",
    "independent enquiry, historiographical argument, and university-style writing",
  ],
  "Computer Science": [
    "logic games, sequencing, and safe digital habits",
    "basic coding patterns, devices, and digital creativity",
    "algorithms, debugging, and digital citizenship",
    "scratch-style programming, data, and problem decomposition",
    "variables, networks, and structured computational thinking",
    "program design, web basics, and responsible technology use",
    "text-based coding, databases, and binary foundations",
    "functions, cybersecurity, and systems thinking",
    "object-oriented ideas, data structures, and project planning",
    "software development, SQL, and algorithm analysis",
    "advanced programming, networking, and practical builds",
    "computational theory, APIs, and capstone development",
    "full-stack thinking, architecture, and industry-style project delivery",
  ],
};

const countryProfiles = {
  USA: {
    label: "USA",
    helper: "Standards-aligned pathways with broad elective-ready progression.",
    accent: "from-orange-500 via-amber-500 to-yellow-400",
    glow: "shadow-orange-200/70",
    gradesLabel: "Grades K-12",
    summaryPrefix: "US curriculum",
    approach:
      "Balances foundational standards, classroom participation, projects, and college-readiness skills.",
  },
  UK: {
    label: "UK",
    helper: "National Curriculum inspired flow with structured academic depth.",
    accent: "from-sky-500 via-cyan-500 to-teal-400",
    glow: "shadow-sky-200/70",
    gradesLabel: "Years mapped to K-12 style progression",
    summaryPrefix: "UK curriculum",
    approach:
      "Emphasises mastery, analytical writing, knowledge sequencing, and exam confidence.",
  },
  Canada: {
    label: "Canada",
    helper: "Inquiry-rich learning with strong literacy, numeracy, and applied thinking.",
    accent: "from-rose-500 via-red-500 to-orange-400",
    glow: "shadow-rose-200/70",
    gradesLabel: "Kindergarten to Grade 12",
    summaryPrefix: "Canadian curriculum",
    approach:
      "Blends concept mastery with collaborative projects, reflection, and real-world application.",
  },
  Australia: {
    label: "Australia",
    helper: "Capability-driven progression built around modern interdisciplinary learning.",
    accent: "from-emerald-500 via-lime-500 to-yellow-400",
    glow: "shadow-emerald-200/70",
    gradesLabel: "Foundation to Year 12 mapped to KG-12",
    summaryPrefix: "Australian curriculum",
    approach:
      "Highlights transferable skills, cross-curricular priorities, and confident independent learning.",
  },
};

const subjectOrder = [
  "English",
  "Maths",
  "Science",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Computer Science",
];

const createGradeContent = (countryName, subjectName, gradeIndex) => {
  const gradeTitle = gradeSequence[gradeIndex];
  const theme = baseGradeThemes[subjectName][gradeIndex];
  const country = countryProfiles[countryName];

  return {
    id: `${countryName.toLowerCase()}-${subjectName.toLowerCase().replace(/\s+/g, "-")}-${gradeIndex}`,
    title: gradeTitle,
    summary: `${country.summaryPrefix} ${subjectName.toLowerCase()} for ${gradeTitle} focuses on ${theme}.`,
    details: `${country.summaryPrefix} ${subjectName.toLowerCase()} for ${gradeTitle} focuses on ${theme}. ${country.approach} Learners build confidence through age-appropriate tasks, guided feedback, and progressive assessment checkpoints.`,
    outcomes: [
      `Develop ${subjectName.toLowerCase()} fluency through targeted lessons and scaffolded practice.`,
      `Apply learning in discussions, tasks, investigations, or projects matched to ${gradeTitle}.`,
      `Strengthen independent thinking with measurable progress checkpoints and teacher-ready outputs.`,
    ],
    ctaLabel: "View Details",
  };
};

const createSubject = (countryName, subjectName) => ({
  id: `${countryName.toLowerCase()}-${subjectName.toLowerCase().replace(/\s+/g, "-")}`,
  name: subjectName,
  shortDescription: `${subjectName} pathway tailored to ${countryProfiles[countryName].label} expectations.`,
  grades: gradeSequence.map((_, gradeIndex) =>
    createGradeContent(countryName, subjectName, gradeIndex)
  ),
});

export const syllabusData = Object.keys(countryProfiles).reduce((acc, countryName) => {
  acc[countryName] = {
    ...countryProfiles[countryName],
    subjects: subjectOrder.map((subjectName) => createSubject(countryName, subjectName)),
  };
  return acc;
}, {});

export const countryOrder = Object.keys(countryProfiles);
export const allSubjects = subjectOrder;
