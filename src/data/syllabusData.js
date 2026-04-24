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
};

const countryProfiles = {
  USA: {
    label: "USA",
    helper: "Standards-aligned pathways with broad elective-ready progression.",
    accent: "from-orange-500 via-amber-500 to-yellow-400",
    gradesLabel: "Grades K-12",
    summaryPrefix: "US curriculum",
    approach:
      "Balances foundational standards, classroom participation, projects, and college-readiness skills.",
  },
  UK: {
    label: "UK",
    helper: "National Curriculum inspired flow with structured academic depth.",
    accent: "from-sky-500 via-cyan-500 to-teal-400",
    gradesLabel: "Years mapped to K-12 style progression",
    summaryPrefix: "UK curriculum",
    approach:
      "Emphasises mastery, analytical writing, knowledge sequencing, and exam confidence.",
  },
  Canada: {
    label: "Canada",
    helper: "Inquiry-rich learning with strong literacy, numeracy, and applied thinking.",
    accent: "from-rose-500 via-red-500 to-orange-400",
    gradesLabel: "Kindergarten to Grade 12",
    summaryPrefix: "Canadian curriculum",
    approach:
      "Blends concept mastery with collaborative projects, reflection, and real-world application.",
  },
};

const subjectOrder = [
  "English",
  "Maths",
  "Science",
  "Physics",
  "Chemistry",
  "Biology",
];

const buildLearnPoints = (subjectName, gradeTitle) => [
  `Core ${subjectName.toLowerCase()} concepts taught for ${gradeTitle}.`,
  `Structured classwork, guided examples, and age-appropriate practice tasks.`,
  `Applied activities that connect ${subjectName.toLowerCase()} learning to real situations.`,
  `Step-by-step questions that improve accuracy and independent thinking.`,
];

const buildSkillPoints = (subjectName) => [
  `Stronger ${subjectName.toLowerCase()} fluency and confidence.`,
  "Improved problem-solving and reasoning ability.",
  "Better accuracy through guided practice and feedback.",
  "More independence when applying concepts in classwork and assessments.",
];

const buildSupportParagraph = (subjectName) =>
  `We help students strengthen their ${subjectName.toLowerCase()} foundations through guided practice, visual explanations, and structured support. Our tutors focus on helping learners understand the logic behind each concept so they can apply their knowledge with greater confidence and independence.`;

const createGradeContent = (countryName, subjectName, gradeIndex) => {
  const gradeTitle = gradeSequence[gradeIndex];
  const theme = baseGradeThemes[subjectName][gradeIndex];
  const country = countryProfiles[countryName];

  return {
    id: `${countryName.toLowerCase()}-${subjectName.toLowerCase().replace(/\s+/g, "-")}-${gradeIndex}`,
    title: gradeTitle,
    summary: `${country.summaryPrefix} ${subjectName.toLowerCase()} for ${gradeTitle} focuses on ${theme}.`,
    overview: `${country.summaryPrefix} ${subjectName.toLowerCase()} for ${gradeTitle} focuses on ${theme}. ${country.approach}`,
    whatStudentsLearn: buildLearnPoints(subjectName, gradeTitle),
    keySkillsDeveloped: buildSkillPoints(subjectName),
    howWeHelp: buildSupportParagraph(subjectName),
  };
};

const extractLegacyDetailsSection = (details, sectionTitle) => {
  if (typeof details !== "string") {
    return "";
  }

  const escapedTitle = sectionTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(
    `${escapedTitle}:\\n([\\s\\S]*?)(?:\\n\\n[A-Za-z ].*?:|$)`,
    "i"
  );
  const match = details.match(regex);
  return match?.[1]?.trim() ?? "";
};

const normalizeGradeShape = (grade) => {
  const details = grade.details ?? "";

  const overview =
    grade.overview ??
    extractLegacyDetailsSection(details, "Overview") ??
    grade.summary ??
    "";

  const whatStudentsLearn = Array.isArray(grade.whatStudentsLearn)
    ? grade.whatStudentsLearn
    : Array.isArray(grade.outcomes)
      ? grade.outcomes
      : [];

  const keySkillsDeveloped = Array.isArray(grade.keySkillsDeveloped)
    ? grade.keySkillsDeveloped
    : extractLegacyDetailsSection(details, "Key skills developed")
        .split(",")
        .map((item) => item.trim().replace(/\.$/, ""))
        .filter(Boolean);

  const howWeHelp =
    grade.howWeHelp ??
    extractLegacyDetailsSection(details, "How we help at Get Me Tutor") ??
    "";

  return {
    ...grade,
    overview,
    whatStudentsLearn,
    keySkillsDeveloped,
    howWeHelp,
  };
};

