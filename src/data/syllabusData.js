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
      grades: englishGrades,
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
        summary: "In Grade 10, students focus on geometry, trigonometry, and advanced algebra concepts.",
        overview:
          "In Grade 10, students focus on geometry, trigonometry, and advanced algebra concepts.",
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
          "Year 11 continues GCSE Physics with exam-focused revision, past papers and consolidation of key topics for assessment.",
        overview:
          "Year 11 continues GCSE Physics with exam-focused revision, past papers and consolidation of key topics for assessment. Teachers and tutors focus on exam technique and application under timed conditions.",
        whatStudentsLearn: [
          "Revision of forces, energy and electricity",
          "Practice with waves, optics and space physics",
          "Exam technique and past paper strategies",
          "Data interpretation and practical skills",
        ],
        keySkillsDeveloped: [
          "Exam technique",
          "Time management",
          "Accuracy under pressure",
          "Advanced problem-solving",
        ],
        howWeHelp:
          "We focus on past paper practice, targeted revision, and exam strategies to help students achieve their best GCSE grades.",
      },
      {
        id: `${countryName.toLowerCase()}-physics-12`,
        title: "Year 12 (A-Level)",
        summary:
          "A-Level Physics (Year 12) introduces advanced mechanics, electricity, waves and practical skills with strong mathematical application.",
        overview:
          "A-Level Physics (UK curriculum) covers Years 12 and 13 and prepares students for university-level study. It focuses on advanced concepts, mathematical application, and deep understanding of physical laws.",
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
        id: `${countryName.toLowerCase()}-physics-13`,
        title: "Year 13 (A-Level)",
        summary:
          "Year 13 completes the A-Level Physics specification with deeper mathematical work and practical assessment preparation.",
        overview:
          "Year 13 completes the A-Level Physics specification with deeper mathematical work, practical assessment preparation and advanced topic consolidation for university readiness.",
        whatStudentsLearn: [
          "Advanced mechanics and rotational dynamics",
          "In-depth electricity & magnetism",
          "Waves, quantum ideas and optics",
          "Thermal and modern physics",
          "Practical assessments and data analysis",
        ],
        keySkillsDeveloped: [
          "Critical thinking",
          "Advanced analysis",
          "Research and practical skills",
          "Exam readiness and strategy",
        ],
        howWeHelp:
          "We provide advanced support through topic mastery, past paper practice, and step-by-step explanations to prepare students for top A-Level performance.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-physics`,
      name: "Physics",
      shortDescription: `Physics pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: ukPhysicsGrades,
    };
  }

  // UK-specific Chemistry syllabus (GCSE Years 10-11, A-Level Years 12-13)
  if (countryName === "UK" && subjectName === "Chemistry") {
    const ukChemistryGrades = [
      {
        id: `${countryName.toLowerCase()}-chemistry-10`,
        title: "Year 10 (GCSE)",
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
        id: `${countryName.toLowerCase()}-chemistry-11`,
        title: "Year 11 (GCSE)",
        summary:
          "Year 11 continues GCSE Chemistry with consolidation, past paper practice and exam-focused revision.",
        overview:
          "Year 11 continues GCSE Chemistry with consolidation, past paper practice and exam-focused revision to prepare students for assessment.",
        whatStudentsLearn: [
          "Revision of atomic structure and bonding",
          "Practice balancing and quantitative problems",
          "Application of rates and equilibrium concepts",
          "Exam technique and data interpretation",
        ],
        keySkillsDeveloped: [
          "Exam technique",
          "Problem-solving speed",
          "Calculation accuracy",
          "Analytical reasoning",
        ],
        howWeHelp:
          "We support students with targeted revision, past papers and step-by-step problem solving to improve exam performance.",
      },
      {
        id: `${countryName.toLowerCase()}-chemistry-12`,
        title: "Year 12 (A-Level)",
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
      {
        id: `${countryName.toLowerCase()}-chemistry-13`,
        title: "Year 13 (A-Level)",
        summary:
          "Year 13 completes the A-Level Chemistry specification with advanced topics, practical assessment and preparation for university study.",
        overview:
          "Year 13 completes the A-Level Chemistry specification with advanced topics, practical assessment and preparation for university study.",
        whatStudentsLearn: [
          "Advanced organic synthesis and mechanisms",
          "Kinetics and complex equilibrium",
          "Electrochemistry and advanced instrumental techniques",
          "Practical experiment design and data analysis",
        ],
        keySkillsDeveloped: [
          "Research and practical skills",
          "Advanced analysis",
          "Exam readiness",
          "Problem-solving at scale",
        ],
        howWeHelp:
          "We provide intensive A-Level support including past papers, practical preparation and targeted topic mastery to help students achieve top results.",
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
        title: "Year 10 (GCSE)",
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
        id: `${countryName.toLowerCase()}-biology-11`,
        title: "Year 11 (GCSE)",
        summary:
          "Year 11 continues GCSE Biology with exam-focused consolidation and past paper practice.",
        overview:
          "Year 11 continues GCSE Biology with exam-focused consolidation and past paper practice to prepare students for assessments.",
        whatStudentsLearn: [
          "Revision of key biological topics",
          "Practice with exam-style questions",
          "Data interpretation and practical skills",
          "Targeted revision of weak topics",
        ],
        keySkillsDeveloped: [
          "Exam technique",
          "Analytical thinking",
          "Time management",
          "Data analysis",
        ],
        howWeHelp:
          "We focus on past papers, visual learning and targeted revision to help students achieve their best GCSE outcomes.",
      },
      {
        id: `${countryName.toLowerCase()}-biology-12`,
        title: "Year 12 (A-Level)",
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
      {
        id: `${countryName.toLowerCase()}-biology-13`,
        title: "Year 13 (A-Level)",
        summary:
          "Year 13 completes the A-Level Biology specification with deeper analysis, practical assessment and research-focused study.",
        overview:
          "Year 13 completes the A-Level Biology specification with deeper analysis, practical assessment and research-focused study, preparing students for higher education.",
        whatStudentsLearn: [
          "Advanced genetics and molecular biology",
          "Evolution and biodiversity",
          "Human physiology in depth",
          "Practical investigations and data analysis",
        ],
        keySkillsDeveloped: [
          "Research and investigation skills",
          "Advanced analysis",
          "Exam readiness",
          "Independent study skills",
        ],
        howWeHelp:
          "We support students with topic mastery, past paper practice, visual learning and exam-focused preparation to help secure top A-Level grades.",
      },
    ];

    return {
      id: `${countryName.toLowerCase()}-biology`,
      name: "Biology",
      shortDescription: `Biology pathway tailored to ${countryProfiles[countryName].label} expectations.`,
      grades: ukBiologyGrades,
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