const createSubject = (countryName, subjectName) => {
  // Canada-specific Maths syllabus (custom grade content)
  if (countryName === "Canada" && subjectName === "Maths") {
    const mathGrades = [
      {
        id: `${countryName.toLowerCase()}-maths-0`,
        title: "Kindergarten",
        summary: "In Kindergarten, students begin developing early maths skills based on the Canada curriculum, focusing on number recognition, counting, shapes, and patterns through interactive learning.",
        overview:
          "In Kindergarten, students begin developing early maths skills based on the Canada curriculum, focusing on number recognition, counting, shapes, and patterns through interactive learning.",
        whatStudentsLearn: [
          "Counting numbers using objects and visuals",
          "Recognizing and writing numbers",
          "Basic addition and subtraction concepts",
          "Identifying shapes and patterns",
          "Comparing quantities (more, less, equal)",
          "Introduction to measurement (size, length, weight)",
        ],
        keySkillsDeveloped: [
          "Number sense and recognition",
          "Visual understanding",
          "Logical thinking",
          "Early problem-solving",
        ],
        howWeHelp:
          "We make early maths simple and engaging through visual methods and interactive activities, helping children build confidence from the start.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-1`,
        title: "Grade 1",
        summary: "In Grade 1 Maths (Canada curriculum), students develop basic arithmetic skills and improve their understanding of numbers and simple problem-solving.",
        overview:
          "In Grade 1 Maths (Canada curriculum), students develop basic arithmetic skills and improve their understanding of numbers and simple problem-solving.",
        whatStudentsLearn: [
          "Addition and subtraction within 20",
          "Place value (tens and ones)",
          "Counting up to 100",
          "Basic measurement and time",
          "Shapes and patterns",
        ],
        keySkillsDeveloped: [
          "Number fluency",
          "Logical reasoning",
          "Problem-solving",
          "Confidence in calculations",
        ],
        howWeHelp:
          "We focus on strengthening basic maths skills through step-by-step explanations and consistent practice.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-2`,
        title: "Grade 2",
        summary: "Grade 2 Maths builds on foundational skills, helping students work with larger numbers and understand real-life applications.",
        overview:
          "Grade 2 Maths builds on foundational skills, helping students work with larger numbers and understand real-life applications.",
        whatStudentsLearn: [
          "Addition and subtraction up to 100",
          "Introduction to multiplication",
          "Place value (hundreds)",
          "Time, money, and measurement",
          "Simple data interpretation",
        ],
        keySkillsDeveloped: [
          "Accuracy in calculations",
          "Problem-solving ability",
          "Number understanding",
          "Logical thinking",
        ],
        howWeHelp:
          "We use structured learning and real-life examples to make maths easier to understand and apply.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-3`,
        title: "Grade 3",
        summary: "In Grade 3 Maths (Canada curriculum), students focus on multiplication, division, and fractions while improving their problem-solving skills.",
        overview:
          "In Grade 3 Maths (Canada curriculum), students focus on multiplication, division, and fractions while improving their problem-solving skills.",
        whatStudentsLearn: [
          "Multiplication and division basics",
          "Introduction to fractions",
          "Word problems",
          "Measurement and geometry",
          "Graphs and data",
        ],
        keySkillsDeveloped: [
          "Mathematical reasoning",
          "Pattern recognition",
          "Problem-solving",
          "Number fluency",
        ],
        howWeHelp:
          "We simplify multiplication and fractions using clear methods and guided practice to build confidence.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-4`,
        title: "Grade 4",
        summary: "Grade 4 focuses on working with larger numbers and improving accuracy in calculations and problem-solving.",
        overview:
          "Grade 4 focuses on working with larger numbers and improving accuracy in calculations and problem-solving.",
        whatStudentsLearn: [
          "Multi-digit addition and subtraction",
          "Multiplication and division",
          "Fractions and decimals",
          "Geometry basics",
          "Data interpretation",
        ],
        keySkillsDeveloped: [
          "Accuracy and precision",
          "Logical thinking",
          "Step-by-step problem solving",
          "Understanding number relationships",
        ],
        howWeHelp:
          "We break down complex calculations and guide students through structured methods for better understanding.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-5`,
        title: "Grade 5",
        summary: "In Grade 5 Maths (Canada curriculum), students strengthen their understanding of fractions, decimals, and early algebra concepts.",
        overview:
          "In Grade 5 Maths (Canada curriculum), students strengthen their understanding of fractions, decimals, and early algebra concepts.",
        whatStudentsLearn: [
          "Advanced fractions and decimals",
          "Volume and measurement",
          "Basic algebra concepts",
          "Graphs and data analysis",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Problem-solving",
          "Precision",
          "Conceptual understanding",
        ],
        howWeHelp:
          "We prepare students for middle school maths through structured lessons and focused practice.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-6`,
        title: "Grade 6",
        summary: "Grade 6 introduces more advanced maths concepts such as ratios, percentages, and algebraic thinking.",
        overview:
          "Grade 6 introduces more advanced maths concepts such as ratios, percentages, and algebraic thinking.",
        whatStudentsLearn: [
          "Ratios and percentages",
          "Integers and number operations",
          "Algebraic expressions",
          "Geometry and statistics",
        ],
        keySkillsDeveloped: [
          "Logical reasoning",
          "Analytical thinking",
          "Problem-solving",
          "Concept clarity",
        ],
        howWeHelp:
          "We help students transition to advanced maths with step-by-step explanations and strong conceptual support.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-7`,
        title: "Grade 7",
        summary: "In Grade 7 Maths (Canada curriculum), students deepen their understanding of algebra and proportional relationships.",
        overview:
          "In Grade 7 Maths (Canada curriculum), students deepen their understanding of algebra and proportional relationships.",
        whatStudentsLearn: [
          "Algebraic expressions and equations",
          "Proportions",
          "Geometry concepts",
          "Probability basics",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Equation solving",
          "Analytical reasoning",
          "Concept application",
        ],
        howWeHelp:
          "We build strong algebra foundations and improve problem-solving through structured guidance.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-8`,
        title: "Grade 8",
        summary: "Grade 8 prepares students for high school maths with focus on equations, functions, and advanced concepts.",
        overview:
          "Grade 8 prepares students for high school maths with focus on equations, functions, and advanced concepts.",
        whatStudentsLearn: [
          "Linear equations",
          "Functions and graphs",
          "Geometry and transformations",
          "Data analysis",
        ],
        keySkillsDeveloped: [
          "Analytical reasoning",
          "Graph interpretation",
          "Problem-solving",
          "Mathematical understanding",
        ],
        howWeHelp:
          "We guide students step-by-step to ensure readiness for high school mathematics.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-9`,
        title: "Grade 9",
        summary: "Grade 9 Maths in Canada introduces high school-level concepts, focusing on algebra and functions.",
        overview:
          "Grade 9 Maths in Canada introduces high school-level concepts, focusing on algebra and functions.",
        whatStudentsLearn: [
          "Linear equations and inequalities",
          "Functions and graphing",
          "Polynomials",
          "Algebraic problem-solving",
        ],
        keySkillsDeveloped: [
          "Algebraic thinking",
          "Logical reasoning",
          "Problem-solving",
          "Concept application",
        ],
        howWeHelp:
          "We help students build strong foundations in algebra for future success.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-10`,
        title: "Grade 10",
        summary: "In Grade 10 Maths (Canada curriculum), students focus on geometry, trigonometry, and advanced algebra concepts.",
        overview:
          "In Grade 10 Maths (Canada curriculum), students focus on geometry, trigonometry, and advanced algebra concepts.",
        whatStudentsLearn: [
          "Geometry and trigonometry",
          "Coordinate geometry",
          "Algebraic relationships",
          "Problem-solving",
        ],
        keySkillsDeveloped: [
          "Spatial reasoning",
          "Logical thinking",
          "Mathematical structure",
          "Analytical skills",
        ],
        howWeHelp:
          "We simplify complex concepts and help students develop confidence in problem-solving.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-11`,
        title: "Grade 11",
        summary: "Grade 11 Maths focuses on advanced algebra, functions, and preparation for higher-level studies.",
        overview:
          "Grade 11 Maths focuses on advanced algebra, functions, and preparation for higher-level studies.",
        whatStudentsLearn: [
          "Advanced algebra",
          "Functions and transformations",
          "Trigonometry",
          "Data analysis",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Problem-solving",
          "Concept mastery",
          "Mathematical reasoning",
        ],
        howWeHelp:
          "We help students confidently handle advanced topics with structured lessons and support.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-12`,
        title: "Grade 12",
        summary: "In Grade 12 Maths (Canada curriculum), students prepare for college-level mathematics and final exams.",
        overview:
          "In Grade 12 Maths (Canada curriculum), students prepare for college-level mathematics and final exams.",
        whatStudentsLearn: [
          "Advanced functions",
          "Pre-calculus concepts",
          "Trigonometry",
          "Probability and statistics",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced problem-solving",
          "Exam readiness",
          "Conceptual understanding",
        ],
        howWeHelp:
          "We provide structured guidance and exam-focused preparation to help students succeed.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-maths`,
      name: "Maths",
      shortDescription: `Maths pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: mathGrades,
    };
  }

  // UK-specific Maths syllabus (custom grade content)
  if (countryName === "UK" && subjectName === "Maths") {
    const ukMathGrades = [
      {
        id: `${countryName.toLowerCase()}-maths-reception`,
        title: "Reception",
        summary: "In Reception Maths (UK curriculum), children develop early numeracy skills through play-based learning, focusing on counting, shapes, and basic number understanding.",
        overview:
          "In Reception Maths (UK curriculum), children develop early numeracy skills through play-based learning, focusing on counting, shapes, and basic number understanding.",
        whatStudentsLearn: [
          "Counting objects and numbers",
          "Number recognition (0–20)",
          "Basic addition and subtraction through play",
          "Shapes, patterns, and sorting",
          "Comparing quantities (more/less)",
        ],
        keySkillsDeveloped: [
          "Number sense",
          "Visual understanding",
          "Basic problem-solving",
          "Confidence with numbers",
        ],
        howWeHelp:
          "We use interactive and visual methods to make early maths fun, helping children build strong foundations.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-1`,
        title: "Year 1",
        summary: "Year 1 Maths focuses on building confidence in numbers, addition, subtraction, and basic measurement.",
        overview:
          "Year 1 Maths focuses on building confidence in numbers, addition, subtraction, and basic measurement.",
        whatStudentsLearn: [
          "Addition and subtraction within 20",
          "Number bonds",
          "Counting forward and backward",
          "Basic measurement (time, length)",
          "Shapes and patterns",
        ],
        keySkillsDeveloped: [
          "Number fluency",
          "Logical thinking",
          "Early problem-solving",
        ],
        howWeHelp:
          "We strengthen core concepts through structured practice and simple explanations.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-2`,
        title: "Year 2",
        summary: "Year 2 Maths builds on basic skills and introduces multiplication, division, and problem-solving.",
        overview:
          "Year 2 Maths builds on basic skills and introduces multiplication, division, and problem-solving.",
        whatStudentsLearn: [
          "Addition and subtraction (2-digit numbers)",
          "Multiplication and division basics",
          "Place value (tens and ones)",
          "Money and measurement",
          "Simple word problems",
        ],
        keySkillsDeveloped: [
          "Problem-solving",
          "Number relationships",
          "Accuracy in calculations",
        ],
        howWeHelp:
          "We focus on clarity and repetition to build confidence and accuracy.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-3`,
        title: "Year 3",
        summary: "Year 3 Maths introduces more structured learning, including multiplication, division, and fractions.",
        overview:
          "Year 3 Maths introduces more structured learning, including multiplication, division, and fractions.",
        whatStudentsLearn: [
          "Multiplication tables (3, 4, 8)",
          "Division basics",
          "Fractions (simple)",
          "Measurement and time",
          "Geometry basics",
        ],
        keySkillsDeveloped: [
          "Arithmetic fluency",
          "Logical reasoning",
          "Application skills",
        ],
        howWeHelp:
          "We guide students step-by-step to master multiplication and build strong foundations.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-4`,
        title: "Year 4",
        summary: "Year 4 Maths focuses on strengthening multiplication, division, and problem-solving skills.",
        overview:
          "Year 4 Maths focuses on strengthening multiplication, division, and problem-solving skills.",
        whatStudentsLearn: [
          "Multiplication tables (up to 12)",
          "Division strategies",
          "Fractions and decimals",
          "Area and perimeter",
          "Data interpretation",
        ],
        keySkillsDeveloped: [
          "Problem-solving",
          "Number fluency",
          "Mathematical reasoning",
        ],
        howWeHelp:
          "We provide targeted practice and help students improve speed and accuracy.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-5`,
        title: "Year 5",
        summary: "Year 5 Maths introduces more advanced topics like decimals, fractions, and multi-step problems.",
        overview:
          "Year 5 Maths introduces more advanced topics like decimals, fractions, and multi-step problems.",
        whatStudentsLearn: [
          "Fractions, decimals, percentages",
          "Long multiplication and division",
          "Measurement and volume",
          "Geometry and angles",
          "Word problems",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Multi-step problem-solving",
          "Logical reasoning",
        ],
        howWeHelp:
          "We help students understand complex topics and apply them confidently.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-6`,
        title: "Year 6",
        summary: "Year 6 Maths prepares students for KS2 SATs and secondary school with advanced arithmetic and reasoning.",
        overview:
          "Year 6 Maths prepares students for KS2 SATs and secondary school with advanced arithmetic and reasoning.",
        whatStudentsLearn: [
          "Advanced fractions and percentages",
          "Algebra basics",
          "Ratio and proportion",
          "Geometry and statistics",
          "SATs-style questions",
        ],
        keySkillsDeveloped: [
          "Exam readiness",
          "Problem-solving",
          "Time management",
        ],
        howWeHelp:
          "We focus on SATs preparation, improving accuracy, speed, and confidence.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-7`,
        title: "Year 7",
        summary: "In Grade 7 Maths (Canada curriculum), students deepen their understanding of algebra and proportional relationships.",
        overview:
          "In Grade 7 Maths (Canada curriculum), students deepen their understanding of algebra and proportional relationships.",
        whatStudentsLearn: [
          "Algebraic expressions and equations",
          "Proportions",
          "Geometry concepts",
          "Probability basics",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Equation solving",
          "Analytical reasoning",
          "Concept application",
        ],
        howWeHelp:
          "We build strong algebra foundations and improve problem-solving through structured guidance.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-8`,
        title: "Year 8",
        summary: "Year 8 prepares students for GCSE with advanced algebra and reasoning.",
        overview:
          "Year 8 prepares students for GCSE with advanced algebra and reasoning.",
        whatStudentsLearn: [
          "Algebraic expressions",
          "Linear equations",
          "Geometry and transformations",
          "Probability",
          "Graphs",
        ],
        keySkillsDeveloped: [
          "Logical reasoning",
          "Mathematical relationships",
          "Confidence in problem-solving",
        ],
        howWeHelp:
          "We break down complex topics and improve understanding through practice.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-9`,
        title: "Year 9",
        summary: "Year 9 Maths prepares students for GCSE with advanced algebra and reasoning.",
        overview:
          "Year 9 Maths prepares students for GCSE with advanced algebra and reasoning.",
        whatStudentsLearn: [
          "Advanced algebra",
          "Graphs and functions",
          "Geometry and trigonometry basics",
          "Probability and statistics",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Problem-solving",
          "GCSE readiness",
        ],
        howWeHelp:
          "We build strong foundations for GCSE success.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-10`,
        title: "Year 10 (GCSE)",
        summary: "Year 10 Maths begins GCSE preparation with deeper focus on core concepts and exam techniques.",
        overview:
          "Year 10 Maths begins GCSE preparation with deeper focus on core concepts and exam techniques.",
        whatStudentsLearn: [
          "Algebra and equations",
          "Trigonometry",
          "Probability and statistics",
          "Graphs and functions",
          "Ratio and proportion",
        ],
        keySkillsDeveloped: [
          "Exam techniques",
          "Problem-solving",
          "Accuracy and speed",
        ],
        howWeHelp:
          "We provide exam-focused tutoring using past papers and structured guidance.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-11`,
        title: "Year 11 (GCSE)",
        summary: "Year 11 Maths focuses on final GCSE preparation and achieving top grades.",
        overview:
          "Year 11 Maths focuses on final GCSE preparation and achieving top grades.",
        whatStudentsLearn: [
          "Advanced problem-solving",
          "Past paper practice",
          "Exam strategies",
          "Core topic revision",
        ],
        keySkillsDeveloped: [
          "Exam confidence",
          "Time management",
          "Accuracy under pressure",
        ],
        howWeHelp:
          "We focus on targeted revision and exam preparation for maximum performance.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-12`,
        title: "Year 12 (A-Level)",
        summary: "Year 12 Maths introduces A-Level topics with focus on advanced algebra and calculus.",
        overview:
          "Year 12 Maths introduces A-Level topics with focus on advanced algebra and calculus.",
        whatStudentsLearn: [
          "Algebra and functions",
          "Calculus (intro)",
          "Trigonometry",
          "Statistics",
          "Mechanics",
        ],
        keySkillsDeveloped: [
          "Advanced reasoning",
          "Analytical thinking",
          "Problem-solving",
        ],
        howWeHelp:
          "We guide students through complex topics with structured lessons and practice.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-13`,
        title: "Year 13 (A-Level)",
        summary: "Year 13 Maths completes A-Level preparation with advanced concepts and exam focus.",
        overview:
          "Year 13 Maths completes A-Level preparation with advanced concepts and exam focus.",
        whatStudentsLearn: [
          "Advanced calculus",
          "Mathematical modelling",
          "Statistics and probability",
          "Mechanics",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced problem-solving",
          "Exam readiness",
        ],
        howWeHelp:
          "We provide intensive exam preparation and help students achieve top grades.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-maths`,
      name: "Maths",
      shortDescription: `Maths pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: ukMathGrades,
    };
  }

  if (countryName === "USA" && subjectName === "Maths") {
    const mathGrades = [
      {
        id: `${countryName.toLowerCase()}-maths-0`,
        title: "Kindergarten (KG)",
        summary:
          "In Kindergarten, students begin developing foundational mathematical understanding through visual and hands-on learning.",
        overview:
          "In Kindergarten, students begin developing foundational mathematical understanding through visual and hands-on learning. The focus is on number recognition, counting, patterns, and simple operations that build early confidence in maths.",
        whatStudentsLearn: [
          "Counting numbers up to 100 using objects and visuals",
          "Recognizing, reading, and writing numbers",
          "Basic addition and subtraction using pictures and real-life examples",
          "Identifying and naming shapes (circle, square, triangle, rectangle)",
          "Understanding patterns and sorting objects",
          "Comparing quantities (greater than, less than, equal to)",
          "Introduction to measurement concepts (length, size, weight)",
        ],
        keySkillsDeveloped: [
          "Strong number sense and recognition",
          "Visual understanding of mathematical concepts",
          "Early problem-solving ability",
          "Logical thinking and pattern recognition",
          "Confidence in basic numerical tasks",
        ],
        howWeHelp:
          "We use engaging activities, visual tools, and simple explanations to make maths enjoyable and easy to understand. Our tutors focus on building strong foundational skills while ensuring each child learns at their own pace.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-1`,
        title: "Grade 1",
        summary:
          "In Grade 1, students strengthen their understanding of numbers and begin solving more structured mathematical problems.",
        overview:
          "In Grade 1, students strengthen their understanding of numbers and begin solving more structured mathematical problems. The focus is on building fluency in addition and subtraction, improving number sense, and introducing basic measurement and time concepts.",
        whatStudentsLearn: [
          "Addition and subtraction within 20",
          "Understanding place value using tens and ones",
          "Counting forward and backward within 100",
          "Comparing numbers and identifying greater than or less than",
          "Solving simple word problems",
          "Telling time to the hour and half hour",
          "Measuring lengths using non-standard and standard units",
          "Recognizing basic two-dimensional and three-dimensional shapes",
        ],
        keySkillsDeveloped: [
          "Fluency with basic addition and subtraction",
          "Improved number sense and mental maths",
          "Early problem-solving strategies",
          "Ability to understand and compare quantities",
          "Confidence in applying maths to everyday situations",
        ],
        howWeHelp:
          "Our tutors guide students step by step to strengthen core arithmetic skills and improve understanding of number relationships. We use simple explanations, consistent practice, and engaging examples to help children become more confident and accurate in maths.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-2`,
        title: "Grade 2",
        summary:
          "In Grade 2, students expand their arithmetic knowledge and begin working more confidently with larger numbers.",
        overview:
          "In Grade 2, students expand their arithmetic knowledge and begin working more confidently with larger numbers. The year focuses on addition, subtraction, early multiplication concepts, place value, and real-life applications such as time and money.",
        whatStudentsLearn: [
          "Addition and subtraction within 100 and beyond",
          "Understanding place value up to hundreds",
          "Skip counting and introduction to multiplication concepts",
          "Solving one-step and two-step word problems",
          "Working with money and making simple calculations",
          "Reading clocks and understanding time intervals",
          "Measuring length using standard units",
          "Interpreting simple charts and picture graphs",
        ],
        keySkillsDeveloped: [
          "Accuracy in addition and subtraction",
          "Stronger number fluency and place value understanding",
          "Improved problem-solving ability",
          "Ability to connect maths with real-life situations",
          "Growing confidence in handling larger numbers",
        ],
        howWeHelp:
          "We help students strengthen their arithmetic foundations through guided practice, visual models, and real-life examples. Our tutors focus on helping learners understand the logic behind calculations so they can apply maths with greater confidence and independence.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-3`,
        title: "Grade 3",
        summary:
          "In Grade 3, students move from basic arithmetic to more structured problem-solving.",
        overview:
          "In Grade 3, students move from basic arithmetic to more structured problem-solving. The focus is on building strong multiplication and division foundations, understanding fractions, and applying maths in practical and meaningful ways.",
        whatStudentsLearn: [
          "Multiplication and division within 100",
          "Understanding and representing fractions",
          "Solving one-step and multi-step word problems",
          "Measuring length, mass, and volume",
          "Understanding area and perimeter at an introductory level",
          "Reading and interpreting bar graphs and picture graphs",
          "Recognizing patterns and number relationships",
          "Working with basic geometry concepts",
        ],
        keySkillsDeveloped: [
          "Strong multiplication and division fluency",
          "Improved problem-solving and reasoning",
          "Better understanding of number relationships",
          "Ability to apply maths to real-life situations",
          "Confidence in handling more complex questions",
        ],
        howWeHelp:
          "At Get Me Tutor, we break multiplication, division, and fractions into simple, understandable steps. Our tutors provide focused practice and support to help students build fluency, improve accuracy, and feel more confident in solving problems independently.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-4`,
        title: "Grade 4",
        summary:
          "In Grade 4, students deepen their understanding of arithmetic and begin handling larger numbers and more detailed operations.",
        overview:
          "In Grade 4, students deepen their understanding of arithmetic and begin handling larger numbers and more detailed operations. The year focuses on multi-digit multiplication, division, fractions, decimals, and stronger problem-solving skills.",
        whatStudentsLearn: [
          "Multi-digit addition and subtraction",
          "Multi-digit multiplication",
          "Long division basics",
          "Understanding equivalent fractions and comparing fractions",
          "Introduction to decimals",
          "Measuring angles and exploring geometry concepts",
          "Solving word problems involving multiple operations",
          "Interpreting and organizing data",
        ],
        keySkillsDeveloped: [
          "Accuracy in calculations with larger numbers",
          "Stronger step-by-step problem-solving ability",
          "Better understanding of fractions and decimals",
          "Logical reasoning and organization",
          "Confidence in using multiple operations together",
        ],
        howWeHelp:
          "Our tutors help students approach larger calculations with clear methods and structured guidance. We simplify difficult concepts such as long division and fractions, helping learners build strong understanding and avoid confusion as maths becomes more advanced.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-5`,
        title: "Grade 5",
        summary:
          "In Grade 5, students strengthen their understanding of fractions, decimals, measurement, and introductory algebraic thinking.",
        overview:
          "In Grade 5, students strengthen their understanding of fractions, decimals, measurement, and introductory algebraic thinking. The focus is on building precision, reasoning, and readiness for middle school mathematics.",
        whatStudentsLearn: [
          "Adding, subtracting, multiplying, and dividing fractions",
          "Working confidently with decimals",
          "Understanding volume and measurement",
          "Interpreting numerical expressions",
          "Solving multi-step word problems",
          "Plotting points on coordinate grids",
          "Understanding patterns and basic algebraic relationships",
          "Interpreting graphs and data sets",
        ],
        keySkillsDeveloped: [
          "Precision in working with fractions and decimals",
          "Improved analytical thinking",
          "Stronger multi-step problem-solving",
          "Better understanding of mathematical patterns",
          "Readiness for more abstract mathematical concepts",
        ],
        howWeHelp:
          "We support students by making fractions, decimals, and multi-step problems easier to understand through clear explanations and guided practice. Our tutors focus on building both confidence and accuracy so students are prepared for the transition into middle school maths.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-6`,
        title: "Grade 6",
        summary:
          "In Grade 6, students transition into more advanced mathematical thinking.",
        overview:
          "In Grade 6, students transition into more advanced mathematical thinking. The curriculum introduces ratios, integers, algebraic expressions, and data analysis, helping students move from arithmetic into more abstract concepts.",
        whatStudentsLearn: [
          "Ratios, rates, and percentages",
          "Operations with fractions and decimals",
          "Integers and rational numbers",
          "Writing and evaluating algebraic expressions",
          "Solving simple equations",
          "Understanding area, surface area, and volume",
          "Interpreting statistical data",
          "Working with coordinate planes and graphs",
        ],
        keySkillsDeveloped: [
          "Analytical thinking and reasoning",
          "Ability to understand and use algebraic language",
          "Greater confidence with problem-solving",
          "Stronger conceptual understanding of number operations",
          "Improved ability to interpret data and relationships",
        ],
        howWeHelp:
          "Our tutors guide students through the transition from basic arithmetic to abstract mathematical thinking. We explain new concepts in a step-by-step way, reinforce understanding through practice, and help learners become more confident in handling middle school maths.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-7`,
        title: "Grade 7",
        summary:
          "In Grade 7, students continue building on algebraic and numerical concepts while developing stronger reasoning and problem-solving skills.",
        overview:
          "In Grade 7, students continue building on algebraic and numerical concepts while developing stronger reasoning and problem-solving skills. The curriculum becomes more analytical and focuses on applying maths in a structured way.",
        whatStudentsLearn: [
          "Operations with rational numbers",
          "Algebraic expressions and equations",
          "Proportional relationships",
          "Percent problems and real-life applications",
          "Geometry involving angles, area, and volume",
          "Probability and simple statistics",
          "Solving multi-step equations and inequalities",
          "Analyzing graphs and mathematical relationships",
        ],
        keySkillsDeveloped: [
          "Stronger algebraic thinking",
          "Improved logical reasoning",
          "Ability to solve multi-step problems",
          "Better understanding of proportional relationships",
          "Greater confidence in applying concepts in different contexts",
        ],
        howWeHelp:
          "We help students build strong algebra foundations while improving their understanding of proportions, equations, and geometry. Our tutors focus on clarity, method, and repeated practice so learners can apply mathematical ideas more independently and accurately.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-8`,
        title: "Grade 8",
        summary:
          "In Grade 8, students prepare for high school mathematics by working with linear equations, functions, transformations, and more advanced geometry.",
        overview:
          "In Grade 8, students prepare for high school mathematics by working with linear equations, functions, transformations, and more advanced geometry. The focus is on connecting concepts and building readiness for algebra and higher-level maths.",
        whatStudentsLearn: [
          "Linear equations and systems of equations",
          "Functions and graphing relationships",
          "Exponents and scientific notation",
          "Understanding slope and rate of change",
          "Transformations in geometry",
          "Volume and geometry applications",
          "Data analysis and statistics",
          "Solving real-world algebraic problems",
        ],
        keySkillsDeveloped: [
          "Advanced problem-solving ability",
          "Graph interpretation and analysis",
          "Stronger algebraic reasoning",
          "Ability to connect equations with real-life situations",
          "Readiness for high school level maths",
        ],
        howWeHelp:
          "Our tutors help students understand how equations, graphs, and functions are connected. We provide structured support for more advanced topics and ensure learners build the confidence and skills needed for success in high school mathematics.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-9`,
        title: "Grade 9",
        summary:
          "In Grade 9, students begin high school mathematics with a strong focus on Algebra I concepts.",
        overview:
          "In Grade 9, students begin high school mathematics with a strong focus on Algebra I concepts. The curriculum emphasizes equations, inequalities, functions, graphing, and foundational algebraic reasoning.",
        whatStudentsLearn: [
          "Solving linear equations and inequalities",
          "Understanding and graphing functions",
          "Working with polynomials",
          "Factoring algebraic expressions",
          "Solving systems of equations",
          "Interpreting graphs and mathematical models",
          "Using algebra in word problems",
          "Introduction to quadratic relationships",
        ],
        keySkillsDeveloped: [
          "Strong algebraic thinking",
          "Logical reasoning and mathematical organization",
          "Ability to model real-world situations using equations",
          "Improved graph analysis",
          "Confidence in solving more abstract problems",
        ],
        howWeHelp:
          "We help students build a strong high school maths foundation by teaching algebra in a clear and structured way. Our tutors focus on helping learners understand not just how to solve problems, but why each method works, which leads to better retention and performance.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-10`,
        title: "Grade 10",
        summary:
          "In Grade 10, students usually focus on geometry while continuing to strengthen algebra skills.",
        overview:
          "In Grade 10, students usually focus on geometry while continuing to strengthen algebra skills. The curriculum emphasizes reasoning, proofs, coordinate geometry, trigonometry basics, and spatial understanding.",
        whatStudentsLearn: [
          "Properties of lines, angles, and triangles",
          "Congruence and similarity",
          "Coordinate geometry",
          "Circles and geometric constructions",
          "Area, surface area, and volume",
          "Introductory trigonometry",
          "Writing and understanding geometric proofs",
          "Applying geometry in real-world contexts",
        ],
        keySkillsDeveloped: [
          "Spatial reasoning",
          "Logical proof-based thinking",
          "Stronger understanding of geometric relationships",
          "Ability to solve multi-step geometry problems",
          "Greater confidence in visual and analytical reasoning",
        ],
        howWeHelp:
          "Our tutors simplify geometry by explaining concepts visually and logically. We help students understand proofs, shapes, angles, and relationships in a structured way so they can solve geometry problems more accurately and confidently.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-11`,
        title: "Grade 11",
        summary:
          "In Grade 11, students often study Algebra II, advanced functions, and trigonometry.",
        overview:
          "In Grade 11, students often study Algebra II, advanced functions, and trigonometry. The curriculum becomes more rigorous and focuses on preparing students for upper-level maths and standardized exams.",
        whatStudentsLearn: [
          "Advanced algebraic expressions and equations",
          "Functions and transformations",
          "Polynomial, exponential, and logarithmic functions",
          "Trigonometric ratios and identities",
          "Sequences and series",
          "Complex numbers",
          "Graphing advanced functions",
          "Solving higher-level word problems",
        ],
        keySkillsDeveloped: [
          "Advanced analytical thinking",
          "Stronger function analysis and graph interpretation",
          "Ability to solve complex equations",
          "Improved mathematical reasoning",
          "Preparation for pre-calculus and college readiness",
        ],
        howWeHelp:
          "We support students through advanced algebra and trigonometry with step-by-step explanations and focused practice. Our tutors help learners build deeper conceptual understanding so they can handle challenging topics with greater confidence.",
      },
      {
        id: `${countryName.toLowerCase()}-maths-12`,
        title: "Grade 12",
        summary:
          "In Grade 12, students prepare for college-level mathematics through advanced topics such as pre-calculus, trigonometry, probability, and statistics.",
        overview:
          "In Grade 12, students prepare for college-level mathematics through advanced topics such as pre-calculus, trigonometry, probability, and statistics. The focus is on mastering higher-level reasoning and exam readiness.",
        whatStudentsLearn: [
          "Advanced functions and their behavior",
          "Pre-calculus concepts",
          "Trigonometric functions and equations",
          "Probability and statistics",
          "Mathematical modeling",
          "Advanced graphing and analysis",
          "Problem-solving involving multiple concepts",
          "Preparation for final assessments and college-level expectations",
        ],
        keySkillsDeveloped: [
          "Critical thinking and advanced reasoning",
          "Ability to solve complex multi-step problems",
          "Strong readiness for college-level maths",
          "Improved exam strategy and confidence",
          "Deeper understanding of advanced mathematical relationships",
        ],
        howWeHelp:
          "At Get Me Tutor, we provide structured support for advanced maths and exam preparation. Our tutors help students strengthen weak areas, master higher-level concepts, and approach final assessments with confidence and clarity.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-maths`,
      name: "Maths",
      shortDescription: `Maths pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: mathGrades,
    };
  }

  if (subjectName === "Maths") {
    const grade2MathsTemplate = {
      overview:
        "In Grade 2, students expand their arithmetic knowledge and begin working more confidently with larger numbers. The year focuses on addition, subtraction, early multiplication concepts, place value, and real-life applications such as time and money.",
      whatStudentsLearn: [
        "Addition and subtraction within 100 and beyond",
        "Understanding place value up to hundreds",
        "Skip counting and introduction to multiplication concepts",
        "Solving one-step and two-step word problems",
        "Working with money and making simple calculations",
        "Reading clocks and understanding time intervals",
        "Measuring length using standard units",
        "Interpreting simple charts and picture graphs",
      ],
      keySkillsDeveloped: [
        "Accuracy in addition and subtraction",
        "Stronger number fluency and place value understanding",
        "Improved problem-solving ability",
        "Ability to connect maths with real-life situations",
        "Growing confidence in handling larger numbers",
      ],
      howWeHelp:
        "We help students strengthen their arithmetic foundations through guided practice, visual models, and real-life examples. Our tutors focus on helping learners understand the logic behind calculations so they can apply maths with greater confidence and independence.",
    };

    // Build grades for this country using createGradeContent, and override Grade 2 locally
    const mathsGrades = gradeSequence.map((_, gradeIndex) => {
      const base = createGradeContent(countryName, "Maths", gradeIndex);
      if (gradeIndex === 2) {
        // merge the template into the base grade object without relying on syllabusData
        return {
          ...base,
          overview: grade2MathsTemplate.overview,
          whatStudentsLearn: grade2MathsTemplate.whatStudentsLearn,
          keySkillsDeveloped: grade2MathsTemplate.keySkillsDeveloped,
          howWeHelp: grade2MathsTemplate.howWeHelp,
        };
      }
      return base;
    });

    return {
      id: `${countryName.toLowerCase()}-maths`,
      name: "Maths",
      shortDescription: `Maths pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: mathsGrades,
    };
  }

  if (countryName === "UK" && subjectName === "English") {
    const englishGrades = [
      {
        id: `${countryName.toLowerCase()}-english-reception`,
        title: "Reception (Early Years)",
        summary:
          "In Reception English (UK curriculum), children begin developing early literacy skills through phonics, listening, speaking, and simple reading activities.",
        overview:
          "In Reception English (UK curriculum), children begin developing early literacy skills through phonics, listening, speaking, and simple reading activities.",
        whatStudentsLearn: [
          "Letter recognition and phonics sounds",
          "Basic vocabulary development",
          "Listening and speaking skills",
          "Recognizing simple words",
          "Early reading and storytelling",
          "Understanding simple instructions",
        ],
        keySkillsDeveloped: [
          "Early reading readiness",
          "Listening comprehension",
          "Vocabulary building",
          "Confidence in speaking",
        ],
        howWeHelp:
          "We use phonics-based learning and interactive activities to make early English fun and engaging.",
      },
      {
        id: `${countryName.toLowerCase()}-english-1`,
        title: "Year 1",
        summary:
          "Year 1 English focuses on phonics, basic reading, and simple sentence writing.",
        overview:
          "Year 1 English focuses on phonics, basic reading, and simple sentence writing.",
        whatStudentsLearn: [
          "Phonics and word decoding",
          "Reading simple sentences",
          "Writing basic sentences",
          "Introduction to punctuation",
          "Vocabulary building",
        ],
        keySkillsDeveloped: [
          "Reading fluency",
          "Sentence formation",
          "Basic comprehension",
        ],
        howWeHelp:
          "We guide students step-by-step to build strong reading and writing foundations.",
      },
      {
        id: `${countryName.toLowerCase()}-english-2`,
        title: "Year 2",
        summary:
          "Year 2 English builds on reading fluency and introduces structured writing and grammar basics.",
        overview:
          "Year 2 English builds on reading fluency and introduces structured writing and grammar basics.",
        whatStudentsLearn: [
          "Reading short stories with understanding",
          "Writing short paragraphs",
          "Grammar basics (nouns, verbs, adjectives)",
          "Punctuation and sentence structure",
          "Answering comprehension questions",
        ],
        keySkillsDeveloped: [
          "Reading comprehension",
          "Writing clarity",
          "Grammar understanding",
        ],
        howWeHelp:
          "We focus on improving fluency and helping students express ideas clearly.",
      },
      {
        id: `${countryName.toLowerCase()}-english-3`,
        title: "Year 3",
        summary:
          "Year 3 English introduces structured reading and writing, focusing on comprehension and paragraph writing.",
        overview:
          "Year 3 English introduces structured reading and writing, focusing on comprehension and paragraph writing.",
        whatStudentsLearn: [
          "Reading comprehension strategies",
          "Writing structured paragraphs",
          "Vocabulary development",
          "Grammar and sentence structure",
          "Story writing basics",
        ],
        keySkillsDeveloped: [
          "Analytical reading",
          "Structured writing",
          "Vocabulary usage",
        ],
        howWeHelp:
          "We help students improve comprehension and writing through guided practice.",
      },
      {
        id: `${countryName.toLowerCase()}-english-4`,
        title: "Year 4",
        summary:
          "Year 4 English focuses on deeper comprehension and developing writing skills.",
        overview:
          "Year 4 English focuses on deeper comprehension and developing writing skills.",
        whatStudentsLearn: [
          "Reading longer texts",
          "Writing paragraphs and short essays",
          "Grammar rules and punctuation",
          "Vocabulary building",
          "Identifying key ideas",
        ],
        keySkillsDeveloped: [
          "Reading analysis",
          "Writing organization",
          "Grammar accuracy",
        ],
        howWeHelp:
          "We guide students in structuring their writing and improving clarity.",
      },
      {
        id: `${countryName.toLowerCase()}-english-5`,
        title: "Year 5",
        summary:
          "Year 5 English develops advanced comprehension and introduces essay-style writing.",
        overview:
          "Year 5 English develops advanced comprehension and introduces essay-style writing.",
        whatStudentsLearn: [
          "Reading and analyzing texts",
          "Writing structured essays",
          "Grammar and punctuation",
          "Vocabulary development",
          "Identifying themes and ideas",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Essay writing",
          "Text analysis",
        ],
        howWeHelp:
          "We support students in writing clearly and understanding complex texts.",
      },
      {
        id: `${countryName.toLowerCase()}-english-6`,
        title: "Year 6",
        summary:
          "Year 6 English prepares students for KS2 SATs and secondary school.",
        overview:
          "Year 6 English prepares students for KS2 SATs and secondary school.",
        whatStudentsLearn: [
          "Reading comprehension (SATs focus)",
          "Writing structured essays",
          "Grammar and punctuation",
          "Vocabulary and spelling",
          "Answering exam-style questions",
        ],
        keySkillsDeveloped: [
          "Exam readiness",
          "Writing clarity",
          "Reading accuracy",
        ],
        howWeHelp:
          "We focus on SATs preparation, improving speed, accuracy, and confidence.",
      },
      {
        id: `${countryName.toLowerCase()}-english-7`,
        title: "Year 7",
        summary:
          "Year 7 English builds secondary-level skills, focusing on reading analysis and structured writing.",
        overview:
          "Year 7 English builds secondary-level skills, focusing on reading analysis and structured writing.",
        whatStudentsLearn: [
          "Analyzing texts",
          "Writing essays",
          "Grammar and language use",
          "Vocabulary expansion",
          "Understanding tone and style",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Writing structure",
          "Communication skills",
        ],
        howWeHelp:
          "We help students transition smoothly into secondary-level English.",
      },
      {
        id: `${countryName.toLowerCase()}-english-8`,
        title: "Year 8",
        summary:
          "Year 8 English develops deeper understanding of texts and improves writing skills.",
        overview:
          "Year 8 English develops deeper understanding of texts and improves writing skills.",
        whatStudentsLearn: [
          "Text analysis",
          "Writing structured essays",
          "Grammar and punctuation",
          "Vocabulary building",
          "Comparing texts",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Writing clarity",
          "Text interpretation",
        ],
        howWeHelp:
          "We help students strengthen analysis and writing skills through guided practice.",
      },
      {
        id: `${countryName.toLowerCase()}-english-9`,
        title: "Year 9",
        summary:
          "Year 9 English prepares students for GCSE by developing advanced reading and writing skills.",
        overview:
          "Year 9 English prepares students for GCSE by developing advanced reading and writing skills.",
        whatStudentsLearn: [
          "Analyzing literature",
          "Writing essays and responses",
          "Grammar and language use",
          "Understanding themes and characters",
          "Argument writing",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Essay writing",
          "GCSE readiness",
        ],
        howWeHelp:
          "We build strong foundations for GCSE English success.",
      },
      {
        id: `${countryName.toLowerCase()}-english-10`,
        title: "Year 10 (GCSE)",
        summary:
          "Year 10 English begins GCSE preparation with focus on literature and language analysis.",
        overview:
          "Year 10 English begins GCSE preparation with focus on literature and language analysis.",
        whatStudentsLearn: [
          "Literature texts (novels, plays, poetry)",
          "Language analysis",
          "Writing essays and responses",
          "Grammar and vocabulary",
          "Exam techniques",
        ],
        keySkillsDeveloped: [
          "Text analysis",
          "Essay writing",
          "Exam preparation",
        ],
        howWeHelp:
          "We provide structured GCSE preparation with practice and guidance.",
      },
      {
        id: `${countryName.toLowerCase()}-english-11`,
        title: "Year 11 (GCSE)",
        summary:
          "Year 11 English focuses on final GCSE preparation and exam success.",
        overview:
          "Year 11 English focuses on final GCSE preparation and exam success.",
        whatStudentsLearn: [
          "Advanced text analysis",
          "Writing exam responses",
          "Past paper practice",
          "Exam strategies",
        ],
        keySkillsDeveloped: [
          "Exam confidence",
          "Time management",
          "Analytical thinking",
        ],
        howWeHelp:
          "We focus on targeted revision and exam performance improvement.",
      },
      {
        id: `${countryName.toLowerCase()}-english-12`,
        title: "Year 12 (A-Level)",
        summary:
          "Year 12 English introduces A-Level concepts, focusing on deeper literary analysis and writing.",
        overview:
          "Year 12 English introduces A-Level concepts, focusing on deeper literary analysis and writing.",
        whatStudentsLearn: [
          "Advanced literature study",
          "Essay writing",
          "Language analysis",
          "Critical thinking",
          "Research skills",
        ],
        keySkillsDeveloped: [
          "Analytical reasoning",
          "Advanced writing",
          "Interpretation skills",
        ],
        howWeHelp:
          "We guide students through complex texts and improve writing skills.",
      },
      {
        id: `${countryName.toLowerCase()}-english-13`,
        title: "Year 13 (A-Level)",
        summary:
          "Year 13 English prepares students for final A-Level exams and university-level study.",
        overview:
          "Year 13 English prepares students for final A-Level exams and university-level study.",
        whatStudentsLearn: [
          "Advanced literary analysis",
          "Critical essays",
          "Research-based writing",
          "Exam preparation",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced communication",
          "Exam readiness",
        ],
        howWeHelp:
          "We provide structured support and exam-focused preparation for top performance.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-english`,
      name: "English",
      shortDescription: `English pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: englishGrades,
    };
  }

  // Canada-specific English syllabus (custom grade content)
  if (countryName === "Canada" && subjectName === "English") {
    const englishGrades = [
      {
        id: `${countryName.toLowerCase()}-english-0`,
        title: "Kindergarten (KG)",
        summary:
          "In Kindergarten English (Canada curriculum), students begin developing early literacy skills through phonics, listening, speaking, and simple reading activities.",
        overview:
          "In Kindergarten English (Canada curriculum), students begin developing early literacy skills through phonics, listening, speaking, and simple reading activities. The focus is on building familiarity with letters, sounds, and basic communication.",
        whatStudentsLearn: [
          "Letter recognition and phonics sounds",
          "Basic vocabulary development",
          "Listening and speaking skills",
          "Recognizing simple words",
          "Introduction to reading short texts",
          "Understanding basic instructions",
        ],
        keySkillsDeveloped: [
          "Early reading readiness",
          "Listening comprehension",
          "Vocabulary building",
          "Confidence in speaking",
          "Basic communication skills",
        ],
        howWeHelp:
          "We use phonics-based learning, visual aids, and interactive activities to help children build strong early literacy skills in a fun and engaging way.",
      },
      {
        id: `${countryName.toLowerCase()}-english-1`,
        title: "Grade 1",
        summary:
          "In Grade 1 English (Canada curriculum), students develop basic reading and writing skills, focusing on phonics, sentence formation, and comprehension.",
        overview:
          "In Grade 1 English (Canada curriculum), students develop basic reading and writing skills, focusing on phonics, sentence formation, and comprehension.",
        whatStudentsLearn: [
          "Reading simple sentences and stories",
          "Phonics and word decoding",
          "Writing basic sentences",
          "Vocabulary expansion",
          "Introduction to punctuation",
          "Listening and responding to texts",
        ],
        keySkillsDeveloped: [
          "Reading fluency",
          "Sentence formation",
          "Basic comprehension",
          "Vocabulary usage",
          "Confidence in writing",
        ],
        howWeHelp:
          "Our tutors guide students step-by-step in reading and writing, helping them build fluency and confidence through structured practice.",
      },
      {
        id: `${countryName.toLowerCase()}-english-2`,
        title: "Grade 2",
        summary:
          "In Grade 2, students improve reading fluency and begin writing short paragraphs while developing stronger grammar and comprehension skills.",
        overview:
          "In Grade 2, students improve reading fluency and begin writing short paragraphs while developing stronger grammar and comprehension skills.",
        whatStudentsLearn: [
          "Reading longer texts with understanding",
          "Writing short paragraphs",
          "Grammar basics (nouns, verbs, adjectives)",
          "Sentence structure",
          "Vocabulary development",
          "Answering comprehension questions",
        ],
        keySkillsDeveloped: [
          "Reading fluency",
          "Comprehension skills",
          "Grammar understanding",
          "Writing clarity",
          "Logical thinking",
        ],
        howWeHelp:
          "We support students with guided reading and structured exercises to strengthen comprehension and writing skills.",
      },
      {
        id: `${countryName.toLowerCase()}-english-3`,
        title: "Grade 3",
        summary:
          "In Grade 3 English (Canada curriculum), students move from learning to read toward reading to learn, while developing structured writing skills.",
        overview:
          "In Grade 3 English (Canada curriculum), students move from learning to read toward reading to learn, while developing structured writing skills.",
        whatStudentsLearn: [
          "Reading comprehension strategies",
          "Writing structured paragraphs",
          "Grammar and sentence construction",
          "Vocabulary expansion",
          "Understanding story elements",
          "Answering detailed questions",
        ],
        keySkillsDeveloped: [
          "Strong comprehension",
          "Structured writing",
          "Analytical reading",
          "Vocabulary usage",
          "Communication skills",
        ],
        howWeHelp:
          "We focus on improving comprehension and writing through step-by-step guidance and practice.",
      },
      {
        id: `${countryName.toLowerCase()}-english-4`,
        title: "Grade 4",
        summary:
          "In Grade 4, students develop deeper reading comprehension and begin writing longer and more organized pieces.",
        overview:
          "In Grade 4, students develop deeper reading comprehension and begin writing longer and more organized pieces.",
        whatStudentsLearn: [
          "Reading more complex texts",
          "Writing paragraphs and short essays",
          "Grammar rules and sentence variety",
          "Vocabulary building",
          "Identifying main ideas and details",
          "Basic research skills",
        ],
        keySkillsDeveloped: [
          "Analytical reading",
          "Writing organization",
          "Grammar accuracy",
          "Critical thinking",
          "Improved expression",
        ],
        howWeHelp:
          "We help students structure their writing and improve comprehension through guided practice and feedback.",
      },
      {
        id: `${countryName.toLowerCase()}-english-5`,
        title: "Grade 5",
        summary:
          "In Grade 5 English (Canada curriculum), students strengthen comprehension and develop essay writing skills.",
        overview:
          "In Grade 5 English (Canada curriculum), students strengthen comprehension and develop essay writing skills.",
        whatStudentsLearn: [
          "Reading and analyzing texts",
          "Writing structured essays",
          "Grammar and punctuation",
          "Vocabulary development",
          "Identifying themes and ideas",
          "Responding to texts",
        ],
        keySkillsDeveloped: [
          "Essay writing",
          "Critical thinking",
          "Reading analysis",
          "Grammar proficiency",
          "Clear communication",
        ],
        howWeHelp:
          "We guide students in writing structured responses and understanding texts deeply.",
      },
      {
        id: `${countryName.toLowerCase()}-english-6`,
        title: "Grade 6",
        summary:
          "In Grade 6, students work with more complex texts and improve analytical reading and writing skills.",
        overview:
          "In Grade 6, students work with more complex texts and improve analytical reading and writing skills.",
        whatStudentsLearn: [
          "Reading detailed texts",
          "Writing structured essays",
          "Grammar and sentence variety",
          "Vocabulary expansion",
          "Text analysis",
          "Summarizing information",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Structured writing",
          "Reading interpretation",
          "Grammar accuracy",
          "Communication skills",
        ],
        howWeHelp:
          "We help students break down complex texts and improve writing through structured guidance.",
      },
      {
        id: `${countryName.toLowerCase()}-english-7`,
        title: "Grade 7",
        summary:
          "In Grade 7 English (Canada curriculum), students focus on deeper text analysis and more advanced writing skills.",
        overview:
          "In Grade 7 English (Canada curriculum), students focus on deeper text analysis and more advanced writing skills.",
        whatStudentsLearn: [
          "Analyzing literature and informational texts",
          "Writing argumentative essays",
          "Grammar and language use",
          "Vocabulary development",
          "Understanding tone and style",
          "Supporting ideas with evidence",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Argumentative writing",
          "Text analysis",
          "Evidence-based reasoning",
          "Communication skills",
        ],
        howWeHelp:
          "We guide students in analyzing texts and writing strong, well-supported responses.",
      },
      {
        id: `${countryName.toLowerCase()}-english-8`,
        title: "Grade 8",
        summary:
          "In Grade 8, students refine their reading and writing skills and prepare for high school-level English.",
        overview:
          "In Grade 8, students refine their reading and writing skills and prepare for high school-level English.",
        whatStudentsLearn: [
          "Advanced reading comprehension",
          "Writing essays and reports",
          "Grammar and language structure",
          "Analyzing themes and ideas",
          "Comparing texts",
          "Research skills",
        ],
        keySkillsDeveloped: [
          "Analytical reading",
          "Structured writing",
          "Critical thinking",
          "Research ability",
          "Communication clarity",
        ],
        howWeHelp:
          "We help students build strong foundations in writing and analysis for high school readiness.",
      },
      {
        id: `${countryName.toLowerCase()}-english-9`,
        title: "Grade 9",
        summary:
          "In Grade 9 English (Canada curriculum), students begin high school English with a focus on literature analysis and structured writing.",
        overview:
          "In Grade 9 English (Canada curriculum), students begin high school English with a focus on literature analysis and structured writing.",
        whatStudentsLearn: [
          "Analyzing literary texts",
          "Writing essays and responses",
          "Grammar and style",
          "Vocabulary development",
          "Understanding themes and characters",
          "Supporting arguments with evidence",
        ],
        keySkillsDeveloped: [
          "Literary analysis",
          "Essay writing",
          "Critical thinking",
          "Communication skills",
          "Argument development",
        ],
        howWeHelp:
          "We support students in developing strong analytical and writing skills required for high school success.",
      },
      {
        id: `${countryName.toLowerCase()}-english-10`,
        title: "Grade 10",
        summary:
          "In Grade 10, students deepen their understanding of literature and improve advanced writing skills.",
        overview:
          "In Grade 10, students deepen their understanding of literature and improve advanced writing skills.",
        whatStudentsLearn: [
          "Analyzing complex texts",
          "Writing analytical essays",
          "Grammar and language refinement",
          "Vocabulary building",
          "Comparing literary works",
          "Understanding writing styles",
        ],
        keySkillsDeveloped: [
          "Advanced analysis",
          "Essay structuring",
          "Critical thinking",
          "Communication clarity",
          "Text interpretation",
        ],
        howWeHelp:
          "We guide students in writing well-structured essays and analyzing texts effectively.",
      },
      {
        id: `${countryName.toLowerCase()}-english-11`,
        title: "Grade 11",
        summary:
          "In Grade 11 English (Canada curriculum), students focus on advanced literature, critical thinking, and exam preparation.",
        overview:
          "In Grade 11 English (Canada curriculum), students focus on advanced literature, critical thinking, and exam preparation.",
        whatStudentsLearn: [
          "Advanced literary analysis",
          "Writing argumentative essays",
          "Understanding rhetorical devices",
          "Vocabulary development",
          "Research and writing skills",
          "Exam preparation",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Argument development",
          "Advanced writing",
          "Analytical reasoning",
          "Exam readiness",
        ],
        howWeHelp:
          "We help students master advanced writing and analysis skills while preparing for exams.",
      },
      {
        id: `${countryName.toLowerCase()}-english-12`,
        title: "Grade 12",
        summary:
          "In Grade 12, students prepare for college-level English with advanced writing, analysis, and communication skills.",
        overview:
          "In Grade 12, students prepare for college-level English with advanced writing, analysis, and communication skills.",
        whatStudentsLearn: [
          "Advanced essay writing",
          "Literary and critical analysis",
          "Research writing",
          "Vocabulary and language mastery",
          "Presentation and communication",
          "Exam preparation",
        ],
        keySkillsDeveloped: [
          "Advanced communication",
          "Critical thinking",
          "Research and writing skills",
          "Analytical reasoning",
          "College readiness",
        ],
        howWeHelp:
          "We provide structured support for advanced writing, analysis, and exam preparation to help students succeed beyond school.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-english`,
      name: "English",
      shortDescription: `English pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: englishGrades.map((grade) => normalizeGradeShape(grade)),
    };
  }

  // US-specific English syllabus (custom grade content)
  if (countryName === "USA" && subjectName === "English") {
    const englishGrades = [
      {
        id: `${countryName.toLowerCase()}-english-0`,
        title: "Kindergarten",
        summary: "In Kindergarten, students begin developing early literacy skills through phonics, listening, speaking, and simple reading activities.",
        details:
          "Overview:\nIn Kindergarten, students begin developing early literacy skills through phonics, listening, speaking, and simple reading activities. The focus is on building familiarity with letters, sounds, and basic communication.\n\nKey skills developed:\nStrong early reading readiness, listening comprehension, vocabulary building, confidence in speaking, and basic communication skills.\n\nHow we help at Get Me Tutor:\nWe use interactive activities, phonics-based learning, and simple reading exercises to help children build strong early literacy skills in a fun and engaging way.",
        outcomes: [
          "Letter recognition and phonics sounds",
          "Basic vocabulary development",
          "Listening and speaking skills",
          "Simple sentence formation",
          "Recognizing sight words",
          "Introduction to reading simple texts",
        ],
        ctaLabel: "View Details",
      },
      {
        id: `${countryName.toLowerCase()}-english-1`,
        title: "Grade 1",
        summary: "Grade 1 focuses on building foundational reading and writing skills.",
        details:
          "Overview:\nGrade 1 focuses on building foundational reading and writing skills. Students begin reading simple texts independently and forming complete sentences.\n\nKey skills developed:\nReading fluency, sentence construction, comprehension skills, vocabulary usage, and confidence in writing.\n\nHow we help at Get Me Tutor:\nOur tutors guide students step-by-step in reading and writing, helping them improve fluency and build confidence through structured practice.",
        outcomes: [
          "Reading simple sentences and short stories",
          "Phonics and decoding words",
          "Writing basic sentences",
          "Vocabulary expansion",
          "Understanding punctuation basics",
          "Listening and responding to stories",
        ],
        ctaLabel: "View Details",
      },
      {
        id: `${countryName.toLowerCase()}-english-2`,
        title: "Grade 2",
        summary: "In Grade 2, students improve reading fluency and begin writing more detailed sentences and short paragraphs.",
        details:
          "Overview:\nIn Grade 2, students improve reading fluency and begin writing more detailed sentences and short paragraphs.\n\nKey skills developed:\nImproved reading fluency, better comprehension, grammar understanding, writing clarity, and logical thinking.\n\nHow we help at Get Me Tutor:\nWe help students strengthen reading comprehension and writing skills through guided reading and structured exercises.",
        outcomes: [
          "Reading longer texts with understanding",
          "Writing short paragraphs",
          "Grammar basics (nouns, verbs, adjectives)",
          "Sentence structure",
          "Vocabulary development",
          "Answering comprehension questions",
        ],
        ctaLabel: "View Details",
      },
      {
        id: `${countryName.toLowerCase()}-english-3`,
        title: "Grade 3",
        summary: "Grade 3 is a key stage where students transition from learning to read to reading to learn.",
        details:
          "Overview:\nGrade 3 is a key stage where students transition from learning to read to reading to learn. Writing becomes more structured and detailed.\n\nKey skills developed:\nStrong comprehension ability, structured writing, analytical reading, vocabulary usage, and confidence in communication.\n\nHow we help at Get Me Tutor:\nWe focus on improving comprehension and writing through step-by-step guidance and practice, helping students express their ideas clearly.",
        outcomes: [
          "Reading comprehension strategies",
          "Writing structured paragraphs",
          "Grammar and sentence construction",
          "Vocabulary expansion",
          "Understanding story elements",
          "Answering detailed comprehension questions",
        ],
        ctaLabel: "View Details",
      },
      {
        id: `${countryName.toLowerCase()}-english-4`,
        title: "Grade 4",
        summary: "In Grade 4, students develop deeper reading comprehension and begin writing longer and more organized pieces.",
        details:
          "Overview:\nIn Grade 4, students develop deeper reading comprehension and begin writing longer and more organized pieces.\n\nKey skills developed:\nAnalytical reading, writing organization, grammar accuracy, critical thinking, and improved expression.\n\nHow we help at Get Me Tutor:\nWe help students structure their writing and improve comprehension through guided exercises and feedback.",
        outcomes: [
          "Reading complex texts",
          "Writing paragraphs and short essays",
          "Grammar rules and sentence variety",
          "Vocabulary building",
          "Understanding main ideas and details",
          "Basic research skills",
        ],
        ctaLabel: "View Details",
      },
      {
        id: `${countryName.toLowerCase()}-english-5`,
        title: "Grade 5",
        summary: "Grade 5 focuses on advanced comprehension and developing essay writing skills while strengthening grammar and vocabulary.",
        details:
          "Overview:\nGrade 5 focuses on advanced comprehension and developing essay writing skills while strengthening grammar and vocabulary.\n\nKey skills developed:\nEssay writing, critical thinking, reading analysis, grammar proficiency, and clear communication.\n\nHow we help at Get Me Tutor:\nWe guide students in writing structured essays and understanding texts deeply, preparing them for middle school.",
        outcomes: [
          "Reading and analyzing texts",
          "Writing essays and structured responses",
          "Grammar and punctuation",
          "Vocabulary development",
          "Identifying themes and main ideas",
          "Responding to texts critically",
        ],
        ctaLabel: "View Details",
      },
      {
        id: `${countryName.toLowerCase()}-english-6`,
        title: "Grade 6",
        summary: "In Grade 6, students develop stronger analytical reading and writing skills while working with more complex texts.",
        details:
          "Overview:\nIn Grade 6, students develop stronger analytical reading and writing skills while working with more complex texts.\n\nKey skills developed:\nAnalytical thinking, structured writing, reading interpretation, grammar accuracy, and communication skills.\n\nHow we help at Get Me Tutor:\nWe help students break down complex texts and improve their writing with clear structure and guidance.",
        outcomes: [
          "Reading comprehension of detailed texts",
          "Writing structured essays",
          "Grammar and sentence variety",
          "Vocabulary expansion",
          "Text analysis",
          "Summarizing and interpreting information",
        ],
        ctaLabel: "View Details",
      },
      {
        id: `${countryName.toLowerCase()}-english-7`,
        title: "Grade 7",
        summary: "Grade 7 focuses on deeper analysis of texts and more advanced writing skills.",
        details:
          "Overview:\nGrade 7 focuses on deeper analysis of texts and more advanced writing skills.\n\nKey skills developed:\nCritical thinking, argumentative writing, text analysis, evidence-based reasoning, and advanced communication.\n\nHow we help at Get Me Tutor:\nWe guide students in analyzing texts and writing strong, well-supported responses.",
        outcomes: [
          "Analyzing literature and informational texts",
          "Writing essays with arguments",
          "Grammar and language use",
          "Vocabulary development",
          "Understanding tone and style",
          "Supporting ideas with evidence",
        ],
        ctaLabel: "View Details",
      },
      {
        id: `${countryName.toLowerCase()}-english-8`,
        title: "Grade 8",
        summary: "In Grade 8, students refine their writing and reading skills, preparing for high school-level English.",
        details:
          "Overview:\nIn Grade 8, students refine their writing and reading skills, preparing for high school-level English.\n\nKey skills developed:\nAnalytical reading, structured writing, critical thinking, research ability, and communication clarity.\n\nHow we help at Get Me Tutor:\nWe help students build strong foundations in writing and analysis for high school readiness.",
        outcomes: [
          "Advanced reading comprehension",
          "Writing essays and reports",
          "Grammar and language structure",
          "Analyzing themes and ideas",
          "Comparing texts",
          "Research skills",
        ],
        ctaLabel: "View Details",
      },
      {
        id: `${countryName.toLowerCase()}-english-9`,
        title: "Grade 9",
        summary: "Grade 9 introduces high school English, focusing on literature analysis and structured writing.",
        details:
          "Overview:\nGrade 9 introduces high school English, focusing on literature analysis and structured writing.\n\nKey skills developed:\nLiterary analysis, essay writing, critical thinking, communication skills, and argument development.\n\nHow we help at Get Me Tutor:\nWe support students in developing strong analytical and writing skills required for high school success.",
        outcomes: [
          "Analyzing literary texts",
          "Writing essays and responses",
          "Grammar and style",
          "Vocabulary development",
          "Understanding themes and characters",
          "Supporting arguments with evidence",
        ],
        ctaLabel: "View Details",
      },
      {
        id: `${countryName.toLowerCase()}-english-10`,
        title: "Grade 10",
        summary: "In Grade 10, students deepen their understanding of literature and improve advanced writing skills.",
        details:
          "Overview:\nIn Grade 10, students deepen their understanding of literature and improve advanced writing skills.\n\nKey skills developed:\nAdvanced analysis, essay structuring, critical thinking, communication clarity, and text interpretation.\n\nHow we help at Get Me Tutor:\nWe guide students in writing well-structured essays and analyzing texts effectively.",
        outcomes: [
          "Analyzing complex texts",
          "Writing analytical essays",
          "Grammar and language refinement",
          "Vocabulary building",
          "Comparing literary works",
          "Understanding writing styles",
        ],
        ctaLabel: "View Details",
      },
      {
        id: `${countryName.toLowerCase()}-english-11`,
        title: "Grade 11",
        summary: "Grade 11 focuses on advanced literature, critical thinking, and preparing for standardized tests.",
        details:
          "Overview:\nGrade 11 focuses on advanced literature, critical thinking, and preparing for standardized tests.\n\nKey skills developed:\nCritical thinking, argument development, advanced writing, analytical reasoning, and exam readiness.\n\nHow we help at Get Me Tutor:\nWe help students master advanced writing and analysis skills while preparing for exams.",
        outcomes: [
          "Advanced literary analysis",
          "Writing argumentative essays",
          "Understanding rhetorical devices",
          "Vocabulary development",
          "Research and writing skills",
          "Exam preparation",
        ],
        ctaLabel: "View Details",
      },
      {
        id: `${countryName.toLowerCase()}-english-12`,
        title: "Grade 12",
        summary: "Grade 12 prepares students for college-level English with a focus on advanced writing, analysis, and communication.",
        details:
          "Overview:\nGrade 12 prepares students for college-level English with a focus on advanced writing, analysis, and communication.\n\nKey skills developed:\nAdvanced communication, critical thinking, research and writing skills, analytical reasoning, and college readiness.\n\nHow we help at Get Me Tutor:\nWe provide structured support for advanced writing, analysis, and exam preparation to help students succeed beyond school.",
        outcomes: [
          "Advanced essay writing",
          "Literary and critical analysis",
          "Research writing",
          "Vocabulary and language mastery",
          "Presentation and communication",
          "Exam preparation",
        ],
        ctaLabel: "View Details",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-english`,
      name: "English",
      shortDescription: `English pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: englishGrades.map((grade) => normalizeGradeShape(grade)),
    };
  }

  if (countryName === "UK" && subjectName === "Science") {
    const scienceGrades = [
      {
        id: `${countryName.toLowerCase()}-science-reception`,
        title: "Reception (Early Years)",
        summary:
          "In Reception Science, children explore the world around them through observation, play, and simple investigations.",
        overview:
          "In Reception Science, children explore the world around them through observation, play, and simple investigations. The focus is on curiosity and understanding basic natural concepts.",
        whatStudentsLearn: [
          "Identifying plants and animals",
          "Understanding weather and seasons",
          "Using senses to explore",
          "Recognizing patterns in nature",
          "Simple cause and effect",
        ],
        keySkillsDeveloped: [
          "Observation",
          "Curiosity",
          "Basic questioning",
          "Understanding surroundings",
        ],
        howWeHelp:
          "We make science fun and engaging through visuals and simple real-life examples.",
      },
      {
        id: `${countryName.toLowerCase()}-science-1`,
        title: "Year 1",
        summary:
          "Year 1 Science introduces basic concepts of living things, materials, and everyday phenomena.",
        overview:
          "Year 1 Science introduces basic concepts of living things, materials, and everyday phenomena.",
        whatStudentsLearn: [
          "Living and non-living things",
          "Basic plant structure",
          "Seasonal changes",
          "Materials and their properties",
          "Simple experiments",
        ],
        keySkillsDeveloped: [
          "Observation",
          "Comparison",
          "Early scientific thinking",
        ],
        howWeHelp:
          "We use simple explanations and examples to build strong foundational understanding.",
      },
      {
        id: `${countryName.toLowerCase()}-science-2`,
        title: "Year 2",
        summary:
          "Year 2 Science develops understanding of life processes, habitats, and materials.",
        overview:
          "Year 2 Science develops understanding of life processes, habitats, and materials.",
        whatStudentsLearn: [
          "Life cycles (plants and animals)",
          "Habitats and environments",
          "Uses of materials",
          "Basic health and body awareness",
          "Simple scientific investigations",
        ],
        keySkillsDeveloped: [
          "Logical thinking",
          "Observation",
          "Understanding relationships",
        ],
        howWeHelp:
          "We help students connect concepts through structured lessons and visuals.",
      },
      {
        id: `${countryName.toLowerCase()}-science-3`,
        title: "Year 3",
        summary:
          "Year 3 Science introduces structured topics like forces, light, and plants.",
        overview:
          "Year 3 Science introduces structured topics like forces, light, and plants.",
        whatStudentsLearn: [
          "Forces and motion",
          "Light and shadows",
          "Plant life and growth",
          "Rocks and soils",
          "Basic scientific experiments",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Observation",
          "Scientific understanding",
        ],
        howWeHelp:
          "We simplify concepts and help students understand real-world applications.",
      },
      {
        id: `${countryName.toLowerCase()}-science-4`,
        title: "Year 4",
        summary:
          "Year 4 Science focuses on electricity, sound, and ecosystems.",
        overview:
          "Year 4 Science focuses on electricity, sound, and ecosystems.",
        whatStudentsLearn: [
          "Electricity basics",
          "Sound and vibrations",
          "Food chains and ecosystems",
          "States of matter",
          "Scientific enquiry",
        ],
        keySkillsDeveloped: [
          "Problem-solving",
          "Understanding systems",
          "Data interpretation",
        ],
        howWeHelp:
          "We guide students through experiments and concept-based learning.",
      },
      {
        id: `${countryName.toLowerCase()}-science-5`,
        title: "Year 5",
        summary:
          "Year 5 Science explores space, forces, and living systems in more detail.",
        overview:
          "Year 5 Science explores space, forces, and living systems in more detail.",
        whatStudentsLearn: [
          "Earth and space",
          "Forces (gravity, air resistance)",
          "Human life cycles",
          "Materials and changes",
          "Scientific investigations",
        ],
        keySkillsDeveloped: [
          "Logical reasoning",
          "Analytical thinking",
          "Problem-solving",
        ],
        howWeHelp:
          "We help students understand complex ideas through clear explanations.",
      },
      {
        id: `${countryName.toLowerCase()}-science-6`,
        title: "Year 6",
        summary:
          "Year 6 Science prepares students for secondary school with advanced topics and reasoning.",
        overview:
          "Year 6 Science prepares students for secondary school with advanced topics and reasoning.",
        whatStudentsLearn: [
          "Evolution and inheritance",
          "Electricity (advanced)",
          "Human body systems",
          "Light and reflection",
          "Scientific enquiry",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Scientific reasoning",
          "Problem-solving",
        ],
        howWeHelp:
          "We strengthen understanding and prepare students for KS3.",
      },
      {
        id: `${countryName.toLowerCase()}-science-7`,
        title: "Year 7",
        summary:
          "Year 7 Science introduces secondary-level biology, chemistry, and physics concepts.",
        overview:
          "Year 7 Science introduces secondary-level biology, chemistry, and physics concepts.",
        whatStudentsLearn: [
          "Cells and body systems",
          "Particles and matter",
          "Forces and motion",
          "Energy basics",
          "Scientific investigations",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Scientific reasoning",
          "Experiment skills",
        ],
        howWeHelp:
          "We ensure smooth transition to secondary science with clear explanations.",
      },
      {
        id: `${countryName.toLowerCase()}-science-8`,
        title: "Year 8",
        summary:
          "Year 8 Science develops deeper understanding of scientific concepts across all disciplines.",
        overview:
          "Year 8 Science develops deeper understanding of scientific concepts across all disciplines.",
        whatStudentsLearn: [
          "Chemical reactions",
          "Energy transfers",
          "Human body systems",
          "Ecology",
          "Waves and sound",
        ],
        keySkillsDeveloped: [
          "Logical reasoning",
          "Data analysis",
          "Problem-solving",
        ],
        howWeHelp:
          "We break down complex topics and improve understanding through structured practice.",
      },
      {
        id: `${countryName.toLowerCase()}-science-9`,
        title: "Year 9",
        summary:
          "Year 9 Science prepares students for GCSE by strengthening core concepts.",
        overview:
          "Year 9 Science prepares students for GCSE by strengthening core concepts.",
        whatStudentsLearn: [
          "Advanced biology concepts",
          "Chemical reactions",
          "Forces and energy",
          "Scientific analysis",
          "Practical skills",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "GCSE readiness",
          "Problem-solving",
        ],
        howWeHelp:
          "We build strong foundations for GCSE science success.",
      },
      {
        id: `${countryName.toLowerCase()}-science-10`,
        title: "Year 10 (GCSE)",
        summary:
          "Year 10 Science begins GCSE preparation, covering biology, chemistry, and physics topics in depth.",
        overview:
          "Year 10 Science begins GCSE preparation, covering biology, chemistry, and physics topics in depth.",
        whatStudentsLearn: [
          "Cell biology and genetics",
          "Chemical reactions and bonding",
          "Forces, energy, and electricity",
          "Scientific experiments",
          "Exam techniques",
        ],
        keySkillsDeveloped: [
          "Problem-solving",
          "Scientific reasoning",
          "Exam preparation",
        ],
        examBoards: ["AQA", "Edexcel (Pearson)", "OCR", "WJEC / Eduqas"],
        howWeHelp:
          "We provide exam-focused tutoring with past paper practice and targeted support.",
      },
      {
        id: `${countryName.toLowerCase()}-science-11`,
        title: "Year 11 (GCSE)",
        summary:
          "Year 11 Science focuses on final GCSE preparation and exam performance.",
        overview:
          "Year 11 Science focuses on final GCSE preparation and exam performance.",
        whatStudentsLearn: [
          "Advanced topic revision",
          "Practical-based questions",
          "Exam strategies",
          "Past paper practice",
        ],
        keySkillsDeveloped: [
          "Exam confidence",
          "Time management",
          "Accuracy",
        ],
        examBoards: ["AQA", "Edexcel", "OCR", "WJEC"],
        howWeHelp:
          "We focus on revision, exam strategies, and improving weak areas.",
      },
      {
        id: `${countryName.toLowerCase()}-science-12`,
        title: "Year 12 (A-Level)",
        summary:
          "Year 12 Science focuses on advanced concepts in biology, chemistry, or physics depending on subject choice.",
        overview:
          "Year 12 Science focuses on advanced concepts in biology, chemistry, or physics depending on subject choice.",
        whatStudentsLearn: [
          "Advanced theory",
          "Practical experiments",
          "Data analysis",
          "Subject-specific topics",
        ],
        keySkillsDeveloped: [
          "Analytical reasoning",
          "Scientific thinking",
          "Problem-solving",
        ],
        examBoards: ["AQA", "Edexcel", "OCR"],
        howWeHelp:
          "We guide students through advanced topics and help build strong understanding.",
      },
      {
        id: `${countryName.toLowerCase()}-science-13`,
        title: "Year 13 (A-Level)",
        summary:
          "Year 13 Science prepares students for final A-Level exams and higher education.",
        overview:
          "Year 13 Science prepares students for final A-Level exams and higher education.",
        whatStudentsLearn: [
          "Advanced concepts",
          "Research-based topics",
          "Exam-focused practice",
          "Complex problem-solving",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced analysis",
          "Exam readiness",
        ],
        examBoards: ["AQA", "Edexcel", "OCR"],
        howWeHelp:
          "We provide structured revision and exam-focused preparation for top results.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-science`,
      name: "Science",
      shortDescription: `Science pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: scienceGrades,
    };
  }

  if (countryName === "USA" && subjectName === "Science") {
    const scienceGrades = [
      {
        id: `${countryName.toLowerCase()}-science-0`,
        title: "Kindergarten (KG)",
        summary:
          "In Kindergarten, students are introduced to basic scientific concepts through observation, exploration, and hands-on activities.",
        overview:
          "In Kindergarten, students are introduced to basic scientific concepts through observation, exploration, and hands-on activities. The focus is on understanding the world around them in a simple and engaging way.",
        whatStudentsLearn: [
          "Identifying plants and animals",
          "Understanding weather and seasons",
          "Exploring basic needs of living things",
          "Recognizing simple patterns in nature",
          "Introduction to senses and observation",
          "Basic concepts of movement and force",
        ],
        keySkillsDeveloped: [
          "Observation skills",
          "Curiosity and exploration",
          "Basic questioning skills",
          "Understanding of surroundings",
          "Early scientific thinking",
        ],
        howWeHelp:
          "We make science fun and interactive by using simple explanations, visual examples, and real-life connections to help young learners stay curious and engaged.",
      },
      {
        id: `${countryName.toLowerCase()}-science-1`,
        title: "Grade 1",
        summary:
          "Grade 1 builds on early scientific awareness and introduces students to simple experiments and basic scientific ideas related to life, earth, and physical science.",
        overview:
          "Grade 1 builds on early scientific awareness and introduces students to simple experiments and basic scientific ideas related to life, earth, and physical science.",
        whatStudentsLearn: [
          "Living and non-living things",
          "Basic plant and animal characteristics",
          "Weather patterns and seasons",
          "Introduction to light and sound",
          "Simple forces like push and pull",
          "Basic experiments and observations",
        ],
        keySkillsDeveloped: [
          "Observation and recording",
          "Understanding basic concepts",
          "Asking questions",
          "Simple problem-solving",
          "Curiosity about nature",
        ],
        howWeHelp:
          "We guide students through simple experiments and explanations to help them understand science concepts in a clear and engaging way.",
      },
      {
        id: `${countryName.toLowerCase()}-science-2`,
        title: "Grade 2",
        summary:
          "In Grade 2, students begin to explore science in more detail, focusing on how things work and interact in the natural world.",
        overview:
          "In Grade 2, students begin to explore science in more detail, focusing on how things work and interact in the natural world.",
        whatStudentsLearn: [
          "Life cycles of plants and animals",
          "States of matter (solid, liquid, gas)",
          "Basic ecosystems",
          "Energy and simple machines",
          "Weather and environmental changes",
          "Observing and recording data",
        ],
        keySkillsDeveloped: [
          "Logical thinking",
          "Observation and comparison",
          "Understanding cause and effect",
          "Early data interpretation",
          "Scientific curiosity",
        ],
        howWeHelp:
          "We help students understand scientific ideas through examples, visual aids, and simple experiments that make learning enjoyable and meaningful.",
      },
      {
        id: `${countryName.toLowerCase()}-science-3`,
        title: "Grade 3",
        summary:
          "Grade 3 introduces more structured scientific learning, with a focus on understanding systems, environments, and basic physical science concepts.",
        overview:
          "Grade 3 introduces more structured scientific learning, with a focus on understanding systems, environments, and basic physical science concepts.",
        whatStudentsLearn: [
          "Plant and animal adaptations",
          "Ecosystems and food chains",
          "Forces and motion",
          "Basic properties of matter",
          "Weather patterns and climate",
          "Introduction to scientific investigations",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Understanding relationships in nature",
          "Problem-solving",
          "Observation and recording",
          "Applying concepts to real life",
        ],
        howWeHelp:
          "We break down scientific concepts into simple explanations and provide structured support to help students understand and apply their knowledge.",
      },
      {
        id: `${countryName.toLowerCase()}-science-4`,
        title: "Grade 4",
        summary:
          "In Grade 4, students deepen their understanding of science by exploring energy, earth science, and life science in greater detail.",
        overview:
          "In Grade 4, students deepen their understanding of science by exploring energy, earth science, and life science in greater detail.",
        whatStudentsLearn: [
          "Energy types and transfer",
          "Human body systems basics",
          "Earth structure and natural resources",
          "Properties of matter",
          "Simple electrical circuits",
          "Scientific experiments and observations",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Understanding scientific processes",
          "Experimentation skills",
          "Data interpretation",
          "Logical reasoning",
        ],
        howWeHelp:
          "We guide students through experiments and concept-based learning to build strong understanding and confidence in science.",
      },
      {
        id: `${countryName.toLowerCase()}-science-5`,
        title: "Grade 5",
        summary:
          "Grade 5 focuses on developing deeper understanding of scientific principles and applying them to real-world situations.",
        overview:
          "Grade 5 focuses on developing deeper understanding of scientific principles and applying them to real-world situations.",
        whatStudentsLearn: [
          "Human body systems in detail",
          "Ecosystems and environmental science",
          "Matter and its changes",
          "Energy and forces",
          "Earth and space science",
          "Conducting simple investigations",
        ],
        keySkillsDeveloped: [
          "Scientific reasoning",
          "Problem-solving",
          "Data analysis",
          "Understanding systems and processes",
          "Applying knowledge",
        ],
        howWeHelp:
          "We help students connect scientific concepts with real-life examples and strengthen their understanding through structured lessons and practice.",
      },
      {
        id: `${countryName.toLowerCase()}-science-6`,
        title: "Grade 6",
        summary:
          "In Grade 6, students transition into more advanced scientific thinking, focusing on earth science, physical science, and life science concepts.",
        overview:
          "In Grade 6, students transition into more advanced scientific thinking, focusing on earth science, physical science, and life science concepts.",
        whatStudentsLearn: [
          "Cells and basic biology",
          "Earth systems and geology",
          "Energy and motion",
          "Chemical and physical changes",
          "Introduction to scientific methods",
          "Data collection and analysis",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Scientific investigation",
          "Problem-solving",
          "Data interpretation",
          "Logical reasoning",
        ],
        howWeHelp:
          "We help students understand complex scientific ideas through step-by-step explanations and structured learning.",
      },
      {
        id: `${countryName.toLowerCase()}-science-7`,
        title: "Grade 7",
        summary:
          "Grade 7 builds deeper understanding of life science and physical science, focusing on systems and interactions.",
        overview:
          "Grade 7 builds deeper understanding of life science and physical science, focusing on systems and interactions.",
        whatStudentsLearn: [
          "Cells and biological systems",
          "Human body systems",
          "Forces and motion",
          "Energy transformations",
          "Ecology and ecosystems",
          "Scientific experimentation",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Understanding systems",
          "Experimentation skills",
          "Analytical reasoning",
          "Scientific communication",
        ],
        howWeHelp:
          "We guide students in understanding systems and relationships in science while improving their ability to analyze and explain concepts.",
      },
      {
        id: `${countryName.toLowerCase()}-science-8`,
        title: "Grade 8",
        summary:
          "In Grade 8, students prepare for high school science by exploring more advanced topics in physics, chemistry, and biology.",
        overview:
          "In Grade 8, students prepare for high school science by exploring more advanced topics in physics, chemistry, and biology.",
        whatStudentsLearn: [
          "Chemical reactions",
          "Forces, motion, and energy",
          "Waves and sound",
          "Genetics basics",
          "Earth science and space",
          "Scientific analysis",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Scientific reasoning",
          "Problem-solving",
          "Understanding cause and effect",
          "Data interpretation",
        ],
        howWeHelp:
          "We help students connect concepts across different areas of science and prepare them for high school-level learning.",
      },
      {
        id: `${countryName.toLowerCase()}-science-9`,
        title: "Grade 9",
        summary:
          "Grade 9 introduces high school science, focusing on foundational concepts in biology, chemistry, and physics.",
        overview:
          "Grade 9 introduces high school science, focusing on foundational concepts in biology, chemistry, and physics.",
        whatStudentsLearn: [
          "Basic biology concepts",
          "Introduction to chemistry",
          "Motion and forces",
          "Scientific measurement",
          "Laboratory skills",
          "Data analysis",
        ],
        keySkillsDeveloped: [
          "Scientific thinking",
          "Laboratory skills",
          "Analytical reasoning",
          "Problem-solving",
          "Concept application",
        ],
        howWeHelp:
          "We support students in building strong foundations and understanding key scientific concepts required for high school success.",
      },
      {
        id: `${countryName.toLowerCase()}-science-10`,
        title: "Grade 10",
        summary:
          "In Grade 10, students deepen their understanding of core scientific disciplines and develop stronger analytical and experimental skills.",
        overview:
          "In Grade 10, students deepen their understanding of core scientific disciplines and develop stronger analytical and experimental skills.",
        whatStudentsLearn: [
          "Chemistry concepts and reactions",
          "Physics fundamentals",
          "Biology systems",
          "Energy and matter",
          "Scientific investigations",
          "Data interpretation",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Experimental analysis",
          "Problem-solving",
          "Logical reasoning",
          "Scientific communication",
        ],
        howWeHelp:
          "We help students strengthen their understanding through structured lessons and practical problem-solving approaches.",
      },
      {
        id: `${countryName.toLowerCase()}-science-11`,
        title: "Grade 11",
        summary:
          "Grade 11 focuses on advanced scientific concepts and prepares students for specialized study in biology, chemistry, or physics.",
        overview:
          "Grade 11 focuses on advanced scientific concepts and prepares students for specialized study in biology, chemistry, or physics.",
        whatStudentsLearn: [
          "Advanced biology concepts",
          "Chemical reactions and equations",
          "Physics laws and principles",
          "Data analysis and experiments",
          "Scientific research methods",
          "Exam preparation",
        ],
        keySkillsDeveloped: [
          "Advanced analytical thinking",
          "Scientific reasoning",
          "Problem-solving",
          "Research skills",
          "Exam readiness",
        ],
        howWeHelp:
          "We guide students through advanced topics with detailed explanations and focused practice to build confidence and understanding.",
      },
      {
        id: `${countryName.toLowerCase()}-science-12`,
        title: "Grade 12",
        summary:
          "Grade 12 prepares students for college-level science with advanced concepts, research, and exam-focused learning.",
        overview:
          "Grade 12 prepares students for college-level science with advanced concepts, research, and exam-focused learning.",
        whatStudentsLearn: [
          "Advanced biology, chemistry, or physics topics",
          "Scientific research and analysis",
          "Complex problem-solving",
          "Laboratory techniques",
          "Data interpretation",
          "Exam preparation",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced problem-solving",
          "Scientific analysis",
          "Research and evaluation",
          "College readiness",
        ],
        howWeHelp:
          "We provide structured support and exam preparation to help students succeed in their final assessments and prepare for higher education.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-science`,
      name: "Science",
      shortDescription: `Science pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: scienceGrades,
    };
  }

  // Canada-specific Science syllabus (custom grade content)
  if (countryName === "Canada" && subjectName === "Science") {
    const scienceGrades = [
      {
        id: `${countryName.toLowerCase()}-science-0`,
        title: "Kindergarten",
        summary: "In Kindergarten Science (Canada curriculum), students are introduced to basic scientific ideas through observation, exploration, and simple activities.",
        overview:
          "In Kindergarten Science (Canada curriculum), students are introduced to basic scientific ideas through observation, exploration, and simple activities. The focus is on understanding the natural world in an engaging and interactive way.",
        whatStudentsLearn: [
          "Identifying plants and animals",
          "Understanding weather and seasons",
          "Exploring the five senses",
          "Recognizing patterns in nature",
          "Basic concepts of movement and force",
          "Observing changes in the environment",
        ],
        keySkillsDeveloped: [
          "Observation skills",
          "Curiosity and exploration",
          "Basic questioning",
          "Understanding surroundings",
          "Early scientific thinking",
        ],
        howWeHelp:
          "We make science fun and interactive using simple explanations, visual examples, and real-life connections to build curiosity and understanding.",
      },
      {
        id: `${countryName.toLowerCase()}-science-1`,
        title: "Grade 1",
        summary: "In Grade 1 Science (Canada curriculum), students begin exploring living and non-living things, weather, and basic physical science concepts.",
        overview:
          "In Grade 1 Science (Canada curriculum), students begin exploring living and non-living things, weather, and basic physical science concepts.",
        whatStudentsLearn: [
          "Living and non-living things",
          "Basic plant and animal characteristics",
          "Weather patterns and seasonal changes",
          "Light and sound basics",
          "Simple forces (push and pull)",
          "Observation and recording",
        ],
        keySkillsDeveloped: [
          "Observation and comparison",
          "Understanding simple concepts",
          "Curiosity and questioning",
          "Logical thinking",
          "Early problem-solving",
        ],
        howWeHelp:
          "We guide students through simple experiments and explanations to help them understand science concepts clearly.",
      },
      {
        id: `${countryName.toLowerCase()}-science-2`,
        title: "Grade 2",
        summary: "In Grade 2 Science, students explore how things work in the natural world, including life cycles, matter, and energy.",
        overview:
          "In Grade 2 Science, students explore how things work in the natural world, including life cycles, matter, and energy.",
        whatStudentsLearn: [
          "Life cycles of plants and animals",
          "States of matter (solid, liquid, gas)",
          "Basic ecosystems",
          "Energy and simple machines",
          "Weather and environmental changes",
          "Recording observations",
        ],
        keySkillsDeveloped: [
          "Logical thinking",
          "Observation and comparison",
          "Understanding cause and effect",
          "Data interpretation",
          "Scientific curiosity",
        ],
        howWeHelp:
          "We use visual tools and simple experiments to make science concepts easier to understand and apply.",
      },
      {
        id: `${countryName.toLowerCase()}-science-3`,
        title: "Grade 3",
        summary: "In Grade 3 Science (Canada curriculum), students develop structured understanding of ecosystems, forces, and physical science.",
        overview:
          "In Grade 3 Science (Canada curriculum), students develop structured understanding of ecosystems, forces, and physical science.",
        whatStudentsLearn: [
          "Ecosystems and food chains",
          "Plant and animal adaptations",
          "Forces and motion",
          "Properties of matter",
          "Weather and climate",
          "Scientific investigations",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Understanding relationships",
          "Problem-solving",
          "Observation and recording",
          "Applying knowledge",
        ],
        howWeHelp:
          "We simplify scientific concepts and provide structured guidance to help students build strong understanding.",
      },
      {
        id: `${countryName.toLowerCase()}-science-4`,
        title: "Grade 4",
        summary: "In Grade 4, students explore energy, earth science, and life science in more detail.",
        overview:
          "In Grade 4, students explore energy, earth science, and life science in more detail.",
        whatStudentsLearn: [
          "Forms of energy",
          "Human body systems",
          "Earth structure and natural resources",
          "Properties of matter",
          "Electricity basics",
          "Scientific experiments",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Understanding processes",
          "Experimentation skills",
          "Logical reasoning",
          "Data interpretation",
        ],
        howWeHelp:
          "We guide students through concept-based learning and practical examples to improve understanding.",
      },
      {
        id: `${countryName.toLowerCase()}-science-5`,
        title: "Grade 5",
        summary: "In Grade 5 Science (Canada curriculum), students deepen their understanding of systems, energy, and environmental science.",
        overview:
          "In Grade 5 Science (Canada curriculum), students deepen their understanding of systems, energy, and environmental science.",
        whatStudentsLearn: [
          "Human body systems in detail",
          "Ecosystems and environmental science",
          "Matter and its changes",
          "Energy and forces",
          "Earth and space science",
          "Scientific investigations",
        ],
        keySkillsDeveloped: [
          "Scientific reasoning",
          "Problem-solving",
          "Data analysis",
          "Understanding systems",
          "Concept application",
        ],
        howWeHelp:
          "We connect scientific concepts to real-life situations and help students strengthen understanding through structured lessons.",
      },
      {
        id: `${countryName.toLowerCase()}-science-6`,
        title: "Grade 6",
        summary: "In Grade 6, students transition into more advanced scientific thinking, focusing on earth science, biology, and physical science.",
        overview:
          "In Grade 6, students transition into more advanced scientific thinking, focusing on earth science, biology, and physical science.",
        whatStudentsLearn: [
          "Cells and basic biology",
          "Earth systems and geology",
          "Energy and motion",
          "Chemical and physical changes",
          "Scientific methods",
          "Data collection and analysis",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Scientific investigation",
          "Problem-solving",
          "Data interpretation",
          "Logical reasoning",
        ],
        howWeHelp:
          "We help students understand more complex scientific ideas through step-by-step explanations and structured practice.",
      },
      {
        id: `${countryName.toLowerCase()}-science-7`,
        title: "Grade 7",
        summary: "In Grade 7 Science (Canada curriculum), students explore systems and interactions in life and physical sciences.",
        overview:
          "In Grade 7 Science (Canada curriculum), students explore systems and interactions in life and physical sciences.",
        whatStudentsLearn: [
          "Cells and biological systems",
          "Human body systems",
          "Forces and motion",
          "Energy transformations",
          "Ecosystems and interactions",
          "Scientific experiments",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Understanding systems",
          "Experimentation",
          "Analytical reasoning",
          "Scientific communication",
        ],
        howWeHelp:
          "We guide students in understanding complex systems and relationships while improving their analytical skills.",
      },
      {
        id: `${countryName.toLowerCase()}-science-8`,
        title: "Grade 8",
        summary: "In Grade 8, students prepare for high school science by exploring more advanced concepts across biology, chemistry, and physics.",
        overview:
          "In Grade 8, students prepare for high school science by exploring more advanced concepts across biology, chemistry, and physics.",
        whatStudentsLearn: [
          "Chemical reactions",
          "Forces, motion, and energy",
          "Waves and sound",
          "Basic genetics",
          "Earth and space science",
          "Scientific analysis",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Scientific reasoning",
          "Problem-solving",
          "Understanding cause and effect",
          "Data interpretation",
        ],
        howWeHelp:
          "We help students connect scientific concepts across subjects and prepare them for high school learning.",
      },
      {
        id: `${countryName.toLowerCase()}-science-9`,
        title: "Grade 9",
        summary: "In Grade 9 Science (Canada curriculum), students begin high school science with structured learning across biology, chemistry, and physics.",
        overview:
          "In Grade 9 Science (Canada curriculum), students begin high school science with structured learning across biology, chemistry, and physics.",
        whatStudentsLearn: [
          "Basic biology concepts",
          "Introduction to chemistry",
          "Motion and forces",
          "Scientific measurement",
          "Laboratory skills",
          "Data analysis",
        ],
        keySkillsDeveloped: [
          "Scientific thinking",
          "Laboratory skills",
          "Analytical reasoning",
          "Problem-solving",
          "Concept application",
        ],
        howWeHelp:
          "We support students in building strong scientific foundations and understanding key concepts for high school success.",
      },
      {
        id: `${countryName.toLowerCase()}-science-10`,
        title: "Grade 10",
        summary: " In Grade 10, students deepen their understanding of scientific concepts and improve analytical and experimental skills.",
        overview:
          "In Grade 10, students focus on geometry, trigonometry, and advanced algebra concepts.",
        whatStudentsLearn: [
          "Chemistry concepts and reactions",
          "Physics fundamentals",
          "Biology systems",
          "Energy and matter",
          "Scientific investigations",
          "Data interpretation",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Experimental analysis",
          "Problem-solving",
          "Logical reasoning",
          "Scientific communication",
        ],
        howWeHelp:
          "We help students strengthen their understanding through structured lessons and guided problem-solving.",
      },
      {
        id: `${countryName.toLowerCase()}-science-11`,
        title: "Grade 11",
        summary: "In Grade 11 Science (Canada curriculum), students focus on advanced topics and may begin specializing in biology, chemistry, or physics.",
        overview:
          "In Grade 11 Science (Canada curriculum), students focus on advanced topics and may begin specializing in biology, chemistry, or physics.",
        whatStudentsLearn: [
          "Advanced biology concepts",
          "Chemical reactions and equations",
          "Physics principles",
          "Data analysis and experiments",
          "Scientific research methods",
          "Exam preparation",
        ],
        keySkillsDeveloped: [
          "Advanced scientific reasoning",
          "Problem-solving",
          "Data analysis",
          "Understanding complex systems",
          "Research skills",
        ],
        howWeHelp:
          "We guide students through advanced topics with clear explanations and focused practice to build confidence.",
      },
      {
        id: `${countryName.toLowerCase()}-science-12`,
        title: "Grade 12",
        summary: "In Grade 12, students prepare for college-level science with advanced topics and exam-focused learning.",
        overview:
          "In Grade 12, students prepare for college-level science with advanced topics and exam-focused learning.",
        whatStudentsLearn: [
          "Advanced biology, chemistry, or physics",
          "Scientific research and analysis",
          "Complex problem-solving",
          "Laboratory techniques",
          "Data interpretation",
          "Exam preparation",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced problem-solving",
          "Exam readiness",
          "Conceptual understanding",
        ],
        howWeHelp:
          "We provide structured support and exam-focused preparation to help students succeed in final assessments and beyond.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-science`,
      name: "Science",
      shortDescription: `Science pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: scienceGrades,
    };
  }

  if (countryName === "USA" && subjectName === "Physics") {
    const physicsGrades = [
      {
        id: `${countryName.toLowerCase()}-physics-9`,
        title: "Grade 9",
        summary:
          "In Grade 9, students are introduced to the fundamental principles of physics, focusing on motion, forces, and basic energy concepts.",
        overview:
          "In Grade 9, students are introduced to the fundamental principles of physics, focusing on motion, forces, and basic energy concepts. This stage builds the foundation for understanding how physical laws apply to real-world situations.",
        whatStudentsLearn: [
          "Motion and kinematics (distance, speed, velocity)",
          "Introduction to Newton's laws of motion",
          "Basic forces and interactions",
          "Work, energy, and power",
          "Units, measurements, and scientific notation",
          "Introduction to waves and sound",
        ],
        keySkillsDeveloped: [
          "Understanding motion and physical relationships",
          "Basic mathematical application in physics",
          "Logical reasoning and problem-solving",
          "Interpreting graphs and data",
          "Conceptual understanding of physical laws",
        ],
        howWeHelp:
          "We focus on building strong fundamentals by explaining concepts step-by-step and helping students apply formulas correctly. Our tutors ensure students understand both theory and problem-solving techniques.",
      },
      {
        id: `${countryName.toLowerCase()}-physics-10`,
        title: "Grade 10",
        summary:
          "In Grade 10, students deepen their understanding of mechanics and begin exploring electricity, waves, and energy in more detail.",
        overview:
          "In Grade 10, students deepen their understanding of mechanics and begin exploring electricity, waves, and energy in more detail. The focus is on applying concepts to solve structured problems.",
        whatStudentsLearn: [
          "Advanced motion and acceleration",
          "Newton's laws and dynamics",
          "Work, energy, and conservation laws",
          "Introduction to electricity and circuits",
          "Waves, sound, and basic light concepts",
          "Problem-solving using formulas",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Mathematical problem-solving",
          "Understanding relationships between variables",
          "Applying physics laws to real situations",
          "Accuracy in calculations",
        ],
        howWeHelp:
          "We help students strengthen their problem-solving skills by breaking down complex questions and guiding them through structured methods and practice.",
      },
      {
        id: `${countryName.toLowerCase()}-physics-11`,
        title: "Grade 11",
        summary:
          "Grade 11 focuses on advanced physics topics, including mechanics, electricity, and waves, with increased mathematical application and conceptual depth.",
        overview:
          "Grade 11 focuses on advanced physics topics, including mechanics, electricity, and waves, with increased mathematical application and conceptual depth.",
        whatStudentsLearn: [
          "Advanced mechanics and motion",
          "Work, energy, and momentum",
          "Electricity and magnetism",
          "Waves and optics",
          "Introduction to thermodynamics",
          "Data analysis and experiments",
        ],
        keySkillsDeveloped: [
          "Advanced problem-solving",
          "Strong mathematical application",
          "Analytical reasoning",
          "Understanding complex systems",
          "Experimental interpretation",
        ],
        howWeHelp:
          "We guide students through complex concepts with clear explanations and focused practice. Our tutors help build confidence in solving challenging problems and understanding advanced topics.",
      },
      {
        id: `${countryName.toLowerCase()}-physics-12`,
        title: "Grade 12",
        summary:
          "In Grade 12, students prepare for college-level physics with advanced topics and exam-focused learning.",
        overview:
          "In Grade 12, students prepare for college-level physics with advanced topics and exam-focused learning. The emphasis is on mastering concepts and applying them in complex scenarios.",
        whatStudentsLearn: [
          "Advanced mechanics and rotational motion",
          "Electricity and magnetism in depth",
          "Waves and advanced optics",
          "Modern physics (atoms, nuclear physics)",
          "Thermodynamics",
          "Exam-focused problem-solving",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced analytical reasoning",
          "Complex problem-solving",
          "Exam readiness and strategy",
          "Deep conceptual understanding",
        ],
        howWeHelp:
          "We provide structured lessons and exam-focused preparation, helping students master advanced concepts and approach assessments with confidence.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-physics`,
      name: "Physics",
      shortDescription: `Physics pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: physicsGrades,
    };
  }

  if (countryName === "Canada" && subjectName === "Physics") {
    const physicsGrades = [
      {
        id: `${countryName.toLowerCase()}-physics-9`,
        title: "Grade 9",
        summary:
          "In Grade 9 Physics (Canada curriculum), students are introduced to the fundamental principles of motion, forces, and energy.",
        overview:
          "In Grade 9 Physics (Canada curriculum), students are introduced to the fundamental principles of motion, forces, and energy. The focus is on building a clear understanding of how physical laws explain everyday phenomena.",
        whatStudentsLearn: [
          "Motion and basic kinematics (distance, speed, velocity)",
          "Introduction to forces and Newton's laws",
          "Work, energy, and power",
          "Basic waves and sound",
          "Measurement, units, and scientific notation",
          "Interpreting simple graphs and data",
        ],
        keySkillsDeveloped: [
          "Understanding motion and relationships between variables",
          "Basic mathematical application in physics",
          "Logical reasoning and problem-solving",
          "Interpreting graphs and experimental data",
          "Conceptual understanding of physical laws",
        ],
        howWeHelp:
          "We build strong foundations by explaining concepts step-by-step and helping students apply formulas correctly. Our tutors focus on both understanding theory and solving problems confidently.",
      },
      {
        id: `${countryName.toLowerCase()}-physics-10`,
        title: "Grade 10",
        summary:
          "In Grade 10 Physics, students deepen their understanding of mechanics and begin exploring electricity, waves, and energy in more detail.",
        overview:
          "In Grade 10 Physics, students deepen their understanding of mechanics and begin exploring electricity, waves, and energy in more detail.",
        whatStudentsLearn: [
          "Advanced motion and acceleration",
          "Newton's laws and dynamics",
          "Work, energy, and conservation laws",
          "Basic electricity and simple circuits",
          "Waves, sound, and light basics",
          "Problem-solving using formulas",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Mathematical problem-solving",
          "Understanding relationships between physical quantities",
          "Applying physics concepts to real-world situations",
          "Accuracy in calculations",
        ],
        howWeHelp:
          "We guide students through structured problem-solving methods, helping them understand how to approach and solve physics questions with clarity and accuracy.",
      },
      {
        id: `${countryName.toLowerCase()}-physics-11`,
        title: "Grade 11",
        summary:
          "In Grade 11 Physics (Canada curriculum), students study more advanced concepts in mechanics, electricity, and waves with increased mathematical depth.",
        overview:
          "In Grade 11 Physics (Canada curriculum), students study more advanced concepts in mechanics, electricity, and waves with increased mathematical depth.",
        whatStudentsLearn: [
          "Advanced mechanics and motion",
          "Work, energy, and momentum",
          "Electricity and magnetism",
          "Waves and optics",
          "Introduction to thermodynamics",
          "Experimental analysis and data interpretation",
        ],
        keySkillsDeveloped: [
          "Advanced problem-solving",
          "Strong mathematical application",
          "Analytical reasoning",
          "Understanding complex systems",
          "Experimental thinking",
        ],
        howWeHelp:
          "We break down complex physics concepts into manageable steps and provide targeted practice to help students build confidence and improve accuracy.",
      },
      {
        id: `${countryName.toLowerCase()}-physics-12`,
        title: "Grade 12",
        summary:
          "In Grade 12 Physics, students prepare for college-level studies with advanced topics and exam-focused learning.",
        overview:
          "In Grade 12 Physics, students prepare for college-level studies with advanced topics and exam-focused learning. The emphasis is on mastering concepts and applying them in complex scenarios.",
        whatStudentsLearn: [
          "Advanced mechanics and rotational motion",
          "Electricity and magnetism in depth",
          "Waves and advanced optics",
          "Modern physics (atomic and nuclear concepts)",
          "Thermodynamics",
          "Exam-focused problem-solving",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced analytical reasoning",
          "Complex problem-solving",
          "Concept mastery",
          "Exam readiness",
        ],
        howWeHelp:
          "We provide structured lessons and exam-focused preparation to help students master advanced physics concepts and perform confidently in assessments.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-physics`,
      name: "Physics",
      shortDescription: `Physics pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: physicsGrades,
    };
  }

  // UK-specific Physics syllabus (GCSE Years 10-11, A-Level Years 12-13)
  if (countryName === "UK" && subjectName === "Physics") {
    const ukPhysicsGrades = [
      {
        id: `${countryName.toLowerCase()}-physics-10`,
        title: "Year 10 (GCSE)",
        summary:
          "GCSE Physics (UK curriculum) covers Years 10 and 11 and focuses on understanding fundamental physical principles such as forces, energy, waves, and electricity.",
        overview:
          "GCSE Physics (UK curriculum) covers Years 10 and 11 and focuses on understanding fundamental physical principles such as forces, energy, waves, and electricity. This stage is crucial for exam success and future science studies.",
        whatStudentsLearn: [
          "Forces and motion (speed, acceleration, Newton’s laws)",
          "Energy (types, transfer, conservation)",
          "Waves (light, sound, electromagnetic spectrum)",
          "Electricity (circuits, current, voltage, resistance)",
          "Magnetism and electromagnetism",
          "Space physics (planets, stars, universe)",
        ],
        keySkillsDeveloped: [
          "Problem-solving using formulas",
          "Mathematical application in physics",
          "Logical and analytical thinking",
          "Interpreting graphs and data",
          "Exam-focused reasoning",
        ],
        examBoards: [
          "AQA GCSE Physics",
          "Edexcel (Pearson) GCSE Physics",
          "OCR GCSE Physics",
          "WJEC / Eduqas GCSE Physics",
        ],
        examStructure:
          "Paper 1 – Core topics (energy, electricity, atomic structure). Paper 2 – Forces, waves, magnetism, space. Questions include multiple-choice, short-answer and extended problem-solving.",
        howWeHelp:
          "We provide structured GCSE Physics preparation with past paper practice, step-by-step problem solving, weak-area targeting, and exam technique improvement.",
      },
      {
        id: `${countryName.toLowerCase()}-physics-11`,
        title: "Year 11 (GCSE)",
        summary:
          "GCSE Physics (UK curriculum) covers Years 11 and focuses on understanding fundamental physical principles such as forces, energy, waves, and electricity.",
        overview:
          "GCSE Physics (UK curriculum) covers Years 11 and focuses on understanding fundamental physical principles such as forces, energy, waves, and electricity. This stage is crucial for exam success and future science studies.",
        whatStudentsLearn: [
          "Forces and motion (speed, acceleration, Newton’s laws)",
          "Energy (types, transfer, conservation)",
          "Waves (light, sound, electromagnetic spectrum)",
          "Electricity (circuits, current, voltage, resistance)",
          "Magnetism and electromagnetism",
          "Space physics (planets, stars, universe)",
        ],
        examBoards: [
          "AQA GCSE Physics",
          "Edexcel (Pearson) GCSE Physics",
          "OCR GCSE Physics",
          "WJEC / Eduqas GCSE Physics",
        ],
        examStructure:
          "Paper 1 – Core topics (energy, electricity, atomic structure). Paper 2 – Forces, waves, magnetism, space. Questions include multiple-choice, short-answer and extended problem-solving.",
        howWeHelp:
          "We provide structured GCSE Physics preparation with past paper practice, step-by-step problem solving, weak-area targeting, and exam technique improvement.",
      },
      {
        id: `${countryName.toLowerCase()}-physics-12`,
        title: "Year 12 (A-Level)",
        summary:
          "A-Level Physics (Year 12) introduces advanced mechanics, electricity, waves and practical skills with strong mathematical application.",
        overview:
          "A-Level Physics (UK curriculum) covers Years 12 and prepares students for university-level study. It focuses on advanced concepts, mathematical application, and deep understanding of physical laws.",
        whatStudentsLearn: [
          "Mechanics (motion, forces, momentum)",
          "Electricity and circuits",
          "Waves and optics",
          "Thermal physics",
          "Fields (gravitational, electric, magnetic)",
          "Nuclear and particle physics introduction",
        ],
        keySkillsDeveloped: [
          "Advanced mathematical problem-solving",
          "Analytical and critical thinking",
          "Data interpretation and evaluation",
          "Scientific reasoning",
          "Exam readiness",
        ],
        examBoards: [
          "AQA A-Level Physics",
          "Edexcel (Pearson) A-Level Physics",
          "OCR A-Level Physics",
          "WJEC / Eduqas A-Level Physics",
        ],
        examStructure:
          "Paper 1 – Advanced mechanics & materials. Paper 2 – Fields, electricity & thermal physics. Paper 3 – Practical skills & data analysis. Includes extended problem-solving and practical-based questions.",
        howWeHelp:
          "We provide topic-by-topic mastery, exam-focused practice, past paper analysis, step-by-step explanations and targeted preparation for top grades.",
      },
      {
        id: `${countryName.toLowerCase()}-physics-12`,
        title: "Year 13 (A-Level)",
        summary:
          "A-Level Physics (Year 13) introduces advanced mechanics, electricity, waves and practical skills with strong mathematical application.",
        overview:
          "A-Level Physics (UK curriculum) covers Years 13 and prepares students for university-level study. It focuses on advanced concepts, mathematical application, and deep understanding of physical laws.",
        whatStudentsLearn: [
          "Mechanics (motion, forces, momentum)",
          "Electricity and circuits",
          "Waves and optics",
          "Thermal physics",
          "Fields (gravitational, electric, magnetic)",
          "Nuclear and particle physics introduction",
        ],
        keySkillsDeveloped: [
          "Advanced mathematical problem-solving",
          "Analytical and critical thinking",
          "Data interpretation and evaluation",
          "Scientific reasoning",
          "Exam readiness",
        ],
        examBoards: [
          "AQA A-Level Physics",
          "Edexcel (Pearson) A-Level Physics",
          "OCR A-Level Physics",
          "WJEC / Eduqas A-Level Physics",
        ],
        examStructure:
          "Paper 1 – Advanced mechanics & materials. Paper 2 – Fields, electricity & thermal physics. Paper 3 – Practical skills & data analysis. Includes extended problem-solving and practical-based questions.",
        howWeHelp:
          "We provide topic-by-topic mastery, exam-focused practice, past paper analysis, step-by-step explanations and targeted preparation for top grades.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-physics`,
      name: "Physics",
      shortDescription: `Physics pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: ukPhysicsGrades,
    };
  }

  if (countryName === "USA" && subjectName === "Chemistry") {
    const chemistryGrades = [
      {
        id: `${countryName.toLowerCase()}-chemistry-9`,
        title: "Grade 9",
        summary:
          "In Grade 9, students are introduced to the fundamental concepts of chemistry, focusing on matter, atomic structure, and basic chemical reactions.",
        overview:
          "In Grade 9, students are introduced to the fundamental concepts of chemistry, focusing on matter, atomic structure, and basic chemical reactions. This stage builds a strong foundation for understanding how substances interact and change.",
        whatStudentsLearn: [
          "States of matter and their properties",
          "Atomic structure (protons, neutrons, electrons)",
          "Elements, compounds, and mixtures",
          "Introduction to the periodic table",
          "Basic chemical reactions",
          "Measurement and lab safety",
          "Scientific notation and units",
        ],
        keySkillsDeveloped: [
          "Understanding basic chemical concepts",
          "Observation and analysis",
          "Logical thinking",
          "Interpreting simple chemical data",
          "Laboratory awareness",
        ],
        howWeHelp:
          "We simplify core chemistry concepts using clear explanations and visual methods. Our tutors help students understand the basics step-by-step and build confidence in both theory and problem-solving.",
      },
      {
        id: `${countryName.toLowerCase()}-chemistry-10`,
        title: "Grade 10",
        summary:
          "In Grade 10, students expand their understanding of chemical reactions, the periodic table, and begin applying concepts in structured problem-solving and laboratory work.",
        overview:
          "In Grade 10, students expand their understanding of chemical reactions, the periodic table, and begin applying concepts in structured problem-solving and laboratory work.",
        whatStudentsLearn: [
          "Chemical bonding (ionic and covalent)",
          "Periodic table trends and properties",
          "Types of chemical reactions",
          "Balancing chemical equations",
          "Acids, bases, and pH",
          "Introduction to stoichiometry",
          "Basic laboratory experiments",
        ],
        keySkillsDeveloped: [
          "Problem-solving with chemical equations",
          "Understanding chemical relationships",
          "Analytical thinking",
          "Applying theoretical concepts",
          "Accuracy in calculations",
        ],
        howWeHelp:
          "We guide students through chemical reactions and equations step-by-step, helping them understand how and why reactions occur while improving their accuracy in calculations.",
      },
      {
        id: `${countryName.toLowerCase()}-chemistry-11`,
        title: "Grade 11",
        summary:
          "Grade 11 focuses on advanced chemistry concepts, including deeper understanding of reactions, quantitative chemistry, and introduction to organic chemistry.",
        overview:
          "Grade 11 focuses on advanced chemistry concepts, including deeper understanding of reactions, quantitative chemistry, and introduction to organic chemistry.",
        whatStudentsLearn: [
          "Advanced stoichiometry",
          "Gas laws and behavior of gases",
          "Thermochemistry (energy changes in reactions)",
          "Chemical equilibrium",
          "Acids and bases in detail",
          "Introduction to organic chemistry",
          "Laboratory analysis and experiments",
        ],
        keySkillsDeveloped: [
          "Advanced analytical thinking",
          "Quantitative problem-solving",
          "Understanding chemical processes",
          "Data interpretation",
          "Experimental reasoning",
        ],
        howWeHelp:
          "We help students handle complex chemistry topics by breaking them into manageable steps and providing targeted practice to strengthen both understanding and accuracy.",
      },
      {
        id: `${countryName.toLowerCase()}-chemistry-12`,
        title: "Grade 12",
        summary:
          "In Grade 12, students prepare for college-level chemistry with advanced topics and exam-focused learning.",
        overview:
          "In Grade 12, students prepare for college-level chemistry with advanced topics and exam-focused learning. The emphasis is on mastering concepts and applying them in complex scenarios.",
        whatStudentsLearn: [
          "Advanced organic chemistry",
          "Chemical kinetics (reaction rates)",
          "Electrochemistry",
          "Advanced equilibrium concepts",
          "Solutions and concentrations",
          "Thermodynamics",
          "Exam-focused problem-solving",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced problem-solving",
          "Analytical reasoning",
          "Understanding complex reactions",
          "Exam readiness",
        ],
        howWeHelp:
          "We provide structured support and exam-focused preparation to help students master advanced chemistry concepts and perform confidently in their final assessments.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-chemistry`,
      name: "Chemistry",
      shortDescription: `Chemistry pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: chemistryGrades,
    };
  }

  if (countryName === "Canada" && subjectName === "Chemistry") {
    const chemistryGrades = [
      {
        id: `${countryName.toLowerCase()}-chemistry-9`,
        title: "Grade 9",
        summary:
          "In Grade 9 Chemistry (Canada curriculum), students are introduced to the basic concepts of matter, atomic structure, and simple chemical changes.",
        overview:
          "In Grade 9 Chemistry (Canada curriculum), students are introduced to the basic concepts of matter, atomic structure, and simple chemical changes. The focus is on building foundational knowledge and understanding how substances behave and interact.",
        whatStudentsLearn: [
          "States of matter and their properties",
          "Atomic structure (protons, neutrons, electrons)",
          "Elements, compounds, and mixtures",
          "Introduction to the periodic table",
          "Basic chemical reactions",
          "Measurement, units, and lab safety",
          "Scientific notation and simple calculations",
        ],
        keySkillsDeveloped: [
          "Understanding fundamental chemistry concepts",
          "Observation and analysis",
          "Logical thinking",
          "Interpreting basic chemical data",
          "Laboratory awareness and safety",
        ],
        howWeHelp:
          "We simplify core chemistry concepts with clear explanations and visual methods, helping students build a strong foundation and confidence in both theory and basic problem-solving.",
      },
      {
        id: `${countryName.toLowerCase()}-chemistry-10`,
        title: "Grade 10",
        summary:
          "In Grade 10 Chemistry, students expand their understanding of chemical reactions, bonding, and the periodic table, with more focus on applying concepts through calculations and experiments.",
        overview:
          "In Grade 10 Chemistry, students expand their understanding of chemical reactions, bonding, and the periodic table, with more focus on applying concepts through calculations and experiments.",
        whatStudentsLearn: [
          "Chemical bonding (ionic and covalent)",
          "Periodic table trends and properties",
          "Types of chemical reactions",
          "Balancing chemical equations",
          "Acids, bases, and pH",
          "Introduction to stoichiometry",
          "Laboratory experiments and analysis",
        ],
        keySkillsDeveloped: [
          "Problem-solving with chemical equations",
          "Understanding relationships between elements",
          "Analytical thinking",
          "Applying theoretical concepts",
          "Accuracy in calculations",
        ],
        howWeHelp:
          "We guide students step-by-step through reactions and equations, helping them understand how and why chemical processes occur while improving their problem-solving accuracy.",
      },
      {
        id: `${countryName.toLowerCase()}-chemistry-11`,
        title: "Grade 11",
        summary:
          "In Grade 11 Chemistry (Canada curriculum), students explore more advanced concepts including quantitative chemistry, gas behavior, and chemical processes.",
        overview:
          "In Grade 11 Chemistry (Canada curriculum), students explore more advanced concepts including quantitative chemistry, gas behavior, and chemical processes.",
        whatStudentsLearn: [
          "Advanced stoichiometry",
          "Gas laws and behavior of gases",
          "Thermochemistry (energy changes in reactions)",
          "Chemical equilibrium",
          "Acids and bases in depth",
          "Introduction to organic chemistry",
          "Experimental analysis and lab work",
        ],
        keySkillsDeveloped: [
          "Advanced analytical thinking",
          "Quantitative problem-solving",
          "Understanding chemical processes",
          "Data interpretation",
          "Experimental reasoning",
        ],
        howWeHelp:
          "We break down complex topics into manageable steps and provide targeted practice to help students strengthen both understanding and accuracy.",
      },
      {
        id: `${countryName.toLowerCase()}-chemistry-12`,
        title: "Grade 12",
        summary:
          "In Grade 12 Chemistry, students prepare for college-level studies with advanced topics and exam-focused learning.",
        overview:
          "In Grade 12 Chemistry, students prepare for college-level studies with advanced topics and exam-focused learning. The emphasis is on mastering complex chemical concepts and applying them in problem-solving.",
        whatStudentsLearn: [
          "Advanced organic chemistry",
          "Chemical kinetics (reaction rates)",
          "Electrochemistry",
          "Advanced equilibrium concepts",
          "Solutions and concentration calculations",
          "Thermodynamics",
          "Exam-focused problem-solving",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced problem-solving",
          "Analytical reasoning",
          "Understanding complex reactions",
          "Exam readiness",
        ],
        howWeHelp:
          "We provide structured support and exam-focused preparation, helping students master advanced chemistry concepts and approach assessments with confidence.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-chemistry`,
      name: "Chemistry",
      shortDescription: `Chemistry pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: chemistryGrades,
    };
  }

  // UK-specific Chemistry syllabus (GCSE Years 10-11, A-Level Years 12-13)
  if (countryName === "UK" && subjectName === "Chemistry") {
    const ukChemistryGrades = [
      {
        id: `${countryName.toLowerCase()}-chemistry-10`,
        title: "Year 10 - 11 (GCSE)",
        summary:
          "GCSE Chemistry (UK curriculum) covers Years 10 and 11 and focuses on understanding matter, chemical reactions, and how substances behave.",
        overview:
          "GCSE Chemistry (UK curriculum) covers Years 10 and 11 and focuses on understanding matter, chemical reactions, and how substances behave. This stage builds strong foundations for science and is essential for achieving high exam grades.",
        whatStudentsLearn: [
          "Atomic structure and the periodic table",
          "Chemical bonding (ionic, covalent, metallic)",
          "Chemical reactions and equations",
          "Quantitative chemistry (moles, calculations)",
          "Energy changes (endothermic & exothermic)",
          "Rates of reaction and equilibrium",
        ],
        keySkillsDeveloped: [
          "Problem-solving with equations",
          "Analytical thinking",
          "Accuracy in calculations",
          "Understanding chemical processes",
        ],
        examBoards: [
          "AQA GCSE Chemistry",
          "Edexcel (Pearson) GCSE Chemistry",
          "OCR GCSE Chemistry",
          "WJEC / Eduqas GCSE Chemistry",
        ],
        examStructure:
          "Paper 1 – Atomic structure, bonding, energy changes. Paper 2 – Rates, equilibrium, organic chemistry. Includes multiple-choice, structured and problem-solving questions.",
        howWeHelp:
          "We provide focused GCSE Chemistry preparation with step-by-step explanations, past paper practice, weak topic improvement and exam strategy guidance.",
      },
     
      {
        id: `${countryName.toLowerCase()}-chemistry-12`,
        title: "Year 12 - 13 (A-Level)",
        summary:
          "A-Level Chemistry (Year 12) introduces physical, inorganic and organic chemistry with greater mathematical depth and practical focus.",
        overview:
          "A-Level Chemistry (UK curriculum) covers Years 12 and 13 and prepares students for university-level science courses. It focuses on advanced theory, calculations, and practical understanding.",
        whatStudentsLearn: [
          "Physical chemistry (energetics, kinetics, equilibrium)",
          "Inorganic chemistry (periodicity, transition metals)",
          "Organic chemistry (reactions & mechanisms)",
          "Analytical techniques (chromatography, spectroscopy)",
        ],
        keySkillsDeveloped: [
          "Advanced analytical thinking",
          "Complex problem-solving",
          "Data analysis and interpretation",
          "Understanding chemical mechanisms",
        ],
        examBoards: [
          "AQA A-Level Chemistry",
          "Edexcel (Pearson) A-Level Chemistry",
          "OCR A-Level Chemistry",
          "WJEC / Eduqas A-Level Chemistry",
        ],
        examStructure:
          "Paper 1 – Physical and inorganic chemistry. Paper 2 – Physical and organic chemistry. Paper 3 – Practical skills and analysis. Includes extended calculations and practical-based assessments.",
        howWeHelp:
          "We support students with topic-by-topic mastery, past paper practice, step-by-step explanations and exam-focused preparation for top-grade achievement.",
      },
     
    ];

    return {
      id: `${countryName.toLowerCase()}-chemistry`,
      name: "Chemistry",
      shortDescription: `Chemistry pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: ukChemistryGrades,
    };
  }

  // UK-specific Biology syllabus (GCSE Years 10-11, A-Level Years 12-13)
  if (countryName === "UK" && subjectName === "Biology") {
    const ukBiologyGrades = [
      {
        id: `${countryName.toLowerCase()}-biology-10`,
        title: "Year 10 - 11 (GCSE)",
        summary:
          "GCSE Biology (UK curriculum) covers Years 10 and 11 and focuses on understanding living organisms, body systems, and ecosystems.",
        overview:
          "GCSE Biology (UK curriculum) covers Years 10 and 11 and focuses on understanding living organisms, body systems, and ecosystems. This stage builds essential knowledge for exams and future science studies.",
        whatStudentsLearn: [
          "Cell biology (structure, transport, division)",
          "Organisation (human body systems)",
          "Infection and response",
          "Bioenergetics (photosynthesis & respiration)",
          "Homeostasis and response",
          "Inheritance, variation, and evolution",
        ],
        keySkillsDeveloped: [
          "Understanding biological systems",
          "Analytical and critical thinking",
          "Data interpretation",
          "Applying concepts to real-life situations",
          "Exam-focused reasoning",
        ],
        examBoards: [
          "AQA GCSE Biology",
          "Edexcel (Pearson) GCSE Biology",
          "OCR GCSE Biology",
          "WJEC / Eduqas GCSE Biology",
        ],
        examStructure:
          "Paper 1 – Cell biology, organisation, infection, bioenergetics. Paper 2 – Homeostasis, inheritance, ecology. Includes multiple-choice, structured and extended written answers.",
        howWeHelp:
          "We provide structured GCSE Biology preparation with clear concept explanations, diagrams, past paper practice and targeted revision for weak areas.",
      },
      
      {
        id: `${countryName.toLowerCase()}-biology-12`,
        title: "Year 12 -13 (A-Level)",
        summary:
          "A-Level Biology (Year 12) introduces advanced biological concepts, research skills and practical techniques with greater depth.",
        overview:
          "A-Level Biology (UK curriculum) covers Years 12 and 13 and prepares students for university-level study. It focuses on advanced biological concepts, research skills, and detailed analysis.",
        whatStudentsLearn: [
          "Cell structure and biological molecules",
          "DNA, genes and protein synthesis",
          "Transport systems (plants and animals)",
          "Homeostasis and control systems",
          "Ecology and ecosystems",
        ],
        keySkillsDeveloped: [
          "Advanced analytical thinking",
          "Data interpretation and evaluation",
          "Research and investigation skills",
          "Understanding complex biological systems",
        ],
        examBoards: [
          "AQA A-Level Biology",
          "Edexcel (Pearson) A-Level Biology",
          "OCR A-Level Biology",
          "WJEC / Eduqas A-Level Biology",
        ],
        examStructure:
          "Paper 1 – Core biological principles. Paper 2 – Advanced topics and applications. Paper 3 – Practical skills & data analysis. Includes extended written responses and data-based questions.",
        howWeHelp:
          "We provide topic-by-topic mastery, visual and diagram-based learning, past paper practice and exam-focused preparation to support top-grade achievement.",
      },
     
    ];

    return {
      id: `${countryName.toLowerCase()}-biology`,
      name: "Biology",
      shortDescription: `Biology pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: ukBiologyGrades,
    };
  }

  if (countryName === "USA" && subjectName === "Biology") {
    const biologyGrades = [
      {
        id: `${countryName.toLowerCase()}-biology-9`,
        title: "Grade 9",
        summary:
          "In Grade 9, students are introduced to the fundamental concepts of biology, focusing on living organisms, cells, and basic life processes.",
        overview:
          "In Grade 9, students are introduced to the fundamental concepts of biology, focusing on living organisms, cells, and basic life processes. This stage builds a strong foundation for understanding how living systems function.",
        whatStudentsLearn: [
          "Cell structure and function",
          "Differences between plant and animal cells",
          "Basic cell processes (respiration, photosynthesis)",
          "Classification of living organisms",
          "Introduction to genetics",
          "Human body systems (basic overview)",
          "Laboratory safety and basic experiments",
        ],
        keySkillsDeveloped: [
          "Understanding of biological systems",
          "Observation and analysis",
          "Logical thinking",
          "Basic scientific reasoning",
          "Interpreting simple biological data",
        ],
        howWeHelp:
          "We simplify core biology concepts using clear explanations and visual aids. Our tutors help students understand how living systems work and build confidence in both theory and application.",
      },
      {
        id: `${countryName.toLowerCase()}-biology-10`,
        title: "Grade 10",
        summary:
          "In Grade 10, students deepen their understanding of biological processes and systems, focusing on genetics, ecosystems, and the structure of organisms.",
        overview:
          "In Grade 10, students deepen their understanding of biological processes and systems, focusing on genetics, ecosystems, and the structure of organisms.",
        whatStudentsLearn: [
          "Genetics and heredity",
          "DNA structure and function",
          "Evolution and natural selection",
          "Ecosystems and environmental science",
          "Human body systems in detail",
          "Plant biology and processes",
          "Introduction to scientific investigations",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Understanding relationships in biology",
          "Problem-solving",
          "Data interpretation",
          "Scientific investigation skills",
        ],
        howWeHelp:
          "We guide students through complex biological concepts step-by-step and help them connect ideas across different topics for better understanding.",
      },
      {
        id: `${countryName.toLowerCase()}-biology-11`,
        title: "Grade 11",
        summary:
          "Grade 11 focuses on advanced biological concepts, including cellular processes, genetics, and systems biology, with greater depth and detail.",
        overview:
          "Grade 11 focuses on advanced biological concepts, including cellular processes, genetics, and systems biology, with greater depth and detail.",
        whatStudentsLearn: [
          "Advanced cell biology",
          "DNA replication and protein synthesis",
          "Advanced genetics",
          "Human physiology",
          "Ecology and environmental interactions",
          "Biological processes and systems",
          "Laboratory experiments and analysis",
        ],
        keySkillsDeveloped: [
          "Advanced analytical thinking",
          "Understanding complex biological systems",
          "Data analysis and interpretation",
          "Scientific reasoning",
          "Problem-solving",
        ],
        howWeHelp:
          "We help students understand advanced topics through structured lessons and clear explanations, ensuring strong conceptual understanding and confidence.",
      },
      {
        id: `${countryName.toLowerCase()}-biology-12`,
        title: "Grade 12",
        summary:
          "In Grade 12, students prepare for college-level biology with advanced topics and exam-focused learning.",
        overview:
          "In Grade 12, students prepare for college-level biology with advanced topics and exam-focused learning. The focus is on mastering concepts and applying them in complex scenarios.",
        whatStudentsLearn: [
          "Advanced genetics and molecular biology",
          "Evolution and biodiversity",
          "Human physiology in depth",
          "Ecology and environmental systems",
          "Biotechnology basics",
          "Research and data analysis",
          "Exam-focused problem-solving",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced problem-solving",
          "Analytical reasoning",
          "Research skills",
          "Exam readiness",
        ],
        howWeHelp:
          "We provide structured support and exam-focused preparation to help students master advanced biology concepts and perform confidently in their final assessments.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-biology`,
      name: "Biology",
      shortDescription: `Biology pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: biologyGrades,
    };
  }

  if (countryName === "Canada" && subjectName === "Biology") {
    const biologyGrades = [
      {
        id: `${countryName.toLowerCase()}-biology-9`,
        title: "Grade 9",
        summary:
          "In Grade 9 Biology (Canada curriculum), students are introduced to the basic principles of life sciences, focusing on cells, living organisms, and fundamental biological processes.",
        overview:
          "In Grade 9 Biology (Canada curriculum), students are introduced to the basic principles of life sciences, focusing on cells, living organisms, and fundamental biological processes. The aim is to build a strong foundation in understanding how living systems function.",
        whatStudentsLearn: [
          "Cell structure and function",
          "Differences between plant and animal cells",
          "Basic cellular processes (respiration, photosynthesis)",
          "Classification of living organisms",
          "Introduction to genetics",
          "Overview of human body systems",
          "Basic laboratory skills and safety",
        ],
        keySkillsDeveloped: [
          "Understanding biological systems",
          "Observation and analysis",
          "Logical thinking",
          "Basic scientific reasoning",
          "Interpreting simple biological data",
        ],
        howWeHelp:
          "We simplify core biology concepts using clear explanations and visual aids, helping students understand how living systems work while building confidence in both theory and application.",
      },
      {
        id: `${countryName.toLowerCase()}-biology-10`,
        title: "Grade 10",
        summary:
          "In Grade 10 Biology, students deepen their understanding of biological systems, genetics, and ecosystems, with more focus on how living organisms interact with their environment.",
        overview:
          "In Grade 10 Biology, students deepen their understanding of biological systems, genetics, and ecosystems, with more focus on how living organisms interact with their environment.",
        whatStudentsLearn: [
          "Genetics and heredity",
          "DNA structure and function",
          "Evolution and natural selection",
          "Ecosystems and environmental science",
          "Human body systems in more detail",
          "Plant biology and processes",
          "Scientific investigations and data collection",
        ],
        keySkillsDeveloped: [
          "Analytical thinking",
          "Understanding biological relationships",
          "Problem-solving",
          "Data interpretation",
          "Scientific investigation skills",
        ],
        howWeHelp:
          "We guide students through complex biological topics step-by-step, helping them connect concepts and improve understanding across different areas of biology.",
      },
      {
        id: `${countryName.toLowerCase()}-biology-11`,
        title: "Grade 11",
        summary:
          "In Grade 11 Biology (Canada curriculum), students explore advanced biological concepts including cellular processes, genetics, and physiology with greater depth and detail.",
        overview:
          "In Grade 11 Biology (Canada curriculum), students explore advanced biological concepts including cellular processes, genetics, and physiology with greater depth and detail.",
        whatStudentsLearn: [
          "Advanced cell biology",
          "DNA replication and protein synthesis",
          "Advanced genetics concepts",
          "Human physiology and body systems",
          "Ecology and environmental interactions",
          "Biological processes and systems",
          "Laboratory experiments and analysis",
        ],
        keySkillsDeveloped: [
          "Advanced analytical thinking",
          "Understanding complex biological systems",
          "Data analysis and interpretation",
          "Scientific reasoning",
          "Problem-solving",
        ],
        howWeHelp:
          "We help students understand advanced topics through structured lessons and clear explanations, ensuring strong conceptual understanding and confidence.",
      },
      {
        id: `${countryName.toLowerCase()}-biology-12`,
        title: "Grade 12",
        summary:
          "In Grade 12 Biology, students prepare for college-level studies with advanced topics and exam-focused learning.",
        overview:
          "In Grade 12 Biology, students prepare for college-level studies with advanced topics and exam-focused learning. The emphasis is on mastering complex biological concepts and applying them effectively.",
        whatStudentsLearn: [
          "Advanced genetics and molecular biology",
          "Evolution and biodiversity",
          "Human physiology in depth",
          "Ecology and environmental systems",
          "Biotechnology basics",
          "Research methods and data analysis",
          "Exam-focused problem-solving",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced problem-solving",
          "Analytical reasoning",
          "Research skills",
          "Exam readiness",
        ],
        howWeHelp:
          "We provide structured support and exam-focused preparation to help students master advanced biology concepts and perform confidently in their final assessments.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-biology`,
      name: "Biology",
      shortDescription: `Biology pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: biologyGrades,
    };
  }

  // If subject is a high-school science (Physics, Chemistry, Biology) but there is no
  // country-specific override above, expose only Grade 9-12 entries (high-school range).
  if (["Physics", "Chemistry", "Biology"].includes(subjectName)) {
    const highSchoolIndices = [9, 10, 11, 12];
    const hsGrades = highSchoolIndices.map((gradeIndex) =>
      createGradeContent(countryName, subjectName, gradeIndex)
    );

    return {
      id: `${countryName.toLowerCase()}-${subjectName.toLowerCase().replace(/\s+/g, "-")}`,
      name: subjectName,
      shortDescription: `${subjectName} pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: hsGrades,
    };
  }

  return {
    id: `${countryName.toLowerCase()}-${subjectName.toLowerCase().replace(/\s+/g, "-")}`,
    name: subjectName,
    shortDescription: `${subjectName} pathway tailored to ${countryProfiles[countryName].label} expectations.`,
    grades: gradeSequence.map((_, gradeIndex) =>
      createGradeContent(countryName, subjectName, gradeIndex)
    ),
  };
};

export const syllabusData = Object.keys(countryProfiles).reduce((acc, countryName) => {
  acc[countryName] = {
    ...countryProfiles[countryName],
    subjects: subjectOrder.map((subjectName) => createSubject(countryName, subjectName)),
  };
  return acc;
}, {});

export const countryOrder = Object.keys(countryProfiles);
export const allSubjects = subjectOrder;
